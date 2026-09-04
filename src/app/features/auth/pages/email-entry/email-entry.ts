import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Auth } from '../../../../core/services/auth';
import { User } from '../../../../core/services/user';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { FormFieldsComponent } from '../../../../shared/components/forms/form-fields/form-fields';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { ScrollToInvalid } from '../../../../shared/directives/scroll-to-invalid';
import { FormValidation } from '../../../../shared/services/form-validation';
import { Redirect } from '../../../../shared/services/redirect';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { EmailFlowPurpose } from '../../../../shared/interfaces/auth';

type EmailEntryPurpose = EmailFlowPurpose | 'FORGOT_PASSWORD';

const PURPOSE_CONTENT: Record<EmailEntryPurpose, {
  title: string;
  description: string;
  fieldLabel: string;
  fieldPlaceholder: string;
  showSkipButton?: boolean;
}> = {
  EDIT_PROFILE: {
    title: 'Enter New Email',
    description: 'Enter the new email address you want to use. We will send a verification code to it.',
    fieldLabel: 'New Email',
    fieldPlaceholder: 'Enter your new email address',
  },
  SIGNUP: {
    title: 'Add Your Email',
    description: 'Enter your email address. We will send a verification code to it.',
    fieldLabel: 'Email',
    fieldPlaceholder: 'Enter your email address',
    showSkipButton: true,
  },
  FORGOT_PASSWORD: {
    title: 'Forgot Password',
    description: 'Enter your email address and we will send you a verification code to reset your password.',
    fieldLabel: 'Email',
    fieldPlaceholder: 'Enter your account email address',
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
  private authService = inject(Auth);
  private userService = inject(User);
  private formValidation = inject(FormValidation);
  private snackBar = inject(MatSnackBar);
  private redirect = inject(Redirect);

  emailForm!: FormGroup<{
    email: FormControl<string>;
  }>;

  hasClickedSubmit = signal(false);
  isSubmitting = signal(false);
  purpose = signal<EmailEntryPurpose | null>(null);
  useLoggedInUserEmail = computed(() => (
    this.purpose() === 'FORGOT_PASSWORD' && !!this.authService.authState().user?.email
  ));
  isForgotPasswordUnavailable = computed(() => (
    this.purpose() === 'FORGOT_PASSWORD'
    && !!this.authService.authState().user
    && !this.authService.authState().user?.email
  ));

  pageContent = computed(() => {
    const purpose = this.purpose();
    if (purpose === 'FORGOT_PASSWORD') {
      if (this.useLoggedInUserEmail()) {
        return {
          ...PURPOSE_CONTENT[purpose],
          description: 'We will send a verification code to your account email address to reset your password.',
        };
      }

      if (this.isForgotPasswordUnavailable()) {
        return {
          ...PURPOSE_CONTENT[purpose],
          description: 'No email address is linked to your account, so you cannot reset your password by email.',
        };
      }
    }

    return purpose ? PURPOSE_CONTENT[purpose] : {
      title: 'Enter Email',
      description: 'Enter your email address to continue.',
      fieldLabel: 'Email',
      fieldPlaceholder: 'Enter your email address',
    };
  });

  constructor() {
    this.createForm();

    effect(() => {
      const email = this.authService.authState().user?.email;
      if (this.purpose() === 'FORGOT_PASSWORD' && email && this.emailForm) {
        this.emailForm.controls.email.setValue(email, { emitEvent: false });
      }
    });
  }

  ngOnInit(): void {
    const purpose = this.route.snapshot.queryParamMap.get('purpose');
    if (!purpose || !(purpose in PURPOSE_CONTENT)) {
      this.router.navigateByUrl('/404', { replaceUrl: true });
      return;
    }

    this.purpose.set(purpose as EmailEntryPurpose);

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
      const purpose = this.purpose();
      if (!purpose) return;
      const email = this.emailForm.controls.email.value.trim().toLowerCase();
      this.isSubmitting.set(true);
      this.sendOtp(purpose, email).pipe(
        finalize(() => this.isSubmitting.set(false)),
      ).subscribe({
        next: response => {
          this.router.navigate(['/auth/otp-verification'], {
            queryParams: {
              purpose,
              ...response,
              returnUrl: this.route.snapshot.queryParamMap.get('returnUrl'),
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

  private sendOtp(purpose: EmailEntryPurpose, email: string) {
    if (purpose === 'FORGOT_PASSWORD') {
      return this.authService.sendForgotPasswordOtp({ email });
    }

    return this.userService.sendEmailOtp({ email });
  }

  skipEmail(): void {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    if (returnUrl) {
      this.router.navigateByUrl(returnUrl);
      return;
    }

    this.redirect.postLogin();
  }
}
