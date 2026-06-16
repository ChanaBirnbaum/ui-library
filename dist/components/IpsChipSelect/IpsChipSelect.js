import { jsxs as y, jsx as t } from "react/jsx-runtime";
import { forwardRef as C } from "react";
import g from "@mui/material/FormControl";
import w from "@mui/material/InputLabel";
import I from "@mui/material/Select";
import S from "@mui/material/MenuItem";
import V from "@mui/material/Chip";
import j from "@mui/material/Box";
const v = C(
  (p, c) => {
    const {
      options: n = [],
      value: s = [],
      onChange: r,
      label: i,
      placeholder: m,
      disabled: o = !1,
      className: u,
      ...d
    } = p, f = ["ips-chip-select", u].filter(Boolean).join(" "), h = (e) => {
      if (o) return;
      const l = s.filter(
        (a) => a !== e
      );
      r == null || r(l);
    };
    return /* @__PURE__ */ y(g, { fullWidth: !0, disabled: o, className: f, children: [
      i && /* @__PURE__ */ t(w, { children: i }),
      /* @__PURE__ */ t(
        I,
        {
          ref: c,
          multiple: !0,
          value: s,
          onChange: (e) => {
            const l = e.target.value;
            r == null || r(l);
          },
          label: i,
          renderValue: (e) => !e || e.length === 0 ? /* @__PURE__ */ t("span", { style: { color: "#999" }, children: m || "Select items..." }) : /* @__PURE__ */ t(j, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: e.map((l) => {
            const a = n.find((b) => b.value === l), x = (a == null ? void 0 : a.label) || String(l);
            return /* @__PURE__ */ t(
              V,
              {
                label: x,
                size: "small",
                onDelete: () => h(l),
                disabled: o,
                sx: {
                  height: 24,
                  "& .MuiChip-deleteIcon": {
                    opacity: o ? 0.5 : 1,
                    cursor: o ? "not-allowed" : "pointer"
                  }
                }
              },
              l
            );
          }) }),
          displayEmpty: !i,
          ...d,
          children: n.map((e) => /* @__PURE__ */ t(S, { value: e.value, children: e.label }, e.value))
        }
      )
    ] });
  }
);
v.displayName = "IpsChipSelect";
export {
  v as IpsChipSelect
};
