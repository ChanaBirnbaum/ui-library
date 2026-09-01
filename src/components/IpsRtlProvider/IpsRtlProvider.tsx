import React, { useMemo } from 'react'
import { CacheProvider, __unsafe_useEmotionCache } from '@emotion/react'
import { createRtlCache, RTL_CACHE_KEY } from '../../utils/rtlUtils'
import type { IpsRtlProviderProps } from './IpsRtlProvider.types'

/**
 * IpsRtlProvider
 *
 * Wraps the application (or a section of it) with an Emotion CacheProvider
 * that uses `stylis-plugin-rtl` to automatically flip **all** CSS physical
 * properties (left ↔ right, margin-left ↔ margin-right, padding-left ↔
 * padding-right, border-radius corners, etc.) for RTL languages.
 *
 * If an RTL cache is already provided higher up the tree — e.g. by
 * `IpsThemeProvider` at the host root — this renders nothing of its own and
 * lets the existing cache flow down. A second `CacheProvider` would override
 * the inherited context with a different cache under the same key, which
 * breaks RTL for everything below it.
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
  const inheritedCache = __unsafe_useEmotionCache()
  // Memoize so the cache is looked up only once per mount.
  const ownCache = useMemo(() => createRtlCache(), [])

  if (inheritedCache?.key === RTL_CACHE_KEY) return <>{children}</>

  return <CacheProvider value={ownCache}>{children}</CacheProvider>
}

IpsRtlProvider.displayName = 'IpsRtlProvider'
