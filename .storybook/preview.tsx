import React from 'react'
import { Preview } from '@storybook/react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { createRtlCache, createLtrCache } from '../src/utils/rtlUtils'

// Pre-create both caches — avoids recreating on every render.
const rtlCache = createRtlCache()
const ltrCache = createLtrCache()

function buildTheme(direction: 'rtl' | 'ltr') {
  return createTheme({
    direction,
    palette: {
      primary:   { main: '#1565C0', light: '#42A5F5', dark: '#0D47A1' },
      secondary: { main: '#616161' },
      error:     { main: '#D32F2F' },
      success:   { main: '#2E7D32' },
      warning:   { main: '#ED6C02' },
    },
    shape:      { borderRadius: 4 },
    typography: { fontFamily: 'Heebo, Roboto, Arial, sans-serif' },
  })
}

/** Toolbar toggle — lets you switch RTL/LTR in every story */
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
}

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const dir = (context.globals.direction ?? 'rtl') as 'rtl' | 'ltr'
      const isRtl = dir === 'rtl'
      const cache = isRtl ? rtlCache : ltrCache
      const muiTheme = buildTheme(dir)
      return (
        <CacheProvider value={cache}>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <div dir={dir} style={{ fontFamily: 'Heebo, Roboto, Arial, sans-serif' }}>
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
