import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { useState as O, useMemo as T, useCallback as d } from "react";
import x from "react-dom";
import N from "@mui/icons-material/CheckCircleOutline";
import v from "@mui/icons-material/InfoOutlined";
import z from "@mui/icons-material/WarningAmber";
import A from "@mui/icons-material/ErrorOutline";
import { IpsToastContext as E } from "./IpsToastContext.js";
import { IpsToastItem as P } from "./IpsToast.js";
import { TOAST_TYPES as r } from "./IpsToast.types.js";
const u = {
  [r.SUCCESS]: {
    bgColor: "#5cb85c",
    icon: /* @__PURE__ */ e(N, { fontSize: "small" })
  },
  [r.INFO]: {
    bgColor: "#5bc0de",
    icon: /* @__PURE__ */ e(v, { fontSize: "small" })
  },
  [r.WARNING]: {
    bgColor: "#e4872b",
    icon: /* @__PURE__ */ e(z, { fontSize: "small" })
  },
  [r.DANGER]: {
    bgColor: "#d9534f",
    icon: /* @__PURE__ */ e(A, { fontSize: "small" })
  }
};
function y(s) {
  const t = {
    position: "fixed",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    gap: 8
  };
  switch (s) {
    case "bottom-right":
      return { ...t, bottom: 24, right: 24 };
    case "bottom-left":
      return { ...t, bottom: 24, left: 24 };
    case "top-right":
      return { ...t, top: 24, right: 24 };
    case "top-left":
      return { ...t, top: 24, left: 24 };
  }
}
function U({
  children: s,
  deleteTime: t = 3e3,
  maxToasts: c = 5,
  position: b = "bottom-right"
}) {
  const [g, a] = O([]), f = T(() => {
    let o = 0;
    return () => ++o;
  }, []), l = d((o) => {
    a((m) => m.filter((n) => n.id !== o));
  }, []), C = d(
    (o, m) => {
      const n = u[o] ?? u[r.INFO], p = f(), I = {
        id: p,
        message: m,
        type: o,
        icon: n.icon,
        bgColor: n.bgColor
      };
      a((S) => {
        const i = [...S, I];
        return i.length > c ? i.slice(i.length - c) : i;
      }), setTimeout(() => l(p), t);
    },
    [t, c, f, l]
  );
  return /* @__PURE__ */ h(E.Provider, { value: C, children: [
    s,
    x.createPortal(
      /* @__PURE__ */ e(
        "div",
        {
          className: "ips-toast-container",
          style: y(b),
          dir: "rtl",
          "data-testid": "ips-toast-container",
          children: g.map((o) => /* @__PURE__ */ e(P, { toast: o, onClose: l }, o.id))
        }
      ),
      document.body
    )
  ] });
}
export {
  U as IpsToastProvider
};
