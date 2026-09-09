import './polyfills.server.mjs';
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-XAQLVFTN.mjs";

// src/app/shared/pipes/capitalize-words-pipe.ts
var CapitalizeWordsPipe = class _CapitalizeWordsPipe {
  transform(value) {
    if (!value)
      return "";
    const trimmed = value.trim();
    if (!trimmed)
      return "";
    return trimmed.replace(new RegExp("\\b\\p{L}", "gu"), (match) => match.toLocaleUpperCase());
  }
  static \u0275fac = function CapitalizeWordsPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CapitalizeWordsPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "capitalizeWords", type: _CapitalizeWordsPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CapitalizeWordsPipe, [{
    type: Pipe,
    args: [{
      name: "capitalizeWords",
      standalone: true
    }]
  }], null, null);
})();

export {
  CapitalizeWordsPipe
};
//# sourceMappingURL=chunk-BZS2CXH6.mjs.map
