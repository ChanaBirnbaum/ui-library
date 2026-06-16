import { jsx as o, jsxs as C } from "react/jsx-runtime";
import { forwardRef as j, useState as y } from "react";
import I from "@mui/material/TextField";
import r from "@mui/material/Box";
const N = j(
  (p, m) => {
    const {
      rows: u = 4,
      maxLength: e,
      className: x,
      helperText: d,
      defaultValue: l,
      value: s,
      onChange: a,
      ...f
    } = p, i = s !== void 0, [h, g] = y(() => l ?? ""), T = (i ? s : h) ?? "", v = (n) => {
      let t = n.currentTarget.value;
      e !== void 0 && t.length > e && (t = t.slice(0, e), n.target.value = t), i || g(t), a && a(n);
    }, c = e ? `${T.length} / ${e}` : null, w = /* @__PURE__ */ C(
      r,
      {
        component: "span",
        sx: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
        children: [
          /* @__PURE__ */ o(r, { component: "span", children: d }),
          c ? /* @__PURE__ */ o(r, { component: "span", sx: { color: "text.secondary", fontSize: "0.875rem" }, children: c }) : null
        ]
      }
    );
    return /* @__PURE__ */ o(
      I,
      {
        ...f,
        multiline: !0,
        minRows: u,
        defaultValue: l,
        slotProps: { input: { ref: m } },
        className: ["ips-textarea", x].filter(Boolean).join(" "),
        helperText: w,
        onChange: v
      }
    );
  }
);
N.displayName = "IpsTextArea";
export {
  N as IpsTextArea
};
