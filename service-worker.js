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
    "revision": "aa25e99f72e9c78953eabba70da56bf8"
  },
  {
    "url": "about/index.html",
    "revision": "62bfbb1bd89587eed5fb4d25233bd266"
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
    "url": "assets/js/19.98421e9d.js",
    "revision": "156fae51df150e5c29ed4b34bcf2b5cf"
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
    "url": "assets/js/app.bf67bd83.js",
    "revision": "3430b08cd93c420d76695a86591185b8"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "0b5b99885e5d290029197f56f7a2fb0c"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "17d80ba10c2cb675da59c11ec356deed"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "68df9eca0ae8dc74384ce2fb54e35e2c"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "87d81f861d0b79b12eadbc1a2f86cd1a"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "411e2a45e4eed44c62b845c1180bf841"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "adb026cabb21889d70e9dbcca6286cff"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "995fd4fb1953f1e0a08cf8d407e8941a"
  },
  {
    "url": "blog/index.html",
    "revision": "0e2c9db826be1d8a6059a5d487c11db9"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "0df4254778824410229d0ed7ac1e56ea"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "c83ba41f745756ac0e8625dfba873047"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "7fa21f157ebd668c4d49cef2c1903b08"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "94ae16bd363b0d4ed736ab374d29608f"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "56eb3549db7cf0f33ae0708862304e85"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "042c6234ea11cdd491d6ecb0e07185e4"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "83bc1231fea08dddfb1ed1aeb0b8041b"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "fd7dc02a06004806506daa356f685a8a"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "b533d50a2f30d1c882aa81f7ffe3d11f"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "6d8d9b748b88bcd1ed9a2c7c70d76d5e"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "1050bc688929b9bfa4a3748548b07f30"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "1bb574b94ffe761955cd04516f689d0d"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "e897b7f1aa7a193b543d6662eb213875"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "46906e1cdecb42daf0e9e3fee15d9ff7"
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
