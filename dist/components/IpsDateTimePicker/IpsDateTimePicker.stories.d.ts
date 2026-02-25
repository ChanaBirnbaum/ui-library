import { Meta, StoryObj } from '@storybook/react';
import { IpsDateTimePicker } from './IpsDateTimePicker';

declare const meta: Meta<typeof IpsDateTimePicker>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithValue: Story;
export declare const RTLMode: Story;
export declare const Disabled: Story;
