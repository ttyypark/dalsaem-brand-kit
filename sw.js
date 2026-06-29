const CACHE_NAME = 'dalsaem-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/ppt.html',
  '/cardnews.html',
  '/bizcard-signature.html',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
  '/brand-dalsaem/mark.svg'
];

// 설치 시 핵심 자산 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// 활성화 시 이전 캐시 정리
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// 네트워크 우선, 실패 시 캐시 폴백
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 성공적인 응답을 캐시에 저장
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
