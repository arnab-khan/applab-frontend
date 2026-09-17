import { inject, Injectable } from '@angular/core';
import { Notification } from '../../shared/services/notification';
import { Telemetry } from './telemetry';
import { Platform } from '../../shared/services/platform';

@Injectable({ providedIn: 'root' })
export class NetworkNotification {
  private notification = inject(Notification);
  private telemetry = inject(Telemetry);
  private platform = inject(Platform);
  private offlineSnackbarOpen = false;

  showOffline(): void {
    if (!this.platform.isBrowser()) return;
    if (this.offlineSnackbarOpen) return;

    this.offlineSnackbarOpen = true;
    this.telemetry.collectActivity({
      name: navigator.onLine ? 'server_unreachable' : 'internet_connection_lost',
      type: 'NETWORK_ERROR',
      activity: {
        online: navigator.onLine,
      },
    });
    this.notification.showError(navigator.onLine
      ? 'Unable to reach the server. Please try again later.'
      : 'No internet connection. Please check your network.', {
      duration: navigator.onLine ? 5000 : 0,
      verticalPosition: 'top',
    }).afterDismissed().subscribe(() => {
      this.offlineSnackbarOpen = false;
    });
  }

  showOnline(): void {
    this.offlineSnackbarOpen = false;
    this.telemetry.collectActivity({
      name: 'internet_connection_restored',
      type: 'NETWORK_RESTORED',
      activity: {
        online: true,
      },
    });
    this.notification.showSuccess('You’re back online.', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
