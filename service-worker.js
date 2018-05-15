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
    "revision": "be282a641b1e7eb56808f3f33d6ef165"
  },
  {
    "url": "about/index.html",
    "revision": "9344e5d8fba59b98a93ae888b0febda5"
  },
  {
    "url": "assets/css/0.styles.23669e8a.css",
    "revision": "fd85bcab3bc5291b0685a6706cd9276e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b9c21c42.js",
    "revision": "27151880dcbf80ac8d3237394ea95792"
  },
  {
    "url": "assets/js/10.dfaa6621.js",
    "revision": "b560905884b46c93f80dcd37ae954cee"
  },
  {
    "url": "assets/js/11.95d667b1.js",
    "revision": "34724b86529a4e24211df238915c49a9"
  },
  {
    "url": "assets/js/12.1aec46cd.js",
    "revision": "8d52d33a07a70bf88162aa0b4962dae0"
  },
  {
    "url": "assets/js/2.ce7e5a7d.js",
    "revision": "b810c7268d9e48452105b1ac220dacb7"
  },
  {
    "url": "assets/js/3.07ed6bde.js",
    "revision": "b54b9d5c7b8269206a772ca0ef20f1ab"
  },
  {
    "url": "assets/js/4.4df26e78.js",
    "revision": "9c812f5bf8b4169d05d6cf14021a66c7"
  },
  {
    "url": "assets/js/5.49fea018.js",
    "revision": "f5a142570b4e8ba39877e8bf286c4967"
  },
  {
    "url": "assets/js/6.5908bcba.js",
    "revision": "d982a39583c19c39cfc8efb9f320b37e"
  },
  {
    "url": "assets/js/7.052b3d54.js",
    "revision": "44b8a1616297702339667f0385d97f8f"
  },
  {
    "url": "assets/js/8.52141f22.js",
    "revision": "540bf82ae7a48e60b7c8e68eec38217a"
  },
  {
    "url": "assets/js/9.00e9efe4.js",
    "revision": "dfff1a13fcdd5559b9055337e7ba6c95"
  },
  {
    "url": "assets/js/app.b5be56d1.js",
    "revision": "be6860bd42c54c55b9adf387365e9ebd"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "3da60f6b29e5c9b4084dacd18d5e90a4"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "14a2758c7f98bfac8b7233104aa1286d"
  },
  {
    "url": "blog/index.html",
    "revision": "71264f896710dd55df786254d46000d8"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "5537228280b75e7225a5eb28e7d83d61"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "0ba94d545d264f2f21a568bfca02035c"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "37c206e5de936e334686045a38566026"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "6265fe06351d306a7dff83e67f7f9504"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "fdb882c1eb404f23f25e93899606cee9"
  },
  {
    "url": "logo.jpeg",
    "revision": "4fc13ae88283c1e8e3ae5f8ea76ddfa2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
