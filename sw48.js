var version = 1.0;

// when service worker installs
// have it cache all the assets for the app
// so that it can work entirely offline

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('gro v' + version).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        '/stereo-panner-node.min.js',
        '/manifest.json',
        'audio/organ-low-2m-48-b.mp4',
        'audio/organ-med-8m-48.mp4',
        'audio/organ-hi-7m-48.mp4',
        'audio/organ-hi-er-9m-48.mp4',
        'audio/organ-hi-est-6m-48.mp4'
      ]);
    })
    .then(function() {
      console.log('GROv' + version + ' WORKER: install completed');
    })
  );
});


// when the app attempts to load the assets
// have the service worker check the cache first
// if assets are already cached,
// use those instead of downloading new ones

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        // If there is an entry in the cache for event.request, then response will be defined
        // and we can just return it.
        console.log(' Found response in cache:', response);

        return response;
      }

      // Otherwise, if there is no entry in the cache for event.request, response will be
      // undefined, and we need to fetch() the resource.
      console.log(' No response for %s found in cache. ' +
        'About to fetch from network...', event.request.url);

      // We call .clone() on the request since we might use it in the call to cache.put() later on.
      // Both fetch() and cache.put() "consume" the request, so we need to make a copy.
      // (see https://fetch.spec.whatwg.org/#dom-request-clone)
      return fetch(event.request.clone()).then(function(response) {
        console.log('  Response for %s from network is: %O',
          event.request.url, response);

        // Return the original response object, which will be used to fulfill the resource request.
        return response;
      });
    }).catch(function(error) {
      // This catch() will handle exceptions that arise from the match() or fetch() operations.
      // Note that a HTTP error response (e.g. 404) will NOT trigger an exception.
      // It will return a normal response object that has the appropriate error code set.
      console.error('  Read-through caching failed:', error);

      throw error;
      })
    );
  });
