import { AbstractControl, ValidationErrors } from '@angular/forms';

export function addControlError(
  control: AbstractControl,
  errorKey: string,
  errorValue: ValidationErrors[string]
): void {
  control.setErrors({
    ...(control.errors ?? {}),
    [errorKey]: errorValue,
  });
}

export function removeControlError(
  control: AbstractControl,
  errorKey: string
): void {
  const existingErrors = control.errors;
  if (!existingErrors?.[errorKey]) {
    return;
  }
  const { [errorKey]: _, ...remainingErrors } = existingErrors;
  control.setErrors(Object.keys(remainingErrors).length ? remainingErrors : null);
}
