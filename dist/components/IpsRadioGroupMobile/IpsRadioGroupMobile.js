import { jsxs as u, jsx as l } from "react/jsx-runtime";
import { forwardRef as C, useId as v } from "react";
import { styled as t, alpha as D } from "@mui/material/styles";
const I = 20, _ = 10, g = 24, N = 16, E = 24, R = 14, T = 18, G = 8, X = 16, F = 16, L = 0.4, k = t("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%"
}), H = t("span")(({ theme: e }) => ({
  marginBottom: 4,
  fontSize: "0.875rem",
  color: e.palette.text.secondary
})), W = t("div", {
  shouldForwardProp: (e) => e !== "isStacked"
})(
  ({ isStacked: e }) => e ? { display: "flex", flexDirection: "column", rowGap: X } : { display: "flex", flexWrap: "wrap", rowGap: G, columnGap: F }
), j = t("label", {
  shouldForwardProp: (e) => e !== "isDisabled" && e !== "isStacked"
})(({ theme: e, isDisabled: i, isStacked: a }) => ({
  position: "relative",
  display: a ? "flex" : "inline-flex",
  // A stacked option wraps its text, so the circle stays next to the first line
  alignItems: a ? "flex-start" : "center",
  gap: 8,
  fontSize: N,
  lineHeight: `${E}px`,
  whiteSpace: a ? "normal" : "nowrap",
  color: i ? e.palette.text.disabled : e.palette.text.primary,
  cursor: i ? "default" : "pointer",
  // The radio comes first, so keyboard focus can ring the drawn circle after it
  "& input:focus-visible + span": {
    boxShadow: `0 0 0 3px ${D(e.palette.primary.main, L)}`
  }
})), A = t("input")({
  position: "absolute",
  width: 1,
  height: 1,
  margin: 0,
  opacity: 0,
  pointerEvents: "none"
}), Z = t("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: g,
  height: g,
  borderRadius: "50%"
}), z = t("span", {
  shouldForwardProp: (e) => e !== "isChecked" && e !== "isDisabled"
})(({ theme: e, isChecked: i, isDisabled: a }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  width: I,
  height: I,
  border: `${i ? 2 : 1}px solid ${a ? e.palette.text.disabled : e.palette.primary.main}`,
  borderRadius: "50%"
})), M = t("span", {
  shouldForwardProp: (e) => e !== "isDisabled"
})(({ theme: e, isDisabled: i }) => ({
  width: _,
  height: _,
  borderRadius: "50%",
  backgroundColor: i ? e.palette.text.disabled : e.palette.primary.main
})), B = t("span")({
  display: "flex",
  flexDirection: "column",
  minWidth: 0
}), U = t("span", {
  shouldForwardProp: (e) => e !== "isStacked"
})(({ theme: e, isStacked: i }) => ({
  fontWeight: i ? e.typography.fontWeightMedium : void 0
})), K = t("span", {
  shouldForwardProp: (e) => e !== "isDisabled"
})(({ theme: e, isDisabled: i }) => ({
  fontSize: R,
  lineHeight: `${T}px`,
  color: i ? e.palette.text.disabled : e.palette.text.secondary
})), V = C((e, i) => {
  const { options: a, value: b, onChange: n, label: r, "aria-label": y, name: P, disabled: s = !1, className: S } = e, d = v(), O = P ?? d, h = `${d}-label`, c = a.some((o) => !!o.description), $ = ["ips-radio-group-mobile", S].filter(Boolean).join(" ");
  return /* @__PURE__ */ u(
    k,
    {
      ref: i,
      role: "radiogroup",
      "aria-labelledby": r ? h : void 0,
      "aria-label": r ? void 0 : y,
      className: $,
      children: [
        r && /* @__PURE__ */ l(H, { id: h, children: r }),
        /* @__PURE__ */ l(W, { isStacked: c, children: a.map((o, w) => {
          const p = b !== null && String(o.value) === String(b), m = `${d}-option-${w}`, x = o.description ? `${m}-title` : void 0, f = o.description ? `${m}-description` : void 0;
          return /* @__PURE__ */ u(
            j,
            {
              className: "ips-radio-group-option",
              isDisabled: s,
              isStacked: c,
              children: [
                /* @__PURE__ */ l(
                  A,
                  {
                    type: "radio",
                    name: O,
                    value: String(o.value),
                    checked: p,
                    disabled: s,
                    "aria-labelledby": x,
                    "aria-describedby": f,
                    onChange: () => n == null ? void 0 : n(o.value)
                  }
                ),
                /* @__PURE__ */ l(Z, { "aria-hidden": "true", children: /* @__PURE__ */ l(z, { isChecked: p, isDisabled: s, children: p && /* @__PURE__ */ l(M, { isDisabled: s }) }) }),
                /* @__PURE__ */ u(B, { children: [
                  /* @__PURE__ */ l(U, { id: x, isStacked: c, children: o.label }),
                  o.description && /* @__PURE__ */ l(K, { id: f, isDisabled: s, children: o.description })
                ] })
              ]
            },
            o.value
          );
        }) })
      ]
    }
  );
});
V.displayName = "IpsRadioGroupMobile";
export {
  V as IpsRadioGroupMobile
};
