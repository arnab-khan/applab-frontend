import './polyfills.server.mjs';
import {
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/features/chat/chat.routes.ts
var chatRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-URNLA7LM.mjs").then((r) => r.Chat),
    children: [
      { path: "", redirectTo: "global", pathMatch: "full" },
      { path: "global", loadComponent: () => import("./chunk-4TBG6VP5.mjs").then((r) => r.GlobalChat) },
      // { path: 'group', loadComponent: () => import('./pages/group-chat/group-chat').then(r => r.GroupChat) },
      { path: "direct", loadComponent: () => import("./chunk-D537DV2F.mjs").then((r) => r.DirectChat) }
    ]
  }, true ? { \u0275entryName: "src/app/features/chat/chat.ts" } : {})
];
export {
  chatRoutes
};
//# sourceMappingURL=chunk-7DGDJTEB.mjs.map
