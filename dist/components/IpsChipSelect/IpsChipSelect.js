import { jsxs as d, jsx as s } from "react/jsx-runtime";
import { forwardRef as ve, useId as Me, useRef as Le, useState as E, useCallback as Ce, useEffect as Ee, useMemo as Ae } from "react";
import _e from "@mui/material/FormControl";
import Te from "@mui/material/FormLabel";
import He from "@mui/material/Select";
import z from "@mui/material/MenuItem";
import B from "@mui/material/Chip";
import N from "@mui/material/Box";
import j from "@mui/material/Checkbox";
import U from "@mui/material/ListItemText";
import Fe from "@mui/material/Divider";
import { mergeSlotProps as G, toSxArray as $ } from "../../utils/slotUtils.js";
import { listDensity as c } from "../../utils/listDensity.js";
import { thinScrollbarSx as Oe } from "../../utils/scrollbarSx.js";
import { popupSurfaceSx as Ve, joinedFieldSx as De } from "../../utils/popupSurface.js";
import { ChipOverflowToggle as Pe } from "../internal/ChipOverflowToggle.js";
const A = "__ips-chip-select-all__", ke = 320, W = 16, X = 160, Y = {
  minHeight: c.optionMinHeight,
  py: c.optionPaddingY,
  px: c.optionPaddingX
}, q = {
  p: c.checkboxPadding,
  mr: c.checkboxGap
}, Re = 3, J = {
  display: "flex",
  flexWrap: "wrap",
  gap: 0.5
}, ze = ve(
  (K, Q) => {
    var k, R;
    const {
      options: m = [],
      value: _ = [],
      onChange: i,
      label: g,
      placeholder: Z,
      disabled: r = !1,
      className: ee,
      id: te,
      required: T,
      enableSelectAll: u = !1,
      selectAllLabel: oe = "בחר הכל",
      allSelectedChipLabel: ie = "הכל נבחר",
      maxMenuHeight: h = ke,
      maxVisibleChips: f = Re,
      collapseChipsTooltip: le = "הצג פחות",
      moreItemsTooltipLabel: se = (e) => `ועוד ${e}`,
      MenuProps: n,
      onOpen: y,
      onClose: w,
      ...ne
    } = K, re = Me(), S = te ?? re, H = `${S}-label`, ae = ["ips-chip-select", ee].filter(Boolean).join(" "), I = _, v = m.map((e) => e.value), M = u && v.length > 0 && v.every((e) => I.includes(e)), F = Le(null), [L, O] = E(!1), [t, ce] = E(null), x = Ce(() => {
      const e = F.current;
      if (!e || typeof window > "u") return;
      const o = e.querySelector(".MuiInputBase-root") ?? e, l = o.getBoundingClientRect(), p = window.innerHeight - l.bottom - W, b = l.top - W, a = p < X && b > p;
      ce({
        above: a,
        available: Math.max(a ? b : p, X),
        // Select only gives the paper a minWidth, so a long option would make
        // the menu wider than the field and break the edge they share.
        width: l.width,
        // The menu is portalled out of the app shell and MUI stamps the theme
        // font onto it, so the field's own family has to be carried over.
        fontFamily: window.getComputedStyle(o).fontFamily
      });
    }, []);
    Ee(() => {
      if (!(!L || typeof window > "u"))
        return window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
    }, [L, x]);
    const pe = (e) => {
      x(), O(!0), y == null || y(e);
    }, de = (e) => {
      O(!1), w == null || w(e);
    }, me = t == null ? h : typeof h == "number" ? Math.min(h, t.available) : `min(${h}, ${t.available}px)`, V = (t == null ? void 0 : t.above) === !0, ue = Ve({
      joinsAtTop: V,
      fontFamily: t == null ? void 0 : t.fontFamily,
      width: t == null ? void 0 : t.width
    }), he = {
      anchorOrigin: {
        vertical: t != null && t.above ? "top" : "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: t != null && t.above ? "bottom" : "top",
        horizontal: "center"
      },
      ...n,
      slotProps: {
        ...n == null ? void 0 : n.slotProps,
        paper: G((k = n == null ? void 0 : n.slotProps) == null ? void 0 : k.paper, (e) => ({
          ...e,
          // The paper is what scrolls here (the cap sits on it, not on the
          // list), so the thin scrollbar belongs on it too.
          sx: [
            { maxHeight: me },
            ue,
            Oe,
            ...$(e == null ? void 0 : e.sx)
          ]
        })),
        list: G((R = n == null ? void 0 : n.slotProps) == null ? void 0 : R.list, (e) => ({
          dense: !0,
          ...e,
          sx: [
            { py: c.listPaddingY },
            ...$(e == null ? void 0 : e.sx)
          ]
        }))
      }
    }, [C, fe] = E(!1), xe = Ae(
      () => new Map(m.map((e) => [e.value, e.label])),
      [m]
    ), D = (e) => xe.get(e) ?? String(e), P = {
      height: 24,
      // MUI stamps theme.typography.fontFamily onto every Chip, so a selected
      // value would keep the theme font even where the field carries another.
      fontFamily: "inherit",
      "& .MuiChip-deleteIcon": {
        opacity: r ? 0.5 : 1,
        cursor: r ? "not-allowed" : "pointer"
      }
    }, be = (e) => {
      e.stopPropagation(), e.preventDefault(), !r && fe((o) => !o);
    }, ge = (e) => {
      if (r) return;
      const o = I.filter((l) => l !== e);
      i == null || i(o);
    }, ye = () => {
      r || i == null || i([]);
    }, we = (e) => {
      const o = e.target.value;
      if (u && o.includes(A)) {
        i == null || i(M ? [] : v);
        return;
      }
      i == null || i(o.filter((l) => l !== A));
    }, Se = (e) => {
      const o = e;
      if (!o || o.length === 0)
        return /* @__PURE__ */ s("span", { style: { color: "#999" }, children: Z || "Select items..." });
      if (M)
        return /* @__PURE__ */ s(N, { sx: J, children: /* @__PURE__ */ s(
          B,
          {
            label: ie,
            size: "small",
            onDelete: ye,
            onMouseDown: (a) => a.stopPropagation(),
            disabled: r,
            sx: P
          }
        ) });
      const l = f > 0 && o.length > f, p = l && !C ? o.slice(0, f) : o, b = l ? o.slice(f) : [];
      return /* @__PURE__ */ d(
        N,
        {
          sx: [
            J,
            // Expanding a large selection must not blow up the field the way an
            // uncapped drop-down blows up the page.
            l && C && { maxHeight: 96, overflowY: "auto" }
          ],
          children: [
            p.map((a) => /* @__PURE__ */ s(
              B,
              {
                label: D(a),
                size: "small",
                onDelete: () => ge(a),
                onMouseDown: (Ie) => Ie.stopPropagation(),
                disabled: r,
                sx: P
              },
              a
            )),
            l && /* @__PURE__ */ s(
              Pe,
              {
                hiddenLabels: b.map(D),
                expanded: C,
                disabled: r,
                collapseTooltip: le,
                moreItemsLabel: se,
                onToggle: be
              }
            )
          ]
        }
      );
    };
    return /* @__PURE__ */ d(
      _e,
      {
        fullWidth: !0,
        disabled: r,
        className: ae,
        ref: F,
        sx: L ? De(V) : void 0,
        children: [
          g != null && /* @__PURE__ */ s(
            Te,
            {
              id: H,
              htmlFor: S,
              required: T,
              sx: { display: "block", mb: "3px", fontSize: "12px", lineHeight: 1 },
              children: g
            }
          ),
          /* @__PURE__ */ d(
            He,
            {
              ref: Q,
              id: S,
              labelId: g != null ? H : void 0,
              multiple: !0,
              value: _,
              onChange: we,
              renderValue: Se,
              displayEmpty: !0,
              required: T,
              MenuProps: he,
              onOpen: pe,
              onClose: de,
              ...ne,
              children: [
                u && /* @__PURE__ */ d(z, { value: A, sx: Y, children: [
                  /* @__PURE__ */ s(
                    j,
                    {
                      checked: M,
                      disableRipple: !0,
                      tabIndex: -1,
                      sx: q
                    }
                  ),
                  /* @__PURE__ */ s(
                    U,
                    {
                      primary: oe,
                      sx: { my: 0 },
                      slotProps: { primary: { variant: "body2" } }
                    }
                  )
                ] }),
                u && /* @__PURE__ */ s(Fe, { sx: { my: 0.5 } }),
                m.map((e) => /* @__PURE__ */ d(z, { value: e.value, sx: Y, children: [
                  /* @__PURE__ */ s(
                    j,
                    {
                      checked: I.includes(e.value),
                      disableRipple: !0,
                      tabIndex: -1,
                      sx: q
                    }
                  ),
                  /* @__PURE__ */ s(
                    U,
                    {
                      primary: e.label,
                      sx: { my: 0 },
                      slotProps: { primary: { variant: "body2" } }
                    }
                  )
                ] }, e.value))
              ]
            }
          )
        ]
      }
    );
  }
);
ze.displayName = "IpsChipSelect";
export {
  ze as IpsChipSelect
};
