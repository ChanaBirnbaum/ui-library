import { jsxs as p, Fragment as O, jsx as r } from "react/jsx-runtime";
import { forwardRef as R, useId as S, useState as T, useRef as $ } from "react";
import k from "@mui/material/Divider";
import L from "@mui/material/ListItemIcon";
import V from "@mui/material/ListItemText";
import w from "@mui/material/Menu";
import y from "@mui/material/MenuItem";
import { useTheme as A } from "@mui/material/styles";
import { IpsIconButton as D } from "../IpsIconButton/IpsIconButton.js";
const X = R(function(t, o) {
  const { icon: f, label: h, items: g, onSelect: I, size: v = "medium", disabled: b = !1, id: x, className: C, sx: M } = t, E = A(), N = S(), i = x ?? `ips-menu-${N}`, a = `${i}-trigger`, [c, u] = T(null), s = c !== null, l = $(null), d = E.direction === "rtl" ? "left" : "right", m = () => u(null), j = (n) => {
    l.current = { value: n }, m();
  }, z = () => {
    const n = l.current;
    l.current = null, n && I(n.value);
  }, B = ["ips-menu-trigger", C].filter(Boolean).join(" ");
  return /* @__PURE__ */ p(O, { children: [
    /* @__PURE__ */ r(
      D,
      {
        ref: o,
        id: a,
        icon: f,
        size: v,
        disabled: b,
        className: B,
        sx: M,
        "aria-label": h,
        "aria-haspopup": "menu",
        "aria-expanded": s ? "true" : void 0,
        "aria-controls": s ? i : void 0,
        onClick: (n) => u(n.currentTarget)
      }
    ),
    /* @__PURE__ */ r(
      w,
      {
        className: "ips-menu",
        anchorEl: c,
        open: s,
        onClose: m,
        anchorOrigin: { vertical: "bottom", horizontal: d },
        transformOrigin: { vertical: "top", horizontal: d },
        slotProps: {
          // The id is on the list (role="menu"), the element the trigger's aria-controls refers to
          list: { id: i, "aria-labelledby": a },
          transition: { onExited: z }
        },
        children: g.flatMap((n) => F(n, j))
      }
    )
  ] });
});
function F(e, t) {
  const o = /* @__PURE__ */ p(y, { disabled: e.disabled, onClick: () => t(e.value), children: [
    e.icon && /* @__PURE__ */ r(L, { children: e.icon }),
    /* @__PURE__ */ r(V, { children: e.label })
  ] }, e.value);
  return e.dividerBefore ? [/* @__PURE__ */ r(k, {}, `${e.value}-divider`), o] : [o];
}
export {
  X as IpsMenu
};
