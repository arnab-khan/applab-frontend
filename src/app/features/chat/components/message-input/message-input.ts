import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, ElementRef, forwardRef, inject, input, output, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, throttleTime } from 'rxjs';
import { AuthAction } from '../../../auth/components/auth-action/auth-action';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { AutoResizeTextarea } from '../../../../shared/directives/auto-resize';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { ChatRoomAddRequest, ChatRoomEditRequest, Message, QuotedMessageResponse } from '../../../../shared/interfaces/chat';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { ChatWebsocket } from '../../services/chat-websocket';
import { MessageItem } from '../message-item/message-item';

const MESSAGE_MAX_LENGTH = 255;
const TYPING_THROTTLE_TIME = 500;

@Component({
  selector: 'app-message-input',
  imports: [NgClass, ReactiveFormsModule, AuthAction, FontAwesomeModule, SanitizeInput, LoadingButton, AutoResizeTextarea, forwardRef(() => MessageItem)],
  templateUrl: './message-input.html',
  styleUrl: './message-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageInput {
  private formBuilder = inject(NonNullableFormBuilder);
  private destroyRef = inject(DestroyRef);
  private snackBar = inject(MatSnackBar);
  private chatWebsocket = inject(ChatWebsocket);
  private messageInput = viewChild<ElementRef<HTMLTextAreaElement>>('messageInput');

  chatRoomId = input.required<number>();
  addMessageRequest = input.required<(body: ChatRoomAddRequest) => Observable<Message>>();
  editMessageRequest = input.required<(body: ChatRoomEditRequest) => Observable<Message>>();
  quotedMessage = input<QuotedMessageResponse | undefined>(undefined);
  message = input<Message | undefined>(undefined);
  roundedClass = input('rounded-xl');

  goToMessageRequest = output<number>();
  submitSuccess = output<void>();

  isSubmitting = signal(false);
  currentQuotedMessage = signal<QuotedMessageResponse | undefined>(undefined);
  currentContent = signal('');
  private typingSubject = new Subject<void>();

  messageId = computed(() => this.message()?.id);
  activeQuotedMessage = computed(() => this.currentQuotedMessage());
  quotedMessageId = computed(() => this.currentQuotedMessage()?.message.id);
  isEditUnchanged = computed(() => !!this.message() && this.currentContent().trim() === (this.message()?.content || '').trim());

  faPaperPlane = faPaperPlane;
  faXmark = faXmark;
  messageMaxLength = MESSAGE_MAX_LENGTH;

  messageForm: FormGroup<{
    content: FormControl<string>;
  }> = this.formBuilder.group({
    content: [
      '',
      [
        commonFormValidator({
          required: true,
          maxLength: MESSAGE_MAX_LENGTH,
        }),
      ],
    ],
  });

  constructor() {
    this.messageForm.controls.content.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((content) => {
      this.currentContent.set(content);
    });

    this.typingSubject.pipe(
      throttleTime(TYPING_THROTTLE_TIME),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => {
      this.chatWebsocket.sendChatRoomTyping(this.chatRoomId());
    });

    effect(() => {
      const content = this.message()?.content || '';
      this.messageForm.controls.content.setValue(content);
      this.currentContent.set(content);
    });

    effect(() => {
      this.currentQuotedMessage.set(this.quotedMessage());
    });
  }

  onSubmit() {
    if (this.messageForm.invalid || this.isEditUnchanged()) {
      return;
    }

    const message = this.message();
    const messageId = this.messageId();
    const quotedMessageId = this.quotedMessageId();
    const removeQuotedMessage = !!message?.quotedMessageId && !quotedMessageId;
    const content = this.messageForm.controls.content.value.trim();
    const commonBody: Pick<ChatRoomAddRequest & ChatRoomEditRequest, 'content'> = {
      content,
    };
    let request: Observable<Message>;
    if (message && messageId) {
      const body: ChatRoomEditRequest = {
        ...commonBody,
        id: messageId,
        ...(removeQuotedMessage && { removeQuotedMessage }),
      };
      request = this.editMessageRequest()(body);
    } else {
      const body: ChatRoomAddRequest = {
        ...commonBody,
        ...(quotedMessageId && { quotedMessageId }),
      };
      request = this.addMessageRequest()(body);
    }

    this.isSubmitting.set(true);
    request.subscribe({
      next: () => {
        this.messageForm.reset();
        this.currentQuotedMessage.set(undefined);
        this.submitSuccess.emit();
        this.isSubmitting.set(false);
      },
      error: (error) => {
        console.error(error);
        const message = error.error?.message || error.message || 'Failed to save message. Please try again.';
        this.snackBar.open(message, '✖', { duration: 3000, panelClass: 'snackbar-error' });
        this.isSubmitting.set(false);
      },
    });
  }

  onMessageInputEnter(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.shiftKey) {
      return;
    }

    keyboardEvent.preventDefault();
    this.onSubmit();
  }

  onMessageInput() {
    if (this.message() || !this.messageForm.controls.content.value.trim()) {
      return;
    }
    this.typingSubject.next();
  }

  focusMessageInput() {
    this.messageInput()?.nativeElement.focus();
  }

  clearQuotedMessage() {
    this.currentQuotedMessage.set(undefined);
  }

  goToMessage(messageId: number) {
    this.goToMessageRequest.emit(messageId);
  }
}
