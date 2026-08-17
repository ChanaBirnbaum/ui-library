import { ReactNode } from 'react';
import { Theme } from '@mui/material/styles';

export type IpsThemeDirection = 'rtl' | 'ltr';
export interface IpsThemeProviderProps {
    /** App content to wrap. */
    children: ReactNode;
    /**
     * Text/layout direction. Also selects the Emotion cache (RTL-flipping
     * plugin vs. plain) so CSS physical properties flip automatically.
     * Default: 'rtl'.
     */
    direction?: IpsThemeDirection;
    /** Light or dark IPS palette, used when no custom `theme` is provided. Default: 'light'. */
    mode?: 'light' | 'dark';
    /**
     * Override the base theme entirely (e.g. `createIpsTheme('dark')` with
     * your own overrides already merged in). When omitted, the default IPS
     * theme for `mode` is used.
     */
    theme?: Theme;
}
