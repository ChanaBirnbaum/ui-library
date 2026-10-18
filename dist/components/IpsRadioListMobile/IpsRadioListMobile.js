import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { forwardRef as I, useId as x } from "react";
import { styled as r } from "@mui/material/styles";
const _ = 56, N = 16, b = 20, w = 600, E = r("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%"
}), R = r("span")(({ theme: e }) => ({
  marginBottom: 4,
  fontSize: "0.875rem",
  fontWeight: 500,
  color: e.palette.text.secondary
})), S = r("label", {
  shouldForwardProp: (e) => e !== "isSelected" && e !== "isDisabled"
})(({ theme: e, isSelected: o, isDisabled: a }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  minHeight: _,
  fontSize: N,
  fontWeight: o ? w : 400,
  color: a ? e.palette.text.disabled : o ? e.palette.primary.main : e.palette.text.primary,
  borderBottom: `1px solid ${e.palette.divider}`,
  cursor: a ? "default" : "pointer",
  // The radio comes first in the row, so keyboard focus can ring the option text after it
  "& input:focus-visible + span": {
    outline: `2px solid ${e.palette.primary.main}`,
    outlineOffset: 4,
    borderRadius: 2
  }
})), C = r("input")({
  position: "absolute",
  width: 1,
  height: 1,
  margin: 0,
  opacity: 0,
  pointerEvents: "none"
});
function L() {
  return /* @__PURE__ */ i(
    "svg",
    {
      "aria-hidden": "true",
      width: b,
      height: b,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ i("path", { d: "M20 6 9 17l-5-5" })
    }
  );
}
const $ = I(
  (e, o) => {
    const {
      options: a,
      value: d,
      onChange: n,
      label: l,
      "aria-label": f,
      name: h,
      disabled: c = !1,
      className: g
    } = e, p = x(), v = h ?? p, u = `${p}-label`, y = ["ips-radio-list-mobile", g].filter(Boolean).join(" ");
    return /* @__PURE__ */ m(
      E,
      {
        ref: o,
        role: "radiogroup",
        "aria-labelledby": l ? u : void 0,
        "aria-label": l ? void 0 : f,
        className: y,
        children: [
          l && /* @__PURE__ */ i(R, { id: u, children: l }),
          a.map((t) => {
            const s = d !== null && String(t.value) === String(d);
            return /* @__PURE__ */ m(S, { className: "ips-radio-list-row", isSelected: s, isDisabled: c, children: [
              /* @__PURE__ */ i(
                C,
                {
                  type: "radio",
                  name: v,
                  value: String(t.value),
                  checked: s,
                  disabled: c,
                  onChange: () => n == null ? void 0 : n(t.value)
                }
              ),
              /* @__PURE__ */ i("span", { children: t.label }),
              s && /* @__PURE__ */ i(L, {})
            ] }, t.value);
          })
        ]
      }
    );
  }
);
$.displayName = "IpsRadioListMobile";
export {
  $ as IpsRadioListMobile
};
