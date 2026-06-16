import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, Box, Typography } from '@mui/material'
import { ipsTheme } from '../../theme/ipsTheme'
import { IpsCarousel } from './IpsCarousel'
import type { IpsCarouselProps } from './IpsCarousel.types'

const meta: Meta<typeof IpsCarousel> = {
  title: 'Components/IpsCarousel',
  component: IpsCarousel,
  decorators: [
    (Story) => (
      <ThemeProvider theme={ipsTheme}>
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<IpsCarouselProps>

const SLIDE_COLORS = ['#1565C0', '#2E7D32', '#C62828', '#F57F17', '#6A1B9A']

const sampleSlides = SLIDE_COLORS.map((color, i) => (
  <Box
    key={i}
    sx={{
      height: 200,
      bgcolor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
    }}
  >
    <Typography variant="h3" color="white" fontWeight={700}>
      {i + 1}
    </Typography>
  </Box>
))

export const AutoPlay: Story = {
  render: (args) => <IpsCarousel {...args} items={sampleSlides} />,
  args: { autoPlay: true, showDots: true, interval: 3000 },
}

export const ManualArrows: Story = {
  render: (args) => <IpsCarousel {...args} items={sampleSlides} />,
  args: { showArrows: true, showDots: true, autoPlay: false },
}

export const ClickableDots: Story = {
  render: (args) => <IpsCarousel {...args} items={sampleSlides} />,
  args: { showDots: true, dotsClickable: true, autoPlay: false },
}

export const FadeTransition: Story = {
  render: (args) => <IpsCarousel {...args} items={sampleSlides} />,
  args: { transition: 'fade', showArrows: true, showDots: true, autoPlay: false },
}

export const NoLoop: Story = {
  render: (args) => <IpsCarousel {...args} items={sampleSlides} />,
  args: { loop: false, showArrows: true, showDots: true, autoPlay: true, interval: 2000 },
}

export const SingleItem: Story = {
  render: (args) => <IpsCarousel {...args} items={[sampleSlides[0]]} />,
  args: { showArrows: true, showDots: true, autoPlay: true },
}

export const PauseOnHover: Story = {
  render: (args) => (
    <Box>
      <IpsCarousel {...args} items={sampleSlides} />
      <Typography variant="body2" sx={{ mt: 1, textAlign: 'center', color: 'text.secondary' }}>
        Hover over the carousel to pause auto-play
      </Typography>
    </Box>
  ),
  args: { autoPlay: true, interval: 1500, pauseOnHover: true, showDots: true },
}

export const PlayPauseControl: Story = {
  render: (args) => <IpsCarousel {...args} items={sampleSlides} />,
  args: { autoPlay: true, showDots: true, showPlayPause: true, interval: 2000 },
}

export const FixedHeight: Story = {
  render: (args) => <IpsCarousel {...args} items={sampleSlides} />,
  args: { height: 200, showArrows: true, showDots: true, autoPlay: false },
}

export const AspectRatio: Story = {
  render: (args) => <IpsCarousel {...args} items={sampleSlides} />,
  args: { aspectRatio: '16/9', showArrows: true, showDots: true, autoPlay: false },
}

export const CustomDots: Story = {
  render: (args) => (
    <IpsCarousel
      {...args}
      items={sampleSlides}
      renderDot={({ index, active, onClick }) => (
        <Box
          key={index}
          component="button"
          onClick={onClick}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={active ? 'true' : undefined}
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            border: '2px solid',
            borderColor: active ? 'primary.main' : 'grey.400',
            bgcolor: active ? 'primary.main' : 'transparent',
            cursor: 'pointer',
            p: 0,
            transition: 'all 0.2s',
          }}
        />
      )}
    />
  ),
  args: { showDots: true, autoPlay: false, showArrows: true },
}

export const CustomArrows: Story = {
  render: (args) => (
    <IpsCarousel
      {...args}
      items={sampleSlides}
      renderArrow={({ direction, disabled, onClick }) => (
        <Box
          component="button"
          onClick={onClick}
          disabled={disabled}
          aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
          sx={{
            px: 2,
            py: 1,
            bgcolor: 'primary.main',
            color: 'white',
            border: 'none',
            borderRadius: 1,
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.4 : 1,
            fontSize: 18,
          }}
        >
          {direction === 'prev' ? '◀' : '▶'}
        </Box>
      )}
    />
  ),
  args: { showArrows: true, showDots: true, autoPlay: false },
}

export const RTL: Story = {
  render: (args) => (
    <Box dir="rtl">
      <IpsCarousel {...args} items={sampleSlides} rtl />
    </Box>
  ),
  args: { showArrows: true, showDots: true, autoPlay: false },
}

export const Controlled: Story = {
  render: (args) => {
    const [index, setIndex] = useState(0)
    return (
      <Box>
        <IpsCarousel
          {...args}
          items={sampleSlides}
          activeIndex={index}
          onIndexChange={setIndex}
        />
        <Typography variant="body2" sx={{ mt: 1, textAlign: 'center', color: 'text.secondary' }}>
          Current index: {index}
        </Typography>
      </Box>
    )
  },
  args: { showArrows: true, showDots: true },
}

export const Swipeable: Story = {
  render: (args) => (
    <Box>
      <IpsCarousel {...args} items={sampleSlides} />
      <Typography variant="body2" sx={{ mt: 1, textAlign: 'center', color: 'text.secondary' }}>
        Drag or swipe to change slides
      </Typography>
    </Box>
  ),
  args: { swipeable: true, showDots: true, autoPlay: false },
}

export const ReducedMotion: Story = {
  render: (args) => (
    <Box>
      <IpsCarousel {...args} items={sampleSlides} />
      <Typography variant="body2" sx={{ mt: 1, textAlign: 'center', color: 'text.secondary' }}>
        When prefers-reduced-motion is active, auto-play is disabled and animations are suppressed.
      </Typography>
    </Box>
  ),
  args: { autoPlay: true, showDots: true, showArrows: true },
  parameters: {
    chromatic: { prefersReducedMotion: 'reduce' },
  },
}
