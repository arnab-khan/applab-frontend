import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { ChatRoom } from '../../components/chat-room/chat-room';
import { ChatApi } from '../../services/chat-api';
import { LayoutState } from '../../../../core/services/layout-state';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { ProfileApiService } from '../../../profile/services/profile-api.service';
import { StompSubscription } from '@stomp/stompjs';
import { ChatState } from '../../services/chat-state';
import { ChatWebsocket } from '../../services/chat-websocket';
import { ChatMessage } from '../../services/chat-message';
import { User } from '../../../../shared/interfaces/user';

@Component({
  selector: 'app-user-chat',
  imports: [ChatRoom, Thumbnail, RouterLink],
  templateUrl: './user-chat.html',
  styleUrl: './user-chat.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserChat {
  private chatApi = inject(ChatApi);
  private route = inject(ActivatedRoute);
  private layoutState = inject(LayoutState);
  private profileApiService = inject(ProfileApiService);
  private chatState = inject(ChatState);
  private chatWebsocket = inject(ChatWebsocket);
  private chatMessage = inject(ChatMessage);
  private destroyRef = inject(DestroyRef);
  private websocketSubscriptions: StompSubscription[] = [];
  private typingUserTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
  private hasMarkedInitialMessagesAsRead = false;
  chatRoomId = signal<number | undefined>(undefined);
  unreadCount = signal(0);
  otherUserHasRead = signal(false);
  recipient = signal<User | null>(null);
  errorMessage = signal('');
  headerHeight = this.layoutState.headerHeight;
  recipientProfileImageUrl = computed(() =>
    this.profileApiService.getPublicImageUrl(this.recipient()?.compressedProfileImageUrl),
  );

  constructor() {
    this.loadChatRoom();
    this.destroyRef.onDestroy(() => this.clearRoomSubscriptions());
  }

  private loadChatRoom() {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.chatRoomId.set(undefined);
        this.unreadCount.set(0);
        this.otherUserHasRead.set(false);
        this.hasMarkedInitialMessagesAsRead = false;
        this.recipient.set(null);
        this.errorMessage.set('');
        const username = params.get('username');

        if (!username) {
          this.errorMessage.set('Invalid username.');
          return EMPTY;
        }

        return this.profileApiService.getPublicUserByUsername({ username }).pipe(
          switchMap(recipient => {
            this.recipient.set(recipient);
            return this.chatApi.getOrCreateDirectChat(recipient.id);
          }),
          switchMap(({ chatRoomId }) =>
            this.chatApi.getChatRoomUnreadCount(chatRoomId).pipe(
              map(({ unreadCount, otherUserHasRead }) => ({ chatRoomId, unreadCount, otherUserHasRead })),
            ),
          ),
          catchError(error => {
            console.error('Error loading user chat room', error);
            this.errorMessage.set(
              error?.status === 404 ? 'User not found.' : 'Unable to load chat.',
            );
            return EMPTY;
          }),
        );
      }),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(({ chatRoomId, unreadCount, otherUserHasRead }) => {
      this.chatRoomId.set(chatRoomId);
      this.unreadCount.set(unreadCount);
      this.otherUserHasRead.set(otherUserHasRead);
      this.subscribeToRoom(chatRoomId);
    });
  }

  markRoomAsRead(updateUi = false) {
    const chatRoomId = this.chatRoomId();
    const unreadCount = this.unreadCount();

    if (!chatRoomId || (!updateUi && (!unreadCount || this.hasMarkedInitialMessagesAsRead))) {
      return;
    }

    this.chatApi.markChatRoomAsRead(chatRoomId).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: () => {
        if (!this.hasMarkedInitialMessagesAsRead && unreadCount) {
          this.chatState.totalUnreadCount.update(total => Math.max(0, total - unreadCount));
          this.hasMarkedInitialMessagesAsRead = true;
        }
        if (updateUi) {
          this.unreadCount.set(0);
        }
      },
      error: error => console.error('Error marking direct chat as read', error),
    });
  }

  private subscribeToRoom(chatRoomId: number) {
    this.clearRoomSubscriptions();

    this.websocketSubscriptions.push(
      this.chatWebsocket.getPrivateChatRoomMessageLive(chatRoomId, liveMessage => {
        const isAddMessage = liveMessage.action === 'ADD';
        const shouldFetchViewerState = isAddMessage
          || liveMessage.action === 'REACTION_ADD'
          || liveMessage.action === 'REACTION_EDIT'
          || liveMessage.action === 'REACTION_DELETE';

        if (!shouldFetchViewerState) {
          this.chatState.liveMessage.set(liveMessage);
          return;
        }

        if (isAddMessage) {
          this.chatState.liveMessage.set(liveMessage);
          if (this.chatMessage.isCurrentUserAuthor(liveMessage.message.author)) {
            this.otherUserHasRead.set(false);
          }
          this.markRoomAsRead(true);
          this.refreshOtherUserReadState(chatRoomId);
        }

        this.chatApi.getChatRoomMessageViewerState(chatRoomId, liveMessage.message.message.id).subscribe({
          next: viewerState => this.chatState.liveMessage.set({
            action: isAddMessage ? 'UPDATE' : liveMessage.action,
            message: {
              ...liveMessage.message,
              permission: viewerState.permission,
              myReaction: viewerState.myReaction,
            },
          }),
          error: error => console.error('Error loading direct chat message viewer state', error),
        });
      }),
      this.chatWebsocket.getPrivateChatRoomTyping(chatRoomId, typingUser => {
        if (this.chatMessage.isCurrentUserAuthor(typingUser.author)) {
          return;
        }

        const key = `${typingUser.author.type}:${typingUser.author.id}`;
        clearTimeout(this.typingUserTimeouts.get(key));
        this.chatState.typingUsers.update(users => [
          ...users.filter(user => `${user.author.type}:${user.author.id}` !== key),
          typingUser,
        ]);
        this.typingUserTimeouts.set(key, setTimeout(() => {
          this.chatState.typingUsers.update(users =>
            users.filter(user => `${user.author.type}:${user.author.id}` !== key),
          );
          this.typingUserTimeouts.delete(key);
        }, 2000));
      }),
      this.chatWebsocket.getPrivateChatRoomRead(chatRoomId, readState => {
        if (readState.userId === this.recipient()?.id) {
          this.otherUserHasRead.set(true);
        }
      }),
    );
  }

  private clearRoomSubscriptions() {
    this.websocketSubscriptions.forEach(subscription => subscription.unsubscribe());
    this.websocketSubscriptions = [];
    this.typingUserTimeouts.forEach(timeout => clearTimeout(timeout));
    this.typingUserTimeouts.clear();
    this.chatState.typingUsers.set([]);
  }

  private refreshOtherUserReadState(chatRoomId: number) {
    this.chatApi.getChatRoomUnreadCount(chatRoomId).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: ({ otherUserHasRead }) => this.otherUserHasRead.set(otherUserHasRead),
      error: error => console.error('Error refreshing direct chat read state', error),
    });
  }
}
