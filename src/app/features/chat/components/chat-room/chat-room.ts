import { Component, inject, input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, finalize } from 'rxjs';
import { ChatRoomMessageResponse } from '../../../../shared/interfaces/chat';
import { ChatApi } from '../../services/chat-api';
import { MessageList } from '../message-list/message-list';

@Component({
  selector: 'app-chat-room',
  imports: [MessageList],
  templateUrl: './chat-room.html',
  styleUrl: './chat-room.scss',
})
export class ChatRoom {
  chatRoomId = input<number>();

  private chatApi = inject(ChatApi);
  private snackBar = inject(MatSnackBar);

  getMessagesRequest = () => {
    const chatRoomId = this.chatRoomId();

    if (!chatRoomId) {
      return EMPTY;
    }

    return this.chatApi.getChatRoomMessages(chatRoomId, {
      limit: 20,
      deleted: false,
    });
  };

  addMessageRequest = (body: Parameters<ChatApi['addChatRoomMessage']>[1]) =>
    this.chatApi.addChatRoomMessage(this.chatRoomId() as number, body);

  addReaction(request: { messageId: number; emoji: string; onComplete: () => void }) {
    this.chatApi.addChatRoomMessageReaction(request.messageId, {
      emoji: request.emoji,
    }).pipe(finalize(request.onComplete)).subscribe({
      error: (error) => {
        console.error('Error adding message reaction', error);
        this.snackBar.open('Failed to add reaction', '✖', {
          duration: 3000,
          panelClass: 'snackbar-error',
        });
      },
    });
  }

  isLiveMessageAllowed = (message: ChatRoomMessageResponse) => this.chatRoomId() === message.chatRoomId;
}
