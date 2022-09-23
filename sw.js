const cacheName = 'v1';
const resourcesToPrecache = [
  '/',
  '/index.html',
  '/nav-toggler.js',
  '/styles.css',
  '/imgs/arrow-icon.svg',
  '/imgs/close-icon.svg',
  '/imgs/hamburger-icon.svg',
  '/imgs/Logo.webp',
  '/imgs/footer-logo.webp',
  '/imgs/promotion-background.webp',
  '/imgs/recipe-1.webp',
  '/imgs/recipe-2.webp',
  '/imgs/recipe-3.webp',
  '/imgs/mobile-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
