import {
  AuthAction
} from "./chunk-6IPXNW6H.js";
import {
  InfiniteScroll,
  userProfileLink
} from "./chunk-ZZC3JEQU.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-OL35HKYF.js";
import {
  Url
} from "./chunk-YGCY7AWU.js";
import {
  ProfileApiService
} from "./chunk-F2LNDDGC.js";
import {
  DialogHeader,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContent,
  MatDialogModule,
  TelemetryClick
} from "./chunk-ALZZ5FDG.js";
import {
  CapitalizeWordsPipe
} from "./chunk-FQUAC3NH.js";
import {
  Thumbnail
} from "./chunk-6NRHWHNW.js";
import {
  FaIconComponent,
  FontAwesomeModule,
  faClock,
  faCopy,
  faShareNodes,
  faUserCheck,
  faUserMinus,
  faUserPlus,
  faUserXmark,
  faUsers
} from "./chunk-65M5LICJ.js";
import {
  LoadingButton
} from "./chunk-UMKDZD2E.js";
import {
  Auth,
  LOGIN_ROUTE,
  MatSnackBar
} from "./chunk-SDFCVRZT.js";
import {
  environment,
  toHttpParams
} from "./chunk-5QQ5IMAE.js";
import {
  Router,
  RouterLink
} from "./chunk-BQE5RZFF.js";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  LowerCasePipe,
  NgClass,
  NgTemplateOutlet
} from "./chunk-CYBPL3OT.js";
import {
  Component,
  Injectable,
  Input,
  computed,
  effect,
  finalize,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
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

// src/app/features/connection/services/connection-api.ts
var ConnectionApi = class _ConnectionApi {
  httpClient = inject(HttpClient);
  baseApiUrl = `${environment.rootApiUrl}/connection`;
  getAll(params) {
    return this.httpClient.get(`${this.baseApiUrl}/all`, {
      params: toHttpParams(params)
    });
  }
  add(body) {
    return this.httpClient.post(`${this.baseApiUrl}/add`, body);
  }
  updateStatus(body) {
    return this.httpClient.patch(`${this.baseApiUrl}/status`, body);
  }
  getStatus(userId) {
    return this.httpClient.get(`${this.baseApiUrl}/status`, {
      params: toHttpParams({ userId })
    });
  }
  static \u0275fac = function ConnectionApi_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnectionApi)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConnectionApi, factory: _ConnectionApi.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectionApi, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/connection/components/connection-request-button/connection-request-button.ts
var _c0 = (a0) => ({ button: a0 });
var _forTrack0 = ($index, $item) => $item.text;
function ConnectionRequestButton_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function ConnectionRequestButton_Conditional_2_Conditional_1_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(action_r2.description);
  }
}
function ConnectionRequestButton_Conditional_2_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ConnectionRequestButton_Conditional_2_Conditional_1_For_6_Conditional_0_Template, 2, 1, "p", 10);
    \u0275\u0275elementStart(1, "button", 11);
    \u0275\u0275listener("click", function ConnectionRequestButton_Conditional_2_Conditional_1_For_6_Template_button_click_1_listener() {
      const action_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onStatusActionSelect(action_r2));
    });
    \u0275\u0275elementContainer(2, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const buttonContent_r4 = \u0275\u0275reference(4);
    \u0275\u0275conditional(action_r2.description ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", buttonContent_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c0, action_r2));
  }
}
function ConnectionRequestButton_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275elementContainer(1, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-menu", 8, 1)(4, "div", 9);
    \u0275\u0275repeaterCreate(5, ConnectionRequestButton_Conditional_2_Conditional_1_For_6_Template, 3, 5, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const statusMenu_r5 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const buttonContent_r4 = \u0275\u0275reference(4);
    \u0275\u0275property("matMenuTriggerFor", statusMenu_r5)("disabled", ctx_r2.isSubmitting() || ctx_r2.buttonStatus().disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buttonContent_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c0, ctx_r2.buttonStatus()));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.statusActions());
  }
}
function ConnectionRequestButton_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ConnectionRequestButton_Conditional_2_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onButtonClick());
    });
    \u0275\u0275elementContainer(1, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    const buttonContent_r4 = \u0275\u0275reference(4);
    \u0275\u0275property("disabled", ctx_r2.isSubmitting() || ctx_r2.buttonStatus().disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buttonContent_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c0, ctx_r2.buttonStatus()));
  }
}
function ConnectionRequestButton_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-loading-button", 4);
    \u0275\u0275conditionalCreate(1, ConnectionRequestButton_Conditional_2_Conditional_1_Template, 7, 6)(2, ConnectionRequestButton_Conditional_2_Conditional_2_Template, 2, 5, "button", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("loading", ctx_r2.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.statusActions().length ? 1 : 2);
  }
}
function ConnectionRequestButton_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "fa-icon", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r7 = ctx.button;
    \u0275\u0275property("ngClass", button_r7.themeClass);
    \u0275\u0275advance();
    \u0275\u0275property("icon", button_r7.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", button_r7.text, " ");
  }
}
var CONNECTION_STATUS_ACTIONS = {
  PENDING_RECEIVED: [
    {
      icon: faUserCheck,
      themeClass: "u-btn-primary-emerald",
      text: "Accept",
      status: "ACCEPTED",
      successMessage: "Connection request accepted"
    },
    {
      icon: faUserXmark,
      themeClass: "u-btn-secondary-gray",
      text: "Reject",
      status: "REJECTED",
      successMessage: "Connection request rejected"
    }
  ],
  PENDING_SENT: [
    {
      icon: faUserMinus,
      themeClass: "u-btn-secondary-gray",
      text: "Cancel Request",
      status: "CANCELED",
      description: "This connection request is waiting for a response.",
      successMessage: "Connection request canceled"
    }
  ],
  ACCEPTED: [
    {
      icon: faUserMinus,
      themeClass: "u-btn-danger-rose",
      text: "Remove Connection",
      status: "CANCELED",
      description: "Remove this user from your connections.",
      successMessage: "Connection removed"
    }
  ],
  REJECTED_SENT: [
    {
      icon: faUserPlus,
      themeClass: "u-btn-primary-emerald",
      text: "Resend Request",
      status: "PENDING",
      description: "Send this connection request again.",
      successMessage: "Connection request resent"
    }
  ],
  REJECTED_RECEIVED: [
    {
      icon: faUserCheck,
      themeClass: "u-btn-primary-emerald",
      text: "Accept Request",
      status: "ACCEPTED",
      description: "Accept the connection request you previously rejected.",
      successMessage: "Connection request accepted"
    }
  ]
};
var CONNECTION_BUTTON_STATUS_LIST = {
  NONE: {
    icon: faUserPlus,
    themeClass: "u-btn-primary-emerald",
    text: "Connect",
    disabled: false
  },
  PENDING: {
    icon: faClock,
    themeClass: "u-btn-secondary-gray",
    text: "Pending",
    disabled: true
  },
  ACCEPTED: {
    icon: faUserCheck,
    themeClass: "u-btn-secondary-gray",
    text: "Connected",
    disabled: true
  },
  REJECTED: {
    icon: faUserXmark,
    themeClass: "u-btn-primary-emerald",
    text: "Connect",
    disabled: false
  },
  CANCELED: {
    icon: faUserMinus,
    themeClass: "u-btn-primary-emerald",
    text: "Connect",
    disabled: false
  }
};
var ConnectionRequestButton = class _ConnectionRequestButton {
  connectionApi = inject(ConnectionApi);
  snackBar = inject(MatSnackBar);
  auth = inject(Auth);
  router = inject(Router);
  statusLoadStarted = false;
  userId = input.required(...ngDevMode ? [{ debugName: "userId" }] : []);
  connection = input(...ngDevMode ? [void 0, { debugName: "connection" }] : []);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  isStatusLoading = signal(false, ...ngDevMode ? [{ debugName: "isStatusLoading" }] : []);
  currentConnection = signal(null, ...ngDevMode ? [{ debugName: "currentConnection" }] : []);
  connectionStatus = signal("NONE", ...ngDevMode ? [{ debugName: "connectionStatus" }] : []);
  statusActions = computed(() => {
    const connection = this.currentConnection();
    const currentUserId = this.auth.authState().user?.id;
    if (connection?.status === "PENDING" && connection.receiverUserId === currentUserId) {
      return CONNECTION_STATUS_ACTIONS["PENDING_RECEIVED"];
    }
    if (connection?.status === "PENDING" && connection.senderUserId === currentUserId) {
      return CONNECTION_STATUS_ACTIONS["PENDING_SENT"];
    }
    if (connection?.status === "ACCEPTED") {
      return CONNECTION_STATUS_ACTIONS["ACCEPTED"];
    }
    if (connection?.status === "REJECTED") {
      return connection.senderUserId === currentUserId ? CONNECTION_STATUS_ACTIONS["REJECTED_SENT"] : CONNECTION_STATUS_ACTIONS["REJECTED_RECEIVED"];
    }
    return [];
  }, ...ngDevMode ? [{ debugName: "statusActions" }] : []);
  buttonStatus = computed(() => {
    const connection = this.currentConnection();
    const currentUserId = this.auth.authState().user?.id;
    if (connection?.status === "PENDING" && connection.receiverUserId === currentUserId) {
      return {
        icon: faUserCheck,
        themeClass: "u-btn-primary-emerald",
        text: "Respond to Request",
        disabled: false
      };
    }
    if (connection?.status === "PENDING" && connection.senderUserId === currentUserId) {
      return {
        icon: faClock,
        themeClass: "u-btn-secondary-gray",
        text: "Pending",
        disabled: false
      };
    }
    if (connection?.status === "ACCEPTED") {
      return {
        icon: faUserCheck,
        themeClass: "u-btn-secondary-gray",
        text: "Connected",
        disabled: false
      };
    }
    if (connection?.status === "REJECTED") {
      return {
        icon: faUserXmark,
        themeClass: "u-btn-secondary-gray",
        text: connection.senderUserId === currentUserId ? "Rejected" : "You Rejected",
        disabled: false
      };
    }
    return CONNECTION_BUTTON_STATUS_LIST[this.connectionStatus()];
  }, ...ngDevMode ? [{ debugName: "buttonStatus" }] : []);
  constructor() {
    effect(() => {
      const connection = this.connection();
      if (connection) {
        this.setConnection(connection);
        return;
      }
      if (this.statusLoadStarted) {
        return;
      }
      this.statusLoadStarted = true;
      this.loadConnectionStatus(this.userId());
    });
  }
  loadConnectionStatus(userId) {
    this.isStatusLoading.set(true);
    this.connectionApi.getStatus(userId).subscribe({
      next: (connection) => {
        this.setConnection(connection);
      },
      error: (err) => {
        if (err?.status !== 401) {
          console.error("Error loading connection status", err);
        }
        this.setConnection(null);
      }
    });
  }
  onButtonClick() {
    const connection = this.currentConnection();
    if (!connection) {
      this.onConnect();
      return;
    }
    if (connection.status === "CANCELED") {
      this.updateConnectionStatus(connection, "PENDING", "Connection request sent");
    }
  }
  onConnect() {
    if (this.auth.authState().status !== "authenticated") {
      this.router.navigate([LOGIN_ROUTE], {
        queryParams: { returnUrl: this.router.url }
      });
      return;
    }
    if (this.buttonStatus().disabled) {
      return;
    }
    this.isSubmitting.set(true);
    this.connectionApi.add({ receiverUserId: this.userId() }).subscribe({
      next: (connection) => {
        this.snackBar.open("Connection request sent", "\u2716", {
          duration: 3e3,
          panelClass: "snackbar-success"
        });
        this.setConnection(connection);
        this.isSubmitting.set(false);
      },
      error: (err) => {
        console.error("Error sending connection request", err);
        const message = err.error?.message || err.error?.error || err.error || "Failed to send connection request";
        this.snackBar.open(message, "\u2716", {
          duration: 3e3,
          panelClass: "snackbar-error"
        });
        this.isSubmitting.set(false);
      }
    });
  }
  onStatusActionSelect(action) {
    if (!action.status) {
      return;
    }
    const connection = this.currentConnection();
    if (!connection) {
      return;
    }
    this.updateConnectionStatus(connection, action.status, action.successMessage);
  }
  updateConnectionStatus(connection, status, successMessage) {
    this.isSubmitting.set(true);
    this.connectionApi.updateStatus({ id: connection.id, status }).subscribe({
      next: (connection2) => {
        this.setConnection(connection2);
        this.snackBar.open(successMessage || "Connection request updated", "\u2716", {
          duration: 3e3,
          panelClass: "snackbar-success"
        });
        this.isSubmitting.set(false);
      },
      error: (err) => {
        console.error("Error updating connection request", err);
        const message = err.error?.message || err.error?.error || err.error || "Failed to update connection request";
        this.snackBar.open(message, "\u2716", {
          duration: 3e3,
          panelClass: "snackbar-error"
        });
        this.isSubmitting.set(false);
      }
    });
  }
  setConnection(connection) {
    this.currentConnection.set(connection || null);
    this.connectionStatus.set(connection?.status || "NONE");
    this.isStatusLoading.set(false);
  }
  static \u0275fac = function ConnectionRequestButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnectionRequestButton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConnectionRequestButton, selectors: [["app-connection-request-button"]], inputs: { userId: [1, "userId"], connection: [1, "connection"] }, decls: 5, vars: 2, consts: [["buttonContent", ""], ["statusMenu", "matMenu"], ["theme", "light", "menuContainerClass", "w-64", "message", "Sign in or create an account to connect with this user.", 3, "allowGuest"], ["aria-label", "Loading connection status", 1, "h-10", "w-32", "animate-pulse", "rounded-lg", "bg-gray-200"], ["spinnerClass", "stroke-white", 3, "loading"], ["type", "button", 3, "disabled"], ["type", "button", 3, "matMenuTriggerFor", "disabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["backdropClass", "bg-black/50!", 1, "bg-white!"], [1, "w-64", "bg-white", "p-4"], [1, "mb-3", "text-sm", "text-gray-600"], ["type", "button", "mat-menu-item", "", 1, "p-0!", "w-full!", 3, "click"], ["type", "button", 3, "click", "disabled"], [1, "flex", "items-center", "gap-2", 3, "ngClass"], [3, "icon"]], template: function ConnectionRequestButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-auth-action", 2);
      \u0275\u0275conditionalCreate(1, ConnectionRequestButton_Conditional_1_Template, 1, 0, "div", 3)(2, ConnectionRequestButton_Conditional_2_Template, 3, 2, "app-loading-button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ConnectionRequestButton_ng_template_3_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("allowGuest", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isStatusLoading() ? 1 : 2);
    }
  }, dependencies: [FontAwesomeModule, FaIconComponent, LoadingButton, NgClass, NgTemplateOutlet, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, AuthAction], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectionRequestButton, [{
    type: Component,
    args: [{ selector: "app-connection-request-button", imports: [FontAwesomeModule, LoadingButton, NgClass, NgTemplateOutlet, MatMenuModule, AuthAction], template: '<app-auth-action [allowGuest]="false" theme="light" menuContainerClass="w-64"\n  message="Sign in or create an account to connect with this user.">\n@if (isStatusLoading()) {\n<div class="h-10 w-32 animate-pulse rounded-lg bg-gray-200" aria-label="Loading connection status"></div>\n} @else {\n<app-loading-button [loading]="isSubmitting()" spinnerClass="stroke-white">\n  @if (statusActions().length) {\n    <button type="button" [matMenuTriggerFor]="statusMenu"\n      [disabled]="isSubmitting() || buttonStatus().disabled">\n      <ng-container [ngTemplateOutlet]="buttonContent"\n        [ngTemplateOutletContext]="{ button: buttonStatus() }"></ng-container>\n    </button>\n\n    <mat-menu #statusMenu="matMenu" class="bg-white!" backdropClass="bg-black/50!">\n      <div class="w-64 bg-white p-4">\n        @for (action of statusActions(); track action.text) {\n          @if (action.description) {\n            <p class="mb-3 text-sm text-gray-600">{{ action.description }}</p>\n          }\n          <button type="button" mat-menu-item class="p-0! w-full!" (click)="onStatusActionSelect(action)">\n            <ng-container [ngTemplateOutlet]="buttonContent"\n              [ngTemplateOutletContext]="{ button: action }"></ng-container>\n          </button>\n        }\n      </div>\n    </mat-menu>\n  } @else {\n    <button type="button" (click)="onButtonClick()"\n      [disabled]="isSubmitting() || buttonStatus().disabled">\n      <ng-container [ngTemplateOutlet]="buttonContent"\n        [ngTemplateOutletContext]="{ button: buttonStatus() }"></ng-container>\n    </button>\n  }\n</app-loading-button>\n}\n</app-auth-action>\n\n<ng-template #buttonContent let-button="button">\n  <div class="flex items-center gap-2" [ngClass]="button.themeClass">\n    <fa-icon [icon]="button.icon"></fa-icon>\n    {{ button.text }}\n  </div>\n</ng-template>\n' }]
  }], () => [], { userId: [{ type: Input, args: [{ isSignal: true, alias: "userId", required: true }] }], connection: [{ type: Input, args: [{ isSignal: true, alias: "connection", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConnectionRequestButton, { className: "ConnectionRequestButton", filePath: "src/app/features/connection/components/connection-request-button/connection-request-button.ts", lineNumber: 129 });
})();

// src/app/features/connection/components/connection-list-dialog/connection-list-dialog.ts
var _forTrack02 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.connection.id;
function ConnectionListDialog_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ConnectionListDialog_Conditional_1_For_2_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectTab(tab_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.activeTab() === tab_r2.value ? "border-emerald-600 text-emerald-700" : "border-transparent text-gray-500 hover:text-gray-700")("disabled", ctx_r2.activeTab() === tab_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
  }
}
function ConnectionListDialog_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 1);
    \u0275\u0275repeaterCreate(1, ConnectionListDialog_Conditional_1_For_2_Template, 2, 3, "button", 6, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.tabs);
  }
}
function ConnectionListDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function ConnectionListDialog_Conditional_4_For_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-connection-request-button", 19);
  }
  if (rf & 2) {
    const connectionItem_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("userId", connectionItem_r5.user.id)("connection", connectionItem_r5.connection);
  }
}
function ConnectionListDialog_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 11)(1, "div", 12)(2, "a", 13);
    \u0275\u0275element(3, "app-thumbnail", 14);
    \u0275\u0275elementStart(4, "div", 15)(5, "p", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 18);
    \u0275\u0275conditionalCreate(10, ConnectionListDialog_Conditional_4_For_3_Conditional_10_Template, 1, 2, "app-connection-request-button", 19);
    \u0275\u0275elementStart(11, "time", 20);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const connectionItem_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r2.userProfileLink(connectionItem_r5.user.username));
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r2.profileImageUrl(connectionItem_r5.user.compressedProfileImageUrl))("viewerImageUrl", ctx_r2.profileImageUrl(connectionItem_r5.user.profileImageUrl))("name", connectionItem_r5.user.name)("alt", connectionItem_r5.user.name || "User profile image");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(connectionItem_r5.user.name || "Unnamed user");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("@", connectionItem_r5.user.username || "unknown");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isOwnConnectionList() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("datetime", connectionItem_r5.connection.createdAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 10, connectionItem_r5.connection.createdAt, "medium"), " ");
  }
}
function ConnectionListDialog_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-infinite-scroll", 9);
    \u0275\u0275listener("reachedEnd", function ConnectionListDialog_Conditional_4_Template_app_infinite_scroll_reachedEnd_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadMore());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275repeaterCreate(2, ConnectionListDialog_Conditional_4_For_3_Template, 14, 13, "article", 11, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("useElementScroll", true)("loadingEnd", ctx_r2.isLoadingMore())("disabled", !ctx_r2.hasMore());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.connections());
  }
}
function ConnectionListDialog_Conditional_5_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No pending requests ");
  }
}
function ConnectionListDialog_Conditional_5_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No rejected requests ");
  }
}
function ConnectionListDialog_Conditional_5_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No connections yet ");
  }
}
function ConnectionListDialog_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "fa-icon", 21);
    \u0275\u0275elementStart(2, "p", 22);
    \u0275\u0275conditionalCreate(3, ConnectionListDialog_Conditional_5_Case_3_Template, 1, 0)(4, ConnectionListDialog_Conditional_5_Case_4_Template, 1, 0)(5, ConnectionListDialog_Conditional_5_Case_5_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.faUsers);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.activeTab()) === "pending" ? 3 : tmp_2_0 === "rejected" ? 4 : 5);
  }
}
var CONNECTION_TABS = [
  { value: "connections", label: "Connections" },
  { value: "pending", label: "Pending Requests" },
  { value: "rejected", label: "Rejected Requests" }
];
var ConnectionListDialog = class _ConnectionListDialog {
  connectionApi = inject(ConnectionApi);
  profileApi = inject(ProfileApiService);
  auth = inject(Auth);
  data = inject(MAT_DIALOG_DATA);
  userProfileLink = userProfileLink;
  authState = this.auth.authState;
  isOwnConnectionList = computed(() => this.authState().user?.id === this.data.userId, ...ngDevMode ? [{ debugName: "isOwnConnectionList" }] : []);
  tabs = CONNECTION_TABS;
  connections = signal([], ...ngDevMode ? [{ debugName: "connections" }] : []);
  activeTab = signal("connections", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  isLoadingMore = signal(false, ...ngDevMode ? [{ debugName: "isLoadingMore" }] : []);
  hasMore = signal(false, ...ngDevMode ? [{ debugName: "hasMore" }] : []);
  faUsers = faUsers;
  currentPage = 0;
  pageSize = 20;
  connectionsSubscription;
  constructor() {
    this.loadConnections();
  }
  loadMore() {
    if (!this.hasMore() || this.isLoadingMore()) {
      return;
    }
    this.currentPage++;
    this.isLoadingMore.set(true);
    this.loadConnections();
  }
  selectTab(tab) {
    if (tab === this.activeTab()) {
      return;
    }
    this.connectionsSubscription?.unsubscribe();
    this.activeTab.set(tab);
    this.currentPage = 0;
    this.connections.set([]);
    this.hasMore.set(false);
    this.isLoading.set(true);
    this.loadConnections();
  }
  profileImageUrl(url) {
    return this.profileApi.getPublicImageUrl(url);
  }
  loadConnections() {
    this.connectionsSubscription = this.connectionApi.getAll(__spreadProps(__spreadValues({}, this.tabQueryParams()), {
      page: this.currentPage,
      size: this.pageSize,
      sort: "updatedAt,desc"
    })).pipe(finalize(() => {
      this.isLoading.set(false);
      this.isLoadingMore.set(false);
    })).subscribe({
      next: (response) => {
        this.connections.update((connections) => [...connections, ...response.content]);
        this.hasMore.set(!response.last);
      },
      error: (error) => console.error("Error fetching connections", error)
    });
  }
  tabQueryParams() {
    switch (this.activeTab()) {
      case "pending":
        return { userId: this.data.userId, status: "PENDING" };
      case "rejected":
        return { userId: this.data.userId, status: "REJECTED" };
      default:
        return { userId: this.data.userId, status: "ACCEPTED" };
    }
  }
  static \u0275fac = function ConnectionListDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnectionListDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConnectionListDialog, selectors: [["app-connection-list-dialog"]], decls: 6, vars: 2, consts: [["containerClass", "u-responsive-padding-x py-2 shadow", "title", "Connections"], ["aria-label", "Connection lists", 1, "flex", "shrink-0", "overflow-x-auto", "border-b", "border-gray-200", "px-3"], [1, "flex!", "grow", "flex-col"], [1, "flex", "grow", "items-center", "justify-center"], ["spinnerClass", "stroke-gray-700", 1, "grow", "overflow-auto", "px-3", "py-4", 3, "useElementScroll", "loadingEnd", "disabled"], [1, "flex", "grow", "flex-col", "items-center", "justify-center", "py-16", "text-center", "text-gray-500"], ["type", "button", 1, "whitespace-nowrap", "border-b-2", "px-4", "py-3", "text-sm", "font-medium", "transition-colors", 3, "ngClass", "disabled"], ["type", "button", 1, "whitespace-nowrap", "border-b-2", "px-4", "py-3", "text-sm", "font-medium", "transition-colors", 3, "click", "ngClass", "disabled"], [1, "u-spinner"], ["spinnerClass", "stroke-gray-700", 1, "grow", "overflow-auto", "px-3", "py-4", 3, "reachedEnd", "useElementScroll", "loadingEnd", "disabled"], [1, "space-y-3"], [1, "flex", "flex-col", "items-stretch", "gap-y-3", "rounded-xl", "border", "border-gray-200", "bg-white", "p-3", "shadow-sm", "sm:flex-row", "sm:items-center", "sm:gap-x-3", "sm:gap-y-0"], [1, "min-w-0", "w-full", "sm:w-[60%]"], [1, "flex", "max-w-fit", "min-w-0", "items-center", "gap-3", 3, "routerLink"], ["size", "3rem", "radius", "50%", 1, "shrink-0", 3, "imageUrl", "viewerImageUrl", "name", "alt"], [1, "min-w-0", "grow"], [1, "truncate", "font-semibold", "text-gray-900"], [1, "truncate", "text-sm", "text-gray-500"], [1, "w-full", "shrink-0", "text-left", "sm:w-[40%]", "sm:text-right"], [1, "mb-1", "inline-block", 3, "userId", "connection"], [1, "block", "whitespace-nowrap", "text-xs", "text-gray-500"], [1, "mb-4", "text-6xl", "text-gray-300", 3, "icon"], [1, "text-xl", "font-medium"]], template: function ConnectionListDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-dialog-header", 0);
      \u0275\u0275conditionalCreate(1, ConnectionListDialog_Conditional_1_Template, 3, 0, "nav", 1);
      \u0275\u0275elementStart(2, "mat-dialog-content", 2);
      \u0275\u0275conditionalCreate(3, ConnectionListDialog_Conditional_3_Template, 2, 0, "div", 3)(4, ConnectionListDialog_Conditional_4_Template, 4, 3, "app-infinite-scroll", 4)(5, ConnectionListDialog_Conditional_5_Template, 6, 2, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isOwnConnectionList() ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 3 : ctx.connections().length ? 4 : 5);
    }
  }, dependencies: [NgClass, MatDialogModule, MatDialogContent, RouterLink, FontAwesomeModule, FaIconComponent, InfiniteScroll, DialogHeader, Thumbnail, ConnectionRequestButton, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n/*# sourceMappingURL=connection-list-dialog.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectionListDialog, [{
    type: Component,
    args: [{ selector: "app-connection-list-dialog", imports: [DatePipe, NgClass, MatDialogModule, RouterLink, FontAwesomeModule, InfiniteScroll, DialogHeader, Thumbnail, ConnectionRequestButton], template: `<app-dialog-header containerClass="u-responsive-padding-x py-2 shadow" title="Connections"></app-dialog-header>

@if (isOwnConnectionList()) {
<nav class="flex shrink-0 overflow-x-auto border-b border-gray-200 px-3" aria-label="Connection lists">
  @for (tab of tabs; track tab.value) {
  <button type="button" class="whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors" [ngClass]="activeTab() === tab.value
      ? 'border-emerald-600 text-emerald-700'
      : 'border-transparent text-gray-500 hover:text-gray-700'" [disabled]="activeTab() === tab.value"
    (click)="selectTab(tab.value)">
    {{ tab.label }}
  </button>
  }
</nav>
}

<mat-dialog-content class="flex! grow flex-col">
  @if (isLoading()) {
  <div class="flex grow items-center justify-center">
    <div class="u-spinner"></div>
  </div>
  } @else if (connections().length) {
  <app-infinite-scroll class="grow overflow-auto px-3 py-4" [useElementScroll]="true" [loadingEnd]="isLoadingMore()"
    [disabled]="!hasMore()" spinnerClass="stroke-gray-700" (reachedEnd)="loadMore()">
    <div class="space-y-3">
      @for (connectionItem of connections(); track connectionItem.connection.id) {
      <article
        class="flex flex-col items-stretch gap-y-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:gap-x-3 sm:gap-y-0">
        <div class="min-w-0 w-full sm:w-[60%]">
          <a [routerLink]="userProfileLink(connectionItem.user.username)"
            class="flex max-w-fit min-w-0 items-center gap-3">
            <app-thumbnail [imageUrl]="profileImageUrl(connectionItem.user.compressedProfileImageUrl)"
              [viewerImageUrl]="profileImageUrl(connectionItem.user.profileImageUrl)" [name]="connectionItem.user.name"
              [alt]="connectionItem.user.name || 'User profile image'" size="3rem" radius="50%" class="shrink-0">
            </app-thumbnail>
            <div class="min-w-0 grow">
              <p class="truncate font-semibold text-gray-900">{{ connectionItem.user.name || 'Unnamed user' }}</p>
              <p class="truncate text-sm text-gray-500">@{{ connectionItem.user.username || 'unknown' }}</p>
            </div>
          </a>
        </div>
        <div class="w-full shrink-0 text-left sm:w-[40%] sm:text-right">
          @if (isOwnConnectionList()) {
          <app-connection-request-button [userId]="connectionItem.user.id" [connection]="connectionItem.connection"
            class="mb-1 inline-block"></app-connection-request-button>
          }
          <time class="block whitespace-nowrap text-xs text-gray-500"
            [attr.datetime]="connectionItem.connection.createdAt">
            {{ connectionItem.connection.createdAt | date: 'medium' }}
          </time>
        </div>
      </article>
      }

    </div>
  </app-infinite-scroll>
  } @else {
  <div class="flex grow flex-col items-center justify-center py-16 text-center text-gray-500">
    <fa-icon [icon]="faUsers" class="mb-4 text-6xl text-gray-300"></fa-icon>
    <p class="text-xl font-medium">
      @switch (activeTab()) {
      @case ('pending') { No pending requests }
      @case ('rejected') { No rejected requests }
      @default { No connections yet }
      }
    </p>
  </div>
  }
</mat-dialog-content>
`, styles: ["/* src/app/features/connection/components/connection-list-dialog/connection-list-dialog.scss */\n:host {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n}\n/*# sourceMappingURL=connection-list-dialog.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConnectionListDialog, { className: "ConnectionListDialog", filePath: "src/app/features/connection/components/connection-list-dialog/connection-list-dialog.ts", lineNumber: 32 });
})();

// src/app/features/connection/components/connection-list-button/connection-list-button.ts
var ConnectionListButton = class _ConnectionListButton {
  dialog = inject(MatDialog);
  userId = input.required(...ngDevMode ? [{ debugName: "userId" }] : []);
  faUsers = faUsers;
  openConnectionsDialog() {
    this.dialog.open(ConnectionListDialog, {
      width: "40rem",
      maxWidth: "95vw",
      height: "80dvh",
      data: { userId: this.userId() }
    });
  }
  static \u0275fac = function ConnectionListButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnectionListButton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConnectionListButton, selectors: [["app-connection-list-button"]], inputs: { userId: [1, "userId"] }, decls: 3, vars: 1, consts: [["type", "button", 1, "u-btn-outline-slate", "gap-2", "max-sm:w-full", 3, "click"], [3, "icon"]], template: function ConnectionListButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ConnectionListButton_Template_button_click_0_listener() {
        return ctx.openConnectionsDialog();
      });
      \u0275\u0275element(1, "fa-icon", 1);
      \u0275\u0275text(2, " Connections\n");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("icon", ctx.faUsers);
    }
  }, dependencies: [FontAwesomeModule, FaIconComponent, MatDialogModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectionListButton, [{
    type: Component,
    args: [{ selector: "app-connection-list-button", imports: [FontAwesomeModule, MatDialogModule], template: '<button type="button"\n  class="u-btn-outline-slate gap-2 max-sm:w-full" (click)="openConnectionsDialog()">\n  <fa-icon [icon]="faUsers"></fa-icon>\n  Connections\n</button>\n' }]
  }], null, { userId: [{ type: Input, args: [{ isSignal: true, alias: "userId", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConnectionListButton, { className: "ConnectionListButton", filePath: "src/app/features/connection/components/connection-list-button/connection-list-button.ts", lineNumber: 13 });
})();

// src/app/shared/services/share.ts
var Share = class _Share {
  snackBar = inject(MatSnackBar);
  copyTextToClipboard(text) {
    return navigator.clipboard.writeText(text).then(() => {
      this.snackBar.open("Profile link copied successfully", "\u2716", {
        duration: 3e3,
        panelClass: "snackbar-success"
      });
    }).catch(() => {
      this.snackBar.open("Failed to copy profile link", "\u2716", {
        duration: 3e3,
        panelClass: "snackbar-error"
      });
    });
  }
  shareProfileData(options) {
    if (navigator.share) {
      return navigator.share(options).catch(() => {
        this.snackBar.open("Failed to share profile link", "\u2716", {
          duration: 3e3,
          panelClass: "snackbar-error"
        });
      });
    }
    this.snackBar.open("Sharing is not supported in this browser", "\u2716", {
      duration: 3e3,
      panelClass: "snackbar-error"
    });
    return Promise.resolve();
  }
  static \u0275fac = function Share_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Share)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Share, factory: _Share.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Share, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/profile/components/user-profile/user-profile.ts
var _c02 = [[["", "profile-actions", ""]], [["", "profile-footer", ""]]];
var _c1 = ["[profile-actions]", "[profile-footer]"];
var _c2 = () => ({ purpose: "CHANGE_EMAIL" });
function UserProfile_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profileUser_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(profileUser_r2.bio);
  }
}
function UserProfile_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "app-connection-request-button", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profileUser_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("userId", profileUser_r2.id);
  }
}
function UserProfile_Conditional_0_Conditional_30_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dd", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profileUser_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(profileUser_r2.email);
  }
}
function UserProfile_Conditional_0_Conditional_30_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dd", 27)(1, "span", 28);
    \u0275\u0275text(2, "No email added");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 29);
    \u0275\u0275text(4, " Add Email ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c2));
  }
}
function UserProfile_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "dt", 16);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, UserProfile_Conditional_0_Conditional_30_Conditional_3_Template, 2, 1, "dd", 26)(4, UserProfile_Conditional_0_Conditional_30_Conditional_4_Template, 5, 2, "dd", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profileUser_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(profileUser_r2.email ? 3 : 4);
  }
}
function UserProfile_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275element(2, "app-thumbnail", 3);
    \u0275\u0275elementStart(3, "p", 4);
    \u0275\u0275text(4, "Profile Photo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "h1", 7);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "capitalizeWords");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, UserProfile_Conditional_0_Conditional_10_Template, 2, 1, "p", 8);
    \u0275\u0275elementStart(11, "div", 9)(12, "div", 10);
    \u0275\u0275conditionalCreate(13, UserProfile_Conditional_0_Conditional_13_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275element(15, "app-connection-list-button", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13);
    \u0275\u0275projection(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "dl", 14)(19, "div", 15)(20, "dt", 16);
    \u0275\u0275text(21, "User ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dd", 17);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 15)(25, "dt", 16);
    \u0275\u0275text(26, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dd", 17);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "lowercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(30, UserProfile_Conditional_0_Conditional_30_Template, 5, 1, "div", 15);
    \u0275\u0275elementStart(31, "div", 15)(32, "dt", 16);
    \u0275\u0275text(33, "Created At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "dd", 17);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 15)(38, "dt", 16);
    \u0275\u0275text(39, "Updated At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "dd", 17);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275projection(43, 1);
    \u0275\u0275elementStart(44, "dl", 18)(45, "dt", 16);
    \u0275\u0275text(46, "Share Link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 19)(48, "dd", 20);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 21)(51, "div", 22)(52, "button", 23);
    \u0275\u0275listener("click", function UserProfile_Conditional_0_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyProfileLink());
    });
    \u0275\u0275element(53, "fa-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 25);
    \u0275\u0275listener("click", function UserProfile_Conditional_0_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.shareProfileLink());
    });
    \u0275\u0275element(55, "fa-icon", 24);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_5_0;
    const profileUser_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("imageData", (tmp_2_0 = ctx_r2.profileImage()) == null ? null : tmp_2_0.fileData)("fileType", (tmp_3_0 = ctx_r2.profileImage()) == null ? null : tmp_3_0.fileType)("imageUrl", ctx_r2.profileImageUrl())("viewerImageUrl", ctx_r2.profileImageUrl() || (((tmp_5_0 = ctx_r2.profileImage()) == null ? null : tmp_5_0.fileData) ? "data:" + (((tmp_5_0 = ctx_r2.profileImage()) == null ? null : tmp_5_0.fileType) || "image/jpeg") + ";base64," + ((tmp_5_0 = ctx_r2.profileImage()) == null ? null : tmp_5_0.fileData) : null))("name", profileUser_r2.name)("loading", ctx_r2.profileImageLoading())("alt", (profileUser_r2.name || profileUser_r2.username || "User") + " profile image");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 19, profileUser_r2.name) || "Unnamed User", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(profileUser_r2.bio ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.showConnectionRequestButton() ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("userId", profileUser_r2.id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(profileUser_r2.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 21, profileUser_r2.username) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isCurrentUser() ? 30 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", profileUser_r2.createdAt ? \u0275\u0275pipeBind2(36, 23, profileUser_r2.createdAt, "d MMM y, h:mm a") : "N/A", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", profileUser_r2.updatedAt ? \u0275\u0275pipeBind2(42, 26, profileUser_r2.updatedAt, "d MMM y, h:mm a") : "N/A", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.profileUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("icon", ctx_r2.faCopy);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r2.faShareNodes);
  }
}
function UserProfile_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h2", 30);
    \u0275\u0275text(2, "No Profile Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4, "Please login to view your profile details.");
    \u0275\u0275elementEnd()();
  }
}
var UserProfile = class _UserProfile {
  url = inject(Url);
  share = inject(Share);
  authService = inject(Auth);
  user = input(null, ...ngDevMode ? [{ debugName: "user" }] : []);
  profileImage = input(null, ...ngDevMode ? [{ debugName: "profileImage" }] : []);
  profileImageUrl = input(null, ...ngDevMode ? [{ debugName: "profileImageUrl" }] : []);
  profileImageLoading = input(false, ...ngDevMode ? [{ debugName: "profileImageLoading" }] : []);
  showConnectionRequestButton = input(true, ...ngDevMode ? [{ debugName: "showConnectionRequestButton" }] : []);
  isCurrentUser = computed(() => this.user()?.id === this.authService.authState().user?.id, ...ngDevMode ? [{ debugName: "isCurrentUser" }] : []);
  faCopy = faCopy;
  faShareNodes = faShareNodes;
  copyProfileLink() {
    const link = this.profileUrl;
    return link ? this.share.copyTextToClipboard(link) : Promise.resolve();
  }
  shareProfileLink() {
    const link = this.profileUrl;
    const profileUser = this.user();
    if (!link) {
      return Promise.resolve();
    }
    return this.share.shareProfileData({
      title: profileUser?.name || profileUser?.username || "Public profile",
      text: profileUser?.bio || "Check out this profile",
      url: link
    });
  }
  get profileUrl() {
    const profileUser = this.user();
    if (!profileUser?.username) {
      return "";
    }
    return this.url.addQueryParams(this.url.toAbsoluteUrl(`/user/${profileUser.username}`), { updated: profileUser.updatedAt });
  }
  static \u0275fac = function UserProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserProfile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfile, selectors: [["app-user-profile"]], inputs: { user: [1, "user"], profileImage: [1, "profileImage"], profileImageUrl: [1, "profileImageUrl"], profileImageLoading: [1, "profileImageLoading"], showConnectionRequestButton: [1, "showConnectionRequestButton"] }, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [[1, "grid", "gap-6", "md:grid-cols-[220px_1fr]"], [1, "relative", "z-10", "rounded-2xl", "border", "border-slate-200", "bg-white/90", "p-8", "text-center"], [1, "flex", "flex-col", "items-center", "justify-start", "rounded-2xl", "border", "border-slate-200", "bg-white/80", "p-4", "py-5"], ["size", "9rem", 3, "imageData", "fileType", "imageUrl", "viewerImageUrl", "name", "loading", "alt"], [1, "mt-3", "text-sm", "font-medium", "text-slate-600"], [1, "rounded-2xl", "border", "border-slate-200", "bg-white/80", "p-4", "py-5", "md:p-5"], [1, "mb-5"], [1, "text-2xl", "font-bold", "tracking-tight", "text-slate-900"], [1, "mt-2", "text-sm", "leading-6", "text-slate-600"], [1, "mt-4", "flex", "gap-3", "flex-wrap", "sm:items-center"], [1, "flex", "flex-wrap", "items-center", "gap-3", "max-sm:w-full"], [1, "max-sm:grow"], [3, "userId"], [1, "max-sm:w-full"], [1, "grid", "gap-3", "sm:grid-cols-2"], [1, "rounded-xl", "border", "border-slate-200", "bg-slate-50", "p-3"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-slate-500"], [1, "mt-1", "text-base", "font-medium", "text-slate-900"], [1, "mt-5", "rounded-xl", "border", "border-slate-200", "bg-slate-50", "p-3"], [1, "mt-2", "flex", "items-center", "justify-between", "flex-wrap", "sm:flex-nowrap", "gap-3"], [1, "min-w-0", "text-sm", "font-medium", "text-slate-900", "sm:w-0", "grow"], [1, "shrink-0"], [1, "flex", "items-center", "gap-4", "sm:gap-2"], ["type", "button", "appTelemetryClick", "profile_copy_link", "aria-label", "Copy profile link", 1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-lg", "bg-cyan-600", "text-white", "transition-colors", "hover:bg-cyan-700", 3, "click"], [3, "icon"], ["type", "button", "appTelemetryClick", "profile_share_link", "aria-label", "Share profile link", 1, "inline-flex", "h-9", "w-9", "items-center", "justify-center", "rounded-lg", "bg-slate-900", "text-white", "transition-colors", "hover:bg-slate-800", 3, "click"], [1, "mt-1", "break-all", "text-base", "font-medium", "text-slate-900"], [1, "mt-2", "flex", "items-center", "justify-between", "gap-3"], [1, "min-w-0", "truncate", "text-sm", "text-slate-600"], ["routerLink", "/auth/password-verification", 1, "u-btn-outline-cyan", "shrink-0", 3, "queryParams"], [1, "text-xl", "font-semibold", "text-slate-900"], [1, "mt-2", "text-slate-600"]], template: function UserProfile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275conditionalCreate(0, UserProfile_Conditional_0_Template, 56, 29, "div", 0)(1, UserProfile_Conditional_1_Template, 5, 0, "div", 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.user()) ? 0 : 1, tmp_0_0);
    }
  }, dependencies: [FontAwesomeModule, FaIconComponent, RouterLink, Thumbnail, CommonModule, TelemetryClick, ConnectionRequestButton, ConnectionListButton, DatePipe, LowerCasePipe, CapitalizeWordsPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfile, [{
    type: Component,
    args: [{ selector: "app-user-profile", imports: [DatePipe, FontAwesomeModule, RouterLink, Thumbnail, CommonModule, CapitalizeWordsPipe, TelemetryClick, ConnectionRequestButton, ConnectionListButton], template: `@if (user(); as profileUser) {
<div class="grid gap-6 md:grid-cols-[220px_1fr]">
  <div class="flex flex-col items-center justify-start rounded-2xl border border-slate-200 bg-white/80 p-4 py-5">
    <app-thumbnail [imageData]="profileImage()?.fileData" [fileType]="profileImage()?.fileType"
      [imageUrl]="profileImageUrl()"
      [viewerImageUrl]="profileImageUrl()||(profileImage()?.fileData? 'data:' + (profileImage()?.fileType || 'image/jpeg') + ';base64,' + profileImage()?.fileData : null)"
      [name]="profileUser.name" [loading]="profileImageLoading()" size="9rem"
      [alt]="(profileUser.name || profileUser.username || 'User') + ' profile image'">
    </app-thumbnail>
    <p class="mt-3 text-sm font-medium text-slate-600">Profile Photo</p>
  </div>

  <div class="rounded-2xl border border-slate-200 bg-white/80 p-4 py-5 md:p-5">
    <div class="mb-5">
      <h1 class="text-2xl font-bold tracking-tight text-slate-900">
        {{ (profileUser.name | capitalizeWords) || 'Unnamed User' }}
      </h1>
      @if (profileUser.bio) {
      <p class="mt-2 text-sm leading-6 text-slate-600">{{ profileUser.bio }}</p>
      }
      <div class="mt-4 flex  gap-3  flex-wrap sm:items-center">
        <div class="flex flex-wrap items-center gap-3 max-sm:w-full">
          @if (showConnectionRequestButton()) {
          <div class="max-sm:grow">
            <app-connection-request-button [userId]="profileUser.id"></app-connection-request-button>
          </div>
          }
          <div class="max-sm:grow">
            <app-connection-list-button [userId]="profileUser.id"></app-connection-list-button>
          </div>
        </div>
        <div class="max-sm:w-full">
          <ng-content select="[profile-actions]"></ng-content>
        </div>
      </div>
    </div>

    <dl class="grid gap-3 sm:grid-cols-2">
      <div class="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <dt class="text-xs font-semibold uppercase tracking-wide text-slate-500">User ID</dt>
        <dd class="mt-1 text-base font-medium text-slate-900">{{ profileUser.id }}</dd>
      </div>
      <div class="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <dt class="text-xs font-semibold uppercase tracking-wide text-slate-500">Username</dt>
        <dd class="mt-1 text-base font-medium text-slate-900">{{ (profileUser.username|lowercase) || 'N/A' }}</dd>
      </div>
      @if (isCurrentUser()) {
      <div class="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <dt class="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</dt>
        @if (profileUser.email) {
          <dd class="mt-1 break-all text-base font-medium text-slate-900">{{ profileUser.email }}</dd>
        } @else {
          <dd class="mt-2 flex items-center justify-between gap-3">
            <span class="min-w-0 truncate text-sm text-slate-600">No email added</span>
            <a routerLink="/auth/password-verification" [queryParams]="{ purpose: 'CHANGE_EMAIL' }"
              class="u-btn-outline-cyan shrink-0">
              Add Email
            </a>
          </dd>
        }
      </div>
      }
      <div class="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <dt class="text-xs font-semibold uppercase tracking-wide text-slate-500">Created At</dt>
        <dd class="mt-1 text-base font-medium text-slate-900">
          {{ profileUser.createdAt ? (profileUser.createdAt | date:'d MMM y, h:mm a') : 'N/A' }}
        </dd>
      </div>
      <div class="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <dt class="text-xs font-semibold uppercase tracking-wide text-slate-500">Updated At</dt>
        <dd class="mt-1 text-base font-medium text-slate-900">
          {{ profileUser.updatedAt ? (profileUser.updatedAt | date:'d MMM y, h:mm a') : 'N/A' }}
        </dd>
      </div>
    </dl>

    <ng-content select="[profile-footer]"></ng-content>

    <dl class="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3">
      <dt class="text-xs font-semibold uppercase tracking-wide text-slate-500">Share Link</dt>
      <div class="mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap gap-3">
        <dd class="min-w-0 text-sm font-medium text-slate-900 sm:w-0 grow">{{ profileUrl }}</dd>
        <div class="shrink-0">
          <div class="flex items-center gap-4 sm:gap-2">
            <button type="button" appTelemetryClick="profile_copy_link" (click)="copyProfileLink()"
              class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-600 text-white transition-colors hover:bg-cyan-700"
              aria-label="Copy profile link">
              <fa-icon [icon]="faCopy"></fa-icon>
            </button>
            <button type="button" appTelemetryClick="profile_share_link" (click)="shareProfileLink()"
              class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white transition-colors hover:bg-slate-800"
              aria-label="Share profile link">
              <fa-icon [icon]="faShareNodes"></fa-icon>
            </button>
          </div>
        </div>
      </div>
    </dl>
  </div>
</div>
} @else {
<div class="relative z-10 rounded-2xl border border-slate-200 bg-white/90 p-8 text-center">
  <h2 class="text-xl font-semibold text-slate-900">No Profile Data</h2>
  <p class="mt-2 text-slate-600">Please login to view your profile details.</p>
</div>
}
` }]
  }], null, { user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: false }] }], profileImage: [{ type: Input, args: [{ isSignal: true, alias: "profileImage", required: false }] }], profileImageUrl: [{ type: Input, args: [{ isSignal: true, alias: "profileImageUrl", required: false }] }], profileImageLoading: [{ type: Input, args: [{ isSignal: true, alias: "profileImageLoading", required: false }] }], showConnectionRequestButton: [{ type: Input, args: [{ isSignal: true, alias: "showConnectionRequestButton", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfile, { className: "UserProfile", filePath: "src/app/features/profile/components/user-profile/user-profile.ts", lineNumber: 22 });
})();

export {
  UserProfile
};
//# sourceMappingURL=chunk-RRKF6ZMJ.js.map
