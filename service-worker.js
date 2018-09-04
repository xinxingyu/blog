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
    "revision": "7188d4a2e3aa5333f067674d4f7af394"
  },
  {
    "url": "about/index.html",
    "revision": "f358b606d8bc3f2b6d7c52b839f721d7"
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
    "url": "assets/js/19.73435620.js",
    "revision": "c2879533116d4e25820cd458859a9df5"
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
    "url": "assets/js/app.6e6395f2.js",
    "revision": "8a05e3f0e9d4688a8ad541613280d299"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "b05a34789c630f6e9563b63884be4055"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "419782fa8ecd4f407a486342f67e26bd"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "23fc3ec86694987174ffbc66f70f98c4"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "0793b4ac6bd74bd076241e328c3dfa61"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "10ef8c18241d8a28561fc3ccc29ea004"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "2bce9cd0fb51003c9dcd09a223967852"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "1e4008c00b526fde2c1a1459e42ae626"
  },
  {
    "url": "blog/index.html",
    "revision": "0d54a29c67362a8ada9c5259b15e39a3"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "c595ad80b581e432276ae314f28c5e2b"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "fe38b14aea2ea3a47bea23d4e4d598d7"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "0fbb7e4ded812d3edb7e9e2308d43d43"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "52a8184eb4b9d678df438994fa2f8be5"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "d26675c48d3a9dbd8e7a4a9a4f3e284a"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "675cd6eaa2009989095ea6c7ea662242"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "7c4b1942519d440eddaf8270ae8e7a73"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "7373a343720d97b8d6540921091ffe0b"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "9216e7b6fef41c6ecd995ba1d40d36e1"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "8d7eab8459ab52a41bcc279a1a34ee30"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "b60c79b3130d4f8d6bcab6ed32b03ba8"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "51d9fff3cf508e9ac3e3d05cd85e1ed7"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "63d21886f57417097de5c7c2806fa06b"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "136ae7f375163d72f79a6652ef2f5135"
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
