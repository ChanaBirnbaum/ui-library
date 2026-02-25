import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IpsChipSelect } from './IpsChipSelect';
import type { IpsChipSelectProps, IpsChipSelectOption } from './IpsChipSelect.types';

const theme = createTheme();

const meta: Meta<typeof IpsChipSelect> = {
  title: 'Form/IpsChipSelect',
  component: IpsChipSelect,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ width: '400px', padding: '20px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of selectable options',
    },
    value: {
      control: 'object',
      description: 'Currently selected values',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select',
    },
    label: {
      control: 'text',
      description: 'Field label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IpsChipSelect>;

const OPTIONS: IpsChipSelectOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
  { label: 'Fig', value: 'fig' },
  { label: 'Grape', value: 'grape' },
];

const NUMERIC_OPTIONS: IpsChipSelectOption[] = [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 },
  { label: 'Item 4', value: 4 },
];

export const Default: Story = {
  args: {
    label: 'Select items',
    options: OPTIONS,
    value: [],
    placeholder: 'Choose items...',
  },
};

export const WithSelectedValues: Story = {
  args: {
    label: 'Selected fruits',
    options: OPTIONS,
    value: ['apple', 'cherry', 'grape'],
    placeholder: 'Choose items...',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled select',
    options: OPTIONS,
    value: ['banana', 'date'],
    disabled: true,
    placeholder: 'Choose items...',
  },
};

export const DisabledWithEmpty: Story = {
  args: {
    label: 'Disabled empty select',
    options: OPTIONS,
    value: [],
    disabled: true,
    placeholder: 'No items selected',
  },
};

export const MaxItems: Story = {
  args: {
    label: 'Multiple selections',
    options: OPTIONS,
    value: ['apple', 'banana', 'cherry', 'date', 'elderberry'],
    placeholder: 'Choose items...',
  },
};

export const NumericValues: Story = {
  args: {
    label: 'Select numeric items',
    options: NUMERIC_OPTIONS,
    value: [1, 3],
    placeholder: 'Choose items...',
  },
};

export const ManyOptions: Story = {
  args: {
    label: 'Select from many',
    options: [
      ...OPTIONS,
      { label: 'Honeydew', value: 'honeydew' },
      { label: 'Kiwi', value: 'kiwi' },
      { label: 'Lemon', value: 'lemon' },
      { label: 'Mango', value: 'mango' },
    ],
    value: ['apple', 'kiwi', 'mango'],
    placeholder: 'Choose items...',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    label: 'Select tags',
    options: OPTIONS,
    value: [],
    placeholder: 'Pick one or more...',
  },
};
