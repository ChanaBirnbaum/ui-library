import { jsxs as I, jsx as o } from "react/jsx-runtime";
import { forwardRef as U, useId as W, useMemo as q } from "react";
import { styled as m } from "@mui/material/styles";
import { IpsSelect as H } from "../IpsSelect/IpsSelect.js";
import { outlinedFieldFocusStyles as K, outlinedFieldDisabledStyles as z, outlinedFieldBoxStyles as G, invisibleOverlayStyles as J, MobileFieldLabel as Q, RequiredMark as X, OutlinedChevronSlot as Y, ChevronDownIcon as Z, MobileHelperText as ee } from "../internal/mobileFieldParts.js";
import { NativeOptions as le } from "../internal/NativeOptions.js";
import { isIosWebKit as ie } from "../../utils/platform.js";
const te = ", ", p = "__ips_all__";
function oe(e) {
  return e.join(te);
}
function re(e, i) {
  return e.filter((l) => i.includes(l.value));
}
function E(e, i) {
  const l = e.filter((t) => t !== p);
  return e.includes(p) && !i ? [] : l;
}
const se = m("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: 0
}), ne = m("div", {
  shouldForwardProp: (e) => e !== "hasValue" && e !== "hasError" && e !== "isDisabled"
})(({ theme: e, hasValue: i, hasError: l, isDisabled: r }) => ({
  ...G(e, { hasValue: i, hasError: l }),
  position: "relative",
  display: "flex",
  alignItems: "center",
  ...r ? z(e) : {},
  // Like any field, the box shows focus while its native select is focused
  "&:focus-within": K(e, l)
})), ae = m("span")({
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}), de = m("select")(J), ce = U(
  (e, i) => {
    const {
      options: l,
      value: r,
      onChange: t,
      label: h,
      placeholder: x,
      allOptionLabel: v,
      formatSelection: k = oe,
      picker: f = "auto",
      required: A = !1,
      disabled: b = !1,
      error: n = !1,
      helperText: u,
      "aria-label": N,
      id: D,
      name: M,
      className: P
    } = e, V = W(), a = D ?? V, T = `${a}-label`, w = `${a}-helper-text`, S = q(
      () => f === "native" || f === "auto" && ie(),
      [f]
    ), L = !!v, d = L && r.length === 0, O = L ? [{ value: p, label: v }, ...l] : l, _ = d ? [p] : r, g = re(l, r), j = g.length > 0 || d, F = g.length > 0 ? k(g.map((s) => s.label)) : (d ? v : x) ?? "", C = (s) => {
      const y = Array.from(s.target.selectedOptions, (c) => c.value), B = O.filter((c) => y.includes(String(c.value))).map((c) => c.value);
      t == null || t(E(B, d));
    }, R = (s) => {
      const y = Array.isArray(s) ? s : [];
      t == null || t(E(y, d));
    }, $ = ["ips-multi-select-mobile", P].filter(Boolean).join(" ");
    return /* @__PURE__ */ I(se, { className: $, children: [
      h && /* @__PURE__ */ I(Q, { id: T, htmlFor: S ? a : void 0, children: [
        h,
        A && /* @__PURE__ */ o(X, { "aria-hidden": "true", children: " *" })
      ] }),
      S ? /* @__PURE__ */ I(ne, { hasValue: j, hasError: n, isDisabled: b, children: [
        /* @__PURE__ */ o(ae, { "aria-hidden": "true", children: F }),
        /* @__PURE__ */ o(Y, { children: /* @__PURE__ */ o(Z, {}) }),
        /* @__PURE__ */ o(
          de,
          {
            ref: i,
            id: a,
            name: M,
            multiple: !0,
            value: _.map(String),
            onChange: C,
            disabled: b,
            required: A,
            "aria-label": N,
            "aria-invalid": n || void 0,
            "aria-describedby": u ? w : void 0,
            children: /* @__PURE__ */ o(le, { options: O })
          }
        )
      ] }) : /* @__PURE__ */ o(
        H,
        {
          ref: i,
          id: a,
          name: M,
          multiple: !0,
          options: O,
          value: _,
          onChange: R,
          placeholder: x,
          renderValue: () => F,
          disabled: b,
          error: n,
          helperText: u,
          labelId: h ? T : void 0,
          inputProps: { "aria-label": N }
        }
      ),
      S && u && /* @__PURE__ */ o(ee, { id: w, hasError: n, role: n ? "alert" : void 0, children: u })
    ] });
  }
);
ce.displayName = "IpsMultiSelectMobile";
export {
  ce as IpsMultiSelectMobile
};
