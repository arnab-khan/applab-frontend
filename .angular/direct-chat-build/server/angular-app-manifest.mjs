
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
      "chunk-VMU2VV4I.js",
      "chunk-FP5MHVYF.js"
    ],
    "route": "/auth"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VMU2VV4I.js",
      "chunk-FP5MHVYF.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VMU2VV4I.js",
      "chunk-FP5MHVYF.js"
    ],
    "route": "/auth/signup"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VMU2VV4I.js",
      "chunk-FP5MHVYF.js"
    ],
    "route": "/auth/password-verification"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VMU2VV4I.js",
      "chunk-FP5MHVYF.js"
    ],
    "route": "/auth/email-entry"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VMU2VV4I.js",
      "chunk-FP5MHVYF.js"
    ],
    "route": "/auth/otp-verification"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VMU2VV4I.js",
      "chunk-FP5MHVYF.js"
    ],
    "route": "/auth/reset-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-63KO3QUG.js",
      "chunk-NQAOSQMA.js"
    ],
    "route": "/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-63KO3QUG.js",
      "chunk-NQAOSQMA.js"
    ],
    "route": "/profile/view-profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-63KO3QUG.js",
      "chunk-NQAOSQMA.js"
    ],
    "route": "/profile/edit-profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7VR7O53W.js",
      "chunk-ZZC3JEQU.js",
      "chunk-2DYJRQPJ.js",
      "chunk-Y6BEIZXJ.js",
      "chunk-CCYGSJSA.js"
    ],
    "route": "/users"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AQDXJHDO.js",
      "chunk-RRKF6ZMJ.js",
      "chunk-6IPXNW6H.js",
      "chunk-ZZC3JEQU.js",
      "chunk-OL35HKYF.js",
      "chunk-ALZZ5FDG.js",
      "chunk-UMKDZD2E.js"
    ],
    "route": "/user/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V4PV2ZYC.js",
      "chunk-VJWD2X6S.js",
      "chunk-2DYJRQPJ.js",
      "chunk-OL35HKYF.js",
      "chunk-36X7E7MJ.js",
      "chunk-ALZZ5FDG.js",
      "chunk-Y6BEIZXJ.js",
      "chunk-K37WEG3F.js",
      "chunk-P5CYD73A.js",
      "chunk-CCYGSJSA.js"
    ],
    "route": "/todo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QX37NKBP.js",
      "chunk-MG6F3DLJ.js",
      "chunk-PH26UJEP.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QX37NKBP.js",
      "chunk-MG6F3DLJ.js",
      "chunk-PH26UJEP.js"
    ],
    "route": "/chat/global"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QX37NKBP.js",
      "chunk-MG6F3DLJ.js",
      "chunk-PH26UJEP.js"
    ],
    "route": "/chat/group"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QX37NKBP.js",
      "chunk-MG6F3DLJ.js",
      "chunk-PH26UJEP.js"
    ],
    "route": "/chat/direct"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QX37NKBP.js",
      "chunk-MG6F3DLJ.js",
      "chunk-PH26UJEP.js"
    ],
    "route": "/chat/direct/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ENZONMSC.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 994, hash: '9c586aed8ce37eb128cb8ffefa34cac0db1b808ca5ba798868eea5f6796f08a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1534, hash: 'fc73bf6ca7b964877345a96ef867722aeda4a64094961bcfada794582d0264a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
