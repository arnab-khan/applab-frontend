import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Auth } from '../../../../core/services/auth';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';

@Component({
  selector: 'app-view-profile',
  imports: [DatePipe, RouterModule, Thumbnail],
  templateUrl: './view-profile.html',
  styleUrl: './view-profile.scss',
})
export class ViewProfile {
  private authService = inject(Auth);
  authState = this.authService.authState;
  profileState = this.authService.profileState;

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        console.log('Logout successful');
      },
      error: (error) => {
        console.error('Logout error', error);
      }
    });
  }
}
