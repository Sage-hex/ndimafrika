import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.JPG'],
  build: {
    outDir: 'build', // Add this line to change the output directory to 'build'
  },
});