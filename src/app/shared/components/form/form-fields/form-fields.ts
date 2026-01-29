import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldConfig } from './form-fields.interface';
import { Subscription } from 'rxjs';
import { SentenceCasePipe } from '../../../pipes/sentence-case-pipe';

@Component({
  selector: 'app-form-fields',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SentenceCasePipe],
  templateUrl: './form-fields.html',
  styleUrl: './form-fields.scss',
})
export class FormFieldsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() fieldConfig: FieldConfig | undefined;
  @Input({ required: true }) dynamicFormControl!: FormControl;
  @Input() clickedOnSubmitButton = false;
  @Input() text: { validText?: string, pendingText?: string } = {}

  fieldErrorMessages: string[] = [];
  changeFormControll$: Subscription | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formControl'] && this.dynamicFormControl) {
      this.dynamicFormControl.updateValueAndValidity();
    }
    if (changes['clickedOnSubmitButton'] && this.clickedOnSubmitButton) {
      this.updateErrorMessages();
    }
  }

  ngOnInit(): void {
    this.updateErrorMessages();
    this.changeFormControll$ = this.dynamicFormControl?.statusChanges.subscribe(() => {
      this.updateErrorMessages();
    });
  }

  ngOnDestroy(): void {
    this.changeFormControll$?.unsubscribe();
  }

  get showInvalid(): boolean {
    return this.dynamicFormControl.invalid && (this.dynamicFormControl.touched || this.dynamicFormControl.dirty || this.clickedOnSubmitButton);
  }

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

  private updateErrorMessages(): void {
    const errors = this.dynamicFormControl?.errors;

    if (!errors) {
      this.fieldErrorMessages = [];
      return;
    }

    this.fieldErrorMessages = this.errorOrder
      .filter(key => errors[key])
      .map(key =>
        String(errors[key]).replace(
          '{{LABEL}}',
          this.fieldConfig?.label || ''
        )
      );
    // console.log('fieldErrorMessages',this.fieldErrorMessages);
  }

}
