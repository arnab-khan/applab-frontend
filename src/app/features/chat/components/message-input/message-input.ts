import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { AuthAction } from '../../../auth/components/auth-action/auth-action';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { AutoResizeTextarea } from '../../../../shared/directives/auto-resize';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { Message, QuotedMessageResponse } from '../../../../shared/interfaces/chat';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { ChatApi } from '../../services/chat-api';

@Component({
  selector: 'app-message-input',
  imports: [NgClass, ReactiveFormsModule, AuthAction, FontAwesomeModule, SanitizeInput, LoadingButton, AutoResizeTextarea],
  templateUrl: './message-input.html',
  styleUrl: './message-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageInput {
  private formBuilder = inject(NonNullableFormBuilder);
  private messageInput = viewChild<ElementRef<HTMLTextAreaElement>>('messageInput');
  private chatApi = inject(ChatApi);

  chatRoomId = input.required<number>();
  quotedMessage = input<QuotedMessageResponse | undefined>(undefined);
  message = input<Message | undefined>(undefined);
  roundedClass = input('rounded-xl');

  goToMessageRequest = output<number>();
  submitSuccess = output<void>();

  isSubmitting = signal(false);
  currentQuotedMessage = signal<QuotedMessageResponse | undefined>(undefined);

  messageId = computed(() => this.message()?.id);
  activeQuotedMessage = computed(() => this.currentQuotedMessage());
  quotedMessageId = computed(() => this.currentQuotedMessage()?.message.id);

  faPaperPlane = faPaperPlane;

  messageForm: FormGroup<{
    content: FormControl<string>;
  }> = this.formBuilder.group({
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

  constructor() {
    effect(() => {
      this.messageForm.controls.content.setValue(this.message()?.content || '');
    });

    effect(() => {
      this.currentQuotedMessage.set(this.quotedMessage());
    });
  }

  onSubmit() {
    if (this.messageForm.invalid) {
      return;
    }

    const message = this.message();
    const messageId = this.messageId();
    const quotedMessageId = this.quotedMessageId();
    const body = {
      content: this.messageForm.controls.content.value,
      ...(messageId && { id:messageId }),
      ...(quotedMessageId && { quotedMessageId }),
    };

    const request: Observable<Message> = message
      ? this.chatApi.editChatRoomMessage(this.chatRoomId(), body)
      : this.chatApi.addChatRoomMessage(this.chatRoomId(), body);

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
        this.isSubmitting.set(false);
      },
    });
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
