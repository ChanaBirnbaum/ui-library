import { jsx as a } from "react/jsx-runtime";
import { forwardRef as g } from "react";
import A from "@mui/material/Box";
import B from "@mui/material/ButtonBase";
import { useTheme as N } from "@mui/material/styles";
const w = {
  small: { px: 1.5, py: 0.5, fontSize: "0.75rem" },
  medium: { px: 2.5, py: 1, fontSize: "0.875rem" }
}, z = g(
  ({
    options: c = [],
    value: e,
    onChange: t,
    multiple: n = !1,
    disabled: s = !1,
    size: p = "medium",
    sx: m,
    className: d
  }, f) => {
    const l = N(), o = l.palette.primary.main, y = (r) => n ? Array.isArray(e) && e.includes(r) : e === r, x = (r) => {
      if (!(s || !t))
        if (n) {
          const i = Array.isArray(e) ? e : [], k = i.includes(r) ? i.filter((C) => C !== r) : [...i, r];
          t(k);
        } else
          t(e === r ? "" : r);
    }, u = ["ips-pill-select", d].filter(Boolean).join(" "), { px: h, py: S, fontSize: b } = w[p];
    return /* @__PURE__ */ a(
      A,
      {
        ref: f,
        className: u,
        sx: {
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          opacity: s ? 0.5 : 1,
          pointerEvents: s ? "none" : "auto",
          ...m
        },
        children: c.map((r) => {
          const i = y(r.value);
          return /* @__PURE__ */ a(
            B,
            {
              className: "ips-pill",
              onClick: () => x(r.value),
              disableRipple: !1,
              sx: {
                borderRadius: "999px",
                px: h,
                py: S,
                fontSize: b,
                fontWeight: 500,
                fontFamily: "inherit",
                lineHeight: 1.5,
                transition: "all 0.2s ease",
                ...i ? {
                  backgroundColor: o,
                  color: "white",
                  border: `1px solid ${o}`,
                  "&:hover": {
                    backgroundColor: l.palette.primary.dark,
                    borderColor: l.palette.primary.dark
                  }
                } : {
                  backgroundColor: "transparent",
                  color: o,
                  border: `1px solid ${o}`,
                  "&:hover": {
                    backgroundColor: `${o}14`
                  }
                }
              },
              children: r.label
            },
            r.value
          );
        })
      }
    );
  }
);
z.displayName = "IpsPillSelect";
export {
  z as IpsPillSelect
};
