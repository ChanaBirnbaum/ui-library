import React, { useMemo } from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { createRtlCache, createLtrCache } from '../../utils/rtlUtils'
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
  const cache = useMemo(
    () => (direction === 'rtl' ? createRtlCache() : createLtrCache()),
    [direction]
  )

  const muiTheme = useMemo(() => {
    const base = theme ?? (mode === 'dark' ? createIpsTheme('dark') : ipsTheme)
    return createTheme(base, { direction })
  }, [theme, mode, direction])

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <div dir={direction}>{children}</div>
      </ThemeProvider>
    </CacheProvider>
  )
}

IpsThemeProvider.displayName = 'IpsThemeProvider'
