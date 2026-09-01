/**
 * Regression tests for the Emotion cache plumbing.
 *
 * The failure these guard against: when a consumer lists `@emotion/cache` in
 * a webpack Module Federation `shared` block, its default export — a
 * function — can arrive wrapped as `{ default: fn }`, and `createCache(...)`
 * throws "X is not a function" from inside a provider.
 */
const REGISTRY_KEY = '__IPS_EMOTION_CACHES__'

type RtlUtils = typeof import('./rtlUtils')

const loadRtlUtils = (cacheModuleFactory?: () => unknown): RtlUtils => {
  let mod!: RtlUtils
  jest.isolateModules(() => {
    if (cacheModuleFactory) jest.doMock('@emotion/cache', cacheModuleFactory)
    mod = require('./rtlUtils') as RtlUtils
  })
  return mod
}

const realCreateCache = () =>
  jest.requireActual('@emotion/cache').default as RtlUtils['createRtlCache']

beforeEach(() => {
  delete (globalThis as Record<string, unknown>)[REGISTRY_KEY]
  jest.resetModules()
  jest.dontMock('@emotion/cache')
})

describe('createRtlCache / createLtrCache', () => {
  it('creates caches under the documented keys', () => {
    const { createRtlCache, createLtrCache, RTL_CACHE_KEY, LTR_CACHE_KEY } =
      loadRtlUtils()

    expect(createRtlCache().key).toBe(RTL_CACHE_KEY)
    expect(createLtrCache().key).toBe(LTR_CACHE_KEY)
  })

  it('returns one shared instance per key across calls', () => {
    const { createRtlCache, createLtrCache } = loadRtlUtils()

    expect(createRtlCache()).toBe(createRtlCache())
    expect(createLtrCache()).toBe(createLtrCache())
    expect(createRtlCache()).not.toBe(createLtrCache())
  })

  it('reuses a cache another copy of the library already registered', () => {
    const first = loadRtlUtils().createRtlCache()

    // A second bundled copy of this library, as in host + MFE.
    const second = loadRtlUtils().createRtlCache()

    expect(second).toBe(first)
  })

  it('passes the RTL stylis plugin to the RTL cache only', () => {
    const spy = jest.fn(realCreateCache())
    const { createRtlCache, createLtrCache } = loadRtlUtils(() => ({
      __esModule: true,
      default: spy,
    }))

    createRtlCache()
    createLtrCache()

    expect(spy).toHaveBeenNthCalledWith(1, {
      key: 'muirtl',
      stylisPlugins: [expect.any(Function)],
    })
    expect(spy).toHaveBeenNthCalledWith(2, { key: 'muiltr' })
  })
})

describe('createCache interop resolution', () => {
  it('unwraps a Module-Federation double-wrapped default export', () => {
    const { createRtlCache } = loadRtlUtils(() => ({
      __esModule: true,
      // What federation's extra interop layer hands back: { default: fn }
      default: { default: realCreateCache() },
    }))

    expect(createRtlCache().key).toBe('muirtl')
  })

  it('unwraps a default export nested several interop layers deep', () => {
    const { createRtlCache } = loadRtlUtils(() => ({
      __esModule: true,
      default: { default: { default: realCreateCache() } },
    }))

    expect(createRtlCache().key).toBe('muirtl')
  })

  it('accepts a named createCache export when no default is usable', () => {
    const { createRtlCache } = loadRtlUtils(() => ({
      __esModule: true,
      default: undefined,
      createCache: realCreateCache(),
    }))

    expect(createRtlCache().key).toBe('muirtl')
  })

  it('throws an actionable error when nothing callable is exposed', () => {
    const { createRtlCache } = loadRtlUtils(() => ({
      __esModule: true,
      default: {},
    }))

    expect(() => createRtlCache()).toThrow(/Module Federation `shared` block/)
  })
})
