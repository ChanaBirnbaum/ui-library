import React, { forwardRef, useState, useRef, useCallback, useEffect } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
import { useTheme, alpha } from '@mui/material/styles'
import type { IpsCarouselProps, IpsCarouselDotContext, IpsCarouselArrowContext } from './IpsCarousel.types'

const ChevronLeftIcon = () => (
  <SvgIcon><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></SvgIcon>
)
const ChevronRightIcon = () => (
  <SvgIcon><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></SvgIcon>
)
const PlayIcon = () => <SvgIcon><path d="M8 5v14l11-7z" /></SvgIcon>
const PauseIcon = () => <SvgIcon><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></SvgIcon>

const SWIPE_THRESHOLD = 40

export const IpsCarousel = forwardRef<HTMLDivElement, IpsCarouselProps>((props, ref) => {
  const {
    items = [],
    activeIndex: controlledIndex,
    defaultIndex = 0,
    onIndexChange,
    autoPlay = true,
    respectReducedMotion = false,
    interval = 5000,
    loop = true,
    pauseOnHover = true,
    swipeable = true,
    showArrows = false,
    showDots = true,
    dotsClickable = true,
    showPlayPause = false,
    transition = 'slide',
    height,
    aspectRatio,
    rtl,
    idPrefix = 'ips-carousel',
    renderDot,
    renderArrow,
    sx,
  } = props

  const theme = useTheme()
  const isRtl = rtl ?? (theme.direction === 'rtl')

  const isControlled = controlledIndex !== undefined
  const [internalIndex, setInternalIndex] = useState(defaultIndex)
  const current = isControlled ? controlledIndex! : internalIndex
  const count = items.length

  // Capture at mount — does not change across renders
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  ).current

  const [hoverPaused, setHoverPaused] = useState(false)
  const [manualPaused, setManualPaused] = useState(false)

  const canAutoPlay = autoPlay && (!respectReducedMotion || !prefersReducedMotion) && count > 1
  const playing = canAutoPlay && !hoverPaused && !manualPaused

  // Ref so the auto-play interval always reads the latest index without being
  // recreated on every index change.
  const currentRef = useRef(current)
  currentRef.current = current

  const goTo = useCallback(
    (next: number) => {
      if (isControlled) {
        onIndexChange?.(next)
      } else {
        setInternalIndex(next)
        onIndexChange?.(next)
      }
    },
    [isControlled, onIndexChange],
  )

  const goPrev = useCallback(() => {
    const prev = currentRef.current - 1
    if (prev < 0) {
      if (loop) goTo(count - 1)
    } else {
      goTo(prev)
    }
  }, [loop, count, goTo])

  const goNext = useCallback(() => {
    const next = currentRef.current + 1
    if (next >= count) {
      if (loop) goTo(0)
    } else {
      goTo(next)
    }
  }, [loop, count, goTo])

  // Auto-play: start/clear based on whether we should be playing
  useEffect(() => {
    if (!playing) return
    const timer = setInterval(() => {
      const idx = currentRef.current
      if (!loop && idx >= count - 1) return
      const next = idx + 1 >= count ? 0 : idx + 1
      if (isControlled) {
        onIndexChange?.(next)
      } else {
        setInternalIndex(next)
        onIndexChange?.(next)
      }
    }, interval)
    return () => clearInterval(timer)
  }, [playing, loop, count, interval, isControlled, onIndexChange])

  // Swipe / drag support
  const swipeStart = useRef<number | null>(null)

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!swipeable) return
    swipeStart.current = e.clientX
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!swipeable || swipeStart.current === null) return
    const delta = e.clientX - swipeStart.current
    swipeStart.current = null
    if (Math.abs(delta) < SWIPE_THRESHOLD) return
    // In RTL the swipe direction is mirrored
    const goForward = isRtl ? delta > 0 : delta < 0
    if (goForward) goNext()
    else goPrev()
  }

  const prevDisabled = !loop && current === 0
  const nextDisabled = !loop && current === count - 1

  // Arrow icons flip in RTL so ← always means "back" and → always means "forward"
  const PrevIcon = isRtl ? ChevronRightIcon : ChevronLeftIcon
  const NextIcon = isRtl ? ChevronLeftIcon : ChevronRightIcon

  const buildArrow = (ctx: IpsCarouselArrowContext) =>
    renderArrow ? (
      renderArrow(ctx)
    ) : (
      <IconButton
        className="ips-carousel-arrow"
        onClick={ctx.onClick}
        disabled={ctx.disabled}
        size="small"
        aria-label={ctx.direction === 'prev' ? 'Previous slide' : 'Next slide'}
        sx={{
          bgcolor: 'transparent',
          border: 'none',
          '&:hover': { bgcolor: 'transparent' },
          '&.Mui-disabled': { opacity: 0.3 },
        }}
      >
        {ctx.direction === 'prev' ? <PrevIcon /> : <NextIcon />}
      </IconButton>
    )

  const buildDot = (ctx: IpsCarouselDotContext) =>
    renderDot ? (
      renderDot(ctx)
    ) : (
      <Box
        component="button"
        onClick={ctx.onClick}
        disabled={!dotsClickable}
        aria-label={`Go to slide ${ctx.index + 1}`}
        aria-current={ctx.active ? 'true' : undefined}
        sx={{
          width: ctx.active ? 20 : 8,
          height: 8,
          borderRadius: 999,
          border: 'none',
          cursor: dotsClickable ? 'pointer' : 'default',
          bgcolor: ctx.active
            ? 'primary.main'
            : alpha(theme.palette.primary.main, 0.3),
          p: 0,
          flexShrink: 0,
          transition: prefersReducedMotion ? 'none' : 'all 0.2s ease',
        }}
      />
    )

  // Always transition — never jump straight to the next slide.
  const animMs = 500

  // Viewport size constraints
  const viewportSx: Record<string, unknown> = { overflow: 'hidden', position: 'relative' }
  if (height !== undefined) viewportSx.height = height
  if (aspectRatio !== undefined) viewportSx.aspectRatio = String(aspectRatio)

  if (count === 0) return null

  return (
    <Box
      ref={ref}
      role="region"
      aria-roledescription="carousel"
      aria-label={idPrefix}
      className="ips-carousel"
      onMouseEnter={pauseOnHover && canAutoPlay ? () => setHoverPaused(true) : undefined}
      onMouseLeave={pauseOnHover && canAutoPlay ? () => setHoverPaused(false) : undefined}
      onFocus={pauseOnHover && canAutoPlay ? () => setHoverPaused(true) : undefined}
      onBlur={pauseOnHover && canAutoPlay ? () => setHoverPaused(false) : undefined}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      sx={{
        position: 'relative',
        userSelect: 'none',
        '&:hover .ips-carousel-arrow-wrap, &:focus-within .ips-carousel-arrow-wrap': { opacity: 1 },
        ...sx,
      }}
    >
      {/* Viewport */}
      <Box className="ips-carousel-viewport" sx={viewportSx}>
        {transition === 'slide' ? (
          // Slide: a track wide enough to hold all slides, translated to show current
          <Box
            sx={{
              display: 'flex',
              width: `${count * 100}%`,
              // translateX(-i * slideWidth) where slideWidth = 100%/count of track
              transform: `translateX(-${current * (100 / count)}%)`,
              transition: animMs ? `transform ${animMs}ms ease-in-out` : 'none',
            }}
          >
            {items.map((item, i) => (
              <Box
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                id={`${idPrefix}-slide-${i}`}
                className="ips-carousel-slide"
                sx={{ width: `${100 / count}%`, flexShrink: 0 }}
              >
                {item}
              </Box>
            ))}
          </Box>
        ) : (
          // Fade: all slides stacked, only the current one is opaque
          <Box sx={{ position: 'relative' }}>
            {items.map((item, i) => (
              <Box
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                id={`${idPrefix}-slide-${i}`}
                className="ips-carousel-slide"
                sx={{
                  position: i === current ? 'relative' : 'absolute',
                  inset: i === current ? 'auto' : 0,
                  width: '100%',
                  opacity: i === current ? 1 : 0,
                  transition: animMs ? `opacity ${animMs}ms ease-in-out` : 'none',
                  pointerEvents: i === current ? 'auto' : 'none',
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {/* Prev arrow */}
      {showArrows && count > 1 && (
        <Box
          className="ips-carousel-arrow-wrap"
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translate(-100%, -50%)',
            zIndex: 1,
            opacity: 0,
            transition: 'opacity 0.2s ease',
          }}
        >
          {buildArrow({ direction: 'prev', disabled: prevDisabled, onClick: goPrev })}
        </Box>
      )}

      {/* Next arrow */}
      {showArrows && count > 1 && (
        <Box
          className="ips-carousel-arrow-wrap"
          sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translate(100%, -50%)',
            zIndex: 1,
            opacity: 0,
            transition: 'opacity 0.2s ease',
          }}
        >
          {buildArrow({ direction: 'next', disabled: nextDisabled, onClick: goNext })}
        </Box>
      )}

      {/* Bottom bar: play/pause + dots */}
      {(showDots || showPlayPause) && count > 1 && (
        <Box
          className="ips-carousel-dots"
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1, gap: 0.5 }}
        >
          {showPlayPause && (
            <IconButton
              size="small"
              onClick={() => setManualPaused((p) => !p)}
              aria-label={manualPaused ? 'Play' : 'Pause'}
            >
              {manualPaused ? <PlayIcon /> : <PauseIcon />}
            </IconButton>
          )}
          {showDots &&
            items.map((_, i) => {
              const ctx: IpsCarouselDotContext = {
                index: i,
                active: i === current,
                onClick: () => { if (dotsClickable) goTo(i) },
              }
              return <React.Fragment key={i}>{buildDot(ctx)}</React.Fragment>
            })}
        </Box>
      )}
    </Box>
  )
})

IpsCarousel.displayName = 'IpsCarousel'
