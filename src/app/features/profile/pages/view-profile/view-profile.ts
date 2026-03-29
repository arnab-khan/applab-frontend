import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { Auth } from '../../../../core/services/auth';
import { User } from '../../../../core/services/user';
import { CommonDialog, CommonDialogResult } from '../../../../shared/components/dialogs/common-dialog/common-dialog';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';

@Component({
  selector: 'app-view-profile',
  imports: [DatePipe, RouterModule, MatDialogModule, Thumbnail],
  templateUrl: './view-profile.html',
  styleUrl: './view-profile.scss',
})
export class ViewProfile implements OnInit {
  private authService = inject(Auth);
  private userService = inject(User);
  private dialog = inject(MatDialog);
  authState = this.authService.authState;
  profileState = this.authService.profileState;
  profileImageLoading = signal(false);

  ngOnInit() {
    this.loadFullProfileImage();
  }

  loadFullProfileImage() {
    this.profileImageLoading.set(true);
    this.userService.getFullProfileImage().pipe(
      finalize(() => this.profileImageLoading.set(false))
    ).subscribe();
  }

  onLogout() {
    this.dialog.open(CommonDialog, {
      width: '30rem',
      data: {
        type: 'warning',
        message: 'Are you sure you want to logout?',
        confirmText: 'Logout',
        cancelText: 'Cancel',
        onConfirm: (dialogRef: MatDialogRef<CommonDialog, CommonDialogResult>, dialog: CommonDialog) => {
          this.authService.logout().pipe(
            finalize(() => dialog.isConfirming.set(false))
          ).subscribe({
            next: () => {
              dialogRef.close({ confirmed: true });
              console.log('Logout successful');
            },
            error: (error) => {
              console.error('Logout error', error);
            }
          });
        },
      },
    });
  }
}
