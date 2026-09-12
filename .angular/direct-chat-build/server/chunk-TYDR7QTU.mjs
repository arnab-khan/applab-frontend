import './polyfills.server.mjs';
import {
  environment,
  toHttpParams
} from "./chunk-53NQCPJ5.mjs";
import {
  HttpClient
} from "./chunk-TNROARYC.mjs";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-XAQLVFTN.mjs";

// src/app/features/profile/services/profile-api.service.ts
var ProfileApiService = class _ProfileApiService {
  httpClient = inject(HttpClient);
  baseApiUrl = `${environment.rootApiUrl}/user`;
  getPublicUserByUsername(params) {
    return this.httpClient.get(`${this.baseApiUrl}/public/by-username`, {
      params: toHttpParams(params)
    });
  }
  getPublicProfileImagesByUserIds(params) {
    return this.httpClient.get(`${this.baseApiUrl}/public/profile-image/by-user-ids`, {
      params: toHttpParams({
        userIds: params.userIds,
        fullImage: params.fullImage ?? false
      })
    });
  }
  getPublicProfileImageUrl(userId) {
    if (!userId)
      return void 0;
    return `${this.baseApiUrl}/public/profile-image/raw/${userId}`;
  }
  getPublicImageUrl(profileImageUrl) {
    if (!profileImageUrl)
      return void 0;
    return `${environment.rootApiUrl}${profileImageUrl}`;
  }
  static \u0275fac = function ProfileApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileApiService, factory: _ProfileApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ProfileApiService
};
//# sourceMappingURL=chunk-TYDR7QTU.mjs.map
