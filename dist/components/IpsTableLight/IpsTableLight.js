import { jsx as r, jsxs as y } from "react/jsx-runtime";
import { forwardRef as g } from "react";
import T from "@mui/material/TableContainer";
import u from "@mui/material/Table";
import k from "@mui/material/TableHead";
import x from "@mui/material/TableBody";
import o from "@mui/material/TableRow";
import a from "@mui/material/TableCell";
import C from "@mui/material/Typography";
import M from "@mui/material/Paper";
const w = g(
  ({
    columns: i,
    rows: l,
    stickyHeader: n = !1,
    striped: p = !0,
    dense: d = !1,
    emptyText: c = "No data",
    sx: h,
    className: s
  }, f) => {
    const b = ["ips-table-light", s].filter(Boolean).join(" ");
    return /* @__PURE__ */ r(
      T,
      {
        ref: f,
        component: M,
        className: b,
        sx: h,
        children: /* @__PURE__ */ y(
          u,
          {
            stickyHeader: n,
            size: d ? "small" : "medium",
            children: [
              /* @__PURE__ */ r(k, { children: /* @__PURE__ */ r(o, { children: i.map((e) => /* @__PURE__ */ r(
                a,
                {
                  width: e.width,
                  sx: {
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    // When stickyHeader is true MUI copies background via a separate
                    // internal rule — override both the cell and its ::after pseudo
                    "&.MuiTableCell-stickyHeader": {
                      backgroundColor: "primary.main"
                    }
                  },
                  children: e.label
                },
                e.key
              )) }) }),
              /* @__PURE__ */ r(x, { children: l.length === 0 ? /* @__PURE__ */ r(o, { children: /* @__PURE__ */ r(a, { colSpan: i.length, align: "center", children: /* @__PURE__ */ r(C, { variant: "body2", color: "text.secondary", sx: { py: 2 }, children: c }) }) }) : l.map((e, t) => /* @__PURE__ */ r(
                o,
                {
                  sx: p && t % 2 === 1 ? { backgroundColor: "grey.50" } : void 0,
                  children: i.map((m) => /* @__PURE__ */ r(a, { children: e[m.key] }, m.key))
                },
                t
              )) })
            ]
          }
        )
      }
    );
  }
);
w.displayName = "IpsTableLight";
export {
  w as IpsTableLight
};
