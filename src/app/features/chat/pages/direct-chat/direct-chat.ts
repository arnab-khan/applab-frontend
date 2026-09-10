import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfiniteScroll } from '../../../../shared/components/data-display/infinite-scroll/infinite-scroll';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { ChatRoomConversationResponse } from '../../../../shared/interfaces/chat';
import { Platform } from '../../../../shared/services/platform';
import { ProfileApiService } from '../../../profile/services/profile-api.service';
import { ChatApi } from '../../services/chat-api';

@Component({
  selector: 'app-direct-chat',
  imports: [DatePipe, InfiniteScroll, RouterLink, Thumbnail],
  templateUrl: './direct-chat.html',
  styleUrl: './direct-chat.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectChat implements OnInit {
  private chatApi = inject(ChatApi);
  private profileApiService = inject(ProfileApiService);
  private platform = inject(Platform);

  conversations = signal<ChatRoomConversationResponse[]>([]);
  isLoading = signal(true);
  isLoadingMore = signal(false);
  hasMore = signal(true);
  errorMessage = signal('');
  currentPage = 0;
  readonly pageSize = 10;

  ngOnInit() {
    if (!this.platform.isBrowser()) {
      return;
    }

    this.loadChatRooms();
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

  private loadChatRooms() {
    this.errorMessage.set('');
    this.chatApi.getChatRooms({
      page: this.currentPage,
      size: this.pageSize,
      sort: 'createdAt,desc',
    }).subscribe({
      next: response => {
        this.conversations.update(conversations => [...conversations, ...response.content]);
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

}
