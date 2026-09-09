import {
  DialogHeader,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef
} from "./chunk-ALZZ5FDG.js";
import {
  LoadingButton
} from "./chunk-UMKDZD2E.js";
import {
  MatButtonModule
} from "./chunk-SDFCVRZT.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CSUKEAYK.js";

// src/app/shared/components/dialogs/common-dialog/common-dialog.ts
function CommonDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message());
  }
}
function CommonDialog_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function CommonDialog_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCancel());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.isConfirming());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cancelText());
  }
}
function CommonDialog_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-loading-button", 4)(1, "button", 6);
    \u0275\u0275listener("click", function CommonDialog_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onConfirm());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("loading", ctx_r0.isConfirming());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.confirmButtonClass());
    \u0275\u0275property("disabled", ctx_r0.isConfirming());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.confirmText(), " ");
  }
}
var CommonDialog = class _CommonDialog {
  dialogRef = inject(MatDialogRef, { optional: true });
  incomingData = inject(MAT_DIALOG_DATA, { optional: true });
  dialogData = signal({
    type: this.incomingData?.type ?? "confirm",
    message: this.incomingData?.message,
    confirmText: this.incomingData?.confirmText,
    cancelText: this.incomingData?.cancelText
  }, ...ngDevMode ? [{ debugName: "dialogData" }] : []);
  type = computed(() => this.dialogData().type, ...ngDevMode ? [{ debugName: "type" }] : []);
  message = computed(() => this.dialogData().message, ...ngDevMode ? [{ debugName: "message" }] : []);
  confirmText = computed(() => this.dialogData().confirmText, ...ngDevMode ? [{ debugName: "confirmText" }] : []);
  cancelText = computed(() => this.dialogData().cancelText, ...ngDevMode ? [{ debugName: "cancelText" }] : []);
  isConfirming = signal(false, ...ngDevMode ? [{ debugName: "isConfirming" }] : []);
  confirmButtonClass = computed(() => {
    switch (this.type()) {
      case "warning":
        return "bg-red-100! hover:bg-red-200! text-red-700! focus-visible:ring-red-300!";
      case "error":
        return "bg-rose-100! hover:bg-rose-200! text-rose-700! focus-visible:ring-rose-300!";
      case "success":
        return "bg-emerald-100! hover:bg-emerald-200! text-emerald-700! focus-visible:ring-emerald-300!";
      case "confirm":
      default:
        return "bg-blue-100! hover:bg-blue-200! text-blue-700! focus-visible:ring-blue-300!";
    }
  }, ...ngDevMode ? [{ debugName: "confirmButtonClass" }] : []);
  onConfirm() {
    this.isConfirming.set(true);
    if (this.incomingData?.onConfirm && this.dialogRef) {
      this.incomingData.onConfirm(this.dialogRef, this);
      return;
    }
    this.dialogRef?.close({ confirmed: true });
  }
  onCancel() {
    if (this.isConfirming()) {
      return;
    }
    this.dialogRef?.close({ confirmed: false });
  }
  static \u0275fac = function CommonDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommonDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommonDialog, selectors: [["app-common-dialog"]], decls: 8, vars: 3, consts: [[1, "p-4", "pt-2"], [1, "m-0", "text-gray-700"], [1, "flex", "justify-end", "gap-2", "w-full", "pt-3"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "bg-gray-100", "hover:bg-gray-200", "text-gray-700", "font-semibold", "transition-colors", "grow", "sm:grow-0", 3, "disabled"], [1, "grow", "sm:grow-0", 3, "loading"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "bg-gray-100", "hover:bg-gray-200", "text-gray-700", "font-semibold", "transition-colors", "grow", "sm:grow-0", 3, "click", "disabled"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "font-semibold", "transition-colors", "focus-visible:outline-none", "focus-visible:ring-2", "focus-visible:ring-offset-2", "w-full", 3, "click", "disabled"]], template: function CommonDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-dialog-header");
      \u0275\u0275elementStart(2, "mat-dialog-content");
      \u0275\u0275conditionalCreate(3, CommonDialog_Conditional_3_Template, 2, 1, "p", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "mat-dialog-actions")(5, "div", 2);
      \u0275\u0275conditionalCreate(6, CommonDialog_Conditional_6_Template, 2, 2, "button", 3);
      \u0275\u0275conditionalCreate(7, CommonDialog_Conditional_7_Template, 3, 5, "app-loading-button", 4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.message() ? 3 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.cancelText() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.confirmText() ? 7 : -1);
    }
  }, dependencies: [MatDialogModule, MatDialogActions, MatDialogContent, MatButtonModule, DialogHeader, LoadingButton], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonDialog, [{
    type: Component,
    args: [{ selector: "app-common-dialog", imports: [MatDialogModule, MatButtonModule, DialogHeader, LoadingButton], template: '<div class="p-4 pt-2">\n  <app-dialog-header></app-dialog-header>\n\n  <mat-dialog-content>\n    @if (message()) {\n    <p class="m-0 text-gray-700">{{ message() }}</p>\n    }\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <div class="flex justify-end gap-2 w-full pt-3">\n      @if (cancelText()) {\n      <button type="button"\n        class="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-colors grow sm:grow-0"\n        (click)="onCancel()" [disabled]="isConfirming()">{{ cancelText() }}</button>\n      }\n      @if (confirmText()) {\n      <app-loading-button [loading]="isConfirming()" class="grow sm:grow-0">\n        <button type="button"\n          class="px-4 py-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full"\n          [class]="confirmButtonClass()" (click)="onConfirm()" [disabled]="isConfirming()">\n          {{ confirmText() }}\n        </button>\n      </app-loading-button>\n      }\n    </div>\n  </mat-dialog-actions>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommonDialog, { className: "CommonDialog", filePath: "src/app/shared/components/dialogs/common-dialog/common-dialog.ts", lineNumber: 30 });
})();

export {
  CommonDialog
};
//# sourceMappingURL=chunk-36X7E7MJ.js.map
