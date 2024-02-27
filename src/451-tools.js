import {
  registerFallbackPages,
  registerServiceWorkerController,
} from 'more-mirrors';

const serviceWorkerController = registerServiceWorkerController({
  networkTimeoutSeconds: 1,
});

registerFallbackPages({ serviceWorkerController });
