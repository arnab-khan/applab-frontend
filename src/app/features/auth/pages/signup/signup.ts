import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, NonNullableFormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldsComponent } from '../../../../shared/components/form-fields/form-fields';
import { FieldConfig } from '../../../../shared/components/form-fields/form-fields.interface';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { AuthApi } from '../../../../core/services/auth-api';
import { User } from '../../../../core/services/user';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { usernameExistsValidator } from '../../../../shared/validators/username-exists-validator';

@Component({
  selector: 'app-signup',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormFieldsComponent,
    SanitizeInput,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup implements OnInit {
  signupForm!: FormGroup<{
    name: FormControl<string>;
    username: FormControl<string>;
    password: FormControl<string>;
  }>;
  usernameConfig!: FieldConfig;
  passwordConfig!: FieldConfig;
  clickedOnSubmitButton = false;
  usernameExists = true;
  usernameValidetorHasError = false;

  constructor(
    private authApiService: AuthApi,
    private userService: User,
    private formBuilder: NonNullableFormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', [commonFormValidator({
        required: true,
        disallowNumber: true,
        requireLetter: true,
        disallowSpecialChars: true,
        maxLength: 30,
      })]],
      username: [
        '',
        {
          validators: [
            commonFormValidator({
              required: true,
              disallowNumber: true,
              disallowSpaces: true,
              disallowSpecialChars: true,
              minLength: 3,
              maxLength: 10,
            }),
          ],
          asyncValidators: [
            usernameExistsValidator(this.userService),
          ],
        },
      ],

      password: ['', [commonFormValidator({
        required: true,
        requireNumber: true,
        requireLetter: true,
        disallowSpaces: true,
        minLength: 6,
        maxLength: 20,
      }),]],
    });
  }

  onSubmit(): void {
    this.clickedOnSubmitButton = true;
    console.log('Form Value:', this.signupForm.value);
    if (this.signupForm.valid) {

    }
  }
}
