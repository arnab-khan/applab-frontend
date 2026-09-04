import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Auth } from '../../../../core/services/auth';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { FormFieldsComponent } from '../../../../shared/components/forms/form-fields/form-fields';
import { PasswordField } from '../../../../shared/components/forms/password-field/password-field';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { ScrollToInvalid } from '../../../../shared/directives/scroll-to-invalid';
import { FormValidation } from '../../../../shared/services/form-validation';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { matchControlValidator } from '../../../../shared/validators/match-control-validator';

@Component({
  selector: 'app-reset-password',
  imports: [
    ReactiveFormsModule,
    MatSnackBarModule,
    FormFieldsComponent,
    PasswordField,
    LoadingButton,
    SanitizeInput,
    ScrollToInvalid,
  ],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword implements OnInit, OnDestroy {
  private authService = inject(Auth);
  private formBuilder = inject(NonNullableFormBuilder);
  private formValidation = inject(FormValidation);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private resetToken = '';
  private expiryTimer?: ReturnType<typeof setInterval>;

  resetPasswordForm!: FormGroup<{
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
  }>;
  hasClickedSubmit = signal(false);
  isSubmitting = signal(false);
  expiresAt = signal('');
  expiresInSeconds = signal(0);
  hasExpiresInSeconds = signal(false);
  expirySecondsLeft = signal(0);
  expiryMinutes = computed(() => Math.floor(this.expirySecondsLeft() / 60));
  expiryRemainingSeconds = computed(() => this.expirySecondsLeft() % 60);

  ngOnInit(): void {
    this.createForm();
    this.resetToken = this.route.snapshot.queryParamMap.get('resetToken') || '';

    if (!this.resetToken) {
      this.router.navigateByUrl('/404', { replaceUrl: true });
      return;
    }

    const params = this.route.snapshot.queryParamMap;
    this.expiresAt.set(params.get('expiresAt') || '');
    this.expiresInSeconds.set(Number(params.get('expiresInSeconds')) || 0);
    this.hasExpiresInSeconds.set(params.has('expiresInSeconds'));
    this.startExpiryCountdown();
  }

  ngOnDestroy(): void {
    if (this.expiryTimer) clearInterval(this.expiryTimer);
  }

  createForm(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [commonFormValidator({
        required: true,
        requireNumber: true,
        requireLetter: true,
        disallowSpaces: true,
        minLength: 6,
        maxLength: 100,
      })]],
      confirmPassword: ['', [commonFormValidator({
        required: true,
        disallowSpaces: true,
        maxLength: 100,
      })]],
    }, {
      validators: [matchControlValidator({
        sourceControlName: 'password',
        targetControlName: 'confirmPassword',
        sourceControlLabel: 'password',
      })],
    });
  }

  onSubmit(): void {
    this.hasClickedSubmit.set(true);
    this.formValidation.validateAndRun(this.resetPasswordForm, () => {
      if (!this.resetToken) return;

      this.isSubmitting.set(true);
      this.authService.resetPassword({
        resetToken: this.resetToken,
        newPassword: this.resetPasswordForm.controls.password.value,
      }).pipe(
        finalize(() => this.isSubmitting.set(false)),
      ).subscribe({
        next: response => {
          this.snackBar.open(response.message, '✖', {
            duration: 5000,
            panelClass: 'snackbar-success',
          });
          this.router.navigate(['/auth/login'], {
            queryParams: {
              returnUrl: this.route.snapshot.queryParamMap.get('returnUrl'),
            },
            replaceUrl: true,
          });
        },
        error: error => {
          const message = error.error?.message || error.error?.error || 'Password reset failed. Please try again.';
          this.snackBar.open(message, '✖', {
            duration: 5000,
            panelClass: 'snackbar-error',
          });
        },
      });
    });
  }

  private startExpiryCountdown(): void {
    if (this.expiryTimer) clearInterval(this.expiryTimer);
    const parsedExpiry = Date.parse(this.expiresAt());
    const expiryDeadline = Number.isNaN(parsedExpiry)
      ? Date.now() + (this.expiresInSeconds() * 1000)
      : parsedExpiry;

    const updateSecondsLeft = () => {
      const secondsLeft = Math.max(0, Math.ceil((expiryDeadline - Date.now()) / 1000));
      this.expirySecondsLeft.set(secondsLeft);

      if (secondsLeft === 0 && this.expiryTimer) {
        clearInterval(this.expiryTimer);
        this.expiryTimer = undefined;
      }
    };

    updateSecondsLeft();
    if (this.expirySecondsLeft() > 0) {
      this.expiryTimer = setInterval(updateSecondsLeft, 1000);
    }
  }

}
