import { Meta, StoryObj } from '@storybook/react';
import { IpsTable } from './IpsTable';

declare const meta: Meta<typeof IpsTable>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const WithSorting: Story;
export declare const WithPagination: Story;
export declare const LoadingState: Story;
export declare const CheckboxSelection: Story;
export declare const EmptyState: Story;
