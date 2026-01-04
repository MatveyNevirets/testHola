'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "14a28f88e931bd0f7ec570da84fb81b3",
"/": "14a28f88e931bd0f7ec570da84fb81b3",
"flutter_bootstrap.js": "1033637e2f9c52ffd27d8034fef5ab9b",
".git/config": "965be34090a7adc35c92887d938f21ed",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/index": "97876766dd3731cb5b902e1ab807ce60",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/master": "0e5b2cdd12129ec6d06496d9d4d0d846",
".git/refs/remotes/origin/master": "0e5b2cdd12129ec6d06496d9d4d0d846",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "e96947424742b4d85c4522c5d2f29f0c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "aaf7a1ff595fd8aeefada99de1cedd95",
".git/objects/02/1434e563970e8304274b87e3114e270b532030": "9869b0912e2144e013292054638a4fff",
".git/objects/78/ccc2f58bb52410bf8837a1fb13d1cfc9abcee1": "2a51ef85caeda1be19307a28939cfc06",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "e44dbcc4f8ba7b73e63f5274e03f757f",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "1f96c5724f3157a75e32b916bb80a12d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "d3086c88096251642f83805078d30149",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "5fbfd41a73be95fe0fa610703c666957",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/35/ffc0824a777ff8a337c68f9ed0a02aa61354c6": "e3ab5dad30f926c8f579f54207e1a3ac",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "3e6ddc94183a5f5f251d5f5f9d834ade",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "3afc17e45da83758c0485c523d549fe5",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "383232acfec6d014865ba00d787a04ec",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/bf/213815797065e8b8d7c50035c9361b07a8f6f0": "9eff1ce11f07d05be68a61cf95146049",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "3bc1cfa9d35b24ae15d0c92a3e1b7e58",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "c8dd26d8be979e7b62b479b8dd2631b6",
".git/objects/18/1be1cbfe92c2e4213e92feadb0c94845aca697": "d1af4afc25195f71ae92544a61d15741",
".git/objects/60/9262c99c33ce058ace6b8ecc93ceada0261375": "59b0edadf7d8b389adff7375b1b1af3d",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/52/c0a16de48e8eebafafad9eb3660b7252619334": "8c70897cec2eb7222463d084216accfd",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "ad44b0e3874ce9a8490bb08d982b070a",
".git/objects/4b/b2ca047d9bb091fa696cb422924c35415f863a": "bee16eb1065f30ae18aa5ca8fb3d3ce8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "6d692dfe2643a57a1acabbd9f4d16f97",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "8dc17a1a39be3d8b49f69908fc6040b7",
".git/objects/ec/a5295289fb621edf83aa1bc2c4dd506fc08f22": "52260f9f2cafd5d372c419f70576a803",
".git/objects/19/3c492605b0fb47110e9cd3ba02a37b1bbdb4f1": "6531f67a4e84512677b6b33106eeb4fc",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "043520c054ac0a6cbf0784a7e535c5a4",
".git/objects/e2/4474e2554b8a3921d85b71e2c1dd363272f024": "829b00ca31f5a576428541be02f0a91c",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "9f3800cba3bdb0fd35ffbf1730e39d6a",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "8b9c31c4669a155fcefbae3e383fa1c3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/refs/heads/master": "d764cac0bd3f6f30067ae08e58166b5b",
".git/logs/refs/remotes/origin/master": "1c272bf9e0c17edf316cee33f868a5b4",
".git/logs/HEAD": "d764cac0bd3f6f30067ae08e58166b5b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "7fade9e77836dbc93565500cd9fad343",
"main.dart.js": "ab445aa8f45f2925a3644f09e6d41cef",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"version.json": "0d6571804824243fc9364f2023e6780f",
"assets/AssetManifest.bin": "36d6e34dbd48364bf6a76553bcf4d80e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "8a3e97fc860b6a923663f3d5fda478d7",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/photo.jpg": "303201f1f9cb61ea9e1297651cc33105",
"assets/NOTICES": "c15bf97c50ec75151344ddea9ac43c8c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
