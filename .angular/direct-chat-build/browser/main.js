import {
  LayoutState
} from "./chunk-KFPGG2CB.js";
import {
  AuthGuard
} from "./chunk-LWURI6WI.js";
import {
  Seo
} from "./chunk-FKONFLBB.js";
import {
  Url
} from "./chunk-YGCY7AWU.js";
import {
  ProfileApiService
} from "./chunk-F2LNDDGC.js";
import {
  toSignal
} from "./chunk-DFRRT2OL.js";
import {
  CapitalizeWordsPipe
} from "./chunk-FQUAC3NH.js";
import {
  Thumbnail
} from "./chunk-6NRHWHNW.js";
import {
  Telemetry
} from "./chunk-Z4NWBK2D.js";
import "./chunk-65M5LICJ.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-LJMNHIRN.js";
import {
  Auth,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  PORTFOLIO_URL
} from "./chunk-SDFCVRZT.js";
import {
  Platform2 as Platform
} from "./chunk-5QQ5IMAE.js";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-BQE5RZFF.js";
import {
  CommonModule,
  HttpResponse,
  NgClass,
  NgTemplateOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideHttpClient,
  withEventReplay,
  withInterceptors
} from "./chunk-CYBPL3OT.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ErrorHandler,
  Injectable,
  Injector,
  Input,
  afterNextRender,
  catchError,
  computed,
  effect,
  filter,
  inject,
  input,
  map,
  of,
  provideBrowserGlobalErrorListeners,
  setClassMetadata,
  signal,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CSUKEAYK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/features/profile/pages/public-profile/public-profile.resolver.ts
var PublicProfileResolver = class _PublicProfileResolver {
  profileApiService = inject(ProfileApiService);
  seo = inject(Seo);
  url = inject(Url);
  resolve(route) {
    const username = route.paramMap.get("username");
    if (!username) {
      this.setNotFoundSeo();
      return of({ user: null });
    }
    return this.profileApiService.getPublicUserByUsername({ username }).pipe(map((user) => {
      this.seo.update({
        title: user.name?.trim() || user.username?.trim() || "Public profile",
        content: user.bio?.trim() || "View this public profile on the app.",
        image: user.profileImageUrl ? this.profileApiService.getPublicImageUrl(user.profileImageUrl) : this.url.toAbsoluteUrl("/images/profile/default-thumbnail.jpg"),
        imageWidth: 500,
        imageHeight: 500
      });
      return { user };
    }), catchError(() => {
      this.setNotFoundSeo();
      return of({ user: null });
    }));
  }
  setNotFoundSeo() {
    this.seo.update({
      title: "Public profile not found",
      content: "The requested public profile could not be found."
    });
  }
  static \u0275fac = function PublicProfileResolver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicProfileResolver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PublicProfileResolver, factory: _PublicProfileResolver.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicProfileResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "auth", pathMatch: "full" },
  // {
  //     path: 'home',
  //     loadComponent: () => import('./features/home/home').then(r => r.Home),
  // },
  __spreadValues({
    path: "auth",
    loadChildren: () => import("./chunk-VMU2VV4I.js").then((r) => r.authRoutes)
  }, false ? { \u0275entryName: "src/app/features/auth/auth.routes.ts" } : {}),
  __spreadValues({
    path: "profile",
    canActivate: [AuthGuard],
    loadChildren: () => import("./chunk-63KO3QUG.js").then((r) => r.profileRoutes)
  }, false ? { \u0275entryName: "src/app/features/profile/profile.routes.ts" } : {}),
  __spreadValues({
    path: "users",
    loadComponent: () => import("./chunk-7VR7O53W.js").then((r) => r.Users)
  }, false ? { \u0275entryName: "src/app/features/users/users.ts" } : {}),
  __spreadValues({
    path: "user/:username",
    loadComponent: () => import("./chunk-AQDXJHDO.js").then((r) => r.PublicProfile),
    resolve: { publicProfile: PublicProfileResolver }
  }, false ? { \u0275entryName: "src/app/features/profile/pages/public-profile/public-profile.ts" } : {}),
  __spreadValues({
    path: "todo",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-V4PV2ZYC.js").then((r) => r.Todo)
  }, false ? { \u0275entryName: "src/app/features/todo/todo.ts" } : {}),
  __spreadValues({
    path: "chat",
    loadChildren: () => import("./chunk-QX37NKBP.js").then((r) => r.chatRoutes)
  }, false ? { \u0275entryName: "src/app/features/chat/chat.routes.ts" } : {}),
  __spreadValues({
    path: "**",
    loadComponent: () => import("./chunk-ENZONMSC.js").then((r) => r.NotFound)
  }, false ? { \u0275entryName: "src/app/core/pages/not-found/not-found.ts" } : {})
];

// src/app/core/interceptors/credentials-interceptor.ts
var credentialsInterceptor = (req, next) => {
  const apiReq = req.clone({
    withCredentials: true
  });
  return next(apiReq);
};

// src/app/core/interceptors/api-telemetry-interceptor.ts
var apiTelemetryInterceptor = (req, next) => {
  if (isTelemetryRequest(req.url)) {
    return next(req);
  }
  const telemetry = inject(Telemetry);
  const startedAt = performance.now();
  const trackApiCall = ({ success, status, errorMessage }) => {
    telemetry.collectActivity({
      name: getApiTelemetryName(req.url),
      type: "API_CALL",
      activity: __spreadProps(__spreadValues({
        method: req.method,
        url: req.url,
        status,
        success
      }, errorMessage ? { errorMessage } : {}), {
        durationMs: Math.round(performance.now() - startedAt)
      })
    });
  };
  return next(req).pipe(tap({
    next: (event) => {
      if (event instanceof HttpResponse) {
        trackApiCall({ success: true, status: event.status });
      }
    },
    error: (error) => {
      const httpError = error;
      trackApiCall({
        success: false,
        errorMessage: httpError?.error?.message || httpError?.error?.error || httpError?.message
      });
    }
  }));
};
function isTelemetryRequest(url) {
  return getUrlPath(url).startsWith("/telemetry");
}
function getApiTelemetryName(url) {
  const path = getUrlPath(url);
  const name = path.split("/").filter((segment) => segment && !/^\d+$/.test(segment)).join("_").replace(/[^a-zA-Z0-9_]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "").toLowerCase();
  return name ? `api_${name}` : "api_call";
}
function getUrlPath(url) {
  try {
    return new URL(url).pathname;
  } catch {
    return url.split("?")[0];
  }
}

// src/app/core/services/global-error-handler.ts
var MAX_ERROR_DETAIL_LENGTH = 2e3;
var MAX_ERROR_STACK_LENGTH = 4e3;
var GlobalErrorHandler = class _GlobalErrorHandler {
  telemetry = inject(Telemetry);
  collectedErrorKeys = /* @__PURE__ */ new Set();
  handleError(error) {
    const message = this.getErrorMessage(error);
    const stack = this.getErrorStack(error);
    const details = this.getErrorDetails(error);
    const errorKey = JSON.stringify({ message, stack, details });
    if (this.collectedErrorKeys.has(errorKey)) {
      console.error(error);
      return;
    }
    this.collectedErrorKeys.add(errorKey);
    this.telemetry.collectActivity({
      name: "runtime_error",
      type: "ERROR",
      activity: {
        message,
        stack,
        details
      }
    });
    console.error(error);
  }
  getErrorMessage(error) {
    if (error instanceof Error) {
      const message = `${error.name}: ${error.message}`;
      if (error.cause) {
        return `${message}; cause: ${String(error.cause)}`;
      }
      return message;
    }
    if (typeof error === "object" && error !== null) {
      const errorRecord = error;
      const messageParts = [
        errorRecord["name"],
        errorRecord["message"],
        errorRecord["reason"],
        errorRecord["status"],
        errorRecord["statusText"]
      ].filter((item) => item !== void 0 && item !== null && item !== "");
      if (messageParts.length) {
        return messageParts.map((item) => String(item)).join(" ");
      }
    }
    return String(error);
  }
  getErrorStack(error) {
    if (!(error instanceof Error) || !error.stack) {
      return void 0;
    }
    return this.truncate(error.stack, MAX_ERROR_STACK_LENGTH);
  }
  getErrorDetails(error) {
    try {
      return this.truncate(JSON.stringify(error), MAX_ERROR_DETAIL_LENGTH);
    } catch {
      return this.truncate(String(error), MAX_ERROR_DETAIL_LENGTH);
    }
  }
  truncate(value, maxLength) {
    return value.length > maxLength ? value.slice(0, maxLength) : value;
  }
  static \u0275fac = function GlobalErrorHandler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlobalErrorHandler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GlobalErrorHandler, factory: _GlobalErrorHandler.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalErrorHandler, [{
    type: Injectable
  }], null, null);
})();

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Scroll to the top whenever users navigate to a different route.
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    // Reuse server-rendered HTML in the browser and replay early user events after hydration.
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      // withFetch(), // Fetch is better for Angular SSR, but DevTools may sometimes not show response bodies for api requests.
      withInterceptors([
        credentialsInterceptor,
        apiTelemetryInterceptor
      ])
    ),
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 3e3,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      }
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
};

// src/app/shared/components/text/formatted-text/formatted-text.ts
var FormattedText = class _FormattedText {
  text = input("", ...ngDevMode ? [{ debugName: "text" }] : []);
  maxLength = input(null, ...ngDevMode ? [{ debugName: "maxLength" }] : []);
  displayText = computed(() => {
    const value = this.text() ?? "";
    const limit = this.maxLength();
    if (limit === null || limit <= 0 || value.length <= limit) {
      return value;
    }
    return `${value.slice(0, limit)}...`;
  }, ...ngDevMode ? [{ debugName: "displayText" }] : []);
  static \u0275fac = function FormattedText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormattedText)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormattedText, selectors: [["app-formatted-text"]], inputs: { text: [1, "text"], maxLength: [1, "maxLength"] }, decls: 2, vars: 1, template: function FormattedText_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "span");
      \u0275\u0275text(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.displayText());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormattedText, [{
    type: Component,
    args: [{ selector: "app-formatted-text", template: "<span>{{ displayText() }}</span>\n" }]
  }], null, { text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: false }] }], maxLength: [{ type: Input, args: [{ isSignal: true, alias: "maxLength", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormattedText, { className: "FormattedText", filePath: "src/app/shared/components/text/formatted-text/formatted-text.ts", lineNumber: 8 });
})();

// src/app/core/layout/header/header.ts
var _c0 = () => ({ route: "/chat", label: "Chat" });
var _c1 = () => ({ route: "/users", label: "Users" });
var _c2 = () => ({ route: "/todo", label: "Todo" });
var _c3 = () => ({ exact: false });
var _c4 = () => ({ route: "/auth/login", label: "Login" });
var _c5 = () => ({ route: "/auth/signup", label: "Sign Up" });
function Header_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const routeLink_r1 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", routeLink_r1)("ngTemplateOutletContext", \u0275\u0275pureFunction0(2, _c2));
  }
}
function Header_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 5);
    \u0275\u0275element(2, "app-thumbnail", 6)(3, "app-formatted-text", 7);
    \u0275\u0275pipe(4, "capitalizeWords");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/profile")("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("imageData", (tmp_4_0 = ctx_r1.profileState().profileImage) == null ? null : tmp_4_0.compressedFileData)("fileType", (tmp_5_0 = ctx_r1.profileState().profileImage) == null ? null : tmp_5_0.fileType)("name", (tmp_6_0 = ctx_r1.authState().user) == null ? null : tmp_6_0.name)("loading", ctx_r1.profileState().loading);
    \u0275\u0275advance();
    \u0275\u0275property("text", \u0275\u0275pipeBind1(4, 8, (tmp_8_0 = ctx_r1.authState().user) == null ? null : tmp_8_0.name) || ((tmp_8_0 = ctx_r1.authState().user) == null ? null : tmp_8_0.username) || "Profile")("maxLength", 11);
  }
}
function Header_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 4)(1, 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const routeLink_r1 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", routeLink_r1)("ngTemplateOutletContext", \u0275\u0275pureFunction0(4, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", routeLink_r1)("ngTemplateOutletContext", \u0275\u0275pureFunction0(5, _c5));
  }
}
function Header_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const route_r3 = ctx.route;
    const label_r4 = ctx.label;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", route_r3)("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", label_r4, " ");
  }
}
var Header = class _Header {
  authService = inject(Auth);
  elementRef = inject(ElementRef);
  layoutState = inject(LayoutState);
  injector = inject(Injector);
  resizeObserver;
  authState = this.authService.authState;
  profileState = this.authService.profileState;
  portfolioUrl = signal(PORTFOLIO_URL, ...ngDevMode ? [{ debugName: "portfolioUrl" }] : []);
  constructor() {
    effect(() => {
      if (!this.authState().completed) {
        return;
      }
      afterNextRender(() => this.observeHeaderHeight(), { injector: this.injector });
    });
  }
  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }
  observeHeaderHeight() {
    this.resizeObserver?.disconnect();
    const headerElement = this.elementRef.nativeElement.parentElement || this.elementRef.nativeElement;
    this.setHeaderHeight(headerElement);
    this.resizeObserver = new ResizeObserver(() => this.setHeaderHeight(headerElement));
    this.resizeObserver.observe(headerElement);
  }
  setHeaderHeight(headerElement) {
    this.layoutState.headerHeight.set(headerElement.getBoundingClientRect().height);
  }
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], decls: 11, vars: 8, consts: [["routeLink", ""], [1, "sticky", "top-0", "z-10", "shadow", "px-3", "u-gradient-background", "u-light-gradient", "c-header"], [1, "flex", "flex-row", "justify-between", "items-center", "py-2", "mx-auto", "u-container-1"], [1, "flex", "gap-x-1", "items-center"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["routerLinkActive", "u-is-active", 1, "u-nav-link", "flex", "items-center", "gap-2", 3, "routerLink", "routerLinkActiveOptions"], ["size", "1.5rem", "radius", "50%", 3, "imageData", "fileType", "name", "loading"], [1, "hidden", "sm:block", 3, "text", "maxLength"], ["routerLinkActive", "u-is-active", 1, "u-nav-link", 3, "routerLink", "routerLinkActiveOptions"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ul", 3);
      \u0275\u0275elementContainer(3, 4)(4, 4);
      \u0275\u0275conditionalCreate(5, Header_Conditional_5_Template, 1, 3, "ng-container", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ul", 3);
      \u0275\u0275conditionalCreate(7, Header_Conditional_7_Template, 5, 11, "li")(8, Header_Conditional_8_Template, 2, 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(9, Header_ng_template_9_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_6_0;
      const routeLink_r1 = \u0275\u0275reference(10);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngTemplateOutlet", routeLink_r1)("ngTemplateOutletContext", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", routeLink_r1)("ngTemplateOutletContext", \u0275\u0275pureFunction0(7, _c1));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_5_0 = ctx.authState().user) == null ? null : tmp_5_0.id) ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_6_0 = ctx.authState().user) == null ? null : tmp_6_0.id) ? 7 : 8);
    }
  }, dependencies: [RouterModule, RouterLink, RouterLinkActive, NgTemplateOutlet, Thumbnail, FormattedText, CapitalizeWordsPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", imports: [RouterModule, NgTemplateOutlet, Thumbnail, FormattedText, CapitalizeWordsPipe], template: `<div class="sticky top-0 z-10 shadow px-3 u-gradient-background u-light-gradient c-header">
    <nav class="flex flex-row justify-between items-center py-2 mx-auto u-container-1">
        <ul class="flex gap-x-1 items-center">
            <ng-container [ngTemplateOutlet]="routeLink" [ngTemplateOutletContext]="{ route: '/chat', label: 'Chat' }">
            </ng-container>
            <ng-container [ngTemplateOutlet]="routeLink"
                [ngTemplateOutletContext]="{ route: '/users', label: 'Users' }">
            </ng-container>
            @if (authState().user?.id) {
            <ng-container [ngTemplateOutlet]="routeLink" [ngTemplateOutletContext]="{ route: '/todo', label: 'Todo' }">
            </ng-container>
            }
            <!-- <li>
                <a [href]="portfolioUrl()" target="_blank" rel="noopener noreferrer" class="u-nav-link">
                    Portfolio
                </a>
            </li> -->
        </ul>
        <ul class="flex gap-x-1 items-center">
            @if (authState().user?.id) {
            <li>
                <a [routerLink]="'/profile'" routerLinkActive="u-is-active" [routerLinkActiveOptions]="{ exact: false }"
                    class="u-nav-link flex items-center gap-2">
                    <app-thumbnail [imageData]="profileState().profileImage?.compressedFileData"
                        [fileType]="profileState().profileImage?.fileType" [name]="authState().user?.name"
                        [loading]="profileState().loading" size="1.5rem" radius="50%"></app-thumbnail>
                    <app-formatted-text class="hidden sm:block"
                        [text]="(authState().user?.name | capitalizeWords) || authState().user?.username || 'Profile'"
                        [maxLength]="11">
                    </app-formatted-text>
                </a>
            </li>
            } @else {
            <ng-container [ngTemplateOutlet]="routeLink"
                [ngTemplateOutletContext]="{ route: '/auth/login', label: 'Login' }">
            </ng-container>
            <ng-container [ngTemplateOutlet]="routeLink"
                [ngTemplateOutletContext]="{ route: '/auth/signup', label: 'Sign Up' }">
            </ng-container>
            }
        </ul>
    </nav>
</div>

<ng-template #routeLink let-route="route" let-label="label">
    <li>
        <a [routerLink]="route" routerLinkActive="u-is-active" [routerLinkActiveOptions]="{ exact: false }"
            class="u-nav-link">
            {{ label }}
        </a>
    </li>
</ng-template>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/core/layout/header/header.ts", lineNumber: 17 });
})();

// src/app/core/layout/footer/footer.ts
var Footer = class _Footer {
  currentYear = signal((/* @__PURE__ */ new Date()).getFullYear(), ...ngDevMode ? [{ debugName: "currentYear" }] : []);
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 3, vars: 1, consts: [[1, "u-gradient-background", "u-dark-gradient", "text-center", "px-3", "py-4"], [1, "text-gray-200", "text-md"]], template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "p", 1);
      \u0275\u0275text(2);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear(), " Applab. All rights reserved.");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [], template: '<div class="u-gradient-background u-dark-gradient text-center px-3 py-4">\r\n    <p class="text-gray-200 text-md">\xA9 {{ currentYear() }} Applab. All rights reserved.</p>\r\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/core/layout/footer/footer.ts", lineNumber: 9 });
})();

// src/app/app.ts
var _c02 = (a0) => ({ hidden: a0 });
function App_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1);
    \u0275\u0275element(1, "app-header");
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 6);
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 5);
    \u0275\u0275element(1, "app-footer");
    \u0275\u0275elementEnd();
  }
}
var App = class _App {
  authService = inject(Auth);
  platformService = inject(Platform);
  router = inject(Router);
  telemetry = inject(Telemetry);
  previousUrl = null;
  authState = this.authService.authState;
  // Track if the router is currently loading a route/chunk
  isRouting = toSignal(this.router.events.pipe(filter((event) => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError), map((event) => event instanceof NavigationStart)), { initialValue: false });
  showLoader = computed(() => {
    return !this.authState().completed || this.isRouting();
  }, ...ngDevMode ? [{ debugName: "showLoader" }] : []);
  ngOnInit() {
    this.getUser();
    this.trackRouteChange();
  }
  getUser() {
    if (!this.platformService.isBrowser()) {
      return;
    }
    this.authService.me().subscribe({
      next: (response) => {
        console.log("current user", response);
      },
      error: () => {
      }
    });
  }
  pageReload() {
    console.log("Page reload");
  }
  trackRouteChange() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const nextUrl = event.urlAfterRedirects;
      this.telemetry.collectActivity({
        name: "route_change",
        type: "ROUTER_CHANGE",
        activity: {
          from: this.previousUrl,
          to: nextUrl
        }
      });
      this.previousUrl = nextUrl;
    });
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 7, vars: 6, consts: [[1, "text-base", "wrap-break-word", "min-h-dvh", "flex", "flex-col", "relative"], [1, "sticky", "top-0", "z-10"], [1, "u-gradient-background", "grow", "relative", "flex", "flex-col"], [1, "absolute", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-white/50", "backdrop-blur-[1px]"], [1, "grow", "relative", "flex", "flex-col", 3, "ngClass"], [1, "footer"], ["diameter", "80", 1, "stroke-violet-700"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, App_Conditional_1_Template, 2, 0, "header", 1);
      \u0275\u0275elementStart(2, "main", 2);
      \u0275\u0275conditionalCreate(3, App_Conditional_3_Template, 2, 0, "div", 3);
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, App_Conditional_6_Template, 2, 0, "footer", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.authState().completed ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showLoader() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c02, ctx.showLoader()));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.authState().completed ? 6 : -1);
    }
  }, dependencies: [
    RouterOutlet,
    CommonModule,
    NgClass,
    Header,
    Footer,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n\n.header[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n  height: 64px;\n}\n.brand[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n}\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 15px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-1px);\n}\n.content[_ngcontent-%COMP%] {\n  padding-top: 64px;\n}\n@keyframes _ngcontent-%COMP%_gradientShift {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .nav[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 6px 12px;\n  }\n}\n/*# sourceMappingURL=app.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      RouterOutlet,
      CommonModule,
      Header,
      Footer,
      MatProgressSpinnerModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<!-- {{pageReload()}} -->\n<div class="text-base wrap-break-word min-h-dvh flex flex-col relative">\n  @if (authState().completed) {\n  <header class="sticky top-0 z-10">\n    <app-header></app-header>\n  </header>\n  }\n  <main class="u-gradient-background grow relative flex flex-col">\n    @if (showLoader()) {\n    <div class="absolute inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-[1px]">\n      <mat-spinner diameter="80" class="stroke-violet-700"></mat-spinner>\n    </div>\n    }\n    <div class="grow relative flex flex-col" [ngClass]="{ hidden: showLoader() }">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n\n  @if (authState().completed) {\n  <footer class="footer">\n    <app-footer></app-footer>\n  </footer>\n  }\n</div>', styles: ["/* src/app/app.scss */\n.header {\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n  height: 64px;\n}\n.brand {\n  font-size: 24px;\n  font-weight: 800;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.nav {\n  display: flex;\n  gap: 32px;\n}\n.nav a {\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 15px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.nav a:hover {\n  color: white;\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-1px);\n}\n.content {\n  padding-top: 64px;\n}\n@keyframes gradientShift {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@media (max-width: 768px) {\n  .container {\n    padding: 0 16px;\n  }\n  .nav {\n    gap: 20px;\n  }\n  .nav a {\n    font-size: 14px;\n    padding: 6px 12px;\n  }\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 26 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
