import {
  ChatRoom
} from "./chunk-B4J3RBQG.js";
import "./chunk-OWQGSJHL.js";
import {
  ChatApi
} from "./chunk-WIIVTUXC.js";
import "./chunk-VKAIIVPY.js";
import "./chunk-WTBKWGM3.js";
import "./chunk-3N2RTVI2.js";
import "./chunk-JVJFHH6Q.js";
import "./chunk-LEAETYZC.js";
import "./chunk-YLFZVQAR.js";
import "./chunk-FRCNPB6T.js";
import "./chunk-5HOZIZXF.js";
import "./chunk-6M5LXVV5.js";
import "./chunk-WYIT3YBC.js";
import "./chunk-F4OAGFJT.js";
import "./chunk-U2SDMTFM.js";
import "./chunk-26LMAOBO.js";
import "./chunk-VYGEMIP2.js";
import "./chunk-6BFLP3ZQ.js";
import "./chunk-E4MUYDRL.js";
import "./chunk-YP5LKVIU.js";
import "./chunk-P5CYD73A.js";
import "./chunk-7SZW6Z2V.js";
import "./chunk-WN54JEUL.js";
import "./chunk-3NTCQKGC.js";
import "./chunk-NHTWTLXP.js";
import "./chunk-FZM4RF6G.js";
import "./chunk-ENDAPT56.js";
import "./chunk-DOMMC6UT.js";
import "./chunk-BMRGKSCE.js";
import "./chunk-SYFHBLZR.js";
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
} from "./chunk-7MOHRCPT.js";
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
//# sourceMappingURL=chunk-YAA7O6SS.js.map
