import React, { useMemo } from 'react'
import { CacheProvider } from '@emotion/react'
import { createRtlCache } from '../../utils/rtlUtils'
import type { IpsRtlProviderProps } from './IpsRtlProvider.types'

/**
 * IpsRtlProvider
 *
 * Wraps the application (or a section of it) with an Emotion CacheProvider
 * that uses `stylis-plugin-rtl` to automatically flip **all** CSS physical
 * properties (left ↔ right, margin-left ↔ margin-right, padding-left ↔
 * padding-right, border-radius corners, etc.) for RTL languages.
 *
 * Pair this with `createTheme({ direction: 'rtl' })` and `dir="rtl"` on the
 * root element for full RTL support.
 *
 * @example
 * ```tsx
 * const rtlTheme = createTheme({ direction: 'rtl', ... })
 *
 * <IpsRtlProvider>
 *   <ThemeProvider theme={rtlTheme}>
 *     <div dir="rtl">
 *       <App />
 *     </div>
 *   </ThemeProvider>
 * </IpsRtlProvider>
 * ```
 */
export const IpsRtlProvider: React.FC<IpsRtlProviderProps> = ({ children }) => {
  // Memoize the cache so it is created only once per mount.
  const cacheRtl = useMemo(() => createRtlCache(), [])
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>
}

IpsRtlProvider.displayName = 'IpsRtlProvider'
