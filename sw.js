// 画像やファイルを差し替えたら、この番号を上げると確実に更新されます
const CACHE = 'tsubu-v7';

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.webmanifest',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/icon-me.png',
  './images/icon-yui.png',
  './images/icon-star.png',
  './images/icon-e.png',
  './images/icon-mika.png',
  './images/icon-m.png',
  './images/icon-sora.png',
  './images/icon-riku.png',
  './images/icon-natsu.png',
  './images/icon-takeru.png',
  './images/icon-volley.png',
  './images/icon-momotasu.png',
  './images/icon-ribbon.png',
  './images/icon-heart.png',
  './images/icon-flower.png',
  './images/icon-usagi.png',
  './images/post-01.jpg',
  './images/post-02.jpg',
  './images/post-volley.jpg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// キャッシュを即座に返し、通信できるときは裏で最新版に更新する
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(req, { ignoreSearch: true });
      const network = fetch(req)
        .then((res) => { if (res.ok) cache.put(req, res.clone()); return res; })
        .catch(() => cached || cache.match('./index.html'));
      if (cached) { e.waitUntil(network.catch(() => {})); return cached; }
      return network;
    })
  );
});
