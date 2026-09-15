import './polyfills.server.mjs';
import {
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/features/chat/chat.routes.ts
var chatRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-O6VN2JY3.mjs").then((r) => r.Chat),
    children: [
      { path: "", redirectTo: "global", pathMatch: "full" },
      { path: "global", loadComponent: () => import("./chunk-5JPCGAL7.mjs").then((r) => r.GlobalChat) },
      { path: "group", loadComponent: () => import("./chunk-YNEL5EVD.mjs").then((r) => r.ComingSoon) },
      { path: "direct", loadComponent: () => import("./chunk-K7MSM6PJ.mjs").then((r) => r.DirectChat) }
    ]
  }, true ? { \u0275entryName: "src/app/features/chat/chat.ts" } : {})
];
export {
  chatRoutes
};
//# sourceMappingURL=chunk-RIUQJIUE.mjs.map
