import { Meta, StoryObj } from '@storybook/react';
import { IpsSelect } from './IpsSelect';

declare const meta: Meta<typeof IpsSelect>;
export default meta;
type Story = StoryObj<typeof IpsSelect>;
export declare const Default: Story;
export declare const WithValue: Story;
export declare const ReadOnly: Story;
export declare const Disabled: Story;
export declare const Error: Story;
export declare const MultipleSelect: Story;
export declare const MultipleReadOnly: Story;
export declare const WithHelperText: Story;
export declare const NumericValues: Story;
