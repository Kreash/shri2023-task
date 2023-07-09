import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shri2023-task/',
  plugins: [
    // ssr({
    //   prerender: true,
    // }),
    react(),
  ],
  // optimizeDeps: { include: ['cross-fetch', 'react/jsx-runtime'] },
});
