import {
  environment,
  toHttpParams
} from "./chunk-BMRGKSCE.js";
import {
  HttpClient,
  HttpEventType,
  Location,
  Router
} from "./chunk-SYFHBLZR.js";
import {
  DOCUMENT,
  Injectable,
  Pipe,
  distinctUntilChanged,
  filter,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefinePipe
} from "./chunk-7MOHRCPT.js";

// src/app/features/ai/services/ai-api.ts
var AiApi = class _AiApi {
  httpClient = inject(HttpClient);
  baseApiUrl = `${environment.rootApiUrl}/ai`;
  chat(body) {
    return this.httpClient.post(`${this.baseApiUrl}/chat`, body, {
      responseType: "text",
      observe: "events",
      reportProgress: true,
      headers: { Accept: "text/event-stream" }
    }).pipe(map((event) => {
      if (event.type === HttpEventType.DownloadProgress)
        return event.partialText;
      if (event.type === HttpEventType.Response)
        return event.body ?? "";
      return void 0;
    }), filter((text) => text !== void 0), map((text) => parseAiStream(text)), distinctUntilChanged((previous, current) => previous.message === current.message && previous.history === current.history));
  }
  getSessions(params) {
    return this.httpClient.get(`${this.baseApiUrl}/sessions`, {
      params: toHttpParams(params)
    });
  }
  getAll(params) {
    return this.httpClient.get(`${this.baseApiUrl}/all`, {
      params: toHttpParams(params)
    });
  }
  static \u0275fac = function AiApi_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiApi)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiApi, factory: _AiApi.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiApi, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var AiStreamError = class extends Error {
};
function parseAiStream(text) {
  const response = { message: "" };
  text.split(/\r\n\r\n|\n\n|\r\r/).slice(0, -1).forEach((event) => {
    const lines = event.split(/\r\n|\r|\n/);
    const type = lines.filter((line) => line.startsWith("event:")).at(-1)?.slice(6).trim() || "message";
    const data = lines.filter((line) => line === "data" || line.startsWith("data:")).map((line) => line === "data" ? "" : line.slice(5)).join("\n");
    if (type === "error")
      throw new AiStreamError(data || "The reply could not be completed. Please try again.");
    if (type === "message")
      response.message += data;
    if (type === "history")
      response.history = data;
  });
  return response;
}

// src/app/features/ai/pipes/ai-message.ts
var AiMessagePipe = class _AiMessagePipe {
  router = inject(Router);
  document = inject(DOCUMENT);
  location = inject(Location);
  transform(message) {
    const parts = [];
    const sections = message.replace(/^(\s*)\*[\t ]+/gm, "$1\u2022 ").split(/\*\*([^*]+)\*\*/g);
    sections.forEach((section, index) => {
      const bold = index % 2 === 1;
      let offset = 0;
      const routes = /router__(?:<(\/[^\s<>]*)>|(\/[^\s<>*`"']*))/g;
      for (const match of section.matchAll(routes)) {
        const start = match.index;
        if (start > offset)
          parts.push({ text: section.slice(offset, start), bold });
        const rawRoute = match[1] ?? match[2];
        const route = match[1] ? rawRoute : rawRoute.replace(/[.,!;:)]+$/, "");
        if (route.startsWith("//") || route.includes("\\")) {
          parts.push({ text: match[0], bold });
        } else {
          try {
            const routeTree = this.router.parseUrl(route);
            const url = this.location.prepareExternalUrl(this.router.serializeUrl(routeTree));
            parts.push({ text: new URL(url, this.document.baseURI).href, bold, route: routeTree });
            if (!match[1] && route.length < rawRoute.length) {
              parts.push({ text: rawRoute.slice(route.length), bold });
            }
          } catch {
            parts.push({ text: match[0], bold });
          }
        }
        offset = start + match[0].length;
      }
      if (offset < section.length)
        parts.push({ text: section.slice(offset), bold });
    });
    return parts;
  }
  static \u0275fac = function AiMessagePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiMessagePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "aiMessage", type: _AiMessagePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiMessagePipe, [{
    type: Pipe,
    args: [{ name: "aiMessage" }]
  }], null, null);
})();

export {
  AiApi,
  AiStreamError,
  AiMessagePipe
};
//# sourceMappingURL=chunk-W3YD7SYU.js.map
