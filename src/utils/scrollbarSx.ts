import type { Theme } from '@mui/material/styles';

/**
 * Thin, light-grey scrollbar for the Ips popup lists. The platform default bar
 * is wide and high-contrast, which is far too heavy next to a 32px option row.
 *
 * Both syntaxes are needed: Firefox only understands the standard
 * `scrollbar-width` / `scrollbar-color` pair, Chrome/Edge/Safari only the
 * `::-webkit-scrollbar` pseudo-elements.
 */
export const thinScrollbarSx = (theme: Theme) => ({
  scrollbarWidth: 'thin',
  scrollbarColor: `${theme.palette.grey[300]} transparent`,
  '&::-webkit-scrollbar': {
    width: 6,
    height: 6,
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.grey[300],
    // px, not a spacing unit: sx multiplies a bare `borderRadius` number by
    // theme.shape.borderRadius, which would round the 6px bar off entirely.
    borderRadius: '3px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: theme.palette.grey[400],
  },
});
