import { Component, inject } from '@angular/core';
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

  getMessagesRequest = () => this.chatApi.getGlobalMessages({
    limit: 20,
    deleted: false,
  });

  addMessageRequest = this.chatApi.addGlobalMessage.bind(this.chatApi);
}
