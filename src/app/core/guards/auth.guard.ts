import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { inject, Injectable, Injector, PLATFORM_ID, runInInjectionContext } from '@angular/core';
import { filter, map, Observable, of, take } from 'rxjs';
import { Auth } from '../services/auth';
import { LOGIN_ROUTE } from '../../shared/config/config';
import { toObservable } from '@angular/core/rxjs-interop';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanMatch {
  private authService = inject(Auth);
  private router = inject(Router);
  private injector = inject(Injector);

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
    return runInInjectionContext(this.injector, () => {
      const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

      // SSR: Stop render on server
      if (!isBrowser) {
        return of(true);
      }

      // Browser: wait for auth to load
      return toObservable(this.authService.userLoaded).pipe(
        filter(Boolean),
        take(1),
        map(() => {
          const user = this.authService.user();
          return user?.id
            ? true
            : this.router.createUrlTree([LOGIN_ROUTE]);
        })
      );
    });

  }

}