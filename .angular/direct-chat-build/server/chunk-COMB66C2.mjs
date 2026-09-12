import './polyfills.server.mjs';
import {
  matchControlValidator
} from "./chunk-Y4QXEKGZ.mjs";
import {
  PasswordField
} from "./chunk-ZCPS22YT.mjs";
import {
  SanitizeInput
} from "./chunk-KPI6JKG3.mjs";
import "./chunk-DU7PI4H2.mjs";
import {
  FormValidation,
  ScrollToInvalid
} from "./chunk-CNZ5U7G7.mjs";
import {
  FormFieldsComponent
} from "./chunk-EFZB4JUM.mjs";
import {
  commonFormValidator
} from "./chunk-JLRAXHSD.mjs";
import {
  DefaultValueAccessor,
  FormControlDirective,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-BK46PBGF.mjs";
import {
  LoadingButton
} from "./chunk-RSLJOD3O.mjs";
import "./chunk-SB5Z2O3H.mjs";
import {
  Auth,
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-LCBZHX6Y.mjs";
import "./chunk-53NQCPJ5.mjs";
import {
  ActivatedRoute,
  Router
} from "./chunk-5QYUMBOA.mjs";
import "./chunk-TNROARYC.mjs";
import {
  Component,
  computed,
  finalize,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-XAQLVFTN.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/auth/pages/reset-password/reset-password.ts
var _c0 = () => ({ label: "New Password" });
var _c1 = () => ({ label: "Confirm Password" });
function ResetPassword_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Reset link expires in ", ctx_r1.expiryMinutes(), "m ", ctx_r1.expiryRemainingSeconds(), "s ");
  }
}
var ResetPassword = class _ResetPassword {
  authService = inject(Auth);
  formBuilder = inject(NonNullableFormBuilder);
  formValidation = inject(FormValidation);
  route = inject(ActivatedRoute);
  router = inject(Router);
  snackBar = inject(MatSnackBar);
  resetToken = "";
  expiryTimer;
  resetPasswordForm;
  hasClickedSubmit = signal(false, ...ngDevMode ? [{ debugName: "hasClickedSubmit" }] : []);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  expiresAt = signal("", ...ngDevMode ? [{ debugName: "expiresAt" }] : []);
  expiresInSeconds = signal(0, ...ngDevMode ? [{ debugName: "expiresInSeconds" }] : []);
  hasExpiresInSeconds = signal(false, ...ngDevMode ? [{ debugName: "hasExpiresInSeconds" }] : []);
  expirySecondsLeft = signal(0, ...ngDevMode ? [{ debugName: "expirySecondsLeft" }] : []);
  expiryMinutes = computed(() => Math.floor(this.expirySecondsLeft() / 60), ...ngDevMode ? [{ debugName: "expiryMinutes" }] : []);
  expiryRemainingSeconds = computed(() => this.expirySecondsLeft() % 60, ...ngDevMode ? [{ debugName: "expiryRemainingSeconds" }] : []);
  ngOnInit() {
    this.createForm();
    this.resetToken = this.route.snapshot.queryParamMap.get("resetToken") || "";
    if (!this.resetToken) {
      this.router.navigateByUrl("/404", { replaceUrl: true });
      return;
    }
    const params = this.route.snapshot.queryParamMap;
    this.expiresAt.set(params.get("expiresAt") || "");
    this.expiresInSeconds.set(Number(params.get("expiresInSeconds")) || 0);
    this.hasExpiresInSeconds.set(params.has("expiresInSeconds"));
    this.startExpiryCountdown();
  }
  ngOnDestroy() {
    if (this.expiryTimer)
      clearInterval(this.expiryTimer);
  }
  createForm() {
    this.resetPasswordForm = this.formBuilder.group({
      password: ["", [commonFormValidator({
        required: true,
        requireNumber: true,
        requireLetter: true,
        disallowSpaces: true,
        minLength: 6,
        maxLength: 100
      })]],
      confirmPassword: ["", [commonFormValidator({
        required: true,
        disallowSpaces: true,
        maxLength: 100
      })]]
    }, {
      validators: [matchControlValidator({
        sourceControlName: "password",
        targetControlName: "confirmPassword",
        sourceControlLabel: "password"
      })]
    });
  }
  onSubmit() {
    this.hasClickedSubmit.set(true);
    this.formValidation.validateAndRun(this.resetPasswordForm, () => {
      if (!this.resetToken)
        return;
      this.isSubmitting.set(true);
      this.authService.resetPassword({
        resetToken: this.resetToken,
        newPassword: this.resetPasswordForm.controls.password.value
      }).pipe(finalize(() => this.isSubmitting.set(false))).subscribe({
        next: (response) => {
          this.snackBar.open(response.message, "\u2716", {
            duration: 5e3,
            panelClass: "snackbar-success"
          });
          this.router.navigate(["/auth/login"], {
            queryParams: {
              returnUrl: this.route.snapshot.queryParamMap.get("returnUrl")
            },
            replaceUrl: true
          });
        },
        error: (error) => {
          const message = error.error?.message || error.error?.error || "Password reset failed. Please try again.";
          this.snackBar.open(message, "\u2716", {
            duration: 5e3,
            panelClass: "snackbar-error"
          });
        }
      });
    });
  }
  startExpiryCountdown() {
    if (this.expiryTimer)
      clearInterval(this.expiryTimer);
    const parsedExpiry = Date.parse(this.expiresAt());
    const expiryDeadline = Number.isNaN(parsedExpiry) ? Date.now() + this.expiresInSeconds() * 1e3 : parsedExpiry;
    const updateSecondsLeft = () => {
      const secondsLeft = Math.max(0, Math.ceil((expiryDeadline - Date.now()) / 1e3));
      this.expirySecondsLeft.set(secondsLeft);
      if (secondsLeft === 0 && this.expiryTimer) {
        clearInterval(this.expiryTimer);
        this.expiryTimer = void 0;
      }
    };
    updateSecondsLeft();
    if (this.expirySecondsLeft() > 0) {
      this.expiryTimer = setInterval(updateSecondsLeft, 1e3);
    }
  }
  static \u0275fac = function ResetPassword_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPassword)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPassword, selectors: [["app-reset-password"]], decls: 17, vars: 16, consts: [[1, "auth-form"], [1, "mb-8", "text-center"], [1, "text-3xl", "font-bold", "text-gray-900"], [1, "mt-2", "text-sm", "text-gray-600"], [1, "mb-6", "rounded-xl", "border", "border-amber-200", "bg-amber-50", "px-4", "py-3", "text-center"], ["appScrollToInvalid", "", 1, "space-y-5", 3, "ngSubmit", "formGroup"], [3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit"], ["type", "password", "name", "password", "placeholder", "Enter new password", "autocomplete", "new-password", "appSanitizeInput", "", 1, "u-form-field", 3, "formControl", "noSpaceAllow"], ["type", "password", "name", "confirmPassword", "placeholder", "Re-enter new password", "autocomplete", "new-password", "appSanitizeInput", "", 1, "u-form-field", 3, "formControl", "noSpaceAllow"], [1, "mt-10", "w-full", 3, "loading"], ["type", "submit", 1, "u-gradient-btn", "w-full", 3, "disabled"], [1, "text-sm", "font-semibold", "text-amber-700"]], template: function ResetPassword_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Enter and confirm your new password.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ResetPassword_Conditional_6_Template, 3, 2, "div", 4);
      \u0275\u0275elementStart(7, "form", 5);
      \u0275\u0275listener("ngSubmit", function ResetPassword_Template_form_ngSubmit_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(8, "app-form-fields", 6)(9, "app-password-field");
      \u0275\u0275element(10, "input", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "app-form-fields", 6)(12, "app-password-field");
      \u0275\u0275element(13, "input", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "app-loading-button", 9)(15, "button", 10);
      \u0275\u0275text(16, " Reset Password ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.expiresAt() || ctx.hasExpiresInSeconds() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.resetPasswordForm);
      const passwordControl_r3 = ctx.resetPasswordForm.controls.password;
      \u0275\u0275advance();
      \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(14, _c0))("dynamicFormControl", passwordControl_r3)("hasClickedSubmit", ctx.hasClickedSubmit());
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", passwordControl_r3)("noSpaceAllow", true);
      const confirmPasswordControl_r4 = ctx.resetPasswordForm.controls.confirmPassword;
      \u0275\u0275advance();
      \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(15, _c1))("dynamicFormControl", confirmPasswordControl_r4)("hasClickedSubmit", ctx.hasClickedSubmit());
      \u0275\u0275advance(2);
      \u0275\u0275property("formControl", confirmPasswordControl_r4)("noSpaceAllow", true);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting());
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormControlDirective,
    FormGroupDirective,
    MatSnackBarModule,
    FormFieldsComponent,
    PasswordField,
    LoadingButton,
    SanitizeInput,
    ScrollToInvalid
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPassword, [{
    type: Component,
    args: [{ selector: "app-reset-password", imports: [
      ReactiveFormsModule,
      MatSnackBarModule,
      FormFieldsComponent,
      PasswordField,
      LoadingButton,
      SanitizeInput,
      ScrollToInvalid
    ], template: `<div class="auth-form">
  <div class="mb-8 text-center">
    <h1 class="text-3xl font-bold text-gray-900">Reset Password</h1>
    <p class="mt-2 text-sm text-gray-600">Enter and confirm your new password.</p>
  </div>

  @if (expiresAt() || hasExpiresInSeconds()) {
  <div class="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center">
    <p class="text-sm font-semibold text-amber-700">
      Reset link expires in {{ expiryMinutes() }}m {{ expiryRemainingSeconds() }}s
    </p>
  </div>
  }

  <form appScrollToInvalid [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit()" class="space-y-5">
    @let passwordControl = resetPasswordForm.controls.password;
    <app-form-fields [fieldConfig]="{ label: 'New Password' }" [dynamicFormControl]="passwordControl"
      [hasClickedSubmit]="hasClickedSubmit()">
      <app-password-field>
        <input type="password" [formControl]="passwordControl" class="u-form-field" name="password"
          placeholder="Enter new password" autocomplete="new-password" appSanitizeInput [noSpaceAllow]="true" />
      </app-password-field>
    </app-form-fields>

    @let confirmPasswordControl = resetPasswordForm.controls.confirmPassword;
    <app-form-fields [fieldConfig]="{ label: 'Confirm Password' }" [dynamicFormControl]="confirmPasswordControl"
      [hasClickedSubmit]="hasClickedSubmit()">
      <app-password-field>
        <input type="password" [formControl]="confirmPasswordControl" class="u-form-field" name="confirmPassword"
          placeholder="Re-enter new password" autocomplete="new-password" appSanitizeInput [noSpaceAllow]="true" />
      </app-password-field>
    </app-form-fields>

    <app-loading-button [loading]="isSubmitting()" class="mt-10 w-full">
      <button type="submit" class="u-gradient-btn w-full" [disabled]="isSubmitting()">
        Reset Password
      </button>
    </app-loading-button>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPassword, { className: "ResetPassword", filePath: "src/app/features/auth/pages/reset-password/reset-password.ts", lineNumber: 30 });
})();
export {
  ResetPassword
};
//# sourceMappingURL=chunk-COMB66C2.mjs.map
