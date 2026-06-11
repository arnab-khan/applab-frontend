import { Injectable, signal } from '@angular/core';
import { ChatRoomMessageLiveResponse } from '../../../shared/interfaces/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatState {
  liveMessage = signal<ChatRoomMessageLiveResponse | null>(null);
}
