var cacheName = 'CriptoInfo+-v1.5';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './home.html',
        './Como-Investir.html',
        './Ajuda.html',
        './O-que-é.html',
        './index.html',
        './compra.html',
        './venda.html',
        './Minhas_criptomoedas.html',
        

        './assets/css/fontawesome-all.min.css',
        './assets/css/main.css',
        './assets/css/bloqueio.css',

        './assets/js/breakpoints.min.js',
        './assets/js/browser.min.js',
        './assets/js/filtro.js',
        './assets/js/jquery.min.js',
        './assets/js/main.js',
        './assets/js/util.js',
        './assets/js/bloqueio.js',
        './assets/js/compras.js',

        

        'images/carteira de cripto.jpg',
        'images/cripto no Brasil.jpg',
        'images/cripto1.png',
        'images/cripto2.png',
        'images/cripto3.png',
        'images/criptomoedas valorização.jpg',
        'images/funeral_RE.jpg',
        'images/Home.png',
        'images/investimento.jpg',
        'images/logo.png',
        'images/mercado de cripto.jpg',


        
        'images/imgs/128.png',
        'images/imgs/144.png',
        'images/imgs/152.png',
        'images/imgs/167.png',
        'images/imgs/180.png',
        'images/imgs/196.png',
        'images/imgs/256.png',
        'images/imgs/512.png',
        'images/imgs/1024.png',
                
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

