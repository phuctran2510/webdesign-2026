import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' + HashRouter => chạy tốt trên cả GitHub Pages lẫn Vercel
export default defineConfig({
  plugins: [react()],
  base: './',
})
