import { Injectable, signal } from '@angular/core';
import { ChatRoomMessageLiveResponse, ChatRoomTypingResponse } from '../../../shared/interfaces/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatState {
  liveMessage = signal<ChatRoomMessageLiveResponse | null>(null);
  typingUsers = signal<ChatRoomTypingResponse[]>([]);
}
