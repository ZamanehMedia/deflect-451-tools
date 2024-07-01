import {
  registerServiceWorkerController,
  registerFallbackPages,
  registerMirroring,
} from '451-tools';

const serviceWorkerController = registerServiceWorkerController();

registerFallbackPages({ serviceWorkerController });
registerMirroring({ serviceWorkerController });
