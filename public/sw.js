if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-U-IuGQKw9TywGhjVHe7Yv.js"),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/U-IuGQKw9TywGhjVHe7Yv/_buildManifest.js",revision:"2d523ff1b2d966500986550c3b0ef83f"},{url:"/_next/static/U-IuGQKw9TywGhjVHe7Yv/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b7b90cd.37852bd4a7e29460.js",revision:"37852bd4a7e29460"},{url:"/_next/static/chunks/33-5e2f72d1e33a321b.js",revision:"5e2f72d1e33a321b"},{url:"/_next/static/chunks/387-0c3ef179cd58c252.js",revision:"0c3ef179cd58c252"},{url:"/_next/static/chunks/437.2a81ce9d5b80e1d7.js",revision:"2a81ce9d5b80e1d7"},{url:"/_next/static/chunks/462-1f7547f218129055.js",revision:"1f7547f218129055"},{url:"/_next/static/chunks/613-27930f6673e08df9.js",revision:"27930f6673e08df9"},{url:"/_next/static/chunks/828-290dae1c93bac74f.js",revision:"290dae1c93bac74f"},{url:"/_next/static/chunks/864.a05465fcad286c45.js",revision:"a05465fcad286c45"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-084d96eaf15c41e8.js",revision:"084d96eaf15c41e8"},{url:"/_next/static/chunks/pages/404-85aeb26d7f144758.js",revision:"85aeb26d7f144758"},{url:"/_next/static/chunks/pages/_app-55e02e8083f24207.js",revision:"55e02e8083f24207"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/_offline-b97b6356aeb41925.js",revision:"b97b6356aeb41925"},{url:"/_next/static/chunks/pages/confirm-email-79cce9feef02b426.js",revision:"79cce9feef02b426"},{url:"/_next/static/chunks/pages/favorites-7aff9c5b6d470666.js",revision:"7aff9c5b6d470666"},{url:"/_next/static/chunks/pages/forgot-password-c8fbad122d39539b.js",revision:"c8fbad122d39539b"},{url:"/_next/static/chunks/pages/home-c297a56b0d54608e.js",revision:"c297a56b0d54608e"},{url:"/_next/static/chunks/pages/index-d578abafe11bce04.js",revision:"d578abafe11bce04"},{url:"/_next/static/chunks/pages/login-9c1605280a7b229a.js",revision:"9c1605280a7b229a"},{url:"/_next/static/chunks/pages/mappoint/%5Bpid%5D-58eaeba7320924cf.js",revision:"58eaeba7320924cf"},{url:"/_next/static/chunks/pages/profile-9afdf0160e70326a.js",revision:"9afdf0160e70326a"},{url:"/_next/static/chunks/pages/reset-password-cc96c2be1120f1c1.js",revision:"cc96c2be1120f1c1"},{url:"/_next/static/chunks/pages/signup-891af7b296a5eb94.js",revision:"891af7b296a5eb94"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-10cab80141398e4c.js",revision:"10cab80141398e4c"},{url:"/_next/static/css/7d5e1309e92650dd.css",revision:"7d5e1309e92650dd"},{url:"/_next/static/css/e547224d23447efd.css",revision:"e547224d23447efd"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/_offline",revision:"U-IuGQKw9TywGhjVHe7Yv"},{url:"/assets/ProfilePictureDefault.png",revision:"eb2b82c57dda81c9aa7546a27b8399c1"},{url:"/assets/apple-maps-icon.png",revision:"2aa5d4fd92032b7df6e5d49c036fdb71"},{url:"/assets/boulder-stock.png",revision:"1e042fafdc2dc6815efaab49b3acd75c"},{url:"/assets/google-maps-icon.png",revision:"b1b87a8fce5a6d6bddb7457f2bf2f280"},{url:"/assets/mappoint-placeholder.jpg",revision:"a7eac6845c9e1a3e824d593a8114c5eb"},{url:"/assets/skate-stock.png",revision:"9fa38615eaa0dbe5a0358938d7b0e95c"},{url:"/favicon.ico",revision:"542c46ce57a2ae202cd38e14ec2d7798"},{url:"/fonts/Lato-Black.ttf",revision:"d83ab24f5cf2be8b7a9873dd64f6060a"},{url:"/fonts/Lato-BlackItalic.ttf",revision:"047217f671c9e0849c97d43e26543046"},{url:"/fonts/Lato-Bold.ttf",revision:"24b516c266d7341c954cb2918f1c8f38"},{url:"/fonts/Lato-BoldItalic.ttf",revision:"acc03ac1e9162f0388c005177d55d762"},{url:"/fonts/Lato-Italic.ttf",revision:"5d22f337a040ae2857e36e7c5800369b"},{url:"/fonts/Lato-Light.ttf",revision:"2bcc211c05fc425a57b2767a4cdcf174"},{url:"/fonts/Lato-LightItalic.ttf",revision:"2404a6da847c878edbc8280745365cba"},{url:"/fonts/Lato-Regular.ttf",revision:"122dd68d69fe9587e062d20d9ff5de2a"},{url:"/fonts/Lato-Thin.ttf",revision:"7ab0bc06eecc1b75f8708aba3d3b044a"},{url:"/fonts/Lato-ThinItalic.ttf",revision:"2b26bc77c3f9432c9d4ca4911520294d"},{url:"/locationPin.png",revision:"4be3bbe44f3295ba1aa96c76c656d2eb"},{url:"/manifest.json",revision:"36f6a8bcc5b36c3a52dc7a6b7d09a39d"},{url:"/pin.png",revision:"c70acd4985238dc93841d9baa3e2a72c"},{url:"/pwaIcons/icon_x128.png",revision:"c8d0beb1db52c7cc6179d6e0fff4260e"},{url:"/pwaIcons/icon_x192.png",revision:"42001cfb9b9bac5893505a86e92a1380"},{url:"/pwaIcons/icon_x384.png",revision:"fd89689a780eafed1db5772048717661"},{url:"/pwaIcons/icon_x48.png",revision:"bcdcee0823510901ad59f6de39838030"},{url:"/pwaIcons/icon_x512.png",revision:"f6c264743af1e54d7e6b5a622959454d"},{url:"/pwaIcons/icon_x72.png",revision:"f8e434a24fed1e6f65b2632c48363498"},{url:"/pwaIcons/icon_x96.png",revision:"ae069d2704d703dacbaa721df12509ba"},{url:"/pwaIcons/maskable_icon_x128.png",revision:"f4c08045f069bedfaf935c87a3391617"},{url:"/pwaIcons/maskable_icon_x192.png",revision:"e99dd37706ea567026b83299439a29d5"},{url:"/pwaIcons/maskable_icon_x384.png",revision:"68266e7f12dec801e963a051747ea571"},{url:"/pwaIcons/maskable_icon_x512.png",revision:"34fceafc32a56ebabffd50052be54e1d"},{url:"/pwaIcons/maskable_icon_x72.png",revision:"d255e6f088fdc44c61ab66b4e21f234c"},{url:"/pwaIcons/maskable_icon_x96.png",revision:"5824d8266e28445cdf3c1d3a089ccbd6"},{url:"/robots.txt",revision:"65cee4b34c44f54a291cb6350b743632"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
