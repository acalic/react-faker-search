import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({
      manifest: {
        name: 'React Faker Search',
        short_name: 'ReactFakerSearch',
        description: 'A simple React app to do a search using "faker"',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#d3d3d3',
        orientation: 'portrait'
      }
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          lcpImage: '/src/assets/google-logo.png',
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});