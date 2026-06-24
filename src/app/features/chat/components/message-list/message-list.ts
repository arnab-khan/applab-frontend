import { afterNextRender, ChangeDetectionStrategy, Component, computed, DestroyRef, effect, ElementRef, HostListener, inject, Injector, input, output, signal, untracked, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { forkJoin, Observable, tap } from 'rxjs';
import { Auth } from '../../../../core/services/auth';
import { ChatRoomAddRequest, ChatRoomEditRequest, ChatRoomMessageCursorResponse, ChatRoomMessageResponse, ChatRoomTypingResponse, Message, MessageDirection, MessageQueryParams, QuotedMessageResponse } from '../../../../shared/interfaces/chat';
import { InfiniteScroll } from '../../../../shared/components/data-display/infinite-scroll/infinite-scroll';
import { AnimatedDots } from '../../../../shared/components/icons/animated-dots/animated-dots';
import { Platform } from '../../../../shared/services/platform';
import { getAuthorDisplayName } from '../../../../shared/utils/author';
import { scrollIntoView } from '../../../../shared/utils/scroll';
import { ChatMessage } from '../../services/chat-message';
import { ChatState } from '../../services/chat-state';
import { MessageInput } from '../message-input/message-input';
import { MessageItem } from '../message-item/message-item';

@Component({
  selector: 'app-message-list',
  imports: [FontAwesomeModule, MessageInput, MessageItem, InfiniteScroll, AnimatedDots],
  templateUrl: './message-list.html',
  styleUrl: './message-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageList {
  private chatState = inject(ChatState);
  private chatMessage = inject(ChatMessage);
  private auth = inject(Auth);
  private platformService = inject(Platform);
  private elementRef = inject(ElementRef<HTMLElement>);
  private injector = inject(Injector);
  private destroyRef = inject(DestroyRef);
  private messageInput = viewChild(MessageInput);
  private hasRequestedInitialMessages = false;
  private authUserId?: number | null;
  private olderMessageCursor?: number;
  private newerMessageCursor?: number;
  private messageLimit = 20;
  private readonly olderDirection: MessageDirection = 'OLDER';
  private readonly newerDirection: MessageDirection = 'NEWER';

  authState = this.auth.authState;
  messages = signal<ChatRoomMessageResponse[]>([]);
  quotedMessage = signal<QuotedMessageResponse | undefined>(undefined);
  focusedMessageId = signal<number | undefined>(undefined);
  isGoingToMessage = signal(false);
  isPageLoaded = signal(false);
  isLoadingOlderMessages = signal(false);
  isLoadingNewerMessages = signal(false);
  isMainLoading = signal(true);
  distanceFromEnd = signal(0);
  isAwayFromEnd = signal(false);
  typingUsers = computed(() => this.chatState.typingUsers().filter((typingUser) => typingUser.chatRoomId === this.chatRoomId()));
  faArrowDown = faArrowDown;
  chatRoomId = input.required<number>();
  getMessagesRequest = input<(params: MessageQueryParams) => Observable<ChatRoomMessageCursorResponse>>();
  addMessageRequest = input.required<(body: ChatRoomAddRequest) => Observable<Message>>();
  editMessageRequest = input.required<(body: ChatRoomEditRequest) => Observable<Message>>();
  deleteMessageRequest = input.required<(messageId: number) => Observable<void>>();
  isLiveMessageAllowed = input<(message: ChatRoomMessageResponse) => boolean>(() => true);
  applyCurrentUserStyle = input(false);
  addReactionRequest = output<{ messageId: number; emoji: string; onComplete: () => void; onError: () => void }>();

  constructor() {
    effect(() => {
      if (!this.platformService.isBrowser()) {
        return;
      }

      const state = this.authState();
      if (!state.completed || !this.getMessagesRequest()) {
        return;
      }

      const authUserId = state.user?.id ?? null;

      if (!this.hasRequestedInitialMessages) {
        this.hasRequestedInitialMessages = true;
        this.authUserId = authUserId;
        this.loadInitialMessages();
        return;
      }

      // Reload messages when auth changes so user-specific fields like myReaction are refreshed.
      if (this.authUserId !== authUserId) {
        this.authUserId = authUserId;
        this.loadInitialMessages();
      }
    });

    effect(() => {
      const liveMessage = this.chatState.liveMessage();

      if (!liveMessage) {
        return;
      }

      const message = liveMessage.message;
      const isMessageAdd = liveMessage.action === 'ADD';
      const shouldScrollToBottom = untracked(() => isMessageAdd && (!this.isAwayFromEnd() || this.chatMessage.isCurrentUserAuthor(message.author)));

      this.messages.update((messages) => {
        // Ignore live messages that do not belong in this list.
        if (!this.isLiveMessageAllowed()(message)) {
          return messages;
        }

        if (isMessageAdd) {
          // Do not append new messages if there are newer unloaded messages.
          if (this.newerMessageCursor) {
            return messages;
          }

          // Append new live messages only when this list is already at the newest end.
          return [...messages, message];
        } else {
          // Apply updates only to messages that are already loaded.
          if (messages.some((item) => item.message.id === message.message.id)) {
            return messages.map((item) => item.message.id === message.message.id ? {
              ...item,
              ...message,
              message: {
                ...item.message,
                ...message.message,
              },
            } : item);
          }

          return messages;
        }
      });

      if (shouldScrollToBottom) {
        this.jumpToBottom();
      }
    });

  }

  loadInitialMessages(params?: { scrollOptions?: ScrollIntoViewOptions }) {
    this.olderMessageCursor = undefined;
    this.newerMessageCursor = undefined;
    this.messages.set([]);
    this.chatState.liveMessage.set(null);

    const request = this.messagesRequest({ direction: this.olderDirection });

    if (!request) {
      return;
    }

    this.isMainLoading.set(true);

    request.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: (messagesPage) => {
        console.log('messagesPage', messagesPage);
        const messages = [...messagesPage.items].reverse();
        this.messages.update((currentMessages) => messages.concat(currentMessages));
        this.isPageLoaded.set(true);
        this.isMainLoading.set(false);
        this.isGoingToMessage.set(true);
        this.scrollToBottom({
          scrollOptions: params?.scrollOptions,
          onComplete: () => {
            this.isGoingToMessage.set(false);
          },
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

    request.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
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

  addReaction(request: { messageId: number; emoji: string; onComplete: () => void; onError: () => void }) {
    this.addReactionRequest.emit(request);
  }

  typingUsersText(typingUsers: ChatRoomTypingResponse[]) {
    const names = typingUsers.map((typingUser) => getAuthorDisplayName(typingUser.author));

    if (names.length === 1) {
      return `${names[0]} is typing...`;
    }

    if (names.length === 2) {
      return `${names[0]} and ${names[1]} are typing...`;
    }

    return `${names[0]}, ${names[1]} and ${names.length - 2} others are typing...`;
  }

  quoteReply(message: ChatRoomMessageResponse) {
    this.quotedMessage.set({
      message: message.message,
      author: message.author,
    });
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

    forkJoin([olderRequest, newerRequest]).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: ([olderMessagesPage, newerMessagesPage]) => {
        const olderMessages = [...olderMessagesPage.items].reverse();
        const newerMessages = newerMessagesPage.items;
        const allMessages = [...olderMessages, ...newerMessages];
        this.messages.set(allMessages);
        this.isMainLoading.set(false);
        if (this.destroyRef.destroyed) {
          return;
        }

        afterNextRender(() => {
          if (this.destroyRef.destroyed) {
            return;
          }

          this.scrollToBottom();
          setTimeout(() => {
            if (this.destroyRef.destroyed) {
              return;
            }

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
    this.messageInput()?.focusMessageInput();
  }

  jumpToBottom() {
    if (this.newerMessageCursor) {
      this.loadInitialMessages({
        scrollOptions: { behavior: 'smooth' },
      });
    } else {
      this.isGoingToMessage.set(true);
      this.scrollToBottom({
        scrollOptions: { behavior: 'smooth' },
        onComplete: () => {
          this.isGoingToMessage.set(false);
        },
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
    const distanceFromEnd = bottom - window.innerHeight;
    this.distanceFromEnd.set(distanceFromEnd);
    this.isAwayFromEnd.set(distanceFromEnd > 100);
  }

  private scrollToBottom(params?: { scrollOptions?: ScrollIntoViewOptions; onComplete?: () => void }) {
    if (this.destroyRef.destroyed) {
      return;
    }

    afterNextRender(() => {
      if (this.destroyRef.destroyed) {
        return;
      }

      scrollIntoView({
        element: this.elementRef.nativeElement,
        scrollOptions: { block: 'end', ...params?.scrollOptions },
        onComplete: params?.onComplete,
      });
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

    scrollIntoView({
      element: messageElement,
      scrollOptions: {
        block: 'center',
        behavior: 'smooth',
      },
      onComplete,
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

    if (this.destroyRef.destroyed) {
      return;
    }

    afterNextRender(() => {
      if (this.destroyRef.destroyed) {
        return;
      }

      window.scrollTo({
        top: document.documentElement.scrollHeight - distanceFromBottom,
      });
    }, {
      injector: this.injector,
    });
  }

}
