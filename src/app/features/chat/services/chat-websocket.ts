import { inject, Injectable } from '@angular/core';
import { StompSubscription } from '@stomp/stompjs';
import { WebsocketService } from '../../../core/services/websocket';
import { ChatRoomConversationWebSocketResponse, ChatRoomMessageLiveResponse, ChatRoomReadResponse, ChatRoomTypingResponse } from '../../../shared/interfaces/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatWebsocket {
  private websocketService = inject(WebsocketService);

  reconnect(): void {
    this.websocketService.reconnect();
  }

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

  getPrivateChatRoomTyping(chatRoomId: number, callback: (data: ChatRoomTypingResponse) => void): StompSubscription {
    return this.websocketService.subscribe<ChatRoomTypingResponse>(
      `${this.websocketService.topicDestination}/chatroom/${chatRoomId}/typing`,
      callback,
    );
  }

  getPrivateChatRoomMessageLive(chatRoomId: number, callback: (data: ChatRoomMessageLiveResponse) => void): StompSubscription {
    return this.websocketService.subscribe<ChatRoomMessageLiveResponse>(
      `${this.websocketService.topicDestination}/chatroom/${chatRoomId}/message`,
      callback,
    );
  }

  getPrivateChatRoomRead(chatRoomId: number, callback: (data: ChatRoomReadResponse) => void): StompSubscription {
    return this.websocketService.subscribe<ChatRoomReadResponse>(
      `${this.websocketService.topicDestination}/chatroom/${chatRoomId}/read`,
      callback,
    );
  }

  getUserChatRoomUpdate(userId: number, callback: (data: ChatRoomConversationWebSocketResponse) => void): StompSubscription {
    return this.websocketService.subscribe<ChatRoomConversationWebSocketResponse>(
      `${this.websocketService.topicDestination}/user/${userId}/chatroom-update`,
      callback,
    );
  }
}
