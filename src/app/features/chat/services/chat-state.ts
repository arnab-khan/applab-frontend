import { Injectable, signal } from '@angular/core';
import { ChatRoomMessageResponse } from '../../../shared/interfaces/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatState {
  messageCount = signal<number | undefined>(undefined);
  liveMessage = signal<ChatRoomMessageResponse | null>(null);
}
