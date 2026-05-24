import { Component, inject, input, signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { Auth } from '../../../../core/services/auth';
import { Guest } from '../../../../core/services/guest';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';

@Component({
  selector: 'app-auth-action',
  imports: [MatMenuModule, RouterLink, LoadingButton],
  templateUrl: './auth-action.html',
  styleUrl: './auth-action.scss',
})
export class AuthAction {
  private auth = inject(Auth);
  private guest = inject(Guest);

  authState = this.auth.authState;
  guestState = this.guest.guestState;
  matchTriggerWidth = input(false);
  isGuestSubmitting = signal(false);

  hasAuthenticatedAccess() {
    return !!this.authState().user?.id || this.guestState().isGuest;
  }

  continueAsGuest() {
    if (this.isGuestSubmitting()) {
      return;
    }

    this.isGuestSubmitting.set(true);
    this.guest.createGuest().subscribe({
      next: () => {
        this.isGuestSubmitting.set(false);
      },
      error: (error) => {
        console.error(error);
        this.isGuestSubmitting.set(false);
      },
    });
  }
}
