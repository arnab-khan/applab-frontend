import { DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, forwardRef, inject, input, output, signal } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceSmile, faPenToSquare, faTrash, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { finalize, Observable } from 'rxjs';
import { ChatRoomAddRequest, ChatRoomEditRequest, ChatRoomMessageResponse, Message, QuotedMessageResponse } from '../../../../shared/interfaces/chat';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { ProfileApiService } from '../../../profile/services/profile-api.service';
import { CHAT_REACTION_OPTIONS } from '../../../../shared/options/chat-reaction-options';
import { MessageReactionsDialog } from '../../../reaction/components/message-reactions-dialog/message-reactions-dialog';
import { CommonDialog, CommonDialogResult } from '../../../../shared/components/dialogs/common-dialog/common-dialog';
import { ChatState } from '../../services/chat-state';
import { orderReactionCounts } from '../../../../shared/utils/reaction';
import { AuthAction } from '../../../auth/components/auth-action/auth-action';
import { ChatMessage } from '../../services/chat-message';
import { MessageInput } from '../message-input/message-input';

@Component({
  selector: 'app-message-item',
  imports: [DatePipe, NgClass, AuthAction, FontAwesomeModule, MatDialogModule, MatIconModule, MatMenuModule, forwardRef(() => MessageInput), Thumbnail],
  templateUrl: './message-item.html',
  styleUrl: './message-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageItem {
  messageResponse = input.required<ChatRoomMessageResponse | QuotedMessageResponse>();
  isPreview = input(false);
  isFocused = input(false);
  applyCurrentUserStyle = input(false);
  chatRoomId = input<number>();
  addMessageRequest = input.required<(body: ChatRoomAddRequest) => Observable<Message>>();
  editMessageRequest = input.required<(body: ChatRoomEditRequest) => Observable<Message>>();
  deleteMessageRequest = input<(messageId: number) => Observable<void>>();
  addReactionRequest = output<{ messageId: number; emoji: string; onComplete: () => void; onError: () => void }>();
  quoteReplyRequest = output<ChatRoomMessageResponse>();
  quoteMessageClickRequest = output<number>();
  currentMessageResponse = signal<ChatRoomMessageResponse | QuotedMessageResponse | null>(null);
  editingQuotedMessage = signal<QuotedMessageResponse | undefined>(undefined);
  selectedReactionCode = signal('');
  isReactionSubmitting = signal(false);
  isEditing = signal(false);
  messageId = computed(() => this.currentMessageResponse()?.message.id || this.messageResponse().message.id);
  quotedMessageResponse = computed(() => {
    const currentMessageResponse = this.currentMessageResponse();
    return currentMessageResponse && 'quotedMessage' in currentMessageResponse ? currentMessageResponse.quotedMessage : undefined;
  });
  selectedReactionEmoji = computed(() => this.getReactionEmoji(this.selectedReactionCode()));
  orderedReactions = computed(() => orderReactionCounts(this.getCurrentChatRoomMessageResponse()?.reactions || []));
  isCurrentUserMessage = computed(() => this.chatMessage.isCurrentUserMessage(this.currentMessageResponse()?.message));
  canEditMessage = computed(() => !!this.getCurrentChatRoomMessageResponse()?.permission?.canEdit);
  canDeleteMessage = computed(() => !!this.getCurrentChatRoomMessageResponse()?.permission?.canDelete);
  canShowMessageActionMenu = computed(() => this.canEditMessage() || this.canDeleteMessage());
  messageItemClasses = computed(() => ({
    'message-focus': this.isFocused(),
    'p-2': this.isPreview(),
    'p-4': !this.isPreview(),
    ...((this.applyCurrentUserStyle() && this.isCurrentUserMessage() && !this.isPreview()) ? {
      'border-cyan-200/20 bg-cyan-300/15': true,
    } : {
      'border-white/15 bg-white/15': true,
    }),
  }));
  profileApiService = inject(ProfileApiService);
  private chatMessage = inject(ChatMessage);
  private chatState = inject(ChatState);
  private dialog = inject(MatDialog);

  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faUser = faUser;
  faFaceSmile = faFaceSmile;
  faXmark = faXmark;

  reactionOptions = CHAT_REACTION_OPTIONS;

  constructor() {
    effect(() => {
      const messageResponse = this.messageResponse();

      this.currentMessageResponse.set(messageResponse);
      this.selectedReactionCode.set(this.getMessageReactionCode(messageResponse));
    });

    effect(() => {
      const liveMessage = this.chatState.liveMessage();
      const messageResponse = liveMessage?.message;

      if (messageResponse?.message.id === this.messageId()) {
        this.currentMessageResponse.set(messageResponse);
        this.selectedReactionCode.set(messageResponse.myReaction?.emoji || '');
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

    this.emitReaction(reactionCode);
  }

  addReaction(reaction: (typeof CHAT_REACTION_OPTIONS)[number]) {
    if (this.isReactionSubmitting()) {
      return;
    }

    this.emitReaction(reaction.code);
  }

  private emitReaction(emoji: string) {
    const previousReactionCode = this.selectedReactionCode();

    this.isReactionSubmitting.set(true);
    this.selectedReactionCode.set(emoji);

    this.addReactionRequest.emit({
      messageId: this.messageId(),
      emoji,
      onComplete: () => this.isReactionSubmitting.set(false),
      onError: () => this.selectedReactionCode.set(previousReactionCode),
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

  quoteMessageClick(messageId: number) {
    this.quoteMessageClickRequest.emit(messageId);
  }

  startEdit() {
    this.editingQuotedMessage.set(this.getCurrentChatRoomMessageResponse()?.quotedMessage);
    this.isEditing.set(true);
  }

  cancelEdit() {
    this.isEditing.set(false);
  }

  deleteMessage() {
    const deleteMessageRequest = this.deleteMessageRequest();

    if (!deleteMessageRequest) {
      throw new Error('deleteMessageRequest is required to delete message');
    }

    this.dialog.open(CommonDialog, {
      width: '30rem',
      data: {
        type: 'warning',
        message: 'Are you sure you want to delete this message?',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        onConfirm: (dialogRef: MatDialogRef<CommonDialog, CommonDialogResult>, dialog: CommonDialog) => {
          deleteMessageRequest(this.messageId()).pipe(
            finalize(() => dialog.isConfirming.set(false)),
          ).subscribe({
            next: () => dialogRef.close({ confirmed: true }),
            error: (error) => {
              console.error('Error deleting message', error);
            },
          });
        },
      },
    });
  }

  getCurrentChatRoomMessageResponse() {
    const messageResponse = this.currentMessageResponse();

    return messageResponse && 'chatRoomId' in messageResponse ? messageResponse : undefined;
  }

  private getMessageReactionCode(messageResponse: ChatRoomMessageResponse | QuotedMessageResponse) {
    return 'myReaction' in messageResponse ? messageResponse.myReaction?.emoji || '' : '';
  }
}
