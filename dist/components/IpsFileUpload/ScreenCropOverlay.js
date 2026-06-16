import { jsxs as a, jsx as s } from "react/jsx-runtime";
import { useRef as d, useState as x, useEffect as b } from "react";
function C({ onCrop: u, onCancel: p }) {
  const t = d(null), [n, c] = x(null);
  b(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "";
  }), []);
  const h = (e) => {
    t.current = { x: e.clientX, y: e.clientY }, c({ x: e.clientX, y: e.clientY, w: 0, h: 0 });
  }, f = (e) => {
    t.current && c({
      x: Math.min(e.clientX, t.current.x),
      y: Math.min(e.clientY, t.current.y),
      w: Math.abs(e.clientX - t.current.x),
      h: Math.abs(e.clientY - t.current.y)
    });
  }, r = d(null);
  return /* @__PURE__ */ a(
    "div",
    {
      ref: r,
      onMouseDown: h,
      onMouseMove: f,
      onMouseUp: async () => {
        if (!t.current || !n || n.w < 4 || n.h < 4) {
          t.current = null;
          return;
        }
        const e = { ...n };
        t.current = null, r.current && (r.current.style.display = "none");
        const o = window.devicePixelRatio || 1, w = window.scrollX, g = window.scrollY, y = await (await import("html2canvas")).default(document.body, {
          useCORS: !0,
          allowTaint: !0,
          scale: o,
          logging: !1,
          // Capture only the viewport area the user can see
          x: w,
          y: g,
          width: window.innerWidth,
          height: window.innerHeight
        });
        r.current && (r.current.style.display = "");
        const i = document.createElement("canvas");
        i.width = e.w * o, i.height = e.h * o, i.getContext("2d").drawImage(
          y,
          e.x * o,
          e.y * o,
          e.w * o,
          e.h * o,
          0,
          0,
          e.w * o,
          e.h * o
        ), i.toBlob((l) => {
          l && u(new File([l], `screenshot-${Date.now()}.png`, { type: "image/png" }));
        }, "image/png");
      },
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        cursor: "crosshair",
        userSelect: "none",
        backgroundColor: "rgba(0,0,0,0.25)"
      },
      children: [
        n && n.w > 2 && n.h > 2 && /* @__PURE__ */ s("div", { style: {
          position: "absolute",
          left: n.x,
          top: n.y,
          width: n.w,
          height: n.h,
          border: "2px solid #1565C0",
          backgroundColor: "rgba(255,255,255,0.15)",
          boxSizing: "border-box"
        } }),
        /* @__PURE__ */ a("div", { style: {
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 12,
          alignItems: "center",
          background: "rgba(0,0,0,0.7)",
          borderRadius: 8,
          padding: "10px 20px",
          pointerEvents: "none"
        }, children: [
          /* @__PURE__ */ s("span", { style: { color: "#fff", fontSize: 14 }, children: n && n.w > 2 ? "שחרר כדי לצלם" : "גרור לבחירת אזור במסך" }),
          /* @__PURE__ */ s(
            "button",
            {
              onMouseDown: (e) => e.stopPropagation(),
              onClick: p,
              style: {
                background: "transparent",
                color: "#fff",
                border: "1px solid #fff",
                borderRadius: 6,
                padding: "4px 14px",
                cursor: "pointer",
                fontSize: 14,
                pointerEvents: "auto"
              },
              children: "ביטול"
            }
          )
        ] })
      ]
    }
  );
}
export {
  C as ScreenCropOverlay
};
