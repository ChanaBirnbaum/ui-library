import { jsx as i, jsxs as A } from "react/jsx-runtime";
import V from "react";
import C from "@mui/material/TableBody";
import t from "@mui/material/TableRow";
import d from "@mui/material/TableCell";
import { flexRender as j } from "../../../node_modules/@tanstack/react-table/build/lib/index.js";
import { DataCell as B } from "./DataCell.js";
import { ActionCell as D } from "./ActionCell.js";
function K({
  table: l,
  editingState: s,
  onEditValueChange: b,
  onStartInlineEdit: a,
  onSaveInline: c,
  onCancelEdit: m,
  onEdit: v,
  onDeleteRequest: y,
  expandedContent: u,
  customActions: F = [],
  hasInlineEdit: p,
  hasActionColumn: I,
  variant: E,
  cellSx: f,
  renderEmptyState: M,
  isLoading: R
}) {
  const g = l.getRowModel().rows, h = l.getVisibleLeafColumns().length;
  return !R && g.length === 0 ? /* @__PURE__ */ i(C, { children: /* @__PURE__ */ i(t, { children: /* @__PURE__ */ i(
    d,
    {
      colSpan: h,
      align: "center",
      sx: { py: 6, color: "text.secondary", border: "none" },
      children: M()
    }
  ) }) }) : /* @__PURE__ */ i(C, { children: g.map((o, T) => {
    const r = s.rowId === o.id, x = o.getIsExpanded(), _ = T % 2 === 0, k = {
      backgroundColor: E === "striped" && !_ ? "grey.50" : void 0,
      "&:hover": { backgroundColor: "action.hover" },
      ...x ? { backgroundColor: "#EFF6FF" } : {},
      ...r ? {
        outline: "2px solid",
        outlineColor: "primary.main",
        outlineOffset: "-2px"
      } : {}
    };
    return /* @__PURE__ */ A(V.Fragment, { children: [
      /* @__PURE__ */ i(t, { sx: k, children: o.getVisibleCells().map((n) => {
        const e = n.column.id;
        return e === "_expand" ? /* @__PURE__ */ i(d, { sx: { width: 48, p: 0.5 }, children: j(n.column.columnDef.cell, n.getContext()) }, n.id) : e === "_actions" ? /* @__PURE__ */ i(
          D,
          {
            row: o.original,
            onEdit: v,
            onStartInlineEdit: () => a(o.id),
            onDeleteRequest: y,
            onSaveInline: () => c(o.id),
            onCancelEdit: m,
            isEditing: r,
            hasInlineEdit: p,
            customActions: F,
            cellSx: f
          },
          n.id
        ) : /* @__PURE__ */ i(
          B,
          {
            cell: n,
            isEditing: r,
            editValue: s.values[e],
            onEditValueChange: b,
            onActivateEdit: p ? () => a(o.id) : void 0,
            onCommit: () => c(o.id),
            onCancel: m,
            cellSx: f
          },
          n.id
        );
      }) }),
      x && u && /* @__PURE__ */ i(t, { children: /* @__PURE__ */ i(
        d,
        {
          colSpan: h,
          sx: { p: 0 },
          children: u(o.original)
        }
      ) })
    ] }, o.id);
  }) });
}
export {
  K as TableBody
};
