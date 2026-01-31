import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldsComponent } from '../../../../shared/components/form/form-fields/form-fields';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { LoginUser } from '../../../../shared/interfaces/user';
import { Auth } from '../../../../core/services/auth';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DEFAULT_ROUTE } from '../../../../shared/config/config';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormFieldsComponent,
    SanitizeInput,
    LoadingButton,
    MatSnackBarModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {

  private authService = inject(Auth);
  private formBuilder = inject(NonNullableFormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  loginForm!: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }>;
  isSubmitting = signal(false);
  hasClickedSubmit = false;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          commonFormValidator({
            required: true,
          }),
        ],
      ],
      password: [
        '',
        [
          commonFormValidator({
            required: true,
          }),
        ],
      ],
    });
  }

  onSubmit(): void {
    this.hasClickedSubmit = true;
    console.log('Form Value:', this.loginForm.value);
    if (this.loginForm.valid) {
      this.isSubmitting.set(true);
      this.loginUser();
    }
  }

  loginUser() {
    if (this.loginForm.valid) {
      const controls = this.loginForm.controls;
      const loginData: LoginUser = {
        username: controls.username.value,
        password: controls.password.value,
      };
      this.authService.login(loginData).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.router.navigate([DEFAULT_ROUTE]);
        },
        error: (error) => {
          this.isSubmitting.set(false);
          const message = error.error?.message || 'Login failed. Please try again.';
          this.snackBar.open(message, 'Close', { duration: 3000 });
          console.error('Login error', error);
        },
      });
    }
  }
}
