import { DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { ReactionWithAuthorResponse } from '../../../../shared/interfaces/reaction';
import { CHAT_REACTION_OPTIONS } from '../../../../shared/options/chat-reaction-options';
import { ProfileApiService } from '../../../profile/services/profile-api.service';

@Component({
  selector: 'app-reaction-list-item',
  imports: [DatePipe, Thumbnail],
  templateUrl: './reaction-list-item.html',
  styleUrl: './reaction-list-item.scss',
})
export class ReactionListItem {
  reaction = input.required<ReactionWithAuthorResponse>();
  readonly profileApiService = inject(ProfileApiService);
  reactionOptions = CHAT_REACTION_OPTIONS;

  getReactionEmoji(code: string) {
    return this.reactionOptions.find((reaction) => reaction.code === code)?.emoji || code;
  }
}
