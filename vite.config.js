import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Note: vite.config.js runs in Node, so env vars come from process.env
  base: process.env.GITHUB_PAGES_BASE ?? '/',
  plugins: [react()],
})
