import './polyfills.server.mjs';
import {
  ActivatedRoute,
  Router
} from "./chunk-5QYUMBOA.mjs";
import {
  DOCUMENT,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-XAQLVFTN.mjs";

// src/app/shared/services/url.ts
var Url = class _Url {
  document = inject(DOCUMENT);
  route = inject(ActivatedRoute);
  router = inject(Router);
  getBaseUrl() {
    const baseUrl = this.document?.location?.origin || this.document?.baseURI || "";
    return baseUrl;
  }
  toAbsoluteUrl(value) {
    try {
      return new URL(value, this.getBaseUrl()).toString();
    } catch {
      return value;
    }
  }
  getCurrentUrl() {
    const location = this.document?.location;
    if (!location) {
      return "";
    }
    return `${location.origin}${location.pathname}`;
  }
  getFullCurrentUrl() {
    return this.document?.location?.href || "";
  }
  addQueryParams(url, queryParams) {
    if (!url) {
      return "";
    }
    const nextUrl = new URL(this.toAbsoluteUrl(url));
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value) {
        nextUrl.searchParams.set(key, String(value));
      }
    });
    return nextUrl.toString();
  }
  updateQueryParams(queryParams) {
    return this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  static \u0275fac = function Url_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Url)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Url, factory: _Url.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Url, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  Url
};
//# sourceMappingURL=chunk-HHJFSTVN.mjs.map
