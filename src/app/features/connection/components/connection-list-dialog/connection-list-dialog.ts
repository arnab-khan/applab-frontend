import { DatePipe, NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { finalize, Subscription } from 'rxjs';
import { InfiniteScroll } from '../../../../shared/components/data-display/infinite-scroll/infinite-scroll';
import { DialogHeader } from '../../../../shared/components/dialogs/dialog-header/dialog-header';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { ConnectionQueryParams, ConnectionWithUser } from '../../../../shared/interfaces/connection';
import { userProfileLink } from '../../../../shared/utils/link';
import { ProfileApiService } from '../../../profile/services/profile-api.service';
import { ConnectionRequestButton } from '../connection-request-button/connection-request-button';
import { ConnectionApi } from '../../services/connection-api';

type ConnectionTab = 'connections' | 'pending' | 'rejected';

const CONNECTION_TABS: { value: ConnectionTab; label: string }[] = [
  { value: 'connections', label: 'Connections' },
  { value: 'pending', label: 'Pending Requests' },
  { value: 'rejected', label: 'Rejected Requests' },
];

@Component({
  selector: 'app-connection-list-dialog',
  imports: [DatePipe, NgClass, MatDialogModule, RouterLink, FontAwesomeModule, InfiniteScroll, DialogHeader, Thumbnail, ConnectionRequestButton],
  templateUrl: './connection-list-dialog.html',
  styleUrl: './connection-list-dialog.scss',
})
export class ConnectionListDialog {
  private readonly connectionApi = inject(ConnectionApi);
  private readonly profileApi = inject(ProfileApiService);
  readonly data = inject<{ userId: number }>(MAT_DIALOG_DATA);
  readonly userProfileLink = userProfileLink;
  readonly tabs = CONNECTION_TABS;

  readonly connections = signal<ConnectionWithUser[]>([]);
  readonly activeTab = signal<ConnectionTab>('connections');
  readonly isLoading = signal(true);
  readonly isLoadingMore = signal(false);
  readonly hasMore = signal(false);
  readonly faUsers = faUsers;

  private currentPage = 0;
  private readonly pageSize = 20;
  private connectionsSubscription?: Subscription;

  constructor() {
    this.loadConnections();
  }

  loadMore() {
    if (!this.hasMore() || this.isLoadingMore()) {
      return;
    }

    this.currentPage++;
    this.isLoadingMore.set(true);
    this.loadConnections();
  }

  selectTab(tab: ConnectionTab) {
    if (tab === this.activeTab()) {
      return;
    }

    this.connectionsSubscription?.unsubscribe();
    this.activeTab.set(tab);
    this.currentPage = 0;
    this.connections.set([]);
    this.hasMore.set(false);
    this.isLoading.set(true);
    this.loadConnections();
  }

  profileImageUrl(url?: string) {
    return this.profileApi.getPublicImageUrl(url);
  }

  private loadConnections() {
    this.connectionsSubscription = this.connectionApi.getAll({
      ...this.tabQueryParams(),
      page: this.currentPage,
      size: this.pageSize,
      sort: 'updatedAt,desc',
    }).pipe(
      finalize(() => {
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      }),
    ).subscribe({
      next: (response) => {
        this.connections.update((connections) => [...connections, ...response.content]);
        this.hasMore.set(!response.last);
      },
      error: (error) => console.error('Error fetching connections', error),
    });
  }

  private tabQueryParams(): ConnectionQueryParams {
    switch (this.activeTab()) {
      case 'pending':
        return { userId: this.data.userId, status: 'PENDING' };
      case 'rejected':
        return { userId: this.data.userId, status: 'REJECTED' };
      default:
        return { userId: this.data.userId, status: 'ACCEPTED' };
    }
  }
}
