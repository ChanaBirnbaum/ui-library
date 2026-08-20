import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IpsAutocomplete } from './IpsAutocomplete';
import type { IpsAutocompleteProps } from './IpsAutocomplete.types';

interface OptionType {
  label: string;
  value: string;
}

const meta: Meta<typeof IpsAutocomplete> = {
  title: 'Form/IpsAutocomplete',
  component: IpsAutocomplete,
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

const MANY_OPTIONS: OptionType[] = Array.from({ length: 12 }, (_, index) => ({
  label: `תוצאה מספר ${index + 1}`,
  value: `opt${index + 1}`,
}));

export const MultipleChipOverflow: Story = {
  name: 'Multiple (chip overflow past 3)',
  args: {
    options: MANY_OPTIONS,
    label: 'תוצאות נבחרות',
    placeholder: 'בחר תוצאות...',
    multiple: true,
    showCheckboxes: true,
    value: MANY_OPTIONS.slice(0, 6),
    getOptionLabel: (option: any) => option.label || option,
  },
};

export const MultipleChipOverflowCustomLimit: Story = {
  name: 'Multiple (custom maxVisibleChips)',
  args: {
    ...MultipleChipOverflow.args,
    label: 'תוצאות נבחרות - צ׳יפ אחד גלוי',
    maxVisibleChips: 1,
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

const LONG_OPTIONS = Array.from({ length: 40 }, (_, index) => ({
  label: `תוצאה מספר ${index + 1}`,
  value: `long${index + 1}`,
}));

export const LongList: Story = {
  name: 'Long list (capped height + thin scrollbar)',
  args: {
    options: LONG_OPTIONS,
    label: 'רשימה ארוכה',
    placeholder: 'הקלד לחיפוש...',
    multiple: true,
    showCheckboxes: true,
    getOptionLabel: (option: any) => option.label || option,
  },
};

// The field inside a dialog is the case the popup styling has to survive: the
// list has to escape the dialog instead of being clipped by it, and still open
// straight out of the input.
const InsideDialogDemo = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        פתח חלונית
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>סינון תוצאות</DialogTitle>
        <DialogContent>
          <IpsAutocomplete
            options={LONG_OPTIONS}
            label="בחר תוצאות"
            placeholder="הקלד לחיפוש..."
            multiple
            showCheckboxes
            getOptionLabel={(option: any) => option.label || option}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export const InsideDialog: Story = {
  name: 'Inside a popup (dialog)',
  render: () => <InsideDialogDemo />,
};

// Same field pushed to the bottom of the viewport: too little room below, so
// the list opens upwards and the squared edge moves to the top of the input.
const NearViewportBottomDemo = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-end',
      height: '90vh',
      padding: 16,
    }}
  >
    <IpsAutocomplete
      options={LONG_OPTIONS}
      label="שדה בתחתית המסך"
      placeholder="הקלד לחיפוש..."
      getOptionLabel={(option: any) => option.label || option}
    />
  </div>
);

export const NearViewportBottom: Story = {
  name: 'Near the viewport bottom (opens upwards)',
  render: () => <NearViewportBottomDemo />,
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
