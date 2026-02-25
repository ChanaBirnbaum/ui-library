import { ReactNode } from 'react';

export interface IpsRtlProviderProps {
    /**
     * Content to render with RTL CSS flipping applied.
     * Wrap your `<ThemeProvider>` and `<div dir="rtl">` inside this component.
     */
    children: ReactNode;
}
