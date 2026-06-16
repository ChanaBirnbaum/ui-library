import React, { forwardRef } from 'react'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import type { SxProps, Theme } from '@mui/material/styles'
import type {
  IpsTableLightProps,
  IpsTableLightRow,
  IpsTableLightColumn,
  IpsTableLightWrap,
} from './IpsTableLight.types'

function getWrapSx(effectiveWrap: IpsTableLightWrap, colWidth?: number | string): SxProps<Theme> {
  if (effectiveWrap === 'ellipsis') {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxWidth: colWidth ?? 200,
    }
  }
  if (effectiveWrap === 'wrap') {
    return { whiteSpace: 'normal', wordBreak: 'break-word' }
  }
  return { whiteSpace: 'nowrap' }
}

/** Generic render implementation — kept outside forwardRef so the generic Row is preserved */
function IpsTableLightBase<Row extends IpsTableLightRow>(
  props: IpsTableLightProps<Row>,
  ref: React.Ref<HTMLDivElement>
): React.ReactElement | null {
  const {
    columns,
    rows,
    stickyHeader = false,
    maxHeight,
    striped = true,
    dense = false,
    emptyText = 'No data',
    wrap: tableWrap = 'ellipsis',
    hover,
    onRowClick,
    onRowDoubleClick,
    getRowId,
    sx,
    className,
  } = props

  const hasRowHandler = Boolean(onRowClick || onRowDoubleClick)
  const enableHover = hover !== undefined ? hover : hasRowHandler
  const rootClassName = ['ips-table-light', className].filter(Boolean).join(' ')

  function renderCell(col: IpsTableLightColumn<Row>, row: Row, rowIndex: number): React.ReactNode {
    const value = row[col.key]

    if (col.render) {
      return col.render(value, row, rowIndex)
    }

    if (col.type === 'link') {
      const href = col.href ? col.href(row) : String(value ?? '')
      const isBlank = col.linkTarget === '_blank'
      return (
        <Link
          href={href}
          target={col.linkTarget ?? '_self'}
          rel={isBlank ? 'noopener noreferrer' : undefined}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {String(value ?? '')}
        </Link>
      )
    }

    if (col.type === 'image') {
      const src = col.imageSrc ? col.imageSrc(row) : String(value ?? '')
      const ip = col.imageProps ?? {}
      return (
        <Box
          component="img"
          src={src}
          width={ip.width}
          height={ip.height}
          alt={ip.alt ?? ''}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          sx={ip.rounded ? { borderRadius: '50%', display: 'block' } : { display: 'block' }}
        />
      )
    }

    return value as React.ReactNode
  }

  return (
    <TableContainer
      ref={ref}
      component={Paper}
      className={rootClassName}
      sx={{
        // stickyHeader only pins the header when maxHeight constrains the scroll container
        ...(maxHeight != null ? { maxHeight, overflow: 'auto' } : {}),
        ...(sx as object | undefined),
      }}
    >
      <Table stickyHeader={stickyHeader} size={dense ? 'small' : 'medium'}>
        {/* ── Header ── */}
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.key}
                width={col.width}
                align={col.align ?? 'left'}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'common.white',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  // MUI copies background via a separate internal rule when stickyHeader is true
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
            rows.map((row, rowIndex) => {
              const key = getRowId
                ? getRowId(row, rowIndex)
                : row['id'] != null
                  ? (row['id'] as string | number)
                  : rowIndex

              return (
                <TableRow
                  key={key}
                  hover={enableHover}
                  onClick={onRowClick ? (e) => onRowClick(e, row, rowIndex) : undefined}
                  onDoubleClick={
                    onRowDoubleClick ? (e) => onRowDoubleClick(e, row, rowIndex) : undefined
                  }
                  sx={{
                    ...(hasRowHandler ? { cursor: 'pointer' } : {}),
                    ...(striped && rowIndex % 2 === 1 ? { backgroundColor: 'grey.50' } : {}),
                  }}
                >
                  {columns.map((col) => {
                    const effectiveWrap = col.wrap ?? tableWrap
                    return (
                      <TableCell
                        key={col.key}
                        align={col.align ?? 'left'}
                        sx={getWrapSx(effectiveWrap, col.width)}
                      >
                        {renderCell(col, row, rowIndex)}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

/** Generic interface that preserves Row type parameter and exposes displayName */
interface IpsTableLightComponent {
  <Row extends IpsTableLightRow>(
    props: IpsTableLightProps<Row> & { ref?: React.Ref<HTMLDivElement> }
  ): React.ReactElement | null
  displayName?: string
}

export const IpsTableLight: IpsTableLightComponent = forwardRef(
  IpsTableLightBase
) as unknown as IpsTableLightComponent

IpsTableLight.displayName = 'IpsTableLight'
