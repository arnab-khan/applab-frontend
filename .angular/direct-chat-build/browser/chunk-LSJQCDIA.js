import {
  Redirect
} from "./chunk-YTEHCUZV.js";
import {
  SanitizeInput
} from "./chunk-Y6BEIZXJ.js";
import {
  FormValidation,
  ScrollToInvalid
} from "./chunk-5KBR2PZO.js";
import {
  FormFieldsComponent
} from "./chunk-K37WEG3F.js";
import {
  commonFormValidator
} from "./chunk-P5CYD73A.js";
import {
  DefaultValueAccessor,
  FormControlDirective,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-CCYGSJSA.js";
import {
  LoadingButton
} from "./chunk-UMKDZD2E.js";
import "./chunk-LJMNHIRN.js";
import {
  Auth,
  MatSnackBar,
  MatSnackBarModule,
  User
} from "./chunk-SDFCVRZT.js";
import "./chunk-5QQ5IMAE.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-BQE5RZFF.js";
import "./chunk-CYBPL3OT.js";
import {
  Component,
  computed,
  effect,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CSUKEAYK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/features/auth/pages/email-entry/email-entry.ts
var _c0 = (a0) => ({ label: a0 });
function EmailEntry_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, " No email address has been added to your account. ");
    \u0275\u0275elementEnd();
  }
}
function EmailEntry_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function EmailEntry_Conditional_7_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.skipEmail());
    });
    \u0275\u0275text(1, " Skip for now ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting());
  }
}
function EmailEntry_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6);
    \u0275\u0275listener("ngSubmit", function EmailEntry_Conditional_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "app-form-fields", 7);
    \u0275\u0275element(2, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-loading-button", 9)(4, "button", 10);
    \u0275\u0275text(5, " Send OTP ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, EmailEntry_Conditional_7_Conditional_6_Template, 2, 1, "button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.emailForm);
    const emailControl_r4 = ctx_r1.emailForm.controls.email;
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction1(11, _c0, ctx_r1.pageContent().fieldLabel))("dynamicFormControl", emailControl_r4)("hasClickedSubmit", ctx_r1.hasClickedSubmit());
    \u0275\u0275advance();
    \u0275\u0275property("formControl", emailControl_r4)("placeholder", ctx_r1.pageContent().fieldPlaceholder)("readOnly", ctx_r1.useLoggedInUserEmail())("noSpaceAllow", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSubmitting());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.pageContent().showSkipButton ? 6 : -1);
  }
}
var PURPOSE_CONTENT = {
  EDIT_PROFILE: {
    title: "Enter New Email",
    description: "Enter the new email address you want to use. We will send a verification code to it.",
    fieldLabel: "New Email",
    fieldPlaceholder: "Enter your new email address"
  },
  SIGNUP: {
    title: "Add Your Email",
    description: "Enter your email address. We will send a verification code to it.",
    fieldLabel: "Email",
    fieldPlaceholder: "Enter your email address",
    showSkipButton: true
  },
  FORGOT_PASSWORD: {
    title: "Forgot Password",
    description: "Enter your email address and we will send you a verification code to reset your password.",
    fieldLabel: "Email",
    fieldPlaceholder: "Enter your account email address"
  }
};
var EmailEntry = class _EmailEntry {
  route = inject(ActivatedRoute);
  router = inject(Router);
  formBuilder = inject(NonNullableFormBuilder);
  authService = inject(Auth);
  userService = inject(User);
  formValidation = inject(FormValidation);
  snackBar = inject(MatSnackBar);
  redirect = inject(Redirect);
  emailForm;
  hasClickedSubmit = signal(false, ...ngDevMode ? [{ debugName: "hasClickedSubmit" }] : []);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  purpose = signal(null, ...ngDevMode ? [{ debugName: "purpose" }] : []);
  useLoggedInUserEmail = computed(() => this.purpose() === "FORGOT_PASSWORD" && !!this.authService.authState().user?.email, ...ngDevMode ? [{ debugName: "useLoggedInUserEmail" }] : []);
  isForgotPasswordUnavailable = computed(() => this.purpose() === "FORGOT_PASSWORD" && !!this.authService.authState().user && !this.authService.authState().user?.email, ...ngDevMode ? [{ debugName: "isForgotPasswordUnavailable" }] : []);
  pageContent = computed(() => {
    const purpose = this.purpose();
    if (purpose === "FORGOT_PASSWORD") {
      if (this.useLoggedInUserEmail()) {
        return __spreadProps(__spreadValues({}, PURPOSE_CONTENT[purpose]), {
          description: "We will send a verification code to your account email address to reset your password."
        });
      }
      if (this.isForgotPasswordUnavailable()) {
        return __spreadProps(__spreadValues({}, PURPOSE_CONTENT[purpose]), {
          description: "No email address is linked to your account, so you cannot reset your password by email."
        });
      }
    }
    return purpose ? PURPOSE_CONTENT[purpose] : {
      title: "Enter Email",
      description: "Enter your email address to continue.",
      fieldLabel: "Email",
      fieldPlaceholder: "Enter your email address"
    };
  }, ...ngDevMode ? [{ debugName: "pageContent" }] : []);
  constructor() {
    this.createForm();
    effect(() => {
      const email = this.authService.authState().user?.email;
      if (this.purpose() === "FORGOT_PASSWORD" && email && this.emailForm) {
        this.emailForm.controls.email.setValue(email, { emitEvent: false });
      }
    });
  }
  ngOnInit() {
    const purpose = this.route.snapshot.queryParamMap.get("purpose");
    if (!purpose || !(purpose in PURPOSE_CONTENT)) {
      this.router.navigateByUrl("/404", { replaceUrl: true });
      return;
    }
    this.purpose.set(purpose);
  }
  createForm() {
    this.emailForm = this.formBuilder.group({
      email: ["", [
        commonFormValidator({ required: true, email: true, disallowSpaces: true })
      ]]
    });
  }
  onSubmit() {
    this.hasClickedSubmit.set(true);
    this.formValidation.validateAndRun(this.emailForm, () => {
      const purpose = this.purpose();
      if (!purpose)
        return;
      const email = this.emailForm.controls.email.value.trim().toLowerCase();
      this.isSubmitting.set(true);
      this.sendOtp(purpose, email).pipe(finalize(() => this.isSubmitting.set(false))).subscribe({
        next: (response) => {
          this.router.navigate(["/auth/otp-verification"], {
            queryParams: __spreadProps(__spreadValues({
              purpose
            }, response), {
              returnUrl: this.route.snapshot.queryParamMap.get("returnUrl")
            }),
            replaceUrl: true
          });
        },
        error: (error) => {
          const message = error.error?.message || error.error?.error || "Failed to send OTP. Please try again.";
          this.snackBar.open(message, "\u2716", {
            duration: 5e3,
            panelClass: "snackbar-error"
          });
        }
      });
    });
  }
  sendOtp(purpose, email) {
    if (purpose === "FORGOT_PASSWORD") {
      return this.authService.sendForgotPasswordOtp({ email });
    }
    return this.userService.sendEmailOtp({ email });
  }
  skipEmail() {
    const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
    if (returnUrl) {
      this.router.navigateByUrl(returnUrl);
      return;
    }
    this.redirect.postLogin();
  }
  static \u0275fac = function EmailEntry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailEntry)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailEntry, selectors: [["app-email-entry"]], decls: 8, vars: 3, consts: [[1, "auth-form"], [1, "mb-8", "text-center"], [1, "text-3xl", "font-bold", "text-gray-900"], [1, "mt-2", "text-sm", "text-gray-600"], [1, "rounded-xl", "border", "border-amber-200", "bg-amber-50", "p-4", "text-center", "text-sm", "font-medium", "text-amber-800"], ["appScrollToInvalid", "", 1, "space-y-5", 3, "formGroup"], ["appScrollToInvalid", "", 1, "space-y-5", 3, "ngSubmit", "formGroup"], [3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit"], ["type", "text", "inputmode", "email", "name", "email", "autocomplete", "email", "appSanitizeInput", "", 1, "u-form-field", "lowercase", "placeholder:normal-case", 3, "formControl", "placeholder", "readOnly", "noSpaceAllow"], [1, "mt-10", "w-full", 3, "loading"], ["type", "submit", 1, "u-gradient-btn", "w-full", 3, "disabled"], ["type", "button", 1, "w-full", "text-sm", "font-semibold", "text-slate-500", "transition-colors", "hover:text-slate-700", 3, "disabled"], ["type", "button", 1, "w-full", "text-sm", "font-semibold", "text-slate-500", "transition-colors", "hover:text-slate-700", 3, "click", "disabled"]], template: function EmailEntry_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, EmailEntry_Conditional_6_Template, 2, 0, "div", 4)(7, EmailEntry_Conditional_7_Template, 7, 13, "form", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.pageContent().title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.pageContent().description, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isForgotPasswordUnavailable() ? 6 : 7);
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
    LoadingButton,
    SanitizeInput,
    ScrollToInvalid
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailEntry, [{
    type: Component,
    args: [{ selector: "app-email-entry", imports: [
      ReactiveFormsModule,
      MatSnackBarModule,
      FormFieldsComponent,
      LoadingButton,
      SanitizeInput,
      ScrollToInvalid
    ], template: '<div class="auth-form">\n  <div class="mb-8 text-center">\n    <h1 class="text-3xl font-bold text-gray-900">{{ pageContent().title }}</h1>\n    <p class="mt-2 text-sm text-gray-600">\n      {{ pageContent().description }}\n    </p>\n  </div>\n\n  @if (isForgotPasswordUnavailable()) {\n    <div class="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center text-sm font-medium text-amber-800">\n      No email address has been added to your account.\n    </div>\n  } @else {\n  <form appScrollToInvalid [formGroup]="emailForm" (ngSubmit)="onSubmit()" class="space-y-5">\n    @let emailControl = emailForm.controls.email;\n    <app-form-fields [fieldConfig]="{ label: pageContent().fieldLabel }" [dynamicFormControl]="emailControl"\n      [hasClickedSubmit]="hasClickedSubmit()">\n      <input type="text" inputmode="email" [formControl]="emailControl"\n        class="u-form-field lowercase placeholder:normal-case" name="email"\n        [placeholder]="pageContent().fieldPlaceholder" [readOnly]="useLoggedInUserEmail()"\n        autocomplete="email" appSanitizeInput [noSpaceAllow]="true" />\n    </app-form-fields>\n\n    <app-loading-button [loading]="isSubmitting()" class="mt-10 w-full">\n      <button type="submit" class="u-gradient-btn w-full" [disabled]="isSubmitting()">\n        Send OTP\n      </button>\n    </app-loading-button>\n\n    @if (pageContent().showSkipButton) {\n      <button type="button" class="w-full text-sm font-semibold text-slate-500 transition-colors hover:text-slate-700"\n        [disabled]="isSubmitting()" (click)="skipEmail()">\n        Skip for now\n      </button>\n    }\n  </form>\n  }\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailEntry, { className: "EmailEntry", filePath: "src/app/features/auth/pages/email-entry/email-entry.ts", lineNumber: 60 });
})();
export {
  EmailEntry
};
//# sourceMappingURL=chunk-LSJQCDIA.js.map
