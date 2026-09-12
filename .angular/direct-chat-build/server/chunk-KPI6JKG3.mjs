import './polyfills.server.mjs';
import {
  NgControl
} from "./chunk-BK46PBGF.mjs";
import {
  Directive,
  HostListener,
  Input,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-XAQLVFTN.mjs";

// src/app/shared/utils/text-sanitize.ts
function sanitizeText(value, options = {}) {
  let sanitizedValue = value || "";
  sanitizedValue = sanitizedValue.replace(new RegExp("\\p{Extended_Pictographic}(\\u200D\\p{Extended_Pictographic})*", "gu"), "");
  if (options.noSpecialCharacterAllow) {
    sanitizedValue = sanitizedValue.replace(/[^\p{L}\p{N}\s]/gu, "");
  }
  if (!options.noSpaceAllow) {
    sanitizedValue = sanitizedValue.replace(/^\s+/g, "");
    if (options.consecutiveSpaceNotAllow !== false) {
      sanitizedValue = sanitizedValue.replace(/\s{2,}/g, " ");
    }
  } else {
    sanitizedValue = sanitizedValue.replace(/\s/g, "");
  }
  if (options.preventNewline !== false) {
    sanitizedValue = sanitizedValue.replace(/[\r\n]+/g, "");
  }
  return sanitizedValue;
}

// src/app/shared/directives/sanitize-input.ts
var SanitizeInput = class _SanitizeInput {
  ngControl;
  noSpaceAllow = false;
  noSpecialCharacterAllow = false;
  consecutiveSpaceNotAllow = true;
  preventNewline = true;
  constructor(ngControl) {
    this.ngControl = ngControl;
  }
  onInput(event) {
    const target = event.target;
    const value = target?.value;
    if (!value) {
      return;
    }
    const sanitizedValue = sanitizeText(value, {
      noSpaceAllow: this.noSpaceAllow,
      noSpecialCharacterAllow: this.noSpecialCharacterAllow,
      consecutiveSpaceNotAllow: this.consecutiveSpaceNotAllow,
      preventNewline: this.preventNewline
    });
    if (sanitizedValue !== this.ngControl?.control?.value) {
      this.ngControl?.control?.patchValue(sanitizedValue);
    }
  }
  static \u0275fac = function SanitizeInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SanitizeInput)(\u0275\u0275directiveInject(NgControl));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _SanitizeInput, selectors: [["", "appSanitizeInput", ""]], hostBindings: function SanitizeInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function SanitizeInput_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      });
    }
  }, inputs: { noSpaceAllow: "noSpaceAllow", noSpecialCharacterAllow: "noSpecialCharacterAllow", consecutiveSpaceNotAllow: "consecutiveSpaceNotAllow", preventNewline: "preventNewline" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SanitizeInput, [{
    type: Directive,
    args: [{
      selector: "[appSanitizeInput]"
    }]
  }], () => [{ type: NgControl }], { noSpaceAllow: [{
    type: Input
  }], noSpecialCharacterAllow: [{
    type: Input
  }], consecutiveSpaceNotAllow: [{
    type: Input
  }], preventNewline: [{
    type: Input
  }], onInput: [{
    type: HostListener,
    args: ["input", ["$event"]]
  }] });
})();

export {
  sanitizeText,
  SanitizeInput
};
//# sourceMappingURL=chunk-KPI6JKG3.mjs.map
