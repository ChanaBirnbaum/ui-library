import { jsxs as n, jsx as e } from "react/jsx-runtime";
import r from "@mui/material/Box";
import s from "@mui/material/IconButton";
import l from "@mui/material/Typography";
import m from "@mui/icons-material/Close";
const c = 24, i = `calc(100vw - ${c * 2}px)`;
function g({ toast: o, onClose: t, closeButtonLabel: a }) {
  return /* @__PURE__ */ n(
    r,
    {
      className: "ips-toast",
      role: "alert",
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2,
        py: 1.5,
        mb: 1,
        borderRadius: 2,
        backgroundColor: o.bgColor,
        color: "white",
        boxShadow: 4,
        minWidth: `min(22em, ${i})`,
        maxWidth: `min(32em, ${i})`,
        animation: "ips-toast-enter 0.3s ease forwards",
        "@keyframes ips-toast-enter": {
          from: { transform: "translateX(100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 }
        }
      },
      children: [
        /* @__PURE__ */ e(r, { sx: { flexShrink: 0, display: "flex", alignItems: "center" }, children: o.icon }),
        /* @__PURE__ */ e(l, { variant: "body2", sx: { flex: 1, fontWeight: 500, lineHeight: 1.4 }, children: o.message }),
        /* @__PURE__ */ e(
          s,
          {
            size: "small",
            onClick: () => t(o.id),
            sx: { color: "white", ml: 0.5, flexShrink: 0 },
            "aria-label": a,
            children: /* @__PURE__ */ e(m, { fontSize: "small" })
          }
        )
      ]
    }
  );
}
export {
  g as IpsToastItem,
  c as TOAST_EDGE_OFFSET_PX
};
