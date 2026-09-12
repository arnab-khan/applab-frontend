import './polyfills.server.mjs';
import {
  NgControl
} from "./chunk-BK46PBGF.mjs";
import {
  Directive,
  ElementRef,
  HostListener,
  Optional,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵlistener,
  ɵɵresolveWindow
} from "./chunk-XAQLVFTN.mjs";

// src/app/shared/directives/auto-resize.ts
var AutoResizeTextarea = class _AutoResizeTextarea {
  el;
  ngControl;
  constructor(el, ngControl) {
    this.el = el;
    this.ngControl = ngControl;
  }
  ngAfterViewInit() {
    setTimeout(() => this.resize());
    this.ngControl?.valueChanges?.subscribe(() => {
      setTimeout(() => this.resize());
    });
  }
  onInput() {
    this.resize();
  }
  onWindowResize() {
    this.resize();
  }
  resize() {
    const textarea = this.el.nativeElement;
    textarea.style.height = "auto";
    textarea.style.overflow = "hidden";
    textarea.style.resize = "none";
    textarea.style.height = textarea.scrollHeight + "px";
  }
  static \u0275fac = function AutoResizeTextarea_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoResizeTextarea)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgControl, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AutoResizeTextarea, selectors: [["textarea", "appAutoResizeTextarea", ""]], hostBindings: function AutoResizeTextarea_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", function AutoResizeTextarea_input_HostBindingHandler() {
        return ctx.onInput();
      })("resize", function AutoResizeTextarea_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, \u0275\u0275resolveWindow);
    }
  } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoResizeTextarea, [{
    type: Directive,
    args: [{
      selector: "textarea[appAutoResizeTextarea]",
      standalone: true
    }]
  }], () => [{ type: ElementRef }, { type: NgControl, decorators: [{
    type: Optional
  }] }], { onInput: [{
    type: HostListener,
    args: ["input"]
  }], onWindowResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();

export {
  AutoResizeTextarea
};
//# sourceMappingURL=chunk-JUCNLWUP.mjs.map
