import {
  MatSnackBar
} from "./chunk-ENDAPT56.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-7MOHRCPT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/shared/services/notification.ts
var Notification = class _Notification {
  snackBar = inject(MatSnackBar);
  showError(message, config) {
    return this.snackBar.open(message, void 0, __spreadProps(__spreadValues({
      duration: 5e3
    }, config), {
      panelClass: "snackbar-error"
    }));
  }
  showSuccess(message, config) {
    return this.snackBar.open(message, void 0, __spreadProps(__spreadValues({
      duration: 3e3
    }, config), {
      panelClass: "snackbar-success"
    }));
  }
  static \u0275fac = function Notification_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Notification)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Notification, factory: _Notification.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Notification, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  Notification
};
//# sourceMappingURL=chunk-NHTWTLXP.js.map
