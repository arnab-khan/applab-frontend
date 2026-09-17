import {
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/features/chat/chat.routes.ts
var chatRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-KHTSUOL7.js").then((r) => r.Chat),
    children: [
      { path: "", redirectTo: "global", pathMatch: "full" },
      { path: "global", loadComponent: () => import("./chunk-2FUGPGWS.js").then((r) => r.GlobalChat) },
      // { path: 'group', loadComponent: () => import('./pages/group-chat/group-chat').then(r => r.GroupChat) },
      { path: "direct", loadComponent: () => import("./chunk-ASNNA4UB.js").then((r) => r.DirectChat) }
    ]
  }, false ? { \u0275entryName: "src/app/features/chat/chat.ts" } : {})
];
export {
  chatRoutes
};
//# sourceMappingURL=chunk-3QEE6PMT.js.map
