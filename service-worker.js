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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d461d722cc536356868c2ef5bce4a4b2"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "794f19ec0193910ecd99ddf9dfed9408"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "ee3a01754cad0b49cf2295ae2446ea93"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "11deef97ba1afacf8ce1241b1d28f128"
  },
  {
    "url": "cefla-euroshop-2020/index.html",
    "revision": "faf2b76f08c23e476aa9f40a1715aa6f"
  },
  {
    "url": "css/style.css",
    "revision": "8705286f9bb495e867971f1542bfd3d6"
  },
  {
    "url": "css/style.css.map",
    "revision": "8a285f946575fcf668effcf6e1a8f658"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "2095686533fbcd68c0019a9f3c093d34"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "84335e5042a1e3b608ddbc770199fa77"
  },
  {
    "url": "favicon.ico",
    "revision": "3660e6ada34b76f200065b931fccf06b"
  },
  {
    "url": "ferrari-media-center/index.html",
    "revision": "81741ef1d6eb238e00d1a7e1057f74ef"
  },
  {
    "url": "index.html",
    "revision": "79032141277cde82d4bd558a83380228"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "45cc9b137ddc120d4253236cdf4c41ed"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "44d052f228ad1c1b93641fa63561f36a"
  },
  {
    "url": "siae-plus/index.html",
    "revision": "78eccf4794aaf0a9cd1568bb79e64a33"
  },
  {
    "url": "static/3d-rainbow.jpg",
    "revision": "4c95b4b29bc6814f722860407f5d2bd1"
  },
  {
    "url": "static/3d-rainbow@1.5x.jpg",
    "revision": "db7995c26be85fad60c9d5be5ba9fc01"
  },
  {
    "url": "static/3d-rainbow@2x.jpg",
    "revision": "610e1ada930609313ca2838ef69b1603"
  },
  {
    "url": "static/3d-sphere.jpg",
    "revision": "e31401f0935d01548608cbe44080304b"
  },
  {
    "url": "static/3d-sphere@1.5x.jpg",
    "revision": "1f42ee53c409cab15db595e24d8cc0ae"
  },
  {
    "url": "static/3d-sphere@2x.jpg",
    "revision": "d0bb1e7ad5bfd3b8c139b09a32d11f1a"
  },
  {
    "url": "static/aeon.jpg",
    "revision": "5c442d8c5dae76ead2e57eebc2b59c7a"
  },
  {
    "url": "static/aeon@1.5x.jpg",
    "revision": "579145bbccd746c563d149ed6759f944"
  },
  {
    "url": "static/aeon@2x.jpg",
    "revision": "3523f29def97c6d846e0d0c28591373f"
  },
  {
    "url": "static/antechamber.jpg",
    "revision": "1a053f0e9ae37cd74d041345c4829a4e"
  },
  {
    "url": "static/antechamber@1.5x.jpg",
    "revision": "6a9df2d80fbf7d49be2aeb5f25743b84"
  },
  {
    "url": "static/antechamber@2x.jpg",
    "revision": "72fa7a87556e1ea8eeed6c447b53fd94"
  },
  {
    "url": "static/avatar-dark.png",
    "revision": "822d5a0d15e1dc1d04da7eb7383b896a"
  },
  {
    "url": "static/avatar-dark@1.5x.png",
    "revision": "f364d9432e49c44e77d533209e0dacce"
  },
  {
    "url": "static/avatar-dark@2x.png",
    "revision": "25985e6683b6ea9a062c3f028c05a924"
  },
  {
    "url": "static/avatar-light.png",
    "revision": "752e22dd7cf3f4eda7f2a0f2ae664588"
  },
  {
    "url": "static/avatar-light@1.5x.png",
    "revision": "e8c3d04c0416dfaee5feb9afa5e5e559"
  },
  {
    "url": "static/avatar-light@2x.png",
    "revision": "778c3ec63e0d1bdd5309394e8292a504"
  },
  {
    "url": "static/bg-dark.svg",
    "revision": "28091e50762a2f068f8a55f0b5bf0d57"
  },
  {
    "url": "static/bg-light.svg",
    "revision": "54bb52a1426a6b130e41b47767407d89"
  },
  {
    "url": "static/cefla-euroshop-2020-1.jpg",
    "revision": "c5b839876c64857cd2a6a583935f18ab"
  },
  {
    "url": "static/cefla-euroshop-2020-1@1.5x.jpg",
    "revision": "2dc448c62328a4332d3f960d8ca67aca"
  },
  {
    "url": "static/cefla-euroshop-2020-1@2x.jpg",
    "revision": "ec8b2ff57170d2e96749650eb99b97b8"
  },
  {
    "url": "static/cefla-euroshop-2020-2.jpg",
    "revision": "c266e0ba2ee1dfffc5521006ec5e7682"
  },
  {
    "url": "static/cefla-euroshop-2020-2@1.5x.jpg",
    "revision": "1277ef22128c30f7cbcd90da41775a4c"
  },
  {
    "url": "static/cefla-euroshop-2020-2@2x.jpg",
    "revision": "87987305f20374c009340b5e1bed7c8e"
  },
  {
    "url": "static/cefla-euroshop-2020-3.jpg",
    "revision": "791fefe57328f7f0cc7b5549dab86e58"
  },
  {
    "url": "static/cefla-euroshop-2020-3@1.5x.jpg",
    "revision": "69a2c5bda2b3db6f7a253c2af00f41a1"
  },
  {
    "url": "static/cefla-euroshop-2020-3@2x.jpg",
    "revision": "17e4d325e0b589070573fec0827ab327"
  },
  {
    "url": "static/cefla-euroshop-2020-4.jpg",
    "revision": "2caafa0d898c5cf428f232a6cd3bc082"
  },
  {
    "url": "static/cefla-euroshop-2020-4@1.5x.jpg",
    "revision": "c58e0cc49f9e737b6570ad7dffa45c10"
  },
  {
    "url": "static/cefla-euroshop-2020-4@2x.jpg",
    "revision": "4db1f31b3b1773709ba6e493e7d92a11"
  },
  {
    "url": "static/cefla-euroshop-2020-5.jpg",
    "revision": "d009b41d78b76ffd82faae2367df1608"
  },
  {
    "url": "static/cefla-euroshop-2020-5@1.5x.jpg",
    "revision": "6a1cc9a6bf6b87d2f5ebeb943a375f8c"
  },
  {
    "url": "static/cefla-euroshop-2020-5@2x.jpg",
    "revision": "600d41ce20922edf120f7b291a519947"
  },
  {
    "url": "static/cefla-euroshop-2020.jpg",
    "revision": "86e757dad509af5c46fcfb2a49ab2906"
  },
  {
    "url": "static/cefla-euroshop-2020@1.5x.jpg",
    "revision": "0f49116bc0188c086feed3c05c441bcf"
  },
  {
    "url": "static/cefla-euroshop-2020@2x.jpg",
    "revision": "43fca517c4b6260f44c32a25e860dd6d"
  },
  {
    "url": "static/colfax-web-bold.woff",
    "revision": "9ca898b3a68746f6acb46cdc67c4bac2"
  },
  {
    "url": "static/colfax-web-bold.woff2",
    "revision": "2b35594aced4b3f24d8c94e309b2eb74"
  },
  {
    "url": "static/colfax-web-regular.woff",
    "revision": "a915d9f30337f76c088a28f9e6741c29"
  },
  {
    "url": "static/colfax-web-regular.woff2",
    "revision": "2e9344983aebffcc48e39ceb480b440f"
  },
  {
    "url": "static/ferrari-media-center-0.jpg",
    "revision": "8e27aa06b82bf681bef25a09f484b480"
  },
  {
    "url": "static/ferrari-media-center-0@1.5x.jpg",
    "revision": "f22c6661233a0045e47991162b5c5513"
  },
  {
    "url": "static/ferrari-media-center-0@2x.jpg",
    "revision": "fdeb27ef2cb749f83351b9a19dbee04d"
  },
  {
    "url": "static/ferrari-media-center-1.jpg",
    "revision": "5724e8c264a9edd93d4990daf446245f"
  },
  {
    "url": "static/ferrari-media-center-1@1.5x.jpg",
    "revision": "b22b0555dc8d4d813cc44c587d86916d"
  },
  {
    "url": "static/ferrari-media-center-1@2x.jpg",
    "revision": "58d57d515a9cf733dc2fb8c49c65dc58"
  },
  {
    "url": "static/ferrari-media-center-2.jpg",
    "revision": "eeb19097f28a33491427611f577b9528"
  },
  {
    "url": "static/ferrari-media-center-2@1.5x.jpg",
    "revision": "3bdb73d6813619f726ea8e1a4cb95ce2"
  },
  {
    "url": "static/ferrari-media-center-2@2x.jpg",
    "revision": "3b7fea23b2ba95dca4a79dcb75857ab3"
  },
  {
    "url": "static/ferrari-media-center-3.jpg",
    "revision": "8baac18443631fb668f1a52f652c675b"
  },
  {
    "url": "static/ferrari-media-center-3@1.5x.jpg",
    "revision": "f67be2e4c40b7fb8645935930372aff7"
  },
  {
    "url": "static/ferrari-media-center-3@2x.jpg",
    "revision": "aa61ef5df6c967151cffa15dd781f8e6"
  },
  {
    "url": "static/ferrari-media-center-4.jpg",
    "revision": "486ed9312a2f14ec0b25cabc1fa3029a"
  },
  {
    "url": "static/ferrari-media-center-4@1.5x.jpg",
    "revision": "ead70448a2a2d04250392982d10d78a8"
  },
  {
    "url": "static/ferrari-media-center-4@2x.jpg",
    "revision": "79bcd7d86edd6107183c823a3a0a4d17"
  },
  {
    "url": "static/ferrari-media-center.jpg",
    "revision": "87ef4e35cacfd5193689574b992366f5"
  },
  {
    "url": "static/ferrari-media-center@1.5x.jpg",
    "revision": "0eb7e7ab35caf31df729f9ac086a321e"
  },
  {
    "url": "static/ferrari-media-center@2x.jpg",
    "revision": "4b761c8da8ffa42784ee4f8b08e482af"
  },
  {
    "url": "static/filament.jpg",
    "revision": "bca93da1091ca82473621f140ae36663"
  },
  {
    "url": "static/filament@1.5x.jpg",
    "revision": "5b09e1c36e948e3279bd5d90bf4dc589"
  },
  {
    "url": "static/filament@2x.jpg",
    "revision": "3c3d6e8ce716bd264d57aefadff0900c"
  },
  {
    "url": "static/fonmoon-v1.jpg",
    "revision": "62a5cefcaab935c8d0151fd968568ee8"
  },
  {
    "url": "static/fonmoon-v1@1.5x.jpg",
    "revision": "dae3c390e27f9a69c6123a61db3c75e2"
  },
  {
    "url": "static/fonmoon-v1@2x.jpg",
    "revision": "0f7de727e741d7b9cf367c9f01f7fb8d"
  },
  {
    "url": "static/fonmoon-v2.jpg",
    "revision": "684a8f8ec4ce78529dbf3866967dcda4"
  },
  {
    "url": "static/fonmoon-v2@1.5x.jpg",
    "revision": "1481cbecd6d5093123772bb3def91394"
  },
  {
    "url": "static/fonmoon-v2@2x.jpg",
    "revision": "2c6f1e29cd15e14e59537d6dcb74f5ad"
  },
  {
    "url": "static/francesca-moschino.jpg",
    "revision": "c75edd84c23bae004aa6e87bf74a96fc"
  },
  {
    "url": "static/francesca-moschino@1.5x.jpg",
    "revision": "d751d9935314cbcfa0fdc3d6a807c81a"
  },
  {
    "url": "static/francesca-moschino@2x.jpg",
    "revision": "30a1fc6dbe68f05a2e88c8ef5346226a"
  },
  {
    "url": "static/hud.jpg",
    "revision": "555aa84b86e5d4b62b0fe18df5dae637"
  },
  {
    "url": "static/hud@1.5x.jpg",
    "revision": "9eaaadebf3c79d58442485e3c4e0e111"
  },
  {
    "url": "static/hud@2x.jpg",
    "revision": "35e8e5899493f2391d9f5cf07177ac3b"
  },
  {
    "url": "static/jvc-paradox.jpg",
    "revision": "8bbc854dfc2aa2096e6d1266d80952bc"
  },
  {
    "url": "static/jvc-paradox@1.5x.jpg",
    "revision": "96b41f722d00704a74b86cdf14eed621"
  },
  {
    "url": "static/jvc-paradox@2x.jpg",
    "revision": "dccdae83fca607d97e66fdbbf8af05f3"
  },
  {
    "url": "static/klavika-web-display-black.woff",
    "revision": "f1d4080800a71a9aaf7df558a18af21c"
  },
  {
    "url": "static/klavika-web-display-black.woff2",
    "revision": "58d8198a546bbeca079d202711ea7a02"
  },
  {
    "url": "static/land-ho-coworking.jpg",
    "revision": "d0ce851957b978461fbda75f11e844d5"
  },
  {
    "url": "static/land-ho-coworking@1.5x.jpg",
    "revision": "391e4c46e6bd80117d988419cb8c21e9"
  },
  {
    "url": "static/land-ho-coworking@2x.jpg",
    "revision": "abe7efdd89a53bb2667e674754d84d22"
  },
  {
    "url": "static/le-paradox.jpg",
    "revision": "a8ad26b4bc03483bd35dce9cb4765403"
  },
  {
    "url": "static/le-paradox@1.5x.jpg",
    "revision": "a94249fe229f16240acdcf17c03408ab"
  },
  {
    "url": "static/le-paradox@2x.jpg",
    "revision": "abed23d74dbf042e12aad6bd1a4fcbbb"
  },
  {
    "url": "static/learnform.jpg",
    "revision": "799b0d93b48d7ce3dd08fab87846b9c8"
  },
  {
    "url": "static/learnform@1.5x.jpg",
    "revision": "faca936270ff8af99208bdf64940ac89"
  },
  {
    "url": "static/learnform@2x.jpg",
    "revision": "664181f8de63abcde195b3fe0c1a35b7"
  },
  {
    "url": "static/photographie.jpg",
    "revision": "9c75a732cc37da14c265901aca0480c7"
  },
  {
    "url": "static/photographie@1.5x.jpg",
    "revision": "05cecb3752683e336da85093a86018d2"
  },
  {
    "url": "static/photographie@2x.jpg",
    "revision": "4e7f9212a667f2f59b4e9decf431e33e"
  },
  {
    "url": "static/poly-characters.jpg",
    "revision": "1dd74b2fc63dcfe48b9b5611e5730fb0"
  },
  {
    "url": "static/poly-characters@1.5x.jpg",
    "revision": "c4fb0f503e091979849c09ba2d9715b2"
  },
  {
    "url": "static/poly-characters@2x.jpg",
    "revision": "81b08c878ffbe9b2f865e90e0f648c3d"
  },
  {
    "url": "static/polygon.jpg",
    "revision": "98cded4b5b95b398965d564250e4e9e9"
  },
  {
    "url": "static/polygon@1.5x.jpg",
    "revision": "db98bb26826b7b27837671108c6943d0"
  },
  {
    "url": "static/polygon@2x.jpg",
    "revision": "74c4724c5fba9912886fa30037a0710f"
  },
  {
    "url": "static/preview.jpg",
    "revision": "d2497223c6a457efa2ec197de51c4b4f"
  },
  {
    "url": "static/rai-monitor.jpg",
    "revision": "24926e2409428b4023657d5b2f3ce790"
  },
  {
    "url": "static/rai-monitor@1.5x.jpg",
    "revision": "0d9d4e438c2cf7c24caea2838d5891cb"
  },
  {
    "url": "static/rai-monitor@2x.jpg",
    "revision": "8e439ee058a6a806cf440d3fad9beb8e"
  },
  {
    "url": "static/reenie-beanie-v10-latin-regular.woff",
    "revision": "0964cc365da15c286cb050bdf99184a4"
  },
  {
    "url": "static/reenie-beanie-v10-latin-regular.woff2",
    "revision": "99289be28cb3e465f11a552b5dc9c2a7"
  },
  {
    "url": "static/ref-14.jpg",
    "revision": "d846180e2397984d2cfe6c14851b68cc"
  },
  {
    "url": "static/ref-14@1.5x.jpg",
    "revision": "d84c2f2c26c579fc446f2eaed43d26db"
  },
  {
    "url": "static/ref-14@2x.jpg",
    "revision": "3328724c01be400341f0a730507e7503"
  },
  {
    "url": "static/september.jpg",
    "revision": "ad880d4c0241686cbeb1bbd1474ac65c"
  },
  {
    "url": "static/september@1.5x.jpg",
    "revision": "04056d611c345508a8db5cf9140d379f"
  },
  {
    "url": "static/september@2x.jpg",
    "revision": "20e914630c01b42d17baf07b08890925"
  },
  {
    "url": "static/siae-plus-0.jpg",
    "revision": "7d63009763340a41c1e941c6def72fb0"
  },
  {
    "url": "static/siae-plus-0@1.5x.jpg",
    "revision": "51eeea936e38d9107900142313d07499"
  },
  {
    "url": "static/siae-plus-0@2x.jpg",
    "revision": "b22885dcc508960281269c681b15cf69"
  },
  {
    "url": "static/siae-plus-1.jpg",
    "revision": "21d97a23bec737a9468fa89601e7677e"
  },
  {
    "url": "static/siae-plus-1@1.5x.jpg",
    "revision": "17498e1fad0027ab33b6a197eb658fc5"
  },
  {
    "url": "static/siae-plus-1@2x.jpg",
    "revision": "dd843a02e54474933b625f68f0b55f5b"
  },
  {
    "url": "static/siae-plus-2.jpg",
    "revision": "458492f97aab80dafe00fc56b3635230"
  },
  {
    "url": "static/siae-plus-2@1.5x.jpg",
    "revision": "5e21879d37707b17a20112c5825cb704"
  },
  {
    "url": "static/siae-plus-2@2x.jpg",
    "revision": "118d257ffb21d893ecc8e6064b8b80ad"
  },
  {
    "url": "static/siae-plus-3.jpg",
    "revision": "334c32d4e11e39f4f9d79fd0fd6db07b"
  },
  {
    "url": "static/siae-plus-3@1.5x.jpg",
    "revision": "b6a764b6fdab2d9bb338995242a8c187"
  },
  {
    "url": "static/siae-plus-3@2x.jpg",
    "revision": "881f403614a4d6089f62cf405d1f0885"
  },
  {
    "url": "static/siae-plus-4.jpg",
    "revision": "e3689202256d845130179d8455b4d75e"
  },
  {
    "url": "static/siae-plus-4@1.5x.jpg",
    "revision": "20ac4779984aa8ff45caeb4d6613f03f"
  },
  {
    "url": "static/siae-plus-4@2x.jpg",
    "revision": "0f777e524cae744787dc05ca658ad75f"
  },
  {
    "url": "static/siae-plus.jpg",
    "revision": "618f925d83e4d51fe5f0cdb3dd665ba7"
  },
  {
    "url": "static/siae-plus@1.5x.jpg",
    "revision": "976fe803be3c7ccea1b2a898135dabc9"
  },
  {
    "url": "static/siae-plus@2x.jpg",
    "revision": "2d802c9bfa5644df778b4d398b7957eb"
  },
  {
    "url": "static/skins.jpg",
    "revision": "e5d3fb510f63dccbbc0d67cca1828df6"
  },
  {
    "url": "static/skins@1.5x.jpg",
    "revision": "6d7318c8297d8c6f94888b6ad7f641a3"
  },
  {
    "url": "static/skins@2x.jpg",
    "revision": "78b9c81c00b14043cf26b8f025011a61"
  },
  {
    "url": "static/sound-art.jpg",
    "revision": "4ec8d3684199174f644bb495b71a541d"
  },
  {
    "url": "static/sound-art@1.5x.jpg",
    "revision": "f00d1185eb0bc5a729a1e186c95b9145"
  },
  {
    "url": "static/sound-art@2x.jpg",
    "revision": "89bce4151dc64f76c292edbbabc5eae0"
  },
  {
    "url": "static/spe.jpg",
    "revision": "d40ef1eaa518970b74769c8e95d6fdc1"
  },
  {
    "url": "static/spe@1.5x.jpg",
    "revision": "6c92d984c4ac222111f75aad429c66fa"
  },
  {
    "url": "static/spe@2x.jpg",
    "revision": "d6d91a84ffa44cc9e6c29759a85536ee"
  },
  {
    "url": "static/supermoney.jpg",
    "revision": "7f23a2c5744c2ba0802768706b2d33ac"
  },
  {
    "url": "static/supermoney@1.5x.jpg",
    "revision": "a178413c3c044bae198618e63930b6e0"
  },
  {
    "url": "static/supermoney@2x.jpg",
    "revision": "d528b78c696bd19dd8439f3f56de89a2"
  },
  {
    "url": "static/tim-mytim.jpg",
    "revision": "5f1225fa1b830a8e9d1b03df406728ea"
  },
  {
    "url": "static/tim-mytim@1.5x.jpg",
    "revision": "1768283c99495a1f386ba54a58dfd5d0"
  },
  {
    "url": "static/tim-mytim@2x.jpg",
    "revision": "80bc6a088214b07f4452f84d77e4962c"
  },
  {
    "url": "static/ubi-banca-digital-workspace.jpg",
    "revision": "a7fea4103fb89fbad69aa4f6548391e2"
  },
  {
    "url": "static/ubi-banca-digital-workspace@1.5x.jpg",
    "revision": "9fa37776fa219c26717aa8f8964d9a15"
  },
  {
    "url": "static/ubi-banca-digital-workspace@2x.jpg",
    "revision": "4eabe39ec0bbda98f8c3890e3cca8c3f"
  },
  {
    "url": "static/ubi-banca.jpg",
    "revision": "5bd4cb22bee30835b7022fff2ffad184"
  },
  {
    "url": "static/ubi-banca@1.5x.jpg",
    "revision": "1a8c33a260901056eaf1768023dee10a"
  },
  {
    "url": "static/ubi-banca@2x.jpg",
    "revision": "cc54ebe3c765bd8b4ec27e22eeaf5968"
  },
  {
    "url": "static/yearth.jpg",
    "revision": "a64b95659711c605ae2161e92eae2d7b"
  },
  {
    "url": "static/yearth@1.5x.jpg",
    "revision": "ed9d06efcbe8df6bbc18f2a45e21ecd9"
  },
  {
    "url": "static/yearth@2x.jpg",
    "revision": "affcdf8d90002aeb274504479c119e82"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
