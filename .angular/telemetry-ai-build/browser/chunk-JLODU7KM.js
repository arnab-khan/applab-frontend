import {
  UserProfile
} from "./chunk-4PH3FKN6.js";
import "./chunk-WTBKWGM3.js";
import "./chunk-3N2RTVI2.js";
import "./chunk-JVJFHH6Q.js";
import "./chunk-LEAETYZC.js";
import "./chunk-YLFZVQAR.js";
import "./chunk-NNMWTHNQ.js";
import "./chunk-FRCNPB6T.js";
import {
  CommonDialog
} from "./chunk-VUUJGVHR.js";
import "./chunk-F4OAGFJT.js";
import "./chunk-H4TIBH5T.js";
import "./chunk-OJASF4WQ.js";
import "./chunk-OYBYPW2K.js";
import "./chunk-VYGEMIP2.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-6BFLP3ZQ.js";
import "./chunk-KY6YBIEL.js";
import "./chunk-7SZW6Z2V.js";
import "./chunk-WN54JEUL.js";
import "./chunk-NHTWTLXP.js";
import "./chunk-FZM4RF6G.js";
import {
  Auth,
  User
} from "./chunk-ENDAPT56.js";
import "./chunk-DOMMC6UT.js";
import "./chunk-BMRGKSCE.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-SYFHBLZR.js";
import {
  Component,
  finalize,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-7MOHRCPT.js";
import "./chunk-35BBDGX6.js";

// src/app/features/profile/pages/view-profile/view-profile.ts
var ViewProfile = class _ViewProfile {
  authService = inject(Auth);
  userService = inject(User);
  dialog = inject(MatDialog);
  authState = this.authService.authState;
  profileState = this.authService.profileState;
  profileImageLoading = signal(false, ...ngDevMode ? [{ debugName: "profileImageLoading" }] : []);
  ngOnInit() {
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
  onLogout() {
    this.dialog.open(CommonDialog, {
      width: "30rem",
      data: {
        type: "warning",
        message: "Are you sure you want to logout?",
        confirmText: "Logout",
        cancelText: "Cancel",
        onConfirm: (dialogRef, dialog) => {
          this.authService.logout().pipe(finalize(() => dialog.isConfirming.set(false))).subscribe({
            next: () => {
              dialogRef.close({ confirmed: true });
              console.log("Logout successful");
            },
            error: (error) => {
              console.error("Logout error", error);
            }
          });
        }
      }
    });
  }
  static \u0275fac = function ViewProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewProfile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewProfile, selectors: [["app-view-profile"]], decls: 8, vars: 4, consts: [[1, "flex", "items-center", "justify-center", "grow", "u-responsive-padding-xy"], [1, "overflow-hidden", "rounded-3xl", "md:border", "border-white/50", "md:bg-cyan-50", "md:shadow-xl", "md:u-responsive-padding-xy", "u-container-2"], [3, "user", "profileImage", "profileImageLoading", "showConnectionRequestButton"], ["profile-actions", "", 1, "flex", "flex-wrap", "gap-3", "max-sm:w-full"], ["routerLink", "/profile/edit-profile", 1, "u-btn-primary-cyan", "px-4", "sm:px-9", "max-sm:grow", "w-fit", "text-center"], ["type", "button", 1, "u-btn-danger-rose", "px-4", "sm:px-9", "max-sm:grow", 3, "click"]], template: function ViewProfile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "app-user-profile", 2)(3, "div", 3)(4, "a", 4);
      \u0275\u0275text(5, " Edit Profile ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function ViewProfile_Template_button_click_6_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275text(7, " Logout ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("user", ctx.authState().user)("profileImage", ctx.profileState().profileImage)("profileImageLoading", ctx.profileImageLoading())("showConnectionRequestButton", false);
    }
  }, dependencies: [RouterModule, RouterLink, MatDialogModule, UserProfile], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewProfile, [{
    type: Component,
    args: [{ selector: "app-view-profile", imports: [RouterModule, MatDialogModule, UserProfile], template: '<section class="flex items-center justify-center grow u-responsive-padding-xy">\n  <div\n    class="overflow-hidden rounded-3xl md:border border-white/50 md:bg-cyan-50 md:shadow-xl md:u-responsive-padding-xy u-container-2">\n    <app-user-profile [user]="authState().user" [profileImage]="profileState().profileImage"\n      [profileImageLoading]="profileImageLoading()" [showConnectionRequestButton]="false">\n      <div profile-actions class="flex flex-wrap gap-3 max-sm:w-full">\n        <a routerLink="/profile/edit-profile"\n          class="u-btn-primary-cyan px-4 sm:px-9 max-sm:grow w-fit text-center">\n          Edit Profile\n        </a>\n        <button type="button" (click)="onLogout()"\n          class="u-btn-danger-rose px-4 sm:px-9 max-sm:grow">\n          Logout\n        </button>\n      </div>\n    </app-user-profile>\n  </div>\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewProfile, { className: "ViewProfile", filePath: "src/app/features/profile/pages/view-profile/view-profile.ts", lineNumber: 16 });
})();
export {
  ViewProfile
};
//# sourceMappingURL=chunk-JLODU7KM.js.map
