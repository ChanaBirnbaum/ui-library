import { jsxs as R, Fragment as ae, jsx as e } from "react/jsx-runtime";
import { forwardRef as pe } from "react";
import ce from "@mui/material/Drawer";
import de from "@mui/material/SwipeableDrawer";
import i from "@mui/material/Box";
import he from "@mui/material/IconButton";
import me from "@mui/material/CircularProgress";
import H from "@mui/material/Divider";
import fe from "@mui/material/SvgIcon";
import ue from "@mui/material/Typography";
import { useTheme as xe } from "@mui/material/styles";
const we = (o) => /* @__PURE__ */ e(fe, { ...o, viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) }), ge = "Close", be = "90%", M = 24, x = { widthPx: 40, heightPx: 4 }, ye = () => {
};
function N(o) {
  return typeof o == "number" ? `${o}px` : o;
}
const Se = pe(function(A, w) {
  const {
    open: F,
    onClose: t,
    anchor: r = "right",
    variant: p = "temporary",
    size: U = 400,
    maxSize: j,
    showPuller: X,
    closeButtonLabel: $ = ge,
    title: g,
    icon: c,
    children: q,
    actions: b,
    dividers: y = !1,
    showCloseButton: d = !0,
    disableBackdropClose: V = !1,
    disableEscapeKeyDown: W = !1,
    hideBackdrop: Y = !1,
    elevation: K,
    loading: S = !1,
    keepMounted: Z = !1,
    rtl: h = !1,
    idPrefix: P = "ips-drawer",
    renderHeader: n,
    renderFooter: l,
    sx: G,
    ...v
  } = A, B = xe(), m = `${P}-title`, f = `${P}-content`, C = () => t == null ? void 0 : t("closeButton"), T = { requestClose: C, titleId: m, contentId: f }, D = (E, s) => {
    s === "backdropClick" && V || t == null || t(s);
  }, J = (E, s) => {
    if (s) {
      D(E, s);
      return;
    }
    t == null || t("swipe");
  }, Q = B.direction !== "rtl" ? r : r === "left" ? "right" : r === "right" ? "left" : r, I = r === "bottom" && p === "temporary", ee = X ?? I, te = r === "left" || r === "right", k = N(U), a = N(j ?? (r === "bottom" ? be : void 0)), re = te ? { width: k, ...a ? { maxWidth: a } : {} } : { height: k, ...a ? { maxHeight: a } : {} }, oe = r === "bottom" ? { borderTopLeftRadius: M, borderTopRightRadius: M } : {}, ie = !n && (g != null || c != null || d), u = n != null || ie, se = !l && b != null, L = l != null || se, ne = u ? m : void 0, le = p === "temporary" ? { keepMounted: Z, disableEscapeKeyDown: W } : {}, z = {
    className: "ips-drawer",
    "aria-busy": S ? "true" : void 0,
    "aria-labelledby": ne,
    "aria-describedby": f,
    dir: h ? "rtl" : void 0,
    style: re,
    sx: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      ...oe,
      ...G ?? {}
    }
  }, O = {
    open: F,
    anchor: Q,
    variant: p,
    hideBackdrop: Y,
    elevation: K,
    ...le
  }, _ = /* @__PURE__ */ R(ae, { children: [
    ee && /* @__PURE__ */ e(
      i,
      {
        className: "ips-drawer-puller",
        "aria-hidden": "true",
        sx: {
          width: x.widthPx,
          height: x.heightPx,
          borderRadius: x.heightPx / 2,
          bgcolor: B.palette.grey[300],
          mx: "auto",
          mt: 1.5,
          flexShrink: 0
        }
      }
    ),
    u && (n ? n(T) : /* @__PURE__ */ R(
      i,
      {
        id: m,
        className: "ips-drawer-title",
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          py: 1.5,
          flexShrink: 0,
          position: "relative",
          pr: d ? 6 : 2
        },
        children: [
          c && /* @__PURE__ */ e(i, { component: "span", sx: { display: "flex", flexShrink: 0 }, children: c }),
          /* @__PURE__ */ e(
            ue,
            {
              component: "span",
              variant: "h6",
              sx: { flex: 1, fontWeight: 600, fontSize: "1rem", lineHeight: 1.4 },
              children: g
            }
          ),
          d && /* @__PURE__ */ e(
            he,
            {
              "aria-label": $,
              onClick: C,
              size: "small",
              sx: {
                position: "absolute",
                right: h ? "auto" : 8,
                left: h ? 8 : "auto",
                top: "50%",
                transform: "translateY(-50%)"
              },
              children: /* @__PURE__ */ e(we, { fontSize: "small" })
            }
          )
        ]
      }
    )),
    u && y && /* @__PURE__ */ e(H, { sx: { flexShrink: 0 } }),
    /* @__PURE__ */ e(
      i,
      {
        id: f,
        className: "ips-drawer-content",
        sx: {
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          p: 2
        },
        children: q
      }
    ),
    L && y && /* @__PURE__ */ e(H, { sx: { flexShrink: 0 } }),
    L && (l ? l(T) : /* @__PURE__ */ e(
      i,
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
        children: b
      }
    )),
    S && /* @__PURE__ */ e(
      i,
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
        children: /* @__PURE__ */ e(me, {})
      }
    )
  ] });
  return I ? /* @__PURE__ */ e(
    de,
    {
      ...O,
      slotProps: { paper: z },
      PaperProps: { ref: w },
      ...v,
      onClose: J,
      onOpen: ye,
      disableSwipeToOpen: !0,
      children: _
    }
  ) : /* @__PURE__ */ e(
    ce,
    {
      ...O,
      slotProps: { paper: { ...z, ref: w } },
      ...v,
      onClose: D,
      children: _
    }
  );
});
Se.displayName = "IpsDrawer";
export {
  Se as IpsDrawer
};
