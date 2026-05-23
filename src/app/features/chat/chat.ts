import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { StompSubscription } from '@stomp/stompjs';
import { ChatRoomMessageResponse } from '../../shared/interfaces/chat';
import { ChatState } from './services/chat-state';
import { LayoutState } from '../../core/services/layout-state';
import { WebsocketService } from '../../core/services/websocket';
import { Platform } from '../../shared/services/platform';

@Component({
  selector: 'app-chat',
  imports: [NgClass, NgTemplateOutlet, RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat implements OnInit {
  private chatState = inject(ChatState);
  private layoutState = inject(LayoutState);
  private websocketService = inject(WebsocketService);
  private platformService = inject(Platform);
  private destroyRef = inject(DestroyRef);
  private websocketSubscription?: StompSubscription;

  faGlobe = faGlobe;
  faUser = faUser;
  faUsers = faUsers;
  messageCount = this.chatState.messageCount;
  headerHeight = this.layoutState.headerHeight;

  ngOnInit() {
    if (!this.platformService.isBrowser()) {
      return;
    }

    this.websocketService.connect();

    this.websocketSubscription = this.websocketService.subscribe<ChatRoomMessageResponse>(
      '/topic/chatroom-message',
      (response) => {
        console.log('liveMessage', response);
        this.chatState.liveMessage.set(response);
      }
    );

    this.destroyRef.onDestroy(() => {
      this.websocketSubscription?.unsubscribe();
    });
  }
}
