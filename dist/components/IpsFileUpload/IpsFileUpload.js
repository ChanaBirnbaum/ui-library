import { jsx as e, jsxs as r, Fragment as c } from "react/jsx-runtime";
import m from "@mui/material/Box";
import p from "@mui/material/Button";
import $ from "@mui/material/Stack";
import j from "@mui/material/CircularProgress";
import k from "@mui/icons-material/Save";
import A from "@mui/icons-material/DeleteSweep";
import { IpsDropZone as U } from "./IpsDropZone.js";
import { IpsFileItem as w } from "./IpsFileItem.js";
import { useFileUpload as L } from "./useFileUpload.js";
function O(s) {
  const {
    camera: d = !1,
    screenshot: f = !1,
    scan: u = !1,
    accept: h,
    multiple: x = !0,
    disabled: l = !1,
    containerId: I,
    className: i,
    sx: F,
    separatorLabel: g,
    actionsOrder: v = "save-first"
  } = s, {
    files: o,
    addFiles: b,
    removeFile: y,
    clearAll: z,
    saveFiles: B,
    loading: C,
    canSave: D
  } = L(s), t = /* @__PURE__ */ e(
    p,
    {
      variant: "contained",
      size: "small",
      disabled: !D || l,
      onClick: B,
      startIcon: C ? /* @__PURE__ */ e(j, { size: 16, color: "inherit" }) : /* @__PURE__ */ e(k, {}),
      children: "שמור קבצים"
    }
  ), n = /* @__PURE__ */ e(
    p,
    {
      variant: "outlined",
      size: "small",
      color: "error",
      disabled: o.length === 0 || l,
      onClick: z,
      startIcon: /* @__PURE__ */ e(A, {}),
      children: "נקה הכל"
    }
  );
  return /* @__PURE__ */ r(
    m,
    {
      className: `ips-file-upload${i ? ` ${i}` : ""}`,
      sx: { display: "flex", flexDirection: "column", gap: 2, ...F },
      children: [
        /* @__PURE__ */ e(
          U,
          {
            onFilesAdded: b,
            camera: d,
            screenshot: f,
            scan: u,
            accept: h,
            multiple: x,
            disabled: l,
            containerId: I,
            separatorLabel: g
          }
        ),
        o.length > 0 && /* @__PURE__ */ e($, { spacing: 0.75, children: o.map(({ file: a, hasError: N, errorMessage: S }) => /* @__PURE__ */ e(
          w,
          {
            file: a,
            hasError: N,
            errorMessage: S,
            onDelete: y
          },
          `${a.name}-${a.size}`
        )) }),
        /* @__PURE__ */ e(m, { className: "ips-file-upload-actions", sx: { display: "flex", gap: 1, justifyContent: "flex-start" }, children: v === "clear-first" ? /* @__PURE__ */ r(c, { children: [
          n,
          t
        ] }) : /* @__PURE__ */ r(c, { children: [
          t,
          n
        ] }) })
      ]
    }
  );
}
O.displayName = "IpsFileUpload";
export {
  O as IpsFileUpload
};
