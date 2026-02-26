import { Meta, StoryObj } from '@storybook/react';
import { IpsTextField } from './IpsTextField';
import { IpsTextFieldProps } from './IpsTextField.types';

declare const meta: Meta<typeof IpsTextField>;
export default meta;
type Story = StoryObj<IpsTextFieldProps>;
export declare const Default: Story;
export declare const WithAdornments: Story;
export declare const ReadOnly: Story;
export declare const ErrorState: Story;
