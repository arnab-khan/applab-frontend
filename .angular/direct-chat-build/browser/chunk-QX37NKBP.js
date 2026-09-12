import {
  AuthGuard
} from "./chunk-LWURI6WI.js";
import "./chunk-DFRRT2OL.js";
import "./chunk-SDFCVRZT.js";
import "./chunk-5QQ5IMAE.js";
import "./chunk-BQE5RZFF.js";
import "./chunk-CYBPL3OT.js";
import "./chunk-CSUKEAYK.js";
import {
  __spreadValues
} from "./chunk-35BBDGX6.js";

// src/app/features/chat/chat.routes.ts
var chatRoutes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-MG6F3DLJ.js").then((r) => r.Chat),
    children: [
      { path: "", redirectTo: "global", pathMatch: "full" },
      { path: "global", loadComponent: () => import("./chunk-P6Y5NYUB.js").then((r) => r.GlobalChat) },
      { path: "group", loadComponent: () => import("./chunk-JIWK4LAI.js").then((r) => r.ComingSoon) },
      { path: "direct", loadComponent: () => import("./chunk-JIWK4LAI.js").then((r) => r.ComingSoon) },
      { path: "direct/:userId", canActivate: [AuthGuard], loadComponent: () => import("./chunk-LGC3DNUP.js").then((r) => r.DirectChat) }
    ]
  }, false ? { \u0275entryName: "src/app/features/chat/chat.ts" } : {})
];
export {
  chatRoutes
};
//# sourceMappingURL=chunk-QX37NKBP.js.map
