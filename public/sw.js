const CACHE_NAME = 'carstarz-cache-v1';
const urlsToCache = [
  '/',
  '/_next/static/css/app/layout.css',
  '/_next/static/chunks/main-app.js',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/app/layout.js',
  '/_next/static/chunks/app/page.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 