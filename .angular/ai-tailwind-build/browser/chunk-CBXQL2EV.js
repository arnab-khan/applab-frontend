import {
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/features/chat/chat.routes.ts
var chatRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-7H2TUVXJ.js").then((r) => r.Chat),
    children: [
      { path: "", redirectTo: "global", pathMatch: "full" },
      { path: "global", loadComponent: () => import("./chunk-4UZHPF33.js").then((r) => r.GlobalChat) },
      { path: "group", loadComponent: () => import("./chunk-RQ2ZKUO2.js").then((r) => r.ComingSoon) },
      { path: "direct", loadComponent: () => import("./chunk-PGH7K7AO.js").then((r) => r.DirectChat) }
    ]
  }, false ? { \u0275entryName: "src/app/features/chat/chat.ts" } : {})
];
export {
  chatRoutes
};
//# sourceMappingURL=chunk-CBXQL2EV.js.map
