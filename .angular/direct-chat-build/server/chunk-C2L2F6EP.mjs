import './polyfills.server.mjs';
import {
  AuthGuard
} from "./chunk-Q7GGLQZL.mjs";
import {
  toObservable
} from "./chunk-7N2B64DO.mjs";
import {
  Auth,
  POST_LOGIN_DEFAULT_ROUTE
} from "./chunk-LCBZHX6Y.mjs";
import "./chunk-53NQCPJ5.mjs";
import {
  Router
} from "./chunk-5QYUMBOA.mjs";
import {
  isPlatformBrowser
} from "./chunk-TNROARYC.mjs";
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
} from "./chunk-XAQLVFTN.mjs";
import {
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

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
    loadComponent: () => import("./chunk-TPVQCHS2.mjs").then((m) => m.Auth),
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      {
        path: "login",
        canActivate: [GuestGuard],
        loadComponent: () => import("./chunk-3TISEKAU.mjs").then((m) => m.Login)
      },
      {
        path: "signup",
        canActivate: [GuestGuard],
        loadComponent: () => import("./chunk-HLEFOI7Z.mjs").then((m) => m.Signup),
        data: { containerClass: "u-container-3" }
      },
      {
        path: "password-verification",
        canActivate: [AuthGuard],
        loadComponent: () => import("./chunk-XKJVR6J3.mjs").then((m) => m.PasswordVerification)
      },
      {
        path: "email-entry",
        loadComponent: () => import("./chunk-B534JTO4.mjs").then((m) => m.EmailEntry)
      },
      {
        path: "otp-verification",
        loadComponent: () => import("./chunk-OK7WLBIT.mjs").then((m) => m.OtpVerification)
      },
      {
        path: "reset-password",
        loadComponent: () => import("./chunk-COMB66C2.mjs").then((m) => m.ResetPassword)
      }
    ]
  }, true ? { \u0275entryName: "src/app/features/auth/auth.ts" } : {})
];
export {
  authRoutes
};
//# sourceMappingURL=chunk-C2L2F6EP.mjs.map
