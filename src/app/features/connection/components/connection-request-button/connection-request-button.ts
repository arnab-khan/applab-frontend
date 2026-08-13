import { NgClass } from '@angular/common';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faUserCheck, faUserMinus, faUserPlus, faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { Auth } from '../../../../core/services/auth';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { ConnectionStatus } from '../../../../shared/interfaces/connection';
import { ConnectionApi } from '../../services/connection-api';

type ConnectionButtonStatus = ConnectionStatus | 'NONE';

const CONNECTION_BUTTON_STATUS_LIST: Record<ConnectionButtonStatus, {
  icon: typeof faUserPlus;
  themeClass: string;
  text: string;
  disabled: boolean;
}> = {
  NONE: {
    icon: faUserPlus,
    themeClass: 'u-btn-primary-emerald',
    text: 'Connect',
    disabled: false,
  },
  PENDING: {
    icon: faClock,
    themeClass: 'u-btn-secondary-gray',
    text: 'Pending',
    disabled: true,
  },
  ACCEPTED: {
    icon: faUserCheck,
    themeClass: 'u-btn-secondary-gray',
    text: 'Connected',
    disabled: true,
  },
  REJECTED: {
    icon: faUserXmark,
    themeClass: 'u-btn-primary-emerald',
    text: 'Connect',
    disabled: false,
  },
  CANCELED: {
    icon: faUserMinus,
    themeClass: 'u-btn-primary-emerald',
    text: 'Connect',
    disabled: false,
  },
};

@Component({
  selector: 'app-connection-request-button',
  imports: [FontAwesomeModule, LoadingButton, NgClass],
  templateUrl: './connection-request-button.html',
  styleUrl: './connection-request-button.scss',
})
export class ConnectionRequestButton {
  private connectionApi = inject(ConnectionApi);
  private snackBar = inject(MatSnackBar);
  private auth = inject(Auth);
  userId = input.required<number>();
  isSubmitting = signal(false);
  isStatusLoading = signal(false);
  connectionStatus = signal<ConnectionButtonStatus>('NONE');
  buttonStatus = computed(() => CONNECTION_BUTTON_STATUS_LIST[this.connectionStatus()]);

  constructor() {
    effect(() => {
      const authState = this.auth.authState();

      if (!authState.completed || authState.status !== 'authenticated') {
        this.connectionStatus.set('NONE');
        this.isStatusLoading.set(false);
        return;
      }

      this.loadConnectionStatus(this.userId());
    });
  }

  private loadConnectionStatus(userId: number) {
    this.isStatusLoading.set(true);
    this.connectionApi.getStatus(userId).subscribe({
      next: (status) => {
        this.connectionStatus.set(status || 'NONE');
        this.isStatusLoading.set(false);
      },
      error: (err) => {
        if (err?.status !== 401) {
          console.error('Error loading connection status', err);
        }
        this.connectionStatus.set('NONE');
        this.isStatusLoading.set(false);
      },
    });
  }

  onConnect() {
    if (this.buttonStatus().disabled) {
      return;
    }

    this.isSubmitting.set(true);
    this.connectionApi.add({ receiverUserId: this.userId() }).subscribe({
      next: () => {
        this.snackBar.open('Connection request sent', '✖', {
          duration: 3000,
          panelClass: 'snackbar-success',
        });
        this.connectionStatus.set('PENDING');
        this.isSubmitting.set(false);
      },
      error: (err) => {
        console.error('Error sending connection request', err);
        const message = err.error?.message || err.error?.error || err.error || 'Failed to send connection request';
        this.snackBar.open(message, '✖', {
          duration: 3000,
          panelClass: 'snackbar-error',
        });
        this.isSubmitting.set(false);
      },
    });
  }
}
