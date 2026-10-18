import { default as React } from 'react';

export interface TruncatedTextProps {
    /**
     * Full text for the tooltip. When omitted, the rendered text content of the
     * element is used — which covers custom cell renderers.
     */
    title?: string;
    children: React.ReactNode;
}
/**
 * Renders its children on a single line, clipped with an ellipsis, and shows a
 * tooltip with the full text — but only when the content is actually clipped.
 *
 * Truncation is checked on hover (not with a ResizeObserver per cell) so a
 * large table does not pay for hundreds of observers, and the tooltip is
 * controlled so it opens on the same hover that measures it.
 */
export declare function TruncatedText({ title, children }: TruncatedTextProps): React.JSX.Element;
