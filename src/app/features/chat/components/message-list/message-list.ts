import { afterNextRender, ChangeDetectionStrategy, Component, effect, ElementRef, inject, Injector, input, output, signal, viewChild } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { forkJoin, Observable, tap } from 'rxjs';
import { Auth } from '../../../../core/services/auth';
import { AuthAction } from '../../../auth/components/auth-action/auth-action';
import { ChatRoomMessageCursorResponse, ChatRoomMessageResponse, ChatRoomRequest, Message, MessageDirection, MessageQueryParams } from '../../../../shared/interfaces/chat';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { InfiniteScroll } from '../../../../shared/components/data-display/infinite-scroll/infinite-scroll';
import { AutoResizeTextarea } from '../../../../shared/directives/auto-resize';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { Platform } from '../../../../shared/services/platform';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { ChatState } from '../../services/chat-state';
import { MessageItem } from '../message-item/message-item';

@Component({
  selector: 'app-message-list',
  imports: [ReactiveFormsModule, AuthAction, FontAwesomeModule, SanitizeInput, LoadingButton, AutoResizeTextarea, MessageItem, InfiniteScroll],
  templateUrl: './message-list.html',
  styleUrl: './message-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageList {
  private chatState = inject(ChatState);
  private auth = inject(Auth);
  private platformService = inject(Platform);
  private formBuilder = inject(NonNullableFormBuilder);
  private elementRef = inject(ElementRef<HTMLElement>);
  private injector = inject(Injector);
  private messageInput = viewChild<ElementRef<HTMLTextAreaElement>>('messageInput');
  private hasRequestedInitialMessages = false;
  private olderMessageCursor?: number;
  private newerMessageCursor?: number;
  private messageLimit = 10;
  private isGoingToMessage = false;

  authState = this.auth.authState;
  messages = signal<ChatRoomMessageResponse[]>([]);
  quotedMessage = signal<ChatRoomMessageResponse | undefined>(undefined);
  isPageLoaded = signal(false);
  isLoadingMoreMessages = signal(false);
  isMainLoading = signal(false);
  isSubmitting = signal(false);
  faPaperPlane = faPaperPlane;
  getMessagesRequest = input<(params: MessageQueryParams) => Observable<ChatRoomMessageCursorResponse>>();
  addMessageRequest = input.required<(body: ChatRoomRequest) => Observable<Message>>();
  isLiveMessageAllowed = input<(message: ChatRoomMessageResponse) => boolean>(() => true);
  addReactionRequest = output<{ messageId: number; emoji: string; onComplete: () => void; onError: () => void }>();
  messageForm!: FormGroup<{
    content: FormControl<string>;
  }>;

  constructor() {
    this.createForm();

    effect(() => {
      if (!this.platformService.isBrowser()) {
        return;
      }

      const state = this.authState();
      if (state.completed && this.getMessagesRequest() && !this.hasRequestedInitialMessages) {
        this.hasRequestedInitialMessages = true;
        this.loadInitialMessages();
      }
    });

    effect(() => {
      const message = this.chatState.liveMessage();

      if (!message) {
        return;
      }

      this.messages.update((messages) => {
        if (!this.isLiveMessageAllowed()(message) || messages.some((item) => item.message.id === message.message.id)) {
          return messages;
        }

        return [...messages, message];
      });
    });

  }

  loadInitialMessages() {
    const request = this.messagesRequest();

    if (!request) {
      return;
    }

    this.isMainLoading.set(true);

    request.subscribe({
      next: (messagesPage) => {
        console.log('messagesPage', messagesPage);
        const messages = [...messagesPage.items].reverse();
        this.messages.update((currentMessages) => messages.concat(currentMessages));
        this.isPageLoaded.set(true);
        this.isMainLoading.set(false);
        this.scrollToBottom();
      },
      error: (error) => {
        console.error(error);
        this.isPageLoaded.set(true);
        this.isMainLoading.set(false);
      },
    });
  }

  loadMoreMessages(direction: MessageDirection) {
    if (this.isGoingToMessage) {
      return;
    }

    switch (direction) {
      case 'OLDER':
        if (!this.olderMessageCursor) {
          return;
        }
        break;
      case 'NEWER':
        if (!this.newerMessageCursor) {
          return;
        }
        break;
    }

    const request = this.messagesRequest({ direction });

    if (!request) {
      return;
    }

    this.isLoadingMoreMessages.set(true);

    request.subscribe({
      next: (messagesPage) => {
        console.log('messagesPage', messagesPage);
        this.isLoadingMoreMessages.set(false);
        switch (direction) {
          case 'OLDER':
            const distanceFromBottom = this.getDistanceFromBottom();
            this.messages.update((currentMessages) => [...messagesPage.items].reverse().concat(currentMessages));
            this.restoreDistanceFromBottom(distanceFromBottom);
            break;
          case 'NEWER':
            this.messages.update((currentMessages) => currentMessages.concat(messagesPage.items));
            break;
        }
      },
      error: (error) => {
        console.error(error);
        this.isPageLoaded.set(true);
        this.isLoadingMoreMessages.set(false);
      },
    });
  }

  private messagesRequest(paramsOverride?: Partial<MessageQueryParams>) {
    const getMessagesRequest = this.getMessagesRequest();
    if (!getMessagesRequest) {
      return undefined;
    }
    const direction = paramsOverride?.direction ?? 'OLDER';
    let cursor: number | undefined;
    switch (direction) {
      case 'OLDER':
        cursor = this.olderMessageCursor;
        break;
      case 'NEWER':
        cursor = this.newerMessageCursor;
        break;
    }

    const params = {
      cursor,
      limit: this.messageLimit,
      direction,
      ...paramsOverride,
    };

    const request = getMessagesRequest(params);

    if (!request) {
      return undefined;
    }

    return request.pipe(
      tap((messagesPage) => {
        switch (params.direction) {
          case 'OLDER':
            this.olderMessageCursor = messagesPage.nextCursor ?? undefined;
            break;
          case 'NEWER':
            this.newerMessageCursor = messagesPage.nextCursor ?? undefined;
            break;
        }
      }),
    );
  }

  createForm() {
    this.messageForm = this.formBuilder.group({
      content: [
        '',
        [
          commonFormValidator({
            required: true,
            maxLength: 500,
          }),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.messageForm.invalid) {
      return;
    }

    this.isSubmitting.set(true);
    this.addMessageRequest()({
      content: this.messageForm.controls.content.value,
      quotedMessageId: this.quotedMessage()?.message.id,
    }).subscribe({
      next: () => {
        this.messageForm.reset();
        this.quotedMessage.set(undefined);
        this.isSubmitting.set(false);
      },
      error: (error) => {
        console.error(error);
        this.isSubmitting.set(false);
      },
    });
  }

  addReaction(request: { messageId: number; emoji: string; onComplete: () => void; onError: () => void }) {
    this.addReactionRequest.emit(request);
  }

  quoteReply(message: ChatRoomMessageResponse) {
    this.quotedMessage.set(message);
    this.focusMessageInput();
  }

  goToMessage(messageId: number) {
    if (this.scrollToMessage(messageId)) {
      return;
    }

    const olderDirection: MessageDirection = 'OLDER';
    const newerDirection: MessageDirection = 'NEWER';
    const messageDirectinLimit = this.messageLimit / 2;
    const olderRequest = this.messagesRequest({
      cursor: messageId + 1,
      limit: messageDirectinLimit,
      direction: olderDirection,
    });
    const newerRequest = this.messagesRequest({
      cursor: messageId,
      limit: messageDirectinLimit,
      direction: newerDirection,
    });

    if (!olderRequest || !newerRequest) {
      return;
    }

    this.isMainLoading.set(true);
    this.isGoingToMessage = true;

    forkJoin([olderRequest, newerRequest]).subscribe({
      next: ([olderMessagesPage, newerMessagesPage]) => {
        const olderMessages = [...olderMessagesPage.items].reverse();
        const newerMessages = newerMessagesPage.items;
        const allMessages = [...olderMessages, ...newerMessages];
        this.messages.set(allMessages);
        this.isMainLoading.set(false);
        afterNextRender(() => {
          this.scrollToBottom();
          setTimeout(() => {
            const isScrollingToMessage = this.scrollToMessage(messageId, () => {
              this.isGoingToMessage = false;
            });

            if (!isScrollingToMessage) {
              this.isGoingToMessage = false;
            }
          });
        }, {
          injector: this.injector,
        });
      },
      error: (error) => {
        console.error(error);
        this.isMainLoading.set(false);
        this.isGoingToMessage = false;
      },
    });
  }

  focusMessageInput() {
    this.messageInput()?.nativeElement.focus();
  }

  clearQuotedMessage() {
    this.quotedMessage.set(undefined);
  }

  private scrollToBottom() {
    afterNextRender(() => {
      this.elementRef.nativeElement.scrollIntoView({ block: 'end' });
    }, {
      injector: this.injector,
    });
  }

  private scrollToMessage(messageId: number, onComplete?: () => void) {
    const messageElement = this.elementRef.nativeElement.querySelector(
      `[data-message-id="${messageId}"]`,
    ) as HTMLElement | null;

    if (!messageElement) {
      return false;
    }

    if (onComplete) {
      let completed = false;
      const complete = () => {
        if (completed) {
          return;
        }

        completed = true;
        window.removeEventListener('scrollend', complete);
        onComplete();
      };

      window.addEventListener('scrollend', complete, { once: true });
      setTimeout(complete, 600);
    }

    messageElement.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });

    return true;
  }

  private getDistanceFromBottom() {
    return document.documentElement.scrollHeight - window.scrollY;
  }

  private restoreDistanceFromBottom(distanceFromBottom?: number) {
    if (distanceFromBottom === undefined) {
      return;
    }

    afterNextRender(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight - distanceFromBottom,
      });
    }, {
      injector: this.injector,
    });
  }

}
