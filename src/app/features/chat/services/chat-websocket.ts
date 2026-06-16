import { inject, Injectable } from '@angular/core';
import { StompSubscription } from '@stomp/stompjs';
import { WebsocketService } from '../../../core/services/websocket';
import { ChatRoomMessageLiveResponse, ChatRoomTypingResponse } from '../../../shared/interfaces/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatWebsocket {
  private websocketService = inject(WebsocketService);

  sendChatRoomTyping(chatRoomId: number): void {
    this.websocketService.connect();
    this.websocketService.publish(`${this.websocketService.appDestination}/chatroom-typing`, {
      chatRoomId,
    });
  }

  getChatRoomTyping(callback: (data: ChatRoomTypingResponse) => void): StompSubscription {
    return this.websocketService.subscribe<ChatRoomTypingResponse>(
      `${this.websocketService.topicDestination}/chatroom-typing`,
      callback
    );
  }

  getChatRoomMessageLive(callback: (data: ChatRoomMessageLiveResponse) => void): StompSubscription {
    return this.websocketService.subscribe<ChatRoomMessageLiveResponse>(
      `${this.websocketService.topicDestination}/chatroom-message`,
      callback
    );
  }
}
