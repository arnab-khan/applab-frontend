import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StompSubscription } from '@stomp/stompjs';
import { Auth } from '../../../../core/services/auth';
import { InfiniteScroll } from '../../../../shared/components/data-display/infinite-scroll/infinite-scroll';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { ChatRoomConversationResponse } from '../../../../shared/interfaces/chat';
import { Platform } from '../../../../shared/services/platform';
import { ProfileApiService } from '../../../profile/services/profile-api.service';
import { AuthAction } from '../../../auth/components/auth-action/auth-action';
import { ChatApi } from '../../services/chat-api';
import { ChatState } from '../../services/chat-state';
import { ChatWebsocket } from '../../services/chat-websocket';

@Component({
  selector: 'app-direct-chat',
  imports: [DatePipe, InfiniteScroll, RouterLink, Thumbnail, AuthAction],
  templateUrl: './direct-chat.html',
  styleUrl: './direct-chat.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectChat implements OnInit {
  private chatApi = inject(ChatApi);
  private profileApiService = inject(ProfileApiService);
  private platform = inject(Platform);
  private chatState = inject(ChatState);
  private chatWebsocket = inject(ChatWebsocket);
  private auth = inject(Auth);
  private destroyRef = inject(DestroyRef);
  private chatRoomUpdateSubscription?: StompSubscription;

  conversations = signal<ChatRoomConversationResponse[]>([]);
  isLoading = signal(true);
  isLoadingMore = signal(false);
  hasMore = signal(true);
  errorMessage = signal('');
  currentPage = 0;
  readonly pageSize = 10;
  authState = this.auth.authState;

  ngOnInit() {
    if (!this.platform.isBrowser()) {
      return;
    }

    const userId = this.authState().user?.id;
    if (!userId) {
      this.isLoading.set(false);
      return;
    }

    this.loadChatRooms();
    this.chatRoomUpdateSubscription = this.chatWebsocket.getUserChatRoomUpdate(userId, () => {
      this.refreshChatRooms();
    });
    this.destroyRef.onDestroy(() => this.chatRoomUpdateSubscription?.unsubscribe());
  }

  loadMore() {
    if (!this.hasMore() || this.isLoading() || this.isLoadingMore()) {
      return;
    }

    this.currentPage++;
    this.isLoadingMore.set(true);
    this.loadChatRooms();
  }

  getProfileImageUrl(conversation: ChatRoomConversationResponse) {
    return this.profileApiService.getPublicImageUrl(conversation.user.compressedProfileImageUrl);
  }

  private loadChatRooms(options?: { replace?: boolean }) {
    this.errorMessage.set('');
    this.chatApi.getChatRooms({
      page: this.currentPage,
      size: this.pageSize,
      sort: 'updatedAt,desc',
    }).subscribe({
      next: response => {
        if (options?.replace) {
          this.conversations.set(response.content);
        } else {
          this.conversations.update(conversations => [...conversations, ...response.content]);
        }
        this.chatState.totalUnreadCount.set(response.totalUnreadCount);
        this.hasMore.set(!response.last);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: error => {
        console.error('Error loading direct chat rooms', error);
        this.errorMessage.set('Unable to load conversations.');
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
    });
  }

  private refreshChatRooms() {
    this.currentPage = 0;
    this.loadChatRooms({ replace: true });
  }

}
