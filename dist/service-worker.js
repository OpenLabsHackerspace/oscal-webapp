importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "_/node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "_/node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "_/node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "_/node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-100.woff",
    "revision": "e9dbbe8a693dd275c16d32feb101f1c1"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-100.woff2",
    "revision": "987b84570ea69ee660455b8d5e91f5f1"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-100italic.woff",
    "revision": "d704bb3d579b7d5e40880c75705c8a71"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-100italic.woff2",
    "revision": "6232f43d15b0e7a0bf0fe82e295bdd06"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-300.woff",
    "revision": "a1471d1d6431c893582a5f6a250db3f9"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-300.woff2",
    "revision": "55536c8e9e9a532651e3cf374f290ea3"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-300italic.woff",
    "revision": "210a7c781f5a354a0e4985656ab456d9"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-300italic.woff2",
    "revision": "d69924b98acd849cdeba9fbff3f88ea6"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-400.woff",
    "revision": "bafb105baeb22d965c70fe52ba6b49d9"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-400.woff2",
    "revision": "5d4aeb4e5f5ef754e307d7ffaef688bd"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-400italic.woff",
    "revision": "9680d5a0c32d2fd084e07bbc4c8b2923"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-400italic.woff2",
    "revision": "d8bcbe724fd6f4ba44d0ee6a2675890f"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-500.woff",
    "revision": "de8b7431b74642e830af4d4f4b513ec9"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-500.woff2",
    "revision": "285467176f7fe6bb6a9c6873b3dad2cc"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-500italic.woff",
    "revision": "ffcc050b2d92d4b14a4fcb527ee0bcc8"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-500italic.woff2",
    "revision": "510dec37fa69fba39593e01a469ee018"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-700.woff",
    "revision": "cf6613d1adf490972c557a8e318e0868"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-700.woff2",
    "revision": "037d830416495def72b7881024c14b7b"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-700italic.woff",
    "revision": "846d1890aee87fde5d8ced8eba360c3a"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-700italic.woff2",
    "revision": "010c1aeee3c6d1cbb1d5761d80353823"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-900.woff",
    "revision": "8c2ade503b34e31430d6c98aa29a52a3"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-900.woff2",
    "revision": "19b7a0adfdd4f808b53af7e2ce2ad4e5"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-900italic.woff",
    "revision": "bc833e725c137257c2c42a789845d82f"
  },
  {
    "url": "_/node_modules/typeface-roboto/files/roboto-latin-900italic.woff2",
    "revision": "7b770d6c53423deb1a8e49d3c9175184"
  },
  {
    "url": "assets/bashkia_tirane.png",
    "revision": "005fbce4936fcb61a336fed212d7f247"
  },
  {
    "url": "assets/building-protik.svg",
    "revision": "71f9eda88e415c6af0d8e490f70a4bef"
  },
  {
    "url": "assets/building-pyramid.svg",
    "revision": "0dfeaff8066a40047a0890013ea65b5d"
  },
  {
    "url": "assets/building-talk 1.svg",
    "revision": "0dfeaff8066a40047a0890013ea65b5d"
  },
  {
    "url": "assets/building-talk 2.svg",
    "revision": "71f9eda88e415c6af0d8e490f70a4bef"
  },
  {
    "url": "assets/building-workshop 1.svg",
    "revision": "71f9eda88e415c6af0d8e490f70a4bef"
  },
  {
    "url": "assets/building-workshop 2.svg",
    "revision": "71f9eda88e415c6af0d8e490f70a4bef"
  },
  {
    "url": "assets/collabora.png",
    "revision": "51b1b33313fba3059bd3bf927da80146"
  },
  {
    "url": "assets/libreoffice.png",
    "revision": "cbf220aa9f6d08826f10c087df392b49"
  },
  {
    "url": "assets/logo.png",
    "revision": "a503ca7c4b98207894be6c078b000111"
  },
  {
    "url": "assets/mozilla.png",
    "revision": "9351f24c6198a6ac4a1e57db07ed3b38"
  },
  {
    "url": "assets/nextcloud.png",
    "revision": "ecef0b9df490236da0a68c887617e295"
  },
  {
    "url": "assets/opensuse.png",
    "revision": "63a17706477e0ab6116af2c0d1b42f26"
  },
  {
    "url": "assets/oscal-icon-112.png",
    "revision": "b24004e3d347613b44cc923b23b96836"
  },
  {
    "url": "assets/oscal-icon-224.png",
    "revision": "2dcc77d226e3808879d019c08bf02ff5"
  },
  {
    "url": "assets/oscal-icon-56.png",
    "revision": "7e4b7ce5f9068d93f0a0fa805363fbea"
  },
  {
    "url": "assets/oscal-map.svg",
    "revision": "b713bd576a93f98e7cd402e5e9869224"
  },
  {
    "url": "assets/phplist.png",
    "revision": "8a4ccc4503b1a41744f7fa612b121ac2"
  },
  {
    "url": "assets/protik.png",
    "revision": "c995efbfd4ef2e3f431cc24a049a646f"
  },
  {
    "url": "assets/relatech.png",
    "revision": "f6df109a2cabb39b7caec012d35ebcd7"
  },
  {
    "url": "assets/vodafone.png",
    "revision": "c413143dd0733131c9b8d22175b3f242"
  },
  {
    "url": "build.js",
    "revision": "2978fe8cce4f4513d786dcb13d6ce058"
  },
  {
    "url": "index.html",
    "revision": "254c37f0013f48183c9ffc5121200f28"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "sojourner",
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
