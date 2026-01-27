import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldsComponent } from '../../../../shared/components/form/form-fields/form-fields';
import { FieldConfig } from '../../../../shared/components/form/form-fields/form-fields.interface';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { User } from '../../../../core/services/user';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { existsValidator } from '../../../../shared/validators/exists-validator';
import { map } from 'rxjs';

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
            existsValidator({
              apiObserable: (value) => {
                return this.userService.checkIfUserExists({ username: value }).pipe(
                  map(response => response.exists)
                )
              }
            }),
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
