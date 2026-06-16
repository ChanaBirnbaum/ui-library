import { jsxs as t, jsx as o } from "react/jsx-runtime";
import r from "@mui/material/Box";
import a from "@mui/material/IconButton";
import s from "@mui/material/Typography";
import l from "@mui/icons-material/Close";
function x({ toast: e, onClose: i }) {
  return /* @__PURE__ */ t(
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
        backgroundColor: e.bgColor,
        color: "white",
        boxShadow: 4,
        minWidth: "22em",
        maxWidth: "32em",
        animation: "ips-toast-enter 0.3s ease forwards",
        "@keyframes ips-toast-enter": {
          from: { transform: "translateX(100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 }
        }
      },
      children: [
        /* @__PURE__ */ o(r, { sx: { flexShrink: 0, display: "flex", alignItems: "center" }, children: e.icon }),
        /* @__PURE__ */ o(s, { variant: "body2", sx: { flex: 1, fontWeight: 500, lineHeight: 1.4 }, children: e.message }),
        /* @__PURE__ */ o(
          a,
          {
            size: "small",
            onClick: () => i(e.id),
            sx: { color: "white", ml: 0.5, flexShrink: 0 },
            "aria-label": "close",
            children: /* @__PURE__ */ o(l, { fontSize: "small" })
          }
        )
      ]
    }
  );
}
export {
  x as IpsToastItem
};
