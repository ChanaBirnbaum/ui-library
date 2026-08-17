import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { IpsTextField } from '../IpsTextField';
import { mergeSlotProps, toSxArray } from '../../utils/slotUtils';
import { listDensity } from '../../utils/listDensity';
import { thinScrollbarSx } from '../../utils/scrollbarSx';
import { ChipOverflowToggle } from '../internal/ChipOverflowToggle';
import type { IpsAutocompleteProps } from './IpsAutocomplete.types';

// Tags beyond this count collapse behind the expand toggle, as in IpsChipSelect.
const DEFAULT_MAX_VISIBLE_CHIPS = 3;

// Cap for the popup height (~9 dense rows), matching IpsChipSelect's menu.
const DEFAULT_MAX_LIST_HEIGHT = 320;

// Gap kept between the popup and the viewport edge.
const VIEWPORT_MARGIN = 16;

// Below this the list is too cramped to be usable, so it opens above the field
// instead of being squeezed into what is left below it.
const MIN_LIST_HEIGHT = 160;

const defaultOptionLabel = (option: any) =>
  typeof option === 'string' ? option : option?.label || String(option);

// The 48px row and 8px list padding live on the listbox, so the sx that
// overrides them has to sit on the listbox slot to win on specificity.
const listboxSx = {
  py: listDensity.listPaddingY,
  '& .MuiAutocomplete-option': {
    minHeight: listDensity.optionMinHeight,
    py: listDensity.optionPaddingY,
    px: listDensity.optionPaddingX,
  },
} as const;

// Popper defaults to clipping against the nearest scrolling ancestor, which is
// exactly what cuts the list off when the field sits inside a dialog/popover.
// The popup is portalled to the body, so the viewport is the only boundary that
// genuinely applies to it. Flipping is ours to decide - we measure the room
// around the field and cap the list to it, and popper flipping on its own would
// fight both that cap and the squared-off edge that joins list to input.
const popperModifiers = [
  {
    name: 'preventOverflow',
    options: { boundary: 'viewport', padding: VIEWPORT_MARGIN },
  },
  { name: 'flip', enabled: false },
];

/**
 * Highest z-index stacked around the field. MUI parks the popup at
 * zIndex.modal, i.e. level with a Dialog/Popover rather than above it, and a
 * hand-rolled overlay can sit anywhere at all - so the popup is lifted past
 * whatever it actually opens inside of instead of a fixed guess.
 */
const stackingLevelAround = (element: HTMLElement) => {
  let max = 0;
  for (
    let node: HTMLElement | null = element;
    node;
    node = node.parentElement
  ) {
    const zIndex = Number.parseInt(
      window.getComputedStyle(node).zIndex ?? '',
      10
    );
    if (Number.isFinite(zIndex)) max = Math.max(max, zIndex);
  }
  return max;
};

/** Stable hook on the popup for consumers' outside-click handlers. */
export const IPS_AUTOCOMPLETE_POPUP_CLASS = 'ips-autocomplete-popup';
const POPUP_CLASS = IPS_AUTOCOMPLETE_POPUP_CLASS;

const optionCheckboxSx = { p: listDensity.checkboxPadding } as const;

export const IpsAutocomplete = forwardRef<
  HTMLDivElement,
  IpsAutocompleteProps<any, any, any, any>
>((props, ref) => {
  const {
    showCheckboxes = true,
    className,
    multiple = false,
    renderOption,
    renderInput,
    disabled = false,
    loading = false,
    label,
    slotProps,
    renderTags,
    getOptionLabel = defaultOptionLabel,
    // A multi-select that closes after every pick makes selecting several items
    // needlessly slow; single-select still closes as usual.
    disableCloseOnSelect = multiple,
    maxVisibleChips = DEFAULT_MAX_VISIBLE_CHIPS,
    maxListHeight = DEFAULT_MAX_LIST_HEIGHT,
    collapseChipsTooltip = 'הצג פחות',
    moreItemsTooltipLabel = (count: number) => `ועוד ${count}`,
    sx,
    open: openProp,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    ...rest
  } = props;

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';
  const [chipsExpanded, setChipsExpanded] = useState(false);

  // The popup anchors to the field row rather than to the Autocomplete root:
  // the root also spans the label above the input and the helper text below it,
  // and anchoring to it leaves the list floating away from the input instead of
  // opening straight out of it.
  const rootRef = useRef<HTMLDivElement | null>(null);
  const setRootRef = useCallback(
    (node: HTMLDivElement | null) => {
      rootRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    },
    [ref]
  );

  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = openProp ?? internalOpen;

  const [anchor, setAnchor] = useState<{
    el: HTMLElement;
    width: number;
    above: boolean;
    available: number;
    fontFamily: string;
  } | null>(null);

  const measureAnchor = useCallback(() => {
    const root = rootRef.current;
    if (!root || typeof window === 'undefined') return;

    const el = (root.querySelector('.MuiInputBase-root') as HTMLElement) ?? root;
    const rect = el.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom - VIEWPORT_MARGIN;
    const spaceAbove = rect.top - VIEWPORT_MARGIN;
    const above = spaceBelow < MIN_LIST_HEIGHT && spaceAbove > spaceBelow;
    const available = Math.max(
      above ? spaceAbove : spaceBelow,
      MIN_LIST_HEIGHT
    );
    // The popup is portalled to the body, so it inherits nothing from the app
    // shell around the field and MUI stamps the theme font onto the paper.
    // Reading the family off the field keeps the list in whatever font the
    // field itself ended up with - theme, stylesheet or a local override.
    const fontFamily = window.getComputedStyle(el).fontFamily;

    // Scrolling fires this on every frame; keeping the previous object when
    // nothing moved keeps the popup out of the re-render loop.
    setAnchor((prev) =>
      prev &&
      prev.el === el &&
      prev.above === above &&
      prev.fontFamily === fontFamily &&
      Math.abs(prev.width - rect.width) < 1 &&
      Math.abs(prev.available - available) < 1
        ? prev
        : { el, width: rect.width, above, available, fontFamily }
    );
  }, []);

  // Measured once per open rather than with the geometry: it walks the whole
  // ancestor chain, and nothing about scrolling can change it.
  const [popupZIndex, setPopupZIndex] = useState<number | null>(null);

  // The field can move under an open popup - the page scrolls, the dialog
  // holding it scrolls, the window resizes.
  useEffect(() => {
    if (!isOpen || typeof window === 'undefined') return undefined;
    measureAnchor();
    if (rootRef.current) {
      setPopupZIndex(stackingLevelAround(rootRef.current) + 1);
    }
    window.addEventListener('resize', measureAnchor);
    window.addEventListener('scroll', measureAnchor, true);
    return () => {
      window.removeEventListener('resize', measureAnchor);
      window.removeEventListener('scroll', measureAnchor, true);
    };
  }, [isOpen, measureAnchor]);

  const handleOpen = (event: React.SyntheticEvent) => {
    // Measured here as well as in the effect so the first paint of the popup
    // already lands on the right side of the field.
    measureAnchor();
    setInternalOpen(true);
    onOpenProp?.(event);
  };

  const handleClose = (event: React.SyntheticEvent, reason: any) => {
    setInternalOpen(false);
    onCloseProp?.(event, reason);
  };

  // Custom renderOption with checkboxes
  const customRenderOption = (
    props: React.HTMLAttributes<HTMLLIElement> & { key: React.Key },
    option: any,
    { selected }: { selected: boolean }
  ) => {
    const { key, ...restProps } = props as React.HTMLAttributes<HTMLLIElement> & { key: string }
    // If custom renderOption provided, use it
    if (typeof renderOption === 'function') {
      const customResult = (renderOption as any)(restProps, option, { selected });
      return customResult;
    }

    // Default rendering
    const showCheckbox = multiple && showCheckboxes;
    const optionLabel = getOptionLabel(option);

    return (
      <li key={key} {...restProps}>
        {showCheckbox && (
          <Checkbox
            checked={selected}
            disableRipple
            sx={[
              optionCheckboxSx,
              isRtl
                ? { ml: listDensity.checkboxGap }
                : { mr: listDensity.checkboxGap },
            ]}
          />
        )}
        {optionLabel}
      </li>
    );
  };

  const handleToggleChips = (event: React.MouseEvent) => {
    // Without this the click reaches the autocomplete root, which opens the
    // popup and refocuses the input.
    event.stopPropagation();
    event.preventDefault();
    if (disabled) return;
    setChipsExpanded((expanded) => !expanded);
  };

  // Custom renderTags collapsing everything past maxVisibleChips
  const customRenderTags = (value: any[], getTagProps: any, ownerState: any) => {
    if (typeof renderTags === 'function') {
      return renderTags(value, getTagProps, ownerState);
    }

    const hasOverflow = maxVisibleChips > 0 && value.length > maxVisibleChips;
    const visible =
      hasOverflow && !chipsExpanded ? value.slice(0, maxVisibleChips) : value;
    const hidden = hasOverflow ? value.slice(maxVisibleChips) : [];

    return (
      <>
        {visible.map((option, index) => {
          const { key, ...tagProps } = getTagProps({ index });
          return (
            <Chip
              key={key}
              size="small"
              label={getOptionLabel(option)}
              {...tagProps}
            />
          );
        })}
        {hasOverflow && (
          <ChipOverflowToggle
            hiddenLabels={hidden.map(getOptionLabel)}
            expanded={chipsExpanded}
            disabled={disabled}
            collapseTooltip={collapseChipsTooltip}
            moreItemsLabel={moreItemsTooltipLabel}
            onToggle={handleToggleChips}
          />
        )}
      </>
    );
  };

  // Custom renderInput using IpsTextField
  const customRenderInput = (params: any) => {
    if (renderInput) {
      return renderInput(params);
    }
    return <IpsTextField {...params} label={label} />;
  };

  const rootClass = ['ips-autocomplete', className]
    .filter(Boolean)
    .join(' ');

  // The list must never grow past the room actually left around the field -
  // that overflow is what gets clipped when the field sits inside a popup.
  const listMaxHeight =
    anchor == null
      ? maxListHeight
      : typeof maxListHeight === 'number'
        ? Math.min(maxListHeight, anchor.available)
        : `min(${maxListHeight}, ${anchor.available}px)`;

  // Open, the field and the list read as one control: the edge they share loses
  // its radius and the list carries the field's outline on round to its own
  // bottom (or top, when it opens upwards).
  const joinsAtTop = anchor?.above === true;

  const openFieldSx: SxProps<Theme> = {
    // The notched outline inherits its radius from the input root, so squaring
    // the root squares the border the user actually sees.
    '& .MuiOutlinedInput-root': joinsAtTop
      ? { borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }
      : { borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' },
  };

  // MUI puts body1 (16px) on the autocomplete paper, while every other Ips list
  // - IpsChipSelect's options included - reads at body2 (14px).
  const paperSx: SxProps<Theme> = (muiTheme: Theme) => ({
    typography: 'body2',
    border: `1px solid ${muiTheme.palette.grey[300]}`,
    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
    ...(joinsAtTop
      ? {
          borderBottom: 'none',
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
        }
      : {
          borderTop: 'none',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
        }),
  });

  const mergedSlotProps = {
    ...slotProps,
    popper: mergeSlotProps(slotProps?.popper, (resolved) => ({
      placement: joinsAtTop ? 'top-start' : 'bottom-start',
      modifiers: popperModifiers,
      ...(anchor ? { anchorEl: anchor.el } : null),
      // Portalled to the body, the list is outside the DOM of whatever popup
      // holds the field, so a click on an option looks like an outside click
      // and closes that popup. This class is the hook such a handler needs to
      // recognise the list as part of the field: `target.closest(...)`.
      className: POPUP_CLASS,
      ...resolved,
      // MUI sizes the popup from the Autocomplete root, which is wider than the
      // input whenever the field does not fill it. Inline, because that is what
      // MUI sets and an sx class cannot outrank it.
      style: { ...(anchor ? { width: anchor.width } : null), ...resolved?.style },
      sx: [
        { zIndex: Math.max(theme.zIndex.tooltip, popupZIndex ?? 0) },
        ...toSxArray(resolved?.sx),
      ],
    })),
    paper: mergeSlotProps(slotProps?.paper, (resolved) => ({
      ...resolved,
      // The font follows the field in its own array entry: `typography: body2`
      // above carries the theme family with it, and a later entry is the one
      // way to be sure the field's family is what survives the merge.
      sx: [
        paperSx,
        ...(anchor?.fontFamily ? [{ fontFamily: anchor.fontFamily }] : []),
        ...toSxArray(resolved?.sx),
      ],
    })),
    listbox: mergeSlotProps(slotProps?.listbox, (resolved) => ({
      ...resolved,
      sx: [
        listboxSx,
        { maxHeight: listMaxHeight },
        thinScrollbarSx,
        ...toSxArray(resolved?.sx),
      ],
    })),
    // Tags default to the medium chip (13px); small (12px) matches the chips
    // IpsChipSelect renders. This only touches the chip, not the input height.
    chip: mergeSlotProps(slotProps?.chip, (resolved) => ({
      size: 'small',
      ...resolved,
    })),
  };

  return (
    <Autocomplete
      ref={setRootRef}
      multiple={multiple}
      disabled={disabled}
      loading={loading}
      renderOption={customRenderOption}
      renderInput={customRenderInput}
      renderTags={customRenderTags}
      getOptionLabel={getOptionLabel}
      disableCloseOnSelect={disableCloseOnSelect}
      open={openProp}
      onOpen={handleOpen}
      onClose={handleClose}
      className={rootClass}
      slotProps={mergedSlotProps as any}
      sx={
        [
          ...(isOpen ? [openFieldSx] : []),
          ...toSxArray(sx),
        ] as SxProps<Theme>
      }
      {...rest}
    />
  );
});

IpsAutocomplete.displayName = 'IpsAutocomplete';

export default IpsAutocomplete;
