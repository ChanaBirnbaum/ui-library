import { jsxs as p, jsx as l } from "react/jsx-runtime";
import { forwardRef as T, useId as v } from "react";
import { styled as x } from "@mui/material/styles";
import { MOBILE_FIELD as c, outlinedFieldDisabledStyles as A, outlinedFieldFocusStyles as E, mobileFieldRadius as N, MobileFieldLabel as P, RequiredMark as R, MobileHelperText as S } from "../internal/mobileFieldParts.js";
const D = 3, L = 1.25, M = 11, w = x("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: 0
}), _ = x("textarea", {
  shouldForwardProp: (e) => e !== "hasError"
})(({ theme: e, hasError: r }) => ({
  display: "block",
  boxSizing: "border-box",
  width: "100%",
  margin: 0,
  padding: `${M}px ${c.paddingStartPx}px`,
  fontFamily: "inherit",
  fontSize: c.fontSizePx,
  lineHeight: L,
  color: e.palette.text.primary,
  backgroundColor: e.palette.background.paper,
  border: `1px solid ${r ? e.palette.error.main : e.palette.grey[300]}`,
  borderRadius: N(e),
  outline: "none",
  resize: "none",
  "&::placeholder": {
    color: e.palette.text.secondary,
    opacity: 1
  },
  "&:focus": E(e, r),
  "&:disabled": A(e)
})), $ = T((e, r) => {
  const {
    value: b,
    onChange: i,
    rows: u = D,
    label: d,
    required: s = !1,
    disabled: f = !1,
    error: o = !1,
    helperText: t,
    className: m,
    id: y,
    ...I
  } = e, h = v(), a = y ?? h, n = `${a}-helper-text`, g = ["ips-text-area-mobile", m].filter(Boolean).join(" ");
  return /* @__PURE__ */ p(w, { className: g, children: [
    d && /* @__PURE__ */ p(P, { htmlFor: a, children: [
      d,
      s && /* @__PURE__ */ l(R, { "aria-hidden": "true", children: " *" })
    ] }),
    /* @__PURE__ */ l(
      _,
      {
        ...I,
        ref: r,
        id: a,
        rows: u,
        value: b,
        onChange: (F) => i == null ? void 0 : i(F.target.value),
        disabled: f,
        required: s,
        hasError: o,
        "aria-invalid": o || void 0,
        "aria-describedby": t ? n : void 0
      }
    ),
    t && /* @__PURE__ */ l(S, { id: n, hasError: o, role: o ? "alert" : void 0, children: t })
  ] });
});
$.displayName = "IpsTextAreaMobile";
export {
  $ as IpsTextAreaMobile
};
