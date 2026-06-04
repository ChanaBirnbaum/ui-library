import React from 'react'
import MuiTableRow from '@mui/material/TableRow'
import MuiTableCell from '@mui/material/TableCell'
import Skeleton from '@mui/material/Skeleton'

export interface SkeletonRowsProps {
  rowCount?: number
  columnCount: number
  cellSx?: object
}

export function SkeletonRows({ rowCount = 5, columnCount, cellSx }: SkeletonRowsProps) {
  return (
    <>
      {Array.from({ length: rowCount }).map((_, rowIdx) => (
        <MuiTableRow key={rowIdx}>
          {Array.from({ length: columnCount }).map((_, colIdx) => (
            <MuiTableCell key={colIdx} sx={cellSx}>
              <Skeleton
                variant="text"
                width={`${60 + Math.floor(Math.sin(rowIdx * 7 + colIdx) * 30)}%`}
                height={20}
                animation="wave"
              />
            </MuiTableCell>
          ))}
        </MuiTableRow>
      ))}
    </>
  )
}
