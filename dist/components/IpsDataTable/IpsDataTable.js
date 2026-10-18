import { jsx as n, jsxs as X } from "react/jsx-runtime";
import { useState as s, useRef as We, useCallback as Oe, useLayoutEffect as le, useMemo as H, useEffect as je } from "react";
import ie from "@mui/material/Box";
import Le from "@mui/material/Paper";
import qe from "@mui/material/Table";
import Ge from "@mui/material/TableBody";
import Xe from "@mui/material/TableContainer";
import Ze from "@mui/material/TextField";
import Ne from "@mui/material/Typography";
import Je from "@mui/material/InputAdornment";
import ae from "@mui/material/Checkbox";
import Ke from "@mui/icons-material/Search";
import { useReactTable as Qe } from "../../node_modules/@tanstack/react-table/build/lib/index.js";
import { flexRender as Wt } from "../../node_modules/@tanstack/react-table/build/lib/index.js";
import { useVirtualizer as Ue } from "../../node_modules/@tanstack/react-virtual/dist/esm/index.js";
import { TableHeader as Ye } from "./components/TableHeader.js";
import { TableBody as $e } from "./components/TableBody.js";
import { TableFooter as et } from "./components/TableFooter.js";
import { SkeletonRows as tt } from "./components/SkeletonRows.js";
import { ExpandCell as ot } from "./components/ExpandCell.js";
import { DeleteConfirmDialog as nt } from "./components/DeleteConfirmDialog.js";
import { useAutoFitColumns as lt } from "./components/useAutoFitColumns.js";
import { getExpandedRowModel as it, getPaginationRowModel as at, getFilteredRowModel as rt, getSortedRowModel as st, getCoreRowModel as dt } from "../../node_modules/@tanstack/table-core/build/lib/index.js";
const ct = {
  sm: { py: 0.5, px: 1, fontSize: "0.75rem", minHeight: 32 },
  md: { py: 1, px: 2, fontSize: "0.875rem", minHeight: 48 },
  lg: { py: 1.5, px: 2, fontSize: "1rem", minHeight: 64 }
}, re = { sm: 33, md: 49, lg: 65 }, se = {
  "& .MuiTableBody-root .MuiTableCell-root": {
    borderBottom: "1px solid",
    borderColor: "grey.100"
  }
}, ht = {
  default: se,
  bordered: {
    "& .MuiTableCell-root": {
      border: "1px solid",
      borderColor: "divider"
    }
  },
  striped: se
};
function Vt(de) {
  var ne;
  const {
    data: ce,
    columns: Z,
    expandedContent: N,
    onEdit: I,
    onDelete: p,
    onSave: T,
    customActions: F = [],
    pagination: A = !1,
    sorting: D = !1,
    filtering: h = !1,
    isLoading: u = !1,
    emptyState: he,
    stickyHeader: ue = !1,
    variant: J = "default",
    size: d = "md",
    sx: _,
    onRowClick: ge,
    checkboxSelection: w = !1,
    onSelectionChange: K,
    getRowId: Q,
    maxHeight: k,
    virtualScroll: R = !1,
    cellOverflow: v = "wrap"
  } = de, me = D !== !1, V = Array.isArray(D), P = h === !0 || typeof h == "object" && h !== null && h.global !== !1, B = typeof h == "object" && h !== null && h.perColumn === !0, y = A !== !1, r = A === !1 ? null : A ?? {}, g = !!N, E = !!T, S = !!I || !!p || E || F.length > 0, M = 16 + 34 * Math.max(
    (E || I ? 1 : 0) + (p ? 1 : 0) + F.length,
    E ? 2 : 0
  ), [fe, pe] = s([]), [we, Se] = s([]), [U, Y] = s(""), [{ pageIndex: W, pageSize: m }, Ce] = s({
    pageIndex: 0,
    pageSize: (r == null ? void 0 : r.pageSize) ?? 10
  }), [be, xe] = s({}), [$, Re] = s({}), [ee, z] = s({ rowId: null, values: {} }), [O, j] = s(null), C = We(null), [f, ve] = s({ width: 0, height: 0, headerHeight: 0 }), b = Oe(() => {
    const e = C.current;
    if (!e) return;
    const t = e.querySelector("thead"), o = {
      width: e.clientWidth,
      height: e.clientHeight,
      headerHeight: t ? t.getBoundingClientRect().height : 0
    };
    ve(
      (l) => l.width === o.width && l.height === o.height && l.headerHeight === o.headerHeight ? l : o
    );
  }, []);
  le(() => {
    const e = C.current;
    if (!e || (b(), typeof ResizeObserver > "u")) return;
    const t = new ResizeObserver(b);
    t.observe(e);
    const o = e.querySelector("thead");
    return o && t.observe(o), () => t.disconnect();
  }, [b]), le(() => {
    b();
  }, [b, u, d, B, P]);
  const x = H(() => {
    const e = [...Z];
    return g && e.unshift({
      id: "_expand",
      header: () => null,
      cell: ({ row: t }) => /* @__PURE__ */ n(ot, { row: t }),
      enableSorting: !1,
      enableColumnFilter: !1,
      size: 48,
      meta: { width: 48 }
    }), w && e.unshift({
      id: "_select",
      header: ({ table: t }) => /* @__PURE__ */ n(
        ae,
        {
          checked: t.getIsAllRowsSelected(),
          indeterminate: t.getIsSomeRowsSelected(),
          onChange: t.getToggleAllRowsSelectedHandler(),
          size: "small",
          sx: { p: 0.5 }
        }
      ),
      cell: ({ row: t }) => /* @__PURE__ */ n(
        ae,
        {
          checked: t.getIsSelected(),
          disabled: !t.getCanSelect(),
          onChange: t.getToggleSelectedHandler(),
          size: "small",
          sx: { p: 0.5 },
          onClick: (o) => o.stopPropagation()
        }
      ),
      enableSorting: !1,
      enableColumnFilter: !1,
      size: 40,
      meta: { width: 40 }
    }), S && e.push({
      id: "_actions",
      header: () => null,
      cell: () => null,
      enableSorting: !1,
      enableColumnFilter: !1,
      meta: { width: M }
    }), e;
  }, [Z, g, S, w, M]), i = Qe({
    data: ce,
    columns: x,
    state: {
      sorting: V ? D : fe,
      columnFilters: we,
      globalFilter: U,
      pagination: { pageIndex: W, pageSize: m },
      expanded: be,
      rowSelection: $
    },
    onSortingChange: V ? void 0 : pe,
    onColumnFiltersChange: Se,
    onGlobalFilterChange: Y,
    onPaginationChange: Ce,
    onExpandedChange: xe,
    onRowSelectionChange: Re,
    enableRowSelection: w,
    getCoreRowModel: dt(),
    getSortedRowModel: me ? st() : void 0,
    getFilteredRowModel: P || B ? rt() : void 0,
    getPaginationRowModel: y ? at() : void 0,
    getExpandedRowModel: g ? it() : void 0,
    getRowCanExpand: g ? () => !0 : void 0,
    manualPagination: !1,
    manualSorting: V,
    getRowId: Q ? (e) => Q(e) : void 0
  });
  je(() => {
    K && K(i.getSelectedRowModel().rows.map((e) => e.original));
  }, [$]);
  const L = i.getRowModel().rows, q = Ue({
    count: R ? L.length : 0,
    getScrollElement: () => C.current,
    estimateSize: () => re[d] ?? 49,
    overscan: 10,
    // Measure real row heights so rows with wrapped text are not clipped.
    measureElement: (e) => e.getBoundingClientRect().height
  }), a = R ? q.getVirtualItems() : void 0, ye = q.getTotalSize(), Ee = a != null && a.length ? a[0].start : 0, Me = a != null && a.length ? ye - (((ne = a[a.length - 1]) == null ? void 0 : ne.end) ?? 0) : 0, ze = (e) => {
    var l;
    const t = i.getRowModel().rows.find((c) => c.id === e);
    if (!t) return;
    const o = {};
    for (const c of i.getAllColumns())
      (l = c.columnDef.meta) != null && l.editable && (o[c.id] = t.getValue(c.id));
    z({ rowId: e, values: o });
  }, He = (e, t) => {
    z((o) => ({ ...o, values: { ...o.values, [e]: t } }));
  }, Ie = async (e) => {
    const t = i.getRowModel().rows.find((l) => l.id === e);
    if (!t || !T) return;
    const o = Object.assign({}, t.original, ee.values);
    await T(t.original, o), z({ rowId: null, values: {} });
  }, Te = () => z({ rowId: null, values: {} }), Fe = (e) => j(e), Ae = () => {
    O && p && p(O), j(null);
  }, De = () => j(null), _e = () => he ?? /* @__PURE__ */ n(Ne, { variant: "body2", color: "text.secondary", children: "אין נתונים להצגה" }), G = ct[d], te = i.getVisibleLeafColumns().length, ke = H(() => {
    var t;
    const e = {};
    for (const o of x) {
      const l = o.id, c = (t = o.meta) == null ? void 0 : t.width;
      l && typeof c == "number" && (e[l] = c);
    }
    return w && (e._select = 40), g && (e._expand = 48), S && (e._actions = M), e;
  }, [
    x,
    w,
    g,
    S,
    M
  ]), Ve = H(
    () => [
      x.map((e) => e.id ?? "").join("|"),
      L.length,
      W,
      m,
      d,
      u ? "loading" : "ready"
    ].join("#"),
    [x, L.length, W, m, d, u]
  ), { widths: oe, isMeasuring: Pe } = lt({
    enabled: v === "ellipsis" && !u,
    containerRef: C,
    availableWidth: f.width,
    signature: Ve,
    pinnedWidths: ke
  }), Be = H(() => {
    const e = re[d] ?? 49, t = f.height - f.headerHeight;
    if (f.height <= 0 || t <= 0) return m;
    const o = Math.floor(t / e);
    return Math.max(1, y ? Math.min(o, m) : o);
  }, [f.height, f.headerHeight, d, m, y]);
  return /* @__PURE__ */ X(
    ie,
    {
      sx: [
        {
          // Fill whatever height the consumer allocated (resolves to `auto`
          // when the parent is auto-height), and never spill out of it.
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxHeight: "100%",
          minHeight: 0,
          overflow: "hidden"
        },
        ...Array.isArray(_) ? _ : [_]
      ],
      children: [
        P && /* @__PURE__ */ n(ie, { sx: { mb: 1.5, flexShrink: 0 }, children: /* @__PURE__ */ n(
          Ze,
          {
            value: U,
            onChange: (e) => Y(e.target.value),
            placeholder: "חיפוש...",
            size: "small",
            InputProps: {
              startAdornment: /* @__PURE__ */ n(Je, { position: "start", children: /* @__PURE__ */ n(Ke, { fontSize: "small", color: "action" }) })
            },
            sx: { minWidth: 240 }
          }
        ) }),
        /* @__PURE__ */ X(
          Le,
          {
            variant: "outlined",
            sx: {
              borderRadius: 1,
              overflow: "hidden",
              // The Paper owns the available height; the scroll area and the
              // pagination bar share it as flex children.
              display: "flex",
              flexDirection: "column",
              flex: "1 1 auto",
              minHeight: 0,
              ...k != null ? { maxHeight: k } : {},
              ...ht[J]
            },
            children: [
              /* @__PURE__ */ n(
                Xe,
                {
                  ref: C,
                  sx: { flex: "1 1 auto", minHeight: 0, overflow: "auto" },
                  children: /* @__PURE__ */ X(
                    qe,
                    {
                      stickyHeader: ue || R || k != null,
                      size: d === "sm" ? "small" : "medium",
                      sx: v === "ellipsis" ? { width: Pe ? "auto" : "100%" } : void 0,
                      children: [
                        /* @__PURE__ */ n(
                          Ye,
                          {
                            table: i,
                            showPerColumnFilter: B,
                            cellSx: G,
                            cellOverflow: v,
                            autoWidths: oe
                          }
                        ),
                        u ? /* @__PURE__ */ n(Ge, { children: /* @__PURE__ */ n(
                          tt,
                          {
                            rowCount: Be,
                            columnCount: te,
                            cellSx: G
                          }
                        ) }) : /* @__PURE__ */ n(
                          $e,
                          {
                            table: i,
                            editingState: ee,
                            onEditValueChange: He,
                            onStartInlineEdit: ze,
                            onSaveInline: Ie,
                            onCancelEdit: Te,
                            onEdit: I,
                            onDeleteRequest: p ? Fe : void 0,
                            expandedContent: N,
                            customActions: F,
                            hasInlineEdit: E,
                            hasActionColumn: S,
                            variant: J,
                            cellSx: G,
                            renderEmptyState: _e,
                            isLoading: u,
                            onRowClick: ge,
                            virtualItems: a,
                            paddingTop: Ee,
                            paddingBottom: Me,
                            measureElement: R ? q.measureElement : void 0,
                            cellOverflow: v,
                            autoWidths: oe
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              y && /* @__PURE__ */ n(
                et,
                {
                  standalone: !0,
                  table: i,
                  totalRows: i.getFilteredRowModel().rows.length,
                  pageSizeOptions: r == null ? void 0 : r.pageSizeOptions,
                  showTotal: r == null ? void 0 : r.showTotal,
                  colSpan: te
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n(
          nt,
          {
            open: O !== null,
            onConfirm: Ae,
            onCancel: De
          }
        )
      ]
    }
  );
}
export {
  Vt as IpsDataTable,
  Wt as flexRender
};
