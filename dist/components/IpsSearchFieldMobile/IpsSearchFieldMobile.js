import { jsxs as c, jsx as t } from "react/jsx-runtime";
import { forwardRef as S, useRef as g } from "react";
import { styled as i } from "@mui/material/styles";
import { MOBILE_FIELD as k } from "../internal/mobileFieldParts.js";
const a = 44, s = 20, f = 18, b = 14, C = b + s + 8, l = a, L = "Clear", v = "search", N = i("div")({
  position: "relative",
  width: "100%",
  minWidth: 0
}), w = i("input")(({ theme: e }) => ({
  appearance: "none",
  WebkitAppearance: "none",
  boxSizing: "border-box",
  width: "100%",
  height: a,
  margin: 0,
  paddingInlineStart: C,
  paddingInlineEnd: l,
  fontFamily: "inherit",
  fontSize: k.fontSizePx,
  color: e.palette.text.primary,
  backgroundColor: e.palette.background.paper,
  border: "none",
  borderRadius: a / 2,
  outline: "none",
  textOverflow: "ellipsis",
  "&::placeholder": {
    color: e.palette.text.secondary,
    opacity: 1
  },
  // The browser's own clear button differs per platform, so the field draws its own
  "&::-webkit-search-cancel-button, &::-webkit-search-decoration": {
    WebkitAppearance: "none",
    display: "none"
  },
  "&:focus": {
    boxShadow: `0 0 0 2px ${e.palette.primary.main}`
  },
  "&:disabled": {
    color: e.palette.text.disabled
  }
})), R = i("span")(({ theme: e }) => ({
  position: "absolute",
  top: "50%",
  insetInlineStart: b,
  display: "flex",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: e.palette.text.secondary
})), T = i("button")(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  insetInlineEnd: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: l,
  height: l,
  margin: 0,
  padding: 0,
  border: "none",
  borderRadius: "50%",
  background: "transparent",
  color: e.palette.text.secondary,
  cursor: "pointer",
  "&:focus-visible": {
    outline: `2px solid ${e.palette.primary.main}`,
    outlineOffset: -4
  }
}));
function A() {
  return /* @__PURE__ */ c(
    "svg",
    {
      "aria-hidden": "true",
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ t("path", { d: "m21 21-4.35-4.35" })
      ]
    }
  );
}
function B() {
  return /* @__PURE__ */ c(
    "svg",
    {
      "aria-hidden": "true",
      width: f,
      height: f,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ t("path", { d: "M18 6 6 18" }),
        /* @__PURE__ */ t("path", { d: "m6 6 12 12" })
      ]
    }
  );
}
const P = S(
  (e, r) => {
    const {
      value: d,
      onChange: o,
      clearButtonLabel: I = L,
      disabled: p = !1,
      className: m,
      ...u
    } = e, h = g(null), _ = d.length > 0, x = (n) => {
      h.current = n, typeof r == "function" ? r(n) : r && (r.current = n);
    }, y = () => {
      var n;
      o == null || o(""), (n = h.current) == null || n.focus();
    }, E = ["ips-search-field-mobile", m].filter(Boolean).join(" ");
    return /* @__PURE__ */ c(N, { className: E, children: [
      /* @__PURE__ */ t(R, { children: /* @__PURE__ */ t(A, {}) }),
      /* @__PURE__ */ t(
        w,
        {
          ...u,
          ref: x,
          type: "search",
          enterKeyHint: u.enterKeyHint ?? v,
          value: d,
          onChange: (n) => o == null ? void 0 : o(n.target.value),
          disabled: p
        }
      ),
      _ && !p && /* @__PURE__ */ t(T, { type: "button", "aria-label": I, onClick: y, children: /* @__PURE__ */ t(B, {}) })
    ] });
  }
);
P.displayName = "IpsSearchFieldMobile";
export {
  P as IpsSearchFieldMobile
};
