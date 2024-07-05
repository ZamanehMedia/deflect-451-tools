import {
  registerServiceWorkerController,
  registerFallbackPages,
  registerFallbackAssets,
  registerMirroring,
} from '451-tools';

const serviceWorkerController = registerServiceWorkerController();

registerFallbackPages({ serviceWorkerController });
registerFallbackAssets({ serviceWorkerController });
registerMirroring({ serviceWorkerController });
