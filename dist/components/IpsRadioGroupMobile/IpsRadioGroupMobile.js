import { jsxs as b, jsx as o } from "react/jsx-runtime";
import { forwardRef as S, useId as C } from "react";
import { styled as a, alpha as P } from "@mui/material/styles";
const h = 20, m = 10, x = 24, w = 16, v = 24, O = 8, N = 16, R = 0.4, E = a("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%"
}), G = a("span")(({ theme: e }) => ({
  marginBottom: 4,
  fontSize: "0.875rem",
  color: e.palette.text.secondary
})), D = a("div")({
  display: "flex",
  flexWrap: "wrap",
  rowGap: O,
  columnGap: N
}), L = a("label", {
  shouldForwardProp: (e) => e !== "isDisabled"
})(({ theme: e, isDisabled: i }) => ({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontSize: w,
  lineHeight: `${v}px`,
  whiteSpace: "nowrap",
  color: i ? e.palette.text.disabled : e.palette.text.primary,
  cursor: i ? "default" : "pointer",
  // The radio comes first, so keyboard focus can ring the drawn circle after it
  "& input:focus-visible + span": {
    boxShadow: `0 0 0 3px ${P(e.palette.primary.main, R)}`
  }
})), T = a("input")({
  position: "absolute",
  width: 1,
  height: 1,
  margin: 0,
  opacity: 0,
  pointerEvents: "none"
}), X = a("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: x,
  height: x,
  borderRadius: "50%"
}), $ = a("span", {
  shouldForwardProp: (e) => e !== "isChecked" && e !== "isDisabled"
})(({ theme: e, isChecked: i, isDisabled: s }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  width: h,
  height: h,
  border: `${i ? 2 : 1}px solid ${s ? e.palette.text.disabled : e.palette.primary.main}`,
  borderRadius: "50%"
})), j = a("span", {
  shouldForwardProp: (e) => e !== "isDisabled"
})(({ theme: e, isDisabled: i }) => ({
  width: m,
  height: m,
  borderRadius: "50%",
  backgroundColor: i ? e.palette.text.disabled : e.palette.primary.main
})), k = S((e, i) => {
  const { options: s, value: p, onChange: n, label: l, "aria-label": f, name: g, disabled: r = !1, className: I } = e, c = C(), _ = g ?? c, u = `${c}-label`, y = ["ips-radio-group-mobile", I].filter(Boolean).join(" ");
  return /* @__PURE__ */ b(
    E,
    {
      ref: i,
      role: "radiogroup",
      "aria-labelledby": l ? u : void 0,
      "aria-label": l ? void 0 : f,
      className: y,
      children: [
        l && /* @__PURE__ */ o(G, { id: u, children: l }),
        /* @__PURE__ */ o(D, { children: s.map((t) => {
          const d = p !== null && String(t.value) === String(p);
          return /* @__PURE__ */ b(L, { className: "ips-radio-group-option", isDisabled: r, children: [
            /* @__PURE__ */ o(
              T,
              {
                type: "radio",
                name: _,
                value: String(t.value),
                checked: d,
                disabled: r,
                onChange: () => n == null ? void 0 : n(t.value)
              }
            ),
            /* @__PURE__ */ o(X, { "aria-hidden": "true", children: /* @__PURE__ */ o($, { isChecked: d, isDisabled: r, children: d && /* @__PURE__ */ o(j, { isDisabled: r }) }) }),
            /* @__PURE__ */ o("span", { children: t.label })
          ] }, t.value);
        }) })
      ]
    }
  );
});
k.displayName = "IpsRadioGroupMobile";
export {
  k as IpsRadioGroupMobile
};
