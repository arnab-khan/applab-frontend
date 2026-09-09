import './polyfills.server.mjs';
import {
  ReactiveFormsModule
} from "./chunk-BK46PBGF.mjs";
import {
  CommonModule,
  NgClass
} from "./chunk-TNROARYC.mjs";
import {
  Component,
  Input,
  Pipe,
  effect,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-XAQLVFTN.mjs";

// src/app/shared/pipes/sentence-case-pipe.ts
var SentenceCasePipe = class _SentenceCasePipe {
  transform(value) {
    if (!value)
      return "";
    const trimmed = value.trim();
    if (!trimmed)
      return "";
    return trimmed.toLocaleLowerCase().replace(new RegExp("(^\\p{L}|[.!?]\\s*\\p{L})", "gu"), (match) => match.toLocaleUpperCase());
  }
  static \u0275fac = function SentenceCasePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SentenceCasePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "sentenceCase", type: _SentenceCasePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SentenceCasePipe, [{
    type: Pipe,
    args: [{
      name: "sentenceCase"
    }]
  }], null, null);
})();

// src/app/shared/components/forms/form-fields/form-fields.ts
var _c0 = ["*"];
var _c1 = (a0) => ({ "clicked-submit-button": a0 });
function FormFieldsComponent_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function FormFieldsComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 5);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, FormFieldsComponent_Conditional_0_Conditional_2_Conditional_3_Template, 2, 0, "span", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const label_r1 = \u0275\u0275readContextLet(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", label_r1, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isFieldRequired() ? 3 : -1);
  }
}
function FormFieldsComponent_Conditional_0_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "sentenceCase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, error_r3), " ");
  }
}
function FormFieldsComponent_Conditional_0_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "sentenceCase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const label_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, `\u274C This ${label_r1} is already taken. Please choose another.`), " ");
  }
}
function FormFieldsComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, FormFieldsComponent_Conditional_0_Conditional_4_For_2_Template, 3, 3, "span", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(3, FormFieldsComponent_Conditional_0_Conditional_4_Conditional_3_Template, 3, 3, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.fieldErrorMessages());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r1.dynamicFormControl().errors) == null ? null : tmp_4_0["alreadyTaken"]) ? 3 : -1);
  }
}
function FormFieldsComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "sentenceCase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.text().pendingText), " ");
  }
}
function FormFieldsComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "sentenceCase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.text().validText), " ");
  }
}
function FormFieldsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275declareLet(1);
    \u0275\u0275conditionalCreate(2, FormFieldsComponent_Conditional_0_Conditional_2_Template, 4, 2, "div", 1);
    \u0275\u0275projection(3);
    \u0275\u0275conditionalCreate(4, FormFieldsComponent_Conditional_0_Conditional_4_Template, 4, 1, "div", 2);
    \u0275\u0275conditionalCreate(5, FormFieldsComponent_Conditional_0_Conditional_5_Template, 3, 3, "span", 3);
    \u0275\u0275conditionalCreate(6, FormFieldsComponent_Conditional_0_Conditional_6_Template, 3, 3, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c1, ctx_r1.hasClickedSubmit()));
    \u0275\u0275advance();
    const label_r4 = \u0275\u0275storeLet((tmp_2_0 = ctx_r1.fieldConfig()) == null ? null : tmp_2_0.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(label_r4 ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showInvalid() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.text().pendingText && ctx_r1.dynamicFormControl().pending ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.text().validText && ctx_r1.dynamicFormControl().valid ? 6 : -1);
  }
}
var FormFieldsComponent = class _FormFieldsComponent {
  fieldConfig = input(...ngDevMode ? [void 0, { debugName: "fieldConfig" }] : []);
  dynamicFormControl = input.required(...ngDevMode ? [{ debugName: "dynamicFormControl" }] : []);
  hasClickedSubmit = input(false, ...ngDevMode ? [{ debugName: "hasClickedSubmit" }] : []);
  text = input({}, ...ngDevMode ? [{ debugName: "text" }] : []);
  fieldErrorMessages = signal([], ...ngDevMode ? [{ debugName: "fieldErrorMessages" }] : []);
  showInvalid = signal(false, ...ngDevMode ? [{ debugName: "showInvalid" }] : []);
  isFieldRequired = signal(false, ...ngDevMode ? [{ debugName: "isFieldRequired" }] : []);
  errorOrder = [
    "required",
    "email",
    "disallowNumber",
    "disallowSpaces",
    "disallowSpecialChar",
    "minLength",
    "maxLength",
    "numberRequired",
    "requireLetter",
    "uppercaseRequired",
    "lowercaseRequired",
    "specialCharRequired",
    "valueMismatch"
  ];
  constructor() {
    effect((onCleanup) => {
      const control = this.dynamicFormControl();
      const statusSub = control.events.subscribe(() => {
        this.updateViewState();
      });
      onCleanup(() => statusSub.unsubscribe());
    });
    effect(() => {
      if (this.hasClickedSubmit()) {
        this.updateViewState();
      }
    });
    effect(() => {
      this.dynamicFormControl();
      this.updateViewState();
    });
  }
  updateViewState() {
    setTimeout(() => {
      const control = this.dynamicFormControl();
      this.showInvalid.set(control.invalid && (control.touched || control.dirty || this.hasClickedSubmit()));
      this.updateErrorMessages();
      this.updateIsFieldRequired();
    });
  }
  updateIsFieldRequired() {
    const control = this.dynamicFormControl();
    const errors = this.dynamicFormControl().errors;
    let isRequired = false;
    if (control.validator) {
      const validator = control.validator({});
      isRequired = validator && validator["required"];
    }
    if (errors) {
      isRequired = isRequired || errors["required"];
    }
    this.isFieldRequired.set(isRequired);
  }
  updateErrorMessages() {
    const errors = this.dynamicFormControl().errors;
    if (!errors) {
      this.fieldErrorMessages.set([]);
      return;
    }
    this.fieldErrorMessages.set(this.errorOrder.filter((key) => errors[key]).map((key) => String(errors[key]).replace("{{LABEL}}", this.fieldConfig()?.label || "")));
  }
  static \u0275fac = function FormFieldsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFieldsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormFieldsComponent, selectors: [["app-form-fields"]], inputs: { fieldConfig: [1, "fieldConfig"], dynamicFormControl: [1, "dynamicFormControl"], hasClickedSubmit: [1, "hasClickedSubmit"], text: [1, "text"] }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[1, "mt-4", 3, "ngClass"], [1, "pb-1"], [1, "text-red-600", "text-sm"], [1, "text-blue-600", "flex", "items-center", "gap-1"], [1, "text-green-600", "flex", "items-center", "gap-1"], [1, "block", "text-lg", "font-medium", "text-gray-700", "first-letter:uppercase"], [1, "text-red-600"], [1, "block", "mt-1"]], template: function FormFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275conditionalCreate(0, FormFieldsComponent_Conditional_0_Template, 7, 8, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.dynamicFormControl() ? 0 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ReactiveFormsModule, SentenceCasePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldsComponent, [{
    type: Component,
    args: [{ selector: "app-form-fields", standalone: true, imports: [CommonModule, ReactiveFormsModule, SentenceCasePipe], template: `@if (dynamicFormControl()) {
<div class="mt-4" [ngClass]="{ 'clicked-submit-button': hasClickedSubmit() }">
  @let label = fieldConfig()?.label;
  @if (label) {
  <div class="pb-1">
    <label class="block text-lg font-medium text-gray-700 first-letter:uppercase">
      {{ label }}
      @if (isFieldRequired()) {
      <span class="text-red-600">*</span>
      }
    </label>
  </div>
  }
  <ng-content></ng-content>
  @if (showInvalid()) {
  <div class="text-red-600 text-sm">
    @for (error of fieldErrorMessages(); track $index) {
    <span class="block mt-1">
      {{ error | sentenceCase }}
    </span>
    }
    @if (dynamicFormControl().errors?.['alreadyTaken']) {
    <span>
      {{ \`\u274C This \${label} is already taken. Please choose another.\` | sentenceCase }}
    </span>
    }
  </div>
  }

  @if (text().pendingText && dynamicFormControl().pending) {
  <span class="text-blue-600 flex items-center gap-1">
    {{ text().pendingText | sentenceCase }}
  </span>
  }
  @if (text().validText && dynamicFormControl().valid) {
  <span class="text-green-600 flex items-center gap-1">
    {{ text().validText | sentenceCase }}
  </span>
  }
</div>
}` }]
  }], () => [], { fieldConfig: [{ type: Input, args: [{ isSignal: true, alias: "fieldConfig", required: false }] }], dynamicFormControl: [{ type: Input, args: [{ isSignal: true, alias: "dynamicFormControl", required: true }] }], hasClickedSubmit: [{ type: Input, args: [{ isSignal: true, alias: "hasClickedSubmit", required: false }] }], text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormFieldsComponent, { className: "FormFieldsComponent", filePath: "src/app/shared/components/forms/form-fields/form-fields.ts", lineNumber: 15 });
})();

export {
  FormFieldsComponent
};
//# sourceMappingURL=chunk-EFZB4JUM.mjs.map
