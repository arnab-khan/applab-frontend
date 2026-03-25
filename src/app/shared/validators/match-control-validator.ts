import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface MatchControlConfig {
  sourceControlName: string;
  targetControlName: string;
  sourceControlLabel?: string;
  errorKey?: string;
}

export function matchControlValidator(config: MatchControlConfig): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const sourceControl = formGroup.get(config.sourceControlName);
    const targetControl = formGroup.get(config.targetControlName);

    if (!sourceControl || !targetControl) {
      return null;
    }

    const sourceValue = sourceControl.value;
    const targetValue = targetControl.value;
    const errorKey = config.errorKey || 'valueMismatch';
    const targetExistingErrors = targetControl.errors ?? {};

    if (!targetValue || sourceValue === targetValue) {
      if (targetExistingErrors[errorKey]) {
        const { [errorKey]: _, ...targetRemainingErrors } = targetExistingErrors;
        targetControl.setErrors(Object.keys(targetRemainingErrors).length ? targetRemainingErrors : null);
      }

      return null;
    }

    targetControl.setErrors({
      ...targetExistingErrors,
      [errorKey]: `{{LABEL}} must match the ${config.sourceControlLabel ?? 'the other field'}`,
    });

    return null;
  };
}
