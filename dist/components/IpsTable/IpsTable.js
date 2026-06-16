import { jsx as r } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import f from "@mui/material/Box";
import { DataGrid as g } from "@mui/x-data-grid";
const b = s(
  ({
    rows: i,
    columns: e,
    loading: t = !1,
    pageSize: l = 25,
    checkboxSelection: n = !1,
    disableColumnFilter: d = !1,
    onRowClick: m,
    sx: o,
    className: c,
    ...a
  }, p) => {
    const u = ["ips-table", c].filter(Boolean).join(" ");
    return /* @__PURE__ */ r(f, { ref: p, className: u, sx: o, children: /* @__PURE__ */ r(
      g,
      {
        rows: i,
        columns: e,
        loading: t,
        checkboxSelection: n,
        disableColumnFilter: d,
        onRowClick: m,
        initialState: {
          pagination: { paginationModel: { pageSize: l } },
          ...a.initialState
        },
        pageSizeOptions: [10, 25, 50, 100],
        ...a,
        sx: {
          // ── Header styling ──────────────────────────────────────────────
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "primary.main"
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "white",
            fontWeight: 600
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "primary.main",
            color: "white"
          },
          // Keep sort/filter icons white on the coloured header
          "& .MuiDataGrid-columnHeader .MuiSvgIcon-root": {
            color: "white"
          },
          "& .MuiDataGrid-columnSeparator": {
            color: "rgba(255,255,255,0.3)"
          },
          // ── Alternating row colours ─────────────────────────────────────
          "& .MuiDataGrid-row:nth-of-type(even)": {
            backgroundColor: "grey.50"
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "primary.light",
            opacity: 0.85
          },
          // ── Border / radius ─────────────────────────────────────────────
          borderRadius: 1,
          // Allow consumer sx to override everything above
          ...o
        }
      }
    ) });
  }
);
b.displayName = "IpsTable";
export {
  b as IpsTable
};
