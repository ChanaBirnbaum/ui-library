import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import { IpsMenu } from './IpsMenu';
import type { IpsMenuProps } from './IpsMenu.types';

// Inline icons (avoiding @mui/icons-material)
const MoreVertIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </SvgIcon>
);

const GridIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z" />
  </SvgIcon>
);

const meta: Meta<typeof IpsMenu> = {
  title: 'Components/IpsMenu',
  component: IpsMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Menu button: an icon button that opens a list of actions. `onSelect` runs after the menu has closed and focus is back on the trigger.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={createTheme({ direction: 'rtl' })}>
        <div dir="rtl">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<IpsMenuProps>;

export const Default: Story = {
  args: {
    icon: <MoreVertIcon />,
    label: 'פעולות עבור דנה כהן',
    items: [
      { value: 'restriction', label: 'הגבלה/היתר לחניך' },
      { value: 'number', label: 'הגבלה/היתר למספר' },
      { value: 'message', label: 'הודעה קולית לנמען', disabled: true },
      { value: 'all', label: 'כל הפעולות', icon: <GridIcon fontSize="small" />, dividerBefore: true },
    ],
    onSelect: (value) => alert(`נבחר: ${value}`),
  },
};
