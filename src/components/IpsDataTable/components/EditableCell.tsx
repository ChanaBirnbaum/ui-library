import React from 'react'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import type { EditableConfig } from '../IpsDataTable.types'

export interface EditableCellProps {
  config?: EditableConfig
  value: unknown
  onChange: (v: unknown) => void
  onCommit?: () => void
  onCancel?: () => void
}

export function EditableCell({ config, value, onChange, onCommit, onCancel }: EditableCellProps) {
  const type = config?.type ?? 'text'

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && type !== 'select') onCommit?.()
    if (e.key === 'Escape') onCancel?.()
  }

  if (type === 'select' && config?.options) {
    return (
      <Select
        value={String(value ?? '')}
        onChange={(e) => onChange(e.target.value)}
        size="small"
        variant="standard"
        onKeyDown={handleKeyDown}
        sx={{ minWidth: 80 }}
        autoFocus
      >
        {config.options.map((opt) => (
          <MenuItem key={String(opt.value)} value={String(opt.value)}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    )
  }

  return (
    <TextField
      value={String(value ?? '')}
      onChange={(e) => onChange(e.target.value)}
      size="small"
      variant="standard"
      type={type === 'date' ? 'date' : type === 'number' ? 'number' : 'text'}
      autoFocus
      onKeyDown={handleKeyDown}
      sx={{ width: '100%', minWidth: 60 }}
      inputProps={type === 'date' ? { style: { fontSize: 'inherit' } } : undefined}
    />
  )
}
