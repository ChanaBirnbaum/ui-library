import { jsxs as i, jsx as t } from "react/jsx-runtime";
import { useRef as w, useState as a, useCallback as b, useEffect as M } from "react";
import P from "@mui/material/Dialog";
import T from "@mui/material/DialogTitle";
import H from "@mui/material/DialogContent";
import L from "@mui/material/DialogActions";
import l from "@mui/material/Button";
import s from "@mui/material/Box";
import S from "@mui/material/Typography";
import U from "@mui/material/CircularProgress";
import D from "@mui/icons-material/CameraAlt";
import q from "@mui/icons-material/FlipCameraAndroid";
function _({ open: p, onClose: I, onCapture: R }) {
  const h = w(null), g = w(null), v = w(null), [y, c] = a(null), [j, d] = a(!1), [x, A] = a("environment"), [u, o] = a(null), [F, f] = a(!1), n = b(() => {
    var e;
    (e = v.current) == null || e.getTracks().forEach((r) => r.stop()), v.current = null, f(!1);
  }, []), k = b(async () => {
    n(), d(!0), c(null), f(!1);
    try {
      const e = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: x, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: !1
      });
      v.current = e;
      const r = () => {
        const m = h.current;
        if (!m) {
          requestAnimationFrame(r);
          return;
        }
        m.srcObject = e, m.onloadedmetadata = () => {
          m.play().then(() => {
            d(!1), f(!0);
          }).catch(() => {
            d(!1), f(!0);
          });
        };
      };
      r();
    } catch {
      c("לא ניתן לגשת למצלמה. ודא שניתנה הרשאה בדפדפן."), d(!1);
    }
  }, [x, n]);
  M(() => {
    if (!p) {
      n(), o(null), c(null);
      return;
    }
    return o(null), k(), () => n();
  }, [p, x]);
  const W = b(() => {
    const e = h.current, r = g.current;
    !e || !r || e.videoWidth === 0 || (r.width = e.videoWidth, r.height = e.videoHeight, r.getContext("2d").drawImage(e, 0, 0), o(r.toDataURL("image/png")), n());
  }, [n]);
  function B() {
    o(null), k();
  }
  function E() {
    const e = g.current;
    e && e.toBlob((r) => {
      r && (R(new File([r], `camera-${Date.now()}.png`, { type: "image/png" })), C());
    }, "image/png");
  }
  function C() {
    n(), o(null), c(null), I();
  }
  return /* @__PURE__ */ i(P, { open: p, onClose: C, maxWidth: "sm", fullWidth: !0, children: [
    /* @__PURE__ */ i(T, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
      /* @__PURE__ */ t(D, {}),
      " צילום תמונה"
    ] }),
    /* @__PURE__ */ i(H, { children: [
      y && /* @__PURE__ */ t(S, { color: "error", sx: { mb: 1 }, children: y }),
      !u && /* @__PURE__ */ i(s, { sx: { position: "relative", width: "100%", bgcolor: "#000", borderRadius: 1, overflow: "hidden", minHeight: 200 }, children: [
        j && /* @__PURE__ */ t(s, { sx: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ t(U, { sx: { color: "#fff" } }) }),
        /* @__PURE__ */ t(
          "video",
          {
            ref: h,
            style: { width: "100%", display: "block" },
            autoPlay: !0,
            playsInline: !0,
            muted: !0
          }
        )
      ] }),
      u && /* @__PURE__ */ t(s, { sx: { width: "100%", borderRadius: 1, overflow: "hidden" }, children: /* @__PURE__ */ t("img", { src: u, alt: "captured", style: { width: "100%", display: "block" } }) }),
      /* @__PURE__ */ t("canvas", { ref: g, style: { display: "none" } })
    ] }),
    /* @__PURE__ */ i(L, { sx: { justifyContent: "space-between", px: 3, pb: 2 }, children: [
      /* @__PURE__ */ t(l, { onClick: C, color: "inherit", children: "ביטול" }),
      u ? /* @__PURE__ */ i(s, { sx: { display: "flex", gap: 1 }, children: [
        /* @__PURE__ */ t(l, { variant: "outlined", onClick: B, children: "צלם שוב" }),
        /* @__PURE__ */ t(l, { variant: "contained", onClick: E, children: "השתמש בתמונה" })
      ] }) : /* @__PURE__ */ i(s, { sx: { display: "flex", gap: 1 }, children: [
        /* @__PURE__ */ t(
          l,
          {
            variant: "outlined",
            startIcon: /* @__PURE__ */ t(q, {}),
            onClick: () => A((e) => e === "user" ? "environment" : "user"),
            children: "הפוך מצלמה"
          }
        ),
        /* @__PURE__ */ t(
          l,
          {
            variant: "contained",
            startIcon: /* @__PURE__ */ t(D, {}),
            onClick: W,
            disabled: !F || !!y,
            children: "צלם"
          }
        )
      ] })
    ] })
  ] });
}
export {
  _ as CameraDialog
};
