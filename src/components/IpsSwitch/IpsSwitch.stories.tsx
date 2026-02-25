import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IpsSwitch } from './IpsSwitch';
import type { IpsSwitchProps } from './IpsSwitch.types';

const meta: Meta<typeof IpsSwitch> = {
  title: 'Components/IpsSwitch',
  component: IpsSwitch,
};

export default meta;

type Story = StoryObj<IpsSwitchProps>;

export const Default: Story = {
  render: (args) => <IpsSwitch {...args} />,
  args: {
    label: 'Enable feature',
  },
};

export const LabelStart: Story = {
  render: (args) => <IpsSwitch {...args} />,
  args: {
    label: 'Start label',
    labelPlacement: 'start',
  },
};

