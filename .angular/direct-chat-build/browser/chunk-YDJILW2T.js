import {
  ImageUploader,
  existsValidator
} from "./chunk-SE3UFXYR.js";
import {
  CommonDialog
} from "./chunk-36X7E7MJ.js";
import {
  MatDialog,
  TelemetryClick
} from "./chunk-ALZZ5FDG.js";
import {
  CapitalizeWordsPipe
} from "./chunk-FQUAC3NH.js";
import {
  Thumbnail
} from "./chunk-6NRHWHNW.js";
import "./chunk-Z4NWBK2D.js";
import {
  matchControlValidator
} from "./chunk-6GLOQIDO.js";
import {
  PasswordField
} from "./chunk-BQUYYPOZ.js";
import {
  SanitizeInput
} from "./chunk-Y6BEIZXJ.js";
import {
  FaIconComponent,
  FontAwesomeModule,
  faCamera,
  faFile,
  faFolderOpen,
  faPen,
  faTrash
} from "./chunk-65M5LICJ.js";
import {
  FormValidation,
  ScrollToInvalid,
  isMobile
} from "./chunk-5KBR2PZO.js";
import {
  FormFieldsComponent
} from "./chunk-K37WEG3F.js";
import {
  commonFormValidator
} from "./chunk-P5CYD73A.js";
import {
  DefaultValueAccessor,
  FormControl,
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
  Router,
  RouterLink,
  RouterModule
} from "./chunk-BQE5RZFF.js";
import {
  CommonModule,
  NgClass
} from "./chunk-CYBPL3OT.js";
import {
  Component,
  finalize,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
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
  ɵɵpureFunction5,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-CSUKEAYK.js";
import "./chunk-35BBDGX6.js";

// src/app/features/auth/pages/signup/signup.ts
var _c0 = () => ({ label: "Profile Photo" });
var _c1 = (a0, a1, a2, a3, a4) => ({ "ng-valid": a0, "ng-invalid": a1, "ng-touched": a2, "ng-dirty": a3, "is-empty": a4 });
var _c2 = () => ({ label: "Name" });
var _c3 = () => ({ label: "Username" });
var _c4 = () => ({ pendingText: "\u23F3 Checking username availability.", validText: "Username is available." });
var _c5 = () => ({ label: "Password" });
var _c6 = () => ({ label: "Confirm Password" });
function Signup_Conditional_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function Signup_Conditional_6_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRemovePhoto());
    });
    \u0275\u0275element(1, "fa-icon", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.faTrash);
  }
}
function Signup_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 5);
    \u0275\u0275listener("ngSubmit", function Signup_Conditional_6_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275element(1, "input", 6)(2, "input", 7);
    \u0275\u0275elementStart(3, "div", 8)(4, "app-form-fields", 9)(5, "div", 10)(6, "app-image-uploader", 11);
    \u0275\u0275listener("fileSelected", function Signup_Conditional_6_Template_app_image_uploader_fileSelected_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onProfilePhotoSelected($event));
    });
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275element(8, "app-thumbnail", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 14)(10, "app-image-uploader", 15);
    \u0275\u0275listener("fileSelected", function Signup_Conditional_6_Template_app_image_uploader_fileSelected_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onProfilePhotoSelected($event));
    });
    \u0275\u0275elementStart(11, "div", 16);
    \u0275\u0275element(12, "fa-icon", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, Signup_Conditional_6_Conditional_13_Template, 2, 1, "button", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 19)(15, "app-form-fields", 20);
    \u0275\u0275element(16, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-form-fields", 22);
    \u0275\u0275element(18, "input", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 24)(20, "app-form-fields", 25)(21, "app-password-field");
    \u0275\u0275element(22, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "app-form-fields", 25)(24, "app-password-field");
    \u0275\u0275element(25, "input", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "app-loading-button", 28)(27, "button", 29);
    \u0275\u0275text(28, " Sign Up ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 30)(30, "p", 31);
    \u0275\u0275text(31, "Already have an account? ");
    \u0275\u0275elementStart(32, "a", 32);
    \u0275\u0275text(33, " Login ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.signupForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(35, _c0))("dynamicFormControl", ctx_r1.profilePhotoControl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(36, _c1, ctx_r1.profilePhotoControl.valid, ctx_r1.profilePhotoControl.invalid, ctx_r1.profilePhotoControl.touched, ctx_r1.profilePhotoControl.dirty, !ctx_r1.selectedProfileImage()));
    \u0275\u0275advance();
    \u0275\u0275property("imageData", (tmp_5_0 = ctx_r1.selectedProfileImage()) == null ? null : tmp_5_0.imageData)("fileType", (tmp_6_0 = ctx_r1.selectedProfileImage()) == null ? null : tmp_6_0.fileType)("alt", "Selected profile image")("showBorder", false);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r1.selectedProfileImage() ? ctx_r1.faPen : ctx_r1.isMobileDevice ? ctx_r1.faCamera : ctx_r1.faFolderOpen);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedProfileImage() ? 13 : -1);
    const nameControl_r4 = ctx_r1.signupForm.controls.name;
    \u0275\u0275advance(2);
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(42, _c2))("dynamicFormControl", nameControl_r4)("hasClickedSubmit", ctx_r1.hasClickedSubmit());
    \u0275\u0275advance();
    \u0275\u0275property("formControl", nameControl_r4)("placeholder", "Enter name");
    const usernameControl_r5 = ctx_r1.signupForm.controls.username;
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(43, _c3))("dynamicFormControl", usernameControl_r5)("hasClickedSubmit", ctx_r1.hasClickedSubmit())("text", \u0275\u0275pureFunction0(44, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("formControl", usernameControl_r5)("placeholder", "Enter username")("noSpaceAllow", true);
    const passwordControl_r6 = ctx_r1.signupForm.controls.password;
    \u0275\u0275advance(2);
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(45, _c5))("dynamicFormControl", passwordControl_r6)("hasClickedSubmit", ctx_r1.hasClickedSubmit());
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", passwordControl_r6)("placeholder", "Enter password")("noSpaceAllow", true);
    const confirmPasswordControl_r7 = ctx_r1.signupForm.controls.confirmPassword;
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(46, _c6))("dynamicFormControl", confirmPasswordControl_r7)("hasClickedSubmit", ctx_r1.hasClickedSubmit());
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", confirmPasswordControl_r7)("placeholder", "Re-enter password")("noSpaceAllow", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.isSubmitting());
  }
}
var Signup = class _Signup {
  userService = inject(User);
  authService = inject(Auth);
  formBuilder = inject(NonNullableFormBuilder);
  snackBar = inject(MatSnackBar);
  dialog = inject(MatDialog);
  formValidation = inject(FormValidation);
  router = inject(Router);
  route = inject(ActivatedRoute);
  capitalizeWordsPipe = new CapitalizeWordsPipe();
  signupForm;
  profilePhotoControl = new FormControl("", { nonNullable: true });
  usernameConfig;
  passwordConfig;
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  hasClickedSubmit = signal(false, ...ngDevMode ? [{ debugName: "hasClickedSubmit" }] : []);
  usernameExists = true;
  faCamera = faCamera;
  faFolderOpen = faFolderOpen;
  faFile = faFile;
  faPen = faPen;
  faTrash = faTrash;
  selectedProfileImage = signal(null, ...ngDevMode ? [{ debugName: "selectedProfileImage" }] : []);
  isMobileDevice = isMobile();
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.signupForm = this.formBuilder.group({
      name: ["", [commonFormValidator({
        required: true,
        disallowNumber: true,
        requireLetter: true,
        disallowSpecialChars: true,
        maxLength: 30
      })]],
      username: [
        "",
        {
          validators: [
            commonFormValidator({
              required: true,
              disallowSpaces: true,
              disallowSpecialChars: true,
              minLength: 3,
              maxLength: 20
            })
          ],
          asyncValidators: [
            existsValidator({
              apiObserable: (value) => {
                return this.userService.checkIfUserExists({ username: value }).pipe(map((response) => response.exists));
              }
            })
          ]
        }
      ],
      password: ["", [commonFormValidator({
        required: true,
        requireNumber: true,
        requireLetter: true,
        disallowSpaces: true,
        minLength: 6,
        maxLength: 20
      })]],
      confirmPassword: ["", [commonFormValidator({
        required: true,
        disallowSpaces: true,
        maxLength: 20
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
    this.formValidation.validateAndRun(this.signupForm, () => {
      this.isSubmitting.set(true);
      this.createUser();
    });
  }
  createUser() {
    if (this.signupForm.valid) {
      const controls = this.signupForm.controls;
      const userData = {
        name: this.capitalizeWordsPipe.transform(controls.name.value),
        username: controls.username.value.toLowerCase(),
        password: controls.password.value
      };
      this.authService.signup(userData).pipe(switchMap(() => {
        const profileImage = this.selectedProfileImage();
        if (!profileImage) {
          return of(null);
        }
        let dialogRef = null;
        let canCloseDialog = false;
        let shouldCloseDialog = false;
        let minVisibleTimeout = null;
        const dialogOpenTimeout = setTimeout(() => {
          dialogRef = this.dialog.open(CommonDialog, {
            disableClose: true,
            data: {
              type: "confirm",
              message: "Profile created successfully. Adding your profile photo now, please wait..."
            }
          });
          minVisibleTimeout = setTimeout(() => {
            canCloseDialog = true;
            if (shouldCloseDialog) {
              dialogRef?.close();
            }
          }, 1e3);
        }, 2e3);
        return this.userService.updateProfileImage(profileImage.file).pipe(finalize(() => {
          clearTimeout(dialogOpenTimeout);
          if (minVisibleTimeout) {
            clearTimeout(minVisibleTimeout);
          }
          if (!dialogRef) {
            return;
          }
          if (canCloseDialog) {
            dialogRef.close();
          } else {
            shouldCloseDialog = true;
            minVisibleTimeout = setTimeout(() => {
              canCloseDialog = true;
              dialogRef?.close();
            }, 1e3);
          }
        }));
      }), switchMap(() => this.userService.verifyPassword({
        currentPassword: userData.password,
        purpose: "CHANGE_EMAIL"
      })), finalize(() => this.isSubmitting.set(false))).subscribe({
        next: (response) => {
          console.log("user created", response);
          this.snackBar.open("Profile created successfully.", "\u2716", {
            duration: 3e3,
            panelClass: "snackbar-success"
          });
          this.navigateToEmailEntry();
        },
        error: (error) => {
          const isAuthenticated = !!this.authService.authState().user;
          const message = isAuthenticated ? "Account created, but profile photo upload failed. You can update it later." : error.error?.message || "Signup failed. Please try again.";
          this.snackBar.open(message, "\u2716", { duration: 3e3, panelClass: "snackbar-error" });
          if (isAuthenticated) {
            this.navigateToEmailEntry();
          }
          console.error("error creating user", error);
        }
      });
    }
  }
  navigateToEmailEntry() {
    this.router.navigate(["/auth/email-entry"], {
      queryParams: {
        purpose: "SIGNUP",
        returnUrl: this.route.snapshot.queryParamMap.get("returnUrl")
      }
    });
  }
  onProfilePhotoSelected(selection) {
    const profileImage = selection.files[0];
    if (!profileImage)
      return;
    selection.dialogRef?.close({ file: profileImage });
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : null;
      if (!result) {
        this.selectedProfileImage.set(null);
        this.profilePhotoControl.setValue("");
        this.profilePhotoControl.markAsTouched();
        this.profilePhotoControl.markAsDirty();
        return;
      }
      const [, imageData = ""] = result.split(",", 2);
      this.selectedProfileImage.set({
        file: profileImage,
        imageData,
        fileType: profileImage.type || "image/jpeg"
      });
      this.profilePhotoControl.setValue(profileImage.name);
      this.profilePhotoControl.markAsTouched();
      this.profilePhotoControl.markAsDirty();
    };
    reader.readAsDataURL(profileImage);
  }
  onRemovePhoto() {
    this.selectedProfileImage.set(null);
    this.profilePhotoControl.setValue("");
    this.profilePhotoControl.markAsTouched();
    this.profilePhotoControl.markAsDirty();
  }
  static \u0275fac = function Signup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Signup)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Signup, selectors: [["app-signup"]], decls: 7, vars: 1, consts: [[1, "auth-form"], [1, "mb-8", "text-center"], [1, "text-3xl", "font-bold", "text-gray-900"], [1, "text-gray-600", "text-sm", "mt-2"], ["appScrollToInvalid", "", 1, "space-y-5", 3, "formGroup"], ["appScrollToInvalid", "", 1, "space-y-5", 3, "ngSubmit", "formGroup"], ["type", "text", "name", "username", 1, "sr-only"], ["type", "password", "name", "password", 1, "sr-only"], [1, "sm:flex", "shrink-0", "gap-6"], [1, "sm:order-2", "sm:text-center", 3, "fieldConfig", "dynamicFormControl"], [1, "w-fit", "sm:mx-auto"], [1, "block", "leading-0", 3, "fileSelected"], ["type", "button", "appTelemetryClick", "signup_profile_photo_open", 1, "u-form-field", "block", "w-auto", "overflow-hidden", "rounded-[10%]", "p-0", "outline-none", 3, "ngClass"], ["size", "7rem", 3, "imageData", "fileType", "alt", "showBorder"], [1, "flex", "items-center", "justify-center", "gap-2", "mt-2", "sm:order-1"], [3, "fileSelected"], ["type", "button", "appTelemetryClick", "signup_profile_photo_edit", 1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "border", "border-cyan-200", "bg-white", "text-cyan-600", "shadow-sm", "transition", "hover:border-cyan-300", "hover:bg-cyan-50", "hover:text-cyan-700"], [3, "icon"], ["type", "button", "appTelemetryClick", "signup_profile_photo_remove", 1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "border", "border-rose-200", "bg-white", "text-rose-500", "shadow-sm", "transition", "hover:border-rose-300", "hover:bg-rose-50", "hover:text-rose-600"], [1, "grow"], [3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit"], ["type", "text", "name", "name", "appSanitizeInput", "", 1, "u-form-field", "capitalize", "placeholder:normal-case", 3, "formControl", "placeholder"], [3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit", "text"], ["type", "text", "name", "username", "appSanitizeInput", "", 1, "u-form-field", "lowercase", "placeholder:normal-case", 3, "formControl", "placeholder", "noSpaceAllow"], [1, "sm:flex", "gap-6"], [1, "grow", 3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit"], ["type", "password", "name", "password", "appSanitizeInput", "", 1, "u-form-field", 3, "formControl", "placeholder", "noSpaceAllow"], ["type", "password", "name", "confirmPassword", "appSanitizeInput", "", 1, "u-form-field", 3, "formControl", "placeholder", "noSpaceAllow"], [1, "mt-10", 3, "loading"], ["type", "submit", 1, "u-gradient-btn", "w-full"], [1, "text-center", "mt-6"], [1, "text-gray-600", "text-sm"], ["routerLink", "/auth/login", 1, "text-blue-600", "hover:text-blue-700", "font-semibold"], ["type", "button", "appTelemetryClick", "signup_profile_photo_remove", 1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "border", "border-rose-200", "bg-white", "text-rose-500", "shadow-sm", "transition", "hover:border-rose-300", "hover:bg-rose-50", "hover:text-rose-600", 3, "click"]], template: function Signup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Sign Up");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Create your account");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, Signup_Conditional_6_Template, 34, 47, "form", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.signupForm ? 6 : -1);
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
    NgClass,
    FontAwesomeModule,
    FaIconComponent,
    FormFieldsComponent,
    SanitizeInput,
    LoadingButton,
    MatSnackBarModule,
    RouterModule,
    RouterLink,
    PasswordField,
    Thumbnail,
    ImageUploader,
    ScrollToInvalid,
    TelemetryClick
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Signup, [{
    type: Component,
    args: [{ selector: "app-signup", imports: [
      ReactiveFormsModule,
      CommonModule,
      FontAwesomeModule,
      FormFieldsComponent,
      SanitizeInput,
      LoadingButton,
      MatSnackBarModule,
      RouterModule,
      PasswordField,
      Thumbnail,
      ImageUploader,
      ScrollToInvalid,
      TelemetryClick
    ], template: `<div class="auth-form">\r
    <div class="mb-8 text-center">\r
        <h1 class="text-3xl font-bold text-gray-900">Sign Up</h1>\r
        <p class="text-gray-600 text-sm mt-2">Create your account</p>\r
    </div>\r
    @if (signupForm) {\r
    <form appScrollToInvalid [formGroup]="signupForm" (ngSubmit)="onSubmit()" class="space-y-5">\r
\r
        <!-- Added to extra dummy field to stop browser auto porefield -->\r
        <input type="text" name="username" class="sr-only" />\r
        <input type="password" name="password" class="sr-only" />\r
\r
        <div class="sm:flex shrink-0 gap-6">\r
            <app-form-fields [fieldConfig]="{label: 'Profile Photo'}" [dynamicFormControl]="profilePhotoControl" class="sm:order-2 sm:text-center">\r
                <div class="w-fit sm:mx-auto">\r
                    <app-image-uploader (fileSelected)="onProfilePhotoSelected($event)" class="block leading-0">
                        <div type="button"
                            class="u-form-field block w-auto overflow-hidden rounded-[10%] p-0 outline-none"
                            appTelemetryClick="signup_profile_photo_open" [ngClass]="{
                            'ng-valid': profilePhotoControl.valid,\r
                            'ng-invalid': profilePhotoControl.invalid,\r
                            'ng-touched': profilePhotoControl.touched,\r
                            'ng-dirty': profilePhotoControl.dirty,\r
                            'is-empty': !selectedProfileImage()\r
                        }">\r
                            <app-thumbnail [imageData]="selectedProfileImage()?.imageData"\r
                                [fileType]="selectedProfileImage()?.fileType" size="7rem"\r
                                [alt]="'Selected profile image'" [showBorder]="false">\r
                            </app-thumbnail>\r
                        </div>\r
                    </app-image-uploader>\r
\r
                    <div class="flex items-center justify-center gap-2 mt-2 sm:order-1">\r
                        <app-image-uploader (fileSelected)="onProfilePhotoSelected($event)">
                            <div type="button"
                                class="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200 bg-white text-cyan-600 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                                appTelemetryClick="signup_profile_photo_edit">
                                <fa-icon\r
                                    [icon]="selectedProfileImage() ? faPen : (isMobileDevice ? faCamera : faFolderOpen)"></fa-icon>\r
                            </div>\r
                        </app-image-uploader>\r
\r
                        @if (selectedProfileImage()) {\r
                        <button type="button"
                            class="flex h-9 w-9 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-500 shadow-sm transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600"
                            appTelemetryClick="signup_profile_photo_remove" (click)="onRemovePhoto()">
                            <fa-icon [icon]="faTrash"></fa-icon>\r
                        </button>\r
                        }\r
                    </div>\r
                </div>\r
            </app-form-fields>\r
\r
            <div class="grow">\r
                @let nameControl=signupForm.controls.name;\r
                <app-form-fields [fieldConfig]="{label: 'Name'}" [dynamicFormControl]="nameControl"\r
                    [hasClickedSubmit]="hasClickedSubmit()">\r
                    <input type="text" [formControl]="nameControl" class="u-form-field capitalize placeholder:normal-case" [placeholder]="'Enter name'"\r
                        name="name" appSanitizeInput />\r
                </app-form-fields>\r
\r
                @let usernameControl=signupForm.controls.username;\r
                <app-form-fields [fieldConfig]="{label: 'Username'}" [dynamicFormControl]="usernameControl"\r
                    [hasClickedSubmit]="hasClickedSubmit()"\r
                    [text]="{pendingText: '\u23F3 Checking username availability.', validText: 'Username is available.'}">\r
                    <input type="text" [formControl]="usernameControl"\r
                        class="u-form-field lowercase placeholder:normal-case" [placeholder]="'Enter username'"\r
                        name="username" appSanitizeInput [noSpaceAllow]="true" />\r
                </app-form-fields>\r
            </div>\r
        </div>\r
\r
        <div class="sm:flex gap-6">\r
            @let passwordControl=signupForm.controls.password;\r
            <app-form-fields [fieldConfig]="{label: 'Password'}" [dynamicFormControl]="passwordControl"\r
                [hasClickedSubmit]="hasClickedSubmit()" class="grow">\r
                <app-password-field>\r
                    <input type="password" [formControl]="passwordControl" class="u-form-field" name="password"\r
                        [placeholder]="'Enter password'" appSanitizeInput [noSpaceAllow]="true" />\r
                </app-password-field>\r
            </app-form-fields>\r
\r
            @let confirmPasswordControl=signupForm.controls.confirmPassword;\r
            <app-form-fields [fieldConfig]="{label: 'Confirm Password'}" [dynamicFormControl]="confirmPasswordControl"\r
                [hasClickedSubmit]="hasClickedSubmit()" class="grow">\r
                <app-password-field>\r
                    <input type="password" [formControl]="confirmPasswordControl" class="u-form-field"\r
                        name="confirmPassword" [placeholder]="'Re-enter password'" appSanitizeInput\r
                        [noSpaceAllow]="true" />\r
                </app-password-field>\r
            </app-form-fields>\r
        </div>\r
\r
        <app-loading-button [loading]="isSubmitting()" class="mt-10">\r
            <button type="submit" class="u-gradient-btn w-full">\r
                Sign Up\r
            </button>\r
        </app-loading-button>\r
\r
        <div class="text-center mt-6">\r
            <p class="text-gray-600 text-sm">Already have an account?\r
                <a routerLink="/auth/login" class="text-blue-600 hover:text-blue-700 font-semibold">\r
                    Login\r
                </a>\r
            </p>\r
        </div>\r
    </form>\r
    }\r
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Signup, { className: "Signup", filePath: "src/app/features/auth/pages/signup/signup.ts", lineNumber: 50 });
})();
export {
  Signup
};
//# sourceMappingURL=chunk-YDJILW2T.js.map
