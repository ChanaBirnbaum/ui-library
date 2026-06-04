import { Meta, StoryObj } from '@storybook/react';
import { IpsDataTable } from './IpsDataTable';

declare const meta: Meta<typeof IpsDataTable>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithSortingAndFiltering: Story;
export declare const WithPagination: Story;
export declare const WithExpand: Story;
export declare const WithActions: Story;
export declare const WithInlineEdit: Story;
export declare const Bordered: Story;
export declare const Striped: Story;
export declare const Loading: Story;
export declare const SizeSmall: Story;
export declare const SizeLarge: Story;
export declare const EmptyState: Story;
export declare const FullFeatured: Story;
