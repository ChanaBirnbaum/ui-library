import { Meta, StoryObj } from '@storybook/react';
import { IpsTimePicker } from './IpsTimePicker';

declare const meta: Meta<typeof IpsTimePicker>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithValue: Story;
export declare const Disabled: Story;
export declare const TwentyFourHour: Story;
export declare const WithMinMaxTime: Story;
