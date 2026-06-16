import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { ThemeProvider } from '@mui/material'
import { ipsTheme } from '../../theme/ipsTheme'
import { IpsCarousel } from './IpsCarousel'

const wrap = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={ipsTheme}>{ui}</ThemeProvider>)

const slides = [
  <div key="a">Slide A</div>,
  <div key="b">Slide B</div>,
  <div key="c">Slide C</div>,
]

// Helpers
const getDots = () => screen.getAllByRole('button', { name: /Go to slide/ })
const activeDotIndex = () => getDots().findIndex((d) => d.getAttribute('aria-current') === 'true')

describe('IpsCarousel', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  // ── content ────────────────────────────────────────────────────────────────

  test('renders slides verbatim', () => {
    wrap(<IpsCarousel items={slides} autoPlay={false} />)
    expect(screen.getByText('Slide A')).toBeInTheDocument()
    expect(screen.getByText('Slide B')).toBeInTheDocument()
    expect(screen.getByText('Slide C')).toBeInTheDocument()
  })

  test('returns null for 0 items', () => {
    const { container } = wrap(<IpsCarousel items={[]} />)
    expect(container.firstChild).toBeNull()
  })

  test('no dots or arrows for 1 item', () => {
    wrap(
      <IpsCarousel items={[<div key="a">Single</div>]} showArrows showDots autoPlay />,
    )
    expect(document.querySelector('.ips-carousel-dots')).toBeNull()
    expect(document.querySelector('.ips-carousel-arrow')).toBeNull()
  })

  test('has displayName IpsCarousel', () => {
    expect(IpsCarousel.displayName).toBe('IpsCarousel')
  })

  // ── auto-play ──────────────────────────────────────────────────────────────

  test('uncontrolled: auto-advances after interval', () => {
    wrap(<IpsCarousel items={slides} autoPlay interval={1000} showDots />)
    expect(activeDotIndex()).toBe(0)

    act(() => { jest.advanceTimersByTime(1000) })
    expect(activeDotIndex()).toBe(1)

    act(() => { jest.advanceTimersByTime(1000) })
    expect(activeDotIndex()).toBe(2)
  })

  test('timer is cleared on unmount', () => {
    const spy = jest.spyOn(global, 'clearInterval')
    const { unmount } = wrap(<IpsCarousel items={slides} autoPlay interval={1000} />)
    unmount()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })

  test('pauses on hover when pauseOnHover', () => {
    wrap(<IpsCarousel items={slides} autoPlay interval={1000} pauseOnHover showDots />)
    const root = document.querySelector('.ips-carousel')!

    fireEvent.mouseEnter(root)
    act(() => { jest.advanceTimersByTime(3000) })
    expect(activeDotIndex()).toBe(0)

    fireEvent.mouseLeave(root)
    act(() => { jest.advanceTimersByTime(1000) })
    expect(activeDotIndex()).toBe(1)
  })

  test('pauses on focus when pauseOnHover', () => {
    wrap(<IpsCarousel items={slides} autoPlay interval={1000} pauseOnHover showDots />)
    const root = document.querySelector('.ips-carousel')!

    fireEvent.focus(root)
    act(() => { jest.advanceTimersByTime(3000) })
    expect(activeDotIndex()).toBe(0)

    fireEvent.blur(root)
    act(() => { jest.advanceTimersByTime(1000) })
    expect(activeDotIndex()).toBe(1)
  })

  // ── controlled mode ────────────────────────────────────────────────────────

  test('controlled mode: only calls onIndexChange, never changes internal state', () => {
    const onIndexChange = jest.fn()
    wrap(
      <IpsCarousel
        items={slides}
        activeIndex={0}
        onIndexChange={onIndexChange}
        autoPlay
        interval={1000}
        showDots
      />,
    )
    act(() => { jest.advanceTimersByTime(1000) })
    expect(onIndexChange).toHaveBeenCalledWith(1)
    // Displayed slide must still be 0 — parent never updated activeIndex
    expect(activeDotIndex()).toBe(0)
  })

  // ── loop ───────────────────────────────────────────────────────────────────

  test('loop: wraps from last back to first', () => {
    wrap(<IpsCarousel items={slides} autoPlay interval={1000} loop showDots />)
    // Separate act() per step so React re-renders between fires and currentRef updates
    act(() => { jest.advanceTimersByTime(1000) }) // → 1
    act(() => { jest.advanceTimersByTime(1000) }) // → 2
    expect(activeDotIndex()).toBe(2)
    act(() => { jest.advanceTimersByTime(1000) }) // wraps → 0
    expect(activeDotIndex()).toBe(0)
  })

  test('non-loop: stops auto-play at last slide', () => {
    wrap(
      <IpsCarousel items={slides} autoPlay interval={1000} loop={false} defaultIndex={2} showDots />,
    )
    act(() => { jest.advanceTimersByTime(3000) })
    expect(activeDotIndex()).toBe(2)
  })

  test('non-loop: next arrow disabled at last slide', () => {
    wrap(<IpsCarousel items={slides} showArrows loop={false} defaultIndex={2} />)
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeDisabled()
  })

  test('non-loop: prev arrow disabled at first slide', () => {
    wrap(<IpsCarousel items={slides} showArrows loop={false} />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeDisabled()
  })

  test('loop: arrow not disabled at ends', () => {
    wrap(<IpsCarousel items={slides} showArrows loop />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).not.toBeDisabled()
    expect(screen.getByRole('button', { name: 'Next slide' })).not.toBeDisabled()
  })

  // ── arrow navigation ───────────────────────────────────────────────────────

  test('next arrow advances slide', () => {
    wrap(<IpsCarousel items={slides} showArrows showDots autoPlay={false} />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(activeDotIndex()).toBe(1)
  })

  test('prev arrow goes back', () => {
    wrap(<IpsCarousel items={slides} showArrows showDots autoPlay={false} defaultIndex={2} />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(activeDotIndex()).toBe(1)
  })

  test('loop: next arrow wraps to first from last', () => {
    wrap(<IpsCarousel items={slides} showArrows showDots autoPlay={false} loop defaultIndex={2} />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(activeDotIndex()).toBe(0)
  })

  // ── dots ───────────────────────────────────────────────────────────────────

  test('dot click navigates to slide', () => {
    wrap(<IpsCarousel items={slides} showDots dotsClickable autoPlay={false} />)
    fireEvent.click(getDots()[2])
    expect(activeDotIndex()).toBe(2)
  })

  test('aria-current on active dot only', () => {
    wrap(<IpsCarousel items={slides} showDots autoPlay={false} />)
    const dots = getDots()
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[1]).not.toHaveAttribute('aria-current')
    expect(dots[2]).not.toHaveAttribute('aria-current')
  })

  // ── prefers-reduced-motion ─────────────────────────────────────────────────

  test('prefers-reduced-motion disables auto-play', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
    wrap(<IpsCarousel items={slides} autoPlay interval={1000} showDots />)
    act(() => { jest.advanceTimersByTime(5000) })
    // Must still be on slide 0 — auto-play disabled
    expect(activeDotIndex()).toBe(0)
  })

  // ── render overrides ───────────────────────────────────────────────────────

  test('renderDot renders custom dot', () => {
    const renderDot = jest.fn(({ index, active, onClick }) => (
      <button key={index} onClick={onClick} data-testid={`cdot-${index}`} data-active={active}>
        {index}
      </button>
    ))
    wrap(<IpsCarousel items={slides} showDots renderDot={renderDot} autoPlay={false} />)
    expect(screen.getByTestId('cdot-0')).toBeInTheDocument()
    expect(renderDot).toHaveBeenCalledTimes(3)
  })

  test('renderArrow renders custom arrow', () => {
    const renderArrow = jest.fn(({ direction, onClick }) => (
      <button onClick={onClick} data-testid={`carrow-${direction}`}>{direction}</button>
    ))
    wrap(<IpsCarousel items={slides} showArrows renderArrow={renderArrow} autoPlay={false} />)
    expect(screen.getByTestId('carrow-prev')).toBeInTheDocument()
    expect(screen.getByTestId('carrow-next')).toBeInTheDocument()
  })
})
