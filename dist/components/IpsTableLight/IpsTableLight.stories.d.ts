import { Meta, StoryObj } from '@storybook/react';
import { IpsTableLight } from './IpsTableLight';

declare const meta: Meta<typeof IpsTableLight>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const Striped: Story;
export declare const Dense: Story;
export declare const EmptyState: Story;
export declare const StickyHeaderWithScroll: Story;
export declare const CustomCellContent: Story;
