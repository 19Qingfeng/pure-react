import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      react: resolve('../packages/react'),
      'react-dom': resolve('../packages/react-dom'),
      'react-reconciler': resolve('../packages/react-reconciler'),
      scheduler: resolve('../packages/scheduler'),
      shared: resolve('../packages/shared'),
    },
  },
  plugins: [react()],
});
