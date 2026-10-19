import { jsx as e, jsxs as i } from "react/jsx-runtime";
import { forwardRef as H, useId as $, useState as _, useRef as z } from "react";
import D from "@mui/material/TextField";
import A from "@mui/material/InputAdornment";
import U from "@mui/material/IconButton";
import q from "@mui/material/FormLabel";
import Z from "@mui/material/Box";
const G = () => /* @__PURE__ */ i(
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
), J = () => /* @__PURE__ */ i(
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
), K = () => /* @__PURE__ */ i(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e("path", { d: "M6 6L18 18", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ e("path", { d: "M18 6L6 18", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
    ]
  }
), Q = "Clear search", X = H(
  (I, s) => {
    const {
      startAdornment: u,
      endAdornment: b,
      InputProps: n,
      inputProps: t,
      className: j,
      readOnly: T,
      error: h,
      helperText: c,
      label: p,
      required: m,
      id: B,
      type: f,
      value: d,
      defaultValue: k,
      onChange: o,
      clearButtonLabel: E = Q,
      ...M
    } = I, S = $(), C = B ?? S, x = f === "search", a = d !== void 0, [W, g] = _(k ?? ""), L = a ? d : W, F = L != null && String(L).length > 0, l = z(null), O = {
      ...t,
      ref: (r) => {
        l.current = r, typeof s == "function" ? s(r) : s && typeof s == "object" && (s.current = r), typeof (t == null ? void 0 : t.ref) == "function" ? t.ref(r) : t != null && t.ref && typeof t.ref == "object" && (t.ref.current = r);
      },
      readOnly: T ? !0 : t == null ? void 0 : t.readOnly
    }, R = (r) => {
      a || g(r.target.value), o == null || o(r);
    }, w = b ?? (x ? F ? /* @__PURE__ */ e(
      U,
      {
        size: "small",
        "aria-label": E,
        onClick: () => {
          var r, v;
          if (a)
            o == null || o({
              target: { value: "" },
              currentTarget: { value: "" }
            });
          else {
            g("");
            const y = (r = Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "value"
            )) == null ? void 0 : r.set;
            l.current && y && (y.call(l.current, ""), l.current.dispatchEvent(new Event("input", { bubbles: !0 })));
          }
          (v = l.current) == null || v.focus();
        },
        edge: "end",
        children: /* @__PURE__ */ e(K, {})
      }
    ) : /* @__PURE__ */ e(J, {}) : void 0), V = {
      startAdornment: u ? /* @__PURE__ */ e(A, { position: "start", children: u }) : n == null ? void 0 : n.startAdornment,
      endAdornment: w ? /* @__PURE__ */ e(A, { position: "end", children: w }) : n == null ? void 0 : n.endAdornment,
      ...n
    }, N = h && c ? /* @__PURE__ */ i("span", { style: { display: "inline-flex", alignItems: "center", gap: "4px" }, children: [
      /* @__PURE__ */ e(G, {}),
      c
    ] }) : c;
    return /* @__PURE__ */ i(Z, { className: j, children: [
      p != null && /* @__PURE__ */ e(
        q,
        {
          htmlFor: C,
          required: m,
          sx: { display: "block", mb: "3px", fontSize: "12px", lineHeight: 1 },
          children: p
        }
      ),
      /* @__PURE__ */ e(
        D,
        {
          ...M,
          id: C,
          type: x ? "text" : f,
          label: void 0,
          required: m,
          error: h,
          helperText: N,
          value: d,
          defaultValue: k,
          onChange: R,
          slotProps: { input: V, htmlInput: O },
          className: "ips-text-field"
        }
      )
    ] });
  }
);
X.displayName = "IpsTextField";
export {
  X as IpsTextField
};
