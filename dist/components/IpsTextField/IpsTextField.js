import { jsx as e, jsxs as o } from "react/jsx-runtime";
import { forwardRef as A, useId as j } from "react";
import T from "@mui/material/TextField";
import m from "@mui/material/InputAdornment";
import b from "@mui/material/FormLabel";
import F from "@mui/material/Box";
const W = () => /* @__PURE__ */ o(
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
), M = () => /* @__PURE__ */ o(
  "svg",
  {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ e("path", { d: "M21 21L16.65 16.65", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
    ]
  }
), N = A(
  (u, x) => {
    const {
      startAdornment: s,
      endAdornment: k,
      InputProps: r,
      inputProps: t,
      className: C,
      readOnly: f,
      error: i,
      helperText: n,
      label: d,
      required: l,
      id: g,
      type: c,
      ...w
    } = u, I = j(), p = g ?? I, a = c === "search", L = {
      ...t,
      readOnly: f ? !0 : t == null ? void 0 : t.readOnly
    }, h = k ?? (a ? /* @__PURE__ */ e(M, {}) : void 0), y = {
      ref: x,
      startAdornment: s ? /* @__PURE__ */ e(m, { position: "start", children: s }) : r == null ? void 0 : r.startAdornment,
      endAdornment: h ? /* @__PURE__ */ e(m, { position: "end", children: h }) : r == null ? void 0 : r.endAdornment,
      ...r
    }, v = i && n ? /* @__PURE__ */ o("span", { style: { display: "inline-flex", alignItems: "center", gap: "4px" }, children: [
      /* @__PURE__ */ e(W, {}),
      n
    ] }) : n;
    return /* @__PURE__ */ o(F, { className: C, children: [
      d != null && /* @__PURE__ */ e(
        b,
        {
          htmlFor: p,
          required: l,
          sx: { display: "block", mb: "3px", fontSize: "12px", lineHeight: 1 },
          children: d
        }
      ),
      /* @__PURE__ */ e(
        T,
        {
          ...w,
          id: p,
          type: a ? "text" : c,
          label: void 0,
          required: l,
          error: i,
          helperText: v,
          slotProps: { input: y, htmlInput: L },
          className: "ips-text-field"
        }
      )
    ] });
  }
);
N.displayName = "IpsTextField";
export {
  N as IpsTextField
};
