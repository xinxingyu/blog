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
    "revision": "fe38a3169c8dde6956c3d80878e3b4ef"
  },
  {
    "url": "about/index.html",
    "revision": "92564ce2e1ff5bfb37eca51309b62864"
  },
  {
    "url": "assets/css/8.styles.602f7c2a.css",
    "revision": "b139790093f0a0cc4f3b46babcf1f14b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.63f7bd9a.js",
    "revision": "c4f2f68cc58162b8a36236616396a245"
  },
  {
    "url": "assets/js/1.de5cb742.js",
    "revision": "a0df71f02a7a2069761a8de57e702bd2"
  },
  {
    "url": "assets/js/2.80cae7d3.js",
    "revision": "04b5dea3c5e6693586ee46f3b0ca8d6e"
  },
  {
    "url": "assets/js/3.921d09bd.js",
    "revision": "a9e075d25e174b18d4867beee16f80e9"
  },
  {
    "url": "assets/js/4.7509076c.js",
    "revision": "8277de01f19eff1d108b070f5035a385"
  },
  {
    "url": "assets/js/5.bcd437a3.js",
    "revision": "3eeec166b03e465a0ad3d69dcc973fc5"
  },
  {
    "url": "assets/js/6.7ee5764a.js",
    "revision": "e9e0a61a0bdd485a35f63900a4fe0c4d"
  },
  {
    "url": "assets/js/7.f4870591.js",
    "revision": "1cb3cf708618041907f7afe2032603b8"
  },
  {
    "url": "assets/js/app.1978fb31.js",
    "revision": "31e607a21cb272976cbce9a46dd43a12"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "9dd7b89eab3c546f6505ed075efc9f79"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "a928afcf786d530727b3faa1f9a3cc10"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "d74098b996c63f9ad7e0412d87b25bbb"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "1727b02d2b4434b0596267bf36521692"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "8b6e3f034473f6d5dd6df06e66c5cffd"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "36a4b1077ba9ef46b2692b108e76fdf0"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "20bd57f0620b9cbf90d6ae57e337ac8c"
  },
  {
    "url": "logo.jpeg",
    "revision": "4fc13ae88283c1e8e3ae5f8ea76ddfa2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
