import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 19861,
    host: true,
    proxy: {
      '/api': 'http://localhost:9861',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})