import { jsxs as d, jsx as i } from "react/jsx-runtime";
import { forwardRef as we, useId as Me, useRef as Se, useState as E, useCallback as ve, useEffect as Le, useMemo as Ee } from "react";
import Ce from "@mui/material/FormControl";
import _e from "@mui/material/FormLabel";
import Ae from "@mui/material/Select";
import z from "@mui/material/MenuItem";
import B from "@mui/material/Chip";
import N from "@mui/material/Box";
import F from "@mui/material/Checkbox";
import U from "@mui/material/ListItemText";
import He from "@mui/material/Divider";
import { mergeSlotProps as G, toSxArray as $ } from "../../utils/slotUtils.js";
import { listDensity as c } from "../../utils/listDensity.js";
import { ChipOverflowToggle as Te } from "../internal/ChipOverflowToggle.js";
const C = "__ips-chip-select-all__", Oe = 320, j = 16, W = 160, X = {
  minHeight: c.optionMinHeight,
  py: c.optionPaddingY,
  px: c.optionPaddingX
}, Y = {
  p: c.checkboxPadding,
  mr: c.checkboxGap
}, Ve = 3, q = {
  display: "flex",
  flexWrap: "wrap",
  gap: 0.5
}, De = we(
  (J, K) => {
    var k, R;
    const {
      options: m = [],
      value: _ = [],
      onChange: o,
      label: g,
      placeholder: Q,
      disabled: n = !1,
      className: Z,
      id: ee,
      required: A,
      enableSelectAll: u = !1,
      selectAllLabel: te = "בחר הכל",
      allSelectedChipLabel: oe = "הכל נבחר",
      maxMenuHeight: h = Oe,
      maxVisibleChips: f = Ve,
      collapseChipsTooltip: le = "הצג פחות",
      moreItemsTooltipLabel: ie = (e) => `ועוד ${e}`,
      MenuProps: s,
      onOpen: y,
      onClose: I,
      ...se
    } = J, ne = Me(), w = ee ?? ne, H = `${w}-label`, ae = ["ips-chip-select", Z].filter(Boolean).join(" "), M = _, S = m.map((e) => e.value), v = u && S.length > 0 && S.every((e) => M.includes(e)), T = Se(null), [O, V] = E(!1), [a, re] = E(null), x = ve(() => {
      const e = T.current;
      if (!e || typeof window > "u") return;
      const l = (e.querySelector(".MuiInputBase-root") ?? e).getBoundingClientRect(), p = window.innerHeight - l.bottom - j, b = l.top - j, r = p < W && b > p;
      re({
        above: r,
        available: Math.max(r ? b : p, W)
      });
    }, []);
    Le(() => {
      if (!(!O || typeof window > "u"))
        return window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
    }, [O, x]);
    const ce = (e) => {
      x(), V(!0), y == null || y(e);
    }, pe = (e) => {
      V(!1), I == null || I(e);
    }, de = a == null ? h : typeof h == "number" ? Math.min(h, a.available) : `min(${h}, ${a.available}px)`, me = {
      anchorOrigin: {
        vertical: a != null && a.above ? "top" : "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: a != null && a.above ? "bottom" : "top",
        horizontal: "center"
      },
      ...s,
      slotProps: {
        ...s == null ? void 0 : s.slotProps,
        paper: G((k = s == null ? void 0 : s.slotProps) == null ? void 0 : k.paper, (e) => ({
          ...e,
          sx: [{ maxHeight: de }, ...$(e == null ? void 0 : e.sx)]
        })),
        list: G((R = s == null ? void 0 : s.slotProps) == null ? void 0 : R.list, (e) => ({
          dense: !0,
          ...e,
          sx: [
            { py: c.listPaddingY },
            ...$(e == null ? void 0 : e.sx)
          ]
        }))
      }
    }, [L, ue] = E(!1), he = Ee(
      () => new Map(m.map((e) => [e.value, e.label])),
      [m]
    ), D = (e) => he.get(e) ?? String(e), P = {
      height: 24,
      "& .MuiChip-deleteIcon": {
        opacity: n ? 0.5 : 1,
        cursor: n ? "not-allowed" : "pointer"
      }
    }, fe = (e) => {
      e.stopPropagation(), e.preventDefault(), !n && ue((t) => !t);
    }, xe = (e) => {
      if (n) return;
      const t = M.filter((l) => l !== e);
      o == null || o(t);
    }, be = () => {
      n || o == null || o([]);
    }, ge = (e) => {
      const t = e.target.value;
      if (u && t.includes(C)) {
        o == null || o(v ? [] : S);
        return;
      }
      o == null || o(t.filter((l) => l !== C));
    }, ye = (e) => {
      const t = e;
      if (!t || t.length === 0)
        return /* @__PURE__ */ i("span", { style: { color: "#999" }, children: Q || "Select items..." });
      if (v)
        return /* @__PURE__ */ i(N, { sx: q, children: /* @__PURE__ */ i(
          B,
          {
            label: oe,
            size: "small",
            onDelete: be,
            onMouseDown: (r) => r.stopPropagation(),
            disabled: n,
            sx: P
          }
        ) });
      const l = f > 0 && t.length > f, p = l && !L ? t.slice(0, f) : t, b = l ? t.slice(f) : [];
      return /* @__PURE__ */ d(
        N,
        {
          sx: [
            q,
            // Expanding a large selection must not blow up the field the way an
            // uncapped drop-down blows up the page.
            l && L && { maxHeight: 96, overflowY: "auto" }
          ],
          children: [
            p.map((r) => /* @__PURE__ */ i(
              B,
              {
                label: D(r),
                size: "small",
                onDelete: () => xe(r),
                onMouseDown: (Ie) => Ie.stopPropagation(),
                disabled: n,
                sx: P
              },
              r
            )),
            l && /* @__PURE__ */ i(
              Te,
              {
                hiddenLabels: b.map(D),
                expanded: L,
                disabled: n,
                collapseTooltip: le,
                moreItemsLabel: ie,
                onToggle: fe
              }
            )
          ]
        }
      );
    };
    return /* @__PURE__ */ d(
      Ce,
      {
        fullWidth: !0,
        disabled: n,
        className: ae,
        ref: T,
        children: [
          g != null && /* @__PURE__ */ i(
            _e,
            {
              id: H,
              htmlFor: w,
              required: A,
              sx: { display: "block", mb: "3px", fontSize: "12px", lineHeight: 1 },
              children: g
            }
          ),
          /* @__PURE__ */ d(
            Ae,
            {
              ref: K,
              id: w,
              labelId: g != null ? H : void 0,
              multiple: !0,
              value: _,
              onChange: ge,
              renderValue: ye,
              displayEmpty: !0,
              required: A,
              MenuProps: me,
              onOpen: ce,
              onClose: pe,
              ...se,
              children: [
                u && /* @__PURE__ */ d(z, { value: C, sx: X, children: [
                  /* @__PURE__ */ i(
                    F,
                    {
                      checked: v,
                      disableRipple: !0,
                      tabIndex: -1,
                      sx: Y
                    }
                  ),
                  /* @__PURE__ */ i(
                    U,
                    {
                      primary: te,
                      sx: { my: 0 },
                      slotProps: { primary: { variant: "body2" } }
                    }
                  )
                ] }),
                u && /* @__PURE__ */ i(He, { sx: { my: 0.5 } }),
                m.map((e) => /* @__PURE__ */ d(z, { value: e.value, sx: X, children: [
                  /* @__PURE__ */ i(
                    F,
                    {
                      checked: M.includes(e.value),
                      disableRipple: !0,
                      tabIndex: -1,
                      sx: Y
                    }
                  ),
                  /* @__PURE__ */ i(
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
De.displayName = "IpsChipSelect";
export {
  De as IpsChipSelect
};
