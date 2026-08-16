/**
 * Row metrics shared by the Ips option lists (IpsChipSelect's menu and
 * IpsAutocomplete's listbox) so the two stay visually identical. MUI's own
 * defaults - a 48px row with a 9px-padded checkbox - are far too airy for the
 * long result lists these controls are used with.
 *
 * Values are theme spacing units except where noted.
 */
export const listDensity = {
  /** px */
  optionMinHeight: 32,
  optionPaddingY: 0.25,
  optionPaddingX: 1,
  checkboxPadding: 0.25,
  /** Gap between the option checkbox and its label */
  checkboxGap: 0.75,
  /** Padding above/below the list itself */
  listPaddingY: 0.5,
} as const;
