self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(
      caches.keys().then(cacheNames =>
          Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)))
      ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', () => {
  // Empty fetch event to prevent any resource fetching via service worker
});
