import './polyfills.server.mjs';
import {
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/features/profile/profile.routes.ts
var profileRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-TBAOOOK5.mjs").then((m) => m.Profile),
    children: [
      { path: "", redirectTo: "view-profile", pathMatch: "full" },
      {
        path: "view-profile",
        loadComponent: () => import("./chunk-X5RPJBAQ.mjs").then((m) => m.ViewProfile)
      },
      {
        path: "edit-profile",
        loadComponent: () => import("./chunk-ZBUNHKY4.mjs").then((m) => m.EditProfile)
      }
    ]
  }, true ? { \u0275entryName: "src/app/features/profile/profile.ts" } : {})
];
export {
  profileRoutes
};
//# sourceMappingURL=chunk-45N6CSO4.mjs.map
