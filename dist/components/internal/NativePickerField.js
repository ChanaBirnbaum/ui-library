import { jsxs as f, jsx as i } from "react/jsx-runtime";
import { forwardRef as M, useId as D, useRef as L } from "react";
import { styled as a } from "@mui/material/styles";
import { MOBILE_FIELD as b, CHEVRON_CLEARANCE_PX as T, outlinedFieldDisabledStyles as V, mobileFieldRadius as O, invisibleOverlayStyles as j, outlinedFieldFocusStyles as z, MobileFieldLabel as W, RequiredMark as _, MobileHelperText as $ } from "./mobileFieldParts.js";
import { FieldClearButton as q, ClearIcon as A, FieldEndIconSlot as H } from "./mobileFieldEndParts.js";
const X = a("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: 0
}), G = a("div")({
  position: "relative",
  width: "100%"
}), J = a("div", {
  shouldForwardProp: (e) => e !== "hasError" && e !== "isMuted" && e !== "isDisabled"
})(({ theme: e, hasError: r, isMuted: d, isDisabled: n }) => ({
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  width: "100%",
  height: b.heightPx,
  paddingInlineStart: b.paddingStartPx,
  paddingInlineEnd: T,
  fontSize: b.fontSizePx,
  color: d ? e.palette.text.secondary : e.palette.text.primary,
  backgroundColor: e.palette.background.paper,
  border: `1px solid ${r ? e.palette.error.main : e.palette.grey[300]}`,
  borderRadius: O(e),
  ...n ? V(e) : {}
})), K = a("span")({
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}), Q = a("input", {
  shouldForwardProp: (e) => e !== "hasError"
})(({ theme: e, hasError: r }) => ({
  ...j,
  // Desktop browsers open the picker only from their own indicator, so it is stretched over the whole field
  "&::-webkit-calendar-picker-indicator": {
    position: "absolute",
    inset: 0,
    width: "auto",
    height: "auto",
    margin: 0,
    padding: 0,
    opacity: 0,
    cursor: "pointer"
  },
  "&:focus + div": z(e, r)
})), U = M((e, r) => {
  const {
    inputType: d,
    icon: n,
    value: s,
    onChange: l,
    formatValue: I,
    placeholder: g = "",
    muted: w = !1,
    clearButtonLabel: x,
    label: m,
    required: v = !1,
    disabled: c = !1,
    error: o = !1,
    helperText: p,
    className: E,
    rootClassName: P,
    id: R,
    ...S
  } = e, N = D(), u = R ?? N, y = `${u}-helper-text`, F = L(null), h = s !== "", k = h && !!x && !c, C = (t) => {
    F.current = t, typeof r == "function" ? r(t) : r && (r.current = t);
  }, B = () => {
    var t;
    l == null || l(""), (t = F.current) == null || t.focus();
  };
  return /* @__PURE__ */ f(X, { className: [P, E].filter(Boolean).join(" "), children: [
    m && /* @__PURE__ */ f(W, { htmlFor: u, children: [
      m,
      v && /* @__PURE__ */ i(_, { "aria-hidden": "true", children: " *" })
    ] }),
    /* @__PURE__ */ f(G, { children: [
      /* @__PURE__ */ i(
        Q,
        {
          ...S,
          ref: C,
          id: u,
          type: d,
          value: s,
          onChange: (t) => l == null ? void 0 : l(t.target.value),
          disabled: c,
          required: v,
          hasError: o,
          "aria-invalid": o || void 0,
          "aria-describedby": p ? y : void 0
        }
      ),
      /* @__PURE__ */ i(J, { "aria-hidden": "true", hasError: o, isMuted: !h || w, isDisabled: c, children: /* @__PURE__ */ i(K, { children: h ? /* @__PURE__ */ i("bdi", { dir: "ltr", children: I(s) }) : g }) }),
      k ? /* @__PURE__ */ i(q, { type: "button", "aria-label": x, onClick: B, children: /* @__PURE__ */ i(A, {}) }) : /* @__PURE__ */ i(H, { children: n })
    ] }),
    p && /* @__PURE__ */ i($, { id: y, hasError: o, role: o ? "alert" : void 0, children: p })
  ] });
});
U.displayName = "NativePickerField";
export {
  U as NativePickerField
};
