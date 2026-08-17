import { jsxs as U, jsx as o } from "react/jsx-runtime";
import pe, { forwardRef as fe, useState as I, useRef as M, useCallback as $, useEffect as me } from "react";
import n from "@mui/material/Box";
import V from "@mui/material/IconButton";
import w from "@mui/material/SvgIcon";
import { useTheme as he, alpha as ve } from "@mui/material/styles";
const G = () => /* @__PURE__ */ o(w, { children: /* @__PURE__ */ o("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) }), W = () => /* @__PURE__ */ o(w, { children: /* @__PURE__ */ o("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) }), we = () => /* @__PURE__ */ o(w, { children: /* @__PURE__ */ o("path", { d: "M8 5v14l11-7z" }) }), be = () => /* @__PURE__ */ o(w, { children: /* @__PURE__ */ o("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }) }), xe = 40, ye = fe((q, J) => {
  const {
    items: p = [],
    activeIndex: k,
    defaultIndex: K = 0,
    onIndexChange: s,
    autoPlay: Q = !0,
    respectReducedMotion: Y = !1,
    interval: N = 5e3,
    loop: a = !0,
    pauseOnHover: f = !0,
    swipeable: R = !0,
    showArrows: S = !1,
    showDots: z = !0,
    dotsClickable: b = !0,
    showPlayPause: C = !1,
    transition: Z = "slide",
    height: D,
    aspectRatio: L,
    rtl: ee,
    idPrefix: x = "ips-carousel",
    renderDot: E,
    renderArrow: H,
    sx: re
  } = q, A = he(), y = ee ?? A.direction === "rtl", d = k !== void 0, [oe, F] = I(K), i = d ? k : oe, t = p.length, _ = M(
    typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current, [te, m] = I(!1), [P, se] = I(!1), u = Q && (!Y || !_) && t > 1, j = u && !te && !P, h = M(i);
  h.current = i;
  const l = $(
    (e) => {
      d || F(e), s == null || s(e);
    },
    [d, s]
  ), B = $(() => {
    const e = h.current - 1;
    e < 0 ? a && l(t - 1) : l(e);
  }, [a, t, l]), T = $(() => {
    const e = h.current + 1;
    e >= t ? a && l(0) : l(e);
  }, [a, t, l]);
  me(() => {
    if (!j) return;
    const e = setInterval(() => {
      const r = h.current;
      if (!a && r >= t - 1) return;
      const c = r + 1 >= t ? 0 : r + 1;
      d || F(c), s == null || s(c);
    }, N);
    return () => clearInterval(e);
  }, [j, a, t, N, d, s]);
  const v = M(null), ie = (e) => {
    R && (v.current = e.clientX);
  }, ne = (e) => {
    if (!R || v.current === null) return;
    const r = e.clientX - v.current;
    if (v.current = null, Math.abs(r) < xe) return;
    (y ? r > 0 : r < 0) ? T() : B();
  }, ae = !a && i === 0, le = !a && i === t - 1, ce = y ? W : G, de = y ? G : W, X = (e) => H ? H(e) : /* @__PURE__ */ o(
    V,
    {
      className: "ips-carousel-arrow",
      onClick: e.onClick,
      disabled: e.disabled,
      size: "small",
      "aria-label": e.direction === "prev" ? "Previous slide" : "Next slide",
      sx: {
        bgcolor: "transparent",
        border: "none",
        "&:hover": { bgcolor: "transparent" },
        "&.Mui-disabled": { opacity: 0.3 }
      },
      children: e.direction === "prev" ? /* @__PURE__ */ o(ce, {}) : /* @__PURE__ */ o(de, {})
    }
  ), ue = (e) => E ? E(e) : /* @__PURE__ */ o(
    n,
    {
      component: "button",
      onClick: e.onClick,
      disabled: !b,
      "aria-label": `Go to slide ${e.index + 1}`,
      "aria-current": e.active ? "true" : void 0,
      sx: {
        width: e.active ? 20 : 8,
        height: 8,
        borderRadius: 999,
        border: "none",
        cursor: b ? "pointer" : "default",
        bgcolor: e.active ? "primary.main" : ve(A.palette.primary.main, 0.3),
        p: 0,
        flexShrink: 0,
        transition: _ ? "none" : "all 0.2s ease"
      }
    }
  ), O = 500, g = { overflow: "hidden", position: "relative" };
  return D !== void 0 && (g.height = D), L !== void 0 && (g.aspectRatio = String(L)), t === 0 ? null : /* @__PURE__ */ U(
    n,
    {
      ref: J,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": x,
      className: "ips-carousel",
      onMouseEnter: f && u ? () => m(!0) : void 0,
      onMouseLeave: f && u ? () => m(!1) : void 0,
      onFocus: f && u ? () => m(!0) : void 0,
      onBlur: f && u ? () => m(!1) : void 0,
      onPointerDown: ie,
      onPointerUp: ne,
      sx: {
        position: "relative",
        userSelect: "none",
        "&:hover .ips-carousel-arrow-wrap, &:focus-within .ips-carousel-arrow-wrap": { opacity: 1 },
        ...re
      },
      children: [
        /* @__PURE__ */ o(n, { className: "ips-carousel-viewport", sx: g, children: Z === "slide" ? (
          // Slide: a track wide enough to hold all slides, translated to show current
          /* @__PURE__ */ o(
            n,
            {
              sx: {
                display: "flex",
                width: `${t * 100}%`,
                // translateX(-i * slideWidth) where slideWidth = 100%/count of track
                transform: `translateX(-${i * (100 / t)}%)`,
                transition: `transform ${O}ms ease-in-out`
              },
              children: p.map((e, r) => /* @__PURE__ */ o(
                n,
                {
                  role: "group",
                  "aria-roledescription": "slide",
                  "aria-label": `${r + 1} of ${t}`,
                  id: `${x}-slide-${r}`,
                  className: "ips-carousel-slide",
                  sx: { width: `${100 / t}%`, flexShrink: 0 },
                  children: e
                },
                r
              ))
            }
          )
        ) : (
          // Fade: all slides stacked, only the current one is opaque
          /* @__PURE__ */ o(n, { sx: { position: "relative" }, children: p.map((e, r) => /* @__PURE__ */ o(
            n,
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `${r + 1} of ${t}`,
              id: `${x}-slide-${r}`,
              className: "ips-carousel-slide",
              sx: {
                position: r === i ? "relative" : "absolute",
                inset: r === i ? "auto" : 0,
                width: "100%",
                opacity: r === i ? 1 : 0,
                transition: `opacity ${O}ms ease-in-out`,
                pointerEvents: r === i ? "auto" : "none"
              },
              children: e
            },
            r
          )) })
        ) }),
        S && t > 1 && /* @__PURE__ */ o(
          n,
          {
            className: "ips-carousel-arrow-wrap",
            sx: {
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translate(-100%, -50%)",
              zIndex: 1,
              opacity: 0,
              transition: "opacity 0.2s ease"
            },
            children: X({ direction: "prev", disabled: ae, onClick: B })
          }
        ),
        S && t > 1 && /* @__PURE__ */ o(
          n,
          {
            className: "ips-carousel-arrow-wrap",
            sx: {
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translate(100%, -50%)",
              zIndex: 1,
              opacity: 0,
              transition: "opacity 0.2s ease"
            },
            children: X({ direction: "next", disabled: le, onClick: T })
          }
        ),
        (z || C) && t > 1 && /* @__PURE__ */ U(
          n,
          {
            className: "ips-carousel-dots",
            sx: { display: "flex", justifyContent: "center", alignItems: "center", mt: 1, gap: 0.5 },
            children: [
              C && /* @__PURE__ */ o(
                V,
                {
                  size: "small",
                  onClick: () => se((e) => !e),
                  "aria-label": P ? "Play" : "Pause",
                  children: P ? /* @__PURE__ */ o(we, {}) : /* @__PURE__ */ o(be, {})
                }
              ),
              z && p.map((e, r) => {
                const c = {
                  index: r,
                  active: r === i,
                  onClick: () => {
                    b && l(r);
                  }
                };
                return /* @__PURE__ */ o(pe.Fragment, { children: ue(c) }, r);
              })
            ]
          }
        )
      ]
    }
  );
});
ye.displayName = "IpsCarousel";
export {
  ye as IpsCarousel
};
