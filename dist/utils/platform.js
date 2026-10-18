const s = /iPad|iPhone|iPod/, e = /Macintosh/, i = "Apple";
function a() {
  if (typeof navigator > "u")
    return !1;
  const t = (navigator.vendor ?? "").startsWith(i), n = s.test(navigator.userAgent), o = e.test(navigator.userAgent) && navigator.maxTouchPoints >= 2;
  return t && (n || o);
}
export {
  a as isIosWebKit
};
