import { createTheme as u } from "@mui/material/styles";
import { radiusTokens as t, lightPalette as c, typographyStyles as i, lightCharts as l, spacingTokens as s, darkPalette as p, darkCharts as b } from "./tokens/generated/index.js";
function a(e, r) {
  const n = parseInt(e.slice(1, 3), 16), o = parseInt(e.slice(3, 5), 16), d = parseInt(e.slice(5, 7), 16);
  return `rgba(${n}, ${o}, ${d}, ${r})`;
}
function y(e) {
  const r = e === "light" ? c : p, n = e === "light" ? l : b, o = r.actionBase, d = {
    spacing: s,
    radius: t,
    charts: { mono: [...n.mono], categorical: [...n.categorical] }
  };
  return u({
    palette: {
      mode: e,
      primary: { ...r.primary },
      secondary: { ...r.secondary },
      error: { main: r.error.main },
      warning: { main: r.warning.main },
      success: { main: r.success.main },
      info: { main: r.info.main },
      text: { ...r.text },
      background: { ...r.background },
      divider: r.divider,
      grey: {
        50: r.grey[50],
        100: r.grey[100],
        200: r.grey[200],
        300: r.grey[300],
        400: r.grey[400],
        500: r.grey[500],
        600: r.grey[600],
        700: r.grey[700],
        800: r.grey[800],
        900: r.grey[900]
      },
      action: {
        hover: a(o, 0.08),
        selected: a(o, 0.12),
        focus: a(o, 0.12),
        disabled: r.text.disabled,
        disabledBackground: a(o, 0.12)
      }
    },
    /** spacing-base = 8; theme.spacing(1) === 8px */
    spacing: s.base,
    shape: {
      /** radius-base token */
      borderRadius: t.base
    },
    typography: {
      /** fontFamily is NOT in the Figma tokens; set explicitly: Inter (Latin) + Heebo (Hebrew fallback) */
      fontFamily: '"Inter", "Heebo", sans-serif',
      fontSize: 14,
      display: { ...i.display },
      h1: { ...i.h1 },
      h2: { ...i.h2 },
      h3: { ...i.h3 },
      h4: { ...i.h4 },
      subtitle1: { ...i.subtitle1 },
      subtitle2: { ...i.subtitle2 },
      body1: { ...i.body1 },
      body2: { ...i.body2 },
      button: { ...i.button },
      caption: { ...i.caption },
      overline: { ...i.overline }
    },
    custom: d,
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: r.background.paper,
            borderRadius: t.input,
            // radius-input token
            "&:hover:not(.Mui-disabled):not(.Mui-error):not(.Mui-focused) .MuiOutlinedInput-notchedOutline": {
              borderColor: r.text.primary
            },
            "&.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline": {
              borderColor: r.primary.main,
              borderWidth: "2px"
            },
            "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
              borderColor: r.grey[200]
            },
            "&.Mui-disabled": {
              backgroundColor: e === "light" ? r.grey[50] : r.background.default
            }
          },
          input: {
            padding: "8px 14px"
          },
          notchedOutline: {
            borderColor: r.grey[300]
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: { width: "288px" }
        }
      },
      MuiButton: {
        defaultProps: {
          disableElevation: !0
        },
        styleOverrides: {
          root: {
            borderRadius: t.button,
            // radius-button token
            textTransform: "none",
            // not in tokens; design preference
            fontWeight: i.button.fontWeight,
            fontSize: i.button.fontSize,
            lineHeight: i.button.lineHeight,
            letterSpacing: i.button.letterSpacing
          },
          sizeSmall: { padding: "6px 16px" },
          sizeMedium: { padding: "10px 20px" },
          outlined: {
            borderWidth: "1.5px",
            "&:hover": { borderWidth: "1.5px" }
          },
          outlinedPrimary: {
            borderColor: r.primary.main,
            color: r.primary.main,
            "&:hover": {
              backgroundColor: a(r.primary.main, 0.08),
              borderColor: r.primary.main
            }
          },
          containedPrimary: {
            backgroundColor: r.primary.main,
            color: r.primary.contrastText,
            "&:hover": { backgroundColor: r.primary.dark }
          }
        }
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 44,
            height: 20,
            padding: 0,
            "& .MuiSwitch-switchBase": {
              padding: 0,
              margin: 2,
              transitionDuration: "200ms",
              "&.Mui-checked": {
                transform: "translateX(24px)",
                color: "#FFFFFF",
                // backgroundColor on .MuiSwitch-track is set unconditionally below (grey),
                // so we must explicitly override it in the checked state.
                "& + .MuiSwitch-track": { opacity: 1, backgroundColor: r.primary.main }
              },
              "&.Mui-disabled": { opacity: 0.5 },
              "&.Mui-disabled + .MuiSwitch-track": { opacity: 0.5 }
            },
            "& .MuiSwitch-thumb": {
              width: 16,
              height: 16,
              backgroundColor: "#FFFFFF",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
            },
            "& .MuiSwitch-track": {
              borderRadius: 10,
              backgroundColor: r.grey[400],
              opacity: 1
            }
          }
        }
      },
      MuiFormLabel: {
        styleOverrides: {
          asterisk: { color: r.error.main },
          root: {
            color: r.text.secondary,
            "&.Mui-error": { color: r.error.main }
          }
        }
      },
      // radius-card and radius-chip applied via theme.components (not touching component files).
      // The same values are also available under theme.custom.radius for direct access.
      MuiCard: {
        styleOverrides: {
          root: { borderRadius: t.card }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: t.chip }
        }
      }
    }
  });
}
export {
  y as createIpsTheme
};
