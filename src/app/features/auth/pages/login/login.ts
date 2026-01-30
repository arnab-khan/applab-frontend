import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldsComponent } from '../../../../shared/components/form/form-fields/form-fields';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { LoginUser } from '../../../../shared/interfaces/user';
import { Auth } from '../../../../core/services/auth';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormFieldsComponent,
    SanitizeInput,
    LoadingButton,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  loginForm!: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }>;
  isSubmitting = false;
  hasClickedSubmit = false;

  constructor(
    private authService: Auth,
    private formBuilder: NonNullableFormBuilder,
  ) { }

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
      this.isSubmitting = true;
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
          this.isSubmitting = false;
        },
        error: (error) => {
          this.isSubmitting = false;
          console.error('Login error', error);
        },
      });
    }
  }
}
