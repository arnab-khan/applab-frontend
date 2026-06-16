import { DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, forwardRef, inject, input, output, signal, untracked } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceSmile, faPenToSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { finalize, Observable } from 'rxjs';
import { ChatRoomAddRequest, ChatRoomEditRequest, ChatRoomMessageResponse, Message, QuotedMessageResponse } from '../../../../shared/interfaces/chat';
import { CHAT_REACTION_OPTIONS } from '../../../../shared/options/chat-reaction-options';
import { MessageReactionsDialog } from '../../../reaction/components/message-reactions-dialog/message-reactions-dialog';
import { CommonDialog, CommonDialogResult } from '../../../../shared/components/dialogs/common-dialog/common-dialog';
import { ChatState } from '../../services/chat-state';
import { orderReactionCounts } from '../../../../shared/utils/reaction';
import { AuthAction } from '../../../auth/components/auth-action/auth-action';
import { ChatMessage } from '../../services/chat-message';
import { MessageInput } from '../message-input/message-input';
import { AuthorSummary } from '../../../../shared/components/data-display/author-summary/author-summary';
import { Author } from '../../../../shared/interfaces/author';

@Component({
  selector: 'app-message-item',
  imports: [DatePipe, NgClass, AuthAction, AuthorSummary, FontAwesomeModule, MatDialogModule, MatIconModule, MatMenuModule, forwardRef(() => MessageInput)],
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
  currentChatRoomMessageResponse = computed(() => {
    const messageResponse = this.currentMessageResponse();
    return messageResponse && 'chatRoomId' in messageResponse ? messageResponse : undefined;
  });
  orderedReactions = computed(() => orderReactionCounts(this.currentChatRoomMessageResponse()?.reactions || []));
  isCurrentUserMessage = computed(() => this.chatMessage.isCurrentUserAuthor(this.getMessageAuthor()));
  canEditMessage = computed(() => !!this.currentChatRoomMessageResponse()?.permission?.canEdit);
  canDeleteMessage = computed(() => !!this.currentChatRoomMessageResponse()?.permission?.canDelete);
  canShowMessageActionMenu = computed(() => this.canEditMessage() || this.canDeleteMessage());
  messageItemClasses = computed(() => ({
    'c-message-focus': this.isFocused(),
    'p-2': this.isPreview(),
    'p-4': !this.isPreview(),
    ...((this.applyCurrentUserStyle() && this.isCurrentUserMessage() && !this.isPreview()) ? {
      'border-cyan-200/20 bg-cyan-300/15': true,
    } : {
      'border-white/15 bg-white/15': true,
    }),
  }));
  private chatMessage = inject(ChatMessage);
  private chatState = inject(ChatState);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faFaceSmile = faFaceSmile;
  faXmark = faXmark;

  reactionOptions = CHAT_REACTION_OPTIONS;

  constructor() {
    effect(() => {
      const messageResponse = this.messageResponse();
      this.setCurrentMessageResponse(messageResponse);
    });
  }

  getReactionEmoji(code: string) {
    return this.reactionOptions.find((reaction) => reaction.code === code)?.emoji || code;
  }

  getMessageAuthor(): Author {
    const messageResponse = this.currentMessageResponse();
    const message = messageResponse?.message;

    if (messageResponse?.author) {
      return messageResponse.author;
    }

    if (message?.guestSessionId) {
      return {
        type: 'GUEST',
        id: message.guestSessionId,
      };
    }

    return {
      type: 'USER',
      id: message?.userId || 0,
    };
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
        chatRoomId: this.currentChatRoomMessageResponse()?.chatRoomId,
        messageId: this.messageId(),
      },
    });
  }

  quoteReply() {
    const messageResponse = this.currentChatRoomMessageResponse();

    if (messageResponse) {
      this.quoteReplyRequest.emit(messageResponse);
    }
  }

  quoteMessageClick(messageId: number) {
    this.quoteMessageClickRequest.emit(messageId);
  }

  startEdit() {
    this.editingQuotedMessage.set(this.currentChatRoomMessageResponse()?.quotedMessage);
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
              const message = error.error?.message || error.message || 'Failed to delete message. Please try again.';
              this.snackBar.open(message, '✖', { duration: 3000, panelClass: 'snackbar-error' });
              dialogRef.close();
            },
          });
        },
      },
    });
  }

  private setCurrentMessageResponse(messageResponse: ChatRoomMessageResponse | QuotedMessageResponse) {
    this.currentMessageResponse.set(messageResponse);
    if ('myReaction' in messageResponse) {
      this.selectedReactionCode.set(messageResponse.myReaction?.emoji || '');
    } else {
      this.selectedReactionCode.set('');
    }
  }
}
