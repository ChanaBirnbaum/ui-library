import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IpsButton } from './IpsButton';
import type { IpsButtonProps } from './IpsButton.types';

const meta: Meta<typeof IpsButton> = {
  title: 'Components/IpsButton',
  component: IpsButton,
};

export default meta;

type Story = StoryObj<IpsButtonProps>;

export const Default: Story = {
  render: (args) => <IpsButton {...args}>Default</IpsButton>,
  args: {},
};

export const AddType: Story = {
  render: (args) => <IpsButton {...args}>Add</IpsButton>,
  args: { buttonType: 'add' },
};

export const Loading: Story = {
  render: (args) => <IpsButton {...args}>Saving</IpsButton>,
  args: { loading: true },
};

