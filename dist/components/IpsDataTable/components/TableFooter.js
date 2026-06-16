import { jsx as a } from "react/jsx-runtime";
import P from "@mui/material/TableFooter";
import m from "@mui/material/TableRow";
import d from "@mui/material/TableCell";
import u from "@mui/material/TablePagination";
function f({
  table: o,
  totalRows: n,
  pageSizeOptions: i = [10, 25, 50, 100],
  showTotal: t,
  colSpan: g
}) {
  const { pageIndex: l, pageSize: p } = o.getState().pagination;
  return /* @__PURE__ */ a(P, { children: /* @__PURE__ */ a(m, { children: /* @__PURE__ */ a(d, { colSpan: g, sx: { p: 0, borderBottom: "none" }, children: /* @__PURE__ */ a(
    u,
    {
      component: "div",
      count: n,
      page: l,
      rowsPerPage: p,
      rowsPerPageOptions: i,
      onPageChange: (e, r) => o.setPageIndex(r),
      onRowsPerPageChange: (e) => {
        o.setPageSize(Number(e.target.value)), o.setPageIndex(0);
      },
      labelRowsPerPage: "שורות בעמוד:",
      labelDisplayedRows: ({ from: e, to: r, count: s }) => t ? `${e}–${r} מתוך ${s}` : `${e}–${r}`,
      sx: {
        "& .MuiTablePagination-toolbar": { direction: "ltr" }
      }
    }
  ) }) }) });
}
export {
  f as TableFooter
};
