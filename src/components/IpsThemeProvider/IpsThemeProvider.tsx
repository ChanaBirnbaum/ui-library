import React, { useMemo } from 'react'
import { CacheProvider, __unsafe_useEmotionCache } from '@emotion/react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import {
  createRtlCache,
  createLtrCache,
  RTL_CACHE_KEY,
  LTR_CACHE_KEY,
} from '../../utils/rtlUtils'
import { createIpsTheme } from '../../theme/createIpsTheme'
import { ipsTheme } from '../../theme/ipsTheme'
import type { IpsThemeProviderProps } from './IpsThemeProvider.types'

/**
 * IpsThemeProvider
 *
 * One-stop app-root wrapper: sets up the Emotion RTL cache, the IPS MUI
 * theme (with `direction` applied), `CssBaseline`, and `dir` on a root
 * element — so consumers get "our theme + our RTL" without assembling
 * `IpsRtlProvider` + `ThemeProvider` + `dir` by hand.
 *
 * Safe to nest: when the cache inherited from an ancestor already matches the
 * requested `direction`, no second `CacheProvider` is rendered. That matters
 * in a host + MFE setup, where every app wraps its own subtree — an MFE
 * providing its own cache under the same key would override the host's and
 * break style insertion for everything below it. Passing a `direction` that
 * differs from the ancestor's still creates the cache it needs.
 *
 * Defaults to `direction="rtl"` since this is the primary use case for
 * consumers of this library. Pass `direction="ltr"` to opt out.
 *
 * For advanced cases (e.g. only part of the tree needs a different cache),
 * use the lower-level `IpsRtlProvider` / `createRtlCache` / `createLtrCache`
 * building blocks directly instead.
 *
 * @example
 * ```tsx
 * <IpsThemeProvider>
 *   <App />
 * </IpsThemeProvider>
 *
 * <IpsThemeProvider direction="ltr" mode="dark">
 *   <App />
 * </IpsThemeProvider>
 * ```
 */
export const IpsThemeProvider: React.FC<IpsThemeProviderProps> = ({
  children,
  direction = 'rtl',
  mode = 'light',
  theme,
}) => {
  const inheritedCache = __unsafe_useEmotionCache()
  const expectedKey = direction === 'rtl' ? RTL_CACHE_KEY : LTR_CACHE_KEY

  const ownCache = useMemo(
    () => (direction === 'rtl' ? createRtlCache() : createLtrCache()),
    [direction]
  )

  const muiTheme = useMemo(() => {
    const base = theme ?? (mode === 'dark' ? createIpsTheme('dark') : ipsTheme)
    return createTheme(base, { direction })
  }, [theme, mode, direction])

  const content = (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div dir={direction}>{children}</div>
    </ThemeProvider>
  )

  if (inheritedCache?.key === expectedKey) return content

  return <CacheProvider value={ownCache}>{content}</CacheProvider>
}

IpsThemeProvider.displayName = 'IpsThemeProvider'
