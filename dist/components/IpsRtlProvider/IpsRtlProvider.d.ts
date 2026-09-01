import { default as React } from 'react';
import { IpsRtlProviderProps } from './IpsRtlProvider.types';

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
export declare const IpsRtlProvider: React.FC<IpsRtlProviderProps>;
