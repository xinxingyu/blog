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
    "revision": "45b34f3efc2bc533ca54130608b1f2a8"
  },
  {
    "url": "about/index.html",
    "revision": "6124408e8e3b29ab846686ebfe07833c"
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
    "url": "assets/js/app.8f70989e.js",
    "revision": "3c1626004d32d3caddfd806d02997afb"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "a3e7582c1330174e121cae57bb44c3fd"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "e47d36d3f1901ecd069f35689231df13"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "5aae18752b00bcc3e40daef2cab268cb"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "3657dd420be571057dbc60e75be07d31"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "1f4b0ac3749c2b0b09b6e8c6102c3e22"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "e5825f04a02ecba255ce87ffa0c0d7ec"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "3259080bc052fa2a73ec3a34938d791b"
  },
  {
    "url": "logo.jpeg",
    "revision": "4fc13ae88283c1e8e3ae5f8ea76ddfa2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
