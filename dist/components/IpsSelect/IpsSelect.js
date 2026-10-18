import { jsx as e, jsxs as c, Fragment as N } from "react/jsx-runtime";
import { forwardRef as F } from "react";
import L from "@mui/material/FormControl";
import M from "@mui/material/InputLabel";
import O from "@mui/material/Select";
import T from "@mui/material/MenuItem";
import k from "@mui/material/FormHelperText";
import E from "@mui/material/Checkbox";
import w from "@mui/material/ListItemText";
import B from "@mui/material/ListSubheader";
import { groupOptions as H } from "../internal/optionGroups.js";
const R = F(
  (d, h) => {
    const {
      options: n = [],
      value: a,
      onChange: p,
      label: i,
      readOnly: s = !1,
      placeholder: m,
      error: g = !1,
      helperText: u,
      multiple: o = !1,
      disabled: v = !1,
      className: b,
      ...y
    } = d, x = ["ips-select", b].filter(Boolean).join(" "), C = s ? {
      pointerEvents: "none",
      "& .MuiSelect-icon": {
        display: "none"
      }
    } : {}, I = (r) => {
      p && !s && p(r.target.value);
    }, S = (r) => /* @__PURE__ */ e(T, { value: r.value, children: o ? /* @__PURE__ */ c(N, { children: [
      /* @__PURE__ */ e(
        E,
        {
          checked: Array.isArray(a) ? a.includes(r.value) : a === r.value
        }
      ),
      /* @__PURE__ */ e(w, { primary: r.label })
    ] }) : r.label }, r.value), j = H(n).flatMap((r) => {
      const l = r.options.map(S);
      return r.group === null ? l : [
        /* @__PURE__ */ e(B, { className: "ips-select-group", children: r.group }, `group-${r.group}`),
        ...l
      ];
    });
    return /* @__PURE__ */ c(
      L,
      {
        className: x,
        error: g,
        disabled: v || s,
        fullWidth: !0,
        children: [
          i && /* @__PURE__ */ e(M, { children: i }),
          /* @__PURE__ */ e(
            O,
            {
              ref: h,
              value: a ?? (o ? [] : ""),
              onChange: I,
              label: i,
              multiple: o,
              displayEmpty: !!m,
              renderValue: (r) => {
                var l;
                return o && Array.isArray(r) ? r.length === 0 ? m || "" : r.map((t) => {
                  var f;
                  return ((f = n.find((A) => A.value === t)) == null ? void 0 : f.label) || t;
                }).join(", ") : r === "" || r === void 0 ? m || "" : ((l = n.find((t) => t.value === r)) == null ? void 0 : l.label) || r;
              },
              sx: C,
              ...y,
              children: j
            }
          ),
          u && /* @__PURE__ */ e(k, { children: u })
        ]
      }
    );
  }
);
R.displayName = "IpsSelect";
export {
  R as IpsSelect
};
