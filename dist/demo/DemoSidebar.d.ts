import { default as React } from 'react';

export type NavItem = {
    id: string;
    label: string;
    group: string;
};
type Props = {
    items: NavItem[];
    activeId: string;
    onSelect: (id: string) => void;
};
export declare function DemoSidebar({ items, activeId, onSelect }: Props): React.JSX.Element;
export {};
