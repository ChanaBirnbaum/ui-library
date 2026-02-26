import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Config used ONLY for building the demo app (GitHub Pages)
// Does NOT use vite-plugin-dts or lib mode — builds a standard SPA.
export default defineConfig({
  plugins: [react()],
  base: '/base-components-library/',
  build: {
    outDir: 'dist-demo',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
})
