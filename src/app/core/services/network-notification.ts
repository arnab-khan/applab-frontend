import { inject, Injectable } from '@angular/core';
import { Notification } from '../../shared/services/notification';
import { Telemetry } from './telemetry';

@Injectable({ providedIn: 'root' })
export class NetworkNotification {
  private notification = inject(Notification);
  private telemetry = inject(Telemetry);
  private offlineSnackbarOpen = false;

  showOffline(): void {
    if (this.offlineSnackbarOpen) return;

    this.offlineSnackbarOpen = true;
    this.telemetry.collectActivity({
      name: 'internet_connection_lost',
      type: 'NETWORK_ERROR',
      activity: {
        online: false,
      },
    });
    this.notification.showError('No internet connection. Please check your network.', {
      duration: 0,
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
