import {
  FaIconComponent,
  FontAwesomeModule,
  faEye,
  faEyeSlash
} from "./chunk-65M5LICJ.js";
import {
  Router
} from "./chunk-BQE5RZFF.js";
import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-CSUKEAYK.js";

// src/app/shared/components/forms/password-field/password-field.ts
var _c0 = ["*"];
function PasswordField_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function PasswordField_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onForgotPassword());
    });
    \u0275\u0275text(1, " Forgot password? ");
    \u0275\u0275elementEnd();
  }
}
var PasswordField = class _PasswordField {
  hostElement = inject(ElementRef);
  renderer = inject(Renderer2);
  router = inject(Router);
  isVisible = signal(false, ...ngDevMode ? [{ debugName: "isVisible" }] : []);
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showForgotPassword = input(false, ...ngDevMode ? [{ debugName: "showForgotPassword" }] : []);
  inputElement = null;
  ngAfterContentInit() {
    this.inputElement = this.hostElement.nativeElement.querySelector("input");
    if (!this.inputElement) {
      return;
    }
    this.renderer.addClass(this.inputElement, "pr-12");
    this.syncInputType();
  }
  toggleVisibility() {
    this.isVisible.update((value) => !value);
    this.syncInputType();
  }
  onForgotPassword() {
    this.router.navigate(["/auth/email-entry"], {
      queryParams: { purpose: "FORGOT_PASSWORD" }
    });
  }
  syncInputType() {
    if (!this.inputElement) {
      return;
    }
    this.renderer.setAttribute(this.inputElement, "type", this.isVisible() ? "text" : "password");
  }
  static \u0275fac = function PasswordField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordField)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PasswordField, selectors: [["app-password-field"]], inputs: { showForgotPassword: [1, "showForgotPassword"] }, ngContentSelectors: _c0, decls: 6, vars: 4, consts: [[1, "relative"], ["type", "button", 1, "absolute", "top-1/2", "right-3.5", "inline-flex", "-translate-y-1/2", "cursor-pointer", "items-center", "justify-center", "border-0", "bg-transparent", "text-slate-600", "transition-colors", "duration-150", "hover:text-slate-900", 3, "click"], [3, "icon"], ["type", "button", 1, "mt-2", "ml-auto", "block", "text-sm", "font-semibold", "text-blue-600", "hover:text-blue-700"], ["type", "button", 1, "mt-2", "ml-auto", "block", "text-sm", "font-semibold", "text-blue-600", "hover:text-blue-700", 3, "click"]], template: function PasswordField_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div")(1, "div", 0);
      \u0275\u0275projection(2);
      \u0275\u0275elementStart(3, "button", 1);
      \u0275\u0275listener("click", function PasswordField_Template_button_click_3_listener() {
        return ctx.toggleVisibility();
      });
      \u0275\u0275element(4, "fa-icon", 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, PasswordField_Conditional_5_Template, 2, 0, "button", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", ctx.isVisible() ? "Hide password" : "Show password")("aria-pressed", ctx.isVisible());
      \u0275\u0275advance();
      \u0275\u0275property("icon", ctx.isVisible() ? ctx.faEyeSlash : ctx.faEye);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showForgotPassword() ? 5 : -1);
    }
  }, dependencies: [FontAwesomeModule, FaIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordField, [{
    type: Component,
    args: [{ selector: "app-password-field", imports: [FontAwesomeModule], template: `<div>
  <div class="relative">
    <ng-content></ng-content>

    <button type="button"
      class="absolute top-1/2 right-3.5 inline-flex -translate-y-1/2 cursor-pointer items-center justify-center border-0 bg-transparent text-slate-600 transition-colors duration-150 hover:text-slate-900"
      [attr.aria-label]="isVisible() ? 'Hide password' : 'Show password'" [attr.aria-pressed]="isVisible()"
      (click)="toggleVisibility()">
      <fa-icon [icon]="isVisible() ? faEyeSlash : faEye"></fa-icon>
    </button>
  </div>

  @if (showForgotPassword()) {
  <button type="button" class="mt-2 ml-auto block text-sm font-semibold text-blue-600 hover:text-blue-700"
    (click)="onForgotPassword()">
    Forgot password?
  </button>
  }
</div>
` }]
  }], null, { showForgotPassword: [{ type: Input, args: [{ isSignal: true, alias: "showForgotPassword", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PasswordField, { className: "PasswordField", filePath: "src/app/shared/components/forms/password-field/password-field.ts", lineNumber: 20 });
})();

export {
  PasswordField
};
//# sourceMappingURL=chunk-BQUYYPOZ.js.map
