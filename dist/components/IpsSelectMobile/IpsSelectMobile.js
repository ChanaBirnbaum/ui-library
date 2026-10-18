import { jsxs as n, jsx as i, Fragment as E } from "react/jsx-runtime";
import { forwardRef as R, useId as _ } from "react";
import { styled as t } from "@mui/material/styles";
import { outlinedFieldDisabledStyles as A, outlinedFieldFocusStyles as L, outlinedFieldBoxStyles as $, invisibleOverlayStyles as j, MobileFieldLabel as k, RequiredMark as U, ChevronDownIcon as I, OutlinedChevronSlot as q, MobileHelperText as B } from "../internal/mobileFieldParts.js";
import { NativeOptions as H } from "../internal/NativeOptions.js";
const h = "", X = 4, Y = t("div", {
  shouldForwardProp: (e) => e !== "isPlain"
})(({ isPlain: e }) => ({
  display: e ? "inline-flex" : "flex",
  flexDirection: "column",
  width: e ? "auto" : "100%",
  maxWidth: "100%",
  minWidth: 0
})), z = t("div")({
  position: "relative",
  width: "100%"
}), G = t("select", {
  shouldForwardProp: (e) => e !== "hasValue" && e !== "hasError"
})(({ theme: e, hasValue: o, hasError: l }) => ({
  ...$(e, { hasValue: o, hasError: l }),
  appearance: "none",
  WebkitAppearance: "none",
  outline: "none",
  cursor: "pointer",
  textOverflow: "ellipsis",
  "&:hover:not(:disabled):not(:focus)": {
    borderColor: l ? e.palette.error.main : e.palette.text.primary
  },
  "&:focus": L(e, l),
  "&:disabled": A(e),
  "& option": {
    color: e.palette.text.primary
  }
})), J = t("div", {
  shouldForwardProp: (e) => e !== "hasValue" && e !== "isDisabled"
})(({ theme: e, hasValue: o, isDisabled: l }) => ({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  maxWidth: "100%",
  minWidth: 0,
  font: "inherit",
  color: l ? e.palette.text.disabled : o ? "inherit" : e.palette.text.secondary,
  "& svg": { flexShrink: 0 },
  // The native select comes first in the DOM, so keyboard focus can ring the value text after it
  "& select:focus-visible + span": {
    outline: `2px solid ${e.palette.primary.main}`,
    outlineOffset: 2,
    borderRadius: X
  }
})), K = t("span")({
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}), Q = t("select")(j);
function Z(e) {
  return e == null || e === h;
}
const ee = R(
  (e, o) => {
    var w;
    const {
      options: l,
      value: v,
      onChange: a,
      variant: O = "outlined",
      label: f,
      placeholder: b,
      required: m = !1,
      disabled: x = !1,
      error: r = !1,
      helperText: s,
      className: N,
      id: C,
      ...V
    } = e, W = _(), d = C ?? W, S = `${d}-helper-text`, c = !Z(v), y = c ? String(v) : h, p = O === "plain", P = {
      ...V,
      ref: o,
      id: d,
      value: y,
      onChange: (u) => {
        const F = l.find(
          (T) => String(T.value) === u.target.value
        );
        F && (a == null || a(F.value));
      },
      disabled: x,
      required: m,
      "aria-invalid": r || void 0,
      "aria-describedby": s ? S : void 0
    }, g = /* @__PURE__ */ n(E, { children: [
      /* @__PURE__ */ i("option", { value: h, disabled: !0, children: b ?? "" }),
      /* @__PURE__ */ i(H, { options: l })
    ] }), D = (w = l.find((u) => String(u.value) === y)) == null ? void 0 : w.label, M = ["ips-select-mobile", p && "ips-select-mobile-plain", N].filter(Boolean).join(" ");
    return /* @__PURE__ */ n(Y, { className: M, isPlain: p, children: [
      f && /* @__PURE__ */ n(k, { htmlFor: d, children: [
        f,
        m && /* @__PURE__ */ i(U, { "aria-hidden": "true", children: " *" })
      ] }),
      p ? /* @__PURE__ */ n(J, { hasValue: c, isDisabled: x, children: [
        /* @__PURE__ */ i(Q, { ...P, children: g }),
        /* @__PURE__ */ i(K, { children: D ?? b ?? "" }),
        /* @__PURE__ */ i(I, {})
      ] }) : /* @__PURE__ */ n(z, { children: [
        /* @__PURE__ */ i(G, { ...P, hasValue: c, hasError: r, children: g }),
        /* @__PURE__ */ i(q, { children: /* @__PURE__ */ i(I, {}) })
      ] }),
      s && /* @__PURE__ */ i(B, { id: S, hasError: r, role: r ? "alert" : void 0, children: s })
    ] });
  }
);
ee.displayName = "IpsSelectMobile";
export {
  ee as IpsSelectMobile
};
