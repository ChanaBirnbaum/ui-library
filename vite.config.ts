import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true }),
  ],
  base: '/base-components-library/',
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'UILibrary',
      fileName: (format) => `ui-library.${format === 'es' ? 'es' : 'cjs'}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // All peerDependencies must be external so they are NOT bundled.
      // Consumers provide their own copies — avoids duplicate React / MUI instances.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mui/material',
        /^@mui\/material\//,
        '@mui/icons-material',
        /^@mui\/icons-material\//,
        '@emotion/react',
        '@emotion/styled',
        '@emotion/cache',
        '@mui/x-data-grid',
        '@mui/x-date-pickers',
        /^@mui\/x-date-pickers\//,
        'date-fns',
        /^date-fns\//,
        'moment',
      ],
      output: {
        // Keep named exports stable — no mangled names in CJS build.
        exports: 'named',
        // Provide global variable names for UMD/IIFE consumers.
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MaterialUI',
        },
      },
    },
  },
})
