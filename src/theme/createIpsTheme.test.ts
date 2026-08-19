import { createIpsTheme } from './createIpsTheme'

describe('createIpsTheme', () => {
  // One value governs every component: the typography tokens carry no family of
  // their own, and MUI stamps theme.typography.fontFamily onto the parts that do
  // not inherit (Chip labels above all).
  it.each(['light', 'dark'] as const)('leads with Rubik in %s mode', (mode) => {
    const theme = createIpsTheme(mode)
    expect(theme.typography.fontFamily).toBe('"Rubik", "Heebo", "Inter", sans-serif')
  })

  // The tokens set size/weight/spacing only. MUI fills its own variants in from
  // the shared family and leaves custom ones (display) to inherit - either way,
  // no variant may pin a family of its own.
  it('keeps every typography variant on the shared family', () => {
    const theme = createIpsTheme('light')
    const variants = [
      'display',
      'h1',
      'h2',
      'h3',
      'h4',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'button',
      'caption',
      'overline',
    ] as const

    const divergent = variants.filter((variant) => {
      const family = (theme.typography as Record<string, any>)[variant]
        .fontFamily
      return family !== undefined && family !== theme.typography.fontFamily
    })

    expect(divergent).toEqual([])
  })
})
