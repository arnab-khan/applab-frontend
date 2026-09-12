import {
  ChatApi,
  ChatMessage,
  ChatState,
  ChatWebsocket
} from "./chunk-PH26UJEP.js";
import {
  AuthAction
} from "./chunk-6IPXNW6H.js";
import {
  InfiniteScroll,
  userProfileLink
} from "./chunk-ZZC3JEQU.js";
import {
  AutoResizeTextarea
} from "./chunk-VJWD2X6S.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-OL35HKYF.js";
import {
  ProfileApiService
} from "./chunk-F2LNDDGC.js";
import {
  takeUntilDestroyed
} from "./chunk-DFRRT2OL.js";
import {
  CommonDialog
} from "./chunk-36X7E7MJ.js";
import {
  DialogHeader,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContent,
  MatDialogModule,
  TelemetryClick
} from "./chunk-ALZZ5FDG.js";
import {
  Thumbnail
} from "./chunk-6NRHWHNW.js";
import {
  SanitizeInput
} from "./chunk-Y6BEIZXJ.js";
import {
  FaIconComponent,
  FontAwesomeModule,
  faArrowDown,
  faEllipsis,
  faPaperPlane,
  faPenToSquare,
  faReply,
  faTrash,
  faXmark
} from "./chunk-65M5LICJ.js";
import {
  commonFormValidator
} from "./chunk-P5CYD73A.js";
import {
  DefaultValueAccessor,
  FormControlDirective,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-CCYGSJSA.js";
import {
  LoadingButton
} from "./chunk-UMKDZD2E.js";
import {
  Auth,
  MatSnackBar
} from "./chunk-SDFCVRZT.js";
import {
  Platform2 as Platform
} from "./chunk-5QQ5IMAE.js";
import {
  RouterLink
} from "./chunk-BQE5RZFF.js";
import {
  DatePipe,
  NgClass
} from "./chunk-CYBPL3OT.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DestroyRef,
  ElementRef,
  HostListener,
  Injector,
  Input,
  Output,
  Subject,
  ViewChild,
  afterNextRender,
  catchError,
  computed,
  contentChild,
  effect,
  finalize,
  forkJoin,
  forwardRef,
  inject,
  input,
  of,
  output,
  setClassMetadata,
  signal,
  tap,
  throttleTime,
  throwError,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-CSUKEAYK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/shared/components/icons/animated-dots/animated-dots.ts
var AnimatedDots = class _AnimatedDots {
  static \u0275fac = function AnimatedDots_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimatedDots)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnimatedDots, selectors: [["app-animated-dots"]], decls: 4, vars: 0, consts: [[1, "flex", "items-center", "gap-1"], [1, "h-1.5", "w-1.5", "animate-bounce", "rounded-full", "bg-current"], [1, "h-1.5", "w-1.5", "animate-bounce", "rounded-full", "bg-current", "[animation-delay:150ms]"], [1, "h-1.5", "w-1.5", "animate-bounce", "rounded-full", "bg-current", "[animation-delay:300ms]"]], template: function AnimatedDots_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "span", 0);
      \u0275\u0275domElement(1, "span", 1)(2, "span", 2)(3, "span", 3);
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimatedDots, [{
    type: Component,
    args: [{ selector: "app-animated-dots", imports: [], template: '<span class="flex items-center gap-1">\n    <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-current"></span>\n    <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:150ms]"></span>\n    <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:300ms]"></span>\n</span>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnimatedDots, { className: "AnimatedDots", filePath: "src/app/shared/components/icons/animated-dots/animated-dots.ts", lineNumber: 9 });
})();

// src/app/shared/utils/author.ts
function getAuthorDisplayName(author) {
  return author.type === "GUEST" ? `Guest #${author.id}` : author.name;
}

// src/app/shared/utils/scroll.ts
function scrollIntoView(params) {
  const { element, scrollOptions, onComplete } = params;
  if (onComplete) {
    let completed = false;
    const complete = () => {
      if (completed) {
        return;
      }
      completed = true;
      window.removeEventListener("scrollend", complete);
      onComplete();
    };
    window.addEventListener("scrollend", complete, { once: true });
    setTimeout(complete, 600);
  }
  element.scrollIntoView(scrollOptions);
}

// node_modules/@fortawesome/free-regular-svg-icons/index.mjs
var faThumbsUp = {
  prefix: "far",
  iconName: "thumbs-up",
  icon: [512, 512, [128077, 61575], "f164", "M171.5 38.8C192.3 4 236.5-10 274 7.6l7.2 3.8C316 32.3 330 76.5 312.4 114l0 0-14.1 30 109.7 0 7.4 .4c36.3 3.7 64.6 34.4 64.6 71.6 0 13.2-3.6 25.4-9.8 36 6.1 10.6 9.7 22.8 9.8 36 0 18.3-6.9 34.8-18 47.5 1.3 5.3 2 10.8 2 16.5 0 25.1-12.9 47-32.2 59.9-1.9 35.5-29.4 64.2-64.4 67.7l-7.4 .4-104.1 0c-18 0-35.9-3.4-52.6-9.9l-7.1-3-.7-.3-6.6-3.2-.7-.3-12.2-6.5c-12.3-6.5-23.3-14.7-32.9-24.1-4.1 26.9-27.3 47.4-55.3 47.4l-32 0c-30.9 0-56-25.1-56-56L0 200c0-30.9 25.1-56 56-56l32 0c10.8 0 20.9 3.1 29.5 8.5l50.1-106.5 .6-1.2 2.7-5 .6-.9zM56 192c-4.4 0-8 3.6-8 8l0 224c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-224c0-4.4-3.6-8-8-8l-32 0zM253.6 51c-14.8-6.9-32.3-1.6-40.7 12l-2.2 4-56.8 120.9c-3.5 7.5-5.5 15.5-6 23.7l-.1 4.2 0 112.9 .2 7.9c2.4 32.7 21.4 62.1 50.7 77.7l11.5 6.1 6.3 3.1c12.4 5.6 25.8 8.5 39.4 8.5l104.1 0 2.4-.1c12.1-1.2 21.6-11.5 21.6-23.9l-.2-2.6c-.1-.9-.2-1.7-.4-2.6-2.7-12.1 4.3-24.2 16-28 9.7-3.1 16.6-12.2 16.6-22.8 0-4.3-1.1-8.2-3.1-11.8-6.3-11.1-2.8-25.2 8-32 6.8-4.3 11.2-11.8 11.2-20.2 0-7.1-3.1-13.5-8.2-18-5.2-4.6-8.2-11.1-8.2-18s3-13.4 8.2-18c5.1-4.5 8.2-10.9 8.2-18l-.1-2.4c-1.1-11.3-10.1-20.3-21.4-21.4l-2.4-.1-147.5 0c-8.2 0-15.8-4.2-20.2-11.1-4.4-6.9-5-15.7-1.5-23.1L269 93.6c7-15 1.4-32.7-12.5-41L253.6 51z"]
};
var faFaceSmile = {
  prefix: "far",
  iconName: "face-smile",
  icon: [512, 512, [128578, "smile"], "f118", "M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm177.3 63.4C192.3 335 218.4 352 256 352s63.7-17 78.7-32.6c9.2-9.6 24.4-9.9 33.9-.7s9.9 24.4 .7 33.9c-22.1 23-60 47.4-113.3 47.4s-91.2-24.4-113.3-47.4c-9.2-9.6-8.9-24.8 .7-33.9s24.8-8.9 33.9 .7zM144 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};

// src/app/shared/options/chat-reaction-options.ts
var CHAT_REACTION_OPTIONS = [
  { code: "LIKE", emoji: "\u{1F44D}" },
  { code: "LOVE", emoji: "\u2764\uFE0F" },
  { code: "LAUGH", emoji: "\u{1F604}" },
  { code: "WOW", emoji: "\u{1F62E}" },
  { code: "THANKS", emoji: "\u{1F64F}" },
  { code: "SALUTE", emoji: "\u{1FAE1}" },
  { code: "CLAP", emoji: "\u{1F44F}" },
  { code: "DONE", emoji: "\u2705" },
  { code: "THINKING", emoji: "\u{1F914}" },
  { code: "CRY", emoji: "\u{1F622}" },
  { code: "ANGRY", emoji: "\u{1F621}" },
  { code: "DISLIKE", emoji: "\u{1F44E}" }
];

// src/app/shared/utils/reaction.ts
function orderReactionCounts(reactions) {
  return CHAT_REACTION_OPTIONS.map((reactionOption) => reactions.find((reaction) => reaction.emoji === reactionOption.code)).filter((reaction) => !!reaction);
}

// src/app/shared/components/data-display/author-summary/author-summary.ts
var _c0 = ["avatarBottomEnd"];
var _c1 = ["bodySecondary"];
var _c2 = [[["", "avatarBottomEnd", ""]], [["", "bodySecondary", ""]]];
var _c3 = ["[avatarBottomEnd]", "[bodySecondary]"];
function AuthorSummary_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function AuthorSummary_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
var AuthorSummary = class _AuthorSummary {
  author = input.required(...ngDevMode ? [{ debugName: "author" }] : []);
  disableLink = input(false, ...ngDevMode ? [{ debugName: "disableLink" }] : []);
  userProfileLink = userProfileLink;
  getAuthorDisplayName = getAuthorDisplayName;
  classes = input({}, ...ngDevMode ? [{ debugName: "classes" }] : []);
  avatarBottomEndContent = contentChild("avatarBottomEnd", ...ngDevMode ? [{ debugName: "avatarBottomEndContent" }] : []);
  bodySecondaryContent = contentChild("bodySecondary", ...ngDevMode ? [{ debugName: "bodySecondaryContent" }] : []);
  profileApiService = inject(ProfileApiService);
  isGuest = computed(() => this.author().type === "GUEST", ...ngDevMode ? [{ debugName: "isGuest" }] : []);
  getAuthorLink = computed(() => !this.disableLink() && this.author().type === "USER" ? this.userProfileLink(this.author().username) : null, ...ngDevMode ? [{ debugName: "getAuthorLink" }] : []);
  static \u0275fac = function AuthorSummary_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthorSummary)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthorSummary, selectors: [["app-author-summary"]], contentQueries: function AuthorSummary_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.avatarBottomEndContent, _c0, 5);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.bodySecondaryContent, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, inputs: { author: [1, "author"], disableLink: [1, "disableLink"], classes: [1, "classes"] }, ngContentSelectors: _c3, decls: 8, vars: 8, consts: [["target", "_blank", "rel", "noopener noreferrer", 1, "flex", "items-center", "gap-3", "rounded-lg", "py-2", "transition", 3, "routerLink"], [1, "relative", "shrink-0"], ["size", "2.5rem", "radius", "50%", 3, "imageUrl", "name", "showBorder"], [1, "absolute", "-bottom-1", "-right-1", "h-6", "w-6", "rounded-full", "bg-white", "text-base", "leading-none", "text-slate-950", "shadow", "ring-1", "ring-slate-200"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-sm", "font-semibold", 3, "ngClass"]], template: function AuthorSummary_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c2);
      \u0275\u0275elementStart(0, "a", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-thumbnail", 2);
      \u0275\u0275conditionalCreate(3, AuthorSummary_Conditional_3_Template, 2, 0, "span", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, AuthorSummary_Conditional_7_Template, 1, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", ctx.getAuthorLink());
      \u0275\u0275advance(2);
      \u0275\u0275property("imageUrl", ctx.profileApiService.getPublicImageUrl(ctx.author().compressedProfileImageUrl))("name", ctx.isGuest() ? null : ctx.author().name)("showBorder", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.avatarBottomEndContent() ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.classes().authorNameColor || "text-slate-900");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getAuthorDisplayName(ctx.author()), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.bodySecondaryContent() ? 7 : -1);
    }
  }, dependencies: [NgClass, RouterLink, Thumbnail], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthorSummary, [{
    type: Component,
    args: [{ selector: "app-author-summary", imports: [NgClass, RouterLink, Thumbnail], changeDetection: ChangeDetectionStrategy.OnPush, template: `<a [routerLink]="getAuthorLink()" class="flex items-center gap-3 rounded-lg py-2 transition" target="_blank"
  rel="noopener noreferrer">
  <div class="relative shrink-0">
    <app-thumbnail size="2.5rem" radius="50%"
      [imageUrl]="profileApiService.getPublicImageUrl(author().compressedProfileImageUrl)"
      [name]="isGuest() ? null : author().name" [showBorder]="false">
    </app-thumbnail>
    @if (avatarBottomEndContent()) {
    <span
      class="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-white text-base leading-none text-slate-950 shadow ring-1 ring-slate-200">
      <ng-content select="[avatarBottomEnd]"></ng-content>
    </span>
    }
  </div>
  <div class="min-w-0 flex-1">
    <p class="truncate text-sm font-semibold" [ngClass]="classes().authorNameColor || 'text-slate-900'">
      {{ getAuthorDisplayName(author()) }}
    </p>
    @if (bodySecondaryContent()) {
    <ng-content select="[bodySecondary]"></ng-content>
    }
  </div>
</a>
` }]
  }], null, { author: [{ type: Input, args: [{ isSignal: true, alias: "author", required: true }] }], disableLink: [{ type: Input, args: [{ isSignal: true, alias: "disableLink", required: false }] }], classes: [{ type: Input, args: [{ isSignal: true, alias: "classes", required: false }] }], avatarBottomEndContent: [{ type: ContentChild, args: ["avatarBottomEnd", { isSignal: true }] }], bodySecondaryContent: [{ type: ContentChild, args: ["bodySecondary", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthorSummary, { className: "AuthorSummary", filePath: "src/app/shared/components/data-display/author-summary/author-summary.ts", lineNumber: 17 });
})();

// src/app/features/reaction/components/reaction-list-item/reaction-list-item.ts
var ReactionListItem = class _ReactionListItem {
  reaction = input.required(...ngDevMode ? [{ debugName: "reaction" }] : []);
  reactionOptions = CHAT_REACTION_OPTIONS;
  getReactionEmoji(code) {
    return this.reactionOptions.find((reaction) => reaction.code === code)?.emoji || code;
  }
  static \u0275fac = function ReactionListItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactionListItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactionListItem, selectors: [["app-reaction-list-item"]], inputs: { reaction: [1, "reaction"] }, decls: 8, vars: 6, consts: [["avatarBottomEnd", ""], ["bodySecondary", ""], [3, "author"], ["avatarBottomEnd", "", 1, "u-absolute-center-xy"], ["bodySecondary", "", 1, "text-xs", "text-slate-500"]], template: function ReactionListItem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-author-summary", 2)(1, "span", 3, 0);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 4, 1);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "date");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("author", ctx.reaction().author);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getReactionEmoji(ctx.reaction().reaction.emoji));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 3, ctx.reaction().reaction.createdAt, "MMM d, y, h:mm a"), " ");
    }
  }, dependencies: [AuthorSummary, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactionListItem, [{
    type: Component,
    args: [{ selector: "app-reaction-list-item", imports: [DatePipe, AuthorSummary], template: `<app-author-summary [author]="reaction().author">
  <span #avatarBottomEnd avatarBottomEnd class="u-absolute-center-xy">{{ getReactionEmoji(reaction().reaction.emoji) }}</span>
  <p #bodySecondary bodySecondary class="text-xs text-slate-500">
    {{ reaction().reaction.createdAt | date:'MMM d, y, h:mm a' }}
  </p>
</app-author-summary>
` }]
  }], null, { reaction: [{ type: Input, args: [{ isSignal: true, alias: "reaction", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactionListItem, { className: "ReactionListItem", filePath: "src/app/features/reaction/components/reaction-list-item/reaction-list-item.ts", lineNumber: 13 });
})();

// src/app/features/reaction/components/reaction-list/reaction-list.ts
var _forTrack0 = ($index, $item) => $item.emoji;
var _forTrack1 = ($index, $item) => $item.reaction.id;
function ReactionList_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ReactionList_Conditional_0_For_4_Template_button_click_0_listener() {
      const reactionTab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onReactionFilter(reactionTab_r2.emoji));
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reactionTab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.activeReactionFilter() === reactionTab_r2.emoji ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200")("disabled", ctx_r2.activeReactionFilter() === reactionTab_r2.emoji);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", reactionTab_r2.emoji === void 0 ? "font-semibold" : "text-base");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reactionTab_r2.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reactionTab_r2.count);
  }
}
function ReactionList_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 3)(2, "div", 4);
    \u0275\u0275repeaterCreate(3, ReactionList_Conditional_0_For_4_Template, 5, 5, "button", 5, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.reactionTabs());
  }
}
function ReactionList_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function ReactionList_Conditional_2_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-reaction-list-item", 13);
  }
  if (rf & 2) {
    const reaction_r5 = ctx.$implicit;
    \u0275\u0275property("reaction", reaction_r5);
  }
}
function ReactionList_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, ReactionList_Conditional_2_Conditional_1_For_2_Template, 1, 1, "app-reaction-list-item", 13, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.reactions());
  }
}
function ReactionList_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 15);
    \u0275\u0275text(4, "No reactions yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6, "Reactions will appear here.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getReactionEmoji("LIKE"), " ");
  }
}
function ReactionList_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-infinite-scroll", 10);
    \u0275\u0275listener("reachedEnd", function ReactionList_Conditional_2_Template_app_infinite_scroll_reachedEnd_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadMoreReactions());
    });
    \u0275\u0275conditionalCreate(1, ReactionList_Conditional_2_Conditional_1_Template, 3, 0, "div", 11)(2, ReactionList_Conditional_2_Conditional_2_Template, 7, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("useElementScroll", true)("loadingEnd", ctx_r2.isLoadingMore())("disabled", !ctx_r2.hasMore());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.reactions().length ? 1 : 2);
  }
}
var ReactionList = class _ReactionList {
  chatRoomId = input.required(...ngDevMode ? [{ debugName: "chatRoomId" }] : []);
  messageId = input.required(...ngDevMode ? [{ debugName: "messageId" }] : []);
  chatApi = inject(ChatApi);
  reactionsSubscription;
  reactions = signal([], ...ngDevMode ? [{ debugName: "reactions" }] : []);
  reactionSummary = signal([], ...ngDevMode ? [{ debugName: "reactionSummary" }] : []);
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  isLoadingMore = signal(false, ...ngDevMode ? [{ debugName: "isLoadingMore" }] : []);
  activeReactionFilter = signal(void 0, ...ngDevMode ? [{ debugName: "activeReactionFilter" }] : []);
  reactionOptions = CHAT_REACTION_OPTIONS;
  reactionLimit = 20;
  nextCursor;
  hasMore = signal(false, ...ngDevMode ? [{ debugName: "hasMore" }] : []);
  orderedReactionSummary = computed(() => orderReactionCounts(this.reactionSummary()), ...ngDevMode ? [{ debugName: "orderedReactionSummary" }] : []);
  totalReactionCount = computed(() => this.reactionSummary().reduce((total, reaction) => total + reaction.count, 0), ...ngDevMode ? [{ debugName: "totalReactionCount" }] : []);
  reactionTabs = computed(() => [
    { emoji: void 0, label: "All", count: this.totalReactionCount() },
    ...this.orderedReactionSummary().map((reaction) => ({
      emoji: reaction.emoji,
      label: this.getReactionEmoji(reaction.emoji),
      count: reaction.count
    }))
  ], ...ngDevMode ? [{ debugName: "reactionTabs" }] : []);
  ngOnInit() {
    this.loadInitialReactions();
  }
  ngOnDestroy() {
    this.reactionsSubscription?.unsubscribe();
  }
  getReactionEmoji(code) {
    return this.reactionOptions.find((reaction) => reaction.code === code)?.emoji || code;
  }
  onReactionFilter(emoji) {
    this.activeReactionFilter.set(emoji);
    this.reactions.set([]);
    this.nextCursor = void 0;
    this.hasMore.set(false);
    this.loadInitialReactions(emoji);
  }
  loadMoreReactions() {
    if (!this.hasMore() || this.isLoading() || this.isLoadingMore()) {
      return;
    }
    this.isLoadingMore.set(true);
    this.reactionsSubscription = this.reactionsRequest(this.activeReactionFilter()).subscribe({
      next: () => {
        this.isLoadingMore.set(false);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  loadInitialReactions(emoji) {
    this.reactionsSubscription?.unsubscribe();
    this.isLoading.set(true);
    this.reactionsSubscription = this.initialReactionsRequest(emoji).subscribe({
      next: () => {
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  initialReactionsRequest(emoji) {
    return forkJoin([
      this.reactionCountsRequest(),
      this.reactionsRequest(emoji)
    ]);
  }
  reactionsRequest(emoji) {
    const cursor = this.nextCursor;
    return this.chatApi.getChatRoomMessageReactions(this.chatRoomId(), this.messageId(), {
      limit: this.reactionLimit,
      emoji,
      cursor
    }).pipe(tap((response) => {
      this.reactions.set([...this.reactions(), ...response.items]);
      this.nextCursor = response.nextCursor ?? void 0;
      this.hasMore.set(response.hasNext);
    }), catchError((error) => {
      console.error(error);
      return of(null);
    }));
  }
  reactionCountsRequest() {
    return this.chatApi.getChatRoomMessageReactionCounts(this.chatRoomId(), this.messageId()).pipe(tap((response) => {
      this.reactionSummary.set(response);
    }), catchError((error) => {
      console.error(error);
      return of([]);
    }));
  }
  static \u0275fac = function ReactionList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactionList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReactionList, selectors: [["app-reaction-list"]], inputs: { chatRoomId: [1, "chatRoomId"], messageId: [1, "messageId"] }, decls: 3, vars: 2, consts: [[1, "c-reaction-list__tabs", "py-2", "u-responsive-padding-x", "w-full", "overflow-auto", "border-y", "border-slate-200", "bg-white", "shrink-0"], [1, "flex", "h-full", "items-center", "justify-center"], [1, "u-responsive-padding-x", "py-3", "grow", "overflow-auto", 3, "useElementScroll", "loadingEnd", "disabled"], [1, "w-fit"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "inline-flex", "items-center", "gap-1", "rounded-full", "px-2", "py-1", "text-sm", "transition-colors", 3, "ngClass", "disabled"], ["type", "button", 1, "inline-flex", "items-center", "gap-1", "rounded-full", "px-2", "py-1", "text-sm", "transition-colors", 3, "click", "ngClass", "disabled"], [1, "leading-none", 3, "ngClass"], [1, "text-xs", "font-medium"], [1, "u-spinner"], [1, "u-responsive-padding-x", "py-3", "grow", "overflow-auto", 3, "reachedEnd", "useElementScroll", "loadingEnd", "disabled"], [1, "space-y-1"], [1, "flex", "flex-col", "items-center", "justify-center", "text-center"], [3, "reaction"], [1, "mb-3", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-full", "bg-slate-100", "text-2xl"], [1, "text-sm", "font-semibold", "text-slate-900"], [1, "mt-1", "text-sm", "text-slate-500"]], template: function ReactionList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ReactionList_Conditional_0_Template, 5, 0, "div", 0);
      \u0275\u0275conditionalCreate(1, ReactionList_Conditional_1_Template, 2, 0, "div", 1)(2, ReactionList_Conditional_2_Template, 3, 4, "app-infinite-scroll", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.reactionSummary().length ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 1 : 2);
    }
  }, dependencies: [NgClass, ReactionListItem, InfiniteScroll], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.c-reaction-list__tabs[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n}\n/*# sourceMappingURL=reaction-list.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactionList, [{
    type: Component,
    args: [{ selector: "app-reaction-list", imports: [NgClass, ReactionListItem, InfiniteScroll], template: `@if (reactionSummary().length) {
<div class="c-reaction-list__tabs py-2 u-responsive-padding-x w-full overflow-auto border-y border-slate-200 bg-white shrink-0">
  <div class="w-fit">
    <div class="flex items-center gap-2">
      @for (reactionTab of reactionTabs(); track reactionTab.emoji) {
      <button type="button" class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm transition-colors"
        [ngClass]="activeReactionFilter() === reactionTab.emoji ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'"
        [disabled]="activeReactionFilter() === reactionTab.emoji" (click)="onReactionFilter(reactionTab.emoji)">
        <span class="leading-none" [ngClass]="reactionTab.emoji === undefined ? 'font-semibold' : 'text-base'">
          {{ reactionTab.label }}
        </span>
        <span class="text-xs font-medium">{{ reactionTab.count }}</span>
      </button>
      }
    </div>
  </div>
</div>
}
@if (isLoading()) {
<div class="flex h-full items-center justify-center">
  <div class="u-spinner"></div>
</div>
} @else {
<app-infinite-scroll class="u-responsive-padding-x py-3 grow overflow-auto" [useElementScroll]="true"
  [loadingEnd]="isLoadingMore()" [disabled]="!hasMore()" (reachedEnd)="loadMoreReactions()">
  @if (reactions().length) {
  <div class="space-y-1">
    @for (reaction of reactions(); track reaction.reaction.id) {
    <app-reaction-list-item [reaction]="reaction"></app-reaction-list-item>
    }
  </div>
  } @else {
  <div class="flex flex-col items-center justify-center text-center">
    <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-2xl">
      {{ getReactionEmoji('LIKE') }}
    </div>
    <p class="text-sm font-semibold text-slate-900">No reactions yet</p>
    <p class="mt-1 text-sm text-slate-500">Reactions will appear here.</p>
  </div>
  }
</app-infinite-scroll>
}
`, styles: ["/* src/app/features/reaction/components/reaction-list/reaction-list.scss */\n:host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.c-reaction-list__tabs {\n  scrollbar-width: thin;\n}\n/*# sourceMappingURL=reaction-list.css.map */\n"] }]
  }], null, { chatRoomId: [{ type: Input, args: [{ isSignal: true, alias: "chatRoomId", required: true }] }], messageId: [{ type: Input, args: [{ isSignal: true, alias: "messageId", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReactionList, { className: "ReactionList", filePath: "src/app/features/reaction/components/reaction-list/reaction-list.ts", lineNumber: 17 });
})();

// src/app/features/reaction/components/message-reactions-dialog/message-reactions-dialog.ts
var MessageReactionsDialog = class _MessageReactionsDialog {
  data = inject(MAT_DIALOG_DATA);
  static \u0275fac = function MessageReactionsDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageReactionsDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageReactionsDialog, selectors: [["app-message-reactions-dialog"]], decls: 3, vars: 2, consts: [["containerClass", "u-responsive-padding-x py-2 shadow", "title", "Reactions"], [1, "flex!", "flex-col", "c-message-reactions-dialog"], [1, "grow", 3, "chatRoomId", "messageId"]], template: function MessageReactionsDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-dialog-header", 0);
      \u0275\u0275elementStart(1, "mat-dialog-content", 1);
      \u0275\u0275element(2, "app-reaction-list", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("chatRoomId", ctx.data.chatRoomId)("messageId", ctx.data.messageId);
    }
  }, dependencies: [MatDialogModule, MatDialogContent, DialogHeader, ReactionList], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageReactionsDialog, [{
    type: Component,
    args: [{ selector: "app-message-reactions-dialog", imports: [MatDialogModule, DialogHeader, ReactionList], template: '<app-dialog-header containerClass="u-responsive-padding-x py-2 shadow" title="Reactions"></app-dialog-header>\n<mat-dialog-content class="flex! flex-col c-message-reactions-dialog">\n  <app-reaction-list [chatRoomId]="data.chatRoomId" [messageId]="data.messageId" class="grow"></app-reaction-list>\n</mat-dialog-content>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageReactionsDialog, { className: "MessageReactionsDialog", filePath: "src/app/features/reaction/components/message-reactions-dialog/message-reactions-dialog.ts", lineNumber: 12 });
})();

// src/app/features/chat/components/message-item/message-item.ts
var _c02 = () => ({ authorNameColor: "text-white" });
var _forTrack02 = ($index, $item) => $item.code;
var _forTrack12 = ($index, $item) => $item.emoji;
function MessageItem_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "(edited)");
    \u0275\u0275elementEnd();
  }
}
function MessageItem_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function MessageItem_Conditional_12_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275element(1, "fa-icon", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.faXmark);
  }
}
function MessageItem_Conditional_12_Conditional_2_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function MessageItem_Conditional_12_Conditional_2_Conditional_3_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startEdit());
    });
    \u0275\u0275element(1, "fa-icon", 21);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.faPenToSquare);
  }
}
function MessageItem_Conditional_12_Conditional_2_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function MessageItem_Conditional_12_Conditional_2_Conditional_3_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteMessage());
    });
    \u0275\u0275element(1, "fa-icon", 21);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.faTrash);
  }
}
function MessageItem_Conditional_12_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275element(1, "fa-icon", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-menu", null, 1);
    \u0275\u0275conditionalCreate(4, MessageItem_Conditional_12_Conditional_2_Conditional_3_Conditional_4_Template, 4, 1, "button", 18);
    \u0275\u0275conditionalCreate(5, MessageItem_Conditional_12_Conditional_2_Conditional_3_Conditional_5_Template, 4, 1, "button", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const messageActionMenu_r6 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matMenuTriggerFor", messageActionMenu_r6);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.faEllipsis);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.canEditMessage() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canDeleteMessage() ? 5 : -1);
  }
}
function MessageItem_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-auth-action")(1, "button", 16);
    \u0275\u0275listener("click", function MessageItem_Conditional_12_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.quoteReply());
    });
    \u0275\u0275element(2, "fa-icon", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, MessageItem_Conditional_12_Conditional_2_Conditional_3_Template, 6, 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.faReply);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canShowMessageActionMenu() ? 3 : -1);
  }
}
function MessageItem_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, MessageItem_Conditional_12_Conditional_1_Template, 2, 1, "button", 13)(2, MessageItem_Conditional_12_Conditional_2_Template, 4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isEditing() ? 1 : 2);
  }
}
function MessageItem_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "app-message-input", 23);
    \u0275\u0275listener("goToMessageRequest", function MessageItem_Conditional_13_Template_app_message_input_goToMessageRequest_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.quoteMessageClick($event));
    })("submitSuccess", function MessageItem_Conditional_13_Template_app_message_input_submitSuccess_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("chatRoomId", ctx_r1.chatRoomId())("addMessageRequest", ctx_r1.addMessageRequest())("editMessageRequest", ctx_r1.editMessageRequest())("message", (tmp_5_0 = ctx_r1.currentChatRoomMessageResponse()) == null ? null : tmp_5_0.message)("quotedMessage", ctx_r1.editingQuotedMessage());
  }
}
function MessageItem_Conditional_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function MessageItem_Conditional_14_Conditional_0_Template_button_click_0_listener() {
      const quote_r9 = \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.quoteMessageClick(quote_r9.message.id));
    });
    \u0275\u0275element(1, "app-message-item", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("messageResponse", ctx)("isPreview", true)("addMessageRequest", ctx_r1.addMessageRequest())("editMessageRequest", ctx_r1.editMessageRequest())("deleteMessageRequest", ctx_r1.deleteMessageRequest());
  }
}
function MessageItem_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1, " This message was deleted. ");
    \u0275\u0275elementEnd();
  }
}
function MessageItem_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx_r1.currentMessageResponse()) == null ? null : tmp_3_0.message == null ? null : tmp_3_0.message.content, " ");
  }
}
function MessageItem_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MessageItem_Conditional_14_Conditional_0_Template, 2, 5, "button", 24);
    \u0275\u0275conditionalCreate(1, MessageItem_Conditional_14_Conditional_1_Template, 2, 0, "p", 25)(2, MessageItem_Conditional_14_Conditional_2_Template, 2, 1, "p", 26);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_2_0 = !ctx_r1.isPreview() && ctx_r1.quotedMessageResponse()) ? 0 : -1, tmp_2_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.currentMessageResponse()) == null ? null : tmp_3_0.message == null ? null : tmp_3_0.message.deleted) ? 1 : 2);
  }
}
function MessageItem_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedReactionEmoji());
  }
}
function MessageItem_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 33);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r1.faThumbsUp);
  }
}
function MessageItem_Conditional_15_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function MessageItem_Conditional_15_For_13_Template_button_click_0_listener() {
      const reaction_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addReaction(reaction_r12));
    });
    \u0275\u0275elementStart(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reaction_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isReactionSubmitting());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reaction_r12.emoji);
  }
}
function MessageItem_Conditional_15_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reaction_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getReactionEmoji(reaction_r13.emoji), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reaction_r13.count);
  }
}
function MessageItem_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 29)(2, "app-auth-action")(3, "div", 30)(4, "button", 31);
    \u0275\u0275listener("click", function MessageItem_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLikeReaction());
    });
    \u0275\u0275conditionalCreate(5, MessageItem_Conditional_15_Conditional_5_Template, 2, 1, "span", 32)(6, MessageItem_Conditional_15_Conditional_6_Template, 1, 1, "fa-icon", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 34);
    \u0275\u0275element(8, "fa-icon", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-menu", 35, 2)(11, "div", 36);
    \u0275\u0275repeaterCreate(12, MessageItem_Conditional_15_For_13_Template, 3, 2, "button", 37, _forTrack02);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "button", 38);
    \u0275\u0275listener("click", function MessageItem_Conditional_15_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openReactionsDialog());
    });
    \u0275\u0275elementStart(15, "ul", 39);
    \u0275\u0275repeaterCreate(16, MessageItem_Conditional_15_For_17_Template, 4, 2, "li", 40, _forTrack12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reactionMenu_r14 = \u0275\u0275reference(10);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isReactionSubmitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedReactionCode() ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isReactionSubmitting())("matMenuTriggerFor", reactionMenu_r14);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.faFaceSmile);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.reactionOptions);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.orderedReactions());
  }
}
var MessageItem = class _MessageItem {
  messageResponse = input.required(...ngDevMode ? [{ debugName: "messageResponse" }] : []);
  isPreview = input(false, ...ngDevMode ? [{ debugName: "isPreview" }] : []);
  isFocused = input(false, ...ngDevMode ? [{ debugName: "isFocused" }] : []);
  applyCurrentUserStyle = input(false, ...ngDevMode ? [{ debugName: "applyCurrentUserStyle" }] : []);
  chatRoomId = input(...ngDevMode ? [void 0, { debugName: "chatRoomId" }] : []);
  addMessageRequest = input.required(...ngDevMode ? [{ debugName: "addMessageRequest" }] : []);
  editMessageRequest = input.required(...ngDevMode ? [{ debugName: "editMessageRequest" }] : []);
  deleteMessageRequest = input(...ngDevMode ? [void 0, { debugName: "deleteMessageRequest" }] : []);
  addReactionRequest = output();
  quoteReplyRequest = output();
  quoteMessageClickRequest = output();
  currentMessageResponse = signal(null, ...ngDevMode ? [{ debugName: "currentMessageResponse" }] : []);
  editingQuotedMessage = signal(void 0, ...ngDevMode ? [{ debugName: "editingQuotedMessage" }] : []);
  selectedReactionCode = signal("", ...ngDevMode ? [{ debugName: "selectedReactionCode" }] : []);
  isReactionSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isReactionSubmitting" }] : []);
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : []);
  messageId = computed(() => this.currentMessageResponse()?.message.id || this.messageResponse().message.id, ...ngDevMode ? [{ debugName: "messageId" }] : []);
  quotedMessageResponse = computed(() => {
    const currentMessageResponse = this.currentMessageResponse();
    return currentMessageResponse && "quotedMessage" in currentMessageResponse ? currentMessageResponse.quotedMessage : void 0;
  }, ...ngDevMode ? [{ debugName: "quotedMessageResponse" }] : []);
  selectedReactionEmoji = computed(() => this.getReactionEmoji(this.selectedReactionCode()), ...ngDevMode ? [{ debugName: "selectedReactionEmoji" }] : []);
  currentChatRoomMessageResponse = computed(() => {
    const messageResponse = this.currentMessageResponse();
    return messageResponse && "chatRoomId" in messageResponse ? messageResponse : void 0;
  }, ...ngDevMode ? [{ debugName: "currentChatRoomMessageResponse" }] : []);
  orderedReactions = computed(() => orderReactionCounts(this.currentChatRoomMessageResponse()?.reactions || []), ...ngDevMode ? [{ debugName: "orderedReactions" }] : []);
  isCurrentUserMessage = computed(() => this.chatMessage.isCurrentUserAuthor(this.getMessageAuthor()), ...ngDevMode ? [{ debugName: "isCurrentUserMessage" }] : []);
  canEditMessage = computed(() => !!this.currentChatRoomMessageResponse()?.permission?.canEdit, ...ngDevMode ? [{ debugName: "canEditMessage" }] : []);
  canDeleteMessage = computed(() => !!this.currentChatRoomMessageResponse()?.permission?.canDelete, ...ngDevMode ? [{ debugName: "canDeleteMessage" }] : []);
  canShowMessageActionMenu = computed(() => this.canEditMessage() || this.canDeleteMessage(), ...ngDevMode ? [{ debugName: "canShowMessageActionMenu" }] : []);
  messageItemClasses = computed(() => __spreadValues({
    "c-message-focus": this.isFocused(),
    "p-2": this.isPreview(),
    "p-4": !this.isPreview()
  }, this.applyCurrentUserStyle() && this.isCurrentUserMessage() && !this.isPreview() ? {
    "border-cyan-200/20 bg-cyan-300/15": true
  } : {
    "border-white/15 bg-white/15": true
  }), ...ngDevMode ? [{ debugName: "messageItemClasses" }] : []);
  chatMessage = inject(ChatMessage);
  chatState = inject(ChatState);
  dialog = inject(MatDialog);
  snackBar = inject(MatSnackBar);
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faFaceSmile = faFaceSmile;
  faXmark = faXmark;
  faEllipsis = faEllipsis;
  faReply = faReply;
  faThumbsUp = faThumbsUp;
  reactionOptions = CHAT_REACTION_OPTIONS;
  constructor() {
    effect(() => {
      const messageResponse = this.messageResponse();
      this.setCurrentMessageResponse(messageResponse);
    });
  }
  getReactionEmoji(code) {
    return this.reactionOptions.find((reaction) => reaction.code === code)?.emoji || code;
  }
  getMessageAuthor() {
    const messageResponse = this.currentMessageResponse();
    const message = messageResponse?.message;
    if (messageResponse?.author) {
      return messageResponse.author;
    }
    if (message?.guestSessionId) {
      return {
        type: "GUEST",
        id: message.guestSessionId
      };
    }
    return {
      type: "USER",
      id: message?.userId || 0
    };
  }
  toggleLikeReaction() {
    if (this.isReactionSubmitting()) {
      return;
    }
    const reactionCode = this.selectedReactionCode() ? "" : "LIKE";
    this.emitReaction(reactionCode);
  }
  addReaction(reaction) {
    if (this.isReactionSubmitting()) {
      return;
    }
    this.emitReaction(reaction.code);
  }
  emitReaction(emoji) {
    const previousReactionCode = this.selectedReactionCode();
    this.isReactionSubmitting.set(true);
    this.selectedReactionCode.set(emoji);
    this.addReactionRequest.emit({
      messageId: this.messageId(),
      emoji,
      onComplete: () => this.isReactionSubmitting.set(false),
      onError: () => this.selectedReactionCode.set(previousReactionCode)
    });
  }
  openReactionsDialog() {
    this.dialog.open(MessageReactionsDialog, {
      width: "50rem",
      height: "90dvh",
      data: {
        chatRoomId: this.currentChatRoomMessageResponse()?.chatRoomId,
        messageId: this.messageId()
      }
    });
  }
  quoteReply() {
    const messageResponse = this.currentChatRoomMessageResponse();
    if (messageResponse) {
      this.quoteReplyRequest.emit(messageResponse);
    }
  }
  quoteMessageClick(messageId) {
    this.quoteMessageClickRequest.emit(messageId);
  }
  startEdit() {
    this.editingQuotedMessage.set(this.currentChatRoomMessageResponse()?.quotedMessage);
    this.isEditing.set(true);
  }
  cancelEdit() {
    this.isEditing.set(false);
  }
  deleteMessage() {
    const deleteMessageRequest = this.deleteMessageRequest();
    if (!deleteMessageRequest) {
      throw new Error("deleteMessageRequest is required to delete message");
    }
    this.dialog.open(CommonDialog, {
      width: "30rem",
      data: {
        type: "warning",
        message: "Are you sure you want to delete this message?",
        confirmText: "Delete",
        cancelText: "Cancel",
        onConfirm: (dialogRef, dialog) => {
          deleteMessageRequest(this.messageId()).pipe(finalize(() => dialog.isConfirming.set(false))).subscribe({
            next: () => dialogRef.close({ confirmed: true }),
            error: (error) => {
              console.error("Error deleting message", error);
              const message = error.error?.message || error.error?.error || error.error || "Failed to delete message. Please try again.";
              this.snackBar.open(message, "\u2716", { duration: 3e3, panelClass: "snackbar-error" });
              dialogRef.close();
            }
          });
        }
      }
    });
  }
  setCurrentMessageResponse(messageResponse) {
    this.currentMessageResponse.set(messageResponse);
    if ("myReaction" in messageResponse) {
      this.selectedReactionCode.set(messageResponse.myReaction?.emoji || "");
    } else {
      this.selectedReactionCode.set("");
    }
  }
  static \u0275fac = function MessageItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageItem, selectors: [["app-message-item"]], inputs: { messageResponse: [1, "messageResponse"], isPreview: [1, "isPreview"], isFocused: [1, "isFocused"], applyCurrentUserStyle: [1, "applyCurrentUserStyle"], chatRoomId: [1, "chatRoomId"], addMessageRequest: [1, "addMessageRequest"], editMessageRequest: [1, "editMessageRequest"], deleteMessageRequest: [1, "deleteMessageRequest"] }, outputs: { addReactionRequest: "addReactionRequest", quoteReplyRequest: "quoteReplyRequest", quoteMessageClickRequest: "quoteMessageClickRequest" }, decls: 16, vars: 13, consts: [["bodySecondary", ""], ["messageActionMenu", "matMenu"], ["reactionMenu", "matMenu"], [1, "rounded-xl", "border", "text-white", "shadow-sm", "backdrop-blur-md", "transition", 3, "ngClass"], [1, "flex", "items-start", "gap-3"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "justify-between", "gap-2"], [1, "min-w-0", 3, "author", "classes", "disableLink"], ["bodySecondary", "", 1, "text-xs", "text-white/60"], [1, "text-white/45"], [1, "flex", "shrink-0", "items-center", "gap-1", "rounded-full", "border", "border-white/10", "bg-black/10", "shadow-sm"], [1, "mt-3"], [1, "mt-3", "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], ["type", "button", "aria-label", "Cancel edit", "appTelemetryClick", "chat_message_cancel_edit", 1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-white/70", "transition", "hover:bg-white/15", "hover:text-white"], ["type", "button", "aria-label", "Cancel edit", "appTelemetryClick", "chat_message_cancel_edit", 1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-white/70", "transition", "hover:bg-white/15", "hover:text-white", 3, "click"], [1, "leading-0", 3, "icon"], ["type", "button", "aria-label", "Quote reply", "appTelemetryClick", "chat_message_quote_reply", 1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-white/70", "transition", "hover:bg-white/15", "hover:text-white", 3, "click"], ["type", "button", "aria-label", "More options", "appTelemetryClick", "chat_message_open_menu", 1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-white/70", "transition", "hover:bg-white/15", "hover:text-white", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "appTelemetryClick", "chat_message_start_edit", 1, "text-white!", "transition-colors", "duration-200", "hover:bg-white/15!"], ["mat-menu-item", "", 1, "text-white!", "transition-colors", "duration-200", "hover:bg-white/15!"], ["mat-menu-item", "", "appTelemetryClick", "chat_message_start_edit", 1, "text-white!", "transition-colors", "duration-200", "hover:bg-white/15!", 3, "click"], [1, "mr-2", "text-white!", 3, "icon"], ["mat-menu-item", "", 1, "text-white!", "transition-colors", "duration-200", "hover:bg-white/15!", 3, "click"], [3, "goToMessageRequest", "submitSuccess", "chatRoomId", "addMessageRequest", "editMessageRequest", "message", "quotedMessage"], ["type", "button", "appTelemetryClick", "chat_message_open_quote", 1, "mt-3", "block", "w-full", "rounded-xl", "bg-black/20", "text-left"], [1, "mt-3", "inline-flex", "rounded-full", "border", "border-white/10", "bg-black/20", "px-3", "py-1.5", "text-sm", "italic", "text-white/55"], [1, "mt-3", "whitespace-pre-line", "text-sm", "leading-6", "text-white/85"], ["type", "button", "appTelemetryClick", "chat_message_open_quote", 1, "mt-3", "block", "w-full", "rounded-xl", "bg-black/20", "text-left", 3, "click"], [3, "messageResponse", "isPreview", "addMessageRequest", "editMessageRequest", "deleteMessageRequest"], [1, "shrink-0"], [1, "flex", "items-center", "gap-1"], ["type", "button", "aria-label", "Like reaction", 1, "inline-flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-white/70", "transition", "hover:bg-white/15", "hover:text-white", "disabled:pointer-events-none", "disabled:opacity-50", 3, "click", "disabled"], [1, "text-lg", "leading-none"], [1, "text-xl", "font-bold", 3, "icon"], ["type", "button", "aria-label", "Add reaction", "appTelemetryClick", "chat_message_open_reaction_menu", 1, "inline-flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-white/70", "transition", "hover:bg-white/15", "hover:text-white", "disabled:pointer-events-none", "disabled:opacity-50", 3, "disabled", "matMenuTriggerFor"], ["xPosition", "after", "yPosition", "above", 1, "reaction-menu-panel"], [1, "grid", "grid-cols-4", "gap-1", "bg-white/15", "px-2", "py-2", "backdrop-blur-3xl", "sm:grid-cols-6", "lg:grid-cols-12"], ["type", "button", 1, "flex", "aspect-square", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "p-0", "transition", "hover:scale-110", "hover:bg-white/20", "disabled:pointer-events-none", "disabled:opacity-50", 3, "disabled"], ["type", "button", "aria-label", "Message reactions", "appTelemetryClick", "chat_message_open_reactions", 1, "inline-flex", "min-h-8", "items-center", "gap-2", "rounded-full", "text-sm", "text-white/80", "transition", "hover:bg-white/15", "hover:text-white", "px-1", 3, "click"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-0.5"], ["type", "button", 1, "flex", "aspect-square", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "p-0", "transition", "hover:scale-110", "hover:bg-white/20", "disabled:pointer-events-none", "disabled:opacity-50", 3, "click", "disabled"], [1, "text-xl", "leading-none"], [1, "text-xs", "text-white/55"]], template: function MessageItem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "article", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "app-author-summary", 7)(6, "p", 8, 0)(8, "span");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, MessageItem_Conditional_11_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, MessageItem_Conditional_12_Template, 3, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, MessageItem_Conditional_13_Template, 2, 5, "div", 11)(14, MessageItem_Conditional_14_Template, 3, 2);
      \u0275\u0275conditionalCreate(15, MessageItem_Conditional_15_Template, 18, 5, "div", 12);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_6_0;
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.messageItemClasses());
      \u0275\u0275advance(4);
      \u0275\u0275property("author", ctx.getMessageAuthor())("classes", \u0275\u0275pureFunction0(12, _c02))("disableLink", ctx.isPreview());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 9, (tmp_5_0 = ctx.currentMessageResponse()) == null ? null : tmp_5_0.message == null ? null : tmp_5_0.message.createdAt, "MMM d, y, h:mm a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_6_0 = ctx.currentMessageResponse()) == null ? null : tmp_6_0.message == null ? null : tmp_6_0.message.edited) ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isPreview() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEditing() ? 13 : 14);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isPreview() ? 15 : -1);
    }
  }, dependencies: () => [_MessageItem, NgClass, AuthAction, AuthorSummary, FontAwesomeModule, FaIconComponent, MatDialogModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, TelemetryClick, MessageInput, DatePipe], styles: ["\n\n.c-message-focus[_ngcontent-%COMP%] {\n  outline: 0.2rem solid rgba(255, 255, 255, 0.65);\n  outline-offset: 0.2rem;\n}\n/*# sourceMappingURL=message-item.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageItem, [{
    type: Component,
    args: [{ selector: "app-message-item", imports: [DatePipe, NgClass, AuthAction, AuthorSummary, FontAwesomeModule, MatDialogModule, MatMenuModule, TelemetryClick, forwardRef(() => MessageInput)], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div>
    <article class="rounded-xl border text-white shadow-sm backdrop-blur-md transition"
        [ngClass]="messageItemClasses()">
        <div class="flex items-start gap-3">
            <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-2">
                    <app-author-summary class="min-w-0" [author]="getMessageAuthor()"
                        [classes]="{ authorNameColor: 'text-white' }" [disableLink]="isPreview()">
                        <p #bodySecondary bodySecondary class="text-xs text-white/60">
                            <span>
                                {{ currentMessageResponse()?.message?.createdAt | date:'MMM d, y, h:mm a' }}
                            </span>
                            @if (currentMessageResponse()?.message?.edited) {
                            <span class="text-white/45">(edited)</span>
                            }
                        </p>
                    </app-author-summary>

                    @if (!isPreview()) {
                    <div
                        class="flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-black/10 shadow-sm">
                        @if (isEditing()) {
                        <button type="button"
                            class="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/15 hover:text-white"
                            aria-label="Cancel edit" appTelemetryClick="chat_message_cancel_edit"
                            (click)="cancelEdit()">
                            <fa-icon [icon]="faXmark" class="leading-0"></fa-icon>
                        </button>
                        } @else {
                        <app-auth-action>
                            <button type="button"
                                class="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/15 hover:text-white"
                                aria-label="Quote reply" appTelemetryClick="chat_message_quote_reply"
                                (click)="quoteReply()">
                                <fa-icon [icon]="faReply" class="leading-0"></fa-icon>
                            </button>
                        </app-auth-action>
                        @if (canShowMessageActionMenu()) {
                        <button type="button"
                            class="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/15 hover:text-white"
                            aria-label="More options" appTelemetryClick="chat_message_open_menu"
                            [matMenuTriggerFor]="messageActionMenu">
                            <fa-icon [icon]="faEllipsis" class="leading-0"></fa-icon>
                        </button>
                        <mat-menu #messageActionMenu="matMenu">
                            @if (canEditMessage()) {
                            <button mat-menu-item class="text-white! transition-colors duration-200 hover:bg-white/15!"
                                appTelemetryClick="chat_message_start_edit" (click)="startEdit()">
                                <fa-icon [icon]="faPenToSquare" class="mr-2 text-white!"></fa-icon>
                                <span>Edit</span>
                            </button>
                            }
                            @if (canDeleteMessage()) {
                            <button mat-menu-item class="text-white! transition-colors duration-200 hover:bg-white/15!"
                                (click)="deleteMessage()">
                                <fa-icon [icon]="faTrash" class="mr-2 text-white!"></fa-icon>
                                <span>Delete</span>
                            </button>
                            }
                        </mat-menu>
                        }
                        }
                    </div>
                    }
                </div>

                @if (isEditing()) {
                <div class="mt-3">
                    <app-message-input [chatRoomId]="chatRoomId()!" [addMessageRequest]="addMessageRequest()"
                        [editMessageRequest]="editMessageRequest()"
                        [message]="currentChatRoomMessageResponse()?.message" [quotedMessage]="editingQuotedMessage()"
                        (goToMessageRequest)="quoteMessageClick($event)" (submitSuccess)="cancelEdit()">
                    </app-message-input>
                </div>
                } @else {
                @if (!isPreview() && quotedMessageResponse(); as quote) {
                <button type="button" class="mt-3 block w-full rounded-xl bg-black/20 text-left"
                    appTelemetryClick="chat_message_open_quote" (click)="quoteMessageClick(quote.message.id)">
                    <app-message-item [messageResponse]="quote" [isPreview]="true"
                        [addMessageRequest]="addMessageRequest()" [editMessageRequest]="editMessageRequest()"
                        [deleteMessageRequest]="deleteMessageRequest()"></app-message-item>
                </button>
                }
                @if (currentMessageResponse()?.message?.deleted) {
                <p
                    class="mt-3 inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm italic text-white/55">
                    This message was deleted.
                </p>
                } @else {
                <p class="mt-3 whitespace-pre-line text-sm leading-6 text-white/85">
                    {{ currentMessageResponse()?.message?.content }}
                </p>
                }
                }

                @if (!isPreview()) {
                <div class="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <div class="shrink-0">
                        <app-auth-action>
                            <div class="flex items-center gap-1">
                                <button type="button"
                                    class="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/15 hover:text-white disabled:pointer-events-none disabled:opacity-50"
                                    aria-label="Like reaction" [disabled]="isReactionSubmitting()"
                                    (click)="toggleLikeReaction()">
                                    @if (selectedReactionCode()) {
                                    <span class="text-lg leading-none">{{ selectedReactionEmoji() }}</span>
                                    } @else {
                                    <fa-icon [icon]="faThumbsUp" class="text-xl font-bold"></fa-icon>
                                    }
                                </button>
                                <button type="button"
                                    class="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/15 hover:text-white disabled:pointer-events-none disabled:opacity-50"
                                    aria-label="Add reaction" [disabled]="isReactionSubmitting()"
                                    appTelemetryClick="chat_message_open_reaction_menu"
                                    [matMenuTriggerFor]="reactionMenu">
                                    <fa-icon [icon]="faFaceSmile" class="text-xl font-bold"></fa-icon>
                                </button>
                                <mat-menu #reactionMenu="matMenu" xPosition="after" yPosition="above"
                                    class="reaction-menu-panel">
                                    <div
                                        class="grid grid-cols-4 gap-1 bg-white/15 px-2 py-2 backdrop-blur-3xl sm:grid-cols-6 lg:grid-cols-12">
                                        @for (reaction of reactionOptions; track reaction.code) {
                                        <button type="button"
                                            class="flex aspect-square h-9 w-9 items-center justify-center rounded-full p-0 transition hover:scale-110 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-50"
                                            [disabled]="isReactionSubmitting()" (click)="addReaction(reaction)">
                                            <span class="text-xl leading-none">{{ reaction.emoji }}</span>
                                        </button>
                                        }
                                    </div>
                                </mat-menu>
                            </div>
                        </app-auth-action>
                    </div>
                    <button type="button"
                        class="inline-flex min-h-8 items-center gap-2 rounded-full text-sm text-white/80 transition hover:bg-white/15 hover:text-white px-1"
                        aria-label="Message reactions" appTelemetryClick="chat_message_open_reactions"
                        (click)="openReactionsDialog()">
                        <ul class="flex flex-wrap items-center gap-2">
                            @for (reaction of orderedReactions(); track reaction.emoji) {
                            <li class="inline-flex items-center gap-0.5">
                                {{ getReactionEmoji(reaction.emoji) }}
                                <span class="text-xs text-white/55">{{ reaction.count }}</span>
                            </li>
                            }
                        </ul>
                    </button>
                </div>
                }
            </div>
        </div>
    </article>
</div>
`, styles: ["/* src/app/features/chat/components/message-item/message-item.scss */\n.c-message-focus {\n  outline: 0.2rem solid rgba(255, 255, 255, 0.65);\n  outline-offset: 0.2rem;\n}\n/*# sourceMappingURL=message-item.css.map */\n"] }]
  }], () => [], { messageResponse: [{ type: Input, args: [{ isSignal: true, alias: "messageResponse", required: true }] }], isPreview: [{ type: Input, args: [{ isSignal: true, alias: "isPreview", required: false }] }], isFocused: [{ type: Input, args: [{ isSignal: true, alias: "isFocused", required: false }] }], applyCurrentUserStyle: [{ type: Input, args: [{ isSignal: true, alias: "applyCurrentUserStyle", required: false }] }], chatRoomId: [{ type: Input, args: [{ isSignal: true, alias: "chatRoomId", required: false }] }], addMessageRequest: [{ type: Input, args: [{ isSignal: true, alias: "addMessageRequest", required: true }] }], editMessageRequest: [{ type: Input, args: [{ isSignal: true, alias: "editMessageRequest", required: true }] }], deleteMessageRequest: [{ type: Input, args: [{ isSignal: true, alias: "deleteMessageRequest", required: false }] }], addReactionRequest: [{ type: Output, args: ["addReactionRequest"] }], quoteReplyRequest: [{ type: Output, args: ["quoteReplyRequest"] }], quoteMessageClickRequest: [{ type: Output, args: ["quoteMessageClickRequest"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageItem, { className: "MessageItem", filePath: "src/app/features/chat/components/message-item/message-item.ts", lineNumber: 30 });
})();

// src/app/features/chat/components/message-input/message-input.ts
var _c03 = ["messageInput"];
function MessageInput_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 9)(2, "button", 10);
    \u0275\u0275listener("click", function MessageInput_Conditional_1_Template_button_click_2_listener() {
      const quote_r3 = \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToMessage(quote_r3.message.id));
    });
    \u0275\u0275element(3, "app-message-item", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function MessageInput_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearQuotedMessage());
    });
    \u0275\u0275element(5, "fa-icon", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("messageResponse", ctx)("isPreview", true)("addMessageRequest", ctx_r3.addMessageRequest())("editMessageRequest", ctx_r3.editMessageRequest());
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r3.faXmark);
  }
}
var MESSAGE_MAX_LENGTH = 255;
var TYPING_THROTTLE_TIME = 500;
var MessageInput = class _MessageInput {
  formBuilder = inject(NonNullableFormBuilder);
  destroyRef = inject(DestroyRef);
  snackBar = inject(MatSnackBar);
  chatWebsocket = inject(ChatWebsocket);
  messageInput = viewChild("messageInput", ...ngDevMode ? [{ debugName: "messageInput" }] : []);
  chatRoomId = input.required(...ngDevMode ? [{ debugName: "chatRoomId" }] : []);
  addMessageRequest = input.required(...ngDevMode ? [{ debugName: "addMessageRequest" }] : []);
  editMessageRequest = input.required(...ngDevMode ? [{ debugName: "editMessageRequest" }] : []);
  quotedMessage = input(void 0, ...ngDevMode ? [{ debugName: "quotedMessage" }] : []);
  message = input(void 0, ...ngDevMode ? [{ debugName: "message" }] : []);
  roundedClass = input("rounded-xl", ...ngDevMode ? [{ debugName: "roundedClass" }] : []);
  goToMessageRequest = output();
  submitSuccess = output();
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  currentQuotedMessage = signal(void 0, ...ngDevMode ? [{ debugName: "currentQuotedMessage" }] : []);
  currentContent = signal("", ...ngDevMode ? [{ debugName: "currentContent" }] : []);
  typingSubject = new Subject();
  messageId = computed(() => this.message()?.id, ...ngDevMode ? [{ debugName: "messageId" }] : []);
  activeQuotedMessage = computed(() => this.currentQuotedMessage(), ...ngDevMode ? [{ debugName: "activeQuotedMessage" }] : []);
  quotedMessageId = computed(() => this.currentQuotedMessage()?.message.id, ...ngDevMode ? [{ debugName: "quotedMessageId" }] : []);
  isEditUnchanged = computed(() => !!this.message() && this.currentContent().trim() === (this.message()?.content || "").trim(), ...ngDevMode ? [{ debugName: "isEditUnchanged" }] : []);
  faPaperPlane = faPaperPlane;
  faXmark = faXmark;
  messageMaxLength = MESSAGE_MAX_LENGTH;
  messageForm = this.formBuilder.group({
    content: [
      "",
      [
        commonFormValidator({
          required: true,
          maxLength: MESSAGE_MAX_LENGTH
        })
      ]
    ]
  });
  constructor() {
    this.messageForm.controls.content.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((content) => {
      this.currentContent.set(content);
    });
    this.typingSubject.pipe(throttleTime(TYPING_THROTTLE_TIME), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.chatWebsocket.sendChatRoomTyping(this.chatRoomId());
    });
    effect(() => {
      const content = this.message()?.content || "";
      this.messageForm.controls.content.setValue(content);
      this.currentContent.set(content);
    });
    effect(() => {
      this.currentQuotedMessage.set(this.quotedMessage());
    });
  }
  onSubmit() {
    if (this.messageForm.invalid || this.isEditUnchanged()) {
      return;
    }
    const message = this.message();
    const messageId = this.messageId();
    const quotedMessageId = this.quotedMessageId();
    const removeQuotedMessage = !!message?.quotedMessageId && !quotedMessageId;
    const content = this.messageForm.controls.content.value.trim();
    const commonBody = {
      content
    };
    let request;
    if (message && messageId) {
      const body = __spreadValues(__spreadProps(__spreadValues({}, commonBody), {
        id: messageId
      }), removeQuotedMessage && { removeQuotedMessage });
      request = this.editMessageRequest()(body);
    } else {
      const body = __spreadValues(__spreadValues({}, commonBody), quotedMessageId && { quotedMessageId });
      request = this.addMessageRequest()(body);
    }
    this.isSubmitting.set(true);
    request.subscribe({
      next: () => {
        this.messageForm.reset();
        this.currentQuotedMessage.set(void 0);
        this.submitSuccess.emit();
        this.isSubmitting.set(false);
      },
      error: (error) => {
        console.error("message submit", error);
        const message2 = error.error?.message || error.error?.error || error.error || "Failed to save message. Please try again.";
        this.snackBar.open(message2, "\u2716", { duration: 3e3, panelClass: "snackbar-error" });
        this.isSubmitting.set(false);
      }
    });
  }
  onMessageInputEnter(event) {
    const keyboardEvent = event;
    if (keyboardEvent.shiftKey) {
      return;
    }
    keyboardEvent.preventDefault();
    this.onSubmit();
  }
  onMessageInput() {
    if (this.message() || !this.messageForm.controls.content.value.trim()) {
      return;
    }
    this.typingSubject.next();
  }
  focusMessageInput() {
    this.messageInput()?.nativeElement.focus();
  }
  clearQuotedMessage() {
    this.currentQuotedMessage.set(void 0);
  }
  goToMessage(messageId) {
    this.goToMessageRequest.emit(messageId);
  }
  static \u0275fac = function MessageInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageInput)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageInput, selectors: [["app-message-input"]], viewQuery: function MessageInput_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.messageInput, _c03, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { chatRoomId: [1, "chatRoomId"], addMessageRequest: [1, "addMessageRequest"], editMessageRequest: [1, "editMessageRequest"], quotedMessage: [1, "quotedMessage"], message: [1, "message"], roundedClass: [1, "roundedClass"] }, outputs: { goToMessageRequest: "goToMessageRequest", submitSuccess: "submitSuccess" }, decls: 10, vars: 12, consts: [["messageInput", ""], [1, "backdrop-blur-3xl", "overflow-visible", "border", "border-white/25", "bg-white/30", 3, "ngClass"], [1, "border-b", "border-white/20", "p-3"], [3, "matchTriggerWidth"], [1, "flex", "items-center", "gap-2", "p-3", "shadow-sm", 3, "ngSubmit", "formGroup"], ["name", "content", "rows", "1", "appSanitizeInput", "", "appAutoResizeTextarea", "", 1, "min-h-11", "flex-1", "resize-none", "rounded-lg", "bg-black/35", "px-3", "py-2", "text-sm", "text-white", "outline-none", "placeholder:text-white/65", 3, "input", "keydown.enter", "formControl", "placeholder", "maxLength"], [3, "loading"], ["type", "submit", 1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-lg", "border", "border-white/25", "bg-white/30", "text-white", "shadow-sm", "transition", "enabled:hover:bg-white/40", "disabled:opacity-60", 3, "disabled"], [1, "leading-0", 3, "icon"], [1, "flex", "items-start", "gap-2"], ["type", "button", "appTelemetryClick", "chat_message_input_open_quote", 1, "min-w-0", "flex-1", "rounded-xl", "bg-black/30", "text-left", 3, "click"], [3, "messageResponse", "isPreview", "addMessageRequest", "editMessageRequest"], ["type", "button", "aria-label", "Cancel quote reply", "appTelemetryClick", "chat_message_input_clear_quote", 1, "mt-2", "flex", "h-7", "w-7", "shrink-0", "items-center", "justify-center", "rounded-full", "text-white/70", "transition", "hover:bg-white/15", "hover:text-white", 3, "click"]], template: function MessageInput_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, MessageInput_Conditional_1_Template, 6, 5, "div", 2);
      \u0275\u0275elementStart(2, "app-auth-action", 3)(3, "form", 4);
      \u0275\u0275listener("ngSubmit", function MessageInput_Template_form_ngSubmit_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(4, "textarea", 5, 0);
      \u0275\u0275listener("input", function MessageInput_Template_textarea_input_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMessageInput());
      })("keydown.enter", function MessageInput_Template_textarea_keydown_enter_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMessageInputEnter($event));
      });
      \u0275\u0275text(6, "            ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "app-loading-button", 6)(8, "button", 7);
      \u0275\u0275element(9, "fa-icon", 8);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275classProp("pointer-events-none", ctx.isSubmitting());
      \u0275\u0275property("ngClass", ctx.roundedClass());
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_3_0 = ctx.activeQuotedMessage()) ? 1 : -1, tmp_3_0);
      \u0275\u0275advance();
      \u0275\u0275property("matchTriggerWidth", true);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.messageForm);
      const contentControl_r5 = ctx.messageForm.controls.content;
      \u0275\u0275advance();
      \u0275\u0275property("formControl", contentControl_r5)("placeholder", "Write a message")("maxLength", ctx.messageMaxLength);
      \u0275\u0275advance(3);
      \u0275\u0275property("loading", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.messageForm.invalid || ctx.isSubmitting() || ctx.isEditUnchanged());
      \u0275\u0275advance();
      \u0275\u0275property("icon", ctx.faPaperPlane);
    }
  }, dependencies: () => [NgClass, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, AuthAction, FontAwesomeModule, FaIconComponent, SanitizeInput, LoadingButton, AutoResizeTextarea, TelemetryClick, MessageItem], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageInput, [{
    type: Component,
    args: [{ selector: "app-message-input", imports: [NgClass, ReactiveFormsModule, AuthAction, FontAwesomeModule, SanitizeInput, LoadingButton, AutoResizeTextarea, TelemetryClick, forwardRef(() => MessageItem)], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="backdrop-blur-3xl overflow-visible border border-white/25 bg-white/30" [ngClass]="roundedClass()"
    [class.pointer-events-none]="isSubmitting()">
    @if (activeQuotedMessage(); as quote) {
    <div class="border-b border-white/20 p-3">
        <div class="flex items-start gap-2">
            <button type="button" class="min-w-0 flex-1 rounded-xl bg-black/30 text-left"
                appTelemetryClick="chat_message_input_open_quote" (click)="goToMessage(quote.message.id)">
                <app-message-item [messageResponse]="quote" [isPreview]="true" [addMessageRequest]="addMessageRequest()"
                    [editMessageRequest]="editMessageRequest()">
                </app-message-item>
            </button>
            <button type="button"
                class="mt-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/70 transition hover:bg-white/15 hover:text-white"
                aria-label="Cancel quote reply" appTelemetryClick="chat_message_input_clear_quote"
                (click)="clearQuotedMessage()">
                <fa-icon [icon]="faXmark" class="leading-0"></fa-icon>
            </button>
        </div>
    </div>
    }
    <app-auth-action [matchTriggerWidth]="true">
        <form [formGroup]="messageForm" (ngSubmit)="onSubmit()" class="flex items-center gap-2 p-3 shadow-sm">
            @let contentControl=messageForm.controls.content;
            <textarea #messageInput [formControl]="contentControl"
                class="min-h-11 flex-1 resize-none rounded-lg bg-black/35 px-3 py-2 text-sm text-white outline-none placeholder:text-white/65"
                [placeholder]="'Write a message'" name="content" rows="1" [maxLength]="messageMaxLength"
                appSanitizeInput appAutoResizeTextarea (input)="onMessageInput()"
                (keydown.enter)="onMessageInputEnter($event)">
            </textarea>

            <app-loading-button [loading]="isSubmitting()">
                <button type="submit" [disabled]="messageForm.invalid || isSubmitting() || isEditUnchanged()"
                    class="flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 bg-white/30 text-white shadow-sm transition enabled:hover:bg-white/40 disabled:opacity-60">
                    <fa-icon [icon]="faPaperPlane" class="leading-0"></fa-icon>
                </button>
            </app-loading-button>
        </form>
    </app-auth-action>
</div>` }]
  }], () => [], { messageInput: [{ type: ViewChild, args: ["messageInput", { isSignal: true }] }], chatRoomId: [{ type: Input, args: [{ isSignal: true, alias: "chatRoomId", required: true }] }], addMessageRequest: [{ type: Input, args: [{ isSignal: true, alias: "addMessageRequest", required: true }] }], editMessageRequest: [{ type: Input, args: [{ isSignal: true, alias: "editMessageRequest", required: true }] }], quotedMessage: [{ type: Input, args: [{ isSignal: true, alias: "quotedMessage", required: false }] }], message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: false }] }], roundedClass: [{ type: Input, args: [{ isSignal: true, alias: "roundedClass", required: false }] }], goToMessageRequest: [{ type: Output, args: ["goToMessageRequest"] }], submitSuccess: [{ type: Output, args: ["submitSuccess"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageInput, { className: "MessageInput", filePath: "src/app/features/chat/components/message-input/message-input.ts", lineNumber: 29 });
})();

// src/app/features/chat/components/message-list/message-list.ts
var _forTrack03 = ($index, $item) => $item.message.id;
function MessageList_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementEnd();
  }
}
function MessageList_Conditional_1_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "app-message-item", 11);
    \u0275\u0275listener("addReactionRequest", function MessageList_Conditional_1_Conditional_1_For_3_Template_app_message_item_addReactionRequest_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addReaction($event));
    })("quoteReplyRequest", function MessageList_Conditional_1_Conditional_1_For_3_Template_app_message_item_quoteReplyRequest_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.quoteReply($event));
    })("quoteMessageClickRequest", function MessageList_Conditional_1_Conditional_1_For_3_Template_app_message_item_quoteMessageClickRequest_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToMessage($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("data-message-id", message_r5.message.id);
    \u0275\u0275advance();
    \u0275\u0275property("messageResponse", message_r5)("isFocused", ctx_r2.focusedMessageId() === message_r5.message.id)("applyCurrentUserStyle", ctx_r2.applyCurrentUserStyle())("chatRoomId", ctx_r2.chatRoomId())("addMessageRequest", ctx_r2.addMessageRequest())("editMessageRequest", ctx_r2.editMessageRequest())("deleteMessageRequest", ctx_r2.deleteMessageRequest());
  }
}
function MessageList_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-infinite-scroll", 9);
    \u0275\u0275listener("reachedStart", function MessageList_Conditional_1_Conditional_1_Template_app_infinite_scroll_reachedStart_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.loadMoreMessages("OLDER"));
    })("reachedEnd", function MessageList_Conditional_1_Conditional_1_Template_app_infinite_scroll_reachedEnd_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.loadMoreMessages("NEWER"));
    });
    \u0275\u0275elementStart(1, "ul", 10);
    \u0275\u0275repeaterCreate(2, MessageList_Conditional_1_Conditional_1_For_3_Template, 2, 8, "li", null, _forTrack03);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("loadingStart", ctx_r2.isLoadingOlderMessages())("loadingEnd", ctx_r2.isLoadingNewerMessages())("disabled", ctx_r2.isGoingToMessage());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.messages());
  }
}
function MessageList_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 12);
    \u0275\u0275text(2, "No messages yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4, "Start the first global conversation.");
    \u0275\u0275elementEnd()();
  }
}
function MessageList_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-animated-dots", 14);
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.typingUsersText(ctx_r2.typingUsers()));
  }
}
function MessageList_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function MessageList_Conditional_1_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.jumpToBottom());
    });
    \u0275\u0275element(1, "fa-icon", 17);
    \u0275\u0275elementStart(2, "span", 18);
    \u0275\u0275text(3, "Jump to bottom");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.faArrowDown);
  }
}
function MessageList_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, MessageList_Conditional_1_Conditional_1_Template, 4, 3, "app-infinite-scroll", 3)(2, MessageList_Conditional_1_Conditional_2_Template, 5, 0, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275conditionalCreate(4, MessageList_Conditional_1_Conditional_4_Template, 4, 1, "div", 6);
    \u0275\u0275conditionalCreate(5, MessageList_Conditional_1_Conditional_5_Template, 4, 1, "button", 7);
    \u0275\u0275elementStart(6, "app-message-input", 8);
    \u0275\u0275listener("goToMessageRequest", function MessageList_Conditional_1_Template_app_message_input_goToMessageRequest_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToMessage($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.messages().length ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.typingUsers().length ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isAwayFromEnd() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("chatRoomId", ctx_r2.chatRoomId())("addMessageRequest", ctx_r2.addMessageRequest())("editMessageRequest", ctx_r2.editMessageRequest())("quotedMessage", ctx_r2.quotedMessage());
  }
}
var TYPING_NAME_MAX_LENGTH = 24;
var MessageList = class _MessageList {
  chatState = inject(ChatState);
  chatMessage = inject(ChatMessage);
  auth = inject(Auth);
  platformService = inject(Platform);
  elementRef = inject(ElementRef);
  injector = inject(Injector);
  destroyRef = inject(DestroyRef);
  messageInput = viewChild(MessageInput, ...ngDevMode ? [{ debugName: "messageInput" }] : []);
  hasRequestedInitialMessages = false;
  authUserId;
  olderMessageCursor;
  newerMessageCursor;
  messageLimit = 20;
  olderDirection = "OLDER";
  newerDirection = "NEWER";
  authState = this.auth.authState;
  messages = signal([], ...ngDevMode ? [{ debugName: "messages" }] : []);
  quotedMessage = signal(void 0, ...ngDevMode ? [{ debugName: "quotedMessage" }] : []);
  focusedMessageId = signal(void 0, ...ngDevMode ? [{ debugName: "focusedMessageId" }] : []);
  isGoingToMessage = signal(false, ...ngDevMode ? [{ debugName: "isGoingToMessage" }] : []);
  isPageLoaded = signal(false, ...ngDevMode ? [{ debugName: "isPageLoaded" }] : []);
  isLoadingOlderMessages = signal(false, ...ngDevMode ? [{ debugName: "isLoadingOlderMessages" }] : []);
  isLoadingNewerMessages = signal(false, ...ngDevMode ? [{ debugName: "isLoadingNewerMessages" }] : []);
  isMainLoading = signal(true, ...ngDevMode ? [{ debugName: "isMainLoading" }] : []);
  distanceFromEnd = signal(0, ...ngDevMode ? [{ debugName: "distanceFromEnd" }] : []);
  isAwayFromEnd = signal(false, ...ngDevMode ? [{ debugName: "isAwayFromEnd" }] : []);
  typingUsers = computed(() => this.chatState.typingUsers().filter((typingUser) => typingUser.chatRoomId === this.chatRoomId()), ...ngDevMode ? [{ debugName: "typingUsers" }] : []);
  faArrowDown = faArrowDown;
  chatRoomId = input.required(...ngDevMode ? [{ debugName: "chatRoomId" }] : []);
  getMessagesRequest = input(...ngDevMode ? [void 0, { debugName: "getMessagesRequest" }] : []);
  addMessageRequest = input.required(...ngDevMode ? [{ debugName: "addMessageRequest" }] : []);
  editMessageRequest = input.required(...ngDevMode ? [{ debugName: "editMessageRequest" }] : []);
  deleteMessageRequest = input.required(...ngDevMode ? [{ debugName: "deleteMessageRequest" }] : []);
  isLiveMessageAllowed = input(() => true, ...ngDevMode ? [{ debugName: "isLiveMessageAllowed" }] : []);
  applyCurrentUserStyle = input(false, ...ngDevMode ? [{ debugName: "applyCurrentUserStyle" }] : []);
  addReactionRequest = output();
  constructor() {
    effect(() => {
      if (!this.platformService.isBrowser()) {
        return;
      }
      const state = this.authState();
      if (!state.completed || !this.getMessagesRequest()) {
        return;
      }
      const authUserId = state.user?.id ?? null;
      if (!this.hasRequestedInitialMessages) {
        this.hasRequestedInitialMessages = true;
        this.authUserId = authUserId;
        this.loadInitialMessages();
        return;
      }
      if (this.authUserId !== authUserId) {
        this.authUserId = authUserId;
        this.loadInitialMessages();
      }
    });
    effect(() => {
      const liveMessage = this.chatState.liveMessage();
      if (!liveMessage) {
        return;
      }
      const message = liveMessage.message;
      const isMessageAdd = liveMessage.action === "ADD";
      const shouldScrollToBottom = untracked(() => isMessageAdd && (!this.isAwayFromEnd() || this.chatMessage.isCurrentUserAuthor(message.author)));
      this.messages.update((messages) => {
        if (!this.isLiveMessageAllowed()(message)) {
          return messages;
        }
        if (isMessageAdd) {
          if (this.newerMessageCursor) {
            return messages;
          }
          return [...messages, message];
        } else {
          if (messages.some((item) => item.message.id === message.message.id)) {
            return messages.map((item) => item.message.id === message.message.id ? __spreadProps(__spreadValues(__spreadValues({}, item), message), {
              message: __spreadValues(__spreadValues({}, item.message), message.message)
            }) : item);
          }
          return messages;
        }
      });
      if (shouldScrollToBottom) {
        this.jumpToBottom();
      }
    });
  }
  loadInitialMessages(params) {
    this.olderMessageCursor = void 0;
    this.newerMessageCursor = void 0;
    this.messages.set([]);
    this.chatState.liveMessage.set(null);
    const request = this.messagesRequest({ direction: this.olderDirection });
    if (!request) {
      return;
    }
    this.isMainLoading.set(true);
    request.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (messagesPage) => {
        console.log("messagesPage", messagesPage);
        const messages = [...messagesPage.items].reverse();
        this.messages.update((currentMessages) => messages.concat(currentMessages));
        this.isPageLoaded.set(true);
        this.isMainLoading.set(false);
        this.isGoingToMessage.set(true);
        this.scrollToBottom({
          scrollOptions: params?.scrollOptions,
          onComplete: () => {
            this.isGoingToMessage.set(false);
          }
        });
      },
      error: (error) => {
        console.error(error);
        this.isPageLoaded.set(true);
        this.isMainLoading.set(false);
      }
    });
  }
  loadMoreMessages(direction) {
    switch (direction) {
      case this.olderDirection:
        if (!this.olderMessageCursor) {
          return;
        }
        break;
      case this.newerDirection:
        if (!this.newerMessageCursor) {
          return;
        }
        break;
    }
    const request = this.messagesRequest({ direction });
    if (!request) {
      return;
    }
    this.setLoadingMoreMessages(direction, true);
    request.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (messagesPage) => {
        console.log("messagesPage", messagesPage);
        this.setLoadingMoreMessages(direction, false);
        switch (direction) {
          case this.olderDirection:
            const distanceFromBottom = this.getDistanceFromBottom();
            this.messages.update((currentMessages) => [...messagesPage.items].reverse().concat(currentMessages));
            this.restoreDistanceFromBottom(distanceFromBottom);
            break;
          case this.newerDirection:
            this.messages.update((currentMessages) => currentMessages.concat(messagesPage.items));
            break;
        }
      },
      error: (error) => {
        console.error(error);
        this.isPageLoaded.set(true);
        this.setLoadingMoreMessages(direction, false);
      }
    });
  }
  setLoadingMoreMessages(direction, loading) {
    switch (direction) {
      case this.olderDirection:
        this.isLoadingOlderMessages.set(loading);
        break;
      case this.newerDirection:
        this.isLoadingNewerMessages.set(loading);
        break;
    }
  }
  messagesRequest(paramsOverride) {
    const getMessagesRequest = this.getMessagesRequest();
    if (!getMessagesRequest) {
      return void 0;
    }
    const direction = paramsOverride?.direction ?? this.olderDirection;
    let cursor;
    switch (direction) {
      case this.olderDirection:
        cursor = this.olderMessageCursor;
        break;
      case this.newerDirection:
        cursor = this.newerMessageCursor;
        break;
    }
    const params = __spreadValues({
      cursor,
      limit: this.messageLimit,
      direction
    }, paramsOverride);
    const request = getMessagesRequest(params);
    if (!request) {
      return void 0;
    }
    return request.pipe(tap((messagesPage) => {
      switch (params.direction) {
        case this.olderDirection:
          this.olderMessageCursor = messagesPage.nextCursor ?? void 0;
          break;
        case this.newerDirection:
          this.newerMessageCursor = messagesPage.nextCursor ?? void 0;
          break;
      }
    }));
  }
  addReaction(request) {
    this.addReactionRequest.emit(request);
  }
  typingUsersText(typingUsers) {
    const names = typingUsers.map((typingUser) => this.truncateTypingName(getAuthorDisplayName(typingUser.author)));
    if (names.length === 1) {
      return `${names[0]} is typing...`;
    }
    if (names.length === 2) {
      return `${names[0]} and ${names[1]} are typing...`;
    }
    return `${names[0]}, ${names[1]} and ${names.length - 2} others are typing...`;
  }
  truncateTypingName(name) {
    if (!name || name.length <= TYPING_NAME_MAX_LENGTH) {
      return name;
    }
    return `${name.slice(0, TYPING_NAME_MAX_LENGTH - 3)}...`;
  }
  quoteReply(message) {
    this.quotedMessage.set({
      message: message.message,
      author: message.author
    });
    this.focusMessageInput();
  }
  goToMessage(messageId) {
    if (this.scrollToMessage(messageId, () => {
      this.focusMessage(messageId);
    })) {
      return;
    }
    const messageDirectinLimit = this.messageLimit / 2;
    const olderRequest = this.messagesRequest({
      cursor: messageId,
      limit: messageDirectinLimit,
      direction: this.olderDirection
    });
    const newerRequest = this.messagesRequest({
      cursor: messageId + 1,
      limit: messageDirectinLimit,
      direction: this.newerDirection
    });
    if (!olderRequest || !newerRequest) {
      return;
    }
    this.isMainLoading.set(true);
    this.isGoingToMessage.set(true);
    forkJoin([olderRequest, newerRequest]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: ([olderMessagesPage, newerMessagesPage]) => {
        const olderMessages = [...olderMessagesPage.items].reverse();
        const newerMessages = newerMessagesPage.items;
        const allMessages = [...olderMessages, ...newerMessages];
        this.messages.set(allMessages);
        this.isMainLoading.set(false);
        if (this.destroyRef.destroyed) {
          return;
        }
        afterNextRender(() => {
          if (this.destroyRef.destroyed) {
            return;
          }
          this.scrollToBottom();
          setTimeout(() => {
            if (this.destroyRef.destroyed) {
              return;
            }
            const isScrollingToMessage = this.scrollToMessage(messageId, () => {
              this.focusMessage(messageId);
              this.isGoingToMessage.set(false);
            });
            if (!isScrollingToMessage) {
              this.isGoingToMessage.set(false);
            }
          });
        }, {
          injector: this.injector
        });
      },
      error: (error) => {
        console.error(error);
        this.isMainLoading.set(false);
        this.isGoingToMessage.set(false);
      }
    });
  }
  focusMessageInput() {
    this.messageInput()?.focusMessageInput();
  }
  jumpToBottom() {
    if (this.newerMessageCursor) {
      this.loadInitialMessages({
        scrollOptions: { behavior: "smooth" }
      });
    } else {
      this.isGoingToMessage.set(true);
      this.scrollToBottom({
        scrollOptions: { behavior: "smooth" },
        onComplete: () => {
          this.isGoingToMessage.set(false);
        }
      });
    }
  }
  focusMessage(messageId) {
    this.focusedMessageId.set(messageId);
  }
  clearFocusedMessage() {
    this.focusedMessageId.set(void 0);
  }
  updateEndReachedState() {
    if (!this.platformService.isBrowser()) {
      return;
    }
    const { bottom } = this.elementRef.nativeElement.getBoundingClientRect();
    const distanceFromEnd = bottom - window.innerHeight;
    this.distanceFromEnd.set(distanceFromEnd);
    this.isAwayFromEnd.set(distanceFromEnd > 100);
  }
  scrollToBottom(params) {
    if (this.destroyRef.destroyed) {
      return;
    }
    afterNextRender(() => {
      if (this.destroyRef.destroyed) {
        return;
      }
      scrollIntoView({
        element: this.elementRef.nativeElement,
        scrollOptions: __spreadValues({ block: "end" }, params?.scrollOptions),
        onComplete: params?.onComplete
      });
    }, {
      injector: this.injector
    });
  }
  scrollToMessage(messageId, onComplete) {
    const messageElement = this.elementRef.nativeElement.querySelector(`[data-message-id="${messageId}"]`);
    if (!messageElement) {
      return false;
    }
    scrollIntoView({
      element: messageElement,
      scrollOptions: {
        block: "center",
        behavior: "smooth"
      },
      onComplete
    });
    return true;
  }
  getDistanceFromBottom() {
    return document.documentElement.scrollHeight - window.scrollY;
  }
  restoreDistanceFromBottom(distanceFromBottom) {
    if (distanceFromBottom === void 0) {
      return;
    }
    if (this.destroyRef.destroyed) {
      return;
    }
    afterNextRender(() => {
      if (this.destroyRef.destroyed) {
        return;
      }
      window.scrollTo({
        top: document.documentElement.scrollHeight - distanceFromBottom
      });
    }, {
      injector: this.injector
    });
  }
  static \u0275fac = function MessageList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageList, selectors: [["app-message-list"]], viewQuery: function MessageList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.messageInput, MessageInput, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostBindings: function MessageList_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function MessageList_click_HostBindingHandler() {
        return ctx.clearFocusedMessage();
      }, \u0275\u0275resolveDocument)("scroll", function MessageList_scroll_HostBindingHandler() {
        return ctx.updateEndReachedState();
      }, \u0275\u0275resolveWindow)("resize", function MessageList_resize_HostBindingHandler() {
        return ctx.updateEndReachedState();
      }, \u0275\u0275resolveWindow);
    }
  }, inputs: { chatRoomId: [1, "chatRoomId"], getMessagesRequest: [1, "getMessagesRequest"], addMessageRequest: [1, "addMessageRequest"], editMessageRequest: [1, "editMessageRequest"], deleteMessageRequest: [1, "deleteMessageRequest"], isLiveMessageAllowed: [1, "isLiveMessageAllowed"], applyCurrentUserStyle: [1, "applyCurrentUserStyle"] }, outputs: { addReactionRequest: "addReactionRequest" }, decls: 2, vars: 1, consts: [[1, "flex", "justify-center", "items-center", "p-5", "grow"], [1, "u-spinner", "h-16", "w-16", "border-b-4", "border-white"], [1, "grow"], ["spinnerClass", "border-b-4 border-white", 3, "loadingStart", "loadingEnd", "disabled"], [1, "rounded-xl", "border", "border-white/15", "bg-white/10", "px-4", "py-10", "text-center", "text-white/80", "backdrop-blur-sm"], [1, "sticky", "bottom-0", "mt-3", "overflow-visible"], [1, "mb-1", "flex", "items-center", "gap-2", "rounded-md", "bg-white/10", "px-3", "py-1", "text-sm", "font-medium", "text-white/80", "backdrop-blur-3xl"], ["type", "button", "aria-label", "Jump to bottom", "appTelemetryClick", "chat_message_list_jump_to_bottom", 1, "backdrop-blur-3xl", "u-absolute-center-x", "-top-12", "z-10", "flex", "items-center", "gap-2", "rounded-full", "border", "border-white/25", "bg-white/30", "px-3", "py-1", "text-white", "shadow-lg", "shadow-black/20", "transition", "hover:bg-white/40"], ["roundedClass", "rounded-t-xl", 3, "goToMessageRequest", "chatRoomId", "addMessageRequest", "editMessageRequest", "quotedMessage"], ["spinnerClass", "border-b-4 border-white", 3, "reachedStart", "reachedEnd", "loadingStart", "loadingEnd", "disabled"], [1, "space-y-3"], [3, "addReactionRequest", "quoteReplyRequest", "quoteMessageClickRequest", "messageResponse", "isFocused", "applyCurrentUserStyle", "chatRoomId", "addMessageRequest", "editMessageRequest", "deleteMessageRequest"], [1, "text-lg", "font-semibold", "text-white"], [1, "mt-1", "text-sm"], [1, "text-white/80"], [1, "min-w-0", "truncate"], ["type", "button", "aria-label", "Jump to bottom", "appTelemetryClick", "chat_message_list_jump_to_bottom", 1, "backdrop-blur-3xl", "u-absolute-center-x", "-top-12", "z-10", "flex", "items-center", "gap-2", "rounded-full", "border", "border-white/25", "bg-white/30", "px-3", "py-1", "text-white", "shadow-lg", "shadow-black/20", "transition", "hover:bg-white/40", 3, "click"], [1, "text-base", "font-semibold", 3, "icon"], [1, "text-nowrap", "text-base", "font-semibold"]], template: function MessageList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, MessageList_Conditional_0_Template, 2, 0, "div", 0)(1, MessageList_Conditional_1_Template, 7, 7);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isMainLoading() ? 0 : 1);
    }
  }, dependencies: [FontAwesomeModule, FaIconComponent, MessageInput, MessageItem, InfiniteScroll, AnimatedDots, TelemetryClick], styles: ["\n\n[_nghost-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=message-list.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageList, [{
    type: Component,
    args: [{ selector: "app-message-list", imports: [FontAwesomeModule, MessageInput, MessageItem, InfiniteScroll, AnimatedDots, TelemetryClick], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (isMainLoading()) {
<div class="flex justify-center items-center p-5 grow">
    <div class="u-spinner h-16 w-16 border-b-4 border-white"></div>
</div>
} @else {
<div class="grow">
    @if (messages().length) {
    <app-infinite-scroll [loadingStart]="isLoadingOlderMessages()" [loadingEnd]="isLoadingNewerMessages()"
        [disabled]="isGoingToMessage()" spinnerClass="border-b-4 border-white"
        (reachedStart)="loadMoreMessages('OLDER')" (reachedEnd)="loadMoreMessages('NEWER')">
        <ul class="space-y-3">
            @for (message of messages(); track message.message.id) {
            <li [attr.data-message-id]="message.message.id">
                <app-message-item [messageResponse]="message" (addReactionRequest)="addReaction($event)"
                    [isFocused]="focusedMessageId() === message.message.id"
                    [applyCurrentUserStyle]="applyCurrentUserStyle()" [chatRoomId]="chatRoomId()"
                    [addMessageRequest]="addMessageRequest()" [editMessageRequest]="editMessageRequest()"
                    [deleteMessageRequest]="deleteMessageRequest()" (quoteReplyRequest)="quoteReply($event)"
                    (quoteMessageClickRequest)="goToMessage($event)">
                </app-message-item>
            </li>
            }
        </ul>
    </app-infinite-scroll>
    } @else {
    <div class="rounded-xl border border-white/15 bg-white/10 px-4 py-10 text-center text-white/80 backdrop-blur-sm">
        <p class="text-lg font-semibold text-white">No messages yet</p>
        <p class="mt-1 text-sm">Start the first global conversation.</p>
    </div>
    }
</div>

<div class="sticky bottom-0 mt-3 overflow-visible">
    @if (typingUsers().length) {
    <div
        class="mb-1 flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-sm font-medium text-white/80 backdrop-blur-3xl">
        <app-animated-dots class="text-white/80"></app-animated-dots>
        <span class="min-w-0 truncate">{{ typingUsersText(typingUsers()) }}</span>
    </div>
    }
    @if (isAwayFromEnd()) {
    <button type="button"
        class="backdrop-blur-3xl u-absolute-center-x -top-12 z-10 flex items-center gap-2 rounded-full border border-white/25 bg-white/30 px-3 py-1 text-white shadow-lg shadow-black/20 transition hover:bg-white/40"
        aria-label="Jump to bottom" appTelemetryClick="chat_message_list_jump_to_bottom" (click)="jumpToBottom()">
        <fa-icon [icon]="faArrowDown" class=" text-base font-semibold"></fa-icon>
        <span class="text-nowrap text-base font-semibold">Jump to bottom</span>
    </button>
    }
    <app-message-input roundedClass="rounded-t-xl" [chatRoomId]="chatRoomId()" [addMessageRequest]="addMessageRequest()"
        [editMessageRequest]="editMessageRequest()" [quotedMessage]="quotedMessage()"
        (goToMessageRequest)="goToMessage($event)">
    </app-message-input>
</div>
}
`, styles: ["/* src/app/features/chat/components/message-list/message-list.scss */\n:host {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=message-list.css.map */\n"] }]
  }], () => [], { messageInput: [{ type: ViewChild, args: [forwardRef(() => MessageInput), { isSignal: true }] }], chatRoomId: [{ type: Input, args: [{ isSignal: true, alias: "chatRoomId", required: true }] }], getMessagesRequest: [{ type: Input, args: [{ isSignal: true, alias: "getMessagesRequest", required: false }] }], addMessageRequest: [{ type: Input, args: [{ isSignal: true, alias: "addMessageRequest", required: true }] }], editMessageRequest: [{ type: Input, args: [{ isSignal: true, alias: "editMessageRequest", required: true }] }], deleteMessageRequest: [{ type: Input, args: [{ isSignal: true, alias: "deleteMessageRequest", required: true }] }], isLiveMessageAllowed: [{ type: Input, args: [{ isSignal: true, alias: "isLiveMessageAllowed", required: false }] }], applyCurrentUserStyle: [{ type: Input, args: [{ isSignal: true, alias: "applyCurrentUserStyle", required: false }] }], addReactionRequest: [{ type: Output, args: ["addReactionRequest"] }], clearFocusedMessage: [{
    type: HostListener,
    args: ["document:click"]
  }], updateEndReachedState: [{
    type: HostListener,
    args: ["window:scroll"]
  }, {
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageList, { className: "MessageList", filePath: "src/app/features/chat/components/message-list/message-list.ts", lineNumber: 28 });
})();

// src/app/features/chat/components/chat-room/chat-room.ts
var ChatRoom = class _ChatRoom {
  chatRoomId = input(...ngDevMode ? [void 0, { debugName: "chatRoomId" }] : []);
  chatApi = inject(ChatApi);
  snackBar = inject(MatSnackBar);
  getMessagesRequest = (params) => {
    const chatRoomId = this.chatRoomId();
    if (!chatRoomId) {
      return throwError(() => new Error("Chat room id is required to get messages"));
    }
    return this.chatApi.getChatRoomMessages(chatRoomId, params);
  };
  addMessageRequest = (body) => {
    const chatRoomId = this.chatRoomId();
    if (!chatRoomId) {
      return throwError(() => new Error("Chat room id is required to add message"));
    }
    return this.chatApi.addChatRoomMessage(chatRoomId, body);
  };
  editMessageRequest = (body) => {
    const chatRoomId = this.chatRoomId();
    if (!chatRoomId) {
      return throwError(() => new Error("Chat room id is required to edit message"));
    }
    return this.chatApi.editChatRoomMessage(chatRoomId, body);
  };
  deleteMessageRequest = (messageId) => {
    const chatRoomId = this.chatRoomId();
    if (!chatRoomId) {
      return throwError(() => new Error("Chat room id is required to delete message"));
    }
    return this.chatApi.deleteChatRoomMessage(chatRoomId, messageId);
  };
  addReaction(request) {
    this.chatApi.addChatRoomMessageReaction(request.messageId, {
      emoji: request.emoji
    }).pipe(finalize(request.onComplete)).subscribe({
      error: (error) => {
        console.error("Error adding message reaction", error);
        request.onError();
        this.snackBar.open(request.emoji ? "Failed to add reaction" : "Failed to remove reaction", "\u2716", {
          duration: 3e3,
          panelClass: "snackbar-error"
        });
      }
    });
  }
  isLiveMessageAllowed = (message) => this.chatRoomId() === message.chatRoomId;
  static \u0275fac = function ChatRoom_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatRoom)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatRoom, selectors: [["app-chat-room"]], inputs: { chatRoomId: [1, "chatRoomId"] }, decls: 1, vars: 7, consts: [[3, "addReactionRequest", "getMessagesRequest", "addMessageRequest", "editMessageRequest", "deleteMessageRequest", "chatRoomId", "isLiveMessageAllowed", "applyCurrentUserStyle"]], template: function ChatRoom_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-message-list", 0);
      \u0275\u0275listener("addReactionRequest", function ChatRoom_Template_app_message_list_addReactionRequest_0_listener($event) {
        return ctx.addReaction($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("getMessagesRequest", ctx.chatRoomId() ? ctx.getMessagesRequest : void 0)("addMessageRequest", ctx.addMessageRequest)("editMessageRequest", ctx.editMessageRequest)("deleteMessageRequest", ctx.deleteMessageRequest)("chatRoomId", ctx.chatRoomId())("isLiveMessageAllowed", ctx.isLiveMessageAllowed)("applyCurrentUserStyle", true);
    }
  }, dependencies: [MessageList], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=chat-room.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatRoom, [{
    type: Component,
    args: [{ selector: "app-chat-room", imports: [MessageList], changeDetection: ChangeDetectionStrategy.OnPush, template: '<app-message-list [getMessagesRequest]="chatRoomId()?getMessagesRequest:undefined"\n  [addMessageRequest]="addMessageRequest" [editMessageRequest]="editMessageRequest"\n  [deleteMessageRequest]="deleteMessageRequest"\n  [chatRoomId]="chatRoomId()!" [isLiveMessageAllowed]="isLiveMessageAllowed" [applyCurrentUserStyle]="true"\n  (addReactionRequest)="addReaction($event)">\n</app-message-list>\n', styles: ["/* src/app/features/chat/components/chat-room/chat-room.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=chat-room.css.map */\n"] }]
  }], null, { chatRoomId: [{ type: Input, args: [{ isSignal: true, alias: "chatRoomId", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatRoom, { className: "ChatRoom", filePath: "src/app/features/chat/components/chat-room/chat-room.ts", lineNumber: 15 });
})();

export {
  ChatRoom
};
/*! Bundled license information:

@fortawesome/free-regular-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2025 Fonticons, Inc.
   *)
*/
//# sourceMappingURL=chunk-P66O7N66.js.map
