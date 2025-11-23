const CACHE_NAME = 'clicker-pwa-v3.1'; // ← v2 — чтобы сбросить старый кеш
const urlsToCache = [
  '/',
  '/shop',
  '/phone.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
