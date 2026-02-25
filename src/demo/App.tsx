import React, { useState } from 'react'
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  Divider,
  Switch,
  FormControlLabel,
  Stack
} from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { createRtlCache } from '../utils/rtlUtils'

import { IpsButton } from '../components/IpsButton/IpsButton'
import { IpsTextField } from '../components/IpsTextField/IpsTextField'
import { IpsTextArea } from '../components/IpsTextArea/IpsTextArea'
import { IpsCheckBox } from '../components/IpsCheckBox/IpsCheckBox'
import { IpsSwitch } from '../components/IpsSwitch/IpsSwitch'
import { IpsIconButton } from '../components/IpsIconButton/IpsIconButton'
import { IpsToolTips } from '../components/IpsToolTips/IpsToolTips'
import { IpsSelect } from '../components/IpsSelect/IpsSelect'
import { IpsAutocomplete } from '../components/IpsAutocomplete/IpsAutocomplete'
import { IpsChipSelect } from '../components/IpsChipSelect/IpsChipSelect'
import { IpsAccordion } from '../components/IpsAccordion/IpsAccordion'
import { IpsPillSelect } from '../components/IpsPillSelect/IpsPillSelect'
import { IpsTimePicker } from '../components/IpsTimePicker/IpsTimePicker'
import { IpsDatePicker } from '../components/IpsDatePicker/IpsDatePicker'
import { IpsDateTimePicker } from '../components/IpsDateTimePicker/IpsDateTimePicker'
import { IpsTableLight } from '../components/IpsTableLight/IpsTableLight'
import { IpsTable } from '../components/IpsTable/IpsTable'
import { IpsToastProvider } from '../components/IpsToast/IpsToastProvider'
import { useToast } from '../components/IpsToast/useToast'
import { TOAST_TYPES } from '../components/IpsToast/IpsToast.types'
import { IpsRichTextEditor } from '../components/IpsRichTextEditor/IpsRichTextEditor'
import { DEFAULT_TOOLBAR } from '../components/IpsRichTextEditor/IpsRteToolbar.types'
import type { IpsRteToolbarConfig } from '../components/IpsRichTextEditor/IpsRteToolbar.types'
import type { GridColDef } from '@mui/x-data-grid'
import type { Moment } from 'moment'
import moment from 'moment'
import 'moment/locale/he'
import SvgIcon from '@mui/material/SvgIcon'

const rtlCache = createRtlCache()

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: { main: '#1565C0', light: '#42A5F5', dark: '#0D47A1' },
    secondary: { main: '#616161' }
  },
  typography: {
    fontFamily: 'Heebo, Roboto, Arial, sans-serif',
  },
})

const StarIcon = () => (
  <SvgIcon><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></SvgIcon>
)
const InfoIcon = () => (
  <SvgIcon><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></SvgIcon>
)

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
  { label: 'Option D', value: 'd' }
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="h6" color="primary" sx={{ mb: 1, mt: 3, borderBottom: '2px solid', borderColor: 'primary.light', pb: 0.5 }}>
      {children}
    </Typography>
  )
}

function PropsTable({ props }: { props: { name: string; value: string; description: string }[] }) {
  return (
    <Box sx={{ mb: 2, overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ backgroundColor: '#e3f2fd' }}>
            <th style={{ padding: '6px 12px', textAlign: 'left', border: '1px solid #bbdefb' }}>Prop</th>
            <th style={{ padding: '6px 12px', textAlign: 'left', border: '1px solid #bbdefb' }}>Value</th>
            <th style={{ padding: '6px 12px', textAlign: 'left', border: '1px solid #bbdefb' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 ? '#f8f9fa' : 'white' }}>
              <td style={{ padding: '5px 12px', border: '1px solid #e0e0e0', fontWeight: 600, color: '#1565C0' }}>{p.name}</td>
              <td style={{ padding: '5px 12px', border: '1px solid #e0e0e0', fontFamily: 'monospace', color: '#c62828' }}>{p.value}</td>
              <td style={{ padding: '5px 12px', border: '1px solid #e0e0e0', color: '#555' }}>{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  )
}

// ─── Panels ─────────────────────────────────────────────────────────────────

function ButtonPanel() {
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  return (
    <Box>
      <PropsTable props={[
        { name: 'buttonType', value: "'add' | 'save' | 'clean' | 'primary' | 'secondary'", description: 'סוג הכפתור — קובע צבע + אייקון אוטומטי' },
        { name: 'loading', value: 'boolean', description: 'מציג ספינר ומנטרל לחיצה' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל את הכפתור' },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={loading} onChange={e => setLoading(e.target.checked)} />} label="loading" />
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
      </Box>
      <SectionTitle>buttonType variants</SectionTitle>
      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
        <IpsButton buttonType="add" loading={loading} disabled={disabled}>Add</IpsButton>
        <IpsButton buttonType="save" loading={loading} disabled={disabled}>Save</IpsButton>
        <IpsButton buttonType="clean" loading={loading} disabled={disabled}>Clean</IpsButton>
        <IpsButton buttonType="primary" loading={loading} disabled={disabled}>Primary</IpsButton>
        <IpsButton buttonType="secondary" loading={loading} disabled={disabled}>Secondary</IpsButton>
        <IpsButton loading={loading} disabled={disabled}>Default</IpsButton>
      </Stack>
    </Box>
  )
}

function TextFieldPanel() {
  const [value, setValue] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [readOnly, setReadOnly] = useState(false)
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState(false)

  return (
    <Box>
      <PropsTable props={[
        { name: 'label', value: 'string', description: 'תווית השדה' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל את השדה' },
        { name: 'readOnly', value: 'boolean', description: 'קריאה בלבד' },
        { name: 'error', value: 'boolean', description: 'מציג שגיאה' },
        { name: 'helperText', value: 'string', description: 'טקסט עזר מתחת לשדה' },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
        <FormControlLabel control={<Switch checked={readOnly} onChange={e => setReadOnly(e.target.checked)} />} label="readOnly" />
        <FormControlLabel control={<Switch checked={error} onChange={e => setError(e.target.checked)} />} label="error" />
        <FormControlLabel control={<Switch checked={helperText} onChange={e => setHelperText(e.target.checked)} />} label="helperText" />
      </Box>
      <Stack spacing={2} sx={{ maxWidth: 400 }}>
        <IpsTextField label="שדה טקסט" placeholder="הכנס טקסט..." value={value}
          onChange={e => setValue(e.target.value)} disabled={disabled}
          inputProps={{ readOnly }} error={error}
          helperText={helperText ? 'זהו טקסט עזר לשדה' : undefined} />
        <IpsTextField label="עם ערך קבוע" value="ערך לדוגמה" readOnly disabled={disabled} error={error}
          helperText={helperText ? 'שדה קריאה בלבד' : undefined} />
      </Stack>
    </Box>
  )
}

function TextAreaPanel() {
  const [value, setValue] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(false)
  const [rows, setRows] = useState(4)

  return (
    <Box>
      <PropsTable props={[
        { name: 'label', value: 'string', description: 'תווית השדה' },
        { name: 'rows', value: 'number', description: 'מספר שורות' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל את השדה' },
        { name: 'error', value: 'boolean', description: 'מציג שגיאה' },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
        <FormControlLabel control={<Switch checked={error} onChange={e => setError(e.target.checked)} />} label="error" />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2">rows:</Typography>
          {[2, 4, 6, 8].map(r => (
            <IpsButton key={r} variant={rows === r ? 'contained' : 'outlined'} size="small" onClick={() => setRows(r)}>{r}</IpsButton>
          ))}
        </Box>
      </Box>
      <IpsTextArea label="שדה טקסט גדול" placeholder="הכנס טקסט ארוך..." value={value}
        onChange={e => setValue(e.target.value)} disabled={disabled} rows={rows} error={error}
        helperText={error ? 'שגיאה בשדה זה' : 'הכנס תוכן'} sx={{ maxWidth: 500 }} />
    </Box>
  )
}

function CheckBoxPanel() {
  const [checked, setChecked] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)

  return (
    <Box>
      <PropsTable props={[
        { name: 'checked', value: 'boolean', description: 'מצב מסומן' },
        { name: 'label', value: 'ReactNode', description: 'תווית לצד תיבת הסימון' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל' },
        { name: 'indeterminate', value: 'boolean', description: 'מצב אינדטרמיניסטי (חלקי)' },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
        <FormControlLabel control={<Switch checked={indeterminate} onChange={e => setIndeterminate(e.target.checked)} />} label="indeterminate" />
      </Box>
      <Stack spacing={1}>
        <IpsCheckBox checked={checked} onChange={e => setChecked(e.target.checked)} label="ללא תווית" disabled={disabled} indeterminate={indeterminate} />
        <IpsCheckBox checked={checked} onChange={e => setChecked(e.target.checked)} label="עם תווית" disabled={disabled} indeterminate={indeterminate} />
        <IpsCheckBox defaultChecked label="defaultChecked" disabled={disabled} />
        <IpsCheckBox checked={checked} onChange={e => setChecked(e.target.checked)} label="צבע secondary" color="secondary" disabled={disabled} />
      </Stack>
    </Box>
  )
}

function SwitchPanel() {
  const [checked, setChecked] = useState(false)
  const [disabled, setDisabled] = useState(false)

  return (
    <Box>
      <PropsTable props={[
        { name: 'checked', value: 'boolean', description: 'מצב פעיל' },
        { name: 'label', value: 'string', description: 'תווית לצד המתג' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל' },
        { name: 'color', value: "'primary' | 'secondary' | 'error'", description: 'צבע המתג' },
      ]} />
      <Box sx={{ mb: 2 }}>
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
      </Box>
      <Stack spacing={1}>
        <IpsSwitch checked={checked} onChange={e => setChecked(e.target.checked)} label="מתג ראשי" disabled={disabled} />
        <IpsSwitch checked={checked} onChange={e => setChecked(e.target.checked)} label="צבע secondary" color="secondary" disabled={disabled} />
        <IpsSwitch checked={checked} onChange={e => setChecked(e.target.checked)} label="צבע error" color="error" disabled={disabled} />
        <IpsSwitch defaultChecked label="defaultChecked" disabled={disabled} />
      </Stack>
    </Box>
  )
}

function IconButtonPanel() {
  const [disabled, setDisabled] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  return (
    <Box>
      <PropsTable props={[
        { name: 'icon', value: 'ReactNode', description: 'האייקון להצגה (חובה)' },
        { name: 'tooltip', value: 'string', description: 'טקסט tooltip בריחוף' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל' },
        { name: 'size', value: "'small' | 'medium' | 'large'", description: 'גודל הכפתור' },
        { name: 'color', value: 'string', description: 'צבע' },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
        <FormControlLabel control={<Switch checked={showTooltip} onChange={e => setShowTooltip(e.target.checked)} />} label="tooltip" />
      </Box>
      <SectionTitle>גדלים</SectionTitle>
      <Stack direction="row" spacing={1} alignItems="center">
        <IpsIconButton icon={<StarIcon />} tooltip={showTooltip ? 'Small' : undefined} size="small" disabled={disabled} color="primary" />
        <IpsIconButton icon={<StarIcon />} tooltip={showTooltip ? 'Medium' : undefined} size="medium" disabled={disabled} color="primary" />
        <IpsIconButton icon={<StarIcon />} tooltip={showTooltip ? 'Large' : undefined} size="large" disabled={disabled} color="primary" />
      </Stack>
      <SectionTitle>צבעים</SectionTitle>
      <Stack direction="row" spacing={1}>
        <IpsIconButton icon={<InfoIcon />} tooltip={showTooltip ? 'Primary' : undefined} color="primary" disabled={disabled} />
        <IpsIconButton icon={<InfoIcon />} tooltip={showTooltip ? 'Secondary' : undefined} color="secondary" disabled={disabled} />
        <IpsIconButton icon={<InfoIcon />} tooltip={showTooltip ? 'Error' : undefined} color="error" disabled={disabled} />
        <IpsIconButton icon={<InfoIcon />} tooltip={showTooltip ? 'Success' : undefined} color="success" disabled={disabled} />
      </Stack>
    </Box>
  )
}

function ToolTipsPanel() {
  return (
    <Box>
      <PropsTable props={[
        { name: 'title', value: 'string', description: 'תוכן הטולטיפ (חובה)' },
        { name: 'placement', value: "'top' | 'bottom' | 'left' | 'right'", description: 'מיקום' },
        { name: 'arrow', value: 'boolean', description: 'מציג חץ' },
      ]} />
      <SectionTitle>מיקומים</SectionTitle>
      <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
        <IpsToolTips title="Tooltip למעלה" placement="top">
          <IpsButton variant="outlined">Top</IpsButton>
        </IpsToolTips>
        <IpsToolTips title="Tooltip למטה" placement="bottom">
          <IpsButton variant="outlined">Bottom</IpsButton>
        </IpsToolTips>
        <IpsToolTips title="Tooltip שמאל" placement="left">
          <IpsButton variant="outlined">Left</IpsButton>
        </IpsToolTips>
        <IpsToolTips title="Tooltip ימין" placement="right">
          <IpsButton variant="outlined">Right</IpsButton>
        </IpsToolTips>
        <IpsToolTips title="עם חץ" placement="top" arrow>
          <IpsButton variant="outlined">עם חץ</IpsButton>
        </IpsToolTips>
      </Stack>
    </Box>
  )
}

function SelectPanel() {
  const [value, setValue] = useState<string | number>('')
  const [disabled, setDisabled] = useState(false)
  const [readOnly, setReadOnly] = useState(false)
  const [error, setError] = useState(false)
  const [multiple, setMultiple] = useState(false)
  const [multiValue, setMultiValue] = useState<(string | number)[]>([])

  return (
    <Box>
      <PropsTable props={[
        { name: 'options', value: '{ label, value }[]', description: 'רשימת האפשרויות' },
        { name: 'value', value: 'string | number', description: 'ערך נוכחי' },
        { name: 'label', value: 'string', description: 'תווית' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל' },
        { name: 'readOnly', value: 'boolean', description: 'קריאה בלבד' },
        { name: 'multiple', value: 'boolean', description: 'בחירה מרובה' },
        { name: 'error', value: 'boolean', description: 'מצב שגיאה' },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
        <FormControlLabel control={<Switch checked={readOnly} onChange={e => setReadOnly(e.target.checked)} />} label="readOnly" />
        <FormControlLabel control={<Switch checked={error} onChange={e => setError(e.target.checked)} />} label="error" />
        <FormControlLabel control={<Switch checked={multiple} onChange={e => setMultiple(e.target.checked)} />} label="multiple" />
      </Box>
      <Box sx={{ maxWidth: 350 }}>
        {multiple ? (
          <IpsSelect label="בחר אפשרויות" options={options} value={multiValue as any}
            onChange={(val: any) => setMultiValue(Array.isArray(val) ? val : [val])} disabled={disabled}
            readOnly={readOnly} error={error} multiple
            helperText={error ? 'שגיאה בבחירה' : 'בחר אחד או יותר'} />
        ) : (
          <IpsSelect label="בחר אפשרות" options={options} value={value}
            onChange={(val: any) => setValue(val)} disabled={disabled}
            readOnly={readOnly} error={error}
            helperText={error ? 'שגיאה בבחירה' : 'בחר ערך מהרשימה'} />
        )}
      </Box>
    </Box>
  )
}

function AutocompletePanel() {
  const [value, setValue] = useState<{ label: string; value: string } | null>(null)
  const [multiValue, setMultiValue] = useState<{ label: string; value: string }[]>([])
  const [multiple, setMultiple] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showCheckboxes, setShowCheckboxes] = useState(true)

  return (
    <Box>
      <PropsTable props={[
        { name: 'options', value: 'T[]', description: 'רשימת אפשרויות (generic)' },
        { name: 'multiple', value: 'boolean', description: 'בחירה מרובה' },
        { name: 'showCheckboxes', value: 'boolean', description: 'מציג checkboxes בבחירה מרובה' },
        { name: 'loading', value: 'boolean', description: 'מצב טעינה' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל' },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={multiple} onChange={e => setMultiple(e.target.checked)} />} label="multiple" />
        <FormControlLabel control={<Switch checked={showCheckboxes} onChange={e => setShowCheckboxes(e.target.checked)} />} label="showCheckboxes" />
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
        <FormControlLabel control={<Switch checked={loading} onChange={e => setLoading(e.target.checked)} />} label="loading" />
      </Box>
      <Box sx={{ maxWidth: 400 }}>
        {multiple ? (
          <IpsAutocomplete
            options={options}
            value={multiValue}
            onChange={(_, v) => setMultiValue(v as any)}
            multiple
            showCheckboxes={showCheckboxes}
            label="חיפוש מרובה"
            disabled={disabled}
            loading={loading}
            getOptionLabel={(o: any) => o.label}
          />
        ) : (
          <IpsAutocomplete
            options={options}
            value={value}
            onChange={(_, v) => setValue(v as any)}
            label="חיפוש"
            disabled={disabled}
            loading={loading}
            getOptionLabel={(o: any) => o.label}
          />
        )}
      </Box>
    </Box>
  )
}

function ChipSelectPanel() {
  const [value, setValue] = useState<(string | number)[]>([])
  const [disabled, setDisabled] = useState(false)

  return (
    <Box>
      <PropsTable props={[
        { name: 'options', value: '{ label, value }[]', description: 'רשימת אפשרויות' },
        { name: 'value', value: '(string | number)[]', description: 'ערכים נבחרים' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל (כולל מחיקת chips)' },
        { name: 'placeholder', value: 'string', description: 'placeholder כשריק' },
      ]} />
      <Box sx={{ mb: 2 }}>
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
      </Box>
      <Box sx={{ maxWidth: 400 }}>
        <IpsChipSelect
          label="בחר פריטים"
          options={options}
          value={value}
          onChange={vals => setValue(vals)}
          disabled={disabled}
          placeholder="בחר אחד או יותר..."
        />
      </Box>
      {value.length > 0 && (
        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
          נבחר: {value.join(', ')}
        </Typography>
      )}
    </Box>
  )
}

function AccordionPanel() {
  const [disabled, setDisabled] = useState(false)
  const [defaultExpanded, setDefaultExpanded] = useState(false)

  return (
    <Box>
      <PropsTable props={[
        { name: 'summary', value: 'ReactNode', description: 'כותרת (חובה)' },
        { name: 'children', value: 'ReactNode', description: 'תוכן מורחב (חובה)' },
        { name: 'defaultExpanded', value: 'boolean', description: 'פתוח כברירת מחדל' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל פתיחה/סגירה' },
        { name: 'onChange', value: '(e, expanded) => void', description: 'callback על שינוי' },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
        <FormControlLabel control={<Switch checked={defaultExpanded} onChange={e => setDefaultExpanded(e.target.checked)} />} label="defaultExpanded" />
      </Box>
      <Box sx={{ maxWidth: 600 }}>
        <IpsAccordion key={String(defaultExpanded)} summary="כותרת ראשית" disabled={disabled} defaultExpanded={defaultExpanded}
          onChange={(_, exp) => console.log('expanded:', exp)}>
          <Typography>זהו תוכן הAccordion הראשי. לחץ על הכותרת כדי לפתוח/לסגור.</Typography>
        </IpsAccordion>
        <IpsAccordion summary="הגדרות מתקדמות" disabled={disabled}>
          <Stack spacing={1}>
            <Typography variant="body2">הגדרה 1: ערך א</Typography>
            <Typography variant="body2">הגדרה 2: ערך ב</Typography>
            <Typography variant="body2">הגדרה 3: ערך ג</Typography>
          </Stack>
        </IpsAccordion>
        <IpsAccordion summary={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <StarIcon />
            <span>כותרת עם אייקון</span>
          </Box>
        } disabled={disabled}>
          <Typography>תוכן עם JSX בכותרת!</Typography>
        </IpsAccordion>
      </Box>
    </Box>
  )
}

function PillSelectPanel() {
  const [singleValue, setSingleValue] = useState<string | number>('')
  const [multiValue, setMultiValue] = useState<(string | number)[]>(['a'])
  const [disabled, setDisabled] = useState(false)
  const [size, setSize] = useState<'small' | 'medium'>('medium')

  const pillOptions = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ]

  return (
    <Box>
      <PropsTable props={[
        { name: 'options', value: '{ label, value }[]', description: 'רשימת האפשרויות' },
        { name: 'value', value: 'string | number | array', description: 'ערך נוכחי (מחרוזת בודדת או מערך)' },
        { name: 'multiple', value: 'boolean', description: 'בחירה מרובה' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל אינטראקציה' },
        { name: 'size', value: "'small' | 'medium'", description: 'גודל ה-pills' },
        { name: 'onChange', value: '(value) => void', description: 'callback בשינוי' },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
        <FormControlLabel
          control={
            <Switch
              checked={size === 'small'}
              onChange={e => setSize(e.target.checked ? 'small' : 'medium')}
            />
          }
          label="size=small"
        />
      </Box>
      <SectionTitle>בחירה יחידה (עם toggle)</SectionTitle>
      <IpsPillSelect
        options={pillOptions}
        value={singleValue}
        onChange={v => setSingleValue(v as string | number)}
        disabled={disabled}
        size={size}
      />
      <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
        נבחר: {singleValue || '(לא נבחר)'}
      </Typography>
      <SectionTitle>בחירה מרובה</SectionTitle>
      <IpsPillSelect
        options={pillOptions}
        value={multiValue}
        onChange={v => setMultiValue(v as (string | number)[])}
        multiple
        disabled={disabled}
        size={size}
      />
      <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
        נבחרו: {multiValue.length > 0 ? multiValue.join(', ') : '(לא נבחר)'}
      </Typography>
    </Box>
  )
}

function TimePickerPanel() {
  const [value, setValue] = useState<Moment | null>(null)
  const [valueWithDefault, setValueWithDefault] = useState<Moment | null>(moment('14:30', 'HH:mm'))
  const [workHoursValue, setWorkHoursValue] = useState<Moment | null>(null)
  const [disabled, setDisabled] = useState(false)
  const [ampm, setAmpm] = useState(false)
  const [error, setError] = useState(false)

  return (
    <Box>
      <PropsTable props={[
        { name: 'value', value: 'Moment | null', description: 'ערך נוכחי (controlled)' },
        { name: 'onChange', value: '(value) => void', description: 'callback בשינוי' },
        { name: 'label', value: 'string', description: 'תווית' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל' },
        { name: 'ampm', value: 'boolean', description: 'פורמט 12 שעות (AM/PM)' },
        { name: 'error', value: 'boolean', description: 'מצב שגיאה בשדה' },
        { name: 'helperText', value: 'string', description: 'טקסט עזרה / שגיאה מתחת השדה' },
        { name: 'minTime', value: 'Moment', description: 'שעה מינימלית' },
        { name: 'maxTime', value: 'Moment', description: 'שעה מקסימלית' },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
        <FormControlLabel control={<Switch checked={ampm} onChange={e => setAmpm(e.target.checked)} />} label="AM/PM" />
        <FormControlLabel control={<Switch checked={error} onChange={e => setError(e.target.checked)} />} label="error" />
      </Box>
      <Stack spacing={3} sx={{ maxWidth: 320 }}>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>בחירה ריקה</Typography>
          <IpsTimePicker
            label="בחר שעה"
            value={value}
            onChange={v => setValue(v as Moment | null)}
            disabled={disabled}
            ampm={ampm}
            error={error}
            helperText={error ? 'שגיאה: שדה חובה' : 'בחר שעה'}
          />
          {value && (
            <Typography variant="caption" sx={{ mt: 0.5, display: 'block', color: 'text.secondary' }}>
              נבחר: {value.format(ampm ? 'hh:mm A' : 'HH:mm')}
            </Typography>
          )}
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>עם ערך התחלתי (14:30)</Typography>
          <IpsTimePicker
            label="שעת פגישה"
            value={valueWithDefault}
            onChange={v => setValueWithDefault(v as Moment | null)}
            disabled={disabled}
            ampm={ampm}
          />
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>שעות עבודה בלבד (09:00–17:00)</Typography>
          <IpsTimePicker
            label="שעות עבודה"
            value={workHoursValue}
            onChange={v => setWorkHoursValue(v as Moment | null)}
            ampm={false}
            minTime={moment('09:00', 'HH:mm')}
            maxTime={moment('17:00', 'HH:mm')}
          />
          {workHoursValue && (
            <Typography variant="caption" sx={{ mt: 0.5, display: 'block', color: 'text.secondary' }}>
              נבחר: {workHoursValue.format('HH:mm')}
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  )
}

// ─── Main App ────────────────────────────────────────────────────────────────

function DatePickerPanel() {
  const [value, setValue] = useState<Date | null>(null)
  const [valueWithDate, setValueWithDate] = useState<Date | null>(new Date(2025, 0, 15))
  const [disabled, setDisabled] = useState(false)
  const [readOnly, setReadOnly] = useState(false)
  const [error, setError] = useState(false)
  const [rtl, setRtl] = useState(false)

  const today = new Date()
  const in30Days = new Date(today)
  in30Days.setDate(today.getDate() + 30)

  return (
    <Box>
      <PropsTable props={[
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
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
        <FormControlLabel control={<Switch checked={readOnly} onChange={e => setReadOnly(e.target.checked)} />} label="readOnly" />
        <FormControlLabel control={<Switch checked={error} onChange={e => setError(e.target.checked)} />} label="error" />
        <FormControlLabel control={<Switch checked={rtl} onChange={e => setRtl(e.target.checked)} />} label="RTL" />
      </Box>
      <Stack spacing={3} sx={{ maxWidth: 320 }}>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>בחירה ריקה</Typography>
          <IpsDatePicker
            label="בחר תאריך"
            value={value}
            onChange={v => setValue(v)}
            disabled={disabled}
            readOnly={readOnly}
            rtl={rtl}
            error={error}
            helperText={error ? 'שגיאה: שדה חובה' : 'DD/MM/YYYY'}
          />
          {value && (
            <Typography variant="caption" sx={{ mt: 0.5, display: 'block', color: 'text.secondary' }}>
              נבחר: {value.toLocaleDateString('he-IL')}
            </Typography>
          )}
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>עם ערך התחלתי (15/01/2025)</Typography>
          <IpsDatePicker
            label="תאריך פגישה"
            value={valueWithDate}
            onChange={v => setValueWithDate(v)}
            disabled={disabled}
            readOnly={readOnly}
            rtl={rtl}
          />
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>טווח מינימלי/מקסימלי (היום עד +30 יום)</Typography>
          <IpsDatePicker
            label="תאריך זמין"
            value={null}
            onChange={() => {}}
            minDate={today}
            maxDate={in30Days}
            rtl={rtl}
          />
        </Box>
      </Stack>
    </Box>
  )
}

function DateTimePickerPanel() {
  const [value, setValue] = useState<Date | null>(null)
  const [valueWithDate, setValueWithDate] = useState<Date | null>(new Date(2025, 0, 15, 14, 30))
  const [disabled, setDisabled] = useState(false)
  const [readOnly, setReadOnly] = useState(false)
  const [error, setError] = useState(false)
  const [rtl, setRtl] = useState(false)

  return (
    <Box>
      <PropsTable props={[
        { name: 'value', value: 'Date | null', description: 'ערך נוכחי (controlled)' },
        { name: 'onChange', value: '(value: Date | null) => void', description: 'callback בשינוי' },
        { name: 'label', value: 'string', description: 'תווית' },
        { name: 'disabled', value: 'boolean', description: 'מנטרל את השדה' },
        { name: 'readOnly', value: 'boolean', description: 'קריאה בלבד' },
        { name: 'rtl', value: 'boolean', description: 'כיווון טקסט מימין לשמאל' },
        { name: 'error', value: 'boolean', description: 'מצב שגיאה' },
        { name: 'helperText', value: 'string', description: 'טקסט עזרה / שגיאה מתחת השדה' },
        { name: 'format', value: 'string', description: "פורמט תאריך (ברירת מחדל: 'dd/MM/yyyy HH:mm')" },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={disabled} onChange={e => setDisabled(e.target.checked)} />} label="disabled" />
        <FormControlLabel control={<Switch checked={readOnly} onChange={e => setReadOnly(e.target.checked)} />} label="readOnly" />
        <FormControlLabel control={<Switch checked={error} onChange={e => setError(e.target.checked)} />} label="error" />
        <FormControlLabel control={<Switch checked={rtl} onChange={e => setRtl(e.target.checked)} />} label="RTL" />
      </Box>
      <Stack spacing={3} sx={{ maxWidth: 360 }}>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>בחירה ריקה</Typography>
          <IpsDateTimePicker
            label="בחר תאריך ושעה"
            value={value}
            onChange={v => setValue(v)}
            disabled={disabled}
            readOnly={readOnly}
            rtl={rtl}
            error={error}
            helperText={error ? 'שגיאה: שדה חובה' : 'DD/MM/YYYY HH:MM'}
          />
          {value && (
            <Typography variant="caption" sx={{ mt: 0.5, display: 'block', color: 'text.secondary' }}>
              נבחר: {value.toLocaleString('he-IL')}
            </Typography>
          )}
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>עם ערך התחלתי (15/01/2025 14:30)</Typography>
          <IpsDateTimePicker
            label="תאריך פגישה"
            value={valueWithDate}
            onChange={v => setValueWithDate(v)}
            disabled={disabled}
            readOnly={readOnly}
            rtl={rtl}
          />
        </Box>
      </Stack>
    </Box>
  )
}

function TableLightPanel() {
  const COLUMNS = [
    { key: 'name',       label: 'שם',         width: 160 },
    { key: 'role',       label: 'תפקיד',      width: 160 },
    { key: 'department', label: 'מחלקה',      width: 160 },
    { key: 'status',     label: 'סטטוס',      width: 120 },
  ]
  const ROWS = [
    { name: 'Alice Cohen',  role: 'Developer', department: 'R&D',     status: 'פעיל'  },
    { name: 'Bob Levi',     role: 'Designer',  department: 'Product', status: 'פעיל'  },
    { name: 'Carol Shapir', role: 'PM',        department: 'Product', status: 'חופשה' },
    { name: 'Dan Mizrahi',  role: 'QA',        department: 'R&D',     status: 'פעיל'  },
    { name: 'Eve Katz',     role: 'DevOps',    department: 'Infra',   status: 'פעיל'  },
  ]

  const [striped, setStriped] = useState(true)
  const [dense, setDense] = useState(false)
  const [stickyHeader, setStickyHeader] = useState(false)
  const [showEmpty, setShowEmpty] = useState(false)

  return (
    <Box>
      <PropsTable props={[
        { name: 'columns', value: 'IpsTableLightColumn[]', description: 'הגדרות עמודות (חובה)' },
        { name: 'rows', value: 'Record<string, ReactNode>[]', description: 'מערך שורות (חובה)' },
        { name: 'striped', value: 'boolean', description: 'שורות זוגיות בצבע אפור' },
        { name: 'dense', value: 'boolean', description: 'ריווח מצומצם' },
        { name: 'stickyHeader', value: 'boolean', description: 'כותרת קבועה בגלילה' },
        { name: 'emptyText', value: 'string', description: 'טקסט כשאין שורות' },
        { name: 'sx', value: 'SxProps', description: 'עיצוב MUI על ה-TableContainer' },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={striped} onChange={e => setStriped(e.target.checked)} />} label="striped" />
        <FormControlLabel control={<Switch checked={dense} onChange={e => setDense(e.target.checked)} />} label="dense" />
        <FormControlLabel control={<Switch checked={stickyHeader} onChange={e => setStickyHeader(e.target.checked)} />} label="stickyHeader" />
        <FormControlLabel control={<Switch checked={showEmpty} onChange={e => setShowEmpty(e.target.checked)} />} label="empty state" />
      </Box>
      <Box sx={stickyHeader ? { maxHeight: 200, overflow: 'auto' } : undefined}>
        <IpsTableLight
          columns={COLUMNS}
          rows={showEmpty ? [] : ROWS}
          striped={striped}
          dense={dense}
          stickyHeader={stickyHeader}
          emptyText="אין נתונים להצגה"
        />
      </Box>
    </Box>
  )
}
function TablePanel() {
  const COLUMNS: GridColDef[] = [
    { field: 'id',         headerName: 'ID',      width: 70  },
    { field: 'name',       headerName: 'שם',      flex: 1    },
    { field: 'role',       headerName: 'תפקיד',   flex: 1    },
    { field: 'department', headerName: 'מחלקה',   flex: 1    },
    { field: 'status',     headerName: 'סטטוס',   width: 120 },
  ]
  const ROWS = [
    { id: 1, name: 'Alice Cohen',  role: 'Developer', department: 'R&D',     status: 'פעיל' },
    { id: 2, name: 'Bob Levi',     role: 'Designer',  department: 'Product', status: 'פעיל' },
    { id: 3, name: 'Carol Shapir', role: 'PM',        department: 'Product', status: 'חופשה' },
    { id: 4, name: 'Dan Mizrahi',  role: 'QA',        department: 'R&D',     status: 'פעיל' },
    { id: 5, name: 'Eve Katz',     role: 'DevOps',    department: 'Infra',   status: 'פעיל' },
  ]

  const [loading, setLoading] = useState(false)
  const [checkbox, setCheckbox] = useState(false)
  const [showEmpty, setShowEmpty] = useState(false)
  const [lastClick, setLastClick] = useState<string | null>(null)

  return (
    <Box>
      <PropsTable props={[
        { name: 'rows', value: 'GridRowsProp', description: 'שורות נתונים — כל שורה חייבת id (חובה)' },
        { name: 'columns', value: 'GridColDef[]', description: 'הגדרות עמודות (חובה)' },
        { name: 'loading', value: 'boolean', description: 'הצג skeleton טעינה' },
        { name: 'pageSize', value: 'number', description: 'שורות לעמוד (ברירת מחדל: 25)' },
        { name: 'checkboxSelection', value: 'boolean', description: 'בחירת שורות' },
        { name: 'onRowClick', value: '(params) => void', description: 'Callback לחיצה על שורה' },
        { name: 'sx', value: 'SxProps', description: 'עיצוב על wrapper Box' },
      ]} />
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <FormControlLabel control={<Switch checked={loading} onChange={e => setLoading(e.target.checked)} />} label="loading" />
        <FormControlLabel control={<Switch checked={checkbox} onChange={e => setCheckbox(e.target.checked)} />} label="checkboxSelection" />
        <FormControlLabel control={<Switch checked={showEmpty} onChange={e => setShowEmpty(e.target.checked)} />} label="empty state" />
      </Box>
      <Box sx={{ height: 400 }}>
        <IpsTable
          columns={COLUMNS}
          rows={showEmpty ? [] : ROWS}
          loading={loading}
          pageSize={5}
          checkboxSelection={checkbox}
          onRowClick={p => setLastClick(String(p.row.name))}
        />
      </Box>
      {lastClick && (
        <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'text.secondary' }}>
          לחץ על: {lastClick}
        </Typography>
      )}
    </Box>
  )
}

function ToastPanel() {
  const addToast = useToast()
  return (
    <Box>
      <PropsTable props={[
        { name: 'children',   value: 'ReactNode',                                         description: 'תוכן האפליקציה (חובה)' },
        { name: 'deleteTime', value: 'number',                                             description: 'זמן עד סגירה אוטומטית במילישניות (ברירת מחדל: 3000)' },
        { name: 'maxToasts',  value: 'number',                                             description: 'מספר הודעות מקסימלי בו-זמנית (ברירת מחדל: 5)' },
        { name: 'position',   value: 'bottom-right | bottom-left | top-right | top-left',  description: 'מיקום קופסת ה-toasts (ברירת מחדל: bottom-right)' },
      ]} />
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        לחץ על כפתור להצגת הודעת toast:
      </Typography>
      <Stack spacing={2} direction="row" flexWrap="wrap">
        <IpsButton variant="contained" color="success" onClick={() => addToast(TOAST_TYPES.SUCCESS, 'הפעולה בוצעה בהצלחה!')}>
          Success
        </IpsButton>
        <IpsButton variant="contained" color="info" onClick={() => addToast(TOAST_TYPES.INFO, 'מידע חשוב לידיעתך')}>
          Info
        </IpsButton>
        <IpsButton variant="contained" color="warning" onClick={() => addToast(TOAST_TYPES.WARNING, 'שים לב לבעיה אפשרית')}>
          Warning
        </IpsButton>
        <IpsButton variant="contained" color="error" onClick={() => addToast(TOAST_TYPES.DANGER, 'שגיאה קריטית — נסה שוב')}>
          Danger
        </IpsButton>
      </Stack>
    </Box>
  )
}

const MINIMAL_TOOLBAR: IpsRteToolbarConfig = {
  groups: [
    { items: ['bold', 'italic', 'underline'] },
    { items: ['bulletList', 'orderedList'] },
    { items: ['undo', 'redo', 'clearFormat'] },
  ],
}

const HEBREW_SAMPLE =
  '<p dir="rtl">שלום! זהו עורך טקסט עשיר עם תמיכה מלאה ב<strong>עברית</strong> ו-<em>RTL</em>.</p>' +
  '<p dir="ltr">This is an English paragraph side-by-side with Hebrew.</p>' +
  '<p dir="rtl">ניתן לכתוב, לעצב ולנהל <u>כיוון טקסט</u> בכל פסקה בנפרד.</p>'

function RichTextEditorPanel() {
  const [html, setHtml]         = useState('<p>התחל לכתוב כאן…</p>')
  const [readOnly, setReadOnly] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [error, setError]       = useState(false)
  const [minimal, setMinimal]   = useState(false)
  const [showHtml, setShowHtml] = useState(false)

  return (
    <Box>
      <PropsTable props={[
        { name: 'value',       value: 'string',                    description: 'HTML מבוקר — מסונכרן עם state חיצוני' },
        { name: 'onChange',    value: '(html: string) => void',    description: 'נקרא בכל שינוי — מחזיר HTML מלא' },
        { name: 'readOnly',    value: 'boolean',                   description: 'מסתיר toolbar, מנטרל עריכה' },
        { name: 'disabled',    value: 'boolean',                   description: 'opacity 0.5, pointerEvents none' },
        { name: 'error',       value: 'boolean',                   description: 'מסגרת אדומה + helperText בצבע error' },
        { name: 'label',       value: 'string',                    description: 'תווית מעל העורך' },
        { name: 'helperText',  value: 'string',                    description: 'טקסט עזר / שגיאה מתחת לעורך' },
        { name: 'dir',         value: "'rtl' | 'ltr' | 'auto'",    description: 'כיוון אזור התוכן (ברירת מחדל: auto)' },
        { name: 'minHeight',   value: 'string | number',           description: 'גובה מינימלי של אזור הכתיבה' },
        { name: 'toolbar',     value: 'IpsRteToolbarConfig',       description: 'עקיפת קבוצות ה-toolbar (ברירת מחדל: DEFAULT_TOOLBAR)' },
      ]} />

      {/* Toggle switches */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        <FormControlLabel control={<Switch checked={readOnly}  onChange={e => setReadOnly(e.target.checked)}  />} label="readOnly" />
        <FormControlLabel control={<Switch checked={disabled}  onChange={e => setDisabled(e.target.checked)}  />} label="disabled" />
        <FormControlLabel control={<Switch checked={error}     onChange={e => setError(e.target.checked)}     />} label="error" />
        <FormControlLabel control={<Switch checked={minimal}   onChange={e => setMinimal(e.target.checked)}   />} label="minimal toolbar" />
        <FormControlLabel control={<Switch checked={showHtml}  onChange={e => setShowHtml(e.target.checked)}  />} label="show HTML" />
      </Box>

      {/* Main editor — controlled mode */}
      <SectionTitle>עורך מבוקר (Controlled)</SectionTitle>
      <IpsRichTextEditor
        label="הודעה"
        value={html}
        onChange={setHtml}
        readOnly={readOnly}
        disabled={disabled}
        error={error}
        helperText={error ? 'שדה חובה — נא להזין תוכן לפני שליחה' : undefined}
        dir="auto"
        minHeight={200}
        toolbar={minimal ? MINIMAL_TOOLBAR : DEFAULT_TOOLBAR}
        placeholder="כתוב כאן…"
      />

      {/* Action buttons */}
      <Stack direction="row" spacing={1} sx={{ mt: 1.5, flexWrap: 'wrap' }}>
        <IpsButton buttonType="clean" onClick={() => setHtml('<p></p>')}>נקה</IpsButton>
        <IpsButton buttonType="secondary" onClick={() => setHtml(HEBREW_SAMPLE)}>טען תוכן לדוגמה</IpsButton>
      </Stack>

      {/* HTML output preview */}
      {showHtml && (
        <Box sx={{ mt: 2 }}>
          <SectionTitle>פלט HTML</SectionTitle>
          <Box
            component="pre"
            sx={{
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
            }}
          >
            {html}
          </Box>
        </Box>
      )}

      {/* Read-only display example */}
      <SectionTitle>תצוגה בלבד (readOnly=true)</SectionTitle>
      <IpsRichTextEditor
        defaultValue={
          '<p dir="rtl">תצוגה זו היא <strong>read-only</strong> — ה-toolbar מוסתר והעריכה מושבתת.</p>' +
          '<p dir="rtl">מתאים להצגת תוכן שמור ללא יכולת עריכה.</p>'
        }
        readOnly
        minHeight={80}
      />
    </Box>
  )
}

const TABS = [
  { label: 'Button', component: <ButtonPanel /> },
  { label: 'TextField', component: <TextFieldPanel /> },
  { label: 'TextArea', component: <TextAreaPanel /> },
  { label: 'CheckBox', component: <CheckBoxPanel /> },
  { label: 'Switch', component: <SwitchPanel /> },
  { label: 'IconButton', component: <IconButtonPanel /> },
  { label: 'ToolTips', component: <ToolTipsPanel /> },
  { label: 'Select', component: <SelectPanel /> },
  { label: 'Autocomplete', component: <AutocompletePanel /> },
  { label: 'ChipSelect', component: <ChipSelectPanel /> },
  { label: 'Accordion', component: <AccordionPanel /> },
  { label: 'PillSelect', component: <PillSelectPanel /> },
  { label: 'TimePicker', component: <TimePickerPanel /> },
  { label: 'DatePicker', component: <DatePickerPanel /> },
  { label: 'DateTimePicker', component: <DateTimePickerPanel /> },
  { label: 'TableLight', component: <TableLightPanel /> },
  { label: 'Table', component: <TablePanel /> },
  { label: 'Toast', component: <ToastPanel /> },
  { label: 'RichTextEditor', component: <RichTextEditorPanel /> },
]

export default function App() {
  const [tab, setTab] = useState(0)

  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <IpsToastProvider>
          <CssBaseline />
        <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa' }} dir="rtl">
          {/* Header */}
          <Box sx={{ background: 'linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)', color: 'white', px: 4, py: 3 }}>
            <Typography variant="h4" fontWeight={700}>🎨 IPS UI Library</Typography>
            <Typography variant="subtitle1" sx={{ opacity: 0.85 }}>תצוגת פקדים — React 18 + TypeScript + MUI</Typography>
          </Box>

          {/* Tabs */}
          <Paper elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
            <Tabs
              value={tab}
              onChange={(_, v) => setTab(v)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ px: 2 }}
            >
              {TABS.map((t, i) => (
                <Tab key={i} label={`Ips${t.label}`} sx={{ textTransform: 'none', fontWeight: 600 }} />
              ))}
            </Tabs>
          </Paper>

          {/* Content */}
          <Box sx={{ p: 4, maxWidth: 900, mx: 'auto' }}>
            <Paper elevation={1} sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                Ips{TABS[tab].label}
              </Typography>
              <Divider sx={{ mb: 3 }} />
              {TABS[tab].component}
            </Paper>
          </Box>
        </Box>
      </IpsToastProvider>
    </ThemeProvider>
    </CacheProvider>
  )
}
