import { jsxs as a, jsx as t } from "react/jsx-runtime";
import { forwardRef as T, useId as $, useRef as z } from "react";
import { styled as n } from "@mui/material/styles";
import { MOBILE_FIELD as s, CHEVRON_CLEARANCE_PX as D, outlinedFieldDisabledStyles as L, outlinedFieldFocusStyles as O, mobileFieldRadius as _, MobileFieldLabel as j, RequiredMark as W, MobileHelperText as A } from "../internal/mobileFieldParts.js";
import { FieldClearButton as H, ClearIcon as q, FieldEndIconSlot as V } from "../internal/mobileFieldEndParts.js";
const X = 0.5, G = n("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: 0
}), J = n("div")({
  position: "relative",
  width: "100%"
}), K = n("div", {
  shouldForwardProp: (e) => e !== "hasError" && e !== "isDisabled"
})(({ theme: e, hasError: i, isDisabled: l }) => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
  boxSizing: "border-box",
  width: "100%",
  height: s.heightPx,
  paddingInlineStart: s.paddingStartPx,
  paddingInlineEnd: D,
  fontSize: s.fontSizePx,
  color: e.palette.text.primary,
  backgroundColor: e.palette.background.paper,
  border: `1px solid ${i ? e.palette.error.main : e.palette.grey[300]}`,
  borderRadius: _(e),
  cursor: "text",
  "&:focus-within": O(e, i),
  ...l ? L(e) : {}
})), Q = n("input", {
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
})), U = n("span")({
  flexShrink: 0,
  whiteSpace: "nowrap"
}), Y = T((e, i) => {
  const {
    value: l,
    onChange: r,
    suffix: h,
    endIcon: x,
    clearButtonLabel: b,
    label: m,
    required: g = !1,
    disabled: c = !1,
    error: d = !1,
    helperText: p,
    className: v,
    id: S,
    "aria-describedby": w,
    ...R
  } = e, C = $(), u = S ?? C, y = `${u}-helper-text`, B = [w, p ? y : void 0].filter(Boolean).join(" ") || void 0, f = z(null), I = l.length > 0, F = !!h && I, E = I && !!b && !c, P = F ? l.length + X : null, k = (o) => {
    f.current = o, typeof i == "function" ? i(o) : i && (i.current = o);
  }, M = () => {
    var o;
    r == null || r(""), (o = f.current) == null || o.focus();
  }, N = ["ips-text-field-mobile", v].filter(Boolean).join(" ");
  return /* @__PURE__ */ a(G, { className: N, children: [
    m && /* @__PURE__ */ a(j, { htmlFor: u, children: [
      m,
      g && /* @__PURE__ */ t(W, { "aria-hidden": "true", children: " *" })
    ] }),
    /* @__PURE__ */ a(J, { children: [
      /* @__PURE__ */ a(K, { hasError: d, isDisabled: c, onClick: () => {
        var o;
        return (o = f.current) == null ? void 0 : o.focus();
      }, children: [
        /* @__PURE__ */ t(
          Q,
          {
            ...R,
            ref: k,
            id: u,
            value: l,
            onChange: (o) => r == null ? void 0 : r(o.target.value),
            disabled: c,
            required: g,
            contentWidthCh: P,
            "aria-invalid": d || void 0,
            "aria-describedby": B
          }
        ),
        F && /* @__PURE__ */ t(U, { "aria-hidden": "true", children: h })
      ] }),
      E ? /* @__PURE__ */ t(H, { type: "button", "aria-label": b, onClick: M, children: /* @__PURE__ */ t(q, {}) }) : x && /* @__PURE__ */ t(V, { children: x })
    ] }),
    p && /* @__PURE__ */ t(A, { id: y, hasError: d, role: d ? "alert" : void 0, children: p })
  ] });
});
Y.displayName = "IpsTextFieldMobile";
export {
  Y as IpsTextFieldMobile
};
