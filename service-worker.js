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
    "revision": "2989b8b03d100e756db457491d8b31fe"
  },
  {
    "url": "about/index.html",
    "revision": "d67b266d7082cdcfdc454ced215bb35b"
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
    "url": "assets/js/app.eb283c82.js",
    "revision": "a4caf205006181f14dd2f53daa300004"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "89d6154bcb112c212a130d66a125d6db"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "194cb44e1466562402f1e0f57db9db15"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "871e15c6b50ec0441ffa9f91055cdcf9"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "3864caa4b0082c9567b4cb3f5ebfe4c4"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "3a44d9dc70a8682f521cd31b72cabd9e"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "52d91cecfda90252cf5705186fb7f614"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "8e014466bc2d544c7c51425ad468718d"
  },
  {
    "url": "blog/index.html",
    "revision": "68b7eefe20085c39bb00223103284ee2"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "6b3af39a30b3a59d671c779c7f7f43e7"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "12d41f41c03ec4a74bc0899a1107f57b"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "92bca1e27ce173fa7269fdbd89aaf7b9"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "0bc1b384b1489e187c5ed2591c48d467"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "7a44bfa52527ae45bc85dc6bc09a6ee7"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "dec15a7d93e9eef66cb2ac8280f3cb7f"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "bc2f137936c00875e70fcea188828755"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "4f9f0728887380e1f354e0cb6d215cbe"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "ae1f24508b42df78c7e76a644df2b1b8"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "25fe95775204818da4ae08ab44561edd"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "e6a694880d6011dfb420267a8e9bb133"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "cd3e70c1bd0475a1c60ccd15762dc4e8"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "225ce4c45943e594ad3dd1e9763f3a9e"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "59b51c90f102115463a1b0375f1169fd"
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
