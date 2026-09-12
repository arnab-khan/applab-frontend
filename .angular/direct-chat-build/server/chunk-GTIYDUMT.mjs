import './polyfills.server.mjs';
import {
  Platform2 as Platform
} from "./chunk-53NQCPJ5.mjs";
import {
  NgClass
} from "./chunk-TNROARYC.mjs";
import {
  Component,
  ElementRef,
  Input,
  Output,
  ViewChild,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵviewQuerySignal
} from "./chunk-XAQLVFTN.mjs";

// src/app/shared/components/data-display/infinite-scroll/infinite-scroll.ts
var _c0 = ["topSentinel"];
var _c1 = ["bottomSentinel"];
var _c2 = ["*"];
function InfiniteScroll_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.spinnerClass());
  }
}
function InfiniteScroll_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.spinnerClass());
  }
}
var InfiniteScroll = class _InfiniteScroll {
  platform = inject(Platform);
  elementRef = inject(ElementRef);
  topSentinel = viewChild("topSentinel", ...ngDevMode ? [{ debugName: "topSentinel" }] : []);
  bottomSentinel = viewChild("bottomSentinel", ...ngDevMode ? [{ debugName: "bottomSentinel" }] : []);
  loadingStart = input(false, ...ngDevMode ? [{ debugName: "loadingStart" }] : []);
  loadingEnd = input(false, ...ngDevMode ? [{ debugName: "loadingEnd" }] : []);
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  useElementScroll = input(false, ...ngDevMode ? [{ debugName: "useElementScroll" }] : []);
  spinnerClass = input("", ...ngDevMode ? [{ debugName: "spinnerClass" }] : []);
  reachedStart = output();
  reachedEnd = output();
  hasTriggeredStartSinceExit = false;
  hasTriggeredEndSinceExit = false;
  isLoadingStart() {
    return this.loadingStart();
  }
  isLoadingEnd() {
    return this.loadingEnd();
  }
  constructor() {
    effect((onCleanup) => {
      if (!this.platform.isBrowser()) {
        return;
      }
      if (this.disabled()) {
        this.hasTriggeredStartSinceExit = false;
        this.hasTriggeredEndSinceExit = false;
        return;
      }
      const topTarget = this.topSentinel()?.nativeElement;
      const bottomTarget = this.bottomSentinel()?.nativeElement;
      const root = this.useElementScroll() ? this.elementRef.nativeElement : null;
      if (!topTarget || !bottomTarget) {
        return;
      }
      const topObserver = this.createScrollObserver("start", "200px 0px 0px 0px", root);
      const bottomObserver = this.createScrollObserver("end", "0px 0px 200px 0px", root);
      topObserver.observe(topTarget);
      bottomObserver.observe(bottomTarget);
      onCleanup(() => {
        topObserver.disconnect();
        bottomObserver.disconnect();
      });
    });
  }
  createScrollObserver(direction, rootMargin, root) {
    return new IntersectionObserver(
      // `entry` describes how much the sentinel is intersecting with the viewport.
      ([entry]) => {
        if (!entry) {
          return;
        }
        if (!entry.isIntersecting) {
          this.setHasTriggeredSinceExit(direction, false);
          return;
        }
        if (this.getHasTriggeredSinceExit(direction) || this.isLoadingDirection(direction)) {
          return;
        }
        this.setHasTriggeredSinceExit(direction, true);
        this.emitReached(direction);
      },
      {
        // Trigger about 200px before the sentinel reaches the scroll boundary,
        // and fire as soon as any part of the sentinel enters that area.
        root,
        rootMargin,
        threshold: 0
      }
    );
  }
  getHasTriggeredSinceExit(direction) {
    return direction === "start" ? this.hasTriggeredStartSinceExit : this.hasTriggeredEndSinceExit;
  }
  setHasTriggeredSinceExit(direction, value) {
    if (direction === "start") {
      this.hasTriggeredStartSinceExit = value;
      return;
    }
    this.hasTriggeredEndSinceExit = value;
  }
  isLoadingDirection(direction) {
    return direction === "start" ? this.loadingStart() : this.loadingEnd();
  }
  emitReached(direction) {
    if (direction === "start") {
      this.reachedStart.emit();
      return;
    }
    this.reachedEnd.emit();
  }
  static \u0275fac = function InfiniteScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfiniteScroll)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfiniteScroll, selectors: [["app-infinite-scroll"]], viewQuery: function InfiniteScroll_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.topSentinel, _c0, 5);
      \u0275\u0275viewQuerySignal(ctx.bottomSentinel, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, inputs: { loadingStart: [1, "loadingStart"], loadingEnd: [1, "loadingEnd"], disabled: [1, "disabled"], useElementScroll: [1, "useElementScroll"], spinnerClass: [1, "spinnerClass"] }, outputs: { reachedStart: "reachedStart", reachedEnd: "reachedEnd" }, ngContentSelectors: _c2, decls: 8, vars: 2, consts: [["topSentinel", ""], ["bottomSentinel", ""], [1, "c-infinite-scroll"], ["aria-hidden", "true", 1, "c-infinite-scroll__sentinel"], [1, "flex", "justify-center", "items-center", "py-6"], [1, "u-spinner", 3, "ngClass"]], template: function InfiniteScroll_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275element(1, "div", 3, 0);
      \u0275\u0275conditionalCreate(3, InfiniteScroll_Conditional_3_Template, 2, 1, "div", 4);
      \u0275\u0275projection(4);
      \u0275\u0275conditionalCreate(5, InfiniteScroll_Conditional_5_Template, 2, 1, "div", 4);
      \u0275\u0275element(6, "div", 3, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isLoadingStart() ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoadingEnd() ? 5 : -1);
    }
  }, dependencies: [NgClass], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.c-infinite-scroll__sentinel[_ngcontent-%COMP%] {\n  block-size: 1px;\n  inline-size: 100%;\n  pointer-events: none;\n}\n/*# sourceMappingURL=infinite-scroll.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfiniteScroll, [{
    type: Component,
    args: [{ selector: "app-infinite-scroll", imports: [NgClass], template: '<div class="c-infinite-scroll">\n  <div #topSentinel class="c-infinite-scroll__sentinel" aria-hidden="true"></div>\n  @if (isLoadingStart()) {\n  <div class="flex justify-center items-center py-6">\n    <div class="u-spinner" [ngClass]="spinnerClass()"></div>\n  </div>\n  }\n  <ng-content></ng-content>\n  @if (isLoadingEnd()) {\n  <div class="flex justify-center items-center py-6">\n    <div class="u-spinner" [ngClass]="spinnerClass()"></div>\n  </div>\n  }\n  <div #bottomSentinel class="c-infinite-scroll__sentinel" aria-hidden="true"></div>\n</div>\n', styles: ["/* src/app/shared/components/data-display/infinite-scroll/infinite-scroll.scss */\n:host {\n  display: block;\n}\n.c-infinite-scroll__sentinel {\n  block-size: 1px;\n  inline-size: 100%;\n  pointer-events: none;\n}\n/*# sourceMappingURL=infinite-scroll.css.map */\n"] }]
  }], () => [], { topSentinel: [{ type: ViewChild, args: ["topSentinel", { isSignal: true }] }], bottomSentinel: [{ type: ViewChild, args: ["bottomSentinel", { isSignal: true }] }], loadingStart: [{ type: Input, args: [{ isSignal: true, alias: "loadingStart", required: false }] }], loadingEnd: [{ type: Input, args: [{ isSignal: true, alias: "loadingEnd", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], useElementScroll: [{ type: Input, args: [{ isSignal: true, alias: "useElementScroll", required: false }] }], spinnerClass: [{ type: Input, args: [{ isSignal: true, alias: "spinnerClass", required: false }] }], reachedStart: [{ type: Output, args: ["reachedStart"] }], reachedEnd: [{ type: Output, args: ["reachedEnd"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfiniteScroll, { className: "InfiniteScroll", filePath: "src/app/shared/components/data-display/infinite-scroll/infinite-scroll.ts", lineNumber: 11 });
})();

// src/app/shared/utils/link.ts
function userProfileLink(username) {
  return ["/user", username];
}

export {
  InfiniteScroll,
  userProfileLink
};
//# sourceMappingURL=chunk-GTIYDUMT.mjs.map
