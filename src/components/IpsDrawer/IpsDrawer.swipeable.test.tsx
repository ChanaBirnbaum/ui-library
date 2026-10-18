import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsDrawer } from './IpsDrawer'

// Regression guard for the bottom sheet: SwipeableDrawer keeps its own ref on the paper and uses it
// on every touch. A ref passed in slotProps.paper replaces that internal ref, and with
// @mui/material 7.3.11+ the first touch inside the sheet crashes ("reading 'contains'").
// Older patch versions only skip the swipe, so the props are checked directly.

const mockSwipeableDrawer = jest.fn((_props: Record<string, any>) => null)

jest.mock('@mui/material/SwipeableDrawer', () => ({
  __esModule: true,
  default: (props: Record<string, any>) => mockSwipeableDrawer(props),
}))

const theme = createTheme()

describe('IpsDrawer bottom sheet wiring', () => {
  beforeEach(() => mockSwipeableDrawer.mockClear())

  it('uses SwipeableDrawer for a temporary bottom sheet', () => {
    render(
      <ThemeProvider theme={theme}>
        <IpsDrawer open anchor="bottom" title="T">{null}</IpsDrawer>
      </ThemeProvider>
    )
    expect(mockSwipeableDrawer).toHaveBeenCalled()
  })

  it('passes the forwarded ref through PaperProps, never inside slotProps.paper', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <ThemeProvider theme={theme}>
        <IpsDrawer open anchor="bottom" title="T" ref={ref}>{null}</IpsDrawer>
      </ThemeProvider>
    )
    const props = mockSwipeableDrawer.mock.calls[0][0]
    expect(props.PaperProps.ref).toBe(ref)
    expect(props.slotProps.paper.ref).toBeUndefined()
  })
})
