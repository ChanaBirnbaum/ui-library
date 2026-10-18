import { default as React } from 'react';
import { Theme } from '@mui/material/styles';

export declare const MOBILE_FIELD: {
    readonly heightPx: 42;
    readonly paddingStartPx: 14;
    readonly chevronSizePx: 20;
    readonly chevronInsetPx: 12;
    readonly fontSizePx: 16;
    readonly fallbackRadiusPx: 6;
};
export declare const CHEVRON_CLEARANCE_PX: number;
export declare const MobileFieldLabel: import('@emotion/styled').StyledComponent<import('@mui/system').MUIStyledCommonProps<Theme>, React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export declare const RequiredMark: import('@emotion/styled').StyledComponent<import('@mui/system').MUIStyledCommonProps<Theme>, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const MobileHelperText: import('@emotion/styled').StyledComponent<import('@mui/system').MUIStyledCommonProps<Theme> & {
    hasError: boolean;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;
/** Field radius from the IPS theme; plain MUI themes (tests, stories) fall back */
export declare function mobileFieldRadius(theme: Theme): number;
interface OutlinedBoxState {
    hasValue: boolean;
    hasError: boolean;
}
/** The outlined field box (border, background, height, text color). Focus styles are added by each field */
export declare function outlinedFieldBoxStyles(theme: Theme, { hasValue, hasError }: OutlinedBoxState): {
    width: string;
    height: 42;
    margin: number;
    paddingInlineStart: 14;
    paddingInlineEnd: number;
    fontFamily: string;
    fontSize: 16;
    color: string;
    backgroundColor: string;
    border: string;
    borderRadius: number;
};
/** 2px focus border like the library's fields, without shifting the content */
export declare function outlinedFieldFocusStyles(theme: Theme, hasError: boolean): {
    borderColor: string;
    boxShadow: string;
};
export declare function outlinedFieldDisabledStyles(theme: Theme): {
    cursor: string;
    color: string;
    backgroundColor: string;
    borderColor: string;
};
/** Positions the chevron inside an outlined field. Taps pass through to the native control */
export declare const OutlinedChevronSlot: import('@emotion/styled').StyledComponent<import('@mui/system').MUIStyledCommonProps<Theme>, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare function ChevronDownIcon(): React.JSX.Element;
/** A native control stretched invisibly over a custom trigger, so a tap anywhere opens the OS picker */
export declare const invisibleOverlayStyles: {
    readonly position: "absolute";
    readonly inset: 0;
    readonly width: "100%";
    readonly height: "100%";
    readonly margin: 0;
    readonly opacity: 0;
    readonly fontSize: 16;
    readonly cursor: "pointer";
    readonly '&:disabled': {
        readonly cursor: "default";
    };
};
export {};
