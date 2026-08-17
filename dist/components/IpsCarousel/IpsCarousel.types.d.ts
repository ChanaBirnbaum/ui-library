import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

export interface IpsCarouselDotContext {
    index: number;
    active: boolean;
    onClick: () => void;
}
export interface IpsCarouselArrowContext {
    direction: 'prev' | 'next';
    /** true at an end when loop is false */
    disabled: boolean;
    onClick: () => void;
}
export interface IpsCarouselProps {
    /** Ordered list of slides — each is any component, rendered verbatim. */
    items: ReactNode[];
    /** Controlled current index. When set, component is controlled. */
    activeIndex?: number;
    /** Initial index (uncontrolled mode). */
    defaultIndex?: number;
    /** Fired whenever the active slide changes (auto or manual). */
    onIndexChange?: (index: number) => void;
    autoPlay?: boolean;
    /**
     * Respect the OS/browser `prefers-reduced-motion: reduce` setting by disabling
     * auto-play when it's active. Default false — auto-play ignores that preference
     * unless explicitly opted in. Set to true to have auto-play defer to it.
     */
    respectReducedMotion?: boolean;
    /** Auto-advance interval in ms. */
    interval?: number;
    /** Wrap around past the first/last slide. */
    loop?: boolean;
    /** Pause auto-play while hovered or focused. */
    pauseOnHover?: boolean;
    /** Allow touch/drag to change slides. */
    swipeable?: boolean;
    /** Show left/right arrows for manual navigation. */
    showArrows?: boolean;
    /** Show bottom indicator dots. */
    showDots?: boolean;
    /** Clicking a dot jumps to that slide. */
    dotsClickable?: boolean;
    /** Show a play/pause control. */
    showPlayPause?: boolean;
    /** Animation between slides. */
    transition?: 'slide' | 'fade';
    /** Fixed viewport height (px or CSS). */
    height?: number | string;
    /** Viewport aspect ratio (e.g. 16/9 or '16/9'). */
    aspectRatio?: number | string;
    /** Mirror arrow direction and slide motion. */
    rtl?: boolean;
    /** Prefix for generated aria ids. */
    idPrefix?: string;
    /** Override dot rendering. */
    renderDot?: (ctx: IpsCarouselDotContext) => ReactNode;
    /** Override arrow rendering. */
    renderArrow?: (ctx: IpsCarouselArrowContext) => ReactNode;
    sx?: SxProps<Theme>;
}
