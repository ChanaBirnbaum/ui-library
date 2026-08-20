import { jsx as n, jsxs as F } from "react/jsx-runtime";
import O from "react";
import E from "@mui/material/TableBody";
import r from "@mui/material/TableRow";
import t from "@mui/material/TableCell";
import { flexRender as q } from "../../../node_modules/@tanstack/react-table/build/lib/index.js";
import { DataCell as z } from "./DataCell.js";
import { ActionCell as G } from "./ActionCell.js";
function Y({
  table: m,
  editingState: p,
  onEditValueChange: M,
  onStartInlineEdit: u,
  onSaveInline: f,
  onCancelEdit: h,
  onEdit: R,
  onDeleteRequest: A,
  expandedContent: x,
  customActions: S = [],
  hasInlineEdit: g,
  hasActionColumn: H,
  variant: T,
  cellSx: b,
  renderEmptyState: V,
  isLoading: j,
  onRowClick: c,
  virtualItems: l,
  paddingTop: C = 0,
  paddingBottom: y = 0
}) {
  const s = m.getRowModel().rows, d = m.getVisibleLeafColumns().length;
  if (!j && s.length === 0)
    return /* @__PURE__ */ n(E, { children: /* @__PURE__ */ n(r, { children: /* @__PURE__ */ n(
      t,
      {
        colSpan: d,
        align: "center",
        sx: { py: 6, color: "text.secondary", border: "none" },
        children: V()
      }
    ) }) });
  const k = l ? l.map((o) => s[o.index]).filter((o) => !!o) : s;
  return /* @__PURE__ */ F(E, { children: [
    C > 0 && /* @__PURE__ */ n(r, { children: /* @__PURE__ */ n(
      t,
      {
        colSpan: d,
        sx: { p: 0, border: "none", height: C }
      }
    ) }),
    k.map((o, _) => {
      const D = l ? l[_].index : _, a = p.rowId === o.id, v = o.getIsExpanded(), B = D % 2 === 0, L = {
        backgroundColor: T === "striped" && !B ? "grey.50" : void 0,
        "&:hover": { backgroundColor: "grey.100" },
        cursor: c ? "pointer" : void 0,
        ...v ? { backgroundColor: "#EFF6FF" } : {},
        ...a ? { outline: "2px solid", outlineColor: "primary.main", outlineOffset: "-2px" } : {}
      };
      return /* @__PURE__ */ F(O.Fragment, { children: [
        /* @__PURE__ */ n(
          r,
          {
            sx: L,
            onClick: c ? (e) => c(o.original, e) : void 0,
            children: o.getVisibleCells().map((e) => {
              const i = e.column.id;
              return i === "_select" || i === "_expand" ? /* @__PURE__ */ n(
                t,
                {
                  sx: { width: i === "_select" ? 40 : 48, p: 0.5 },
                  children: q(e.column.columnDef.cell, e.getContext())
                },
                e.id
              ) : i === "_actions" ? /* @__PURE__ */ n(
                G,
                {
                  row: o.original,
                  onEdit: R,
                  onStartInlineEdit: () => u(o.id),
                  onDeleteRequest: A,
                  onSaveInline: () => f(o.id),
                  onCancelEdit: h,
                  isEditing: a,
                  hasInlineEdit: g,
                  customActions: S,
                  cellSx: b
                },
                e.id
              ) : /* @__PURE__ */ n(
                z,
                {
                  cell: e,
                  isEditing: a,
                  editValue: p.values[i],
                  onEditValueChange: M,
                  onActivateEdit: g ? () => u(o.id) : void 0,
                  onCommit: () => f(o.id),
                  onCancel: h,
                  cellSx: b
                },
                e.id
              );
            })
          }
        ),
        v && x && /* @__PURE__ */ n(r, { children: /* @__PURE__ */ n(t, { colSpan: d, sx: { p: 0 }, children: x(o.original) }) })
      ] }, o.id);
    }),
    y > 0 && /* @__PURE__ */ n(r, { children: /* @__PURE__ */ n(
      t,
      {
        colSpan: d,
        sx: { p: 0, border: "none", height: y }
      }
    ) })
  ] });
}
export {
  Y as TableBody
};
