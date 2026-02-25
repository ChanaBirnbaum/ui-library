import { Meta, StoryObj } from '@storybook/react';
import { IpsDatePicker } from './IpsDatePicker';

declare const meta: Meta<typeof IpsDatePicker>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithValue: Story;
export declare const RTLMode: Story;
export declare const Disabled: Story;
export declare const ReadOnly: Story;
export declare const MinMaxDate: Story;
