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
    "revision": "149b8de404345d57893f2e5d1c8b1307"
  },
  {
    "url": "about/index.html",
    "revision": "64efb2be3340e0b2526cce7199abc593"
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
    "url": "assets/js/11.ce9d8d95.js",
    "revision": "ffb5d154fb6ec64cfc47d5e5917cea3f"
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
    "url": "assets/js/19.325b4819.js",
    "revision": "923d4f563e4d1e58d83c15d072347746"
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
    "url": "assets/js/app.69638507.js",
    "revision": "6fd12050fb7a95be0d0ef805f924f26a"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "9effdefe996f33c5dfc368272057dd6b"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "d42f66ffd435ffedd2e1c2e7db4703dc"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "07d9de8753e48c7c44fc8bd5cbad36a9"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "a47f075678c50fe593ea92b231449140"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "ffb66396fd3cda8fc51e373ba26b2bbe"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "315b80de17ba9c861fad9b332fff45b3"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "66510889d95e5d1e2c7fc384ab6d094b"
  },
  {
    "url": "blog/index.html",
    "revision": "89a75337dfcaeff70b871260cb1ebd7a"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "917675b3ed7d1e73cb5ef887e1aba874"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "3135bde5a427d1019c6d1321e0a5fb9c"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "f45aac154fc026c091aca38dbb2566e0"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "1ea7bd39997a53042c77e33bcd29622e"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "3489f6c00bc0e43320365dcc6f5e2755"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "1f693eee01626adb3406226894e468f2"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "61d76696b378fde9f5029876f70d19b9"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "805606c9e112a114e6e799a28737ffac"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "ce8c2f5f2bda18b3c6d27170e1f531a9"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "444517923dfc6657bf6864f0ba20c6c4"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "fa208e1bd4442f11993918c47437c4d3"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "3c0f1a7a32e102d4144b3d9732f4dca9"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "7515a6f98667d28e2c377086cef394ad"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "3cdf47908756724061ff9d08bd6320a2"
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
