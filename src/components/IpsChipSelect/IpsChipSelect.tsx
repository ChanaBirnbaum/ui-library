
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import type { MenuProps } from '@mui/material/Menu';
import type { SxProps, Theme } from '@mui/material/styles';
import { mergeSlotProps, toSxArray } from '../../utils/slotUtils';
import { listDensity } from '../../utils/listDensity';
import { thinScrollbarSx } from '../../utils/scrollbarSx';
import { joinedFieldSx, popupSurfaceSx } from '../../utils/popupSurface';
import { ChipOverflowToggle } from '../internal/ChipOverflowToggle';
import type { IpsChipSelectProps } from './IpsChipSelect.types';

// Sentinel value for the injected "Select All" menu item. Kept out of the
// public value array at all times - it never reaches onChange/consumers.
const SELECT_ALL_VALUE = '__ips-chip-select-all__';

// Default cap for the dropdown height (~9 dense rows) so a long option list
// scrolls inside the popup instead of stretching over the whole page.
const DEFAULT_MAX_MENU_HEIGHT = 320;

// Popover keeps the paper this far from the viewport edge (its own default
// marginThreshold). Leaving the same gap free means it never has to push the
// paper away from the field to make it fit.
const VIEWPORT_MARGIN = 16;

// Below this the drop-down is too cramped to be usable, so we flip it above the
// field instead of squeezing it into the remaining space.
const MIN_MENU_HEIGHT = 160;

// Compact option row, shared with IpsAutocomplete's listbox.
const optionSx: SxProps<Theme> = {
  minHeight: listDensity.optionMinHeight,
  py: listDensity.optionPaddingY,
  px: listDensity.optionPaddingX,
};
const optionCheckboxSx: SxProps<Theme> = {
  p: listDensity.checkboxPadding,
  mr: listDensity.checkboxGap,
};

// Chips beyond this count collapse behind the expand toggle.
const DEFAULT_MAX_VISIBLE_CHIPS = 3;

const chipsBoxSx: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 0.5,
};

export const IpsChipSelect = forwardRef<HTMLSelectElement, IpsChipSelectProps>(
  (props, ref) => {
    const {
      options = [],
      value = [],
      onChange,
      label,
      placeholder,
      disabled = false,
      className,
      id: idProp,
      required,
      enableSelectAll = false,
      selectAllLabel = 'בחר הכל',
      allSelectedChipLabel = 'הכל נבחר',
      maxMenuHeight = DEFAULT_MAX_MENU_HEIGHT,
      maxVisibleChips = DEFAULT_MAX_VISIBLE_CHIPS,
      collapseChipsTooltip = 'הצג פחות',
      moreItemsTooltipLabel = (count: number) => `ועוד ${count}`,
      MenuProps: menuPropsProp,
      onOpen: onOpenProp,
      onClose: onCloseProp,
      ...rest
    } = props;

    const generatedId = useId();
    const inputId = idProp ?? generatedId;
    const labelId = `${inputId}-label`;

    const rootClass = ['ips-chip-select', className]
      .filter(Boolean)
      .join(' ');

    const selectedValues = value as (string | number)[];
    const allOptionValues = options.map((option) => option.value);
    const isAllSelected =
      enableSelectAll &&
      allOptionValues.length > 0 &&
      allOptionValues.every((v) => selectedValues.includes(v));

    // Popover never flips: when the paper does not fit below the field it just
    // pushes it back inside the viewport, and the popup ends up floating away
    // from the input. So measure the room around the field on open and hand the
    // menu a height it actually fits into - flipping above the field only when
    // there is too little room below.
    const anchorRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [placement, setPlacement] = useState<{
      above: boolean;
      available: number;
      width: number;
      fontFamily: string;
    } | null>(null);

    const updatePlacement = useCallback(() => {
      const anchor = anchorRef.current;
      if (!anchor || typeof window === 'undefined') return;

      // The menu anchors to the input row, not to the label sitting above it.
      const field = anchor.querySelector('.MuiInputBase-root') ?? anchor;
      const rect = field.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom - VIEWPORT_MARGIN;
      const spaceAbove = rect.top - VIEWPORT_MARGIN;
      const above = spaceBelow < MIN_MENU_HEIGHT && spaceAbove > spaceBelow;

      setPlacement({
        above,
        available: Math.max(above ? spaceAbove : spaceBelow, MIN_MENU_HEIGHT),
        // Select only gives the paper a minWidth, so a long option would make
        // the menu wider than the field and break the edge they share.
        width: rect.width,
        // The menu is portalled out of the app shell and MUI stamps the theme
        // font onto it, so the field's own family has to be carried over.
        fontFamily: window.getComputedStyle(field).fontFamily,
      });
    }, []);

    // The field can move under an open menu (window resize, zoom).
    useEffect(() => {
      if (!isOpen || typeof window === 'undefined') return undefined;
      window.addEventListener('resize', updatePlacement);
      return () => window.removeEventListener('resize', updatePlacement);
    }, [isOpen, updatePlacement]);

    const handleOpen = (event: React.SyntheticEvent) => {
      updatePlacement();
      setIsOpen(true);
      onOpenProp?.(event);
    };

    const handleClose = (event: React.SyntheticEvent | object) => {
      setIsOpen(false);
      onCloseProp?.(event as React.SyntheticEvent);
    };

    // Cap the popup height. Without a maxHeight MUI sizes the paper to fit every
    // option, which is what makes a long list span the whole page. `available`
    // keeps that cap within the room actually left around the field.
    const menuMaxHeight =
      placement == null
        ? maxMenuHeight
        : typeof maxMenuHeight === 'number'
          ? Math.min(maxMenuHeight, placement.available)
          : `min(${maxMenuHeight}, ${placement.available}px)`;

    // Open, the field and the menu read as one control - the same surface
    // IpsAutocomplete's list opens onto.
    const joinsAtTop = placement?.above === true;
    const surfaceSx = popupSurfaceSx({
      joinsAtTop,
      fontFamily: placement?.fontFamily,
      width: placement?.width,
    });

    // Only the vertical side is ours - Select aligns horizontally on 'center',
    // which stays correct in both LTR and RTL.
    const menuProps: Partial<MenuProps> = {
      anchorOrigin: {
        vertical: placement?.above ? 'top' : 'bottom',
        horizontal: 'center',
      },
      transformOrigin: {
        vertical: placement?.above ? 'bottom' : 'top',
        horizontal: 'center',
      },
      ...menuPropsProp,
      slotProps: {
        ...menuPropsProp?.slotProps,
        paper: mergeSlotProps(menuPropsProp?.slotProps?.paper, (resolved) => ({
          ...resolved,
          // The paper is what scrolls here (the cap sits on it, not on the
          // list), so the thin scrollbar belongs on it too.
          sx: [
            { maxHeight: menuMaxHeight },
            surfaceSx,
            thinScrollbarSx,
            ...toSxArray(resolved?.sx),
          ],
        })),
        list: mergeSlotProps(menuPropsProp?.slotProps?.list, (resolved) => ({
          dense: true,
          ...resolved,
          sx: [
            { py: listDensity.listPaddingY },
            ...toSxArray(resolved?.sx),
          ],
        })),
      } as MenuProps['slotProps'],
    };

    const [chipsExpanded, setChipsExpanded] = useState(false);

    // Looking every chip label up with options.find() is O(selected x options),
    // which bites exactly on the long lists this control is used with.
    const optionLabels = useMemo(
      () => new Map(options.map((option) => [option.value, option.label])),
      [options]
    );
    const getOptionLabel = (val: string | number) =>
      optionLabels.get(val) ?? String(val);

    const chipSx: SxProps<Theme> = {
      height: 24,
      // MUI stamps theme.typography.fontFamily onto every Chip, so a selected
      // value would keep the theme font even where the field carries another.
      fontFamily: 'inherit',
      '& .MuiChip-deleteIcon': {
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      },
    };

    const handleToggleChips = (event: React.MouseEvent) => {
      // Without this the click reaches the select display and opens the menu.
      event.stopPropagation();
      event.preventDefault();
      if (disabled) return;
      setChipsExpanded((expanded) => !expanded);
    };

    const handleDelete = (deletedValue: string | number) => {
      if (disabled) return;
      const newValue = selectedValues.filter((v) => v !== deletedValue);
      onChange?.(newValue);
    };

    const handleClearAll = () => {
      if (disabled) return;
      onChange?.([]);
    };

    const handleChange = (event: any) => {
      const rawValue = event.target.value as (string | number)[];

      // The "Select All" row is toggled - translate it into a select-all /
      // clear-all action instead of forwarding the sentinel value.
      if (enableSelectAll && rawValue.includes(SELECT_ALL_VALUE)) {
        onChange?.(isAllSelected ? [] : allOptionValues);
        return;
      }

      onChange?.(rawValue.filter((v) => v !== SELECT_ALL_VALUE));
    };

    // Custom renderValue to display chips
    const renderValue = (selected: any) => {
      const selectedArr = selected as (string | number)[];
      if (!selectedArr || selectedArr.length === 0) {
        return (
          <span style={{ color: '#999' }}>
            {placeholder || 'Select items...'}
          </span>
        );
      }

      if (isAllSelected) {
        return (
          <Box sx={chipsBoxSx}>
            <Chip
              label={allSelectedChipLabel}
              size="small"
              onDelete={handleClearAll}
              onMouseDown={(event) => event.stopPropagation()}
              disabled={disabled}
              sx={chipSx}
            />
          </Box>
        );
      }

      const hasOverflow =
        maxVisibleChips > 0 && selectedArr.length > maxVisibleChips;
      const visibleValues =
        hasOverflow && !chipsExpanded
          ? selectedArr.slice(0, maxVisibleChips)
          : selectedArr;
      const hiddenValues = hasOverflow
        ? selectedArr.slice(maxVisibleChips)
        : [];

      return (
        <Box
          sx={[
            chipsBoxSx,
            // Expanding a large selection must not blow up the field the way an
            // uncapped drop-down blows up the page.
            hasOverflow &&
              chipsExpanded && { maxHeight: 96, overflowY: 'auto' },
          ]}
        >
          {visibleValues.map((val) => (
            <Chip
              key={val}
              label={getOptionLabel(val)}
              size="small"
              onDelete={() => handleDelete(val)}
              onMouseDown={(event) => event.stopPropagation()}
              disabled={disabled}
              sx={chipSx}
            />
          ))}

          {hasOverflow && (
            <ChipOverflowToggle
              hiddenLabels={hiddenValues.map(getOptionLabel)}
              expanded={chipsExpanded}
              disabled={disabled}
              collapseTooltip={collapseChipsTooltip}
              moreItemsLabel={moreItemsTooltipLabel}
              onToggle={handleToggleChips}
            />
          )}
        </Box>
      );
    };

    return (
      <FormControl
        fullWidth
        disabled={disabled}
        className={rootClass}
        ref={anchorRef}
        sx={isOpen ? joinedFieldSx(joinsAtTop) : undefined}
      >
        {label != null && (
          <FormLabel
            id={labelId}
            htmlFor={inputId}
            required={required}
            sx={{ display: 'block', mb: '3px', fontSize: '12px', lineHeight: 1 }}
          >
            {label}
          </FormLabel>
        )}
        <Select
          ref={ref}
          id={inputId}
          labelId={label != null ? labelId : undefined}
          multiple
          value={value}
          onChange={handleChange}
          renderValue={renderValue}
          displayEmpty
          required={required}
          MenuProps={menuProps}
          onOpen={handleOpen}
          onClose={handleClose}
          {...rest}
        >
          {enableSelectAll && (
            <MenuItem value={SELECT_ALL_VALUE} sx={optionSx}>
              <Checkbox
                checked={isAllSelected}
                disableRipple
                tabIndex={-1}
                sx={optionCheckboxSx}
              />
              <ListItemText
                primary={selectAllLabel}
                sx={{ my: 0 }}
                slotProps={{ primary: { variant: 'body2' } }}
              />
            </MenuItem>
          )}
          {enableSelectAll && <Divider sx={{ my: 0.5 }} />}
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value} sx={optionSx}>
              <Checkbox
                checked={selectedValues.includes(option.value)}
                disableRipple
                tabIndex={-1}
                sx={optionCheckboxSx}
              />
              <ListItemText
                primary={option.label}
                sx={{ my: 0 }}
                slotProps={{ primary: { variant: 'body2' } }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);

IpsChipSelect.displayName = 'IpsChipSelect';

export default IpsChipSelect;
