import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map, catchError, of, switchMap, timer, Observable } from 'rxjs';

export function existsValidator(
  data: {
    apiObserable: (value: string) => Observable<boolean>
  }
): AsyncValidatorFn {
  const debounceMs = 500;

  return (control: AbstractControl) => {
    const inputValue = control.value?.trim();

    if (!inputValue) {
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