import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint({ exclude: ['**/node_modules/**', '**/dist/**'] })],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: '/src/451-tools.js',
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
