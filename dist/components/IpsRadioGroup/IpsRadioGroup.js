import { jsxs as D, jsx as t } from "react/jsx-runtime";
import { forwardRef as G, useId as T } from "react";
import L from "@mui/material/FormControlLabel";
import X from "@mui/material/Radio";
import E from "@mui/material/RadioGroup";
import { styled as s } from "@mui/material/styles";
const k = 14, w = 18, B = 16, F = 8, W = 16, j = 12, z = 12, H = s("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%"
}), K = s("span")(({ theme: o }) => ({
  marginBottom: 4,
  fontSize: "0.875rem",
  color: o.palette.text.secondary
})), M = s("span")({
  display: "flex",
  flexDirection: "column",
  minWidth: 0
}), U = s("span", {
  shouldForwardProp: (o) => o !== "isStacked"
})(({ theme: o, isStacked: l }) => ({
  fontWeight: l ? o.typography.fontWeightMedium : void 0
})), Z = s("span", {
  shouldForwardProp: (o) => o !== "isDisabled"
})(({ theme: o, isDisabled: l }) => ({
  fontSize: k,
  lineHeight: `${w}px`,
  color: l ? o.palette.text.disabled : o.palette.text.secondary
})), q = G((o, l) => {
  const {
    options: p,
    value: d,
    onChange: b,
    variant: P = "list",
    label: n,
    "aria-label": S,
    "aria-labelledby": f,
    "aria-describedby": h,
    name: R,
    disabled: u = !1,
    className: A
  } = o, g = T(), v = `${g}-label`, m = P === "cards", e = m || p.some((i) => !!i.description), N = ["ips-radio-group", A].filter(Boolean).join(" "), O = (i, x) => {
    const r = p.find((c) => String(c.value) === x);
    r && (b == null || b(r.value));
  }, $ = (i, x) => {
    const r = d !== null && String(i.value) === String(d), c = `${g}-option-${x}`, _ = i.description ? `${c}-title` : void 0, I = i.description ? `${c}-description` : void 0;
    return /* @__PURE__ */ t(
      L,
      {
        className: r ? "ips-radio-group-option ips-radio-group-option-checked" : "ips-radio-group-option",
        value: String(i.value),
        disabled: u,
        control: /* @__PURE__ */ t(
          X,
          {
            inputProps: { "aria-labelledby": _, "aria-describedby": I },
            sx: e ? { p: 0 } : void 0
          }
        ),
        label: /* @__PURE__ */ D(M, { children: [
          /* @__PURE__ */ t(U, { id: _, isStacked: e, children: i.label }),
          i.description && /* @__PURE__ */ t(Z, { id: I, isDisabled: u, children: i.description })
        ] }),
        sx: (a) => {
          var y, C;
          return {
            m: 0,
            ...e && { alignItems: "flex-start", gap: `${z}px` },
            ...m && {
              width: "100%",
              boxSizing: "border-box",
              p: `${W}px`,
              border: "1px solid",
              borderColor: r ? a.palette.primary.main : a.palette.divider,
              borderRadius: `${((C = (y = a.custom) == null ? void 0 : y.radius) == null ? void 0 : C.card) ?? j}px`,
              backgroundColor: a.palette.background.paper,
              transition: a.transitions.create("border-color"),
              "&:hover": {
                borderColor: r || u ? void 0 : a.palette.text.secondary
              }
            },
            "& .MuiFormControlLabel-label": { flex: e ? 1 : void 0, minWidth: 0 }
          };
        }
      },
      i.value
    );
  };
  return /* @__PURE__ */ D(H, { ref: l, className: N, children: [
    n && /* @__PURE__ */ t(K, { id: v, children: n }),
    /* @__PURE__ */ t(
      E,
      {
        name: R,
        row: !e,
        value: d === null ? "" : String(d),
        onChange: O,
        "aria-labelledby": n ? v : f,
        "aria-label": n || f ? void 0 : S,
        "aria-describedby": h,
        sx: { gap: e ? `${m ? F : B}px` : void 0 },
        children: p.map($)
      }
    )
  ] });
});
q.displayName = "IpsRadioGroup";
export {
  q as IpsRadioGroup
};
