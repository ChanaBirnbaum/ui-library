import { jsx as b, jsxs as $, Fragment as ft } from "react/jsx-runtime";
import { forwardRef as xt, useState as R, useRef as bt, useCallback as G, useEffect as ht } from "react";
import gt from "@mui/material/Autocomplete";
import wt from "@mui/material/Checkbox";
import yt from "@mui/material/Chip";
import { useTheme as It } from "@mui/material/styles";
import { IpsTextField as Rt } from "../IpsTextField/IpsTextField.js";
import { mergeSlotProps as S, toSxArray as T } from "../../utils/slotUtils.js";
import { listDensity as d } from "../../utils/listDensity.js";
import { thinScrollbarSx as St } from "../../utils/scrollbarSx.js";
import { ChipOverflowToggle as Tt } from "../internal/ChipOverflowToggle.js";
const Lt = 3, Ct = 320, _ = 16, U = 160, Ot = (i) => typeof i == "string" ? i : (i == null ? void 0 : i.label) || String(i), At = {
  py: d.listPaddingY,
  "& .MuiAutocomplete-option": {
    minHeight: d.optionMinHeight,
    py: d.optionPaddingY,
    px: d.optionPaddingX
  }
}, Et = [
  {
    name: "preventOverflow",
    options: { boundary: "viewport", padding: _ }
  },
  { name: "flip", enabled: !1 }
], Mt = (i) => {
  let s = 0;
  for (let u = i; u; u = u.parentElement) {
    const h = Number.parseInt(
      window.getComputedStyle(u).zIndex ?? "",
      10
    );
    Number.isFinite(h) && (s = Math.max(s, h));
  }
  return s;
}, _t = "ips-autocomplete-popup", kt = _t, Ft = { p: d.checkboxPadding }, Pt = xt((i, s) => {
  const {
    showCheckboxes: u = !0,
    className: h,
    multiple: L = !1,
    renderOption: k,
    renderInput: F,
    disabled: C = !1,
    loading: j = !1,
    label: D,
    slotProps: n,
    renderTags: P,
    getOptionLabel: g = Ot,
    // A multi-select that closes after every pick makes selecting several items
    // needlessly slow; single-select still closes as usual.
    disableCloseOnSelect: V = L,
    maxVisibleChips: w = Lt,
    maxListHeight: y = Ct,
    collapseChipsTooltip: X = "הצג פחות",
    moreItemsTooltipLabel: Y = (t) => `ועוד ${t}`,
    sx: Z,
    open: H,
    onOpen: O,
    onClose: A,
    ...q
  } = i, B = It(), W = B.direction === "rtl", [z, J] = R(!1), I = bt(null), K = G(
    (t) => {
      I.current = t, typeof s == "function" ? s(t) : s && (s.current = t);
    },
    [s]
  ), [Q, N] = R(!1), E = H ?? Q, [e, v] = R(null), l = G(() => {
    const t = I.current;
    if (!t || typeof window > "u") return;
    const o = t.querySelector(".MuiInputBase-root") ?? t, r = o.getBoundingClientRect(), a = window.innerHeight - r.bottom - _, c = r.top - _, m = a < U && c > a, f = Math.max(
      m ? c : a,
      U
    ), x = window.getComputedStyle(o).fontFamily;
    v(
      (p) => p && p.el === o && p.above === m && p.fontFamily === x && Math.abs(p.width - r.width) < 1 && Math.abs(p.available - f) < 1 ? p : { el: o, width: r.width, above: m, available: f, fontFamily: x }
    );
  }, []), [tt, et] = R(null);
  ht(() => {
    if (!(!E || typeof window > "u"))
      return l(), I.current && et(Mt(I.current) + 1), window.addEventListener("resize", l), window.addEventListener("scroll", l, !0), () => {
        window.removeEventListener("resize", l), window.removeEventListener("scroll", l, !0);
      };
  }, [E, l]);
  const ot = (t) => {
    l(), N(!0), O == null || O(t);
  }, nt = (t, o) => {
    N(!1), A == null || A(t, o);
  }, it = (t, o, { selected: r }) => {
    const { key: a, ...c } = t;
    if (typeof k == "function")
      return k(c, o, { selected: r });
    const m = L && u, f = g(o);
    return /* @__PURE__ */ $("li", { ...c, children: [
      m && /* @__PURE__ */ b(
        wt,
        {
          checked: r,
          disableRipple: !0,
          sx: [
            Ft,
            W ? { ml: d.checkboxGap } : { mr: d.checkboxGap }
          ]
        }
      ),
      f
    ] }, a);
  }, st = (t) => {
    t.stopPropagation(), t.preventDefault(), !C && J((o) => !o);
  }, rt = (t, o, r) => {
    if (typeof P == "function")
      return P(t, o, r);
    const a = w > 0 && t.length > w, c = a && !z ? t.slice(0, w) : t, m = a ? t.slice(w) : [];
    return /* @__PURE__ */ $(ft, { children: [
      c.map((f, x) => {
        const { key: p, ...ut } = o({ index: x });
        return /* @__PURE__ */ b(
          yt,
          {
            size: "small",
            label: g(f),
            ...ut
          },
          p
        );
      }),
      a && /* @__PURE__ */ b(
        Tt,
        {
          hiddenLabels: m.map(g),
          expanded: z,
          disabled: C,
          collapseTooltip: X,
          moreItemsLabel: Y,
          onToggle: st
        }
      )
    ] });
  }, at = (t) => F ? F(t) : /* @__PURE__ */ b(Rt, { ...t, label: D }), pt = ["ips-autocomplete", h].filter(Boolean).join(" "), lt = e == null ? y : typeof y == "number" ? Math.min(y, e.available) : `min(${y}, ${e.available}px)`, M = (e == null ? void 0 : e.above) === !0, ct = {
    // The notched outline inherits its radius from the input root, so squaring
    // the root squares the border the user actually sees.
    "& .MuiOutlinedInput-root": M ? { borderTopLeftRadius: "0px", borderTopRightRadius: "0px" } : { borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }
  }, mt = (t) => ({
    typography: "body2",
    border: `1px solid ${t.palette.grey[300]}`,
    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
    ...M ? {
      borderBottom: "none",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "0px"
    } : {
      borderTop: "none",
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px"
    }
  }), dt = {
    ...n,
    popper: S(n == null ? void 0 : n.popper, (t) => ({
      placement: M ? "top-start" : "bottom-start",
      modifiers: Et,
      ...e ? { anchorEl: e.el } : null,
      // Portalled to the body, the list is outside the DOM of whatever popup
      // holds the field, so a click on an option looks like an outside click
      // and closes that popup. This class is the hook such a handler needs to
      // recognise the list as part of the field: `target.closest(...)`.
      className: kt,
      ...t,
      // MUI sizes the popup from the Autocomplete root, which is wider than the
      // input whenever the field does not fill it. Inline, because that is what
      // MUI sets and an sx class cannot outrank it.
      style: { ...e ? { width: e.width } : null, ...t == null ? void 0 : t.style },
      sx: [
        { zIndex: Math.max(B.zIndex.tooltip, tt ?? 0) },
        ...T(t == null ? void 0 : t.sx)
      ]
    })),
    paper: S(n == null ? void 0 : n.paper, (t) => ({
      ...t,
      // The font follows the field in its own array entry: `typography: body2`
      // above carries the theme family with it, and a later entry is the one
      // way to be sure the field's family is what survives the merge.
      sx: [
        mt,
        ...e != null && e.fontFamily ? [{ fontFamily: e.fontFamily }] : [],
        ...T(t == null ? void 0 : t.sx)
      ]
    })),
    listbox: S(n == null ? void 0 : n.listbox, (t) => ({
      ...t,
      sx: [
        At,
        { maxHeight: lt },
        St,
        ...T(t == null ? void 0 : t.sx)
      ]
    })),
    // Tags default to the medium chip (13px); small (12px) matches the chips
    // IpsChipSelect renders. This only touches the chip, not the input height.
    chip: S(n == null ? void 0 : n.chip, (t) => ({
      size: "small",
      ...t
    }))
  };
  return /* @__PURE__ */ b(
    gt,
    {
      ref: K,
      multiple: L,
      disabled: C,
      loading: j,
      renderOption: it,
      renderInput: at,
      renderTags: rt,
      getOptionLabel: g,
      disableCloseOnSelect: V,
      open: H,
      onOpen: ot,
      onClose: nt,
      className: pt,
      slotProps: dt,
      sx: [
        ...E ? [ct] : [],
        ...T(Z)
      ],
      ...q
    }
  );
});
Pt.displayName = "IpsAutocomplete";
export {
  _t as IPS_AUTOCOMPLETE_POPUP_CLASS,
  Pt as IpsAutocomplete
};
