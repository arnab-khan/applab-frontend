import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, Injector, model, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AiMessagePipe } from './pipes/ai-message';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { Auth } from '../../core/services/auth';
import { AiChatMessage } from '../../shared/interfaces/ai';
import { AiApi } from './services/ai-api';
import { AutoResizeTextarea } from '../../shared/directives/auto-resize';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faMinus, faRobot, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ai',
  imports: [FontAwesomeModule, FormsModule, AutoResizeTextarea, RouterLink, AiMessagePipe],
  templateUrl: './ai.html',
  styleUrl: './ai.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block fixed right-0 top-0 z-20 h-dvh min-w-0 max-w-[90vw] flex-[0_0_0px] text-[#f5f3ff] transition-[flex-basis,width] duration-[240ms] ease-[ease] motion-reduce:transition-none lg:sticky lg:right-auto lg:z-auto lg:max-w-none [&_button]:cursor-pointer [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-cyan-300 [&_button:focus-visible]:outline-offset-4 [&_button:disabled]:cursor-not-allowed [&_button:disabled]:opacity-50',
    '[style.width.px]': 'open() ? 390 : 0',
    '[style.flex-basis.px]': 'open() ? 390 : 0',
    '(keydown.escape)': 'closeChat()',
  },
})
export class Ai {
  readonly faRobot = faRobot;
  readonly faMinus = faMinus;
  readonly faXmark = faXmark;
  readonly faPaperPlane = faPaperPlane;
  open = model(false);
  minimized = signal(false);
  draft = signal('');
  messages = signal<AiChatMessage[]>([]);
  sending = signal(false);
  errorMessage = signal('');
  private history: AiChatMessage[] = [];
  private aiApi = inject(AiApi);
  private auth = inject(Auth);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private conversation = viewChild<ElementRef<HTMLDivElement>>('conversation');
  private injector = inject(Injector);
  private launcher = viewChild<ElementRef<HTMLButtonElement>>('launcher');
  private closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');
  private messageInput = viewChild<ElementRef<HTMLTextAreaElement>>('messageInput');
  private autoResize = viewChild(AutoResizeTextarea);

  constructor() {
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
    this.scrollToLatest();
    this.aiApi.chat({
      message,
      currentRoute: this.router.url,
      userType: this.auth.authState().user ? 'LOGGED_IN' : 'GUEST',
      history: this.history,
    }).pipe(
      takeUntilDestroyed(this.destroyRef),
      finalize(() => this.sending.set(false)),
    ).subscribe({
      next: reply => {
        this.messages.update(messages => messages.map((item, index) =>
          index === replyIndex ? { role: 'ASSISTANT', message: reply } : item));
        this.scrollToLatest();
      },
      complete: () => {
        const reply = this.messages()[replyIndex];
        if (reply.message.trim()) {
          this.history = [...this.history, userMessage, reply];
        } else {
          this.errorMessage.set('No reply was received. Please try again.');
          this.draft.set(message);
        }
      },
      error: () => {
        this.errorMessage.set('The reply could not be completed. Please try again.');
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

  private scrollToLatest(): void {
    afterNextRender(() => {
      const element = this.conversation()?.nativeElement;
      if (element) element.scrollTop = element.scrollHeight;
    }, { injector: this.injector });
  }

  openChat(): void {
    this.open.set(true);
    afterNextRender(() => this.closeButton()?.nativeElement.focus(), { injector: this.injector });
  }

  closeChat(): void {
    this.open.set(false);
    this.minimized.set(true);
    afterNextRender(() => this.launcher()?.nativeElement.focus(), { injector: this.injector });
  }
}
