import { Theme } from '@mui/material/styles';

/**
 * Creates the IPS MUI v7 theme for the requested colour mode.
 *
 * Palette comes from Figma theme/Light or theme/Dark tokens.
 * Spacing, radius, and typography are mode-independent.
 * Chart palettes are exposed under `theme.custom.charts`.
 */
export declare function createIpsTheme(mode: 'light' | 'dark'): Theme;
