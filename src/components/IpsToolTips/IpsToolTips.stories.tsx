import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { IpsToolTips } from './IpsToolTips';
import type { IpsToolTipsProps } from './IpsToolTips.types';

// Create a simple theme for Storybook
const mockTheme = createTheme({
  palette: {
    primary: {
      main: '#1565C0',
    },
    secondary: {
      main: '#616161',
    },
  },
});

const meta: Meta<typeof IpsToolTips> = {
  title: 'Components/IpsToolTips',
  component: IpsToolTips,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={mockTheme}>
        <Box sx={{ display: 'flex', gap: 2, p: 4 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof IpsToolTips>;

export const Default: Story = {
  args: {
    title: 'Default tooltip',
    children: <Button variant="contained">Hover me</Button>,
  },
};

export const WithArrow: Story = {
  args: {
    title: 'Tooltip with arrow',
    arrow: true,
    children: <Button variant="contained">Hover me</Button>,
  },
};

export const WithoutArrow: Story = {
  args: {
    title: 'Tooltip without arrow',
    arrow: false,
    children: <Button variant="contained">Hover me</Button>,
  },
};

export const PlacementTop: Story = {
  args: {
    title: 'Top placement',
    placement: 'top',
    children: <Button variant="contained">Top</Button>,
  },
};

export const PlacementRight: Story = {
  args: {
    title: 'Right placement',
    placement: 'right',
    children: <Button variant="contained">Right</Button>,
  },
};

export const PlacementBottom: Story = {
  args: {
    title: 'Bottom placement',
    placement: 'bottom',
    children: <Button variant="contained">Bottom</Button>,
  },
};

export const PlacementLeft: Story = {
  args: {
    title: 'Left placement',
    placement: 'left',
    children: <Button variant="contained">Left</Button>,
  },
};

export const MultilineTooltip: Story = {
  args: {
    title: 'This is a longer tooltip that might wrap to multiple lines when the content is too long for a single line',
    children: <Button variant="contained">Hover for long text</Button>,
  },
};

export const DisabledButton: Story = {
  args: {
    title: 'This button is disabled',
    children: <Button variant="contained" disabled>Disabled button</Button>,
  },
};
