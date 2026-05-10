import { Component, inject } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ChatState } from './services/chat-state';
import { LayoutState } from '../../core/services/layout-state';

@Component({
  selector: 'app-chat',
  imports: [NgClass, NgTemplateOutlet, RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  private chatState = inject(ChatState);
  private layoutState = inject(LayoutState);

  faGlobe = faGlobe;
  faUser = faUser;
  faUsers = faUsers;
  messageCount = this.chatState.messageCount;
  headerHeight = this.layoutState.headerHeight;
}
