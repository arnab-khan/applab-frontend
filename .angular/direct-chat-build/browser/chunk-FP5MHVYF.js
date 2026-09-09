import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet
} from "./chunk-BQE5RZFF.js";
import {
  NgClass
} from "./chunk-CYBPL3OT.js";
import {
  Component,
  filter,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-CSUKEAYK.js";
import "./chunk-35BBDGX6.js";

// src/app/features/auth/auth.ts
var Auth = class _Auth {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  containerClass = signal("", ...ngDevMode ? [{ debugName: "containerClass" }] : []);
  constructor() {
    this.updateContainerClass();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => this.updateContainerClass());
  }
  updateContainerClass() {
    this.containerClass.set(this.activatedRoute.firstChild?.snapshot?.data["containerClass"] || "");
  }
  static \u0275fac = function Auth_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Auth)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Auth, selectors: [["app-auth"]], decls: 3, vars: 1, consts: [[1, "grow", "flex", "items-center", "justify-center", "px-4", "py-5", "c-auth-section"], [1, "u-container-form", 3, "ngClass"]], template: function Auth_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.containerClass());
    }
  }, dependencies: [NgClass, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Auth, [{
    type: Component,
    args: [{ selector: "app-auth", imports: [NgClass, RouterOutlet], template: '<div class="grow flex items-center justify-center px-4 py-5 c-auth-section">\n  <div\n    class="u-container-form"\n    [ngClass]="containerClass()">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Auth, { className: "Auth", filePath: "src/app/features/auth/auth.ts", lineNumber: 12 });
})();
export {
  Auth
};
//# sourceMappingURL=chunk-FP5MHVYF.js.map
