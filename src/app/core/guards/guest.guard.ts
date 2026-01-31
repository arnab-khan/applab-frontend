import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { catchError, filter, map, Observable, of, switchMap, take } from 'rxjs';
import { Auth } from '../services/auth';
import { DEFAULT_ROUTE } from '../../shared/config/config';

@Injectable({ providedIn: 'root' })
export class GuestGuard implements CanActivate, CanActivateChild, CanMatch {
  private authService = inject(Auth);
  private router = inject(Router);

  constructor() {}

  // CanActivate for normal routes
  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.checkAccess();
  }

  // CanActivateChild for child routes
  canActivateChild(_childRoute: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.checkAccess();
  }

  // CanMatch for lazy-loaded modules
  canMatch(_route: Route, _segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this.checkAccess();
  }

  // shared logic
  private checkAccess(): Observable<boolean | UrlTree> {
    return this.authService.user$.pipe(
      filter(user => user !== undefined),
      take(1),
      map((user) => {
        // if user exists → redirect to home
        return user ? this.router.createUrlTree([DEFAULT_ROUTE]) : true;
      }),
      catchError(() => of(true)) // 401 or error → allow guest
    );
  }
}
