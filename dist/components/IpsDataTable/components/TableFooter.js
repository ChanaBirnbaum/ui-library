import { jsx as o } from "react/jsx-runtime";
import P from "@mui/material/Box";
import b from "@mui/material/TableFooter";
import c from "@mui/material/TableRow";
import u from "@mui/material/TableCell";
import x from "@mui/material/TablePagination";
function v({
  table: r,
  totalRows: a,
  pageSizeOptions: t = [10, 25, 50, 100],
  showTotal: l,
  colSpan: g,
  standalone: d = !1
}) {
  const { pageIndex: p, pageSize: s } = r.getState().pagination, n = /* @__PURE__ */ o(
    x,
    {
      component: "div",
      count: a,
      page: p,
      rowsPerPage: s,
      rowsPerPageOptions: t,
      onPageChange: (e, i) => r.setPageIndex(i),
      onRowsPerPageChange: (e) => {
        r.setPageSize(Number(e.target.value)), r.setPageIndex(0);
      },
      labelRowsPerPage: "שורות בעמוד:",
      labelDisplayedRows: ({ from: e, to: i, count: m }) => l ? `${e}–${i} מתוך ${m}` : `${e}–${i}`,
      sx: {
        "& .MuiTablePagination-toolbar": { direction: "ltr" },
        overflow: "hidden"
      }
    }
  );
  return d ? /* @__PURE__ */ o(
    P,
    {
      sx: {
        flexShrink: 0,
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper"
      },
      children: n
    }
  ) : /* @__PURE__ */ o(b, { children: /* @__PURE__ */ o(c, { children: /* @__PURE__ */ o(u, { colSpan: g, sx: { p: 0, borderBottom: "none" }, children: n }) }) });
}
export {
  v as TableFooter
};
