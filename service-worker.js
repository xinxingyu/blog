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
    "revision": "6dbc62f54ec01f4b758781c479a18a94"
  },
  {
    "url": "about/index.html",
    "revision": "0e239a992a389af70063b45b4eadf8e7"
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
    "url": "assets/js/app.5a479362.js",
    "revision": "e360a1f5fd7dc04c7bae08ceb32430ca"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "c84395f59bfad4c6ad55d5c1de0e9c87"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "af6f199d9a636404e95b482491764a58"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "2eaf1b5ccdb845e23856d517710e0133"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "faffed25b327cdbfc8981bfb1c80db69"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "5e1ed7065d8beff774610f4416eb8589"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "8d4c8fbe934d402a16c02f9c52f73be7"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "90feccd7f6b4812acb11fc122b0c230e"
  },
  {
    "url": "blog/index.html",
    "revision": "6290042e4d7bc326586661445c3ef101"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "9dcd1dc67ae142e4724a7a7d7123befd"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "70faf72156b4e81a5a4ddb35c9e4461a"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "9842906c883f30eee0f1b5b3fbd70852"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "d83f9ecd9c57dc7d972c35c0fba19970"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "76862077eba2de307635958e4ab2e6d2"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "8663c0176ea3faa7d46fe7fe60bf9145"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "c04a405cb4d6e8a9a870deefd5f7e436"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "20e9b5d60f403d86808fe098322bbd1d"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "6e8d700f75fa238056a82531fc4c4bee"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "2e196ebbebbfaf9515bc1de4cbc1a8e9"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "48cbf8f05dd70292f7fe37e49cb32434"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "edcbb9a0840b461f36a0c88a180036b4"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "6b6c3bb52915e10ea2aa6a532daac406"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "c15b3f37aec82c061498d0aaf8173137"
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
