import { jsx as t, jsxs as N } from "react/jsx-runtime";
import { useState as r, useRef as ze, useMemo as ye, useEffect as Me } from "react";
import J from "@mui/material/Box";
import Fe from "@mui/material/Paper";
import De from "@mui/material/Table";
import Ae from "@mui/material/TableContainer";
import Pe from "@mui/material/TextField";
import Ve from "@mui/material/Typography";
import _e from "@mui/material/InputAdornment";
import K from "@mui/material/Checkbox";
import ke from "@mui/icons-material/Search";
import { useReactTable as He } from "../../node_modules/@tanstack/react-table/build/lib/index.js";
import { flexRender as Eo } from "../../node_modules/@tanstack/react-table/build/lib/index.js";
import { useVirtualizer as je } from "../../node_modules/@tanstack/react-virtual/dist/esm/index.js";
import { TableHeader as Be } from "./components/TableHeader.js";
import { TableBody as Oe } from "./components/TableBody.js";
import { TableFooter as Ge } from "./components/TableFooter.js";
import { SkeletonRows as Le } from "./components/SkeletonRows.js";
import { ExpandCell as We } from "./components/ExpandCell.js";
import { DeleteConfirmDialog as Xe } from "./components/DeleteConfirmDialog.js";
import { getExpandedRowModel as qe, getPaginationRowModel as Ze, getFilteredRowModel as Ne, getSortedRowModel as Je, getCoreRowModel as Ke } from "../../node_modules/@tanstack/table-core/build/lib/index.js";
const Qe = {
  sm: { py: 0.5, px: 1, fontSize: "0.75rem", height: 32 },
  md: { py: 1, px: 2, fontSize: "0.875rem", height: 48 },
  lg: { py: 1.5, px: 2, fontSize: "1rem", height: 64 }
}, Ue = { sm: 33, md: 49, lg: 65 }, Q = {
  "& .MuiTableBody-root .MuiTableCell-root": {
    borderBottom: "1px solid",
    borderColor: "grey.100"
  }
}, Ye = {
  default: Q,
  bordered: {
    "& .MuiTableCell-root": {
      border: "1px solid",
      borderColor: "divider"
    }
  },
  striped: Q
};
function Ro(U) {
  var Z;
  const {
    data: Y,
    columns: T,
    expandedContent: z,
    onEdit: y,
    onDelete: c,
    onSave: f,
    customActions: M = [],
    pagination: h = !1,
    sorting: S = !1,
    filtering: s = !1,
    isLoading: C = !1,
    emptyState: $,
    stickyHeader: ee = !1,
    variant: F = "default",
    size: w = "md",
    sx: oe,
    onRowClick: te,
    checkboxSelection: b = !1,
    onSelectionChange: D,
    getRowId: A,
    maxHeight: P,
    virtualScroll: g = !1
  } = U, le = S !== !1, R = Array.isArray(S), V = s === !0 || typeof s == "object" && s !== null && s.global !== !1, _ = typeof s == "object" && s !== null && s.perColumn === !0, k = h !== !1, a = h === !1 ? null : h ?? {}, m = !!z, H = !!f, x = !!y || !!c || H || M.length > 0, [ne, ae] = r([]), [ie, re] = r([]), [j, B] = r(""), [{ pageIndex: se, pageSize: O }, de] = r({
    pageIndex: 0,
    pageSize: (a == null ? void 0 : a.pageSize) ?? 10
  }), [ce, ge] = r({}), [G, me] = r({}), [L, u] = r({ rowId: null, values: {} }), [v, E] = r(null), W = ze(null), ue = ye(() => {
    const e = [...T];
    return m && e.unshift({
      id: "_expand",
      header: () => null,
      cell: ({ row: o }) => /* @__PURE__ */ t(We, { row: o }),
      enableSorting: !1,
      enableColumnFilter: !1,
      size: 48
    }), b && e.unshift({
      id: "_select",
      header: ({ table: o }) => /* @__PURE__ */ t(
        K,
        {
          checked: o.getIsAllRowsSelected(),
          indeterminate: o.getIsSomeRowsSelected(),
          onChange: o.getToggleAllRowsSelectedHandler(),
          size: "small",
          sx: { p: 0.5 }
        }
      ),
      cell: ({ row: o }) => /* @__PURE__ */ t(
        K,
        {
          checked: o.getIsSelected(),
          disabled: !o.getCanSelect(),
          onChange: o.getToggleSelectedHandler(),
          size: "small",
          sx: { p: 0.5 },
          onClick: (i) => i.stopPropagation()
        }
      ),
      enableSorting: !1,
      enableColumnFilter: !1,
      size: 40
    }), x && e.push({
      id: "_actions",
      header: () => null,
      cell: () => null,
      enableSorting: !1,
      enableColumnFilter: !1
    }), e;
  }, [T, m, x, b]), l = He({
    data: Y,
    columns: ue,
    state: {
      sorting: R ? S : ne,
      columnFilters: ie,
      globalFilter: j,
      pagination: { pageIndex: se, pageSize: O },
      expanded: ce,
      rowSelection: G
    },
    onSortingChange: R ? void 0 : ae,
    onColumnFiltersChange: re,
    onGlobalFilterChange: B,
    onPaginationChange: de,
    onExpandedChange: ge,
    onRowSelectionChange: me,
    enableRowSelection: b,
    getCoreRowModel: Ke(),
    getSortedRowModel: le ? Je() : void 0,
    getFilteredRowModel: V || _ ? Ne() : void 0,
    getPaginationRowModel: k ? Ze() : void 0,
    getExpandedRowModel: m ? qe() : void 0,
    getRowCanExpand: m ? () => !0 : void 0,
    manualPagination: !1,
    manualSorting: R,
    getRowId: A ? (e) => A(e) : void 0
  });
  Me(() => {
    D && D(l.getSelectedRowModel().rows.map((e) => e.original));
  }, [G]);
  const pe = l.getRowModel().rows, X = je({
    count: g ? pe.length : 0,
    getScrollElement: () => W.current,
    estimateSize: () => Ue[w] ?? 49,
    overscan: 10
  }), n = g ? X.getVirtualItems() : void 0, fe = X.getTotalSize(), he = n != null && n.length ? n[0].start : 0, Se = n != null && n.length ? fe - (((Z = n[n.length - 1]) == null ? void 0 : Z.end) ?? 0) : 0, Ce = (e) => {
    var p;
    const o = l.getRowModel().rows.find((d) => d.id === e);
    if (!o) return;
    const i = {};
    for (const d of l.getAllColumns())
      (p = d.columnDef.meta) != null && p.editable && (i[d.id] = o.getValue(d.id));
    u({ rowId: e, values: i });
  }, we = (e, o) => {
    u((i) => ({ ...i, values: { ...i.values, [e]: o } }));
  }, be = async (e) => {
    const o = l.getRowModel().rows.find((p) => p.id === e);
    if (!o || !f) return;
    const i = Object.assign({}, o.original, L.values);
    await f(o.original, i), u({ rowId: null, values: {} });
  }, Re = () => u({ rowId: null, values: {} }), xe = (e) => E(e), ve = () => {
    v && c && c(v), E(null);
  }, Ee = () => E(null), Ie = () => $ ?? /* @__PURE__ */ t(Ve, { variant: "body2", color: "text.secondary", children: "אין נתונים להצגה" }), I = Qe[w], q = l.getVisibleLeafColumns().length, Te = P != null || g;
  return /* @__PURE__ */ N(J, { sx: oe, children: [
    V && /* @__PURE__ */ t(J, { sx: { mb: 1.5 }, children: /* @__PURE__ */ t(
      Pe,
      {
        value: j,
        onChange: (e) => B(e.target.value),
        placeholder: "חיפוש...",
        size: "small",
        InputProps: {
          startAdornment: /* @__PURE__ */ t(_e, { position: "start", children: /* @__PURE__ */ t(ke, { fontSize: "small", color: "action" }) })
        },
        sx: { minWidth: 240 }
      }
    ) }),
    /* @__PURE__ */ t(
      Fe,
      {
        variant: "outlined",
        sx: { borderRadius: 1, overflow: "hidden", ...Ye[F] },
        children: /* @__PURE__ */ t(
          Ae,
          {
            ref: W,
            sx: Te ? { maxHeight: P ?? 400, overflow: "auto" } : void 0,
            children: /* @__PURE__ */ N(
              De,
              {
                stickyHeader: ee || g,
                size: w === "sm" ? "small" : "medium",
                children: [
                  /* @__PURE__ */ t(
                    Be,
                    {
                      table: l,
                      showPerColumnFilter: _,
                      cellSx: I
                    }
                  ),
                  C ? /* @__PURE__ */ t("tbody", { children: /* @__PURE__ */ t(Le, { rowCount: O, columnCount: q, cellSx: I }) }) : /* @__PURE__ */ t(
                    Oe,
                    {
                      table: l,
                      editingState: L,
                      onEditValueChange: we,
                      onStartInlineEdit: Ce,
                      onSaveInline: be,
                      onCancelEdit: Re,
                      onEdit: y,
                      onDeleteRequest: c ? xe : void 0,
                      expandedContent: z,
                      customActions: M,
                      hasInlineEdit: H,
                      hasActionColumn: x,
                      variant: F,
                      cellSx: I,
                      renderEmptyState: Ie,
                      isLoading: C,
                      onRowClick: te,
                      virtualItems: n,
                      paddingTop: he,
                      paddingBottom: Se
                    }
                  ),
                  k && !C && /* @__PURE__ */ t(
                    Ge,
                    {
                      table: l,
                      totalRows: l.getFilteredRowModel().rows.length,
                      pageSizeOptions: a == null ? void 0 : a.pageSizeOptions,
                      showTotal: a == null ? void 0 : a.showTotal,
                      colSpan: q
                    }
                  )
                ]
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ t(
      Xe,
      {
        open: v !== null,
        onConfirm: ve,
        onCancel: Ee
      }
    )
  ] });
}
export {
  Ro as IpsDataTable,
  Eo as flexRender
};
