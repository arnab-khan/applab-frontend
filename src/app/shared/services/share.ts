import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class Share {
  private snackBar = inject(MatSnackBar);

  copyTextToClipboard(text: string): Promise<void> {
    return navigator.clipboard.writeText(text)
      .then(() => {
        this.snackBar.open('Profile link copied successfully', '✖', {
          duration: 3000,
          panelClass: 'snackbar-success',
        });
      })
      .catch(() => {
        this.snackBar.open('Failed to copy profile link', '✖', {
          duration: 3000,
          panelClass: 'snackbar-error',
        });
      });
  }

  shareProfileData(options: { title: string; text: string; url: string }): Promise<void> {
    if (navigator.share) {
      return navigator.share(options)
        .catch(() => {
          this.snackBar.open('Failed to share profile link', '✖', {
            duration: 3000,
            panelClass: 'snackbar-error',
          });
        });
    }
    this.snackBar.open('Sharing is not supported in this browser', '✖', {
      duration: 3000,
      panelClass: 'snackbar-error',
    });
    return Promise.resolve();
  }
}
