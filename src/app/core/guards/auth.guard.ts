import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { catchError, filter, map, Observable, of, switchMap, take } from 'rxjs';
import { Auth } from '../services/auth';
import { LOGIN_ROUTE } from '../../shared/config/config';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanMatch {
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
        // if user exists → allow access, else redirect to login
        return user ? true : this.router.createUrlTree([LOGIN_ROUTE]);
      }),
      catchError(() => {
        // 401 or error → redirect to login
        return of(this.router.createUrlTree([LOGIN_ROUTE]));
      })
    );
  }
}