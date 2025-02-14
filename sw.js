// sw.js - Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('carta-cache').then(cache => {
        return cache.addAll([
          './carta/index.html',
          './carta/style.css',
          './carta/app.js',
          './carta/img/valete.png',
          './carta/img/dama.png',
          './carta/img/rei.png',
          './carta/img/icon-192x192.png',
          './carta/img/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  