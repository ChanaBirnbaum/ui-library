import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IpsTextField } from './IpsTextField';
import type { IpsTextFieldProps } from './IpsTextField.types';

const meta: Meta<typeof IpsTextField> = {
  title: 'Inputs/IpsTextField',
  component: IpsTextField,
};

export default meta;

type Story = StoryObj<IpsTextFieldProps>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const WithAdornments: Story = {
  args: {
    label: 'Amount',
    startAdornment: '$',
    endAdornment: '.00',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only',
    defaultValue: 'Cannot edit',
    readOnly: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    error: true,
    helperText: 'Required',
  },
};
