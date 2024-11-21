import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/<repository-name>/', // Replace with your repository name
  plugins: [vue()],
});

