import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/jessewriter.github.io/', // Replace with your repository name
  build: { outDir: 'docs'}
});