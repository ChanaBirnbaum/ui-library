import { jsxs as z, jsx as e } from "react/jsx-runtime";
import { forwardRef as V } from "react";
import W from "@mui/material/Drawer";
import t from "@mui/material/Box";
import X from "@mui/material/IconButton";
import _ from "@mui/material/CircularProgress";
import B from "@mui/material/Divider";
import G from "@mui/material/SvgIcon";
import J from "@mui/material/Typography";
import { useTheme as Q } from "@mui/material/styles";
const U = (m) => /* @__PURE__ */ e(G, { ...m, viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) }), Z = V(function(D, S) {
  const {
    open: H,
    onClose: r,
    anchor: o = "right",
    variant: h = "temporary",
    size: n = 400,
    title: x,
    icon: l,
    children: N,
    actions: u,
    dividers: y = !1,
    showCloseButton: a = !0,
    disableBackdropClose: P = !1,
    disableEscapeKeyDown: j = !1,
    hideBackdrop: M = !1,
    elevation: F,
    loading: g = !1,
    keepMounted: L = !1,
    rtl: c = !1,
    idPrefix: w = "ips-drawer",
    renderHeader: i,
    renderFooter: s,
    sx: $,
    ...O
  } = D, T = Q(), d = `${w}-title`, p = `${w}-content`, b = () => r == null ? void 0 : r("closeButton"), v = { requestClose: b, titleId: d, contentId: p }, Y = (oe, I) => {
    I === "backdropClick" && P || r == null || r(I);
  }, q = T.direction !== "rtl" ? o : o === "left" ? "right" : o === "right" ? "left" : o, A = o === "left" || o === "right", k = typeof n == "number" ? `${n}px` : n, E = A ? { width: k } : { height: k }, K = !i && (x != null || l != null || a), f = i != null || K, R = !s && u != null, C = s != null || R;
  return /* @__PURE__ */ z(
    W,
    {
      open: H,
      onClose: Y,
      anchor: q,
      variant: h,
      hideBackdrop: M,
      elevation: F,
      ...h === "temporary" ? { keepMounted: L, disableEscapeKeyDown: j } : {},
      slotProps: {
        paper: {
          // Forward external ref to paper surface (carries ips-drawer class)
          ref: S,
          className: "ips-drawer",
          "aria-busy": g ? "true" : void 0,
          "aria-labelledby": f ? d : void 0,
          "aria-describedby": p,
          dir: c ? "rtl" : void 0,
          style: E,
          sx: {
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            ...$ ?? {}
          }
        }
      },
      ...O,
      children: [
        f && (i ? i(v) : /* @__PURE__ */ z(
          t,
          {
            id: d,
            className: "ips-drawer-title",
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1.5,
              flexShrink: 0,
              position: "relative",
              pr: a ? 6 : 2
            },
            children: [
              l && /* @__PURE__ */ e(t, { component: "span", sx: { display: "flex", flexShrink: 0 }, children: l }),
              /* @__PURE__ */ e(
                J,
                {
                  component: "span",
                  variant: "h6",
                  sx: { flex: 1, fontWeight: 600, fontSize: "1rem", lineHeight: 1.4 },
                  children: x
                }
              ),
              a && /* @__PURE__ */ e(
                X,
                {
                  "aria-label": "Close",
                  onClick: b,
                  size: "small",
                  sx: {
                    position: "absolute",
                    right: c ? "auto" : 8,
                    left: c ? 8 : "auto",
                    top: "50%",
                    transform: "translateY(-50%)"
                  },
                  children: /* @__PURE__ */ e(U, { fontSize: "small" })
                }
              )
            ]
          }
        )),
        f && y && /* @__PURE__ */ e(B, { sx: { flexShrink: 0 } }),
        /* @__PURE__ */ e(
          t,
          {
            id: p,
            className: "ips-drawer-content",
            sx: {
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              p: 2
            },
            children: N
          }
        ),
        C && y && /* @__PURE__ */ e(B, { sx: { flexShrink: 0 } }),
        C && (s ? s(v) : /* @__PURE__ */ e(
          t,
          {
            className: "ips-drawer-actions",
            sx: {
              display: "flex",
              justifyContent: "flex-end",
              gap: 1,
              px: 2,
              py: 1.5,
              flexShrink: 0
            },
            children: u
          }
        )),
        g && /* @__PURE__ */ e(
          t,
          {
            sx: {
              position: "absolute",
              inset: 0,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "rgba(255,255,255,0.7)"
            },
            children: /* @__PURE__ */ e(_, {})
          }
        )
      ]
    }
  );
});
Z.displayName = "IpsDrawer";
export {
  Z as IpsDrawer
};
