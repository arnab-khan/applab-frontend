import { inject, Injectable } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { Guest } from '../../../core/services/guest';
import { Message } from '../../../shared/interfaces/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatMessage {
  private auth = inject(Auth);
  private guest = inject(Guest);

  isCurrentUserMessage(message?: Message) {
    if (!message) {
      return false;
    }

    if (message.userId) {
      return message.userId === this.auth.authState().user?.id;
    }

    return !!message.guestSessionId && message.guestSessionId === this.guest.guestState().guestSessionId;
  }
}
