import React from 'react'
import { Preview } from '@storybook/react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { createRtlCache, createLtrCache } from '../src/utils/rtlUtils'
import { createIpsTheme } from '../src/theme/createIpsTheme'

// Pre-create both caches — avoids recreating on every render.
const rtlCache = createRtlCache()
const ltrCache = createLtrCache()

/** Toolbar toggles — switch RTL/LTR direction and Light/Dark colour scheme per story */
export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Text direction',
    defaultValue: 'rtl',
    toolbar: {
      icon: 'transfer',
      items: [
        { value: 'ltr', title: 'LTR' },
        { value: 'rtl', title: 'RTL (עברית)' },
      ],
      dynamicTitle: true,
    },
  },
  colorScheme: {
    name: 'Color scheme',
    description: 'Light or dark theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'sun',
      items: [
        { value: 'light', title: '☀ Light' },
        { value: 'dark',  title: '🌙 Dark'  },
      ],
      dynamicTitle: true,
    },
  },
}

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const dir         = (context.globals.direction   ?? 'rtl')   as 'rtl' | 'ltr'
      const colorScheme = (context.globals.colorScheme ?? 'light') as 'light' | 'dark'
      const isRtl = dir === 'rtl'
      const cache = isRtl ? rtlCache : ltrCache

      // Build the IPS theme for the selected mode, then layer in the RTL direction.
      const ipsBase   = createIpsTheme(colorScheme)
      const muiTheme  = createTheme(ipsBase, { direction: dir })

      return (
        <CacheProvider value={cache}>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <div dir={dir} style={{ fontFamily: '"Rubik", "Heebo", "Inter", sans-serif' }}>
              <Story />
            </div>
          </ThemeProvider>
        </CacheProvider>
      )
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  },
}

export default preview
