import {
  InfiniteScroll,
  userProfileLink
} from "./chunk-ZZC3JEQU.js";
import {
  HighlightText,
  SortButton
} from "./chunk-2DYJRQPJ.js";
import {
  Seo
} from "./chunk-FKONFLBB.js";
import {
  Url
} from "./chunk-YGCY7AWU.js";
import {
  ProfileApiService
} from "./chunk-F2LNDDGC.js";
import {
  takeUntilDestroyed
} from "./chunk-DFRRT2OL.js";
import {
  CapitalizeWordsPipe
} from "./chunk-FQUAC3NH.js";
import {
  Thumbnail
} from "./chunk-6NRHWHNW.js";
import {
  SanitizeInput,
  sanitizeText
} from "./chunk-Y6BEIZXJ.js";
import "./chunk-65M5LICJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CCYGSJSA.js";
import {
  Platform2 as Platform,
  environment,
  toHttpParams
} from "./chunk-5QQ5IMAE.js";
import {
  RouterLink
} from "./chunk-BQE5RZFF.js";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  LowerCasePipe
} from "./chunk-CYBPL3OT.js";
import {
  Component,
  DestroyRef,
  Injectable,
  Input,
  Subject,
  debounceTime,
  distinctUntilChanged,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CSUKEAYK.js";
import {
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/features/users/services/users-api.ts
var UsersApi = class _UsersApi {
  httpClient = inject(HttpClient);
  baseApiUrl = `${environment.rootApiUrl}/user`;
  getAll(params) {
    return this.httpClient.get(`${this.baseApiUrl}/public/all`, {
      params: toHttpParams(params)
    });
  }
  static \u0275fac = function UsersApi_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersApi)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersApi, factory: _UsersApi.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersApi, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/users/components/user-item/user-item.ts
function UserItem_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const joinedAt_r1 = \u0275\u0275readContextLet(11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Joined on ", \u0275\u0275pipeBind2(2, 1, joinedAt_r1, "mediumDate"), " ");
  }
}
var UserItem = class _UserItem {
  profileApiService = inject(ProfileApiService);
  userProfileLink = userProfileLink;
  user = input.required(...ngDevMode ? [{ debugName: "user" }] : []);
  searchTerm = input("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  getCompressedProfileImageUrl() {
    return this.profileApiService.getPublicImageUrl(this.user().compressedProfileImageUrl);
  }
  getProfileImageUrl() {
    return this.profileApiService.getPublicImageUrl(this.user().profileImageUrl);
  }
  static \u0275fac = function UserItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserItem, selectors: [["app-user-item"]], inputs: { user: [1, "user"], searchTerm: [1, "searchTerm"] }, decls: 16, vars: 15, consts: [[1, "sm:flex", "items-center", "justify-between", "gap-4", "rounded-xl", "border", "border-gray-200", "bg-white", "p-4", "shadow-sm"], [1, "flex", "gap-3"], ["size", "3rem", "radius", "50%", 1, "shrink-0", 3, "imageUrl", "viewerImageUrl", "name", "alt"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-baseline", "gap-x-2", "gap-y-1"], [1, "truncate", "text-base", "font-semibold", "text-gray-900", 3, "appHighlightText"], [1, "truncate", "text-sm", "text-gray-500", 3, "appHighlightText"], [1, "mt-1", "text-sm", "text-gray-500"], [1, "shrink-0", "mt-3", "sm:mt-0"], [1, "u-btn-outline-cyan", "w-full", "text-center", "block", 3, "routerLink"]], template: function UserItem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "article", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-thumbnail", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h3", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "capitalizeWords");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "lowercase");
      \u0275\u0275elementEnd()();
      \u0275\u0275declareLet(11);
      \u0275\u0275conditionalCreate(12, UserItem_Conditional_12_Template, 3, 4, "p", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 8)(14, "a", 9);
      \u0275\u0275text(15, " View profile ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("imageUrl", ctx.getCompressedProfileImageUrl())("viewerImageUrl", ctx.getProfileImageUrl())("name", ctx.user().name)("alt", ctx.user().name || "User profile image");
      \u0275\u0275advance(3);
      \u0275\u0275property("appHighlightText", ctx.searchTerm());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, ctx.user().name) || "Unnamed user", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("appHighlightText", ctx.searchTerm());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" @", \u0275\u0275pipeBind1(10, 12, ctx.user().username) || "unknown", " ");
      \u0275\u0275advance(2);
      const joinedAt_r2 = \u0275\u0275storeLet(ctx.user().createdAt);
      \u0275\u0275advance();
      \u0275\u0275conditional(joinedAt_r2 ? 12 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.userProfileLink(ctx.user().username));
    }
  }, dependencies: [Thumbnail, RouterLink, CommonModule, HighlightText, DatePipe, LowerCasePipe, CapitalizeWordsPipe], styles: ["\n\n/*# sourceMappingURL=user-item.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserItem, [{
    type: Component,
    args: [{ selector: "app-user-item", imports: [Thumbnail, DatePipe, RouterLink, CommonModule, CapitalizeWordsPipe, HighlightText], template: `<article class="sm:flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
  <div class="flex gap-3">
    <app-thumbnail [imageUrl]="getCompressedProfileImageUrl()" [viewerImageUrl]="getProfileImageUrl()"
      [name]="user().name" [alt]="user().name || 'User profile image'" size="3rem" radius="50%" class="shrink-0">
    </app-thumbnail>
    <div class="min-w-0 flex-1">
      <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h3 class="truncate text-base font-semibold text-gray-900" [appHighlightText]="searchTerm()">
          {{ (user().name | capitalizeWords) || 'Unnamed user' }}
        </h3>
        <span class="truncate text-sm text-gray-500" [appHighlightText]="searchTerm()">
          @{{ (user().username|lowercase) || 'unknown' }}
        </span>
      </div>
      @let joinedAt = user().createdAt;
      @if (joinedAt) {
      <p class="mt-1 text-sm text-gray-500">
        Joined on {{ joinedAt | date : 'mediumDate' }}
      </p>
      }
    </div>
  </div>
  <div class="shrink-0 mt-3 sm:mt-0">
    <a [routerLink]="userProfileLink(user().username)" class="u-btn-outline-cyan w-full text-center block">
      View profile
    </a>
  </div>
</article>`, styles: ["/* src/app/features/users/components/user-item/user-item.scss */\n/*# sourceMappingURL=user-item.css.map */\n"] }]
  }], null, { user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: true }] }], searchTerm: [{ type: Input, args: [{ isSignal: true, alias: "searchTerm", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserItem, { className: "UserItem", filePath: "src/app/features/users/components/user-item/user-item.ts", lineNumber: 17 });
})();

// src/app/features/users/users.ts
var _forTrack0 = ($index, $item) => $item.id;
function Users_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 16);
    \u0275\u0275text(2, "No users found");
    \u0275\u0275elementEnd()();
  }
}
function Users_Conditional_15_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275element(1, "app-user-item", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r3)("searchTerm", ctx_r1.keyword);
  }
}
function Users_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-infinite-scroll", 17);
    \u0275\u0275listener("reachedEnd", function Users_Conditional_15_Conditional_4_Template_app_infinite_scroll_reachedEnd_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275elementStart(1, "ul");
    \u0275\u0275repeaterCreate(2, Users_Conditional_15_Conditional_4_For_3_Template, 2, 2, "li", 18, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const userItems_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("loadingEnd", ctx_r1.isLoadingMore());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(userItems_r4);
  }
}
function Users_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275conditionalCreate(3, Users_Conditional_15_Conditional_3_Template, 3, 0, "div", 14)(4, Users_Conditional_15_Conditional_4_Template, 4, 1, "app-infinite-scroll", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hidden", !ctx_r1.isLoadingList());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx_r1.isLoadingList());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.length === 0 ? 3 : 4);
  }
}
function Users_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementEnd();
  }
}
var Users = class _Users {
  usersApi = inject(UsersApi);
  destroyRef = inject(DestroyRef);
  search$ = new Subject();
  platformService = inject(Platform);
  seo = inject(Seo);
  url = inject(Url);
  users = signal(void 0, ...ngDevMode ? [{ debugName: "users" }] : []);
  currentPage = 0;
  pageSize = 10;
  hasMore = signal(true, ...ngDevMode ? [{ debugName: "hasMore" }] : []);
  isLoadingMore = signal(false, ...ngDevMode ? [{ debugName: "isLoadingMore" }] : []);
  isLoadingList = signal(false, ...ngDevMode ? [{ debugName: "isLoadingList" }] : []);
  keyword = "";
  sortField = "createdAt";
  sortDirection = "desc";
  lastSearchedKeyword = "";
  constructor() {
  }
  ngOnInit() {
    this.setSeo();
    this.isLoadingList.set(true);
    if (!this.platformService.isBrowser()) {
      return;
    }
    this.getUsersList();
    this.search$.pipe(debounceTime(500), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((keyword) => {
      this.lastSearchedKeyword = keyword;
      this.currentPage = 0;
      this.users.set([]);
      this.getUsersList();
    });
  }
  setSeo() {
    this.seo.update({
      title: "Users",
      content: "Explore public profiles across the platform.",
      image: this.url.toAbsoluteUrl("/images/profile/users.jpeg"),
      imageWidth: 500,
      imageHeight: 500
    });
  }
  getUsersList() {
    const keyword = this.keyword?.trim();
    this.usersApi.getAll(__spreadValues({
      page: this.currentPage,
      size: this.pageSize,
      sort: `${this.sortField},${this.sortDirection}`
    }, keyword && { keyword: this.keyword })).subscribe({
      next: (response) => {
        const currentUsers = this.users() || [];
        this.users.set([...currentUsers, ...response.content]);
        this.hasMore.set(!response.last);
        this.isLoadingList.set(false);
        this.isLoadingMore.set(false);
      },
      error: (err) => {
        console.error("Error fetching users", err);
      }
    });
  }
  onSearch(keyword) {
    this.keyword = keyword;
    const trimmedKeyword = sanitizeText(this.keyword, {
      noSpecialCharacterAllow: true
    }).trim();
    this.isLoadingList.set(true);
    if (trimmedKeyword === this.lastSearchedKeyword) {
      this.isLoadingList.set(false);
      return;
    }
    this.search$.next(trimmedKeyword);
  }
  onSortChange() {
    this.isLoadingList.set(true);
    this.currentPage = 0;
    this.users.set([]);
    this.getUsersList();
  }
  loadMore() {
    if (!this.hasMore() || this.isLoadingMore() || this.isLoadingList()) {
      return;
    }
    this.isLoadingMore.set(true);
    this.currentPage++;
    this.getUsersList();
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
  static \u0275fac = function Users_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Users)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Users, selectors: [["app-users"]], decls: 17, vars: 5, consts: [[1, "u-responsive-padding-xy", "c-users-section"], [1, "u-container-form", "u-container-2", "mx-auto"], [1, "text-center", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-3"], [1, "text-lg", "text-gray-600"], [1, "mb-6", "space-y-4"], [1, "sm:flex", "flex-wrap", "gap-4", "justify-between", "items-end"], [1, "flex-1"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["type", "text", "appSanitizeInput", "", "placeholder", "Search by name or username...", 1, "u-form-field", "py-2.5", "text-sm", 3, "ngModelChange", "noSpecialCharacterAllow", "ngModel"], [1, "mt-3", "sm:mt-0"], ["label", "Joined date", "field", "createdAt", 3, "toggle", "activeField", "direction"], [1, "flex", "justify-center", "items-center", "py-16"], [1, "u-spinner"], [1, "text-center", "text-gray-500", "py-16"], [3, "loadingEnd"], [1, "text-xl", "font-medium", "my-2"], [3, "reachedEnd", "loadingEnd"], [1, "mt-5"], [3, "user", "searchTerm"]], template: function Users_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, " Users ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, " Explore public profiles across the platform ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
      \u0275\u0275text(11, "Search Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 9);
      \u0275\u0275listener("ngModelChange", function Users_Template_input_ngModelChange_12_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 10)(14, "app-sort-button", 11);
      \u0275\u0275listener("toggle", function Users_Template_app_sort_button_toggle_14_listener($event) {
        return ctx.toggleSort($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(15, Users_Conditional_15_Template, 5, 5)(16, Users_Conditional_16_Template, 2, 0, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275advance(12);
      \u0275\u0275property("noSpecialCharacterAllow", true)("ngModel", ctx.keyword);
      \u0275\u0275advance(2);
      \u0275\u0275property("activeField", ctx.sortField)("direction", ctx.sortDirection);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_4_0 = ctx.users()) ? 15 : ctx.isLoadingList() ? 16 : -1, tmp_4_0);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, UserItem, SanitizeInput, SortButton, InfiniteScroll], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Users, [{
    type: Component,
    args: [{ selector: "app-users", imports: [CommonModule, FormsModule, UserItem, SanitizeInput, SortButton, InfiniteScroll], template: '<section class="u-responsive-padding-xy c-users-section">\n  <div class="u-container-form u-container-2 mx-auto">\n    <div class="text-center mb-6">\n      <h1 class="text-2xl font-bold text-gray-900 mb-3">\n        Users\n      </h1>\n      <p class="text-lg text-gray-600">\n        Explore public profiles across the platform\n      </p>\n    </div>\n\n    <div class="mb-6 space-y-4">\n      <div class="sm:flex flex-wrap gap-4 justify-between items-end">\n        <div class="flex-1">\n          <label class="block text-sm font-medium text-gray-700 mb-1">Search Users</label>\n          <input type="text" appSanitizeInput [noSpecialCharacterAllow]="true" [ngModel]="keyword"\n            (ngModelChange)="onSearch($event)" placeholder="Search by name or username..."\n            class="u-form-field py-2.5 text-sm" />\n        </div>\n\n        <div class="mt-3 sm:mt-0">\n          <app-sort-button label="Joined date" field="createdAt" [activeField]="sortField" [direction]="sortDirection"\n            (toggle)="toggleSort($event)">\n          </app-sort-button>\n        </div>\n      </div>\n    </div>\n\n    @if (users(); as userItems) {\n    <div class="flex justify-center items-center py-16" [class.hidden]="!isLoadingList()">\n      <div class="u-spinner"></div>\n    </div>\n\n    <div [class.hidden]="isLoadingList()">\n      @if (userItems.length === 0) {\n      <div class="text-center text-gray-500 py-16">\n        <p class="text-xl font-medium my-2">No users found</p>\n      </div>\n      } @else {\n      <app-infinite-scroll [loadingEnd]="isLoadingMore()" (reachedEnd)="loadMore()">\n        <ul>\n          @for (user of userItems; track user.id) {\n          <li class="mt-5">\n            <app-user-item [user]="user" [searchTerm]="keyword"></app-user-item>\n          </li>\n          }\n        </ul>\n      </app-infinite-scroll>\n      }\n    </div>\n    } @else if (isLoadingList()) {\n    <div class="flex justify-center items-center py-16">\n      <div class="u-spinner"></div>\n    </div>\n    }\n  </div>\n</section>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Users, { className: "Users", filePath: "src/app/features/users/users.ts", lineNumber: 23 });
})();
export {
  Users
};
//# sourceMappingURL=chunk-7VR7O53W.js.map
