import { Injectable, signal } from '@angular/core';
import { ChatRoomMessageResponse } from '../../../shared/interfaces/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatState {
  liveMessage = signal<ChatRoomMessageResponse | null>(null);
}
