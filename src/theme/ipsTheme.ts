import { createTheme } from '@mui/material/styles'
import { palette } from './tokens/palette'
import { typography } from './tokens/typography'

export const ipsTheme = createTheme({
  palette: {
    primary: {
      main: palette.primary,
      light: palette.primaryLight,
      dark: palette.primaryDark,
    },
    secondary: {
      main: '#006AFF',
    },
    success: {
      main: palette.success,
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    error: {
      main: palette.danger,
    },
    text: {
      primary: palette.textMain,
      secondary: palette.textSecondary,
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
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: palette.white,
          '&:hover:not(.Mui-disabled):not(.Mui-error):not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.textMain,
          },
          '&.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary,
            borderWidth: '2px',
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.gray200,
          },
          '&.Mui-disabled': {
            backgroundColor: '#F5F5F5',
          },
        },
        input: {
          padding: '8px 14px',
        },
        notchedOutline: {
          borderColor: palette.gray300,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '288px',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: 1.43,
        },
        sizeSmall: {
          padding: '6px 16px',
        },
        sizeMedium: {
          padding: '10px 20px',
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
          },
        },
        outlinedPrimary: {
          borderColor: palette.primary,
          color: palette.primary,
          '&:hover': {
            backgroundColor: `${palette.primary}14`,
            borderColor: palette.primary,
          },
        },
        containedPrimary: {
          backgroundColor: palette.primary,
          color: palette.white,
          '&:hover': {
            backgroundColor: palette.primaryDark,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 44,
          height: 20,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '200ms',
            '&.Mui-checked': {
              transform: 'translateX(24px)',
              color: palette.white,
              '& + .MuiSwitch-track': {
                opacity: 1,
              },
            },
            '&.Mui-disabled': {
              opacity: 0.5,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '& .MuiSwitch-thumb': {
            width: 16,
            height: 16,
            backgroundColor: palette.white,
            boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          },
          '& .MuiSwitch-track': {
            borderRadius: 10,
            backgroundColor: '#C4C6D0',
            opacity: 1,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: palette.danger,
        },
        root: {
          color: palette.gray500,
          '&.Mui-error': {
            color: palette.danger,
          },
        },
      },
    },
  },
})

export type IpsTheme = typeof ipsTheme

export default ipsTheme
