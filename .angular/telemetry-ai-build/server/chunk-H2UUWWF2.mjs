import './polyfills.server.mjs';
import {
  ChatApi,
  ChatState,
  ChatWebsocket
} from "./chunk-H2AQGVLF.mjs";
import {
  AuthAction
} from "./chunk-J7VF57XC.mjs";
import "./chunk-Z6GSHEXW.mjs";
import {
  InfiniteScroll
} from "./chunk-236VIRSX.mjs";
import {
  ProfileApiService
} from "./chunk-SHID4NJG.mjs";
import "./chunk-PJYQOHNB.mjs";
import "./chunk-VNBE56TF.mjs";
import {
  Thumbnail
} from "./chunk-CJPDADRZ.mjs";
import "./chunk-32ACVA5F.mjs";
import "./chunk-GKO4KHX5.mjs";
import "./chunk-5WG46MSX.mjs";
import {
  Auth
} from "./chunk-TH3RCJYY.mjs";
import "./chunk-OT7DNFDX.mjs";
import {
  Platform2 as Platform
} from "./chunk-FEGXPUYJ.mjs";
import {
  DatePipe,
  RouterLink
} from "./chunk-NKYUVMNN.mjs";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ARKR3K5.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/features/chat/pages/direct-chat/direct-chat.ts
var _c0 = (a0) => ["/user-chat", a0];
var _forTrack0 = ($index, $item) => $item.chatRoom.id;
function DirectChat_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 3)(2, "p", 4);
    \u0275\u0275text(3, "Connect privately with other users.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "app-auth-action", 6)(6, "button", 7);
    \u0275\u0275text(7, " Log in or sign up ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("allowGuest", false);
  }
}
function DirectChat_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function DirectChat_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function DirectChat_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 10)(2, "p", 11);
    \u0275\u0275text(3, "No conversations yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 12);
    \u0275\u0275text(5, " Find users ");
    \u0275\u0275elementEnd()()();
  }
}
function DirectChat_Conditional_3_Conditional_2_For_5_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("aria-label", conversation_r3.unreadCount + " unread messages");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", conversation_r3.unreadCount, " ");
  }
}
function DirectChat_Conditional_3_Conditional_2_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 16);
    \u0275\u0275element(2, "app-thumbnail", 17);
    \u0275\u0275elementStart(3, "div", 18)(4, "p", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "time", 22);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, DirectChat_Conditional_3_Conditional_2_For_5_Conditional_0_Conditional_12_Template, 2, 2, "span", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const conversation_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, conversation_r3.user.username));
    \u0275\u0275advance();
    \u0275\u0275property("imageUrl", ctx_r0.getProfileImageUrl(conversation_r3))("name", conversation_r3.user.name || conversation_r3.user.username)("showBorder", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(conversation_r3.user.name || conversation_r3.user.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("@", conversation_r3.user.username);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("datetime", conversation_r3.chatRoom.updatedAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 9, conversation_r3.chatRoom.updatedAt, "MMM d, y, h:mm a"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(conversation_r3.unreadCount > 0 ? 12 : -1);
  }
}
function DirectChat_Conditional_3_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DirectChat_Conditional_3_Conditional_2_For_5_Conditional_0_Template, 13, 14, "li");
  }
  if (rf & 2) {
    const conversation_r3 = ctx.$implicit;
    \u0275\u0275conditional(conversation_r3.user.username ? 0 : -1);
  }
}
function DirectChat_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h1", 13);
    \u0275\u0275text(1, "Conversations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-infinite-scroll", 14);
    \u0275\u0275listener("reachedEnd", function DirectChat_Conditional_3_Conditional_2_Template_app_infinite_scroll_reachedEnd_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.loadMore());
    });
    \u0275\u0275elementStart(3, "ul", 15);
    \u0275\u0275repeaterCreate(4, DirectChat_Conditional_3_Conditional_2_For_5_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("loadingEnd", ctx_r0.isLoadingMore())("disabled", !ctx_r0.hasMore());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.conversations());
  }
}
function DirectChat_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DirectChat_Conditional_3_Conditional_0_Template, 2, 1, "p", 9)(1, DirectChat_Conditional_3_Conditional_1_Template, 6, 0, "div", 1)(2, DirectChat_Conditional_3_Conditional_2_Template, 6, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.errorMessage() ? 0 : !ctx_r0.conversations().length ? 1 : 2);
  }
}
var DirectChat = class _DirectChat {
  chatApi = inject(ChatApi);
  profileApiService = inject(ProfileApiService);
  platform = inject(Platform);
  chatState = inject(ChatState);
  chatWebsocket = inject(ChatWebsocket);
  auth = inject(Auth);
  destroyRef = inject(DestroyRef);
  chatRoomUpdateSubscription;
  hasInitialized = false;
  conversations = signal([], ...ngDevMode ? [{ debugName: "conversations" }] : []);
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  isLoadingMore = signal(false, ...ngDevMode ? [{ debugName: "isLoadingMore" }] : []);
  hasMore = signal(true, ...ngDevMode ? [{ debugName: "hasMore" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  currentPage = 0;
  pageSize = 10;
  authState = this.auth.authState;
  constructor() {
    effect(() => {
      const state = this.authState();
      if (!this.platform.isBrowser() || !state.completed || this.hasInitialized) {
        return;
      }
      this.hasInitialized = true;
      const userId = state.user?.id;
      if (!userId) {
        this.isLoading.set(false);
        return;
      }
      this.loadChatRooms();
      this.chatRoomUpdateSubscription = this.chatWebsocket.getUserChatRoomUpdate(userId, () => {
        this.refreshChatRooms();
      });
    });
    this.destroyRef.onDestroy(() => this.chatRoomUpdateSubscription?.unsubscribe());
  }
  loadMore() {
    if (!this.hasMore() || this.isLoading() || this.isLoadingMore()) {
      return;
    }
    this.currentPage++;
    this.isLoadingMore.set(true);
    this.loadChatRooms();
  }
  getProfileImageUrl(conversation) {
    return this.profileApiService.getPublicImageUrl(conversation.user.compressedProfileImageUrl);
  }
  loadChatRooms(options) {
    this.errorMessage.set("");
    this.chatApi.getChatRooms({
      page: this.currentPage,
      size: this.pageSize,
      sort: "updatedAt,desc"
    }).subscribe({
      next: (response) => {
        if (options?.replace) {
          this.conversations.set(response.content);
        } else {
          this.conversations.update((conversations) => [...conversations, ...response.content]);
        }
        this.chatState.totalUnreadCount.set(response.totalUnreadCount);
        this.hasMore.set(!response.last);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: (error) => {
        console.error("Error loading direct chat rooms", error);
        this.errorMessage.set("Unable to load conversations.");
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      }
    });
  }
  refreshChatRooms() {
    this.currentPage = 0;
    this.loadChatRooms({ replace: true });
  }
  static \u0275fac = function DirectChat_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DirectChat)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirectChat, selectors: [["app-direct-chat"]], decls: 4, vars: 1, consts: [[1, "flex", "grow", "flex-col", "py-5"], [1, "flex", "grow", "items-center", "justify-center"], [1, "flex", "grow", "items-center", "justify-center", "p-5"], [1, "w-full", "rounded-xl", "border", "border-white/15", "bg-white/10", "px-4", "py-10", "text-center", "text-white", "backdrop-blur-sm"], [1, "text-lg", "font-semibold"], [1, "mx-auto", "mt-4", "w-fit"], ["message", "Log in or create an account to view your direct conversations.", 1, "block", 3, "allowGuest"], ["type", "button", 1, "u-btn-primary-cyan"], [1, "u-spinner", "h-16", "w-16", "border-b-4", "border-white"], ["role", "alert", 1, "py-16", "text-center", "text-white/80"], [1, "w-full", "rounded-xl", "border", "border-white/15", "bg-white/10", "px-4", "py-10", "text-center", "text-white/80", "backdrop-blur-sm"], [1, "text-lg", "font-semibold", "text-white"], ["routerLink", "/users", 1, "mt-4", "inline-flex", "rounded-lg", "border", "border-cyan-200/40", "bg-cyan-500/30", "px-4", "py-2", "text-sm", "font-semibold", "text-white", "no-underline", "shadow-sm", "transition", "hover:bg-cyan-500/45"], [1, "mb-4", "text-xl", "font-bold", "text-white"], ["spinnerClass", "stroke-white", 3, "reachedEnd", "loadingEnd", "disabled"], [1, "space-y-3"], [1, "flex", "items-center", "gap-3", "rounded-xl", "border", "border-white/15", "bg-white/15", "p-3", "text-white", "no-underline", "transition", "hover:bg-white/25", 3, "routerLink"], ["size", "2.5rem", "radius", "50%", 1, "shrink-0", 3, "imageUrl", "name", "showBorder"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-semibold"], [1, "truncate", "text-sm", "text-white/70"], [1, "shrink-0", "text-right"], [1, "block", "text-xs", "text-white/60"], [1, "mt-1", "inline-block", "rounded-full", "bg-cyan-400/20", "px-2", "py-1", "text-xs", "font-bold", "leading-none", "text-cyan-100", "ring-1", "ring-cyan-200/30"]], template: function DirectChat_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275conditionalCreate(1, DirectChat_Conditional_1_Template, 8, 1, "div", 1)(2, DirectChat_Conditional_2_Template, 2, 0, "div", 2)(3, DirectChat_Conditional_3_Template, 3, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(!((tmp_0_0 = ctx.authState().user) == null ? null : tmp_0_0.id) ? 1 : ctx.isLoading() ? 2 : 3);
    }
  }, dependencies: [InfiniteScroll, RouterLink, Thumbnail, AuthAction, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DirectChat, [{
    type: Component,
    args: [{ selector: "app-direct-chat", imports: [DatePipe, InfiniteScroll, RouterLink, Thumbnail, AuthAction], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="flex grow flex-col py-5">
  @if (!authState().user?.id) {
    <div class="flex grow items-center justify-center">
      <div class="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-10 text-center text-white backdrop-blur-sm">
        <p class="text-lg font-semibold">Connect privately with other users.</p>
        <div class="mx-auto mt-4 w-fit">
          <app-auth-action class="block" [allowGuest]="false"
            message="Log in or create an account to view your direct conversations.">
            <button type="button"
              class="u-btn-primary-cyan">
              Log in or sign up
            </button>
          </app-auth-action>
        </div>
      </div>
    </div>
  } @else if (isLoading()) {
    <div class="flex grow items-center justify-center p-5">
      <div class="u-spinner h-16 w-16 border-b-4 border-white"></div>
    </div>
  } @else {
    @if (errorMessage()) {
      <p class="py-16 text-center text-white/80" role="alert">{{ errorMessage() }}</p>
    } @else if (!conversations().length) {
      <div class="flex grow items-center justify-center">
        <div class="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-10 text-center text-white/80 backdrop-blur-sm">
          <p class="text-lg font-semibold text-white">No conversations yet.</p>
          <a routerLink="/users"
            class="mt-4 inline-flex rounded-lg border border-cyan-200/40 bg-cyan-500/30 px-4 py-2 text-sm font-semibold text-white no-underline shadow-sm transition hover:bg-cyan-500/45">
            Find users
          </a>
        </div>
      </div>
    } @else {
      <h1 class="mb-4 text-xl font-bold text-white">Conversations</h1>
      <app-infinite-scroll [loadingEnd]="isLoadingMore()" [disabled]="!hasMore()"
        spinnerClass="stroke-white" (reachedEnd)="loadMore()">
        <ul class="space-y-3">
          @for (conversation of conversations(); track conversation.chatRoom.id) {
            @if (conversation.user.username) {
              <li>
                <a [routerLink]="['/user-chat', conversation.user.username]"
                  class="flex items-center gap-3 rounded-xl border border-white/15 bg-white/15 p-3 text-white no-underline transition hover:bg-white/25">
                  <app-thumbnail [imageUrl]="getProfileImageUrl(conversation)"
                    [name]="conversation.user.name || conversation.user.username"
                    [showBorder]="false" size="2.5rem" radius="50%" class="shrink-0">
                  </app-thumbnail>
                  <div class="min-w-0 flex-1">
                    <p class="truncate font-semibold">{{ conversation.user.name || conversation.user.username }}</p>
                    <p class="truncate text-sm text-white/70">@{{ conversation.user.username }}</p>
                  </div>
                  <div class="shrink-0 text-right">
                    <time class="block text-xs text-white/60" [attr.datetime]="conversation.chatRoom.updatedAt">
                      {{ conversation.chatRoom.updatedAt | date:'MMM d, y, h:mm a' }}
                    </time>
                    @if (conversation.unreadCount > 0) {
                      <span class="mt-1 inline-block rounded-full bg-cyan-400/20 px-2 py-1 text-xs font-bold leading-none text-cyan-100 ring-1 ring-cyan-200/30"
                        [attr.aria-label]="conversation.unreadCount + ' unread messages'">
                        +{{ conversation.unreadCount }}
                      </span>
                    }
                  </div>
                </a>
              </li>
            }
          }
        </ul>
      </app-infinite-scroll>
    }
  }
</section>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectChat, { className: "DirectChat", filePath: "src/app/features/chat/pages/direct-chat/direct-chat.ts", lineNumber: 23 });
})();
export {
  DirectChat
};
//# sourceMappingURL=chunk-H2UUWWF2.mjs.map
