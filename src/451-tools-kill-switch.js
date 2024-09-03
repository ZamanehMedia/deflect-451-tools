(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
      })
      .then(() => {
        navigator.serviceWorker.register('/451-tools-empty-sw.js');
      });
  }
})();
