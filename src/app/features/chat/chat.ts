import { Component, DestroyRef, OnInit, effect, inject } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { StompSubscription } from '@stomp/stompjs';
import { ChatState } from './services/chat-state';
import { ChatWebsocket } from './services/chat-websocket';
import { ChatMessage } from './services/chat-message';
import { LayoutState } from '../../core/services/layout-state';
import { Platform } from '../../shared/services/platform';
import { ChatRoomTypingResponse } from '../../shared/interfaces/chat';
import { Author } from '../../shared/interfaces/author';
import { Auth } from '../../core/services/auth';
import { Guest } from '../../core/services/guest';

@Component({
  selector: 'app-chat',
  imports: [NgClass, NgTemplateOutlet, RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat implements OnInit {
  private chatState = inject(ChatState);
  private chatWebsocket = inject(ChatWebsocket);
  private chatMessage = inject(ChatMessage);
  private layoutState = inject(LayoutState);
  private platformService = inject(Platform);
  private destroyRef = inject(DestroyRef);
  private auth = inject(Auth);
  private guest = inject(Guest);
  private websocketSubscriptions: StompSubscription[] = [];
  private typingUserTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
  private currentIdentityKey = '';

  faGlobe = faGlobe;
  faUser = faUser;
  faUsers = faUsers;
  headerHeight = this.layoutState.headerHeight;
  typingUsers: ChatRoomTypingResponse[] = [];

  constructor() {
    effect(() => {
      const identityKey = this.getCurrentIdentityKey();

      if (!this.currentIdentityKey) {
        this.currentIdentityKey = identityKey;
        return;
      }

      if (this.currentIdentityKey !== identityKey) {
        this.currentIdentityKey = identityKey;
        this.chatWebsocket.reconnect();
      }
    });
  }

  ngOnInit() {
    if (!this.platformService.isBrowser()) {
      return;
    }

    this.websocketSubscriptions.push(
      this.chatWebsocket.getChatRoomMessageLive((response) => {
        console.log('liveMessage', response);
        this.chatState.liveMessage.set(response);
      })
    );

    this.websocketSubscriptions.push(
      this.chatWebsocket.getChatRoomTyping((response) => {
        console.log('typing', response);
        if (this.chatMessage.isCurrentUserAuthor(response.author)) {
          return;
        }
        const typingUserKey = this.getAuthorKey(response.author);
        clearTimeout(this.typingUserTimeouts.get(typingUserKey));
        this.typingUsers = this.typingUsers.filter((typingUser) => this.getAuthorKey(typingUser.author) !== typingUserKey);
        this.typingUsers.push(response);
        this.chatState.typingUsers.set(this.typingUsers);
        this.typingUserTimeouts.set(typingUserKey, setTimeout(() => {
          this.typingUsers = this.typingUsers.filter((typingUser) => this.getAuthorKey(typingUser.author) !== typingUserKey);
          this.chatState.typingUsers.set(this.typingUsers);
          this.typingUserTimeouts.delete(typingUserKey);
        }, 2000));
        console.log('typingUsers', this.typingUsers);
      })
    );

    this.destroyRef.onDestroy(() => {
      this.websocketSubscriptions.forEach((subscription) => subscription.unsubscribe());
      this.typingUserTimeouts.forEach((timeout) => clearTimeout(timeout));
    });
  }

  private getAuthorKey(author: Author) {
    return `${author.type}:${author.id}`;
  }

  private getCurrentIdentityKey(): string {
    const userId = this.auth.authState().user?.id;

    if (userId) {
      return `USER:${userId}`;
    }

    const guestSessionId = this.guest.guestState().guestSessionId;

    if (guestSessionId) {
      return `GUEST:${guestSessionId}`;
    }

    return 'ANONYMOUS';
  }
}
