import { jsxs as A, jsx as n } from "react/jsx-runtime";
import { useState as N, useMemo as _, useCallback as b } from "react";
import x from "react-dom";
import F from "@mui/icons-material/CheckCircleOutline";
import v from "@mui/icons-material/InfoOutlined";
import z from "@mui/icons-material/WarningAmber";
import D from "@mui/icons-material/ErrorOutline";
import { useTheme as P } from "@mui/material/styles";
import { IpsToastContext as G } from "./IpsToastContext.js";
import { IpsToastItem as L, TOAST_EDGE_OFFSET_PX as C } from "./IpsToast.js";
import { TOAST_TYPES as i } from "./IpsToast.types.js";
const k = "close", g = {
  [i.SUCCESS]: {
    bgColor: "#5cb85c",
    icon: /* @__PURE__ */ n(F, { fontSize: "small" })
  },
  [i.INFO]: {
    bgColor: "#5bc0de",
    icon: /* @__PURE__ */ n(v, { fontSize: "small" })
  },
  [i.WARNING]: {
    bgColor: "#e4872b",
    icon: /* @__PURE__ */ n(z, { fontSize: "small" })
  },
  [i.DANGER]: {
    bgColor: "#d9534f",
    icon: /* @__PURE__ */ n(D, { fontSize: "small" })
  }
};
function y(m, s, e) {
  const t = C, r = {
    position: "fixed",
    zIndex: s,
    display: "flex",
    flexDirection: "column",
    gap: 8
  };
  switch (m) {
    case "bottom-right":
      return { ...r, bottom: e, right: t };
    case "bottom-left":
      return { ...r, bottom: e, left: t };
    case "top-right":
      return { ...r, top: t, right: t };
    case "top-left":
      return { ...r, top: t, left: t };
  }
}
function H({
  children: m,
  deleteTime: s = 3e3,
  maxToasts: e = 5,
  position: t = "bottom-right",
  bottomOffset: r = C,
  closeButtonLabel: T = k
}) {
  const [I, p] = N([]), S = P(), d = _(() => {
    let o = 0;
    return () => ++o;
  }, []), a = b((o) => {
    p((f) => f.filter((c) => c.id !== o));
  }, []), h = b(
    (o, f) => {
      const c = g[o] ?? g[i.INFO], u = d(), O = {
        id: u,
        message: f,
        type: o,
        icon: c.icon,
        bgColor: c.bgColor
      };
      p((E) => {
        const l = [...E, O];
        return l.length > e ? l.slice(l.length - e) : l;
      }), setTimeout(() => a(u), s);
    },
    [s, e, d, a]
  );
  return /* @__PURE__ */ A(G.Provider, { value: h, children: [
    m,
    x.createPortal(
      /* @__PURE__ */ n(
        "div",
        {
          className: "ips-toast-container",
          style: y(t, S.zIndex.snackbar, r),
          dir: "rtl",
          "data-testid": "ips-toast-container",
          children: I.map((o) => /* @__PURE__ */ n(L, { toast: o, onClose: a, closeButtonLabel: T }, o.id))
        }
      ),
      document.body
    )
  ] });
}
export {
  H as IpsToastProvider
};
