import { jsxs as S, jsx as n } from "react/jsx-runtime";
import w from "@mui/material/TableHead";
import f from "@mui/material/TableRow";
import x from "@mui/material/TableCell";
import F from "@mui/material/TableSortLabel";
import H from "@mui/material/TextField";
import { flexRender as v } from "../../../node_modules/@tanstack/react-table/build/lib/index.js";
import { TruncatedText as D } from "./TruncatedText.js";
import { shouldClip as M, clipSx as j, clipWidthFor as k } from "./cellOverflow.js";
function _({
  table: m,
  showPerColumnFilter: T,
  cellSx: s,
  cellOverflow: b = "wrap",
  autoWidths: e
}) {
  var d;
  return /* @__PURE__ */ S(w, { children: [
    m.getHeaderGroups().map((t) => /* @__PURE__ */ n(f, { children: t.headers.map((o) => {
      const C = o.column.getCanSort(), u = o.column.getIsSorted(), l = o.column.columnDef.meta, p = (l == null ? void 0 : l.align) ?? "start", r = l == null ? void 0 : l.width, h = o.column.id.startsWith("_"), g = e == null ? void 0 : e[o.column.id], i = !h && M(l, b, g), c = o.isPlaceholder ? null : v(o.column.columnDef.header, o.getContext()), a = i && c ? /* @__PURE__ */ n(D, { children: c }) : c;
      return /* @__PURE__ */ n(
        x,
        {
          align: p === "end" ? "right" : p === "center" ? "center" : "left",
          "data-col-id": o.column.id,
          sx: {
            ...i ? j(k(r, g)) : { width: r, maxWidth: r },
            fontWeight: 700,
            fontSize: "0.8rem",
            color: "text.primary",
            backgroundColor: "#F0F6FD",
            userSelect: "none",
            ...s,
            // After cellSx: header labels must never wrap.
            whiteSpace: "nowrap",
            ...i ? {
              overflow: "hidden",
              // Keep the sort arrow visible next to a clipped label.
              "& .MuiTableSortLabel-root": { maxWidth: "100%" }
            } : {}
          },
          children: a === null ? null : C ? /* @__PURE__ */ n(
            F,
            {
              active: !!u,
              direction: u === "desc" ? "desc" : "asc",
              onClick: o.column.getToggleSortingHandler(),
              children: a
            }
          ) : a
        },
        o.id
      );
    }) }, t.id)),
    T && /* @__PURE__ */ n(f, { children: (d = m.getHeaderGroups()[0]) == null ? void 0 : d.headers.map((t) => /* @__PURE__ */ n(x, { sx: { py: 0.5, ...s }, children: t.column.getCanFilter() ? /* @__PURE__ */ n(
      H,
      {
        value: t.column.getFilterValue() ?? "",
        onChange: (o) => t.column.setFilterValue(o.target.value),
        size: "small",
        variant: "standard",
        placeholder: "סנן...",
        sx: { width: "100%" }
      }
    ) : null }, t.id)) })
  ] });
}
export {
  _ as TableHeader
};
