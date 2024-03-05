import {
  registerServiceWorkerController,
  registerFallbackPages,
  registerMirroring,
} from '451-tools';

const serviceWorkerController = registerServiceWorkerController({
  networkTimeoutSeconds: 1,
});

registerFallbackPages({ serviceWorkerController });
registerMirroring({ serviceWorkerController });
