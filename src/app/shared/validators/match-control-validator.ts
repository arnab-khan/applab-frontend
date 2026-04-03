import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { addControlError, removeControlError } from '../utils/form-validation';

export interface MatchControlConfig {
  sourceControlName: string;
  targetControlName: string;
  sourceControlLabel?: string;
  errorKey?: string;
  targetRequiredWhenSourceHasValue?: boolean;
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
    const requiredErrorKey = 'required';
    const hasSourceValue = !!String(sourceValue ?? '').trim();
    const hasTargetValue = !!String(targetValue ?? '').trim();

    if (config.targetRequiredWhenSourceHasValue) {
      if (hasSourceValue && !hasTargetValue) {
        addControlError(
          targetControl,
          requiredErrorKey,
          '{{LABEL}} is required.'
        );
        removeControlError(targetControl, errorKey);
      } else {
        removeControlError(targetControl, requiredErrorKey);
      }
    }

    if (!targetValue || sourceValue === targetValue) {
      removeControlError(targetControl, errorKey);
      return null;
    }

    addControlError(
      targetControl,
      errorKey,
      `{{LABEL}} must match the ${config.sourceControlLabel ?? 'the other field'}.`
    );

    return null;
  };
}
