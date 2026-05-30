import { afterNextRender, ChangeDetectionStrategy, Component, effect, ElementRef, inject, Injector, input, output, signal, viewChild } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Auth } from '../../../../core/services/auth';
import { AuthAction } from '../../../auth/components/auth-action/auth-action';
import { ChatRoomMessageCursorResponse, ChatRoomMessageResponse, ChatRoomRequest, Message, MessageQueryParams } from '../../../../shared/interfaces/chat';
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
  private messageCursor?: number;
  private messageLimit = 10;

  authState = this.auth.authState;
  messages = signal<ChatRoomMessageResponse[]>([]);
  quotedMessage = signal<ChatRoomMessageResponse | undefined>(undefined);
  isPageLoaded = signal(false);
  isLoadingMoreMessages = signal(false);
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
        this.getMessages();
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

  getMessages() {
    const getMessagesRequest = this.getMessagesRequest();

    if (!getMessagesRequest) {
      return;
    }

    const request = getMessagesRequest({
      cursor: this.messageCursor,
      limit: this.messageLimit,
    });

    if (!request) {
      return;
    }

    const isInitialLoad = !this.isPageLoaded();
    this.isLoadingMoreMessages.set(true);

    request.subscribe({
      next: (messagesPage) => {
        console.log('messagesPage', messagesPage);
        this.messageCursor = messagesPage.nextCursor ?? undefined;
        const messages = [...messagesPage.items].reverse();
        const distanceFromBottom = isInitialLoad ? undefined : this.getDistanceFromBottom();
        this.messages.update((currentMessages) => messages.concat(currentMessages));
        this.isPageLoaded.set(true);

        this.isLoadingMoreMessages.set(false);

        if (isInitialLoad) {
          this.scrollToBottom();
        } else {
          this.restoreDistanceFromBottom(distanceFromBottom);
        }
      },
      error: (error) => {
        console.error(error);
        this.isPageLoaded.set(true);
        this.isLoadingMoreMessages.set(false);
      },
    });
  }

  loadMoreMessages() {
    if (!this.messageCursor) {
      return;
    }

    this.getMessages();
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
