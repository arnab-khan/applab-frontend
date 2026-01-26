import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface TextValidationConfig {
  required?: boolean;
  requireNumber?: Boolean;
  disallowNumber?: Boolean;
  requireLetter?: boolean;
  requireUppercase?: Boolean;
  requireLowercase?: Boolean;
  requireSpecialChars?: Boolean;
  disallowSpaces?: Boolean;
  disallowSpecialChars?: Boolean;
  minLength?: number;
  maxLength?: number;
}

interface Rule {
  ok: boolean;
  key: string;
  msg: string;
}

export function commonFormValidator(
  config: TextValidationConfig
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    if (!config) {
      return null;
    }

    const value = String(control.value ?? '');
    const charLength = value.length;
    const errors: ValidationErrors = {};

    /* Character facts */
    const hasNumber = /[0-9]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasSpace = /\s/.test(value);
    const hasSpecialChar = /[^a-zA-Z0-9\s]/.test(value);

    /*  rules */
    const rules: Rule[] = [];

    if (config.required) {
      rules.push({
        ok: !value,
        key: 'required',
        msg: '{{LABEL}} is required',
      });
    }

    if (value) {
      if (config.requireNumber) {
        rules.push({
          ok: !hasNumber,
          key: 'numberRequired',
          msg: '{{LABEL}} must contain at least one number',
        });
      }
      if (config.disallowNumber) {
        rules.push({
          ok: hasNumber,
          key: 'disallowNumber',
          msg: 'Number are not allowed',
        });
      }

      if (config.requireLetter) {
        rules.push({
          ok: !(hasLowercase || hasUppercase),
          key: 'requireLetter',
          msg: '{{LABEL}} must contain at least one letter',
        });
      }
      if (config.requireUppercase) {
        rules.push({
          ok: !hasUppercase,
          key: 'uppercaseRequired',
          msg: '{{LABEL}} must contain an uppercase letter',
        });
      }
      if (config.requireLowercase) {
        rules.push({
          ok: !hasLowercase,
          key: 'lowercaseRequired',
          msg: '{{LABEL}} must contain a lowercase letter',
        });
      }

      if (config.disallowSpecialChars) {
        rules.push({
          ok: hasSpecialChar,
          key: 'disallowSpecialChar',
          msg: 'Special characters are not allowed',
        });
      }
      if (config.disallowSpecialChars) {
        rules.push({
          ok: hasSpecialChar,
          key: 'disallowSpecialChar',
          msg: 'Special characters are not allowed',
        });
      }

      if (config.disallowSpaces) {
        rules.push({
          ok: hasSpace,
          key: 'disallowSpaces',
          msg: 'Spaces are not allowed',
        });
      }

      if (config.minLength) {
        rules.push({
          ok: charLength < config.minLength,
          key: 'minLength',
          msg: `{{LABEL}} must be at least ${config.minLength} characters`,
        });
      }

      if (config.maxLength) {
        rules.push({
          ok: charLength > config.maxLength,
          key: 'maxLength',
          msg: `{{LABEL}} must not exceed ${config.maxLength} characters`,
        });
      }
    }

    /* Apply rules */
    rules.forEach(rule => {
      if (rule.ok) {
        errors[rule.key] = rule.msg;
      }
    });

    return Object.keys(errors).length ? errors : null;
  };
}