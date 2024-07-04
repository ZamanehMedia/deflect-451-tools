(function (window) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      const serviceWorkerUrl = `/451-tools.js?configuration=${encodeURIComponent(
        '/451-tools-configuration.json?v=42f60c595d5232271173703b46047f59'
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
