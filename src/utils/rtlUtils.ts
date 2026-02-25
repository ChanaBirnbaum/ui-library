import createCache from '@emotion/cache'
import rtlPlugin from 'stylis-plugin-rtl'

export const isRtl = (locale?: string) => {
  if (!locale) return false
  const rtlLangs = ['ar', 'he', 'fa', 'ur']
  return rtlLangs.some(l => locale.startsWith(l))
}

export const directionFor = (locale?: string) => (isRtl(locale) ? 'rtl' : 'ltr')

/**
 * Creates an Emotion cache with stylis-plugin-rtl that automatically flips
 * all CSS physical properties (left ↔ right, margin-left ↔ margin-right, etc.)
 * for RTL languages like Hebrew, Arabic, Farsi.
 *
 * Pass the returned cache to MUI's `<CacheProvider value={cache}>`.
 */
export const createRtlCache = () =>
  createCache({ key: 'muirtl', stylisPlugins: [rtlPlugin] })

/** Creates a standard LTR Emotion cache (no CSS flipping). */
export const createLtrCache = () =>
  createCache({ key: 'muiltr' })
