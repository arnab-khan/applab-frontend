import './polyfills.server.mjs';
import {
  Url
} from "./chunk-HHJFSTVN.mjs";
import {
  Meta,
  Title
} from "./chunk-TNROARYC.mjs";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-XAQLVFTN.mjs";

// src/app/shared/services/seo.ts
var Seo = class _Seo {
  url = inject(Url);
  title = inject(Title);
  meta = inject(Meta);
  update({ title, content, image, imageType, imageWidth, imageHeight, url, siteName, type }) {
    const absoluteImage = image ? this.url.toAbsoluteUrl(image) : void 0;
    const absoluteUrl = this.url.toAbsoluteUrl(url || this.url.getCurrentUrl());
    this.title.setTitle(title);
    this.meta.updateTag({ name: "description", content });
    this.meta.updateTag({ property: "og:title", content: title });
    this.meta.updateTag({ property: "og:description", content });
    this.meta.updateTag({ property: "og:type", content: type || "website" });
    if (siteName) {
      this.meta.updateTag({ property: "og:site_name", content: siteName });
    }
    if (absoluteImage) {
      this.meta.updateTag({ property: "og:image", content: absoluteImage });
      if (imageType) {
        this.meta.updateTag({ property: "og:image:type", content: imageType });
      }
      if (imageWidth) {
        this.meta.updateTag({ property: "og:image:width", content: String(imageWidth) });
      }
      if (imageHeight) {
        this.meta.updateTag({ property: "og:image:height", content: String(imageHeight) });
      }
    }
    this.meta.updateTag({ property: "og:url", content: absoluteUrl });
    this.meta.updateTag({ name: "twitter:card", content: image ? "summary_large_image" : "summary" });
    this.meta.updateTag({ name: "twitter:title", content: title });
    this.meta.updateTag({ name: "twitter:description", content });
    if (absoluteImage) {
      this.meta.updateTag({ name: "twitter:image", content: absoluteImage });
    }
    this.meta.updateTag({ name: "twitter:url", content: absoluteUrl });
  }
  static \u0275fac = function Seo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Seo)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Seo, factory: _Seo.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Seo, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  Seo
};
//# sourceMappingURL=chunk-GEFQQXDF.mjs.map
