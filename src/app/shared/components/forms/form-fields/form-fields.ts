import { CommonModule } from '@angular/common';
import { Component, effect, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SentenceCasePipe } from '../../../pipes/sentence-case-pipe';
import { FieldConfig } from './form-fields.interface';

@Component({
  selector: 'app-form-fields',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SentenceCasePipe],
  templateUrl: './form-fields.html',
  styleUrl: './form-fields.scss',
})
export class FormFieldsComponent {
  fieldConfig = input<FieldConfig | undefined>();
  dynamicFormControl = input.required<FormControl>();
  hasClickedSubmit = input(false);
  text = input<{ validText?: string; pendingText?: string }>({});

  fieldErrorMessages = signal<string[]>([]);
  showInvalid = signal(false);
  isFieldRequired = signal(false);

  readonly errorOrder = [
    'required',
    'disallowNumber',
    'disallowSpaces',
    'disallowSpecialChar',
    'minLength',
    'maxLength',
    'numberRequired',
    'requireLetter',
    'uppercaseRequired',
    'lowercaseRequired',
    'specialCharRequired',
    'valueMismatch',
  ];

  constructor() {
    effect((onCleanup) => {
      const control = this.dynamicFormControl();

      const statusSub: Subscription = control.events.subscribe(() => {
        this.updateViewState();
      });

      onCleanup(() => statusSub.unsubscribe());
    });

    effect(() => {
      if (this.hasClickedSubmit()) {
        this.updateViewState();
      }
    });

    effect(() => {
      this.dynamicFormControl();
      this.updateViewState();
    });
  }

  private updateViewState(): void {
    setTimeout(() => {
      const control = this.dynamicFormControl();
      this.showInvalid.set(control.invalid && (control.touched || control.dirty || this.hasClickedSubmit()));
      this.updateErrorMessages();
      this.updateIsFieldRequired();
    });
  }

  private updateIsFieldRequired(): void {
    const control = this.dynamicFormControl();
    const errors = this.dynamicFormControl().errors;
    let isRequired = false;
    if (control.validator) {
      const validator = control.validator({} as any);
      isRequired = validator && (validator['required']);
    }
    if (errors) {
      isRequired = isRequired || errors['required'];
    }
    this.isFieldRequired.set(isRequired);
  }

  private updateErrorMessages(): void {
    const errors = this.dynamicFormControl().errors;

    if (!errors) {
      this.fieldErrorMessages.set([]);
      return;
    }

    this.fieldErrorMessages.set(
      this.errorOrder
        .filter((key) => errors[key])
        .map((key) => String(errors[key]).replace('{{LABEL}}', this.fieldConfig()?.label || '')),
    );
  }
}