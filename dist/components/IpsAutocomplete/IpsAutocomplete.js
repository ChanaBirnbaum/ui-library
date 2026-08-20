import { jsx as x, jsxs as j, Fragment as ht } from "react/jsx-runtime";
import { forwardRef as xt, useState as S, useRef as bt, useCallback as B, useEffect as gt } from "react";
import wt from "@mui/material/Autocomplete";
import yt from "@mui/material/Checkbox";
import It from "@mui/material/Chip";
import { useTheme as St } from "@mui/material/styles";
import { IpsTextField as Ct } from "../IpsTextField/IpsTextField.js";
import { mergeSlotProps as C, toSxArray as L } from "../../utils/slotUtils.js";
import { listDensity as u } from "../../utils/listDensity.js";
import { thinScrollbarSx as Lt } from "../../utils/scrollbarSx.js";
import { popupSurfaceSx as Tt, joinedFieldSx as Ot } from "../../utils/popupSurface.js";
import { ChipOverflowToggle as At } from "../internal/ChipOverflowToggle.js";
const Et = 3, Mt = 320, F = 16, G = 160, Rt = (i) => typeof i == "string" ? i : (i == null ? void 0 : i.label) || String(i), Ft = {
  py: u.listPaddingY,
  "& .MuiAutocomplete-option": {
    minHeight: u.optionMinHeight,
    py: u.optionPaddingY,
    px: u.optionPaddingX
  }
}, _t = [
  {
    name: "preventOverflow",
    options: { boundary: "viewport", padding: F }
  },
  { name: "flip", enabled: !1 }
], kt = (i) => {
  let s = 0;
  for (let d = i; d; d = d.parentElement) {
    const b = Number.parseInt(
      window.getComputedStyle(d).zIndex ?? "",
      10
    );
    Number.isFinite(b) && (s = Math.max(s, b));
  }
  return s;
}, Pt = "ips-autocomplete-popup", Ht = Pt, zt = { p: u.checkboxPadding }, Nt = { fontFamily: "inherit" }, $t = xt((i, s) => {
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
    getOptionLabel: g = Rt,
    // A multi-select that closes after every pick makes selecting several items
    // needlessly slow; single-select still closes as usual.
    disableCloseOnSelect: V = T,
    maxVisibleChips: w = Et,
    maxListHeight: y = Mt,
    collapseChipsTooltip: X = "הצג פחות",
    moreItemsTooltipLabel: W = (t) => `ועוד ${t}`,
    sx: Y,
    open: H,
    onOpen: A,
    onClose: E,
    // MUI hands renderInput `props.fullWidth ?? true`, reading the raw prop
    // rather than its own default - so leaving this undefined would stretch
    // every field to 100% and put IpsAutocomplete out of step with the 288px
    // IpsTextField next to it. Defaulted here so the value passed down is
    // always explicit, and `fullWidth` stays the caller's decision either way.
    fullWidth: Z = !1,
    ...q
  } = i, z = St(), J = z.direction === "rtl", [N, K] = S(!1), I = bt(null), Q = B(
    (t) => {
      I.current = t, typeof s == "function" ? s(t) : s && (s.current = t);
    },
    [s]
  ), [v, $] = S(!1), M = H ?? v, [o, tt] = S(null), p = B(() => {
    const t = I.current;
    if (!t || typeof window > "u") return;
    const e = t.querySelector(".MuiInputBase-root") ?? t, a = e.getBoundingClientRect(), r = window.innerHeight - a.bottom - F, c = a.top - F, m = r < G && c > r, f = Math.max(
      m ? c : r,
      G
    ), h = window.getComputedStyle(e).fontFamily;
    tt(
      (l) => l && l.el === e && l.above === m && l.fontFamily === h && Math.abs(l.width - a.width) < 1 && Math.abs(l.available - f) < 1 ? l : { el: e, width: a.width, above: m, available: f, fontFamily: h }
    );
  }, []), [et, nt] = S(null);
  gt(() => {
    if (!(!M || typeof window > "u"))
      return p(), I.current && nt(kt(I.current) + 1), window.addEventListener("resize", p), window.addEventListener("scroll", p, !0), () => {
        window.removeEventListener("resize", p), window.removeEventListener("scroll", p, !0);
      };
  }, [M, p]);
  const ot = (t) => {
    p(), $(!0), A == null || A(t);
  }, it = (t, e) => {
    $(!1), E == null || E(t, e);
  }, st = (t, e, { selected: a }) => {
    const { key: r, ...c } = t;
    if (typeof _ == "function")
      return _(c, e, { selected: a });
    const m = T && d, f = g(e);
    return /* @__PURE__ */ j("li", { ...c, children: [
      m && /* @__PURE__ */ x(
        yt,
        {
          checked: a,
          disableRipple: !0,
          sx: [
            zt,
            J ? { ml: u.checkboxGap } : { mr: u.checkboxGap }
          ]
        }
      ),
      f
    ] }, r);
  }, at = (t) => {
    t.stopPropagation(), t.preventDefault(), !O && K((e) => !e);
  }, rt = (t, e, a) => {
    if (typeof P == "function")
      return P(t, e, a);
    const r = w > 0 && t.length > w, c = r && !N ? t.slice(0, w) : t, m = r ? t.slice(w) : [];
    return /* @__PURE__ */ j(ht, { children: [
      c.map((f, h) => {
        const { key: l, ...ft } = e({ index: h });
        return /* @__PURE__ */ x(
          It,
          {
            size: "small",
            label: g(f),
            sx: Nt,
            ...ft
          },
          l
        );
      }),
      r && /* @__PURE__ */ x(
        At,
        {
          hiddenLabels: m.map(g),
          expanded: N,
          disabled: O,
          collapseTooltip: X,
          moreItemsLabel: W,
          onToggle: at
        }
      )
    ] });
  }, lt = (t) => k ? k(t) : /* @__PURE__ */ x(Ct, { ...t, label: D }), pt = ["ips-autocomplete", b].filter(Boolean).join(" "), ct = o == null ? y : typeof y == "number" ? Math.min(y, o.available) : `min(${y}, ${o.available}px)`, R = (o == null ? void 0 : o.above) === !0, mt = Ot(R), ut = Tt({
    joinsAtTop: R,
    fontFamily: o == null ? void 0 : o.fontFamily
  }), dt = {
    ...n,
    popper: C(n == null ? void 0 : n.popper, (t) => ({
      placement: R ? "top-start" : "bottom-start",
      modifiers: _t,
      ...o ? { anchorEl: o.el } : null,
      // Portalled to the body, the list is outside the DOM of whatever popup
      // holds the field, so a click on an option looks like an outside click
      // and closes that popup. This class is the hook such a handler needs to
      // recognise the list as part of the field: `target.closest(...)`.
      className: Ht,
      ...t,
      // MUI sizes the popup from the Autocomplete root, which is wider than the
      // input whenever the field does not fill it. Inline, because that is what
      // MUI sets and an sx class cannot outrank it.
      style: { ...o ? { width: o.width } : null, ...t == null ? void 0 : t.style },
      sx: [
        { zIndex: Math.max(z.zIndex.tooltip, et ?? 0) },
        ...L(t == null ? void 0 : t.sx)
      ]
    })),
    paper: C(n == null ? void 0 : n.paper, (t) => ({
      ...t,
      // MUI puts body1 (16px) on the autocomplete paper, while every other Ips
      // list - IpsChipSelect's options included - reads at body2 (14px). The
      // surface comes after it: `typography` carries the theme font family with
      // it, and the field's own family has to be the one that survives.
      sx: [{ typography: "body2" }, ut, ...L(t == null ? void 0 : t.sx)]
    })),
    listbox: C(n == null ? void 0 : n.listbox, (t) => ({
      ...t,
      sx: [
        Ft,
        { maxHeight: ct },
        Lt,
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
    wt,
    {
      ref: Q,
      multiple: T,
      fullWidth: Z,
      disabled: O,
      loading: U,
      renderOption: st,
      renderInput: lt,
      renderTags: rt,
      getOptionLabel: g,
      disableCloseOnSelect: V,
      open: H,
      onOpen: ot,
      onClose: it,
      className: pt,
      slotProps: dt,
      sx: [
        ...M ? [mt] : [],
        ...L(Y)
      ],
      ...q
    }
  );
});
$t.displayName = "IpsAutocomplete";
export {
  Pt as IPS_AUTOCOMPLETE_POPUP_CLASS,
  $t as IpsAutocomplete
};
