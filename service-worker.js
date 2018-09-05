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
    "revision": "df6314391a6b3998a02c06238c62dd70"
  },
  {
    "url": "about/index.html",
    "revision": "c923d6637628cb346f4ffc45ec711f8b"
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
    "url": "assets/js/22.a3c4ffca.js",
    "revision": "7eb27ca79768bf03d69cc7baa2852c5f"
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
    "url": "assets/js/app.e091e16c.js",
    "revision": "88c30be98d1ab9b5f03767f9d5fa91ab"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "cf93d77453de87a764064b605ce0207e"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "580f9fd1a8f3cfb36ac45f352fc5fc97"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "5377dd1422f3b4fe62a5ce27d8a9ae7d"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "e114772624730cd6908c18f5f1be280b"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "5e9fd4a75090b896dfaab67e52f62c73"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "6e6221668b8514a890693f1fe90a6760"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "1f748499ff4347968042a01f5f4d2c88"
  },
  {
    "url": "blog/index.html",
    "revision": "aa21ba6c42004253599f6fb40e865b34"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "c924654146e40842ab7433089412e5ef"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "09fdc1b2eb77ff95c4ec594b339462c2"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "90e6aa59e56c47b6d9d33e549a1f4252"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "f7b111fefee8eacda69c9adf0aa64b74"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "d28a45438506c130bab22e36f09277cc"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "3c61612110aaaaa179610a3860c875c3"
  },
  {
    "url": "blog/Node/CreateSimpleServer.html",
    "revision": "5c4e578ec8d9cf928b0c0c0ef946f40d"
  },
  {
    "url": "blog/Node/index.html",
    "revision": "b6755987365d2e9593e2caa558c3010e"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "55f3c5ccf4915edbf1fc26b91df34ccb"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "1114d891e6192c6f907815aed2eb0cfb"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "714bf15aaf6f0487f25d75f11db90945"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "a5c36f664107b6d6c08007971cb13f26"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "6267455988374ebbbfe26a68d3847f6e"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "3db2d1e31b98353567554a410d827ae8"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "c1d2ccae3598a842ca2ec1c949ebe9b8"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "0c54a44ce873ab2e09de182d41a8595c"
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
