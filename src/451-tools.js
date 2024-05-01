import {
  registerServiceWorkerController,
  registerFallbackPages,
  registerMirroring,
} from '451-tools';

const serviceWorkerController = registerServiceWorkerController({
  networkTimeoutSeconds: 3,
});

registerFallbackPages({ serviceWorkerController });
registerMirroring({ serviceWorkerController });
