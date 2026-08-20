import { default as React } from 'react';
import { IpsAutocompleteProps } from './IpsAutocomplete.types';

/** Stable hook on the popup for consumers' outside-click handlers. */
export declare const IPS_AUTOCOMPLETE_POPUP_CLASS = "ips-autocomplete-popup";
export declare const IpsAutocomplete: React.ForwardRefExoticComponent<Omit<IpsAutocompleteProps<any, any, any, any>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default IpsAutocomplete;
