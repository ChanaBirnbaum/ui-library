function t(s) {
  const u = [], n = /* @__PURE__ */ new Map();
  s.forEach((o) => {
    if (!o.group) {
      u.push(o);
      return;
    }
    const r = n.get(o.group) ?? [];
    r.push(o), n.set(o.group, r);
  });
  const p = Array.from(n, ([o, r]) => ({
    group: o,
    options: r
  }));
  return u.length > 0 ? [{ group: null, options: u }, ...p] : p;
}
export {
  t as groupOptions
};
