import { afterNextRender, ChangeDetectionStrategy, Component, effect, ElementRef, HostListener, inject, Injector, input, output, signal, viewChild } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
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
  private messageLimit = 20;
  private readonly olderDirection: MessageDirection = 'OLDER';
  private readonly newerDirection: MessageDirection = 'NEWER';

  authState = this.auth.authState;
  messages = signal<ChatRoomMessageResponse[]>([]);
  quotedMessage = signal<ChatRoomMessageResponse | undefined>(undefined);
  focusedMessageId = signal<number | undefined>(undefined);
  isGoingToMessage = signal(false);
  isPageLoaded = signal(false);
  isLoadingOlderMessages = signal(false);
  isLoadingNewerMessages = signal(false);
  isMainLoading = signal(false);
  isSubmitting = signal(false);
  distanceFromEnd = signal(0);
  faArrowDown = faArrowDown;
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

  loadInitialMessages(params?: { scrollOptions?: ScrollIntoViewOptions }) {
    this.olderMessageCursor = undefined;
    this.newerMessageCursor = undefined;
    this.messages.set([]);

    const request = this.messagesRequest({ direction: this.olderDirection });

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
        this.isGoingToMessage.set(true);
        this.scrollToBottom(params?.scrollOptions, () => {
          this.isGoingToMessage.set(false);
        });
      },
      error: (error) => {
        console.error(error);
        this.isPageLoaded.set(true);
        this.isMainLoading.set(false);
      },
    });
  }

  loadMoreMessages(direction: MessageDirection) {    
    switch (direction) {
      case this.olderDirection:
        if (!this.olderMessageCursor) {
          return;
        }
        break;
      case this.newerDirection:
        if (!this.newerMessageCursor) {
          return;
        }
        break;
    }

    const request = this.messagesRequest({ direction });

    if (!request) {
      return;
    }

    this.setLoadingMoreMessages(direction, true);

    request.subscribe({
      next: (messagesPage) => {
        console.log('messagesPage', messagesPage);
        this.setLoadingMoreMessages(direction, false);
        switch (direction) {
          case this.olderDirection:
            const distanceFromBottom = this.getDistanceFromBottom();
            this.messages.update((currentMessages) => [...messagesPage.items].reverse().concat(currentMessages));
            this.restoreDistanceFromBottom(distanceFromBottom);
            break;
          case this.newerDirection:
            this.messages.update((currentMessages) => currentMessages.concat(messagesPage.items));
            break;
        }
      },
      error: (error) => {
        console.error(error);
        this.isPageLoaded.set(true);
        this.setLoadingMoreMessages(direction, false);
      },
    });
  }

  private setLoadingMoreMessages(direction: MessageDirection, loading: boolean) {
    switch (direction) {
      case this.olderDirection:
        this.isLoadingOlderMessages.set(loading);
        break;
      case this.newerDirection:
        this.isLoadingNewerMessages.set(loading);
        break;
    }
  }

  private messagesRequest(paramsOverride?: Partial<MessageQueryParams>) {
    console.log(this.olderMessageCursor);
    
    const getMessagesRequest = this.getMessagesRequest();
    if (!getMessagesRequest) {
      return undefined;
    }
    const direction = paramsOverride?.direction ?? this.olderDirection;
    let cursor: number | undefined;
    switch (direction) {
      case this.olderDirection:
        cursor = this.olderMessageCursor;
        break;
      case this.newerDirection:
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
          case this.olderDirection:
            this.olderMessageCursor = messagesPage.nextCursor ?? undefined;
            break;
          case this.newerDirection:
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
    if (this.scrollToMessage(messageId, () => {
      this.focusMessage(messageId);
    })) {
      return;
    }

    const messageDirectinLimit = this.messageLimit / 2;
    const olderRequest = this.messagesRequest({
      cursor: messageId,
      limit: messageDirectinLimit,
      direction: this.olderDirection,
    });
    const newerRequest = this.messagesRequest({
      cursor: messageId + 1,
      limit: messageDirectinLimit,
      direction: this.newerDirection,
    });

    if (!olderRequest || !newerRequest) {
      return;
    }

    this.isMainLoading.set(true);
    this.isGoingToMessage.set(true);

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
              this.focusMessage(messageId);
              this.isGoingToMessage.set(false);
            });

            if (!isScrollingToMessage) {
              this.isGoingToMessage.set(false);
            }
          });
        }, {
          injector: this.injector,
        });
      },
      error: (error) => {
        console.error(error);
        this.isMainLoading.set(false);
        this.isGoingToMessage.set(false);
      },
    });
  }

  focusMessageInput() {
    this.messageInput()?.nativeElement.focus();
  }

  clearQuotedMessage() {
    this.quotedMessage.set(undefined);
  }

  jumpToBottom() {
    if (this.newerMessageCursor) {
      this.loadInitialMessages({
        scrollOptions: { behavior: 'smooth' },
      });
    } else {
      this.isGoingToMessage.set(true);
      this.scrollToBottom({ behavior: 'smooth' }, () => {
        this.isGoingToMessage.set(false);
      });
    }
  }

  private focusMessage(messageId: number) {
    this.focusedMessageId.set(messageId);
  }

  @HostListener('document:click')
  clearFocusedMessage() {
    this.focusedMessageId.set(undefined);
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  updateEndReachedState() {
    if (!this.platformService.isBrowser()) {
      return;
    }

    const { bottom } = this.elementRef.nativeElement.getBoundingClientRect();
    this.distanceFromEnd.set(bottom - window.innerHeight);
  }

  private scrollToBottom(scrollOptions?: ScrollIntoViewOptions, onComplete?: () => void) {
    afterNextRender(() => {
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

      this.elementRef.nativeElement.scrollIntoView({ block: 'end', ...scrollOptions });
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
