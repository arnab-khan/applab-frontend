import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { AiMessagePipe } from '../../../ai/pipes/ai-message';
import { AiApi } from '../../../ai/services/ai-api';
import { InfiniteScroll } from '../../../../shared/components/data-display/infinite-scroll/infinite-scroll';
import { DialogHeader } from '../../../../shared/components/dialogs/dialog-header/dialog-header';
import { AiChatRecord, AiChatSession } from '../../../../shared/interfaces/ai';
import { AuthorSummary } from '../../../../shared/components/data-display/author-summary/author-summary';
import { Author } from '../../../../shared/interfaces/author';

interface AiSessionDialogData {
  session: AiChatSession;
}

@Component({
  selector: 'app-ai-session-dialog',
  imports: [DatePipe, MatDialogModule, RouterLink, FontAwesomeModule, AiMessagePipe, InfiniteScroll, DialogHeader, AuthorSummary],
  templateUrl: './ai-session-dialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiSessionDialog {
  private aiApi = inject(AiApi);
  readonly data = inject<AiSessionDialogData>(MAT_DIALOG_DATA);

  chats = signal<AiChatRecord[]>([]);
  isLoading = signal(true);
  isLoadingMore = signal(false);
  hasMore = signal(true);
  errorMessage = signal('');
  currentPage = 0;
  readonly pageSize = 20;
  readonly faArrowDown = faArrowDown;

  constructor() {
    this.loadChats();
  }

  loadMore(): void {
    if (!this.hasMore() || this.isLoading() || this.isLoadingMore()) return;
    this.currentPage++;
    this.isLoadingMore.set(true);
    this.loadChats();
  }

  chatAuthor(chat: AiChatRecord): Author {
    return {
      type: chat.user ? 'USER' : 'ANONYMOUS',
      id: chat.user?.id ?? chat.userId ?? 0,
      name: chat.user?.name || chat.user?.username || (chat.userId ? `User #${chat.userId}` : 'Anonymous'),
      username: chat.user?.username,
      compressedProfileImageUrl: chat.user?.compressedProfileImageUrl,
    };
  }

  private loadChats(): void {
    this.errorMessage.set('');
    this.aiApi.getAll({
      aiSessionId: this.data.session.aiSessionId,
      page: this.currentPage,
      size: this.pageSize,
      sort: 'id,asc',
    }).subscribe({
      next: response => {
        this.chats.update(chats => [...chats, ...response.content]);
        this.hasMore.set(!response.last);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: () => {
        this.errorMessage.set('Unable to load this AI conversation.');
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
    });
  }
}
