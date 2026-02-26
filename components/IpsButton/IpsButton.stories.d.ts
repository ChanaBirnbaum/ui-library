import { Meta, StoryObj } from '@storybook/react';
import { IpsButton } from './IpsButton';
import { IpsButtonProps } from './IpsButton.types';

declare const meta: Meta<typeof IpsButton>;
export default meta;
type Story = StoryObj<IpsButtonProps>;
export declare const Default: Story;
export declare const AddType: Story;
export declare const Loading: Story;
