import { jsxs as c, jsx as r, Fragment as S } from "react/jsx-runtime";
import { forwardRef as I } from "react";
import j from "@mui/material/FormControl";
import A from "@mui/material/InputLabel";
import F from "@mui/material/Select";
import N from "@mui/material/MenuItem";
import T from "@mui/material/FormHelperText";
import k from "@mui/material/Checkbox";
import E from "@mui/material/ListItemText";
const L = I(
  (d, h) => {
    const {
      options: t = [],
      value: l,
      onChange: m,
      label: i,
      readOnly: o = !1,
      placeholder: s,
      error: v = !1,
      helperText: f,
      multiple: a = !1,
      disabled: x = !1,
      className: y,
      ...b
    } = d, g = ["ips-select", y].filter(Boolean).join(" ");
    return /* @__PURE__ */ c(
      j,
      {
        className: g,
        error: v,
        disabled: x || o,
        fullWidth: !0,
        children: [
          i && /* @__PURE__ */ r(A, { children: i }),
          /* @__PURE__ */ r(
            F,
            {
              ref: h,
              value: l ?? (a ? [] : ""),
              onChange: (e) => {
                m && !o && m(e.target.value);
              },
              label: i,
              multiple: a,
              displayEmpty: !!s,
              renderValue: (e) => {
                var u;
                return a && Array.isArray(e) ? e.length === 0 ? s || "" : e.map((n) => {
                  var p;
                  return ((p = t.find((C) => C.value === n)) == null ? void 0 : p.label) || n;
                }).join(", ") : e === "" || e === void 0 ? s || "" : ((u = t.find((n) => n.value === e)) == null ? void 0 : u.label) || e;
              },
              sx: o ? {
                pointerEvents: "none",
                "& .MuiSelect-icon": {
                  display: "none"
                }
              } : {},
              ...b,
              children: t.map((e) => /* @__PURE__ */ r(N, { value: e.value, children: a ? /* @__PURE__ */ c(S, { children: [
                /* @__PURE__ */ r(
                  k,
                  {
                    checked: Array.isArray(l) ? l.includes(e.value) : l === e.value
                  }
                ),
                /* @__PURE__ */ r(E, { primary: e.label })
              ] }) : e.label }, e.value))
            }
          ),
          f && /* @__PURE__ */ r(T, { children: f })
        ]
      }
    );
  }
);
L.displayName = "IpsSelect";
export {
  L as IpsSelect
};
