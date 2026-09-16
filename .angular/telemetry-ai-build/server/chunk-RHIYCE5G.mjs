import './polyfills.server.mjs';
import {
  ChatRoom
} from "./chunk-ZW6Y3PH6.mjs";
import "./chunk-K5BGTIOB.mjs";
import {
  ChatApi
} from "./chunk-H2AQGVLF.mjs";
import "./chunk-RNCJUKUB.mjs";
import "./chunk-DWVX3TAW.mjs";
import "./chunk-J7VF57XC.mjs";
import "./chunk-Z6GSHEXW.mjs";
import "./chunk-KPKJWJEO.mjs";
import "./chunk-236VIRSX.mjs";
import "./chunk-O6CZ4QYJ.mjs";
import "./chunk-J7JKL4OQ.mjs";
import "./chunk-SHID4NJG.mjs";
import "./chunk-ZSL62EAH.mjs";
import "./chunk-PJYQOHNB.mjs";
import "./chunk-WQNFKMGG.mjs";
import "./chunk-VNBE56TF.mjs";
import "./chunk-TLX7ZMSI.mjs";
import "./chunk-CJPDADRZ.mjs";
import "./chunk-LWVNEOUC.mjs";
import "./chunk-32ACVA5F.mjs";
import "./chunk-JLRAXHSD.mjs";
import "./chunk-MTH7SJRT.mjs";
import "./chunk-GKO4KHX5.mjs";
import "./chunk-M427B6UO.mjs";
import "./chunk-63PDKOYB.mjs";
import "./chunk-5WG46MSX.mjs";
import "./chunk-TH3RCJYY.mjs";
import "./chunk-OT7DNFDX.mjs";
import "./chunk-FEGXPUYJ.mjs";
import "./chunk-NKYUVMNN.mjs";
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
} from "./chunk-4ARKR3K5.mjs";
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
//# sourceMappingURL=chunk-RHIYCE5G.mjs.map
