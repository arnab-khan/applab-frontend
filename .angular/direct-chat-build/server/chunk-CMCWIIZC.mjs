import './polyfills.server.mjs';
import {
  FaIconComponent,
  FontAwesomeModule,
  faArrowDown,
  faArrowUp
} from "./chunk-DU7PI4H2.mjs";
import {
  Component,
  Directive,
  ElementRef,
  Input,
  Output,
  Renderer2,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XAQLVFTN.mjs";

// src/app/shared/components/buttons/sort-button/sort-button.ts
var SortButton = class _SortButton {
  label = input.required(...ngDevMode ? [{ debugName: "label" }] : []);
  field = input.required(...ngDevMode ? [{ debugName: "field" }] : []);
  activeField = input.required(...ngDevMode ? [{ debugName: "activeField" }] : []);
  direction = input.required(...ngDevMode ? [{ debugName: "direction" }] : []);
  toggle = output();
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
  onToggle() {
    this.toggle.emit(this.field());
  }
  static \u0275fac = function SortButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortButton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SortButton, selectors: [["app-sort-button"]], inputs: { label: [1, "label"], field: [1, "field"], activeField: [1, "activeField"], direction: [1, "direction"] }, outputs: { toggle: "toggle" }, decls: 6, vars: 7, consts: [[1, "flex", "items-center", "gap-2", "px-4", "py-2", "bg-gray-50", "hover:bg-gray-100", "rounded-lg", "border", "border-gray-200", "transition-colors", "cursor-pointer", 3, "click"], [1, "text-sm", "font-medium", "text-gray-700"], [1, "text-xs", 3, "icon"]], template: function SortButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function SortButton_Template_button_click_0_listener() {
        return ctx.onToggle();
      });
      \u0275\u0275elementStart(1, "span", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div");
      \u0275\u0275element(4, "fa-icon", 2)(5, "fa-icon", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label());
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.activeField() === ctx.field() && ctx.direction() === "asc" ? "text-blue-600" : "text-gray-400");
      \u0275\u0275property("icon", ctx.faArrowUp);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.activeField() === ctx.field() && ctx.direction() === "desc" ? "text-blue-600" : "text-gray-400");
      \u0275\u0275property("icon", ctx.faArrowDown);
    }
  }, dependencies: [FontAwesomeModule, FaIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortButton, [{
    type: Component,
    args: [{ selector: "app-sort-button", imports: [FontAwesomeModule], template: `<button (click)="onToggle()"
  class="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors cursor-pointer">
  <span class="text-sm font-medium text-gray-700">{{ label() }}</span>
  <div>
    <fa-icon [icon]="faArrowUp"
      [class]="activeField() === field() && direction() === 'asc' ? 'text-blue-600' : 'text-gray-400'"
      class="text-xs"></fa-icon>
    <fa-icon [icon]="faArrowDown"
      [class]="activeField() === field() && direction() === 'desc' ? 'text-blue-600' : 'text-gray-400'"
      class="text-xs"></fa-icon>
  </div>
</button>
` }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], field: [{ type: Input, args: [{ isSignal: true, alias: "field", required: true }] }], activeField: [{ type: Input, args: [{ isSignal: true, alias: "activeField", required: true }] }], direction: [{ type: Input, args: [{ isSignal: true, alias: "direction", required: true }] }], toggle: [{ type: Output, args: ["toggle"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SortButton, { className: "SortButton", filePath: "src/app/shared/components/buttons/sort-button/sort-button.ts", lineNumber: 13 });
})();

// src/app/shared/directives/highlight-text.ts
var HighlightText = class _HighlightText {
  el;
  renderer;
  highlightText = "";
  highlightClass = "bg-yellow-200 text-inherit [font:inherit] rounded";
  originalText = "";
  initialized = false;
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngAfterViewInit() {
    this.originalText = this.el.nativeElement.textContent ?? "";
    this.initialized = true;
    this.applyHighlight();
  }
  ngOnChanges(_) {
    if (this.initialized) {
      this.applyHighlight();
    }
  }
  applyHighlight() {
    const host = this.el.nativeElement;
    const sourceText = this.originalText || host.textContent || "";
    const term = (this.highlightText || "").trim();
    while (host.firstChild) {
      this.renderer.removeChild(host, host.firstChild);
    }
    if (!term) {
      this.renderer.appendChild(host, this.renderer.createText(sourceText));
      return;
    }
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedTerm, "gi");
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(sourceText)) !== null) {
      const matchIndex = match.index;
      if (matchIndex > lastIndex) {
        this.renderer.appendChild(host, this.renderer.createText(sourceText.slice(lastIndex, matchIndex)));
      }
      const mark = this.renderer.createElement("mark");
      this.renderer.setAttribute(mark, "class", this.highlightClass);
      this.renderer.appendChild(mark, this.renderer.createText(match[0]));
      this.renderer.appendChild(host, mark);
      lastIndex = matchIndex + match[0].length;
    }
    if (lastIndex < sourceText.length) {
      this.renderer.appendChild(host, this.renderer.createText(sourceText.slice(lastIndex)));
    }
  }
  static \u0275fac = function HighlightText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HighlightText)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HighlightText, selectors: [["", "appHighlightText", ""]], inputs: { highlightText: [0, "appHighlightText", "highlightText"], highlightClass: "highlightClass" }, features: [\u0275\u0275NgOnChangesFeature] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightText, [{
    type: Directive,
    args: [{
      selector: "[appHighlightText]",
      standalone: true
    }]
  }], () => [{ type: ElementRef }, { type: Renderer2 }], { highlightText: [{
    type: Input,
    args: ["appHighlightText"]
  }], highlightClass: [{
    type: Input
  }] });
})();

export {
  SortButton,
  HighlightText
};
//# sourceMappingURL=chunk-CMCWIIZC.mjs.map
