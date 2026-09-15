import './polyfills.server.mjs';
import {
  MatDialogRef
} from "./chunk-AIQFFD3C.mjs";
import {
  FaIconComponent,
  FontAwesomeModule,
  faXmark
} from "./chunk-5UOF4NU2.mjs";
import {
  NgClass
} from "./chunk-4HFGPD3K.mjs";
import {
  Component,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4ARKR3K5.mjs";

// src/app/shared/components/dialogs/dialog-header/dialog-header.ts
function DialogHeader_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title());
  }
}
function DialogHeader_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
var DialogHeader = class _DialogHeader {
  dialogRef = inject(MatDialogRef, { optional: true });
  title = input("", ...ngDevMode ? [{ debugName: "title" }] : []);
  containerClass = input("", ...ngDevMode ? [{ debugName: "containerClass" }] : []);
  faXmark = faXmark;
  onClose() {
    this.dialogRef?.close();
  }
  static \u0275fac = function DialogHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogHeader, selectors: [["app-dialog-header"]], inputs: { title: [1, "title"], containerClass: [1, "containerClass"] }, decls: 5, vars: 3, consts: [[1, "flex", "items-start", "justify-between", "gap-3", 3, "ngClass"], [1, "min-w-0", "flex-1", "text-lg", "font-semibold", "text-slate-900"], [1, "min-w-0", "flex-1"], ["type", "button", "aria-label", "Close dialog", 1, "relative", "h-8", "w-8", "-me-2", "rounded-md", "text-gray-500", "transition-colors", "hover:bg-gray-100", "hover:text-gray-700", "focus-visible:outline-none", "focus-visible:ring-2", "focus-visible:ring-gray-300", 3, "click"], [1, "text-md", "u-absolute-center-xy", 3, "icon"]], template: function DialogHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, DialogHeader_Conditional_1_Template, 2, 1, "h2", 1)(2, DialogHeader_Conditional_2_Template, 1, 0, "div", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function DialogHeader_Template_button_click_3_listener() {
        return ctx.onClose();
      });
      \u0275\u0275element(4, "fa-icon", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.containerClass());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.title() ? 1 : 2);
      \u0275\u0275advance(3);
      \u0275\u0275property("icon", ctx.faXmark);
    }
  }, dependencies: [FontAwesomeModule, FaIconComponent, NgClass], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=dialog-header.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogHeader, [{
    type: Component,
    args: [{ selector: "app-dialog-header", imports: [FontAwesomeModule, NgClass], template: '<div class="flex items-start justify-between gap-3" [ngClass]="containerClass()">\n  @if (title()) {\n  <h2 class="min-w-0 flex-1 text-lg font-semibold text-slate-900">{{ title() }}</h2>\n  } @else {\n  <div class="min-w-0 flex-1"></div>\n  }\n  <button type="button" aria-label="Close dialog"\n    class="relative h-8 w-8 -me-2 rounded-md text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"\n    (click)="onClose()">\n    <fa-icon [icon]="faXmark" class="text-md u-absolute-center-xy"></fa-icon>\n  </button>\n</div>\n', styles: ["/* src/app/shared/components/dialogs/dialog-header/dialog-header.scss */\n:host {\n  display: block;\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=dialog-header.css.map */\n"] }]
  }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], containerClass: [{ type: Input, args: [{ isSignal: true, alias: "containerClass", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogHeader, { className: "DialogHeader", filePath: "src/app/shared/components/dialogs/dialog-header/dialog-header.ts", lineNumber: 13 });
})();

export {
  DialogHeader
};
//# sourceMappingURL=chunk-GUTTCFMP.mjs.map
