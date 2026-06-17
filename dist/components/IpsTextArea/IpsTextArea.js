import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { forwardRef as N, useId as S, useState as A } from "react";
import F from "@mui/material/TextField";
import M from "@mui/material/FormLabel";
import o from "@mui/material/Box";
const W = () => /* @__PURE__ */ r(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { flexShrink: 0 },
    children: [
      /* @__PURE__ */ e(
        "path",
        {
          d: "M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e("path", { d: "M12 8V12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ e("path", { d: "M12 16H12.01", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
    ]
  }
), z = N(
  (f, g) => {
    const {
      rows: k = 4,
      maxLength: t,
      className: w,
      helperText: i,
      defaultValue: a,
      value: d,
      onChange: c,
      label: p,
      required: h,
      error: u,
      wide: x,
      id: v,
      ...I
    } = f, L = S(), m = v ?? L, C = d !== void 0, [y, b] = A(() => a ?? ""), j = (C ? d : y) ?? "", T = (s) => {
      let n = s.currentTarget.value;
      t !== void 0 && n.length > t && (n = n.slice(0, t), s.target.value = n), C || b(n), c && c(s);
    }, l = t ? `${j.length} / ${t}` : null, V = i || l ? /* @__PURE__ */ r(
      o,
      {
        component: "span",
        sx: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
        children: [
          /* @__PURE__ */ r(o, { component: "span", sx: { display: "inline-flex", alignItems: "center", gap: "4px" }, children: [
            u && i && /* @__PURE__ */ e(W, {}),
            i
          ] }),
          l ? /* @__PURE__ */ e(o, { component: "span", sx: { color: "text.secondary", fontSize: "0.875rem" }, children: l }) : null
        ]
      }
    ) : void 0;
    return /* @__PURE__ */ r(o, { className: w, sx: x ? { width: "576px" } : void 0, children: [
      p != null && /* @__PURE__ */ e(
        M,
        {
          htmlFor: m,
          required: h,
          sx: { display: "block", mb: "3px", fontSize: "12px", lineHeight: 1 },
          children: p
        }
      ),
      /* @__PURE__ */ e(
        F,
        {
          ...I,
          id: m,
          label: void 0,
          required: h,
          error: u,
          multiline: !0,
          minRows: k,
          defaultValue: a,
          slotProps: { input: { ref: g } },
          className: "ips-textarea",
          sx: x ? { width: "576px" } : void 0,
          helperText: V,
          onChange: T
        }
      )
    ] });
  }
);
z.displayName = "IpsTextArea";
export {
  z as IpsTextArea
};
