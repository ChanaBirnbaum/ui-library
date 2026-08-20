import { jsxs as f, jsx as n } from "react/jsx-runtime";
import x from "@mui/material/TableHead";
import m from "@mui/material/TableRow";
import s from "@mui/material/TableCell";
import C from "@mui/material/TableSortLabel";
import T from "@mui/material/TextField";
import { flexRender as u } from "../../../node_modules/@tanstack/react-table/build/lib/index.js";
function v({
  table: l,
  showPerColumnFilter: d,
  cellSx: r
}) {
  var i;
  return /* @__PURE__ */ f(x, { children: [
    l.getHeaderGroups().map((t) => /* @__PURE__ */ n(m, { children: t.headers.map((e) => {
      const g = e.column.getCanSort(), c = e.column.getIsSorted(), o = e.column.columnDef.meta, a = (o == null ? void 0 : o.align) ?? "start", p = o == null ? void 0 : o.width;
      return /* @__PURE__ */ n(
        s,
        {
          align: a === "end" ? "right" : a === "center" ? "center" : "left",
          sx: {
            width: p,
            fontWeight: 700,
            fontSize: "0.8rem",
            color: "text.primary",
            backgroundColor: "#F0F6FD",
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
    }) }, t.id)),
    d && /* @__PURE__ */ n(m, { children: (i = l.getHeaderGroups()[0]) == null ? void 0 : i.headers.map((t) => /* @__PURE__ */ n(s, { sx: { py: 0.5, ...r }, children: t.column.getCanFilter() ? /* @__PURE__ */ n(
      T,
      {
        value: t.column.getFilterValue() ?? "",
        onChange: (e) => t.column.setFilterValue(e.target.value),
        size: "small",
        variant: "standard",
        placeholder: "סנן...",
        sx: { width: "100%" }
      }
    ) : null }, t.id)) })
  ] });
}
export {
  v as TableHeader
};
