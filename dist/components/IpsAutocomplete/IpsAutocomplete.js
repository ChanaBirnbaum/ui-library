import { jsx as x, jsxs as j, Fragment as ft } from "react/jsx-runtime";
import { forwardRef as ht, useState as S, useRef as xt, useCallback as B, useEffect as bt } from "react";
import gt from "@mui/material/Autocomplete";
import wt from "@mui/material/Checkbox";
import yt from "@mui/material/Chip";
import { useTheme as It } from "@mui/material/styles";
import { IpsTextField as St } from "../IpsTextField/IpsTextField.js";
import { mergeSlotProps as C, toSxArray as L } from "../../utils/slotUtils.js";
import { listDensity as u } from "../../utils/listDensity.js";
import { thinScrollbarSx as Ct } from "../../utils/scrollbarSx.js";
import { popupSurfaceSx as Lt, joinedFieldSx as Tt } from "../../utils/popupSurface.js";
import { ChipOverflowToggle as Ot } from "../internal/ChipOverflowToggle.js";
const At = 3, Et = 320, F = 16, G = 160, Mt = (i) => typeof i == "string" ? i : (i == null ? void 0 : i.label) || String(i), Rt = {
  py: u.listPaddingY,
  "& .MuiAutocomplete-option": {
    minHeight: u.optionMinHeight,
    py: u.optionPaddingY,
    px: u.optionPaddingX
  }
}, Ft = [
  {
    name: "preventOverflow",
    options: { boundary: "viewport", padding: F }
  },
  { name: "flip", enabled: !1 }
], _t = (i) => {
  let s = 0;
  for (let d = i; d; d = d.parentElement) {
    const b = Number.parseInt(
      window.getComputedStyle(d).zIndex ?? "",
      10
    );
    Number.isFinite(b) && (s = Math.max(s, b));
  }
  return s;
}, kt = "ips-autocomplete-popup", Pt = kt, Ht = { p: u.checkboxPadding }, zt = { fontFamily: "inherit" }, Nt = ht((i, s) => {
  const {
    showCheckboxes: d = !0,
    className: b,
    multiple: T = !1,
    renderOption: _,
    renderInput: k,
    disabled: O = !1,
    loading: U = !1,
    label: D,
    slotProps: n,
    renderTags: P,
    getOptionLabel: g = Mt,
    // A multi-select that closes after every pick makes selecting several items
    // needlessly slow; single-select still closes as usual.
    disableCloseOnSelect: V = T,
    maxVisibleChips: w = At,
    maxListHeight: y = Et,
    collapseChipsTooltip: X = "הצג פחות",
    moreItemsTooltipLabel: Y = (t) => `ועוד ${t}`,
    sx: Z,
    open: H,
    onOpen: A,
    onClose: E,
    ...q
  } = i, z = It(), W = z.direction === "rtl", [N, J] = S(!1), I = xt(null), K = B(
    (t) => {
      I.current = t, typeof s == "function" ? s(t) : s && (s.current = t);
    },
    [s]
  ), [Q, $] = S(!1), M = H ?? Q, [o, v] = S(null), p = B(() => {
    const t = I.current;
    if (!t || typeof window > "u") return;
    const e = t.querySelector(".MuiInputBase-root") ?? t, a = e.getBoundingClientRect(), r = window.innerHeight - a.bottom - F, c = a.top - F, m = r < G && c > r, f = Math.max(
      m ? c : r,
      G
    ), h = window.getComputedStyle(e).fontFamily;
    v(
      (l) => l && l.el === e && l.above === m && l.fontFamily === h && Math.abs(l.width - a.width) < 1 && Math.abs(l.available - f) < 1 ? l : { el: e, width: a.width, above: m, available: f, fontFamily: h }
    );
  }, []), [tt, et] = S(null);
  bt(() => {
    if (!(!M || typeof window > "u"))
      return p(), I.current && et(_t(I.current) + 1), window.addEventListener("resize", p), window.addEventListener("scroll", p, !0), () => {
        window.removeEventListener("resize", p), window.removeEventListener("scroll", p, !0);
      };
  }, [M, p]);
  const nt = (t) => {
    p(), $(!0), A == null || A(t);
  }, ot = (t, e) => {
    $(!1), E == null || E(t, e);
  }, it = (t, e, { selected: a }) => {
    const { key: r, ...c } = t;
    if (typeof _ == "function")
      return _(c, e, { selected: a });
    const m = T && d, f = g(e);
    return /* @__PURE__ */ j("li", { ...c, children: [
      m && /* @__PURE__ */ x(
        wt,
        {
          checked: a,
          disableRipple: !0,
          sx: [
            Ht,
            W ? { ml: u.checkboxGap } : { mr: u.checkboxGap }
          ]
        }
      ),
      f
    ] }, r);
  }, st = (t) => {
    t.stopPropagation(), t.preventDefault(), !O && J((e) => !e);
  }, at = (t, e, a) => {
    if (typeof P == "function")
      return P(t, e, a);
    const r = w > 0 && t.length > w, c = r && !N ? t.slice(0, w) : t, m = r ? t.slice(w) : [];
    return /* @__PURE__ */ j(ft, { children: [
      c.map((f, h) => {
        const { key: l, ...dt } = e({ index: h });
        return /* @__PURE__ */ x(
          yt,
          {
            size: "small",
            label: g(f),
            sx: zt,
            ...dt
          },
          l
        );
      }),
      r && /* @__PURE__ */ x(
        Ot,
        {
          hiddenLabels: m.map(g),
          expanded: N,
          disabled: O,
          collapseTooltip: X,
          moreItemsLabel: Y,
          onToggle: st
        }
      )
    ] });
  }, rt = (t) => k ? k(t) : /* @__PURE__ */ x(St, { ...t, label: D }), lt = ["ips-autocomplete", b].filter(Boolean).join(" "), pt = o == null ? y : typeof y == "number" ? Math.min(y, o.available) : `min(${y}, ${o.available}px)`, R = (o == null ? void 0 : o.above) === !0, ct = Tt(R), mt = Lt({
    joinsAtTop: R,
    fontFamily: o == null ? void 0 : o.fontFamily
  }), ut = {
    ...n,
    popper: C(n == null ? void 0 : n.popper, (t) => ({
      placement: R ? "top-start" : "bottom-start",
      modifiers: Ft,
      ...o ? { anchorEl: o.el } : null,
      // Portalled to the body, the list is outside the DOM of whatever popup
      // holds the field, so a click on an option looks like an outside click
      // and closes that popup. This class is the hook such a handler needs to
      // recognise the list as part of the field: `target.closest(...)`.
      className: Pt,
      ...t,
      // MUI sizes the popup from the Autocomplete root, which is wider than the
      // input whenever the field does not fill it. Inline, because that is what
      // MUI sets and an sx class cannot outrank it.
      style: { ...o ? { width: o.width } : null, ...t == null ? void 0 : t.style },
      sx: [
        { zIndex: Math.max(z.zIndex.tooltip, tt ?? 0) },
        ...L(t == null ? void 0 : t.sx)
      ]
    })),
    paper: C(n == null ? void 0 : n.paper, (t) => ({
      ...t,
      // MUI puts body1 (16px) on the autocomplete paper, while every other Ips
      // list - IpsChipSelect's options included - reads at body2 (14px). The
      // surface comes after it: `typography` carries the theme font family with
      // it, and the field's own family has to be the one that survives.
      sx: [{ typography: "body2" }, mt, ...L(t == null ? void 0 : t.sx)]
    })),
    listbox: C(n == null ? void 0 : n.listbox, (t) => ({
      ...t,
      sx: [
        Rt,
        { maxHeight: pt },
        Ct,
        ...L(t == null ? void 0 : t.sx)
      ]
    })),
    // Tags default to the medium chip (13px); small (12px) matches the chips
    // IpsChipSelect renders. This only touches the chip, not the input height.
    chip: C(n == null ? void 0 : n.chip, (t) => ({
      size: "small",
      ...t
    }))
  };
  return /* @__PURE__ */ x(
    gt,
    {
      ref: K,
      multiple: T,
      disabled: O,
      loading: U,
      renderOption: it,
      renderInput: rt,
      renderTags: at,
      getOptionLabel: g,
      disableCloseOnSelect: V,
      open: H,
      onOpen: nt,
      onClose: ot,
      className: lt,
      slotProps: ut,
      sx: [
        ...M ? [ct] : [],
        ...L(Z)
      ],
      ...q
    }
  );
});
Nt.displayName = "IpsAutocomplete";
export {
  kt as IPS_AUTOCOMPLETE_POPUP_CLASS,
  Nt as IpsAutocomplete
};
