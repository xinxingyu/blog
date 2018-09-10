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
    "revision": "de7931d4f2b66a2cf60467896a3510a2"
  },
  {
    "url": "about/index.html",
    "revision": "b52ac2fded36278e8fe1277b98e39882"
  },
  {
    "url": "assets/css/0.styles.ac67d5b0.css",
    "revision": "850b85884b5326d2694fc65fa0f89cdb"
  },
  {
    "url": "assets/img/ast1.8aee8887.jpg",
    "revision": "8aee88876d28e87049d553ded671ac97"
  },
  {
    "url": "assets/img/ast2.eb2e535c.png",
    "revision": "eb2e535ca13ee4ea0a54fa638c03450f"
  },
  {
    "url": "assets/img/event-loop1.b9e7e75d.jpg",
    "revision": "b9e7e75d159477941072b12a3c78f995"
  },
  {
    "url": "assets/img/event-loop2.da078fa3.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "assets/img/event-loop3.20c8ec0e.png",
    "revision": "20c8ec0e32db9d302955408622f7c91e"
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
    "url": "assets/js/10.a593df3c.js",
    "revision": "a1d07dd240514b836739a8683ede4c19"
  },
  {
    "url": "assets/js/11.db81d8a1.js",
    "revision": "7193b4b1b537ca7508d740fd94e53725"
  },
  {
    "url": "assets/js/12.2646a010.js",
    "revision": "552e1f6ac48190a1b97ee2df8c3d16ad"
  },
  {
    "url": "assets/js/13.f0837add.js",
    "revision": "12599cda6ed9d1c647f96ca88f2eabe3"
  },
  {
    "url": "assets/js/14.9c879b0c.js",
    "revision": "3b065f6118d57ebac4c1ee968feb26dd"
  },
  {
    "url": "assets/js/15.40f2cb25.js",
    "revision": "4cf6aec705f8f217525a83040c7bc5bc"
  },
  {
    "url": "assets/js/16.cb9a5deb.js",
    "revision": "be83ee3eaadc3391b724ab1e19238218"
  },
  {
    "url": "assets/js/17.19c4bc66.js",
    "revision": "c3b2e01ae7b5b8a31740962fa1cf8d88"
  },
  {
    "url": "assets/js/18.2a72da66.js",
    "revision": "76c875472e5d0f9356c74e0cee5dbe0f"
  },
  {
    "url": "assets/js/19.845877f0.js",
    "revision": "b8a0ee03c6b48f7fb2eb689cd963f4e6"
  },
  {
    "url": "assets/js/2.3c94af2b.js",
    "revision": "f06b9dd5d4781c91ca628680e222aa87"
  },
  {
    "url": "assets/js/20.6dea87c8.js",
    "revision": "6102e0b4c2af71711eab94e7b0875ab2"
  },
  {
    "url": "assets/js/21.b52f25d9.js",
    "revision": "9139d32758355867da2a5afc0b6ba636"
  },
  {
    "url": "assets/js/22.0484fad9.js",
    "revision": "fc01c0095075aaf63cc579826a8dc138"
  },
  {
    "url": "assets/js/23.e53f936f.js",
    "revision": "728a065962ff6c97fd3c1ef39bebd0a4"
  },
  {
    "url": "assets/js/24.a464e9e3.js",
    "revision": "109580467abf1438a6266611e1244a32"
  },
  {
    "url": "assets/js/25.2ebfa9b7.js",
    "revision": "6f8f31aaf993ed6e7b74a58dea09918c"
  },
  {
    "url": "assets/js/26.934b8b2d.js",
    "revision": "9253856cec92d34de3332e8acc0b6866"
  },
  {
    "url": "assets/js/27.f3277676.js",
    "revision": "b2ecc2c4449c6a494a22a897fc37288f"
  },
  {
    "url": "assets/js/28.2fac4715.js",
    "revision": "a10e176da60770cd4634014b49c7c5c8"
  },
  {
    "url": "assets/js/29.738cc229.js",
    "revision": "daebbe7a6dd170636e73455cfdeb3c14"
  },
  {
    "url": "assets/js/3.a93a7d26.js",
    "revision": "a4fd8b6221ab5ee11663873d0a215450"
  },
  {
    "url": "assets/js/30.7885ef62.js",
    "revision": "12c2dd38db579504cd31d373324e8564"
  },
  {
    "url": "assets/js/31.066680a1.js",
    "revision": "d7af45dd0114cc79ba9fc4d3f7fcdd77"
  },
  {
    "url": "assets/js/32.eed45cce.js",
    "revision": "70f5eaa5aeaff2bd31671a91d9b86ace"
  },
  {
    "url": "assets/js/33.2b585fa8.js",
    "revision": "4fbd590725139dda48724c1c9a5c2ade"
  },
  {
    "url": "assets/js/34.ec23679e.js",
    "revision": "122e82476fd5f9d56f8706cc7ce213e0"
  },
  {
    "url": "assets/js/4.26149ccc.js",
    "revision": "15da9e12b17ebee459908a0db620e957"
  },
  {
    "url": "assets/js/5.0cb2cb0b.js",
    "revision": "a99a4de0643bbce8802f432e4aaa94e1"
  },
  {
    "url": "assets/js/6.9c905d89.js",
    "revision": "f27ac545a1ebd0ae45fc7fcf15ee0c58"
  },
  {
    "url": "assets/js/7.b1c5df08.js",
    "revision": "febcb76bf12d07fb500bcf25046edafa"
  },
  {
    "url": "assets/js/8.39ffc52a.js",
    "revision": "5bed3feef3d91709e84a5442b2933d92"
  },
  {
    "url": "assets/js/9.b320c79c.js",
    "revision": "b21e4e041e63b95fab4dc9f20a6b2582"
  },
  {
    "url": "assets/js/app.43137687.js",
    "revision": "a3be2df6da84963f2f89d04e9c1fd259"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "b19e8b60a2974b538c548a1793be6214"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "c2662fa21debe9aacd433648468d618a"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "b6a7553c70a5c1f51f5cc6b4a200a8bd"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "643763f2e6abd9969146b3550f803659"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "0a5682b3ac5a48add25e25b54dec3433"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "687b10c144c88da361c23f5fc04af40a"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "2954069a69d62faa62ab19ad48feb92b"
  },
  {
    "url": "blog/index.html",
    "revision": "ba62d0659111b516825a4520bf33f3cf"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "74c44d1024481516ccec5ceac1e4c01f"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "3e8a3c8a69bd3acf52855efa3bbe57e1"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "edc23864a1ece2b751dc4527ed7fe935"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "81516bac5c60be13607c3e465ee714be"
  },
  {
    "url": "blog/JavaScript/eventLoop.html",
    "revision": "887b9e394e87d76dad64af7836dc3fce"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "77e7326ba6b2ada6adb9267f30723c34"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "db1b0a3d11217552b922c78e09be794d"
  },
  {
    "url": "blog/JavaScript/my.html",
    "revision": "7160e0829be54f3221e28c14ef09c169"
  },
  {
    "url": "blog/JavaScript/parsing.html",
    "revision": "6c93df1c9d381174566a9948c34a160d"
  },
  {
    "url": "blog/Node/CreateSimpleServer.html",
    "revision": "9413a82bfa0e9902ca32e848c20570aa"
  },
  {
    "url": "blog/Node/index.html",
    "revision": "783a3d893a099617990e0b5db749e306"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "87d9fbc1bab5b1782a27435b842694e0"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "f6bd6ce4b0a6ee52660ebab9f75acb65"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "564120f2c375b21c45bfa2e967174dcf"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "5bcd7901895d4e7f5fa79c8b0cd8fd18"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "5522b2ae1233ded134c79341601ea337"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "aa91bf2c3b51d0e0a1e3b2000da815d4"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "5f074536c3cb117667d7f048ffd1ce27"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "136e0f214ffcdf3921e04c7dc33fa0dd"
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
