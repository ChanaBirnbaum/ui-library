import { jsxs as g, Fragment as $, jsx as r } from "react/jsx-runtime";
import { useRef as y, useState as n } from "react";
import O from "@mui/material/Box";
import s from "@mui/material/Button";
import S from "@mui/material/Typography";
import q from "@mui/material/Alert";
import F from "@mui/material/Snackbar";
import { useTheme as G, alpha as J } from "@mui/material/styles";
import K from "@mui/icons-material/CameraAlt";
import L from "@mui/icons-material/Scanner";
import P from "@mui/icons-material/FolderOpen";
import Q from "@mui/icons-material/ScreenshotMonitor";
import { CameraDialog as U } from "./CameraDialog.js";
import { ScanDialog as V } from "./ScanDialog.js";
import { ScreenCropOverlay as X } from "./ScreenCropOverlay.js";
function Y({
  onFilesAdded: o,
  camera: v = !1,
  screenshot: b = !0,
  scan: C = !1,
  accept: i,
  multiple: k = !0,
  disabled: a = !1,
  containerId: z,
  separatorLabel: c
}) {
  const l = G(), x = y(null), N = y(null), R = y(null), [p, m] = n(!1), [D, j] = n(null), [I, B] = n(null), [E, f] = n(!1), [T, u] = n(!1), [A, h] = n(!1), Z = i == null ? void 0 : i.join(","), w = (e) => {
    e.preventDefault(), a || m(!0);
  }, H = (e) => {
    e.preventDefault(), m(!1);
  }, M = (e) => {
    if (e.preventDefault(), m(!1), a) return;
    const t = Array.from(e.dataTransfer.files);
    t.length > 0 && o(t);
  }, d = (e) => {
    const t = Array.from(e.target.files ?? []);
    t.length > 0 && o(t), e.target.value = "";
  }, W = () => h(!0);
  return /* @__PURE__ */ g($, { children: [
    /* @__PURE__ */ r(
      "input",
      {
        ref: x,
        type: "file",
        multiple: k,
        accept: Z,
        style: { display: "none" },
        onChange: d
      }
    ),
    v && /* @__PURE__ */ r(
      "input",
      {
        ref: N,
        type: "file",
        accept: "image/*",
        capture: "environment",
        style: { display: "none" },
        onChange: d
      }
    ),
    /* @__PURE__ */ r(
      "input",
      {
        ref: R,
        type: "file",
        accept: "image/*",
        capture: "environment",
        style: { display: "none" },
        onChange: d
      }
    ),
    /* @__PURE__ */ g(
      O,
      {
        className: "ips-drop-zone",
        onDragOver: w,
        onDragLeave: H,
        onDrop: M,
        sx: {
          border: `2px ${p ? "solid" : "dashed"}`,
          borderColor: p ? l.palette.primary.main : l.palette.divider ?? l.palette.grey[300],
          borderRadius: 2,
          bgcolor: p ? J(l.palette.primary.main, 0.05) : "background.paper",
          p: 3,
          textAlign: "center",
          transition: "all 0.2s",
          opacity: a ? 0.5 : 1,
          pointerEvents: a ? "none" : "auto",
          cursor: "default"
        },
        children: [
          /* @__PURE__ */ r(
            S,
            {
              className: "ips-drop-zone-hint",
              variant: "body1",
              color: "text.secondary",
              sx: { mb: c ? 1 : 2 },
              children: "🗂  גרור קבצים לכאן"
            }
          ),
          c && /* @__PURE__ */ r(S, { className: "ips-drop-zone-separator", variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: c }),
          I && /* @__PURE__ */ r(q, { severity: "error", sx: { mb: 1, textAlign: "right" }, onClose: () => B(null), children: I }),
          /* @__PURE__ */ g(
            O,
            {
              className: "ips-drop-zone-buttons",
              sx: { display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center" },
              children: [
                /* @__PURE__ */ r(
                  s,
                  {
                    variant: "outlined",
                    size: "small",
                    startIcon: /* @__PURE__ */ r(P, {}),
                    onClick: () => {
                      var e;
                      return (e = x.current) == null ? void 0 : e.click();
                    },
                    children: "עיין בקבצים"
                  }
                ),
                v && /* @__PURE__ */ r(
                  s,
                  {
                    variant: "outlined",
                    size: "small",
                    startIcon: /* @__PURE__ */ r(K, {}),
                    onClick: () => f(!0),
                    children: "מצלמה"
                  }
                ),
                b && /* @__PURE__ */ r(
                  s,
                  {
                    variant: "outlined",
                    size: "small",
                    startIcon: /* @__PURE__ */ r(Q, {}),
                    onClick: W,
                    children: "צילום מסך"
                  }
                ),
                C && /* @__PURE__ */ r(
                  s,
                  {
                    variant: "outlined",
                    size: "small",
                    startIcon: /* @__PURE__ */ r(L, {}),
                    onClick: () => u(!0),
                    children: "סריקה"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r(
      F,
      {
        open: !!D,
        autoHideDuration: 4e3,
        onClose: () => j(null),
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        message: D
      }
    ),
    /* @__PURE__ */ r(
      U,
      {
        open: E,
        onClose: () => f(!1),
        onCapture: (e) => {
          o([e]), f(!1);
        }
      }
    ),
    C && /* @__PURE__ */ r(
      V,
      {
        open: T,
        onClose: () => u(!1),
        onScan: (e) => {
          o([e]), u(!1);
        },
        containerId: z
      }
    ),
    A && /* @__PURE__ */ r(
      X,
      {
        onCrop: (e) => {
          o([e]), h(!1);
        },
        onCancel: () => h(!1)
      }
    )
  ] });
}
Y.displayName = "IpsDropZone";
export {
  Y as IpsDropZone
};
