import { jsx as l, jsxs as t, Fragment as f } from "react/jsx-runtime";
import k from "@mui/material/TableCell";
import r from "@mui/material/IconButton";
import e from "@mui/material/Tooltip";
import x from "@mui/material/Box";
import g from "@mui/icons-material/Edit";
import b from "@mui/icons-material/Delete";
import u from "@mui/icons-material/Save";
import y from "@mui/icons-material/Close";
function P({
  row: o,
  onEdit: c,
  onStartInlineEdit: m,
  onDeleteRequest: s,
  onSaveInline: p,
  onCancelEdit: a,
  isEditing: h,
  hasInlineEdit: n,
  customActions: C = [],
  cellSx: d
}) {
  const z = C.filter((i) => !i.isVisible || i.isVisible(o));
  return /* @__PURE__ */ l(
    k,
    {
      align: "right",
      sx: { whiteSpace: "nowrap", ...d },
      onClick: (i) => i.stopPropagation(),
      children: /* @__PURE__ */ l(x, { sx: { display: "flex", gap: 0.5, justifyContent: "flex-end" }, children: h ? /* @__PURE__ */ t(f, { children: [
        /* @__PURE__ */ l(e, { title: "שמור", children: /* @__PURE__ */ l(r, { size: "small", color: "primary", onClick: p, children: /* @__PURE__ */ l(u, { fontSize: "small" }) }) }),
        /* @__PURE__ */ l(e, { title: "ביטול", children: /* @__PURE__ */ l(r, { size: "small", onClick: a, children: /* @__PURE__ */ l(y, { fontSize: "small" }) }) })
      ] }) : /* @__PURE__ */ t(f, { children: [
        (n || c) && /* @__PURE__ */ l(e, { title: "עריכה", children: /* @__PURE__ */ l(
          r,
          {
            size: "small",
            onClick: () => n ? m == null ? void 0 : m() : c == null ? void 0 : c(o),
            children: /* @__PURE__ */ l(g, { fontSize: "small" })
          }
        ) }),
        s && /* @__PURE__ */ l(e, { title: "מחיקה", children: /* @__PURE__ */ l(
          r,
          {
            size: "small",
            color: "error",
            onClick: () => s(o),
            children: /* @__PURE__ */ l(b, { fontSize: "small" })
          }
        ) }),
        z.map((i) => /* @__PURE__ */ l(e, { title: i.label, children: /* @__PURE__ */ l(
          r,
          {
            size: "small",
            color: i.variant === "danger" ? "error" : "default",
            onClick: () => i.onClick(o),
            children: i.icon
          }
        ) }, i.key))
      ] }) })
    }
  );
}
export {
  P as ActionCell
};
