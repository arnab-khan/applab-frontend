import {
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/features/profile/profile.routes.ts
var profileRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-APTRI4WZ.js").then((m) => m.Profile),
    children: [
      { path: "", redirectTo: "view-profile", pathMatch: "full" },
      {
        path: "view-profile",
        loadComponent: () => import("./chunk-DWY3DRFT.js").then((m) => m.ViewProfile)
      },
      {
        path: "edit-profile",
        loadComponent: () => import("./chunk-BD4XSDND.js").then((m) => m.EditProfile)
      }
    ]
  }, false ? { \u0275entryName: "src/app/features/profile/profile.ts" } : {})
];
export {
  profileRoutes
};
//# sourceMappingURL=chunk-TQSI3T4H.js.map
