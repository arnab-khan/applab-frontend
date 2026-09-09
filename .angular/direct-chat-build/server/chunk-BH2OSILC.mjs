import './polyfills.server.mjs';
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-XAQLVFTN.mjs";
import "./chunk-AEB7TZCF.mjs";

// src/app/core/pages/not-found/not-found.ts
var NotFound = class _NotFound {
  static \u0275fac = function NotFound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFound)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFound, selectors: [["app-not-found"]], decls: 9, vars: 0, consts: [[1, "h-full", "px-4", "py-10", "text-slate-800"], [1, "mx-auto", "flex", "h-full", "max-w-2xl", "items-center", "justify-center"], [1, "w-full", "rounded-2xl", "border", "border-slate-200", "bg-white", "p-8", "text-center", "shadow-sm", "md:p-10"], [1, "text-sm", "font-semibold", "uppercase", "tracking-[0.2em]", "text-slate-500"], [1, "mt-3", "text-4xl", "font-bold", "text-slate-900", "md:text-5xl"], [1, "mx-auto", "mt-4", "max-w-md", "text-sm", "text-slate-600", "md:text-base"]], template: function NotFound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      \u0275\u0275text(4, "Error 404");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h1", 4);
      \u0275\u0275text(6, "Page Not Found");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p", 5);
      \u0275\u0275text(8, " The page you are looking for does not exist. ");
      \u0275\u0275domElementEnd()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFound, [{
    type: Component,
    args: [{ selector: "app-not-found", imports: [], template: '<section class="h-full px-4 py-10 text-slate-800">\n  <div class="mx-auto flex h-full max-w-2xl items-center justify-center">\n    <div class="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-10">\n      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Error 404</p>\n      <h1 class="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Page Not Found</h1>\n      <p class="mx-auto mt-4 max-w-md text-sm text-slate-600 md:text-base">\n        The page you are looking for does not exist.\n      </p>\n    </div>\n  </div>\n</section>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFound, { className: "NotFound", filePath: "src/app/core/pages/not-found/not-found.ts", lineNumber: 9 });
})();
export {
  NotFound
};
//# sourceMappingURL=chunk-BH2OSILC.mjs.map
