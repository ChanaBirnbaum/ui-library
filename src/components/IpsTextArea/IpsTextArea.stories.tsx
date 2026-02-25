import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IpsTextArea } from './IpsTextArea';
import type { IpsTextAreaProps } from './IpsTextArea.types';

const meta: Meta<typeof IpsTextArea> = {
  title: 'Components/IpsTextArea',
  component: IpsTextArea,
};

export default meta;

type Story = StoryObj<IpsTextAreaProps>;

export const Default: Story = {
  render: (args) => <IpsTextArea {...args} />,
  args: {
    label: 'Notes',
    rows: 4,
    helperText: 'Enter details',
  },
};

export const WithMaxLength: Story = {
  render: (args) => <IpsTextArea {...args} />,
  args: {
    label: 'Comment',
    rows: 4,
    maxLength: 100,
    defaultValue: 'Hello',
  },
};

