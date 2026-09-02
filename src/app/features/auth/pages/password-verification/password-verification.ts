import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { User } from '../../../../core/services/user';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { FormFieldsComponent } from '../../../../shared/components/forms/form-fields/form-fields';
import { PasswordField } from '../../../../shared/components/forms/password-field/password-field';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { ScrollToInvalid } from '../../../../shared/directives/scroll-to-invalid';
import { PasswordVerificationPurpose } from '../../../../shared/interfaces/user';
import { FormValidation } from '../../../../shared/services/form-validation';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';

const PURPOSE_CONTENT: Record<PasswordVerificationPurpose, {
  title: string;
  description: string;
  successRoute: string;
}> = {
  CHANGE_EMAIL: {
    title: 'Verify Password',
    description: 'Enter your current password to continue changing your email.',
    successRoute: '/auth/email-entry?purpose=EDIT_PROFILE',
  },
};

@Component({
  selector: 'app-password-verification',
  imports: [
    ReactiveFormsModule,
    MatSnackBarModule,
    FormFieldsComponent,
    PasswordField,
    LoadingButton,
    SanitizeInput,
    ScrollToInvalid,
  ],
  templateUrl: './password-verification.html',
  styleUrl: './password-verification.scss',
})
export class PasswordVerification implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private formBuilder = inject(NonNullableFormBuilder);
  private userService = inject(User);
  private formValidation = inject(FormValidation);
  private snackBar = inject(MatSnackBar);

  purpose = signal<PasswordVerificationPurpose | null>(null);

  pageContent = computed(() => {
    const purpose = this.purpose();
    return purpose ? PURPOSE_CONTENT[purpose] : {
    title: 'Verify Password',
    description: 'Enter your current password to continue.',
    };
  });

  passwordVerificationForm!: FormGroup<{
    currentPassword: FormControl<string>;
  }>;

  hasClickedSubmit = signal(false);
  isSubmitting = signal(false);

  ngOnInit(): void {
    this.createForm();

    const purpose = this.route.snapshot.queryParamMap.get('purpose');
    if (!purpose || !(purpose in PURPOSE_CONTENT)) {
      this.router.navigateByUrl('/404', { replaceUrl: true });
      return;
    }

    this.purpose.set(purpose as PasswordVerificationPurpose);
  }

  createForm(): void {
    this.passwordVerificationForm = this.formBuilder.group({
      currentPassword: ['', [commonFormValidator({
        required: true,
      })]],
    });
  }

  onSubmit(): void {
    this.hasClickedSubmit.set(true);
    this.formValidation.validateAndRun(this.passwordVerificationForm, () => {
      const purpose = this.purpose();
      if (!purpose) {
        this.snackBar.open('Password verification purpose is invalid.', '✖', {
          duration: 5000,
          panelClass: 'snackbar-error',
        });
        return;
      }

      this.isSubmitting.set(true);
      this.userService.verifyPassword({
        currentPassword: this.passwordVerificationForm.controls.currentPassword.value,
        purpose,
      }).pipe(
        finalize(() => this.isSubmitting.set(false)),
      ).subscribe({
        next: () => {
          this.router.navigateByUrl(PURPOSE_CONTENT[purpose].successRoute, { replaceUrl: true });
        },
        error: error => {
          const message = error.error?.message || error.error?.error || 'Password verification failed. Please try again.';
          this.snackBar.open(message, '✖', {
            duration: 5000,
            panelClass: 'snackbar-error',
          });
        },
      });
    });
  }
}
