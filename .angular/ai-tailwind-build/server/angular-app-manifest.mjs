
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
      "chunk-SYDAUHKS.js",
      "chunk-MRC53LEA.js"
    ],
    "route": "/auth"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SYDAUHKS.js",
      "chunk-MRC53LEA.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SYDAUHKS.js",
      "chunk-MRC53LEA.js"
    ],
    "route": "/auth/signup"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SYDAUHKS.js",
      "chunk-MRC53LEA.js"
    ],
    "route": "/auth/password-verification"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SYDAUHKS.js",
      "chunk-MRC53LEA.js"
    ],
    "route": "/auth/email-entry"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SYDAUHKS.js",
      "chunk-MRC53LEA.js"
    ],
    "route": "/auth/otp-verification"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SYDAUHKS.js",
      "chunk-MRC53LEA.js"
    ],
    "route": "/auth/reset-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TQSI3T4H.js",
      "chunk-APTRI4WZ.js"
    ],
    "route": "/profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TQSI3T4H.js",
      "chunk-APTRI4WZ.js"
    ],
    "route": "/profile/view-profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TQSI3T4H.js",
      "chunk-APTRI4WZ.js"
    ],
    "route": "/profile/edit-profile"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-P7KYOTGX.js",
      "chunk-JVJFHH6Q.js",
      "chunk-7I7HDRIW.js",
      "chunk-XRWH3BPE.js",
      "chunk-3GI75I72.js"
    ],
    "route": "/users"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HUNPQI27.js",
      "chunk-2NOMC7PI.js",
      "chunk-WTBKWGM3.js",
      "chunk-UJIS6UFA.js",
      "chunk-JVJFHH6Q.js",
      "chunk-7I7HDRIW.js",
      "chunk-BNG33ZAB.js",
      "chunk-A3PGKIZG.js",
      "chunk-BFMGPGRE.js",
      "chunk-KTERXRMQ.js"
    ],
    "route": "/user/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LSBVQ6IC.js",
      "chunk-GBGDLFPS.js",
      "chunk-XRWH3BPE.js",
      "chunk-BNG33ZAB.js",
      "chunk-RHFA5TFB.js",
      "chunk-A3PGKIZG.js",
      "chunk-BFMGPGRE.js",
      "chunk-3GI75I72.js",
      "chunk-OC6CPTJI.js",
      "chunk-P5CYD73A.js"
    ],
    "route": "/todo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CBXQL2EV.js",
      "chunk-7H2TUVXJ.js",
      "chunk-MTUQOHPW.js",
      "chunk-MFWJQ6ZT.js"
    ],
    "route": "/chat"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CBXQL2EV.js",
      "chunk-7H2TUVXJ.js",
      "chunk-MTUQOHPW.js",
      "chunk-MFWJQ6ZT.js"
    ],
    "route": "/chat/global"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CBXQL2EV.js",
      "chunk-7H2TUVXJ.js",
      "chunk-MTUQOHPW.js",
      "chunk-MFWJQ6ZT.js"
    ],
    "route": "/chat/group"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CBXQL2EV.js",
      "chunk-7H2TUVXJ.js",
      "chunk-MTUQOHPW.js",
      "chunk-MFWJQ6ZT.js"
    ],
    "route": "/chat/direct"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NBN54DGA.js",
      "chunk-2FFR2WRJ.js",
      "chunk-MTUQOHPW.js",
      "chunk-MFWJQ6ZT.js",
      "chunk-3CBJ6ESI.js",
      "chunk-WTBKWGM3.js",
      "chunk-UJIS6UFA.js",
      "chunk-JVJFHH6Q.js",
      "chunk-7I7HDRIW.js",
      "chunk-BNG33ZAB.js"
    ],
    "route": "/user-chat/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4VCVUPU4.js",
      "chunk-3CBJ6ESI.js",
      "chunk-JVJFHH6Q.js",
      "chunk-7I7HDRIW.js",
      "chunk-GBGDLFPS.js",
      "chunk-BNG33ZAB.js",
      "chunk-BFMGPGRE.js"
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
    'index.csr.html': {size: 994, hash: '29c5263694632e52a0b835c77531f46a642e7c3bd9440e634a0c6c99eb7b8d15', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1534, hash: '78825b6355182f041100b2f979b29eb17638426daf3a2c364611ffbf2005e1e9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
