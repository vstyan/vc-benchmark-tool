const CACHE_NAME = 'vc-bench-v1.0.9'; // Updated Version
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './stress-worker.js',
    './icon.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS_TO_CACHE)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});