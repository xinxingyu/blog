/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b498934d84726c9be8c4cea17fee1b83"
  },
  {
    "url": "about/index.html",
    "revision": "8eb6ac5142b5589f719f7f8a53b0d536"
  },
  {
    "url": "assets/css/0.styles.76771592.css",
    "revision": "224e39fa01e4c5c773aab67dec50966d"
  },
  {
    "url": "assets/img/mechanism1.29a11c0a.jpg",
    "revision": "29a11c0a56b28c6b205ef45324e49f17"
  },
  {
    "url": "assets/img/mechanism2.6110eef3.jpg",
    "revision": "6110eef39555cba45ac950f0b57bab6f"
  },
  {
    "url": "assets/img/mechanism5.cdbb5977.jpg",
    "revision": "cdbb5977d53a08b591a9f79cc263e33c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6256b23f.js",
    "revision": "dd4669dd13e5f422ace01757ed1b7c87"
  },
  {
    "url": "assets/js/10.1d08ded5.js",
    "revision": "d712e43d2dcc6dc8ebf0efa1c87e8a61"
  },
  {
    "url": "assets/js/11.3d0d52ad.js",
    "revision": "5086de08be1f76dd716a2b813c313d28"
  },
  {
    "url": "assets/js/12.f0621643.js",
    "revision": "9eaa355c65a2e7c883b60d6a822e49f0"
  },
  {
    "url": "assets/js/13.c34de92d.js",
    "revision": "5a85818ccfa753ea9cc62f53582f3651"
  },
  {
    "url": "assets/js/14.01ce6b74.js",
    "revision": "408ad0998d71b7383cf39f2b9e7de754"
  },
  {
    "url": "assets/js/15.cc2ae571.js",
    "revision": "efc400a4b6f893949c80a8e60daca9db"
  },
  {
    "url": "assets/js/16.ba9fe275.js",
    "revision": "a6dd9cf4ad2e704286d9932367d35214"
  },
  {
    "url": "assets/js/17.b0ab0a92.js",
    "revision": "37400fb7de40bf4552fd56ce3a7e3ed7"
  },
  {
    "url": "assets/js/18.458208e4.js",
    "revision": "10cd4ab209c40c21defd848788d29978"
  },
  {
    "url": "assets/js/19.dd6f2e24.js",
    "revision": "b9595dfa6c5b214e4b8cf7e4bac2161b"
  },
  {
    "url": "assets/js/2.8054cf35.js",
    "revision": "a03678052ef38033bc23c29fc568224a"
  },
  {
    "url": "assets/js/20.2f4a5420.js",
    "revision": "dbf2f0775296f31d1b1e2f3713efd0e9"
  },
  {
    "url": "assets/js/21.b4b26bce.js",
    "revision": "e1a5abf2d9a7d0b4e77faf84448392cc"
  },
  {
    "url": "assets/js/22.870c4185.js",
    "revision": "bfa29c7b64af006167b62923d0692d62"
  },
  {
    "url": "assets/js/23.ffebbdf9.js",
    "revision": "f2f939c61a41a4dcd872bd697899ad4d"
  },
  {
    "url": "assets/js/24.652d8c18.js",
    "revision": "3e1d157074d9035e60127e1add9b017c"
  },
  {
    "url": "assets/js/25.a28027d9.js",
    "revision": "50f371e20c5793b7ae78a58d91a5fd3b"
  },
  {
    "url": "assets/js/3.893ce249.js",
    "revision": "a27d3b6add69604b74c559377ef85ce0"
  },
  {
    "url": "assets/js/4.87e5a759.js",
    "revision": "4325823c1ba86531c80e7c3760ac1cc3"
  },
  {
    "url": "assets/js/5.22941b1d.js",
    "revision": "cccb939817b716971b075b733d56c79f"
  },
  {
    "url": "assets/js/6.e7e26162.js",
    "revision": "71cb0ee5ef87ff812d81e133f218ec7f"
  },
  {
    "url": "assets/js/7.e4d1dc89.js",
    "revision": "3bc09f876bc82454052cc2515a1f53fe"
  },
  {
    "url": "assets/js/8.317b3796.js",
    "revision": "a95c4517bc04d6d881a2774d3a822b91"
  },
  {
    "url": "assets/js/9.dc459517.js",
    "revision": "2157898126ca046daf56449e1331d17d"
  },
  {
    "url": "assets/js/app.28a5635e.js",
    "revision": "8d471bbfefff8f3afe8996aab3af9676"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "980d992471be81efd6a0bcb89a1e3941"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "adbdc165a2e86c153e0e2649e4cd2794"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "be40e4d2517f1dd7804491e08a799d39"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "7135f73d7c423047274ae53648559870"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "d5811093d2b70d1311715e5e138e5b89"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "a97eba2e257d1082368e961dca1d18a6"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "6428b6356f52f4aa5fdf11f974c4b986"
  },
  {
    "url": "blog/index.html",
    "revision": "e7cba7d1fb77a01d0bba04e315225182"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "78c2cd0f2754935a71d30a79abdf250e"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "7396aa55d78cdae96573eabe6946559d"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "2e5b34f1291154a244d32a52bc1e99de"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "e8103a10ea6aff698c750c9b0fa12330"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "bf3ef7cc1b93293aa247575e8c3a9c46"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "f4aa818d5101253893c18d0cfa9c1f7c"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "af621ccc3a5f7b44ea7f814e9606323d"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "438dcce118214bea83e48fd9c91bdf26"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "7620d12d13c1a7748386cacd73445028"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "2de1a53239011dbfd94d839f7a9e2ff6"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "63b8a3f872bd3181706da304f8bd80f6"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "bfd4caae3bb21ed699c9e12a889f0288"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "cfb5c997a133b63fa93cf5aba19dd05a"
  },
  {
    "url": "logo.jpeg",
    "revision": "4fc13ae88283c1e8e3ae5f8ea76ddfa2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
