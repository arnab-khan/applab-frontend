import {
  Redirect
} from "./chunk-I5ZQP4R7.js";
import {
  PasswordField
} from "./chunk-EFOQB4CU.js";
import {
  SanitizeInput
} from "./chunk-E4MUYDRL.js";
import "./chunk-YP5LKVIU.js";
import {
  FormValidation,
  ScrollToInvalid
} from "./chunk-CYTNY2EY.js";
import {
  FormFieldsComponent
} from "./chunk-HZ4CUDGB.js";
import {
  commonFormValidator
} from "./chunk-P5CYD73A.js";
import {
  ErrorNotification
} from "./chunk-7SZW6Z2V.js";
import {
  LoadingButton
} from "./chunk-WN54JEUL.js";
import {
  DefaultValueAccessor,
  FormControlDirective,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-3NTCQKGC.js";
import "./chunk-NHTWTLXP.js";
import "./chunk-FZM4RF6G.js";
import {
  Auth,
  MatSnackBarModule
} from "./chunk-ENDAPT56.js";
import "./chunk-DOMMC6UT.js";
import "./chunk-BMRGKSCE.js";
import {
  CommonModule,
  RouterLink
} from "./chunk-SYFHBLZR.js";
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
} from "./chunk-7MOHRCPT.js";
import "./chunk-35BBDGX6.js";

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
    \u0275\u0275elementStart(1, "fieldset", 6)(2, "app-form-fields", 7);
    \u0275\u0275element(3, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-fields", 7)(5, "app-password-field", 9);
    \u0275\u0275element(6, "input", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "app-loading-button", 11)(8, "button", 12);
    \u0275\u0275text(9, " Login ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 13)(11, "p", 14);
    \u0275\u0275text(12, "Don't have an account? ");
    \u0275\u0275elementStart(13, "a", 15);
    \u0275\u0275text(14, " Sign up ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.loginForm);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSubmitting());
    const usernameControl_r3 = ctx_r1.loginForm.controls.username;
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(16, _c0))("dynamicFormControl", usernameControl_r3)("hasClickedSubmit", ctx_r1.hasClickedSubmit);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", usernameControl_r3)("placeholder", "Enter username or email")("noSpaceAllow", true);
    const passwordControl_r4 = ctx_r1.loginForm.controls.password;
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(17, _c1))("dynamicFormControl", passwordControl_r4)("hasClickedSubmit", ctx_r1.hasClickedSubmit);
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
  errorNotification = inject(ErrorNotification);
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
          this.errorNotification.show(error, "Login failed. Please try again.", { duration: 5e3, verticalPosition: "top", panelClass: "snackbar-error" });
          console.error("Login error", error);
        }
      });
    }
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 7, vars: 1, consts: [[1, "auth-form"], [1, "mb-8", "text-center"], [1, "text-3xl", "font-bold", "text-gray-900"], [1, "text-gray-600", "text-sm", "mt-2"], ["appScrollToInvalid", "", 1, "space-y-5", 3, "formGroup"], ["appScrollToInvalid", "", 1, "space-y-5", 3, "ngSubmit", "formGroup"], [1, "contents", 3, "disabled"], [3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit"], ["type", "text", "name", "username", "appSanitizeInput", "", 1, "lowercase", "placeholder:normal-case", "u-form-field", 3, "formControl", "placeholder", "noSpaceAllow"], [3, "showForgotPassword"], ["type", "password", "name", "password", "appSanitizeInput", "", 1, "u-form-field", 3, "formControl", "placeholder", "noSpaceAllow"], [1, "mt-10", "w-full", 3, "loading"], ["type", "submit", 1, "u-gradient-btn", "w-full"], [1, "text-center", "mt-6"], [1, "text-gray-600", "text-sm"], ["routerLink", "/auth/signup", 1, "text-blue-600", "hover:text-blue-700", "font-semibold"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Welcome back");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, Login_Conditional_6_Template, 15, 18, "form", 4);
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
    <fieldset class="contents" [disabled]="isSubmitting()">

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
    </fieldset>
  </form>
  }
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/features/auth/pages/login/login.ts", lineNumber: 34 });
})();
export {
  Login
};
//# sourceMappingURL=chunk-R2N63BGA.js.map
