import { DatePipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { AuthorSummary } from '../../../../shared/components/data-display/author-summary/author-summary';
import { InfiniteScroll } from '../../../../shared/components/data-display/infinite-scroll/infinite-scroll';
import { DialogHeader } from '../../../../shared/components/dialogs/dialog-header/dialog-header';
import { Author } from '../../../../shared/interfaces/author';
import { TelemetryActivityType, TelemetryEvent, TelemetryLocalSession } from '../../../../shared/interfaces/telemetry';
import { TelemetryApi } from '../../services/telemetry-api';
import { TELEMETRY_ACTIVITY_TYPES } from '../../config/telemetry.config';

interface SessionEventsDialogData {
  session: TelemetryLocalSession;
}

@Component({
  selector: 'app-session-events-dialog',
  imports: [DatePipe, JsonPipe, FormsModule, MatDialogModule, MatSelectModule, FontAwesomeModule, DialogHeader, InfiniteScroll, AuthorSummary],
  templateUrl: './session-events-dialog.html',
  styleUrl: './session-events-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionEventsDialog {
  private telemetryApi = inject(TelemetryApi);
  readonly data = inject<SessionEventsDialogData>(MAT_DIALOG_DATA);

  events = signal<TelemetryEvent[]>([]);
  isLoading = signal(true);
  isLoadingMore = signal(false);
  hasMore = signal(true);
  errorMessage = signal('');
  selectedType = signal<TelemetryActivityType | null>(null);
  selectedSuccess = signal<boolean | null>(null);
  currentPage = 0;
  readonly pageSize = 50;
  readonly activityTypes = TELEMETRY_ACTIVITY_TYPES;
  readonly apiResults = TELEMETRY_ACTIVITY_TYPES.find(type => type.value === 'API_CALL')?.options ?? [];
  readonly faArrowDown = faArrowDown;

  constructor() {
    this.loadEvents();
  }

  loadMore() {
    if (!this.hasMore() || this.isLoading() || this.isLoadingMore()) return;
    this.currentPage++;
    this.isLoadingMore.set(true);
    this.loadEvents();
  }

  filterByType(type: TelemetryActivityType | null) {
    if (this.selectedType() === type) return;
    this.selectedType.set(type);
    this.selectedSuccess.set(null);
    this.resetAndLoadEvents();
  }

  filterBySuccess(success: boolean | null) {
    if (this.selectedSuccess() === success) return;
    this.selectedSuccess.set(success);
    this.resetAndLoadEvents();
  }

  private resetAndLoadEvents() {
    this.currentPage = 0;
    this.events.set([]);
    this.hasMore.set(true);
    this.isLoading.set(true);
    this.loadEvents();
  }

  title(event: TelemetryEvent) {
    if (event.type === 'ROUTER_CHANGE') return `Opened ${event.activity['to'] || event.route}`;
    if (event.type === 'API_CALL') return `${event.activity['method'] || 'Request'} ${event.activity['url'] || event.name}`;
    return event.name.replace(/[_-]+/g, ' ');
  }

  isFailure(event: TelemetryEvent) {
    return event.type === 'ERROR' || event.type === 'WEBSOCKET_ERROR' || event.type === 'NETWORK_ERROR' || event.activity['success'] === false;
  }

  isNetworkRestored(event: TelemetryEvent) {
    return event.type === 'NETWORK_RESTORED';
  }

  getEventAuthor(event: TelemetryEvent): Author {
    const fallbackName = event.identityType === 'ANONYMOUS'
      ? 'Anonymous'
      : event.identityType === 'USER'
        ? `User #${event.identityId}`
        : undefined;

    return {
      type: event.identityType,
      id: event.user?.id ?? event.identityId ?? 0,
      name: event.user?.name || event.user?.username || fallbackName,
      username: event.user?.username,
      compressedProfileImageUrl: event.user?.compressedProfileImageUrl,
    };
  }

  private loadEvents() {
    this.errorMessage.set('');
    this.telemetryApi.getAll({
      localSessionId: this.data.session.localSessionId,
      page: this.currentPage,
      size: this.pageSize,
      sort: 'id,asc',
      ...(this.selectedType() ? { type: this.selectedType()! } : {}),
      ...(this.selectedSuccess() !== null ? { success: this.selectedSuccess()! } : {}),
    }).subscribe({
      next: response => {
        this.events.update(events => [...events, ...response.content]);
        this.hasMore.set(!response.last);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: error => {
        console.error('Error loading telemetry events', error);
      },
    });
  }
}
