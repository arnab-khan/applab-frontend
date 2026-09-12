import './polyfills.server.mjs';
import {
  AuthGuard
} from "./chunk-Q7GGLQZL.mjs";
import "./chunk-7N2B64DO.mjs";
import "./chunk-LCBZHX6Y.mjs";
import "./chunk-53NQCPJ5.mjs";
import "./chunk-5QYUMBOA.mjs";
import "./chunk-TNROARYC.mjs";
import "./chunk-XAQLVFTN.mjs";
import {
  __spreadValues
} from "./chunk-AEB7TZCF.mjs";

// src/app/features/chat/chat.routes.ts
var chatRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-23VCCZTK.mjs").then((r) => r.Chat),
    children: [
      { path: "", redirectTo: "global", pathMatch: "full" },
      { path: "global", loadComponent: () => import("./chunk-GQHU2JUR.mjs").then((r) => r.GlobalChat) },
      { path: "group", loadComponent: () => import("./chunk-5WGGHTAT.mjs").then((r) => r.ComingSoon) },
      { path: "direct", loadComponent: () => import("./chunk-5WGGHTAT.mjs").then((r) => r.ComingSoon) },
      { path: "direct/:userId", canActivate: [AuthGuard], loadComponent: () => import("./chunk-OEZSNFZA.mjs").then((r) => r.DirectChat) }
    ]
  }, true ? { \u0275entryName: "src/app/features/chat/chat.ts" } : {})
];
export {
  chatRoutes
};
//# sourceMappingURL=chunk-T4ZLPEJB.mjs.map
