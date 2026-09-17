import {
  AuthorSummary
} from "./chunk-3CBJ6ESI.js";
import "./chunk-JVJFHH6Q.js";
import {
  InfiniteScroll
} from "./chunk-7I7HDRIW.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-GBGDLFPS.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-BNG33ZAB.js";
import {
  LayoutState
} from "./chunk-MGMRHKFO.js";
import "./chunk-DL2RIVMB.js";
import {
  DialogHeader
} from "./chunk-BFMGPGRE.js";
import "./chunk-D4WB7EDJ.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContent,
  MatDialogModule
} from "./chunk-R67ZD57R.js";
import {
  FaIconComponent,
  FontAwesomeModule,
  faArrowDown
} from "./chunk-3PJSDKU3.js";
import {
  FormsModule
} from "./chunk-3FKKUIDB.js";
import "./chunk-6C42UE7J.js";
import {
  Platform2 as Platform,
  environment,
  toHttpParams
} from "./chunk-IRF5M5JT.js";
import "./chunk-32HUML7N.js";
import {
  DatePipe,
  HttpClient,
  JsonPipe
} from "./chunk-SRWWUAG3.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7MOHRCPT.js";
import {
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/features/telemetry/services/telemetry-api.ts
var TelemetryApi = class _TelemetryApi {
  httpClient = inject(HttpClient);
  baseApiUrl = `${environment.rootApiUrl}/telemetry`;
  getAll(params) {
    return this.httpClient.get(`${this.baseApiUrl}/all`, {
      params: toHttpParams(params)
    });
  }
  getLocalSessions(params) {
    return this.httpClient.get(`${this.baseApiUrl}/local-sessions`, {
      params: toHttpParams(params)
    });
  }
  static \u0275fac = function TelemetryApi_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TelemetryApi)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TelemetryApi, factory: _TelemetryApi.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TelemetryApi, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/telemetry/config/telemetry.config.ts
var TELEMETRY_ACTIVITY_TYPES = [
  { value: null, label: "All action types" },
  { value: "CLICK", label: "Clicks" },
  {
    value: "API_CALL",
    label: "API calls",
    options: [
      { value: null, label: "All API results" },
      { value: true, label: "Successful" },
      { value: false, label: "Failed" }
    ]
  },
  { value: "ROUTER_CHANGE", label: "Navigation" },
  { value: "ERROR", label: "Errors" },
  { value: "WEBSOCKET_ERROR", label: "Connection errors" },
  { value: "NETWORK_ERROR", label: "Internet connection errors" },
  { value: "NETWORK_RESTORED", label: "Internet connections restored" }
];

// src/app/features/telemetry/components/session-events-dialog/session-events-dialog.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
function SessionEventsDialog_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activityType_r1 = ctx.$implicit;
    \u0275\u0275property("value", activityType_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(activityType_r1.label);
  }
}
function SessionEventsDialog_Conditional_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const apiResult_r4 = ctx.$implicit;
    \u0275\u0275property("value", apiResult_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(apiResult_r4.label);
  }
}
function SessionEventsDialog_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-select", 13);
    \u0275\u0275listener("valueChange", function SessionEventsDialog_Conditional_9_Template_mat_select_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterBySuccess($event));
    });
    \u0275\u0275repeaterCreate(2, SessionEventsDialog_Conditional_9_For_3_Template, 2, 2, "mat-option", 7, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.selectedSuccess())("canSelectNullableOptions", true);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.apiResults);
  }
}
function SessionEventsDialog_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementEnd();
  }
}
function SessionEventsDialog_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMessage());
  }
}
function SessionEventsDialog_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "No events found for this session.");
    \u0275\u0275elementEnd();
  }
}
function SessionEventsDialog_Conditional_14_For_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Failed");
    \u0275\u0275elementEnd();
  }
}
function SessionEventsDialog_Conditional_14_For_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Restored");
    \u0275\u0275elementEnd();
  }
}
function SessionEventsDialog_Conditional_14_For_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r6.route);
  }
}
function SessionEventsDialog_Conditional_14_For_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "fa-icon", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.faArrowDown);
  }
}
function SessionEventsDialog_Conditional_14_For_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
  }
}
function SessionEventsDialog_Conditional_14_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "article", 17)(2, "div", 18)(3, "app-author-summary", 19)(4, "p", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "time", 21);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 22)(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, SessionEventsDialog_Conditional_14_For_3_Conditional_12_Template, 2, 0, "span", 24)(13, SessionEventsDialog_Conditional_14_For_3_Conditional_13_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3", 26);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, SessionEventsDialog_Conditional_14_For_3_Conditional_16_Template, 2, 1, "p", 27);
    \u0275\u0275elementStart(17, "details", 28)(18, "summary", 29);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "pre", 30);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "json");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(23, SessionEventsDialog_Conditional_14_For_3_Conditional_23_Template, 2, 1, "div", 31)(24, SessionEventsDialog_Conditional_14_For_3_Conditional_24_Template, 1, 0, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = ctx.$implicit;
    const \u0275$index_48_r7 = ctx.$index;
    const \u0275$count_48_r8 = ctx.$count;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r2.isNetworkRestored(event_r6) ? "rgb(110 231 183)" : null);
    \u0275\u0275classProp("border-rose-300", ctx_r2.isFailure(event_r6))("bg-rose-50", ctx_r2.isFailure(event_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("author", ctx_r2.getEventAuthor(event_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", event_r6.identityType, "", event_r6.identityId ? " #" + event_r6.identityId : "", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("datetime", event_r6.createdAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 18, event_r6.createdAt, "MMM d, y, h:mm a"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r6.type);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isFailure(event_r6) ? 12 : ctx_r2.isNetworkRestored(event_r6) ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.title(event_r6));
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r6.route && event_r6.route !== "/" ? 16 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Event details #", event_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, event_r6.activity));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedType() === null && !(\u0275$index_48_r7 === \u0275$count_48_r8 - 1) ? 23 : !(\u0275$index_48_r7 === \u0275$count_48_r8 - 1) ? 24 : -1);
  }
}
function SessionEventsDialog_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-infinite-scroll", 15);
    \u0275\u0275listener("reachedEnd", function SessionEventsDialog_Conditional_14_Template_app_infinite_scroll_reachedEnd_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadMore());
    });
    \u0275\u0275elementStart(1, "ol", 16);
    \u0275\u0275repeaterCreate(2, SessionEventsDialog_Conditional_14_For_3_Template, 25, 23, "li", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("loadingEnd", ctx_r2.isLoadingMore())("disabled", !ctx_r2.hasMore());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.events());
  }
}
var SessionEventsDialog = class _SessionEventsDialog {
  telemetryApi = inject(TelemetryApi);
  data = inject(MAT_DIALOG_DATA);
  events = signal([], ...ngDevMode ? [{ debugName: "events" }] : []);
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  isLoadingMore = signal(false, ...ngDevMode ? [{ debugName: "isLoadingMore" }] : []);
  hasMore = signal(true, ...ngDevMode ? [{ debugName: "hasMore" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  selectedType = signal(null, ...ngDevMode ? [{ debugName: "selectedType" }] : []);
  selectedSuccess = signal(null, ...ngDevMode ? [{ debugName: "selectedSuccess" }] : []);
  currentPage = 0;
  pageSize = 50;
  activityTypes = TELEMETRY_ACTIVITY_TYPES;
  apiResults = TELEMETRY_ACTIVITY_TYPES.find((type) => type.value === "API_CALL")?.options ?? [];
  faArrowDown = faArrowDown;
  constructor() {
    this.loadEvents();
  }
  loadMore() {
    if (!this.hasMore() || this.isLoading() || this.isLoadingMore())
      return;
    this.currentPage++;
    this.isLoadingMore.set(true);
    this.loadEvents();
  }
  filterByType(type) {
    if (this.selectedType() === type)
      return;
    this.selectedType.set(type);
    this.selectedSuccess.set(null);
    this.resetAndLoadEvents();
  }
  filterBySuccess(success) {
    if (this.selectedSuccess() === success)
      return;
    this.selectedSuccess.set(success);
    this.resetAndLoadEvents();
  }
  resetAndLoadEvents() {
    this.currentPage = 0;
    this.events.set([]);
    this.hasMore.set(true);
    this.isLoading.set(true);
    this.loadEvents();
  }
  title(event) {
    if (event.type === "ROUTER_CHANGE")
      return `Opened ${event.activity["to"] || event.route}`;
    if (event.type === "API_CALL")
      return `${event.activity["method"] || "Request"} ${event.activity["url"] || event.name}`;
    return event.name.replace(/[_-]+/g, " ");
  }
  isFailure(event) {
    return event.type === "ERROR" || event.type === "WEBSOCKET_ERROR" || event.type === "NETWORK_ERROR" || event.activity["success"] === false;
  }
  isNetworkRestored(event) {
    return event.type === "NETWORK_RESTORED";
  }
  getEventAuthor(event) {
    const fallbackName = event.identityType === "ANONYMOUS" ? "Anonymous" : event.identityType === "USER" ? `User #${event.identityId}` : void 0;
    return {
      type: event.identityType,
      id: event.user?.id ?? event.identityId ?? 0,
      name: event.user?.name || event.user?.username || fallbackName,
      username: event.user?.username,
      compressedProfileImageUrl: event.user?.compressedProfileImageUrl
    };
  }
  loadEvents() {
    this.errorMessage.set("");
    this.telemetryApi.getAll(__spreadValues(__spreadValues({
      localSessionId: this.data.session.localSessionId,
      page: this.currentPage,
      size: this.pageSize,
      sort: "id,asc"
    }, this.selectedType() ? { type: this.selectedType() } : {}), this.selectedSuccess() !== null ? { success: this.selectedSuccess() } : {})).subscribe({
      next: (response) => {
        this.events.update((events) => [...events, ...response.content]);
        this.hasMore.set(!response.last);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: (error) => {
        console.error("Error loading telemetry events", error);
      }
    });
  }
  static \u0275fac = function SessionEventsDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionEventsDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SessionEventsDialog, selectors: [["app-session-events-dialog"]], decls: 15, vars: 4, consts: [[1, "flex", "h-full", "min-h-0", "flex-col"], [1, "px-4", "pt-2"], ["title", "Session Events"], [1, "mt-1", "border-b", "border-slate-200", "px-4", "pb-3"], [1, "flex", "w-full", "flex-wrap", "justify-between", "gap-3"], [1, "w-56", "max-w-full"], ["placeholder", "Select an action type", 1, "u-form-field", 3, "valueChange", "value", "canSelectNullableOptions"], [3, "value"], [1, "min-h-0", "flex-1", "px-4!"], [1, "flex", "h-full", "items-center", "justify-center"], ["role", "alert", 1, "py-16", "text-center", "text-rose-600"], [1, "py-16", "text-center", "text-slate-500"], [3, "loadingEnd", "disabled"], ["placeholder", "Select an API result", 1, "u-form-field", 3, "valueChange", "value", "canSelectNullableOptions"], [1, "u-spinner"], [3, "reachedEnd", "loadingEnd", "disabled"], [1, "py-4"], [1, "min-w-0", "rounded-xl", "border", "border-slate-200", "p-3", "pt-2"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "min-w-0", "flex-1", 3, "author"], ["bodySecondary", "", 1, "truncate", "text-xs", "text-slate-500"], [1, "shrink-0", "pt-2", "text-right", "text-xs", "text-slate-500"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "rounded", "bg-violet-100", "px-2", "py-1", "text-xs", "font-semibold", "text-violet-700"], [1, "rounded", "bg-rose-100", "px-2", "py-1", "text-xs", "font-semibold", "text-rose-700"], [1, "rounded", "bg-emerald-100", "px-2", "py-1", "text-xs", "font-semibold", "text-emerald-700"], [1, "mt-2", "break-words", "font-semibold", "text-slate-900"], [1, "mt-1", "break-all", "text-sm", "text-slate-600"], [1, "mt-3", "border-t", "border-slate-200", "pt-2"], [1, "cursor-pointer", "text-sm", "font-medium", "text-violet-700"], [1, "mt-2", "max-h-72", "overflow-auto", "whitespace-pre-wrap", "break-words", "rounded-lg", "bg-slate-100", "p-3", "text-xs", "text-slate-700"], ["aria-hidden", "true", 1, "flex", "w-full", "items-center", "justify-center", "py-3", "text-xl", "text-violet-500"], ["aria-hidden", "true", 1, "h-5"], [1, "leading-none", 3, "icon"]], template: function SessionEventsDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-dialog-header", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "mat-select", 6);
      \u0275\u0275listener("valueChange", function SessionEventsDialog_Template_mat_select_valueChange_6_listener($event) {
        return ctx.filterByType($event);
      });
      \u0275\u0275repeaterCreate(7, SessionEventsDialog_For_8_Template, 2, 2, "mat-option", 7, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, SessionEventsDialog_Conditional_9_Template, 4, 2, "div", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "mat-dialog-content", 8);
      \u0275\u0275conditionalCreate(11, SessionEventsDialog_Conditional_11_Template, 2, 0, "div", 9)(12, SessionEventsDialog_Conditional_12_Template, 2, 1, "p", 10)(13, SessionEventsDialog_Conditional_13_Template, 2, 0, "p", 11)(14, SessionEventsDialog_Conditional_14_Template, 4, 2, "app-infinite-scroll", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.selectedType())("canSelectNullableOptions", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.activityTypes);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selectedType() === "API_CALL" ? 9 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 11 : ctx.errorMessage() ? 12 : !ctx.events().length ? 13 : 14);
    }
  }, dependencies: [FormsModule, MatDialogModule, MatDialogContent, MatSelectModule, MatSelect, MatOption, FontAwesomeModule, FaIconComponent, DialogHeader, InfiniteScroll, AuthorSummary, DatePipe, JsonPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=session-events-dialog.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionEventsDialog, [{
    type: Component,
    args: [{ selector: "app-session-events-dialog", imports: [DatePipe, JsonPipe, FormsModule, MatDialogModule, MatSelectModule, FontAwesomeModule, DialogHeader, InfiniteScroll, AuthorSummary], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex h-full min-h-0 flex-col">
  <div class="px-4 pt-2">
    <app-dialog-header title="Session Events"></app-dialog-header>
  </div>
  <div class="mt-1 border-b border-slate-200 px-4 pb-3">
    <div class="flex w-full flex-wrap justify-between gap-3">
      <div class="w-56 max-w-full">
        <mat-select [value]="selectedType()" [canSelectNullableOptions]="true" (valueChange)="filterByType($event)"
          placeholder="Select an action type" class="u-form-field">
          @for (activityType of activityTypes; track activityType.label) {
            <mat-option [value]="activityType.value">{{ activityType.label }}</mat-option>
          }
        </mat-select>
      </div>
      @if (selectedType() === 'API_CALL') {
        <div class="w-56 max-w-full">
          <mat-select [value]="selectedSuccess()" [canSelectNullableOptions]="true"
            (valueChange)="filterBySuccess($event)"
            placeholder="Select an API result" class="u-form-field">
            @for (apiResult of apiResults; track apiResult.label) {
              <mat-option [value]="apiResult.value">{{ apiResult.label }}</mat-option>
            }
          </mat-select>
        </div>
      }
    </div>
  </div>

  <mat-dialog-content class="min-h-0 flex-1 px-4!">
    @if (isLoading()) {
      <div class="flex h-full items-center justify-center"><div class="u-spinner"></div></div>
    } @else if (errorMessage()) {
      <p class="py-16 text-center text-rose-600" role="alert">{{ errorMessage() }}</p>
    } @else if (!events().length) {
      <p class="py-16 text-center text-slate-500">No events found for this session.</p>
    } @else {
      <app-infinite-scroll [loadingEnd]="isLoadingMore()" [disabled]="!hasMore()"
        (reachedEnd)="loadMore()">
        <ol class="py-4">
          @for (event of events(); track event.id; let last = $last) {
            <li>
              <article class="min-w-0 rounded-xl border border-slate-200 p-3 pt-2"
                [class.border-rose-300]="isFailure(event)" [class.bg-rose-50]="isFailure(event)"
                [style.border-color]="isNetworkRestored(event) ? 'rgb(110 231 183)' : null">
                <div class="flex items-start justify-between gap-3">
                  <app-author-summary class="min-w-0 flex-1" [author]="getEventAuthor(event)">
                    <p bodySecondary class="truncate text-xs text-slate-500">
                      {{ event.identityType }}{{ event.identityId ? ' #' + event.identityId : '' }}
                    </p>
                  </app-author-summary>
                  <time class="shrink-0 pt-2 text-right text-xs text-slate-500" [attr.datetime]="event.createdAt">
                    {{ event.createdAt | date:'MMM d, y, h:mm a' }}
                  </time>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                  <span class="rounded bg-violet-100 px-2 py-1 text-xs font-semibold text-violet-700">{{ event.type }}</span>
                  @if (isFailure(event)) {
                    <span class="rounded bg-rose-100 px-2 py-1 text-xs font-semibold text-rose-700">Failed</span>
                  } @else if (isNetworkRestored(event)) {
                    <span class="rounded bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Restored</span>
                  }
                </div>
                <h3 class="mt-2 break-words font-semibold text-slate-900">{{ title(event) }}</h3>
                @if (event.route && event.route !== '/') {
                  <p class="mt-1 break-all text-sm text-slate-600">{{ event.route }}</p>
                }
                <details class="mt-3 border-t border-slate-200 pt-2">
                  <summary class="cursor-pointer text-sm font-medium text-violet-700">Event details #{{ event.id }}</summary>
                  <pre class="mt-2 max-h-72 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-slate-100 p-3 text-xs text-slate-700">{{ event.activity | json }}</pre>
                </details>
              </article>
              @if (selectedType() === null && !last) {
                <div class="flex w-full items-center justify-center py-3 text-xl text-violet-500" aria-hidden="true">
                  <fa-icon [icon]="faArrowDown" class="leading-none"></fa-icon>
                </div>
              } @else if (!last) {
                <div class="h-5" aria-hidden="true"></div>
              }
            </li>
          }
        </ol>
      </app-infinite-scroll>
    }
  </mat-dialog-content>
</div>
`, styles: ["/* src/app/features/telemetry/components/session-events-dialog/session-events-dialog.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=session-events-dialog.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SessionEventsDialog, { className: "SessionEventsDialog", filePath: "src/app/features/telemetry/components/session-events-dialog/session-events-dialog.ts", lineNumber: 27 });
})();

// src/app/features/telemetry/telemetry.ts
var _c0 = () => ({ authorNameColor: "text-white" });
var _forTrack02 = ($index, $item) => $item.label;
var _forTrack12 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.localSessionId;
function Telemetry_Conditional_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3, "\u25BE");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const apiResultMenu_r1 = \u0275\u0275reference(12);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matMenuTriggerFor", apiResultMenu_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedSuccessLabel(), " ");
  }
}
function Telemetry_Conditional_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function Telemetry_Conditional_16_For_10_Template_button_click_0_listener() {
      const activityType_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterEventsByType(activityType_r4.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activityType_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-violet-200!", ctx_r1.selectedType() === activityType_r4.value)("text-violet-800!", ctx_r1.selectedType() === activityType_r4.value)("bg-transparent!", ctx_r1.selectedType() !== activityType_r4.value)("text-white/75!", ctx_r1.selectedType() !== activityType_r4.value)("hover:bg-white/15!", ctx_r1.selectedType() !== activityType_r4.value)("hover:text-white!", ctx_r1.selectedType() !== activityType_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", activityType_r4.label, " ");
  }
}
function Telemetry_Conditional_16_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function Telemetry_Conditional_16_For_15_Template_button_click_0_listener() {
      const apiResult_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterEventsBySuccess(apiResult_r6.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const apiResult_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-violet-200!", ctx_r1.selectedSuccess() === apiResult_r6.value)("text-violet-800!", ctx_r1.selectedSuccess() === apiResult_r6.value)("bg-transparent!", ctx_r1.selectedSuccess() !== apiResult_r6.value)("text-white/75!", ctx_r1.selectedSuccess() !== apiResult_r6.value)("hover:bg-white/15!", ctx_r1.selectedSuccess() !== apiResult_r6.value)("hover:text-white!", ctx_r1.selectedSuccess() !== apiResult_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", apiResult_r6.label, " ");
  }
}
function Telemetry_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4, "\u25BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, Telemetry_Conditional_16_Conditional_5_Template, 4, 2, "button", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-menu", 19, 0)(8, "div", 20);
    \u0275\u0275repeaterCreate(9, Telemetry_Conditional_16_For_10_Template, 2, 13, "button", 21, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-menu", 19, 1)(13, "div", 20);
    \u0275\u0275repeaterCreate(14, Telemetry_Conditional_16_For_15_Template, 2, 13, "button", 21, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const actionTypeMenu_r7 = \u0275\u0275reference(7);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionTypeMenu_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedTypeLabel(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.selectedType() === "API_CALL" ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.activityTypes);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.apiResults);
  }
}
function Telemetry_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementEnd();
  }
}
function Telemetry_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.eventsErrorMessage());
  }
}
function Telemetry_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 25);
    \u0275\u0275text(2, "No telemetry events found.");
    \u0275\u0275elementEnd()();
  }
}
function Telemetry_Conditional_17_Conditional_3_For_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Failed");
    \u0275\u0275elementEnd();
  }
}
function Telemetry_Conditional_17_Conditional_3_For_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Restored");
    \u0275\u0275elementEnd();
  }
}
function Telemetry_Conditional_17_Conditional_3_For_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r9.route);
  }
}
function Telemetry_Conditional_17_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29)(1, "div", 30);
    \u0275\u0275element(2, "app-author-summary", 31);
    \u0275\u0275elementStart(3, "time", 32);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "span", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, Telemetry_Conditional_17_Conditional_3_For_3_Conditional_9_Template, 2, 0, "span", 35)(10, Telemetry_Conditional_17_Conditional_3_For_3_Conditional_10_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h2", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, Telemetry_Conditional_17_Conditional_3_For_3_Conditional_13_Template, 2, 1, "p", 38);
    \u0275\u0275elementStart(14, "details", 39)(15, "summary", 40);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "pre", 41);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "json");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("border-color", ctx_r1.isNetworkRestored(event_r9) ? "rgb(110 231 183)" : null)("background-color", ctx_r1.isFailure(event_r9) ? "rgb(244 63 94 / 0.18)" : null);
    \u0275\u0275classProp("border-rose-300", ctx_r1.isFailure(event_r9));
    \u0275\u0275advance(2);
    \u0275\u0275property("author", ctx_r1.eventAuthor(event_r9))("classes", \u0275\u0275pureFunction0(21, _c0));
    \u0275\u0275advance();
    \u0275\u0275attribute("datetime", event_r9.createdAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 16, event_r9.createdAt, "MMM d, y, h:mm a"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r9.type);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFailure(event_r9) ? 9 : ctx_r1.isNetworkRestored(event_r9) ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.eventTitle(event_r9));
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r9.route && event_r9.route !== "/" ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Event details #", event_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, event_r9.activity));
  }
}
function Telemetry_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-infinite-scroll", 26);
    \u0275\u0275listener("reachedEnd", function Telemetry_Conditional_17_Conditional_3_Template_app_infinite_scroll_reachedEnd_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMoreEvents());
    });
    \u0275\u0275elementStart(1, "ol", 27);
    \u0275\u0275repeaterCreate(2, Telemetry_Conditional_17_Conditional_3_For_3_Template, 20, 22, "li", 28, _forTrack12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("loadingEnd", ctx_r1.eventsLoadingMore())("disabled", !ctx_r1.eventsHasMore());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.events());
  }
}
function Telemetry_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Telemetry_Conditional_17_Conditional_0_Template, 2, 0, "div", 12)(1, Telemetry_Conditional_17_Conditional_1_Template, 3, 1, "div", 13)(2, Telemetry_Conditional_17_Conditional_2_Template, 3, 0, "div", 13)(3, Telemetry_Conditional_17_Conditional_3_Template, 4, 2, "app-infinite-scroll", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.eventsLoading() ? 0 : ctx_r1.eventsErrorMessage() ? 1 : !ctx_r1.events().length ? 2 : 3);
  }
}
function Telemetry_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementEnd();
  }
}
function Telemetry_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function Telemetry_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 25);
    \u0275\u0275text(2, "No telemetry sessions found.");
    \u0275\u0275elementEnd()();
  }
}
function Telemetry_Conditional_21_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 42)(1, "div", 43)(2, "div", 44)(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 47);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 48);
    \u0275\u0275listener("click", function Telemetry_Conditional_21_For_3_Template_button_click_11_listener() {
      const session_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSessionEvents(session_r12));
    });
    \u0275\u0275text(12, " Show Events ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const session_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", session_r12.activityCount, " events ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.deviceLabel(session_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 4, session_r12.firstSeenAt, "MMM d, y, h:mm a"), " \u2013 ", \u0275\u0275pipeBind2(10, 7, session_r12.lastSeenAt, "MMM d, y, h:mm a"), " ");
  }
}
function Telemetry_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-infinite-scroll", 26);
    \u0275\u0275listener("reachedEnd", function Telemetry_Conditional_21_Template_app_infinite_scroll_reachedEnd_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275elementStart(1, "ul", 27);
    \u0275\u0275repeaterCreate(2, Telemetry_Conditional_21_For_3_Template, 13, 10, "li", 42, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("loadingEnd", ctx_r1.isLoadingMore())("disabled", !ctx_r1.hasMore());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.sessions());
  }
}
var Telemetry = class _Telemetry {
  telemetryApi = inject(TelemetryApi);
  platform = inject(Platform);
  dialog = inject(MatDialog);
  layoutState = inject(LayoutState);
  sessions = signal([], ...ngDevMode ? [{ debugName: "sessions" }] : []);
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  isLoadingMore = signal(false, ...ngDevMode ? [{ debugName: "isLoadingMore" }] : []);
  hasMore = signal(true, ...ngDevMode ? [{ debugName: "hasMore" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  currentPage = 0;
  pageSize = 10;
  showAllEvents = signal(false, ...ngDevMode ? [{ debugName: "showAllEvents" }] : []);
  events = signal([], ...ngDevMode ? [{ debugName: "events" }] : []);
  eventsLoading = signal(false, ...ngDevMode ? [{ debugName: "eventsLoading" }] : []);
  eventsLoadingMore = signal(false, ...ngDevMode ? [{ debugName: "eventsLoadingMore" }] : []);
  eventsHasMore = signal(true, ...ngDevMode ? [{ debugName: "eventsHasMore" }] : []);
  eventsErrorMessage = signal("", ...ngDevMode ? [{ debugName: "eventsErrorMessage" }] : []);
  eventsPage = 0;
  selectedType = signal(null, ...ngDevMode ? [{ debugName: "selectedType" }] : []);
  selectedSuccess = signal(null, ...ngDevMode ? [{ debugName: "selectedSuccess" }] : []);
  headerHeight = this.layoutState.headerHeight;
  activityTypes = TELEMETRY_ACTIVITY_TYPES;
  apiResults = TELEMETRY_ACTIVITY_TYPES.find((type) => type.value === "API_CALL")?.options ?? [];
  constructor() {
    if (this.platform.isBrowser())
      this.loadSessions();
  }
  loadMore() {
    if (!this.hasMore() || this.isLoading() || this.isLoadingMore())
      return;
    this.currentPage++;
    this.isLoadingMore.set(true);
    this.loadSessions();
  }
  changeView(showAllEvents) {
    this.showAllEvents.set(showAllEvents);
    if (showAllEvents && !this.events().length && !this.eventsLoading()) {
      this.eventsLoading.set(true);
      this.loadEvents();
    }
  }
  loadMoreEvents() {
    if (!this.eventsHasMore() || this.eventsLoading() || this.eventsLoadingMore())
      return;
    this.eventsPage++;
    this.eventsLoadingMore.set(true);
    this.loadEvents();
  }
  filterEventsByType(type) {
    if (this.selectedType() === type)
      return;
    this.selectedType.set(type);
    this.selectedSuccess.set(null);
    this.resetAndLoadEvents();
  }
  filterEventsBySuccess(success) {
    if (this.selectedSuccess() === success)
      return;
    this.selectedSuccess.set(success);
    this.resetAndLoadEvents();
  }
  resetAndLoadEvents() {
    this.eventsPage = 0;
    this.events.set([]);
    this.eventsHasMore.set(true);
    this.eventsLoading.set(true);
    this.loadEvents();
  }
  selectedTypeLabel() {
    return this.activityTypes.find((type) => type.value === this.selectedType())?.label ?? "All action types";
  }
  selectedSuccessLabel() {
    return this.apiResults.find((result) => result.value === this.selectedSuccess())?.label ?? "All API results";
  }
  openSessionEvents(session) {
    this.dialog.open(SessionEventsDialog, {
      width: "70rem",
      maxWidth: "98vw",
      height: "95dvh",
      data: { session }
    });
  }
  deviceLabel(session) {
    return this.isInvalidBrowser(session.browser) ? session.platform : `${session.browser} \xB7 ${session.platform}`;
  }
  eventAuthor(event) {
    return {
      type: event.identityType,
      id: event.user?.id ?? event.identityId ?? 0,
      name: event.user?.name || event.user?.username || (event.identityType === "ANONYMOUS" ? "Anonymous" : `User #${event.identityId}`),
      username: event.user?.username,
      compressedProfileImageUrl: event.user?.compressedProfileImageUrl
    };
  }
  eventTitle(event) {
    if (event.type === "ROUTER_CHANGE")
      return `Opened ${event.activity["to"] || event.route}`;
    if (event.type === "API_CALL")
      return `${event.activity["method"] || "Request"} ${event.activity["url"] || event.name}`;
    return event.name.replace(/[_-]+/g, " ");
  }
  isFailure(event) {
    return event.type === "ERROR" || event.type === "WEBSOCKET_ERROR" || event.type === "NETWORK_ERROR" || event.activity["success"] === false;
  }
  isNetworkRestored(event) {
    return event.type === "NETWORK_RESTORED";
  }
  isInvalidBrowser(browser) {
    return /not.?a.?brand/i.test(browser);
  }
  loadEvents() {
    this.eventsErrorMessage.set("");
    this.telemetryApi.getAll(__spreadValues(__spreadValues({
      page: this.eventsPage,
      size: this.pageSize,
      sort: "id,desc"
    }, this.selectedType() ? { type: this.selectedType() } : {}), this.selectedSuccess() !== null ? { success: this.selectedSuccess() } : {})).subscribe({
      next: (response) => {
        this.events.update((events) => [...events, ...response.content]);
        this.eventsHasMore.set(!response.last);
        this.eventsLoading.set(false);
        this.eventsLoadingMore.set(false);
      },
      error: (error) => {
        console.error("Error loading telemetry events", error);
      }
    });
  }
  loadSessions() {
    this.errorMessage.set("");
    this.telemetryApi.getLocalSessions({
      page: this.currentPage,
      size: this.pageSize,
      sort: "lastSeenAt,desc"
    }).subscribe({
      next: (response) => {
        this.sessions.update((sessions) => [...sessions, ...response.content]);
        this.hasMore.set(!response.last);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: (error) => {
        console.error("Error loading telemetry sessions", error);
      }
    });
  }
  static \u0275fac = function Telemetry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Telemetry)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Telemetry, selectors: [["app-telemetry"]], decls: 22, vars: 19, consts: [["actionTypeMenu", "matMenu"], ["apiResultMenu", "matMenu"], [1, "u-responsive-padding-xy"], [1, "u-container-2", "mx-auto"], ["role", "note", 1, "mb-6", "rounded-xl", "border", "border-cyan-200/40", "bg-cyan-500/20", "px-4", "py-3", "text-sm", "text-white", "shadow-sm", "backdrop-blur-sm"], [1, "text-center"], [1, "mb-6", "text-center", "text-white"], [1, "mb-2", "text-2xl", "font-bold"], [1, "text-white/75"], [1, "sticky", "z-10", "mb-6", "flex", "items-center", "justify-between", "gap-3", "rounded-xl", "border", "border-white/20", "bg-white/15", "px-2", "py-1", "shadow-lg", "backdrop-blur-3xl"], ["role", "group", "aria-label", "Telemetry view", 1, "flex", "w-fit", "rounded-xl", "border", "border-white/25", "bg-black/10", "p-1", "shadow-sm"], ["type", "button", 1, "rounded-lg", "px-4", "py-2", "text-sm", "font-semibold", "transition", 3, "click"], [1, "flex", "justify-center", "py-16"], [1, "rounded-xl", "border", "border-white/15", "bg-white/10", "px-4", "py-12", "text-center", "text-white/80", "backdrop-blur-sm"], ["spinnerClass", "stroke-white", 3, "loadingEnd", "disabled"], [1, "flex", "min-w-0", "justify-end", "gap-2"], ["type", "button", "aria-label", "Filter by action type", 1, "min-w-0", "truncate", "rounded-lg", "border", "border-white/25", "bg-white/15", "px-4", "py-2", "text-left", "text-sm", "font-semibold", "text-white", "shadow-sm", "transition", "hover:bg-white/25", 3, "matMenuTriggerFor"], ["aria-hidden", "true", 1, "ml-2"], ["type", "button", "aria-label", "Filter API calls by result", 1, "min-w-0", "truncate", "rounded-lg", "border", "border-white/25", "bg-white/15", "px-4", "py-2", "text-left", "text-sm", "font-semibold", "text-white", "shadow-sm", "transition", "hover:bg-white/25", 3, "matMenuTriggerFor"], ["xPosition", "before"], [1, "rounded-lg", "border", "border-white/25", "bg-white/15", "p-1", "shadow-lg", "backdrop-blur-3xl"], ["mat-menu-item", "", "type", "button", 1, "rounded-md", "transition-colors", 3, "bg-violet-200!", "text-violet-800!", "bg-transparent!", "text-white/75!", "hover:bg-white/15!", "hover:text-white!"], ["mat-menu-item", "", "type", "button", 1, "rounded-md", "transition-colors", 3, "click"], [1, "u-spinner", "border-b-white"], ["role", "alert"], [1, "text-lg", "font-semibold", "text-white"], ["spinnerClass", "stroke-white", 3, "reachedEnd", "loadingEnd", "disabled"], [1, "space-y-3"], [1, "rounded-xl", "border", "border-white/15", "bg-white/15", "p-4", "text-white", "backdrop-blur-sm", 3, "border-rose-300", "border-color", "background-color"], [1, "rounded-xl", "border", "border-white/15", "bg-white/15", "p-4", "text-white", "backdrop-blur-sm"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "min-w-0", "flex-1", 3, "author", "classes"], [1, "shrink-0", "pt-2", "text-right", "text-xs", "text-white/70"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "rounded", "bg-violet-200", "px-2", "py-1", "text-xs", "font-semibold", "text-violet-800"], [1, "rounded", "bg-rose-200", "px-2", "py-1", "text-xs", "font-semibold", "text-rose-800"], [1, "rounded", "bg-emerald-200", "px-2", "py-1", "text-xs", "font-semibold", "text-emerald-800"], [1, "mt-2", "break-words", "font-semibold"], [1, "mt-1", "break-all", "text-sm", "text-white/70"], [1, "mt-3", "border-t", "border-white/15", "pt-2"], [1, "cursor-pointer", "text-sm", "font-medium", "text-cyan-100"], [1, "mt-2", "max-h-72", "overflow-auto", "whitespace-pre-wrap", "break-words", "rounded-lg", "bg-black/20", "p-3", "text-xs", "text-white/80"], [1, "rounded-xl", "border", "border-white/15", "bg-white/15", "p-4", "text-white", "backdrop-blur-sm", "transition", "hover:bg-white/20"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "min-w-0"], [1, "rounded-full", "bg-cyan-400/20", "px-2", "py-1", "text-xs", "font-semibold", "text-cyan-100", "ring-1", "ring-cyan-200/30"], [1, "mt-2", "text-sm", "text-white/75"], [1, "mt-1", "text-xs", "text-white/60"], ["type", "button", 1, "u-btn-primary-cyan", "shrink-0", 3, "click"]], template: function Telemetry_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 2)(1, "div", 3)(2, "div", 4)(3, "p", 5);
      \u0275\u0275text(4, " Telemetry data should normally remain private. This page is public only to demonstrate telemetry in this demo project. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 6)(6, "h1", 7);
      \u0275\u0275text(7, "Telemetry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "button", 11);
      \u0275\u0275listener("click", function Telemetry_Template_button_click_12_listener() {
        return ctx.changeView(false);
      });
      \u0275\u0275text(13, " Sessions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function Telemetry_Template_button_click_14_listener() {
        return ctx.changeView(true);
      });
      \u0275\u0275text(15, " All events ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(16, Telemetry_Conditional_16_Template, 16, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, Telemetry_Conditional_17_Template, 4, 1)(18, Telemetry_Conditional_18_Template, 2, 0, "div", 12)(19, Telemetry_Conditional_19_Template, 3, 1, "div", 13)(20, Telemetry_Conditional_20_Template, 3, 0, "div", 13)(21, Telemetry_Conditional_21_Template, 4, 2, "app-infinite-scroll", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.showAllEvents() ? "Browse all recorded events." : "Select a session to see every recorded event in order.");
      \u0275\u0275advance();
      \u0275\u0275styleProp("top", ctx.headerHeight(), "px");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-violet-200", !ctx.showAllEvents())("text-violet-800", !ctx.showAllEvents())("text-white/75", ctx.showAllEvents());
      \u0275\u0275attribute("aria-pressed", !ctx.showAllEvents());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-violet-200", ctx.showAllEvents())("text-violet-800", ctx.showAllEvents())("text-white/75", !ctx.showAllEvents());
      \u0275\u0275attribute("aria-pressed", ctx.showAllEvents());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showAllEvents() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAllEvents() ? 17 : ctx.isLoading() ? 18 : ctx.errorMessage() ? 19 : !ctx.sessions().length ? 20 : 21);
    }
  }, dependencies: [MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, AuthorSummary, InfiniteScroll, DatePipe, JsonPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=telemetry.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Telemetry, [{
    type: Component,
    args: [{ selector: "app-telemetry", imports: [DatePipe, JsonPipe, MatMenuModule, AuthorSummary, InfiniteScroll], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="u-responsive-padding-xy">
  <div class="u-container-2 mx-auto">
    <div class="mb-6 rounded-xl border border-cyan-200/40 bg-cyan-500/20 px-4 py-3 text-sm text-white shadow-sm backdrop-blur-sm"
      role="note">
      <p class="text-center">
        Telemetry data should normally remain private. This page is public only to demonstrate telemetry in this demo project.
      </p>
    </div>

    <div class="mb-6 text-center text-white">
      <h1 class="mb-2 text-2xl font-bold">Telemetry</h1>
      <p class="text-white/75">{{ showAllEvents() ? 'Browse all recorded events.' : 'Select a session to see every recorded event in order.' }}</p>
    </div>

    <div class="sticky z-10 mb-6 flex items-center justify-between gap-3 rounded-xl border border-white/20 bg-white/15 px-2 py-1 shadow-lg backdrop-blur-3xl"
      [style.top.px]="headerHeight()">
      <div class="flex w-fit rounded-xl border border-white/25 bg-black/10 p-1 shadow-sm" role="group"
        aria-label="Telemetry view">
        <button type="button" class="rounded-lg px-4 py-2 text-sm font-semibold transition"
          [class.bg-violet-200]="!showAllEvents()" [class.text-violet-800]="!showAllEvents()"
          [class.text-white/75]="showAllEvents()" [attr.aria-pressed]="!showAllEvents()"
          (click)="changeView(false)">
          Sessions
        </button>
        <button type="button" class="rounded-lg px-4 py-2 text-sm font-semibold transition"
          [class.bg-violet-200]="showAllEvents()" [class.text-violet-800]="showAllEvents()"
          [class.text-white/75]="!showAllEvents()" [attr.aria-pressed]="showAllEvents()"
          (click)="changeView(true)">
          All events
        </button>
      </div>
      @if (showAllEvents()) {
        <div class="flex min-w-0 justify-end gap-2">
          <button type="button" [matMenuTriggerFor]="actionTypeMenu"
            class="min-w-0 truncate rounded-lg border border-white/25 bg-white/15 px-4 py-2 text-left text-sm font-semibold text-white shadow-sm transition hover:bg-white/25"
            aria-label="Filter by action type">
            {{ selectedTypeLabel() }} <span class="ml-2" aria-hidden="true">\u25BE</span>
          </button>
          @if (selectedType() === 'API_CALL') {
            <button type="button" [matMenuTriggerFor]="apiResultMenu"
              class="min-w-0 truncate rounded-lg border border-white/25 bg-white/15 px-4 py-2 text-left text-sm font-semibold text-white shadow-sm transition hover:bg-white/25"
              aria-label="Filter API calls by result">
              {{ selectedSuccessLabel() }} <span class="ml-2" aria-hidden="true">\u25BE</span>
            </button>
          }
        </div>
        <mat-menu #actionTypeMenu="matMenu" xPosition="before">
          <div class="rounded-lg border border-white/25 bg-white/15 p-1 shadow-lg backdrop-blur-3xl">
            @for (activityType of activityTypes; track activityType.label) {
              <button mat-menu-item type="button"
                class="rounded-md transition-colors"
                [class.bg-violet-200!]="selectedType() === activityType.value"
                [class.text-violet-800!]="selectedType() === activityType.value"
                [class.bg-transparent!]="selectedType() !== activityType.value"
                [class.text-white/75!]="selectedType() !== activityType.value"
                [class.hover:bg-white/15!]="selectedType() !== activityType.value"
                [class.hover:text-white!]="selectedType() !== activityType.value"
                (click)="filterEventsByType(activityType.value)">
                {{ activityType.label }}
              </button>
            }
          </div>
        </mat-menu>
        <mat-menu #apiResultMenu="matMenu" xPosition="before">
          <div class="rounded-lg border border-white/25 bg-white/15 p-1 shadow-lg backdrop-blur-3xl">
            @for (apiResult of apiResults; track apiResult.label) {
              <button mat-menu-item type="button"
                class="rounded-md transition-colors"
                [class.bg-violet-200!]="selectedSuccess() === apiResult.value"
                [class.text-violet-800!]="selectedSuccess() === apiResult.value"
                [class.bg-transparent!]="selectedSuccess() !== apiResult.value"
                [class.text-white/75!]="selectedSuccess() !== apiResult.value"
                [class.hover:bg-white/15!]="selectedSuccess() !== apiResult.value"
                [class.hover:text-white!]="selectedSuccess() !== apiResult.value"
                (click)="filterEventsBySuccess(apiResult.value)">
                {{ apiResult.label }}
              </button>
            }
          </div>
        </mat-menu>
      }
    </div>

    @if (showAllEvents()) {
      @if (eventsLoading()) {
        <div class="flex justify-center py-16"><div class="u-spinner border-b-white"></div></div>
      } @else if (eventsErrorMessage()) {
        <div class="rounded-xl border border-white/15 bg-white/10 px-4 py-12 text-center text-white/80 backdrop-blur-sm">
          <p role="alert">{{ eventsErrorMessage() }}</p>
        </div>
      } @else if (!events().length) {
        <div class="rounded-xl border border-white/15 bg-white/10 px-4 py-12 text-center text-white/80 backdrop-blur-sm">
          <p class="text-lg font-semibold text-white">No telemetry events found.</p>
        </div>
      } @else {
        <app-infinite-scroll [loadingEnd]="eventsLoadingMore()" [disabled]="!eventsHasMore()"
          spinnerClass="stroke-white" (reachedEnd)="loadMoreEvents()">
          <ol class="space-y-3">
            @for (event of events(); track event.id) {
              <li class="rounded-xl border border-white/15 bg-white/15 p-4 text-white backdrop-blur-sm"
                [class.border-rose-300]="isFailure(event)"
                [style.border-color]="isNetworkRestored(event) ? 'rgb(110 231 183)' : null"
                [style.background-color]="isFailure(event) ? 'rgb(244 63 94 / 0.18)' : null">
                <div class="flex items-start justify-between gap-3">
                  <app-author-summary class="min-w-0 flex-1" [author]="eventAuthor(event)"
                    [classes]="{ authorNameColor: 'text-white' }"></app-author-summary>
                  <time class="shrink-0 pt-2 text-right text-xs text-white/70" [attr.datetime]="event.createdAt">
                    {{ event.createdAt | date:'MMM d, y, h:mm a' }}
                  </time>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                  <span class="rounded bg-violet-200 px-2 py-1 text-xs font-semibold text-violet-800">{{ event.type }}</span>
                  @if (isFailure(event)) {
                    <span class="rounded bg-rose-200 px-2 py-1 text-xs font-semibold text-rose-800">Failed</span>
                  } @else if (isNetworkRestored(event)) {
                    <span class="rounded bg-emerald-200 px-2 py-1 text-xs font-semibold text-emerald-800">Restored</span>
                  }
                </div>
                <h2 class="mt-2 break-words font-semibold">{{ eventTitle(event) }}</h2>
                @if (event.route && event.route !== '/') {
                  <p class="mt-1 break-all text-sm text-white/70">{{ event.route }}</p>
                }
                <details class="mt-3 border-t border-white/15 pt-2">
                  <summary class="cursor-pointer text-sm font-medium text-cyan-100">Event details #{{ event.id }}</summary>
                  <pre class="mt-2 max-h-72 overflow-auto whitespace-pre-wrap break-words rounded-lg bg-black/20 p-3 text-xs text-white/80">{{ event.activity | json }}</pre>
                </details>
              </li>
            }
          </ol>
        </app-infinite-scroll>
      }
    } @else if (isLoading()) {
      <div class="flex justify-center py-16"><div class="u-spinner border-b-white"></div></div>
    } @else if (errorMessage()) {
      <div class="rounded-xl border border-white/15 bg-white/10 px-4 py-12 text-center text-white/80 backdrop-blur-sm">
        <p role="alert">{{ errorMessage() }}</p>
      </div>
    } @else if (!sessions().length) {
      <div class="rounded-xl border border-white/15 bg-white/10 px-4 py-12 text-center text-white/80 backdrop-blur-sm">
        <p class="text-lg font-semibold text-white">No telemetry sessions found.</p>
      </div>
    } @else {
      <app-infinite-scroll [loadingEnd]="isLoadingMore()" [disabled]="!hasMore()"
        spinnerClass="stroke-white" (reachedEnd)="loadMore()">
        <ul class="space-y-3">
          @for (session of sessions(); track session.localSessionId) {
            <li class="rounded-xl border border-white/15 bg-white/15 p-4 text-white backdrop-blur-sm transition hover:bg-white/20">
              <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div class="min-w-0">
                  <span class="rounded-full bg-cyan-400/20 px-2 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-cyan-200/30">
                    {{ session.activityCount }} events
                  </span>
                  <p class="mt-2 text-sm text-white/75">{{ deviceLabel(session) }}</p>
                  <p class="mt-1 text-xs text-white/60">
                    {{ session.firstSeenAt | date:'MMM d, y, h:mm a' }} \u2013 {{ session.lastSeenAt | date:'MMM d, y, h:mm a' }}
                  </p>
                </div>
                <button type="button" class="u-btn-primary-cyan shrink-0" (click)="openSessionEvents(session)">
                  Show Events
                </button>
              </div>
            </li>
          }
        </ul>
      </app-infinite-scroll>
    }
  </div>
</section>
`, styles: ["/* src/app/features/telemetry/telemetry.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=telemetry.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Telemetry, { className: "Telemetry", filePath: "src/app/features/telemetry/telemetry.ts", lineNumber: 22 });
})();
export {
  Telemetry
};
//# sourceMappingURL=chunk-4VCVUPU4.js.map
