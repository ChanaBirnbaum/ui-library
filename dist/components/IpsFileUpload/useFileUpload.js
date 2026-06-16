import { useState as y, useCallback as i } from "react";
import { buildUploadUrl as $ } from "../../utils/uploadUtils.js";
function z(M) {
  const {
    sviva: m,
    system: p,
    uploadParams: u = {},
    uploadMethod: h,
    maxFileSizeMB: l = 10,
    onBeforeSave: c,
    onSaveSuccess: r,
    onSaveError: n
  } = M, [o, f] = y([]), [w, F] = y(!1), b = i((a) => {
    const e = l * 1024 * 1024, s = a.map((t) => t.size > e ? {
      file: t,
      hasError: !0,
      errorMessage: `הקובץ חורג מהגודל המותר (${l} MB)`
    } : { file: t, hasError: !1 });
    f((t) => [...t, ...s]);
  }, [l]), g = i((a) => {
    f((e) => e.filter(({ file: s }) => s !== a));
  }, []), d = i(() => {
    f([]);
  }, []), v = i(async () => {
    if (c && !await c())
      return;
    F(!0);
    const a = [];
    try {
      for (const { file: e } of o) {
        const s = new FormData();
        s.append("file", e), Object.entries(u).forEach(([E, U]) => s.append(E, U));
        const t = await fetch($(m, p, h), {
          method: "POST",
          body: s
        });
        if (!t.ok)
          throw new Error(`Upload failed for ${e.name}: ${t.statusText}`);
        const B = await t.json();
        a.push({ name: e.name, path: B.path });
      }
      r == null || r(a), d();
    } catch (e) {
      n == null || n(e);
    } finally {
      F(!1);
    }
  }, [o, u, m, p, h, c, r, n, d]), x = o.length > 0 && !o.some((a) => a.hasError) && !w;
  return {
    files: o,
    addFiles: b,
    removeFile: g,
    clearAll: d,
    saveFiles: v,
    loading: w,
    canSave: x
  };
}
export {
  z as useFileUpload
};
