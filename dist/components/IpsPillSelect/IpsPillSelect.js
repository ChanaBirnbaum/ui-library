import { jsx as l, jsxs as B } from "react/jsx-runtime";
import { forwardRef as R, useId as W } from "react";
import s from "@mui/material/Box";
import j from "@mui/material/ButtonBase";
import { useTheme as v } from "@mui/material/styles";
const L = {
  small: { px: 1.5, py: 0.5, fontSize: "0.75rem", minHeight: void 0 },
  medium: { px: 2.5, py: 1, fontSize: "0.875rem", minHeight: void 0 },
  large: { px: 2.5, py: 1, fontSize: "0.875rem", minHeight: 44 }
}, $ = "", D = R(
  ({
    options: g = [],
    value: r,
    onChange: n,
    multiple: p = !1,
    allowDeselect: S = !0,
    label: d,
    disabled: a = !1,
    size: b = "medium",
    sx: m,
    className: k
  }, f) => {
    const t = v(), i = t.palette.primary.main, x = W(), A = (e) => p ? Array.isArray(r) && r.includes(e) : r === e, C = (e) => {
      if (a || !n) return;
      if (p) {
        const c = Array.isArray(r) ? r : [], I = c.includes(e) ? c.filter((w) => w !== e) : [...c, e];
        n(I);
        return;
      }
      const o = r === e;
      o && !S || n(o ? $ : e);
    }, y = ["ips-pill-select", k].filter(Boolean).join(" "), { px: E, py: N, fontSize: z, minHeight: H } = L[b], h = g.map((e) => {
      const o = A(e.value);
      return /* @__PURE__ */ l(
        j,
        {
          className: "ips-pill",
          "aria-pressed": o,
          onClick: () => C(e.value),
          disableRipple: !1,
          sx: {
            borderRadius: "999px",
            px: E,
            py: N,
            fontSize: z,
            minHeight: H,
            fontWeight: 500,
            fontFamily: "inherit",
            lineHeight: 1.5,
            transition: "all 0.2s ease",
            ...o ? {
              backgroundColor: i,
              color: "white",
              border: `1px solid ${i}`,
              "&:hover": {
                backgroundColor: t.palette.primary.dark,
                borderColor: t.palette.primary.dark
              }
            } : {
              backgroundColor: "transparent",
              color: i,
              border: `1px solid ${i}`,
              "&:hover": {
                backgroundColor: `${i}14`
              }
            }
          },
          children: e.label
        },
        e.value
      );
    }), u = {
      opacity: a ? 0.5 : 1,
      pointerEvents: a ? "none" : "auto"
    };
    return d ? /* @__PURE__ */ B(
      s,
      {
        ref: f,
        role: "group",
        "aria-labelledby": x,
        className: y,
        sx: { display: "flex", flexDirection: "column", gap: 1.5, ...u, ...m },
        children: [
          /* @__PURE__ */ l(
            s,
            {
              component: "span",
              id: x,
              className: "ips-pill-select-label",
              sx: { fontSize: "0.875rem", fontWeight: 500, color: t.palette.text.secondary },
              children: d
            }
          ),
          /* @__PURE__ */ l(s, { sx: { display: "flex", flexWrap: "wrap", gap: 1 }, children: h })
        ]
      }
    ) : /* @__PURE__ */ l(
      s,
      {
        ref: f,
        className: y,
        sx: { display: "flex", flexWrap: "wrap", gap: 1, ...u, ...m },
        children: h
      }
    );
  }
);
D.displayName = "IpsPillSelect";
export {
  D as IpsPillSelect
};
