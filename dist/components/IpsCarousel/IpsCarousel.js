import { jsxs as U, jsx as t } from "react/jsx-runtime";
import ue, { forwardRef as pe, useState as M, useRef as k, useCallback as R, useEffect as fe } from "react";
import n from "@mui/material/Box";
import V from "@mui/material/IconButton";
import w from "@mui/material/SvgIcon";
import { useTheme as he, alpha as me } from "@mui/material/styles";
const Y = () => /* @__PURE__ */ t(w, { children: /* @__PURE__ */ t("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) }), G = () => /* @__PURE__ */ t(w, { children: /* @__PURE__ */ t("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) }), ve = () => /* @__PURE__ */ t(w, { children: /* @__PURE__ */ t("path", { d: "M8 5v14l11-7z" }) }), be = () => /* @__PURE__ */ t(w, { children: /* @__PURE__ */ t("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }) }), we = 40, xe = pe((W, q) => {
  const {
    items: p = [],
    activeIndex: N,
    defaultIndex: J = 0,
    onIndexChange: i,
    autoPlay: K = !0,
    interval: S = 5e3,
    loop: a = !0,
    pauseOnHover: f = !0,
    swipeable: z = !0,
    showArrows: C = !1,
    showDots: D = !0,
    dotsClickable: x = !0,
    showPlayPause: L = !1,
    transition: Q = "slide",
    height: E,
    aspectRatio: H,
    rtl: Z,
    idPrefix: P = "ips-carousel",
    renderDot: A,
    renderArrow: F,
    sx: ee
  } = W, _ = he(), g = Z ?? _.direction === "rtl", d = N !== void 0, [oe, j] = M(J), s = d ? N : oe, r = p.length, y = k(
    typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current, [te, h] = M(!1), [I, re] = M(!1), u = K && !y && r > 1, B = u && !te && !I, m = k(s);
  m.current = s;
  const l = R(
    (e) => {
      d || j(e), i == null || i(e);
    },
    [d, i]
  ), T = R(() => {
    const e = m.current - 1;
    e < 0 ? a && l(r - 1) : l(e);
  }, [a, r, l]), X = R(() => {
    const e = m.current + 1;
    e >= r ? a && l(0) : l(e);
  }, [a, r, l]);
  fe(() => {
    if (!B) return;
    const e = setInterval(() => {
      const o = m.current;
      if (!a && o >= r - 1) return;
      const c = o + 1 >= r ? 0 : o + 1;
      d || j(c), i == null || i(c);
    }, S);
    return () => clearInterval(e);
  }, [B, a, r, S, d, i]);
  const v = k(null), ie = (e) => {
    z && (v.current = e.clientX);
  }, se = (e) => {
    if (!z || v.current === null) return;
    const o = e.clientX - v.current;
    if (v.current = null, Math.abs(o) < we) return;
    (g ? o > 0 : o < 0) ? X() : T();
  }, ne = !a && s === 0, ae = !a && s === r - 1, le = g ? G : Y, ce = g ? Y : G, O = (e) => F ? F(e) : /* @__PURE__ */ t(
    V,
    {
      className: "ips-carousel-arrow",
      onClick: e.onClick,
      disabled: e.disabled,
      size: "small",
      "aria-label": e.direction === "prev" ? "Previous slide" : "Next slide",
      sx: {
        bgcolor: "rgba(255,255,255,0.85)",
        "&:hover": { bgcolor: "white" },
        "&.Mui-disabled": { opacity: 0.3 }
      },
      children: e.direction === "prev" ? /* @__PURE__ */ t(le, {}) : /* @__PURE__ */ t(ce, {})
    }
  ), de = (e) => A ? A(e) : /* @__PURE__ */ t(
    n,
    {
      component: "button",
      onClick: e.onClick,
      disabled: !x,
      "aria-label": `Go to slide ${e.index + 1}`,
      "aria-current": e.active ? "true" : void 0,
      sx: {
        width: e.active ? 20 : 8,
        height: 8,
        borderRadius: 999,
        border: "none",
        cursor: x ? "pointer" : "default",
        bgcolor: e.active ? "primary.main" : me(_.palette.primary.main, 0.3),
        p: 0,
        flexShrink: 0,
        transition: y ? "none" : "all 0.2s ease"
      }
    }
  ), b = y ? 0 : 350, $ = { overflow: "hidden", position: "relative" };
  return E !== void 0 && ($.height = E), H !== void 0 && ($.aspectRatio = String(H)), r === 0 ? null : /* @__PURE__ */ U(
    n,
    {
      ref: q,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": P,
      className: "ips-carousel",
      onMouseEnter: f && u ? () => h(!0) : void 0,
      onMouseLeave: f && u ? () => h(!1) : void 0,
      onFocus: f && u ? () => h(!0) : void 0,
      onBlur: f && u ? () => h(!1) : void 0,
      onPointerDown: ie,
      onPointerUp: se,
      sx: { position: "relative", userSelect: "none", ...ee },
      children: [
        /* @__PURE__ */ t(n, { className: "ips-carousel-viewport", sx: $, children: Q === "slide" ? (
          // Slide: a track wide enough to hold all slides, translated to show current
          /* @__PURE__ */ t(
            n,
            {
              sx: {
                display: "flex",
                width: `${r * 100}%`,
                // translateX(-i * slideWidth) where slideWidth = 100%/count of track
                transform: `translateX(-${s * (100 / r)}%)`,
                transition: b ? `transform ${b}ms ease-in-out` : "none"
              },
              children: p.map((e, o) => /* @__PURE__ */ t(
                n,
                {
                  role: "group",
                  "aria-roledescription": "slide",
                  "aria-label": `${o + 1} of ${r}`,
                  id: `${P}-slide-${o}`,
                  className: "ips-carousel-slide",
                  sx: { width: `${100 / r}%`, flexShrink: 0 },
                  children: e
                },
                o
              ))
            }
          )
        ) : (
          // Fade: all slides stacked, only the current one is opaque
          /* @__PURE__ */ t(n, { sx: { position: "relative" }, children: p.map((e, o) => /* @__PURE__ */ t(
            n,
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `${o + 1} of ${r}`,
              id: `${P}-slide-${o}`,
              className: "ips-carousel-slide",
              sx: {
                position: o === s ? "relative" : "absolute",
                inset: o === s ? "auto" : 0,
                width: "100%",
                opacity: o === s ? 1 : 0,
                transition: b ? `opacity ${b}ms ease-in-out` : "none",
                pointerEvents: o === s ? "auto" : "none"
              },
              children: e
            },
            o
          )) })
        ) }),
        C && r > 1 && /* @__PURE__ */ t(n, { sx: { position: "absolute", top: "50%", left: 8, transform: "translateY(-50%)", zIndex: 1 }, children: O({ direction: "prev", disabled: ne, onClick: T }) }),
        C && r > 1 && /* @__PURE__ */ t(n, { sx: { position: "absolute", top: "50%", right: 8, transform: "translateY(-50%)", zIndex: 1 }, children: O({ direction: "next", disabled: ae, onClick: X }) }),
        (D || L) && r > 1 && /* @__PURE__ */ U(
          n,
          {
            className: "ips-carousel-dots",
            sx: { display: "flex", justifyContent: "center", alignItems: "center", mt: 1, gap: 0.5 },
            children: [
              L && /* @__PURE__ */ t(
                V,
                {
                  size: "small",
                  onClick: () => re((e) => !e),
                  "aria-label": I ? "Play" : "Pause",
                  children: I ? /* @__PURE__ */ t(ve, {}) : /* @__PURE__ */ t(be, {})
                }
              ),
              D && p.map((e, o) => {
                const c = {
                  index: o,
                  active: o === s,
                  onClick: () => {
                    x && l(o);
                  }
                };
                return /* @__PURE__ */ t(ue.Fragment, { children: de(c) }, o);
              })
            ]
          }
        )
      ]
    }
  );
});
xe.displayName = "IpsCarousel";
export {
  xe as IpsCarousel
};
