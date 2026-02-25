import { forwardRef } from 'react'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import { useTheme } from '@mui/material/styles'
import type { IpsPillSelectProps, IpsPillSelectOption } from './IpsPillSelect.types'

const SIZE_STYLES = {
  small: { px: 1.5, py: 0.5, fontSize: '0.75rem' },
  medium: { px: 2.5, py: 1, fontSize: '0.875rem' },
}

export const IpsPillSelect = forwardRef<HTMLDivElement, IpsPillSelectProps>(
  (
    {
      options = [],
      value,
      onChange,
      multiple = false,
      disabled = false,
      size = 'medium',
      sx,
      className,
    },
    ref
  ) => {
    const theme = useTheme()
    const primary = theme.palette.primary.main

    const isSelected = (optValue: string | number): boolean => {
      if (multiple) {
        return Array.isArray(value) && value.includes(optValue)
      }
      return value === optValue
    }

    const handleClick = (optValue: string | number) => {
      if (disabled || !onChange) return

      if (multiple) {
        const current = Array.isArray(value) ? value : []
        const next = current.includes(optValue)
          ? current.filter(v => v !== optValue)
          : [...current, optValue]
        onChange(next)
      } else {
        // toggle: click on selected → deselect
        onChange(value === optValue ? '' : optValue)
      }
    }

    const rootClassName = ['ips-pill-select', className].filter(Boolean).join(' ')
    const { px, py, fontSize } = SIZE_STYLES[size]

    return (
      <Box
        ref={ref}
        className={rootClassName}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          opacity: disabled ? 0.5 : 1,
          pointerEvents: disabled ? 'none' : 'auto',
          ...sx,
        }}
      >
        {options.map((opt: IpsPillSelectOption) => {
          const selected = isSelected(opt.value)
          return (
            <ButtonBase
              key={opt.value}
              className="ips-pill"
              onClick={() => handleClick(opt.value)}
              disableRipple={false}
              sx={{
                borderRadius: '999px',
                px,
                py,
                fontSize,
                fontWeight: 500,
                fontFamily: 'inherit',
                lineHeight: 1.5,
                transition: 'all 0.2s ease',
                ...(selected
                  ? {
                      backgroundColor: primary,
                      color: 'white',
                      border: `1px solid ${primary}`,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                        borderColor: theme.palette.primary.dark,
                      },
                    }
                  : {
                      backgroundColor: 'transparent',
                      color: primary,
                      border: `1px solid ${primary}`,
                      '&:hover': {
                        backgroundColor: `${primary}14`,
                      },
                    }),
              }}
            >
              {opt.label}
            </ButtonBase>
          )
        })}
      </Box>
    )
  }
)

IpsPillSelect.displayName = 'IpsPillSelect'
