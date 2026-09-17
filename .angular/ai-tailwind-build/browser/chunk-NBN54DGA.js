import {
  ChatRoom
} from "./chunk-2FFR2WRJ.js";
import {
  ChatMessage
} from "./chunk-MTUQOHPW.js";
import {
  ChatApi,
  ChatState,
  ChatWebsocket
} from "./chunk-MFWJQ6ZT.js";
import "./chunk-3CBJ6ESI.js";
import "./chunk-WTBKWGM3.js";
import "./chunk-UJIS6UFA.js";
import "./chunk-JVJFHH6Q.js";
import "./chunk-7I7HDRIW.js";
import "./chunk-BNG33ZAB.js";
import {
  LayoutState
} from "./chunk-MGMRHKFO.js";
import {
  ProfileApiService
} from "./chunk-DL2RIVMB.js";
import "./chunk-CHQWQS74.js";
import {
  takeUntilDestroyed
} from "./chunk-6M5LXVV5.js";
import "./chunk-RHFA5TFB.js";
import "./chunk-A3PGKIZG.js";
import "./chunk-BFMGPGRE.js";
import {
  Thumbnail
} from "./chunk-D4WB7EDJ.js";
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
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-32HUML7N.js";
import "./chunk-SRWWUAG3.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EMPTY,
  catchError,
  computed,
  inject,
  map,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7MOHRCPT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/features/chat/pages/user-chat/user-chat.ts
var _c0 = (a0) => ["/user", a0];
function UserChat_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "header", 4)(2, "div", 5)(3, "a", 6);
    \u0275\u0275element(4, "app-thumbnail", 7);
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6, " Chat with ");
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "a", 10);
    \u0275\u0275text(10, " All chats ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r0.headerHeight(), "px");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ((tmp_2_0 = ctx_r0.recipient()) == null ? null : tmp_2_0.username) ? \u0275\u0275pureFunction1(8, _c0, (tmp_2_0 = ctx_r0.recipient()) == null ? null : tmp_2_0.username) : null);
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r0.recipientProfileImageUrl())("name", ((tmp_4_0 = ctx_r0.recipient()) == null ? null : tmp_4_0.name) || ((tmp_4_0 = ctx_r0.recipient()) == null ? null : tmp_4_0.username))("showBorder", false)("alt", (((tmp_6_0 = ctx_r0.recipient()) == null ? null : tmp_6_0.name) || ((tmp_6_0 = ctx_r0.recipient()) == null ? null : tmp_6_0.username) || "User") + " profile image");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((tmp_7_0 = ctx_r0.recipient()) == null ? null : tmp_7_0.name) || ((tmp_7_0 = ctx_r0.recipient()) == null ? null : tmp_7_0.username) || "User");
  }
}
function UserChat_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 11)(2, "p", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 13);
    \u0275\u0275text(5, "Check the username and try again.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function UserChat_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 2)(1, "app-chat-room", 14);
    \u0275\u0275listener("messagesLoaded", function UserChat_Conditional_2_Template_app_chat_room_messagesLoaded_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markRoomAsRead());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("chatRoomId", ctx_r0.chatRoomId())("unreadCount", ctx_r0.unreadCount())("otherUserHasRead", ctx_r0.otherUserHasRead());
  }
}
var UserChat = class _UserChat {
  chatApi = inject(ChatApi);
  route = inject(ActivatedRoute);
  layoutState = inject(LayoutState);
  profileApiService = inject(ProfileApiService);
  chatState = inject(ChatState);
  chatWebsocket = inject(ChatWebsocket);
  chatMessage = inject(ChatMessage);
  destroyRef = inject(DestroyRef);
  websocketSubscriptions = [];
  typingUserTimeouts = /* @__PURE__ */ new Map();
  hasMarkedInitialMessagesAsRead = false;
  chatRoomId = signal(void 0, ...ngDevMode ? [{ debugName: "chatRoomId" }] : []);
  unreadCount = signal(0, ...ngDevMode ? [{ debugName: "unreadCount" }] : []);
  otherUserHasRead = signal(false, ...ngDevMode ? [{ debugName: "otherUserHasRead" }] : []);
  recipient = signal(null, ...ngDevMode ? [{ debugName: "recipient" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  headerHeight = this.layoutState.headerHeight;
  recipientProfileImageUrl = computed(() => this.profileApiService.getPublicImageUrl(this.recipient()?.compressedProfileImageUrl), ...ngDevMode ? [{ debugName: "recipientProfileImageUrl" }] : []);
  constructor() {
    this.loadChatRoom();
    this.destroyRef.onDestroy(() => this.clearRoomSubscriptions());
  }
  loadChatRoom() {
    this.route.paramMap.pipe(switchMap((params) => {
      this.chatRoomId.set(void 0);
      this.unreadCount.set(0);
      this.otherUserHasRead.set(false);
      this.hasMarkedInitialMessagesAsRead = false;
      this.recipient.set(null);
      this.errorMessage.set("");
      const username = params.get("username");
      if (!username) {
        this.errorMessage.set("Invalid username.");
        return EMPTY;
      }
      return this.profileApiService.getPublicUserByUsername({ username }).pipe(switchMap((recipient) => {
        this.recipient.set(recipient);
        return this.chatApi.getOrCreateDirectChat(recipient.id);
      }), switchMap(({ chatRoomId }) => this.chatApi.getChatRoomUnreadCount(chatRoomId).pipe(map(({ unreadCount, otherUserHasRead }) => ({ chatRoomId, unreadCount, otherUserHasRead })))), catchError((error) => {
        console.error("Error loading user chat room", error);
        this.errorMessage.set(error?.status === 404 ? "User not found." : "Unable to load chat.");
        return EMPTY;
      }));
    }), takeUntilDestroyed(this.destroyRef)).subscribe(({ chatRoomId, unreadCount, otherUserHasRead }) => {
      this.chatRoomId.set(chatRoomId);
      this.unreadCount.set(unreadCount);
      this.otherUserHasRead.set(otherUserHasRead);
      this.subscribeToRoom(chatRoomId);
    });
  }
  markRoomAsRead(updateUi = false) {
    const chatRoomId = this.chatRoomId();
    const unreadCount = this.unreadCount();
    if (!chatRoomId || !updateUi && (!unreadCount || this.hasMarkedInitialMessagesAsRead)) {
      return;
    }
    this.chatApi.markChatRoomAsRead(chatRoomId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        if (!this.hasMarkedInitialMessagesAsRead && unreadCount) {
          this.chatState.totalUnreadCount.update((total) => Math.max(0, total - unreadCount));
          this.hasMarkedInitialMessagesAsRead = true;
        }
        if (updateUi) {
          this.unreadCount.set(0);
        }
      },
      error: (error) => console.error("Error marking direct chat as read", error)
    });
  }
  subscribeToRoom(chatRoomId) {
    this.clearRoomSubscriptions();
    this.websocketSubscriptions.push(this.chatWebsocket.getPrivateChatRoomMessageLive(chatRoomId, (liveMessage) => {
      const isAddMessage = liveMessage.action === "ADD";
      const shouldFetchViewerState = isAddMessage || liveMessage.action === "REACTION_ADD" || liveMessage.action === "REACTION_EDIT" || liveMessage.action === "REACTION_DELETE";
      if (!shouldFetchViewerState) {
        this.chatState.liveMessage.set(liveMessage);
        return;
      }
      if (isAddMessage) {
        this.chatState.liveMessage.set(liveMessage);
        if (this.chatMessage.isCurrentUserAuthor(liveMessage.message.author)) {
          this.otherUserHasRead.set(false);
        }
        this.markRoomAsRead(true);
        this.refreshOtherUserReadState(chatRoomId);
      }
      this.chatApi.getChatRoomMessageViewerState(chatRoomId, liveMessage.message.message.id).subscribe({
        next: (viewerState) => this.chatState.liveMessage.set({
          action: isAddMessage ? "UPDATE" : liveMessage.action,
          message: __spreadProps(__spreadValues({}, liveMessage.message), {
            permission: viewerState.permission,
            myReaction: viewerState.myReaction
          })
        }),
        error: (error) => console.error("Error loading direct chat message viewer state", error)
      });
    }), this.chatWebsocket.getPrivateChatRoomTyping(chatRoomId, (typingUser) => {
      if (this.chatMessage.isCurrentUserAuthor(typingUser.author)) {
        return;
      }
      const key = `${typingUser.author.type}:${typingUser.author.id}`;
      clearTimeout(this.typingUserTimeouts.get(key));
      this.chatState.typingUsers.update((users) => [
        ...users.filter((user) => `${user.author.type}:${user.author.id}` !== key),
        typingUser
      ]);
      this.typingUserTimeouts.set(key, setTimeout(() => {
        this.chatState.typingUsers.update((users) => users.filter((user) => `${user.author.type}:${user.author.id}` !== key));
        this.typingUserTimeouts.delete(key);
      }, 2e3));
    }), this.chatWebsocket.getPrivateChatRoomRead(chatRoomId, (readState) => {
      if (readState.userId === this.recipient()?.id) {
        this.otherUserHasRead.set(true);
      }
    }));
  }
  clearRoomSubscriptions() {
    this.websocketSubscriptions.forEach((subscription) => subscription.unsubscribe());
    this.websocketSubscriptions = [];
    this.typingUserTimeouts.forEach((timeout) => clearTimeout(timeout));
    this.typingUserTimeouts.clear();
    this.chatState.typingUsers.set([]);
  }
  refreshOtherUserReadState(chatRoomId) {
    this.chatApi.getChatRoomUnreadCount(chatRoomId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: ({ otherUserHasRead }) => this.otherUserHasRead.set(otherUserHasRead),
      error: (error) => console.error("Error refreshing direct chat read state", error)
    });
  }
  static \u0275fac = function UserChat_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserChat)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserChat, selectors: [["app-user-chat"]], decls: 3, vars: 2, consts: [[1, "sticky", "z-10", 3, "top"], ["role", "alert", 1, "u-container-2-5", "u-responsive-padding-x", "mx-auto", "flex", "grow", "items-center", "justify-center"], [1, "u-container-2-5", "u-responsive-padding-x", "mx-auto", "flex", "grow", "flex-col"], [1, "sticky", "z-10"], [1, "u-container-2-5", "mx-auto", "rounded-b-md", "py-1", "backdrop-blur-3xl"], [1, "flex", "items-center", "justify-between", "gap-3", "rounded-md", "border", "border-white/20", "bg-white/20", "px-3", "py-1", "shadow-lg"], ["target", "_blank", "rel", "noopener noreferrer", 1, "inline-flex", "min-w-0", "items-center", "gap-2", "rounded-full", "p-1", "pe-2", "no-underline", "transition", "hover:bg-white/15", 3, "routerLink"], ["size", "1.5rem", "radius", "50%", 1, "shrink-0", 3, "imageUrl", "name", "showBorder", "alt"], [1, "min-w-0", "truncate", "text-sm", "text-white/75"], [1, "font-semibold", "text-white"], ["routerLink", "/chat/direct", 1, "shrink-0", "rounded-lg", "border", "border-cyan-200/40", "bg-cyan-500/30", "px-2", "py-1", "text-sm", "font-semibold", "text-white", "no-underline", "shadow-sm", "transition", "hover:bg-cyan-500/45"], [1, "w-full", "rounded-xl", "border", "border-white/15", "bg-white/15", "px-4", "py-12", "text-center", "text-white"], [1, "text-lg", "font-semibold"], [1, "mt-1", "text-sm", "text-white/70"], [3, "messagesLoaded", "chatRoomId", "unreadCount", "otherUserHasRead"]], template: function UserChat_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, UserChat_Conditional_0_Template, 11, 10, "div", 0);
      \u0275\u0275conditionalCreate(1, UserChat_Conditional_1_Template, 6, 1, "section", 1)(2, UserChat_Conditional_2_Template, 2, 3, "main", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.recipient() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 1 : 2);
    }
  }, dependencies: [ChatRoom, Thumbnail, RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserChat, [{
    type: Component,
    args: [{ selector: "app-user-chat", imports: [ChatRoom, Thumbnail, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (recipient()) {
<div class="sticky z-10" [style.top.px]="headerHeight()">
  <header class="u-container-2-5 mx-auto rounded-b-md py-1 backdrop-blur-3xl">
    <div
      class="flex items-center justify-between gap-3 rounded-md border border-white/20 bg-white/20 px-3 py-1 shadow-lg">
      <a [routerLink]="recipient()?.username ? ['/user', recipient()?.username] : null"
        class="inline-flex min-w-0 items-center gap-2 rounded-full p-1 pe-2 no-underline transition hover:bg-white/15"
        target="_blank" rel="noopener noreferrer">
        <app-thumbnail [imageUrl]="recipientProfileImageUrl()" [name]="recipient()?.name || recipient()?.username"
          [showBorder]="false" [alt]="(recipient()?.name || recipient()?.username || 'User') + ' profile image'"
          size="1.5rem" radius="50%" class="shrink-0">
        </app-thumbnail>
        <p class="min-w-0 truncate text-sm text-white/75">
          Chat with
          <span class="font-semibold text-white">{{ recipient()?.name || recipient()?.username || 'User' }}</span>
        </p>
      </a>
      <a routerLink="/chat/direct"
        class="shrink-0 rounded-lg border border-cyan-200/40 bg-cyan-500/30 px-2 py-1 text-sm font-semibold text-white no-underline shadow-sm transition hover:bg-cyan-500/45">
        All chats
      </a>
    </div>
  </header>
</div>
}

@if (errorMessage()) {
<section class="u-container-2-5 u-responsive-padding-x mx-auto flex grow items-center justify-center" role="alert">
  <div class="w-full rounded-xl border border-white/15 bg-white/15 px-4 py-12 text-center text-white">
    <p class="text-lg font-semibold">{{ errorMessage() }}</p>
    <p class="mt-1 text-sm text-white/70">Check the username and try again.</p>
  </div>
</section>
} @else {
<main class="u-container-2-5 u-responsive-padding-x mx-auto flex grow flex-col">
    <app-chat-room [chatRoomId]="chatRoomId()" [unreadCount]="unreadCount()"
      [otherUserHasRead]="otherUserHasRead()"
      (messagesLoaded)="markRoomAsRead()"></app-chat-room>
</main>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserChat, { className: "UserChat", filePath: "src/app/features/chat/pages/user-chat/user-chat.ts", lineNumber: 23 });
})();
export {
  UserChat
};
//# sourceMappingURL=chunk-NBN54DGA.js.map
