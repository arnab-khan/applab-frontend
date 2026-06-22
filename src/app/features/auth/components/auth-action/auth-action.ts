import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../../core/services/auth';
import { Guest } from '../../../../core/services/guest';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { TelemetryClick } from '../../../../shared/directives/telemetry-click';

@Component({
  selector: 'app-auth-action',
  imports: [MatMenuModule, RouterLink, LoadingButton, TelemetryClick],
  templateUrl: './auth-action.html',
  styleUrl: './auth-action.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthAction {
  private auth = inject(Auth);
  private guest = inject(Guest);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  authState = this.auth.authState;
  guestState = this.guest.guestState;
  matchTriggerWidth = input(false);
  isGuestSubmitting = signal(false);
  returnUrlQueryParams = computed(() => ({ returnUrl: this.router.url }));
  hasAuthenticatedAccess = computed(() => !!this.authState().user?.id || this.guestState().isGuest);

  continueAsGuest(menuTrigger: MatMenuTrigger) {
    if (this.isGuestSubmitting()) {
      return;
    }

    this.isGuestSubmitting.set(true);
    this.guest.createGuest().subscribe({
      next: () => {
        this.isGuestSubmitting.set(false);
        menuTrigger.closeMenu();
        this.snackBar.open('You can now interact on this page', '✖', {
          duration: 3000,
          panelClass: 'snackbar-success',
        });
      },
      error: (error) => {
        console.error(error);
        this.isGuestSubmitting.set(false);
      },
    });
  }
}
