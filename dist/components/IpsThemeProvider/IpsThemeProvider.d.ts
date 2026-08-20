import { default as React } from 'react';
import { IpsThemeProviderProps } from './IpsThemeProvider.types';

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
export declare const IpsThemeProvider: React.FC<IpsThemeProviderProps>;
