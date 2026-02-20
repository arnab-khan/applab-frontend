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
  ];

  constructor() {
    effect((onCleanup) => {
      const control = this.dynamicFormControl();

      control.updateValueAndValidity();
      this.updateViewState();

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
  }

  private updateViewState(): void {
    const control = this.dynamicFormControl();
    this.showInvalid.set(control.invalid && (control.touched || control.dirty || this.hasClickedSubmit()));
    this.updateErrorMessages();
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
