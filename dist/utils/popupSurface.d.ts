import { SxProps, Theme } from '@mui/material/styles';

/**
 * The dropdown surface shared by IpsAutocomplete's listbox popper and
 * IpsChipSelect's menu, so the two open identically: a list that continues
 * straight out of the field rather than a second rounded box floating under it.
 */
export interface PopupSurfaceOptions {
    /** True when the list opens upwards, i.e. it joins the field at its own top. */
    joinsAtTop?: boolean;
    /**
     * Font family read off the field. Both popups are portalled out of the app
     * shell, where they inherit nothing and MUI stamps the theme font on instead.
     */
    fontFamily?: string;
    /** Field width, so the shared edge lines up along its whole length. */
    width?: number;
}
/** Squares the field's own corners on the edge the open list joins it at. */
export declare const joinedFieldSx: (joinsAtTop?: boolean) => SxProps<Theme>;
export declare const popupSurfaceSx: ({ joinsAtTop, fontFamily, width }: PopupSurfaceOptions) => (theme: Theme) => {
    fontFamily?: string | undefined;
    '& .MuiTypography-root'?: {
        fontFamily: string;
    } | undefined;
    borderBottom: string;
    borderBottomLeftRadius: string;
    borderBottomRightRadius: string;
    width?: number | undefined;
    boxSizing: "border-box";
    border: string;
    boxShadow: string;
} | {
    fontFamily?: string | undefined;
    '& .MuiTypography-root'?: {
        fontFamily: string;
    } | undefined;
    borderTop: string;
    borderTopLeftRadius: string;
    borderTopRightRadius: string;
    width?: number | undefined;
    boxSizing: "border-box";
    border: string;
    boxShadow: string;
};
