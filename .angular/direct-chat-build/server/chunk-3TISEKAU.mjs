import './polyfills.server.mjs';
import {
  PasswordField
} from "./chunk-ZCPS22YT.mjs";
import {
  Redirect
} from "./chunk-M3XNFLEY.mjs";
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
  RouterLink
} from "./chunk-5QYUMBOA.mjs";
import {
  CommonModule
} from "./chunk-TNROARYC.mjs";
import {
  Component,
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
  ɵɵtext
} from "./chunk-XAQLVFTN.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/auth/pages/login/login.ts
var _c0 = () => ({ label: "Username or Email" });
var _c1 = () => ({ label: "Password" });
function Login_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 5);
    \u0275\u0275listener("ngSubmit", function Login_Conditional_6_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "app-form-fields", 6);
    \u0275\u0275element(2, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-form-fields", 6)(4, "app-password-field", 8);
    \u0275\u0275element(5, "input", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-loading-button", 10)(7, "button", 11);
    \u0275\u0275text(8, " Login ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "p", 13);
    \u0275\u0275text(11, "Don't have an account? ");
    \u0275\u0275elementStart(12, "a", 14);
    \u0275\u0275text(13, " Sign up ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.loginForm);
    const usernameControl_r3 = ctx_r1.loginForm.controls.username;
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(15, _c0))("dynamicFormControl", usernameControl_r3)("hasClickedSubmit", ctx_r1.hasClickedSubmit);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", usernameControl_r3)("placeholder", "Enter username or email")("noSpaceAllow", true);
    const passwordControl_r4 = ctx_r1.loginForm.controls.password;
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(16, _c1))("dynamicFormControl", passwordControl_r4)("hasClickedSubmit", ctx_r1.hasClickedSubmit);
    \u0275\u0275advance();
    \u0275\u0275property("showForgotPassword", true);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", passwordControl_r4)("placeholder", "Enter password")("noSpaceAllow", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.isSubmitting());
  }
}
var Login = class _Login {
  authService = inject(Auth);
  formBuilder = inject(NonNullableFormBuilder);
  snackBar = inject(MatSnackBar);
  formValidation = inject(FormValidation);
  redirect = inject(Redirect);
  loginForm;
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  hasClickedSubmit = false;
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      username: [
        "",
        [
          commonFormValidator({
            required: true
          })
        ]
      ],
      password: [
        "",
        [
          commonFormValidator({
            required: true
          })
        ]
      ]
    });
  }
  onSubmit() {
    this.hasClickedSubmit = true;
    this.formValidation.validateAndRun(this.loginForm, () => {
      this.isSubmitting.set(true);
      this.loginUser();
    });
  }
  loginUser() {
    if (this.loginForm.valid) {
      const controls = this.loginForm.controls;
      const loginData = {
        username: controls.username.value,
        password: controls.password.value
      };
      this.authService.login(loginData).subscribe({
        next: (response) => {
          console.log("Login successful", response);
          this.redirect.postLogin();
        },
        error: (error) => {
          this.isSubmitting.set(false);
          const message = error.error?.message || "Login failed. Please try again.";
          this.snackBar.open(message, "\u2716", { duration: 5e3, panelClass: "snackbar-error" });
          console.error("Login error", error);
        }
      });
    }
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 7, vars: 1, consts: [[1, "auth-form"], [1, "mb-8", "text-center"], [1, "text-3xl", "font-bold", "text-gray-900"], [1, "text-gray-600", "text-sm", "mt-2"], ["appScrollToInvalid", "", 1, "space-y-5", 3, "formGroup"], ["appScrollToInvalid", "", 1, "space-y-5", 3, "ngSubmit", "formGroup"], [3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit"], ["type", "text", "name", "username", "appSanitizeInput", "", 1, "lowercase", "placeholder:normal-case", "u-form-field", 3, "formControl", "placeholder", "noSpaceAllow"], [3, "showForgotPassword"], ["type", "password", "name", "password", "appSanitizeInput", "", 1, "u-form-field", 3, "formControl", "placeholder", "noSpaceAllow"], [1, "mt-10", "w-full", 3, "loading"], ["type", "submit", 1, "u-gradient-btn", "w-full"], [1, "text-center", "mt-6"], [1, "text-gray-600", "text-sm"], ["routerLink", "/auth/signup", 1, "text-blue-600", "hover:text-blue-700", "font-semibold"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Welcome back");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, Login_Conditional_6_Template, 14, 17, "form", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loginForm ? 6 : -1);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormControlDirective,
    FormGroupDirective,
    CommonModule,
    FormFieldsComponent,
    SanitizeInput,
    LoadingButton,
    MatSnackBarModule,
    RouterLink,
    PasswordField,
    ScrollToInvalid
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", imports: [
      ReactiveFormsModule,
      CommonModule,
      FormFieldsComponent,
      SanitizeInput,
      LoadingButton,
      MatSnackBarModule,
      RouterLink,
      PasswordField,
      ScrollToInvalid
    ], template: `<div class="auth-form">
  <div class="mb-8 text-center">
    <h1 class="text-3xl font-bold text-gray-900">Login</h1>
    <p class="text-gray-600 text-sm mt-2">Welcome back</p>
  </div>
  @if (loginForm) {
  <form appScrollToInvalid [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-5">

    @let usernameControl=loginForm.controls.username;
    <app-form-fields [fieldConfig]="{label: 'Username or Email'}" [dynamicFormControl]="usernameControl"
      [hasClickedSubmit]="hasClickedSubmit">
      <input type="text" [formControl]="usernameControl" class="lowercase placeholder:normal-case u-form-field"
        [placeholder]="'Enter username or email'" name="username" appSanitizeInput [noSpaceAllow]="true" />
    </app-form-fields>

    @let passwordControl=loginForm.controls.password;
    <app-form-fields [fieldConfig]="{label: 'Password'}" [dynamicFormControl]="passwordControl"
      [hasClickedSubmit]="hasClickedSubmit">
      <app-password-field [showForgotPassword]="true">
        <input type="password" [formControl]="passwordControl" class="u-form-field" name="password"
          [placeholder]="'Enter password'" appSanitizeInput [noSpaceAllow]="true" />
      </app-password-field>
    </app-form-fields>

    <app-loading-button [loading]="isSubmitting()" class="mt-10 w-full">
      <button type="submit" class="u-gradient-btn w-full">
        Login
      </button>
    </app-loading-button>

    <div class="text-center mt-6">
      <p class="text-gray-600 text-sm">Don't have an account?
        <a routerLink="/auth/signup" class="text-blue-600 hover:text-blue-700 font-semibold">
          Sign up
        </a>
      </p>
    </div>
  </form>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/features/auth/pages/login/login.ts", lineNumber: 33 });
})();
export {
  Login
};
//# sourceMappingURL=chunk-3TISEKAU.mjs.map
