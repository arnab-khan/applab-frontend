import {
  ChatRoom
} from "./chunk-2FFR2WRJ.js";
import "./chunk-MTUQOHPW.js";
import {
  ChatApi
} from "./chunk-MFWJQ6ZT.js";
import "./chunk-3CBJ6ESI.js";
import "./chunk-WTBKWGM3.js";
import "./chunk-UJIS6UFA.js";
import "./chunk-JVJFHH6Q.js";
import "./chunk-7I7HDRIW.js";
import "./chunk-BNG33ZAB.js";
import "./chunk-DL2RIVMB.js";
import "./chunk-CHQWQS74.js";
import "./chunk-6M5LXVV5.js";
import "./chunk-RHFA5TFB.js";
import "./chunk-A3PGKIZG.js";
import "./chunk-BFMGPGRE.js";
import "./chunk-D4WB7EDJ.js";
import "./chunk-ULFYFRJE.js";
import "./chunk-R67ZD57R.js";
import "./chunk-3GI75I72.js";
import "./chunk-3PJSDKU3.js";
import "./chunk-P5CYD73A.js";
import "./chunk-KTERXRMQ.js";
import "./chunk-V2JNI3PS.js";
import "./chunk-3FKKUIDB.js";
import "./chunk-MDFJ3JVR.js";
import "./chunk-JFBJKUGM.js";
import "./chunk-AYIPOZPC.js";
import "./chunk-6C42UE7J.js";
import "./chunk-IRF5M5JT.js";
import "./chunk-32HUML7N.js";
import "./chunk-SRWWUAG3.js";
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
//# sourceMappingURL=chunk-4UZHPF33.js.map
