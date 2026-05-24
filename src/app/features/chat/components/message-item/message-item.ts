import { DatePipe } from '@angular/common';
import { Component, computed, effect, inject, input, output, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceSmile, faPenToSquare, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { ChatRoomMessageResponse, QuotedMessageResponse } from '../../../../shared/interfaces/chat';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { ProfileApiService } from '../../../profile/services/profile-api.service';
import { CHAT_REACTION_OPTIONS } from '../../../../shared/options/chat-reaction-options';
import { MessageReactionsDialog } from '../../../reaction/components/message-reactions-dialog/message-reactions-dialog';
import { ChatState } from '../../services/chat-state';
import { orderReactionCounts } from '../../../../shared/utils/reaction';
import { AuthAction } from '../../../auth/components/auth-action/auth-action';

@Component({
  selector: 'app-message-item',
  imports: [DatePipe, AuthAction, FontAwesomeModule, MatDialogModule, MatIconModule, MatMenuModule, Thumbnail],
  templateUrl: './message-item.html',
  styleUrl: './message-item.scss',
})
export class MessageItem {
  messageResponse = input.required<ChatRoomMessageResponse | QuotedMessageResponse>();
  isPreview = input(false);
  addReactionRequest = output<{ messageId: number; emoji: string; onComplete: () => void }>();
  quoteReplyRequest = output<ChatRoomMessageResponse>();
  currentMessageResponse = signal<ChatRoomMessageResponse | QuotedMessageResponse | null>(null);
  selectedReactionCode = signal('');
  isReactionSubmitting = signal(false);
  messageId = computed(() => this.currentMessageResponse()?.message.id || this.messageResponse().message.id);
  quotedMessageResponse = computed(() => {
    const currentMessageResponse = this.currentMessageResponse();
    return currentMessageResponse && 'quotedMessage' in currentMessageResponse ? currentMessageResponse.quotedMessage : undefined;
  });
  selectedReactionEmoji = computed(() => this.getReactionEmoji(this.selectedReactionCode()));
  orderedReactions = computed(() => orderReactionCounts(this.getCurrentChatRoomMessageResponse()?.reactions || []));
  profileApiService = inject(ProfileApiService);
  private chatState = inject(ChatState);
  private dialog = inject(MatDialog);

  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faUser = faUser;
  faFaceSmile = faFaceSmile;

  reactionOptions = CHAT_REACTION_OPTIONS;

  constructor() {
    effect(() => {
      const messageResponse = this.messageResponse();

      this.currentMessageResponse.set(messageResponse);
      this.selectedReactionCode.set(this.getMessageReactionCode(messageResponse));
    });

    effect(() => {
      const liveMessage = this.chatState.liveMessage();

      if (liveMessage?.message.id === this.messageId()) {
        this.currentMessageResponse.set(liveMessage);
        this.selectedReactionCode.set(liveMessage.myReaction?.emoji || '');
      }
    });
  }

  getReactionEmoji(code: string) {
    return this.reactionOptions.find((reaction) => reaction.code === code)?.emoji || code;
  }

  toggleLikeReaction() {
    if (this.isReactionSubmitting()) {
      return;
    }

    const reactionCode = this.selectedReactionCode() ? '' : 'LIKE';

    this.selectedReactionCode.set(reactionCode);
    this.emitReaction(reactionCode);
  }

  addReaction(reaction: (typeof CHAT_REACTION_OPTIONS)[number]) {
    if (this.isReactionSubmitting()) {
      return;
    }

    console.log(this.messageId(), this.currentMessageResponse());

    this.selectedReactionCode.set(reaction.code);
    this.emitReaction(reaction.code);
  }

  private emitReaction(emoji: string) {
    this.isReactionSubmitting.set(true);

    this.addReactionRequest.emit({
      messageId: this.messageId(),
      emoji,
      onComplete: () => this.isReactionSubmitting.set(false),
    });
  }

  openReactionsDialog() {
    this.dialog.open(MessageReactionsDialog, {
      width: '50rem',
      height: '90dvh',
      data: {
        chatRoomId: this.getCurrentChatRoomMessageResponse()?.chatRoomId,
        messageId: this.messageId(),
      },
    });
  }

  quoteReply() {
    const messageResponse = this.getCurrentChatRoomMessageResponse();

    if (messageResponse) {
      this.quoteReplyRequest.emit(messageResponse);
    }
  }

  private getCurrentChatRoomMessageResponse() {
    const messageResponse = this.currentMessageResponse();

    return messageResponse && 'chatRoomId' in messageResponse ? messageResponse : undefined;
  }

  private getMessageReactionCode(messageResponse: ChatRoomMessageResponse | QuotedMessageResponse) {
    return 'myReaction' in messageResponse ? messageResponse.myReaction?.emoji || '' : '';
  }
}
