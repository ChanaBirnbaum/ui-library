import { jsxs as s, jsx as t } from "react/jsx-runtime";
import { forwardRef as m, useRef as k } from "react";
import { styled as r } from "@mui/material/styles";
import { MOBILE_FIELD as C, outlinedFieldDisabledStyles as L, outlinedFieldFocusStyles as v, mobileFieldRadius as h } from "../internal/mobileFieldParts.js";
const b = 44, a = 20, f = 18, I = 14, N = I + a + 8, l = b, R = "Clear", T = "search", w = r("div")({
  position: "relative",
  width: "100%",
  minWidth: 0
}), A = r("input")(({ theme: e }) => ({
  appearance: "none",
  WebkitAppearance: "none",
  boxSizing: "border-box",
  width: "100%",
  height: b,
  margin: 0,
  paddingInlineStart: N,
  paddingInlineEnd: l,
  fontFamily: "inherit",
  fontSize: C.fontSizePx,
  color: e.palette.text.primary,
  backgroundColor: e.palette.background.paper,
  border: `1px solid ${e.palette.grey[300]}`,
  borderRadius: h(e),
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
  "&:focus": v(e, !1),
  "&:disabled": L(e)
})), F = r("span")(({ theme: e }) => ({
  position: "absolute",
  top: "50%",
  insetInlineStart: I,
  display: "flex",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: e.palette.text.secondary
})), B = r("button")(({ theme: e }) => ({
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
  borderRadius: h(e),
  background: "transparent",
  color: e.palette.text.secondary,
  cursor: "pointer",
  "&:focus-visible": {
    outline: `2px solid ${e.palette.primary.main}`,
    outlineOffset: -4
  }
}));
function P() {
  return /* @__PURE__ */ s(
    "svg",
    {
      "aria-hidden": "true",
      width: a,
      height: a,
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
function O() {
  return /* @__PURE__ */ s(
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
const X = m(
  (e, i) => {
    const {
      value: c,
      onChange: o,
      clearButtonLabel: y = R,
      disabled: d = !1,
      className: _,
      ...p
    } = e, u = k(null), E = c.length > 0, S = (n) => {
      u.current = n, typeof i == "function" ? i(n) : i && (i.current = n);
    }, x = () => {
      var n;
      o == null || o(""), (n = u.current) == null || n.focus();
    }, g = ["ips-search-field-mobile", _].filter(Boolean).join(" ");
    return /* @__PURE__ */ s(w, { className: g, children: [
      /* @__PURE__ */ t(F, { children: /* @__PURE__ */ t(P, {}) }),
      /* @__PURE__ */ t(
        A,
        {
          ...p,
          ref: S,
          type: "search",
          enterKeyHint: p.enterKeyHint ?? T,
          value: c,
          onChange: (n) => o == null ? void 0 : o(n.target.value),
          disabled: d
        }
      ),
      E && !d && /* @__PURE__ */ t(B, { type: "button", "aria-label": y, onClick: x, children: /* @__PURE__ */ t(O, {}) })
    ] });
  }
);
X.displayName = "IpsSearchFieldMobile";
export {
  X as IpsSearchFieldMobile
};
