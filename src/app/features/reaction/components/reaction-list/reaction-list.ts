import { NgClass } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { ReactionCount, ReactionWithAuthorResponse } from '../../../../shared/interfaces/reaction';
import { CHAT_REACTION_OPTIONS } from '../../../../shared/options/chat-reaction-options';
import { orderReactionCounts } from '../../../../shared/utils/reaction';
import { ChatApi } from '../../../chat/services/chat-api';
import { ReactionListItem } from '../reaction-list-item/reaction-list-item';

@Component({
  selector: 'app-reaction-list',
  imports: [NgClass, ReactionListItem],
  templateUrl: './reaction-list.html',
  styleUrl: './reaction-list.scss',
})
export class ReactionList {
  chatRoomId = input.required<number>();
  messageId = input.required<number>();

  private readonly chatApi = inject(ChatApi);

  reactions = signal<ReactionWithAuthorResponse[]>([]);
  reactionSummary = signal<ReactionCount[]>([]);
  isLoading = signal(false);
  activeReactionFilter = signal<string | undefined>(undefined);
  reactionOptions = CHAT_REACTION_OPTIONS;

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
    this.loadReactions();
  }

  getReactionEmoji(code: string) {
    return this.reactionOptions.find((reaction) => reaction.code === code)?.emoji || code;
  }

  onReactionFilter(emoji?: string) {
    this.activeReactionFilter.set(emoji);
    this.loadReactions(emoji);
  }

  private loadReactions(emoji?: string) {
    this.isLoading.set(true);
    this.chatApi.getChatRoomMessageReactions(this.chatRoomId(), this.messageId(), { limit: 20, emoji }).subscribe({
      next: (response) => {
        this.reactions.set(response.items);
        this.reactionSummary.set(response.reactions);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      },
    });
  }
}
