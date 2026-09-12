import {
  AuthGuard
} from "./chunk-LWURI6WI.js";
import {
  toObservable
} from "./chunk-DFRRT2OL.js";
import {
  Auth,
  POST_LOGIN_DEFAULT_ROUTE
} from "./chunk-SDFCVRZT.js";
import "./chunk-5QQ5IMAE.js";
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
import {
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/core/guards/guest.guard.ts
var GuestGuard = class _GuestGuard {
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
        return state.user?.id ? this.router.createUrlTree([POST_LOGIN_DEFAULT_ROUTE]) : true;
      }));
    });
  }
  static \u0275fac = function GuestGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GuestGuard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GuestGuard, factory: _GuestGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GuestGuard, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/auth/auth.routes.ts
var authRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-FP5MHVYF.js").then((m) => m.Auth),
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      {
        path: "login",
        canActivate: [GuestGuard],
        loadComponent: () => import("./chunk-DFLKYUIA.js").then((m) => m.Login)
      },
      {
        path: "signup",
        canActivate: [GuestGuard],
        loadComponent: () => import("./chunk-YDJILW2T.js").then((m) => m.Signup),
        data: { containerClass: "u-container-3" }
      },
      {
        path: "password-verification",
        canActivate: [AuthGuard],
        loadComponent: () => import("./chunk-3UXX2IZ7.js").then((m) => m.PasswordVerification)
      },
      {
        path: "email-entry",
        loadComponent: () => import("./chunk-LSJQCDIA.js").then((m) => m.EmailEntry)
      },
      {
        path: "otp-verification",
        loadComponent: () => import("./chunk-A3GZHWEE.js").then((m) => m.OtpVerification)
      },
      {
        path: "reset-password",
        loadComponent: () => import("./chunk-X266LJ3W.js").then((m) => m.ResetPassword)
      }
    ]
  }, false ? { \u0275entryName: "src/app/features/auth/auth.ts" } : {})
];
export {
  authRoutes
};
//# sourceMappingURL=chunk-VMU2VV4I.js.map
