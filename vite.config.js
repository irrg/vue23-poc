import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';   // Vue 3 plugin
import vue2 from '@vitejs/plugin-vue2'; // Vue 2 plugin
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    vue2({
      include: [/vue2\/src\/.*\.vue$/],  // Vue 2 plugin applied only to Vue 2 files
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),                 // Vue 3 alias
      'vue2@': resolve(__dirname, 'vue2/src'),        // Vue 2 alias
      vue: resolve(__dirname, 'node_modules/vue'),    // Explicitly point to Vue 3
      vue2: resolve(__dirname, 'node_modules/vue2'),  // Explicitly point to Vue 2
      'vue-router3': resolve(__dirname, 'node_modules/vue-router3'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),        // Vue 3 entry point
        vue2: resolve(__dirname, 'vue2/index.html'),   // Vue 2 entry point
      },
    },
  },
  server: {
    fs: {
      allow: ['vue2', 'src'],  // Allow access to both Vue 2 and Vue 3 directories
    },
    // Remove proxy configuration
  },
});
