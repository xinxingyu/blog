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
    "revision": "dc0a09482e791c89e694f2238500768c"
  },
  {
    "url": "about/index.html",
    "revision": "d6893cd9cadc3147a470034d6c6cc2a5"
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
    "url": "assets/js/10.a2a37eeb.js",
    "revision": "87de7d301aff784d0e6ebc9bda7e6f69"
  },
  {
    "url": "assets/js/11.5b457141.js",
    "revision": "a6ec5daa10486a50fcecfc105876e0a6"
  },
  {
    "url": "assets/js/12.2d9953e7.js",
    "revision": "ffa329bcc282e3a73bec60caf51625e2"
  },
  {
    "url": "assets/js/13.76bd29c6.js",
    "revision": "4a1f97c4e24d79accc8d40683d40a184"
  },
  {
    "url": "assets/js/14.c70ecdd4.js",
    "revision": "661fd07e66fef367073e01e5eb186fe2"
  },
  {
    "url": "assets/js/15.fa13c2f6.js",
    "revision": "da1b7d3915d86c39d98328fd87ef279f"
  },
  {
    "url": "assets/js/16.db2f41bd.js",
    "revision": "899d91552581646086f4a929ae9daf18"
  },
  {
    "url": "assets/js/17.a9feab48.js",
    "revision": "1bb5cf5df440009785f2be2e2994b127"
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
    "url": "assets/js/2.84f1f298.js",
    "revision": "915df94d6729e94d2a0b5e1bc3153480"
  },
  {
    "url": "assets/js/20.b5151476.js",
    "revision": "3cdbf00ce70aed8007b2a4d299604169"
  },
  {
    "url": "assets/js/21.dc9bbb30.js",
    "revision": "ae95aeb3e87ef85e796826a6b2a8e533"
  },
  {
    "url": "assets/js/22.42144766.js",
    "revision": "03b1932fe0abe484ca3270564b6b81e9"
  },
  {
    "url": "assets/js/23.9b48f927.js",
    "revision": "22233d383362e5be88e6c27580957309"
  },
  {
    "url": "assets/js/24.9c11fee0.js",
    "revision": "3ac184e1e6226f955f1878f029620528"
  },
  {
    "url": "assets/js/25.5d8c7d20.js",
    "revision": "c2fae4e16f9a222b0852195eb7fdf97e"
  },
  {
    "url": "assets/js/26.290cad78.js",
    "revision": "ddd555f8ac7b57f15971fb95e0b56d05"
  },
  {
    "url": "assets/js/27.d0b01dd8.js",
    "revision": "635971a36730eb3871b292d727397256"
  },
  {
    "url": "assets/js/28.9cc4be70.js",
    "revision": "79ccee7fef18c7a87cc01f62ca188e00"
  },
  {
    "url": "assets/js/29.bb2c1fc4.js",
    "revision": "d4b8f2a6f39baeee0c455207de93daab"
  },
  {
    "url": "assets/js/3.30b9a9c0.js",
    "revision": "bcd4adabce92a22ed61352b6594a995b"
  },
  {
    "url": "assets/js/30.102053a7.js",
    "revision": "5feb71dd95c40ca3a236a5890fd22e2d"
  },
  {
    "url": "assets/js/31.61f814d1.js",
    "revision": "35662e7fe89ee2416f184225a93739f5"
  },
  {
    "url": "assets/js/32.ac3751eb.js",
    "revision": "73a28bac511ae6f0a109aba4de1b485b"
  },
  {
    "url": "assets/js/33.ca96c277.js",
    "revision": "222234512ee68533ba1b6262f2f8af25"
  },
  {
    "url": "assets/js/4.34c006b8.js",
    "revision": "4f43662482ad16c69e2872af9e494ff3"
  },
  {
    "url": "assets/js/5.0cb2cb0b.js",
    "revision": "a99a4de0643bbce8802f432e4aaa94e1"
  },
  {
    "url": "assets/js/6.a1049908.js",
    "revision": "8cc40449447eb68126757e1053637612"
  },
  {
    "url": "assets/js/7.cb21d43a.js",
    "revision": "1b1ed0a5ba92e03df8958e004a219d16"
  },
  {
    "url": "assets/js/8.62c6b643.js",
    "revision": "afcf365f56193cbae3f5251f16631b86"
  },
  {
    "url": "assets/js/9.36a47047.js",
    "revision": "c022b5649bab43da7d99985c72b38458"
  },
  {
    "url": "assets/js/app.41f129c5.js",
    "revision": "5ec428d770f0aae2a50f7ed35e90974e"
  },
  {
    "url": "blog/CompilersPrinciples/AST/intro.html",
    "revision": "52ded5f3ee11ff9da42daa68119b6236"
  },
  {
    "url": "blog/CompilersPrinciples/index.html",
    "revision": "05d66ec1292e6ef59b83deed19f743c1"
  },
  {
    "url": "blog/Css/a.html",
    "revision": "4bb91591e16d528afe39a82abb4216cf"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "760c106563377c255ee3a1b14e161d13"
  },
  {
    "url": "blog/Frame/babel/intro.html",
    "revision": "eae440ab7d215e6c36b9c1aa05c08d37"
  },
  {
    "url": "blog/Frame/babel/plugin.html",
    "revision": "e0c14d188b212b7a390e449fa16c2b54"
  },
  {
    "url": "blog/Frame/index.html",
    "revision": "f7a22609e1443fc1a7da39f43423e81f"
  },
  {
    "url": "blog/index.html",
    "revision": "0b63d35ca15a5c90a30ffa8242c70e3c"
  },
  {
    "url": "blog/JavaScript/currying.html",
    "revision": "ee2da20e3fa547e425093bfd01287714"
  },
  {
    "url": "blog/JavaScript/DesignPattern/FactoryPattern.html",
    "revision": "8ca3dbc01e8d7f6ec23d1ca24f001017"
  },
  {
    "url": "blog/JavaScript/DesignPattern/Singleton.html",
    "revision": "690c22f206d30e42abe2a35316baf6fa"
  },
  {
    "url": "blog/JavaScript/ES6/async.html",
    "revision": "7280706649ba7457e16b3fe1ec6bfadc"
  },
  {
    "url": "blog/JavaScript/index.html",
    "revision": "d768d5cdf08801e4230ab87fd459066e"
  },
  {
    "url": "blog/JavaScript/inherit.html",
    "revision": "2dd61fc094392d289f7d8825e227276f"
  },
  {
    "url": "blog/JavaScript/my.html",
    "revision": "e9aa232e29230d6b1da1216d6aa0fa9b"
  },
  {
    "url": "blog/JavaScript/parsing.html",
    "revision": "82422506011af1e54e999417bcef1f94"
  },
  {
    "url": "blog/Node/CreateSimpleServer.html",
    "revision": "d746decd28ac4a22abf7dad1032c8530"
  },
  {
    "url": "blog/Node/index.html",
    "revision": "63436a5dee9dc6cf2f10e24c7d0a9e48"
  },
  {
    "url": "blog/Vue/dataBinding.html",
    "revision": "0461407976dd5a5388ed1b2a9b781177"
  },
  {
    "url": "blog/Vue/index.html",
    "revision": "b5c3f32c0e1d63a008725d4787977a43"
  },
  {
    "url": "blog/Vue/mechanism/a-overview.html",
    "revision": "057d5592e22f911508b8aef4c0a1b79f"
  },
  {
    "url": "blog/Vue/mechanism/b-responsive.html",
    "revision": "18853790c11d6c7525a4ffca11f4d2d9"
  },
  {
    "url": "blog/Vue/mechanism/c-dependencyCollection.html",
    "revision": "20af9358a95a3f49f496338691da9b19"
  },
  {
    "url": "blog/Vue/mechanism/d-virtualDOM.html",
    "revision": "434a8f794044459bf199a0743fa0e117"
  },
  {
    "url": "blog/Vue/mechanism/e-templateCompile.html",
    "revision": "2369adcfc0e4f1e2905e0a2da765de15"
  },
  {
    "url": "icon.jpg",
    "revision": "b6aa47be4e45d27ce7c8e725416d4975"
  },
  {
    "url": "index.html",
    "revision": "802d990687117194f8160b25c7ebcebb"
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
