// Type declaration for the generated ./stylis-plugin-rtl.js — see
// scripts/vendor-stylis-rtl.mjs for how that file is produced. Mirrors
// stylis-plugin-rtl's own published .d.ts.
import type { Middleware } from 'stylis'

type MiddlewareParams = Parameters<Middleware>

declare function stylisRTLPlugin(
  element: MiddlewareParams[0],
  index: MiddlewareParams[1],
  children: MiddlewareParams[2],
  callback: MiddlewareParams[3]
): string | void

export default stylisRTLPlugin
