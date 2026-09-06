/**
 * CyberTech Hexperts Solutions - Progressive Web App Service Worker
 * Provides offline caching, lightning-fast asset delivery, and resilient recovery
 */

const CACHE_NAME = 'cybertech-v1-shell';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './CYBERTECH LOGO 1.jpg',
  './CYBERTECH_LOGO.png',
  './KSM_Half.jpeg',
  './Customer_A.png',
  './Customer_B.png',
  './Customer_C.png',
  './phone-call-communication-svgrepo-com.svg',
  './email-opened-svgrepo-com.svg',
  './whatsapp-svgrepo-com.svg',
  './facebook-svgrepo-com.svg',
  './youtube-color-svgrepo-com.svg',
  './live-chat-headset-svgrepo-com.svg'
];

// Install Event: Pre-cache Core Shell Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[PWA SW] Pre-caching application shell assets');
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[PWA SW] Asset caching completed with non-blocking warnings:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clear Old Cache Versions and Claim Clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[PWA SW] Removing outdated cache store:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Stale-While-Revalidate for Assets, Network-First for Navigation
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Ignore non-GET requests or external browser-extension / telemetry schemes
  if (request.method !== 'GET' || !request.url.startsWith('http')) {
    return;
  }

  // Navigation requests: Network-First with Cache Fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Update cache with fresh version
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => {
          // Offline fallback
          return caches.match('./index.html') || caches.match(request);
        })
    );
    return;
  }

  // Static Assets (CSS, JS, Images, Fonts): Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
