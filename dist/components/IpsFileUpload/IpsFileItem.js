import { jsxs as o, Fragment as I, jsx as e } from "react/jsx-runtime";
import { useState as u } from "react";
import l from "@mui/material/Box";
import a from "@mui/material/Typography";
import p from "@mui/material/IconButton";
import g from "@mui/material/Tooltip";
import b from "@mui/material/Dialog";
import w from "@mui/material/DialogContent";
import k from "@mui/material/DialogTitle";
import { useTheme as z } from "@mui/material/styles";
import S from "@mui/icons-material/Image";
import W from "@mui/icons-material/PictureAsPdf";
import C from "@mui/icons-material/InsertDriveFile";
import F from "@mui/icons-material/Visibility";
import T from "@mui/icons-material/Delete";
import U from "@mui/icons-material/Close";
function j(t) {
  return t < 1024 * 1024 ? `${(t / 1024).toFixed(0)} KB` : `${(t / (1024 * 1024)).toFixed(2)} MB`;
}
function P(t) {
  return t.type.startsWith("image/") ? /* @__PURE__ */ e(S, { fontSize: "small", color: "primary" }) : t.type === "application/pdf" ? /* @__PURE__ */ e(W, { fontSize: "small", color: "error" }) : /* @__PURE__ */ e(C, { fontSize: "small", color: "action" });
}
function R(t) {
  return t.type.startsWith("image/") ? "image" : t.type === "application/pdf" ? "pdf" : "none";
}
function L({ file: t, hasError: n = !1, errorMessage: c, onDelete: y }) {
  const i = z(), [r, s] = u(null), [d, f] = u("none"), v = () => {
    const x = R(t), m = URL.createObjectURL(t);
    if (x === "none") {
      window.open(m, "_blank"), setTimeout(() => URL.revokeObjectURL(m), 1e3);
      return;
    }
    s(m), f(x);
  }, h = () => {
    r && URL.revokeObjectURL(r), s(null), f("none");
  };
  return /* @__PURE__ */ o(I, { children: [
    /* @__PURE__ */ o(
      l,
      {
        className: "ips-file-item",
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 1.5,
          py: 0.75,
          borderRadius: 1,
          bgcolor: n ? i.palette.error.light : i.palette.grey[50],
          border: `1px solid ${n ? i.palette.error.main : i.palette.divider}`,
          "&:hover": {
            bgcolor: n ? i.palette.error.light : i.palette.grey[100]
          }
        },
        children: [
          /* @__PURE__ */ e(l, { sx: { flexShrink: 0, display: "flex", alignItems: "center" }, children: P(t) }),
          /* @__PURE__ */ o(l, { sx: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ e(
              a,
              {
                variant: "body2",
                noWrap: !0,
                title: t.name,
                sx: { color: n ? "error.dark" : "text.primary" },
                children: t.name
              }
            ),
            n && c && /* @__PURE__ */ e(a, { variant: "caption", color: "error.dark", children: c })
          ] }),
          /* @__PURE__ */ e(
            a,
            {
              variant: "caption",
              color: "text.secondary",
              sx: { flexShrink: 0, whiteSpace: "nowrap" },
              children: j(t.size)
            }
          ),
          /* @__PURE__ */ e(g, { title: "תצוגה מקדימה", placement: "top", children: /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(p, { size: "small", onClick: v, "aria-label": "תצוגה מקדימה", children: /* @__PURE__ */ e(F, { fontSize: "small" }) }) }) }),
          /* @__PURE__ */ e(g, { title: "מחק", placement: "top", children: /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
            p,
            {
              size: "small",
              onClick: () => y(t),
              "aria-label": "מחק קובץ",
              sx: { color: "error.main" },
              children: /* @__PURE__ */ e(T, { fontSize: "small" })
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ o(
      b,
      {
        open: !!r,
        onClose: h,
        maxWidth: "md",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ o(k, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ e(a, { variant: "subtitle1", noWrap: !0, sx: { maxWidth: "80%" }, children: t.name }),
            /* @__PURE__ */ e(p, { size: "small", onClick: h, "aria-label": "סגור", children: /* @__PURE__ */ e(U, { fontSize: "small" }) })
          ] }),
          /* @__PURE__ */ o(w, { dividers: !0, sx: { p: 0 }, children: [
            d === "image" && r && /* @__PURE__ */ e(l, { sx: { textAlign: "center", p: 2 }, children: /* @__PURE__ */ e(
              "img",
              {
                src: r,
                alt: t.name,
                style: { maxWidth: "100%", maxHeight: "70vh", objectFit: "contain" }
              }
            ) }),
            d === "pdf" && r && /* @__PURE__ */ e(
              "iframe",
              {
                src: r,
                title: t.name,
                width: "100%",
                height: "500px",
                style: { border: "none", display: "block" }
              }
            )
          ] })
        ]
      }
    )
  ] });
}
L.displayName = "IpsFileItem";
export {
  L as IpsFileItem
};
