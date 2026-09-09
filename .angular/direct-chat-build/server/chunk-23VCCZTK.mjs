import './polyfills.server.mjs';
import {
  ChatApi,
  ChatMessage,
  ChatState,
  ChatWebsocket
} from "./chunk-2JCROWJP.mjs";
import {
  LayoutState
} from "./chunk-46R2Y27U.mjs";
import "./chunk-Y6ZKB7SS.mjs";
import {
  FaIconComponent,
  FontAwesomeModule,
  faGlobe,
  faUser,
  faUsers
} from "./chunk-DU7PI4H2.mjs";
import {
  Auth,
  Guest
} from "./chunk-LCBZHX6Y.mjs";
import {
  Platform2 as Platform
} from "./chunk-53NQCPJ5.mjs";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-5QYUMBOA.mjs";
import {
  NgClass,
  NgTemplateOutlet
} from "./chunk-TNROARYC.mjs";
import {
  Component,
  DestroyRef,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-XAQLVFTN.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/features/chat/chat.ts
var _c0 = (a0) => ({ route: "global", icon: a0, label: "Global" });
var _c1 = (a0) => ({ route: "direct", icon: a0, label: "Direct" });
var _c2 = (a0) => ({ route: "group", icon: a0, label: "Group" });
var _c3 = () => ({ exact: true });
var _c4 = (a0, a1) => ({ "text-white/85 hover:bg-white/15 hover:text-white": a0, "bg-white/20 text-white shadow-sm hover:bg-white/30": a1 });
function Chat_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7, 1);
    \u0275\u0275element(2, "fa-icon", 8);
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6, " chat ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const route_r1 = ctx.route;
    const icon_r2 = ctx.icon;
    const label_r3 = ctx.label;
    const link_r4 = \u0275\u0275reference(1);
    \u0275\u0275property("routerLink", route_r1)("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c3))("ngClass", \u0275\u0275pureFunction2(6, _c4, !link_r4.isActive, link_r4.isActive));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", icon_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", label_r3, " ");
  }
}
var Chat = class _Chat {
  chatState = inject(ChatState);
  chatWebsocket = inject(ChatWebsocket);
  chatMessage = inject(ChatMessage);
  chatApi = inject(ChatApi);
  layoutState = inject(LayoutState);
  platformService = inject(Platform);
  destroyRef = inject(DestroyRef);
  auth = inject(Auth);
  guest = inject(Guest);
  websocketSubscriptions = [];
  typingUserTimeouts = /* @__PURE__ */ new Map();
  faGlobe = faGlobe;
  faUser = faUser;
  faUsers = faUsers;
  headerHeight = this.layoutState.headerHeight;
  typingUsers = [];
  constructor() {
    effect(() => {
      this.auth.authState();
      this.guest.guestState();
      this.chatWebsocket.reconnect();
    });
  }
  ngOnInit() {
    if (!this.platformService.isBrowser()) {
      return;
    }
    this.websocketSubscriptions.push(this.chatWebsocket.getChatRoomMessageLive((response) => {
      console.log("liveMessage by websocket", response);
      const liveMessage = response;
      const isAddMessage = liveMessage.action === "ADD";
      const shouldFetchViewerState = isAddMessage || liveMessage.action === "REACTION_ADD" || liveMessage.action === "REACTION_EDIT" || liveMessage.action === "REACTION_DELETE";
      if (!shouldFetchViewerState) {
        this.chatState.liveMessage.set(liveMessage);
        return;
      }
      if (isAddMessage) {
        this.chatState.liveMessage.set(liveMessage);
      }
      this.chatApi.getChatRoomMessageViewerState(liveMessage.message.chatRoomId, liveMessage.message.message.id).subscribe({
        next: (viewerState) => {
          console.log("liveMessage viewerState by api", viewerState);
          this.chatState.liveMessage.set({
            action: isAddMessage ? "UPDATE" : liveMessage.action,
            // 'UPDATE' use to stop duplicate adding
            message: __spreadProps(__spreadValues({}, liveMessage.message), {
              permission: viewerState.permission,
              myReaction: viewerState.myReaction
            })
          });
        },
        error: (error) => {
          console.error("liveMessageViewerStateError", error);
        }
      });
    }));
    this.websocketSubscriptions.push(this.chatWebsocket.getChatRoomTyping((response) => {
      console.log("typing", response);
      if (this.chatMessage.isCurrentUserAuthor(response.author)) {
        return;
      }
      const typingUserKey = this.getAuthorKey(response.author);
      clearTimeout(this.typingUserTimeouts.get(typingUserKey));
      this.typingUsers = this.typingUsers.filter((typingUser) => this.getAuthorKey(typingUser.author) !== typingUserKey);
      this.typingUsers.push(response);
      this.chatState.typingUsers.set(this.typingUsers);
      this.typingUserTimeouts.set(typingUserKey, setTimeout(() => {
        this.typingUsers = this.typingUsers.filter((typingUser) => this.getAuthorKey(typingUser.author) !== typingUserKey);
        this.chatState.typingUsers.set(this.typingUsers);
        this.typingUserTimeouts.delete(typingUserKey);
      }, 2e3));
      console.log("typingUsers", this.typingUsers);
    }));
    this.destroyRef.onDestroy(() => {
      this.websocketSubscriptions.forEach((subscription) => subscription.unsubscribe());
      this.typingUserTimeouts.forEach((timeout) => clearTimeout(timeout));
    });
  }
  getAuthorKey(author) {
    return `${author.type}:${author.id}`;
  }
  static \u0275fac = function Chat_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Chat)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Chat, selectors: [["app-chat"]], decls: 10, vars: 14, consts: [["chatMenuLink", ""], ["link", "routerLinkActive"], [1, "sticky", "z-10"], [1, "u-container-2", "mx-auto", "py-1", "backdrop-blur-3xl", "rounded-b-md"], [1, "mx-auto", "flex", "items-center", "gap-1", "rounded-md", "border-2", "border-white/20", "bg-white/20", "px-1.5", "py-0.5", "shadow-lg", "sm:gap-2"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "u-container-2-5", "u-responsive-padding-x", "grow", "flex", "flex-col", "mx-auto"], ["routerLinkActive", "is-active", 1, "flex", "min-w-0", "flex-1", "items-center", "justify-center", "gap-1", "rounded", "px-2", "py-1", "text-center", "text-sm", "font-semibold", "no-underline", "transition", "sm:gap-2", "sm:px-4", "whitespace-nowrap", 3, "routerLink", "routerLinkActiveOptions", "ngClass"], [3, "icon"], [1, "max-[319px]:hidden", "truncate", "whitespace-nowrap"], [1, "hidden", "sm:inline"]], template: function Chat_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "nav", 4);
      \u0275\u0275elementContainer(3, 5)(4, 5)(5, 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "main", 6);
      \u0275\u0275element(7, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, Chat_ng_template_8_Template, 7, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const chatMenuLink_r5 = \u0275\u0275reference(9);
      \u0275\u0275styleProp("top", ctx.headerHeight(), "px");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngTemplateOutlet", chatMenuLink_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c0, ctx.faGlobe));
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", chatMenuLink_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c1, ctx.faUser));
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", chatMenuLink_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(12, _c2, ctx.faUsers));
    }
  }, dependencies: [NgClass, NgTemplateOutlet, RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule, FaIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Chat, [{
    type: Component,
    args: [{ selector: "app-chat", imports: [NgClass, NgTemplateOutlet, RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule], template: `<div class="sticky z-10" [style.top.px]="headerHeight()">
    <header class="u-container-2 mx-auto py-1 backdrop-blur-3xl rounded-b-md">
        <nav
            class="mx-auto flex items-center gap-1 rounded-md border-2 border-white/20 bg-white/20 px-1.5 py-0.5 shadow-lg sm:gap-2">
            <ng-container [ngTemplateOutlet]="chatMenuLink"
                [ngTemplateOutletContext]="{ route: 'global', icon: faGlobe, label: 'Global' }">
            </ng-container>
            <ng-container [ngTemplateOutlet]="chatMenuLink"
                [ngTemplateOutletContext]="{ route: 'direct', icon: faUser, label: 'Direct' }">
            </ng-container>
            <ng-container [ngTemplateOutlet]="chatMenuLink"
                [ngTemplateOutletContext]="{ route: 'group', icon: faUsers, label: 'Group' }">
            </ng-container>
        </nav>
    </header>
</div>
<main class="u-container-2-5 u-responsive-padding-x grow flex flex-col mx-auto">
    <router-outlet></router-outlet>
</main>

<ng-template #chatMenuLink let-route="route" let-icon="icon" let-label="label" let-active="active">
    <a [routerLink]="route" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }"
        class="flex min-w-0 flex-1 items-center justify-center gap-1 rounded px-2 py-1 text-center text-sm font-semibold no-underline transition sm:gap-2 sm:px-4 whitespace-nowrap"
        [ngClass]="{
            'text-white/85 hover:bg-white/15 hover:text-white': !link.isActive,
            'bg-white/20 text-white shadow-sm hover:bg-white/30': link.isActive
        }" #link="routerLinkActive">
        <fa-icon [icon]="icon"></fa-icon>
        <span class="max-[319px]:hidden truncate whitespace-nowrap">{{ label }}
            <span class="hidden sm:inline">
                chat
            </span>
        </span>
    </a>
</ng-template>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Chat, { className: "Chat", filePath: "src/app/features/chat/chat.ts", lineNumber: 24 });
})();
export {
  Chat
};
//# sourceMappingURL=chunk-23VCCZTK.mjs.map
