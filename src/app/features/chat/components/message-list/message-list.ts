import { Component, effect, inject, input, signal } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Auth } from '../../../../core/services/auth';
import { ChatRoomMessageCursorResponse, ChatRoomMessageResponse, ChatRoomRequest, Message } from '../../../../shared/interfaces/chat';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { AutoResizeTextarea } from '../../../../shared/directives/auto-resize';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { Platform } from '../../../../shared/services/platform';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { ChatState } from '../../services/chat-state';
import { MessageItem } from '../message-item/message-item';

@Component({
  selector: 'app-message-list',
  imports: [ReactiveFormsModule, FontAwesomeModule, SanitizeInput, LoadingButton, AutoResizeTextarea, MessageItem],
  templateUrl: './message-list.html',
  styleUrl: './message-list.scss',
})
export class MessageList {
  private chatState = inject(ChatState);
  private auth = inject(Auth);
  private platformService = inject(Platform);
  private formBuilder = inject(NonNullableFormBuilder);

  authState = this.auth.authState;
  messagesPage = signal<ChatRoomMessageCursorResponse | undefined>(undefined);
  messages = signal<ChatRoomMessageResponse[]>([]);
  isPageLoaded = signal(false);
  isSubmitting = signal(false);
  faPaperPlane = faPaperPlane;
  getMessagesRequest = input.required<() => Observable<ChatRoomMessageCursorResponse>>();
  addMessageRequest = input.required<(body: ChatRoomRequest) => Observable<Message>>();
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
      if (state.completed) {
        this.getMessages();
      }
    });
  }

  getMessages() {
    this.getMessagesRequest()().subscribe({
      next: (messagesPage) => {
        console.log('messagesPage', messagesPage);
        this.messagesPage.set(messagesPage);
        this.messages.set([...messagesPage.items].reverse());
        this.chatState.messageCount.set(messagesPage.items.length);
        this.isPageLoaded.set(true);
      },
      error: (error) => {
        console.error(error);
        this.isPageLoaded.set(true);
      },
    });
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
    }).subscribe({
      next: () => {
        this.messageForm.reset();
        this.isSubmitting.set(false);
        this.getMessages();
      },
      error: (error) => {
        console.error(error);
        this.isSubmitting.set(false);
      },
    });
  }
}
