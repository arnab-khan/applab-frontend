import {
  AutoResizeTextarea
} from "./chunk-VJWD2X6S.js";
import {
  ImageUploader,
  existsValidator
} from "./chunk-SE3UFXYR.js";
import {
  CommonDialog
} from "./chunk-36X7E7MJ.js";
import {
  MatDialog,
  MatDialogModule,
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
  faArrowLeft
} from "./chunk-65M5LICJ.js";
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
  RouterLink,
  RouterModule
} from "./chunk-BQE5RZFF.js";
import "./chunk-CYBPL3OT.js";
import {
  Component,
  finalize,
  inject,
  map,
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

// src/app/features/profile/pages/edit-profile/edit-profile.ts
var _c0 = () => ({ purpose: "CHANGE_EMAIL", returnUrl: "/profile/edit-profile" });
var _c1 = () => ({ label: "Name" });
var _c2 = () => ({ label: "Bio" });
var _c3 = () => ({ label: "Username" });
var _c4 = (a0) => ({ pendingText: "\u23F3 Checking username availability.", validText: a0 });
var _c5 = () => ({ label: "Current Password" });
var _c6 = () => ({ label: "New Password" });
var _c7 = () => ({ label: "Confirm Password" });
function EditProfile_Conditional_2_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function EditProfile_Conditional_2_Conditional_8_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemovePhoto());
    });
    \u0275\u0275text(1, " Remove Photo ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.profileImageLoading());
  }
}
function EditProfile_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "app-image-uploader", 23);
    \u0275\u0275listener("fileSelected", function EditProfile_Conditional_2_Conditional_8_Template_app_image_uploader_fileSelected_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onProfilePhotoSelected($event));
    });
    \u0275\u0275elementStart(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, EditProfile_Conditional_2_Conditional_8_Conditional_4_Template, 2, 1, "button", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("cropButtonText", "Save");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r1.profileState().profileImage) == null ? null : tmp_4_0.fileData) ? "Edit Photo" : "Upload Photo", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r1.profileState().profileImage) == null ? null : tmp_5_0.fileData) ? 4 : -1);
  }
}
function EditProfile_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 27);
    \u0275\u0275listener("ngSubmit", function EditProfile_Conditional_2_Conditional_22_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBasicSubmit());
    });
    \u0275\u0275elementStart(1, "app-form-fields", 28);
    \u0275\u0275element(2, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-form-fields", 30);
    \u0275\u0275element(4, "textarea", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32)(6, "app-loading-button", 33)(7, "button", 34);
    \u0275\u0275text(8, " Save Basic Info ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.basicForm);
    const nameControl_r5 = ctx_r1.basicForm.controls.name;
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(13, _c1))("dynamicFormControl", nameControl_r5)("hasClickedSubmit", ctx_r1.hasClickedBasicSubmit());
    \u0275\u0275advance();
    \u0275\u0275property("formControl", nameControl_r5)("placeholder", "Enter name");
    const bioControl_r6 = ctx_r1.basicForm.controls.bio;
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(14, _c2))("dynamicFormControl", bioControl_r6)("hasClickedSubmit", ctx_r1.hasClickedBasicSubmit());
    \u0275\u0275advance();
    \u0275\u0275property("formControl", bioControl_r6)("placeholder", "Short bio");
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r1.basicSaveLoading());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.basicSaveLoading());
  }
}
function EditProfile_Conditional_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 27);
    \u0275\u0275listener("ngSubmit", function EditProfile_Conditional_2_Conditional_27_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCredentialsSubmit());
    });
    \u0275\u0275element(1, "input", 35)(2, "input", 36);
    \u0275\u0275elementStart(3, "app-form-fields", 37);
    \u0275\u0275element(4, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-form-fields", 28)(6, "app-password-field", 39);
    \u0275\u0275element(7, "input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 41)(9, "app-form-fields", 28)(10, "app-password-field");
    \u0275\u0275element(11, "input", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "app-form-fields", 28)(13, "app-password-field");
    \u0275\u0275element(14, "input", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 32)(16, "app-loading-button", 33)(17, "button", 34);
    \u0275\u0275text(18, " Save Credentials ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.credentialsForm);
    const usernameControl_r8 = ctx_r1.credentialsForm.controls.username;
    const usernameValue_r9 = usernameControl_r8.value.trim();
    \u0275\u0275advance(3);
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(29, _c3))("dynamicFormControl", usernameControl_r8)("hasClickedSubmit", ctx_r1.hasClickedCredentialsSubmit())("text", \u0275\u0275pureFunction1(30, _c4, usernameValue_r9 ? usernameValue_r9 === ((tmp_9_0 = ctx_r1.authState().user) == null ? null : tmp_9_0.username) ? "This is your current username." : "Username is available." : ""));
    \u0275\u0275advance();
    \u0275\u0275property("formControl", usernameControl_r8)("placeholder", "Enter username")("noSpaceAllow", true);
    const currentPasswordControl_r10 = ctx_r1.credentialsForm.controls.currentPassword;
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(32, _c5))("dynamicFormControl", currentPasswordControl_r10)("hasClickedSubmit", ctx_r1.hasClickedCredentialsSubmit());
    \u0275\u0275advance();
    \u0275\u0275property("showForgotPassword", true);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", currentPasswordControl_r10)("placeholder", "Enter current password")("noSpaceAllow", true);
    const newPasswordControl_r11 = ctx_r1.credentialsForm.controls.newPassword;
    const confirmPasswordControl_r12 = ctx_r1.credentialsForm.controls.confirmPassword;
    \u0275\u0275advance(2);
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(33, _c6))("dynamicFormControl", newPasswordControl_r11)("hasClickedSubmit", ctx_r1.hasClickedCredentialsSubmit());
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", newPasswordControl_r11)("placeholder", "Enter new password")("noSpaceAllow", true);
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(34, _c7))("dynamicFormControl", confirmPasswordControl_r12)("hasClickedSubmit", ctx_r1.hasClickedCredentialsSubmit());
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", confirmPasswordControl_r12)("placeholder", "Re-enter new password")("noSpaceAllow", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r1.credentialsSaveLoading());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.credentialsSaveLoading());
  }
}
function EditProfile_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275element(1, "fa-icon", 4);
    \u0275\u0275text(2, " Go Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6);
    \u0275\u0275element(5, "app-thumbnail", 7);
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7, "Profile Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, EditProfile_Conditional_2_Conditional_8_Template, 5, 3, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10)(10, "a", 11);
    \u0275\u0275element(11, "fa-icon", 4);
    \u0275\u0275text(12, " Go Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 12)(14, "h1", 13);
    \u0275\u0275text(15, "Edit Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 14);
    \u0275\u0275text(17, "Update your profile information and save your changes.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 15)(19, "div", 16)(20, "h2", 17);
    \u0275\u0275text(21, "Profile Basics");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, EditProfile_Conditional_2_Conditional_22_Template, 9, 15, "form", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "hr", 19);
    \u0275\u0275elementStart(24, "div", 16)(25, "h2", 17);
    \u0275\u0275text(26, "Credentials");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, EditProfile_Conditional_2_Conditional_27_Template, 19, 35, "form", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 16)(29, "h2", 17);
    \u0275\u0275text(30, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 20)(32, "p", 21);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "a", 22);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const user_r13 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.faArrowLeft);
    \u0275\u0275advance(4);
    \u0275\u0275property("imageData", (tmp_3_0 = ctx_r1.profileState().profileImage) == null ? null : tmp_3_0.fileData)("fileType", (tmp_4_0 = ctx_r1.profileState().profileImage) == null ? null : tmp_4_0.fileType)("name", user_r13.name)("loading", ctx_r1.profileImageLoading())("alt", (user_r13.name || user_r13.username || "User") + " profile image");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.profileImageLoading() ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r1.faArrowLeft);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.basicForm ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.credentialsForm ? 27 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(user_r13.email || "No email added");
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(13, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r13.email ? "Change Email" : "Add Email", " ");
  }
}
function EditProfile_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h2", 44);
    \u0275\u0275text(2, "No Profile Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 45);
    \u0275\u0275text(4, "Please login to edit your profile details.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 46);
    \u0275\u0275text(6, " Go to Login ");
    \u0275\u0275elementEnd()();
  }
}
var EditProfile = class _EditProfile {
  authService = inject(Auth);
  userService = inject(User);
  formBuilder = inject(NonNullableFormBuilder);
  snackBar = inject(MatSnackBar);
  dialog = inject(MatDialog);
  formValidation = inject(FormValidation);
  capitalizeWordsPipe = new CapitalizeWordsPipe();
  authState = this.authService.authState;
  profileState = this.authService.profileState;
  faArrowLeft = faArrowLeft;
  hasClickedBasicSubmit = signal(false, ...ngDevMode ? [{ debugName: "hasClickedBasicSubmit" }] : []);
  hasClickedCredentialsSubmit = signal(false, ...ngDevMode ? [{ debugName: "hasClickedCredentialsSubmit" }] : []);
  profileImageLoading = signal(false, ...ngDevMode ? [{ debugName: "profileImageLoading" }] : []);
  basicSaveLoading = signal(false, ...ngDevMode ? [{ debugName: "basicSaveLoading" }] : []);
  credentialsSaveLoading = signal(false, ...ngDevMode ? [{ debugName: "credentialsSaveLoading" }] : []);
  basicForm;
  credentialsForm;
  ngOnInit() {
    this.createForms();
    this.loadFullProfileImage();
  }
  loadFullProfileImage() {
    this.profileImageLoading.set(true);
    this.userService.getFullProfileImage().pipe(finalize(() => this.profileImageLoading.set(false))).subscribe({
      error: (error) => {
        console.error("Error loading profile image", error);
      }
    });
  }
  createForms() {
    const user = this.authState().user;
    this.basicForm = this.formBuilder.group({
      name: [user?.name || "", [commonFormValidator({
        required: true,
        disallowNumber: true,
        requireLetter: true,
        disallowSpecialChars: true,
        maxLength: 30
      })]],
      bio: [user?.bio || "", [commonFormValidator({
        maxLength: 80
      })]]
    });
    this.credentialsForm = this.formBuilder.group({
      username: [
        user?.username || "",
        {
          validators: [
            commonFormValidator({
              disallowSpaces: true,
              disallowSpecialChars: true,
              minLength: 3,
              maxLength: 20
            })
          ],
          asyncValidators: [
            existsValidator({
              ignoreValue: () => this.authState().status === "authenticated" ? this.authState().user?.username : null,
              apiObserable: (value) => {
                return this.userService.checkIfUserExists({ username: value }).pipe(map((response) => response.exists));
              }
            })
          ]
        }
      ],
      newPassword: ["", [commonFormValidator({
        requireNumber: true,
        requireLetter: true,
        disallowSpaces: true,
        minLength: 6,
        maxLength: 20
      })]],
      confirmPassword: ["", [commonFormValidator({
        disallowSpaces: true,
        maxLength: 20
      })]],
      currentPassword: ["", [commonFormValidator({
        required: true,
        disallowSpaces: true,
        maxLength: 20
      })]]
    }, {
      validators: [matchControlValidator({
        sourceControlName: "newPassword",
        targetControlName: "confirmPassword",
        sourceControlLabel: "new password",
        targetRequiredWhenSourceHasValue: true
      })]
    });
  }
  onBasicSubmit() {
    this.hasClickedBasicSubmit.set(true);
    this.formValidation.validateAndRun(this.basicForm, () => {
      this.basicSaveLoading.set(true);
      const payload = __spreadProps(__spreadValues({}, this.basicForm.getRawValue()), {
        name: this.capitalizeWordsPipe.transform(this.basicForm.getRawValue().name)
      });
      this.userService.updateProfileBasics(payload).pipe(finalize(() => this.basicSaveLoading.set(false))).subscribe({
        next: () => {
          this.credentialsForm.controls.currentPassword.reset("");
          this.credentialsForm.controls.newPassword.reset("");
          this.credentialsForm.controls.confirmPassword.reset("");
          this.snackBar.open("Profile basics updated successfully", "\u2716", {
            duration: 5e3,
            panelClass: "snackbar-success"
          });
        },
        error: (error) => {
          const message = error.error?.message || error.error?.error || error.error || "Profile basics update failed. Please try again.";
          this.snackBar.open(message, "\u2716", {
            duration: 5e3,
            panelClass: "snackbar-error"
          });
          this.hasClickedBasicSubmit.set(false);
        }
      });
    });
  }
  onCredentialsSubmit() {
    this.hasClickedCredentialsSubmit.set(true);
    this.formValidation.validateAndRun(this.credentialsForm, () => {
      const { username, newPassword: password, currentPassword } = this.credentialsForm.getRawValue();
      const body = __spreadValues(__spreadProps(__spreadValues({}, username && { username: username.toLowerCase() }), {
        currentPassword
      }), password?.trim() && { password });
      this.credentialsSaveLoading.set(true);
      this.userService.updateCredentials(body).pipe(finalize(() => this.credentialsSaveLoading.set(false))).subscribe({
        next: () => {
          this.snackBar.open("Credentials updated successfully", "\u2716", {
            duration: 3e3,
            panelClass: "snackbar-success"
          });
          this.credentialsForm.controls.currentPassword.reset("");
          this.credentialsForm.controls.newPassword.reset("");
          this.credentialsForm.controls.confirmPassword.reset("");
          this.hasClickedCredentialsSubmit.set(false);
        },
        error: (error) => {
          const message = error.error?.message || error.error?.error || error.error || "Credentials update failed. Please try again.";
          this.snackBar.open(message, "\u2716", {
            duration: 3e3,
            panelClass: "snackbar-error"
          });
        }
      });
    });
  }
  onProfilePhotoSelected(selection) {
    const profileImage = selection.files[0];
    if (!profileImage)
      return;
    this.userService.updateProfileImage(profileImage).subscribe({
      next: () => {
        selection.dialogRef?.close({ file: profileImage });
        this.snackBar.open("Profile photo updated successfully", "\u2716", {
          duration: 3e3,
          panelClass: "snackbar-success"
        });
      },
      error: () => {
        selection.dialogRef?.componentInstance?.isCropping.set(false);
      }
    });
  }
  onRemovePhoto() {
    this.dialog.open(CommonDialog, {
      width: "30rem",
      data: {
        type: "warning",
        message: "Are you sure you want to remove your profile photo?",
        confirmText: "Remove Photo",
        cancelText: "Cancel",
        onConfirm: (dialogRef, dialog) => {
          this.profileImageLoading.set(true);
          this.userService.deleteProfileImage().pipe(finalize(() => {
            this.profileImageLoading.set(false);
            dialog.isConfirming.set(false);
          })).subscribe({
            next: () => {
              dialogRef.close({ confirmed: true });
              this.snackBar.open("Profile photo removed successfully", "\u2716", {
                duration: 3e3,
                panelClass: "snackbar-success"
              });
            },
            error: (error) => {
              const message = error.error?.message || error.error?.error || error.error || "Failed to remove profile photo. Please try again.";
              this.snackBar.open(message, "\u2716", {
                duration: 3e3,
                panelClass: "snackbar-error"
              });
            }
          });
        }
      }
    });
  }
  static \u0275fac = function EditProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditProfile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProfile, selectors: [["app-edit-profile"]], decls: 4, vars: 1, consts: [[1, "flex", "items-center", "justify-center", "grow", "u-responsive-padding-xy"], [1, "overflow-hidden", "rounded-3xl", "sm:border", "border-white/50", "sm:bg-cyan-50", "sm:shadow-xl", "sm:u-responsive-padding-xy", "u-container-2"], [1, "relative", "z-10", "rounded-2xl", "border", "border-slate-200", "bg-white/90", "p-8", "text-center"], ["routerLink", "/profile/view-profile", 1, "u-btn-outline-cyan", "border-0", "bg-white/80", "mb-4", "sm:hidden", "block", "w-fit"], [1, "mr-2", "text-xs", 3, "icon"], [1, "grid", "gap-6", "sm:grid-cols-[13.8rem_1fr]"], [1, "flex", "flex-col", "items-center", "rounded-2xl", "border", "border-slate-200", "bg-white/80", "p-4", "py-5"], ["size", "9rem", 3, "imageData", "fileType", "name", "loading", "alt"], [1, "mt-3", "text-sm", "font-medium", "text-slate-600"], [1, "mt-4", "flex", "w-full", "flex-col", "gap-7"], [1, "rounded-2xl", "border", "border-slate-200", "bg-white/90", "p-4", "py-5", "sm:p-5"], ["routerLink", "/profile/view-profile", 1, "u-btn-outline-cyan", "mb-4", "hidden", "sm:block", "w-fit"], [1, "mb-5"], [1, "text-2xl", "font-bold", "tracking-tight", "text-slate-900"], [1, "mt-1", "text-sm", "text-slate-600"], [1, "space-y-4"], [1, "sm:rounded-xl", "sm:border", "border-slate-200", "sm:bg-slate-50", "sm:p-4"], [1, "text-sm", "font-semibold", "uppercase", "tracking-wide", "text-slate-600"], ["appScrollToInvalid", "", 3, "formGroup"], [1, "-mx-5", "my-10", "border-2", "border-violet-500", "sm:hidden"], [1, "mt-4", "flex", "items-center", "justify-between", "gap-4", "rounded-xl", "border", "border-slate-200", "bg-white", "p-4"], [1, "min-w-0", "truncate", "text-sm", "text-slate-600"], ["routerLink", "/auth/password-verification", 1, "u-btn-outline-cyan", "shrink-0", 3, "queryParams"], [3, "fileSelected", "cropButtonText"], ["appTelemetryClick", "profile_photo_open_uploader", 1, "u-btn-primary-cyan"], ["type", "button", 1, "u-btn-danger-rose", 3, "disabled"], ["type", "button", 1, "u-btn-danger-rose", 3, "click", "disabled"], ["appScrollToInvalid", "", 3, "ngSubmit", "formGroup"], [3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit"], ["type", "text", "name", "name", "appSanitizeInput", "", 1, "u-form-field", "capitalize", "placeholder:normal-case", 3, "formControl", "placeholder"], [1, "leading-0", 3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit"], ["name", "bio", "appSanitizeInput", "", "appAutoResizeTextarea", "", 1, "u-form-field", "min-h-25", 3, "formControl", "placeholder"], [1, "mt-10"], [1, "sm:w-fit", 3, "loading"], ["type", "submit", 1, "u-btn-primary-cyan", 3, "disabled"], ["type", "text", "name", "username", 1, "sr-only"], ["type", "password", "name", "password", 1, "sr-only"], [3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit", "text"], ["type", "text", "name", "username", "appSanitizeInput", "", 1, "u-form-field", "lowercase", "placeholder:normal-case", 3, "formControl", "placeholder", "noSpaceAllow"], [3, "showForgotPassword"], ["type", "password", "name", "currentPassword", "appSanitizeInput", "", 1, "u-form-field", 3, "formControl", "placeholder", "noSpaceAllow"], [1, "grid", "gap-4", "lg:grid-cols-2"], ["type", "password", "name", "newPassword", "appSanitizeInput", "", 1, "u-form-field", 3, "formControl", "placeholder", "noSpaceAllow"], ["type", "password", "name", "confirmPassword", "appSanitizeInput", "", 1, "u-form-field", 3, "formControl", "placeholder", "noSpaceAllow"], [1, "text-xl", "font-semibold", "text-slate-900"], [1, "mt-2", "text-slate-600"], ["routerLink", "/auth/login", 1, "mt-4", "inline-flex", "items-center", "justify-center", "rounded-lg", "bg-cyan-600", "px-5", "py-2", "text-sm", "font-semibold", "text-white", "no-underline", "transition", "hover:bg-cyan-700"]], template: function EditProfile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, EditProfile_Conditional_2_Template, 36, 14)(3, EditProfile_Conditional_3_Template, 7, 0, "div", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_0_0 = ctx.authState().user) ? 2 : 3, tmp_0_0);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormControlDirective,
    FormGroupDirective,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule,
    RouterLink,
    FontAwesomeModule,
    FaIconComponent,
    Thumbnail,
    FormFieldsComponent,
    SanitizeInput,
    AutoResizeTextarea,
    ScrollToInvalid,
    ImageUploader,
    LoadingButton,
    PasswordField,
    TelemetryClick
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditProfile, [{
    type: Component,
    args: [{ selector: "app-edit-profile", imports: [
      ReactiveFormsModule,
      MatDialogModule,
      MatSnackBarModule,
      RouterModule,
      FontAwesomeModule,
      Thumbnail,
      FormFieldsComponent,
      SanitizeInput,
      AutoResizeTextarea,
      ScrollToInvalid,
      ImageUploader,
      LoadingButton,
      PasswordField,
      TelemetryClick
    ], template: `<section class="flex items-center justify-center grow u-responsive-padding-xy">
  <div
    class="overflow-hidden rounded-3xl sm:border border-white/50 sm:bg-cyan-50 sm:shadow-xl sm:u-responsive-padding-xy u-container-2">
    @if (authState().user; as user) {
    <a routerLink="/profile/view-profile" class="u-btn-outline-cyan border-0 bg-white/80 mb-4 sm:hidden block w-fit">
      <fa-icon [icon]="faArrowLeft" class="mr-2 text-xs"></fa-icon>
      Go Back
    </a>
    <div class="grid gap-6 sm:grid-cols-[13.8rem_1fr]">
      <div class="flex flex-col items-center rounded-2xl border border-slate-200 bg-white/80 p-4 py-5">
        <app-thumbnail [imageData]="profileState().profileImage?.fileData"
          [fileType]="profileState().profileImage?.fileType" [name]="user.name" [loading]="profileImageLoading()"
          size="9rem" [alt]="(user.name || user.username || 'User') + ' profile image'">
        </app-thumbnail>
        <p class="mt-3 text-sm font-medium text-slate-600">Profile Photo</p>

        @if (!profileImageLoading()) {
        <div class="mt-4 flex w-full flex-col gap-7">
          <app-image-uploader [cropButtonText]="'Save'" (fileSelected)="onProfilePhotoSelected($event)">
            <div class="u-btn-primary-cyan" appTelemetryClick="profile_photo_open_uploader">
              {{ profileState().profileImage?.fileData ? 'Edit Photo' : 'Upload Photo' }}
            </div>
          </app-image-uploader>
          @if (profileState().profileImage?.fileData) {
          <button type="button" class="u-btn-danger-rose" (click)="onRemovePhoto()" [disabled]="profileImageLoading()">
            Remove Photo
          </button>
          }
        </div>
        }
      </div>

      <div class="rounded-2xl border border-slate-200 bg-white/90 p-4 py-5 sm:p-5">
        <a routerLink="/profile/view-profile" class="u-btn-outline-cyan mb-4 hidden sm:block w-fit">
          <fa-icon [icon]="faArrowLeft" class="mr-2 text-xs"></fa-icon>
          Go Back
        </a>
        <div class="mb-5">
          <h1 class="text-2xl font-bold tracking-tight text-slate-900">Edit Profile</h1>
          <p class="mt-1 text-sm text-slate-600">Update your profile information and save your changes.</p>
        </div>

        <div class="space-y-4">
          <div class="sm:rounded-xl sm:border border-slate-200 sm:bg-slate-50 sm:p-4">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-600">Profile Basics</h2>
            @if (basicForm) {
            <form appScrollToInvalid [formGroup]="basicForm" (ngSubmit)="onBasicSubmit()">
              @let nameControl = basicForm.controls.name;
              <app-form-fields [fieldConfig]="{label: 'Name'}" [dynamicFormControl]="nameControl"
                [hasClickedSubmit]="hasClickedBasicSubmit()">
                <input type="text" [formControl]="nameControl" class="u-form-field capitalize placeholder:normal-case"
                  [placeholder]="'Enter name'" name="name" appSanitizeInput />
              </app-form-fields>

              @let bioControl = basicForm.controls.bio;
              <app-form-fields [fieldConfig]="{label: 'Bio'}" [dynamicFormControl]="bioControl"
                [hasClickedSubmit]="hasClickedBasicSubmit()" class="leading-0">
                <textarea [formControl]="bioControl" class="u-form-field min-h-25" [placeholder]="'Short bio'"
                  name="bio" appSanitizeInput appAutoResizeTextarea></textarea>
              </app-form-fields>

              <div class="mt-10">
                <app-loading-button [loading]="basicSaveLoading()" class="sm:w-fit">
                  <button type="submit" class="u-btn-primary-cyan" [disabled]="basicSaveLoading()">
                    Save Basic Info
                  </button>
                </app-loading-button>
              </div>
            </form>
            }
          </div>

          <hr class="-mx-5 my-10 border-2 border-violet-500 sm:hidden">

          <div class="sm:rounded-xl sm:border border-slate-200 sm:bg-slate-50 sm:p-4">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-600">Credentials</h2>
            @if (credentialsForm) {
            <form appScrollToInvalid [formGroup]="credentialsForm" (ngSubmit)="onCredentialsSubmit()">

              <!-- Added to extra dummy field to stop browser auto porefield -->
              <input type="text" name="username" class="sr-only" />
              <input type="password" name="password" class="sr-only" />

              @let usernameControl = credentialsForm.controls.username;
              @let usernameValue = usernameControl.value.trim();
              <app-form-fields [fieldConfig]="{label: 'Username'}" [dynamicFormControl]="usernameControl"
                [hasClickedSubmit]="hasClickedCredentialsSubmit()" [text]="{
                  pendingText: '\u23F3 Checking username availability.',
                  validText: usernameValue
                    ? (usernameValue === authState().user?.username
                      ? 'This is your current username.'
                      : 'Username is available.')
                    : ''
                }">
                <input type="text" [formControl]="usernameControl"
                  class="u-form-field lowercase placeholder:normal-case" [placeholder]="'Enter username'"
                  name="username" appSanitizeInput [noSpaceAllow]="true" />
              </app-form-fields>
              @let currentPasswordControl = credentialsForm.controls.currentPassword;
              <app-form-fields [fieldConfig]="{label: 'Current Password'}" [dynamicFormControl]="currentPasswordControl"
                [hasClickedSubmit]="hasClickedCredentialsSubmit()">
                <app-password-field [showForgotPassword]="true">
                  <input type="password" [formControl]="currentPasswordControl" class="u-form-field"
                    [placeholder]="'Enter current password'" name="currentPassword" appSanitizeInput
                    [noSpaceAllow]="true" />
                </app-password-field>
              </app-form-fields>

              @let newPasswordControl = credentialsForm.controls.newPassword;
              @let confirmPasswordControl = credentialsForm.controls.confirmPassword;
              <div class="grid gap-4 lg:grid-cols-2">
                <app-form-fields [fieldConfig]="{label: 'New Password'}" [dynamicFormControl]="newPasswordControl"
                  [hasClickedSubmit]="hasClickedCredentialsSubmit()">
                  <app-password-field>
                    <input type="password" [formControl]="newPasswordControl" class="u-form-field"
                      [placeholder]="'Enter new password'" name="newPassword" appSanitizeInput [noSpaceAllow]="true" />
                  </app-password-field>
                </app-form-fields>

                <app-form-fields [fieldConfig]="{label: 'Confirm Password'}"
                  [dynamicFormControl]="confirmPasswordControl" [hasClickedSubmit]="hasClickedCredentialsSubmit()">
                  <app-password-field>
                    <input type="password" [formControl]="confirmPasswordControl" class="u-form-field"
                      [placeholder]="'Re-enter new password'" name="confirmPassword" appSanitizeInput
                      [noSpaceAllow]="true" />
                  </app-password-field>
                </app-form-fields>
              </div>

              <div class="mt-10">
                <app-loading-button [loading]="credentialsSaveLoading()" class="sm:w-fit">
                  <button type="submit" class="u-btn-primary-cyan" [disabled]="credentialsSaveLoading()">
                    Save Credentials
                  </button>
                </app-loading-button>
              </div>
            </form>
            }
          </div>

          <div class="sm:rounded-xl sm:border border-slate-200 sm:bg-slate-50 sm:p-4">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-600">Email</h2>
            <div class="mt-4 flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <p class="min-w-0 truncate text-sm text-slate-600">{{ user.email || 'No email added' }}</p>
              <a routerLink="/auth/password-verification"
                [queryParams]="{ purpose: 'CHANGE_EMAIL', returnUrl: '/profile/edit-profile' }"
                class="u-btn-outline-cyan shrink-0">
                {{ user.email ? 'Change Email' : 'Add Email' }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    } @else {
    <div class="relative z-10 rounded-2xl border border-slate-200 bg-white/90 p-8 text-center">
      <h2 class="text-xl font-semibold text-slate-900">No Profile Data</h2>
      <p class="mt-2 text-slate-600">Please login to edit your profile details.</p>
      <a routerLink="/auth/login"
        class="mt-4 inline-flex items-center justify-center rounded-lg bg-cyan-600 px-5 py-2 text-sm font-semibold text-white no-underline transition hover:bg-cyan-700">
        Go to Login
      </a>
    </div>
    }
  </div>
</section>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProfile, { className: "EditProfile", filePath: "src/app/features/profile/pages/edit-profile/edit-profile.ts", lineNumber: 49 });
})();
export {
  EditProfile
};
//# sourceMappingURL=chunk-IR4FARPD.js.map
