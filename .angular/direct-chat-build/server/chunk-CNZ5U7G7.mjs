import './polyfills.server.mjs';
import {
  MatSnackBar
} from "./chunk-LCBZHX6Y.mjs";
import {
  Directive,
  ElementRef,
  HostListener,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-XAQLVFTN.mjs";

// src/app/shared/services/form-validation.ts
var FormValidation = class _FormValidation {
  snackBar = inject(MatSnackBar);
  validateAndRun(form, onValid, errorMessage = "Please fix the highlighted errors before continuing.") {
    console.log("Form Value:", form.value);
    if (form.valid) {
      onValid();
    } else {
      this.snackBar.open(errorMessage, "\u2716", {
        duration: 5e3,
        panelClass: "snackbar-error"
      });
    }
  }
  static \u0275fac = function FormValidation_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormValidation)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormValidation, factory: _FormValidation.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormValidation, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/utils/device.ts
function isMobile() {
  const ua = navigator.userAgent;
  if (navigator.userAgentData?.mobile !== void 0) {
    return navigator.userAgentData.mobile;
  }
  const isIpad = /Macintosh/i.test(ua) && "ontouchend" in document;
  return /Android|iPhone|iPod/i.test(ua) || isIpad;
}
function isTouchDevice() {
  return window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
}

// src/app/shared/directives/scroll-to-invalid.ts
var ScrollToInvalid = class _ScrollToInvalid {
  el;
  constructor(el) {
    this.el = el;
  }
  onFormSubmit() {
    setTimeout(() => {
      const firstInvalidControl = this.el.nativeElement.querySelector(".ng-invalid");
      if (firstInvalidControl) {
        firstInvalidControl.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        if (!isTouchDevice()) {
          firstInvalidControl.focus({ preventScroll: true });
        }
      }
    });
  }
  static \u0275fac = function ScrollToInvalid_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollToInvalid)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ScrollToInvalid, selectors: [["", "appScrollToInvalid", ""]], hostBindings: function ScrollToInvalid_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("ngSubmit", function ScrollToInvalid_ngSubmit_HostBindingHandler() {
        return ctx.onFormSubmit();
      });
    }
  } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollToInvalid, [{
    type: Directive,
    args: [{
      selector: "[appScrollToInvalid]"
    }]
  }], () => [{ type: ElementRef }], { onFormSubmit: [{
    type: HostListener,
    args: ["ngSubmit"]
  }] });
})();

export {
  FormValidation,
  isMobile,
  ScrollToInvalid
};
//# sourceMappingURL=chunk-CNZ5U7G7.mjs.map
