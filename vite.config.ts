import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { viteExpressPlugin } from './server/vite-plugin-express'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✔ 正确
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {

          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
})