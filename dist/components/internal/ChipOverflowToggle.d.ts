import { default as React } from 'react';

export interface ChipOverflowToggleProps {
    /** Labels of the chips currently hidden behind the toggle */
    hiddenLabels: string[];
    expanded: boolean;
    disabled?: boolean;
    /** Tooltip shown while expanded */
    collapseTooltip: string;
    /** Tooltip suffix when more chips are hidden than the tooltip lists */
    moreItemsLabel: (count: number) => string;
    onToggle: (event: React.MouseEvent) => void;
}
/**
 * Expand/collapse control for chip lists that outgrow their field, shared by
 * IpsChipSelect and IpsAutocomplete so the two behave and look identical.
 */
export declare const ChipOverflowToggle: React.FC<ChipOverflowToggleProps>;
export default ChipOverflowToggle;
