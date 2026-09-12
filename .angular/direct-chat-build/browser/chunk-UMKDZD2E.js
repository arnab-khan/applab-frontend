import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-LJMNHIRN.js";
import {
  CommonModule,
  NgClass
} from "./chunk-CYBPL3OT.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1
} from "./chunk-CSUKEAYK.js";

// src/app/shared/components/buttons/loading-button/loading-button.ts
var _c0 = ["*"];
var _c1 = (a0) => ({ "opacity-50 pointer-events-none": a0 });
function LoadingButton_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.spinnerClass);
    \u0275\u0275property("diameter", ctx_r0.diameter);
  }
}
var LoadingButton = class _LoadingButton {
  loading = false;
  diameter = 20;
  spinnerClass = "stroke-violet-700";
  static \u0275fac = function LoadingButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingButton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingButton, selectors: [["app-loading-button"]], inputs: { loading: "loading", diameter: "diameter", spinnerClass: "spinnerClass" }, ngContentSelectors: _c0, decls: 4, vars: 4, consts: [[1, "relative"], [3, "ngClass"], [1, "u-absolute-center-xy"], [3, "diameter"]], template: function LoadingButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, LoadingButton_Conditional_3_Template, 2, 3, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c1, ctx.loading));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 3 : -1);
    }
  }, dependencies: [CommonModule, NgClass, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=loading-button.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingButton, [{
    type: Component,
    args: [{ selector: "app-loading-button", imports: [CommonModule, MatProgressSpinnerModule], template: `<div class="relative">\r
    <div [ngClass]="{'opacity-50 pointer-events-none': loading}">\r
        <ng-content></ng-content>\r
    </div>\r
    @if (loading) {\r
    <div class="u-absolute-center-xy">\r
        <mat-spinner [diameter]="diameter" [class]="spinnerClass"></mat-spinner>\r
    </div>\r
    }\r
</div>`, styles: ["/* src/app/shared/components/buttons/loading-button/loading-button.scss */\n:host {\n  display: block;\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=loading-button.css.map */\n"] }]
  }], null, { loading: [{
    type: Input,
    args: [{ required: true }]
  }], diameter: [{
    type: Input
  }], spinnerClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingButton, { className: "LoadingButton", filePath: "src/app/shared/components/buttons/loading-button/loading-button.ts", lineNumber: 11 });
})();

export {
  LoadingButton
};
//# sourceMappingURL=chunk-UMKDZD2E.js.map
