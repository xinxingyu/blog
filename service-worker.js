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
    "revision": "52e4a5f60c9a0e036610aa2261302ebe"
  },
  {
    "url": "about/index.html",
    "revision": "9c3d67f93a0ed5e9017b1973dbe68469"
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
    "url": "assets/js/10.78442569.js",
    "revision": "5a2bf6a2f05646a7bb4b5b63d2b4ac4b"
  },
  {
    "url": "assets/js/11.d2c5ab74.js",
    "revision": "b7e9f66ed16c825dc15db680acc3123c"
  },
  {
    "url": "assets/js/12.6b312ca1.js",
    "revision": "7b4019e2e40df838c9805dd371529248"
  },
  {
    "url": "assets/js/13.ef0feb5f.js",
    "revision": "bcfe04082903cbb522f5f83232abf16c"
  },
  {
    "url": "assets/js/14.21680357.js",
    "revision": "7b6a3cda75181b2c11d82738820544b1"
  },
  {
    "url": "assets/js/15.6ce858bd.js",
    "revision": "70c777c0ff6152dbc4985033baf1fa2e"
  },
  {
    "url": "assets/js/16.0d8f6cd4.js",
    "revision": "3faf595ff75f898addc91df8208d96b6"
  },
  {
    "url": "assets/js/17.6d472397.js",
    "revision": "cd10f6e156539bcaa3745845514d0934"
  },
  {
    "url": "assets/js/18.b017cca2.js",
    "revision": "b3d88fb925f4bcde9d1ec8176a043a24"
  },
  {
    "url": "assets/js/19.ca159ce0.js",
    "revision": "3353a90ae23cee7aa1dfd4059ce75940"
  },
  {
    "url": "assets/js/2.26886727.js",
    "revision": "e98bad6588ec9b94479661c98f1d978f"
  },
  {
    "url": "assets/js/20.466c89ef.js",
    "revision": "eba3eb28910df35288baa8d66345e7c3"
  },
  {
    "url": "assets/js/21.13352d58.js",
    "revision": "70155c9842ce7bb4b1dd3579ec0b4160"
  },
  {
    "url": "assets/js/22.1289e97f.js",
    "revision": "041d9122f7d2891a48b1e37ed90ac755"
  },
  {
    "url": "assets/js/23.9ee854c1.js",
    "revision": "9c62f16f196458d3759cbf1682ee1f14"
  },
  {
    "url": "assets/js/24.797068b4.js",
    "revision": "20bfbb78726bdd4ec714ee469207afcc"
  },
  {
    "url": "assets/js/25.2bbec29b.js",
    "revision": "03b6c34a26da8c2f50a4f4d7d30fe4bb"
  },
  {
    "url": "assets/js/26.e74f317a.js",
    "revision": "12e100b4712506b80a0175afee50f6ab"
  },
  {
    "url": "assets/js/27.fa514e7c.js",
    "revision": "856fa6b725ed479b535e6a54ea97bfcc"
  },
  {
    "url": "assets/js/28.709a6185.js",
    "revision": "0d333fb74f97c73911fc7f2dae7018ff"
  },
  {
    "url": "assets/js/3.41ae5e93.js",
    "revision": "99688f355928b020bf7a165eb1779754"
  },
  {
    "url": "assets/js/4.a9ee5357.js",
    "revision": "639a0959a5700d3597d3922fcaafb2e8"
  },
  {
    "url": "assets/js/5.0b53a177.js",
    "revision": "a99a4de0643bbce8802f432e4aaa94e1"
  },
  {
    "url": "assets/js/6.2db15a71.js",
    "revision": "9b7eae296811064cdd69c8d4d45ca2ca"
  },
  {
    "url": "assets/js/7.d5743753.js",
    "revision": "6d8028922a66f8af2d2fadedd921015a"
  },
  {
    "url": "assets/js/8.8f2f3dea.js",
    "revision": "4155b33c2b5cd41c4cd7f0be0e0d5fac"
  },
  {
    "url": "assets/js/9.82df7780.js",
    "revision": "621d83948cd9accd6a9f6d9fa5628e9d"
  },
  {
    "url": "assets/js/app.987cb743.js",
    "revision": "dd23e5f9ae7b3c4c9df891ac6ed735c6"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "765ecccd8302c2cf35e7f2d048b2deaa"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "f9a3481a530789c0c6d07d53f7f6f8d3"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "018fcfc0728ee6e4716e5c3791f5e7dc"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "3459a2b690970fa967f78a321d37cb9b"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "d7b4320e94af88c4175180ab2cd2a7ed"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "688769a35f110e289351cd1716c2db85"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "71af6184f46b4aca4e1c132e96f3d876"
  },
  {
    "url": "blog/index.html",
    "revision": "896f3e19b5824ad8b6b037fdcc282155"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "2dea5c06eea5248f422f31c46df2c8b9"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "567ec6fb1940eaf50c1c4e902d7af49c"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "9821dc35f9cc5dbc5bb27b6fd9511826"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "2d09ed9f4715443ca142de1cd7810cb5"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "55ff1750a10883b87509498d1ae6a404"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "ffba9db07cde8896803df15713085161"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "f12b960612d22654502950d5419c7d5b"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "79455216ab3e157b51430c98ce510195"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "1b9f6f5ba5d0ea122e7265c10698aa78"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "cb7c53acbab5965c376052466346a9da"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "c8cdb15f5ab124c9d2a1a2a9a838e8a3"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "3683d73b93b2a652b3b40bbf2caf1cad"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "e28d2d9651ec62eeedb86d7861cc06db"
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
