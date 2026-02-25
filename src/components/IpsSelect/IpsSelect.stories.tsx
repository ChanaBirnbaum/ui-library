import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IpsSelect } from './IpsSelect';
import type { IpsSelectProps } from './IpsSelect.types';

const theme = createTheme();

const meta: Meta<typeof IpsSelect> = {
  title: 'Form/IpsSelect',
  component: IpsSelect,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of select options with label and value',
    },
    value: {
      control: 'text',
      description: 'Selected value(s)',
    },
    multiple: {
      control: 'boolean',
      description: 'Enable multiple selection',
    },
    readOnly: {
      control: 'boolean',
      description: 'Disable interaction and hide dropdown',
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IpsSelect>;

const OPTIONS = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
  { label: 'Option 4', value: 'opt4' },
];

export const Default: Story = {
  args: {
    label: 'Select an option',
    options: OPTIONS,
    placeholder: 'Choose one...',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Selected option',
    options: OPTIONS,
    value: 'opt2',
    placeholder: 'Choose one...',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read only select',
    options: OPTIONS,
    value: 'opt1',
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled select',
    options: OPTIONS,
    placeholder: 'Choose one...',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Select with error',
    options: OPTIONS,
    error: true,
    helperText: 'This field is required',
    placeholder: 'Choose one...',
  },
};

export const MultipleSelect: Story = {
  args: {
    label: 'Multiple selection',
    options: OPTIONS,
    value: ['opt1', 'opt3'],
    multiple: true,
    placeholder: 'Select items...',
  },
};

export const MultipleReadOnly: Story = {
  args: {
    label: 'Multiple read only',
    options: OPTIONS,
    value: ['opt2', 'opt4'],
    multiple: true,
    readOnly: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'With helper text',
    options: OPTIONS,
    placeholder: 'Choose one...',
    helperText: 'Select your preferred option',
  },
};

export const NumericValues: Story = {
  args: {
    label: 'Numeric values',
    options: [
      { label: 'Item 1', value: 1 },
      { label: 'Item 2', value: 2 },
      { label: 'Item 3', value: 3 },
    ],
    value: 1,
    placeholder: 'Choose one...',
  },
};
