import {
  UserProfile
} from "./chunk-RRKF6ZMJ.js";
import "./chunk-6IPXNW6H.js";
import "./chunk-ZZC3JEQU.js";
import "./chunk-OL35HKYF.js";
import {
  Url
} from "./chunk-YGCY7AWU.js";
import {
  ProfileApiService
} from "./chunk-F2LNDDGC.js";
import "./chunk-ALZZ5FDG.js";
import "./chunk-FQUAC3NH.js";
import "./chunk-6NRHWHNW.js";
import "./chunk-Z4NWBK2D.js";
import "./chunk-65M5LICJ.js";
import "./chunk-UMKDZD2E.js";
import "./chunk-LJMNHIRN.js";
import {
  Auth
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-CSUKEAYK.js";
import "./chunk-35BBDGX6.js";

// src/app/features/profile/pages/public-profile/public-profile.ts
function PublicProfile_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 3)(2, "p", 4);
    \u0275\u0275text(3, "Profile unavailable");
    \u0275\u0275elementEnd()()();
  }
}
function PublicProfile_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "app-user-profile", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("user", ctx_r0.profileUser())("profileImageUrl", ctx_r0.profileImageUrl());
  }
}
var PublicProfile = class _PublicProfile {
  route = inject(ActivatedRoute);
  router = inject(Router);
  authService = inject(Auth);
  profileApiService = inject(ProfileApiService);
  url = inject(Url);
  profileUser = signal(null, ...ngDevMode ? [{ debugName: "profileUser" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  profileImageUrl = computed(() => {
    const user = this.profileUser();
    return user?.profileImageUrl ? this.profileApiService.getPublicImageUrl(user.profileImageUrl) : null;
  }, ...ngDevMode ? [{ debugName: "profileImageUrl" }] : []);
  ngOnInit() {
    const data = this.route.snapshot.data["publicProfile"];
    const user = data?.user;
    const updatedAt = user?.updatedAt;
    const currentUser = this.authService.authState().user;
    if (user && currentUser?.id && user.id === currentUser.id) {
      void this.router.navigateByUrl("/profile/view-profile", { replaceUrl: true });
      return;
    }
    if (user) {
      this.profileUser.set(user);
      this.url.updateQueryParams({ updated: updatedAt });
    } else {
      this.error.set("Public profile not found.");
    }
  }
  static \u0275fac = function PublicProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicProfile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicProfile, selectors: [["app-public-profile"]], decls: 3, vars: 1, consts: [[1, "flex", "items-center", "justify-center", "grow", "u-responsive-padding-xy"], [1, "u-container-2"], [1, "overflow-hidden", "rounded-3xl", "md:border", "border-white/50", "md:bg-cyan-50", "md:shadow-xl", "md:u-responsive-padding-xy", "u-container-2"], [1, "rounded-2xl", "border", "border-rose-200", "bg-rose-50", "p-6", "text-center", "text-rose-700"], [1, "text-xl", "font-semibold"], [3, "user", "profileImageUrl"]], template: function PublicProfile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275conditionalCreate(1, PublicProfile_Conditional_1_Template, 4, 0, "div", 1)(2, PublicProfile_Conditional_2_Template, 2, 2, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 1 : 2);
    }
  }, dependencies: [UserProfile], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicProfile, [{
    type: Component,
    args: [{ selector: "app-public-profile", imports: [UserProfile], template: '<section class="flex items-center justify-center grow u-responsive-padding-xy">\n  @if (error()) {\n  <div class="u-container-2">\n    <div class="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-center text-rose-700">\n      <p class="text-xl font-semibold">Profile unavailable</p>\n    </div>\n  </div>\n  } @else {\n  <div\n    class="overflow-hidden rounded-3xl md:border border-white/50 md:bg-cyan-50 md:shadow-xl md:u-responsive-padding-xy u-container-2">\n    <app-user-profile [user]="profileUser()" [profileImageUrl]="profileImageUrl()"></app-user-profile>\n  </div>\n  }\n</section>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicProfile, { className: "PublicProfile", filePath: "src/app/features/profile/pages/public-profile/public-profile.ts", lineNumber: 15 });
})();
export {
  PublicProfile
};
//# sourceMappingURL=chunk-AQDXJHDO.js.map
