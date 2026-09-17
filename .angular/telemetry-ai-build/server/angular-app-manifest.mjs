
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/auth",
    "route": "/"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-753T5NWY.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-753T5NWY.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-753T5NWY.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth/signup"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-753T5NWY.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth/password-verification"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-753T5NWY.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth/email-entry"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-753T5NWY.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth/otp-verification"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-753T5NWY.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth/reset-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XXX2LYIF.js",
      "chunk-55HKL63A.js"
    ],
    "route": "/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XXX2LYIF.js",
      "chunk-55HKL63A.js"
    ],
    "route": "/profile/view-profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XXX2LYIF.js",
      "chunk-55HKL63A.js"
    ],
    "route": "/profile/edit-profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JEOR4QJF.js",
      "chunk-JVJFHH6Q.js",
      "chunk-LEAETYZC.js",
      "chunk-QJW2GP67.js",
      "chunk-E4MUYDRL.js"
    ],
    "route": "/users"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5OJN4XTN.js",
      "chunk-4PH3FKN6.js",
      "chunk-WTBKWGM3.js",
      "chunk-3N2RTVI2.js",
      "chunk-JVJFHH6Q.js",
      "chunk-LEAETYZC.js",
      "chunk-YLFZVQAR.js",
      "chunk-F4OAGFJT.js",
      "chunk-H4TIBH5T.js",
      "chunk-7SZW6Z2V.js"
    ],
    "route": "/user/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NIEIOPFF.js",
      "chunk-CCDIVJ6T.js",
      "chunk-QJW2GP67.js",
      "chunk-YLFZVQAR.js",
      "chunk-VUUJGVHR.js",
      "chunk-F4OAGFJT.js",
      "chunk-H4TIBH5T.js",
      "chunk-E4MUYDRL.js",
      "chunk-HZ4CUDGB.js",
      "chunk-P5CYD73A.js"
    ],
    "route": "/todo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3QEE6PMT.js",
      "chunk-KHTSUOL7.js",
      "chunk-OWQGSJHL.js",
      "chunk-WIIVTUXC.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3QEE6PMT.js",
      "chunk-KHTSUOL7.js",
      "chunk-OWQGSJHL.js",
      "chunk-WIIVTUXC.js"
    ],
    "route": "/chat/global"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3QEE6PMT.js",
      "chunk-KHTSUOL7.js",
      "chunk-OWQGSJHL.js",
      "chunk-WIIVTUXC.js"
    ],
    "route": "/chat/direct"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OU6NTRPC.js",
      "chunk-NPLZO36D.js",
      "chunk-OWQGSJHL.js",
      "chunk-WIIVTUXC.js",
      "chunk-QSZ67BDO.js",
      "chunk-WTBKWGM3.js",
      "chunk-3N2RTVI2.js",
      "chunk-JVJFHH6Q.js",
      "chunk-LEAETYZC.js",
      "chunk-YLFZVQAR.js"
    ],
    "route": "/user-chat/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-W5SRNIYD.js",
      "chunk-QSZ67BDO.js",
      "chunk-JVJFHH6Q.js",
      "chunk-LEAETYZC.js",
      "chunk-CCDIVJ6T.js",
      "chunk-YLFZVQAR.js",
      "chunk-H4TIBH5T.js"
    ],
    "route": "/telemetry"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AZXUDROC.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 994, hash: '538c41bc72bbfaba258dcd158214c12a26571203dc775b30d10882dc9646688d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1534, hash: '989f50db5ee11caa284bc9cd085473094168ea712712bbd8dd10b85ebfe3d94e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
