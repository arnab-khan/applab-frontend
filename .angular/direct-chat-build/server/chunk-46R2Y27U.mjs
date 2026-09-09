import './polyfills.server.mjs';
import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-XAQLVFTN.mjs";

// src/app/core/services/layout-state.ts
var LayoutState = class _LayoutState {
  headerHeight = signal(0, ...ngDevMode ? [{ debugName: "headerHeight" }] : []);
  static \u0275fac = function LayoutState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutState)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutState, factory: _LayoutState.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  LayoutState
};
//# sourceMappingURL=chunk-46R2Y27U.mjs.map
