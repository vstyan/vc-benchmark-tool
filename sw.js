/**
 * Service Worker for Video Conference Benchmark Tool
 * Handles offline caching of core assets.
 */

const CACHE_NAME = 'vc-bench-v1.0.0';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './stress-worker.js' // Added to cache
];

// Install: Cache essential files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
});

// Fetch: Serve from cache if available, otherwise hit network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});