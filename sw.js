// sw.js - Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('static')
      .then ((cache) => {
          cache.add('./carta/index.html')
           cache.add('./carta/style.css')
           cache.add('./carta/app.js')
           cache.add('./carta/img/valete.png')
           cache.add('./carta/img/dama.png')
           cache.add('./carta/img/rei.png')
           cache.add('./carta/img/icon-192x192.png')
           cache.add('./carta/img/icon-512x512.png')
      ;
      })
    );
  });
  
  self.addEventListener('activate',(event) => {
    console.log("ativando o serviço worker...",event)
    return self.clients.claim()
})

//interceptação (solicitação https servindo em cache quando off-line)
self.addEventListener('fetch', (event) => {
    event.respondiWitch
        caches.match(event.request)
        .then((response) => {
            if(response) {
                return response
            } else {
                return fetch(event.request)
            }
        }
    )
})