import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IpsCheckBox } from './IpsCheckBox';
import type { IpsCheckBoxProps } from './IpsCheckBox.types';

const meta: Meta<typeof IpsCheckBox> = {
  title: 'Components/IpsCheckBox',
  component: IpsCheckBox,
};

export default meta;

type Story = StoryObj<IpsCheckBoxProps>;

export const Default: Story = {
  render: (args) => <IpsCheckBox {...args} />,
  args: {
    label: 'Default checkbox',
  },
};

export const Indeterminate: Story = {
  render: (args) => <IpsCheckBox {...args} />,
  args: {
    label: 'Partially selected',
    indeterminate: true,
  },
};

