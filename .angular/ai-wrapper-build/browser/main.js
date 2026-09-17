import {
  AiApi,
  AiMessagePipe,
  AiStreamError
} from "./chunk-W3YD7SYU.js";
import {
  LayoutState
} from "./chunk-MGMRHKFO.js";
import {
  AuthGuard
} from "./chunk-WF6SQ4YZ.js";
import {
  Seo
} from "./chunk-HAMF6PIM.js";
import {
  Url
} from "./chunk-NNMWTHNQ.js";
import {
  ProfileApiService
} from "./chunk-FRCNPB6T.js";
import {
  AutoResizeTextarea
} from "./chunk-5HOZIZXF.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-6M5LXVV5.js";
import {
  CapitalizeWordsPipe
} from "./chunk-OJASF4WQ.js";
import {
  Thumbnail
} from "./chunk-26LMAOBO.js";
import {
  Telemetry
} from "./chunk-VYGEMIP2.js";
import {
  MatDialog
} from "./chunk-6BFLP3ZQ.js";
import {
  FaIconComponent,
  FontAwesomeModule,
  faChartLine,
  faComments,
  faListCheck,
  faMinus,
  faPaperPlane,
  faRightToBracket,
  faRobot,
  faUserPlus,
  faUsers,
  faXmark
} from "./chunk-YP5LKVIU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-3NTCQKGC.js";
import {
  Notification
} from "./chunk-NHTWTLXP.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-FZM4RF6G.js";
import {
  Auth,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  PORTFOLIO_URL
} from "./chunk-ENDAPT56.js";
import "./chunk-DOMMC6UT.js";
import {
  Platform2 as Platform
} from "./chunk-BMRGKSCE.js";
import {
  BaseRouteReuseStrategy,
  CommonModule,
  HttpErrorResponse,
  HttpResponse,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  NgClass,
  NgTemplateOutlet,
  RouteReuseStrategy,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  isPlatformBrowser,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  withEventReplay,
  withInMemoryScrolling,
  withInterceptors
} from "./chunk-SYFHBLZR.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  ErrorHandler,
  Injectable,
  Injector,
  Input,
  PLATFORM_ID,
  ViewChild,
  afterNextRender,
  catchError,
  computed,
  effect,
  filter,
  finalize,
  forwardRef,
  fromEvent,
  inject,
  input,
  map,
  of,
  provideBrowserGlobalErrorListeners,
  setClassMetadata,
  signal,
  tap,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-7MOHRCPT.js";
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
    loadChildren: () => import("./chunk-IAC3FJ3O.js").then((r) => r.authRoutes)
  }, false ? { \u0275entryName: "src/app/features/auth/auth.routes.ts" } : {}),
  __spreadValues({
    path: "profile",
    canActivate: [AuthGuard],
    loadChildren: () => import("./chunk-LCF55XOH.js").then((r) => r.profileRoutes)
  }, false ? { \u0275entryName: "src/app/features/profile/profile.routes.ts" } : {}),
  __spreadValues({
    path: "users",
    loadComponent: () => import("./chunk-H662FXVQ.js").then((r) => r.Users)
  }, false ? { \u0275entryName: "src/app/features/users/users.ts" } : {}),
  __spreadValues({
    path: "user/:username",
    loadComponent: () => import("./chunk-IDG7L5TB.js").then((r) => r.PublicProfile),
    resolve: { publicProfile: PublicProfileResolver }
  }, false ? { \u0275entryName: "src/app/features/profile/pages/public-profile/public-profile.ts" } : {}),
  __spreadValues({
    path: "todo",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-HQ7WHWAP.js").then((r) => r.Todo)
  }, false ? { \u0275entryName: "src/app/features/todo/todo.ts" } : {}),
  __spreadValues({
    path: "chat",
    loadChildren: () => import("./chunk-EYGVGDDF.js").then((r) => r.chatRoutes)
  }, false ? { \u0275entryName: "src/app/features/chat/chat.routes.ts" } : {}),
  __spreadValues({
    path: "user-chat/:username",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-BHKFG53G.js").then((r) => r.UserChat)
  }, false ? { \u0275entryName: "src/app/features/chat/pages/user-chat/user-chat.ts" } : {}),
  __spreadValues({
    path: "telemetry",
    loadComponent: () => import("./chunk-7NUMBF4T.js").then((r) => r.Telemetry)
  }, false ? { \u0275entryName: "src/app/features/telemetry/telemetry.ts" } : {}),
  __spreadValues({
    path: "**",
    loadComponent: () => import("./chunk-AZXUDROC.js").then((r) => r.NotFound)
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
        status: httpError?.status,
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

// src/app/core/services/network-notification.ts
var NetworkNotification = class _NetworkNotification {
  notification = inject(Notification);
  telemetry = inject(Telemetry);
  platform = inject(Platform);
  offlineSnackbarOpen = false;
  showOffline() {
    if (!this.platform.isBrowser())
      return;
    if (this.offlineSnackbarOpen)
      return;
    this.offlineSnackbarOpen = true;
    this.telemetry.collectActivity({
      name: navigator.onLine ? "server_unreachable" : "internet_connection_lost",
      type: "NETWORK_ERROR",
      activity: {
        online: navigator.onLine
      }
    });
    this.notification.showError(navigator.onLine ? "Unable to reach the server. Please try again later." : "No internet connection. Please check your network.", {
      duration: navigator.onLine ? 5e3 : 0,
      verticalPosition: "top"
    }).afterDismissed().subscribe(() => {
      this.offlineSnackbarOpen = false;
    });
  }
  showOnline() {
    this.offlineSnackbarOpen = false;
    this.telemetry.collectActivity({
      name: "internet_connection_restored",
      type: "NETWORK_RESTORED",
      activity: {
        online: true
      }
    });
    this.notification.showSuccess("You\u2019re back online.", {
      duration: 3e3,
      verticalPosition: "top"
    });
  }
  static \u0275fac = function NetworkNotification_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NetworkNotification)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NetworkNotification, factory: _NetworkNotification.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NetworkNotification, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/interceptors/network-error-interceptor.ts
var networkErrorInterceptor = (req, next) => {
  if (!isPlatformBrowser(inject(PLATFORM_ID))) {
    return next(req);
  }
  const networkNotification = inject(NetworkNotification);
  return next(req).pipe(tap({
    error: (error) => {
      if (error instanceof HttpErrorResponse && error.status === 0) {
        networkNotification.showOffline();
      }
    }
  }));
};

// src/app/core/services/route-refresh.ts
var RouteRefresh = class _RouteRefresh extends BaseRouteReuseStrategy {
  refreshing = false;
  shouldReuseRoute(future, current) {
    return !this.refreshing && super.shouldReuseRoute(future, current);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RouteRefresh_BaseFactory;
    return function RouteRefresh_Factory(__ngFactoryType__) {
      return (\u0275RouteRefresh_BaseFactory || (\u0275RouteRefresh_BaseFactory = \u0275\u0275getInheritedFactory(_RouteRefresh)))(__ngFactoryType__ || _RouteRefresh);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RouteRefresh, factory: _RouteRefresh.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteRefresh, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var PageRefresh = class _PageRefresh {
  router = inject(Router);
  strategy = inject(RouteRefresh);
  async refresh() {
    if (this.strategy.refreshing || this.router.currentNavigation())
      return;
    const routes2 = new Set(this.getActiveRoutes(this.router.routerState.snapshot.root));
    const originalPolicies = [...routes2].map((route) => ({ route, policy: route.runGuardsAndResolvers }));
    this.strategy.refreshing = true;
    try {
      for (const route of routes2)
        route.runGuardsAndResolvers = "always";
      await this.router.navigateByUrl(this.router.url, {
        onSameUrlNavigation: "reload",
        replaceUrl: true
      });
    } finally {
      for (const { route, policy } of originalPolicies)
        route.runGuardsAndResolvers = policy;
      this.strategy.refreshing = false;
    }
  }
  getActiveRoutes(snapshot) {
    return [
      ...snapshot.routeConfig ? [snapshot.routeConfig] : [],
      ...snapshot.children.flatMap((child) => this.getActiveRoutes(child))
    ];
  }
  static \u0275fac = function PageRefresh_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageRefresh)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PageRefresh, factory: _PageRefresh.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageRefresh, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Scroll to the top whenever users navigate to a different route.
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    { provide: RouteReuseStrategy, useExisting: RouteRefresh },
    // Reuse server-rendered HTML in the browser and replay early user events after hydration.
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      // withFetch(), // Fetch is better for Angular SSR, but DevTools may sometimes not show response bodies for api requests.
      withInterceptors([
        credentialsInterceptor,
        networkErrorInterceptor,
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

// src/app/features/ai/services/ai-state.ts
var AiState = class _AiState {
  open = signal(false, ...ngDevMode ? [{ debugName: "open" }] : []);
  minimized = signal(false, ...ngDevMode ? [{ debugName: "minimized" }] : []);
  launcher;
  openChat(launcher) {
    this.launcher = launcher;
    this.open.set(true);
  }
  closeChat() {
    this.open.set(false);
  }
  focusLauncher() {
    this.launcher?.focus();
  }
  static \u0275fac = function AiState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiState)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiState, factory: _AiState.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiState, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/ai/components/ai-launcher/ai-launcher.ts
function AiLauncher_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "strong");
    \u0275\u0275text(2, "AI assistant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4, "Let\u2019s chat");
    \u0275\u0275elementEnd()();
  }
}
function AiLauncher_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function AiLauncher_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.state.minimized.set(true));
    });
    \u0275\u0275element(1, "fa-icon", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r3.faMinus);
  }
}
var AiLauncher = class _AiLauncher {
  compact = input(false, ...ngDevMode ? [{ debugName: "compact" }] : []);
  state = inject(AiState);
  isCompact = computed(() => this.compact() || this.state.minimized(), ...ngDevMode ? [{ debugName: "isCompact" }] : []);
  faRobot = faRobot;
  faMinus = faMinus;
  openChat(button) {
    this.state.openChat(button);
  }
  static \u0275fac = function AiLauncher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiLauncher)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiLauncher, selectors: [["app-ai-launcher"]], inputs: { compact: [1, "compact"] }, decls: 6, vars: 15, consts: [["launcher", ""], [1, "flex", "items-center", "overflow-hidden", "border", "border-[#a5f3fc66]", "bg-[linear-gradient(135deg,#433878,#155e75)]", "text-[#f5f3ff]", "shadow-[0_12px_36px_#0004]", "[&[hidden]]:hidden!", 3, "hidden"], ["type", "button", "aria-label", "Open AI chat", "aria-controls", "ai-panel", 1, "flex", "items-center", "gap-3", "text-left", 3, "click"], ["aria-hidden", "true", 1, "text-[25px]", "text-[#a5f3fc]", 3, "icon"], [1, "grid", "gap-0.75"], ["type", "button", "aria-label", "Minimize AI launcher", 1, "mr-2.5", "size-9", "shrink-0", "rounded-[10px]", "text-2xl", "hover:bg-white/10"], [1, "text-xs", "text-[#ddd6fe]"], ["type", "button", "aria-label", "Minimize AI launcher", 1, "mr-2.5", "size-9", "shrink-0", "rounded-[10px]", "text-2xl", "hover:bg-white/10", 3, "click"], ["aria-hidden", "true", 3, "icon"]], template: function AiLauncher_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "button", 2, 0);
      \u0275\u0275listener("click", function AiLauncher_Template_button_click_1_listener() {
        \u0275\u0275restoreView(_r1);
        const launcher_r2 = \u0275\u0275reference(2);
        return \u0275\u0275resetView(ctx.openChat(launcher_r2));
      });
      \u0275\u0275element(3, "fa-icon", 3);
      \u0275\u0275conditionalCreate(4, AiLauncher_Conditional_4_Template, 5, 0, "span", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, AiLauncher_Conditional_5_Template, 2, 1, "button", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rounded-full", ctx.isCompact())("rounded-[20px]", !ctx.isCompact());
      \u0275\u0275property("hidden", ctx.state.open());
      \u0275\u0275advance();
      \u0275\u0275classProp("size-9", ctx.isCompact())("justify-center", ctx.isCompact())("p-3", !ctx.isCompact());
      \u0275\u0275attribute("aria-expanded", ctx.state.open());
      \u0275\u0275advance(2);
      \u0275\u0275property("icon", ctx.faRobot);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCompact() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.compact() && !ctx.state.minimized() ? 5 : -1);
    }
  }, dependencies: [FontAwesomeModule, FaIconComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiLauncher, [{
    type: Component,
    args: [{ selector: "app-ai-launcher", imports: [FontAwesomeModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="flex items-center overflow-hidden border border-[#a5f3fc66] bg-[linear-gradient(135deg,#433878,#155e75)] text-[#f5f3ff] shadow-[0_12px_36px_#0004] [&[hidden]]:hidden!"\n  [class.rounded-full]="isCompact()" [class.rounded-[20px]]="!isCompact()" [hidden]="state.open()">\n  <button #launcher type="button" class="flex items-center gap-3 text-left"\n    [class.size-9]="isCompact()" [class.justify-center]="isCompact()" [class.p-3]="!isCompact()"\n    aria-label="Open AI chat" aria-controls="ai-panel" [attr.aria-expanded]="state.open()"\n    (click)="openChat(launcher)">\n    <fa-icon class="text-[25px] text-[#a5f3fc]" [icon]="faRobot" aria-hidden="true"></fa-icon>\n    @if (!isCompact()) {\n      <span class="grid gap-0.75"><strong>AI assistant</strong><span class="text-xs text-[#ddd6fe]">Let\u2019s chat</span></span>\n    }\n  </button>\n  @if (!compact() && !state.minimized()) {\n    <button type="button" class="mr-2.5 size-9 shrink-0 rounded-[10px] text-2xl hover:bg-white/10"\n      aria-label="Minimize AI launcher" (click)="state.minimized.set(true)">\n      <fa-icon [icon]="faMinus" aria-hidden="true"></fa-icon>\n    </button>\n  }\n</div>\n' }]
  }], null, { compact: [{ type: Input, args: [{ isSignal: true, alias: "compact", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiLauncher, { className: "AiLauncher", filePath: "src/app/features/ai/components/ai-launcher/ai-launcher.ts", lineNumber: 12 });
})();

// src/app/core/layout/header/header.ts
var _c0 = (a0, a1) => ({ route: a0, label: "Chat", icon: a1 });
var _c1 = (a0) => ({ route: "/users", label: "Users", icon: a0 });
var _c2 = (a0) => ({ route: "/telemetry", label: "Telemetry", icon: a0 });
var _c3 = (a0) => ({ route: "/todo", label: "Todo", icon: a0 });
var _c4 = () => ({ exact: false });
var _c5 = (a0) => ({ route: "/auth/login", label: "Login", icon: a0 });
var _c6 = (a0) => ({ route: "/auth/signup", label: "Sign Up", icon: a0 });
function Header_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const routeLink_r2 = \u0275\u0275reference(13);
    \u0275\u0275property("ngTemplateOutlet", routeLink_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, ctx_r0.faListCheck));
  }
}
function Header_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 7);
    \u0275\u0275element(2, "app-thumbnail", 8)(3, "app-formatted-text", 9);
    \u0275\u0275pipe(4, "capitalizeWords");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/profile")("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("imageData", (tmp_4_0 = ctx_r0.profileState().profileImage) == null ? null : tmp_4_0.compressedFileData)("fileType", (tmp_5_0 = ctx_r0.profileState().profileImage) == null ? null : tmp_5_0.fileType)("name", (tmp_6_0 = ctx_r0.authState().user) == null ? null : tmp_6_0.name)("loading", ctx_r0.profileState().loading);
    \u0275\u0275advance();
    \u0275\u0275property("text", \u0275\u0275pipeBind1(4, 8, (tmp_8_0 = ctx_r0.authState().user) == null ? null : tmp_8_0.name) || ((tmp_8_0 = ctx_r0.authState().user) == null ? null : tmp_8_0.username) || "Profile")("maxLength", 11);
  }
}
function Header_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 4)(1, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const routeLink_r2 = \u0275\u0275reference(13);
    \u0275\u0275property("ngTemplateOutlet", routeLink_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c5, ctx_r0.faRightToBracket));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", routeLink_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c6, ctx_r0.faUserPlus));
  }
}
function Header_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 10);
    \u0275\u0275element(2, "fa-icon", 11);
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const route_r3 = ctx.route;
    const label_r4 = ctx.label;
    const icon_r5 = ctx.icon;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", route_r3)("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c4))("title", label_r4);
    \u0275\u0275attribute("aria-label", label_r4);
    \u0275\u0275advance();
    \u0275\u0275property("icon", icon_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(label_r4);
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
  faChartLine = faChartLine;
  faComments = faComments;
  faListCheck = faListCheck;
  faRightToBracket = faRightToBracket;
  faUserPlus = faUserPlus;
  faUsers = faUsers;
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], decls: 14, vars: 16, consts: [["routeLink", ""], [1, "sticky", "top-0", "z-10", "shadow", "px-3", "u-gradient-background", "u-light-gradient", "c-header"], [1, "flex", "flex-row", "justify-between", "items-center", "py-2", "mx-auto", "u-container-1"], [1, "flex", "gap-x-1", "items-center"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "xl:hidden"], [3, "compact"], ["routerLinkActive", "u-is-active", 1, "u-nav-link", "flex", "items-center", "gap-2", 3, "routerLink", "routerLinkActiveOptions"], ["size", "1.5rem", "radius", "50%", 3, "imageData", "fileType", "name", "loading"], [1, "hidden", "sm:block", 3, "text", "maxLength"], ["routerLinkActive", "u-is-active", 1, "u-nav-link", "flex", "items-center", "gap-2", 3, "routerLink", "routerLinkActiveOptions", "title"], [3, "icon"], [1, "hidden", "sm:inline"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ul", 3);
      \u0275\u0275elementContainer(3, 4)(4, 4)(5, 4);
      \u0275\u0275conditionalCreate(6, Header_Conditional_6_Template, 1, 4, "ng-container", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ul", 3);
      \u0275\u0275conditionalCreate(8, Header_Conditional_8_Template, 5, 11, "li")(9, Header_Conditional_9_Template, 2, 8);
      \u0275\u0275elementStart(10, "li", 5);
      \u0275\u0275element(11, "app-ai-launcher", 6);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(12, Header_ng_template_12_Template, 5, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_7_0;
      let tmp_8_0;
      const routeLink_r2 = \u0275\u0275reference(13);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngTemplateOutlet", routeLink_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction2(9, _c0, ((tmp_2_0 = ctx.authState().user) == null ? null : tmp_2_0.id) ? "/chat/direct" : "/chat/global", ctx.faComments));
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", routeLink_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(12, _c1, ctx.faUsers));
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", routeLink_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(14, _c2, ctx.faChartLine));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_7_0 = ctx.authState().user) == null ? null : tmp_7_0.id) ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_8_0 = ctx.authState().user) == null ? null : tmp_8_0.id) ? 8 : 9);
      \u0275\u0275advance(3);
      \u0275\u0275property("compact", true);
    }
  }, dependencies: [RouterModule, RouterLink, RouterLinkActive, NgTemplateOutlet, Thumbnail, FormattedText, FontAwesomeModule, FaIconComponent, AiLauncher, CapitalizeWordsPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", imports: [RouterModule, NgTemplateOutlet, Thumbnail, FormattedText, CapitalizeWordsPipe, FontAwesomeModule, AiLauncher], template: `<div class="sticky top-0 z-10 shadow px-3 u-gradient-background u-light-gradient c-header">
    <nav class="flex flex-row justify-between items-center py-2 mx-auto u-container-1">
        <ul class="flex gap-x-1 items-center">
            <ng-container [ngTemplateOutlet]="routeLink"
                [ngTemplateOutletContext]="{ route: authState().user?.id ? '/chat/direct' : '/chat/global', label: 'Chat', icon: faComments }">
            </ng-container>
            <ng-container [ngTemplateOutlet]="routeLink"
                [ngTemplateOutletContext]="{ route: '/users', label: 'Users', icon: faUsers }">
            </ng-container>
            <ng-container [ngTemplateOutlet]="routeLink"
                [ngTemplateOutletContext]="{ route: '/telemetry', label: 'Telemetry', icon: faChartLine }">
            </ng-container>
            @if (authState().user?.id) {
            <ng-container [ngTemplateOutlet]="routeLink"
                [ngTemplateOutletContext]="{ route: '/todo', label: 'Todo', icon: faListCheck }">
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
                [ngTemplateOutletContext]="{ route: '/auth/login', label: 'Login', icon: faRightToBracket }">
            </ng-container>
            <ng-container [ngTemplateOutlet]="routeLink"
                [ngTemplateOutletContext]="{ route: '/auth/signup', label: 'Sign Up', icon: faUserPlus }">
            </ng-container>
            }
            <li class="xl:hidden">
                <app-ai-launcher [compact]="true"></app-ai-launcher>
            </li>
        </ul>
    </nav>
</div>

<ng-template #routeLink let-route="route" let-label="label" let-icon="icon">
    <li>
        <a [routerLink]="route" routerLinkActive="u-is-active" [routerLinkActiveOptions]="{ exact: false }"
            class="u-nav-link flex items-center gap-2" [attr.aria-label]="label" [title]="label">
            <fa-icon [icon]="icon"></fa-icon>
            <span class="hidden sm:inline">{{ label }}</span>
        </a>
    </li>
</ng-template>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/core/layout/header/header.ts", lineNumber: 27 });
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

// src/app/features/ai/ai.ts
var _c02 = ["conversation"];
var _c12 = ["messageInput"];
function Ai_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "fa-icon", 19);
    \u0275\u0275elementStart(2, "h3", 20);
    \u0275\u0275text(3, "How can I help?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5, "Ask me about this app and its features.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.faRobot);
  }
}
function Ai_Conditional_14_For_2_Conditional_0_Conditional_4_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("font-bold", part_r3.bold);
    \u0275\u0275property("routerLink", part_r3.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(part_r3.text);
  }
}
function Ai_Conditional_14_For_2_Conditional_0_Conditional_4_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(part_r3.text);
  }
}
function Ai_Conditional_14_For_2_Conditional_0_Conditional_4_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const part_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(part_r3.text);
  }
}
function Ai_Conditional_14_For_2_Conditional_0_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Ai_Conditional_14_For_2_Conditional_0_Conditional_4_For_1_Conditional_0_Template, 2, 4, "a", 27)(1, Ai_Conditional_14_For_2_Conditional_0_Conditional_4_For_1_Conditional_1_Template, 2, 1, "strong", 28)(2, Ai_Conditional_14_For_2_Conditional_0_Conditional_4_For_1_Conditional_2_Template, 1, 1);
  }
  if (rf & 2) {
    const part_r3 = ctx.$implicit;
    \u0275\u0275conditional(part_r3.route ? 0 : part_r3.bold ? 1 : 2);
  }
}
function Ai_Conditional_14_For_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Ai_Conditional_14_For_2_Conditional_0_Conditional_4_For_1_Template, 3, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(2, "aiMessage");
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, item_r4.message));
  }
}
function Ai_Conditional_14_For_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate(item_r4.message);
  }
}
function Ai_Conditional_14_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275conditionalCreate(4, Ai_Conditional_14_For_2_Conditional_0_Conditional_4_Template, 3, 2)(5, Ai_Conditional_14_For_2_Conditional_0_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("ml-6", item_r4.role === "USER")("bg-[#a5f3fc1a]", item_r4.role === "USER")("bg-[#ffffff0d]", item_r4.role !== "USER");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.role === "USER" ? "You" : "AI assistant");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r4.role === "ASSISTANT" ? 4 : 5);
  }
}
function Ai_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Ai_Conditional_14_For_2_Conditional_0_Template, 6, 8, "div", 23);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275conditional(item_r4.message ? 0 : -1);
  }
}
function Ai_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "AI is replying\u2026");
    \u0275\u0275elementEnd();
  }
}
function Ai_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, Ai_Conditional_14_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(3, Ai_Conditional_14_Conditional_3_Template, 2, 0, "p", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-busy", ctx_r1.sending());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.messages());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.sending() ? 3 : -1);
  }
}
function Ai_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
var Ai = class _Ai {
  faRobot = faRobot;
  faXmark = faXmark;
  faPaperPlane = faPaperPlane;
  aiState = inject(AiState);
  open = this.aiState.open;
  draft = signal("", ...ngDevMode ? [{ debugName: "draft" }] : []);
  messages = signal([], ...ngDevMode ? [{ debugName: "messages" }] : []);
  sending = signal(false, ...ngDevMode ? [{ debugName: "sending" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  history = "";
  aiSessionId = crypto.randomUUID();
  aiApi = inject(AiApi);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  conversation = viewChild("conversation", ...ngDevMode ? [{ debugName: "conversation" }] : []);
  injector = inject(Injector);
  messageInput = viewChild("messageInput", ...ngDevMode ? [{ debugName: "messageInput" }] : []);
  autoResize = viewChild(AutoResizeTextarea, ...ngDevMode ? [{ debugName: "autoResize" }] : []);
  constructor() {
    effect(() => {
      if (this.open()) {
        afterNextRender(() => this.messageInput()?.nativeElement.focus(), { injector: this.injector });
      }
    });
    afterNextRender(() => {
      const input2 = this.messageInput()?.nativeElement;
      if (!input2)
        return;
      let previousWidth = 0;
      const observer = new ResizeObserver(([entry]) => {
        const width = entry.contentRect.width;
        if (width > 0 && width !== previousWidth) {
          previousWidth = width;
          this.autoResize()?.onInput();
        }
      });
      observer.observe(input2);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
  sendMessage() {
    const message = this.draft().trim();
    if (!message || this.sending())
      return;
    const userMessage = { role: "USER", message };
    this.messages.update((messages) => [...messages, userMessage, { role: "ASSISTANT", message: "" }]);
    const replyIndex = this.messages().length - 1;
    this.draft.set("");
    this.errorMessage.set("");
    this.sending.set(true);
    this.scrollToLatest();
    this.aiApi.chat({
      aiSessionId: this.aiSessionId,
      message,
      currentRoute: this.getAiCurrentRoute(),
      history: this.history
    }).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.sending.set(false))).subscribe({
      next: (reply) => {
        if (reply.history !== void 0)
          this.history = reply.history;
        this.messages.update((messages) => messages.map((item, index) => index === replyIndex ? { role: "ASSISTANT", message: reply.message } : item));
        this.scrollToLatest();
      },
      complete: () => {
        const reply = this.messages()[replyIndex];
        if (!reply.message.trim()) {
          this.errorMessage.set("No reply was received. Please try again.");
          this.draft.set(message);
        }
      },
      error: (error) => {
        this.errorMessage.set(this.getErrorMessage(error));
        this.draft.set(message);
      }
    });
  }
  onMessageKeydown(event) {
    if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      this.sendMessage();
    }
  }
  getErrorMessage(error) {
    const fallback = "The reply could not be completed. Please try again.";
    if (error instanceof AiStreamError)
      return error.message;
    if (!(error instanceof HttpErrorResponse))
      return fallback;
    if (error.status === 0)
      return "Unable to reach the server. Check your connection and try again.";
    let body = error.error;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return body.trim() || fallback;
      }
    }
    return [body?.message, body?.error, body].find((value) => typeof value === "string" && value.trim().length > 0) || fallback;
  }
  getAiCurrentRoute() {
    const route = this.router.url.split(/[?#]/)[0];
    const purpose = this.router.parseUrl(this.router.url).queryParams["purpose"];
    const allowedPurposes = /* @__PURE__ */ new Set(["SIGNUP", "EDIT_PROFILE", "FORGOT_PASSWORD", "CHANGE_EMAIL"]);
    return typeof purpose === "string" && allowedPurposes.has(purpose) ? `${route}?purpose=${encodeURIComponent(purpose)}` : route;
  }
  scrollToLatest() {
    afterNextRender(() => {
      const element = this.conversation()?.nativeElement;
      if (element)
        element.scrollTop = element.scrollHeight;
    }, { injector: this.injector });
  }
  closeChat() {
    this.aiState.closeChat();
    this.aiState.minimized.set(true);
    afterNextRender(() => this.aiState.focusLauncher(), { injector: this.injector });
  }
  static \u0275fac = function Ai_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Ai)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Ai, selectors: [["app-ai"]], viewQuery: function Ai_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.conversation, _c02, 5);
      \u0275\u0275viewQuerySignal(ctx.messageInput, _c12, 5);
      \u0275\u0275viewQuerySignal(ctx.autoResize, AutoResizeTextarea, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(3);
    }
  }, hostAttrs: [1, "contents"], decls: 22, vars: 17, consts: [["conversation", ""], ["messageInput", ""], [1, "fixed", "right-0", "top-0", "z-20", "block", "h-dvh", "min-w-0", "max-w-[90vw]", "flex-[0_0_0px]", "overflow-hidden", "text-[#f5f3ff]", "transition-[flex-basis,width]", "duration-[240ms]", "ease-[ease]", "motion-reduce:transition-none", "lg:sticky", "lg:right-auto", "lg:z-auto", "lg:max-w-none", "[&_button]:cursor-pointer", "[&_button:focus-visible]:outline-2", "[&_button:focus-visible]:outline-cyan-300", "[&_button:focus-visible]:outline-offset-4", "[&_button:disabled]:cursor-not-allowed", "[&_button:disabled]:opacity-50", 3, "keydown.escape"], ["id", "ai-panel", "aria-labelledby", "ai-title", 1, "absolute", "inset-y-0", "right-0", "flex", "h-full", "w-[min(390px,90vw)]", "min-w-[min(390px,90vw)]", "flex-col", "overflow-hidden", "bg-[linear-gradient(160deg,#211d3d,#152c3c)]", "shadow-[inset_1px_0_#ffffff26]"], [1, "flex", "items-center", "gap-3", "border-b", "border-[#ffffff1f]", "p-3"], ["aria-hidden", "true", 1, "text-[25px]", "text-[#a5f3fc]", 3, "icon"], [1, "flex-1"], ["id", "ai-title", 1, "text-base", "font-semibold"], [1, "text-xs", "text-[#ddd6fe]"], ["type", "button", "aria-label", "Close AI chat", 1, "size-9", "shrink-0", "rounded-[10px]", "text-2xl", "hover:bg-white/10", 3, "click"], ["aria-hidden", "true", 3, "icon"], [1, "min-h-0", "flex-1", "overflow-y-auto", "p-3", "[scrollbar-color:#67e8f955_transparent]", "[scrollbar-width:thin]", "[&::-webkit-scrollbar]:w-1.5", "[&::-webkit-scrollbar-button]:hidden", "[&::-webkit-scrollbar-track]:bg-transparent", "[&::-webkit-scrollbar-thumb]:rounded-full", "[&::-webkit-scrollbar-thumb]:bg-cyan-300/35", "hover:[&::-webkit-scrollbar-thumb]:bg-cyan-300/55"], [1, "text-center"], ["role", "log", "aria-label", "AI conversation", "aria-live", "polite", 1, "flex", "flex-col", "gap-4"], [1, "px-3", "pt-3", 3, "ngSubmit"], ["role", "alert", 1, "mb-2.5", "rounded-xl", "border", "border-red-400/40", "bg-red-500/15", "p-3", "text-xs", "text-red-200"], [1, "flex", "items-end", "gap-2", "rounded-t-2xl", "border", "border-b-0", "border-[#ffffff26]", "bg-[#ffffff08]"], ["name", "message", "aria-label", "Message AI", "placeholder", "Ask about this app\u2026", "rows", "1", "maxlength", "200", "appAutoResizeTextarea", "", 1, "flex-1", "min-w-0", "min-h-11", "resize-none", "bg-transparent", "px-3", "py-2", "text-sm", "leading-5", "focus:outline-none", "disabled:cursor-not-allowed", "disabled:opacity-50", 3, "ngModelChange", "keydown", "ngModel", "disabled"], ["type", "submit", "aria-label", "Send message", 1, "m-1", "flex", "size-9", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-[#a5f3fc]", "text-sm", "text-[#164e63]", 3, "disabled"], ["aria-hidden", "true", 1, "mb-4", "block", "text-[40px]", "text-[#a5f3fc]", 3, "icon"], [1, "text-[22px]", "font-semibold"], [1, "mt-2", "text-sm", "text-[#c4bfd8]"], ["role", "status", 1, "text-xs", "text-[#a5f3fc]"], [1, "rounded-[14px]", "p-3", 3, "ml-6", "bg-[#a5f3fc1a]", "bg-[#ffffff0d]"], [1, "rounded-[14px]", "p-3"], [1, "text-xs", "text-[#a5f3fc]"], [1, "mt-1.5", "whitespace-pre-wrap", "wrap-anywhere", "text-sm"], [1, "text-blue-400", "underline", "underline-offset-2", "hover:text-blue-300", 3, "routerLink", "font-bold"], [1, "font-bold"], [1, "text-blue-400", "underline", "underline-offset-2", "hover:text-blue-300", 3, "routerLink"]], template: function Ai_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("keydown.escape", function Ai_Template_div_keydown_escape_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeChat());
      });
      \u0275\u0275elementStart(1, "aside", 3)(2, "header", 4);
      \u0275\u0275element(3, "fa-icon", 5);
      \u0275\u0275elementStart(4, "div", 6)(5, "h2", 7);
      \u0275\u0275text(6, "AI assistant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 8);
      \u0275\u0275text(8, "Your conversation space");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 9);
      \u0275\u0275listener("click", function Ai_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeChat());
      });
      \u0275\u0275element(10, "fa-icon", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 11, 0);
      \u0275\u0275conditionalCreate(13, Ai_Conditional_13_Template, 6, 1, "div", 12)(14, Ai_Conditional_14_Template, 4, 2, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "form", 14);
      \u0275\u0275listener("ngSubmit", function Ai_Template_form_ngSubmit_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sendMessage());
      });
      \u0275\u0275conditionalCreate(16, Ai_Conditional_16_Template, 2, 1, "p", 15);
      \u0275\u0275elementStart(17, "div", 16)(18, "textarea", 17, 1);
      \u0275\u0275twoWayListener("ngModelChange", function Ai_Template_textarea_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft, $event) || (ctx.draft = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keydown", function Ai_Template_textarea_keydown_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMessageKeydown($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 18);
      \u0275\u0275element(21, "fa-icon", 10);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.open() ? 390 : 0, "px")("flex-basis", ctx.open() ? 390 : 0, "px");
      \u0275\u0275advance();
      \u0275\u0275attribute("inert", ctx.open() ? null : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("icon", ctx.faRobot);
      \u0275\u0275advance(7);
      \u0275\u0275property("icon", ctx.faXmark);
      \u0275\u0275advance();
      \u0275\u0275classProp("grid", !ctx.messages().length)("place-items-center", !ctx.messages().length);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.messages().length ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.errorMessage() ? 16 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft);
      \u0275\u0275property("disabled", ctx.sending());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.sending() || !ctx.draft().trim());
      \u0275\u0275advance();
      \u0275\u0275property("icon", ctx.faPaperPlane);
    }
  }, dependencies: [FontAwesomeModule, FaIconComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, AutoResizeTextarea, RouterLink, AiMessagePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ai, [{
    type: Component,
    args: [{ selector: "app-ai", imports: [FontAwesomeModule, FormsModule, AutoResizeTextarea, RouterLink, AiMessagePipe], changeDetection: ChangeDetectionStrategy.OnPush, host: {
      class: "contents"
    }, template: `<div class="fixed right-0 top-0 z-20 block h-dvh min-w-0 max-w-[90vw] flex-[0_0_0px] overflow-hidden text-[#f5f3ff] transition-[flex-basis,width] duration-[240ms] ease-[ease] motion-reduce:transition-none lg:sticky lg:right-auto lg:z-auto lg:max-w-none [&_button]:cursor-pointer [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-cyan-300 [&_button:focus-visible]:outline-offset-4 [&_button:disabled]:cursor-not-allowed [&_button:disabled]:opacity-50"
  [style.width.px]="open() ? 390 : 0" [style.flex-basis.px]="open() ? 390 : 0"
  (keydown.escape)="closeChat()">
<aside id="ai-panel" class="absolute inset-y-0 right-0 flex h-full w-[min(390px,90vw)] min-w-[min(390px,90vw)] flex-col overflow-hidden bg-[linear-gradient(160deg,#211d3d,#152c3c)] shadow-[inset_1px_0_#ffffff26]"
  [attr.inert]="open() ? null : ''" aria-labelledby="ai-title">
  <header class="flex items-center gap-3 border-b border-[#ffffff1f] p-3">
    <fa-icon class="text-[25px] text-[#a5f3fc]" [icon]="faRobot" aria-hidden="true"></fa-icon>
    <div class="flex-1"><h2 id="ai-title" class="text-base font-semibold">AI assistant</h2><p class="text-xs text-[#ddd6fe]">Your conversation space</p></div>
    <button type="button" class="size-9 shrink-0 rounded-[10px] text-2xl hover:bg-white/10" aria-label="Close AI chat"
      (click)="closeChat()"><fa-icon [icon]="faXmark" aria-hidden="true"></fa-icon></button>
  </header>
  <div #conversation class="min-h-0 flex-1 overflow-y-auto p-3 [scrollbar-color:#67e8f955_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-button]:hidden [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-cyan-300/35 hover:[&::-webkit-scrollbar-thumb]:bg-cyan-300/55"
    [class.grid]="!messages().length" [class.place-items-center]="!messages().length">
    @if (!messages().length) {
    <div class="text-center">
      <fa-icon class="mb-4 block text-[40px] text-[#a5f3fc]" [icon]="faRobot" aria-hidden="true"></fa-icon>
      <h3 class="text-[22px] font-semibold">How can I help?</h3>
      <p class="mt-2 text-sm text-[#c4bfd8]">Ask me about this app and its features.</p>
    </div>
    } @else {
      <div class="flex flex-col gap-4" role="log" aria-label="AI conversation" aria-live="polite" [attr.aria-busy]="sending()">
        @for (item of messages(); track $index) {
          @if (item.message) {
            <div class="rounded-[14px] p-3" [class.ml-6]="item.role === 'USER'"
              [class.bg-[#a5f3fc1a]]="item.role === 'USER'" [class.bg-[#ffffff0d]]="item.role !== 'USER'">
              <span class="text-xs text-[#a5f3fc]">{{ item.role === 'USER' ? 'You' : 'AI assistant' }}</span>
              <p class="mt-1.5 whitespace-pre-wrap wrap-anywhere text-sm">@if (item.role === 'ASSISTANT') {@for (part of item.message | aiMessage; track $index) {@if (part.route) {<a [routerLink]="part.route" class="text-blue-400 underline underline-offset-2 hover:text-blue-300" [class.font-bold]="part.bold">{{ part.text }}</a>} @else if (part.bold) {<strong class="font-bold">{{ part.text }}</strong>} @else {{{ part.text }}}}} @else {{{ item.message }}}</p>
            </div>
          }
        }
        @if (sending()) { <p class="text-xs text-[#a5f3fc]" role="status">AI is replying\u2026</p> }
      </div>
    }
  </div>
  <form class="px-3 pt-3" (ngSubmit)="sendMessage()">
    @if (errorMessage()) { <p class="mb-2.5 rounded-xl border border-red-400/40 bg-red-500/15 p-3 text-xs text-red-200" role="alert">{{ errorMessage() }}</p> }
    <div class="flex items-end gap-2 rounded-t-2xl border border-b-0 border-[#ffffff26] bg-[#ffffff08]">
      <textarea #messageInput class="flex-1 min-w-0 min-h-11 resize-none bg-transparent px-3 py-2 text-sm leading-5 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        name="message" aria-label="Message AI" placeholder="Ask about this app\u2026" rows="1" maxlength="200" appAutoResizeTextarea
        [(ngModel)]="draft" [disabled]="sending()" (keydown)="onMessageKeydown($event)"></textarea>
      <button class="m-1 flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#a5f3fc] text-sm text-[#164e63]" type="submit" aria-label="Send message" [disabled]="sending() || !draft().trim()"><fa-icon [icon]="faPaperPlane" aria-hidden="true"></fa-icon></button>
    </div>
  </form>
</aside>
</div>
` }]
  }], () => [], { conversation: [{ type: ViewChild, args: ["conversation", { isSignal: true }] }], messageInput: [{ type: ViewChild, args: ["messageInput", { isSignal: true }] }], autoResize: [{ type: ViewChild, args: [forwardRef(() => AutoResizeTextarea), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Ai, { className: "Ai", filePath: "src/app/features/ai/ai.ts", lineNumber: 25 });
})();

// src/app/app.ts
var _c03 = (a0) => ({ hidden: a0 });
function App_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 2);
    \u0275\u0275element(1, "app-header");
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 6);
    \u0275\u0275element(1, "app-footer");
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-ai-launcher", 8)(1, "app-ai");
  }
}
var App = class _App {
  aiState = inject(AiState);
  authService = inject(Auth);
  platformService = inject(Platform);
  router = inject(Router);
  telemetry = inject(Telemetry);
  pageRefresh = inject(PageRefresh);
  dialog = inject(MatDialog);
  networkNotification = inject(NetworkNotification);
  destroyRef = inject(DestroyRef);
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
    if (this.platformService.isBrowser()) {
      fromEvent(window, "online").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.networkNotification.showOnline();
        this.dialog.closeAll();
        this.pageRefresh.refresh().catch((error) => console.error("Failed to refresh page after reconnecting", error));
      });
    }
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
    let notifiedNavigationId = null;
    this.router.events.pipe(filter((event) => event instanceof NavigationStart || event instanceof NavigationError || event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        if (this.platformService.isBrowser() && !navigator.onLine && notifiedNavigationId !== event.id) {
          notifiedNavigationId = event.id;
          if (event instanceof NavigationStart) {
            this.router.currentNavigation()?.abort();
          }
          this.networkNotification.showOffline();
        }
        return;
      }
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 9, vars: 9, consts: [[1, "ai-layout"], [1, "app-content", "text-base", "wrap-break-word", "min-h-dvh", "flex", "flex-col", "relative"], [1, "sticky", "top-0", "z-10"], [1, "u-gradient-background", "grow", "relative", "flex", "flex-col"], [1, "absolute", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-white/50", "backdrop-blur-[1px]"], [1, "grow", "relative", "flex", "flex-col", 3, "ngClass"], [1, "footer"], ["diameter", "80", 1, "stroke-violet-700"], [1, "fixed", "right-6", "bottom-6", "z-20", "hidden", "xl:block"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, App_Conditional_2_Template, 2, 0, "header", 2);
      \u0275\u0275elementStart(3, "main", 3);
      \u0275\u0275conditionalCreate(4, App_Conditional_4_Template, 2, 0, "div", 4);
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275element(6, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, App_Conditional_7_Template, 2, 0, "footer", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, App_Conditional_8_Template, 2, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("ai-open", ctx.aiState.open());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.authState().completed ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showLoader() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c03, ctx.showLoader()));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.authState().completed ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.authState().completed ? 8 : -1);
    }
  }, dependencies: [
    RouterOutlet,
    CommonModule,
    NgClass,
    Header,
    Footer,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    Ai,
    AiLauncher
  ], styles: ["\n\n.ai-layout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  min-height: 100dvh;\n}\n.app-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.header[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n  height: 64px;\n}\n.brand[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n}\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 15px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-1px);\n}\n.content[_ngcontent-%COMP%] {\n  padding-top: 64px;\n}\n@keyframes _ngcontent-%COMP%_gradientShift {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .nav[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 6px 12px;\n  }\n}\n/*# sourceMappingURL=app.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      RouterOutlet,
      CommonModule,
      Header,
      Footer,
      MatProgressSpinnerModule,
      Ai,
      AiLauncher
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<!-- {{pageReload()}} -->\n<div class="ai-layout" [class.ai-open]="aiState.open()">\n<div class="app-content text-base wrap-break-word min-h-dvh flex flex-col relative">\n  @if (authState().completed) {\n  <header class="sticky top-0 z-10">\n    <app-header></app-header>\n  </header>\n  }\n  <main class="u-gradient-background grow relative flex flex-col">\n    @if (showLoader()) {\n    <div class="absolute inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-[1px]">\n      <mat-spinner diameter="80" class="stroke-violet-700"></mat-spinner>\n    </div>\n    }\n    <div class="grow relative flex flex-col" [ngClass]="{ hidden: showLoader() }">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n\n  @if (authState().completed) {\n  <footer class="footer">\n    <app-footer></app-footer>\n  </footer>\n  }\n</div>\n@if (authState().completed) {\n  <app-ai-launcher class="fixed right-6 bottom-6 z-20 hidden xl:block"></app-ai-launcher>\n  <app-ai></app-ai>\n}\n</div>\n', styles: ["/* src/app/app.scss */\n.ai-layout {\n  display: flex;\n  align-items: flex-start;\n  min-height: 100dvh;\n}\n.app-content {\n  flex: 1;\n  min-width: 0;\n}\n.header {\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 24px;\n  height: 64px;\n}\n.brand {\n  font-size: 24px;\n  font-weight: 800;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.nav {\n  display: flex;\n  gap: 32px;\n}\n.nav a {\n  color: rgba(255, 255, 255, 0.9);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 15px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.nav a:hover {\n  color: white;\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-1px);\n}\n.content {\n  padding-top: 64px;\n}\n@keyframes gradientShift {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n@media (max-width: 768px) {\n  .container {\n    padding: 0 16px;\n  }\n  .nav {\n    gap: 20px;\n  }\n  .nav a {\n    font-size: 14px;\n    padding: 6px 12px;\n  }\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 34 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
