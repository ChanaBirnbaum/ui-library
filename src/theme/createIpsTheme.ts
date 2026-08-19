import { createTheme } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'
import type { IpsThemeCustom } from './theme.augmentation'
import {
  lightPalette,
  darkPalette,
  spacingTokens,
  radiusTokens,
  typographyStyles,
  lightCharts,
  darkCharts,
} from './tokens/generated'

// Importing from theme.augmentation ensures the module augmentation is included
// in any compilation unit that imports this factory (even without a tsconfig path).
import type { IpsThemeCustom as _augCheck } from './theme.augmentation'

/** Convert a solid hex colour + alpha to an rgba() string. */
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/**
 * Creates the IPS MUI v7 theme for the requested colour mode.
 *
 * Palette comes from Figma theme/Light or theme/Dark tokens.
 * Spacing, radius, and typography are mode-independent.
 * Chart palettes are exposed under `theme.custom.charts`.
 */
export function createIpsTheme(mode: 'light' | 'dark'): Theme {
  const p      = mode === 'light' ? lightPalette : darkPalette
  const charts = mode === 'light' ? lightCharts  : darkCharts

  // The Figma action tokens export the primary colour at several alpha values
  // (0.08 / 0.12 / 0.24 / 0.38). We normalise to canonical MUI overlay opacities
  // so that interactive states stay visually consistent across colour schemes:
  //   hover              → rgba(base, 0.08)
  //   selected / focus   → rgba(base, 0.12)   [Figma focus was 0.24 — clamped down]
  //   disabledBackground → rgba(base, 0.12)
  //   disabled (text)    → text.disabled colour from the same mode's palette
  // See THEME_NOTES.md for the full rationale.
  const ab = p.actionBase

  const custom: IpsThemeCustom = {
    spacing: spacingTokens,
    radius:  radiusTokens,
    charts:  { mono: [...charts.mono], categorical: [...charts.categorical] },
  }

  return createTheme({
    palette: {
      mode,
      primary:    { ...p.primary },
      secondary:  { ...p.secondary },
      error:      { main: p.error.main },
      warning:    { main: p.warning.main },
      success:    { main: p.success.main },
      info:       { main: p.info.main },
      text:       { ...p.text },
      background: { ...p.background },
      divider:    p.divider,
      grey: {
        50:  p.grey[50],  100: p.grey[100], 200: p.grey[200],
        300: p.grey[300], 400: p.grey[400], 500: p.grey[500],
        600: p.grey[600], 700: p.grey[700], 800: p.grey[800],
        900: p.grey[900],
      },
      action: {
        hover:              hexToRgba(ab, 0.08),
        selected:           hexToRgba(ab, 0.12),
        focus:              hexToRgba(ab, 0.12),
        disabled:           p.text.disabled,
        disabledBackground: hexToRgba(ab, 0.12),
      },
    },

    /** spacing-base = 8; theme.spacing(1) === 8px */
    spacing: spacingTokens.base,

    shape: {
      /** radius-base token */
      borderRadius: radiusTokens.base,
    },

    typography: {
      /**
       * fontFamily is NOT in the Figma tokens; set explicitly. Rubik carries
       * both Latin and Hebrew, so it leads, with Heebo/Inter behind it for
       * hosts that have not loaded it. The library ships no font file - the
       * host page is what loads Rubik.
       *
       * This single value governs every component: the typography tokens carry
       * no family of their own, and MUI stamps `theme.typography.fontFamily`
       * onto the parts that do not inherit (Chip labels above all).
       */
      fontFamily: '"Rubik", "Heebo", "Inter", sans-serif',
      fontSize:   14,
      display:    { ...typographyStyles.display },
      h1:         { ...typographyStyles.h1 },
      h2:         { ...typographyStyles.h2 },
      h3:         { ...typographyStyles.h3 },
      h4:         { ...typographyStyles.h4 },
      subtitle1:  { ...typographyStyles.subtitle1 },
      subtitle2:  { ...typographyStyles.subtitle2 },
      body1:      { ...typographyStyles.body1 },
      body2:      { ...typographyStyles.body2 },
      button:     { ...typographyStyles.button },
      caption:    { ...typographyStyles.caption },
      overline:   { ...typographyStyles.overline },
    },

    custom,

    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: p.background.paper,
            borderRadius: radiusTokens.input, // radius-input token
            '&:hover:not(.Mui-disabled):not(.Mui-error):not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
              borderColor: p.text.primary,
            },
            '&.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
              borderColor: p.primary.main,
              borderWidth: '2px',
            },
            '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
              borderColor: p.grey[200],
            },
            '&.Mui-disabled': {
              backgroundColor: mode === 'light' ? p.grey[50] : p.background.default,
            },
          },
          input: {
            padding: '8px 14px',
          },
          notchedOutline: {
            borderColor: p.grey[300],
          },
        },
      },

      MuiTextField: {
        styleOverrides: {
          root: { width: '288px' },
        },
      },

      // MUI's Autocomplete bakes its own padding onto the outlined input
      // (root: 9px + input: 7.5px 4px 7.5px 5px) which stacks with the
      // MuiOutlinedInput override above and makes IpsAutocomplete render
      // ~17px taller than IpsTextField. Reset both to zero and give the
      // input the same 8px 14px padding as IpsTextField; MuiOutlinedInput's
      // own endAdornment variants (unchanged) then take care of the
      // dropdown/clear icon clearance, exactly as they already do for an
      // IpsTextField with an end adornment.
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              padding: 0,
              '& .MuiAutocomplete-input': {
                padding: '8px 14px',
              },
            },
          },
        },
      },

      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius:  radiusTokens.button, // radius-button token
            textTransform: 'none',              // not in tokens; design preference
            fontWeight:    typographyStyles.button.fontWeight,
            fontSize:      typographyStyles.button.fontSize,
            lineHeight:    typographyStyles.button.lineHeight,
            letterSpacing: typographyStyles.button.letterSpacing,
          },
          sizeSmall:  { padding: '6px 16px'   },
          sizeMedium: { padding: '10px 20px'  },
          outlined: {
            borderWidth: '1.5px',
            '&:hover': { borderWidth: '1.5px' },
          },
          outlinedPrimary: {
            borderColor: p.primary.main,
            color:       p.primary.main,
            '&:hover': {
              backgroundColor: hexToRgba(p.primary.main, 0.08),
              borderColor:     p.primary.main,
            },
          },
          containedPrimary: {
            backgroundColor: p.primary.main,
            color:           p.primary.contrastText,
            '&:hover': { backgroundColor: p.primary.dark },
          },
        },
      },

      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 44, height: 20, padding: 0,
            '& .MuiSwitch-switchBase': {
              padding: 0, margin: 2, transitionDuration: '200ms',
              '&.Mui-checked': {
                transform: 'translateX(24px)',
                color: '#FFFFFF',
                // backgroundColor on .MuiSwitch-track is set unconditionally below (grey),
                // so we must explicitly override it in the checked state.
                '& + .MuiSwitch-track': { opacity: 1, backgroundColor: p.primary.main },
              },
              '&.Mui-disabled':             { opacity: 0.5 },
              '&.Mui-disabled + .MuiSwitch-track': { opacity: 0.5 },
            },
            '& .MuiSwitch-thumb': {
              width: 16, height: 16,
              backgroundColor: '#FFFFFF',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
            },
            '& .MuiSwitch-track': {
              borderRadius: 10,
              backgroundColor: p.grey[400],
              opacity: 1,
            },
          },
        },
      },

      MuiFormLabel: {
        styleOverrides: {
          asterisk: { color: p.error.main },
          root: {
            color: p.text.secondary,
            '&.Mui-error': { color: p.error.main },
          },
        },
      },

      // radius-card and radius-chip applied via theme.components (not touching component files).
      // The same values are also available under theme.custom.radius for direct access.
      MuiCard: {
        styleOverrides: {
          root: { borderRadius: radiusTokens.card },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: radiusTokens.chip },
        },
      },

      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: p.grey[400],
            '&:hover': { backgroundColor: hexToRgba(ab, 0.08) },
            '&.Mui-checked': { color: p.primary.main },
            '&.Mui-disabled': { color: p.grey[300] },
          },
        },
      },

      MuiRadio: {
        styleOverrides: {
          root: {
            color: p.grey[400],
            '&:hover': { backgroundColor: hexToRgba(ab, 0.08) },
            '&.Mui-checked': { color: p.primary.main },
            '&.Mui-disabled': { color: p.grey[300] },
          },
        },
      },

      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: p.background.paper,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            borderRadius: radiusTokens.base,
          },
        },
      },

      MuiMenuItem: {
        styleOverrides: {
          root: {
            '&:hover': { backgroundColor: hexToRgba(ab, 0.08) },
            '&.Mui-selected': {
              backgroundColor: hexToRgba(p.primary.main, 0.12),
              '&:hover': { backgroundColor: hexToRgba(p.primary.main, 0.16) },
            },
          },
        },
      },

      MuiFormHelperText: {
        styleOverrides: {
          root: {
            color: p.text.secondary,
            '&.Mui-error': { color: p.error.main },
          },
        },
      },
    },
  })
}
