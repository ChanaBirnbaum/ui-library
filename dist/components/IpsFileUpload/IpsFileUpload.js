import { jsxs as s, jsx as e } from "react/jsx-runtime";
import t from "@mui/material/Box";
import n from "@mui/material/Button";
import D from "@mui/material/Stack";
import S from "@mui/material/CircularProgress";
import $ from "@mui/icons-material/Save";
import b from "@mui/icons-material/DeleteSweep";
import { IpsDropZone as j } from "./IpsDropZone.js";
import { IpsFileItem as k } from "./IpsFileItem.js";
import { useFileUpload as N } from "./useFileUpload.js";
function U(r) {
  const {
    camera: c = !1,
    screenshot: m = !1,
    scan: p = !1,
    accept: d,
    multiple: f = !0,
    disabled: l = !1,
    containerId: u,
    className: a,
    sx: x
  } = r, {
    files: o,
    addFiles: I,
    removeFile: h,
    clearAll: F,
    saveFiles: g,
    loading: v,
    canSave: y
  } = N(r);
  return /* @__PURE__ */ s(
    t,
    {
      className: `ips-file-upload${a ? ` ${a}` : ""}`,
      sx: { display: "flex", flexDirection: "column", gap: 2, ...x },
      children: [
        /* @__PURE__ */ e(
          j,
          {
            onFilesAdded: I,
            camera: c,
            screenshot: m,
            scan: p,
            accept: d,
            multiple: f,
            disabled: l,
            containerId: u
          }
        ),
        o.length > 0 && /* @__PURE__ */ e(D, { spacing: 0.75, children: o.map(({ file: i, hasError: z, errorMessage: C }) => /* @__PURE__ */ e(
          k,
          {
            file: i,
            hasError: z,
            errorMessage: C,
            onDelete: h
          },
          `${i.name}-${i.size}`
        )) }),
        /* @__PURE__ */ s(t, { sx: { display: "flex", gap: 1, justifyContent: "flex-start" }, children: [
          /* @__PURE__ */ e(
            n,
            {
              variant: "contained",
              size: "small",
              disabled: !y || l,
              onClick: g,
              startIcon: v ? /* @__PURE__ */ e(S, { size: 16, color: "inherit" }) : /* @__PURE__ */ e($, {}),
              children: "שמור קבצים"
            }
          ),
          /* @__PURE__ */ e(
            n,
            {
              variant: "outlined",
              size: "small",
              color: "error",
              disabled: o.length === 0 || l,
              onClick: F,
              startIcon: /* @__PURE__ */ e(b, {}),
              children: "נקה הכל"
            }
          )
        ] })
      ]
    }
  );
}
U.displayName = "IpsFileUpload";
export {
  U as IpsFileUpload
};
