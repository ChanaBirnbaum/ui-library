import type { CSSProperties } from 'react'

// ─── Custom theme shape ───────────────────────────────────────────────────────
// Exported so consumers can type-annotate variables they destructure from theme.custom.
export interface IpsThemeCustom {
  spacing: {
    /** MUI spacing factor (8). theme.spacing(1) === 8px */
    base: number
    /** Full Figma spacing scale in px */
    scale: { 0: number; 1: number; 2: number; 3: number; 4: number; 6: number; 8: number }
  }
  radius: {
    /** shape.borderRadius */
    base: number
    /** radius-button token — also applied via MuiButton component override */
    button: number
    /** radius-input token — also applied via MuiOutlinedInput component override */
    input: number
    /** radius-card token — also applied via MuiCard component override */
    card: number
    /** radius-chip token — also applied via MuiChip component override */
    chip: number
    sm: number
    lg: number
  }
  charts: {
    /** Monochromatic ramp (7 stops), lightest → darkest */
    mono: string[]
    /** Categorical palette (8 colours) for multi-series charts */
    categorical: string[]
  }
}

// ─── MUI module augmentations ─────────────────────────────────────────────────

declare module '@mui/material/styles' {
  /** Adds theme.typography.display (48 px / bold / 1.25 lh) */
  interface TypographyVariants {
    display: CSSProperties
  }
  interface TypographyVariantsOptions {
    display?: CSSProperties
  }
  /** Adds theme.custom with radius, spacing scale, and chart palettes */
  interface Theme {
    custom: IpsThemeCustom
  }
  interface ThemeOptions {
    custom?: Partial<IpsThemeCustom>
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display: true
  }
}
