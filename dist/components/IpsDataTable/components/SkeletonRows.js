import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import MuiTableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
import Skeleton from '@mui/material/Skeleton';
export function SkeletonRows({ rowCount = 5, columnCount, cellSx }) {
    return (_jsx(_Fragment, { children: Array.from({ length: rowCount }).map((_, rowIdx) => (_jsx(MuiTableRow, { children: Array.from({ length: columnCount }).map((_, colIdx) => (_jsx(MuiTableCell, { sx: { ...cellSx, whiteSpace: 'nowrap', overflow: 'hidden' }, children: _jsx(Skeleton, { variant: "text", width: `${60 + Math.floor(Math.sin(rowIdx * 7 + colIdx) * 30)}%`, height: 20, animation: "wave" }) }, colIdx))) }, rowIdx))) }));
}
