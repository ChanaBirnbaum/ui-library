import React, { forwardRef } from 'react'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import type { IpsTableLightProps } from './IpsTableLight.types'

export const IpsTableLight = forwardRef<HTMLDivElement, IpsTableLightProps>(
  (
    {
      columns,
      rows,
      stickyHeader = false,
      striped = true,
      dense = false,
      emptyText = 'No data',
      sx,
      className,
    },
    ref
  ) => {
    const rootClassName = ['ips-table-light', className].filter(Boolean).join(' ')

    return (
      <TableContainer
        ref={ref}
        component={Paper}
        className={rootClassName}
        sx={sx}
      >
        <Table
          stickyHeader={stickyHeader}
          size={dense ? 'small' : 'medium'}
        >
          {/* ── Header ── */}
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  key={col.key}
                  width={col.width}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    // When stickyHeader is true MUI copies background via a separate
                    // internal rule — override both the cell and its ::after pseudo
                    '&.MuiTableCell-stickyHeader': {
                      backgroundColor: 'primary.main',
                    },
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* ── Body ── */}
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  <Typography variant="body2" color="text.secondary" sx={{ py: 2 }}>
                    {emptyText}
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  sx={
                    striped && rowIndex % 2 === 1
                      ? { backgroundColor: 'grey.50' }
                      : undefined
                  }
                >
                  {columns.map((col) => (
                    <TableCell key={col.key}>{row[col.key]}</TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
)

IpsTableLight.displayName = 'IpsTableLight'
