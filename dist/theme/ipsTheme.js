import { createTheme as o } from "@mui/material/styles";
import { palette as a } from "./tokens/palette.js";
import { typography as t } from "./tokens/typography.js";
const i = o({
  palette: {
    primary: {
      main: a.primary,
      dark: a.primaryDark
    },
    success: {
      main: a.success
    },
    error: {
      main: a.danger
    },
    text: {
      primary: a.gray900,
      secondary: a.gray500
    },
    background: {
      default: a.white
    }
  },
  typography: {
    fontFamily: t.fonts.body,
    h1: { fontFamily: t.fonts.heading },
    h2: { fontFamily: t.fonts.heading },
    h3: { fontFamily: t.fonts.heading },
    h4: { fontFamily: t.fonts.heading },
    h5: { fontFamily: t.fonts.heading },
    h6: { fontFamily: t.fonts.heading },
    fontSize: 14
  },
  shape: {
    borderRadius: 6
  }
});
export {
  i as ipsTheme
};
