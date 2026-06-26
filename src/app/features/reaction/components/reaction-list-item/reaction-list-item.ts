import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { AuthorSummary } from '../../../../shared/components/data-display/author-summary/author-summary';
import { ReactionWithAuthorResponse } from '../../../../shared/interfaces/reaction';
import { CHAT_REACTION_OPTIONS } from '../../../../shared/options/chat-reaction-options';

@Component({
  selector: 'app-reaction-list-item',
  imports: [DatePipe, AuthorSummary],
  templateUrl: './reaction-list-item.html',
  styleUrl: './reaction-list-item.scss',
})
export class ReactionListItem {
  reaction = input.required<ReactionWithAuthorResponse>();
  reactionOptions = CHAT_REACTION_OPTIONS;

  getReactionEmoji(code: string) {
    return this.reactionOptions.find((reaction) => reaction.code === code)?.emoji || code;
  }
}
