import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-OL35HKYF.js";
import {
  TelemetryClick
} from "./chunk-ALZZ5FDG.js";
import {
  LoadingButton
} from "./chunk-UMKDZD2E.js";
import {
  Auth,
  Guest,
  MatSnackBar
} from "./chunk-SDFCVRZT.js";
import {
  Router,
  RouterLink
} from "./chunk-BQE5RZFF.js";
import {
  NgClass
} from "./chunk-CYBPL3OT.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  inject,
  input,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CSUKEAYK.js";

// src/app/features/auth/components/auth-action/auth-action.ts
var _c0 = ["*"];
var _c1 = (a0, a1) => [a0, a1];
function AuthAction_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.theme() === "light" ? "text-slate-600" : "text-white/80");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.message(), " ");
  }
}
function AuthAction_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-loading-button", 10)(1, "button", 11);
    \u0275\u0275listener("click", function AuthAction_Conditional_3_Conditional_13_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      \u0275\u0275nextContext();
      const authMenuTrigger_r3 = \u0275\u0275reference(2);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.continueAsGuest(authMenuTrigger_r3));
    });
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275text(3, "Continue as Guest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5, " Interact without creating an account ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("loading", ctx_r0.isGuestSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isGuestSubmitting());
  }
}
function AuthAction_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "button", 3, 0);
    \u0275\u0275elementStart(3, "mat-menu", 4, 1)(5, "div", 5);
    \u0275\u0275conditionalCreate(6, AuthAction_Conditional_3_Conditional_6_Template, 2, 2, "p", 6);
    \u0275\u0275elementStart(7, "a", 7)(8, "span", 8);
    \u0275\u0275text(9, "Sign Up");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 9)(11, "span", 8);
    \u0275\u0275text(12, "Login");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, AuthAction_Conditional_3_Conditional_13_Template, 6, 2, "app-loading-button", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const authTriggerElement_r4 = \u0275\u0275reference(1);
    const authActionMenu_r5 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matMenuTriggerFor", authActionMenu_r5);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r0.matchTriggerWidth() ? authTriggerElement_r4.offsetWidth : null, "px");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c1, ctx_r0.theme() === "light" ? "bg-white text-slate-900 shadow-xl ring-1 ring-slate-200" : "bg-white/15 text-white backdrop-blur-3xl", ctx_r0.menuContainerClass()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.message() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("queryParams", ctx_r0.returnUrlQueryParams())("ngClass", ctx_r0.theme() === "light" ? "p-0!" : "bg-white/10! hover:bg-white/20!");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.theme() === "light" ? "u-btn-primary-cyan flex w-full items-center" : "text-white");
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", ctx_r0.returnUrlQueryParams())("ngClass", ctx_r0.theme() === "light" ? "p-0!" : "bg-white/10! hover:bg-white/20!");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.theme() === "light" ? "u-btn-primary-cyan flex w-full items-center" : "text-white");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.allowGuest() ? 13 : -1);
  }
}
var AuthAction = class _AuthAction {
  auth = inject(Auth);
  guest = inject(Guest);
  snackBar = inject(MatSnackBar);
  router = inject(Router);
  authState = this.auth.authState;
  guestState = this.guest.guestState;
  matchTriggerWidth = input(false, ...ngDevMode ? [{ debugName: "matchTriggerWidth" }] : []);
  allowGuest = input(true, ...ngDevMode ? [{ debugName: "allowGuest" }] : []);
  theme = input("dark", ...ngDevMode ? [{ debugName: "theme" }] : []);
  menuContainerClass = input("", ...ngDevMode ? [{ debugName: "menuContainerClass" }] : []);
  message = input("", ...ngDevMode ? [{ debugName: "message" }] : []);
  isGuestSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isGuestSubmitting" }] : []);
  returnUrlQueryParams = computed(() => ({ returnUrl: this.router.url }), ...ngDevMode ? [{ debugName: "returnUrlQueryParams" }] : []);
  hasAuthenticatedAccess = computed(() => !!this.authState().user?.id || this.allowGuest() && this.guestState().isGuest, ...ngDevMode ? [{ debugName: "hasAuthenticatedAccess" }] : []);
  continueAsGuest(menuTrigger) {
    if (this.isGuestSubmitting()) {
      return;
    }
    this.isGuestSubmitting.set(true);
    this.guest.createGuest().subscribe({
      next: () => {
        this.isGuestSubmitting.set(false);
        menuTrigger.closeMenu();
        this.snackBar.open("You can now interact on this page", "\u2716", {
          duration: 2e3,
          panelClass: "snackbar-success"
        });
      },
      error: (error) => {
        console.error(error);
        this.isGuestSubmitting.set(false);
      }
    });
  }
  static \u0275fac = function AuthAction_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthAction)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthAction, selectors: [["app-auth-action"]], inputs: { matchTriggerWidth: [1, "matchTriggerWidth"], allowGuest: [1, "allowGuest"], theme: [1, "theme"], menuContainerClass: [1, "menuContainerClass"], message: [1, "message"] }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [["authTriggerElement", "", "authMenuTrigger", "matMenuTrigger"], ["authActionMenu", "matMenu"], [1, "relative"], ["type", "button", "aria-label", "Choose authentication option", "appTelemetryClick", "auth_action_open_menu", 1, "u-fill-parent", "z-10", 3, "matMenuTriggerFor"], ["xPosition", "after", "yPosition", "above", 1, "reaction-menu-panel"], [1, "flex", "flex-col", "gap-2", "px-3", "py-3", 3, "ngClass"], [1, "px-2", "pb-1", "text-sm", "font-medium", "leading-5", 3, "ngClass"], ["mat-menu-item", "", "routerLink", "/auth/signup", 1, "rounded-lg!", 3, "queryParams", "ngClass"], [1, "font-semibold", 3, "ngClass"], ["mat-menu-item", "", "routerLink", "/auth/login", 1, "rounded-lg!", 3, "queryParams", "ngClass"], ["spinnerClass", "stroke-white", 3, "loading"], ["type", "button", 1, "w-full", "rounded-lg!", "bg-white/10!", "px-4", "py-2", "text-left", "font-semibold!", "text-white!", "hover:bg-white/20!", 3, "click", "disabled"], [1, "block", "font-semibold", "text-white"], [1, "block", "text-xs", "font-normal"]], template: function AuthAction_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 2)(1, "div");
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, AuthAction_Conditional_3_Template, 14, 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.hasAuthenticatedAccess() ? 3 : -1);
    }
  }, dependencies: [MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, RouterLink, LoadingButton, TelemetryClick, NgClass], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n/*# sourceMappingURL=auth-action.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthAction, [{
    type: Component,
    args: [{ selector: "app-auth-action", imports: [MatMenuModule, RouterLink, LoadingButton, TelemetryClick, NgClass], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="relative">
    <div>
        <ng-content></ng-content>
    </div>
    @if (!hasAuthenticatedAccess()) {
    <button #authTriggerElement #authMenuTrigger="matMenuTrigger" type="button" [matMenuTriggerFor]="authActionMenu"
        class="u-fill-parent z-10" aria-label="Choose authentication option"
        appTelemetryClick="auth_action_open_menu"></button>
    <mat-menu #authActionMenu="matMenu" xPosition="after" yPosition="above" class="reaction-menu-panel">
        <div class="flex flex-col gap-2 px-3 py-3"
            [ngClass]="[
                theme() === 'light'
                    ? 'bg-white text-slate-900 shadow-xl ring-1 ring-slate-200'
                    : 'bg-white/15 text-white backdrop-blur-3xl',
                menuContainerClass()
            ]"
            [style.width.px]="matchTriggerWidth() ? authTriggerElement.offsetWidth : null">
            @if (message()) {
            <p class="px-2 pb-1 text-sm font-medium leading-5"
                [ngClass]="theme() === 'light' ? 'text-slate-600' : 'text-white/80'">
                {{ message() }}
            </p>
            }
            <a mat-menu-item routerLink="/auth/signup" [queryParams]="returnUrlQueryParams()"
                class="rounded-lg!" [ngClass]="theme() === 'light'
                    ? 'p-0!'
                    : 'bg-white/10! hover:bg-white/20!'">
                <span class="font-semibold" [ngClass]="theme() === 'light'
                    ? 'u-btn-primary-cyan flex w-full items-center'
                    : 'text-white'">Sign Up</span>
            </a>
            <a mat-menu-item routerLink="/auth/login" [queryParams]="returnUrlQueryParams()"
                class="rounded-lg!" [ngClass]="theme() === 'light'
                    ? 'p-0!'
                    : 'bg-white/10! hover:bg-white/20!'">
                <span class="font-semibold" [ngClass]="theme() === 'light'
                    ? 'u-btn-primary-cyan flex w-full items-center'
                    : 'text-white'">Login</span>
            </a>
            @if (allowGuest()) {
            <app-loading-button [loading]="isGuestSubmitting()" spinnerClass="stroke-white">
                <button type="button"
                    class="w-full rounded-lg! bg-white/10! px-4 py-2 text-left font-semibold! text-white! hover:bg-white/20!"
                    [disabled]="isGuestSubmitting()"
                    (click)="$event.stopPropagation(); continueAsGuest(authMenuTrigger)">
                    <span class="block font-semibold text-white">Continue as Guest</span>
                    <span class="block text-xs font-normal">
                        Interact without creating an account
                    </span>
                </button>
            </app-loading-button>
            }
        </div>
    </mat-menu>
    }
</div>
`, styles: ["/* src/app/features/auth/components/auth-action/auth-action.scss */\n:host {\n  display: contents;\n}\n/*# sourceMappingURL=auth-action.css.map */\n"] }]
  }], null, { matchTriggerWidth: [{ type: Input, args: [{ isSignal: true, alias: "matchTriggerWidth", required: false }] }], allowGuest: [{ type: Input, args: [{ isSignal: true, alias: "allowGuest", required: false }] }], theme: [{ type: Input, args: [{ isSignal: true, alias: "theme", required: false }] }], menuContainerClass: [{ type: Input, args: [{ isSignal: true, alias: "menuContainerClass", required: false }] }], message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthAction, { className: "AuthAction", filePath: "src/app/features/auth/components/auth-action/auth-action.ts", lineNumber: 18 });
})();

export {
  AuthAction
};
//# sourceMappingURL=chunk-6IPXNW6H.js.map
