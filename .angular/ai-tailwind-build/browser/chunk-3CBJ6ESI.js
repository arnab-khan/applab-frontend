import {
  userProfileLink
} from "./chunk-JVJFHH6Q.js";
import {
  ProfileApiService
} from "./chunk-DL2RIVMB.js";
import {
  Thumbnail
} from "./chunk-D4WB7EDJ.js";
import {
  RouterLink
} from "./chunk-32HUML7N.js";
import {
  NgClass
} from "./chunk-SRWWUAG3.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  computed,
  contentChild,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7MOHRCPT.js";

// src/app/shared/utils/author.ts
function getAuthorDisplayName(author) {
  return author.type === "GUEST" ? `Guest #${author.id}` : author.name;
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

export {
  getAuthorDisplayName,
  AuthorSummary
};
//# sourceMappingURL=chunk-3CBJ6ESI.js.map
