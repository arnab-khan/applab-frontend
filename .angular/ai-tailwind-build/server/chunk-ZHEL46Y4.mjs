import './polyfills.server.mjs';
import {
  MatFormFieldModule,
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-RVM3SYA6.mjs";
import {
  HighlightText,
  SortButton
} from "./chunk-WYS3RSIU.mjs";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-YF3R54IG.mjs";
import {
  AutoResizeTextarea
} from "./chunk-RUBNSQLB.mjs";
import {
  takeUntilDestroyed
} from "./chunk-J7JKL4OQ.mjs";
import {
  CommonDialog
} from "./chunk-2APEC5J7.mjs";
import {
  TelemetryClick
} from "./chunk-AWOCH5K7.mjs";
import {
  DialogHeader
} from "./chunk-GUTTCFMP.mjs";
import "./chunk-IJ63L4YV.mjs";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef
} from "./chunk-AIQFFD3C.mjs";
import {
  SanitizeInput
} from "./chunk-JTT7433S.mjs";
import {
  FaIconComponent,
  FontAwesomeModule,
  faClipboardList,
  faEllipsisVertical,
  faPenToSquare,
  faPlus,
  faTrash
} from "./chunk-5UOF4NU2.mjs";
import {
  FormFieldsComponent
} from "./chunk-4P6MTJVE.mjs";
import {
  commonFormValidator
} from "./chunk-JLRAXHSD.mjs";
import {
  ErrorNotification
} from "./chunk-BDFV2XXT.mjs";
import {
  LoadingButton
} from "./chunk-3IWR3DYU.mjs";
import {
  DefaultValueAccessor,
  FormControlDirective,
  FormGroupDirective,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-SIRJKENA.mjs";
import "./chunk-QUUQL4HB.mjs";
import "./chunk-XVUKSFH7.mjs";
import {
  Auth,
  MatButtonModule,
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-734LHT3I.mjs";
import {
  MatRipple,
  _StructuralStylesLoader,
  _animationsDisabled
} from "./chunk-DAIO4D52.mjs";
import {
  BidiModule,
  Platform2 as Platform,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  environment,
  toHttpParams
} from "./chunk-5YUTHQXA.mjs";
import "./chunk-SOL5SY5C.mjs";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  NgClass,
  NgTemplateOutlet
} from "./chunk-4HFGPD3K.mjs";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Subject,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  debounceTime,
  distinctUntilChanged,
  effect,
  forwardRef,
  inject,
  input,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-4ARKR3K5.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/features/todo/services/todo-api.ts
var TodoApi = class _TodoApi {
  httpClient = inject(HttpClient);
  baseApiUrl = `${environment.rootApiUrl}/todo`;
  add(body) {
    return this.httpClient.post(`${this.baseApiUrl}/add`, body);
  }
  update(body) {
    return this.httpClient.patch(`${this.baseApiUrl}/update`, body);
  }
  delete(id) {
    return this.httpClient.delete(`${this.baseApiUrl}/delete/${id}`);
  }
  getAll(params) {
    return this.httpClient.get(`${this.baseApiUrl}/all`, { params: toHttpParams(params) });
  }
  markAsComplete(params) {
    return this.httpClient.patch(`${this.baseApiUrl}/complete`, null, { params: toHttpParams(params) });
  }
  static \u0275fac = function TodoApi_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TodoApi)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TodoApi, factory: _TodoApi.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TodoApi, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/todo/components/todo-form/todo-form.ts
var _c0 = () => ({ label: "Title" });
var _c1 = () => ({ label: "Description" });
function TodoForm_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275listener("ngSubmit", function TodoForm_Conditional_1_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "app-form-fields", 3);
    \u0275\u0275element(2, "input", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-form-fields", 3)(4, "textarea", 5);
    \u0275\u0275text(5, "      ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-loading-button", 6)(7, "button", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.todoForm);
    const titleControl_r3 = ctx_r1.todoForm.controls.title;
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(13, _c0))("dynamicFormControl", titleControl_r3)("hasClickedSubmit", ctx_r1.hasClickedSubmit);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", titleControl_r3)("placeholder", "Enter task title");
    const descriptionControl_r4 = ctx_r1.todoForm.controls.description;
    \u0275\u0275advance();
    \u0275\u0275property("fieldConfig", \u0275\u0275pureFunction0(14, _c1))("dynamicFormControl", descriptionControl_r4)("hasClickedSubmit", ctx_r1.hasClickedSubmit);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", descriptionControl_r4)("placeholder", "Enter task description");
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r1.isSubmitting());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_15_0 = ctx_r1.todo()) == null ? null : tmp_15_0.id) ? "Update Task" : "Add Task", " ");
  }
}
var TodoForm = class _TodoForm {
  todo = input(null, ...ngDevMode ? [{ debugName: "todo" }] : []);
  resetTodo = output();
  todoApi = inject(TodoApi);
  formBuilder = inject(NonNullableFormBuilder);
  snackBar = inject(MatSnackBar);
  errorNotification = inject(ErrorNotification);
  todoForm;
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  hasClickedSubmit = false;
  constructor() {
    this.createForm();
    effect(() => {
      this.patchFromValue();
    });
  }
  createForm() {
    this.todoForm = this.formBuilder.group({
      title: [
        "",
        [
          commonFormValidator({
            required: true,
            maxLength: 50
          })
        ]
      ],
      description: [
        "",
        [
          commonFormValidator({
            required: true,
            maxLength: 255
          })
        ]
      ]
    });
  }
  patchFromValue() {
    const todo = this.todo();
    if (!todo) {
      return;
    }
    this.todoForm.patchValue({
      title: todo.title ?? "",
      description: todo.description ?? ""
    });
  }
  onSubmit() {
    this.hasClickedSubmit = true;
    if (this.todoForm.valid) {
      this.isSubmitting.set(true);
      this.addTodo();
    }
  }
  addTodo() {
    if (this.todoForm.valid) {
      const controls = this.todoForm.controls;
      const id = this.todo()?.id;
      const todoData = __spreadProps(__spreadValues({}, id && { id }), {
        title: controls.title.value,
        description: controls.description.value
      });
      const request$ = id ? this.todoApi.update(todoData) : this.todoApi.add(todoData);
      request$.subscribe({
        next: () => {
          this.snackBar.open("Todo added successfully", "\u2716", { duration: 3e3, panelClass: "snackbar-success" });
          this.resetTodo.emit();
        },
        error: (error) => {
          this.isSubmitting.set(false);
          this.errorNotification.show(error, "Failed to add todo. Please try again.", { duration: 5e3, panelClass: "snackbar-error" });
        }
      });
    }
  }
  static \u0275fac = function TodoForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TodoForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TodoForm, selectors: [["app-todo-form"]], inputs: { todo: [1, "todo"] }, outputs: { resetTodo: "resetTodo" }, decls: 2, vars: 1, consts: [[1, "c-todo-form"], [1, "space-y-5", 3, "formGroup"], [1, "space-y-5", 3, "ngSubmit", "formGroup"], [3, "fieldConfig", "dynamicFormControl", "hasClickedSubmit"], ["type", "text", "name", "title", "appSanitizeInput", "", 1, "u-form-field", 3, "formControl", "placeholder"], ["name", "description", "appSanitizeInput", "", "appAutoResizeTextarea", "", 1, "u-form-field", "min-h-25", 3, "formControl", "placeholder"], [1, "mt-4", 3, "loading"], ["type", "submit", 1, "u-gradient-btn", "w-full"]], template: function TodoForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, TodoForm_Conditional_1_Template, 9, 15, "form", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.todoForm ? 1 : -1);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormControlDirective,
    FormGroupDirective,
    CommonModule,
    FormFieldsComponent,
    SanitizeInput,
    LoadingButton,
    MatSnackBarModule,
    AutoResizeTextarea
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TodoForm, [{
    type: Component,
    args: [{ selector: "app-todo-form", imports: [
      ReactiveFormsModule,
      CommonModule,
      FormFieldsComponent,
      SanitizeInput,
      LoadingButton,
      MatSnackBarModule,
      AutoResizeTextarea
    ], template: `<div class="c-todo-form">
  @if (todoForm) {
  <form [formGroup]="todoForm" (ngSubmit)="onSubmit()" class="space-y-5">

    @let titleControl=todoForm.controls.title;
    <app-form-fields [fieldConfig]="{label: 'Title'}" [dynamicFormControl]="titleControl"
      [hasClickedSubmit]="hasClickedSubmit">
      <input type="text" [formControl]="titleControl" class="u-form-field" [placeholder]="'Enter task title'"
        name="title" appSanitizeInput />
    </app-form-fields>

    @let descriptionControl=todoForm.controls.description;
    <app-form-fields [fieldConfig]="{label: 'Description'}" [dynamicFormControl]="descriptionControl"
      [hasClickedSubmit]="hasClickedSubmit">
      <textarea [formControl]="descriptionControl" class="u-form-field min-h-25"
        [placeholder]="'Enter task description'" name="description" appSanitizeInput appAutoResizeTextarea>
      </textarea>
    </app-form-fields>

    <app-loading-button [loading]="isSubmitting()" class="mt-4">
      <button type="submit" class="u-gradient-btn w-full">
        {{ todo()?.id ? 'Update Task' : 'Add Task' }}
      </button>
    </app-loading-button>
  </form>
  }
</div>` }]
  }], () => [], { todo: [{ type: Input, args: [{ isSignal: true, alias: "todo", required: false }] }], resetTodo: [{ type: Output, args: ["resetTodo"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TodoForm, { className: "TodoForm", filePath: "src/app/features/todo/components/todo-form/todo-form.ts", lineNumber: 29 });
})();

// src/app/features/todo/components/todo-form-dialog/todo-form-dialog.ts
var TodoFormDialog = class _TodoFormDialog {
  data = inject(MAT_DIALOG_DATA, { optional: true });
  todo = signal(this.data?.todo ?? null, ...ngDevMode ? [{ debugName: "todo" }] : []);
  dialogRef = inject(MatDialogRef);
  onResetTodo() {
    this.dialogRef.close({
      created: true
    });
  }
  onCancel() {
    this.dialogRef.close();
  }
  static \u0275fac = function TodoFormDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TodoFormDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TodoFormDialog, selectors: [["app-todo-form-dialog"]], decls: 4, vars: 2, consts: [["containerClass", "u-responsive-padding-x py-2 shadow", 3, "title"], [1, "u-responsive-padding-xy", "pt-2", "c-todo-form-dialog"], [3, "resetTodo", "todo"]], template: function TodoFormDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-dialog-header", 0);
      \u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "app-todo-form", 2);
      \u0275\u0275listener("resetTodo", function TodoFormDialog_Template_app_todo_form_resetTodo_3_listener() {
        return ctx.onResetTodo();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("title", ctx.todo() ? "Edit Task" : "Add New Task");
      \u0275\u0275advance(3);
      \u0275\u0275property("todo", ctx.todo());
    }
  }, dependencies: [MatDialogModule, MatDialogContent, DialogHeader, TodoForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TodoFormDialog, [{
    type: Component,
    args: [{ selector: "app-todo-form-dialog", imports: [MatDialogModule, DialogHeader, TodoForm], template: `<app-dialog-header containerClass="u-responsive-padding-x py-2 shadow"
  [title]="todo() ? 'Edit Task' : 'Add New Task'"></app-dialog-header>
<mat-dialog-content>
  <div class="u-responsive-padding-xy pt-2 c-todo-form-dialog">
    <app-todo-form [todo]="todo()" (resetTodo)="onResetTodo()"></app-todo-form>
  </div>
</mat-dialog-content>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TodoFormDialog, { className: "TodoFormDialog", filePath: "src/app/features/todo/components/todo-form-dialog/todo-form-dialog.ts", lineNumber: 13 });
})();

// node_modules/@angular/material/fesm2022/_internal-form-field-chunk.mjs
var _c02 = ["mat-internal-form-field", ""];
var _c12 = ["*"];
var _MatInternalFormField = class __MatInternalFormField {
  labelPosition = "after";
  static \u0275fac = function _MatInternalFormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatInternalFormField)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __MatInternalFormField,
    selectors: [["div", "mat-internal-form-field", ""]],
    hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
    hostVars: 2,
    hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-form-field--align-end", ctx.labelPosition === "before");
      }
    },
    inputs: {
      labelPosition: "labelPosition"
    },
    attrs: _c02,
    ngContentSelectors: _c12,
    decls: 1,
    vars: 0,
    template: function _MatInternalFormField_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c03 = ["input"];
var _c13 = ["label"];
var _c2 = ["*"];
var checkboxDefaults = {
  color: "accent",
  clickAction: "check-indeterminate",
  disabledInteractive: false
};
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: () => checkboxDefaults
});
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var MatCheckboxChange = class {
  source;
  checked;
};
var MatCheckbox = class _MatCheckbox {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _animationsDisabled = _animationsDisabled();
  _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
    optional: true
  });
  focus() {
    this._inputElement.nativeElement.focus();
  }
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  _animationClasses = {
    uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
    uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
    checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
    checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
    indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
    indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
  };
  ariaLabel = "";
  ariaLabelledby = null;
  ariaDescribedby;
  ariaExpanded;
  ariaControls;
  ariaOwns;
  _uniqueId;
  id;
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  required = false;
  labelPosition = "after";
  name = null;
  change = new EventEmitter();
  indeterminateChange = new EventEmitter();
  value;
  disableRipple = false;
  _inputElement;
  _labelElement;
  tabIndex;
  color;
  disabledInteractive;
  _onTouched = () => {
  };
  _currentAnimationClass = "";
  _currentCheckState = TransitionCheckState.Init;
  _controlValueAccessorChangeFn = () => {
  };
  _validatorChangeFn = () => {
  };
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this._options = this._options || checkboxDefaults;
    this.color = this._options.color || checkboxDefaults.color;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
    this.disabledInteractive = this._options?.disabledInteractive ?? false;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this.indeterminate);
  }
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _checked = false;
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _disabled = false;
  get indeterminate() {
    return this._indeterminate();
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate();
    this._indeterminate.set(value);
    if (changed) {
      if (value) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(value);
    }
    this._syncIndeterminate(value);
  }
  _indeterminate = signal(false, ...ngDevMode ? [{
    debugName: "_indeterminate"
  }] : []);
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  writeValue(value) {
    this.checked = !!value;
  }
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate.set(false);
          this.indeterminateChange.emit(false);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationsDisabled) {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
  static \u0275fac = function MatCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckbox)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCheckbox,
    selectors: [["mat-checkbox"]],
    viewQuery: function MatCheckbox_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
        \u0275\u0275viewQuery(_c13, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._labelElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-checkbox"],
    hostVars: 16,
    hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled)("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      ariaExpanded: [2, "aria-expanded", "ariaExpanded", booleanAttribute],
      ariaControls: [0, "aria-controls", "ariaControls"],
      ariaOwns: [0, "aria-owns", "ariaOwns"],
      id: "id",
      required: [2, "required", "required", booleanAttribute],
      labelPosition: "labelPosition",
      name: "name",
      value: "value",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
      color: "color",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
      checked: [2, "checked", "checked", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
    },
    outputs: {
      change: "change",
      indeterminateChange: "indeterminateChange"
    },
    exportAs: ["matCheckbox"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatCheckbox),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatCheckbox,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c2,
    decls: 15,
    vars: 23,
    consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
    template: function MatCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275listener("click", function MatCheckbox_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._preventBubblingFromLabel($event));
        });
        \u0275\u0275elementStart(1, "div", 4, 0)(3, "div", 5);
        \u0275\u0275listener("click", function MatCheckbox_Template_div_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onTouchTargetClick());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 6, 1);
        \u0275\u0275listener("blur", function MatCheckbox_Template_input_blur_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onBlur());
        })("click", function MatCheckbox_Template_input_click_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onInputClick());
        })("change", function MatCheckbox_Template_input_change_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onInteractionEvent($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 7);
        \u0275\u0275elementStart(7, "div", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 9);
        \u0275\u0275element(9, "path", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(10, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "label", 13, 2);
        \u0275\u0275projection(14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const checkbox_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("mdc-checkbox--selected", ctx.checked);
        \u0275\u0275property("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-controls", ctx.ariaControls)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("aria-expanded", ctx.ariaExpanded)("aria-owns", ctx.ariaOwns)("name", ctx.name)("value", ctx.value);
        \u0275\u0275advance(7);
        \u0275\u0275property("matRippleTrigger", checkbox_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.inputId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}@media(forced-colors: active){.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:GrayText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:GrayText}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{color:GrayText}}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus-visible~.mat-focus-indicator::before{content:""}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatCheckbox),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}@media(forced-colors: active){.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:GrayText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:GrayText}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{color:GrayText}}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus-visible~.mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    ariaExpanded: [{
      type: Input,
      args: [{
        alias: "aria-expanded",
        transform: booleanAttribute
      }]
    }],
    ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }],
    ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? void 0 : numberAttribute(value)
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatCheckboxModule = class _MatCheckboxModule {
  static \u0275fac = function MatCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatCheckboxModule,
    imports: [MatCheckbox],
    exports: [MatCheckbox, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCheckbox, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox],
      exports: [MatCheckbox, BidiModule]
    }]
  }], null, null);
})();

// src/app/features/todo/components/todo-list-item/todo-list-item.ts
var _c04 = (a0) => ({ "c-completed": a0 });
var _c14 = (a0) => ({ label: "Updated", value: a0 });
var _c22 = (a0) => ({ label: "Created", value: a0 });
function TodoListItem_Conditional_10_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TodoListItem_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TodoListItem_Conditional_10_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const todoTimestamp_r3 = \u0275\u0275reference(24);
    \u0275\u0275property("ngTemplateOutlet", todoTimestamp_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c14, ctx_r1.todo().updatedAt));
  }
}
function TodoListItem_Conditional_11_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TodoListItem_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TodoListItem_Conditional_11_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const todoTimestamp_r3 = \u0275\u0275reference(24);
    \u0275\u0275property("ngTemplateOutlet", todoTimestamp_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c22, ctx_r1.todo().createdAt));
  }
}
function TodoListItem_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const label_r4 = ctx.label;
    const value_r5 = ctx.value;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(label_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, value_r5, "MMM d, y, h:mm a"));
  }
}
var TodoListItem = class _TodoListItem {
  todo = input.required(...ngDevMode ? [{ debugName: "todo" }] : []);
  searchTerm = input("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  loaderState = output();
  resetTodo = output();
  completed = signal(false, ...ngDevMode ? [{ debugName: "completed" }] : []);
  isCompleting = signal(false, ...ngDevMode ? [{ debugName: "isCompleting" }] : []);
  todoApi = inject(TodoApi);
  snackBar = inject(MatSnackBar);
  errorNotification = inject(ErrorNotification);
  dialog = inject(MatDialog);
  faEllipsisVertical = faEllipsisVertical;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  constructor() {
    effect(() => {
      this.completed.set(this.todo().completed || false);
    });
  }
  onEdit() {
    const dialogRef = this.dialog.open(TodoFormDialog, {
      width: "50rem",
      maxHeight: "90%",
      data: {
        todo: this.todo()
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.created) {
        this.resetTodo.emit();
      }
    });
  }
  onDelete() {
    const dialogRef = this.dialog.open(CommonDialog, {
      width: "30rem",
      data: {
        type: "warning",
        message: "Are you sure you want to delete this todo?",
        confirmText: "Delete",
        cancelText: "Cancel"
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result?.confirmed) {
        return;
      }
      const todoId = this.todo().id;
      this.loaderState.emit(true);
      this.todoApi.delete(todoId).subscribe({
        next: () => {
          this.resetTodo.emit();
          this.snackBar.open("Todo deleted successfully", "\u2716", {
            duration: 3e3,
            panelClass: "snackbar-success"
          });
        },
        error: (err) => {
          this.loaderState.emit(false);
          console.error("Error deleting todo", err);
          this.errorNotification.show(err, "Failed to delete todo", {
            duration: 3e3,
            panelClass: "snackbar-error"
          });
        }
      });
    });
  }
  onCompletedChange() {
    this.isCompleting.set(true);
    const previousState = this.completed();
    this.completed.update((value) => !value);
    this.todoApi.markAsComplete({ id: this.todo().id }).subscribe({
      next: (updatedTodo) => {
        const completed = updatedTodo?.completed;
        const message = completed ? "Todo marked as completed" : "Todo marked as incomplete";
        this.snackBar.open(message, "\u2716", {
          duration: 3e3,
          panelClass: completed ? "snackbar-success" : "snackbar-info"
        });
        this.isCompleting.set(false);
      },
      error: (err) => {
        console.error("Error updating todo completion status", err);
        this.completed.set(previousState);
        this.errorNotification.show(err, "Failed to update todo status", {
          duration: 3e3,
          panelClass: "snackbar-error"
        });
        this.isCompleting.set(false);
      }
    });
  }
  static \u0275fac = function TodoListItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TodoListItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TodoListItem, selectors: [["app-todo-list-item"]], inputs: { todo: [1, "todo"], searchTerm: [1, "searchTerm"] }, outputs: { loaderState: "loaderState", resetTodo: "resetTodo" }, decls: 25, vars: 15, consts: [["menu", "matMenu"], ["todoTimestamp", ""], [1, "c-todo-item", "p-4", "md:p-5", "xl:p-6", "rounded-xl", "shadow-sm", "border", "border-gray-100", "hover:shadow-md", "transition-all", "relative", "h-full", "bg-white", "flex", "flex-col", 3, "ngClass"], [1, "flex", "gap-3", "items-start", "mb-2"], ["disableRipple", "", 1, "shrink-0", 3, "change", "checked", "disabled"], [1, "c-todo-title", "text-md", "font-semibold", "grow", "shrink", "w-0", "text-gray-900", 3, "appHighlightText"], ["appTelemetryClick", "todo_item_open_menu", 1, "text-gray-400", "hover:text-gray-600", "shrink-0", 3, "matMenuTriggerFor"], [3, "icon"], [1, "c-todo-description", "text-sm", "text-gray-600", "grow", 3, "appHighlightText"], [1, "mt-4", "pt-3", "border-t", "border-gray-200", "space-y-1.5"], [1, "bg-white/10", "py-2"], ["mat-menu-item", "", "appTelemetryClick", "todo_item_open_edit_form", 1, "hover:!bg-gray-100", 3, "click"], [1, "text-blue-600", "mr-2", 3, "icon"], [1, "text-blue-600"], ["mat-menu-item", "", 1, "hover:!bg-gray-100", 3, "click"], [1, "text-red-600", "mr-2", 3, "icon"], [1, "text-red-600"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "items-center", "gap-2", "text-xs"], [1, "font-semibold", "uppercase", "tracking-wide", "text-gray-500"], [1, "text-gray-700"]], template: function TodoListItem_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "mat-checkbox", 4);
      \u0275\u0275listener("change", function TodoListItem_Template_mat_checkbox_change_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCompletedChange());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h3", 5);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 6);
      \u0275\u0275element(6, "fa-icon", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p", 8);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9);
      \u0275\u0275conditionalCreate(10, TodoListItem_Conditional_10_Template, 1, 4, "ng-container");
      \u0275\u0275conditionalCreate(11, TodoListItem_Conditional_11_Template, 1, 4, "ng-container");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-menu", null, 0)(14, "div", 10)(15, "button", 11);
      \u0275\u0275listener("click", function TodoListItem_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEdit());
      });
      \u0275\u0275element(16, "fa-icon", 12);
      \u0275\u0275elementStart(17, "span", 13);
      \u0275\u0275text(18, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 14);
      \u0275\u0275listener("click", function TodoListItem_Template_button_click_19_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDelete());
      });
      \u0275\u0275element(20, "fa-icon", 15);
      \u0275\u0275elementStart(21, "span", 16);
      \u0275\u0275text(22, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(23, TodoListItem_ng_template_23_Template, 6, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const menu_r6 = \u0275\u0275reference(13);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c04, ctx.completed()));
      \u0275\u0275advance(2);
      \u0275\u0275property("checked", ctx.completed())("disabled", ctx.isCompleting());
      \u0275\u0275advance();
      \u0275\u0275property("appHighlightText", ctx.searchTerm());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.todo().title);
      \u0275\u0275advance();
      \u0275\u0275property("matMenuTriggerFor", menu_r6);
      \u0275\u0275advance();
      \u0275\u0275property("icon", ctx.faEllipsisVertical);
      \u0275\u0275advance();
      \u0275\u0275property("appHighlightText", ctx.searchTerm());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.todo().description, " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.todo().updatedAt ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.todo().createdAt ? 11 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("icon", ctx.faPenToSquare);
      \u0275\u0275advance(4);
      \u0275\u0275property("icon", ctx.faTrash);
    }
  }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatCheckboxModule, MatCheckbox, FontAwesomeModule, FaIconComponent, HighlightText, TelemetryClick, DatePipe], styles: ["\n\n.c-todo-item.c-completed[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  border-color: #bbf7d0;\n}\n.c-todo-item.c-completed[_ngcontent-%COMP%]   .todo-title[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.c-todo-item.c-completed[_ngcontent-%COMP%]   .todo-description[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n/*# sourceMappingURL=todo-list-item.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TodoListItem, [{
    type: Component,
    args: [{ selector: "app-todo-list-item", imports: [CommonModule, DatePipe, MatMenuModule, MatCheckboxModule, FontAwesomeModule, HighlightText, TelemetryClick], template: `<div
  class="c-todo-item p-4 md:p-5 xl:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all relative h-full bg-white flex flex-col"
  [ngClass]="{'c-completed': completed()}">
  <div class="flex gap-3 items-start mb-2">
    <mat-checkbox disableRipple [checked]="completed()" [disabled]="isCompleting()" (change)="onCompletedChange()"
      class="shrink-0">
    </mat-checkbox>
    <h3 class="c-todo-title text-md font-semibold grow shrink w-0 text-gray-900" [appHighlightText]="searchTerm()">{{
      todo().title }}</h3>
    <button [matMenuTriggerFor]="menu" class="text-gray-400 hover:text-gray-600 shrink-0"
      appTelemetryClick="todo_item_open_menu">
      <fa-icon [icon]="faEllipsisVertical"></fa-icon>
    </button>
  </div>

  <p class="c-todo-description text-sm text-gray-600 grow" [appHighlightText]="searchTerm()">{{ todo().description }}
  </p>

  <div class="mt-4 pt-3 border-t border-gray-200 space-y-1.5">
    @if (todo().updatedAt) {
    <ng-container *ngTemplateOutlet="todoTimestamp; context: { label: 'Updated', value: todo().updatedAt }">
    </ng-container>
    }
    @if (todo().createdAt) {
    <ng-container *ngTemplateOutlet="todoTimestamp; context: { label: 'Created', value: todo().createdAt }">
    </ng-container>
    }
  </div>

  <mat-menu #menu="matMenu">
    <div class="bg-white/10 py-2">
      <button mat-menu-item class="hover:!bg-gray-100" appTelemetryClick="todo_item_open_edit_form" (click)="onEdit()">
        <fa-icon [icon]="faPenToSquare" class="text-blue-600 mr-2"></fa-icon>
        <span class="text-blue-600">Edit</span>
      </button>
      <button mat-menu-item class="hover:!bg-gray-100" (click)="onDelete()">
        <fa-icon [icon]="faTrash" class="text-red-600 mr-2"></fa-icon>
        <span class="text-red-600">Delete</span>
      </button>
    </div>
  </mat-menu>
</div>

<ng-template #todoTimestamp let-label="label" let-value="value">
  <p class="flex items-center gap-2 text-xs">
    <span class="font-semibold uppercase tracking-wide text-gray-500">{{ label }}</span>
    <span class="text-gray-700">{{ value | date:'MMM d, y, h:mm a' }}</span>
  </p>
</ng-template>
`, styles: ["/* src/app/features/todo/components/todo-list-item/todo-list-item.scss */\n.c-todo-item.c-completed {\n  background-color: #f0fdf4;\n  border-color: #bbf7d0;\n}\n.c-todo-item.c-completed .todo-title {\n  color: #15803d;\n}\n.c-todo-item.c-completed .todo-description {\n  color: #16a34a;\n}\n/*# sourceMappingURL=todo-list-item.css.map */\n"] }]
  }], () => [], { todo: [{ type: Input, args: [{ isSignal: true, alias: "todo", required: true }] }], searchTerm: [{ type: Input, args: [{ isSignal: true, alias: "searchTerm", required: false }] }], loaderState: [{ type: Output, args: ["loaderState"] }], resetTodo: [{ type: Output, args: ["resetTodo"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TodoListItem, { className: "TodoListItem", filePath: "src/app/features/todo/components/todo-list-item/todo-list-item.ts", lineNumber: 23 });
})();

// src/app/features/todo/components/todo-list/todo-list.ts
var _forTrack0 = ($index, $item) => $item.id;
function TodoList_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "fa-icon", 15);
    \u0275\u0275elementStart(2, "p", 16);
    \u0275\u0275text(3, "No todos yet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.faClipboardList);
  }
}
function TodoList_Conditional_20_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-todo-list-item", 20);
    \u0275\u0275listener("loaderState", function TodoList_Conditional_20_Conditional_4_For_2_Template_app_todo_list_item_loaderState_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onTodoLoaderStateChange($event));
    })("resetTodo", function TodoList_Conditional_20_Conditional_4_For_2_Template_app_todo_list_item_resetTodo_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.resetTodo());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const todo_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("todo", todo_r3)("searchTerm", ctx_r0.keyword);
  }
}
function TodoList_Conditional_20_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "app-loading-button", 21)(2, "button", 22);
    \u0275\u0275listener("click", function TodoList_Conditional_20_Conditional_4_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.loadMore());
    });
    \u0275\u0275text(3, " Show More ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r0.isLoadingMore());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLoadingMore());
  }
}
function TodoList_Conditional_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, TodoList_Conditional_20_Conditional_4_For_2_Template, 1, 2, "app-todo-list-item", 18, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, TodoList_Conditional_20_Conditional_4_Conditional_3_Template, 4, 2, "div", 19);
  }
  if (rf & 2) {
    const todoItems_r5 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(todoItems_r5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasMore() ? 3 : -1);
  }
}
function TodoList_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275conditionalCreate(3, TodoList_Conditional_20_Conditional_3_Template, 4, 1, "div", 14)(4, TodoList_Conditional_20_Conditional_4_Template, 4, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hidden", !ctx_r0.isLoadingList());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx_r0.isLoadingList());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.length === 0 ? 3 : 4);
  }
}
function TodoList_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementEnd();
  }
}
var TodoList = class _TodoList {
  todoApi = inject(TodoApi);
  auth = inject(Auth);
  platformService = inject(Platform);
  destroyRef = inject(DestroyRef);
  search$ = new Subject();
  createRequested = output();
  faClipboardList = faClipboardList;
  todos = signal(void 0, ...ngDevMode ? [{ debugName: "todos" }] : []);
  authState = this.auth.authState;
  currentPage = 0;
  pageSize = 6;
  hasMore = signal(true, ...ngDevMode ? [{ debugName: "hasMore" }] : []);
  isLoadingMore = signal(false, ...ngDevMode ? [{ debugName: "isLoadingMore" }] : []);
  isLoadingList = signal(false, ...ngDevMode ? [{ debugName: "isLoadingList" }] : []);
  keyword = "";
  completedFilter = void 0;
  sortField = "updatedAt";
  sortDirection = "desc";
  lastSearchedKeyword = "";
  constructor() {
    effect(() => {
      if (!this.platformService.isBrowser()) {
        return;
      }
      const state = this.authState();
      if (state.status === "authenticated" && state.user?.id) {
        this.isLoadingList.set(true);
        this.getTodoList();
      }
    });
    this.search$.pipe(debounceTime(500), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((keyword) => {
      this.lastSearchedKeyword = keyword;
      this.currentPage = 0;
      this.todos.set([]);
      this.getTodoList();
    });
  }
  getTodoList() {
    const keyword = this.keyword?.trim();
    this.todoApi.getAll(__spreadProps(__spreadValues({
      page: this.currentPage,
      size: this.pageSize,
      sort: `${this.sortField},${this.sortDirection}`
    }, keyword && { keyword: this.keyword }), {
      completed: this.completedFilter
    })).subscribe({
      next: (response) => {
        console.log("todoList", response);
        const currentTodos = this.todos() || [];
        this.todos.set([...currentTodos, ...response.content]);
        this.hasMore.set(!response.last);
        this.isLoadingList.set(false);
        this.isLoadingMore.set(false);
      },
      error: (err) => {
        console.error("Error fetching todos", err);
        this.todos.set([]);
        this.isLoadingList.set(false);
        this.isLoadingMore.set(false);
      }
    });
  }
  onSearch(keyword) {
    this.keyword = keyword;
    const trimmedKeyword = this.keyword?.trim();
    this.isLoadingList.set(true);
    if (trimmedKeyword === this.lastSearchedKeyword) {
      this.isLoadingList.set(false);
      return;
    }
    this.search$.next(trimmedKeyword);
  }
  changeStatus(completed) {
    this.completedFilter = completed;
    this.isLoadingList.set(true);
    this.currentPage = 0;
    this.todos.set([]);
    this.getTodoList();
  }
  onSortChange() {
    this.isLoadingList.set(true);
    this.currentPage = 0;
    this.todos.set([]);
    this.getTodoList();
  }
  loadMore() {
    this.isLoadingMore.set(true);
    this.currentPage++;
    this.getTodoList();
  }
  toggleSort(field) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === "desc" ? "asc" : "desc";
    } else {
      this.sortField = field;
      this.sortDirection = "desc";
    }
    this.onSortChange();
  }
  openTodoForm() {
    this.createRequested.emit();
  }
  onTodoLoaderStateChange(isLoading) {
    this.isLoadingList.set(isLoading);
  }
  resetTodoListState() {
    this.keyword = "";
    this.completedFilter = void 0;
    this.sortField = "updatedAt";
    this.sortDirection = "desc";
    this.currentPage = 0;
    this.todos.set([]);
  }
  resetTodo() {
    this.isLoadingList.set(true);
    this.resetTodoListState();
    this.getTodoList();
  }
  static \u0275fac = function TodoList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TodoList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TodoList, selectors: [["app-todo-list"]], outputs: { createRequested: "createRequested" }, decls: 22, vars: 10, consts: [[1, "mb-6", "space-y-4"], [1, "flex", "flex-wrap", "gap-4"], [1, "flex-1", "min-w-50"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["type", "text", "appSanitizeInput", "", "placeholder", "Search todos...", 1, "u-form-field", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-wrap", "gap-4", "justify-between", "items-end"], [1, "min-w-40", "sm:max-w-100", "grow-9999"], ["placeholder", "Select a status", 1, "u-form-field", 3, "valueChange", "ngModel"], [3, "value"], [1, "flex", "gap-3", "grow", "sm:grow-0", "justify-between"], ["label", "Created", "field", "createdAt", 3, "toggle", "activeField", "direction"], ["label", "Updated", "field", "updatedAt", 3, "toggle", "activeField", "direction"], [1, "flex", "justify-center", "items-center", "py-16"], [1, "u-spinner"], [1, "text-center", "text-gray-500", "py-16"], [1, "text-6xl", "mx-auto", "mb-4", "text-gray-300", 3, "icon"], [1, "text-xl", "font-medium", "my-2"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [3, "todo", "searchTerm"], [1, "text-center", "mt-6"], [3, "loaderState", "resetTodo", "todo", "searchTerm"], ["spinnerClass", "stroke-gray-700", 3, "loading"], [1, "px-6", "py-2", "bg-gray-200", "text-gray-700", "rounded-lg", "hover:bg-gray-300", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"]], template: function TodoList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      \u0275\u0275text(4, "Search Todo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "input", 4);
      \u0275\u0275listener("ngModelChange", function TodoList_Template_input_ngModelChange_5_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "label", 3);
      \u0275\u0275text(9, "Filter by Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-select", 7);
      \u0275\u0275listener("valueChange", function TodoList_Template_mat_select_valueChange_10_listener($event) {
        return ctx.changeStatus($event);
      });
      \u0275\u0275elementStart(11, "mat-option", 8);
      \u0275\u0275text(12, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-option", 8);
      \u0275\u0275text(14, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-option", 8);
      \u0275\u0275text(16, "Incomplete");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 9)(18, "app-sort-button", 10);
      \u0275\u0275listener("toggle", function TodoList_Template_app_sort_button_toggle_18_listener($event) {
        return ctx.toggleSort($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-sort-button", 11);
      \u0275\u0275listener("toggle", function TodoList_Template_app_sort_button_toggle_19_listener($event) {
        return ctx.toggleSort($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(20, TodoList_Conditional_20_Template, 5, 5)(21, TodoList_Conditional_21_Template, 2, 0, "div", 12);
    }
    if (rf & 2) {
      let tmp_9_0;
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.keyword);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.completedFilter);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", false);
      \u0275\u0275advance(3);
      \u0275\u0275property("activeField", ctx.sortField)("direction", ctx.sortDirection);
      \u0275\u0275advance();
      \u0275\u0275property("activeField", ctx.sortField)("direction", ctx.sortDirection);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_9_0 = ctx.todos()) ? 20 : ctx.isLoadingList() ? 21 : -1, tmp_9_0);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatFormFieldModule,
    FontAwesomeModule,
    FaIconComponent,
    TodoListItem,
    LoadingButton,
    SortButton,
    SanitizeInput
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TodoList, [{
    type: Component,
    args: [{ selector: "app-todo-list", imports: [
      CommonModule,
      FormsModule,
      MatSelectModule,
      MatFormFieldModule,
      FontAwesomeModule,
      TodoListItem,
      LoadingButton,
      SortButton,
      SanitizeInput
    ], template: '<div class="mb-6 space-y-4">\n  <div class="flex flex-wrap gap-4">\n    <div class="flex-1 min-w-50">\n      <label class="block text-sm font-medium text-gray-700 mb-1">Search Todo</label>\n      <input type="text" appSanitizeInput [ngModel]="keyword" (ngModelChange)="onSearch($event)"\n        placeholder="Search todos..." class="u-form-field" />\n    </div>\n  </div>\n\n  <div class="flex flex-wrap gap-4 justify-between items-end">\n    <div class="min-w-40 sm:max-w-100 grow-9999">\n      <label class="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>\n      <mat-select [ngModel]="completedFilter" (valueChange)="changeStatus($event)" placeholder="Select a status"\n        class="u-form-field">\n        <mat-option [value]="undefined">All</mat-option>\n        <mat-option [value]="true">Completed</mat-option>\n        <mat-option [value]="false">Incomplete</mat-option>\n      </mat-select>\n    </div>\n\n    <div class="flex gap-3 grow sm:grow-0 justify-between">\n      <app-sort-button label="Created" field="createdAt" [activeField]="sortField" [direction]="sortDirection"\n        (toggle)="toggleSort($event)">\n      </app-sort-button>\n\n      <app-sort-button label="Updated" field="updatedAt" [activeField]="sortField" [direction]="sortDirection"\n        (toggle)="toggleSort($event)">\n      </app-sort-button>\n    </div>\n  </div>\n</div>\n\n@if (todos(); as todoItems) {\n<div class="flex justify-center items-center py-16" [class.hidden]="!isLoadingList()">\n  <div class="u-spinner"></div>\n</div>\n\n<div [class.hidden]="isLoadingList()">\n  @if (todoItems.length === 0) {\n  <div class="text-center text-gray-500 py-16">\n    <fa-icon [icon]="faClipboardList" class="text-6xl mx-auto mb-4 text-gray-300"></fa-icon>\n    <p class="text-xl font-medium my-2">No todos yet</p>\n  </div>\n  } @else {\n  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n    @for (todo of todoItems; track todo.id) {\n    <app-todo-list-item [todo]="todo" [searchTerm]="keyword" (loaderState)="onTodoLoaderStateChange($event)"\n      (resetTodo)="resetTodo()">\n    </app-todo-list-item>\n    }\n  </div>\n  @if (hasMore()) {\n  <div class="text-center mt-6">\n    <app-loading-button [loading]="isLoadingMore()" spinnerClass="stroke-gray-700">\n      <button (click)="loadMore()" [disabled]="isLoadingMore()"\n        class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50">\n        Show More\n      </button>\n    </app-loading-button>\n  </div>\n  }\n  }\n</div>\n} @else if (isLoadingList()) {\n<div class="flex justify-center items-center py-16">\n  <div class="u-spinner"></div>\n</div>\n}' }]
  }], () => [], { createRequested: [{ type: Output, args: ["createRequested"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TodoList, { className: "TodoList", filePath: "src/app/features/todo/components/todo-list/todo-list.ts", lineNumber: 35 });
})();

// src/app/features/todo/todo.ts
var Todo = class _Todo {
  dialog = inject(MatDialog);
  todoList = viewChild(TodoList, ...ngDevMode ? [{ debugName: "todoList" }] : []);
  faPlus = faPlus;
  faClipboardList = faClipboardList;
  openTodoForm() {
    const dialogRef = this.dialog.open(TodoFormDialog, {
      width: "50rem",
      maxHeight: "90%"
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.created) {
        this.todoList()?.resetTodo();
      }
    });
  }
  static \u0275fac = function Todo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Todo)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Todo, selectors: [["app-todo"]], viewQuery: function Todo_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.todoList, TodoList, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 13, vars: 1, consts: [[1, "u-responsive-padding-xy", "c-todo-section"], [1, "u-container-form", "u-container-2", "mx-auto"], [1, "text-center", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-3"], [1, "text-lg", "text-gray-600"], [1, "flex", "justify-center"], ["appTelemetryClick", "todo_open_create_form", 1, "u-gradient-btn", 3, "click"], [1, "mr-3", 3, "icon"], [1, "mt-10"], [3, "createRequested"]], template: function Todo_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, " Todo List ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, " Organize and track your tasks efficiently ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function Todo_Template_button_click_8_listener() {
        return ctx.openTodoForm();
      });
      \u0275\u0275element(9, "fa-icon", 7);
      \u0275\u0275text(10, " Create New Todo ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "app-todo-list", 9);
      \u0275\u0275listener("createRequested", function Todo_Template_app_todo_list_createRequested_12_listener() {
        return ctx.openTodoForm();
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("icon", ctx.faPlus);
    }
  }, dependencies: [
    MatDialogModule,
    MatButtonModule,
    FontAwesomeModule,
    FaIconComponent,
    TodoList,
    TelemetryClick
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Todo, [{
    type: Component,
    args: [{ selector: "app-todo", imports: [
      MatDialogModule,
      MatButtonModule,
      FontAwesomeModule,
      TodoList,
      TelemetryClick
    ], template: '<section class="u-responsive-padding-xy c-todo-section">\n  <div class="u-container-form u-container-2 mx-auto">\n\n    <!-- Header Section -->\n    <div class="text-center mb-6">\n      <h1 class="text-2xl font-bold text-gray-900 mb-3">\n        Todo List\n      </h1>\n      <p class="text-lg text-gray-600">\n        Organize and track your tasks efficiently\n      </p>\n    </div>\n\n    <!-- Create Todo Button -->\n    <div class="flex justify-center">\n      <button (click)="openTodoForm()" class="u-gradient-btn" appTelemetryClick="todo_open_create_form">\n        <fa-icon [icon]="faPlus" class="mr-3"></fa-icon>\n        Create New Todo\n      </button>\n    </div>\n\n    <!-- Todo Content Area -->\n    <div class="mt-10">\n      <app-todo-list (createRequested)="openTodoForm()"></app-todo-list>\n    </div>\n\n  </div>\n</section>\n' }]
  }], null, { todoList: [{ type: ViewChild, args: [forwardRef(() => TodoList), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Todo, { className: "Todo", filePath: "src/app/features/todo/todo.ts", lineNumber: 22 });
})();
export {
  Todo
};
//# sourceMappingURL=chunk-ZHEL46Y4.mjs.map
