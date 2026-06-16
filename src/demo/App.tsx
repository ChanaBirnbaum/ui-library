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
  Stack,
  Chip,
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
import { IpsDataTable } from '../components/IpsDataTable/IpsDataTable'
import { ExpandedRow } from '../components/IpsDataTable/components/ExpandedRow'
import type { ColumnDef, ActionDef, SubColumnDef } from '../components/IpsDataTable/IpsDataTable.types'
import { IpsToastProvider } from '../components/IpsToast/IpsToastProvider'
import { useToast } from '../components/IpsToast/useToast'
import { TOAST_TYPES } from '../components/IpsToast/IpsToast.types'
import { IpsRichTextEditor } from '../components/IpsRichTextEditor/IpsRichTextEditor'
import { DEFAULT_TOOLBAR } from '../components/IpsRichTextEditor/IpsRteToolbar.types'
import type { IpsRteToolbarConfig } from '../components/IpsRichTextEditor/IpsRteToolbar.types'
import { IpsFileUpload } from '../components/IpsFileUpload/IpsFileUpload'
import { IpsStepper } from '../components/IpsStepper/IpsStepper'
import type { IpsStepItem } from '../components/IpsStepper/IpsStepper.types'
import { IpsTabs } from '../components/IpsTabs/IpsTabs'
import type { IpsTabItem } from '../components/IpsTabs/IpsTabs.types'
import { IpsDialog } from '../components/IpsDialog/IpsDialog'
import type { IpsDialogCloseReason } from '../components/IpsDialog/IpsDialog.types'
import { IpsDrawer } from '../components/IpsDrawer/IpsDrawer'
import type { IpsDrawerCloseReason } from '../components/IpsDrawer/IpsDrawer.types'
import type { GridColDef } from '@mui/x-data-grid'
import type { Moment } from 'moment'
import moment from 'moment'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore – moment locale files have no TS declarations
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
  type EmpRow = {
    id: number; name: string; role: string; dept: string
    status: string; avatar: string; profile: string
  }

  const ROWS: EmpRow[] = [
    { id: 1, name: 'Alice Cohen',   role: 'Developer', dept: 'R&D',     status: 'פעיל',    avatar: 'https://i.pravatar.cc/40?u=1', profile: '/users/1' },
    { id: 2, name: 'Bob Levi',      role: 'Designer',  dept: 'Product', status: 'פעיל',    avatar: 'https://i.pravatar.cc/40?u=2', profile: '/users/2' },
    { id: 3, name: 'Carol Shapir',  role: 'PM',        dept: 'Product', status: 'חופשה',   avatar: 'https://i.pravatar.cc/40?u=3', profile: '/users/3' },
    { id: 4, name: 'Dan Mizrahi',   role: 'QA',        dept: 'R&D',     status: 'פעיל',    avatar: 'https://i.pravatar.cc/40?u=4', profile: '/users/4' },
    { id: 5, name: 'Eve Katz',      role: 'DevOps',    dept: 'Infra',   status: 'לא פעיל', avatar: 'https://i.pravatar.cc/40?u=5', profile: '/users/5' },
    { id: 6, name: 'Frank Avraham', role: 'Analyst',   dept: 'BI',      status: 'פעיל',    avatar: 'https://i.pravatar.cc/40?u=6', profile: '/users/6' },
  ]

  const BASIC_COLS = [
    { key: 'name',   label: 'שם',     width: 160 },
    { key: 'role',   label: 'תפקיד', width: 140 },
    { key: 'dept',   label: 'מחלקה', width: 140 },
    { key: 'status', label: 'סטטוס', width: 120 },
  ]

  const STATUS_COLOR: Record<string, 'success' | 'warning' | 'error'> = {
    'פעיל': 'success', 'חופשה': 'warning', 'לא פעיל': 'error',
  }

  const [striped, setStriped] = useState(true)
  const [dense, setDense] = useState(false)
  const [stickyHeader, setStickyHeader] = useState(false)
  const [showEmpty, setShowEmpty] = useState(false)
  const [enableRowClick, setEnableRowClick] = useState(false)
  const [lastClick, setLastClick] = useState<string | null>(null)

  return (
    <Box>
      <PropsTable props={[
        { name: 'columns',          value: 'IpsTableLightColumn<Row>[]',  description: 'הגדרות עמודות — generic על Row (חובה)' },
        { name: 'rows',             value: 'Row[]',                        description: 'מערך שורות (חובה)' },
        { name: 'maxHeight',        value: 'number | string',              description: 'גובה מקסימלי + overflow:auto לגלילה אנכית' },
        { name: 'stickyHeader',     value: 'boolean',                      description: 'כותרת קבועה בגלילה (דורש maxHeight)' },
        { name: 'wrap',             value: "'ellipsis'|'wrap'|'nowrap'",   description: "ברירת מחדל לגלישת טקסט לכל העמודות (ברירת מחדל: 'ellipsis')" },
        { name: 'col.wrap',         value: "'ellipsis'|'wrap'|'nowrap'",   description: 'עקיפת wrap ברמת עמודה בודדת' },
        { name: 'col.type',         value: "'link'|'image'|'text'",        description: "רנדר מובנה לתא — 'link' מרנדר <Link>, 'image' מרנדר <img>" },
        { name: 'col.render',       value: '(val, row, i) => ReactNode',   description: 'רנדר מלא מותאם — עדיפות על col.type' },
        { name: 'onRowClick',       value: '(e, row, idx) => void',        description: 'לחיצה על שורה — מפעיל cursor:pointer אוטומטית' },
        { name: 'onRowDoubleClick', value: '(e, row, idx) => void',        description: 'לחיצה כפולה על שורה' },
        { name: 'hover',            value: 'boolean',                      description: 'hover highlight — auto כשיש row handler' },
        { name: 'getRowId',         value: '(row, i) => string|number',    description: 'מפתח React יציב לכל שורה (ברירת מחדל: row.id ← index)' },
        { name: 'striped',          value: 'boolean',                      description: 'שורות זוגיות בצבע אפור (ברירת מחדל: true)' },
        { name: 'dense',            value: 'boolean',                      description: 'ריווח מצומצם' },
        { name: 'emptyText',        value: 'string',                       description: "טקסט כשאין שורות (ברירת מחדל: 'No data')" },
      ]} />

      {/* ── Section 1: Basic ── */}
      <SectionTitle>טבלה בסיסית</SectionTitle>
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
        <FormControlLabel control={<Switch checked={striped}       onChange={e => setStriped(e.target.checked)} />}      label="striped" />
        <FormControlLabel control={<Switch checked={dense}         onChange={e => setDense(e.target.checked)} />}        label="dense" />
        <FormControlLabel control={<Switch checked={stickyHeader}  onChange={e => setStickyHeader(e.target.checked)} />} label="stickyHeader + maxHeight" />
        <FormControlLabel control={<Switch checked={showEmpty}     onChange={e => setShowEmpty(e.target.checked)} />}    label="empty state" />
        <FormControlLabel
          control={<Switch checked={enableRowClick} onChange={e => { setEnableRowClick(e.target.checked); setLastClick(null) }} />}
          label="onRowClick"
        />
      </Box>
      <IpsTableLight
        columns={BASIC_COLS}
        rows={showEmpty ? [] : ROWS}
        striped={striped}
        dense={dense}
        stickyHeader={stickyHeader}
        maxHeight={stickyHeader ? 220 : undefined}
        emptyText="אין נתונים להצגה"
        onRowClick={enableRowClick ? (_e, row) => setLastClick((row as EmpRow).name) : undefined}
      />
      {enableRowClick && (
        <Typography variant="caption" sx={{ mt: 0.5, display: 'block', color: 'text.secondary' }}>
          {lastClick ? `✓ נלחץ על: ${lastClick}` : 'לחץ על שורה כלשהי...'}
        </Typography>
      )}

      {/* ── Section 2: Rich column types ── */}
      <SectionTitle>סוגי עמודות — תמונה · קישור · Chip מותאם</SectionTitle>
      <IpsTableLight
        rows={ROWS}
        columns={[
          {
            key: 'avatar',
            label: 'תמונה',
            width: 70,
            wrap: 'nowrap',
            type: 'image',
            imageSrc: (row) => (row as EmpRow).avatar,
            imageProps: { width: 36, height: 36, rounded: true, alt: 'avatar' },
          },
          {
            key: 'name',
            label: 'שם (קישור חיצוני)',
            width: 180,
            type: 'link',
            href: (row) => (row as EmpRow).profile,
            linkTarget: '_blank',
          },
          { key: 'role', label: 'תפקיד', width: 130 },
          {
            key: 'status',
            label: 'סטטוס',
            width: 130,
            wrap: 'nowrap',
            render: (value) => {
              const v = value as string
              return <Chip label={v} color={STATUS_COLOR[v] ?? 'default'} size="small" />
            },
          },
        ]}
        striped
      />

      {/* ── Section 3: Wrap modes ── */}
      <SectionTitle>מצבי גלישת טקסט (col.wrap)</SectionTitle>
      {(['ellipsis', 'wrap', 'nowrap'] as const).map(mode => (
        <Box key={mode} sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontFamily: 'monospace' }}>
            wrap="{mode}"
          </Typography>
          <IpsTableLight
            columns={[
              { key: 'label', label: 'מצב', width: 90 },
              { key: 'text',  label: 'טקסט לדוגמה', width: 260, wrap: mode },
              { key: 'icon', label: 'איקון', width: 90 },
              { key: 'yy', label: 'פרטים', width: 90 },
              { key: 'xx', label: 'טלפון', width: 90 }
            ]}
            rows={[{ label: mode, text: 'זהו טקסט ארוך מאוד שנועד להדגים את ההבדל בין מצבי הגלישה השונים הזמינים בקומפוננטה' }]}
            striped={false}
          />
        </Box>
      ))}
    </Box>
  )
}
// ─── IpsDataTable Panel ────────────────────────────────────────────────────
interface Employee {
  id: number
  name: string
  role: string
  department: string
  salary: number
  status: string
  projects?: { name: string; status: string; due: string }[]
}

const DT_DATA: Employee[] = [
  { id: 1, name: 'Alice Cohen',  role: 'Developer', department: 'R&D',     salary: 32000, status: 'פעיל',   projects: [{ name: 'Portal', status: 'בביצוע', due: '2026-08-01' }, { name: 'API v3', status: 'הושלם', due: '2026-03-15' }] },
  { id: 2, name: 'Bob Levi',     role: 'Designer',  department: 'Product', salary: 28000, status: 'פעיל',   projects: [{ name: 'Design System', status: 'בביצוע', due: '2026-07-01' }] },
  { id: 3, name: 'Carol Shapir', role: 'PM',        department: 'Product', salary: 35000, status: 'חופשה',  projects: [] },
  { id: 4, name: 'Dan Mizrahi',  role: 'QA',        department: 'R&D',     salary: 26000, status: 'פעיל',   projects: [{ name: 'Portal', status: 'בביצוע', due: '2026-08-01' }] },
  { id: 5, name: 'Eve Katz',     role: 'DevOps',    department: 'Infra',   salary: 38000, status: 'פעיל',   projects: [{ name: 'CI/CD', status: 'הושלם', due: '2026-01-30' }] },
  { id: 6, name: 'Frank Avraham', role: 'Developer', department: 'R&D',    salary: 31000, status: 'מחלה',  projects: [] },
  { id: 7, name: 'Gal Bar-On',   role: 'Analyst',   department: 'BI',      salary: 29000, status: 'פעיל',   projects: [{ name: 'Dashboard', status: 'בתכנון', due: '2026-10-01' }] },
]

const DT_PROJECT_COLS: SubColumnDef[] = [
  { id: 'name',   header: 'שם פרויקט', accessorKey: 'name' },
  { id: 'status', header: 'סטטוס',      accessorKey: 'status' },
  { id: 'due',    header: 'תאריך יעד',  accessorKey: 'due', align: 'center' },
]

const DT_COLUMNS: ColumnDef<Employee>[] = [
  { accessorKey: 'id',         header: 'מזהה',   size: 60 },
  { accessorKey: 'name',       header: 'שם',     meta: { editable: { type: 'text', mode: 'click' }, width: 160 } },
  { accessorKey: 'role',       header: 'תפקיד',  meta: { editable: { type: 'select', options: [
    { value: 'Developer', label: 'Developer' }, { value: 'Designer', label: 'Designer' },
    { value: 'PM', label: 'PM' }, { value: 'QA', label: 'QA' }, { value: 'DevOps', label: 'DevOps' },
    { value: 'Analyst', label: 'Analyst' },
  ]}} },
  { accessorKey: 'department', header: 'מחלקה' },
  { accessorKey: 'salary',     header: 'שכר (₪)', meta: { align: 'end', editable: { type: 'number' } },
    cell: ({ getValue }) => `₪${(getValue() as number).toLocaleString()}` },
  { accessorKey: 'status',     header: 'סטטוס',
    cell: ({ getValue }) => {
      const v = getValue() as string
      const color = v === 'פעיל' ? 'success.main' : v === 'חופשה' ? 'warning.main' : 'error.main'
      return <Box component="span" sx={{ color, fontWeight: 600 }}>{v}</Box>
    }
  },
]

function DataTablePanel() {
  const [rows, setRows] = useState<Employee[]>(DT_DATA)
  const [sorting, setSorting] = useState(false)
  const [filtering, setFiltering] = useState(false)
  const [pagination, setPagination] = useState(false)
  const [expand, setExpand] = useState(false)
  const [inlineEdit, setInlineEdit] = useState(false)
  const [withDelete, setWithDelete] = useState(false)
  const [loading, setLoading] = useState(false)
  const [variant, setVariant] = useState<'default' | 'bordered' | 'striped'>('default')
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md')

  const handleSave = async (_orig: Employee, updated: Employee) => {
    setRows(prev => prev.map(r => r.id === updated.id ? updated : r))
  }

  const handleDelete = (row: Employee) => {
    setRows(prev => prev.filter(r => r.id !== row.id))
  }

  const customActions: ActionDef<Employee>[] = [
    {
      key: 'view',
      label: 'צפייה בפרויקטים',
      icon: <Box component="span" sx={{ fontSize: 16 }}>📂</Box>,
      onClick: (row) => alert(`${row.name} — ${row.projects?.length ?? 0} פרויקטים`),
      isVisible: (row) => (row.projects?.length ?? 0) > 0,
    },
  ]

  return (
    <Box>
      <PropsTable props={[
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
      ]} />

      {/* Controls */}
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
        <FormControlLabel control={<Switch checked={sorting}    onChange={e => setSorting(e.target.checked)} />}   label="sorting" />
        <FormControlLabel control={<Switch checked={filtering}  onChange={e => setFiltering(e.target.checked)} />} label="filtering" />
        <FormControlLabel control={<Switch checked={pagination} onChange={e => setPagination(e.target.checked)} />} label="pagination" />
        <FormControlLabel control={<Switch checked={expand}     onChange={e => setExpand(e.target.checked)} />}    label="expandedContent" />
        <FormControlLabel control={<Switch checked={inlineEdit} onChange={e => setInlineEdit(e.target.checked)} />} label="onSave (inline edit)" />
        <FormControlLabel control={<Switch checked={withDelete} onChange={e => setWithDelete(e.target.checked)} />} label="onDelete" />
        <FormControlLabel control={<Switch checked={loading}    onChange={e => setLoading(e.target.checked)} />}   label="isLoading" />
      </Box>
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ mr: 1 }}>variant:</Typography>
        {(['default', 'bordered', 'striped'] as const).map(v => (
          <IpsButton key={v} size="small" variant={variant === v ? 'contained' : 'outlined'} onClick={() => setVariant(v)}>{v}</IpsButton>
        ))}
        <Box sx={{ mx: 1 }} />
        <Typography variant="body2" sx={{ mr: 1 }}>size:</Typography>
        {(['sm', 'md', 'lg'] as const).map(s => (
          <IpsButton key={s} size="small" variant={size === s ? 'contained' : 'outlined'} onClick={() => setSize(s)}>{s}</IpsButton>
        ))}
        {(inlineEdit || withDelete) && (
          <IpsButton size="small" buttonType="clean" onClick={() => setRows(DT_DATA)} sx={{ ml: 2 }}>איפוס נתונים</IpsButton>
        )}
      </Box>

      <IpsDataTable<Employee>
        data={rows}
        columns={DT_COLUMNS}
        sorting={sorting}
        filtering={filtering}
        pagination={pagination ? { pageSize: 4, pageSizeOptions: [4, 7], showTotal: true } : false}
        expandedContent={expand ? (row) => (
          <ExpandedRow
            title={`פרויקטים של ${row.name}`}
            subData={row.projects}
            subColumns={DT_PROJECT_COLS}
          />
        ) : undefined}
        onSave={inlineEdit ? handleSave : undefined}
        onDelete={withDelete ? handleDelete : undefined}
        customActions={customActions}
        isLoading={loading}
        variant={variant}
        size={size}
      />
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
  const [html, setHtml]         = useState('')
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

function FileUploadPanel() {
  const [lastResult, setLastResult] = useState<string | null>(null)
  const [disabled, setDisabled]     = useState(false)
  const [camera, setCamera]         = useState(false)
  const [screenshot, setScreenshot] = useState(false)
  const [scan, setScan]             = useState(false)
  const [multiple, setMultiple]     = useState(true)
  const [maxSize, setMaxSize]       = useState(10)

  return (
    <Box>
      <PropsTable props={[
        { name: 'sviva',          value: 'string',             description: 'סביבה (dev/staging/prod) — לבניית ה-URL' },
        { name: 'system',         value: 'string',             description: 'שם אתר SharePoint — יעד ההעלאה' },
        { name: 'camera',         value: 'boolean',            description: 'הצג כפתור "מצלמה"' },
        { name: 'screenshot',     value: 'boolean',            description: 'הצג כפתור "צילום מסך" (ברירת מחדל: false)' },
        { name: 'scan',           value: 'boolean',            description: 'הצג כפתור "סריקה"' },
        { name: 'multiple',       value: 'boolean',            description: 'אפשר בחירת מספר קבצים (ברירת מחדל: true)' },
        { name: 'maxFileSizeMB',  value: 'number',             description: 'גודל קובץ מקסימלי ב-MB (ברירת מחדל: 10)' },
        { name: 'accept',         value: 'string[]',           description: 'סוגי קבצים מותרים, למשל ["image/*", ".pdf"]' },
        { name: 'disabled',       value: 'boolean',            description: 'מנטרל את כל האינטראקציות' },
        { name: 'onSaveSuccess',  value: '(results) => void',  description: 'callback לאחר העלאה מוצלחת' },
        { name: 'onSaveError',    value: '(error) => void',    description: 'callback כשהעלאה נכשלת' },
        { name: 'onBeforeSave',   value: '() => Promise<bool>',description: 'ולידציה אסינכרונית לפני שמירה' },
      ]} />

      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
        <FormControlLabel control={<Switch checked={disabled}    onChange={e => setDisabled(e.target.checked)}    />} label="disabled" />
        <FormControlLabel control={<Switch checked={camera}      onChange={e => setCamera(e.target.checked)}      />} label="camera" />
        <FormControlLabel control={<Switch checked={screenshot}  onChange={e => setScreenshot(e.target.checked)}  />} label="screenshot" />
        <FormControlLabel control={<Switch checked={scan}        onChange={e => setScan(e.target.checked)}        />} label="scan" />
        <FormControlLabel control={<Switch checked={multiple}    onChange={e => setMultiple(e.target.checked)}    />} label="multiple" />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2">maxFileSizeMB:</Typography>
          {[1, 5, 10, 50].map(s => (
            <IpsButton key={s} variant={maxSize === s ? 'contained' : 'outlined'} size="small"
              onClick={() => setMaxSize(s)}>{s}</IpsButton>
          ))}
        </Box>
      </Box>

      <IpsFileUpload
        sviva="dev"
        system="demo-site"
        camera={camera}
        screenshot={screenshot}
        scan={scan}
        multiple={multiple}
        maxFileSizeMB={maxSize}
        disabled={disabled}
        onSaveSuccess={results => setLastResult(results.map(r => r.name).join(', '))}
        onSaveError={err => setLastResult(`שגיאה: ${String(err)}`)}
        sx={{ maxWidth: 600 }}
      />

      {lastResult && (
        <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
          תוצאה: {lastResult}
        </Typography>
      )}
    </Box>
  )
}

function IpsStepperPanel() {
  const [activeStep, setActiveStep] = useState(1)

  const BASIC_STEPS: IpsStepItem[] = [
    { label: 'Select settings', description: 'Configure the campaign' },
    { label: 'Create ad group', optional: true },
    { label: 'Review & launch' },
  ]

  const STATUS_STEPS: IpsStepItem[] = [
    { label: 'Completed step' },
    { label: 'Error step', status: 'error' },
    { label: 'Warning step', status: 'warning' },
    { label: 'Disabled step', disabled: true },
    { label: 'Pending step' },
  ]

  const ICON_STEPS: IpsStepItem[] = [
    { label: 'Home', icon: <SvgIcon viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon> },
    { label: 'Favourite', icon: <SvgIcon viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></SvgIcon> },
    { label: 'Locked', icon: <SvgIcon viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></SvgIcon> },
  ]

  const CONTENT_STEPS: IpsStepItem[] = [
    {
      label: 'Step 1',
      content: (
        <Box sx={{ pb: 2 }}>
          <Typography variant="body2">Fill in campaign details.</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <IpsButton buttonType="primary" size="small" onClick={() => setActiveStep(1)}>Next</IpsButton>
          </Stack>
        </Box>
      ),
    },
    {
      label: 'Step 2',
      content: (
        <Box sx={{ pb: 2 }}>
          <Typography variant="body2">Set targeting options.</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <IpsButton buttonType="primary" size="small" onClick={() => setActiveStep(2)}>Next</IpsButton>
            <IpsButton buttonType="secondary" size="small" onClick={() => setActiveStep(0)}>Back</IpsButton>
          </Stack>
        </Box>
      ),
    },
    {
      label: 'Step 3',
      content: (
        <Box sx={{ pb: 2 }}>
          <Typography variant="body2">Review and submit.</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <IpsButton buttonType="secondary" size="small" onClick={() => setActiveStep(0)}>Reset</IpsButton>
          </Stack>
        </Box>
      ),
    },
  ]

  return (
    <Box>
      <PropsTable props={[
        { name: 'steps',            value: 'IpsStepItem[]',              description: 'Array of step definitions' },
        { name: 'activeStep',       value: 'number',                     description: 'Currently active step (0-based)' },
        { name: 'orientation',      value: '"horizontal" | "vertical"',  description: 'Layout direction' },
        { name: 'nonLinear',        value: 'boolean',                    description: 'Allow clicking any step' },
        { name: 'onStepClick',      value: '(i, step) => void',          description: 'Fired when a step is clicked (nonLinear only)' },
        { name: 'alternativeLabel', value: 'boolean',                    description: 'Labels below icons' },
        { name: 'renderStepIcon',   value: '(ctx) => ReactNode',         description: 'Custom icon render prop' },
        { name: 'renderStepLabel',  value: '(ctx) => ReactNode',         description: 'Custom label render prop' },
        { name: 'renderConnector',  value: '(ctx) => ReactNode',         description: 'Custom connector render prop' },
      ]} />

      <SectionTitle>Basic — Horizontal (activeStep controlled)</SectionTitle>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <IpsButton size="small" buttonType="secondary" onClick={() => setActiveStep((s) => Math.max(0, s - 1))}>Back</IpsButton>
        <IpsButton size="small" buttonType="primary" onClick={() => setActiveStep((s) => Math.min(BASIC_STEPS.length - 1, s + 1))}>Next</IpsButton>
        <Typography variant="body2" sx={{ alignSelf: 'center' }}>activeStep: {activeStep}</Typography>
      </Stack>
      <IpsStepper steps={BASIC_STEPS} activeStep={activeStep} />

      <SectionTitle>Alternative Label</SectionTitle>
      <IpsStepper steps={BASIC_STEPS} activeStep={1} alternativeLabel />

      <SectionTitle>Non-linear / Clickable</SectionTitle>
      <IpsStepper
        steps={BASIC_STEPS}
        activeStep={activeStep}
        nonLinear
        onStepClick={(i) => setActiveStep(i)}
      />

      <SectionTitle>Status Overrides (error / warning / disabled)</SectionTitle>
      <IpsStepper steps={STATUS_STEPS} activeStep={0} />

      <SectionTitle>Custom Step Icons</SectionTitle>
      <IpsStepper steps={ICON_STEPS} activeStep={1} />

      <SectionTitle>Custom renderStepIcon</SectionTitle>
      <IpsStepper
        steps={BASIC_STEPS}
        activeStep={1}
        renderStepIcon={({ index, status }) => (
          <Box sx={{
            width: 30, height: 30, borderRadius: '50%',
            bgcolor: status === 'active' ? 'secondary.main' : status === 'completed' ? 'success.main' : 'grey.400',
            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: 13,
          }}>
            {index + 1}
          </Box>
        )}
      />

      <SectionTitle>Vertical with StepContent</SectionTitle>
      <IpsStepper steps={CONTENT_STEPS} activeStep={activeStep} orientation="vertical" />
    </Box>
  )
}

function IpsTabsPanel() {
  const [value, setValue] = useState<string | number>('details')
  const [orientation, setOrientation] = useState(false)      // false = horizontal
  const [centered, setCentered] = useState(false)
  const [renderPanels, setRenderPanels] = useState(true)
  const [keepMounted, setKeepMounted] = useState(false)
  const [variant, setVariant] = useState<'standard' | 'scrollable' | 'fullWidth'>('standard')

  const [tab1Disabled, setTab1Disabled] = useState(false)
  const [tab2Error, setTab2Error] = useState(false)

  const tabs: IpsTabItem[] = [
    { value: 'details',  label: 'Details',  disabled: tab1Disabled,
      content: <Typography variant="body2" sx={{ p: 2 }}>Details panel content.</Typography> },
    { value: 'payment',  label: 'Payment',  error: tab2Error, badge: tab2Error ? '!' : undefined,
      content: <Typography variant="body2" sx={{ p: 2 }}>Payment panel content.</Typography> },
    { value: 'review',   label: 'Review',   badge: 3,
      content: <Typography variant="body2" sx={{ p: 2 }}>Review panel content.</Typography> },
    { value: 'history',  label: 'History',
      content: <Typography variant="body2" sx={{ p: 2 }}>History panel content.</Typography> },
  ]

  return (
    <Box>
      <PropsTable props={[
        { name: 'tabs',          value: 'IpsTabItem[]',                        description: 'Tab descriptors with value, label, icon, badge, disabled, error, content' },
        { name: 'value',         value: 'string | number',                     description: 'Controlled active tab — required, owned by consumer' },
        { name: 'onTabChange',   value: '(value, tab) => void',                description: 'Reports intent only — consumer decides whether to update value' },
        { name: 'orientation',   value: '"horizontal" | "vertical"',           description: 'Bar direction' },
        { name: 'variant',       value: '"standard" | "scrollable" | "fullWidth"', description: 'MUI Tabs variant' },
        { name: 'centered',      value: 'boolean',                             description: 'Center the tabs (standard + horizontal only)' },
        { name: 'renderPanels',  value: 'boolean',                             description: 'Render built-in role="tabpanel" elements from tab.content' },
        { name: 'keepMounted',   value: 'boolean',                             description: 'Mount all panels, hide inactive via hidden attr' },
        { name: 'idPrefix',      value: 'string',                              description: 'Prefix for generated tab + panel ids' },
        { name: 'renderTabLabel','value': '(ctx) => ReactNode',                description: 'Full override of a tab\'s label content' },
      ]} />

      <SectionTitle>Controls</SectionTitle>
      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 2 }}>
        <FormControlLabel
          control={<Switch checked={orientation} onChange={(e) => setOrientation(e.target.checked)} />}
          label="Vertical orientation"
        />
        <FormControlLabel
          control={<Switch checked={centered} onChange={(e) => setCentered(e.target.checked)} />}
          label="Centered"
        />
        <FormControlLabel
          control={<Switch checked={renderPanels} onChange={(e) => setRenderPanels(e.target.checked)} />}
          label="Render panels"
        />
        <FormControlLabel
          control={<Switch checked={keepMounted} onChange={(e) => setKeepMounted(e.target.checked)} disabled={!renderPanels} />}
          label="Keep mounted"
        />
      </Stack>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        {(['standard', 'scrollable', 'fullWidth'] as const).map((v) => (
          <IpsButton
            key={v}
            size="small"
            buttonType={variant === v ? 'primary' : 'secondary'}
            onClick={() => setVariant(v)}
          >
            {v}
          </IpsButton>
        ))}
      </Stack>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <FormControlLabel
          control={<Switch checked={tab1Disabled} onChange={(e) => setTab1Disabled(e.target.checked)} />}
          label='Tab "Details" disabled'
        />
        <FormControlLabel
          control={<Switch checked={tab2Error} onChange={(e) => setTab2Error(e.target.checked)} />}
          label='Tab "Payment" error'
        />
      </Stack>

      <Box sx={orientation ? { display: 'flex', gap: 2 } : undefined}>
        <IpsTabs
          tabs={tabs}
          value={value}
          onTabChange={(v) => setValue(v)}
          orientation={orientation ? 'vertical' : 'horizontal'}
          variant={variant}
          centered={centered && !orientation}
          renderPanels={renderPanels}
          keepMounted={keepMounted}
          sx={orientation ? { borderRight: 1, borderColor: 'divider', minWidth: 160 } : undefined}
        />
      </Box>

      <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
        Current value: <strong>{value}</strong>
      </Typography>
    </Box>
  )
}

function IpsDrawerPanel() {
  const [open, setOpen] = useState(false)
  const [lastReason, setLastReason] = useState<IpsDrawerCloseReason | null>(null)

  // selectors
  const [anchor, setAnchor] = useState<'left' | 'right' | 'top' | 'bottom'>('right')
  const [variant, setVariant] = useState<'temporary' | 'persistent' | 'permanent'>('temporary')
  const [size, setSize] = useState<number>(400)

  // boolean toggles
  const [dividers, setDividers] = useState(false)
  const [showCloseButton, setShowCloseButton] = useState(true)
  const [disableBackdropClose, setDisableBackdropClose] = useState(false)
  const [disableEscapeKeyDown, setDisableEscapeKeyDown] = useState(false)
  const [hideBackdrop, setHideBackdrop] = useState(false)
  const [loading, setLoading] = useState(false)
  const [rtl, setRtl] = useState(false)

  const handleClose = (reason: IpsDrawerCloseReason) => {
    setLastReason(reason)
    setOpen(false)
  }

  return (
    <Box>
      <PropsTable props={[
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
      ]} />

      <SectionTitle>Controls</SectionTitle>

      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" color="text.secondary">anchor</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
          {(['left', 'right', 'top', 'bottom'] as const).map(a => (
            <IpsButton key={a} size="small" buttonType={anchor === a ? 'primary' : 'secondary'} onClick={() => setAnchor(a)}>{a}</IpsButton>
          ))}
        </Stack>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" color="text.secondary">variant</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
          {(['temporary', 'persistent', 'permanent'] as const).map(v => (
            <IpsButton key={v} size="small" buttonType={variant === v ? 'primary' : 'secondary'} onClick={() => setVariant(v)}>{v}</IpsButton>
          ))}
        </Stack>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" color="text.secondary">size (px)</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
          {[240, 360, 480, 600].map(s => (
            <IpsButton key={s} size="small" buttonType={size === s ? 'primary' : 'secondary'} onClick={() => setSize(s)}>{s}px</IpsButton>
          ))}
        </Stack>
      </Box>

      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 2 }}>
        <FormControlLabel control={<Switch checked={dividers} onChange={e => setDividers(e.target.checked)} />} label="dividers" />
        <FormControlLabel control={<Switch checked={showCloseButton} onChange={e => setShowCloseButton(e.target.checked)} />} label="showCloseButton" />
        <FormControlLabel control={<Switch checked={disableBackdropClose} onChange={e => setDisableBackdropClose(e.target.checked)} />} label="disableBackdropClose" />
        <FormControlLabel control={<Switch checked={disableEscapeKeyDown} onChange={e => setDisableEscapeKeyDown(e.target.checked)} />} label="disableEscapeKeyDown" />
        <FormControlLabel control={<Switch checked={hideBackdrop} onChange={e => setHideBackdrop(e.target.checked)} />} label="hideBackdrop" />
        <FormControlLabel control={<Switch checked={loading} onChange={e => setLoading(e.target.checked)} />} label="loading" />
        <FormControlLabel control={<Switch checked={rtl} onChange={e => setRtl(e.target.checked)} />} label="rtl" />
      </Stack>

      <SectionTitle>Live demo</SectionTitle>
      <IpsButton buttonType="primary" onClick={() => setOpen(true)}>Open Drawer</IpsButton>

      <IpsDrawer
        open={open}
        anchor={anchor}
        variant={variant}
        size={size}
        title="סינון ועריכה"
        dividers={dividers}
        showCloseButton={showCloseButton}
        disableBackdropClose={disableBackdropClose}
        disableEscapeKeyDown={disableEscapeKeyDown}
        hideBackdrop={hideBackdrop}
        loading={loading}
        rtl={rtl}
        onClose={handleClose}
        actions={
          <>
            <IpsButton buttonType="clean" onClick={() => handleClose('closeButton')}>Cancel</IpsButton>
            <IpsButton buttonType="save" onClick={() => handleClose('closeButton')}>Apply</IpsButton>
          </>
        }
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <IpsTextField label="שם פרטי" placeholder="הכנס שם..." />
          <IpsTextField label="שם משפחה" placeholder="הכנס שם משפחה..." />
          <IpsTextField label="אימייל" type="email" placeholder="example@company.com" />
        </Box>
      </IpsDrawer>

      <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
        open: <strong>{String(open)}</strong>
        {lastReason && <> &nbsp;|&nbsp; last onClose reason: <strong>{lastReason}</strong></>}
      </Typography>
    </Box>
  )
}

function IpsDialogPanel() {
  const [open, setOpen] = useState(false)
  const [lastReason, setLastReason] = useState<IpsDialogCloseReason | null>(null)

  // boolean toggles
  const [fullWidth, setFullWidth] = useState(true)
  const [fullScreen, setFullScreen] = useState(false)
  const [dividers, setDividers] = useState(false)
  const [showCloseButton, setShowCloseButton] = useState(true)
  const [disableBackdropClose, setDisableBackdropClose] = useState(false)
  const [disableEscapeKeyDown, setDisableEscapeKeyDown] = useState(false)
  const [loading, setLoading] = useState(false)
  const [rtl, setRtl] = useState(false)

  // selectors
  const [maxWidth, setMaxWidth] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('sm')
  const [transition, setTransition] = useState<'fade' | 'grow' | 'slide' | 'zoom'>('fade')
  const [scroll, setScroll] = useState<'paper' | 'body'>('paper')

  const handleClose = (reason: IpsDialogCloseReason) => {
    setLastReason(reason)
    if (reason !== 'backdropClick' || !disableBackdropClose) {
      setOpen(false)
    }
  }

  return (
    <Box>
      <PropsTable props={[
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
      ]} />

      <SectionTitle>Controls</SectionTitle>
      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 2 }}>
        <FormControlLabel control={<Switch checked={fullWidth} onChange={e => setFullWidth(e.target.checked)} />} label="fullWidth" />
        <FormControlLabel control={<Switch checked={fullScreen} onChange={e => setFullScreen(e.target.checked)} />} label="fullScreen" />
        <FormControlLabel control={<Switch checked={dividers} onChange={e => setDividers(e.target.checked)} />} label="dividers" />
        <FormControlLabel control={<Switch checked={showCloseButton} onChange={e => setShowCloseButton(e.target.checked)} />} label="showCloseButton" />
        <FormControlLabel control={<Switch checked={disableBackdropClose} onChange={e => setDisableBackdropClose(e.target.checked)} />} label="disableBackdropClose" />
        <FormControlLabel control={<Switch checked={disableEscapeKeyDown} onChange={e => setDisableEscapeKeyDown(e.target.checked)} />} label="disableEscapeKeyDown" />
        <FormControlLabel control={<Switch checked={loading} onChange={e => setLoading(e.target.checked)} />} label="loading" />
        <FormControlLabel control={<Switch checked={rtl} onChange={e => setRtl(e.target.checked)} />} label="rtl" />
      </Stack>

      <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 2 }}>
        <Box>
          <Typography variant="caption" color="text.secondary">maxWidth</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(w => (
              <IpsButton key={w} size="small" buttonType={maxWidth === w ? 'primary' : 'secondary'} onClick={() => setMaxWidth(w)}>{w}</IpsButton>
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary">transition</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
            {(['fade', 'grow', 'slide', 'zoom'] as const).map(t => (
              <IpsButton key={t} size="small" buttonType={transition === t ? 'primary' : 'secondary'} onClick={() => setTransition(t)}>{t}</IpsButton>
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary">scroll</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
            {(['paper', 'body'] as const).map(s => (
              <IpsButton key={s} size="small" buttonType={scroll === s ? 'primary' : 'secondary'} onClick={() => setScroll(s)}>{s}</IpsButton>
            ))}
          </Stack>
        </Box>
      </Stack>

      <SectionTitle>Live demo</SectionTitle>
      <IpsButton buttonType="primary" onClick={() => setOpen(true)}>Open Dialog</IpsButton>

      <IpsDialog
        open={open}
        title="Edit user"
        onClose={handleClose}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        fullScreen={fullScreen}
        scroll={scroll}
        dividers={dividers}
        showCloseButton={showCloseButton}
        disableBackdropClose={disableBackdropClose}
        disableEscapeKeyDown={disableEscapeKeyDown}
        transition={transition}
        loading={loading}
        rtl={rtl}
        actions={
          <>
            <IpsButton buttonType="clean" onClick={() => handleClose('closeButton')}>Cancel</IpsButton>
            <IpsButton buttonType="save" onClick={() => handleClose('closeButton')}>Save</IpsButton>
          </>
        }
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
          <IpsTextField label="First name" placeholder="Enter first name..." />
          <IpsTextField label="Last name" placeholder="Enter last name..." />
          <IpsTextField label="Email" type="email" placeholder="Enter email..." />
        </Box>
      </IpsDialog>

      <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
        open: <strong>{String(open)}</strong>
        {lastReason && <> &nbsp;|&nbsp; last onClose reason: <strong>{lastReason}</strong></>}
      </Typography>
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
  { label: 'DataTable', component: <DataTablePanel /> },
  { label: 'Toast', component: <ToastPanel /> },
  { label: 'RichTextEditor', component: <RichTextEditorPanel /> },
  { label: 'FileUpload', component: <FileUploadPanel /> },
  { label: 'Stepper', component: <IpsStepperPanel /> },
  { label: 'Tabs', component: <IpsTabsPanel /> },
  { label: 'Dialog', component: <IpsDialogPanel /> },
  { label: 'Drawer', component: <IpsDrawerPanel /> },
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
