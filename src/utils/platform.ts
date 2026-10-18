const IOS_DEVICE_PATTERN = /iPad|iPhone|iPod/
const MAC_PATTERN = /Macintosh/
const APPLE_VENDOR_PREFIX = 'Apple'
const MIN_TOUCH_POINTS_FOR_IPAD = 2

/**
 * True on a real iPhone / iPad browser. Every iOS browser is WebKit, so its vendor is Apple.
 * Desktop devtools device emulation changes only the user agent and keeps the desktop vendor,
 * so it returns false there — on purpose, since desktop browsers render native controls differently.
 */
export function isIosWebKit(): boolean {
  if (typeof navigator === 'undefined') {
    return false
  }

  const isAppleVendor = (navigator.vendor ?? '').startsWith(APPLE_VENDOR_PREFIX)
  const isIosDevice = IOS_DEVICE_PATTERN.test(navigator.userAgent)
  // iPadOS 13+ reports a Mac user agent; touch support tells it apart from a real Mac
  const isIpadOs =
    MAC_PATTERN.test(navigator.userAgent) && navigator.maxTouchPoints >= MIN_TOUCH_POINTS_FOR_IPAD

  return isAppleVendor && (isIosDevice || isIpadOs)
}
