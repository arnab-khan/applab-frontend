import './polyfills.server.mjs';
import {
  FaIconComponent,
  FontAwesomeModule,
  faCircleCheck,
  faClock
} from "./chunk-DU7PI4H2.mjs";
import {
  FormValidation,
  ScrollToInvalid
} from "./chunk-CNZ5U7G7.mjs";
import {
  FormFieldsComponent
} from "./chunk-EFZB4JUM.mjs";
import {
  commonFormValidator
} from "./chunk-JLRAXHSD.mjs";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormGroup,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  PatternValidator,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-BK46PBGF.mjs";
import {
  LoadingButton
} from "./chunk-RSLJOD3O.mjs";
import "./chunk-SB5Z2O3H.mjs";
import {
  Auth,
  MatSnackBar,
  MatSnackBarModule,
  User
} from "./chunk-LCBZHX6Y.mjs";
import "./chunk-53NQCPJ5.mjs";
import {
  ActivatedRoute,
  Router
} from "./chunk-5QYUMBOA.mjs";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle
} from "./chunk-TNROARYC.mjs";
import {
  Component,
  DOCUMENT,
  Inject,
  Injector,
  Input,
  NgModule,
  Output,
  Subject,
  computed,
  finalize,
  forwardRef,
  inject,
  map,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-XAQLVFTN.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// node_modules/ng-otp-input/fesm2022/ng-otp-input.mjs
var _c0 = (a0) => ({
  "error-input": a0
});
function NgOtpInputComponent_div_0_ng_container_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.config.separator, " ");
  }
}
function NgOtpInputComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 5, 0);
    \u0275\u0275listener("paste", function NgOtpInputComponent_div_0_ng_container_2_Template_input_paste_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handlePaste($event));
    })("keyup", function NgOtpInputComponent_div_0_ng_container_2_Template_input_keyup_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeyUp($event, i_r4));
    })("input", function NgOtpInputComponent_div_0_ng_container_2_Template_input_input_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onInput($event, i_r4));
    })("keydown", function NgOtpInputComponent_div_0_ng_container_2_Template_input_keydown_1_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event, i_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NgOtpInputComponent_div_0_ng_container_2_span_3_Template, 2, 1, "span", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const last_r6 = ctx.last;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("otp-input ", ctx_r1.config.inputClass));
    \u0275\u0275property("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r5])("id", ctx_r1.getBoxId(i_r4))("ngClass", \u0275\u0275pureFunction1(12, _c0, (ctx_r1.config == null ? null : ctx_r1.config.showError) && (ctx_r1.formControl == null ? null : ctx_r1.formControl.invalid) && ((ctx_r1.formControl == null ? null : ctx_r1.formControl.dirty) || (ctx_r1.formControl == null ? null : ctx_r1.formControl.touched))));
    \u0275\u0275attribute("inputmode", ctx_r1.config.allowNumbersOnly ? "numeric" : ctx_r1.config.inputMode || "text");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.config.separator && !last_r6);
  }
}
function NgOtpInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("focusin", function NgOtpInputComponent_div_0_Template_div_focusin_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocusIn());
    })("focusout", function NgOtpInputComponent_div_0_Template_div_focusout_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocusOut());
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275template(2, NgOtpInputComponent_div_0_ng_container_2_Template, 4, 14, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("ng-otp-input-wrapper wrapper ", ctx_r1.config.containerClass));
    \u0275\u0275property("id", \u0275\u0275interpolate1("c_", ctx_r1.componentKey))("ngStyle", ctx_r1.config.containerStyles);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.controlKeys);
  }
}
var KeyboardUtil = class {
  static ifTab(event) {
    return this.ifKey(event, "Tab");
  }
  static ifDelete(event) {
    return this.ifKey(event, "Delete;Del");
  }
  static ifBackspace(event) {
    return this.ifKey(event, "Backspace");
  }
  static ifRightArrow(event) {
    return this.ifKey(event, "ArrowRight;Right");
  }
  static ifLeftArrow(event) {
    return this.ifKey(event, "ArrowLeft;Left");
  }
  static ifSpacebar(event) {
    return this.ifKey(event, "Spacebar; ");
  }
  static ifKey(event, keys) {
    let keysToCheck = keys.split(";");
    return keysToCheck.some((k) => k === event.key);
  }
};
var ObjectUtil = class {
  static keys(obj) {
    if (!obj) return [];
    return Object.keys(obj);
  }
};
var NgOtpInputComponent = class _NgOtpInputComponent {
  set disabled(isDisabled) {
    this.setDisabledState(isDisabled);
  }
  get inputType() {
    return this.config?.isPasswordInput ? "password" : this.config?.allowNumbersOnly ? "tel" : "text";
  }
  get controlKeys() {
    return ObjectUtil.keys(this.otpForm?.controls);
  }
  get formControl() {
    return this.formCtrl ?? this.inj?.get(NgControl);
  }
  constructor(document, inj) {
    this.document = document;
    this.inj = inj;
    this.config = {
      length: 4
    };
    this.onBlur = new Subject();
    this.onInputChange = new Subject();
    this.inputControls = new Array(this.config.length);
    this.componentKey = Math.random().toString(36).substring(2) + (/* @__PURE__ */ new Date()).getTime().toString(36);
    this.destroy$ = new Subject();
    this.activeFocusCount = 0;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this._isDisabled = false;
  }
  ngOnInit() {
    this.otpForm = new FormGroup({});
    for (let index = 0; index < this.config.length; index++) {
      this.otpForm.addControl(this.getControlName(index), new FormControl());
    }
    this.otpForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((v) => {
      ObjectUtil.keys(this.otpForm.controls).forEach((k) => {
        var val = this.otpForm.controls[k].value;
        if (val && val.length > 1) {
          if (val.length >= this.config.length) {
            this.setValue(val);
          } else {
            this.rebuildValue();
          }
        }
      });
    });
  }
  setDisabledState(isDisabled) {
    this._isDisabled = isDisabled;
    if (this.otpForm) {
      if (isDisabled) {
        this.otpForm.disable({
          emitEvent: false
        });
      } else {
        this.otpForm.enable({
          emitEvent: false
        });
      }
    }
  }
  writeValue(value) {
    this.currentVal = !this.hasVal(value) ? null : value;
    this.setValue(this.currentVal);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onFocusIn() {
    this.onTouched();
    this.activeFocusCount++;
  }
  onFocusOut() {
    setTimeout(() => {
      this.activeFocusCount--;
      if (this.activeFocusCount === 0) {
        this.onTouched();
        this.onBlur.next();
      }
    }, 0);
  }
  ngAfterViewInit() {
    if (!this.config.disableAutoFocus) {
      const containerItem = this.document.getElementById(`c_${this.componentKey}`);
      if (containerItem) {
        const ele = containerItem.getElementsByClassName("otp-input")[0];
        if (ele && ele.focus) {
          ele.focus();
        }
      }
    }
  }
  getControlName(idx) {
    return `ctrl_${idx}`;
  }
  onKeyDown($event, inputIdx) {
    const prevInputId = this.getBoxId(inputIdx - 1);
    const currentInputId = this.getBoxId(inputIdx);
    if (KeyboardUtil.ifKey($event, "Enter")) {
      let inp = this.document.getElementById(currentInputId);
      const form = inp?.closest("form");
      if (form) {
        $event.preventDefault();
        const submitEvent = new Event("submit", {
          bubbles: true,
          cancelable: true
        });
        form.dispatchEvent(submitEvent);
        return;
      }
    }
    if (KeyboardUtil.ifSpacebar($event)) {
      $event.preventDefault();
      return false;
    }
    if (KeyboardUtil.ifBackspace($event)) {
      if (!$event.target.value) {
        this.clearInput(prevInputId, inputIdx - 1);
        this.setSelected(prevInputId);
      } else {
        this.clearInput(currentInputId, inputIdx);
      }
      this.rebuildValue();
      return;
    }
    if (KeyboardUtil.ifDelete($event)) {
      if (!$event.target.value) {
        this.clearInput(prevInputId, inputIdx - 1);
        this.setSelected(prevInputId);
      } else {
        this.clearInput(currentInputId, inputIdx);
      }
      this.rebuildValue();
      return;
    }
  }
  hasVal(val) {
    return val != null && val != void 0 && (!val?.trim || val.trim() != "");
  }
  onInput($event, inputIdx) {
    let newVal = this.hasVal(this.currentVal) ? `${this.currentVal}${$event.target.value}` : $event.target.value;
    if (this.config.allowNumbersOnly && !this.validateNumber(newVal)) {
      $event.target.value = null;
      $event.stopPropagation();
      $event.preventDefault();
      this.clearInput(null, inputIdx);
      return;
    }
    if (this.ifValidKeyCode(null, $event.target.value)) {
      const nextInputId = this.getBoxId(inputIdx + 1);
      this.setSelected(nextInputId);
      this.rebuildValue();
    } else {
      $event.target.value = null;
      let ctrlName = this.getControlName(inputIdx);
      this.otpForm.controls[ctrlName]?.setValue(null);
      this.rebuildValue();
    }
  }
  onKeyUp($event, inputIdx) {
    if (KeyboardUtil.ifTab($event)) {
      inputIdx -= 1;
    }
    const nextInputId = this.getBoxId(inputIdx + 1);
    const prevInputId = this.getBoxId(inputIdx - 1);
    if (KeyboardUtil.ifRightArrow($event)) {
      $event.preventDefault();
      this.setSelected(nextInputId);
      return;
    }
    if (KeyboardUtil.ifLeftArrow($event)) {
      $event.preventDefault();
      this.setSelected(prevInputId);
      return;
    }
  }
  validateNumber(val) {
    return val && /^[0-9]+$/.test(val);
  }
  getBoxId(idx) {
    return `otp_${idx}_${this.componentKey}`;
  }
  clearInput(eleId, inputIdx) {
    let ctrlName = this.getControlName(inputIdx);
    this.otpForm.controls[ctrlName]?.setValue(null);
    if (eleId) {
      const ele = this.document.getElementById(eleId);
      if (ele && ele instanceof HTMLInputElement) {
        ele.value = null;
      }
    }
  }
  setSelected(eleId) {
    this.focusTo(eleId);
    const ele = this.document.getElementById(eleId);
    if (ele && ele.setSelectionRange) {
      setTimeout(() => {
        ele.setSelectionRange(0, 1);
      }, 0);
    }
  }
  ifValidKeyCode(event, val) {
    const inp = val ?? event.key;
    if (this.config?.allowNumbersOnly) {
      return this.validateNumber(inp);
    }
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile || /^[a-zA-Z0-9%*_\-@#$!]$/.test(inp) && inp.length == 1;
  }
  focusTo(eleId) {
    const ele = this.document.getElementById(eleId);
    if (ele) {
      ele.focus();
    }
  }
  // method to set component value
  setValue(value) {
    if (this.config.allowNumbersOnly && isNaN(value)) {
      return;
    }
    this.otpForm?.reset();
    if (!this.hasVal(value)) {
      this.rebuildValue();
      return;
    }
    value = value.toString().replace(/\s/g, "");
    Array.from(value).forEach((c, idx) => {
      if (this.otpForm.get(this.getControlName(idx))) {
        this.otpForm.get(this.getControlName(idx)).setValue(c);
      }
    });
    if (!this.config.disableAutoFocus) {
      setTimeout(() => {
        const containerItem = this.document.getElementById(`c_${this.componentKey}`);
        var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
        let ele = containerItem.getElementsByClassName("otp-input")[indexOfElementToFocus];
        if (ele && ele.focus) {
          setTimeout(() => {
            ele.focus();
          }, 1);
        }
      }, 0);
    }
    this.rebuildValue();
  }
  rebuildValue() {
    let val = null;
    ObjectUtil.keys(this.otpForm.controls).forEach((k) => {
      let ctrlVal = this.otpForm.controls[k].value;
      if (ctrlVal) {
        let isLengthExceed = ctrlVal.length > 1;
        let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == "upper" || this.config.letterCase.toLocaleLowerCase() == "lower");
        ctrlVal = ctrlVal[0];
        let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == "upper" ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;
        if (isCaseTransformEnabled && transformedVal == ctrlVal) {
          isCaseTransformEnabled = false;
        } else {
          ctrlVal = transformedVal;
        }
        if (val == null) {
          val = ctrlVal;
        } else {
          val += ctrlVal;
        }
        if (isLengthExceed || isCaseTransformEnabled) {
          this.otpForm.controls[k].setValue(ctrlVal);
        }
      }
    });
    if (this.currentVal != val) {
      this.currentVal = val;
      this.onChange(val);
      if (this.formCtrl?.setValue) {
        this.formCtrl.setValue(val);
      }
      this.onInputChange.next(val);
    }
  }
  handlePaste(e) {
    let clipboardData = e.clipboardData || window["clipboardData"];
    if (clipboardData) {
      var pastedData = clipboardData.getData("Text");
    }
    e.stopPropagation();
    e.preventDefault();
    if (!pastedData || this.config.allowNumbersOnly && !this.validateNumber(pastedData)) {
      return;
    }
    this.setValue(pastedData);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.\u0275fac = function NgOtpInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgOtpInputComponent)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Injector));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgOtpInputComponent,
      selectors: [["ng-otp-input"], ["ngx-otp-input"]],
      inputs: {
        config: "config",
        formCtrl: "formCtrl",
        disabled: "disabled"
      },
      outputs: {
        onBlur: "onBlur",
        onInputChange: "onInputChange"
      },
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgOtpInputComponent),
        multi: true
      }])],
      decls: 1,
      vars: 1,
      consts: [["inp", ""], ["tabindex", "0", 3, "class", "id", "ngStyle", "focusin", "focusout", 4, "ngIf"], ["tabindex", "0", 3, "focusin", "focusout", "id", "ngStyle"], [1, "n-o-c"], [4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "paste", "keyup", "input", "keydown", "pattern", "type", "placeholder", "ngStyle", "formControl", "id", "ngClass"], [4, "ngIf"]],
      template: function NgOtpInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NgOtpInputComponent_div_0_Template, 3, 7, "div", 1);
        }
        if (rf & 2) {
          \u0275\u0275property("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
        }
      },
      dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, PatternValidator, FormControlDirective, NgIf, NgForOf, NgStyle, NgClass],
      styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]{margin:0 .51rem}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:first-child{margin-left:0}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:last-child{margin-right:0}.n-o-c[_ngcontent-%COMP%]{display:flex;align-items:center}.error-input[_ngcontent-%COMP%]{border-color:red}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOtpInputComponent, [{
    type: Component,
    args: [{
      selector: "ng-otp-input, ngx-otp-input",
      imports: [ReactiveFormsModule, NgIf, NgForOf, NgStyle, NgClass],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgOtpInputComponent),
        multi: true
      }],
      template: `<div class="ng-otp-input-wrapper wrapper {{config.containerClass}}" id="c_{{componentKey}}" *ngIf="otpForm?.controls"\r
  [ngStyle]="config.containerStyles" tabindex="0" \r
  (focusin)="onFocusIn()" \r
  (focusout)="onFocusOut()">\r
  <div class="n-o-c">\r
    <ng-container *ngFor="let item of controlKeys;let i=index;let last=last">\r
      <input (paste)="handlePaste($event)" [pattern]="config.allowNumbersOnly ? '\\\\d*' : ''" \r
      [type]="inputType"  [placeholder]="config?.placeholder || ''"\r
      [attr.inputmode]="config.allowNumbersOnly ? 'numeric' : (config.inputMode ||'text')"\r
      [ngStyle]="config.inputStyles" \r
      class="otp-input {{config.inputClass}}" autocomplete="one-time-code" \r
      [formControl]="otpForm.controls[item]" #inp [id]="getBoxId(i)" \r
      (keyup)="onKeyUp($event,i)" (input)="onInput($event,i)" (keydown)="onKeyDown($event,i)" [ngClass]="{'error-input': (config?.showError && formControl?.invalid && (formControl?.dirty || formControl?.touched))}">\r
      <span *ngIf="config.separator && !last">\r
        {{config.separator}}\r
      </span>\r
    </ng-container>\r
  </div>  \r
</div>`,
      styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper .otp-input{margin:0 .51rem}.ng-otp-input-wrapper .otp-input:first-child{margin-left:0}.ng-otp-input-wrapper .otp-input:last-child{margin-right:0}.n-o-c{display:flex;align-items:center}.error-input{border-color:red}@media screen and (max-width: 767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input{width:30px;font-size:18px;height:30px}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Injector
  }], {
    config: [{
      type: Input
    }],
    formCtrl: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onBlur: [{
      type: Output
    }],
    onInputChange: [{
      type: Output
    }]
  });
})();
var NgOtpInputModule = class _NgOtpInputModule {
  static {
    this.\u0275fac = function NgOtpInputModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgOtpInputModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgOtpInputModule,
      imports: [NgOtpInputComponent],
      exports: [NgOtpInputComponent]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [NgOtpInputComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOtpInputModule, [{
    type: NgModule,
    args: [{
      imports: [NgOtpInputComponent],
      exports: [NgOtpInputComponent]
    }]
  }], null, null);
})();

// src/app/features/auth/pages/otp-verification/otp-verification.ts
var _c02 = () => ({ label: "Verification Code" });
function OtpVerification_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.sentTo(), " ");
  }
}
function OtpVerification_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "fa-icon", 9);
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.faCircleCheck);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.message());
  }
}
function OtpVerification_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275element(1, "fa-icon", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.faClock);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" OTP expires in ", ctx_r0.expiryMinutes(), "m ", ctx_r0.expiryRemainingSeconds(), "s ");
  }
}
function OtpVerification_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, OtpVerification_Conditional_7_Conditional_1_Template, 4, 2, "div", 7);
    \u0275\u0275conditionalCreate(2, OtpVerification_Conditional_7_Conditional_2_Template, 3, 3, "p", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.message() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.expiresAt() || ctx_r0.hasExpiresInSeconds() ? 2 : -1);
  }
}
function OtpVerification_Conditional_8_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Resending... ");
  }
}
function OtpVerification_Conditional_8_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No resends remaining ");
  }
}
function OtpVerification_Conditional_8_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" Resend in ", ctx_r0.resendSecondsLeft(), "s ");
  }
}
function OtpVerification_Conditional_8_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Resend OTP ");
  }
}
function OtpVerification_Conditional_8_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.remainingResends(), " left)");
  }
}
function OtpVerification_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "span");
    \u0275\u0275text(2, "Didn't receive the code?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function OtpVerification_Conditional_8_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.resendOtp());
    });
    \u0275\u0275conditionalCreate(4, OtpVerification_Conditional_8_Conditional_8_Conditional_4_Template, 1, 0)(5, OtpVerification_Conditional_8_Conditional_8_Conditional_5_Template, 1, 0)(6, OtpVerification_Conditional_8_Conditional_8_Conditional_6_Template, 1, 1)(7, OtpVerification_Conditional_8_Conditional_8_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, OtpVerification_Conditional_8_Conditional_8_Conditional_8_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isResending() || ctx_r0.resendSecondsLeft() > 0 || ctx_r0.remainingResends() <= 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isResending() ? 4 : ctx_r0.remainingResends() <= 0 ? 5 : ctx_r0.resendSecondsLeft() > 0 ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.hasRemainingResends() ? 8 : -1);
  }
}
function OtpVerification_Conditional_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "p", 22);
    \u0275\u0275text(2, "You can add your email later from your profile.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 23);
    \u0275\u0275listener("pointerdown", function OtpVerification_Conditional_8_Conditional_9_Template_button_pointerdown_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.preventDefault());
    })("click", function OtpVerification_Conditional_8_Conditional_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.skipEmailVerification());
    });
    \u0275\u0275text(4, " Skip email verification for now ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting() || ctx_r0.isResending());
  }
}
function OtpVerification_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12);
    \u0275\u0275listener("ngSubmit", function OtpVerification_Conditional_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275declareLet(1);
    \u0275\u0275elementStart(2, "app-form-fields", 13)(3, "div", 14)(4, "ng-otp-input", 15);
    \u0275\u0275listener("focusin", function OtpVerification_Conditional_8_Template_ng_otp_input_focusin_4_listener() {
      \u0275\u0275restoreView(_r2);
      const otpControl_r3 = \u0275\u0275readContextLet(1);
      return \u0275\u0275resetView(otpControl_r3.markAsUntouched());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "app-loading-button", 16)(6, "button", 17);
    \u0275\u0275text(7, " Verify OTP ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, OtpVerification_Conditional_8_Conditional_8_Template, 9, 3, "div", 18);
    \u0275\u0275conditionalCreate(9, OtpVerification_Conditional_8_Conditional_9_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.otpForm);
    \u0275\u0275advance();
    const otpControl_r6 = \u0275\u0275storeLet(ctx_r0.otpForm.controls.otp);
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(11, _c02))("dynamicFormControl", otpControl_r6)("hasClickedSubmit", ctx_r0.hasClickedSubmit());
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", otpControl_r6)("config", ctx_r0.otpConfig);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r0.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isSubmitting());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.sentTo() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showSkipButton() ? 9 : -1);
  }
}
var PURPOSE_CONFIG = {
  EDIT_PROFILE: {
    successMessage: "Email added successfully.",
    nextRoute: "/profile/edit-profile"
  },
  SIGNUP: {
    showSkipButton: true,
    nextRoute: "/profile/view-profile"
  },
  FORGOT_PASSWORD: {
    nextRoute: "/auth/reset-password"
  }
};
var OtpVerification = class _OtpVerification {
  faCircleCheck = faCircleCheck;
  faClock = faClock;
  formBuilder = inject(NonNullableFormBuilder);
  formValidation = inject(FormValidation);
  authService = inject(Auth);
  userService = inject(User);
  route = inject(ActivatedRoute);
  router = inject(Router);
  snackBar = inject(MatSnackBar);
  requestId = "";
  cooldownTimer;
  expiryTimer;
  otpForm;
  hasClickedSubmit = signal(false, ...ngDevMode ? [{ debugName: "hasClickedSubmit" }] : []);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  isResending = signal(false, ...ngDevMode ? [{ debugName: "isResending" }] : []);
  purpose = signal(null, ...ngDevMode ? [{ debugName: "purpose" }] : []);
  showSkipButton = computed(() => {
    const purpose = this.purpose();
    return purpose ? PURPOSE_CONFIG[purpose].showSkipButton : false;
  }, ...ngDevMode ? [{ debugName: "showSkipButton" }] : []);
  message = signal("", ...ngDevMode ? [{ debugName: "message" }] : []);
  sentTo = signal("", ...ngDevMode ? [{ debugName: "sentTo" }] : []);
  expiresAt = signal("", ...ngDevMode ? [{ debugName: "expiresAt" }] : []);
  expiresInSeconds = signal(0, ...ngDevMode ? [{ debugName: "expiresInSeconds" }] : []);
  hasExpiresInSeconds = signal(false, ...ngDevMode ? [{ debugName: "hasExpiresInSeconds" }] : []);
  resendCooldownSeconds = signal(0, ...ngDevMode ? [{ debugName: "resendCooldownSeconds" }] : []);
  resendAvailableAt = signal("", ...ngDevMode ? [{ debugName: "resendAvailableAt" }] : []);
  remainingResends = signal(0, ...ngDevMode ? [{ debugName: "remainingResends" }] : []);
  hasRemainingResends = signal(false, ...ngDevMode ? [{ debugName: "hasRemainingResends" }] : []);
  resendSecondsLeft = signal(0, ...ngDevMode ? [{ debugName: "resendSecondsLeft" }] : []);
  expirySecondsLeft = signal(0, ...ngDevMode ? [{ debugName: "expirySecondsLeft" }] : []);
  expiryMinutes = computed(() => Math.floor(this.expirySecondsLeft() / 60), ...ngDevMode ? [{ debugName: "expiryMinutes" }] : []);
  expiryRemainingSeconds = computed(() => this.expirySecondsLeft() % 60, ...ngDevMode ? [{ debugName: "expiryRemainingSeconds" }] : []);
  otpDigits = signal(6, ...ngDevMode ? [{ debugName: "otpDigits" }] : []);
  otpConfig = {
    length: 6,
    allowNumbersOnly: true,
    showError: false,
    inputClass: "otp-input-mobile-gap"
  };
  ngOnInit() {
    this.createForm();
    const purpose = this.route.snapshot.queryParamMap.get("purpose");
    const requestId = this.route.snapshot.queryParamMap.get("requestId");
    if (!purpose || !(purpose in PURPOSE_CONFIG) || !requestId) {
      this.router.navigateByUrl("/404", { replaceUrl: true });
      return;
    }
    this.purpose.set(purpose);
    this.requestId = requestId;
    const params = this.route.snapshot.queryParamMap;
    const otpDigits = Number(params.get("otpDigits")) || 6;
    this.message.set(params.get("message") || "");
    this.sentTo.set(params.get("sentTo") || "");
    this.expiresAt.set(params.get("expiresAt") || "");
    this.expiresInSeconds.set(Number(params.get("expiresInSeconds")) || 0);
    this.hasExpiresInSeconds.set(params.has("expiresInSeconds"));
    this.resendCooldownSeconds.set(Number(params.get("resendCooldownSeconds")) || 0);
    this.resendAvailableAt.set(params.get("resendAvailableAt") || "");
    this.remainingResends.set(Number(params.get("remainingResends")) || 0);
    this.hasRemainingResends.set(params.has("remainingResends"));
    this.otpDigits.set(otpDigits);
    this.otpConfig = __spreadProps(__spreadValues({}, this.otpConfig), { length: otpDigits });
    this.otpForm.controls.otp.setValidators([commonFormValidator({
      required: true,
      minLength: otpDigits,
      maxLength: otpDigits
    })]);
    this.startResendCooldown();
    this.startExpiryCountdown();
  }
  ngOnDestroy() {
    if (this.cooldownTimer)
      clearInterval(this.cooldownTimer);
    if (this.expiryTimer)
      clearInterval(this.expiryTimer);
  }
  createForm() {
    this.otpForm = this.formBuilder.group({
      otp: ["", [commonFormValidator({
        required: true,
        minLength: 6,
        maxLength: 6
      })]]
    });
  }
  onSubmit() {
    this.hasClickedSubmit.set(true);
    this.formValidation.validateAndRun(this.otpForm, () => {
      const purpose = this.purpose();
      if (!purpose)
        return;
      this.isSubmitting.set(true);
      this.verifyOtp(purpose).pipe(finalize(() => this.isSubmitting.set(false))).subscribe({
        next: (response) => {
          const successMessage = PURPOSE_CONFIG[purpose].successMessage;
          if (successMessage) {
            this.snackBar.open(successMessage, "\u2716", {
              duration: 5e3,
              panelClass: "snackbar-success"
            });
          }
          const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
          if (purpose === "SIGNUP" && returnUrl) {
            this.router.navigateByUrl(returnUrl, { replaceUrl: true });
            return;
          }
          this.router.navigate([PURPOSE_CONFIG[purpose].nextRoute], {
            queryParams: response ? __spreadProps(__spreadValues({}, response), {
              returnUrl
            }) : void 0,
            replaceUrl: true
          });
        },
        error: (error) => {
          const message = error.error?.message || error.error?.error || "OTP verification failed. Please try again.";
          this.snackBar.open(message, "\u2716", {
            duration: 5e3,
            panelClass: "snackbar-error"
          });
        }
      });
    });
  }
  skipEmailVerification() {
    const purpose = this.purpose();
    if (!purpose || !this.showSkipButton())
      return;
    const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
    this.router.navigateByUrl(returnUrl || PURPOSE_CONFIG[purpose].nextRoute);
  }
  resendOtp() {
    if (!this.sentTo() || this.remainingResends() <= 0 || this.resendSecondsLeft() > 0 || this.isResending())
      return;
    const purpose = this.purpose();
    if (!purpose)
      return;
    this.isResending.set(true);
    this.sendOtp(purpose).pipe(finalize(() => this.isResending.set(false))).subscribe({
      next: (response) => {
        this.applyOtpResponse(response);
        this.otpForm.controls.otp.reset();
        this.hasClickedSubmit.set(false);
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: response,
          queryParamsHandling: "merge",
          replaceUrl: true
        });
        this.snackBar.open(response.message || "OTP resent successfully.", "\u2716", {
          duration: 5e3,
          panelClass: "snackbar-success"
        });
      },
      error: (error) => {
        const message = error.error?.message || error.error?.error || "Failed to resend OTP. Please try again.";
        this.snackBar.open(message, "\u2716", {
          duration: 5e3,
          panelClass: "snackbar-error"
        });
      }
    });
  }
  verifyOtp(purpose) {
    const body = {
      requestId: this.requestId,
      otp: this.otpForm.controls.otp.value
    };
    if (purpose === "FORGOT_PASSWORD") {
      return this.authService.verifyForgotPasswordOtp(body);
    }
    return this.userService.verifyEmailOtp(body).pipe(map(() => null));
  }
  sendOtp(purpose) {
    const body = { email: this.sentTo() };
    return purpose === "FORGOT_PASSWORD" ? this.authService.sendForgotPasswordOtp(body) : this.userService.sendEmailOtp(body);
  }
  applyOtpResponse(response) {
    this.requestId = response.requestId;
    this.message.set(response.message || "");
    this.sentTo.set(response.sentTo || "");
    this.expiresAt.set(response.expiresAt || "");
    this.expiresInSeconds.set(response.expiresInSeconds || 0);
    this.hasExpiresInSeconds.set(true);
    this.resendCooldownSeconds.set(response.resendCooldownSeconds || 0);
    this.resendAvailableAt.set(response.resendAvailableAt || "");
    this.remainingResends.set(response.remainingResends || 0);
    this.hasRemainingResends.set(true);
    const otpDigits = response.otpDigits || 6;
    this.otpDigits.set(otpDigits);
    this.otpConfig = __spreadProps(__spreadValues({}, this.otpConfig), { length: otpDigits });
    this.otpForm.controls.otp.setValidators([commonFormValidator({
      required: true,
      minLength: otpDigits,
      maxLength: otpDigits
    })]);
    this.startResendCooldown();
    this.startExpiryCountdown();
  }
  startResendCooldown() {
    if (this.cooldownTimer)
      clearInterval(this.cooldownTimer);
    const updateSecondsLeft = () => {
      const availableAt = Date.parse(this.resendAvailableAt());
      const secondsLeft = Number.isNaN(availableAt) ? 0 : Math.max(0, Math.ceil((availableAt - Date.now()) / 1e3));
      this.resendSecondsLeft.set(secondsLeft);
      if (secondsLeft === 0 && this.cooldownTimer) {
        clearInterval(this.cooldownTimer);
        this.cooldownTimer = void 0;
      }
    };
    updateSecondsLeft();
    if (this.resendSecondsLeft() > 0) {
      this.cooldownTimer = setInterval(updateSecondsLeft, 1e3);
    }
  }
  startExpiryCountdown() {
    if (this.expiryTimer)
      clearInterval(this.expiryTimer);
    const parsedExpiry = Date.parse(this.expiresAt());
    const expiryDeadline = Number.isNaN(parsedExpiry) ? Date.now() + this.expiresInSeconds() * 1e3 : parsedExpiry;
    const updateSecondsLeft = () => {
      const secondsLeft = Math.max(0, Math.ceil((expiryDeadline - Date.now()) / 1e3));
      this.expirySecondsLeft.set(secondsLeft);
      if (secondsLeft === 0 && this.expiryTimer) {
        clearInterval(this.expiryTimer);
        this.expiryTimer = void 0;
      }
    };
    updateSecondsLeft();
    if (this.expirySecondsLeft() > 0) {
      this.expiryTimer = setInterval(updateSecondsLeft, 1e3);
    }
  }
  static \u0275fac = function OtpVerification_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtpVerification)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpVerification, selectors: [["app-otp-verification"]], decls: 9, vars: 4, consts: [[1, "auth-form", "text-center"], [1, "mb-8", "text-center"], [1, "text-3xl", "font-bold", "text-gray-900"], [1, "mt-2", "text-sm", "text-gray-600"], [1, "mt-2", "inline-flex", "rounded-full", "bg-indigo-50", "px-3", "py-1", "text-sm", "font-semibold", "text-indigo-700"], [1, "mb-6", "flex", "flex-col", "items-center", "gap-3", "rounded-xl", "border", "border-indigo-100", "bg-linear-to-r", "from-blue-50", "via-indigo-50", "to-violet-50", "px-4", "py-3", "text-left", "shadow-sm", "sm:flex-row"], ["appScrollToInvalid", "", 1, "space-y-5", 3, "formGroup"], [1, "flex", "min-w-0", "items-center", "gap-2.5"], [1, "shrink-0", "rounded-full", "bg-amber-100", "px-3", "py-1.5", "text-center", "text-xs", "font-semibold", "text-amber-700", "sm:ml-auto"], [1, "shrink-0", "text-xl", "text-emerald-600", 3, "icon"], [1, "text-sm", "font-semibold", "text-indigo-950"], [1, "mr-1", 3, "icon"], ["appScrollToInvalid", "", 1, "space-y-5", 3, "ngSubmit", "formGroup"], [3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit"], [1, "flex", "justify-center"], [3, "focusin", "formControl", "config"], [1, "mt-10", "w-full", 3, "loading"], ["type", "submit", 1, "u-gradient-btn", "w-full", 3, "disabled"], [1, "text-sm", "text-gray-600"], [1, "border-t", "border-slate-200", "pt-4", "text-center"], ["type", "button", 1, "ml-1", "font-semibold", "text-indigo-600", "transition-colors", "hover:text-violet-600", "disabled:cursor-not-allowed", "disabled:opacity-50", 3, "click", "disabled"], [1, "ml-1"], [1, "text-xs", "text-slate-500"], ["type", "button", 1, "mt-2", "text-sm", "font-semibold", "text-slate-600", "transition-colors", "hover:text-indigo-600", "disabled:cursor-not-allowed", "disabled:opacity-50", 3, "pointerdown", "click", "disabled"]], template: function OtpVerification_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Verify OTP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, OtpVerification_Conditional_6_Template, 2, 1, "p", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, OtpVerification_Conditional_7_Template, 3, 2, "div", 5);
      \u0275\u0275conditionalCreate(8, OtpVerification_Conditional_8_Template, 10, 12, "form", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Enter the ", ctx.otpDigits(), "-digit verification code sent to your email address. ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.sentTo() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.message() || ctx.expiresAt() || ctx.hasExpiresInSeconds() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.otpForm ? 8 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, MatSnackBarModule, FontAwesomeModule, FaIconComponent, NgOtpInputComponent, FormFieldsComponent, ScrollToInvalid, LoadingButton], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtpVerification, [{
    type: Component,
    args: [{ selector: "app-otp-verification", imports: [ReactiveFormsModule, MatSnackBarModule, FontAwesomeModule, NgOtpInputComponent, FormFieldsComponent, ScrollToInvalid, LoadingButton], template: `<div class="auth-form text-center">
  <div class="mb-8 text-center">
    <h1 class="text-3xl font-bold text-gray-900">Verify OTP</h1>
    <p class="mt-2 text-sm text-gray-600">
      Enter the {{ otpDigits() }}-digit verification code sent to your email address.
    </p>
    @if (sentTo()) {
    <p class="mt-2 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
      {{ sentTo() }}
    </p>
    }
  </div>

  @if (message() || expiresAt() || hasExpiresInSeconds()) {
  <div
    class="mb-6 flex flex-col items-center gap-3 rounded-xl border border-indigo-100 bg-linear-to-r from-blue-50 via-indigo-50 to-violet-50 px-4 py-3 text-left shadow-sm sm:flex-row">
    @if (message()) {
    <div class="flex min-w-0 items-center gap-2.5">
      <fa-icon [icon]="faCircleCheck" class="shrink-0 text-xl text-emerald-600"></fa-icon>
      <p class="text-sm font-semibold text-indigo-950">{{ message() }}</p>
    </div>
    }
    @if (expiresAt() || hasExpiresInSeconds()) {
    <p
      class="shrink-0 rounded-full bg-amber-100 px-3 py-1.5 text-center text-xs font-semibold text-amber-700 sm:ml-auto">
      <fa-icon [icon]="faClock" class="mr-1"></fa-icon>
      OTP expires in {{ expiryMinutes() }}m {{ expiryRemainingSeconds() }}s
    </p>
    }
  </div>
  }

  @if (otpForm) {
  <form appScrollToInvalid [formGroup]="otpForm" (ngSubmit)="onSubmit()" class="space-y-5">
    @let otpControl = otpForm.controls.otp;
    <app-form-fields [fieldConfig]="{ label: 'Verification Code' }" [dynamicFormControl]="otpControl"
      [hasClickedSubmit]="hasClickedSubmit()">
      <div class="flex justify-center">
        <ng-otp-input [formControl]="otpControl" [config]="otpConfig"
          (focusin)="otpControl.markAsUntouched()"></ng-otp-input>
      </div>
    </app-form-fields>

    <app-loading-button [loading]="isSubmitting()" class="mt-10 w-full">
      <button type="submit" class="u-gradient-btn w-full" [disabled]="isSubmitting()">
        Verify OTP
      </button>
    </app-loading-button>

    @if (sentTo()) {
    <div class="text-sm text-gray-600">
      <span>Didn't receive the code?</span>
      <button type="button"
        class="ml-1 font-semibold text-indigo-600 transition-colors hover:text-violet-600 disabled:cursor-not-allowed disabled:opacity-50"
        [disabled]="isResending() || resendSecondsLeft() > 0 || remainingResends() <= 0" (click)="resendOtp()">
        @if (isResending()) {
        Resending...
        } @else if (remainingResends() <= 0) { No resends remaining } @else if (resendSecondsLeft()> 0) {
          Resend in {{ resendSecondsLeft() }}s
          } @else {
          Resend OTP
          }
      </button>
      @if (hasRemainingResends()) {
      <span class="ml-1">({{ remainingResends() }} left)</span>
      }
    </div>
    }

    @if (showSkipButton()) {
    <div class="border-t border-slate-200 pt-4 text-center">
      <p class="text-xs text-slate-500">You can add your email later from your profile.</p>
      <button type="button"
        class="mt-2 text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"
        [disabled]="isSubmitting() || isResending()" (pointerdown)="$event.preventDefault()"
        (click)="skipEmailVerification()">
        Skip email verification for now
      </button>
    </div>
    }
  </form>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpVerification, { className: "OtpVerification", filePath: "src/app/features/auth/pages/otp-verification/otp-verification.ts", lineNumber: 40 });
})();
export {
  OtpVerification
};
//# sourceMappingURL=chunk-OK7WLBIT.mjs.map
