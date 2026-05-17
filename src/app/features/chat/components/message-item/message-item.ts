import { DatePipe } from '@angular/common';
import { Component, computed, inject, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceSmile, faPenToSquare, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { ChatRoomMessageResponse } from '../../../../shared/interfaces/chat';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { ProfileApiService } from '../../../profile/services/profile-api.service';
import { CHAT_REACTION_OPTIONS } from '../../../../shared/options/chat-reaction-options';

@Component({
  selector: 'app-message-item',
  imports: [DatePipe, FontAwesomeModule, MatIconModule, MatMenuModule, Thumbnail],
  templateUrl: './message-item.html',
  styleUrl: './message-item.scss',
})
export class MessageItem {
  messageResponse = input.required<ChatRoomMessageResponse>();
  addReactionRequest = output<{ messageId: number; emoji: string }>();
  messageId = computed(() => this.messageResponse().message.id);
  profileApiService = inject(ProfileApiService);

  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faUser = faUser;
  faFaceSmile = faFaceSmile;

  reactionOptions = CHAT_REACTION_OPTIONS;

  getReactionEmoji(code: string) {
    return this.reactionOptions.find((reaction) => reaction.code === code)?.emoji || code;
  }

  addReaction(reaction: (typeof CHAT_REACTION_OPTIONS)[number]) {
    console.log(this.messageId(), this.messageResponse());
    
    this.addReactionRequest.emit({
      messageId: this.messageId(),
      emoji: reaction.code,
    });
  }
}
