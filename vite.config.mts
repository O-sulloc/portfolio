/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * @type { import('vite').UserConfig }
 */
const config = defineConfig({
  plugins: [react()],
  publicDir: 'public',
  optimizeDeps: {
    include: ['@mui/material', '@mui/icons-material', '@mui/utils'],
    exclude: ['chunk-JUUAVBPG'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
  },
});

export default config;
