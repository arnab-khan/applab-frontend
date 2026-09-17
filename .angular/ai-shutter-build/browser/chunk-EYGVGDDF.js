import {
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/features/chat/chat.routes.ts
var chatRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-W4DPROZH.js").then((r) => r.Chat),
    children: [
      { path: "", redirectTo: "global", pathMatch: "full" },
      { path: "global", loadComponent: () => import("./chunk-YAA7O6SS.js").then((r) => r.GlobalChat) },
      // { path: 'group', loadComponent: () => import('./pages/group-chat/group-chat').then(r => r.GroupChat) },
      { path: "direct", loadComponent: () => import("./chunk-S2MWO5T5.js").then((r) => r.DirectChat) }
    ]
  }, false ? { \u0275entryName: "src/app/features/chat/chat.ts" } : {})
];
export {
  chatRoutes
};
//# sourceMappingURL=chunk-EYGVGDDF.js.map
