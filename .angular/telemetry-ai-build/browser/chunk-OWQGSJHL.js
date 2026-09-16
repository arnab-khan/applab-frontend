import {
  Auth,
  Guest
} from "./chunk-ENDAPT56.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-7MOHRCPT.js";

// src/app/features/chat/services/chat-message.ts
var ChatMessage = class _ChatMessage {
  auth = inject(Auth);
  guest = inject(Guest);
  isCurrentUserAuthor(author) {
    if (!author) {
      return false;
    }
    const authUserId = this.auth.authState().user?.id;
    if (authUserId) {
      return author.type === "USER" && author.id === authUserId;
    }
    const guestSessionId = this.guest.guestState().guestSessionId;
    return author.type === "GUEST" && author.id === guestSessionId;
  }
  static \u0275fac = function ChatMessage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatMessage)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatMessage, factory: _ChatMessage.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatMessage, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ChatMessage
};
//# sourceMappingURL=chunk-OWQGSJHL.js.map
