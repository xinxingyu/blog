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
    "revision": "c48356c14cfd324815d666d403dbb494"
  },
  {
    "url": "about/index.html",
    "revision": "fc04db384492cb1e8d8486bf3e0bb251"
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
    "url": "assets/js/app.ca96fac3.js",
    "revision": "4076908f73e383981fae76eecaa7fe7e"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "94e9cd567f9bd15631e77efd0c8146b6"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "1eeb3f5f85edfb24a75ac7cf6c1f94a7"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "b78c44345f1ade1e817ffe2b426445ab"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "b23b4baa4dcf5d5737338aebe5563b53"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "190044bc93fe082533d1e3e8d34870b3"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "4d48a7892070902755eef8bafca64ef2"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "ce26ab880b7690b4fffd176e6d8042fa"
  },
  {
    "url": "blog/index.html",
    "revision": "a51f1600fbe83fc23fb47b34dabd7592"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "078a511e93023db091e3446c7ffef114"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "7ed43305b52944d534996197e2bc28b1"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "94df3a29067991adca7290148a6bf132"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "8ead0061c6fe17f8bb3b0e28e09c710b"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "13dd9f4f40a53d84b19946c49b24a9b8"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "8373a49f8073280fd98c679e6b240f11"
  },
  {
    "url": "blog/Node/CreateSimpleServer.html",
    "revision": "e9e6dfaae65d37a5424f9081195f9e11"
  },
  {
    "url": "blog/Node/index.html",
    "revision": "216bca0d626bb34e88b213e001d4bc1e"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "87fe129d9ef23b634565d311f2afb612"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "9758a898d47f37053264d69cbc0039e5"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "a821a7fbd2972c41685db8930c506605"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "4496456cc272f46ba52a8a856f69ede7"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "d83b3e84ae215794ec8fd6215b8873ad"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "3076a8a7f572192e9e9e39c13a26fa83"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "8200a9443d1508cf6e70b7be8403c1df"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "928f27bbcdd23dbf453763db82787db4"
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
