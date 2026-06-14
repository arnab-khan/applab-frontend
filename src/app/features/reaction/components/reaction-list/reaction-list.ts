import { NgClass } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { catchError, forkJoin, of, Subscription, tap } from 'rxjs';
import { InfiniteScroll } from '../../../../shared/components/data-display/infinite-scroll/infinite-scroll';
import { ReactionCount, ReactionWithAuthorResponse } from '../../../../shared/interfaces/reaction';
import { CHAT_REACTION_OPTIONS } from '../../../../shared/options/chat-reaction-options';
import { orderReactionCounts } from '../../../../shared/utils/reaction';
import { ChatApi } from '../../../chat/services/chat-api';
import { ReactionListItem } from '../reaction-list-item/reaction-list-item';

@Component({
  selector: 'app-reaction-list',
  imports: [NgClass, ReactionListItem, InfiniteScroll],
  templateUrl: './reaction-list.html',
  styleUrl: './reaction-list.scss',
})
export class ReactionList {
  chatRoomId = input.required<number>();
  messageId = input.required<number>();

  private readonly chatApi = inject(ChatApi);
  private reactionsSubscription?: Subscription;

  reactions = signal<ReactionWithAuthorResponse[]>([]);
  reactionSummary = signal<ReactionCount[]>([]);
  isLoading = signal(true);
  isLoadingMore = signal(false);
  activeReactionFilter = signal<string | undefined>(undefined);
  reactionOptions = CHAT_REACTION_OPTIONS;
  private reactionLimit = 20;
  private nextCursor?: number;
  hasMore = signal(false);

  orderedReactionSummary = computed(() => orderReactionCounts(this.reactionSummary()));
  totalReactionCount = computed(() => this.reactionSummary().reduce((total, reaction) => total + reaction.count, 0));
  reactionTabs = computed(() => [
    { emoji: undefined, label: 'All', count: this.totalReactionCount() },
    ...this.orderedReactionSummary().map((reaction) => ({
      emoji: reaction.emoji,
      label: this.getReactionEmoji(reaction.emoji),
      count: reaction.count,
    })),
  ]);

  ngOnInit() {
    this.loadInitialReactions();
  }

  ngOnDestroy() {
    this.reactionsSubscription?.unsubscribe();
  }

  getReactionEmoji(code: string) {
    return this.reactionOptions.find((reaction) => reaction.code === code)?.emoji || code;
  }

  onReactionFilter(emoji?: string) {
    this.activeReactionFilter.set(emoji);
    this.reactions.set([]);
    this.nextCursor = undefined;
    this.hasMore.set(false);
    this.loadInitialReactions(emoji);
  }

  loadMoreReactions() {
    if (!this.hasMore() || this.isLoading() || this.isLoadingMore()) {
      return;
    }

    this.isLoadingMore.set(true);
    this.reactionsSubscription = this.reactionsRequest(this.activeReactionFilter()).subscribe({
      next: () => {
        this.isLoadingMore.set(false);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  private loadInitialReactions(emoji?: string) {
    this.reactionsSubscription?.unsubscribe(); // If reaction emoji tab change queckly then cancel previous one tabs api call.
    this.isLoading.set(true);
    this.reactionsSubscription = this.initialReactionsRequest(emoji).subscribe({
      next: () => {
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  private initialReactionsRequest(emoji?: string) {
    return forkJoin([
      this.reactionCountsRequest(),
      this.reactionsRequest(emoji),
    ]);
  }

  private reactionsRequest(emoji?: string) {
    const cursor = this.nextCursor;
    return this.chatApi.getChatRoomMessageReactions(this.chatRoomId(), this.messageId(), {
      limit: this.reactionLimit,
      emoji,
      cursor,
    }).pipe(
      tap((response) => {
        this.reactions.set([...this.reactions(), ...response.items]);
        this.nextCursor = response.nextCursor ?? undefined;
        this.hasMore.set(response.hasNext);
      }),
      catchError((error) => {
        console.error(error);
        return of(null);
      }),
    );
  }

  private reactionCountsRequest() {
    return this.chatApi.getChatRoomMessageReactionCounts(this.chatRoomId(), this.messageId()).pipe(
      tap((response) => {
        this.reactionSummary.set(response);
      }),
      catchError((error) => {
        console.error(error);
        return of([]);
      }),
    );
  }
}
