import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, EMPTY, switchMap } from 'rxjs';
import { ChatRoom } from '../../components/chat-room/chat-room';
import { ChatApi } from '../../services/chat-api';
import { LayoutState } from '../../../../core/services/layout-state';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { ProfileApiService } from '../../../profile/services/profile-api.service';
import { StompSubscription } from '@stomp/stompjs';
import { ChatState } from '../../services/chat-state';
import { ChatWebsocket } from '../../services/chat-websocket';
import { ChatMessage } from '../../services/chat-message';

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
  chatRoomId = signal<number | undefined>(undefined);
  recipientUserId = signal<number | undefined>(undefined);
  recipientName = signal('');
  recipientUsername = signal('');
  recipientCompressedProfileImageUrl = signal('');
  errorMessage = signal('');
  headerHeight = this.layoutState.headerHeight;
  recipientProfileImageUrl = computed(() =>
    this.profileApiService.getPublicImageUrl(this.recipientCompressedProfileImageUrl()),
  );

  constructor() {
    this.loadChatRoom();
    this.destroyRef.onDestroy(() => this.clearRoomSubscriptions());
  }

  private loadChatRoom() {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.chatRoomId.set(undefined);
        this.errorMessage.set('');
        const userId = Number(params.get('userId'));
        this.recipientUserId.set(userId);
        this.recipientName.set(this.route.snapshot.queryParamMap.get('name') || '');
        this.recipientUsername.set(this.route.snapshot.queryParamMap.get('username') || '');
        this.recipientCompressedProfileImageUrl.set(
          this.route.snapshot.queryParamMap.get('profileImageUrl') || '',
        );

        if (!Number.isSafeInteger(userId) || userId <= 0) {
          this.errorMessage.set('Invalid user id.');
          return EMPTY;
        }

        return this.chatApi.getOrCreateDirectChat(userId).pipe(
          catchError(error => {
            console.error('Error loading user chat room', error);
            this.errorMessage.set('Unable to load chat.');
            return EMPTY;
          }),
        );
      }),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(({ chatRoomId }) => {
      this.chatRoomId.set(chatRoomId);
      this.subscribeToRoom(chatRoomId);
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
    );
  }

  private clearRoomSubscriptions() {
    this.websocketSubscriptions.forEach(subscription => subscription.unsubscribe());
    this.websocketSubscriptions = [];
    this.typingUserTimeouts.forEach(timeout => clearTimeout(timeout));
    this.typingUserTimeouts.clear();
    this.chatState.typingUsers.set([]);
  }
}
