import './polyfills.server.mjs';
import {
  ChatRoom
} from "./chunk-DFNAHVCM.mjs";
import {
  ChatApi
} from "./chunk-2JCROWJP.mjs";
import "./chunk-JUCNLWUP.mjs";
import "./chunk-VCSZVERZ.mjs";
import "./chunk-3T5XD5WF.mjs";
import "./chunk-GTIYDUMT.mjs";
import "./chunk-7N2B64DO.mjs";
import "./chunk-TYDR7QTU.mjs";
import "./chunk-SOEDZN7O.mjs";
import "./chunk-2QH3Y42T.mjs";
import "./chunk-Y6ZKB7SS.mjs";
import "./chunk-QOZD5QEL.mjs";
import "./chunk-KPI6JKG3.mjs";
import "./chunk-DU7PI4H2.mjs";
import "./chunk-JLRAXHSD.mjs";
import "./chunk-BK46PBGF.mjs";
import "./chunk-RSLJOD3O.mjs";
import "./chunk-SB5Z2O3H.mjs";
import "./chunk-LCBZHX6Y.mjs";
import "./chunk-53NQCPJ5.mjs";
import "./chunk-5QYUMBOA.mjs";
import "./chunk-TNROARYC.mjs";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-XAQLVFTN.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/chat/pages/global-chat/global-chat.ts
var GlobalChat = class _GlobalChat {
  chatApi = inject(ChatApi);
  chatRoomId = signal(void 0, ...ngDevMode ? [{ debugName: "chatRoomId" }] : []);
  constructor() {
    this.chatApi.getGlobalChatRoom().subscribe({
      next: ({ chatRoomId }) => this.chatRoomId.set(chatRoomId),
      error: (error) => console.error("Error loading global chat room", error)
    });
  }
  static \u0275fac = function GlobalChat_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlobalChat)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalChat, selectors: [["app-global-chat"]], decls: 1, vars: 1, consts: [[3, "chatRoomId"]], template: function GlobalChat_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-chat-room", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("chatRoomId", ctx.chatRoomId());
    }
  }, dependencies: [ChatRoom], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalChat, [{
    type: Component,
    args: [{ selector: "app-global-chat", imports: [ChatRoom], changeDetection: ChangeDetectionStrategy.OnPush, template: '<app-chat-room [chatRoomId]="chatRoomId()"></app-chat-room>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalChat, { className: "GlobalChat", filePath: "src/app/features/chat/pages/global-chat/global-chat.ts", lineNumber: 12 });
})();
export {
  GlobalChat
};
//# sourceMappingURL=chunk-GQHU2JUR.mjs.map
