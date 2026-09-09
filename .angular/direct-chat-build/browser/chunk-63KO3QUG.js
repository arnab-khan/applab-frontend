import {
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/features/profile/profile.routes.ts
var profileRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-NQAOSQMA.js").then((m) => m.Profile),
    children: [
      { path: "", redirectTo: "view-profile", pathMatch: "full" },
      {
        path: "view-profile",
        loadComponent: () => import("./chunk-PYAX7NDU.js").then((m) => m.ViewProfile)
      },
      {
        path: "edit-profile",
        loadComponent: () => import("./chunk-IR4FARPD.js").then((m) => m.EditProfile)
      }
    ]
  }, false ? { \u0275entryName: "src/app/features/profile/profile.ts" } : {})
];
export {
  profileRoutes
};
//# sourceMappingURL=chunk-63KO3QUG.js.map
