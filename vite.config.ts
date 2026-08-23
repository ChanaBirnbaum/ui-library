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
    },
    // Wipe dist between builds. With preserveModules the output file set
    // changes as imports change; stale files (e.g. a dropped
    // dist/node_modules/ mirror) otherwise linger and get published.
    emptyOutDir: true,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mui/material',
        /^@mui\/material\//,
        '@mui/icons-material',
        /^@mui\/icons-material\//,
        '@mui/system',
        /^@mui\/system\//,
        '@mui/private-theming',
        '@mui/utils',
        '@emotion/react',
        '@emotion/styled',
        '@emotion/cache',
        '@mui/x-data-grid',
        '@mui/x-date-pickers',
        /^@mui\/x-date-pickers\//,
        'date-fns',
        /^date-fns\//,
        'moment',
        'html2canvas',
      ],
      output: [
        // CJS: single bundle (unchanged behaviour for require() consumers)
        {
          format: 'cjs',
          entryFileNames: 'ui-library.cjs.js',
          exports: 'named',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            '@mui/material': 'MaterialUI',
          },
        },
        // ES: one file per source module — eliminates Rollup linearisation and
        // therefore all circular-dependency TDZ errors ("X is not defined").
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          exports: 'named',
        },
      ],
    },
  },
})
