import { jsx as i } from "react/jsx-runtime";
import { styled as n } from "@mui/material/styles";
const t = {
  heightPx: 42,
  paddingStartPx: 14,
  chevronSizePx: 20,
  chevronInsetPx: 12,
  // 16px keeps iOS Safari from zooming the page when the field gets focus
  fontSizePx: 16,
  fallbackRadiusPx: 6
}, l = t.chevronInsetPx + t.chevronSizePx + 8, p = n("label")(({ theme: e }) => ({
  display: "block",
  marginBottom: "3px",
  fontSize: "12px",
  lineHeight: 1,
  color: e.palette.text.secondary
})), c = n("span")(({ theme: e }) => ({
  color: e.palette.error.main
})), u = n("p", {
  shouldForwardProp: (e) => e !== "hasError"
})(({ theme: e, hasError: o }) => ({
  margin: "4px 0 0",
  fontSize: "12px",
  lineHeight: 1.25,
  color: o ? e.palette.error.main : e.palette.text.secondary
}));
function a(e) {
  var o, r;
  return ((r = (o = e.custom) == null ? void 0 : o.radius) == null ? void 0 : r.input) ?? t.fallbackRadiusPx;
}
function x(e, { hasValue: o, hasError: r }) {
  return {
    width: "100%",
    height: t.heightPx,
    margin: 0,
    paddingInlineStart: t.paddingStartPx,
    paddingInlineEnd: l,
    fontFamily: "inherit",
    fontSize: t.fontSizePx,
    color: o ? e.palette.text.primary : e.palette.text.secondary,
    backgroundColor: e.palette.background.paper,
    border: `1px solid ${r ? e.palette.error.main : e.palette.grey[300]}`,
    borderRadius: a(e)
  };
}
function f(e, o) {
  const r = o ? e.palette.error.main : e.palette.primary.main;
  return {
    borderColor: r,
    boxShadow: `inset 0 0 0 1px ${r}`
  };
}
function h(e) {
  return {
    cursor: "default",
    color: e.palette.text.disabled,
    backgroundColor: e.palette.grey[50],
    borderColor: e.palette.grey[200]
  };
}
const b = n("span")(({ theme: e }) => ({
  position: "absolute",
  top: "50%",
  insetInlineEnd: t.chevronInsetPx,
  display: "flex",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: e.palette.text.secondary
}));
function g() {
  return /* @__PURE__ */ i(
    "svg",
    {
      "aria-hidden": "true",
      width: t.chevronSizePx,
      height: t.chevronSizePx,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ i("path", { d: "m6 9 6 6 6-6" })
    }
  );
}
const S = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  margin: 0,
  opacity: 0,
  fontSize: t.fontSizePx,
  cursor: "pointer",
  "&:disabled": { cursor: "default" }
};
export {
  l as CHEVRON_CLEARANCE_PX,
  g as ChevronDownIcon,
  t as MOBILE_FIELD,
  p as MobileFieldLabel,
  u as MobileHelperText,
  b as OutlinedChevronSlot,
  c as RequiredMark,
  S as invisibleOverlayStyles,
  a as mobileFieldRadius,
  x as outlinedFieldBoxStyles,
  h as outlinedFieldDisabledStyles,
  f as outlinedFieldFocusStyles
};
