import { Injectable, inject } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class FormValidation {
  private snackBar = inject(MatSnackBar);

  validateAndRun(
    form: AbstractControl,
    onValid: () => void,
    errorMessage = 'Please fix the highlighted errors before continuing.'
  ): void {
    console.log('Form Value:', form.value);

    if (form.valid) {
      onValid();
    } else {
      this.snackBar.open(errorMessage, '✖', {
        duration: 5000,
        panelClass: 'snackbar-error',
      });
    }
  }
}
