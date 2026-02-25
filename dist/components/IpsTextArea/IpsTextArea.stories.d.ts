import { Meta, StoryObj } from '@storybook/react';
import { IpsTextArea } from './IpsTextArea';
import { IpsTextAreaProps } from './IpsTextArea.types';

declare const meta: Meta<typeof IpsTextArea>;
export default meta;
type Story = StoryObj<IpsTextAreaProps>;
export declare const Default: Story;
export declare const WithMaxLength: Story;
