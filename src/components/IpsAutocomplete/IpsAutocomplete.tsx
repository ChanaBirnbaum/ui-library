import React, { forwardRef, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import { IpsTextField } from '../IpsTextField';
import { mergeSlotProps, toSxArray } from '../../utils/slotUtils';
import { listDensity } from '../../utils/listDensity';
import { ChipOverflowToggle } from '../internal/ChipOverflowToggle';
import type { IpsAutocompleteProps } from './IpsAutocomplete.types';

// Tags beyond this count collapse behind the expand toggle, as in IpsChipSelect.
const DEFAULT_MAX_VISIBLE_CHIPS = 3;

const defaultOptionLabel = (option: any) =>
  typeof option === 'string' ? option : option?.label || String(option);

// MUI puts body1 (16px) on the autocomplete paper, while every other Ips list -
// IpsChipSelect's options included - reads at body2 (14px).
const paperSx = { typography: 'body2' } as const;

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
    collapseChipsTooltip = 'הצג פחות',
    moreItemsTooltipLabel = (count: number) => `ועוד ${count}`,
    ...rest
  } = props;

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';
  const [chipsExpanded, setChipsExpanded] = useState(false);

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

  const mergedSlotProps = {
    ...slotProps,
    paper: mergeSlotProps(slotProps?.paper, (resolved) => ({
      ...resolved,
      sx: [paperSx, ...toSxArray(resolved?.sx)],
    })),
    listbox: mergeSlotProps(slotProps?.listbox, (resolved) => ({
      ...resolved,
      sx: [listboxSx, ...toSxArray(resolved?.sx)],
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
      ref={ref}
      multiple={multiple}
      disabled={disabled}
      loading={loading}
      renderOption={customRenderOption}
      renderInput={customRenderInput}
      renderTags={customRenderTags}
      getOptionLabel={getOptionLabel}
      disableCloseOnSelect={disableCloseOnSelect}
      className={rootClass}
      slotProps={mergedSlotProps as any}
      {...rest}
    />
  );
});

IpsAutocomplete.displayName = 'IpsAutocomplete';

export default IpsAutocomplete;
