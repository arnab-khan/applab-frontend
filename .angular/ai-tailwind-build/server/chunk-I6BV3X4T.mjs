import './polyfills.server.mjs';
import {
  RouterOutlet
} from "./chunk-SOL5SY5C.mjs";
import "./chunk-4HFGPD3K.mjs";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-4ARKR3K5.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/profile/profile.ts
var Profile = class _Profile {
  static \u0275fac = function Profile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Profile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Profile, selectors: [["app-profile"]], decls: 1, vars: 0, template: function Profile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Profile, [{
    type: Component,
    args: [{ selector: "app-profile", imports: [RouterOutlet], template: "<router-outlet></router-outlet>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Profile, { className: "Profile", filePath: "src/app/features/profile/profile.ts", lineNumber: 10 });
})();
export {
  Profile
};
//# sourceMappingURL=chunk-I6BV3X4T.mjs.map
