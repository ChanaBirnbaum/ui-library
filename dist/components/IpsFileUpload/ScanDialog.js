import { jsxs as i, jsx as n } from "react/jsx-runtime";
import { useState as u, useRef as E, useEffect as _ } from "react";
import v from "@mui/material/Dialog";
import O from "@mui/material/DialogTitle";
import N from "@mui/material/DialogContent";
import R from "@mui/material/DialogActions";
import D from "@mui/material/Button";
import g from "@mui/material/Box";
import o from "@mui/material/Typography";
import B from "@mui/material/CircularProgress";
import W from "@mui/icons-material/Scanner";
function J({ open: f, onClose: w, onScan: I, containerId: y = "dwtcontrolContainer" }) {
  const [p, s] = u("מאתחל..."), [a, r] = u(null), [h, t] = u(!1), x = E(null);
  _(() => {
    f && (r(null), b());
  }, [f]);
  function T() {
    var e;
    return ((e = window.Dynamsoft) == null ? void 0 : e.DWT.GetWebTwain(y)) ?? null;
  }
  async function b() {
    t(!0), s("מאתחל Web TWAIN...");
    try {
      if (!window.Dynamsoft)
        throw new Error("NO_DWT");
      window.Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", () => {
        x.current = T(), s("מוכן לסריקה"), t(!1);
      }), window.Dynamsoft.DWT.Load();
    } catch (e) {
      const l = e instanceof Error ? e.message : "";
      r(l === "NO_DWT" ? "NO_DWT" : e instanceof Error ? e.message : "שגיאה באתחול סורק"), t(!1);
    }
  }
  async function S() {
    const e = x.current ?? T();
    if (!e) {
      r("Web TWAIN לא מוכן");
      return;
    }
    t(!0), r(null);
    try {
      await e.SelectSourceAsync(), e.OpenSource(), e.RegisterEvent("OnPostTransfer", () => {
        s(`נסרקו ${e.HowManyImagesInBuffer} עמודים`);
      }), e.RegisterEvent("OnPostAllTransfers", () => {
        e.CloseSource(), A(e);
      }), e.AcquireImage();
    } catch {
      r("שגיאה בבחירת סורק"), t(!1);
    }
  }
  function A(e) {
    const l = Array.from({ length: e.HowManyImagesInBuffer }, (d, c) => c);
    e.ConvertToBlob(
      l,
      e.EnumDWT_ImageType.IT_PNG,
      (d) => {
        const c = new File([d], `scan-${Date.now()}.png`, { type: "image/png" });
        I(c), m();
      },
      (d, c, C) => {
        r(`שגיאת המרה: ${C}`), t(!1);
      }
    );
  }
  function m() {
    r(null), s("מאתחל..."), t(!1), w();
  }
  return /* @__PURE__ */ i(v, { open: f, onClose: m, maxWidth: "xs", fullWidth: !0, children: [
    /* @__PURE__ */ i(O, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
      /* @__PURE__ */ n(W, {}),
      " סריקת מסמך"
    ] }),
    /* @__PURE__ */ i(N, { children: [
      /* @__PURE__ */ n(g, { id: y, sx: { display: "none" } }),
      a === "NO_DWT" ? /* @__PURE__ */ i(g, { sx: { py: 1, textAlign: "center" }, children: [
        /* @__PURE__ */ n(o, { fontSize: 40, sx: { mb: 1 }, children: "🖨️" }),
        /* @__PURE__ */ n(o, { fontWeight: 600, gutterBottom: !0, children: "לא נמצא סורק זמין" }),
        /* @__PURE__ */ n(o, { variant: "body2", color: "text.secondary", children: "ודא שהסורק מחובר למחשב ומופעל, ונסה שוב." }),
        /* @__PURE__ */ n(o, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: "לתמיכה פנה למנהל המערכת." })
      ] }) : a ? /* @__PURE__ */ n(o, { color: "error", children: a }) : h ? /* @__PURE__ */ i(g, { sx: { display: "flex", alignItems: "center", gap: 2, py: 2 }, children: [
        /* @__PURE__ */ n(B, { size: 24 }),
        /* @__PURE__ */ n(o, { children: p })
      ] }) : /* @__PURE__ */ n(o, { color: "text.secondary", children: p })
    ] }),
    /* @__PURE__ */ i(R, { sx: { px: 3, pb: 2 }, children: [
      /* @__PURE__ */ n(D, { onClick: m, color: "inherit", children: "ביטול" }),
      /* @__PURE__ */ n(
        D,
        {
          variant: "contained",
          startIcon: /* @__PURE__ */ n(W, {}),
          onClick: S,
          disabled: h || !!a,
          children: "סרוק"
        }
      )
    ] })
  ] });
}
export {
  J as ScanDialog
};
