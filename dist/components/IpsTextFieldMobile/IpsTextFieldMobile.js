import { jsxs as d, jsx as o } from "react/jsx-runtime";
import { forwardRef as M, useId as N, useRef as T } from "react";
import { styled as n } from "@mui/material/styles";
import { MOBILE_FIELD as s, CHEVRON_CLEARANCE_PX as $, outlinedFieldDisabledStyles as z, outlinedFieldFocusStyles as D, mobileFieldRadius as L, MobileFieldLabel as O, RequiredMark as _, MobileHelperText as W } from "../internal/mobileFieldParts.js";
import { FieldClearButton as j, ClearIcon as A, FieldEndIconSlot as H } from "../internal/mobileFieldEndParts.js";
const q = 0.5, V = n("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: 0
}), X = n("div")({
  position: "relative",
  width: "100%"
}), G = n("div", {
  shouldForwardProp: (e) => e !== "hasError" && e !== "isDisabled"
})(({ theme: e, hasError: i, isDisabled: l }) => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
  boxSizing: "border-box",
  width: "100%",
  height: s.heightPx,
  paddingInlineStart: s.paddingStartPx,
  paddingInlineEnd: $,
  fontSize: s.fontSizePx,
  color: e.palette.text.primary,
  backgroundColor: e.palette.background.paper,
  border: `1px solid ${i ? e.palette.error.main : e.palette.grey[300]}`,
  borderRadius: L(e),
  cursor: "text",
  "&:focus-within": D(e, i),
  ...l ? z(e) : {}
})), J = n("input", {
  shouldForwardProp: (e) => e !== "contentWidthCh"
})(({ theme: e, contentWidthCh: i }) => ({
  flex: i === null ? 1 : "0 0 auto",
  width: i === null ? "auto" : `${i}ch`,
  minWidth: 0,
  maxWidth: "100%",
  height: "100%",
  margin: 0,
  padding: 0,
  fontFamily: "inherit",
  fontSize: s.fontSizePx,
  color: "inherit",
  background: "transparent",
  border: "none",
  outline: "none",
  textOverflow: "ellipsis",
  "&::placeholder": {
    color: e.palette.text.secondary,
    opacity: 1
  }
})), K = n("span")({
  flexShrink: 0,
  whiteSpace: "nowrap"
}), Q = M((e, i) => {
  const {
    value: l,
    onChange: r,
    suffix: h,
    endIcon: x,
    clearButtonLabel: b,
    label: m,
    required: g = !1,
    disabled: c = !1,
    error: a = !1,
    helperText: p,
    className: S,
    id: v,
    ...w
  } = e, R = N(), u = v ?? R, I = `${u}-helper-text`, f = T(null), F = l.length > 0, y = !!h && F, C = F && !!b && !c, E = y ? l.length + q : null, P = (t) => {
    f.current = t, typeof i == "function" ? i(t) : i && (i.current = t);
  }, k = () => {
    var t;
    r == null || r(""), (t = f.current) == null || t.focus();
  }, B = ["ips-text-field-mobile", S].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(V, { className: B, children: [
    m && /* @__PURE__ */ d(O, { htmlFor: u, children: [
      m,
      g && /* @__PURE__ */ o(_, { "aria-hidden": "true", children: " *" })
    ] }),
    /* @__PURE__ */ d(X, { children: [
      /* @__PURE__ */ d(G, { hasError: a, isDisabled: c, onClick: () => {
        var t;
        return (t = f.current) == null ? void 0 : t.focus();
      }, children: [
        /* @__PURE__ */ o(
          J,
          {
            ...w,
            ref: P,
            id: u,
            value: l,
            onChange: (t) => r == null ? void 0 : r(t.target.value),
            disabled: c,
            required: g,
            contentWidthCh: E,
            "aria-invalid": a || void 0,
            "aria-describedby": p ? I : void 0
          }
        ),
        y && /* @__PURE__ */ o(K, { "aria-hidden": "true", children: h })
      ] }),
      C ? /* @__PURE__ */ o(j, { type: "button", "aria-label": b, onClick: k, children: /* @__PURE__ */ o(A, {}) }) : x && /* @__PURE__ */ o(H, { children: x })
    ] }),
    p && /* @__PURE__ */ o(W, { id: I, hasError: a, role: a ? "alert" : void 0, children: p })
  ] });
});
Q.displayName = "IpsTextFieldMobile";
export {
  Q as IpsTextFieldMobile
};
