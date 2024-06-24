(function (window) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      const serviceWorkerUrl = `/451-tools.js?configuration=${encodeURIComponent(
        '/451-tools-configuration.json?v=126fd85ce9e8cb01701a72317107a80f'
      )}`;

      navigator.serviceWorker
        .register(serviceWorkerUrl)
        .then(function (registration) {
          return registration.update();
        })
        .catch(function (error) {
          return console.log('Service worker registration failed:', error);
        });
    });
  }
})(window);
