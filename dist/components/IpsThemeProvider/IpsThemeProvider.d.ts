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
export declare const IpsThemeProvider: React.FC<IpsThemeProviderProps>;
