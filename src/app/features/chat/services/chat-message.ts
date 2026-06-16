import { inject, Injectable } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { Guest } from '../../../core/services/guest';
import { Author } from '../../../shared/interfaces/author';

@Injectable({
  providedIn: 'root',
})
export class ChatMessage {
  private auth = inject(Auth);
  private guest = inject(Guest);

  isCurrentUserAuthor(author?: Author) {
    if (!author) {
      return false;
    }

    const authUserId = this.auth.authState().user?.id;

    if (authUserId) {
      return author.type === 'USER' && author.id === authUserId;
    }

    const guestSessionId = this.guest.guestState().guestSessionId;

    return author.type === 'GUEST' && author.id === guestSessionId;
  }
}
