import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standalone config for building the demo app to GitHub Pages.
// Unlike vite.config.ts (library mode), this builds a full SPA with
// all dependencies bundled — no `lib` / `rollupOptions.external`.
export default defineConfig({
  plugins: [react()],
  // Must match the GitHub Pages repo sub-path: https://<user>.github.io/<repo>/
  base: '/ui-library/',
  build: {
    outDir: 'dist-demo',
    emptyOutDir: true,
  },
})
