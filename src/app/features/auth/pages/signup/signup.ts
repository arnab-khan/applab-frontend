import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormFieldsComponent } from '../../../../shared/components/form-fields/form-fields';
import { FieldConfig } from '../../../../shared/components/form-fields/form-fields.interface';
import { dynamicTextValidator } from '../../../../core/validators/dynamic-text.validator';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';

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

  constructor(
    private formBuilder: NonNullableFormBuilder,
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [dynamicTextValidator({
        required: true,
        disallowNumber: true,
        requireLetter: true,
        disallowSpecialChars: true,
        maxLength: 30,
      })]],
      username: ['', [dynamicTextValidator({
        required: true,
        disallowNumber: true,
        disallowSpaces: true,
        disallowSpecialChars: true,
        minLength: 3,
        maxLength: 10,
      })]],
      password: ['', [dynamicTextValidator({
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
