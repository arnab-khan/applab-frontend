import './polyfills.server.mjs';
import {
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/shared/utils/form-validation.ts
function addControlError(control, errorKey, errorValue) {
  control.setErrors(__spreadProps(__spreadValues({}, control.errors ?? {}), {
    [errorKey]: errorValue
  }));
}
function removeControlError(control, errorKey) {
  const existingErrors = control.errors;
  if (!existingErrors?.[errorKey]) {
    return;
  }
  const _a = existingErrors, { [errorKey]: _ } = _a, remainingErrors = __objRest(_a, [__restKey(errorKey)]);
  control.setErrors(Object.keys(remainingErrors).length ? remainingErrors : null);
}

// src/app/shared/validators/match-control-validator.ts
function matchControlValidator(config) {
  return (formGroup) => {
    const sourceControl = formGroup.get(config.sourceControlName);
    const targetControl = formGroup.get(config.targetControlName);
    if (!sourceControl || !targetControl) {
      return null;
    }
    const sourceValue = sourceControl.value;
    const targetValue = targetControl.value;
    const errorKey = config.errorKey || "valueMismatch";
    const requiredErrorKey = "required";
    const hasSourceValue = !!String(sourceValue ?? "").trim();
    const hasTargetValue = !!String(targetValue ?? "").trim();
    if (config.targetRequiredWhenSourceHasValue) {
      if (hasSourceValue && !hasTargetValue) {
        addControlError(targetControl, requiredErrorKey, "{{LABEL}} is required.");
        removeControlError(targetControl, errorKey);
      } else {
        removeControlError(targetControl, requiredErrorKey);
      }
    }
    if (!targetValue || sourceValue === targetValue) {
      removeControlError(targetControl, errorKey);
      return null;
    }
    addControlError(targetControl, errorKey, `{{LABEL}} must match the ${config.sourceControlLabel ?? "the other field"}.`);
    return null;
  };
}

export {
  matchControlValidator
};
//# sourceMappingURL=chunk-Y4QXEKGZ.mjs.map
