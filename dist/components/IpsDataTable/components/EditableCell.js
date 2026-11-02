import { jsx as _jsx } from "react/jsx-runtime";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
export function EditableCell({ config, value, onChange, onCommit, onCancel }) {
    const type = config?.type ?? 'text';
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && type !== 'select')
            onCommit?.();
        if (e.key === 'Escape')
            onCancel?.();
    };
    if (type === 'select' && config?.options) {
        return (_jsx(Select, { value: String(value ?? ''), onChange: (e) => onChange(e.target.value), size: "small", variant: "standard", onKeyDown: handleKeyDown, sx: { minWidth: 80 }, autoFocus: true, children: config.options.map((opt) => (_jsx(MenuItem, { value: String(opt.value), children: opt.label }, String(opt.value)))) }));
    }
    return (_jsx(TextField, { value: String(value ?? ''), onChange: (e) => onChange(e.target.value), size: "small", variant: "standard", type: type === 'date' ? 'date' : type === 'number' ? 'number' : 'text', autoFocus: true, onKeyDown: handleKeyDown, sx: { width: '100%', minWidth: 60 }, inputProps: type === 'date' ? { style: { fontSize: 'inherit' } } : undefined }));
}
