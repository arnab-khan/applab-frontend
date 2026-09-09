import {
  FaIconComponent,
  FontAwesomeModule,
  faClock,
  faRocket
} from "./chunk-65M5LICJ.js";
import "./chunk-CYBPL3OT.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-CSUKEAYK.js";
import "./chunk-35BBDGX6.js";

// src/app/core/pages/coming-soon/coming-soon.ts
var ComingSoon = class _ComingSoon {
  faClock = faClock;
  faRocket = faRocket;
  static \u0275fac = function ComingSoon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComingSoon)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoon, selectors: [["app-coming-soon"]], decls: 11, vars: 2, consts: [[1, "flex", "grow", "justify-center", "items-center", "px-4", "py-10", "text-white", "sm:px-6"], [1, "w-full", "max-w-3xl", "rounded-2xl", "border", "border-white/20", "bg-white/10", "p-6", "text-center", "shadow-2xl", "backdrop-blur-md", "sm:p-8", "md:p-10"], [1, "mx-auto", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-2xl", "bg-white/20", "text-3xl", "shadow-lg"], [3, "icon"], [1, "mt-6", "text-sm", "font-semibold", "uppercase", "text-white/75"], [1, "mr-2", 3, "icon"], [1, "mt-3", "text-3xl", "font-bold"], [1, "mx-auto", "mt-4", "max-w-xl", "text-sm", "leading-6", "text-white/80", "sm:text-base"]], template: function ComingSoon_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "fa-icon", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 4);
      \u0275\u0275element(5, "fa-icon", 5);
      \u0275\u0275text(6, " Coming soon ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 6);
      \u0275\u0275text(8, " This page is getting ready ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " I am working on this section and it will be available soon. ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("icon", ctx.faRocket);
      \u0275\u0275advance(2);
      \u0275\u0275property("icon", ctx.faClock);
    }
  }, dependencies: [FontAwesomeModule, FaIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComingSoon, [{
    type: Component,
    args: [{ selector: "app-coming-soon", imports: [FontAwesomeModule], template: '<section class="flex grow justify-center items-center px-4 py-10 text-white sm:px-6">\n    <div\n        class="w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-md sm:p-8 md:p-10">\n        <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl shadow-lg">\n            <fa-icon [icon]="faRocket"></fa-icon>\n        </div>\n\n        <p class="mt-6 text-sm font-semibold uppercase text-white/75">\n            <fa-icon [icon]="faClock" class="mr-2"></fa-icon>\n            Coming soon\n        </p>\n\n        <h1 class="mt-3 text-3xl font-bold">\n            This page is getting ready\n        </h1>\n\n        <p class="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">\n            I am working on this section and it will be available soon.\n        </p>\n    </div>\n</section>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoon, { className: "ComingSoon", filePath: "src/app/core/pages/coming-soon/coming-soon.ts", lineNumber: 11 });
})();
export {
  ComingSoon
};
//# sourceMappingURL=chunk-JIWK4LAI.js.map
