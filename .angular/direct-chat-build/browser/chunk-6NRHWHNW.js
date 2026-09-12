import {
  FaIconComponent,
  FontAwesomeModule,
  faUser,
  faXmark
} from "./chunk-65M5LICJ.js";
import {
  Overlay,
  OverlayModule,
  TemplatePortal
} from "./chunk-5QQ5IMAE.js";
import {
  NgClass,
  NgStyle
} from "./chunk-CYBPL3OT.js";
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewContainerRef,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CSUKEAYK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/shared/utils/avatar.ts
function getInitials(name) {
  if (!name)
    return "";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
}
function getAvatarColor(text) {
  const value = (text || "").toUpperCase().replace(/[^A-Z]/g, "");
  const first = value.charCodeAt(0) || 65;
  const second = value.charCodeAt(1) || first;
  const firstIndex = Math.max(0, Math.min(25, first - 65));
  const secondIndex = Math.max(0, Math.min(25, second - 65));
  const baseHue = Math.round(360 / 26 * firstIndex);
  const hueShift = Math.round(secondIndex / 25 * 12 - 6);
  const saturation = 62 + secondIndex % 5 * 3;
  const lightness = 48 + secondIndex % 4 * 4;
  return `hsl(${baseHue + hueShift}, ${saturation}%, ${lightness}%)`;
}

// src/app/shared/components/media/image-viewer/image-viewer.ts
var _c0 = ["triggerButton"];
var _c1 = ["viewerTemplate"];
var _c2 = ["*"];
var _c3 = (a0) => ({ hidden: a0 });
function ImageViewer_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ImageViewer_ng_template_3_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeViewer());
    });
    \u0275\u0275element(1, "fa-icon", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r3.faXmark);
  }
}
function ImageViewer_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function ImageViewer_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, ImageViewer_ng_template_3_Conditional_1_Template, 2, 1, "button", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275conditionalCreate(3, ImageViewer_ng_template_3_Conditional_3_Template, 2, 0, "div", 6);
    \u0275\u0275elementStart(4, "img", 7);
    \u0275\u0275listener("load", function ImageViewer_ng_template_3_Template_img_load_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onImageLoad());
    })("error", function ImageViewer_ng_template_3_Template_img_error_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onImageError());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r3.boxStyle());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.viewerState() === "open" ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.imageLoading() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c3, ctx_r3.imageLoading() || ctx_r3.imageFailed() || !ctx_r3.imageUrl()))("src", ctx_r3.imageUrl(), \u0275\u0275sanitizeUrl)("alt", ctx_r3.alt());
  }
}
var ImageViewer = class _ImageViewer {
  overlay = inject(Overlay);
  viewContainerRef = inject(ViewContainerRef);
  triggerButton;
  viewerTemplate;
  overlayRef;
  viewerStartStyle = {};
  viewerEndStyle = {};
  viewerState = signal("closed", ...ngDevMode ? [{ debugName: "viewerState" }] : []);
  imageLoading = signal(false, ...ngDevMode ? [{ debugName: "imageLoading" }] : []);
  imageFailed = signal(false, ...ngDevMode ? [{ debugName: "imageFailed" }] : []);
  boxStyle = signal({}, ...ngDevMode ? [{ debugName: "boxStyle" }] : []);
  faXmark = faXmark;
  imageUrl = input(null, ...ngDevMode ? [{ debugName: "imageUrl" }] : []);
  alt = input("Image", ...ngDevMode ? [{ debugName: "alt" }] : []);
  initialBorderRadius = input("10%", ...ngDevMode ? [{ debugName: "initialBorderRadius" }] : []);
  constructor() {
    effect(() => {
      if (this.imageUrl()) {
        this.imageLoading.set(true);
        this.imageFailed.set(false);
        return;
      }
      this.imageLoading.set(false);
      this.imageFailed.set(false);
    });
  }
  onImageLoad() {
    this.imageLoading.set(false);
  }
  onImageError() {
    this.imageLoading.set(false);
    this.imageFailed.set(true);
  }
  openViewer() {
    const rect = this.triggerButton?.nativeElement.getBoundingClientRect();
    const startStyle = {
      left: `${rect?.left}px`,
      top: `${rect?.top}px`,
      width: `${rect?.width ?? 0}px`,
      height: `${rect?.height ?? 0}px`,
      borderRadius: this.initialBorderRadius(),
      transform: "translate(0, 0)"
    };
    const endStyle = {
      left: "50%",
      top: "50%",
      width: "18rem",
      height: "18rem",
      transform: "translate(-50%, -50%)"
    };
    this.viewerStartStyle = startStyle;
    this.viewerEndStyle = endStyle;
    this.overlayRef?.dispose();
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global()
    });
    this.overlayRef.backdropClick().subscribe(() => this.closeViewer());
    this.overlayRef.attach(new TemplatePortal(this.viewerTemplate, this.viewContainerRef));
    this.viewerState.set("opening");
    this.boxStyle.set(__spreadProps(__spreadValues({}, startStyle), { width: "0px", height: "0px" }));
    requestAnimationFrame(() => {
      this.boxStyle.set(this.viewerStartStyle);
      requestAnimationFrame(() => {
        this.boxStyle.set(this.viewerEndStyle);
        window.setTimeout(() => {
          this.viewerState.set("open");
        }, 200);
      });
    });
  }
  closeViewer() {
    if (!this.overlayRef) {
      this.viewerState.set("closed");
      return;
    }
    this.viewerState.set("closing");
    this.boxStyle.set(this.viewerStartStyle);
    window.setTimeout(() => {
      this.overlayRef?.dispose();
      this.overlayRef = void 0;
      this.viewerState.set("closed");
    }, 200);
  }
  static \u0275fac = function ImageViewer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageViewer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageViewer, selectors: [["app-image-viewer"]], viewQuery: function ImageViewer_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5, ElementRef);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.triggerButton = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewerTemplate = _t.first);
    }
  }, inputs: { imageUrl: [1, "imageUrl"], alt: [1, "alt"], initialBorderRadius: [1, "initialBorderRadius"] }, ngContentSelectors: _c2, decls: 5, vars: 0, consts: [["triggerButton", ""], ["viewerTemplate", ""], ["type", "button", 1, "u-fill-parent", "c-trigger", 3, "click"], [1, "fixed", "max-w-[90vw]", "max-h-[90vh]", "overflow-hidden", "rounded-2xl", "bg-white", "transition-all", "duration-200", "ease-in-out", 3, "ngStyle"], ["type", "button", 1, "absolute", "right-2", "top-2", "z-10", "h-7", "w-7", "flex", "items-center", "justify-center", "rounded-md", "bg-black/60", "text-white"], [1, "h-full", "w-full"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], [1, "w-full", "h-full", "object-cover", 3, "load", "error", "ngClass", "src", "alt"], ["type", "button", 1, "absolute", "right-2", "top-2", "z-10", "h-7", "w-7", "flex", "items-center", "justify-center", "rounded-md", "bg-black/60", "text-white", 3, "click"], [3, "icon"], [1, "u-spinner"]], template: function ImageViewer_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 2, 0);
      \u0275\u0275listener("click", function ImageViewer_Template_button_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openViewer());
      });
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ImageViewer_ng_template_3_Template, 5, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
  }, dependencies: [NgClass, NgStyle, OverlayModule, FontAwesomeModule, FaIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageViewer, [{
    type: Component,
    args: [{ selector: "app-image-viewer", imports: [NgClass, NgStyle, OverlayModule, FontAwesomeModule], template: `<button #triggerButton type="button" (click)="openViewer()" class="u-fill-parent c-trigger">
  <ng-content></ng-content>
</button>

<ng-template #viewerTemplate>
  <div class="fixed max-w-[90vw] max-h-[90vh] overflow-hidden rounded-2xl bg-white transition-all duration-200 ease-in-out"
    [ngStyle]="boxStyle()">
    @if (viewerState() === 'open') {
    <button type="button"
      class="absolute right-2 top-2 z-10 h-7 w-7 flex items-center justify-center rounded-md bg-black/60 text-white"
      (click)="closeViewer()">
      <fa-icon [icon]="faXmark"></fa-icon>
    </button>
    }
    <div class="h-full w-full">
      @if (imageLoading()) {
      <div class="flex h-full w-full items-center justify-center">
        <div class="u-spinner"></div>
      </div>
      }
      <img [ngClass]="{ hidden: imageLoading() || imageFailed() || !imageUrl() }" [src]="imageUrl()" [alt]="alt()"
        class="w-full h-full object-cover" (load)="onImageLoad()" (error)="onImageError()" />
    </div>
  </div>
</ng-template>` }]
  }], () => [], { triggerButton: [{
    type: ViewChild,
    args: ["triggerButton", { read: ElementRef }]
  }], viewerTemplate: [{
    type: ViewChild,
    args: ["viewerTemplate"]
  }], imageUrl: [{ type: Input, args: [{ isSignal: true, alias: "imageUrl", required: false }] }], alt: [{ type: Input, args: [{ isSignal: true, alias: "alt", required: false }] }], initialBorderRadius: [{ type: Input, args: [{ isSignal: true, alias: "initialBorderRadius", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageViewer, { className: "ImageViewer", filePath: "src/app/shared/components/media/image-viewer/image-viewer.ts", lineNumber: 14 });
})();

// src/app/shared/components/media/thumbnail/thumbnail.ts
var _c02 = (a0, a1, a2) => ({ width: a0, height: a1, "border-radius": a2 });
var _c12 = (a0) => ({ hidden: a0 });
var _c22 = (a0) => ({ "border-2": a0 });
var _c32 = (a0) => ({ "border-radius": a0 });
var _c4 = (a0, a1) => ({ "border-radius": a0, "border-color": a1 });
var _c5 = (a0) => ({ "background-color": a0 });
var _c6 = (a0, a1) => ({ "font-size": a0, "color": a1 });
var _c7 = (a0) => ({ "font-size": a0 });
function Thumbnail_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 6);
    \u0275\u0275listener("load", function Thumbnail_Conditional_2_Template_img_load_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageLoad());
    })("error", function Thumbnail_Conditional_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageError());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.imageData() ? "data:" + (ctx_r1.fileType() || "image/jpeg") + ";base64," + ctx_r1.imageData() : ctx_r1.imageUrl(), \u0275\u0275sanitizeUrl)("alt", ctx_r1.alt())("ngClass", \u0275\u0275pureFunction1(4, _c22, ctx_r1.showBorder()))("ngStyle", \u0275\u0275pureFunction1(6, _c32, ctx_r1.radius()));
  }
}
function Thumbnail_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c22, ctx_r1.showBorder()))("ngStyle", \u0275\u0275pureFunction2(7, _c4, ctx_r1.radius(), ctx_r1.fallbackColor()));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(10, _c5, ctx_r1.fallbackColor()));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(12, _c6, "calc(" + ctx_r1.size() + " * .42)", ctx_r1.fallbackColor()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fallbackInitial(), " ");
  }
}
function Thumbnail_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("icon", ctx_r1.faUser)("ngStyle", \u0275\u0275pureFunction1(2, _c7, "calc(" + ctx_r1.size() + " * .7)"));
  }
}
function Thumbnail_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, Thumbnail_Conditional_3_Conditional_1_Template, 4, 15, "div", 7)(2, Thumbnail_Conditional_3_Conditional_2_Template, 1, 4, "fa-icon", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.fallbackInitial() ? 1 : 2);
  }
}
function Thumbnail_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function Thumbnail_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image-viewer", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("imageUrl", ctx_r1.viewerImageUrl())("initialBorderRadius", ctx_r1.radius())("alt", ctx_r1.alt());
  }
}
var Thumbnail = class _Thumbnail {
  imageLoading = signal(false, ...ngDevMode ? [{ debugName: "imageLoading" }] : []);
  imageFailed = signal(false, ...ngDevMode ? [{ debugName: "imageFailed" }] : []);
  imageData = input(null, ...ngDevMode ? [{ debugName: "imageData" }] : []);
  imageUrl = input(null, ...ngDevMode ? [{ debugName: "imageUrl" }] : []);
  viewerImageUrl = input(null, ...ngDevMode ? [{ debugName: "viewerImageUrl" }] : []);
  fileType = input(null, ...ngDevMode ? [{ debugName: "fileType" }] : []);
  name = input(null, ...ngDevMode ? [{ debugName: "name" }] : []);
  loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  alt = input("Profile image", ...ngDevMode ? [{ debugName: "alt" }] : []);
  size = input("1rem", ...ngDevMode ? [{ debugName: "size" }] : []);
  radius = input("10%", ...ngDevMode ? [{ debugName: "radius" }] : []);
  showBorder = input(true, ...ngDevMode ? [{ debugName: "showBorder" }] : []);
  faUser = faUser;
  fallbackInitial = computed(() => {
    return getInitials(this.name() || "");
  }, ...ngDevMode ? [{ debugName: "fallbackInitial" }] : []);
  fallbackColor = computed(() => {
    const initials = this.fallbackInitial();
    return getAvatarColor(initials);
  }, ...ngDevMode ? [{ debugName: "fallbackColor" }] : []);
  shouldShowLoading = computed(() => this.loading() || (this.imageUrl() ? this.imageLoading() : false), ...ngDevMode ? [{ debugName: "shouldShowLoading" }] : []);
  constructor() {
    effect(() => {
      if (this.imageUrl()) {
        this.imageLoading.set(true);
        this.imageFailed.set(false);
        return;
      }
      this.imageLoading.set(false);
      this.imageFailed.set(false);
    });
  }
  onImageLoad() {
    this.imageLoading.set(false);
  }
  onImageError() {
    this.imageLoading.set(false);
    this.imageFailed.set(true);
  }
  static \u0275fac = function Thumbnail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Thumbnail)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Thumbnail, selectors: [["app-thumbnail"]], inputs: { imageData: [1, "imageData"], imageUrl: [1, "imageUrl"], viewerImageUrl: [1, "viewerImageUrl"], fileType: [1, "fileType"], name: [1, "name"], loading: [1, "loading"], alt: [1, "alt"], size: [1, "size"], radius: [1, "radius"], showBorder: [1, "showBorder"] }, decls: 6, vars: 11, consts: [[1, "overflow-hidden", "relative", 3, "ngStyle"], [1, "h-full", "w-full", 3, "ngClass"], [1, "h-full", "w-full", "object-cover", "border-slate-400", 3, "src", "alt", "ngClass", "ngStyle"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "c-thumbnail-fallback-icon"], [1, "h-full", "w-full", "bg-gray-300", "animate-pulse"], [1, "u-fill-parent", 3, "imageUrl", "initialBorderRadius", "alt"], [1, "h-full", "w-full", "object-cover", "border-slate-400", 3, "load", "error", "src", "alt", "ngClass", "ngStyle"], [1, "relative", "inline-flex", "h-full", "w-full", "select-none", "items-center", "justify-center", "border-slate-800", "font-bold", "uppercase", "leading-none", "bg-white", 3, "ngClass", "ngStyle"], [1, "text-slate-400", 3, "icon", "ngStyle"], [1, "u-fill-parent", "opacity-20", 3, "ngStyle"], [1, "relative", "font-semibold", 3, "ngStyle"]], template: function Thumbnail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, Thumbnail_Conditional_2_Template, 1, 8, "img", 2)(3, Thumbnail_Conditional_3_Template, 3, 1, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, Thumbnail_Conditional_4_Template, 1, 0, "div", 4);
      \u0275\u0275conditionalCreate(5, Thumbnail_Conditional_5_Template, 1, 3, "app-image-viewer", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction3(5, _c02, ctx.size(), ctx.size(), ctx.radius()));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c12, ctx.shouldShowLoading()));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.imageData() || ctx.imageUrl()) && !ctx.imageFailed() ? 2 : 3);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.shouldShowLoading() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.viewerImageUrl() ? 5 : -1);
    }
  }, dependencies: [FontAwesomeModule, FaIconComponent, NgClass, NgStyle, ImageViewer], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Thumbnail, [{
    type: Component,
    args: [{ selector: "app-thumbnail", imports: [FontAwesomeModule, NgClass, NgStyle, ImageViewer], template: `<div class="overflow-hidden relative" [ngStyle]="{ width: size(), height: size(), 'border-radius': radius() }">
  <div [ngClass]="{ hidden: shouldShowLoading() }" class="h-full w-full">
    @if ((imageData() || imageUrl()) && !imageFailed()) {
    <img [src]="imageData() ? ('data:' + (fileType() || 'image/jpeg') + ';base64,' + imageData()) : imageUrl()"
      [alt]="alt()" class="h-full w-full object-cover border-slate-400" [ngClass]="{ 'border-2': showBorder() }"
      [ngStyle]="{ 'border-radius': radius(), }" (load)="onImageLoad()" (error)="onImageError()" />
    } @else {
    <div class="flex h-full w-full items-center justify-center c-thumbnail-fallback-icon">
      @if (fallbackInitial()) {
      <div
        class="relative inline-flex h-full w-full select-none items-center justify-center border-slate-800 font-bold uppercase leading-none bg-white"
        [ngClass]="{ 'border-2': showBorder() }"
        [ngStyle]="{ 'border-radius': radius(),'border-color': fallbackColor() }">
        <div class="u-fill-parent opacity-20" [ngStyle]="{ 'background-color': fallbackColor() }"></div>
        <span [ngStyle]="{ 'font-size': 'calc(' + size() + ' * .42)','color': fallbackColor() }"
          class="relative font-semibold">
          {{ fallbackInitial() }}
        </span>
      </div>
      } @else {
      <fa-icon [icon]="faUser" [ngStyle]="{ 'font-size': 'calc(' + size() + ' * .7)' }"
        class="text-slate-400"></fa-icon>
      }
    </div>
    }
  </div>
  @if (shouldShowLoading()) {
  <div class="h-full w-full bg-gray-300 animate-pulse"></div>
  }
  @if (viewerImageUrl()) {
  <app-image-viewer class="u-fill-parent" [imageUrl]="viewerImageUrl()" [initialBorderRadius]="radius()" [alt]="alt()">
  </app-image-viewer>
  }
</div>` }]
  }], () => [], { imageData: [{ type: Input, args: [{ isSignal: true, alias: "imageData", required: false }] }], imageUrl: [{ type: Input, args: [{ isSignal: true, alias: "imageUrl", required: false }] }], viewerImageUrl: [{ type: Input, args: [{ isSignal: true, alias: "viewerImageUrl", required: false }] }], fileType: [{ type: Input, args: [{ isSignal: true, alias: "fileType", required: false }] }], name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], alt: [{ type: Input, args: [{ isSignal: true, alias: "alt", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], radius: [{ type: Input, args: [{ isSignal: true, alias: "radius", required: false }] }], showBorder: [{ type: Input, args: [{ isSignal: true, alias: "showBorder", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Thumbnail, { className: "Thumbnail", filePath: "src/app/shared/components/media/thumbnail/thumbnail.ts", lineNumber: 14 });
})();

export {
  Thumbnail
};
//# sourceMappingURL=chunk-6NRHWHNW.js.map
