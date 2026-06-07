import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize, throwError } from 'rxjs';
import { ChatRoomMessageResponse, MessageQueryParams } from '../../../../shared/interfaces/chat';
import { ChatApi } from '../../services/chat-api';
import { MessageList } from '../message-list/message-list';

@Component({
  selector: 'app-chat-room',
  imports: [MessageList],
  templateUrl: './chat-room.html',
  styleUrl: './chat-room.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatRoom {
  chatRoomId = input<number>();

  private chatApi = inject(ChatApi);
  private snackBar = inject(MatSnackBar);

  getMessagesRequest = (params: MessageQueryParams) => {
    const chatRoomId = this.chatRoomId();

    if (!chatRoomId) {
      return throwError(() => new Error('Chat room id is required to get messages'));
    }

    return this.chatApi.getChatRoomMessages(chatRoomId, params);
  };

  addReaction(request: { messageId: number; emoji: string; onComplete: () => void; onError: () => void }) {
    this.chatApi.addChatRoomMessageReaction(request.messageId, {
      emoji: request.emoji,
    }).pipe(finalize(request.onComplete)).subscribe({
      error: (error) => {
        console.error('Error adding message reaction', error);
        request.onError();
        this.snackBar.open(request.emoji ? 'Failed to add reaction' : 'Failed to remove reaction', '✖', {
          duration: 3000,
          panelClass: 'snackbar-error',
        });
      },
    });
  }

  isLiveMessageAllowed = (message: ChatRoomMessageResponse) => this.chatRoomId() === message.chatRoomId;
}
