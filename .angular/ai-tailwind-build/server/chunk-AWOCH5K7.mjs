import './polyfills.server.mjs';
import {
  Telemetry
} from "./chunk-IJ63L4YV.mjs";
import {
  Directive,
  HostListener,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-4ARKR3K5.mjs";

// src/app/shared/directives/telemetry-click.ts
var TelemetryClick = class _TelemetryClick {
  appTelemetryClick = input.required(...ngDevMode ? [{ debugName: "appTelemetryClick" }] : []);
  telemetryData = input({}, ...ngDevMode ? [{ debugName: "telemetryData" }] : []);
  telemetry = inject(Telemetry);
  onClick() {
    this.telemetry.collectActivity({
      name: this.appTelemetryClick(),
      type: "CLICK",
      activity: this.telemetryData()
    });
  }
  static \u0275fac = function TelemetryClick_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TelemetryClick)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _TelemetryClick, selectors: [["", "appTelemetryClick", ""]], hostBindings: function TelemetryClick_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function TelemetryClick_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  }, inputs: { appTelemetryClick: [1, "appTelemetryClick"], telemetryData: [1, "telemetryData"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TelemetryClick, [{
    type: Directive,
    args: [{
      selector: "[appTelemetryClick]"
    }]
  }], null, { appTelemetryClick: [{ type: Input, args: [{ isSignal: true, alias: "appTelemetryClick", required: true }] }], telemetryData: [{ type: Input, args: [{ isSignal: true, alias: "telemetryData", required: false }] }], onClick: [{
    type: HostListener,
    args: ["click"]
  }] });
})();

export {
  TelemetryClick
};
//# sourceMappingURL=chunk-AWOCH5K7.mjs.map
