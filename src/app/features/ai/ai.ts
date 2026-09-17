import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, effect, ElementRef, inject, Injector, signal, viewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { AiMessagePipe } from './pipes/ai-message';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { AiChatMessage } from '../../shared/interfaces/ai';
import { AiApi, AiStreamError } from './services/ai-api';
import { AutoResizeTextarea } from '../../shared/directives/auto-resize';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faRobot, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AiState } from './services/ai-state';

@Component({
  selector: 'app-ai',
  imports: [FontAwesomeModule, FormsModule, AutoResizeTextarea, RouterLink, AiMessagePipe],
  templateUrl: './ai.html',
  styleUrl: './ai.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'contents',
  },
})
export class Ai {
  readonly faRobot = faRobot;
  readonly faXmark = faXmark;
  readonly faPaperPlane = faPaperPlane;
  readonly aiState = inject(AiState);
  readonly open = this.aiState.open;
  draft = signal('');
  messages = signal<AiChatMessage[]>([]);
  sending = signal(false);
  replyStatus = signal('');
  errorMessage = signal('');
  readonly replyStatuses = [
    { afterSeconds: 0, text: 'Thinking…' },
    { afterSeconds: 1.5, text: 'Starting your response…' },
    { afterSeconds: 3, text: 'Reviewing the app context…' },
    { afterSeconds: 6, text: 'Preparing your answer…' },
    { afterSeconds: 9, text: 'Working through the details…' },
    { afterSeconds: 12, text: 'Almost there…' },
    { afterSeconds: 15, text: 'This is taking longer than usual…' },
    { afterSeconds: 20, text: 'A slow network may delay the reply. Please check your connection…' },
    { afterSeconds: 25, text: 'The free AI model may take a little longer to respond…' },
    { afterSeconds: 30, text: 'Still working on your answer — thanks for your patience…' },
  ];
  private history = '';
  private replyStatusTimers: ReturnType<typeof setTimeout>[] = [];
  private readonly aiSessionId = crypto.randomUUID();
  private aiApi = inject(AiApi);
  private router = inject(Router);
  private document = inject(DOCUMENT);
  private destroyRef = inject(DestroyRef);
  private conversation = viewChild<ElementRef<HTMLDivElement>>('conversation');
  private injector = inject(Injector);
  private messageInput = viewChild<ElementRef<HTMLTextAreaElement>>('messageInput');
  private autoResize = viewChild(AutoResizeTextarea);

  constructor() {
    effect(() => {
      if (this.open()) {
        afterNextRender(() => this.messageInput()?.nativeElement.focus(), { injector: this.injector });
      }
    });

    afterNextRender(() => {
      const input = this.messageInput()?.nativeElement;
      if (!input) return;

      let previousWidth = 0;
      const observer = new ResizeObserver(([entry]) => {
        const width = entry.contentRect.width;
        if (width > 0 && width !== previousWidth) {
          previousWidth = width;
          this.autoResize()?.onInput();
        }
      });
      observer.observe(input);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  sendMessage(): void {
    const message = this.draft().trim();
    if (!message || this.sending()) return;

    const userMessage: AiChatMessage = { role: 'USER', message };
    this.messages.update(messages => [...messages, userMessage, { role: 'ASSISTANT', message: '' }]);
    const replyIndex = this.messages().length - 1;
    this.draft.set('');
    this.errorMessage.set('');
    this.sending.set(true);
    this.startReplyStatuses();
    this.scrollToLatest();
    this.aiApi.chat({
      aiSessionId: this.aiSessionId,
      message,
      currentRoute: this.getAiCurrentRoute(),
      history: this.history,
    }).pipe(
      takeUntilDestroyed(this.destroyRef),
      finalize(() => {
        this.sending.set(false);
        this.clearReplyStatuses();
      }),
    ).subscribe({
      next: reply => {
        if (reply.history !== undefined) this.history = reply.history;
        if (reply.message && this.replyStatus() !== 'Responding…') {
          this.clearReplyStatuses();
          this.replyStatus.set('Responding…');
        }
        this.messages.update(messages => messages.map((item, index) =>
          index === replyIndex ? { role: 'ASSISTANT', message: reply.message } : item));
        this.scrollToLatest();
      },
      complete: () => {
        const reply = this.messages()[replyIndex];
        if (!reply.message.trim()) {
          this.errorMessage.set('No reply was received. Please try again.');
          this.draft.set(message);
        }
      },
      error: (error: unknown) => {
        this.errorMessage.set(this.getErrorMessage(error));
        this.draft.set(message);
      },
    });
  }

  onMessageKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private getErrorMessage(error: unknown): string {
    const fallback = 'The reply could not be completed. Please try again.';
    if (error instanceof AiStreamError) return error.message;
    if (!(error instanceof HttpErrorResponse)) return fallback;
    if (error.status === 0) return 'Unable to reach the server. Check your connection and try again.';

    let body = error.error;
    // This request uses responseType: 'text', so JSON errors may arrive as strings.
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return body.trim() || fallback;
      }
    }
    return [body?.message, body?.error, body].find(
      value => typeof value === 'string' && value.trim().length > 0,
    ) || fallback;
  }

  private getAiCurrentRoute(): string {
    const route = this.router.url.split(/[?#]/)[0];
    const purpose = this.router.parseUrl(this.router.url).queryParams['purpose'];
    const allowedPurposes = new Set(['SIGNUP', 'EDIT_PROFILE', 'FORGOT_PASSWORD', 'CHANGE_EMAIL']);

    return typeof purpose === 'string' && allowedPurposes.has(purpose)
      ? `${route}?purpose=${encodeURIComponent(purpose)}`
      : route;
  }

  private scrollToLatest(): void {
    afterNextRender(() => {
      const element = this.conversation()?.nativeElement;
      if (element) element.scrollTop = element.scrollHeight;
    }, { injector: this.injector });
  }

  private startReplyStatuses(): void {
    this.clearReplyStatuses();
    this.replyStatus.set(this.replyStatuses[0].text);
    this.replyStatusTimers = this.replyStatuses.slice(1).map(status => setTimeout(
      () => this.replyStatus.set(status.text),
      status.afterSeconds * 1000,
    ));
  }

  private clearReplyStatuses(): void {
    this.replyStatusTimers.forEach(timer => clearTimeout(timer));
    this.replyStatusTimers = [];
    this.replyStatus.set('');
  }

  closeChat(): void {
    this.aiState.closeChat();
    this.aiState.minimized.set(true);
    afterNextRender(() => this.aiState.focusLauncher(), { injector: this.injector });
  }

  closeChatOnSmallScreen(): void {
    if (this.document.defaultView?.matchMedia('(max-width: 79.999rem)').matches) {
      this.closeChat();
    }
  }
}
