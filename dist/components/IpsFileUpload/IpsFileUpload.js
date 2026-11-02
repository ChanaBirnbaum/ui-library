import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import SaveIcon from '@mui/icons-material/Save';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { IpsDropZone } from './IpsDropZone';
import { IpsFileItem } from './IpsFileItem';
import { useFileUpload } from './useFileUpload';
export function IpsFileUpload(props) {
    const { camera = false, screenshot = false, scan = false, accept, multiple = true, disabled = false, containerId, className, sx, separatorLabel, actionsOrder = 'save-first', } = props;
    const { files, addFiles, removeFile, clearAll, saveFiles, loading, canSave, } = useFileUpload(props);
    const saveButton = (_jsx(Button, { variant: "contained", size: "small", disabled: !canSave || disabled, onClick: saveFiles, startIcon: loading
            ? _jsx(CircularProgress, { size: 16, color: "inherit" })
            : _jsx(SaveIcon, {}), children: "\u05E9\u05DE\u05D5\u05E8 \u05E7\u05D1\u05E6\u05D9\u05DD" }));
    const clearAllButton = (_jsx(Button, { variant: "outlined", size: "small", color: "error", disabled: files.length === 0 || disabled, onClick: clearAll, startIcon: _jsx(DeleteSweepIcon, {}), children: "\u05E0\u05E7\u05D4 \u05D4\u05DB\u05DC" }));
    return (_jsxs(Box, { className: `ips-file-upload${className ? ` ${className}` : ''}`, sx: { display: 'flex', flexDirection: 'column', gap: 2, ...sx }, children: [_jsx(IpsDropZone, { onFilesAdded: addFiles, camera: camera, screenshot: screenshot, scan: scan, accept: accept, multiple: multiple, disabled: disabled, containerId: containerId, separatorLabel: separatorLabel }), files.length > 0 && (_jsx(Stack, { spacing: 0.75, children: files.map(({ file, hasError, errorMessage }) => (_jsx(IpsFileItem, { file: file, hasError: hasError, errorMessage: errorMessage, onDelete: removeFile }, `${file.name}-${file.size}`))) })), _jsx(Box, { className: "ips-file-upload-actions", sx: { display: 'flex', gap: 1, justifyContent: 'flex-start' }, children: actionsOrder === 'clear-first' ? (_jsxs(_Fragment, { children: [clearAllButton, saveButton] })) : (_jsxs(_Fragment, { children: [saveButton, clearAllButton] })) })] }));
}
IpsFileUpload.displayName = 'IpsFileUpload';
