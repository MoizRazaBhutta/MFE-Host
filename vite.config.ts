import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@hub/mfe-driver': 'http://localhost:4201/main.js',
    },
  },
});
