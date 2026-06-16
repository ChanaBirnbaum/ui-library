import { jsx as e, jsxs as g, Fragment as y } from "react/jsx-runtime";
import N, { forwardRef as P } from "react";
import _ from "@mui/material/Stepper";
import F from "@mui/material/Step";
import O from "@mui/material/StepLabel";
import T from "@mui/material/StepContent";
import V from "@mui/material/ButtonBase";
import z from "@mui/material/Typography";
import q from "@mui/material/Box";
import h from "@mui/material/SvgIcon";
const G = (n) => /* @__PURE__ */ e(h, { ...n, viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }) }), H = (n) => /* @__PURE__ */ e(h, { ...n, viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }) }), J = (n) => /* @__PURE__ */ e(h, { ...n, viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }) });
function K({ icon: n, className: t, status: r = "pending", customIcon: s, renderFnResult: l }) {
  if (l !== void 0)
    return /* @__PURE__ */ e("span", { className: t, children: l });
  if (s !== void 0)
    return /* @__PURE__ */ e("span", { className: t, style: { display: "flex", alignItems: "center" }, children: s });
  if (r === "error")
    return /* @__PURE__ */ e(J, { className: t, sx: { color: "error.main", fontSize: 24 } });
  if (r === "warning")
    return /* @__PURE__ */ e(H, { className: t, sx: { color: "warning.main", fontSize: 24 } });
  const a = r === "completed";
  return /* @__PURE__ */ e(
    q,
    {
      className: t,
      sx: {
        width: 24,
        height: 24,
        borderRadius: "50%",
        bgcolor: a || r === "active" ? "primary.main" : r === "disabled" ? "action.disabled" : "text.disabled",
        color: "common.white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.75rem",
        fontWeight: 600,
        flexShrink: 0
      },
      children: a ? /* @__PURE__ */ e(G, { sx: { fontSize: 16, color: "inherit" } }) : n
    }
  );
}
function Q(n, t, r) {
  return n.disabled ? "disabled" : n.status ? n.status : t < r ? "completed" : t === r ? "active" : "pending";
}
const w = P(function(t, r) {
  const {
    steps: s,
    activeStep: l,
    orientation: a = "horizontal",
    alternativeLabel: p = !1,
    nonLinear: d = !1,
    onStepClick: m,
    renderStepIcon: v,
    renderStepLabel: u,
    renderConnector: f,
    className: B,
    sx: L,
    ...k
  } = t, j = ["ips-stepper", B].filter(Boolean).join(" "), E = N.useMemo(() => {
    if (!f) return;
    const o = ({ index: i = 0 }) => /* @__PURE__ */ e(y, { children: f({ index: i }) });
    return o.displayName = "IpsStepConnector", /* @__PURE__ */ e(o, {});
  }, [f]);
  return /* @__PURE__ */ e(
    _,
    {
      ref: r,
      className: j,
      activeStep: l,
      orientation: a,
      alternativeLabel: p,
      nonLinear: d,
      connector: E,
      sx: L,
      ...k,
      children: s.map((o, i) => {
        const c = Q(o, i, l), S = c === "active", b = c === "completed", C = c === "disabled", M = c === "error", x = { index: i, step: o, status: c, active: S, completed: b }, A = {
          status: c,
          customIcon: o.icon,
          renderFnResult: v ? v(x) : void 0
        }, D = u ? u(x) : o.label, R = o.optional || o.description ? /* @__PURE__ */ g(y, { children: [
          o.optional && /* @__PURE__ */ e(z, { variant: "caption", color: "text.secondary", children: "Optional" }),
          o.description && /* @__PURE__ */ e(z, { variant: "caption", display: "block", color: "text.secondary", children: o.description })
        ] }) : void 0, W = d && !C && typeof m == "function", I = /* @__PURE__ */ e(
          O,
          {
            error: M,
            StepIconComponent: K,
            StepIconProps: A,
            optional: R,
            children: D
          }
        );
        return /* @__PURE__ */ g(
          F,
          {
            active: S,
            completed: b,
            disabled: C,
            children: [
              W ? /* @__PURE__ */ e(
                V,
                {
                  onClick: () => m(i, o),
                  sx: { width: "100%", justifyContent: p ? "center" : "flex-start" },
                  children: I
                }
              ) : I,
              o.content && a === "vertical" && /* @__PURE__ */ e(T, { children: o.content })
            ]
          },
          o.key ?? i
        );
      })
    }
  );
});
w.displayName = "IpsStepper";
const ie = w;
export {
  ie as IpsStepper
};
