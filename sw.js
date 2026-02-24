/**
 * Service Worker for Video Conference Benchmark Tool
 * Version: 1.1.9
 * Updated: 2026-02-24
 */

const CACHE_NAME = 'vc-bench-v1.1.9';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './stress-worker.js',
    './icon.png'
];

self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then((c) => {
            console.log('[SW] Caching documented assets v1.1.9');
            return c.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((r) => r || fetch(e.request))
    );
});