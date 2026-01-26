import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { map, catchError, of, switchMap, timer } from 'rxjs';
import { User } from '../../core/services/user';

export function usernameExistsValidator(
  userService: User,
  debounceMs: number = 500
): AsyncValidatorFn {

  return (control: AbstractControl) => {
    const username = control.value?.trim();

    if (!username) {
      return of(null);
    }

    return timer(debounceMs).pipe(
      switchMap(() =>
        userService.checkIfUserExists({ username }).pipe(
          map((response: { exists: boolean }) =>
            response.exists ? { usernameExists: true } : null
          ),
          catchError(() => of(null))
        )
      )
    );
  };
}