import { useState as g, useRef as M, useLayoutEffect as y } from "react";
const O = 64, m = {};
function I({
  enabled: s,
  containerRef: n,
  availableWidth: r,
  signature: e,
  pinnedWidths: f
}) {
  const [i, l] = g({ widths: m, measured: null }), c = M(null), a = M(f);
  a.current = f;
  const d = s && i.measured === e, t = d ? i.widths : m;
  return y(() => {
    if (!s) {
      c.current = null, l((o) => o.measured === null ? o : { widths: m, measured: null });
      return;
    }
    const u = n.current;
    if (!u || r <= 0) return;
    i.measured !== e && (c.current = x(u));
    const h = c.current;
    if (!h) return;
    const w = C(h, a.current, r);
    l(
      (o) => o.measured === e && S(o.widths, w) ? o : { widths: w, measured: e }
    );
  }, [s, n, r, e, i.measured]), { widths: t, isMeasuring: s && !d };
}
function x(s) {
  const n = {};
  return s.querySelectorAll("thead [data-col-id]").forEach((r) => {
    const e = r.dataset.colId;
    if (!e) return;
    const f = Math.ceil(r.getBoundingClientRect().width);
    n[e] = Math.max(n[e] ?? 0, f);
  }), n;
}
function C(s, n, r) {
  const e = Object.entries(s).map(
    ([t, u]) => [t, n[t] ?? u]
  );
  if (e.reduce((t, [, u]) => t + u, 0) <= r + 1) return m;
  let i = r;
  const l = [];
  for (const t of e)
    t[0] in n ? i -= t[1] : l.push(t);
  if (l.length === 0) return m;
  const c = [...l].sort((t, u) => t[1] - u[1]), a = {};
  let d = c.length;
  for (let t = 0; t < c.length; t++) {
    const u = i / d, [, h] = c[t];
    if (h <= u) {
      i -= h, d--;
      continue;
    }
    const w = Math.max(Math.floor(u), O);
    for (let o = t; o < c.length; o++) a[c[o][0]] = w;
    break;
  }
  return a;
}
function S(s, n) {
  const r = Object.keys(s);
  return r.length !== Object.keys(n).length ? !1 : r.every((e) => s[e] === n[e]);
}
export {
  O as MIN_AUTO_COLUMN_WIDTH,
  C as distributeColumnWidths,
  I as useAutoFitColumns
};
