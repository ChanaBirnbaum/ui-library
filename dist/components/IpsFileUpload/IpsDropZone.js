import { jsxs as g, Fragment as H, jsx as r } from "react/jsx-runtime";
import { useRef as y, useState as n } from "react";
import I from "@mui/material/Box";
import s from "@mui/material/Button";
import M from "@mui/material/Typography";
import W from "@mui/material/Alert";
import $ from "@mui/material/Snackbar";
import { useTheme as q, alpha as F } from "@mui/material/styles";
import G from "@mui/icons-material/CameraAlt";
import J from "@mui/icons-material/Scanner";
import K from "@mui/icons-material/FolderOpen";
import P from "@mui/icons-material/ScreenshotMonitor";
import { CameraDialog as Q } from "./CameraDialog.js";
import { ScanDialog as U } from "./ScanDialog.js";
import { ScreenCropOverlay as V } from "./ScreenCropOverlay.js";
function X({
  onFilesAdded: o,
  camera: d = !1,
  screenshot: O = !0,
  scan: v = !1,
  accept: i,
  multiple: S = !0,
  disabled: a = !1,
  containerId: b
}) {
  const l = q(), C = y(null), k = y(null), z = y(null), [c, p] = n(!1), [D, R] = n(null), [x, j] = n(null), [B, f] = n(!1), [E, m] = n(!1), [T, u] = n(!1), A = i == null ? void 0 : i.join(","), L = (e) => {
    e.preventDefault(), a || p(!0);
  }, N = (e) => {
    e.preventDefault(), p(!1);
  }, Z = (e) => {
    if (e.preventDefault(), p(!1), a) return;
    const t = Array.from(e.dataTransfer.files);
    t.length > 0 && o(t);
  }, h = (e) => {
    const t = Array.from(e.target.files ?? []);
    t.length > 0 && o(t), e.target.value = "";
  }, w = () => u(!0);
  return /* @__PURE__ */ g(H, { children: [
    /* @__PURE__ */ r(
      "input",
      {
        ref: C,
        type: "file",
        multiple: S,
        accept: A,
        style: { display: "none" },
        onChange: h
      }
    ),
    d && /* @__PURE__ */ r(
      "input",
      {
        ref: k,
        type: "file",
        accept: "image/*",
        capture: "environment",
        style: { display: "none" },
        onChange: h
      }
    ),
    /* @__PURE__ */ r(
      "input",
      {
        ref: z,
        type: "file",
        accept: "image/*",
        capture: "environment",
        style: { display: "none" },
        onChange: h
      }
    ),
    /* @__PURE__ */ g(
      I,
      {
        className: "ips-drop-zone",
        onDragOver: L,
        onDragLeave: N,
        onDrop: Z,
        sx: {
          border: `2px ${c ? "solid" : "dashed"}`,
          borderColor: c ? l.palette.primary.main : l.palette.divider ?? l.palette.grey[300],
          borderRadius: 2,
          bgcolor: c ? F(l.palette.primary.main, 0.05) : "background.paper",
          p: 3,
          textAlign: "center",
          transition: "all 0.2s",
          opacity: a ? 0.5 : 1,
          pointerEvents: a ? "none" : "auto",
          cursor: "default"
        },
        children: [
          /* @__PURE__ */ r(M, { variant: "body1", color: "text.secondary", sx: { mb: 2 }, children: "🗂  גרור קבצים לכאן" }),
          x && /* @__PURE__ */ r(W, { severity: "error", sx: { mb: 1, textAlign: "right" }, onClose: () => j(null), children: x }),
          /* @__PURE__ */ g(I, { sx: { display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center" }, children: [
            /* @__PURE__ */ r(
              s,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ r(K, {}),
                onClick: () => {
                  var e;
                  return (e = C.current) == null ? void 0 : e.click();
                },
                children: "עיין בקבצים"
              }
            ),
            d && /* @__PURE__ */ r(
              s,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ r(G, {}),
                onClick: () => f(!0),
                children: "מצלמה"
              }
            ),
            O && /* @__PURE__ */ r(
              s,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ r(P, {}),
                onClick: w,
                children: "צילום מסך"
              }
            ),
            v && /* @__PURE__ */ r(
              s,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ r(J, {}),
                onClick: () => m(!0),
                children: "סריקה"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ r(
      $,
      {
        open: !!D,
        autoHideDuration: 4e3,
        onClose: () => R(null),
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        message: D
      }
    ),
    /* @__PURE__ */ r(
      Q,
      {
        open: B,
        onClose: () => f(!1),
        onCapture: (e) => {
          o([e]), f(!1);
        }
      }
    ),
    v && /* @__PURE__ */ r(
      U,
      {
        open: E,
        onClose: () => m(!1),
        onScan: (e) => {
          o([e]), m(!1);
        },
        containerId: b
      }
    ),
    T && /* @__PURE__ */ r(
      V,
      {
        onCrop: (e) => {
          o([e]), u(!1);
        },
        onCancel: () => u(!1)
      }
    )
  ] });
}
X.displayName = "IpsDropZone";
export {
  X as IpsDropZone
};
