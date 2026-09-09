import './polyfills.server.mjs';
import {
  Auth,
  Guest
} from "./chunk-LCBZHX6Y.mjs";
import {
  Platform2 as Platform,
  environment
} from "./chunk-53NQCPJ5.mjs";
import {
  Router
} from "./chunk-5QYUMBOA.mjs";
import {
  HttpClient
} from "./chunk-TNROARYC.mjs";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-XAQLVFTN.mjs";

// src/app/core/services/telemetry.ts
var Telemetry = class _Telemetry {
  httpClient = inject(HttpClient);
  router = inject(Router);
  auth = inject(Auth);
  guest = inject(Guest);
  platformService = inject(Platform);
  payloads = [];
  baseApiUrl = `${environment.rootApiUrl}/telemetry`;
  addApiUrl = `${this.baseApiUrl}/add`;
  sessionStorageKey = "telemetryLocalSessionId";
  isSaving = false;
  constructor() {
    if (!this.platformService.isBrowser()) {
      return;
    }
    setInterval(() => this.savePayloads(), 6e4);
    window.addEventListener("pagehide", () => this.savePayloadsBeforeUnload());
    window.addEventListener("beforeunload", () => this.savePayloadsBeforeUnload());
  }
  collectActivity({ name, type, activity }) {
    if (!this.platformService.isBrowser()) {
      return;
    }
    const userId = this.auth.authState().user?.id;
    const guestSessionId = this.guest.guestState().guestSessionId;
    const identityType = userId ? "USER" : guestSessionId ? "GUEST" : "ANONYMOUS";
    const identityId = userId || guestSessionId;
    const payload = {
      name,
      type,
      activity,
      localSessionId: this.getLocalSessionId(),
      identityType,
      identityId,
      route: this.router.url.split("?")[0],
      browser: this.getBrowserName(),
      platform: this.getPlatform()
    };
    this.payloads.push(payload);
    console.log("Telemetry payloads", this.payloads);
  }
  // Flush queued telemetry during normal app usage.
  savePayloads() {
    if (this.isSaving || !this.payloads.length) {
      return;
    }
    const payloads = [...this.payloads];
    this.payloads = [];
    this.isSaving = true;
    this.httpClient.post(this.addApiUrl, payloads).subscribe({
      next: () => {
        this.isSaving = false;
      },
      error: (error) => {
        console.error("Failed to save telemetry", error);
        this.payloads = [...payloads, ...this.payloads];
        this.isSaving = false;
      }
    });
  }
  // Use sendBeacon so telemetry can still be sent while the page is closing.
  savePayloadsBeforeUnload() {
    if (!this.payloads.length) {
      return;
    }
    const payloads = [...this.payloads];
    const body = new Blob([JSON.stringify(payloads)], {
      type: "application/json"
    });
    const queued = navigator.sendBeacon(this.addApiUrl, body);
    if (queued) {
      this.payloads = [];
    }
  }
  getLocalSessionId() {
    const localSessionId = sessionStorage.getItem(this.sessionStorageKey);
    if (localSessionId) {
      return localSessionId;
    }
    const newLocalSessionId = crypto.randomUUID();
    sessionStorage.setItem(this.sessionStorageKey, newLocalSessionId);
    return newLocalSessionId;
  }
  getBrowserName() {
    const brands = navigator.userAgentData?.brands;
    const browserBrand = brands?.find(({ brand }) => brand !== "Chromium" && brand !== "Not A(Brand");
    if (browserBrand?.brand) {
      return browserBrand.brand;
    }
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Edg/"))
      return "Edge";
    if (userAgent.includes("OPR/") || userAgent.includes("Opera"))
      return "Opera";
    if (userAgent.includes("Firefox/"))
      return "Firefox";
    if (userAgent.includes("Chrome/"))
      return "Chrome";
    if (userAgent.includes("Safari/"))
      return "Safari";
    return "Unknown";
  }
  getPlatform() {
    const nav = navigator;
    return nav.userAgentData?.platform || navigator.platform || "Unknown";
  }
  static \u0275fac = function Telemetry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Telemetry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Telemetry, factory: _Telemetry.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Telemetry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  Telemetry
};
//# sourceMappingURL=chunk-Y6ZKB7SS.mjs.map
