import React, { forwardRef } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';
import { IpsTextField } from '../IpsTextField';
import type { IpsAutocompleteProps } from './IpsAutocomplete.types';

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
    ...rest
  } = props;

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';

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
    const optionLabel =
      typeof option === 'string' ? option : option?.label || String(option);

    return (
      <li key={key} {...restProps}>
        {showCheckbox && (
          <Checkbox
            checked={selected}
            style={isRtl ? { marginLeft: 8 } : { marginRight: 8 }}
          />
        )}
        {optionLabel}
      </li>
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

  return (
    <Autocomplete
      ref={ref}
      multiple={multiple}
      disabled={disabled}
      loading={loading}
      renderOption={customRenderOption}
      renderInput={customRenderInput}
      className={rootClass}
      {...rest}
    />
  );
});

IpsAutocomplete.displayName = 'IpsAutocomplete';

export default IpsAutocomplete;
