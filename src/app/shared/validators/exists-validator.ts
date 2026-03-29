import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map, catchError, of, switchMap, timer, Observable } from 'rxjs';

export function existsValidator(
  data: {
    apiObserable: (value: string) => Observable<boolean>;
    ignoreValue?: string | null | undefined | (() => string | null | undefined);
  }
): AsyncValidatorFn {
  const debounceMs = 500;

  return (control: AbstractControl) => {
    const inputValue = control.value?.trim();
    const ignoredValue = typeof data.ignoreValue === 'function'
      ? data.ignoreValue()?.trim()
      : data.ignoreValue?.trim();

    if (!inputValue) {
      return of(null);
    }

    if (ignoredValue && inputValue === ignoredValue) {
      return of(null);
    }

    return timer(debounceMs).pipe(
      switchMap(() =>
        data.apiObserable(inputValue).pipe(
          map((response) => {
            if (response == null) {
              throw new Error('Invalid response');
            }
            return response ? { alreadyTaken: true } : null
          }
          ),
          catchError(() =>
            of({ availabilityCheckFailed: true })
          )
        )
      )
    );
  };
}