import { jsxs as f, jsx as n } from "react/jsx-runtime";
import x from "@mui/material/TableHead";
import m from "@mui/material/TableRow";
import s from "@mui/material/TableCell";
import C from "@mui/material/TableSortLabel";
import T from "@mui/material/TextField";
import { flexRender as u } from "../../../node_modules/@tanstack/react-table/build/lib/index.js";
function D({
  table: l,
  showPerColumnFilter: d,
  cellSx: r
}) {
  var i;
  return /* @__PURE__ */ f(x, { children: [
    l.getHeaderGroups().map((o) => /* @__PURE__ */ n(m, { children: o.headers.map((e) => {
      const g = e.column.getCanSort(), c = e.column.getIsSorted(), t = e.column.columnDef.meta, a = (t == null ? void 0 : t.align) ?? "start", p = t == null ? void 0 : t.width;
      return /* @__PURE__ */ n(
        s,
        {
          align: a === "end" ? "right" : a === "center" ? "center" : "left",
          sx: {
            width: p,
            fontWeight: 700,
            fontSize: "0.8rem",
            color: "text.secondary",
            backgroundColor: "#F7FAFC",
            // gray-100
            userSelect: "none",
            whiteSpace: "nowrap",
            ...r
          },
          children: e.isPlaceholder ? null : g ? /* @__PURE__ */ n(
            C,
            {
              active: !!c,
              direction: c === "desc" ? "desc" : "asc",
              onClick: e.column.getToggleSortingHandler(),
              children: u(e.column.columnDef.header, e.getContext())
            }
          ) : u(e.column.columnDef.header, e.getContext())
        },
        e.id
      );
    }) }, o.id)),
    d && /* @__PURE__ */ n(m, { children: (i = l.getHeaderGroups()[0]) == null ? void 0 : i.headers.map((o) => /* @__PURE__ */ n(s, { sx: { py: 0.5, ...r }, children: o.column.getCanFilter() ? /* @__PURE__ */ n(
      T,
      {
        value: o.column.getFilterValue() ?? "",
        onChange: (e) => o.column.setFilterValue(e.target.value),
        size: "small",
        variant: "standard",
        placeholder: "סנן...",
        sx: { width: "100%" }
      }
    ) : null }, o.id)) })
  ] });
}
export {
  D as TableHeader
};
