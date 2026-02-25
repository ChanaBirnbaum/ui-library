import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IpsAutocomplete } from './IpsAutocomplete';
import type { IpsAutocompleteProps } from './IpsAutocomplete.types';

const theme = createTheme();

interface OptionType {
  label: string;
  value: string;
}

const meta: Meta<typeof IpsAutocomplete> = {
  title: 'Form/IpsAutocomplete',
  component: IpsAutocomplete,
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
      description: 'Array of options (can be strings or objects)',
    },
    multiple: {
      control: 'boolean',
      description: 'Enable multiple selection',
    },
    showCheckboxes: {
      control: 'boolean',
      description: 'Show checkboxes in options when multiple=true',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the autocomplete',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IpsAutocomplete>;

const OPTIONS: OptionType[] = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
  { label: 'Option 4', value: 'opt4' },
  { label: 'Option 5', value: 'opt5' },
];

const STRING_OPTIONS = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

export const SingleSelect: Story = {
  args: {
    options: STRING_OPTIONS,
    label: 'Choose a fruit',
    placeholder: 'Type to search...',
    multiple: false,
  },
};

export const MultipleWithCheckboxes: Story = {
  args: {
    options: OPTIONS,
    label: 'Select multiple options',
    placeholder: 'Choose items...',
    multiple: true,
    showCheckboxes: true,
    getOptionLabel: (option: any) => option.label || option,
  },
};

export const MultipleWithoutCheckboxes: Story = {
  args: {
    options: OPTIONS,
    label: 'Multiple selection (no checkboxes)',
    placeholder: 'Choose items...',
    multiple: true,
    showCheckboxes: false,
    getOptionLabel: (option: any) => option.label || option,
  },
};

export const LoadingState: Story = {
  args: {
    options: [],
    label: 'Loading options...',
    placeholder: 'Wait for options to load',
    loading: true,
    multiple: false,
  },
};

export const Disabled: Story = {
  args: {
    options: STRING_OPTIONS,
    label: 'Disabled autocomplete',
    placeholder: 'This is disabled',
    disabled: true,
    value: 'Apple',
  },
};

export const WithValue: Story = {
  args: {
    options: OPTIONS,
    label: 'With pre-selected value',
    placeholder: 'Choose options...',
    multiple: false,
    value: OPTIONS[0],
    getOptionLabel: (option: any) => option.label || option,
  },
};

export const MultipleWithValue: Story = {
  args: {
    options: OPTIONS,
    label: 'Multiple with pre-selected values',
    placeholder: 'Choose items...',
    multiple: true,
    showCheckboxes: true,
    value: [OPTIONS[0], OPTIONS[2]],
    getOptionLabel: (option: any) => option.label || option,
  },
};

export const CustomRender: Story = {
  args: {
    options: OPTIONS,
    label: 'Custom option rendering',
    placeholder: 'Options with custom styling',
    multiple: false,
    renderOption: (renderProps: any, option: any, state: any) => (
      <li {...renderProps} key={option.value}>
        <span style={{ fontWeight: state.selected ? 'bold' : 'normal' }}>
          {option.label}
        </span>
        <span style={{ marginLeft: 8, color: '#999', fontSize: '0.8em' }}>
          ({option.value})
        </span>
      </li>
    ),
    getOptionLabel: (option: any) => option.label || option,
  },
};

export const FreeSolo: Story = {
  args: {
    options: STRING_OPTIONS,
    label: 'Free solo input',
    placeholder: 'Type any value...',
    freeSolo: true,
    multiple: false,
  },
};

export const Clearable: Story = {
  args: {
    options: STRING_OPTIONS,
    label: 'Clearable autocomplete',
    placeholder: 'Click X to clear',
    multiple: false,
    clearIcon: true,
  },
};
