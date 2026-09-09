import './polyfills.server.mjs';
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
  MatSnackBar,
  MatSnackBarModule,
  User
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XAQLVFTN.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/features/auth/pages/password-verification/password-verification.ts
var _c0 = () => ({ label: "Current Password" });
var PURPOSE_CONTENT = {
  CHANGE_EMAIL: {
    title: "Verify Password",
    description: "Enter your current password to continue changing your email.",
    successRoute: "/auth/email-entry",
    successQueryParams: { purpose: "EDIT_PROFILE" }
  }
};
var PasswordVerification = class _PasswordVerification {
  route = inject(ActivatedRoute);
  router = inject(Router);
  formBuilder = inject(NonNullableFormBuilder);
  userService = inject(User);
  formValidation = inject(FormValidation);
  snackBar = inject(MatSnackBar);
  purpose = signal(null, ...ngDevMode ? [{ debugName: "purpose" }] : []);
  pageContent = computed(() => {
    const purpose = this.purpose();
    return purpose ? PURPOSE_CONTENT[purpose] : {
      title: "Verify Password",
      description: "Enter your current password to continue."
    };
  }, ...ngDevMode ? [{ debugName: "pageContent" }] : []);
  passwordVerificationForm;
  hasClickedSubmit = signal(false, ...ngDevMode ? [{ debugName: "hasClickedSubmit" }] : []);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  ngOnInit() {
    this.createForm();
    const purpose = this.route.snapshot.queryParamMap.get("purpose");
    if (!purpose || !(purpose in PURPOSE_CONTENT)) {
      this.router.navigateByUrl("/404", { replaceUrl: true });
      return;
    }
    this.purpose.set(purpose);
  }
  createForm() {
    this.passwordVerificationForm = this.formBuilder.group({
      currentPassword: ["", [commonFormValidator({
        required: true
      })]]
    });
  }
  onSubmit() {
    this.hasClickedSubmit.set(true);
    this.formValidation.validateAndRun(this.passwordVerificationForm, () => {
      const purpose = this.purpose();
      if (!purpose) {
        this.snackBar.open("Password verification purpose is invalid.", "\u2716", {
          duration: 5e3,
          panelClass: "snackbar-error"
        });
        return;
      }
      this.isSubmitting.set(true);
      this.userService.verifyPassword({
        currentPassword: this.passwordVerificationForm.controls.currentPassword.value,
        purpose
      }).pipe(finalize(() => this.isSubmitting.set(false))).subscribe({
        next: () => {
          const content = PURPOSE_CONTENT[purpose];
          this.router.navigate([content.successRoute], {
            queryParams: __spreadProps(__spreadValues({}, content.successQueryParams), {
              returnUrl: this.route.snapshot.queryParamMap.get("returnUrl")
            }),
            replaceUrl: true
          });
        },
        error: (error) => {
          const message = error.error?.message || error.error?.error || "Password verification failed. Please try again.";
          this.snackBar.open(message, "\u2716", {
            duration: 5e3,
            panelClass: "snackbar-error"
          });
        }
      });
    });
  }
  static \u0275fac = function PasswordVerification_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordVerification)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PasswordVerification, selectors: [["app-password-verification"]], decls: 13, vars: 12, consts: [[1, "auth-form"], [1, "mb-8", "text-center"], [1, "text-3xl", "font-bold", "text-gray-900"], [1, "mt-2", "text-sm", "text-gray-600"], ["appScrollToInvalid", "", 1, "space-y-5", 3, "ngSubmit", "formGroup"], [3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit"], [3, "showForgotPassword"], ["type", "password", "name", "currentPassword", "placeholder", "Enter current password", "autocomplete", "current-password", "appSanitizeInput", "", 1, "u-form-field", 3, "formControl", "noSpaceAllow"], [1, "mt-10", "w-full", 3, "loading"], ["type", "submit", 1, "u-gradient-btn", "w-full", 3, "disabled"]], template: function PasswordVerification_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "form", 4);
      \u0275\u0275listener("ngSubmit", function PasswordVerification_Template_form_ngSubmit_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(7, "app-form-fields", 5)(8, "app-password-field", 6);
      \u0275\u0275element(9, "input", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "app-loading-button", 8)(11, "button", 9);
      \u0275\u0275text(12, " Verify and Continue ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.pageContent().title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.pageContent().description, " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.passwordVerificationForm);
      const currentPasswordControl_r2 = ctx.passwordVerificationForm.controls.currentPassword;
      \u0275\u0275advance();
      \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(11, _c0))("dynamicFormControl", currentPasswordControl_r2)("hasClickedSubmit", ctx.hasClickedSubmit());
      \u0275\u0275advance();
      \u0275\u0275property("showForgotPassword", true);
      \u0275\u0275advance();
      \u0275\u0275property("formControl", currentPasswordControl_r2)("noSpaceAllow", true);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordVerification, [{
    type: Component,
    args: [{ selector: "app-password-verification", imports: [
      ReactiveFormsModule,
      MatSnackBarModule,
      FormFieldsComponent,
      PasswordField,
      LoadingButton,
      SanitizeInput,
      ScrollToInvalid
    ], template: `<div class="auth-form">
  <div class="mb-8 text-center">
    <h1 class="text-3xl font-bold text-gray-900">{{ pageContent().title }}</h1>
    <p class="mt-2 text-sm text-gray-600">
      {{ pageContent().description }}
    </p>
  </div>

  <form appScrollToInvalid [formGroup]="passwordVerificationForm" (ngSubmit)="onSubmit()" class="space-y-5">
    @let currentPasswordControl = passwordVerificationForm.controls.currentPassword;
    <app-form-fields [fieldConfig]="{ label: 'Current Password' }" [dynamicFormControl]="currentPasswordControl"
      [hasClickedSubmit]="hasClickedSubmit()">
      <app-password-field [showForgotPassword]="true">
        <input type="password" [formControl]="currentPasswordControl" class="u-form-field" name="currentPassword"
          placeholder="Enter current password" autocomplete="current-password" appSanitizeInput [noSpaceAllow]="true" />
      </app-password-field>
    </app-form-fields>

    <app-loading-button [loading]="isSubmitting()" class="mt-10 w-full">
      <button type="submit" class="u-gradient-btn w-full" [disabled]="isSubmitting()">
        Verify and Continue
      </button>
    </app-loading-button>
  </form>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PasswordVerification, { className: "PasswordVerification", filePath: "src/app/features/auth/pages/password-verification/password-verification.ts", lineNumber: 44 });
})();
export {
  PasswordVerification
};
//# sourceMappingURL=chunk-XKJVR6J3.mjs.map
