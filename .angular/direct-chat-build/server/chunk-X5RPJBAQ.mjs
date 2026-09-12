import './polyfills.server.mjs';
import {
  UserProfile
} from "./chunk-SDIIJAYT.mjs";
import "./chunk-VCSZVERZ.mjs";
import "./chunk-3T5XD5WF.mjs";
import "./chunk-GTIYDUMT.mjs";
import "./chunk-HHJFSTVN.mjs";
import "./chunk-TYDR7QTU.mjs";
import {
  CommonDialog
} from "./chunk-SOEDZN7O.mjs";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-2QH3Y42T.mjs";
import "./chunk-Y6ZKB7SS.mjs";
import "./chunk-BZS2CXH6.mjs";
import "./chunk-QOZD5QEL.mjs";
import "./chunk-DU7PI4H2.mjs";
import "./chunk-RSLJOD3O.mjs";
import "./chunk-SB5Z2O3H.mjs";
import {
  Auth,
  User
} from "./chunk-LCBZHX6Y.mjs";
import "./chunk-53NQCPJ5.mjs";
import {
  RouterLink,
  RouterModule
} from "./chunk-5QYUMBOA.mjs";
import "./chunk-TNROARYC.mjs";
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
} from "./chunk-XAQLVFTN.mjs";
import "./chunk-AEB7TZCF.mjs";

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
//# sourceMappingURL=chunk-X5RPJBAQ.mjs.map
