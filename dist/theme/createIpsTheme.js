import { createTheme as s } from "@mui/material/styles";
import { lightPalette as c, radiusTokens as a, typographyStyles as o, lightCharts as l, spacingTokens as u, darkPalette as p, darkCharts as b } from "./tokens/generated/index.js";
function e(t, r) {
  const n = parseInt(t.slice(1, 3), 16), i = parseInt(t.slice(3, 5), 16), d = parseInt(t.slice(5, 7), 16);
  return `rgba(${n}, ${i}, ${d}, ${r})`;
}
function h(t) {
  const r = t === "light" ? c : p, n = t === "light" ? l : b, i = r.actionBase, d = {
    spacing: u,
    radius: a,
    charts: { mono: [...n.mono], categorical: [...n.categorical] }
  };
  return s({
    palette: {
      mode: t,
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
        hover: e(i, 0.08),
        selected: e(i, 0.12),
        focus: e(i, 0.12),
        disabled: r.text.disabled,
        disabledBackground: e(i, 0.12)
      }
    },
    /** spacing-base = 8; theme.spacing(1) === 8px */
    spacing: u.base,
    shape: {
      /** radius-base token */
      borderRadius: a.base
    },
    typography: {
      /** fontFamily is NOT in the Figma tokens; set explicitly: Inter (Latin) + Heebo (Hebrew fallback) */
      fontFamily: '"Inter", "Heebo", sans-serif',
      fontSize: 14,
      display: { ...o.display },
      h1: { ...o.h1 },
      h2: { ...o.h2 },
      h3: { ...o.h3 },
      h4: { ...o.h4 },
      subtitle1: { ...o.subtitle1 },
      subtitle2: { ...o.subtitle2 },
      body1: { ...o.body1 },
      body2: { ...o.body2 },
      button: { ...o.button },
      caption: { ...o.caption },
      overline: { ...o.overline }
    },
    custom: d,
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: r.background.paper,
            borderRadius: a.input,
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
              backgroundColor: t === "light" ? r.grey[50] : r.background.default
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
            "& .MuiOutlinedInput-root": {
              padding: 0,
              "& .MuiAutocomplete-input": {
                padding: "8px 14px"
              }
            }
          }
        }
      },
      MuiButton: {
        defaultProps: {
          disableElevation: !0
        },
        styleOverrides: {
          root: {
            borderRadius: a.button,
            // radius-button token
            textTransform: "none",
            // not in tokens; design preference
            fontWeight: o.button.fontWeight,
            fontSize: o.button.fontSize,
            lineHeight: o.button.lineHeight,
            letterSpacing: o.button.letterSpacing
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
              backgroundColor: e(r.primary.main, 0.08),
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
          root: { borderRadius: a.card }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: a.chip }
        }
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: r.grey[400],
            "&:hover": { backgroundColor: e(i, 0.08) },
            "&.Mui-checked": { color: r.primary.main },
            "&.Mui-disabled": { color: r.grey[300] }
          }
        }
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            color: r.grey[400],
            "&:hover": { backgroundColor: e(i, 0.08) },
            "&.Mui-checked": { color: r.primary.main },
            "&.Mui-disabled": { color: r.grey[300] }
          }
        }
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: r.background.paper,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            borderRadius: a.base
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&:hover": { backgroundColor: e(i, 0.08) },
            "&.Mui-selected": {
              backgroundColor: e(r.primary.main, 0.12),
              "&:hover": { backgroundColor: e(r.primary.main, 0.16) }
            }
          }
        }
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            color: r.text.secondary,
            "&.Mui-error": { color: r.error.main }
          }
        }
      }
    }
  });
}
export {
  h as createIpsTheme
};
