import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * @type { import('vite').UserConfig }
 */
const config = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "@mui/material",
      "@mui/icons-material",
      "@mui/utils"
    ],
    exclude: ['chunk-JUUAVBPG'],
  }
});

export default config;