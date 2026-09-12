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
import "./chunk-DFRRT2OL.js";
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
import "./chunk-BQE5RZFF.js";
import "./chunk-CYBPL3OT.js";
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
} from "./chunk-CSUKEAYK.js";
import "./chunk-35BBDGX6.js";

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
//# sourceMappingURL=chunk-P6Y5NYUB.js.map
