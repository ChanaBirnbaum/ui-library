import { jsxs as i, jsx as e, Fragment as E } from "react/jsx-runtime";
import { useRef as b, useState as M, useEffect as O } from "react";
import R from "@mui/material/CircularProgress";
import { styled as t } from "@mui/material/styles";
import { CameraDialog as j } from "../IpsFileUpload/CameraDialog.js";
import { useFileUpload as W } from "../IpsFileUpload/useFileUpload.js";
import { MOBILE_FIELD as F, outlinedFieldDisabledStyles as C, outlinedFieldFocusStyles as I, outlinedFieldBoxStyles as L, MobileHelperText as z } from "../internal/mobileFieldParts.js";
const H = "בחירת קובץ", V = "מעלה…", X = "מצלמה", s = 20, Z = 18, G = t("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: 0
}), q = t("div")({
  display: "flex",
  gap: 8
}), J = t("button", {
  shouldForwardProp: (l) => l !== "hasError"
})(({ theme: l, hasError: n }) => ({
  ...L(l, { hasValue: !1, hasError: n }),
  flex: 1,
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  gap: 8,
  paddingInlineEnd: F.paddingStartPx,
  textAlign: "start",
  cursor: "pointer",
  "&:focus-visible": { outline: "none", ...I(l, n) },
  "&:disabled": C(l)
})), K = t("button")(({ theme: l }) => ({
  ...L(l, { hasValue: !0, hasError: !1 }),
  width: F.heightPx,
  flexShrink: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  "&:focus-visible": { outline: "none", ...I(l, !1) },
  "&:disabled": C(l)
})), y = t("span")({
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}), Q = t("span")(({ theme: l }) => ({
  flexShrink: 0,
  fontSize: 14,
  color: l.palette.text.secondary
}));
function Y() {
  return /* @__PURE__ */ e(
    "svg",
    {
      "aria-hidden": "true",
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ e("path", { d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" })
    }
  );
}
function $() {
  return /* @__PURE__ */ i(
    "svg",
    {
      "aria-hidden": "true",
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ e("path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }),
        /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3" })
      ]
    }
  );
}
function ee(l) {
  const {
    camera: n = !1,
    accept: d,
    disabled: p = !1,
    placeholder: v = H,
    uploadingText: S = V,
    cameraButtonLabel: k = X,
    error: w = !1,
    id: A,
    className: B
  } = l, { files: T, addFiles: _, clearAll: P, saveFiles: h, loading: c } = W(l), m = b(null), [D, u] = M(!1), g = b(null), r = T[0] ?? null, f = r != null && r.hasError ? r.errorMessage : void 0;
  O(() => {
    !r || r.hasError || c || g.current !== r.file && (g.current = r.file, h());
  }, [r, c, h]);
  const x = (o) => {
    o.length !== 0 && (P(), _(o.slice(0, 1)));
  }, N = (o) => {
    x(Array.from(o.target.files ?? [])), o.target.value = "";
  }, a = c && r !== null, U = ["ips-file-upload-mobile", B].filter(Boolean).join(" ");
  return /* @__PURE__ */ i(G, { className: U, children: [
    /* @__PURE__ */ e(
      "input",
      {
        ref: m,
        type: "file",
        multiple: !1,
        accept: d == null ? void 0 : d.join(","),
        style: { display: "none" },
        onChange: N
      }
    ),
    /* @__PURE__ */ i(q, { children: [
      /* @__PURE__ */ e(
        J,
        {
          type: "button",
          id: A,
          hasError: w || !!f,
          disabled: p || a,
          "aria-busy": a || void 0,
          onClick: () => {
            var o;
            return (o = m.current) == null ? void 0 : o.click();
          },
          children: a ? /* @__PURE__ */ i(E, { children: [
            /* @__PURE__ */ e(y, { children: r.file.name }),
            /* @__PURE__ */ e(Q, { children: S }),
            /* @__PURE__ */ e(R, { size: Z })
          ] }) : /* @__PURE__ */ i(E, { children: [
            /* @__PURE__ */ e(y, { children: v }),
            /* @__PURE__ */ e(Y, {})
          ] })
        }
      ),
      n && /* @__PURE__ */ e(
        K,
        {
          type: "button",
          "aria-label": k,
          disabled: p || a,
          onClick: () => u(!0),
          children: /* @__PURE__ */ e($, {})
        }
      )
    ] }),
    f && /* @__PURE__ */ e(z, { hasError: !0, role: "alert", children: f }),
    /* @__PURE__ */ e(
      j,
      {
        open: D,
        onClose: () => u(!1),
        onCapture: (o) => {
          x([o]), u(!1);
        }
      }
    )
  ] });
}
ee.displayName = "IpsFileUploadMobile";
export {
  ee as IpsFileUploadMobile
};
