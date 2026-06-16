import { jsx as o, jsxs as L } from "react/jsx-runtime";
import { useState as i, useMemo as se } from "react";
import G from "@mui/material/Box";
import de from "@mui/material/Paper";
import ce from "@mui/material/Table";
import me from "@mui/material/TableContainer";
import ue from "@mui/material/TextField";
import ge from "@mui/material/Typography";
import pe from "@mui/material/InputAdornment";
import fe from "@mui/icons-material/Search";
import { useReactTable as he } from "../../node_modules/@tanstack/react-table/build/lib/index.js";
import { flexRender as Ye } from "../../node_modules/@tanstack/react-table/build/lib/index.js";
import { TableHeader as Se } from "./components/TableHeader.js";
import { TableBody as Ce } from "./components/TableBody.js";
import { TableFooter as be } from "./components/TableFooter.js";
import { SkeletonRows as we } from "./components/SkeletonRows.js";
import { ExpandCell as xe } from "./components/ExpandCell.js";
import { DeleteConfirmDialog as ve } from "./components/DeleteConfirmDialog.js";
import { getExpandedRowModel as Re, getPaginationRowModel as Ee, getFilteredRowModel as ye, getSortedRowModel as Fe, getCoreRowModel as Ie } from "../../node_modules/@tanstack/table-core/build/lib/index.js";
const Me = {
  sm: { py: 0.5, px: 1, fontSize: "0.75rem", height: 32 },
  md: { py: 1, px: 2, fontSize: "0.875rem", height: 48 },
  lg: { py: 1.5, px: 2, fontSize: "1rem", height: 64 }
}, Te = {
  default: {},
  bordered: {
    "& .MuiTableCell-root": {
      border: "1px solid",
      borderColor: "divider"
    }
  },
  striped: {}
};
function Ke(O) {
  const {
    data: k,
    columns: v,
    expandedContent: R,
    onEdit: E,
    onDelete: d,
    onSave: g,
    customActions: y = [],
    pagination: p = !1,
    sorting: f = !1,
    filtering: a = !1,
    isLoading: h = !1,
    emptyState: q,
    stickyHeader: B = !1,
    variant: F = "default",
    size: I = "md",
    sx: H
  } = O, X = f !== !1, S = Array.isArray(f), M = a === !0 || typeof a == "object" && a !== null && a.global !== !1, T = typeof a == "object" && a !== null && a.perColumn === !0, z = p !== !1, n = p === !1 ? null : p ?? {}, c = !!R, D = !!g, C = !!E || !!d || D || y.length > 0, [N, W] = i([]), [Z, J] = i([]), [P, A] = i(""), [{ pageIndex: K, pageSize: j }, Q] = i({
    pageIndex: 0,
    pageSize: (n == null ? void 0 : n.pageSize) ?? 10
  }), [U, Y] = i({}), [V, m] = i({
    rowId: null,
    values: {}
  }), [b, w] = i(null), $ = se(() => {
    const e = [...v];
    return c && e.unshift({
      id: "_expand",
      header: () => null,
      cell: ({ row: t }) => /* @__PURE__ */ o(xe, { row: t }),
      enableSorting: !1,
      enableColumnFilter: !1,
      size: 48
    }), C && e.push({
      id: "_actions",
      header: () => null,
      cell: () => null,
      // actual rendering done in TableBody
      enableSorting: !1,
      enableColumnFilter: !1
    }), e;
  }, [v, c, C]), l = he({
    data: k,
    columns: $,
    state: {
      sorting: S ? f : N,
      columnFilters: Z,
      globalFilter: P,
      pagination: { pageIndex: K, pageSize: j },
      expanded: U
    },
    onSortingChange: S ? void 0 : W,
    onColumnFiltersChange: J,
    onGlobalFilterChange: A,
    onPaginationChange: Q,
    onExpandedChange: Y,
    getCoreRowModel: Ie(),
    getSortedRowModel: X ? Fe() : void 0,
    getFilteredRowModel: M || T ? ye() : void 0,
    getPaginationRowModel: z ? Ee() : void 0,
    getExpandedRowModel: c ? Re() : void 0,
    getRowCanExpand: c ? () => !0 : void 0,
    manualPagination: !1,
    manualSorting: S
  }), ee = (e) => {
    var u;
    const t = l.getRowModel().rows.find((s) => s.id === e);
    if (!t) return;
    const r = {};
    for (const s of l.getAllColumns())
      (u = s.columnDef.meta) != null && u.editable && (r[s.id] = t.getValue(s.id));
    m({ rowId: e, values: r });
  }, oe = (e, t) => {
    m((r) => ({
      ...r,
      values: { ...r.values, [e]: t }
    }));
  }, te = async (e) => {
    const t = l.getRowModel().rows.find((u) => u.id === e);
    if (!t || !g) return;
    const r = Object.assign({}, t.original, V.values);
    await g(t.original, r), m({ rowId: null, values: {} });
  }, ne = () => {
    m({ rowId: null, values: {} });
  }, le = (e) => w(e), ae = () => {
    b && d && d(b), w(null);
  }, re = () => w(null), ie = () => q ?? /* @__PURE__ */ o(ge, { variant: "body2", color: "text.secondary", children: "אין נתונים להצגה" }), x = Me[I], _ = l.getVisibleLeafColumns().length;
  return /* @__PURE__ */ L(G, { sx: H, children: [
    M && /* @__PURE__ */ o(G, { sx: { mb: 1.5 }, children: /* @__PURE__ */ o(
      ue,
      {
        value: P,
        onChange: (e) => A(e.target.value),
        placeholder: "חיפוש...",
        size: "small",
        InputProps: {
          startAdornment: /* @__PURE__ */ o(pe, { position: "start", children: /* @__PURE__ */ o(fe, { fontSize: "small", color: "action" }) })
        },
        sx: { minWidth: 240 }
      }
    ) }),
    /* @__PURE__ */ o(
      de,
      {
        variant: "outlined",
        sx: { borderRadius: 1, overflow: "hidden", ...Te[F] },
        children: /* @__PURE__ */ o(me, { children: /* @__PURE__ */ L(ce, { stickyHeader: B, size: I === "sm" ? "small" : "medium", children: [
          /* @__PURE__ */ o(
            Se,
            {
              table: l,
              showPerColumnFilter: T,
              cellSx: x
            }
          ),
          h ? /* @__PURE__ */ o("tbody", { children: /* @__PURE__ */ o(
            we,
            {
              rowCount: j,
              columnCount: _,
              cellSx: x
            }
          ) }) : /* @__PURE__ */ o(
            Ce,
            {
              table: l,
              editingState: V,
              onEditValueChange: oe,
              onStartInlineEdit: ee,
              onSaveInline: te,
              onCancelEdit: ne,
              onEdit: E,
              onDeleteRequest: d ? le : void 0,
              expandedContent: R,
              customActions: y,
              hasInlineEdit: D,
              hasActionColumn: C,
              variant: F,
              cellSx: x,
              renderEmptyState: ie,
              isLoading: h
            }
          ),
          z && !h && /* @__PURE__ */ o(
            be,
            {
              table: l,
              totalRows: l.getFilteredRowModel().rows.length,
              pageSizeOptions: n == null ? void 0 : n.pageSizeOptions,
              showTotal: n == null ? void 0 : n.showTotal,
              colSpan: _
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ o(
      ve,
      {
        open: b !== null,
        onConfirm: ae,
        onCancel: re
      }
    )
  ] });
}
export {
  Ke as IpsDataTable,
  Ye as flexRender
};
