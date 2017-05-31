this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        'audio/organ-low-2m-48-b.mp4',
        'audio/organ-med-8m-48.mp4',
        'audio/organ-hi-7m-48.mp4',
        'audio/organ-hi-er-9m-48.mp4',
        'audio/organ-hi-est-6m-48.mp4',
        'audio/organ-low-2m-b.mp4',
        'audio/organ-med-8m.mp4',
        'audio/organ-hi-7m.mp4',
        'audio/organ-hi-er-9m.mp4',
        'audio/organ-hi-est-6m.mp4',
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).catch(function() {
    return fetch(event.request);
  }).then(function(response) {
    caches.open('v1').then(function(cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }));
});
