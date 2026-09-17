import './polyfills.server.mjs';
import {
  ChatRoom
} from "./chunk-HF5P6N7O.mjs";
import "./chunk-EIVEL62S.mjs";
import {
  ChatApi
} from "./chunk-XL74F6VH.mjs";
import "./chunk-2O6HIT6E.mjs";
import "./chunk-DWVX3TAW.mjs";
import "./chunk-XMXIL4MK.mjs";
import "./chunk-YF3R54IG.mjs";
import "./chunk-KPKJWJEO.mjs";
import "./chunk-WEXX4WFZ.mjs";
import "./chunk-RUBNSQLB.mjs";
import "./chunk-J7JKL4OQ.mjs";
import "./chunk-ZDZ7MEPZ.mjs";
import "./chunk-2APEC5J7.mjs";
import "./chunk-AWOCH5K7.mjs";
import "./chunk-GUTTCFMP.mjs";
import "./chunk-IJ63L4YV.mjs";
import "./chunk-AIQFFD3C.mjs";
import "./chunk-NJ5DZ4BL.mjs";
import "./chunk-JTT7433S.mjs";
import "./chunk-5UOF4NU2.mjs";
import "./chunk-JLRAXHSD.mjs";
import "./chunk-BDFV2XXT.mjs";
import "./chunk-3IWR3DYU.mjs";
import "./chunk-SIRJKENA.mjs";
import "./chunk-QUUQL4HB.mjs";
import "./chunk-XVUKSFH7.mjs";
import "./chunk-734LHT3I.mjs";
import "./chunk-DAIO4D52.mjs";
import "./chunk-5YUTHQXA.mjs";
import "./chunk-SOL5SY5C.mjs";
import "./chunk-4HFGPD3K.mjs";
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
//# sourceMappingURL=chunk-5JPCGAL7.mjs.map
