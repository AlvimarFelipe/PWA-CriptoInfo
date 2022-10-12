var cacheName = 'Cripto-Info';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './Ajuda.html',
        './Como-Investir.html',
        './compra.html',
        './home.html',
        './O-que-é.html',
        './venda.html',


        './assets/css/bloqueio.css',
        './assets/css/fontawesome-all.min.css',
        './assets/css/main.css',

        './assets/js/bloqueio.js',
        './assets/js/breakpoints.min.js',
        './assets/js/browser.min.js',
        './assets/js/compra.js',
        './assets/js/filtro.js',
        './assets/js/jquery.min.js',
        './assets/js/main.js',
        './assets/js/util.js',

        './images/carteira de cripto.js',
        './images/cripto no Brasil.js',
        
       


        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});

