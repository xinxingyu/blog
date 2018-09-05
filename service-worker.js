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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "eef18e2a3170f052cc3b3f22bd0cc4e7"
  },
  {
    "url": "about/index.html",
    "revision": "20406795731ed2506d42d725de1b1313"
  },
  {
    "url": "assets/css/0.styles.ac67d5b0.css",
    "revision": "850b85884b5326d2694fc65fa0f89cdb"
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
    "url": "assets/js/10.bdde0957.js",
    "revision": "076718b2bedeb2f98e6b35d60079d271"
  },
  {
    "url": "assets/js/11.deb8b139.js",
    "revision": "86a0b0f6c2dbd62207177fb202b7f4a1"
  },
  {
    "url": "assets/js/12.95fed615.js",
    "revision": "da61fe353e209bf20f548382eb637a3d"
  },
  {
    "url": "assets/js/13.5aeb6d8b.js",
    "revision": "c5dd46b17fb21a14cc1cb54602c0b029"
  },
  {
    "url": "assets/js/14.962bc6f0.js",
    "revision": "a73e81e196cb7c0a2edeb09915963657"
  },
  {
    "url": "assets/js/15.4e69f94e.js",
    "revision": "6b8c7b0808737292e5c6188b57a7defe"
  },
  {
    "url": "assets/js/16.d32c2936.js",
    "revision": "192559f557864b963289580ef9153ef3"
  },
  {
    "url": "assets/js/17.f885afd4.js",
    "revision": "7560cd4296b4346f461ae8f2007ab4ff"
  },
  {
    "url": "assets/js/18.5467434f.js",
    "revision": "6f874b1e2e53c8b855653b7770b116a2"
  },
  {
    "url": "assets/js/19.5624c8ab.js",
    "revision": "efc13d873cf422e10fec9b278e592b41"
  },
  {
    "url": "assets/js/2.26886727.js",
    "revision": "e98bad6588ec9b94479661c98f1d978f"
  },
  {
    "url": "assets/js/20.4bb01483.js",
    "revision": "468c3b6d864d17813371056cf8048f87"
  },
  {
    "url": "assets/js/21.a2501c88.js",
    "revision": "e1fa96b52b3e21a370903d51567d7848"
  },
  {
    "url": "assets/js/22.55a91ba9.js",
    "revision": "d8982f077ab265c517dabd90b3644dca"
  },
  {
    "url": "assets/js/23.1879190b.js",
    "revision": "a5aa49e6c1ed668416f2454aa88bf7b2"
  },
  {
    "url": "assets/js/24.a8df5e17.js",
    "revision": "67ca87785acdd00ba7591159b1bfe613"
  },
  {
    "url": "assets/js/25.7707aa69.js",
    "revision": "38371ac1b436564e00d32573c2e3bf2c"
  },
  {
    "url": "assets/js/26.328d0ef4.js",
    "revision": "e606821997337963ddccd4ab9a94cbff"
  },
  {
    "url": "assets/js/27.6ea2a5d4.js",
    "revision": "2f4dbaba7e07eb1929f4537004fd6c42"
  },
  {
    "url": "assets/js/28.8395abcd.js",
    "revision": "33240bfc09145da49be56461822feeaf"
  },
  {
    "url": "assets/js/29.667efb70.js",
    "revision": "e419232f225d9b98e69131c25528a04a"
  },
  {
    "url": "assets/js/3.c0db78c9.js",
    "revision": "488fb3bb8369365526cfea447bcd30f7"
  },
  {
    "url": "assets/js/30.65f8360a.js",
    "revision": "175f7693d02c6ee58053ac90ee9e4c7b"
  },
  {
    "url": "assets/js/31.6e06eeab.js",
    "revision": "a4b145017259f630a27fcaa624d3918d"
  },
  {
    "url": "assets/js/4.9bb2daa9.js",
    "revision": "639a0959a5700d3597d3922fcaafb2e8"
  },
  {
    "url": "assets/js/5.0cb2cb0b.js",
    "revision": "a99a4de0643bbce8802f432e4aaa94e1"
  },
  {
    "url": "assets/js/6.bb0302a3.js",
    "revision": "9b7eae296811064cdd69c8d4d45ca2ca"
  },
  {
    "url": "assets/js/7.6b3c2e1d.js",
    "revision": "6d7ba6d2b8f6492555a03400f16bd7e4"
  },
  {
    "url": "assets/js/8.be04b5c7.js",
    "revision": "ba773ac9f7bda7b02650c5d9a35a1865"
  },
  {
    "url": "assets/js/9.006f6d81.js",
    "revision": "172a440dd73ac8eef4aff1b03e7aa800"
  },
  {
    "url": "assets/js/app.ff3bb72e.js",
    "revision": "16a191e535faceeee0c3f923651882cb"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "9bb6d398408d3be4cb29c58e72c6320a"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "b1bba6ea764d4a35de4437cb2b2b1e46"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "bd81ea1d29aedbd18058ea9f6324bab7"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "377579133e6e4b43f7f0d393b37ee8d7"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "952ca92d0c9d44b0a6c6d6408f0c70ab"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "d2f1f6f6c73971fac693b80dc788d1b4"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "84f3f1702556f099d808ca3af49f52fa"
  },
  {
    "url": "blog/index.html",
    "revision": "403703c91e3aa8aaec11d903cb76c886"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "53b0f951e31cb3a9118883e634570fce"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "c5c782084711b00ad2689490afe6725d"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "14875d68aae2422c484a15ca3ed8ff5c"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "34a50ae4a55f5420adef0ae5e1596cf0"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "5be07199f755bd11be6b6c4febf64bc4"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "82c25caa803e59249a46dd4fde211ada"
  },
  {
    "url": "blog/Node/CreateSimpleServer.html",
    "revision": "aa5c0fe0825f596f91bc483bdb22877f"
  },
  {
    "url": "blog/Node/index.html",
    "revision": "7f6366d29ea339bd137b9463c547d315"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "7f64991d3f39058a6df3e3f814c30bef"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "8cf6c26cdc1af2d06609436dc890b915"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "4eb013ec3f4cc68221854ce703007aa0"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "ac3abf0fa9402d3055691cf8a65e48b1"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "a04f5a72f3d7edb8494f5c5e83ba7d28"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "1bca9f2d0ea07a20a302b19089ec87ab"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "b58404306b96077b5410e4798b6a44fa"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "b25a18173c9aa5d2b2cfd0e1ff7acf0f"
  },
  {
    "url": "logo.jpeg",
    "revision": "4fc13ae88283c1e8e3ae5f8ea76ddfa2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
