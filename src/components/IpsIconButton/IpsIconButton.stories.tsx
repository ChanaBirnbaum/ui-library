import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import { IpsIconButton } from './IpsIconButton';
import type { IpsIconButtonProps } from './IpsIconButton.types';

// Inline icon components (avoiding missing @mui/icons-material)
const AddIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </SvgIcon>
);

const EditIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" />
  </SvgIcon>
);

const DeleteIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-9l-1 1H5v2h14V4z" />
  </SvgIcon>
);

const SaveIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
  </SvgIcon>
);

// Create a simple theme for Storybook
const mockTheme = createTheme({
  palette: {
    primary: {
      main: '#1565C0',
    },
    secondary: {
      main: '#616161',
    },
    error: {
      main: '#D32F2F',
    },
  },
});

const meta: Meta<typeof IpsIconButton> = {
  title: 'Components/IpsIconButton',
  component: IpsIconButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={mockTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof IpsIconButton>;

export const Default: Story = {
  args: {
    icon: <AddIcon />,
  },
};

export const WithTooltip: Story = {
  args: {
    icon: <EditIcon />,
    tooltip: 'Edit item',
  },
};

export const Disabled: Story = {
  args: {
    icon: <DeleteIcon />,
    disabled: true,
    tooltip: 'Delete (disabled)',
  },
};

export const Small: Story = {
  args: {
    icon: <SaveIcon />,
    size: 'small',
    tooltip: 'Save',
  },
};

export const Medium: Story = {
  args: {
    icon: <AddIcon />,
    size: 'medium',
    tooltip: 'Add item',
  },
};

export const Large: Story = {
  args: {
    icon: <EditIcon />,
    size: 'large',
    tooltip: 'Edit',
  },
};

export const ColorPrimary: Story = {
  args: {
    icon: <AddIcon />,
    color: 'primary',
    tooltip: 'Primary action',
  },
};

export const ColorSecondary: Story = {
  args: {
    icon: <EditIcon />,
    color: 'secondary',
    tooltip: 'Secondary action',
  },
};

export const ColorError: Story = {
  args: {
    icon: <DeleteIcon />,
    color: 'error',
    tooltip: 'Delete',
  },
};

