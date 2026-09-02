import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
import { finalize } from 'rxjs';
import { User } from '../../../../core/services/user';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { FormFieldsComponent } from '../../../../shared/components/forms/form-fields/form-fields';
import { ScrollToInvalid } from '../../../../shared/directives/scroll-to-invalid';
import { EmailFlowPurpose, EmailOtpResponse } from '../../../../shared/interfaces/user';
import { FormValidation } from '../../../../shared/services/form-validation';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';

const PURPOSE_CONFIG: Record<EmailFlowPurpose, { successRoute: string; successMessage?: string }> = {
  EDIT_PROFILE: {
    successRoute: '/profile/edit-profile',
    successMessage: 'Email added successfully.',
  },
  SIGNUP: {
    successRoute: '/profile/view-profile',
  },
};

@Component({
  selector: 'app-otp-verification',
  imports: [ReactiveFormsModule, MatSnackBarModule, FontAwesomeModule, NgOtpInputComponent, FormFieldsComponent, ScrollToInvalid, LoadingButton],
  templateUrl: './otp-verification.html',
  styleUrl: './otp-verification.scss',
})
export class OtpVerification implements OnInit, OnDestroy {
  readonly faCircleCheck = faCircleCheck;
  readonly faClock = faClock;

  private formBuilder = inject(NonNullableFormBuilder);
  private formValidation = inject(FormValidation);
  private userService = inject(User);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private emailChangeId = '';
  private cooldownTimer?: ReturnType<typeof setInterval>;
  private expiryTimer?: ReturnType<typeof setInterval>;

  otpForm!: FormGroup<{
    otp: FormControl<string>;
  }>;
  hasClickedSubmit = signal(false);
  isSubmitting = signal(false);
  isResending = signal(false);
  purpose = signal<EmailFlowPurpose | null>(null);
  message = signal('');
  sentTo = signal('');
  expiresAt = signal('');
  expiresInSeconds = signal(0);
  hasExpiresInSeconds = signal(false);
  resendCooldownSeconds = signal(0);
  resendAvailableAt = signal('');
  remainingResends = signal(0);
  hasRemainingResends = signal(false);
  resendSecondsLeft = signal(0);
  expirySecondsLeft = signal(0);
  expiryMinutes = computed(() => Math.floor(this.expirySecondsLeft() / 60));
  expiryRemainingSeconds = computed(() => this.expirySecondsLeft() % 60);
  otpDigits = signal(6);
  otpConfig: NgOtpInputConfig = {
    length: 6,
    allowNumbersOnly: true,
    showError: false,
    inputClass: 'otp-input-mobile-gap',
  };

  ngOnInit(): void {
    this.createForm();

    const purpose = this.route.snapshot.queryParamMap.get('purpose');
    const emailChangeId = this.route.snapshot.queryParamMap.get('emailChangeId');
    if (!purpose || !(purpose in PURPOSE_CONFIG) || !emailChangeId) {
      this.router.navigateByUrl('/404', { replaceUrl: true });
      return;
    }

    this.purpose.set(purpose as EmailFlowPurpose);
    this.emailChangeId = emailChangeId;

    const params = this.route.snapshot.queryParamMap;
    const otpDigits = Number(params.get('otpDigits')) || 6;
    this.message.set(params.get('message') || '');
    this.sentTo.set(params.get('sentTo') || '');
    this.expiresAt.set(params.get('expiresAt') || '');
    this.expiresInSeconds.set(Number(params.get('expiresInSeconds')) || 0);
    this.hasExpiresInSeconds.set(params.has('expiresInSeconds'));
    this.resendCooldownSeconds.set(Number(params.get('resendCooldownSeconds')) || 0);
    this.resendAvailableAt.set(params.get('resendAvailableAt') || '');
    this.remainingResends.set(Number(params.get('remainingResends')) || 0);
    this.hasRemainingResends.set(params.has('remainingResends'));
    this.otpDigits.set(otpDigits);
    this.otpConfig = { ...this.otpConfig, length: otpDigits };
    this.otpForm.controls.otp.setValidators([commonFormValidator({
      required: true,
      minLength: otpDigits,
      maxLength: otpDigits,
    })]);
    this.startResendCooldown();
    this.startExpiryCountdown();
  }

  ngOnDestroy(): void {
    if (this.cooldownTimer) clearInterval(this.cooldownTimer);
    if (this.expiryTimer) clearInterval(this.expiryTimer);
  }

  createForm(): void {
    this.otpForm = this.formBuilder.group({
      otp: ['', [commonFormValidator({
        required: true,
        minLength: 6,
        maxLength: 6,
      })]],
    });
  }

  onSubmit(): void {
    this.hasClickedSubmit.set(true);
    this.formValidation.validateAndRun(this.otpForm, () => {
      const purpose = this.purpose();
      if (!purpose) return;

      this.isSubmitting.set(true);
      this.userService.verifyEmailOtp({
        emailChangeId: this.emailChangeId,
        otp: this.otpForm.controls.otp.value,
      }).pipe(
        finalize(() => this.isSubmitting.set(false)),
      ).subscribe({
        next: () => {
          const successMessage = PURPOSE_CONFIG[purpose].successMessage;
          if (successMessage) {
            this.snackBar.open(successMessage, '✖', {
              duration: 5000,
              panelClass: 'snackbar-success',
            });
          }
          this.router.navigateByUrl(PURPOSE_CONFIG[purpose].successRoute, { replaceUrl: true });
        },
        error: error => {
          const message = error.error?.message || error.error?.error || 'OTP verification failed. Please try again.';
          this.snackBar.open(message, '✖', {
            duration: 5000,
            panelClass: 'snackbar-error',
          });
        },
      });
    });
  }

  resendOtp(): void {
    if (!this.sentTo() || this.remainingResends() <= 0 || this.resendSecondsLeft() > 0 || this.isResending()) return;

    this.isResending.set(true);
    this.userService.sendEmailOtp({ email: this.sentTo() }).pipe(
      finalize(() => this.isResending.set(false)),
    ).subscribe({
      next: response => {
        this.applyOtpResponse(response);
        this.otpForm.controls.otp.reset();
        this.hasClickedSubmit.set(false);
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: response,
          queryParamsHandling: 'merge',
          replaceUrl: true,
        });
        this.snackBar.open(response.message || 'OTP resent successfully.', '✖', {
          duration: 5000,
          panelClass: 'snackbar-success',
        });
      },
      error: error => {
        const message = error.error?.message || error.error?.error || 'Failed to resend OTP. Please try again.';
        this.snackBar.open(message, '✖', {
          duration: 5000,
          panelClass: 'snackbar-error',
        });
      },
    });
  }

  private applyOtpResponse(response: EmailOtpResponse): void {
    this.emailChangeId = response.emailChangeId;
    this.message.set(response.message || '');
    this.sentTo.set(response.sentTo || '');
    this.expiresAt.set(response.expiresAt || '');
    this.expiresInSeconds.set(response.expiresInSeconds || 0);
    this.hasExpiresInSeconds.set(true);
    this.resendCooldownSeconds.set(response.resendCooldownSeconds || 0);
    this.resendAvailableAt.set(response.resendAvailableAt || '');
    this.remainingResends.set(response.remainingResends || 0);
    this.hasRemainingResends.set(true);

    const otpDigits = response.otpDigits || 6;
    this.otpDigits.set(otpDigits);
    this.otpConfig = { ...this.otpConfig, length: otpDigits };
    this.otpForm.controls.otp.setValidators([commonFormValidator({
      required: true,
      minLength: otpDigits,
      maxLength: otpDigits,
    })]);
    this.startResendCooldown();
    this.startExpiryCountdown();
  }

  private startResendCooldown(): void {
    if (this.cooldownTimer) clearInterval(this.cooldownTimer);

    const updateSecondsLeft = () => {
      const availableAt = Date.parse(this.resendAvailableAt());
      const secondsLeft = Number.isNaN(availableAt)
        ? 0
        : Math.max(0, Math.ceil((availableAt - Date.now()) / 1000));
      this.resendSecondsLeft.set(secondsLeft);

      if (secondsLeft === 0 && this.cooldownTimer) {
        clearInterval(this.cooldownTimer);
        this.cooldownTimer = undefined;
      }
    };

    updateSecondsLeft();
    if (this.resendSecondsLeft() > 0) {
      this.cooldownTimer = setInterval(updateSecondsLeft, 1000);
    }
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
