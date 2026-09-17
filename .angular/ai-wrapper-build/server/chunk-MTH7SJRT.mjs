import './polyfills.server.mjs';
import {
  Notification
} from "./chunk-63PDKOYB.mjs";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-4ARKR3K5.mjs";
import {
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/shared/services/error-notification.ts
var ErrorNotification = class _ErrorNotification {
  notification = inject(Notification);
  show(error, fallback, config) {
    if (error.status === 0)
      return;
    const body = error.error;
    const message = [body?.message, body?.error, body].find((value) => typeof value === "string" && value.trim().length > 0) || fallback;
    this.notification.showError(message, __spreadValues({
      duration: 5e3
    }, config));
  }
  static \u0275fac = function ErrorNotification_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorNotification)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ErrorNotification, factory: _ErrorNotification.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorNotification, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ErrorNotification
};
//# sourceMappingURL=chunk-MTH7SJRT.mjs.map
