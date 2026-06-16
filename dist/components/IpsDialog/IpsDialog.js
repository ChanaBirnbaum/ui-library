import { jsx as o, jsxs as v } from "react/jsx-runtime";
import { forwardRef as w } from "react";
import O from "@mui/material/Dialog";
import Y from "@mui/material/DialogTitle";
import Z from "@mui/material/DialogContent";
import J from "@mui/material/DialogActions";
import V from "@mui/material/IconButton";
import X from "@mui/material/CircularProgress";
import h from "@mui/material/Box";
import oo from "@mui/material/SvgIcon";
import eo from "@mui/material/Fade";
import to from "@mui/material/Grow";
import io from "@mui/material/Slide";
import ro from "@mui/material/Zoom";
import { useTheme as so } from "@mui/material/styles";
import { useMediaQuery as lo } from "@mui/material";
const no = (r) => /* @__PURE__ */ o(oo, { ...r, viewBox: "0 0 24 24", children: /* @__PURE__ */ o("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) }), ao = w(
  function({ children: s, ...l }, n) {
    return /* @__PURE__ */ o(io, { direction: "up", ref: n, ...l, children: s });
  }
), co = {
  fade: eo,
  grow: to,
  slide: ao,
  zoom: ro
}, po = w(function(s, l) {
  const {
    open: n,
    onClose: e,
    title: x,
    icon: a,
    children: D,
    actions: g,
    maxWidth: c = "sm",
    fullWidth: M = !0,
    fullScreen: N = !1,
    fullScreenBreakpoint: d,
    scroll: z = "paper",
    dividers: F = !1,
    showCloseButton: p = !0,
    disableBackdropClose: T = !1,
    disableEscapeKeyDown: P = !1,
    transition: W = "fade",
    loading: b = !1,
    keepMounted: j = !1,
    rtl: m = !1,
    idPrefix: y = "ips-dialog",
    renderHeader: t,
    renderFooter: i,
    sx: A,
    ...H
  } = s, L = so(), R = d ? L.breakpoints.down(d) : "(min-width: 99999px)", $ = lo(R), Q = N || !!(d && $), f = `${y}-title`, u = `${y}-content`, I = () => e == null ? void 0 : e("closeButton"), C = { requestClose: I, titleId: f, contentId: u }, U = (fo, k) => {
    k === "backdropClick" && T || e == null || e(k);
  }, B = typeof c == "number", _ = B ? !1 : c, q = co[W], E = !t && (x != null || a != null || p), S = t != null || E, G = !i && g != null, K = i != null || G;
  return /* @__PURE__ */ v(
    O,
    {
      open: n,
      onClose: U,
      maxWidth: _,
      fullWidth: M,
      fullScreen: Q,
      scroll: z,
      disableEscapeKeyDown: P,
      keepMounted: j,
      "aria-labelledby": S ? f : void 0,
      "aria-describedby": u,
      slots: { transition: q },
      slotProps: {
        paper: {
          // Forward external ref to the paper surface (which carries ips-dialog class)
          ref: l,
          className: "ips-dialog",
          "aria-busy": b ? "true" : void 0,
          dir: m ? "rtl" : void 0,
          sx: {
            position: "relative",
            ...B ? { maxWidth: c } : {},
            ...A ?? {}
          }
        }
      },
      ...H,
      children: [
        S && (t ? t(C) : /* @__PURE__ */ v(
          Y,
          {
            id: f,
            className: "ips-dialog-title",
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1,
              pr: p ? 6 : 2,
              position: "relative"
            },
            children: [
              a && /* @__PURE__ */ o(h, { component: "span", sx: { display: "flex", flexShrink: 0 }, children: a }),
              /* @__PURE__ */ o(h, { component: "span", sx: { flex: 1 }, children: x }),
              p && /* @__PURE__ */ o(
                V,
                {
                  "aria-label": "Close",
                  onClick: I,
                  size: "small",
                  sx: {
                    position: "absolute",
                    right: m ? "auto" : 8,
                    left: m ? 8 : "auto",
                    top: "50%",
                    transform: "translateY(-50%)"
                  },
                  children: /* @__PURE__ */ o(no, { fontSize: "small" })
                }
              )
            ]
          }
        )),
        /* @__PURE__ */ o(
          Z,
          {
            id: u,
            className: "ips-dialog-content",
            dividers: F,
            children: D
          }
        ),
        K && (i ? i(C) : /* @__PURE__ */ o(J, { className: "ips-dialog-actions", children: g })),
        b && /* @__PURE__ */ o(
          h,
          {
            sx: {
              position: "absolute",
              inset: 0,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "rgba(255,255,255,0.7)",
              borderRadius: "inherit"
            },
            children: /* @__PURE__ */ o(X, {})
          }
        )
      ]
    }
  );
});
po.displayName = "IpsDialog";
export {
  po as IpsDialog
};
