self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('static-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/styles.css',
                '/js/script.js',
                '/icon-192x192.png',
                '/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});