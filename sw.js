// sw.js - Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('carta-cache').then(cache => {
        return cache.addAll([
          './index.html',
          './style.css',
          './app.js',
          './img/valete.png',
          './img/dama.png',
          './img/rei.png',
          './img/icon-192x192.png',
          './img/icon-512x512.png'
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
  