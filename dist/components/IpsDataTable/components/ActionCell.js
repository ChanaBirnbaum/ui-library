import { jsx as l, jsxs as f, Fragment as t } from "react/jsx-runtime";
import x from "@mui/material/TableCell";
import e from "@mui/material/IconButton";
import r from "@mui/material/Tooltip";
import k from "@mui/material/Box";
import b from "@mui/icons-material/Edit";
import g from "@mui/icons-material/Delete";
import u from "@mui/icons-material/Save";
import y from "@mui/icons-material/Close";
function D({
  row: o,
  onEdit: c,
  onStartInlineEdit: m,
  onDeleteRequest: s,
  onSaveInline: p,
  onCancelEdit: h,
  isEditing: a,
  hasInlineEdit: n,
  customActions: C = [],
  cellSx: d
}) {
  const z = C.filter((i) => !i.isVisible || i.isVisible(o));
  return /* @__PURE__ */ l(x, { align: "right", sx: { whiteSpace: "nowrap", ...d }, children: /* @__PURE__ */ l(k, { sx: { display: "flex", gap: 0.5, justifyContent: "flex-end" }, children: a ? /* @__PURE__ */ f(t, { children: [
    /* @__PURE__ */ l(r, { title: "שמור", children: /* @__PURE__ */ l(e, { size: "small", color: "primary", onClick: p, children: /* @__PURE__ */ l(u, { fontSize: "small" }) }) }),
    /* @__PURE__ */ l(r, { title: "ביטול", children: /* @__PURE__ */ l(e, { size: "small", onClick: h, children: /* @__PURE__ */ l(y, { fontSize: "small" }) }) })
  ] }) : /* @__PURE__ */ f(t, { children: [
    (n || c) && /* @__PURE__ */ l(r, { title: "עריכה", children: /* @__PURE__ */ l(
      e,
      {
        size: "small",
        onClick: () => n ? m == null ? void 0 : m() : c == null ? void 0 : c(o),
        children: /* @__PURE__ */ l(b, { fontSize: "small" })
      }
    ) }),
    s && /* @__PURE__ */ l(r, { title: "מחיקה", children: /* @__PURE__ */ l(
      e,
      {
        size: "small",
        color: "error",
        onClick: () => s(o),
        children: /* @__PURE__ */ l(g, { fontSize: "small" })
      }
    ) }),
    z.map((i) => /* @__PURE__ */ l(r, { title: i.label, children: /* @__PURE__ */ l(
      e,
      {
        size: "small",
        color: i.variant === "danger" ? "error" : "default",
        onClick: () => i.onClick(o),
        children: i.icon
      }
    ) }, i.key))
  ] }) }) });
}
export {
  D as ActionCell
};
