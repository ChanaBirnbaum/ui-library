import { jsx as n, jsxs as A } from "react/jsx-runtime";
import H from "react";
import D from "@mui/material/TableBody";
import d from "@mui/material/TableRow";
import t from "@mui/material/TableCell";
import { flexRender as J } from "../../../node_modules/@tanstack/react-table/build/lib/index.js";
import { DataCell as K } from "./DataCell.js";
import { ActionCell as N } from "./ActionCell.js";
function oo({
  table: p,
  editingState: f,
  onEditValueChange: S,
  onStartInlineEdit: h,
  onSaveInline: u,
  onCancelEdit: x,
  onEdit: T,
  onDeleteRequest: V,
  expandedContent: g,
  customActions: j = [],
  hasInlineEdit: b,
  hasActionColumn: P,
  variant: k,
  cellSx: C,
  renderEmptyState: w,
  isLoading: B,
  onRowClick: c,
  virtualItems: e,
  paddingTop: y = 0,
  paddingBottom: _ = 0,
  measureElement: L,
  cellOverflow: O = "wrap",
  autoWidths: s
}) {
  const a = p.getRowModel().rows, l = p.getVisibleLeafColumns().length;
  if (!B && a.length === 0)
    return /* @__PURE__ */ n(D, { children: /* @__PURE__ */ n(d, { children: /* @__PURE__ */ n(
      t,
      {
        colSpan: l,
        align: "center",
        sx: { py: 6, color: "text.secondary", border: "none" },
        children: w()
      }
    ) }) });
  const q = e ? e.map((o) => a[o.index]).filter((o) => !!o) : a;
  return /* @__PURE__ */ A(D, { children: [
    y > 0 && /* @__PURE__ */ n(d, { children: /* @__PURE__ */ n(
      t,
      {
        colSpan: l,
        sx: { p: 0, border: "none", height: y }
      }
    ) }),
    q.map((o, v) => {
      const F = e ? e[v].index : v, m = f.rowId === o.id, E = o.getIsExpanded(), z = F % 2 === 0, G = {
        backgroundColor: k === "striped" && !z ? "grey.50" : void 0,
        "&:hover": { backgroundColor: "grey.100" },
        cursor: c ? "pointer" : void 0,
        ...E ? { backgroundColor: "#EFF6FF" } : {},
        ...m ? { outline: "2px solid", outlineColor: "primary.main", outlineOffset: "-2px" } : {}
      };
      return /* @__PURE__ */ A(H.Fragment, { children: [
        /* @__PURE__ */ n(
          d,
          {
            sx: G,
            "data-index": e ? F : void 0,
            ref: e ? L : void 0,
            onClick: c ? (i) => c(o.original, i) : void 0,
            children: o.getVisibleCells().map((i) => {
              var M;
              const r = i.column.id;
              if (r === "_select" || r === "_expand") {
                const R = r === "_select" ? 40 : 48;
                return /* @__PURE__ */ n(
                  t,
                  {
                    sx: { width: R, maxWidth: R, p: 0.5 },
                    children: J(i.column.columnDef.cell, i.getContext())
                  },
                  i.id
                );
              }
              return r === "_actions" ? /* @__PURE__ */ n(
                N,
                {
                  row: o.original,
                  onEdit: T,
                  onStartInlineEdit: () => h(o.id),
                  onDeleteRequest: V,
                  onSaveInline: () => u(o.id),
                  onCancelEdit: x,
                  isEditing: m,
                  hasInlineEdit: b,
                  customActions: j,
                  cellSx: C,
                  width: (M = i.column.columnDef.meta) == null ? void 0 : M.width
                },
                i.id
              ) : /* @__PURE__ */ n(
                K,
                {
                  cell: i,
                  isEditing: m,
                  editValue: f.values[r],
                  onEditValueChange: S,
                  onActivateEdit: b ? () => h(o.id) : void 0,
                  onCommit: () => u(o.id),
                  onCancel: x,
                  cellSx: C,
                  cellOverflow: O,
                  autoWidth: s == null ? void 0 : s[r]
                },
                i.id
              );
            })
          }
        ),
        E && g && /* @__PURE__ */ n(d, { children: /* @__PURE__ */ n(t, { colSpan: l, sx: { p: 0 }, children: g(o.original) }) })
      ] }, o.id);
    }),
    _ > 0 && /* @__PURE__ */ n(d, { children: /* @__PURE__ */ n(
      t,
      {
        colSpan: l,
        sx: { p: 0, border: "none", height: _ }
      }
    ) })
  ] });
}
export {
  oo as TableBody
};
