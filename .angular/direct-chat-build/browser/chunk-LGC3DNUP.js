import {
  ChatRoom
} from "./chunk-P66O7N66.js";
import {
  ChatApi
} from "./chunk-PH26UJEP.js";
import "./chunk-6IPXNW6H.js";
import "./chunk-ZZC3JEQU.js";
import "./chunk-VJWD2X6S.js";
import "./chunk-OL35HKYF.js";
import "./chunk-F2LNDDGC.js";
import {
  takeUntilDestroyed
} from "./chunk-DFRRT2OL.js";
import "./chunk-36X7E7MJ.js";
import "./chunk-ALZZ5FDG.js";
import "./chunk-6NRHWHNW.js";
import "./chunk-Z4NWBK2D.js";
import "./chunk-Y6BEIZXJ.js";
import "./chunk-65M5LICJ.js";
import "./chunk-P5CYD73A.js";
import "./chunk-CCYGSJSA.js";
import "./chunk-UMKDZD2E.js";
import "./chunk-LJMNHIRN.js";
import "./chunk-SDFCVRZT.js";
import "./chunk-5QQ5IMAE.js";
import {
  ActivatedRoute
} from "./chunk-BQE5RZFF.js";
import "./chunk-CYBPL3OT.js";
import {
  ChangeDetectionStrategy,
  Component,
  EMPTY,
  catchError,
  inject,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CSUKEAYK.js";
import "./chunk-35BBDGX6.js";

// src/app/features/chat/pages/direct-chat/direct-chat.ts
function DirectChat_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function DirectChat_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chat-room", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("chatRoomId", ctx_r0.chatRoomId());
  }
}
function DirectChat_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Loading direct chat...");
    \u0275\u0275elementEnd();
  }
}
var DirectChat = class _DirectChat {
  chatApi = inject(ChatApi);
  route = inject(ActivatedRoute);
  chatRoomId = signal(void 0, ...ngDevMode ? [{ debugName: "chatRoomId" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  constructor() {
    this.route.paramMap.pipe(switchMap((params) => {
      this.chatRoomId.set(void 0);
      this.errorMessage.set("");
      const userId = Number(params.get("userId"));
      if (!Number.isSafeInteger(userId) || userId <= 0) {
        this.errorMessage.set("Invalid user id.");
        return EMPTY;
      }
      return this.chatApi.getOrCreateDirectChat(userId).pipe(catchError((error) => {
        console.error("Error loading direct chat room", error);
        this.errorMessage.set("Unable to load direct chat.");
        return EMPTY;
      }));
    }), takeUntilDestroyed()).subscribe(({ chatRoomId }) => this.chatRoomId.set(chatRoomId));
  }
  static \u0275fac = function DirectChat_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DirectChat)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirectChat, selectors: [["app-direct-chat"]], decls: 3, vars: 1, consts: [["role", "alert"], [3, "chatRoomId"], ["role", "status"]], template: function DirectChat_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DirectChat_Conditional_0_Template, 2, 1, "p", 0)(1, DirectChat_Conditional_1_Template, 1, 1, "app-chat-room", 1)(2, DirectChat_Conditional_2_Template, 2, 0, "p", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.errorMessage() ? 0 : ctx.chatRoomId() ? 1 : 2);
    }
  }, dependencies: [ChatRoom], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DirectChat, [{
    type: Component,
    args: [{ selector: "app-direct-chat", imports: [ChatRoom], changeDetection: ChangeDetectionStrategy.OnPush, template: '@if (errorMessage()) {\n  <p role="alert">{{ errorMessage() }}</p>\n} @else if (chatRoomId()) {\n  <app-chat-room [chatRoomId]="chatRoomId()"></app-chat-room>\n} @else {\n  <p role="status">Loading direct chat...</p>\n}\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectChat, { className: "DirectChat", filePath: "src/app/features/chat/pages/direct-chat/direct-chat.ts", lineNumber: 15 });
})();
export {
  DirectChat
};
//# sourceMappingURL=chunk-LGC3DNUP.js.map
