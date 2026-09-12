import './polyfills.server.mjs';
import {
  POST_LOGIN_DEFAULT_ROUTE
} from "./chunk-LCBZHX6Y.mjs";
import {
  ActivatedRoute,
  Router
} from "./chunk-5QYUMBOA.mjs";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-XAQLVFTN.mjs";

// src/app/shared/services/redirect.ts
var Redirect = class _Redirect {
  router = inject(Router);
  route = inject(ActivatedRoute);
  postLogin() {
    const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
    return this.router.navigateByUrl(returnUrl || POST_LOGIN_DEFAULT_ROUTE);
  }
  static \u0275fac = function Redirect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Redirect)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Redirect, factory: _Redirect.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Redirect, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  Redirect
};
//# sourceMappingURL=chunk-M3XNFLEY.mjs.map
