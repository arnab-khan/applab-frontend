import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { User } from '../../../../core/services/user';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { FormFieldsComponent } from '../../../../shared/components/forms/form-fields/form-fields';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { ScrollToInvalid } from '../../../../shared/directives/scroll-to-invalid';
import { FormValidation } from '../../../../shared/services/form-validation';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { EmailFlowPurpose } from '../../../../shared/interfaces/user';

const PURPOSE_CONTENT: Record<EmailFlowPurpose, {
  title: string;
  description: string;
  successRoute: string;
}> = {
  EDIT_PROFILE: {
    title: 'Enter New Email',
    description: 'Enter the new email address you want to use. We will send a verification code to it.',
    successRoute: '/auth/otp-verification',
  },
  SIGNUP: {
    title: 'Add Your Email',
    description: 'Enter your email address. We will send a verification code to it.',
    successRoute: '/auth/otp-verification',
  },
};

@Component({
  selector: 'app-email-entry',
  imports: [
    ReactiveFormsModule,
    MatSnackBarModule,
    FormFieldsComponent,
    LoadingButton,
    SanitizeInput,
    ScrollToInvalid,
  ],
  templateUrl: './email-entry.html',
  styleUrl: './email-entry.scss',
})
export class EmailEntry implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private formBuilder = inject(NonNullableFormBuilder);
  private userService = inject(User);
  private formValidation = inject(FormValidation);
  private snackBar = inject(MatSnackBar);

  emailForm!: FormGroup<{
    email: FormControl<string>;
  }>;

  hasClickedSubmit = signal(false);
  isSubmitting = signal(false);
  purpose = signal<EmailFlowPurpose | null>(null);

  pageContent = computed(() => {
    const purpose = this.purpose();
    return purpose ? PURPOSE_CONTENT[purpose] : {
      title: 'Enter Email',
      description: 'Enter your email address to continue.',
    };
  });

  ngOnInit(): void {
    this.createForm();

    const purpose = this.route.snapshot.queryParamMap.get('purpose');
    if (!purpose || !(purpose in PURPOSE_CONTENT)) {
      this.router.navigateByUrl('/404', { replaceUrl: true });
      return;
    }

    this.purpose.set(purpose as EmailFlowPurpose);
  }

  createForm(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [
        commonFormValidator({ required: true, email: true, disallowSpaces: true }),
      ]],
    });
  }

  onSubmit(): void {
    this.hasClickedSubmit.set(true);
    this.formValidation.validateAndRun(this.emailForm, () => {
      this.isSubmitting.set(true);
      this.userService.sendEmailOtp({
        email: this.emailForm.controls.email.value.trim().toLowerCase(),
      }).pipe(
        finalize(() => this.isSubmitting.set(false)),
      ).subscribe({
        next: response => {
          this.router.navigate([PURPOSE_CONTENT[this.purpose()!].successRoute], {
            queryParams: {
              purpose: this.purpose(),
              emailChangeId: response.emailChangeId,
              message: response.message,
              sentTo: response.sentTo,
              expiresAt: response.expiresAt,
              expiresInSeconds: response.expiresInSeconds,
              otpDigits: response.otpDigits,
              resendCooldownSeconds: response.resendCooldownSeconds,
              resendAvailableAt: response.resendAvailableAt,
              remainingResends: response.remainingResends,
            },
            replaceUrl: true,
          });
        },
        error: error => {
          const message = error.error?.message || error.error?.error || 'Failed to send OTP. Please try again.';
          this.snackBar.open(message, '✖', {
            duration: 5000,
            panelClass: 'snackbar-error',
          });
        },
      });
    });
  }
}
