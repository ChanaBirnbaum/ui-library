import { jsxs as g, jsx as i } from "react/jsx-runtime";
import { forwardRef as W, useId as q, useMemo as X } from "react";
import { styled as h } from "@mui/material/styles";
import { IpsSelect as z } from "../IpsSelect/IpsSelect.js";
import { outlinedFieldFocusStyles as G, outlinedFieldDisabledStyles as K, outlinedFieldBoxStyles as Z, invisibleOverlayStyles as J, MobileFieldLabel as Q, RequiredMark as Y, OutlinedChevronSlot as ee, ChevronDownIcon as C, MOBILE_FIELD as O, MobileHelperText as le } from "../internal/mobileFieldParts.js";
import { NativeOptions as ie } from "../internal/NativeOptions.js";
import { isIosWebKit as te } from "../../utils/platform.js";
const oe = ", ", p = "__ips_all__", ne = "50vh", re = { slotProps: { paper: { sx: { maxHeight: ne } } } }, se = O.chevronSizePx / 2, ae = (e) => ({
  height: O.heightPx,
  "& .MuiSelect-icon": {
    top: `calc(50% - ${se}px)`,
    right: O.chevronInsetPx,
    color: e.palette.text.secondary
  }
});
function ce({ className: e }) {
  return /* @__PURE__ */ i("span", { className: e, style: { display: "flex" }, children: /* @__PURE__ */ i(C, {}) });
}
function de(e) {
  return e.join(oe);
}
function ue(e, t) {
  return e.filter((l) => t.includes(l.value));
}
function w(e, t) {
  const l = e.filter((o) => o !== p);
  return e.includes(p) && !t ? [] : l;
}
const pe = h("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: 0
}), he = h("div", {
  shouldForwardProp: (e) => e !== "hasValue" && e !== "hasError" && e !== "isDisabled"
})(({ theme: e, hasValue: t, hasError: l, isDisabled: n }) => ({
  ...Z(e, { hasValue: t, hasError: l }),
  position: "relative",
  display: "flex",
  alignItems: "center",
  ...n ? K(e) : {},
  // Like any field, the box shows focus while its native select is focused
  "&:focus-within": G(e, l)
})), me = h("span")({
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}), ve = h("select")(J), fe = W(
  (e, t) => {
    const {
      options: l,
      value: n,
      onChange: o,
      label: m,
      placeholder: M,
      allOptionLabel: v,
      formatSelection: D = de,
      picker: f = "auto",
      required: _ = !1,
      disabled: b = !1,
      error: s = !1,
      helperText: u,
      "aria-label": P,
      id: R,
      name: A,
      className: V
    } = e, k = q(), a = R ?? k, E = `${a}-label`, S = `${a}-helper-text`, N = X(
      () => f === "native" || f === "auto" && te(),
      [f]
    ), L = !!v, c = L && n.length === 0, x = L ? [{ value: p, label: v }, ...l] : l, F = c ? [p] : n, I = ue(l, n), H = I.length > 0 || c, T = I.length > 0 ? D(I.map((r) => r.label)) : (c ? v : M) ?? "", j = (r) => {
      const y = Array.from(r.target.selectedOptions, (d) => d.value), B = x.filter((d) => y.includes(String(d.value))).map((d) => d.value);
      o == null || o(w(B, c));
    }, U = (r) => {
      const y = Array.isArray(r) ? r : [];
      o == null || o(w(y, c));
    }, $ = ["ips-multi-select-mobile", V].filter(Boolean).join(" ");
    return /* @__PURE__ */ g(pe, { className: $, children: [
      m && /* @__PURE__ */ g(Q, { id: E, htmlFor: N ? a : void 0, children: [
        m,
        _ && /* @__PURE__ */ i(Y, { "aria-hidden": "true", children: " *" })
      ] }),
      N ? /* @__PURE__ */ g(he, { hasValue: H, hasError: s, isDisabled: b, children: [
        /* @__PURE__ */ i(me, { "aria-hidden": "true", children: T }),
        /* @__PURE__ */ i(ee, { children: /* @__PURE__ */ i(C, {}) }),
        /* @__PURE__ */ i(
          ve,
          {
            ref: t,
            id: a,
            name: A,
            multiple: !0,
            value: F.map(String),
            onChange: j,
            disabled: b,
            required: _,
            "aria-label": P,
            "aria-invalid": s || void 0,
            "aria-describedby": u ? S : void 0,
            children: /* @__PURE__ */ i(ie, { options: x })
          }
        )
      ] }) : /* @__PURE__ */ i(
        z,
        {
          ref: t,
          id: a,
          name: A,
          multiple: !0,
          options: x,
          value: F,
          onChange: U,
          placeholder: M,
          renderValue: () => T,
          disabled: b,
          error: s,
          labelId: m ? E : void 0,
          inputProps: { "aria-label": P },
          SelectDisplayProps: { "aria-describedby": u ? S : void 0 },
          MenuProps: re,
          IconComponent: ce,
          sx: ae
        }
      ),
      u && /* @__PURE__ */ i(le, { id: S, hasError: s, role: s ? "alert" : void 0, children: u })
    ] });
  }
);
fe.displayName = "IpsMultiSelectMobile";
export {
  fe as IpsMultiSelectMobile
};
