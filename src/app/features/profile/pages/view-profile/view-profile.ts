import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { Auth } from '../../../../core/services/auth';
import { User } from '../../../../core/services/user';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';

@Component({
  selector: 'app-view-profile',
  imports: [DatePipe, RouterModule, Thumbnail],
  templateUrl: './view-profile.html',
  styleUrl: './view-profile.scss',
})
export class ViewProfile implements OnInit {
  private authService = inject(Auth);
  private userService = inject(User);
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
