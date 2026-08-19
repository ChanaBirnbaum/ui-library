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

  // The 288px design width is a preferred width, not a floor - pinned without a
  // cap it makes every field (IpsAutocomplete included, since its input is an
  // IpsTextField) overflow any container narrower than that instead of
  // shrinking with it.
  it('caps the text field width to its container', () => {
    const theme = createIpsTheme('light')
    const root = (theme.components?.MuiTextField?.styleOverrides as any)?.root

    expect(root).toMatchObject({
      width: '288px',
      maxWidth: '100%',
      // Emotion serialises these overrides after FormControl's own fullWidth
      // variant and folds both into one class, so a plain `width` here would
      // quietly win over an explicitly requested fullWidth.
      '&.MuiFormControl-fullWidth': { width: '100%' },
    })
  })
})
