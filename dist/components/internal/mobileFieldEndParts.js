import { jsxs as e, jsx as t } from "react/jsx-runtime";
import { styled as i } from "@mui/material/styles";
import { MOBILE_FIELD as a, CHEVRON_CLEARANCE_PX as l } from "./mobileFieldParts.js";
const r = 20, p = i("span")(({ theme: n }) => ({
  position: "absolute",
  top: "50%",
  insetInlineEnd: a.chevronInsetPx,
  display: "flex",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: n.palette.text.primary
})), u = i("button")(({ theme: n }) => ({
  position: "absolute",
  top: 0,
  insetInlineEnd: 0,
  // Above an invisible native control that covers the field (date / time pickers)
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: l,
  height: a.heightPx,
  margin: 0,
  padding: 0,
  border: "none",
  background: "transparent",
  color: n.palette.text.primary,
  cursor: "pointer",
  "&:focus-visible": {
    outline: `2px solid ${n.palette.primary.main}`,
    outlineOffset: -6,
    borderRadius: 4
  }
}));
function o({ children: n }) {
  return /* @__PURE__ */ t(
    "svg",
    {
      "aria-hidden": "true",
      width: r,
      height: r,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: n
    }
  );
}
function h() {
  return /* @__PURE__ */ e(o, { children: [
    /* @__PURE__ */ t("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ t("path", { d: "m6 6 12 12" })
  ] });
}
function f() {
  return /* @__PURE__ */ e(o, { children: [
    /* @__PURE__ */ t("path", { d: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" }),
    /* @__PURE__ */ t("path", { d: "M16 3v4" }),
    /* @__PURE__ */ t("path", { d: "M8 3v4" }),
    /* @__PURE__ */ t("path", { d: "M4 11h16" })
  ] });
}
function I() {
  return /* @__PURE__ */ e(o, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ t("path", { d: "M12 7v5l3 3" })
  ] });
}
export {
  f as CalendarIcon,
  h as ClearIcon,
  I as ClockIcon,
  u as FieldClearButton,
  p as FieldEndIconSlot
};
