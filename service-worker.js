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
    "revision": "b2869f8af439670dfacd0c0131dbfadf"
  },
  {
    "url": "about/index.html",
    "revision": "0755cf1790cc576f44e1219b11cad3bb"
  },
  {
    "url": "assets/css/4.styles.9a3cfe05.css",
    "revision": "b139790093f0a0cc4f3b46babcf1f14b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.3480ee04.js",
    "revision": "c9c6e424bd1b88a7c4f94d9bdca49c9f"
  },
  {
    "url": "assets/js/1.de5cb742.js",
    "revision": "a0df71f02a7a2069761a8de57e702bd2"
  },
  {
    "url": "assets/js/2.ffae4388.js",
    "revision": "2901be3af639b8cb0cb10b98f4124a5b"
  },
  {
    "url": "assets/js/3.8d859656.js",
    "revision": "2ea172d68a99a31f472593c3caea7535"
  },
  {
    "url": "assets/js/app.8e9bc9d6.js",
    "revision": "f6b2c16236715e552b5e2e6fb0d6ff02"
  },
  {
    "url": "blog/index.html",
    "revision": "0d7dcf36722d86746a530c84a068dde5"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "c44e58b87a7fbdff5ee5431570f4950f"
  },
  {
    "url": "index.html",
    "revision": "14c52d7de2fe90cb91dca30156023c07"
  },
  {
    "url": "logo.jpeg",
    "revision": "4fc13ae88283c1e8e3ae5f8ea76ddfa2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
