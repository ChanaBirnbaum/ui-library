import { jsx as i, jsxs as N } from "react/jsx-runtime";
import { forwardRef as L } from "react";
import P from "@mui/material/TableContainer";
import W from "@mui/material/Table";
import j from "@mui/material/TableHead";
import D from "@mui/material/TableBody";
import c from "@mui/material/TableRow";
import f from "@mui/material/TableCell";
import _ from "@mui/material/Typography";
import z from "@mui/material/Paper";
import O from "@mui/material/Link";
import q from "@mui/material/Box";
function A(o, l) {
  return o === "ellipsis" ? {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: l ?? 200
  } : o === "wrap" ? { whiteSpace: "normal", wordBreak: "break-word" } : { whiteSpace: "nowrap" };
}
function E(o, l) {
  const {
    columns: s,
    rows: g,
    stickyHeader: w = !1,
    maxHeight: u,
    striped: C = !0,
    dense: T = !1,
    emptyText: v = "No data",
    wrap: x = "ellipsis",
    hover: b,
    onRowClick: p,
    onRowDoubleClick: m,
    getRowId: k,
    sx: S,
    className: B
  } = o, y = !!(p || m), R = b !== void 0 ? b : y, H = ["ips-table-light", B].filter(Boolean).join(" ");
  function M(e, t, d) {
    const r = t[e.key];
    if (e.render)
      return e.render(r, t, d);
    if (e.type === "link") {
      const a = e.href ? e.href(t) : String(r ?? ""), n = e.linkTarget === "_blank";
      return /* @__PURE__ */ i(
        O,
        {
          href: a,
          target: e.linkTarget ?? "_self",
          rel: n ? "noopener noreferrer" : void 0,
          onClick: (h) => h.stopPropagation(),
          children: String(r ?? "")
        }
      );
    }
    if (e.type === "image") {
      const a = e.imageSrc ? e.imageSrc(t) : String(r ?? ""), n = e.imageProps ?? {};
      return /* @__PURE__ */ i(
        q,
        {
          component: "img",
          src: a,
          width: n.width,
          height: n.height,
          alt: n.alt ?? "",
          onClick: (h) => h.stopPropagation(),
          sx: n.rounded ? { borderRadius: "50%", display: "block" } : { display: "block" }
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
      className: H,
      sx: {
        // stickyHeader only pins the header when maxHeight constrains the scroll container
        ...u != null ? { maxHeight: u, overflow: "auto" } : {},
        ...S
      },
      children: /* @__PURE__ */ N(W, { stickyHeader: w, size: T ? "small" : "medium", children: [
        /* @__PURE__ */ i(j, { children: /* @__PURE__ */ i(c, { children: s.map((e) => /* @__PURE__ */ i(
          f,
          {
            width: e.width,
            align: e.align ?? "left",
            sx: {
              backgroundColor: "primary.main",
              color: "common.white",
              fontWeight: 600,
              whiteSpace: "nowrap",
              // MUI copies background via a separate internal rule when stickyHeader is true
              "&.MuiTableCell-stickyHeader": {
                backgroundColor: "primary.main"
              }
            },
            children: e.label
          },
          e.key
        )) }) }),
        /* @__PURE__ */ i(D, { children: g.length === 0 ? /* @__PURE__ */ i(c, { children: /* @__PURE__ */ i(f, { colSpan: s.length, align: "center", children: /* @__PURE__ */ i(_, { variant: "body2", color: "text.secondary", sx: { py: 2 }, children: v }) }) }) : g.map((e, t) => {
          const d = k ? k(e, t) : e.id != null ? e.id : t;
          return /* @__PURE__ */ i(
            c,
            {
              hover: R,
              onClick: p ? (r) => p(r, e, t) : void 0,
              onDoubleClick: m ? (r) => m(r, e, t) : void 0,
              sx: {
                ...y ? { cursor: "pointer" } : {},
                ...C && t % 2 === 1 ? { backgroundColor: "grey.50" } : {}
              },
              children: s.map((r) => {
                const a = r.wrap ?? x;
                return /* @__PURE__ */ i(
                  f,
                  {
                    align: r.align ?? "left",
                    sx: A(a, r.width),
                    children: M(r, e, t)
                  },
                  r.key
                );
              })
            },
            d
          );
        }) })
      ] })
    }
  );
}
const F = L(
  E
);
F.displayName = "IpsTableLight";
export {
  F as IpsTableLight
};
