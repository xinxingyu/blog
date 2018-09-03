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
    "revision": "0f9ed40f161c5534f16eb5f36c7f2d42"
  },
  {
    "url": "about/index.html",
    "revision": "1ae76f2e4a7b44e3d0e91a0326af4b43"
  },
  {
    "url": "assets/css/0.styles.441a5a3f.css",
    "revision": "7f4d176f8b729785c5e3aaac09d04433"
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
    "url": "assets/js/10.49768920.js",
    "revision": "177d70c49377958e090b6095f4ddc57d"
  },
  {
    "url": "assets/js/11.e64c64fe.js",
    "revision": "18577e741c75cb937a696be5d201b001"
  },
  {
    "url": "assets/js/12.c930946a.js",
    "revision": "4ee3dbf0c3822be35def2847d5df4ebd"
  },
  {
    "url": "assets/js/13.69653fe4.js",
    "revision": "0e1f84c60c1300a317367a675cf7ed1e"
  },
  {
    "url": "assets/js/14.93aafba3.js",
    "revision": "c12ab873d7ece918f1a53eba4b90fb2b"
  },
  {
    "url": "assets/js/15.8e1806f6.js",
    "revision": "85b298e274f759f7880b1edb54158a0c"
  },
  {
    "url": "assets/js/16.d32c2936.js",
    "revision": "192559f557864b963289580ef9153ef3"
  },
  {
    "url": "assets/js/17.a9a399bd.js",
    "revision": "5021679fcb42d148c388a3629e4733c9"
  },
  {
    "url": "assets/js/18.3347ce2e.js",
    "revision": "584c3d9148a91db6f00c22c0d0eaa83f"
  },
  {
    "url": "assets/js/19.8b631e5c.js",
    "revision": "e3e55b62dfd3157000c85cf7d1597eb4"
  },
  {
    "url": "assets/js/2.26886727.js",
    "revision": "e98bad6588ec9b94479661c98f1d978f"
  },
  {
    "url": "assets/js/20.599eb0cf.js",
    "revision": "4afc69d8b44a03ffa8e5285b288a64a0"
  },
  {
    "url": "assets/js/21.5147bfb7.js",
    "revision": "61e51bbf3821eceecc0368b666739826"
  },
  {
    "url": "assets/js/22.1fca910c.js",
    "revision": "03c53a7480e86556bb22e299f324fcb3"
  },
  {
    "url": "assets/js/23.bc67bde7.js",
    "revision": "5f033877c9d6644ec932bffd133da7d0"
  },
  {
    "url": "assets/js/24.0ca4dd56.js",
    "revision": "1054fd1e95bb7d38093ece2c4d1649dd"
  },
  {
    "url": "assets/js/25.5f79691e.js",
    "revision": "add61abeab800a2e94bd36df74f006af"
  },
  {
    "url": "assets/js/26.f6dd54bd.js",
    "revision": "ba1dfb431ab5b877d6a4844e2ffd5425"
  },
  {
    "url": "assets/js/27.311f9fb6.js",
    "revision": "94c9b5315dab519529d31bc2c0406478"
  },
  {
    "url": "assets/js/28.eb9e5eb3.js",
    "revision": "d040c2e779a4fd35df8921f2c59e19bd"
  },
  {
    "url": "assets/js/29.a2b66878.js",
    "revision": "d54fc791fee25a9535083defa2da4699"
  },
  {
    "url": "assets/js/3.132b0690.js",
    "revision": "835e3ad87f3b1b8abfb1a47bd4d6ae02"
  },
  {
    "url": "assets/js/4.61095209.js",
    "revision": "7c4635ac007e57096410158ed9295cf3"
  },
  {
    "url": "assets/js/5.0cb2cb0b.js",
    "revision": "a99a4de0643bbce8802f432e4aaa94e1"
  },
  {
    "url": "assets/js/6.95ec952c.js",
    "revision": "44cd405c672ec1b6fb064c92cd658000"
  },
  {
    "url": "assets/js/7.95bd9774.js",
    "revision": "e4adab838fa7611752eeef27d73d366b"
  },
  {
    "url": "assets/js/8.80fabe47.js",
    "revision": "ff146001eeae341c9733398a69d56068"
  },
  {
    "url": "assets/js/9.680125a9.js",
    "revision": "385b9411aabd6cb441c961349d4f745a"
  },
  {
    "url": "assets/js/app.8f5a6421.js",
    "revision": "f25c223632a82db71c49b221e2fa3c31"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "bf542787cfad8acca97f69277bb20f37"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "e0d07ca79471ad28b353d126f3ce910e"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "22e3fd08079b1d4de011fbb6958a9d77"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "2a50e25f6c00270446a09117b147e1d6"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "1a42a8e5afef0c5700b4b4854253d9c8"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "becb0d35a031f2adba9da0b9df64377e"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "05c39b855a7ce05821bb5c86d507fc38"
  },
  {
    "url": "blog/index.html",
    "revision": "a3803274d3a2f2399f0d74248fa8ed2f"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "9b19f893fd91d83e10c2433419195c33"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "3e526641c29a73f576e95e666ec5a2a6"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "7c1df1e2d8ae37ea9976f3c5e9d56e0f"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "ab0e2bb8f9b0f5645154ff1f10da124d"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "42c0737567268a43da3c8ddfb989205f"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "d4065bce2f930a4ad46e4de7f5af2166"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "ca6a0b10800a0f11d9f789a1b7b85a3c"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "91cd364599136b69f53eab4590fe0a1d"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "01ca8bc7f17820824067bd0570a039e4"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "6efc4d7fd25d9b32ddbb2c0d037d69e6"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "86900f2329742445d44a39f76fcf0648"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "9a3f6992665fc8c5dba860b46cb1cc8d"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "c3a247f216a148719f500f26bad59a74"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "28caacd7a26d427daa7a19b5abec094c"
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
