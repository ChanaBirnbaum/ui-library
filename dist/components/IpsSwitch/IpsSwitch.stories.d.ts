import { Meta, StoryObj } from '@storybook/react';
import { IpsSwitch } from './IpsSwitch';
import { IpsSwitchProps } from './IpsSwitch.types';

declare const meta: Meta<typeof IpsSwitch>;
export default meta;
type Story = StoryObj<IpsSwitchProps>;
export declare const Default: Story;
export declare const LabelStart: Story;
