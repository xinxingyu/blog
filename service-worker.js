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
    "revision": "ac615d3ff1f13b36fd39677d07f48802"
  },
  {
    "url": "about/index.html",
    "revision": "fdd03d1ff1ba9b84fa245b28cad9b3ac"
  },
  {
    "url": "assets/css/0.styles.135557ac.css",
    "revision": "16bfb5638e27d5d3a2b53b9bc4b4bd0d"
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
    "url": "assets/js/10.2ac396c6.js",
    "revision": "666698358af27711959564c9b0bd5e84"
  },
  {
    "url": "assets/js/11.4b651826.js",
    "revision": "afe4b941f8e4d1f87932f7dc84f4ee8e"
  },
  {
    "url": "assets/js/12.8487b97f.js",
    "revision": "4f3b062e29871aeecfe8aea2631293db"
  },
  {
    "url": "assets/js/13.e77a3946.js",
    "revision": "b55e8bce7ceb381434e638c38a6f5b98"
  },
  {
    "url": "assets/js/14.d5e2923f.js",
    "revision": "042b589dd148113a1053802e2a9d23c5"
  },
  {
    "url": "assets/js/15.8fcdef8d.js",
    "revision": "9abae0e83b541ee4bf633780471d2b35"
  },
  {
    "url": "assets/js/16.b923088c.js",
    "revision": "f9553ff219bdcb309cc743903fcb8e29"
  },
  {
    "url": "assets/js/17.23ea663d.js",
    "revision": "49704e1dfd7e3e2a2331c2aa782086d9"
  },
  {
    "url": "assets/js/18.45a18cbc.js",
    "revision": "bc3508d0969f4b1b6894e90fc2122b2b"
  },
  {
    "url": "assets/js/19.a177b68a.js",
    "revision": "0140ed1ef03253ee1fdb573cf3581658"
  },
  {
    "url": "assets/js/2.474b2bf3.js",
    "revision": "cfad97914d75412873b572d7df030c2d"
  },
  {
    "url": "assets/js/20.2d03c574.js",
    "revision": "695bf17370b849d3337a2a251f52780f"
  },
  {
    "url": "assets/js/21.07cadb55.js",
    "revision": "294c876f7f7a46d767104288b855b9a7"
  },
  {
    "url": "assets/js/22.8fa86e6e.js",
    "revision": "4c7fb3b936ef030b295eda18b8c53181"
  },
  {
    "url": "assets/js/23.4c8f77ee.js",
    "revision": "542c6e9f3dfd4b77285d6b92042554d1"
  },
  {
    "url": "assets/js/24.72098588.js",
    "revision": "ca27a0cc696fe01faa3c81237618e8e8"
  },
  {
    "url": "assets/js/25.092c9dfc.js",
    "revision": "8b853b8d105e180cadb34df1c3c728e7"
  },
  {
    "url": "assets/js/26.69c13e52.js",
    "revision": "a2a395b8a32986a592e17faee36de9dd"
  },
  {
    "url": "assets/js/27.b5fe4b73.js",
    "revision": "d321860f0f7a59380d4c7b173219f90c"
  },
  {
    "url": "assets/js/28.8d1e55ef.js",
    "revision": "ce9a5a08ee21d1cd20b43d3507d6409b"
  },
  {
    "url": "assets/js/29.7db19a0f.js",
    "revision": "c64acfb586d51706817ab9b05b3bdcb5"
  },
  {
    "url": "assets/js/3.794017d5.js",
    "revision": "ca33ec7c34511e54edb9ba1153a76505"
  },
  {
    "url": "assets/js/4.c25fe7d1.js",
    "revision": "65df4158c4719779527353d428df618b"
  },
  {
    "url": "assets/js/5.75df229c.js",
    "revision": "215a1c234634b8e90364052a5a500c98"
  },
  {
    "url": "assets/js/6.c99ec281.js",
    "revision": "46af629fb688369a54ac2460fe0575b3"
  },
  {
    "url": "assets/js/7.e5bf4c61.js",
    "revision": "13e5b1909f94a85d91b44e11ce5d571d"
  },
  {
    "url": "assets/js/8.3a29d256.js",
    "revision": "d9ffffd884c85947fad3048a59b37211"
  },
  {
    "url": "assets/js/9.f4db0827.js",
    "revision": "a73a6e89aaa935a9cd6047bd36df0024"
  },
  {
    "url": "assets/js/app.99e55c7a.js",
    "revision": "465324ae292a5fcd7a7dc428dc792a0a"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "2bf6fe32256149564131885a7eac77a4"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "8915160ed133a0b4c9c9d850f7738857"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "edb82f7c0d340a8101e5e553b2f9e168"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "2b0c49224918ec76d2c5c535e068619e"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "3868e0b44201d44ed25263609f19d595"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "036a48fd270f705a9052de3012773f56"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "20c54e66422ce5e340dee9325d22d674"
  },
  {
    "url": "blog/index.html",
    "revision": "e2d64ba47b22cf50aab4d0339d3d6578"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "628de29d3beb0f0f0100188c3ebf4deb"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "0b3045106de73aec135baf37dd5c010e"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "6b07a25acfad2c106d6488117f1f6350"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "c1ae57410676330de28acdc42c6b8a8c"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "fe1ea99f5d3798bdbf54325aea744c08"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "bc7080ed62797f25394d643051701f72"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "668ae7bcece35dfa8b3489d0d26d5352"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "836c421bd1bab8e07e34cfe3b10d125e"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "cd729f06b72e1cfaa73b2a090844a715"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "ffed254f73b4e9c493c66f8a0a4aa4dd"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "fed26827642c94d5b1ab9941be611e59"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "961006859253882bd312b8c090160fc5"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "1adbb16c4693afbb2b772bddbfb3b3fd"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "edca2bac313117486445b8d8a564a980"
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
