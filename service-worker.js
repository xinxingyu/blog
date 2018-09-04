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
    "revision": "17bc8cdcaa99e7b50818c571f14eacda"
  },
  {
    "url": "about/index.html",
    "revision": "de0d5b9ce35f573571fb38f42e2ce93b"
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
    "url": "assets/js/19.2a777f92.js",
    "revision": "2c91585db3722837c2a0159c045243e4"
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
    "url": "assets/js/app.26c9593f.js",
    "revision": "114b112a448d42c7b2123a582056dace"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "9826bb17db19564c9b89a1147dcb40c6"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "a143fe99bd506e733e0af7a03e810aba"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "68f90164adb264841788727e900599f3"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "1a3bde066d4165690d546d5ac7f574aa"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "34b4a8ebb8c32d88ddf94510d850698c"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "158f4f4061d0065c743128cad4d66015"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "deec54e78991224931b98493aed50329"
  },
  {
    "url": "blog/index.html",
    "revision": "731c49b1b5550eb5cb656dd0845fdcf6"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "33a2a076c8c374cb2c14724798c964c4"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "19d73e5ef88824af05d6df1bcf7c405d"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "8d368b10f81c159d22b7ac40fd3750a7"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "2dbedec3a0249b9e42ae083a3e4afcc8"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "d983422671ae2ca32e03ad1f1f331a26"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "46c48c36ac7c82a11e792f2c9145d2a8"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "8590e83d0bae5b25a2397ee97151e3a9"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "4dce5c70a2137fa179a86f13370e8ae1"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "cf0c585fb762da2a78bcc079b841468b"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "ed27316c11d2e273b1542a7f56819750"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "52b4506fa7b1cffebc6ae574bf49adaf"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "d16f60b25ac3c2aca498f1448beb3e50"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "6b9da3c204fd80da0fc3a385df57c38a"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "2de2558300cba928fe74e5ec5b27dcdb"
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
