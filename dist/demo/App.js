import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Drawer, IconButton, Typography, Paper, Divider, Switch, FormControlLabel, Stack, Chip, } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { DemoSidebar } from './DemoSidebar';
import { slugify, useHashRoute } from './useHashRoute';
import { createRtlCache } from '../utils/rtlUtils';
import { ipsTheme } from '../theme/ipsTheme';
import { IpsButton } from '../components/IpsButton/IpsButton';
import { IpsTextField } from '../components/IpsTextField/IpsTextField';
import { IpsTextArea } from '../components/IpsTextArea/IpsTextArea';
import { IpsCheckBox } from '../components/IpsCheckBox/IpsCheckBox';
import { IpsSwitch } from '../components/IpsSwitch/IpsSwitch';
import { IpsIconButton } from '../components/IpsIconButton/IpsIconButton';
import { IpsToolTips } from '../components/IpsToolTips/IpsToolTips';
import { IpsSelect } from '../components/IpsSelect/IpsSelect';
import { IpsAutocomplete } from '../components/IpsAutocomplete/IpsAutocomplete';
import { IpsChipSelect } from '../components/IpsChipSelect/IpsChipSelect';
import { IpsAccordion } from '../components/IpsAccordion/IpsAccordion';
import { IpsPillSelect } from '../components/IpsPillSelect/IpsPillSelect';
import { IpsTimePicker } from '../components/IpsTimePicker/IpsTimePicker';
import { IpsDatePicker } from '../components/IpsDatePicker/IpsDatePicker';
import { IpsDateTimePicker } from '../components/IpsDateTimePicker/IpsDateTimePicker';
import { IpsTable } from '../components/IpsTable/IpsTable';
import { IpsDataTable } from '../components/IpsDataTable/IpsDataTable';
import { ExpandedRow } from '../components/IpsDataTable/components/ExpandedRow';
import { IpsToastProvider } from '../components/IpsToast/IpsToastProvider';
import { useToast } from '../components/IpsToast/useToast';
import { TOAST_TYPES } from '../components/IpsToast/IpsToast.types';
import { IpsRichTextEditor } from '../components/IpsRichTextEditor/IpsRichTextEditor';
import { DEFAULT_TOOLBAR } from '../components/IpsRichTextEditor/IpsRteToolbar.types';
import { IpsFileUpload } from '../components/IpsFileUpload/IpsFileUpload';
import { IpsStepper } from '../components/IpsStepper/IpsStepper';
import { IpsTabs } from '../components/IpsTabs/IpsTabs';
import { IpsDialog } from '../components/IpsDialog/IpsDialog';
import { IpsDrawer } from '../components/IpsDrawer/IpsDrawer';
import { IpsCarousel } from '../components/IpsCarousel/IpsCarousel';
import moment from 'moment';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore – moment locale files have no TS declarations
import 'moment/locale/he';
import SvgIcon from '@mui/material/SvgIcon';
const rtlCache = createRtlCache();
// No typography override: the demo has to show the font the library's own theme
// ships with (Rubik), not one of its own.
const theme = createTheme(ipsTheme, { direction: 'rtl' });
const StarIcon = () => (_jsx(SvgIcon, { children: _jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }) }));
const InfoIcon = () => (_jsx(SvgIcon, { children: _jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }) }));
const options = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
    { label: 'Option D', value: 'd' }
];
function SectionTitle({ children }) {
    return (_jsx(Typography, { variant: "h6", color: "primary.dark", sx: { mb: 1, mt: 3, borderBottom: '2px solid', borderColor: 'primary.dark', pb: 0.5 }, children: children }));
}
function PropsTable({ props }) {
    return (_jsx(Box, { sx: { mb: 2, overflowX: 'auto' }, children: _jsxs("table", { style: { width: '100%', borderCollapse: 'collapse', fontSize: 13 }, children: [_jsx("thead", { children: _jsxs("tr", { style: { backgroundColor: '#E6F4FF' }, children: [_jsx("th", { style: { padding: '6px 12px', textAlign: 'left', border: '1px solid #E0EBFF' }, children: "Prop" }), _jsx("th", { style: { padding: '6px 12px', textAlign: 'left', border: '1px solid #E0EBFF' }, children: "Value" }), _jsx("th", { style: { padding: '6px 12px', textAlign: 'left', border: '1px solid #E0EBFF' }, children: "Description" })] }) }), _jsx("tbody", { children: props.map((p, i) => (_jsxs("tr", { style: { backgroundColor: i % 2 ? '#f8f9fa' : 'white' }, children: [_jsx("td", { style: { padding: '5px 12px', border: '1px solid #e0e0e0', fontWeight: 600, color: '#1D4ED8' }, children: p.name }), _jsx("td", { style: { padding: '5px 12px', border: '1px solid #e0e0e0', fontFamily: 'monospace', color: '#c62828' }, children: p.value }), _jsx("td", { style: { padding: '5px 12px', border: '1px solid #e0e0e0', color: '#555' }, children: p.description })] }, i))) })] }) }));
}
// ─── Panels ─────────────────────────────────────────────────────────────────
const PlusIcon = () => (_jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M12 5V19M5 12H19", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }));
const ArrowBackIcon = () => (_jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z" }) }));
function ButtonPanel() {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'variant', value: "'contained' | 'outlined'", description: 'סגנון הכפתור' },
                    { name: 'size', value: "'small' | 'medium'", description: 'גודל הכפתור' },
                    { name: 'startIcon', value: 'ReactNode', description: 'אייקון משמאל לטקסט' },
                    { name: 'loading', value: 'boolean', description: 'מציג ספינר ומנטרל לחיצה' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל את הכפתור' },
                ] }), _jsxs(Box, { sx: { mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: loading, onChange: e => setLoading(e.target.checked) }), label: "loading" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" })] }), _jsx(SectionTitle, { children: "Outlined \u2014 Primary" }), _jsxs(Stack, { direction: "row", spacing: 2, alignItems: "center", flexWrap: "wrap", children: [_jsx(IpsButton, { variant: "outlined", color: "primary", size: "small", startIcon: _jsx(PlusIcon, {}), loading: loading, disabled: disabled, children: "Button" }), _jsx(IpsButton, { variant: "outlined", color: "primary", size: "medium", startIcon: _jsx(PlusIcon, {}), loading: loading, disabled: disabled, children: "Button" }), _jsx(IpsButton, { variant: "outlined", color: "primary", size: "small", loading: loading, disabled: disabled, children: "Button" }), _jsx(IpsButton, { variant: "outlined", color: "primary", size: "medium", loading: loading, disabled: disabled, children: "Button" })] }), _jsx(SectionTitle, { children: "Contained \u2014 Primary" }), _jsxs(Stack, { direction: "row", spacing: 2, alignItems: "center", flexWrap: "wrap", children: [_jsx(IpsButton, { variant: "contained", color: "primary", size: "small", startIcon: _jsx(PlusIcon, {}), loading: loading, disabled: disabled, children: "Button" }), _jsx(IpsButton, { variant: "contained", color: "primary", size: "medium", startIcon: _jsx(PlusIcon, {}), loading: loading, disabled: disabled, children: "Button" }), _jsx(IpsButton, { variant: "contained", color: "primary", size: "small", loading: loading, disabled: disabled, children: "Button" }), _jsx(IpsButton, { variant: "contained", color: "primary", size: "medium", loading: loading, disabled: disabled, children: "Button" })] }), _jsx(SectionTitle, { children: "buttonType shortcuts" }), _jsxs(Stack, { direction: "row", spacing: 2, alignItems: "center", flexWrap: "wrap", children: [_jsx(IpsButton, { buttonType: "add", loading: loading, disabled: disabled, children: "Add" }), _jsx(IpsButton, { buttonType: "save", loading: loading, disabled: disabled, children: "Save" }), _jsx(IpsButton, { buttonType: "clean", loading: loading, disabled: disabled, children: "Clean" }), _jsx(IpsButton, { buttonType: "primary", loading: loading, disabled: disabled, children: "Primary" }), _jsx(IpsButton, { buttonType: "secondary", loading: loading, disabled: disabled, children: "Secondary" })] }), _jsx(SectionTitle, { children: "Link button" }), _jsxs(Stack, { direction: "row", spacing: 2, alignItems: "center", flexWrap: "wrap", children: [_jsx(IpsButton, { buttonType: "link", startIcon: _jsx(ArrowBackIcon, {}), loading: loading, disabled: disabled, children: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u05D8\u05E7\u05E1\u05D8" }), _jsx(IpsButton, { buttonType: "link", startIcon: _jsx(PlusIcon, {}), loading: loading, disabled: disabled, children: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u05D8\u05E7\u05E1\u05D8" }), _jsx(IpsButton, { buttonType: "link", loading: loading, disabled: disabled, children: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u05D8\u05E7\u05E1\u05D8" })] })] }));
}
function TextFieldPanel() {
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [readOnly, setReadOnly] = useState(false);
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState(false);
    const [required, setRequired] = useState(false);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'label', value: 'string', description: 'תווית השדה' },
                    { name: 'required', value: 'boolean', description: 'שדה חובה — מציג כוכבית אדומה בכותרת' },
                    { name: 'type="search"', value: 'string', description: 'מציג אייקון חיפוש אוטומטי' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל את השדה' },
                    { name: 'readOnly', value: 'boolean', description: 'קריאה בלבד' },
                    { name: 'error', value: 'boolean', description: 'מציג שגיאה' },
                    { name: 'helperText', value: 'string', description: 'טקסט עזר מתחת לשדה' },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: readOnly, onChange: e => setReadOnly(e.target.checked) }), label: "readOnly" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: error, onChange: e => setError(e.target.checked) }), label: "error" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: helperText, onChange: e => setHelperText(e.target.checked) }), label: "helperText" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: required, onChange: e => setRequired(e.target.checked) }), label: "required" })] }), _jsxs(Stack, { spacing: 2, children: [_jsx(IpsTextField, { label: "\u05E9\u05D3\u05D4 \u05D8\u05E7\u05E1\u05D8", placeholder: "\u05D4\u05DB\u05E0\u05E1 \u05D8\u05E7\u05E1\u05D8...", value: value, onChange: e => setValue(e.target.value), disabled: disabled, readOnly: readOnly, required: required, error: error, helperText: helperText ? 'זהו טקסט עזר לשדה' : undefined }), _jsx(IpsTextField, { label: "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4", placeholder: "\u05E9\u05D3\u05D4 \u05D6\u05D4 \u05D4\u05D5\u05D0 \u05D7\u05D5\u05D1\u05D4", required: true, error: error, helperText: helperText ? 'שדה חובה' : undefined, disabled: disabled }), _jsx(IpsTextField, { type: "search", placeholder: "\u05D7\u05D9\u05E4\u05D5\u05E9...", disabled: disabled })] })] }));
}
function TextAreaPanel() {
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState(false);
    const [required, setRequired] = useState(false);
    const [wide, setWide] = useState(false);
    const [rows, setRows] = useState(4);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'label', value: 'string', description: 'תווית השדה' },
                    { name: 'required', value: 'boolean', description: 'שדה חובה — כוכבית אדומה בכותרת' },
                    { name: 'wide', value: 'boolean', description: 'רוחב כפול (576px במקום 288px)' },
                    { name: 'rows', value: 'number', description: 'מספר שורות' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל את השדה' },
                    { name: 'error', value: 'boolean', description: 'מציג שגיאה עם אייקון בהלפר טקסט' },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: error, onChange: e => setError(e.target.checked) }), label: "error" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: required, onChange: e => setRequired(e.target.checked) }), label: "required" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: wide, onChange: e => setWide(e.target.checked) }), label: "wide" }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(Typography, { variant: "body2", children: "rows:" }), [2, 4, 6, 8].map(r => (_jsx(IpsButton, { variant: rows === r ? 'contained' : 'outlined', size: "small", onClick: () => setRows(r), children: r }, r)))] })] }), _jsx(IpsTextArea, { label: "\u05E9\u05D3\u05D4 \u05D8\u05E7\u05E1\u05D8 \u05D2\u05D3\u05D5\u05DC", placeholder: "\u05D4\u05DB\u05E0\u05E1 \u05D8\u05E7\u05E1\u05D8 \u05D0\u05E8\u05D5\u05DA...", value: value, onChange: e => setValue(e.target.value), disabled: disabled, required: required, wide: wide, rows: rows, error: error, helperText: error ? 'שגיאה בשדה זה' : 'הכנס תוכן' })] }));
}
function CheckBoxPanel() {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'checked', value: 'boolean', description: 'מצב מסומן' },
                    { name: 'label', value: 'ReactNode', description: 'תווית לצד תיבת הסימון' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל' },
                    { name: 'indeterminate', value: 'boolean', description: 'מצב אינדטרמיניסטי (חלקי)' },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: indeterminate, onChange: e => setIndeterminate(e.target.checked) }), label: "indeterminate" })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(IpsCheckBox, { checked: checked, onChange: e => setChecked(e.target.checked), label: "\u05DC\u05DC\u05D0 \u05EA\u05D5\u05D5\u05D9\u05EA", disabled: disabled, indeterminate: indeterminate }), _jsx(IpsCheckBox, { checked: checked, onChange: e => setChecked(e.target.checked), label: "\u05E2\u05DD \u05EA\u05D5\u05D5\u05D9\u05EA", disabled: disabled, indeterminate: indeterminate }), _jsx(IpsCheckBox, { defaultChecked: true, label: "defaultChecked", disabled: disabled }), _jsx(IpsCheckBox, { checked: checked, onChange: e => setChecked(e.target.checked), label: "\u05E6\u05D1\u05E2 secondary", color: "secondary", disabled: disabled })] })] }));
}
function SwitchPanel() {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'checked', value: 'boolean', description: 'מצב פעיל' },
                    { name: 'label', value: 'string', description: 'תווית לצד המתג' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל' },
                    { name: 'color', value: "'primary' | 'secondary' | 'error'", description: 'צבע המתג' },
                ] }), _jsx(Box, { sx: { mb: 2 }, children: _jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }) }), _jsxs(Stack, { spacing: 1, children: [_jsx(IpsSwitch, { checked: checked, onChange: e => setChecked(e.target.checked), label: "\u05DE\u05EA\u05D2 \u05E8\u05D0\u05E9\u05D9", disabled: disabled }), _jsx(IpsSwitch, { checked: checked, onChange: e => setChecked(e.target.checked), label: "\u05E6\u05D1\u05E2 secondary", color: "secondary", disabled: disabled }), _jsx(IpsSwitch, { checked: checked, onChange: e => setChecked(e.target.checked), label: "\u05E6\u05D1\u05E2 error", color: "error", disabled: disabled }), _jsx(IpsSwitch, { defaultChecked: true, label: "defaultChecked", disabled: disabled })] })] }));
}
function IconButtonPanel() {
    const [disabled, setDisabled] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'icon', value: 'ReactNode', description: 'האייקון להצגה (חובה)' },
                    { name: 'tooltip', value: 'string', description: 'טקסט tooltip בריחוף' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל' },
                    { name: 'size', value: "'small' | 'medium' | 'large'", description: 'גודל הכפתור' },
                    { name: 'color', value: 'string', description: 'צבע' },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: showTooltip, onChange: e => setShowTooltip(e.target.checked) }), label: "tooltip" })] }), _jsx(SectionTitle, { children: "\u05D2\u05D3\u05DC\u05D9\u05DD" }), _jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", children: [_jsx(IpsIconButton, { icon: _jsx(StarIcon, {}), tooltip: showTooltip ? 'Small' : undefined, size: "small", disabled: disabled, sx: { color: 'primary.dark' } }), _jsx(IpsIconButton, { icon: _jsx(StarIcon, {}), tooltip: showTooltip ? 'Medium' : undefined, size: "medium", disabled: disabled, sx: { color: 'primary.dark' } }), _jsx(IpsIconButton, { icon: _jsx(StarIcon, {}), tooltip: showTooltip ? 'Large' : undefined, size: "large", disabled: disabled, sx: { color: 'primary.dark' } })] }), _jsx(SectionTitle, { children: "\u05E6\u05D1\u05E2\u05D9\u05DD" }), _jsxs(Stack, { direction: "row", spacing: 1, children: [_jsx(IpsIconButton, { icon: _jsx(InfoIcon, {}), tooltip: showTooltip ? 'Primary' : undefined, color: "primary", disabled: disabled }), _jsx(IpsIconButton, { icon: _jsx(InfoIcon, {}), tooltip: showTooltip ? 'Secondary' : undefined, color: "secondary", disabled: disabled }), _jsx(IpsIconButton, { icon: _jsx(InfoIcon, {}), tooltip: showTooltip ? 'Error' : undefined, color: "error", disabled: disabled }), _jsx(IpsIconButton, { icon: _jsx(InfoIcon, {}), tooltip: showTooltip ? 'Success' : undefined, color: "success", disabled: disabled })] })] }));
}
function ToolTipsPanel() {
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'title', value: 'string', description: 'תוכן הטולטיפ (חובה)' },
                    { name: 'placement', value: "'top' | 'bottom' | 'left' | 'right'", description: 'מיקום' },
                    { name: 'arrow', value: 'boolean', description: 'מציג חץ' },
                ] }), _jsx(SectionTitle, { children: "\u05DE\u05D9\u05E7\u05D5\u05DE\u05D9\u05DD" }), _jsxs(Stack, { direction: "row", spacing: 2, flexWrap: "wrap", gap: 2, children: [_jsx(IpsToolTips, { title: "Tooltip \u05DC\u05DE\u05E2\u05DC\u05D4", placement: "top", children: _jsx(IpsButton, { variant: "outlined", children: "Top" }) }), _jsx(IpsToolTips, { title: "Tooltip \u05DC\u05DE\u05D8\u05D4", placement: "bottom", children: _jsx(IpsButton, { variant: "outlined", children: "Bottom" }) }), _jsx(IpsToolTips, { title: "Tooltip \u05E9\u05DE\u05D0\u05DC", placement: "left", children: _jsx(IpsButton, { variant: "outlined", children: "Left" }) }), _jsx(IpsToolTips, { title: "Tooltip \u05D9\u05DE\u05D9\u05DF", placement: "right", children: _jsx(IpsButton, { variant: "outlined", children: "Right" }) }), _jsx(IpsToolTips, { title: "\u05E2\u05DD \u05D7\u05E5", placement: "top", arrow: true, children: _jsx(IpsButton, { variant: "outlined", children: "\u05E2\u05DD \u05D7\u05E5" }) })] })] }));
}
function SelectPanel() {
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [readOnly, setReadOnly] = useState(false);
    const [error, setError] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const [multiValue, setMultiValue] = useState([]);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'options', value: '{ label, value }[]', description: 'רשימת האפשרויות' },
                    { name: 'value', value: 'string | number', description: 'ערך נוכחי' },
                    { name: 'label', value: 'string', description: 'תווית' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל' },
                    { name: 'readOnly', value: 'boolean', description: 'קריאה בלבד' },
                    { name: 'multiple', value: 'boolean', description: 'בחירה מרובה' },
                    { name: 'error', value: 'boolean', description: 'מצב שגיאה' },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: readOnly, onChange: e => setReadOnly(e.target.checked) }), label: "readOnly" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: error, onChange: e => setError(e.target.checked) }), label: "error" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: multiple, onChange: e => setMultiple(e.target.checked) }), label: "multiple" })] }), _jsx(Box, { sx: { maxWidth: 350 }, children: multiple ? (_jsx(IpsSelect, { label: "\u05D1\u05D7\u05E8 \u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA", options: options, value: multiValue, onChange: (val) => setMultiValue(Array.isArray(val) ? val : [val]), disabled: disabled, readOnly: readOnly, error: error, multiple: true, helperText: error ? 'שגיאה בבחירה' : 'בחר אחד או יותר' })) : (_jsx(IpsSelect, { label: "\u05D1\u05D7\u05E8 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA", options: options, value: value, onChange: (val) => setValue(val), disabled: disabled, readOnly: readOnly, error: error, helperText: error ? 'שגיאה בבחירה' : 'בחר ערך מהרשימה' })) })] }));
}
function AutocompletePanel() {
    const [value, setValue] = useState(null);
    const [multiValue, setMultiValue] = useState([]);
    const [multiple, setMultiple] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showCheckboxes, setShowCheckboxes] = useState(true);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'options', value: 'T[]', description: 'רשימת אפשרויות (generic)' },
                    { name: 'multiple', value: 'boolean', description: 'בחירה מרובה' },
                    { name: 'showCheckboxes', value: 'boolean', description: 'מציג checkboxes בבחירה מרובה' },
                    { name: 'loading', value: 'boolean', description: 'מצב טעינה' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל' },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: multiple, onChange: e => setMultiple(e.target.checked) }), label: "multiple" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: showCheckboxes, onChange: e => setShowCheckboxes(e.target.checked) }), label: "showCheckboxes" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: loading, onChange: e => setLoading(e.target.checked) }), label: "loading" })] }), _jsx(Box, { sx: { maxWidth: 400 }, children: multiple ? (_jsx(IpsAutocomplete, { options: options, value: multiValue, onChange: (_, v) => setMultiValue(v), multiple: true, showCheckboxes: showCheckboxes, label: "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05E8\u05D5\u05D1\u05D4", disabled: disabled, loading: loading, getOptionLabel: (o) => o.label })) : (_jsx(IpsAutocomplete, { options: options, value: value, onChange: (_, v) => setValue(v), label: "\u05D7\u05D9\u05E4\u05D5\u05E9", disabled: disabled, loading: loading, getOptionLabel: (o) => o.label })) })] }));
}
function ChipSelectPanel() {
    const [value, setValue] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [valueNoSelectAll, setValueNoSelectAll] = useState(['a', 'c']);
    const [valueWithSelectAll, setValueWithSelectAll] = useState(['a', 'c']);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'options', value: '{ label, value }[]', description: 'רשימת אפשרויות' },
                    { name: 'value', value: '(string | number)[]', description: 'ערכים נבחרים' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל (כולל מחיקת chips)' },
                    { name: 'placeholder', value: 'string', description: 'placeholder כשריק' },
                    { name: 'enableSelectAll', value: 'boolean', description: 'מוסיף אפשרות "בחר הכל" בראש הרשימה (ברירת מחדל: false)' },
                    { name: 'selectAllLabel', value: 'string', description: 'טקסט אפשרות "בחר הכל" (ברירת מחדל: "בחר הכל")' },
                    { name: 'allSelectedChipLabel', value: 'string', description: 'טקסט ה-Chip המאוחד כשהכל נבחר (ברירת מחדל: "הכל נבחר")' },
                ] }), _jsx(Box, { sx: { mb: 2 }, children: _jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }) }), _jsx(Box, { sx: { maxWidth: 400 }, children: _jsx(IpsChipSelect, { label: "\u05D1\u05D7\u05E8 \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", options: options, value: value, onChange: vals => setValue(vals), disabled: disabled, placeholder: "\u05D1\u05D7\u05E8 \u05D0\u05D7\u05D3 \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8..." }) }), value.length > 0 && (_jsxs(Typography, { variant: "body2", sx: { mt: 1, color: 'text.secondary' }, children: ["\u05E0\u05D1\u05D7\u05E8: ", value.join(', ')] })), _jsx(SectionTitle, { children: "\u05DC\u05DC\u05D0 Select All" }), _jsx(Box, { sx: { maxWidth: 400 }, children: _jsx(IpsChipSelect, { label: "\u05D1\u05D7\u05E8 \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD (\u05DC\u05DC\u05D0 \u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC)", options: options, value: valueNoSelectAll, onChange: vals => setValueNoSelectAll(vals), placeholder: "\u05D1\u05D7\u05E8 \u05D0\u05D7\u05D3 \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8..." }) }), _jsxs(Typography, { variant: "body2", sx: { mt: 1, color: 'text.secondary' }, children: ["\u05E0\u05D1\u05D7\u05E8: ", valueNoSelectAll.length > 0 ? valueNoSelectAll.join(', ') : '(לא נבחר)'] }), _jsx(SectionTitle, { children: "\u05E2\u05DD Select All" }), _jsx(Box, { sx: { maxWidth: 400 }, children: _jsx(IpsChipSelect, { label: "\u05D1\u05D7\u05E8 \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD (\u05E2\u05DD \u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC)", options: options, value: valueWithSelectAll, onChange: vals => setValueWithSelectAll(vals), enableSelectAll: true, selectAllLabel: "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC", allSelectedChipLabel: "\u05D4\u05DB\u05DC \u05E0\u05D1\u05D7\u05E8", placeholder: "\u05D1\u05D7\u05E8 \u05D0\u05D7\u05D3 \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8..." }) }), _jsxs(Typography, { variant: "body2", sx: { mt: 1, color: 'text.secondary' }, children: ["\u05E0\u05D1\u05D7\u05E8: ", valueWithSelectAll.length > 0 ? valueWithSelectAll.join(', ') : '(לא נבחר)'] })] }));
}
function AccordionPanel() {
    const [disabled, setDisabled] = useState(false);
    const [defaultExpanded, setDefaultExpanded] = useState(false);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'summary', value: 'ReactNode', description: 'כותרת (חובה)' },
                    { name: 'children', value: 'ReactNode', description: 'תוכן מורחב (חובה)' },
                    { name: 'defaultExpanded', value: 'boolean', description: 'פתוח כברירת מחדל' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל פתיחה/סגירה' },
                    { name: 'onChange', value: '(e, expanded) => void', description: 'callback על שינוי' },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1 }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: defaultExpanded, onChange: e => setDefaultExpanded(e.target.checked) }), label: "defaultExpanded" })] }), _jsxs(Box, { sx: { maxWidth: 600 }, children: [_jsx(IpsAccordion, { summary: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05E8\u05D0\u05E9\u05D9\u05EA", disabled: disabled, defaultExpanded: defaultExpanded, onChange: (_, exp) => console.log('expanded:', exp), children: _jsx(Typography, { children: "\u05D6\u05D4\u05D5 \u05EA\u05D5\u05DB\u05DF \u05D4Accordion \u05D4\u05E8\u05D0\u05E9\u05D9. \u05DC\u05D7\u05E5 \u05E2\u05DC \u05D4\u05DB\u05D5\u05EA\u05E8\u05EA \u05DB\u05D3\u05D9 \u05DC\u05E4\u05EA\u05D5\u05D7/\u05DC\u05E1\u05D2\u05D5\u05E8." }) }, String(defaultExpanded)), _jsx(IpsAccordion, { summary: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DE\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA", disabled: disabled, children: _jsxs(Stack, { spacing: 1, children: [_jsx(Typography, { variant: "body2", children: "\u05D4\u05D2\u05D3\u05E8\u05D4 1: \u05E2\u05E8\u05DA \u05D0" }), _jsx(Typography, { variant: "body2", children: "\u05D4\u05D2\u05D3\u05E8\u05D4 2: \u05E2\u05E8\u05DA \u05D1" }), _jsx(Typography, { variant: "body2", children: "\u05D4\u05D2\u05D3\u05E8\u05D4 3: \u05E2\u05E8\u05DA \u05D2" })] }) }), _jsx(IpsAccordion, { summary: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(StarIcon, {}), _jsx("span", { children: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05E2\u05DD \u05D0\u05D9\u05D9\u05E7\u05D5\u05DF" })] }), disabled: disabled, children: _jsx(Typography, { children: "\u05EA\u05D5\u05DB\u05DF \u05E2\u05DD JSX \u05D1\u05DB\u05D5\u05EA\u05E8\u05EA!" }) })] })] }));
}
function PillSelectPanel() {
    const [singleValue, setSingleValue] = useState('');
    const [multiValue, setMultiValue] = useState(['a']);
    const [disabled, setDisabled] = useState(false);
    const [size, setSize] = useState('medium');
    const pillOptions = [
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Angular', value: 'angular' },
        { label: 'Svelte', value: 'svelte' },
    ];
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'options', value: '{ label, value }[]', description: 'רשימת האפשרויות' },
                    { name: 'value', value: 'string | number | array', description: 'ערך נוכחי (מחרוזת בודדת או מערך)' },
                    { name: 'multiple', value: 'boolean', description: 'בחירה מרובה' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל אינטראקציה' },
                    { name: 'size', value: "'small' | 'medium'", description: 'גודל ה-pills' },
                    { name: 'onChange', value: '(value) => void', description: 'callback בשינוי' },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: size === 'small', onChange: e => setSize(e.target.checked ? 'small' : 'medium') }), label: "size=small" })] }), _jsx(SectionTitle, { children: "\u05D1\u05D7\u05D9\u05E8\u05D4 \u05D9\u05D7\u05D9\u05D3\u05D4 (\u05E2\u05DD toggle)" }), _jsx(IpsPillSelect, { options: pillOptions, value: singleValue, onChange: v => setSingleValue(v), disabled: disabled, size: size }), _jsxs(Typography, { variant: "body2", sx: { mt: 1, color: 'text.secondary' }, children: ["\u05E0\u05D1\u05D7\u05E8: ", singleValue || '(לא נבחר)'] }), _jsx(SectionTitle, { children: "\u05D1\u05D7\u05D9\u05E8\u05D4 \u05DE\u05E8\u05D5\u05D1\u05D4" }), _jsx(IpsPillSelect, { options: pillOptions, value: multiValue, onChange: v => setMultiValue(v), multiple: true, disabled: disabled, size: size }), _jsxs(Typography, { variant: "body2", sx: { mt: 1, color: 'text.secondary' }, children: ["\u05E0\u05D1\u05D7\u05E8\u05D5: ", multiValue.length > 0 ? multiValue.join(', ') : '(לא נבחר)'] })] }));
}
function TimePickerPanel() {
    const [value, setValue] = useState(null);
    const [valueWithDefault, setValueWithDefault] = useState(moment('14:30', 'HH:mm'));
    const [workHoursValue, setWorkHoursValue] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [ampm, setAmpm] = useState(false);
    const [error, setError] = useState(false);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'value', value: 'Moment | null', description: 'ערך נוכחי (controlled)' },
                    { name: 'onChange', value: '(value) => void', description: 'callback בשינוי' },
                    { name: 'label', value: 'string', description: 'תווית' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל' },
                    { name: 'ampm', value: 'boolean', description: 'פורמט 12 שעות (AM/PM)' },
                    { name: 'error', value: 'boolean', description: 'מצב שגיאה בשדה' },
                    { name: 'helperText', value: 'string', description: 'טקסט עזרה / שגיאה מתחת השדה' },
                    { name: 'minTime', value: 'Moment', description: 'שעה מינימלית' },
                    { name: 'maxTime', value: 'Moment', description: 'שעה מקסימלית' },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: ampm, onChange: e => setAmpm(e.target.checked) }), label: "AM/PM" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: error, onChange: e => setError(e.target.checked) }), label: "error" })] }), _jsxs(Stack, { spacing: 3, sx: { maxWidth: 320 }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: "\u05D1\u05D7\u05D9\u05E8\u05D4 \u05E8\u05D9\u05E7\u05D4" }), _jsx(IpsTimePicker, { label: "\u05D1\u05D7\u05E8 \u05E9\u05E2\u05D4", value: value, onChange: v => setValue(v), disabled: disabled, ampm: ampm, error: error, helperText: error ? 'שגיאה: שדה חובה' : 'בחר שעה' }), value && (_jsxs(Typography, { variant: "caption", sx: { mt: 0.5, display: 'block', color: 'text.secondary' }, children: ["\u05E0\u05D1\u05D7\u05E8: ", value.format(ampm ? 'hh:mm A' : 'HH:mm')] }))] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: "\u05E2\u05DD \u05E2\u05E8\u05DA \u05D4\u05EA\u05D7\u05DC\u05EA\u05D9 (14:30)" }), _jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05EA \u05E4\u05D2\u05D9\u05E9\u05D4", value: valueWithDefault, onChange: v => setValueWithDefault(v), disabled: disabled, ampm: ampm })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: "\u05E9\u05E2\u05D5\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05DC\u05D1\u05D3 (09:00\u201317:00)" }), _jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D5\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4", value: workHoursValue, onChange: v => setWorkHoursValue(v), ampm: false, minTime: moment('09:00', 'HH:mm'), maxTime: moment('17:00', 'HH:mm') }), workHoursValue && (_jsxs(Typography, { variant: "caption", sx: { mt: 0.5, display: 'block', color: 'text.secondary' }, children: ["\u05E0\u05D1\u05D7\u05E8: ", workHoursValue.format('HH:mm')] }))] })] })] }));
}
// ─── Main App ────────────────────────────────────────────────────────────────
function DatePickerPanel() {
    const [value, setValue] = useState(null);
    const [valueWithDate, setValueWithDate] = useState(new Date(2025, 0, 15));
    const [disabled, setDisabled] = useState(false);
    const [readOnly, setReadOnly] = useState(false);
    const [error, setError] = useState(false);
    const [rtl, setRtl] = useState(false);
    const today = new Date();
    const in30Days = new Date(today);
    in30Days.setDate(today.getDate() + 30);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'value', value: 'Date | null', description: 'ערך נוכחי (controlled)' },
                    { name: 'onChange', value: '(value: Date | null) => void', description: 'callback בשינוי' },
                    { name: 'label', value: 'string', description: 'תווית' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל את השדה' },
                    { name: 'readOnly', value: 'boolean', description: 'קריאה בלבד' },
                    { name: 'rtl', value: 'boolean', description: 'כיוון טקסט מימין לשמאל' },
                    { name: 'error', value: 'boolean', description: 'מצב שגיאה' },
                    { name: 'helperText', value: 'string', description: 'טקסט עזרה / שגיאה מתחת השדה' },
                    { name: 'minDate', value: 'Date', description: 'תאריך מינימלי' },
                    { name: 'maxDate', value: 'Date', description: 'תאריך מקסימלי' },
                    { name: 'format', value: 'string', description: "פורמט תאריך (ברירת מחדל: 'dd/MM/yyyy')" },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: readOnly, onChange: e => setReadOnly(e.target.checked) }), label: "readOnly" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: error, onChange: e => setError(e.target.checked) }), label: "error" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: rtl, onChange: e => setRtl(e.target.checked) }), label: "RTL" })] }), _jsxs(Stack, { spacing: 3, sx: { maxWidth: 320 }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: "\u05D1\u05D7\u05D9\u05E8\u05D4 \u05E8\u05D9\u05E7\u05D4" }), _jsx(IpsDatePicker, { label: "\u05D1\u05D7\u05E8 \u05EA\u05D0\u05E8\u05D9\u05DA", value: value, onChange: v => setValue(v), disabled: disabled, readOnly: readOnly, rtl: rtl, error: error, helperText: error ? 'שגיאה: שדה חובה' : 'DD/MM/YYYY' }), value && (_jsxs(Typography, { variant: "caption", sx: { mt: 0.5, display: 'block', color: 'text.secondary' }, children: ["\u05E0\u05D1\u05D7\u05E8: ", value.toLocaleDateString('he-IL')] }))] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: "\u05E2\u05DD \u05E2\u05E8\u05DA \u05D4\u05EA\u05D7\u05DC\u05EA\u05D9 (15/01/2025)" }), _jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E4\u05D2\u05D9\u05E9\u05D4", value: valueWithDate, onChange: v => setValueWithDate(v), disabled: disabled, readOnly: readOnly, rtl: rtl })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: "\u05D8\u05D5\u05D5\u05D7 \u05DE\u05D9\u05E0\u05D9\u05DE\u05DC\u05D9/\u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9 (\u05D4\u05D9\u05D5\u05DD \u05E2\u05D3 +30 \u05D9\u05D5\u05DD)" }), _jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D6\u05DE\u05D9\u05DF", value: null, onChange: () => { }, minDate: today, maxDate: in30Days, rtl: rtl })] })] })] }));
}
function DateTimePickerPanel() {
    const [value, setValue] = useState(null);
    const [valueWithDate, setValueWithDate] = useState(new Date(2025, 0, 15, 14, 30));
    const [disabled, setDisabled] = useState(false);
    const [readOnly, setReadOnly] = useState(false);
    const [error, setError] = useState(false);
    const [rtl, setRtl] = useState(false);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'value', value: 'Date | null', description: 'ערך נוכחי (controlled)' },
                    { name: 'onChange', value: '(value: Date | null) => void', description: 'callback בשינוי' },
                    { name: 'label', value: 'string', description: 'תווית' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל את השדה' },
                    { name: 'readOnly', value: 'boolean', description: 'קריאה בלבד' },
                    { name: 'rtl', value: 'boolean', description: 'כיווון טקסט מימין לשמאל' },
                    { name: 'error', value: 'boolean', description: 'מצב שגיאה' },
                    { name: 'helperText', value: 'string', description: 'טקסט עזרה / שגיאה מתחת השדה' },
                    { name: 'format', value: 'string', description: "פורמט תאריך (ברירת מחדל: 'dd/MM/yyyy HH:mm')" },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: readOnly, onChange: e => setReadOnly(e.target.checked) }), label: "readOnly" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: error, onChange: e => setError(e.target.checked) }), label: "error" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: rtl, onChange: e => setRtl(e.target.checked) }), label: "RTL" })] }), _jsxs(Stack, { spacing: 3, sx: { maxWidth: 360 }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: "\u05D1\u05D7\u05D9\u05E8\u05D4 \u05E8\u05D9\u05E7\u05D4" }), _jsx(IpsDateTimePicker, { label: "\u05D1\u05D7\u05E8 \u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: value, onChange: v => setValue(v), disabled: disabled, readOnly: readOnly, rtl: rtl, error: error, helperText: error ? 'שגיאה: שדה חובה' : 'DD/MM/YYYY HH:MM' }), value && (_jsxs(Typography, { variant: "caption", sx: { mt: 0.5, display: 'block', color: 'text.secondary' }, children: ["\u05E0\u05D1\u05D7\u05E8: ", value.toLocaleString('he-IL')] }))] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: "\u05E2\u05DD \u05E2\u05E8\u05DA \u05D4\u05EA\u05D7\u05DC\u05EA\u05D9 (15/01/2025 14:30)" }), _jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E4\u05D2\u05D9\u05E9\u05D4", value: valueWithDate, onChange: v => setValueWithDate(v), disabled: disabled, readOnly: readOnly, rtl: rtl })] })] })] }));
}
function IpsTablePanel() {
    const ROWS = [
        { id: 1, name: 'Alice Cohen', role: 'Developer', dept: 'R&D', status: 'פעיל', avatar: 'https://i.pravatar.cc/40?u=1', profile: '/users/1' },
        { id: 2, name: 'Bob Levi', role: 'Designer', dept: 'Product', status: 'פעיל', avatar: 'https://i.pravatar.cc/40?u=2', profile: '/users/2' },
        { id: 3, name: 'Carol Shapir', role: 'PM', dept: 'Product', status: 'חופשה', avatar: 'https://i.pravatar.cc/40?u=3', profile: '/users/3' },
        { id: 4, name: 'Dan Mizrahi', role: 'QA', dept: 'R&D', status: 'פעיל', avatar: 'https://i.pravatar.cc/40?u=4', profile: '/users/4' },
        { id: 5, name: 'Eve Katz', role: 'DevOps', dept: 'Infra', status: 'לא פעיל', avatar: 'https://i.pravatar.cc/40?u=5', profile: '/users/5' },
        { id: 6, name: 'Frank Avraham', role: 'Analyst', dept: 'BI', status: 'פעיל', avatar: 'https://i.pravatar.cc/40?u=6', profile: '/users/6' },
    ];
    const BASIC_COLS = [
        { key: 'name', label: 'שם', width: 160 },
        { key: 'role', label: 'תפקיד', width: 140 },
        { key: 'dept', label: 'מחלקה', width: 140 },
        { key: 'status', label: 'סטטוס', width: 120 },
    ];
    const STATUS_COLOR = {
        'פעיל': 'success', 'חופשה': 'warning', 'לא פעיל': 'error',
    };
    const [striped, setStriped] = useState(true);
    const [dense, setDense] = useState(false);
    const [stickyHeader, setStickyHeader] = useState(false);
    const [showEmpty, setShowEmpty] = useState(false);
    const [enableRowClick, setEnableRowClick] = useState(false);
    const [lastClick, setLastClick] = useState(null);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'columns', value: 'IpsTableColumn<Row>[]', description: 'הגדרות עמודות — generic על Row (חובה)' },
                    { name: 'rows', value: 'Row[]', description: 'מערך שורות (חובה)' },
                    { name: 'maxHeight', value: 'number | string', description: 'גובה מקסימלי + overflow:auto לגלילה אנכית' },
                    { name: 'stickyHeader', value: 'boolean', description: 'כותרת קבועה בגלילה (דורש maxHeight)' },
                    { name: 'wrap', value: "'ellipsis'|'wrap'|'nowrap'", description: "ברירת מחדל לגלישת טקסט לכל העמודות (ברירת מחדל: 'ellipsis')" },
                    { name: 'col.wrap', value: "'ellipsis'|'wrap'|'nowrap'", description: 'עקיפת wrap ברמת עמודה בודדת' },
                    { name: 'col.type', value: "'link'|'image'|'text'", description: "רנדר מובנה לתא — 'link' מרנדר <Link>, 'image' מרנדר <img>" },
                    { name: 'col.render', value: '(val, row, i) => ReactNode', description: 'רנדר מלא מותאם — עדיפות על col.type' },
                    { name: 'onRowClick', value: '(e, row, idx) => void', description: 'לחיצה על שורה — מפעיל cursor:pointer אוטומטית' },
                    { name: 'onRowDoubleClick', value: '(e, row, idx) => void', description: 'לחיצה כפולה על שורה' },
                    { name: 'hover', value: 'boolean', description: 'hover highlight — auto כשיש row handler' },
                    { name: 'getRowId', value: '(row, i) => string|number', description: 'מפתח React יציב לכל שורה (ברירת מחדל: row.id ← index)' },
                    { name: 'striped', value: 'boolean', description: 'שורות זוגיות בצבע אפור (ברירת מחדל: true)' },
                    { name: 'dense', value: 'boolean', description: 'ריווח מצומצם' },
                    { name: 'emptyText', value: 'string', description: "טקסט כשאין שורות (ברירת מחדל: 'No data')" },
                ] }), _jsx(SectionTitle, { children: "\u05D8\u05D1\u05DC\u05D4 \u05D1\u05E1\u05D9\u05E1\u05D9\u05EA" }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: striped, onChange: e => setStriped(e.target.checked) }), label: "striped" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: dense, onChange: e => setDense(e.target.checked) }), label: "dense" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: stickyHeader, onChange: e => setStickyHeader(e.target.checked) }), label: "stickyHeader + maxHeight" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: showEmpty, onChange: e => setShowEmpty(e.target.checked) }), label: "empty state" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: enableRowClick, onChange: e => { setEnableRowClick(e.target.checked); setLastClick(null); } }), label: "onRowClick" })] }), _jsx(IpsTable, { columns: BASIC_COLS, rows: showEmpty ? [] : ROWS, striped: striped, dense: dense, stickyHeader: stickyHeader, maxHeight: stickyHeader ? 220 : undefined, emptyText: "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4", onRowClick: enableRowClick ? (_e, row) => setLastClick(row.name) : undefined }), enableRowClick && (_jsx(Typography, { variant: "caption", sx: { mt: 0.5, display: 'block', color: 'text.secondary' }, children: lastClick ? `✓ נלחץ על: ${lastClick}` : 'לחץ על שורה כלשהי...' })), _jsx(SectionTitle, { children: "\u05E1\u05D5\u05D2\u05D9 \u05E2\u05DE\u05D5\u05D3\u05D5\u05EA \u2014 \u05EA\u05DE\u05D5\u05E0\u05D4 \u00B7 \u05E7\u05D9\u05E9\u05D5\u05E8 \u00B7 Chip \u05DE\u05D5\u05EA\u05D0\u05DD" }), _jsx(IpsTable, { rows: ROWS, columns: [
                    {
                        key: 'avatar',
                        label: 'תמונה',
                        width: 70,
                        wrap: 'nowrap',
                        type: 'image',
                        imageSrc: (row) => row.avatar,
                        imageProps: { width: 36, height: 36, rounded: true, alt: 'avatar' },
                    },
                    {
                        key: 'name',
                        label: 'שם (קישור חיצוני)',
                        width: 180,
                        type: 'link',
                        href: (row) => row.profile,
                        linkTarget: '_blank',
                    },
                    { key: 'role', label: 'תפקיד', width: 130 },
                    {
                        key: 'status',
                        label: 'סטטוס',
                        width: 130,
                        wrap: 'nowrap',
                        render: (value) => {
                            const v = value;
                            return _jsx(Chip, { label: v, color: STATUS_COLOR[v] ?? 'default', size: "small" });
                        },
                    },
                ], striped: true }), _jsx(SectionTitle, { children: "\u05DE\u05E6\u05D1\u05D9 \u05D2\u05DC\u05D9\u05E9\u05EA \u05D8\u05E7\u05E1\u05D8 (col.wrap)" }), ['ellipsis', 'wrap', 'nowrap'].map(mode => (_jsxs(Box, { sx: { mb: 2 }, children: [_jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 0.5, fontFamily: 'monospace' }, children: ["wrap=\"", mode, "\""] }), _jsx(IpsTable, { columns: [
                            { key: 'label', label: 'מצב', width: 90 },
                            { key: 'text', label: 'טקסט לדוגמה', width: 260, wrap: mode },
                            { key: 'icon', label: 'איקון', width: 90 },
                            { key: 'yy', label: 'פרטים', width: 90 },
                            { key: 'xx', label: 'טלפון', width: 90 }
                        ], rows: [{ label: mode, text: 'זהו טקסט ארוך מאוד שנועד להדגים את ההבדל בין מצבי הגלישה השונים הזמינים בקומפוננטה' }], striped: false })] }, mode)))] }));
}
const DT_DATA = [
    { id: 1, name: 'Alice Cohen', role: 'Developer', department: 'R&D', salary: 32000, status: 'פעיל', projects: [{ name: 'Portal', status: 'בביצוע', due: '2026-08-01' }, { name: 'API v3', status: 'הושלם', due: '2026-03-15' }] },
    { id: 2, name: 'Bob Levi', role: 'Designer', department: 'Product', salary: 28000, status: 'פעיל', projects: [{ name: 'Design System', status: 'בביצוע', due: '2026-07-01' }] },
    { id: 3, name: 'Carol Shapir', role: 'PM', department: 'Product', salary: 35000, status: 'חופשה', projects: [] },
    { id: 4, name: 'Dan Mizrahi', role: 'QA', department: 'R&D', salary: 26000, status: 'פעיל', projects: [{ name: 'Portal', status: 'בביצוע', due: '2026-08-01' }] },
    { id: 5, name: 'Eve Katz', role: 'DevOps', department: 'Infra', salary: 38000, status: 'פעיל', projects: [{ name: 'CI/CD', status: 'הושלם', due: '2026-01-30' }] },
    { id: 6, name: 'Frank Avraham', role: 'Developer', department: 'R&D', salary: 31000, status: 'מחלה', projects: [] },
    { id: 7, name: 'Gal Bar-On', role: 'Analyst', department: 'BI', salary: 29000, status: 'פעיל', projects: [{ name: 'Dashboard', status: 'בתכנון', due: '2026-10-01' }] },
];
const DT_PROJECT_COLS = [
    { id: 'name', header: 'שם פרויקט', accessorKey: 'name' },
    { id: 'status', header: 'סטטוס', accessorKey: 'status' },
    { id: 'due', header: 'תאריך יעד', accessorKey: 'due', align: 'center' },
];
const DT_COLUMNS = [
    { accessorKey: 'id', header: 'מזהה', size: 60 },
    { accessorKey: 'name', header: 'שם', meta: { editable: { type: 'text', mode: 'click' }, width: 160 } },
    { accessorKey: 'role', header: 'תפקיד', meta: { editable: { type: 'select', options: [
                    { value: 'Developer', label: 'Developer' }, { value: 'Designer', label: 'Designer' },
                    { value: 'PM', label: 'PM' }, { value: 'QA', label: 'QA' }, { value: 'DevOps', label: 'DevOps' },
                    { value: 'Analyst', label: 'Analyst' },
                ] } } },
    { accessorKey: 'department', header: 'מחלקה' },
    { accessorKey: 'salary', header: 'שכר (₪)', meta: { align: 'end', editable: { type: 'number' } },
        cell: ({ getValue }) => `₪${getValue().toLocaleString()}` },
    { accessorKey: 'status', header: 'סטטוס',
        cell: ({ getValue }) => {
            const v = getValue();
            const color = v === 'פעיל' ? 'success.main' : v === 'חופשה' ? 'warning.main' : 'error.main';
            return _jsx(Box, { component: "span", sx: { color, fontWeight: 600 }, children: v });
        }
    },
];
function DataTablePanel() {
    const [rows, setRows] = useState(DT_DATA);
    const [sorting, setSorting] = useState(false);
    const [filtering, setFiltering] = useState(false);
    const [pagination, setPagination] = useState(false);
    const [expand, setExpand] = useState(false);
    const [inlineEdit, setInlineEdit] = useState(false);
    const [withDelete, setWithDelete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [variant, setVariant] = useState('default');
    const [size, setSize] = useState('md');
    const handleSave = async (_orig, updated) => {
        setRows(prev => prev.map(r => r.id === updated.id ? updated : r));
    };
    const handleDelete = (row) => {
        setRows(prev => prev.filter(r => r.id !== row.id));
    };
    const customActions = [
        {
            key: 'view',
            label: 'צפייה בפרויקטים',
            icon: _jsx(Box, { component: "span", sx: { fontSize: 16 }, children: "\uD83D\uDCC2" }),
            onClick: (row) => alert(`${row.name} — ${row.projects?.length ?? 0} פרויקטים`),
            isVisible: (row) => (row.projects?.length ?? 0) > 0,
        },
    ];
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'data / columns', value: 'T[] / ColumnDef<T>[]', description: 'נתונים והגדרות עמודות (חובה)' },
                    { name: 'sorting', value: 'boolean | SortingState', description: 'הפעלת מיון (true = uncontrolled)' },
                    { name: 'filtering', value: 'boolean | FilterConfig', description: 'חיפוש גלובלי / per-column' },
                    { name: 'pagination', value: 'PaginationConfig | false', description: 'עימוד (false = כל השורות)' },
                    { name: 'expandedContent', value: '(row) => ReactNode', description: 'תוכן מורחב לכל שורה' },
                    { name: 'onSave', value: '(orig, updated) => void', description: 'עריכה מוטבעת — לחץ 🖊 לעריכה' },
                    { name: 'onDelete', value: '(row) => void', description: 'מחיקה עם אישור dialog' },
                    { name: 'variant', value: "'default' | 'bordered' | 'striped'", description: 'גרסת עיצוב' },
                    { name: 'size', value: "'sm' | 'md' | 'lg'", description: 'גודל שורה' },
                    { name: 'isLoading', value: 'boolean', description: 'מצב טעינה — Skeleton animation' },
                    { name: 'cellOverflow', value: "'wrap' | 'ellipsis'", description: 'טקסט ארוך: עוטף ומגדיל שורה (ברירת מחדל), או התאמה אוטומטית של רוחב העמודות לתוכן + חיתוך ב-… עם טולטיפ' },
                    { name: 'maxHeight', value: 'number | string', description: 'תקרת גובה כוללת; הטבלה גם ממלאת לבד גובה שהוקצה לה' },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: sorting, onChange: e => setSorting(e.target.checked) }), label: "sorting" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: filtering, onChange: e => setFiltering(e.target.checked) }), label: "filtering" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: pagination, onChange: e => setPagination(e.target.checked) }), label: "pagination" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: expand, onChange: e => setExpand(e.target.checked) }), label: "expandedContent" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: inlineEdit, onChange: e => setInlineEdit(e.target.checked) }), label: "onSave (inline edit)" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: withDelete, onChange: e => setWithDelete(e.target.checked) }), label: "onDelete" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: loading, onChange: e => setLoading(e.target.checked) }), label: "isLoading" })] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }, children: [_jsx(Typography, { variant: "body2", sx: { mr: 1 }, children: "variant:" }), ['default', 'bordered', 'striped'].map(v => (_jsx(IpsButton, { size: "small", variant: variant === v ? 'contained' : 'outlined', onClick: () => setVariant(v), children: v }, v))), _jsx(Box, { sx: { mx: 1 } }), _jsx(Typography, { variant: "body2", sx: { mr: 1 }, children: "size:" }), ['sm', 'md', 'lg'].map(s => (_jsx(IpsButton, { size: "small", variant: size === s ? 'contained' : 'outlined', onClick: () => setSize(s), children: s }, s))), (inlineEdit || withDelete) && (_jsx(IpsButton, { size: "small", buttonType: "clean", onClick: () => setRows(DT_DATA), sx: { ml: 2 }, children: "\u05D0\u05D9\u05E4\u05D5\u05E1 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD" }))] }), _jsx(IpsDataTable, { data: rows, columns: DT_COLUMNS, sorting: sorting, filtering: filtering, pagination: pagination ? { pageSize: 4, pageSizeOptions: [4, 7], showTotal: true } : false, expandedContent: expand ? (row) => (_jsx(ExpandedRow, { title: `פרויקטים של ${row.name}`, subData: row.projects, subColumns: DT_PROJECT_COLS })) : undefined, onSave: inlineEdit ? handleSave : undefined, onDelete: withDelete ? handleDelete : undefined, customActions: customActions, isLoading: loading, variant: variant, size: size }), _jsx(SectionTitle, { children: "\u05D4\u05EA\u05D0\u05DE\u05D4 \u05DC\u05D2\u05D5\u05D1\u05D4 \u05E7\u05D1\u05D5\u05E2 (\u05E8\u05E1\u05E4\u05D5\u05E0\u05E1\u05D9\u05D1\u05D9\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4)" }), _jsx(DataTableFixedHeightDemo, {}), _jsx(SectionTitle, { children: "cellOverflow \u2014 \u05D7\u05D9\u05EA\u05D5\u05DA \u05E2\u05DD 3 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D5\u05D8\u05D5\u05DC\u05D8\u05D9\u05E4" }), _jsx(DataTableOverflowDemo, {})] }));
}
// ─── IpsDataTable — fixed-height container demo ─────────────────────────────
const DT_LONG_NOTE = 'הערה ארוכה במיוחד לצורך הדגמה: כוללת פרטי מיקום, טלפון ליצירת קשר, ' +
    'הערות מנהל ישיר, מגבלות תקציב והנחיות נוספות שנמשכות על פני כמה שורות טקסט.';
const DT_COLUMNS_LONG = [
    ...DT_COLUMNS,
    {
        id: 'notes',
        header: 'הערות',
        accessorFn: () => DT_LONG_NOTE,
        meta: { width: 280 },
    },
];
const DT_HEIGHTS = [220, 340, 520];
const DT_WIDTHS = [520, 760, 1000];
function DataTableFixedHeightDemo() {
    const [height, setHeight] = useState(340);
    const [loading, setLoading] = useState(true);
    const [longText, setLongText] = useState(true);
    const [withPagination, setWithPagination] = useState(true);
    return (_jsxs(Box, { children: [_jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1.5 }, children: ["\u05D4\u05DE\u05E1\u05D2\u05E8\u05EA \u05D4\u05DE\u05E7\u05D5\u05D5\u05E7\u05D5\u05D5\u05EA \u05D4\u05D9\u05D0 \u05D4-", _jsx("code", { children: "div" }), " \u05D4\u05E2\u05D5\u05D8\u05E3 \u05D1\u05D2\u05D5\u05D1\u05D4 \u05E7\u05D1\u05D5\u05E2. \u05D4\u05D8\u05D1\u05DC\u05D4 \u05DE\u05DE\u05DC\u05D0\u05EA \u05D0\u05D5\u05EA\u05D5 \u05D1\u05D3\u05D9\u05D5\u05E7: \u05D4\u05E1\u05E7\u05DC\u05D8\u05D5\u05DF \u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E9\u05D5\u05E8\u05D5\u05EA \u05E9\u05E0\u05DB\u05E0\u05E1\u05D5\u05EA, \u05E4\u05E1 \u05D4\u05E2\u05D9\u05DE\u05D5\u05D3 \u05EA\u05DE\u05D9\u05D3 \u05D2\u05DC\u05D5\u05D9 \u05DE\u05EA\u05D7\u05EA \u05DC\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D2\u05DC\u05D9\u05DC\u05D4, \u05D5\u05D8\u05E7\u05E1\u05D8 \u05D0\u05E8\u05D5\u05DA \u05E2\u05D5\u05D8\u05E3 \u05D5\u05D2\u05D5\u05DC\u05DC \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05D4\u05D9\u05D7\u05EA\u05DA. \u05E9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05D2\u05D5\u05D1\u05D4 \u05D5\u05D4\u05E4\u05E2\u05D9\u05DC\u05D5 \u05D0\u05EA \u05D4\u05DE\u05EA\u05D2\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05E8\u05D0\u05D5\u05EA \u05E9\u05D0\u05D9\u05DF \u05D2\u05DC\u05D9\u05E9\u05D4 \u05D1\u05E9\u05D5\u05DD \u05DE\u05E6\u05D1."] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }, children: [_jsx(Typography, { variant: "body2", sx: { mr: 1 }, children: "\u05D2\u05D5\u05D1\u05D4 \u05D4\u05DE\u05DB\u05DC:" }), DT_HEIGHTS.map((h) => (_jsxs(IpsButton, { size: "small", variant: height === h ? 'contained' : 'outlined', onClick: () => setHeight(h), children: [h, "px"] }, h))), _jsx(Box, { sx: { mx: 1 } }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: loading, onChange: (e) => setLoading(e.target.checked) }), label: "isLoading" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: longText, onChange: (e) => setLongText(e.target.checked) }), label: "\u05E2\u05DE\u05D5\u05D3\u05EA \u05D8\u05E7\u05E1\u05D8 \u05D0\u05E8\u05D5\u05DA" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: withPagination, onChange: (e) => setWithPagination(e.target.checked) }), label: "pagination" })] }), _jsx(Box, { sx: {
                    height,
                    p: 1,
                    border: '2px dashed',
                    borderColor: 'primary.light',
                    borderRadius: 1,
                    backgroundColor: 'grey.50',
                    transition: 'height 200ms ease',
                }, children: _jsx(IpsDataTable, { data: DT_DATA, columns: longText ? DT_COLUMNS_LONG : DT_COLUMNS, isLoading: loading, sorting: true, pagination: withPagination ? { pageSize: 5, pageSizeOptions: [5, 10], showTotal: true } : false }) })] }));
}
const NOTES_MODES = [
    { key: 'natural', label: 'ללא הגדרות (אוטומטי)', hint: 'הטבלה מודדת לבד: מזהה/שם/תפקיד/סטטוס נשארים ברוחב התוכן, וההערות מקבלות את מה שנשאר ונחתכות' },
    { key: 'width', label: 'meta.width: 280', hint: 'ההערות מקובעות ל-280px ויוצאות מהחלוקה האוטומטית' },
    { key: 'flex', label: "meta.overflow: 'wrap'", hint: 'חריגה: ההערות ממשיכות לעטוף ולהגדיל את השורה, שאר העמודות עדיין מותאמות אוטומטית' },
];
function DataTableOverflowDemo() {
    const [overflow, setOverflow] = useState('ellipsis');
    const [width, setWidth] = useState(760);
    const [notesMode, setNotesMode] = useState('natural');
    const columns = DT_COLUMNS_LONG.map((c) => {
        if (c.id !== 'notes')
            return c;
        if (notesMode === 'width')
            return c;
        if (notesMode === 'flex')
            return { ...c, meta: { overflow: 'wrap' } };
        return { ...c, meta: {} };
    });
    return (_jsxs(Box, { children: [_jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1.5 }, children: [_jsx("code", { children: "cellOverflow=\"ellipsis\"" }), " \u05DC\u05D1\u05D3 \u05DE\u05E1\u05E4\u05D9\u05E7 \u2014 ", _jsx("b", { children: "\u05D0\u05D9\u05DF \u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05D2\u05D3\u05D9\u05E8 \u05E8\u05D5\u05D7\u05D1 \u05DC\u05D0\u05E3 \u05E2\u05DE\u05D5\u05D3\u05D4" }), ". \u05D4\u05D8\u05D1\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D3\u05EA \u05D0\u05EA \u05E8\u05D5\u05D7\u05D1 \u05D4\u05EA\u05D5\u05DB\u05DF \u05D4\u05D8\u05D1\u05E2\u05D9 \u05E9\u05DC \u05DB\u05DC \u05E2\u05DE\u05D5\u05D3\u05D4 \u05D5\u05DE\u05D7\u05DC\u05E7\u05EA \u05D0\u05EA \u05D4\u05DE\u05E7\u05D5\u05DD \u05DE\u05D4\u05E6\u05E8\u05D4 \u05DC\u05E8\u05D7\u05D1\u05D4: \u05D4\u05E2\u05DE\u05D5\u05D3\u05D5\u05EA \u05D4\u05E7\u05E6\u05E8\u05D5\u05EA \u05DE\u05E7\u05D1\u05DC\u05D5\u05EA \u05D0\u05EA \u05DE\u05DC\u05D5\u05D0 \u05D4\u05E8\u05D5\u05D7\u05D1 \u05E9\u05DC\u05D4\u05DF, \u05D5\u05E8\u05E7 \u05D0\u05DC\u05D4 \u05E9\u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0 \u05E0\u05DB\u05E0\u05E1\u05D5\u05EA \u05DE\u05EA\u05D7\u05DC\u05E7\u05D5\u05EA \u05D1\u05DE\u05D4 \u05E9\u05E0\u05E9\u05D0\u05E8 \u05D5\u05E0\u05D7\u05EA\u05DB\u05D5\u05EA \u05D1-", _jsx("b", { children: "\u2026" }), " \u05E2\u05DD \u05D8\u05D5\u05DC\u05D8\u05D9\u05E4. \u05D4\u05D7\u05DC\u05D5\u05E7\u05D4 \u05DE\u05D7\u05D5\u05E9\u05D1\u05EA \u05DE\u05D7\u05D3\u05E9 \u05D1\u05DB\u05DC \u05E9\u05D9\u05E0\u05D5\u05D9 \u05E8\u05D5\u05D7\u05D1 \u05D0\u05D5 \u05EA\u05D5\u05DB\u05DF."] }), _jsxs(Box, { sx: { mb: 1, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }, children: [_jsx(Typography, { variant: "body2", sx: { mr: 1 }, children: "cellOverflow:" }), ['wrap', 'ellipsis'].map((v) => (_jsx(IpsButton, { size: "small", variant: overflow === v ? 'contained' : 'outlined', onClick: () => setOverflow(v), children: v }, v))), _jsx(Box, { sx: { mx: 1 } }), _jsx(Typography, { variant: "body2", sx: { mr: 1 }, children: "\u05E8\u05D5\u05D7\u05D1 \u05D4\u05DE\u05DB\u05DC:" }), DT_WIDTHS.map((w) => (_jsxs(IpsButton, { size: "small", variant: width === w ? 'contained' : 'outlined', onClick: () => setWidth(w), children: [w, "px"] }, w)))] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }, children: [_jsx(Typography, { variant: "body2", sx: { mr: 1 }, children: "\u05E2\u05DE\u05D5\u05D3\u05EA \u05D4\u05D4\u05E2\u05E8\u05D5\u05EA:" }), NOTES_MODES.map((m) => (_jsx(IpsButton, { size: "small", variant: notesMode === m.key ? 'contained' : 'outlined', onClick: () => setNotesMode(m.key), children: m.label }, m.key))), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { width: '100%', mt: 0.5 }, children: NOTES_MODES.find((m) => m.key === notesMode)?.hint })] }), _jsx(Box, { sx: {
                    width,
                    maxWidth: '100%',
                    p: 1,
                    border: '2px dashed',
                    borderColor: 'primary.light',
                    borderRadius: 1,
                    backgroundColor: 'grey.50',
                    transition: 'width 200ms ease',
                }, children: _jsx(IpsDataTable, { data: DT_DATA, columns: columns, cellOverflow: overflow, sorting: true, maxHeight: 360 }) })] }));
}
function ToastPanel() {
    const addToast = useToast();
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'children', value: 'ReactNode', description: 'תוכן האפליקציה (חובה)' },
                    { name: 'deleteTime', value: 'number', description: 'זמן עד סגירה אוטומטית במילישניות (ברירת מחדל: 3000)' },
                    { name: 'maxToasts', value: 'number', description: 'מספר הודעות מקסימלי בו-זמנית (ברירת מחדל: 5)' },
                    { name: 'position', value: 'bottom-right | bottom-left | top-right | top-left', description: 'מיקום קופסת ה-toasts (ברירת מחדל: bottom-right)' },
                ] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05D4\u05E6\u05D2\u05EA \u05D4\u05D5\u05D3\u05E2\u05EA toast:" }), _jsxs(Stack, { spacing: 2, direction: "row", flexWrap: "wrap", children: [_jsx(IpsButton, { variant: "contained", color: "success", onClick: () => addToast(TOAST_TYPES.SUCCESS, 'הפעולה בוצעה בהצלחה!'), children: "Success" }), _jsx(IpsButton, { variant: "contained", color: "info", onClick: () => addToast(TOAST_TYPES.INFO, 'מידע חשוב לידיעתך'), children: "Info" }), _jsx(IpsButton, { variant: "contained", color: "warning", onClick: () => addToast(TOAST_TYPES.WARNING, 'שים לב לבעיה אפשרית'), children: "Warning" }), _jsx(IpsButton, { variant: "contained", color: "error", onClick: () => addToast(TOAST_TYPES.DANGER, 'שגיאה קריטית — נסה שוב'), children: "Danger" })] })] }));
}
const MINIMAL_TOOLBAR = {
    groups: [
        { items: ['bold', 'italic', 'underline'] },
        { items: ['bulletList', 'orderedList'] },
        { items: ['undo', 'redo', 'clearFormat'] },
    ],
};
const HEBREW_SAMPLE = '<p dir="rtl">שלום! זהו עורך טקסט עשיר עם תמיכה מלאה ב<strong>עברית</strong> ו-<em>RTL</em>.</p>' +
    '<p dir="ltr">This is an English paragraph side-by-side with Hebrew.</p>' +
    '<p dir="rtl">ניתן לכתוב, לעצב ולנהל <u>כיוון טקסט</u> בכל פסקה בנפרד.</p>';
function RichTextEditorPanel() {
    const [html, setHtml] = useState('');
    const [readOnly, setReadOnly] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState(false);
    const [minimal, setMinimal] = useState(false);
    const [showHtml, setShowHtml] = useState(false);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'value', value: 'string', description: 'HTML מבוקר — מסונכרן עם state חיצוני' },
                    { name: 'onChange', value: '(html: string) => void', description: 'נקרא בכל שינוי — מחזיר HTML מלא' },
                    { name: 'readOnly', value: 'boolean', description: 'מסתיר toolbar, מנטרל עריכה' },
                    { name: 'disabled', value: 'boolean', description: 'opacity 0.5, pointerEvents none' },
                    { name: 'error', value: 'boolean', description: 'מסגרת אדומה + helperText בצבע error' },
                    { name: 'label', value: 'string', description: 'תווית מעל העורך' },
                    { name: 'helperText', value: 'string', description: 'טקסט עזר / שגיאה מתחת לעורך' },
                    { name: 'dir', value: "'rtl' | 'ltr' | 'auto'", description: 'כיוון אזור התוכן (ברירת מחדל: auto)' },
                    { name: 'minHeight', value: 'string | number', description: 'גובה מינימלי של אזור הכתיבה' },
                    { name: 'toolbar', value: 'IpsRteToolbarConfig', description: 'עקיפת קבוצות ה-toolbar (ברירת מחדל: DEFAULT_TOOLBAR)' },
                ] }), _jsxs(Box, { sx: { display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: readOnly, onChange: e => setReadOnly(e.target.checked) }), label: "readOnly" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: error, onChange: e => setError(e.target.checked) }), label: "error" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: minimal, onChange: e => setMinimal(e.target.checked) }), label: "minimal toolbar" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: showHtml, onChange: e => setShowHtml(e.target.checked) }), label: "show HTML" })] }), _jsx(SectionTitle, { children: "\u05E2\u05D5\u05E8\u05DA \u05DE\u05D1\u05D5\u05E7\u05E8 (Controlled)" }), _jsx(IpsRichTextEditor, { label: "\u05D4\u05D5\u05D3\u05E2\u05D4", value: html, onChange: setHtml, readOnly: readOnly, disabled: disabled, error: error, helperText: error ? 'שדה חובה — נא להזין תוכן לפני שליחה' : undefined, dir: "auto", minHeight: 200, toolbar: minimal ? MINIMAL_TOOLBAR : DEFAULT_TOOLBAR, placeholder: "\u05DB\u05EA\u05D5\u05D1 \u05DB\u05D0\u05DF\u2026" }), _jsxs(Stack, { direction: "row", spacing: 1, sx: { mt: 1.5, flexWrap: 'wrap' }, children: [_jsx(IpsButton, { buttonType: "clean", onClick: () => setHtml('<p></p>'), children: "\u05E0\u05E7\u05D4" }), _jsx(IpsButton, { buttonType: "secondary", onClick: () => setHtml(HEBREW_SAMPLE), children: "\u05D8\u05E2\u05DF \u05EA\u05D5\u05DB\u05DF \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4" })] }), showHtml && (_jsxs(Box, { sx: { mt: 2 }, children: [_jsx(SectionTitle, { children: "\u05E4\u05DC\u05D8 HTML" }), _jsx(Box, { component: "pre", sx: {
                            bgcolor: '#f5f5f5',
                            border: '1px solid #e0e0e0',
                            borderRadius: 1,
                            p: 2,
                            fontSize: 12,
                            fontFamily: 'monospace',
                            overflowX: 'auto',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-all',
                            maxHeight: 200,
                            overflowY: 'auto',
                        }, children: html })] })), _jsx(SectionTitle, { children: "\u05EA\u05E6\u05D5\u05D2\u05D4 \u05D1\u05DC\u05D1\u05D3 (readOnly=true)" }), _jsx(IpsRichTextEditor, { defaultValue: '<p dir="rtl">תצוגה זו היא <strong>read-only</strong> — ה-toolbar מוסתר והעריכה מושבתת.</p>' +
                    '<p dir="rtl">מתאים להצגת תוכן שמור ללא יכולת עריכה.</p>', readOnly: true, minHeight: 80 })] }));
}
function FileUploadPanel() {
    const [lastResult, setLastResult] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [camera, setCamera] = useState(false);
    const [screenshot, setScreenshot] = useState(false);
    const [scan, setScan] = useState(false);
    const [multiple, setMultiple] = useState(true);
    const [maxSize, setMaxSize] = useState(10);
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'sviva', value: 'string', description: 'סביבה (dev/staging/prod) — לבניית ה-URL' },
                    { name: 'system', value: 'string', description: 'שם אתר SharePoint — יעד ההעלאה' },
                    { name: 'camera', value: 'boolean', description: 'הצג כפתור "מצלמה"' },
                    { name: 'screenshot', value: 'boolean', description: 'הצג כפתור "צילום מסך" (ברירת מחדל: false)' },
                    { name: 'scan', value: 'boolean', description: 'הצג כפתור "סריקה"' },
                    { name: 'multiple', value: 'boolean', description: 'אפשר בחירת מספר קבצים (ברירת מחדל: true)' },
                    { name: 'maxFileSizeMB', value: 'number', description: 'גודל קובץ מקסימלי ב-MB (ברירת מחדל: 10)' },
                    { name: 'accept', value: 'string[]', description: 'סוגי קבצים מותרים, למשל ["image/*", ".pdf"]' },
                    { name: 'disabled', value: 'boolean', description: 'מנטרל את כל האינטראקציות' },
                    { name: 'onSaveSuccess', value: '(results) => void', description: 'callback לאחר העלאה מוצלחת' },
                    { name: 'onSaveError', value: '(error) => void', description: 'callback כשהעלאה נכשלת' },
                    { name: 'onBeforeSave', value: '() => Promise<bool>', description: 'ולידציה אסינכרונית לפני שמירה' },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: disabled, onChange: e => setDisabled(e.target.checked) }), label: "disabled" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: camera, onChange: e => setCamera(e.target.checked) }), label: "camera" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: screenshot, onChange: e => setScreenshot(e.target.checked) }), label: "screenshot" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: scan, onChange: e => setScan(e.target.checked) }), label: "scan" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: multiple, onChange: e => setMultiple(e.target.checked) }), label: "multiple" }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(Typography, { variant: "body2", children: "maxFileSizeMB:" }), [1, 5, 10, 50].map(s => (_jsx(IpsButton, { variant: maxSize === s ? 'contained' : 'outlined', size: "small", onClick: () => setMaxSize(s), children: s }, s)))] })] }), _jsx(IpsFileUpload, { sviva: "dev", system: "demo-site", camera: camera, screenshot: screenshot, scan: scan, multiple: multiple, maxFileSizeMB: maxSize, disabled: disabled, onSaveSuccess: results => setLastResult(results.map(r => r.name).join(', ')), onSaveError: err => setLastResult(`שגיאה: ${String(err)}`), sx: { maxWidth: 600 } }), lastResult && (_jsxs(Typography, { variant: "body2", sx: { mt: 2, color: 'text.secondary' }, children: ["\u05EA\u05D5\u05E6\u05D0\u05D4: ", lastResult] }))] }));
}
function IpsStepperPanel() {
    const [activeStep, setActiveStep] = useState(1);
    const BASIC_STEPS = [
        { label: 'Select settings', description: 'Configure the campaign' },
        { label: 'Create ad group', optional: true },
        { label: 'Review & launch' },
    ];
    const STATUS_STEPS = [
        { label: 'Completed step' },
        { label: 'Error step', status: 'error' },
        { label: 'Warning step', status: 'warning' },
        { label: 'Disabled step', disabled: true },
        { label: 'Pending step' },
    ];
    const ICON_STEPS = [
        { label: 'Home', icon: _jsx(SvgIcon, { viewBox: "0 0 24 24", children: _jsx("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }) }) },
        { label: 'Favourite', icon: _jsx(SvgIcon, { viewBox: "0 0 24 24", children: _jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }) }) },
        { label: 'Locked', icon: _jsx(SvgIcon, { viewBox: "0 0 24 24", children: _jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" }) }) },
    ];
    const CONTENT_STEPS = [
        {
            label: 'Step 1',
            content: (_jsxs(Box, { sx: { pb: 2 }, children: [_jsx(Typography, { variant: "body2", children: "Fill in campaign details." }), _jsx(Stack, { direction: "row", spacing: 1, sx: { mt: 1 }, children: _jsx(IpsButton, { buttonType: "primary", size: "small", onClick: () => setActiveStep(1), children: "Next" }) })] })),
        },
        {
            label: 'Step 2',
            content: (_jsxs(Box, { sx: { pb: 2 }, children: [_jsx(Typography, { variant: "body2", children: "Set targeting options." }), _jsxs(Stack, { direction: "row", spacing: 1, sx: { mt: 1 }, children: [_jsx(IpsButton, { buttonType: "primary", size: "small", onClick: () => setActiveStep(2), children: "Next" }), _jsx(IpsButton, { buttonType: "secondary", size: "small", onClick: () => setActiveStep(0), children: "Back" })] })] })),
        },
        {
            label: 'Step 3',
            content: (_jsxs(Box, { sx: { pb: 2 }, children: [_jsx(Typography, { variant: "body2", children: "Review and submit." }), _jsx(Stack, { direction: "row", spacing: 1, sx: { mt: 1 }, children: _jsx(IpsButton, { buttonType: "secondary", size: "small", onClick: () => setActiveStep(0), children: "Reset" }) })] })),
        },
    ];
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'steps', value: 'IpsStepItem[]', description: 'Array of step definitions' },
                    { name: 'activeStep', value: 'number', description: 'Currently active step (0-based)' },
                    { name: 'orientation', value: '"horizontal" | "vertical"', description: 'Layout direction' },
                    { name: 'nonLinear', value: 'boolean', description: 'Allow clicking any step' },
                    { name: 'onStepClick', value: '(i, step) => void', description: 'Fired when a step is clicked (nonLinear only)' },
                    { name: 'alternativeLabel', value: 'boolean', description: 'Labels below icons' },
                    { name: 'renderStepIcon', value: '(ctx) => ReactNode', description: 'Custom icon render prop' },
                    { name: 'renderStepLabel', value: '(ctx) => ReactNode', description: 'Custom label render prop' },
                    { name: 'renderConnector', value: '(ctx) => ReactNode', description: 'Custom connector render prop' },
                ] }), _jsx(SectionTitle, { children: "Basic \u2014 Horizontal (activeStep controlled)" }), _jsxs(Stack, { direction: "row", spacing: 2, sx: { mb: 2 }, children: [_jsx(IpsButton, { size: "small", buttonType: "secondary", onClick: () => setActiveStep((s) => Math.max(0, s - 1)), children: "Back" }), _jsx(IpsButton, { size: "small", buttonType: "primary", onClick: () => setActiveStep((s) => Math.min(BASIC_STEPS.length - 1, s + 1)), children: "Next" }), _jsxs(Typography, { variant: "body2", sx: { alignSelf: 'center' }, children: ["activeStep: ", activeStep] })] }), _jsx(IpsStepper, { steps: BASIC_STEPS, activeStep: activeStep }), _jsx(SectionTitle, { children: "Alternative Label" }), _jsx(IpsStepper, { steps: BASIC_STEPS, activeStep: 1, alternativeLabel: true }), _jsx(SectionTitle, { children: "Non-linear / Clickable" }), _jsx(IpsStepper, { steps: BASIC_STEPS, activeStep: activeStep, nonLinear: true, onStepClick: (i) => setActiveStep(i) }), _jsx(SectionTitle, { children: "Status Overrides (error / warning / disabled)" }), _jsx(IpsStepper, { steps: STATUS_STEPS, activeStep: 0 }), _jsx(SectionTitle, { children: "Custom Step Icons" }), _jsx(IpsStepper, { steps: ICON_STEPS, activeStep: 1 }), _jsx(SectionTitle, { children: "Custom renderStepIcon" }), _jsx(IpsStepper, { steps: BASIC_STEPS, activeStep: 1, renderStepIcon: ({ index, status }) => (_jsx(Box, { sx: {
                        width: 30, height: 30, borderRadius: '50%',
                        bgcolor: status === 'active' ? 'secondary.main' : status === 'completed' ? 'success.main' : 'grey.400',
                        color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 700, fontSize: 13,
                    }, children: index + 1 })) }), _jsx(SectionTitle, { children: "Vertical with StepContent" }), _jsx(IpsStepper, { steps: CONTENT_STEPS, activeStep: activeStep, orientation: "vertical" })] }));
}
function IpsTabsPanel() {
    const [value, setValue] = useState('details');
    const [orientation, setOrientation] = useState(false); // false = horizontal
    const [centered, setCentered] = useState(false);
    const [renderPanels, setRenderPanels] = useState(true);
    const [keepMounted, setKeepMounted] = useState(false);
    const [variant, setVariant] = useState('standard');
    const [tab1Disabled, setTab1Disabled] = useState(false);
    const [tab2Error, setTab2Error] = useState(false);
    const tabs = [
        { value: 'details', label: 'Details', disabled: tab1Disabled,
            content: _jsx(Typography, { variant: "body2", sx: { p: 2 }, children: "Details panel content." }) },
        { value: 'payment', label: 'Payment', error: tab2Error, badge: tab2Error ? '!' : undefined,
            content: _jsx(Typography, { variant: "body2", sx: { p: 2 }, children: "Payment panel content." }) },
        { value: 'review', label: 'Review', badge: 3,
            content: _jsx(Typography, { variant: "body2", sx: { p: 2 }, children: "Review panel content." }) },
        { value: 'history', label: 'History',
            content: _jsx(Typography, { variant: "body2", sx: { p: 2 }, children: "History panel content." }) },
    ];
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'tabs', value: 'IpsTabItem[]', description: 'Tab descriptors with value, label, icon, badge, disabled, error, content' },
                    { name: 'value', value: 'string | number', description: 'Controlled active tab — required, owned by consumer' },
                    { name: 'onTabChange', value: '(value, tab) => void', description: 'Reports intent only — consumer decides whether to update value' },
                    { name: 'orientation', value: '"horizontal" | "vertical"', description: 'Bar direction' },
                    { name: 'variant', value: '"standard" | "scrollable" | "fullWidth"', description: 'MUI Tabs variant' },
                    { name: 'centered', value: 'boolean', description: 'Center the tabs (standard + horizontal only)' },
                    { name: 'renderPanels', value: 'boolean', description: 'Render built-in role="tabpanel" elements from tab.content' },
                    { name: 'keepMounted', value: 'boolean', description: 'Mount all panels, hide inactive via hidden attr' },
                    { name: 'idPrefix', value: 'string', description: 'Prefix for generated tab + panel ids' },
                    { name: 'renderTabLabel', 'value': '(ctx) => ReactNode', description: 'Full override of a tab\'s label content' },
                ] }), _jsx(SectionTitle, { children: "Controls" }), _jsxs(Stack, { direction: "row", spacing: 2, flexWrap: "wrap", sx: { mb: 2 }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: orientation, onChange: (e) => setOrientation(e.target.checked) }), label: "Vertical orientation" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: centered, onChange: (e) => setCentered(e.target.checked) }), label: "Centered" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: renderPanels, onChange: (e) => setRenderPanels(e.target.checked) }), label: "Render panels" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: keepMounted, onChange: (e) => setKeepMounted(e.target.checked), disabled: !renderPanels }), label: "Keep mounted" })] }), _jsx(Stack, { direction: "row", spacing: 2, sx: { mb: 2 }, children: ['standard', 'scrollable', 'fullWidth'].map((v) => (_jsx(IpsButton, { size: "small", buttonType: variant === v ? 'primary' : 'secondary', onClick: () => setVariant(v), children: v }, v))) }), _jsxs(Stack, { direction: "row", spacing: 2, sx: { mb: 2 }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: tab1Disabled, onChange: (e) => setTab1Disabled(e.target.checked) }), label: 'Tab "Details" disabled' }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: tab2Error, onChange: (e) => setTab2Error(e.target.checked) }), label: 'Tab "Payment" error' })] }), _jsx(Box, { sx: orientation ? { display: 'flex', gap: 2 } : undefined, children: _jsx(IpsTabs, { tabs: tabs, value: value, onTabChange: (v) => setValue(v), orientation: orientation ? 'vertical' : 'horizontal', variant: variant, centered: centered && !orientation, renderPanels: renderPanels, keepMounted: keepMounted, sx: orientation ? { borderRight: 1, borderColor: 'divider', minWidth: 160 } : undefined }) }), _jsxs(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 1, display: 'block' }, children: ["Current value: ", _jsx("strong", { children: value })] })] }));
}
function IpsDrawerPanel() {
    const [open, setOpen] = useState(false);
    const [lastReason, setLastReason] = useState(null);
    // selectors
    const [anchor, setAnchor] = useState('right');
    const [variant, setVariant] = useState('temporary');
    const [size, setSize] = useState(400);
    // boolean toggles
    const [dividers, setDividers] = useState(false);
    const [showCloseButton, setShowCloseButton] = useState(true);
    const [disableBackdropClose, setDisableBackdropClose] = useState(false);
    const [disableEscapeKeyDown, setDisableEscapeKeyDown] = useState(false);
    const [hideBackdrop, setHideBackdrop] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rtl, setRtl] = useState(false);
    const handleClose = (reason) => {
        setLastReason(reason);
        setOpen(false);
    };
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'open', value: 'boolean (required)', description: 'Controlled visibility — owned by consumer' },
                    { name: 'onClose', value: '(reason) => void', description: 'Reports intent only — consumer decides whether to close. reason: backdropClick | escapeKeyDown | closeButton' },
                    { name: 'anchor', value: "'left' | 'right' | 'top' | 'bottom'", description: 'Edge the drawer slides from (default: right)' },
                    { name: 'variant', value: "'temporary' | 'persistent' | 'permanent'", description: 'MUI drawer variant (default: temporary)' },
                    { name: 'size', value: 'number | string', description: 'Width (left/right) or height (top/bottom). Number = px' },
                    { name: 'title', value: 'ReactNode', description: 'Header title text' },
                    { name: 'icon', value: 'ReactNode', description: 'Optional icon beside the title' },
                    { name: 'children', value: 'ReactNode', description: 'Body content — rendered verbatim, component-agnostic' },
                    { name: 'actions', value: 'ReactNode', description: 'Footer content — consumer passes buttons and wires onClick' },
                    { name: 'dividers', value: 'boolean', description: 'Show dividers between header / content / footer' },
                    { name: 'showCloseButton', value: 'boolean', description: 'Show the header X close button' },
                    { name: 'disableBackdropClose', value: 'boolean', description: 'Suppress onClose on backdrop click (temporary only)' },
                    { name: 'disableEscapeKeyDown', value: 'boolean', description: 'Suppress onClose on Esc' },
                    { name: 'hideBackdrop', value: 'boolean', description: 'Hide the backdrop (temporary only)' },
                    { name: 'elevation', value: 'number', description: 'Surface elevation' },
                    { name: 'loading', value: 'boolean', description: 'Show centered spinner overlay (consumer-controlled)' },
                    { name: 'keepMounted', value: 'boolean', description: 'Keep content mounted while closed' },
                    { name: 'rtl', value: 'boolean', description: 'Force RTL layout on the surface' },
                    { name: 'idPrefix', value: 'string', description: 'Prefix for aria-labelledby/aria-describedby ids' },
                    { name: 'renderHeader', value: '(ctx) => ReactNode', description: 'Full override of the header area' },
                    { name: 'renderFooter', value: '(ctx) => ReactNode', description: 'Full override of the footer area' },
                    { name: 'sx', value: 'SxProps', description: 'MUI style override on the drawer paper' },
                ] }), _jsx(SectionTitle, { children: "Controls" }), _jsxs(Box, { sx: { mb: 2 }, children: [_jsx(Typography, { variant: "caption", color: "text.secondary", children: "anchor" }), _jsx(Stack, { direction: "row", spacing: 1, sx: { mt: 0.5 }, children: ['left', 'right', 'top', 'bottom'].map(a => (_jsx(IpsButton, { size: "small", buttonType: anchor === a ? 'primary' : 'secondary', onClick: () => setAnchor(a), children: a }, a))) })] }), _jsxs(Box, { sx: { mb: 2 }, children: [_jsx(Typography, { variant: "caption", color: "text.secondary", children: "variant" }), _jsx(Stack, { direction: "row", spacing: 1, sx: { mt: 0.5 }, children: ['temporary', 'persistent', 'permanent'].map(v => (_jsx(IpsButton, { size: "small", buttonType: variant === v ? 'primary' : 'secondary', onClick: () => setVariant(v), children: v }, v))) })] }), _jsxs(Box, { sx: { mb: 2 }, children: [_jsx(Typography, { variant: "caption", color: "text.secondary", children: "size (px)" }), _jsx(Stack, { direction: "row", spacing: 1, sx: { mt: 0.5 }, children: [240, 360, 480, 600].map(s => (_jsxs(IpsButton, { size: "small", buttonType: size === s ? 'primary' : 'secondary', onClick: () => setSize(s), children: [s, "px"] }, s))) })] }), _jsxs(Stack, { direction: "row", spacing: 2, flexWrap: "wrap", sx: { mb: 2 }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: dividers, onChange: e => setDividers(e.target.checked) }), label: "dividers" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: showCloseButton, onChange: e => setShowCloseButton(e.target.checked) }), label: "showCloseButton" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: disableBackdropClose, onChange: e => setDisableBackdropClose(e.target.checked) }), label: "disableBackdropClose" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: disableEscapeKeyDown, onChange: e => setDisableEscapeKeyDown(e.target.checked) }), label: "disableEscapeKeyDown" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: hideBackdrop, onChange: e => setHideBackdrop(e.target.checked) }), label: "hideBackdrop" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: loading, onChange: e => setLoading(e.target.checked) }), label: "loading" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: rtl, onChange: e => setRtl(e.target.checked) }), label: "rtl" })] }), _jsx(SectionTitle, { children: "Live demo" }), _jsx(IpsButton, { buttonType: "primary", onClick: () => setOpen(true), children: "Open Drawer" }), _jsx(IpsDrawer, { open: open, anchor: anchor, variant: variant, size: size, title: "\u05E1\u05D9\u05E0\u05D5\u05DF \u05D5\u05E2\u05E8\u05D9\u05DB\u05D4", dividers: dividers, showCloseButton: showCloseButton, disableBackdropClose: disableBackdropClose, disableEscapeKeyDown: disableEscapeKeyDown, hideBackdrop: hideBackdrop, loading: loading, rtl: rtl, onClose: handleClose, actions: _jsxs(_Fragment, { children: [_jsx(IpsButton, { buttonType: "clean", onClick: () => handleClose('closeButton'), children: "Cancel" }), _jsx(IpsButton, { buttonType: "save", onClick: () => handleClose('closeButton'), children: "Apply" })] }), children: _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: [_jsx(IpsTextField, { label: "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", placeholder: "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD..." }), _jsx(IpsTextField, { label: "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", placeholder: "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4..." }), _jsx(IpsTextField, { label: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", type: "email", placeholder: "example@company.com" })] }) }), _jsxs(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 2, display: 'block' }, children: ["open: ", _jsx("strong", { children: String(open) }), lastReason && _jsxs(_Fragment, { children: [" \u00A0|\u00A0 last onClose reason: ", _jsx("strong", { children: lastReason })] })] })] }));
}
function IpsDialogPanel() {
    const [open, setOpen] = useState(false);
    const [lastReason, setLastReason] = useState(null);
    // boolean toggles
    const [fullWidth, setFullWidth] = useState(true);
    const [fullScreen, setFullScreen] = useState(false);
    const [dividers, setDividers] = useState(false);
    const [showCloseButton, setShowCloseButton] = useState(true);
    const [disableBackdropClose, setDisableBackdropClose] = useState(false);
    const [disableEscapeKeyDown, setDisableEscapeKeyDown] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rtl, setRtl] = useState(false);
    // selectors
    const [maxWidth, setMaxWidth] = useState('sm');
    const [transition, setTransition] = useState('fade');
    const [scroll, setScroll] = useState('paper');
    const handleClose = (reason) => {
        setLastReason(reason);
        if (reason !== 'backdropClick' || !disableBackdropClose) {
            setOpen(false);
        }
    };
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'open', value: 'boolean (required)', description: 'Controlled visibility — owned by consumer' },
                    { name: 'onClose', value: '(reason) => void', description: 'Reports intent only — consumer decides whether to close. reason: backdropClick | escapeKeyDown | closeButton' },
                    { name: 'title', value: 'ReactNode', description: 'Header title text' },
                    { name: 'icon', value: 'ReactNode', description: 'Optional icon beside the title' },
                    { name: 'children', value: 'ReactNode', description: 'Body content — rendered verbatim, component-agnostic' },
                    { name: 'actions', value: 'ReactNode', description: 'Footer content — consumer passes buttons and wires onClick' },
                    { name: 'maxWidth', value: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | false", description: 'Max surface width' },
                    { name: 'fullWidth', value: 'boolean', description: 'Stretch to maxWidth' },
                    { name: 'fullScreen', value: 'boolean', description: 'Render full-screen' },
                    { name: 'fullScreenBreakpoint', value: "'xs'|'sm'|'md'|'lg'|'xl'", description: 'Auto full-screen at/below this breakpoint' },
                    { name: 'scroll', value: "'paper' | 'body'", description: 'Scroll behavior for tall content' },
                    { name: 'dividers', value: 'boolean', description: 'Show dividers between header / content / footer' },
                    { name: 'showCloseButton', value: 'boolean', description: 'Show the header X close button' },
                    { name: 'disableBackdropClose', value: 'boolean', description: 'Suppress onClose on backdrop click' },
                    { name: 'disableEscapeKeyDown', value: 'boolean', description: 'Suppress onClose on Esc' },
                    { name: 'transition', value: "'fade' | 'grow' | 'slide' | 'zoom'", description: 'Enter/exit animation' },
                    { name: 'loading', value: 'boolean', description: 'Show centered spinner overlay (consumer-controlled)' },
                    { name: 'keepMounted', value: 'boolean', description: 'Keep content mounted while closed' },
                    { name: 'rtl', value: 'boolean', description: 'Force RTL layout on the surface' },
                    { name: 'idPrefix', value: 'string', description: 'Prefix for aria-labelledby/aria-describedby ids' },
                    { name: 'renderHeader', value: '(ctx) => ReactNode', description: 'Full override of the header area' },
                    { name: 'renderFooter', value: '(ctx) => ReactNode', description: 'Full override of the footer area' },
                    { name: 'sx', value: 'SxProps', description: 'MUI style override on the Dialog paper' },
                ] }), _jsx(SectionTitle, { children: "Controls" }), _jsxs(Stack, { direction: "row", spacing: 2, flexWrap: "wrap", sx: { mb: 2 }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: fullWidth, onChange: e => setFullWidth(e.target.checked) }), label: "fullWidth" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: fullScreen, onChange: e => setFullScreen(e.target.checked) }), label: "fullScreen" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: dividers, onChange: e => setDividers(e.target.checked) }), label: "dividers" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: showCloseButton, onChange: e => setShowCloseButton(e.target.checked) }), label: "showCloseButton" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: disableBackdropClose, onChange: e => setDisableBackdropClose(e.target.checked) }), label: "disableBackdropClose" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: disableEscapeKeyDown, onChange: e => setDisableEscapeKeyDown(e.target.checked) }), label: "disableEscapeKeyDown" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: loading, onChange: e => setLoading(e.target.checked) }), label: "loading" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: rtl, onChange: e => setRtl(e.target.checked) }), label: "rtl" })] }), _jsxs(Stack, { direction: "row", spacing: 2, flexWrap: "wrap", sx: { mb: 2 }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "caption", color: "text.secondary", children: "maxWidth" }), _jsx(Stack, { direction: "row", spacing: 1, sx: { mt: 0.5 }, children: ['xs', 'sm', 'md', 'lg', 'xl'].map(w => (_jsx(IpsButton, { size: "small", buttonType: maxWidth === w ? 'primary' : 'secondary', onClick: () => setMaxWidth(w), children: w }, w))) })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "caption", color: "text.secondary", children: "transition" }), _jsx(Stack, { direction: "row", spacing: 1, sx: { mt: 0.5 }, children: ['fade', 'grow', 'slide', 'zoom'].map(t => (_jsx(IpsButton, { size: "small", buttonType: transition === t ? 'primary' : 'secondary', onClick: () => setTransition(t), children: t }, t))) })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "caption", color: "text.secondary", children: "scroll" }), _jsx(Stack, { direction: "row", spacing: 1, sx: { mt: 0.5 }, children: ['paper', 'body'].map(s => (_jsx(IpsButton, { size: "small", buttonType: scroll === s ? 'primary' : 'secondary', onClick: () => setScroll(s), children: s }, s))) })] })] }), _jsx(SectionTitle, { children: "Live demo" }), _jsx(IpsButton, { buttonType: "primary", onClick: () => setOpen(true), children: "Open Dialog" }), _jsx(IpsDialog, { open: open, title: "Edit user", onClose: handleClose, maxWidth: maxWidth, fullWidth: fullWidth, fullScreen: fullScreen, scroll: scroll, dividers: dividers, showCloseButton: showCloseButton, disableBackdropClose: disableBackdropClose, disableEscapeKeyDown: disableEscapeKeyDown, transition: transition, loading: loading, rtl: rtl, actions: _jsxs(_Fragment, { children: [_jsx(IpsButton, { buttonType: "clean", onClick: () => handleClose('closeButton'), children: "Cancel" }), _jsx(IpsButton, { buttonType: "save", onClick: () => handleClose('closeButton'), children: "Save" })] }), children: _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }, children: [_jsx(IpsTextField, { label: "First name", placeholder: "Enter first name..." }), _jsx(IpsTextField, { label: "Last name", placeholder: "Enter last name..." }), _jsx(IpsTextField, { label: "Email", type: "email", placeholder: "Enter email..." })] }) }), _jsxs(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 2, display: 'block' }, children: ["open: ", _jsx("strong", { children: String(open) }), lastReason && _jsxs(_Fragment, { children: [" \u00A0|\u00A0 last onClose reason: ", _jsx("strong", { children: lastReason })] })] })] }));
}
function IpsCarouselPanel() {
    const [autoPlay, setAutoPlay] = useState(true);
    const [loop, setLoop] = useState(true);
    const [pauseOnHover, setPauseOnHover] = useState(true);
    const [swipeable, setSwipeable] = useState(true);
    const [showArrows, setShowArrows] = useState(false);
    const [showDots, setShowDots] = useState(true);
    const [dotsClickable, setDotsClickable] = useState(true);
    const [showPlayPause, setShowPlayPause] = useState(false);
    const [rtl, setRtl] = useState(false);
    const [transition, setTransition] = useState('slide');
    const [interval, setIntervalMs] = useState(3000);
    const [currentIndex, setCurrentIndex] = useState(0);
    const COLORS = ['#1565C0', '#2E7D32', '#C62828', '#F57F17', '#6A1B9A'];
    const sampleSlides = COLORS.map((color, i) => (_jsx(Box, { sx: {
            height: 180,
            bgcolor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 2,
        }, children: _jsx(Typography, { variant: "h3", color: "white", fontWeight: 700, children: i + 1 }) }, i)));
    return (_jsxs(Box, { children: [_jsx(PropsTable, { props: [
                    { name: 'items', value: 'ReactNode[]', description: 'רשימת slides — כל אחד component שרנדרים כמות שהוא' },
                    { name: 'activeIndex', value: 'number', description: 'index נשלט מבחוץ — מצב controlled' },
                    { name: 'defaultIndex', value: 'number', description: 'index התחלתי במצב uncontrolled' },
                    { name: 'onIndexChange', value: '(index: number) => void', description: 'נקרא בכל שינוי slide' },
                    { name: 'autoPlay', value: 'boolean', description: 'מעבר אוטומטי בין slides' },
                    { name: 'interval', value: 'number', description: 'מרווח זמן בין מעברים (ms)' },
                    { name: 'loop', value: 'boolean', description: 'חזרה לתחילה אחרי הslide האחרון' },
                    { name: 'pauseOnHover', value: 'boolean', description: 'עצירה בעת hover/focus' },
                    { name: 'swipeable', value: 'boolean', description: 'החלקה עם עכבר/מגע' },
                    { name: 'showArrows', value: 'boolean', description: 'חיצים לניווט ידני' },
                    { name: 'showDots', value: 'boolean', description: 'נקודות אינדיקטור בתחתית' },
                    { name: 'dotsClickable', value: 'boolean', description: 'לחיצה על נקודה מנווטת' },
                    { name: 'showPlayPause', value: 'boolean', description: 'כפתור play/pause' },
                    { name: 'transition', value: "'slide' | 'fade'", description: 'סוג אנימציה' },
                    { name: 'height / aspectRatio', value: 'number | string', description: 'גובה / יחס גובה-רוחב של ה-viewport' },
                    { name: 'rtl', value: 'boolean', description: 'כיוון RTL — הופך חיצים וכיוון החלקה' },
                ] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: autoPlay, onChange: e => setAutoPlay(e.target.checked) }), label: "autoPlay" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: loop, onChange: e => setLoop(e.target.checked) }), label: "loop" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: pauseOnHover, onChange: e => setPauseOnHover(e.target.checked) }), label: "pauseOnHover" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: swipeable, onChange: e => setSwipeable(e.target.checked) }), label: "swipeable" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: showArrows, onChange: e => setShowArrows(e.target.checked) }), label: "showArrows" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: showDots, onChange: e => setShowDots(e.target.checked) }), label: "showDots" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: dotsClickable, onChange: e => setDotsClickable(e.target.checked) }), label: "dotsClickable" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: showPlayPause, onChange: e => setShowPlayPause(e.target.checked) }), label: "showPlayPause" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: rtl, onChange: e => setRtl(e.target.checked) }), label: "rtl" })] }), _jsxs(Box, { sx: { mb: 2, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(Typography, { variant: "body2", children: "transition:" }), ['slide', 'fade'].map(t => (_jsx(IpsButton, { size: "small", variant: transition === t ? 'contained' : 'outlined', onClick: () => setTransition(t), children: t }, t)))] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(Typography, { variant: "body2", children: "interval (ms):" }), [1000, 2000, 3000, 5000].map(ms => (_jsx(IpsButton, { size: "small", variant: interval === ms ? 'contained' : 'outlined', onClick: () => setIntervalMs(ms), children: ms }, ms)))] })] }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: ["Current index: ", _jsx("strong", { children: currentIndex })] }), _jsx(IpsCarousel, { items: sampleSlides, autoPlay: autoPlay, loop: loop, pauseOnHover: pauseOnHover, swipeable: swipeable, showArrows: showArrows, showDots: showDots, dotsClickable: dotsClickable, showPlayPause: showPlayPause, transition: transition, interval: interval, rtl: rtl, onIndexChange: setCurrentIndex })] }));
}
const COMPONENTS = [
    { label: 'Button', group: 'קלט ופעולות', component: _jsx(ButtonPanel, {}) },
    { label: 'IconButton', group: 'קלט ופעולות', component: _jsx(IconButtonPanel, {}) },
    { label: 'TextField', group: 'קלט ופעולות', component: _jsx(TextFieldPanel, {}) },
    { label: 'TextArea', group: 'קלט ופעולות', component: _jsx(TextAreaPanel, {}) },
    { label: 'RichTextEditor', group: 'קלט ופעולות', component: _jsx(RichTextEditorPanel, {}) },
    { label: 'FileUpload', group: 'קלט ופעולות', component: _jsx(FileUploadPanel, {}) },
    { label: 'CheckBox', group: 'בחירה', component: _jsx(CheckBoxPanel, {}) },
    { label: 'Switch', group: 'בחירה', component: _jsx(SwitchPanel, {}) },
    { label: 'Select', group: 'בחירה', component: _jsx(SelectPanel, {}) },
    { label: 'Autocomplete', group: 'בחירה', component: _jsx(AutocompletePanel, {}) },
    { label: 'ChipSelect', group: 'בחירה', component: _jsx(ChipSelectPanel, {}) },
    { label: 'PillSelect', group: 'בחירה', component: _jsx(PillSelectPanel, {}) },
    { label: 'TimePicker', group: 'תאריך ושעה', component: _jsx(TimePickerPanel, {}) },
    { label: 'DatePicker', group: 'תאריך ושעה', component: _jsx(DatePickerPanel, {}) },
    { label: 'DateTimePicker', group: 'תאריך ושעה', component: _jsx(DateTimePickerPanel, {}) },
    { label: 'Table', group: 'הצגת נתונים', component: _jsx(IpsTablePanel, {}) },
    { label: 'DataTable', group: 'הצגת נתונים', component: _jsx(DataTablePanel, {}) },
    { label: 'Accordion', group: 'הצגת נתונים', component: _jsx(AccordionPanel, {}) },
    { label: 'Carousel', group: 'הצגת נתונים', component: _jsx(IpsCarouselPanel, {}) },
    { label: 'Tabs', group: 'ניווט', component: _jsx(IpsTabsPanel, {}) },
    { label: 'Stepper', group: 'ניווט', component: _jsx(IpsStepperPanel, {}) },
    { label: 'ToolTips', group: 'משוב והודעות', component: _jsx(ToolTipsPanel, {}) },
    { label: 'Toast', group: 'משוב והודעות', component: _jsx(ToastPanel, {}) },
    { label: 'Dialog', group: 'משוב והודעות', component: _jsx(IpsDialogPanel, {}) },
    { label: 'Drawer', group: 'משוב והודעות', component: _jsx(IpsDrawerPanel, {}) },
];
const NAV_ITEMS = COMPONENTS.map(c => ({
    id: slugify(c.label),
    label: c.label,
    group: c.group,
}));
const ROUTE_IDS = NAV_ITEMS.map(i => i.id);
const MenuIcon = () => (_jsx(SvgIcon, { fontSize: "small", children: _jsx("path", { d: "M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" }) }));
export default function App() {
    const [route, navigate] = useHashRoute(ROUTE_IDS, ROUTE_IDS[0]);
    const [navOpen, setNavOpen] = useState(false);
    const index = Math.max(0, ROUTE_IDS.indexOf(route));
    const current = COMPONENTS[index];
    const contentRef = useRef(null);
    // A new component starts at the top of the pane, and names itself in the tab title.
    useEffect(() => {
        document.title = `Ips${current.label} — IPS UI Library`;
        contentRef.current?.scrollTo({ top: 0 });
    }, [current.label]);
    const select = (id) => {
        navigate(id);
        setNavOpen(false);
    };
    const sidebar = _jsx(DemoSidebar, { items: NAV_ITEMS, activeId: route, onSelect: select });
    return (_jsx(CacheProvider, { value: rtlCache, children: _jsx(ThemeProvider, { theme: theme, children: _jsxs(IpsToastProvider, { children: [_jsx(CssBaseline, {}), _jsxs(Box, { sx: { display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#f5f7fa' }, dir: "rtl", children: [_jsx(Box, { sx: { display: { xs: 'none', md: 'block' }, height: '100%' }, children: sidebar }), _jsx(Drawer, { anchor: "right", open: navOpen, onClose: () => setNavOpen(false), sx: { display: { xs: 'block', md: 'none' } }, PaperProps: { sx: { width: 272, borderInlineEnd: 0 } }, children: sidebar }), _jsxs(Box, { sx: { flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }, children: [_jsxs(Box, { sx: {
                                            flexShrink: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.5,
                                            px: { xs: 2, md: 3 },
                                            height: 56,
                                            bgcolor: '#fff',
                                            borderBottom: '1px solid #e3e8ef',
                                        }, children: [_jsx(IconButton, { onClick: () => setNavOpen(true), size: "small", "aria-label": "\u05E4\u05EA\u05D7 \u05E0\u05D9\u05D5\u05D5\u05D8", sx: { display: { xs: 'inline-flex', md: 'none' } }, children: _jsx(MenuIcon, {}) }), _jsxs(Box, { sx: { minWidth: 0 }, children: [_jsx(Typography, { sx: { fontSize: 11, color: '#94a3b8', lineHeight: 1.3 }, children: current.group }), _jsxs(Typography, { sx: { fontSize: 15, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }, children: ["Ips", current.label] })] }), _jsx(Box, { sx: { flex: 1 } }), _jsxs(Box, { sx: { display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5 }, children: [_jsx(IconButton, { size: "small", "aria-label": "\u05D4\u05E4\u05E7\u05D3 \u05D4\u05E7\u05D5\u05D3\u05DD", disabled: index === 0, onClick: () => navigate(ROUTE_IDS[index - 1]), children: _jsx(SvgIcon, { fontSize: "small", children: _jsx("path", { d: "m8.6 16.6 1.4 1.4 6-6-6-6-1.4 1.4 4.6 4.6-4.6 4.6Z" }) }) }), _jsx(IconButton, { size: "small", "aria-label": "\u05D4\u05E4\u05E7\u05D3 \u05D4\u05D1\u05D0", disabled: index === COMPONENTS.length - 1, onClick: () => navigate(ROUTE_IDS[index + 1]), children: _jsx(SvgIcon, { fontSize: "small", children: _jsx("path", { d: "M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6 4.6-4.6Z" }) }) })] })] }), _jsx(Box, { ref: contentRef, sx: { flex: 1, overflowY: 'auto', px: { xs: 2, md: 4 }, py: { xs: 2, md: 3 } }, children: _jsx(Box, { sx: { maxWidth: 900, mx: 'auto' }, children: _jsxs(Paper, { elevation: 0, sx: { p: { xs: 2, md: 4 }, borderRadius: 2, border: '1px solid #e3e8ef' }, children: [_jsxs(Typography, { variant: "h5", fontWeight: 700, color: "primary.dark", gutterBottom: true, children: ["Ips", current.label] }), _jsx(Divider, { sx: { mb: 3 } }), current.component] }) }) })] })] })] }) }) }));
}
