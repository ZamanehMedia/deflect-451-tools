(function (window) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      const serviceWorkerUrl = `/451-tools.js?configuration=${encodeURIComponent(
        '/451-tools-configuration.json?v=__HASH__'
      )}`;

      navigator.serviceWorker
        .register(serviceWorkerUrl)
        .then(function (registration) {
          return registration.update();
        })
        .catch(async function (error) {
          console.log('Service worker registration failed:', error);
          if ((await navigator.serviceWorker.getRegistrations()).length > 0) {
            console.log('Forcing a 451 Tools configuration update.');
            return fetch('/451-tools/configuration/update/');
          }
        });
    });
  }
})(window);
