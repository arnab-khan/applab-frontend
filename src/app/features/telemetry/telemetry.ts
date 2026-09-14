import { DatePipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutState } from '../../core/services/layout-state';
import { AuthorSummary } from '../../shared/components/data-display/author-summary/author-summary';
import { InfiniteScroll } from '../../shared/components/data-display/infinite-scroll/infinite-scroll';
import { Author } from '../../shared/interfaces/author';
import { TelemetryActivityType, TelemetryEvent, TelemetryLocalSession } from '../../shared/interfaces/telemetry';
import { Platform } from '../../shared/services/platform';
import { SessionEventsDialog } from './components/session-events-dialog/session-events-dialog';
import { TelemetryApi } from './services/telemetry-api';
import { TELEMETRY_ACTIVITY_TYPES } from './config/telemetry.config';

@Component({
  selector: 'app-telemetry',
  imports: [DatePipe, JsonPipe, MatMenuModule, AuthorSummary, InfiniteScroll],
  templateUrl: './telemetry.html',
  styleUrl: './telemetry.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Telemetry {
  private telemetryApi = inject(TelemetryApi);
  private platform = inject(Platform);
  private dialog = inject(MatDialog);
  private layoutState = inject(LayoutState);

  sessions = signal<TelemetryLocalSession[]>([]);
  isLoading = signal(true);
  isLoadingMore = signal(false);
  hasMore = signal(true);
  errorMessage = signal('');
  currentPage = 0;
  readonly pageSize = 10;
  showAllEvents = signal(false);
  events = signal<TelemetryEvent[]>([]);
  eventsLoading = signal(false);
  eventsLoadingMore = signal(false);
  eventsHasMore = signal(true);
  eventsErrorMessage = signal('');
  eventsPage = 0;
  selectedType = signal<TelemetryActivityType | null>(null);
  selectedSuccess = signal<boolean | null>(null);
  headerHeight = this.layoutState.headerHeight;
  readonly activityTypes = TELEMETRY_ACTIVITY_TYPES;
  readonly apiResults = TELEMETRY_ACTIVITY_TYPES.find(type => type.value === 'API_CALL')?.options ?? [];

  constructor() {
    if (this.platform.isBrowser()) this.loadSessions();
  }

  loadMore() {
    if (!this.hasMore() || this.isLoading() || this.isLoadingMore()) return;
    this.currentPage++;
    this.isLoadingMore.set(true);
    this.loadSessions();
  }

  changeView(showAllEvents: boolean) {
    this.showAllEvents.set(showAllEvents);
    if (showAllEvents && !this.events().length && !this.eventsLoading()) {
      this.eventsLoading.set(true);
      this.loadEvents();
    }
  }

  loadMoreEvents() {
    if (!this.eventsHasMore() || this.eventsLoading() || this.eventsLoadingMore()) return;
    this.eventsPage++;
    this.eventsLoadingMore.set(true);
    this.loadEvents();
  }

  filterEventsByType(type: TelemetryActivityType | null) {
    if (this.selectedType() === type) return;
    this.selectedType.set(type);
    this.selectedSuccess.set(null);
    this.resetAndLoadEvents();
  }

  filterEventsBySuccess(success: boolean | null) {
    if (this.selectedSuccess() === success) return;
    this.selectedSuccess.set(success);
    this.resetAndLoadEvents();
  }

  private resetAndLoadEvents() {
    this.eventsPage = 0;
    this.events.set([]);
    this.eventsHasMore.set(true);
    this.eventsLoading.set(true);
    this.loadEvents();
  }

  selectedTypeLabel() {
    return this.activityTypes.find(type => type.value === this.selectedType())?.label ?? 'All action types';
  }

  selectedSuccessLabel() {
    return this.apiResults.find(result => result.value === this.selectedSuccess())?.label ?? 'All API results';
  }

  openSessionEvents(session: TelemetryLocalSession) {
    this.dialog.open(SessionEventsDialog, {
      width: '70rem',
      maxWidth: '98vw',
      height: '95dvh',
      data: { session },
    });
  }

  deviceLabel(session: TelemetryLocalSession) {
    return this.isInvalidBrowser(session.browser)
      ? session.platform
      : `${session.browser} · ${session.platform}`;
  }

  eventAuthor(event: TelemetryEvent): Author {
    return {
      type: event.identityType,
      id: event.user?.id ?? event.identityId ?? 0,
      name: event.user?.name || event.user?.username || (event.identityType === 'ANONYMOUS' ? 'Anonymous' : `User #${event.identityId}`),
      username: event.user?.username,
      compressedProfileImageUrl: event.user?.compressedProfileImageUrl,
    };
  }

  eventTitle(event: TelemetryEvent) {
    if (event.type === 'ROUTER_CHANGE') return `Opened ${event.activity['to'] || event.route}`;
    if (event.type === 'API_CALL') return `${event.activity['method'] || 'Request'} ${event.activity['url'] || event.name}`;
    return event.name.replace(/[_-]+/g, ' ');
  }

  isFailure(event: TelemetryEvent) {
    return event.type === 'ERROR' || event.type === 'WEBSOCKET_ERROR' || event.type === 'NETWORK_ERROR' || event.activity['success'] === false;
  }

  private isInvalidBrowser(browser: string) {
    return /not.?a.?brand/i.test(browser);
  }

  private loadEvents() {
    this.eventsErrorMessage.set('');
    this.telemetryApi.getAll({
      page: this.eventsPage,
      size: this.pageSize,
      sort: 'id,desc',
      ...(this.selectedType() ? { type: this.selectedType()! } : {}),
      ...(this.selectedSuccess() !== null ? { success: this.selectedSuccess()! } : {}),
    }).subscribe({
      next: response => {
        this.events.update(events => [...events, ...response.content]);
        this.eventsHasMore.set(!response.last);
        this.eventsLoading.set(false);
        this.eventsLoadingMore.set(false);
      },
      error: error => {
        console.error('Error loading telemetry events', error);
      },
    });
  }

  private loadSessions() {
    this.errorMessage.set('');
    this.telemetryApi.getLocalSessions({
      page: this.currentPage,
      size: this.pageSize,
      sort: 'lastSeenAt,desc',
    }).subscribe({
      next: response => {
        this.sessions.update(sessions => [...sessions, ...response.content]);
        this.hasMore.set(!response.last);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: error => {
        console.error('Error loading telemetry sessions', error);
      },
    });
  }
}
