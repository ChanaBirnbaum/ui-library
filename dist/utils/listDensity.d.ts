/**
 * Row metrics shared by the Ips option lists (IpsChipSelect's menu and
 * IpsAutocomplete's listbox) so the two stay visually identical. MUI's own
 * defaults - a 48px row with a 9px-padded checkbox - are far too airy for the
 * long result lists these controls are used with.
 *
 * Values are theme spacing units except where noted.
 */
export declare const listDensity: {
    /** px */
    readonly optionMinHeight: 32;
    readonly optionPaddingY: 0.25;
    readonly optionPaddingX: 1;
    readonly checkboxPadding: 0.25;
    /** Gap between the option checkbox and its label */
    readonly checkboxGap: 0.75;
    /** Padding above/below the list itself */
    readonly listPaddingY: 0.5;
};
