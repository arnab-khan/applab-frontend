import './polyfills.server.mjs';
import {
  POST_LOGIN_DEFAULT_ROUTE
} from "./chunk-734LHT3I.mjs";
import {
  ActivatedRoute,
  Router
} from "./chunk-SOL5SY5C.mjs";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-4ARKR3K5.mjs";

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
//# sourceMappingURL=chunk-T5CZ75ON.mjs.map
