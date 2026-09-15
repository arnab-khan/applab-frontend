import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { Notification } from './notification';

@Injectable({ providedIn: 'root' })
export class ErrorNotification {
  private notification = inject(Notification);

  show(error: HttpErrorResponse, fallback: string, config?: MatSnackBarConfig): void {
    if (error.status === 0) return;

    const body = error.error;
    const message = [body?.message, body?.error, body].find(
      value => typeof value === 'string' && value.trim().length > 0,
    ) || fallback;

    this.notification.showError(message, {
      duration: 5000,
      ...config,
    });
  }
}
