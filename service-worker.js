// 缓存名称
const CACHE_NAME = 'word-player-cache-v1';
// 需要缓存的文件
const ASSETS_TO_CACHE = [
  'index.html',
  'default-lists.js',
  'manifest.json',
  'icon-192x192.png',
  'icon-512x512.png'
];

// 安装事件：缓存文件
self.addEventListener('install', (event) => {
  // 等待缓存完成后再完成安装
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// 激活事件：清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

//  fetch 事件：从缓存返回资源或网络请求
self.addEventListener('fetch', (event) => {
  // 只缓存GET请求
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果缓存中有，则返回缓存的资源
        if (response) {
          return response;
        }
        
        // 否则从网络获取
        return fetch(event.request).then((networkResponse) => {
          // 更新缓存
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
          return networkResponse;
        }).catch(() => {
          // 网络错误时的回退策略
          if (event.request.mode === 'navigate') {
            return caches.match('index.html');
          }
        });
      })
  );
});

// 监听消息，保持Service Worker活跃
self.addEventListener('message', (event) => {
  if (event.data === 'keepAlive') {
    // 每10秒发送一次保活消息，防止Service Worker进入休眠
    setInterval(() => {
      self.clients.matchAll({ type: 'window' }).then((clients) => {
        if (clients.length > 0) {
          clients[0].postMessage('alive');
        }
      });
    }, 10000);
  }
});
    