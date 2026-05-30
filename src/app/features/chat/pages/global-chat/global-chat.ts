import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatRoom } from '../../components/chat-room/chat-room';
import { ChatApi } from '../../services/chat-api';

@Component({
  selector: 'app-global-chat',
  imports: [ChatRoom],
  templateUrl: './global-chat.html',
  styleUrl: './global-chat.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalChat {
  private chatApi = inject(ChatApi);
  chatRoomId = signal<number | undefined>(undefined);

  constructor() {
    this.chatApi.getGlobalChatRoom().subscribe({
      next: ({ chatRoomId }) => this.chatRoomId.set(chatRoomId),
      error: (error) => console.error('Error loading global chat room', error),
    });
  }
}
