import { Meta, StoryObj } from '@storybook/react';
import { IpsToastProvider } from './IpsToastProvider';

declare const meta: Meta<typeof IpsToastProvider>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const TopRight: Story;
export declare const TopLeft: Story;
export declare const ShortDeleteTime: Story;
export declare const MaxToastsTwo: Story;
