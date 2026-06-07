import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MuiTable from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import MuiTableRow from '@mui/material/TableRow'
import MuiTableCell from '@mui/material/TableCell'
import type { ExpandedRowProps } from '../IpsDataTable.types'

export function ExpandedRow({
  subData,
  subColumns,
  customContent,
  title,
  indent = 0,
}: ExpandedRowProps) {
  return (
    <Box
      sx={{
        px: 2,
        py: 1.5,
        pl: 2 + indent * 3,
        bgcolor: '#F5F9FF',
      }}
    >
      {title && (
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          sx={{ pb: 1.5, color: 'text.primary', fontSize: '0.875rem' }}
        >
          {title}
        </Typography>
      )}

      {customContent}

      {subData && subColumns && subColumns.length > 0 && (
        <MuiTable sx={{ backgroundColor: 'white' }}>
          <TableHead>
            <MuiTableRow>
              {subColumns.map((col) => (
                <MuiTableCell
                  key={col.id}
                  align={col.align ?? 'left'}
                  sx={{
                    fontWeight: 700,
                    color: 'text.secondary',
                    width: col.width,
                    backgroundColor: '#DBEAFE',
                    borderBottom: '1px solid',
                    borderColor: '#BFDBFE',
                  }}
                >
                  {col.header}
                </MuiTableCell>
              ))}
            </MuiTableRow>
          </TableHead>
          <TableBody>
            {subData.map((item, rowIdx) => (
              <MuiTableRow
                key={rowIdx}
                sx={{
                  '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
                  '& td': { borderBottom: '1px solid', borderColor: '#BFDBFE' },
                  '&:last-child td': { borderBottom: 0 },
                }}
              >
                {subColumns.map((col) => {
                  const key = col.accessorKey ?? col.id
                  const raw = (item as Record<string, unknown>)[key]
                  const cellContent = col.renderCell
                    ? col.renderCell(raw, item)
                    : raw != null
                    ? String(raw)
                    : '—'

                  return (
                    <MuiTableCell
                      key={col.id}
                      align={col.align ?? 'left'}
                    >
                      {cellContent}
                    </MuiTableCell>
                  )
                })}
              </MuiTableRow>
            ))}
            {subData.length === 0 && (
              <MuiTableRow>
                <MuiTableCell
                  colSpan={subColumns.length}
                  align="center"
                  sx={{ color: 'text.disabled' }}
                >
                  אין נתונים
                </MuiTableCell>
              </MuiTableRow>
            )}
          </TableBody>
        </MuiTable>
      )}
    </Box>
  )
}
