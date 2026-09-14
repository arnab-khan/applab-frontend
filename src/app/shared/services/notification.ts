import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class Notification {
  private snackBar = inject(MatSnackBar);

  showError(message: string, config?: MatSnackBarConfig) {
    return this.snackBar.open(message, undefined, {
      duration: 5000,
      ...config,
      panelClass: 'snackbar-error',
    });
  }

  showSuccess(message: string, config?: MatSnackBarConfig) {
    return this.snackBar.open(message, undefined, {
      duration: 3000,
      ...config,
      panelClass: 'snackbar-success',
    });
  }
}
