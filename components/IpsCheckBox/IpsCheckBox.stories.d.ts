import { Meta, StoryObj } from '@storybook/react';
import { IpsCheckBox } from './IpsCheckBox';
import { IpsCheckBoxProps } from './IpsCheckBox.types';

declare const meta: Meta<typeof IpsCheckBox>;
export default meta;
type Story = StoryObj<IpsCheckBoxProps>;
export declare const Default: Story;
export declare const Indeterminate: Story;
