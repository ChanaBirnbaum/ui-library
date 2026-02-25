import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import type { GridColDef, GridRowSelectionModel } from '@mui/x-data-grid'
import type { Moment } from 'moment'
import 'moment/locale/he'

// ─── All 19 IPS components ────────────────────────────────────────────────────
import { IpsAccordion }      from '../components/IpsAccordion/IpsAccordion'
import { IpsAutocomplete }   from '../components/IpsAutocomplete/IpsAutocomplete'
import { IpsButton }         from '../components/IpsButton/IpsButton'
import { IpsCheckBox }       from '../components/IpsCheckBox/IpsCheckBox'
import { IpsChipSelect }     from '../components/IpsChipSelect/IpsChipSelect'
import { IpsDatePicker }     from '../components/IpsDatePicker/IpsDatePicker'
import { IpsDateTimePicker } from '../components/IpsDateTimePicker/IpsDateTimePicker'
import { IpsIconButton }     from '../components/IpsIconButton/IpsIconButton'
import { IpsPillSelect }     from '../components/IpsPillSelect/IpsPillSelect'
import { IpsRichTextEditor } from '../components/IpsRichTextEditor/IpsRichTextEditor'
import { IpsSelect }         from '../components/IpsSelect/IpsSelect'
import { IpsSwitch }         from '../components/IpsSwitch/IpsSwitch'
import { IpsTable }          from '../components/IpsTable/IpsTable'
import { IpsTableLight }     from '../components/IpsTableLight/IpsTableLight'
import { IpsTextArea }       from '../components/IpsTextArea/IpsTextArea'
import { IpsTextField }      from '../components/IpsTextField/IpsTextField'
import { IpsTimePicker }     from '../components/IpsTimePicker/IpsTimePicker'
import { IpsToastProvider }  from '../components/IpsToast/IpsToastProvider'
import { useToast }          from '../components/IpsToast/useToast'
import { TOAST_TYPES }       from '../components/IpsToast/IpsToast.types'
import { IpsToolTips }       from '../components/IpsToolTips/IpsToolTips'

// ─── MUI theme aligned with ipsTheme design tokens ───────────────────────────
// (ipsTheme is a plain context object; a proper MUI theme is required here so
//  all MUI-based components receive colours, shape and typography correctly.)
const muiTheme = createTheme({
  palette: {
    primary:   { main: '#1565C0', light: '#42A5F5', dark: '#0D47A1' },
    secondary: { main: '#616161' },
    error:     { main: '#D32F2F' },
    success:   { main: '#2E7D32' },
    warning:   { main: '#ED6C02' },
  },
  shape:      { borderRadius: 4 },
  typography: { fontFamily: 'Roboto, sans-serif' },
})

// ─── Shared story wrapper ─────────────────────────────────────────────────────
// IpsToastProvider  → outermost so every inner component can call useToast().
// MUI ThemeProvider → provides palette/shape/typography to all MUI components.
// CssBaseline       → normalises browser default styles.
function StoryWrapper({ children }: { children: React.ReactNode }) {
  return (
    <IpsToastProvider>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Box sx={{ p: 3, maxWidth: 900, mx: 'auto' }}>
          {children}
        </Box>
      </ThemeProvider>
    </IpsToastProvider>
  )
}

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Integration/IntegrationTests',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Cross-component integration stories — exercises multiple IPS ' +
          'components together to validate real-world usage patterns.',
      },
    },
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
}

export default meta
type Story = StoryObj

// ─────────────────────────────────────────────────────────────────────────────
// 1. FormExample — IpsTextField + IpsSelect + IpsDatePicker + IpsButton (save)
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORY_OPTIONS = [
  { label: 'Support', value: 'support' },
  { label: 'Sales',   value: 'sales'   },
  { label: 'Tech',    value: 'tech'    },
  { label: 'Finance', value: 'finance' },
]

function FormExampleContent() {
  const addToast = useToast()

  const [name,     setName]     = useState('')
  const [email,    setEmail]    = useState('')
  const [category, setCategory] = useState<string | number>('')
  const [date,     setDate]     = useState<Date | null>(null)
  const [notes,    setNotes]    = useState('')
  const [saving,   setSaving]   = useState(false)
  const [errors,   setErrors]   = useState<Record<string, string>>({})

  function validate() {
    const e: Record<string, string> = {}
    if (!name.trim())  e.name     = 'Full name is required'
    if (!email.trim()) e.email    = 'Email is required'
    if (!category)     e.category = 'Category is required'
    return e
  }

  async function handleSave() {
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      addToast(TOAST_TYPES.WARNING, 'Please fill in all required fields')
      return
    }
    setErrors({})
    setSaving(true)
    await new Promise(r => setTimeout(r, 800))
    setSaving(false)
    addToast(TOAST_TYPES.SUCCESS, `Saved: ${name} · ${category}`)
  }

  function handleReset() {
    setName(''); setEmail(''); setCategory(''); setDate(null); setNotes('')
    setErrors({})
    addToast(TOAST_TYPES.INFO, 'Form cleared')
  }

  return (
    <Box>
      <Typography variant="h6" fontWeight={700} color="primary" gutterBottom>
        📋 Contact Form
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        IpsTextField · IpsSelect · IpsDatePicker · IpsTextArea · IpsButton —
        validation &amp; toast feedback on save
      </Typography>

      <Stack spacing={2.5}>
        {/* ── Row 1: name + email ── */}
        <Stack direction="row" spacing={2}>
          <IpsTextField
            label="Full Name *"
            value={name}
            onChange={e => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
            placeholder="John Smith"
            sx={{ flex: 1 }}
          />
          <IpsTextField
            label="Email *"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            error={!!errors.email}
            helperText={errors.email}
            placeholder="john@example.com"
            sx={{ flex: 1 }}
          />
        </Stack>

        {/* ── Row 2: category + date ── */}
        <Stack direction="row" spacing={2}>
          <IpsSelect
            label="Category *"
            options={CATEGORY_OPTIONS}
            value={category}
            onChange={v => setCategory(v as string)}
            error={!!errors.category}
            helperText={errors.category}
            placeholder="Select category"
            sx={{ flex: 1 }}
          />
          <IpsDatePicker
            label="Due Date"
            value={date}
            onChange={setDate}
            sx={{ flex: 1 }}
          />
        </Stack>

        {/* ── Row 3: notes ── */}
        <IpsTextArea
          label="Notes"
          value={notes}
          onChange={e => setNotes(e.target.value)}
          rows={3}
          placeholder="Additional notes…"
        />

        {/* ── Actions ── */}
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <IpsButton buttonType="clean" onClick={handleReset}>Reset</IpsButton>
          <IpsButton buttonType="save" loading={saving} onClick={handleSave}>Save</IpsButton>
        </Stack>
      </Stack>
    </Box>
  )
}

export const FormExample: Story = {
  name: '1 · Form (TextField + Select + DatePicker + Button)',
  render: () => <FormExampleContent />,
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. TableWithToast — IpsTable + IpsButton (add/delete) + useToast
// ─────────────────────────────────────────────────────────────────────────────

interface TableRow {
  id: number; name: string; role: string; status: string; joined: string
}

const INITIAL_ROWS: TableRow[] = [
  { id: 1, name: 'Alice Cohen',   role: 'Developer',  status: 'Active',   joined: '2023-01-15' },
  { id: 2, name: 'Bob Levy',      role: 'Designer',   status: 'Active',   joined: '2023-03-20' },
  { id: 3, name: 'Carol Shapiro', role: 'Manager',    status: 'Inactive', joined: '2022-11-05' },
]

const TABLE_COLUMNS: GridColDef[] = [
  { field: 'id',     headerName: 'ID',     width: 65  },
  { field: 'name',   headerName: 'Name',   flex: 1    },
  { field: 'role',   headerName: 'Role',   width: 120 },
  { field: 'status', headerName: 'Status', width: 100 },
  { field: 'joined', headerName: 'Joined', width: 110 },
]

const NAMES = ['Dan', 'Eve', 'Frank', 'Grace', 'Hila', 'Ido']
const ROLES = ['QA', 'DevOps', 'PM', 'Analyst', 'Support', 'Sales']
let rowCounter = INITIAL_ROWS.length

function TableWithToastContent() {
  const addToast                = useToast()
  const [rows, setRows]         = useState<TableRow[]>(INITIAL_ROWS)
  const [selected, setSelected] = useState<(string | number)[]>([])
  const [deleting, setDeleting] = useState(false)

  function handleAdd() {
    rowCounter++
    const name  = `${NAMES[(rowCounter - 1) % NAMES.length]} Israeli`
    const role  = ROLES[(rowCounter - 1) % ROLES.length]
    const today = new Date().toISOString().slice(0, 10)
    setRows(r => [...r, { id: rowCounter, name, role, status: 'Active', joined: today }])
    addToast(TOAST_TYPES.SUCCESS, `Row added: ${name}`)
  }

  async function handleDelete() {
    if (selected.length === 0) {
      addToast(TOAST_TYPES.WARNING, 'No rows selected')
      return
    }
    setDeleting(true)
    await new Promise(r => setTimeout(r, 600))
    setRows(r => r.filter(row => !selected.includes(row.id)))
    addToast(TOAST_TYPES.DANGER, `Deleted ${selected.length} row(s)`)
    setSelected([])
    setDeleting(false)
  }

  return (
    <Box>
      <Typography variant="h6" fontWeight={700} color="primary" gutterBottom>
        📊 Users Table
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        IpsTable (DataGrid) · IpsButton · useToast — add rows, select &amp; delete
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <IpsButton buttonType="add" onClick={handleAdd}>Add Row</IpsButton>
        <IpsButton
          buttonType="clean"
          loading={deleting}
          disabled={selected.length === 0}
          onClick={handleDelete}
        >
          Delete Selected ({selected.length})
        </IpsButton>
      </Stack>

      <IpsTable
        rows={rows}
        columns={TABLE_COLUMNS}
        checkboxSelection
        onRowSelectionModelChange={(model: GridRowSelectionModel) => {
          // DataGrid v8: model is { type, ids: Set<GridRowId> }
           
          setSelected(Array.from((model as any).ids ?? []) as (string | number)[])
        }}
        pageSize={10}
        sx={{ height: 320 }}
      />
    </Box>
  )
}

export const TableWithToast: Story = {
  name: '2 · Table + Toast (DataGrid + Button)',
  render: () => <TableWithToastContent />,
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. EditorForm — IpsRichTextEditor + IpsButton (save) + toast on save
// ─────────────────────────────────────────────────────────────────────────────

const ARTICLE_OPTIONS = [
  { label: 'Announcement',  value: 'announcement' },
  { label: 'Blog Post',     value: 'blog'         },
  { label: 'Newsletter',    value: 'newsletter'   },
  { label: 'Internal Memo', value: 'memo'         },
]

// Tiptap empty-document fingerprints
const EMPTY_DOCS = ['<p></p>', '<p><br></p>', '<p><br/></p>', '']

function EditorFormContent() {
  const addToast = useToast()

  const [title,      setTitle]      = useState('')
  const [category,   setCategory]   = useState<string | number>('blog')
  const [html,       setHtml]       = useState('<p>Start writing your article…</p>')
  const [saving,     setSaving]     = useState(false)
  const [titleErr,   setTitleErr]   = useState(false)
  const [contentErr, setContentErr] = useState(false)

  async function handleSave() {
    const emptyContent = EMPTY_DOCS.includes(html.trim())
    const noTitle      = !title.trim()
    setTitleErr(noTitle)
    setContentErr(emptyContent)
    if (noTitle || emptyContent) {
      addToast(TOAST_TYPES.WARNING, 'Title and content are required')
      return
    }
    setSaving(true)
    await new Promise(r => setTimeout(r, 900))
    setSaving(false)
    addToast(TOAST_TYPES.SUCCESS, `"${title}" published successfully!`)
  }

  function handleDiscard() {
    setTitle('')
    setCategory('blog')
    setHtml('<p>Start writing your article…</p>')
    setTitleErr(false)
    setContentErr(false)
    addToast(TOAST_TYPES.INFO, 'Changes discarded')
  }

  return (
    <Box>
      <Typography variant="h6" fontWeight={700} color="primary" gutterBottom>
        ✍️ Article Editor
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        IpsRichTextEditor · IpsTextField · IpsSelect · IpsButton —
        full article form with validation &amp; save toast
      </Typography>

      <Stack spacing={2.5}>
        {/* ── Title + category ── */}
        <Stack direction="row" spacing={2}>
          <IpsTextField
            label="Article Title *"
            value={title}
            onChange={e => { setTitle(e.target.value); setTitleErr(false) }}
            error={titleErr}
            helperText={titleErr ? 'Title is required' : undefined}
            placeholder="Enter a descriptive title…"
            sx={{ flex: 2 }}
          />
          <IpsSelect
            label="Category"
            options={ARTICLE_OPTIONS}
            value={category}
            onChange={v => setCategory(v as string)}
            sx={{ flex: 1 }}
          />
        </Stack>

        {/* ── Rich text editor ── */}
        <IpsRichTextEditor
          label="Content *"
          value={html}
          onChange={v => { setHtml(v); setContentErr(false) }}
          error={contentErr}
          helperText={contentErr ? 'Content cannot be empty' : undefined}
          placeholder="Write your article content here…"
          dir="auto"
          minHeight={260}
        />

        {/* ── Actions ── */}
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <IpsButton buttonType="clean" onClick={handleDiscard}>Discard</IpsButton>
          <IpsButton buttonType="save" loading={saving} onClick={handleSave}>Publish</IpsButton>
        </Stack>
      </Stack>
    </Box>
  )
}

export const EditorForm: Story = {
  name: '3 · Editor Form (RichTextEditor + Button + Toast)',
  render: () => <EditorFormContent />,
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. AllComponents — gallery of all 19 IPS components
// ─────────────────────────────────────────────────────────────────────────────

/** Outlined Paper card per component group */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 2, flex: 1, borderRadius: 2, minWidth: 0 }}
    >
      <Typography
        variant="caption"
        fontWeight={700}
        color="primary"
        sx={{ display: 'block', mb: 1.5, letterSpacing: 0.5, textTransform: 'uppercase' }}
      >
        {title}
      </Typography>
      {children}
    </Paper>
  )
}

function AllComponentsContent() {
  const addToast = useToast()

  // ── Controlled state for each component ───────────────────────────────────
  const [text,       setText]       = useState('Hello world')
  const [area,       setArea]       = useState('Multiline\ntext area')
  const [checked,    setChecked]    = useState(true)
  const [toggled,    setToggled]    = useState(false)
  const [selectVal,  setSelectVal]  = useState<string | number>('a')
  const [chipVals,   setChipVals]   = useState<(string | number)[]>(['react'])
  const [acVal,      setAcVal]      = useState<{ label: string; value: string } | null>(null)
  const [pillVal,    setPillVal]    = useState<string | number>('m')
  const [dateVal,    setDateVal]    = useState<Date | null>(null)
  const [dtVal,      setDtVal]      = useState<Date | null>(null)
  const [timeVal,    setTimeVal]    = useState<Moment | null>(null)
  const [editorHtml, setEditorHtml] = useState('<p>Rich text content…</p>')

  // ── Static option lists ────────────────────────────────────────────────────
  const SIMPLE_OPTIONS = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
  ]
  const CHIP_OPTIONS = [
    { label: 'React', value: 'react' },
    { label: 'TS',    value: 'ts'    },
    { label: 'MUI',   value: 'mui'   },
  ]
  const PILL_OPTIONS = [
    { label: 'S',  value: 's'  },
    { label: 'M',  value: 'm'  },
    { label: 'L',  value: 'l'  },
    { label: 'XL', value: 'xl' },
  ]
  const AC_OPTIONS = [
    { label: 'React',      value: 'react'  },
    { label: 'TypeScript', value: 'ts'     },
    { label: 'MUI',        value: 'mui'    },
    { label: 'Tiptap',     value: 'tiptap' },
  ]
  const tableRows = [
    { id: 1, name: 'Alpha', value: 100 },
    { id: 2, name: 'Beta',  value: 200 },
    { id: 3, name: 'Gamma', value: 300 },
  ]
  const tableColumns: GridColDef[] = [
    { field: 'id',    headerName: 'ID',    width: 60 },
    { field: 'name',  headerName: 'Name',  flex: 1   },
    { field: 'value', headerName: 'Value', width: 80 },
  ]
  const lightColumns = [
    { key: 'name',  label: 'Name'  },
    { key: 'value', label: 'Value' },
  ]

  return (
    <Box>
      <Typography variant="h6" fontWeight={700} color="primary" gutterBottom>
        🧩 All 19 IPS Components
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Every IPS component rendered in a minimal interactive state.
      </Typography>

      <Stack spacing={2}>

        {/* ── 1 · IpsTextField + IpsTextArea ── */}
        <Stack direction="row" spacing={2}>
          <Section title="IpsTextField">
            <IpsTextField
              label="Text field"
              value={text}
              onChange={e => setText(e.target.value)}
            />
          </Section>
          <Section title="IpsTextArea">
            <IpsTextArea
              label="Text area"
              value={area}
              onChange={e => setArea(e.target.value)}
              rows={3}
            />
          </Section>
        </Stack>

        {/* ── 2 · IpsSelect + IpsChipSelect ── */}
        <Stack direction="row" spacing={2}>
          <Section title="IpsSelect">
            <IpsSelect
              label="Select"
              options={SIMPLE_OPTIONS}
              value={selectVal}
              onChange={v => setSelectVal(v as string | number)}
            />
          </Section>
          <Section title="IpsChipSelect">
            <IpsChipSelect
              label="Chip select"
              options={CHIP_OPTIONS}
              value={chipVals}
              onChange={v => setChipVals(v as (string | number)[])}
            />
          </Section>
        </Stack>

        {/* ── 3 · IpsAutocomplete + IpsPillSelect ── */}
        <Stack direction="row" spacing={2}>
          <Section title="IpsAutocomplete">
            <IpsAutocomplete
              label="Autocomplete"
              options={AC_OPTIONS}
              value={acVal}
              onChange={(_, v) => setAcVal(v as { label: string; value: string } | null)}
              getOptionLabel={o => (o as { label: string }).label ?? ''}
            />
          </Section>
          <Section title="IpsPillSelect">
            <IpsPillSelect
              options={PILL_OPTIONS}
              value={pillVal}
              onChange={v => setPillVal(v as string | number)}
            />
          </Section>
        </Stack>

        {/* ── 4 · IpsDatePicker + IpsDateTimePicker + IpsTimePicker ── */}
        <Stack direction="row" spacing={2}>
          <Section title="IpsDatePicker">
            <IpsDatePicker label="Date" value={dateVal} onChange={setDateVal} />
          </Section>
          <Section title="IpsDateTimePicker">
            <IpsDateTimePicker label="Date + Time" value={dtVal} onChange={setDtVal} />
          </Section>
          <Section title="IpsTimePicker">
            <IpsTimePicker label="Time" value={timeVal} onChange={setTimeVal} />
          </Section>
        </Stack>

        {/* ── 5 · IpsCheckBox + IpsSwitch  +  IpsButton ── */}
        <Stack direction="row" spacing={2}>
          <Section title="IpsCheckBox · IpsSwitch">
            <Stack spacing={1}>
              <IpsCheckBox
                label="Checkbox"
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
              />
              <IpsSwitch
                label="Switch"
                checked={toggled}
                onChange={e => setToggled(e.target.checked)}
              />
            </Stack>
          </Section>
          <Section title="IpsButton (all types)">
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              <IpsButton buttonType="add">Add</IpsButton>
              <IpsButton buttonType="save">Save</IpsButton>
              <IpsButton buttonType="clean">Clean</IpsButton>
              <IpsButton buttonType="primary">Primary</IpsButton>
              <IpsButton buttonType="secondary">Secondary</IpsButton>
            </Stack>
          </Section>
        </Stack>

        {/* ── 6 · IpsIconButton + IpsToolTips  +  IpsAccordion ── */}
        <Stack direction="row" spacing={2}>
          <Section title="IpsIconButton · IpsToolTips">
            <Stack direction="row" spacing={2} alignItems="center">
              <IpsIconButton
                icon={<span style={{ fontSize: 18 }}>⭐</span>}
                tooltip="Mark as favourite"
                onClick={() => addToast(TOAST_TYPES.INFO, 'Starred!')}
              />
              <IpsToolTips title="Tooltip on hover" placement="right">
                <span style={{ cursor: 'help', color: '#1565C0', fontWeight: 600 }}>
                  Hover me
                </span>
              </IpsToolTips>
            </Stack>
          </Section>
          <Section title="IpsAccordion">
            <IpsAccordion summary="Click to expand">
              <Typography variant="body2">Accordion content goes here.</Typography>
            </IpsAccordion>
          </Section>
        </Stack>

        {/* ── 7 · IpsToast trigger ── */}
        <Section title="IpsToast (useToast hook)">
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            <IpsButton
              buttonType="primary"
              onClick={() => addToast(TOAST_TYPES.SUCCESS, 'Operation succeeded!')}
            >
              Success
            </IpsButton>
            <IpsButton
              buttonType="secondary"
              onClick={() => addToast(TOAST_TYPES.INFO, 'Information message')}
            >
              Info
            </IpsButton>
            <IpsButton onClick={() => addToast(TOAST_TYPES.WARNING, 'Proceed with caution')}>
              Warning
            </IpsButton>
            <IpsButton onClick={() => addToast(TOAST_TYPES.DANGER, 'An error occurred')}>
              Danger
            </IpsButton>
          </Stack>
        </Section>

        {/* ── 8 · IpsTableLight ── */}
        <Section title="IpsTableLight">
          <IpsTableLight rows={tableRows} columns={lightColumns} />
        </Section>

        {/* ── 9 · IpsTable (DataGrid) ── */}
        <Section title="IpsTable (DataGrid)">
          <IpsTable
            rows={tableRows}
            columns={tableColumns}
            sx={{ height: 220 }}
          />
        </Section>

        {/* ── 10 · IpsRichTextEditor ── */}
        <Section title="IpsRichTextEditor">
          <IpsRichTextEditor
            label="Rich text editor"
            value={editorHtml}
            onChange={setEditorHtml}
            minHeight={160}
            dir="auto"
          />
        </Section>

      </Stack>
    </Box>
  )
}

export const AllComponents: Story = {
  name: '4 · All 19 Components Gallery',
  render: () => <AllComponentsContent />,
}
