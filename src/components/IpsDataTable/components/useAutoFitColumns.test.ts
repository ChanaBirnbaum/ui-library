import { distributeColumnWidths, MIN_AUTO_COLUMN_WIDTH } from './useAutoFitColumns'

describe('distributeColumnWidths', () => {
  it('caps nothing when the columns already fit', () => {
    const naturals = { id: 60, name: 140, notes: 200 }
    expect(distributeColumnWidths(naturals, {}, 800)).toEqual({})
  })

  it('shrinks only the long column and leaves the short ones at content width', () => {
    // 60 + 140 + 900 = 1100 natural, 600 available.
    const naturals = { id: 60, name: 140, notes: 900 }
    const result = distributeColumnWidths(naturals, {}, 600)
    expect(Object.keys(result)).toEqual(['notes'])
    // notes gets what is left after id and name are served in full.
    expect(result.notes).toBe(400)
  })

  it('splits the shortfall between the columns that are still too wide', () => {
    const naturals = { id: 60, a: 500, b: 500 }
    const result = distributeColumnWidths(naturals, {}, 600)
    expect(Object.keys(result).sort()).toEqual(['a', 'b'])
    expect(result.a).toBe(270)
    expect(result.b).toBe(270)
  })

  it('excludes pinned columns from the share and honours their width', () => {
    const naturals = { _actions: 120, id: 60, notes: 900 }
    const result = distributeColumnWidths(naturals, { _actions: 100 }, 600)
    expect(result._actions).toBeUndefined()
    // 600 - 100 pinned - 60 for id = 440 left for notes.
    expect(result.notes).toBe(440)
  })

  it('never shrinks a column below the floor, even with no room', () => {
    const naturals = { a: 400, b: 400, c: 400, d: 400 }
    const result = distributeColumnWidths(naturals, {}, 100)
    expect(Object.values(result)).toEqual([
      MIN_AUTO_COLUMN_WIDTH,
      MIN_AUTO_COLUMN_WIDTH,
      MIN_AUTO_COLUMN_WIDTH,
      MIN_AUTO_COLUMN_WIDTH,
    ])
  })

  it('gives every column the same share when they are all equally long', () => {
    const naturals = { a: 300, b: 300, c: 300 }
    const result = distributeColumnWidths(naturals, {}, 600)
    expect(result).toEqual({ a: 200, b: 200, c: 200 })
  })

  it('caps nothing when every column is pinned', () => {
    const naturals = { a: 300, b: 300 }
    expect(distributeColumnWidths(naturals, { a: 300, b: 300 }, 100)).toEqual({})
  })
})
