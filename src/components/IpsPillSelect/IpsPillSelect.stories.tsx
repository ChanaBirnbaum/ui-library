import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsPillSelect } from './IpsPillSelect'

const theme = createTheme()

const meta: Meta<typeof IpsPillSelect> = {
  title: 'Components/IpsPillSelect',
  component: IpsPillSelect,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: 24, maxWidth: 600 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
]

const manyOptions = [
  { label: 'JavaScript', value: 'js' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'Python', value: 'py' },
  { label: 'Rust', value: 'rust' },
  { label: 'Go', value: 'go' },
  { label: 'Java', value: 'java' },
  { label: 'C#', value: 'csharp' },
  { label: 'Swift', value: 'swift' },
  { label: 'Kotlin', value: 'kotlin' },
  { label: 'Ruby', value: 'ruby' },
]

// ─── Controlled wrappers ────────────────────────────────────────────────────

function SingleSelectStory() {
  const [value, setValue] = useState<string | number>('')
  return (
    <IpsPillSelect
      options={options}
      value={value}
      onChange={v => setValue(v as string | number)}
    />
  )
}

function MultiSelectStory() {
  const [value, setValue] = useState<(string | number)[]>(['react'])
  return (
    <IpsPillSelect
      options={options}
      value={value}
      onChange={v => setValue(v as (string | number)[])}
      multiple
    />
  )
}

function SmallSizeStory() {
  const [value, setValue] = useState<string | number>('vue')
  return (
    <IpsPillSelect
      options={options}
      value={value}
      onChange={v => setValue(v as string | number)}
      size="small"
    />
  )
}

function ManyOptionsStory() {
  const [value, setValue] = useState<(string | number)[]>(['js', 'ts'])
  return (
    <IpsPillSelect
      options={manyOptions}
      value={value}
      onChange={v => setValue(v as (string | number)[])}
      multiple
    />
  )
}

// ─── Stories ────────────────────────────────────────────────────────────────

export const SingleSelect: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <SingleSelectStory />
      </div>
    </ThemeProvider>
  ),
}

export const MultiSelect: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <MultiSelectStory />
      </div>
    </ThemeProvider>
  ),
}

export const Disabled: Story = {
  args: {
    options,
    value: ['react', 'vue'],
    multiple: true,
    disabled: true,
  },
}

export const SmallSize: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <SmallSizeStory />
      </div>
    </ThemeProvider>
  ),
}

export const ManyOptions: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <ManyOptionsStory />
      </div>
    </ThemeProvider>
  ),
}
