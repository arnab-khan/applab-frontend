import {
  toObservable
} from "./chunk-DFRRT2OL.js";
import {
  Auth,
  LOGIN_ROUTE
} from "./chunk-SDFCVRZT.js";
import {
  Router
} from "./chunk-BQE5RZFF.js";
import {
  isPlatformBrowser
} from "./chunk-CYBPL3OT.js";
import {
  Injectable,
  Injector,
  PLATFORM_ID,
  filter,
  inject,
  map,
  of,
  runInInjectionContext,
  setClassMetadata,
  take,
  ɵɵdefineInjectable
} from "./chunk-CSUKEAYK.js";

// src/app/core/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  authService = inject(Auth);
  router = inject(Router);
  injector = inject(Injector);
  // CanActivate for normal routes
  canActivate(_route, _state) {
    return this.checkAccess();
  }
  // CanActivateChild for child routes
  canActivateChild(_childRoute, _state) {
    return this.checkAccess();
  }
  // CanMatch for lazy-loaded modules
  canMatch(_route, _segments) {
    return this.checkAccess();
  }
  // shared logic
  checkAccess() {
    return runInInjectionContext(this.injector, () => {
      const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
      if (!isBrowser) {
        return of(true);
      }
      return toObservable(this.authService.authState).pipe(filter((state) => state.completed), take(1), map((state) => {
        return state.user?.id ? true : this.router.createUrlTree([LOGIN_ROUTE]);
      }));
    });
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthGuard
};
//# sourceMappingURL=chunk-LWURI6WI.js.map
