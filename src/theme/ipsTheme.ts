import { createTheme } from '@mui/material/styles'
import { palette } from './tokens/palette'
import { typography } from './tokens/typography'

export const ipsTheme = createTheme({
  palette: {
    primary: {
      main: palette.primary,
      dark: palette.primaryDark,
    },
    success: {
      main: palette.success,
    },
    error: {
      main: palette.danger,
    },
    text: {
      primary: palette.gray900,
      secondary: palette.gray500,
    },
    background: {
      default: palette.white,
    },
  },
  typography: {
    fontFamily: typography.fonts.body,
    h1: { fontFamily: typography.fonts.heading },
    h2: { fontFamily: typography.fonts.heading },
    h3: { fontFamily: typography.fonts.heading },
    h4: { fontFamily: typography.fonts.heading },
    h5: { fontFamily: typography.fonts.heading },
    h6: { fontFamily: typography.fonts.heading },
    fontSize: 14,
  },
  shape: {
    borderRadius: 6,
  },
})

export type IpsTheme = typeof ipsTheme

export default ipsTheme
