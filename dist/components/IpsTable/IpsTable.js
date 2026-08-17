import { jsx as i, jsxs as M } from "react/jsx-runtime";
import { forwardRef as N } from "react";
import P from "@mui/material/TableContainer";
import W from "@mui/material/Table";
import j from "@mui/material/TableHead";
import D from "@mui/material/TableBody";
import h from "@mui/material/TableRow";
import f from "@mui/material/TableCell";
import _ from "@mui/material/Typography";
import z from "@mui/material/Paper";
import L from "@mui/material/Link";
import O from "@mui/material/Box";
function q(a, l) {
  return a === "ellipsis" ? {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: l ?? 200
  } : a === "wrap" ? { whiteSpace: "normal", wordBreak: "break-word" } : { whiteSpace: "nowrap" };
}
function A(a, l) {
  const {
    columns: s,
    rows: u,
    stickyHeader: v = !1,
    maxHeight: g,
    striped: x = !0,
    dense: w = !1,
    emptyText: T = "No data",
    wrap: S = "ellipsis",
    hover: b,
    onRowClick: d,
    onRowDoubleClick: p,
    getRowId: k,
    sx: B,
    className: R
  } = a, y = !!(d || p), C = b !== void 0 ? b : y, F = ["ips-table", R].filter(Boolean).join(" ");
  function H(e, o, m) {
    const r = o[e.key];
    if (e.render)
      return e.render(r, o, m);
    if (e.type === "link") {
      const n = e.href ? e.href(o) : String(r ?? ""), t = e.linkTarget === "_blank";
      return /* @__PURE__ */ i(
        L,
        {
          href: n,
          target: e.linkTarget ?? "_self",
          rel: t ? "noopener noreferrer" : void 0,
          onClick: (c) => c.stopPropagation(),
          children: String(r ?? "")
        }
      );
    }
    if (e.type === "image") {
      const n = e.imageSrc ? e.imageSrc(o) : String(r ?? ""), t = e.imageProps ?? {};
      return /* @__PURE__ */ i(
        O,
        {
          component: "img",
          src: n,
          width: t.width,
          height: t.height,
          alt: t.alt ?? "",
          onClick: (c) => c.stopPropagation(),
          sx: t.rounded ? { borderRadius: "50%", display: "block" } : { display: "block" }
        }
      );
    }
    return r;
  }
  return /* @__PURE__ */ i(
    P,
    {
      ref: l,
      component: z,
      className: F,
      sx: {
        ...g != null ? { maxHeight: g, overflow: "auto" } : {},
        ...B
      },
      children: /* @__PURE__ */ M(W, { stickyHeader: v, size: w ? "small" : "medium", children: [
        /* @__PURE__ */ i(j, { children: /* @__PURE__ */ i(h, { children: s.map((e) => /* @__PURE__ */ i(
          f,
          {
            width: e.width,
            align: e.align ?? "left",
            sx: {
              backgroundColor: "#F6F9FC",
              color: "text.primary",
              fontWeight: 600,
              whiteSpace: "nowrap",
              borderBottom: "1px solid",
              borderColor: "divider",
              "&.MuiTableCell-stickyHeader": {
                backgroundColor: "#F6F9FC"
              }
            },
            children: e.label
          },
          e.key
        )) }) }),
        /* @__PURE__ */ i(D, { children: u.length === 0 ? /* @__PURE__ */ i(h, { children: /* @__PURE__ */ i(f, { colSpan: s.length, align: "center", children: /* @__PURE__ */ i(_, { variant: "body2", color: "text.secondary", sx: { py: 2 }, children: T }) }) }) : u.map((e, o) => {
          const m = k ? k(e, o) : e.id != null ? e.id : o;
          return /* @__PURE__ */ i(
            h,
            {
              hover: C,
              onClick: d ? (r) => d(r, e, o) : void 0,
              onDoubleClick: p ? (r) => p(r, e, o) : void 0,
              sx: {
                ...y ? { cursor: "pointer" } : {},
                ...x && o % 2 === 1 ? { backgroundColor: "grey.50" } : {},
                ...C ? { "&:hover": { backgroundColor: "grey.100" } } : {}
              },
              children: s.map((r) => {
                const n = r.wrap ?? S;
                return /* @__PURE__ */ i(
                  f,
                  {
                    align: r.align ?? "left",
                    sx: { ...q(n, r.width), borderBottom: "1px solid", borderColor: "divider" },
                    children: H(r, e, o)
                  },
                  r.key
                );
              })
            },
            m
          );
        }) })
      ] })
    }
  );
}
const E = N(
  A
);
E.displayName = "IpsTable";
export {
  E as IpsTable
};
