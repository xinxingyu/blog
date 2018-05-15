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
    "revision": "ffa13afe1c8cd8b5232a4ae81d51b8e2"
  },
  {
    "url": "about/index.html",
    "revision": "f1aef6b5749de93679f819ba86ec1b0a"
  },
  {
    "url": "assets/css/0.styles.44db5706.css",
    "revision": "1f579c6e8f09015e72414090301857d0"
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
    "url": "assets/js/10.04e8708c.js",
    "revision": "7f76485c0676e5bfc4bb9a382cc4f531"
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
    "url": "assets/js/app.38336274.js",
    "revision": "7af9d5ac280248dd3ccdf6788ea32e0d"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "95ab67820581dd41816c81df2d57f698"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "49ff2fc718ecccf54a183dffe1172eb1"
  },
  {
    "url": "blog/index.html",
    "revision": "6183316364782e0cfdea99b4bdda3538"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "f7a1aac3082eeb24e73cbced4be7d3e2"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "370da66897d23530eded974798f1e561"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "fa26ed25dbe9c64cd10870106419013f"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "631c2c933cc597c3c80e42fa3cae3f19"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "23e9572d5356c0b054e283784b849785"
  },
  {
    "url": "logo.jpeg",
    "revision": "4fc13ae88283c1e8e3ae5f8ea76ddfa2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
