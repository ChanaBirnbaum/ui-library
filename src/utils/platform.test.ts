import { isIosWebKit } from './platform'

const IPHONE_UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
const MAC_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
const WINDOWS_CHROME_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'

// jsdom does not define every navigator property (e.g. maxTouchPoints), so they are defined per test
function setNavigatorProperty(property: string, value: unknown) {
  Object.defineProperty(window.navigator, property, { value, configurable: true })
}

function mockNavigator({ userAgent, vendor, maxTouchPoints = 0 }: { userAgent: string; vendor: string; maxTouchPoints?: number }) {
  setNavigatorProperty('userAgent', userAgent)
  setNavigatorProperty('vendor', vendor)
  setNavigatorProperty('maxTouchPoints', maxTouchPoints)
}

describe('isIosWebKit', () => {
  afterEach(() => {
    // Removes the own properties, so navigator falls back to jsdom's defaults
    ;['userAgent', 'vendor', 'maxTouchPoints'].forEach((property) => {
      delete (window.navigator as unknown as Record<string, unknown>)[property]
    })
  })

  it('is true on a real iPhone', () => {
    mockNavigator({ userAgent: IPHONE_UA, vendor: 'Apple Computer, Inc.', maxTouchPoints: 5 })
    expect(isIosWebKit()).toBe(true)
  })

  it('is true on iPadOS, which reports a Mac user agent', () => {
    mockNavigator({ userAgent: MAC_UA, vendor: 'Apple Computer, Inc.', maxTouchPoints: 5 })
    expect(isIosWebKit()).toBe(true)
  })

  it('is false on a desktop Mac', () => {
    mockNavigator({ userAgent: MAC_UA, vendor: 'Apple Computer, Inc.', maxTouchPoints: 0 })
    expect(isIosWebKit()).toBe(false)
  })

  it('is false in desktop Chrome emulating an iPhone', () => {
    mockNavigator({ userAgent: IPHONE_UA, vendor: 'Google Inc.', maxTouchPoints: 1 })
    expect(isIosWebKit()).toBe(false)
  })

  it('is false on desktop Chrome', () => {
    mockNavigator({ userAgent: WINDOWS_CHROME_UA, vendor: 'Google Inc.' })
    expect(isIosWebKit()).toBe(false)
  })
})
