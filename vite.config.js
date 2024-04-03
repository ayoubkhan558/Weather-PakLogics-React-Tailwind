import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/Components'),
      '@assets': path.resolve(__dirname, 'src/Assets'),
      '@pages': path.resolve(__dirname, 'src/Pages'),
      '@template': path.resolve(__dirname, 'src/Template'),
      '@tables': path.resolve(__dirname, 'src/Tables'),
      '@layouts': path.resolve(__dirname, 'src/Layouts'),
      '@services': path.resolve(__dirname, 'src/Services'),
      "@": path.resolve(__dirname, "./src/"),
    },
  },
});