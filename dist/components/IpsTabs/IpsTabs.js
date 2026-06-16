import { jsxs as u, Fragment as f, jsx as i } from "react/jsx-runtime";
import { forwardRef as k } from "react";
import P from "@mui/material/Tabs";
import B from "@mui/material/Tab";
import m from "@mui/material/Box";
function z({ tab: o }) {
  return o.badge === void 0 ? /* @__PURE__ */ i(f, { children: o.label }) : /* @__PURE__ */ u(m, { component: "span", sx: { display: "inline-flex", alignItems: "center", gap: 0.75 }, children: [
    /* @__PURE__ */ i("span", { children: o.label }),
    /* @__PURE__ */ i(
      m,
      {
        component: "span",
        sx: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 18,
          height: 18,
          px: 0.5,
          borderRadius: "9px",
          bgcolor: o.error ? "error.main" : "primary.main",
          color: "common.white",
          fontSize: "0.65rem",
          fontWeight: 700,
          lineHeight: 1
        },
        children: o.badge
      }
    )
  ] });
}
const L = k(function(v, h) {
  const {
    tabs: l,
    value: s,
    onTabChange: c,
    orientation: x = "horizontal",
    variant: g = "standard",
    scrollButtons: b = "auto",
    centered: y = !1,
    renderPanels: C = !1,
    keepMounted: t = !1,
    idPrefix: r = "ips-tabs",
    renderTabLabel: d,
    className: T,
    sx: $,
    ...N
  } = v, I = ["ips-tabs", T].filter(Boolean).join(" ");
  return /* @__PURE__ */ u(f, { children: [
    /* @__PURE__ */ i(
      P,
      {
        ref: h,
        value: s,
        onChange: (e, n) => {
          if (c) {
            const a = l.find((p) => p.value === n);
            a && c(n, a);
          }
        },
        orientation: x,
        variant: g,
        scrollButtons: b,
        centered: y,
        className: I,
        sx: {
          "& .MuiTabs-indicator": { backgroundColor: "primary.main" },
          ...$ ?? {}
        },
        ...N,
        children: l.map((e, n) => {
          const a = e.value === s, M = d ? d({ index: n, tab: e, selected: a }) : /* @__PURE__ */ i(z, { tab: e }), j = d ? void 0 : e.icon;
          return /* @__PURE__ */ i(
            B,
            {
              value: e.value,
              label: M,
              icon: j,
              iconPosition: e.iconPosition ?? "top",
              disabled: e.disabled,
              id: `${r}-tab-${e.value}`,
              "aria-controls": `${r}-panel-${e.value}`,
              "aria-invalid": e.error ? !0 : void 0,
              className: "ips-tab",
              sx: e.error ? {
                color: "error.main",
                "&.Mui-selected": { color: "error.main" }
              } : void 0
            },
            e.key ?? e.value
          );
        })
      }
    ),
    C && l.map((e) => {
      const n = e.value === s;
      return !t && !n ? null : /* @__PURE__ */ i(
        "div",
        {
          role: "tabpanel",
          id: `${r}-panel-${e.value}`,
          "aria-labelledby": `${r}-tab-${e.value}`,
          className: "ips-tab-panel",
          hidden: t && !n ? !0 : void 0,
          style: t && !n ? { display: "none" } : void 0,
          children: e.content
        },
        e.key ?? e.value
      );
    })
  ] });
});
L.displayName = "IpsTabs";
export {
  L as IpsTabs
};
