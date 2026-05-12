import { Component, inject } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { ChatRoomMessageResponse } from '../../../../shared/interfaces/chat';
import { MessageList } from '../../components/message-list/message-list';
import { ChatApi } from '../../services/chat-api';

@Component({
  selector: 'app-global-chat',
  imports: [MessageList],
  templateUrl: './global-chat.html',
  styleUrl: './global-chat.scss',
})
export class GlobalChat {
  private chatApi = inject(ChatApi);
  private chatRoomId?: number;

  getMessagesRequest = () =>
    this.chatApi.getGlobalChatRoom().pipe(
      tap(({ chatRoomId }) => (this.chatRoomId = chatRoomId)),
      switchMap(({ chatRoomId }) =>
        this.chatApi.getChatRoomMessages(chatRoomId, {
          limit: 20,
          deleted: false,
        }),
      ),
    );

  addMessageRequest = (body: Parameters<ChatApi['addChatRoomMessage']>[1]) => {
    if (this.chatRoomId) {
      return this.chatApi.addChatRoomMessage(this.chatRoomId, body);
    }

    return this.chatApi.getGlobalChatRoom().pipe(
      tap(({ chatRoomId }) => (this.chatRoomId = chatRoomId)),
      switchMap(({ chatRoomId }) => this.chatApi.addChatRoomMessage(chatRoomId, body)),
    );
  };

  isLiveMessageAllowed = (message: ChatRoomMessageResponse) => this.chatRoomId === message.chatRoomId;
}
