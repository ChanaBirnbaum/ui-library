import { Meta, StoryObj } from '@storybook/react';
import { IpsChipSelect } from './IpsChipSelect';

declare const meta: Meta<typeof IpsChipSelect>;
export default meta;
type Story = StoryObj<typeof IpsChipSelect>;
export declare const Default: Story;
export declare const WithSelectedValues: Story;
export declare const Disabled: Story;
export declare const DisabledWithEmpty: Story;
export declare const MaxItems: Story;
export declare const NumericValues: Story;
export declare const ManyOptions: Story;
export declare const CustomPlaceholder: Story;
