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
    "revision": "c0256c44131c3d7a4adedce63d9301fb"
  },
  {
    "url": "about/index.html",
    "revision": "e3ef992daee23d990b854d1378d08401"
  },
  {
    "url": "assets/css/0.styles.624d1cfa.css",
    "revision": "bbb9d9688b66c82b5981864d272168eb"
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
    "url": "assets/js/10.80eb18d7.js",
    "revision": "c86a0a9c97fdc4d825510ab3f0abef24"
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
    "url": "assets/js/app.0758d4e5.js",
    "revision": "8f6a73f761aacfb598c824069007438f"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "7b4aef72ba832a4a946deb273450bd7e"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "f143fa0c4fa72373d27dca932d438168"
  },
  {
    "url": "blog/index.html",
    "revision": "e1a69cc25aa9cef47f6c11804499f816"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "85ecb1909a03115b5478106cd999acc5"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "a4ec2333b01e2084f9b96831c281f005"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "2655ae7d30adb23ae4cade694c50d52c"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "733a2505fd944ce7a3b47c7d04a3342a"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "3037f935a609aec08b8e6cad51820c27"
  },
  {
    "url": "logo.jpeg",
    "revision": "4fc13ae88283c1e8e3ae5f8ea76ddfa2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
