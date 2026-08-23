import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faUserCheck, faUserMinus, faUserPlus, faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { Auth } from '../../../../core/services/auth';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { Connection, ConnectionStatus } from '../../../../shared/interfaces/connection';
import { ConnectionApi } from '../../services/connection-api';

type ConnectionButtonStatus = ConnectionStatus | 'NONE';

interface ConnectionButtonPresentation {
  icon: typeof faUserPlus;
  themeClass: string;
  text: string;
}

interface ConnectionStatusAction extends ConnectionButtonPresentation {
  status?: ConnectionStatus;
  description?: string;
  successMessage?: string;
}

const CONNECTION_STATUS_ACTIONS: Record<string, ConnectionStatusAction[]> = {
  PENDING_RECEIVED: [
    {
      icon: faUserCheck,
      themeClass: 'u-btn-primary-emerald',
      text: 'Accept',
      status: 'ACCEPTED',
      successMessage: 'Connection request accepted',
    },
    {
      icon: faUserXmark,
      themeClass: 'u-btn-secondary-gray',
      text: 'Reject',
      status: 'REJECTED',
      successMessage: 'Connection request rejected',
    },
  ],
  REJECTED: [
    {
      icon: faUserPlus,
      themeClass: 'u-btn-primary-emerald',
      text: 'Reconnect',
      status: 'PENDING',
      description: 'Send a new connection request to this user.',
      successMessage: 'Connection request sent',
    },
  ],
};

const CONNECTION_BUTTON_STATUS_LIST: Record<ConnectionButtonStatus, ConnectionButtonPresentation & {
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
  imports: [FontAwesomeModule, LoadingButton, NgClass, NgTemplateOutlet, MatMenuModule],
  templateUrl: './connection-request-button.html',
  styleUrl: './connection-request-button.scss',
})
export class ConnectionRequestButton {
  private connectionApi = inject(ConnectionApi);
  private snackBar = inject(MatSnackBar);
  private auth = inject(Auth);
  private statusLoadStarted = false;
  userId = input.required<number>();
  connection = input<Connection>();
  isSubmitting = signal(false);
  isStatusLoading = signal(false);
  currentConnection = signal<Connection | null>(null);
  connectionStatus = signal<ConnectionButtonStatus>('NONE');
  statusActions = computed<ConnectionStatusAction[]>(() => {
    const connection = this.currentConnection();
    const currentUserId = this.auth.authState().user?.id;

    if (connection?.status === 'PENDING' && connection.receiverUserId === currentUserId) {
      return CONNECTION_STATUS_ACTIONS['PENDING_RECEIVED'];
    }

    if (connection?.status === 'REJECTED') {
      return CONNECTION_STATUS_ACTIONS['REJECTED'];
    }

    return [];
  });
  buttonStatus = computed(() => {
    const connection = this.currentConnection();
    const currentUserId = this.auth.authState().user?.id;

    if (connection?.status === 'PENDING' && connection.receiverUserId === currentUserId) {
      return {
        icon: faUserCheck,
        themeClass: 'u-btn-primary-emerald',
        text: 'Respond to Request',
        disabled: false,
      };
    }

    if (connection?.status === 'REJECTED') {
      return {
        icon: faUserXmark,
        themeClass: 'u-btn-secondary-gray',
        text: connection.senderUserId === currentUserId ? 'Rejected' : 'You Rejected',
        disabled: false,
      };
    }

    return CONNECTION_BUTTON_STATUS_LIST[this.connectionStatus()];
  });

  constructor() {
    effect(() => {
      const connection = this.connection();

      if (connection) {
        this.setConnection(connection);
        return;
      }

      if (this.statusLoadStarted) {
        return;
      }

      this.statusLoadStarted = true;
      this.loadConnectionStatus(this.userId());
    });
  }

  private loadConnectionStatus(userId: number) {
    this.isStatusLoading.set(true);
    this.connectionApi.getStatus(userId).subscribe({
      next: (connection) => {
        this.setConnection(connection);
      },
      error: (err) => {
        if (err?.status !== 401) {
          console.error('Error loading connection status', err);
        }
        this.setConnection(null);
      },
    });
  }

  onButtonClick() {
    const connection = this.currentConnection();

    if (!connection || connection.status === 'REJECTED' || connection.status === 'CANCELED') {
      this.onConnect();
    }
  }

  onConnect() {
    if (this.buttonStatus().disabled) {
      return;
    }

    this.isSubmitting.set(true);
    this.connectionApi.add({ receiverUserId: this.userId() }).subscribe({
      next: (connection) => {
        this.snackBar.open('Connection request sent', '✖', {
          duration: 3000,
          panelClass: 'snackbar-success',
        });
        this.setConnection(connection);
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

  onStatusActionSelect(action: ConnectionStatusAction) {
    if (!action.status) {
      return;
    }

    const connection = this.currentConnection();
    if (!connection) {
      return;
    }

    this.isSubmitting.set(true);
    this.connectionApi.updateStatus({ id: connection.id, status: action.status }).subscribe({
      next: (connection) => {
        this.setConnection(connection);
        this.snackBar.open(action.successMessage || 'Connection request updated', '✖', {
          duration: 3000,
          panelClass: 'snackbar-success',
        });
        this.isSubmitting.set(false);
      },
      error: (err) => {
        console.error('Error updating connection request', err);
        const message = err.error?.message || err.error?.error || err.error || 'Failed to update connection request';
        this.snackBar.open(message, '✖', {
          duration: 3000,
          panelClass: 'snackbar-error',
        });
        this.isSubmitting.set(false);
      },
    });
  }

  private setConnection(connection: Connection | null | undefined) {
    this.currentConnection.set(connection || null);
    this.connectionStatus.set(connection?.status || 'NONE');
    this.isStatusLoading.set(false);
  }
}
