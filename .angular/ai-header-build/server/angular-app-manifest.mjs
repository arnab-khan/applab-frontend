
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
      "chunk-IAC3FJ3O.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IAC3FJ3O.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IAC3FJ3O.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth/signup"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IAC3FJ3O.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth/password-verification"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IAC3FJ3O.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth/email-entry"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IAC3FJ3O.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth/otp-verification"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IAC3FJ3O.js",
      "chunk-D6VFNKYS.js"
    ],
    "route": "/auth/reset-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LCF55XOH.js",
      "chunk-55HKL63A.js"
    ],
    "route": "/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LCF55XOH.js",
      "chunk-55HKL63A.js"
    ],
    "route": "/profile/view-profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LCF55XOH.js",
      "chunk-55HKL63A.js"
    ],
    "route": "/profile/edit-profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-H662FXVQ.js",
      "chunk-JVJFHH6Q.js",
      "chunk-LEAETYZC.js",
      "chunk-KQTBSDUY.js",
      "chunk-E4MUYDRL.js"
    ],
    "route": "/users"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IDG7L5TB.js",
      "chunk-VJHM3U4K.js",
      "chunk-WTBKWGM3.js",
      "chunk-3N2RTVI2.js",
      "chunk-JVJFHH6Q.js",
      "chunk-LEAETYZC.js",
      "chunk-YLFZVQAR.js",
      "chunk-F4OAGFJT.js",
      "chunk-U2SDMTFM.js",
      "chunk-7SZW6Z2V.js"
    ],
    "route": "/user/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HQ7WHWAP.js",
      "chunk-CCDIVJ6T.js",
      "chunk-KQTBSDUY.js",
      "chunk-YLFZVQAR.js",
      "chunk-WYIT3YBC.js",
      "chunk-F4OAGFJT.js",
      "chunk-U2SDMTFM.js",
      "chunk-E4MUYDRL.js",
      "chunk-HZ4CUDGB.js",
      "chunk-P5CYD73A.js"
    ],
    "route": "/todo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EYGVGDDF.js",
      "chunk-W4DPROZH.js",
      "chunk-OWQGSJHL.js",
      "chunk-WIIVTUXC.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EYGVGDDF.js",
      "chunk-W4DPROZH.js",
      "chunk-OWQGSJHL.js",
      "chunk-WIIVTUXC.js"
    ],
    "route": "/chat/global"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EYGVGDDF.js",
      "chunk-W4DPROZH.js",
      "chunk-OWQGSJHL.js",
      "chunk-WIIVTUXC.js"
    ],
    "route": "/chat/direct"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BHKFG53G.js",
      "chunk-B4J3RBQG.js",
      "chunk-OWQGSJHL.js",
      "chunk-WIIVTUXC.js",
      "chunk-VKAIIVPY.js",
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
      "chunk-7NUMBF4T.js",
      "chunk-VKAIIVPY.js",
      "chunk-JVJFHH6Q.js",
      "chunk-LEAETYZC.js",
      "chunk-CCDIVJ6T.js",
      "chunk-YLFZVQAR.js",
      "chunk-U2SDMTFM.js"
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
    'index.csr.html': {size: 994, hash: '3ea05ba71b7b10a7d994133c5209b2cb2394d0e3721a0838f93ef71bdd71ce49', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1534, hash: '9b407182e179a2a3f15b874adce91d5819ae6defea3930c90bb712b956427554', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
