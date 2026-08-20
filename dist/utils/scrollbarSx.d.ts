import { Theme } from '@mui/material/styles';

/**
 * Thin, light-grey scrollbar for the Ips popup lists. The platform default bar
 * is wide and high-contrast, which is far too heavy next to a 32px option row.
 *
 * Both syntaxes are needed: Firefox only understands the standard
 * `scrollbar-width` / `scrollbar-color` pair, Chrome/Edge/Safari only the
 * `::-webkit-scrollbar` pseudo-elements.
 */
export declare const thinScrollbarSx: (theme: Theme) => {
    scrollbarWidth: string;
    scrollbarColor: string;
    '&::-webkit-scrollbar': {
        width: number;
        height: number;
    };
    '&::-webkit-scrollbar-track': {
        backgroundColor: string;
    };
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: string;
        borderRadius: string;
    };
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: string;
    };
};
