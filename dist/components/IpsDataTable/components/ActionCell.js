import { jsx as l, jsxs as f, Fragment as p } from "react/jsx-runtime";
import k from "@mui/material/TableCell";
import r from "@mui/material/IconButton";
import e from "@mui/material/Tooltip";
import g from "@mui/material/Box";
import b from "@mui/icons-material/Edit";
import u from "@mui/icons-material/Delete";
import y from "@mui/icons-material/Save";
import j from "@mui/icons-material/Close";
function W({
  row: o,
  onEdit: c,
  onStartInlineEdit: m,
  onDeleteRequest: s,
  onSaveInline: a,
  onCancelEdit: h,
  isEditing: C,
  hasInlineEdit: n,
  customActions: d = [],
  cellSx: x,
  width: t
}) {
  const z = d.filter((i) => !i.isVisible || i.isVisible(o));
  return /* @__PURE__ */ l(
    k,
    {
      align: "right",
      sx: { whiteSpace: "nowrap", width: t, maxWidth: t, ...x },
      onClick: (i) => i.stopPropagation(),
      children: /* @__PURE__ */ l(g, { sx: { display: "flex", gap: 0.5, justifyContent: "flex-end" }, children: C ? /* @__PURE__ */ f(p, { children: [
        /* @__PURE__ */ l(e, { title: "שמור", children: /* @__PURE__ */ l(r, { size: "small", color: "primary", onClick: a, children: /* @__PURE__ */ l(y, { fontSize: "small" }) }) }),
        /* @__PURE__ */ l(e, { title: "ביטול", children: /* @__PURE__ */ l(r, { size: "small", onClick: h, children: /* @__PURE__ */ l(j, { fontSize: "small" }) }) })
      ] }) : /* @__PURE__ */ f(p, { children: [
        (n || c) && /* @__PURE__ */ l(e, { title: "עריכה", children: /* @__PURE__ */ l(
          r,
          {
            size: "small",
            onClick: () => n ? m == null ? void 0 : m() : c == null ? void 0 : c(o),
            children: /* @__PURE__ */ l(b, { fontSize: "small" })
          }
        ) }),
        s && /* @__PURE__ */ l(e, { title: "מחיקה", children: /* @__PURE__ */ l(
          r,
          {
            size: "small",
            color: "error",
            onClick: () => s(o),
            children: /* @__PURE__ */ l(u, { fontSize: "small" })
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
  W as ActionCell
};
