🏢 Enterprise UI Component Library
SPEC v2.0 — AI-Optimized
@company/ui  |  React + TypeScript + MUI

1. Overview & Goals
This document is a machine-optimized SPEC for an AI code generator (e.g. Claude Code). It describes a production-ready React component library built on top of Material UI (MUI), distributed as an internal npm package under the @company/ui scope.

1.1 Purpose
Enforce consistent UI across all organization systems
Reduce duplication and accelerate frontend development
Provide a single source of truth for design tokens and styling
Expose a stable, well-typed API compatible with all MUI capabilities

1.2 AI Execution Instructions
INSTRUCTION TO AI: Read this entire SPEC before generating any code.
Generate ALL files listed in the structure. Do not skip any component.
Every component MUST follow the IPS prefix convention.
Every component MUST include: .tsx, .types.ts, .stories.tsx, .test.tsx, index.ts
All exports go through src/index.ts ONLY.
Use MUI as the base for all components (except IpsRichTextEditor).
Apply the ipsTheme to all components via ThemeProvider in stories.


2. Technology Stack
Category	Tool / Library	Version	Notes
UI Framework	React	18+	Functional components + hooks only
Language	TypeScript	5+	Strict mode enabled
Base UI Library	Material UI (MUI)	5+	All components wrap MUI
Documentation	Storybook	7+	Required for every component
Testing	Jest + React Testing Library	Latest	Unit tests required
Build	Vite + vite-plugin-lib	Latest	ESM + CJS dual output
Linting	ESLint + Prettier	Latest	Enforce code style
Date Handling (TimePicker)	moment.js + @mui/x-date-pickers/AdapterMoment	Latest	IpsTimePicker uses existing moment adapter with he locale
Date Handling (DatePicker)	date-fns + @mui/x-date-pickers/AdapterDateFns	Latest	IpsDatePicker and IpsDateTimePicker
Rich Text	Tiptap or Quill	Latest	For IpsRichTextEditor only


3. Repository Structure
Generate the following complete folder and file structure:
ui-library/
├── src/
│   ├── components/
│   │   ├── IpsAccordion/
│   │   │   ├── IpsAccordion.tsx
│   │   │   ├── IpsAccordion.types.ts
│   │   │   ├── IpsAccordion.stories.tsx
│   │   │   ├── IpsAccordion.test.tsx
│   │   │   └── index.ts
│   │   ├── IpsAutocomplete/
│   │   ├── IpsButton/
│   │   ├── IpsCheckBox/
│   │   ├── IpsChipSelect/
│   │   ├── IpsDatePicker/
│   │   ├── IpsDateTimePicker/
│   │   ├── IpsFileUpload/
│   │   │   ├── IpsFileUpload.tsx
│   │   │   ├── IpsFileUpload.types.ts
│   │   │   ├── IpsFileUpload.stories.tsx
│   │   │   ├── IpsFileUpload.test.tsx
│   │   │   ├── IpsDropZone.tsx
│   │   │   ├── IpsFileItem.tsx
│   │   │   ├── useFileUpload.ts
│   │   │   └── index.ts
│   │   ├── IpsIconButton/
│   │   ├── IpsPillSelect/
│   │   ├── IpsRichTextEditor/
│   │   ├── IpsSelect/
│   │   ├── IpsSwitch/
│   │   ├── IpsTable/
│   │   ├── IpsTableLight/
│   │   ├── IpsTextArea/
│   │   ├── IpsTextField/
│   │   ├── IpsTimePicker/
│   │   ├── IpsToast/
│   │   ├── IpsToolTips/
│   │   ├── IpsCarousel/
│   │   ├── IpsDialog/
│   │   ├── IpsDrawer/
│   │   ├── IpsStepper/
│   │   └── IpsTabs/
│   ├── theme/
│   │   ├── ipsTheme.ts          ← Main MUI theme
│   │   ├── tokens/
│   │   │   ├── palette.ts
│   │   │   ├── typography.ts
│   │   │   └── spacing.ts
│   │   └── index.ts
│   ├── hooks/
│   │   └── useToast.ts
│   ├── utils/
│   │   └── rtlUtils.ts
│   └── index.ts                 ← Public API (all exports here)
├── .storybook/
│   ├── main.ts
│   └── preview.tsx
├── stories/
├── package.json
├── tsconfig.json
└── vite.config.ts


4. Naming Conventions & Rules
4.1 Component Prefix
ALL exported components MUST start with IPS prefix (capital IPS, then PascalCase). Validation regex: /^IPS[A-Z]/
Convention	Pattern	Example
Component file	IpsXxx.tsx	IpsButton.tsx
Types file	IpsXxx.types.ts	IpsButton.types.ts
Stories file	IpsXxx.stories.tsx	IpsButton.stories.tsx
Test file	IpsXxx.test.tsx	IpsButton.test.tsx
CSS class prefix	ips-xxx	ips-button, ips-input
Export name	IpsXxx	IPSButton (from index.ts)

4.2 Public API Rule
ALL imports must go through the package root. Deep imports are forbidden.
✅ ALLOWED:
  import { IpsButton, IpsTextField } from '@company/ui'

❌ FORBIDDEN:
  import IpsButton from '@company/ui/components/IpsButton/IpsButton'

4.3 Component File Template
Every component MUST follow this exact pattern:
// IpsButton.tsx
import { forwardRef } from 'react';
import { Button } from '@mui/material';
import { IpsButtonProps } from './IpsButton.types';

export const IpsButton = forwardRef<HTMLButtonElement, IpsButtonProps>(
  (props, ref) => {
    return <Button ref={ref} {...props} />;
  }
);
IpsButton.displayName = 'IpsButton';


5. Theme System
5.1 Architecture
Create a custom MUI theme in src/theme/ipsTheme.ts. The theme must be extendable — consuming projects can merge their own tokens on top using createTheme({ ...ipsTheme, palette: { ...ipsTheme.palette, primary: { main: "#custom" } } }).

5.2 Default Design Tokens
Use these placeholder tokens. They are the single source of truth — all components inherit them from the theme:
Token	Location	Default Value	Purpose
primary.main	palette.ts	#1565C0	Primary brand color
primary.light	palette.ts	#42A5F5	Hover / highlight
primary.dark	palette.ts	#0D47A1	Active state
secondary.main	palette.ts	#616161	Secondary actions
error.main	palette.ts	#D32F2F	Error states
warning.main	palette.ts	#ED6C02	Warnings
success.main	palette.ts	#2E7D32	Success states
font family	typography.ts	Roboto, sans-serif	All text
base spacing	spacing.ts	8px	MUI spacing unit
border radius	ipsTheme.ts	4px	All components

5.3 Theme File Structure
// src/theme/tokens/palette.ts
export const paletteTokens = {
  primary: { main: "#1565C0", light: "#42A5F5", dark: "#0D47A1" },
  secondary: { main: "#616161" },
};

// src/theme/ipsTheme.ts
import { createTheme } from '@mui/material/styles';
import { paletteTokens } from './tokens/palette';
export const ipsTheme = createTheme({
  palette: paletteTokens,
  typography: { fontFamily: "Roboto, sans-serif" },
  shape: { borderRadius: 4 },
  components: {
    // Global component overrides here
  },
});

// MUST be extendable:
export type IpsTheme = typeof ipsTheme;


6. Component Catalog
The following components must be implemented. Each section provides the AI with exact requirements: props, behaviors, and Storybook stories.


IpsAccordion  ←  MUI Accordion
A styled wrapper around MUI Accordion. Applies organizational theme (border, spacing, icon style).

Prop	Type	Default	Description
summary	React.ReactNode	—	Content shown in the header (required)
children	React.ReactNode	—	Expanded content (required)
defaultExpanded	boolean	false	Open by default
disabled	boolean	false	Disables interaction
onChange	function	—	Callback on toggle (event, expanded)
sx	SxProps	—	MUI style override
✅ Required Behaviors:
Extend all MUI AccordionProps
Apply organizational border radius and color from ipsTheme
Support ref forwarding
className="ips-accordion" on root element
📖 Storybook Stories Required:
Default
DefaultExpanded
Disabled
Multiple (array of accordions)
Custom summary content

IpsAutocomplete  ←  MUI Autocomplete
Styled autocomplete with built-in checkbox support for multi-select mode. Organizational theme applied.

Prop	Type	Default	Description
options	T[]	[]	List of options (required)
value	T | T[]	—	Controlled value
onChange	function	—	Callback on change
multiple	boolean	false	Enable multi-select with checkboxes
showCheckboxes	boolean	true (if multiple)	Show MUI Checkbox in options
label	string	—	Input label
placeholder	string	—	Placeholder text
disabled	boolean	false	Disabled state
loading	boolean	false	Show loading spinner
getOptionLabel	function	String cast	Format option display
sx	SxProps	—	Style override
✅ Required Behaviors:
Extend all MUI AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
When multiple=true AND showCheckboxes=true, render MUI Checkbox inside each option
Support controlled and uncontrolled modes
Support ref forwarding on inner TextField
Apply ipsTheme colors
className="ips-autocomplete" on root
📖 Storybook Stories Required:
Single select
Multiple with checkboxes
Loading state
Disabled
Async options
Custom option render

IpsButton  ←  MUI Button
Styled button with built-in variant types that define icon and color automatically. Supports all standard MUI Button props.

Prop	Type	Default	Description
buttonType	'add' | 'save' | 'clean' | 'primary' | 'secondary'	undefined	Pre-defined button variant (icon + color auto-set)
loading	boolean	false	Show CircularProgress spinner inside button
children	React.ReactNode	—	Button label
disabled	boolean	false	Disabled state
onClick	function	—	Click handler
sx	SxProps	—	Style override
✅ Required Behaviors:
Extend all MUI ButtonProps
buttonType="add" → color: primary, startIcon: AddIcon (MUI)
buttonType="save" → color: primary, startIcon: SaveIcon (MUI)
buttonType="clean" → color: secondary/grey, startIcon: ClearIcon (MUI)
buttonType="primary" → MUI variant="contained", color: primary
buttonType="secondary" → MUI variant="outlined", color: secondary
When loading=true, disable button and show CircularProgress (size 16) as startIcon
Support ref forwarding
className="ips-button" on root
📖 Storybook Stories Required:
Default (no buttonType)
Add type
Save type
Clean type
Primary type
Secondary type
Loading state
Disabled

IpsCheckBox  ←  MUI Checkbox
Styled checkbox aligned to organizational theme. Supports label via FormControlLabel.

Prop	Type	Default	Description
label	React.ReactNode	—	Label displayed next to checkbox
checked	boolean	—	Controlled state
defaultChecked	boolean	false	Uncontrolled default
onChange	function	—	Change callback
disabled	boolean	false	Disabled state
indeterminate	boolean	false	Indeterminate visual state
color	string	primary	MUI color
sx	SxProps	—	Style override
✅ Required Behaviors:
Extend all MUI CheckboxProps
If label provided, wrap in FormControlLabel
Support ref forwarding
Support indeterminate state (parent of tree checkboxes use case)
className="ips-checkbox" on root
📖 Storybook Stories Required:
Default
Checked
Disabled
Indeterminate
With label
Custom color

IpsChipSelect  ←  MUI Select + Chip
A Select field that renders selected values as MUI Chips inside the input. Styled to organizational theme.

Prop	Type	Default	Description
options	{ label: string; value: string | number }[]	[]	Available options
value	string[] | number[]	[]	Controlled value (array of selected values)
onChange	function	—	Change callback
label	string	—	Field label
disabled	boolean	false	Disabled state
placeholder	string	—	Placeholder when empty
sx	SxProps	—	Style override
✅ Required Behaviors:
Use MUI Select with multiple=true and renderValue that shows Chips
Each chip has onDelete that removes the item (unless disabled)
Chips should use MUI Chip with size="small"
Support controlled mode
className="ips-chip-select" on root
📖 Storybook Stories Required:
Default
With selected values (chips shown)
Disabled
Max items scenario

IpsDatePicker  ←  @mui/x-date-pickers DatePicker
Styled date picker with RTL support. Uses date-fns adapter. Applies organizational theme.

Prop	Type	Default	Description
value	Date | null	null	Controlled date value
onChange	function	—	Change callback (receives Date | null)
label	string	—	Field label
disabled	boolean	false	Disabled state
readOnly	boolean	false	Read-only state
minDate	Date	—	Minimum selectable date
maxDate	Date	—	Maximum selectable date
format	string	dd/MM/yyyy	Display format
rtl	boolean	false	Force RTL layout
sx	SxProps	—	Style override
✅ Required Behaviors:
Wrap @mui/x-date-pickers DatePicker
Use LocalizationProvider with AdapterDateFns internally
When rtl=true, set dir="rtl" on wrapper and mirror icon placement
Apply ipsTheme via slotProps
Support ref forwarding on input
className="ips-date-picker" on root
Export type IpsDatePickerProps
📖 Storybook Stories Required:
Default
With value
RTL mode
Disabled
Read-only
Min/Max date constraints

IpsDateTimePicker  ←  @mui/x-date-pickers DateTimePicker
Styled date + time combined picker. Same RTL and theme treatment as IpsDatePicker.

Prop	Type	Default	Description
value	Date | null	null	Controlled value
onChange	function	—	Callback
label	string	—	Label
disabled	boolean	false	Disabled state
readOnly	boolean	false	Read-only
format	string	dd/MM/yyyy HH:mm	Display format
rtl	boolean	false	RTL layout
sx	SxProps	—	Style override
✅ Required Behaviors:
Wrap @mui/x-date-pickers DateTimePicker
Same LocalizationProvider + RTL approach as IpsDatePicker
className="ips-date-time-picker" on root
📖 Storybook Stories Required:
Default
With value
RTL mode
Disabled

IpsIconButton  ←  MUI IconButton
Styled icon button with organizational theme. Supports tooltip integration.

Prop	Type	Default	Description
icon	React.ReactNode	—	Icon element to render (required)
tooltip	string	—	Tooltip text shown on hover
disabled	boolean	false	Disabled state
color	string	default	MUI color
size	'small' | 'medium' | 'large'	medium	Button size
onClick	function	—	Click handler
sx	SxProps	—	Style override
✅ Required Behaviors:
Extend all MUI IconButtonProps
If tooltip is provided, wrap in MUI Tooltip automatically
Support ref forwarding
className="ips-icon-button" on root
📖 Storybook Stories Required:
Default
With tooltip
Disabled
Different sizes
Different colors

IpsPillSelect  ←  MUI ButtonBase (custom)
A pill-shaped toggle selection component. Each option renders as a rounded ButtonBase. Supports single and multi select. No MUI Select — built on ButtonBase.

Prop	Type	Default	Description
options	{ label: string; value: string | number }[]	[]	Pills to render (required)
value	string | number | (string | number)[]	—	Selected value(s)
onChange	function	—	Callback with new value(s)
multiple	boolean	false	Allow multi selection
disabled	boolean	false	Disables all pills
size	'small' | 'medium'	medium	Pill size
sx	SxProps	—	Style override for container
✅ Required Behaviors:
Render each option as MUI ButtonBase with pill styling (borderRadius: 999)
Selected pill: background = primary.main, text = white
Unselected pill: outlined style using primary.main border
When multiple=false, clicking a selected pill deselects it (toggle behavior)
When multiple=true, clicking adds/removes from selection array
Disabled pills have reduced opacity and no pointer events
className="ips-pill-select" on container, "ips-pill" on each button
Export type IpsPillSelectProps
📖 Storybook Stories Required:
Single select
Multi select
Disabled
Small size
Many options (wrapping)

IpsRichTextEditor  ←  Tiptap (@tiptap/react) — NOT MUI
A Gmail-style rich text editor with full RTL/Hebrew support. Built on Tiptap for maximum flexibility and extensibility. Supports controlled/uncontrolled modes and form integration.

IpsRichTextEditor — Props
Prop	Type	Default	Description
value	string	""	HTML string — controlled mode
onChange	function(html: string)	—	Called with full HTML string on every change
defaultValue	string	""	Initial HTML — uncontrolled mode only
placeholder	string	—	Placeholder text shown when editor is empty
readOnly	boolean	false	Hides toolbar, disables editing, renders as display
disabled	boolean	false	Visually disabled, no interaction possible
label	string	—	Optional label displayed above the editor container
error	boolean	false	Red border to indicate validation error
helperText	string	—	Helper or error text displayed below the editor
dir	'rtl' | 'ltr' | 'auto'	auto	Text direction. auto = detects per-paragraph
minHeight	string | number	200px	Minimum editor content area height
maxHeight	string | number	—	Max height before scroll (optional)
toolbar	IpsRteToolbarConfig	DEFAULT_TOOLBAR	Override which toolbar groups/buttons are shown
onBlur	function	—	Called when editor loses focus
onFocus	function	—	Called when editor gains focus
sx	SxProps	—	MUI sx override on the outer wrapper Box
📐 Architecture — Gmail-Style Layout:
Layout (top to bottom):
┌─────────────────────────────────────────┐
│  [Optional Label]                        │
├──────────────────────────────────────────┤
│  TOOLBAR (sticky top, always visible)    │
│  [B] [I] [U] [S] | [H1][H2] | [•][1.]  │
│  [link] [img] | [align] | [RTL][LTR]    │
│  [color] [bgcolor] | [undo][redo][clear] │
├──────────────────────────────────────────┤
│  CONTENT AREA (scrollable)               │
│  Tiptap EditorContent                    │
│  dir="auto" per paragraph                │
└──────────────────────────────────────────┘
│  [helperText / error message]            │
📦 Required Tiptap Extensions:
Extension	npm Package	Purpose
StarterKit	@tiptap/starter-kit	Base: Bold, Italic, Strike, BulletList, OrderedList, Blockquote, Code, Undo/Redo
Underline	@tiptap/extension-underline	Underline formatting
Link	@tiptap/extension-link	Hyperlinks — openOnClick, autolink
Image	@tiptap/extension-image	Image embedding (URL or base64)
TextAlign	@tiptap/extension-text-align	Left / Center / Right / Justify alignment
TextStyle	@tiptap/extension-text-style	Base for color/background extensions
Color	@tiptap/extension-color	Text color picker
Highlight	@tiptap/extension-highlight	Background highlight color (multicolor: true)
Placeholder	@tiptap/extension-placeholder	Placeholder text when editor is empty
History	Built into StarterKit	Undo / Redo stack
Typography	@tiptap/extension-typography	Smart quotes, dashes, ellipsis
CharacterCount	@tiptap/extension-character-count	Optional character/word count
🔧 Toolbar Configuration (IpsRteToolbarConfig):
// Each group is separated by a divider in the UI
type IpsRteToolbarGroup = {
  items: IpsRteToolbarItem[];
};

type IpsRteToolbarItem =
  | 'bold' | 'italic' | 'underline' | 'strike'
  | 'h1' | 'h2' | 'h3'
  | 'bulletList' | 'orderedList' | 'blockquote'
  | 'link' | 'image'
  | 'alignLeft' | 'alignCenter' | 'alignRight' | 'alignJustify'
  | 'textColor' | 'bgColor'
  | 'rtl' | 'ltr'        ← Toggle paragraph direction
  | 'undo' | 'redo' | 'clearFormat';

interface IpsRteToolbarConfig {
  groups: IpsRteToolbarGroup[];
}

// DEFAULT_TOOLBAR (mirrors Gmail layout):
const DEFAULT_TOOLBAR: IpsRteToolbarConfig = {
  groups: [
    { items: ['bold', 'italic', 'underline', 'strike'] },
    { items: ['h1', 'h2', 'h3'] },
    { items: ['bulletList', 'orderedList', 'blockquote'] },
    { items: ['link', 'image'] },
    { items: ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify'] },
    { items: ['textColor', 'bgColor'] },
    { items: ['rtl', 'ltr'] },
    { items: ['undo', 'redo', 'clearFormat'] },
  ]
};
🌐 RTL / Hebrew Support Requirements:
Set dir="auto" on the editor content area — browser auto-detects direction per paragraph based on first strong character
RTL button in toolbar: sets dir="rtl" on current paragraph node (Tiptap node attribute)
LTR button in toolbar: sets dir="ltr" on current paragraph node
Mixed content works: one paragraph can be RTL Hebrew, next LTR English
Font must support Hebrew characters (Roboto/Heebo/system-ui fallback)
Undo/Redo preserves direction state correctly
✅ Required Behaviors:
Controlled mode: when value changes externally, editor syncs without losing cursor position (use setContent only when value !== editor.getHTML())
Uncontrolled mode: use defaultValue on init only, do not sync after mount
onChange fires with HTML string on every editor change (debounce optional, default 0ms)
readOnly=true: hide toolbar entirely, set editor.setEditable(false), style as display-only (no border focus ring)
disabled=true: all interactions blocked, opacity 0.5, cursor not-allowed
error=true: border color = theme.palette.error.main
Toolbar buttons show active state (highlighted) when cursor is in formatted text
Link dialog: click link button → small popover with URL input + confirm/cancel
Image button: click → input[type=file] OR URL dialog (configurable via imageUpload prop)
clearFormat button: removes all marks from selection
Keyboard shortcuts: Ctrl+B (bold), Ctrl+I (italic), Ctrl+U (underline), Ctrl+Z (undo), Ctrl+Shift+Z (redo)
className="ips-rich-text-editor" on root wrapper
className="ips-rte-toolbar" on toolbar container
className="ips-rte-content" on EditorContent wrapper
🎨 Styling Requirements:
// Toolbar: MUI Paper elevation=1, sticky top:0
// Toolbar buttons: MUI IconButton size="small"
// Active button: bgcolor = alpha(primary.main, 0.15)
// Divider between groups: MUI Divider orientation="vertical" flexItem

// Editor content area:
// - padding: 12px 16px
// - minHeight: minHeight prop (default 200px)
// - cursor: text
// - focus outline: 2px solid primary.main

// Link: color = primary.main, text-decoration: underline
// Blockquote: border-left: 3px solid grey[400], padding-left: 12px, color: grey[600]
// Code inline: background: grey[100], fontFamily: monospace, padding: 2px 4px
📖 Storybook Stories Required:
Default (empty, LTR)
With Hebrew content (RTL)
Mixed RTL+LTR paragraphs
Controlled mode (value synced to state)
Read-only mode
Disabled state
Error state with helperText
Custom toolbar (fewer buttons)
With image upload
With link insertion

IpsSelect  ←  MUI Select
Styled dropdown select. Supports read-only mode where selected value is displayed but cannot be cleared or changed.

Prop	Type	Default	Description
options	{ label: string; value: string | number }[]	[]	Options list (required)
value	string | number	—	Controlled value
onChange	function	—	Change callback
label	string	—	Field label
readOnly	boolean	false	Read-only: shows value, no edit/clear
disabled	boolean	false	Fully disabled
placeholder	string	—	Placeholder (empty state)
error	boolean	false	Error visual state
helperText	string	—	Helper/error text below
multiple	boolean	false	Multi-select mode
sx	SxProps	—	Style override
✅ Required Behaviors:
Extend all MUI SelectProps
Use MUI FormControl + InputLabel + Select structure
readOnly=true → pointer-events: none on Select, hide clear button, show as text-like
Apply ipsTheme colors and border radius
Support ref forwarding
className="ips-select" on FormControl root
📖 Storybook Stories Required:
Default
With selected value
Read-only mode
Disabled
Error state
Multiple select
With placeholder

IpsSwitch  ←  MUI Switch
Styled toggle switch with label support. Applies organizational colors.

Prop	Type	Default	Description
label	React.ReactNode	—	Label next to switch
checked	boolean	—	Controlled state
defaultChecked	boolean	false	Uncontrolled default
onChange	function	—	Change callback
disabled	boolean	false	Disabled state
color	string	primary	MUI color
labelPlacement	'start' | 'end' | 'top' | 'bottom'	end	Label position relative to switch
sx	SxProps	—	Style override
✅ Required Behaviors:
Extend all MUI SwitchProps
If label provided, wrap in FormControlLabel
Support ref forwarding
className="ips-switch" on root
📖 Storybook Stories Required:
Default (off)
Checked (on)
Disabled
Label start
Label end
Custom color

IpsTable  ←  MUI DataGrid (@mui/x-data-grid) — Recommended
Full-featured data table. Recommended implementation: wrap MUI DataGrid for sorting, filtering, pagination, and virtual scrolling. This is the heavy/enterprise table component.

Prop	Type	Default	Description
rows	GridRowsProp	[]	Array of row objects (required)
columns	GridColDef[]	[]	Column definitions (required)
loading	boolean	false	Show skeleton/loader
pageSize	number	25	Rows per page
checkboxSelection	boolean	false	Row selection via checkboxes
disableColumnFilter	boolean	false	Disable column filters
onRowClick	function	—	Row click callback
sx	SxProps	—	Style override
✅ Required Behaviors:
Wrap @mui/x-data-grid DataGrid
Apply ipsTheme via sx prop on DataGrid
Styled header with primary.main background and white text
Alternating row colors using theme palette
Support all DataGrid props via spread
className="ips-table" on wrapper Box
Export type IpsTableProps
📖 Storybook Stories Required:
Basic table
With sorting
With pagination
Loading state
Checkbox selection
Empty state

IpsTableLight  ←  MUI Table (basic)
A lightweight table for simple display use cases. No sorting, no pagination — just clean styled rows/cells. Uses MUI Table, TableHead, TableBody, TableRow, TableCell.

Prop	Type	Default	Description
rows	Record<string, React.ReactNode>[]	[]	Array of row data objects (required)
columns	{ key: string; label: string; width?: number }[]	[]	Column definitions (required)
stickyHeader	boolean	false	Fix header on scroll
striped	boolean	true	Alternating row colors
dense	boolean	false	Reduce cell padding
emptyText	string	No data	Text when rows is empty
sx	SxProps	—	Style override on TableContainer
✅ Required Behaviors:
Use MUI Table primitive components (NOT DataGrid)
Styled header with primary.main background and white text from ipsTheme
When striped=true: odd rows white, even rows use theme grey[50]
Show emptyText centered when rows.length === 0
className="ips-table-light" on TableContainer
Export type IpsTableLightProps
📖 Storybook Stories Required:
Basic
Striped
Dense
Empty state
Sticky header with scroll
Custom cell content

IpsTextArea  ←  MUI TextField (multiline)
A styled multiline text input. Wrapper around MUI TextField with multiline=true.

Prop	Type	Default	Description
value	string	—	Controlled value
onChange	function	—	Change callback
label	string	—	Field label
placeholder	string	—	Placeholder text
rows	number	4	Number of visible rows
maxRows	number	—	Max rows before scrolling
disabled	boolean	false	Disabled state
readOnly	boolean	false	Read-only state
error	boolean	false	Error visual state
helperText	string	—	Helper/error text
maxLength	number	—	Max character count
sx	SxProps	—	Style override
✅ Required Behaviors:
Extend all MUI TextFieldProps, pass multiline=true and minRows={rows}
If maxLength provided, show character count below: "X / maxLength"
Support ref forwarding
Apply ipsTheme
className="ips-textarea" on root
📖 Storybook Stories Required:
Default
With value
Disabled
Read-only
Error state
With maxLength counter

IpsTextField  ←  MUI TextField
Standard single-line text input with organizational styling.

Prop	Type	Default	Description
value	string	—	Controlled value
onChange	function	—	Change callback
label	string	—	Field label
placeholder	string	—	Placeholder
type	string	text	Input type (text, number, email, password…)
disabled	boolean	false	Disabled
readOnly	boolean	false	Read-only
error	boolean	false	Error state
helperText	string	—	Helper/error text
startAdornment	React.ReactNode	—	Icon/element at start
endAdornment	React.ReactNode	—	Icon/element at end
sx	SxProps	—	Style override
✅ Required Behaviors:
Extend all MUI TextFieldProps
If startAdornment/endAdornment provided, use InputAdornment
Support ref forwarding to input element
className="ips-text-field" on root
📖 Storybook Stories Required:
Default
With label
Disabled
Read-only
Error state
With start adornment
With end adornment
Password type

IpsTimePicker  ←  @mui/x-date-pickers TimePicker + AdapterMoment
Styled time picker with Hebrew locale support. Based on existing codebase using moment.js adapter. Uses IpsTextField as the render input.

IpsTimePicker — Existing Code Reference
// EXISTING IMPLEMENTATION (migrate to TypeScript, keep same API):
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import IpsTextField from '../IpsTextField/IpsTextField';

export const IpsTimePicker = ({
  label, value, onChange, disabled,
  ampm, mask, minTime, maxTime, ...otherProps
}) => {
  return (
    <LocalizationProvider adapterLocale="he" dateAdapter={AdapterMoment}>
      <TimePicker
        label={label} value={value} onChange={onChange}
        disabled={disabled} ampm={ampm} mask={mask}
        minTime={minTime} maxTime={maxTime}
        renderInput={(params) => <IpsTextField {...params} />}
      />
    </LocalizationProvider>
  );
};
IpsTimePicker — Props
Prop	Type	Default	Description
value	Moment | null	null	Controlled time value (moment object)
onChange	function(value: Moment | null)	—	Callback on time change
label	string	—	Field label
disabled	boolean	false	Disabled state
ampm	boolean	false	12h mode (true) or 24h mode (false)
mask	string	__:__	Input mask string
minTime	Moment	—	Minimum selectable time
maxTime	Moment	—	Maximum selectable time
sx	SxProps	—	Style override passed to IpsTextField
✅ Migration Requirements (JS → TypeScript):
Keep identical API — do NOT change prop names or behavior
Add TypeScript types: IpsTimePickerProps extends TimePickerProps<Moment>
Replace renderInput (deprecated in MUI v6+) with slotProps.textField: (params) => <IpsTextField {...params} />
Keep AdapterMoment + adapterLocale="he" for Hebrew locale
Keep LocalizationProvider wrapping internally (consumers do NOT need to add it)
Add className="ips-time-picker" on root wrapper Box
Export type IpsTimePickerProps
Add ref forwarding if possible via slotProps
Dependencies: moment, @mui/x-date-pickers, @mui/x-date-pickers/AdapterMoment
📖 Storybook Stories Required:
Default (empty)
With controlled value
12h mode (ampm=true)
Disabled
With min/max time constraints
RTL layout (inside dir="rtl" container)

IpsToast  ←  Custom Context + Portal (NOT MUI Snackbar)
Notification toast system. Based on existing codebase using React Context + ReactDOM.createPortal. Migrate to TypeScript and replace custom icons with MUI icons. Keep the same architecture and API.

IpsToast — Existing Architecture (to be migrated)
// EXISTING PATTERN — keep same architecture:

// 1. Context
const ToastContext = createContext((type, message) => {});

// 2. Provider (wraps app)
const ToastContextProvider = ({ children, deleteTime }) => {
  const [toastsList, setToastsList] = useState([]);
  const addToast = (type, message) => {
    const id = generateId();
    setToastsList(toasts => [...toasts, { message, id, ...toastPropsByType[type] }]);
    setTimeout(() => {
      setToastsList(toasts => toasts.filter(t => t.id !== id));
    }, deleteTime || 3000);
  };
  return (
    <ToastContext.Provider value={addToast}>
      {children}
      {ReactDOM.createPortal(<ToastsContainer>{toastsList.map(...)}</ToastsContainer>, document.body)}
    </ToastContext.Provider>
  );
};

// 3. Hook
const useToastContext = () => useContext(ToastContext);

// 4. Usage in component:
const addToast = useToastContext();
addToast(TOAST_TYPES.SUCCESS, 'Saved successfully!');
IpsToast — Toast Types
Type Constant	Value	Color (existing)	MUI Icon to Use
TOAST_TYPES.SUCCESS	"success"	#5cb85c (green)	CheckCircleOutlineIcon
TOAST_TYPES.INFO	"info"	#5bc0de (blue)	InfoOutlinedIcon
TOAST_TYPES.WARNING	"warning"	#e4872b (orange)	WarningAmberIcon
TOAST_TYPES.DANGER	"danger"	#d9534f (red)	ErrorOutlineIcon
IpsToast — Provider Props
Prop	Type	Default	Description
children	React.ReactNode	—	App content (required)
deleteTime	number	3000	Auto-dismiss delay in milliseconds
position	'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'	"bottom-right"	Screen position of toast stack
maxToasts	number	5	Max simultaneous toasts shown
IpsToast — Migration Requirements (JS → TypeScript)
Keep the same architecture. Apply these changes:
Replace custom PNG icons (SucsessIcon, WarningIcon, etc.) with MUI icons (CheckCircleOutlineIcon etc.) — eliminates image file dependency
Add TypeScript: IpsToastContextType, IpsToastProviderProps, IpsToastProps, TOAST_TYPES enum
Rename ToastContextProvider → IpsToastProvider
Rename useToastContext → useToast (simpler name)
Replace @mui/system styled with MUI sx prop or emotion CSS for better ipsTheme integration
Keep RTL direction: rtl on ToastsContainer (Hebrew organization)
Keep ReactDOM.createPortal to document.body (keeps toasts above all modals/dialogs)
Keep animation: toast-enter slide-in from right (translateX 100% → 0)
Add position prop: bottom-right (default) | bottom-left | top-right | top-left
Add entry/exit animation using @mui/material Slide component instead of CSS keyframes
Keep font: use ipsTheme typography instead of hardcoded Heebo-Regular
className="ips-toast-container" on container, "ips-toast" on each toast div
Export: IpsToastProvider, useToast, TOAST_TYPES
DO NOT export IpsToast as a standalone component — the system is context-driven only
IpsToast — File Structure
IpsToast/
├── IpsToast.tsx              ← Individual toast item component
├── IpsToastProvider.tsx      ← Context + Provider + Portal
├── IpsToastContext.ts        ← createContext + types
├── useToast.ts               ← Hook: useToast()
├── IpsToast.types.ts         ← All TypeScript types + TOAST_TYPES
├── IpsToast.stories.tsx      ← Storybook stories
├── IpsToast.test.tsx         ← Unit tests
└── index.ts                  ← Exports: IpsToastProvider, useToast, TOAST_TYPES
📖 Storybook Stories Required:
Success toast (via useToast hook)
Info toast
Warning toast
Danger toast
Multiple toasts queued
Custom deleteTime (long and short)
All positions (bottom-right, top-left, etc.)

IpsToolTips  ←  MUI Tooltip
Styled tooltip with organizational theme. Simple wrapper around MUI Tooltip.

Prop	Type	Default	Description
title	React.ReactNode	—	Tooltip content (required)
children	React.ReactElement	—	Trigger element (required)
placement	TooltipProps["placement"]	top	Tooltip position
arrow	boolean	true	Show arrow
disableHoverListener	boolean	false	Disable on hover
sx	SxProps	—	Tooltip sx override (via componentsProps)
✅ Required Behaviors:
Extend all MUI TooltipProps
Default arrow=true (organizational standard)
Apply ipsTheme background/font via theme override in ipsTheme.ts
className="ips-tooltip" passed via componentsProps.tooltip
📖 Storybook Stories Required:
Default (top)
All placement positions
No arrow
Rich content (not just text)
Disabled hover



IpsFileUpload  ←  Custom (MUI Box + Dropzone) — SharePoint integration
File attachment component with SharePoint upload. Supports drag & drop, file browser, camera, screenshot, and document scanning. Displays per-file preview, size, and delete. Returns uploaded file paths.

IpsFileUpload — File Structure
src/components/IpsFileUpload/
├── IpsFileUpload.tsx              ← Main component
├── IpsFileUpload.types.ts         ← All types + interfaces
├── IpsFileUpload.stories.tsx      ← Storybook stories
├── IpsFileUpload.test.tsx         ← Unit tests
├── IpsDropZone.tsx                ← Drag & drop zone sub-component
├── IpsFileItem.tsx                ← Single file row sub-component
├── useFileUpload.ts               ← Upload logic hook
└── index.ts                       ← Exports
IpsFileUpload — Props
Prop	Type	Default	Required	Description
sviva	string	—	✅	Current environment (dev/staging/prod). Used to construct SharePoint URL.
system	string	—	✅	SharePoint site name. Used as upload target.
uploadParams	Record<string, string>	{}	—	Extra metadata uploaded alongside each file (e.g. entity ID, type).
containerId	string	—	—	Unique container ID. Differentiates multiple instances on same page.
camera	boolean	false	—	Show/hide the "Use Camera" upload button.
scan	boolean	false	—	Show/hide the "Scan Document" button. Uses device scanner via Web TWAIN or falls back to camera capture in mobile.
onBeforeSave	() => Promise<boolean>	—	—	Async validation before save. Return true = proceed, false = block.
onSaveSuccess	(result: Array<{name: string, path: string}>) => void	—	—	Called with array of uploaded file names and SharePoint paths.
onSaveError	(error: unknown) => void	—	—	Called when upload fails.
className	string	—	—	CSS class applied to the outer container.
uploadMethod	string	—	—	Override the upload method/endpoint if needed.
maxFileSizeMB	number	10	—	Maximum allowed file size in MB. Files exceeding this are rejected with an error.
accept	string[]	—	—	Accepted MIME types or extensions (e.g. ["image/*", ".pdf"]).
multiple	boolean	true	—	Allow multiple file selection.
disabled	boolean	false	—	Disable all upload interactions.
sx	SxProps	—	—	MUI sx override on the outer Box wrapper.
IpsFileUpload — Layout (Visual Structure)
┌──────────────────────────────────────────────────┐
│  DROP ZONE                                        │
│  ┌────────────────────────────────────────────┐  │
│  │  🗂  גרור קבצים לכאן                        │  │
│  │  או בחר שיטת העלאה:                        │  │
│  │  [📁 עיין] [📷 מצלמה] [📸 צילום מסך] [🖨 סריקה]  │  │
│  └────────────────────────────────────────────┘  │
│                                                   │
│  FILE LIST                                        │
│  ┌──────────────────────────────────────────┐    │
│  │ 📄 document.pdf       245 KB  [👁] [🗑]  │    │
│  │ 🖼 image.png          1.2 MB  [👁] [🗑]  │    │
│  │ 📄 report.xlsx        88 KB   [👁] [🗑]  │    │
│  └──────────────────────────────────────────┘    │
│                                                   │
│  ACTIONS BAR                                      │
│  [💾 שמור קבצים]          [🗑 נקה הכל]           │
└──────────────────────────────────────────────────┘
IpsFileUpload — Sub-Components
IpsDropZone.tsx
Renders the dashed drop zone area with upload method buttons
Listens to dragover, dragleave, drop DOM events
On drop → calls onFilesAdded(files: File[])
Buttons: "עיין בקבצים" (file input), "מצלמה" (if camera=true), "צילום מסך", "סריקה" (if scan=true)
"עיין בקבצים" → hidden <input type='file' multiple accept={accept} />
"מצלמה" → input type='file' capture='environment'
"צילום מסך" → navigator.mediaDevices.getDisplayMedia → capture frame → convert to PNG File
"סריקה" → see Scan flow below
Visual state: idle | dragover (highlighted border) | disabled
className='ips-drop-zone' on root
🖨 Scan Flow (סריקה):
Scanning strategy — 2-tier fallback:

TIER 1 — Desktop (Dynamsoft Web TWAIN):
  if (typeof Dynamsoft !== "undefined") {
    // Use Dynamsoft Web TWAIN SDK (requires DWT installed on client)
    // containerId prop maps to DWT container element ID
    // DWT.AcquireImage() → returns scanned image → convert to File
    // Supports multi-page scan → each page becomes a separate File
  }

TIER 2 — Mobile / no DWT fallback:
  else {
    // Fallback: <input type="file" accept="image/*" capture="environment">
    // User photographs the document with camera
    // Show message: "סורק לא זוהה — מצלמה תשמש כחלופה"
  }

// Error handling:
// DWT not installed → show install prompt or fallback silently
// Permission denied → show error message
// Scan cancelled → no action
IpsFileItem.tsx
Renders a single file row in the list
Displays: file icon (by type), file name, file size (formatted: KB/MB)
Preview button (👁): opens preview based on file type:
  • image/* → show in MUI Dialog with <img>
  • PDF → show in Dialog with <iframe> or <embed>
  • other → trigger browser download / open in new tab
Delete button (🗑): calls onDelete(file)
Error state: if file exceeds maxFileSizeMB → red row + error message
className="ips-file-item" on root
useFileUpload.ts (hook)
Manages: files state, loading state, errors state
addFiles(newFiles: File[]) → validates size → adds to list
removeFile(file: File) → removes from list
clearAll() → empties list
saveFiles() → calls onBeforeSave() → if true → uploads each file to SharePoint → calls onSaveSuccess / onSaveError
Returns: { files, addFiles, removeFile, clearAll, saveFiles, loading, errors }
IpsFileUpload — SharePoint Upload Flow
// Inside useFileUpload.ts → saveFiles():

const saveFiles = async () => {
  // 1. Run pre-save validation
  if (onBeforeSave) {
    const isValid = await onBeforeSave();
    if (!isValid) return;
  }

  setLoading(true);
  const results = [];

  for (const file of files) {
    try {
      // 2. Build FormData with file + uploadParams
      const formData = new FormData();
      formData.append("file", file);
      Object.entries(uploadParams).forEach(([k, v]) => formData.append(k, v));

      // 3. POST to SharePoint endpoint
      // URL built from sviva + system
      const response = await fetch(buildUploadUrl(sviva, system, uploadMethod), {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      results.push({ name: file.name, path: data.path });
    } catch (err) {
      onSaveError?.(err);
      return;
    }
  }

  onSaveSuccess?.(results);
  clearAll();
  setLoading(false);
};
IpsFileUpload — Validation Rules
Rule	Behavior	User Feedback
File too large	File added to list with error flag	Red row: "הקובץ חורג מהגודל המותר (X MB)"
Wrong file type	File rejected (not added)	Toast or inline error: "סוג קובץ לא נתמך"
No files selected	Save button disabled	Save button disabled when files list is empty
onBeforeSave returns false	Upload blocked	No error shown (caller responsibility)
Upload fails	Error state	onSaveError called with error object
IpsFileUpload — TypeScript Types
// IpsFileUpload.types.ts

export interface UploadResult {
  name: string;
  path: string;
}

export interface IpsFileUploadProps {
  sviva: string;
  system: string;
  uploadParams?: Record<string, string>;
  containerId?: string;
  camera?: boolean;       // show camera button
  scan?: boolean;         // show scan button (Dynamsoft DWT or fallback)
  onSaveSuccess?: (result: UploadResult[]) => void;
  onSaveError?: (error: unknown) => void;
  className?: string;
  uploadMethod?: string;
  maxFileSizeMB?: number;
  accept?: string[];
  multiple?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

export interface IpsFileItemProps {
  file: File;
  hasError?: boolean;
  errorMessage?: string;
  onDelete: (file: File) => void;
}

export interface IpsDropZoneProps {
  onFilesAdded: (files: File[]) => void;
  camera?: boolean;
  scan?: boolean;
  accept?: string[];
  multiple?: boolean;
  disabled?: boolean;
  isDragOver?: boolean;
}
✅ Required Behaviors:
Multiple files: user can add files in batches (each drop/select adds to existing list, does not replace)
Size validation runs immediately on file add — before upload
Files with size errors appear in the list with red indicator but block the Save button
Save button: disabled when files list is empty OR any file has a size error OR loading=true
Clear button: removes all files from list regardless of errors
Camera button only rendered when camera=true prop is passed
Scan button only rendered when scan=true prop is passed
Scan: detect Dynamsoft DWT → if available use DWT.AcquireImage(); if not → fallback to camera input + show message
Screenshot capture: uses getDisplayMedia API — show error if browser does not support it
Loading state during upload: show MUI CircularProgress on Save button, disable all interactions
After successful save: clear the files list automatically
RTL support: component should work in dir="rtl" layout (Hebrew org)
className="ips-file-upload" on root Box
📦 Dependencies:
No new npm packages required for core functionality
Drag & drop: native DOM events (no react-dropzone needed)
File preview: native URL.createObjectURL()
Screenshot: native navigator.mediaDevices.getDisplayMedia()
Camera: native <input type="file" capture="environment">
Scan (optional / external): Dynamsoft Web TWAIN SDK (loaded externally by the host app, not bundled in library)
  → Check: typeof Dynamsoft !== "undefined" before using
  → containerId prop is passed to DWT container element
  → Do NOT import Dynamsoft as npm package — it is injected by the host
📖 Storybook Stories Required:
Default (empty state)
With files added
With oversized file (error state)
camera=true (show camera button)
scan=true (show scan button)
scan=true with no DWT (fallback behavior)
disabled state
Loading state (uploading)
RTL layout
Custom accept types (images only)
⚠️ AI Implementation Notes:
Do NOT use react-dropzone — implement drag & drop with native events
Do NOT import Dynamsoft as npm package — check typeof Dynamsoft !== "undefined" at runtime
Do NOT make real SharePoint API calls in tests — mock the fetch
The upload URL builder (buildUploadUrl) should be a pure util in utils/uploadUtils.ts
onSaveSuccess type: use UploadResult[] not any[]
Screenshot capture requires user permission — handle NotAllowedError gracefully
Scan with DWT: containerId prop is the DWT container element ID — pass it to DWT init
Multiple containerId instances: each useFileUpload hook is fully independent (no shared state)


IpsStepper  ←  MUI Stepper
Purely visual, fully-controlled stepper. Renders only the step rail (nodes, connectors, labels, states); all flow logic stays with the consumer. Stateless — activeStep is controlled.

Prop	Type	Default	Description
steps	IpsStepItem[]	[]	Ordered step descriptors (required)
activeStep	number	—	Controlled active step index (required)
orientation	'horizontal' | 'vertical'	'horizontal'	Layout direction
alternativeLabel	boolean	false	Horizontal — place label under the icon
nonLinear	boolean	false	Render steps as clickable StepButton
onStepClick	(index: number, step: IpsStepItem) => void	—	Fired on a clickable step; navigation logic is external
renderStepIcon	(ctx: IpsStepRenderContext) => ReactNode	—	Full override of a step's icon
renderStepLabel	(ctx: IpsStepRenderContext) => ReactNode	—	Full override of a step's label
renderConnector	() => ReactElement	—	Override the connector
connector	ReactElement | null	MUI default	Static connector override (null removes connectors)
sx	SxProps	—	Style override
Types: IpsStepItem = { label; description?; optional?; icon?; status?: IpsStepStatus; disabled?; content?; key? }
IpsStepStatus = 'pending' | 'active' | 'completed' | 'warning' | 'error' | 'disabled'
✅ Required Behaviors:
Wrap MUI Stepper + Step + StepLabel/StepButton + StepConnector (+ StepContent for vertical)
Stateless + fully controlled — NO internal active-step or status state; no uncontrolled mode (no defaultActiveStep)
Resolve per-step status: use step.status if provided, else derive from activeStep (< active → completed, === active → active, > active → pending); step.disabled → disabled
Status → MUI mapping: completed → Step.completed, error → StepLabel error, active → matches activeStep, disabled → Step.disabled, warning → custom StepIcon (warning.main)
Clickability is consumer-driven: render StepButton only when nonLinear && onStepClick && !disabled; onStepClick reports intent only and never changes the active step
Icon precedence: renderStepIcon → step.icon → default numbered/check icon. Label precedence: renderStepLabel → composed label (label + optional + description)
Vertical orientation renders step.content inside StepContent
Extend MUI StepperProps; support ref forwarding; apply ipsTheme (active/completed = primary.main, error = error.main)
className="ips-stepper" on root, "ips-step" per step
Export IpsStepperProps, IpsStepItem, IpsStepStatus, IpsStepRenderContext
📖 Storybook Stories Required:
Horizontal (default)
Vertical
Alternative label
With descriptions and optional captions
Non-linear / clickable
Error status on a step
Warning status on a step
Disabled step
Custom step icons (renderStepIcon)
Vertical with StepContent
Many steps (overflow / wrap)
⚠️ AI Implementation Notes:
activeStep is REQUIRED — no defaultActiveStep, no uncontrolled mode
onStepClick must NEVER mutate the active step; the consumer owns all navigation/validation
An explicit step.status always wins over the activeStep-derived default


IpsTabs  ←  MUI Tabs
Purely visual, fully-controlled tabs. Renders the tab bar (and optionally accessible tab panels); all flow logic stays with the consumer. Stateless — value is controlled; selection is by value, not index.

Prop	Type	Default	Description
tabs	IpsTabItem[]	[]	Ordered tab descriptors (required)
value	string | number	—	Controlled value of the active tab (required)
onTabChange	(value: string | number, tab: IpsTabItem) => void	—	Fired on tab activation; navigation logic is external
orientation	'horizontal' | 'vertical'	'horizontal'	Bar layout direction
variant	'standard' | 'scrollable' | 'fullWidth'	'standard'	MUI Tabs variant
scrollButtons	'auto' | true | false	'auto'	Scroll buttons (scrollable variant)
centered	boolean	false	Center tabs (standard horizontal)
renderPanels	boolean	false	Also render accessible tab panels from tab.content
keepMounted	boolean	false	With renderPanels, mount all panels (hide inactive)
idPrefix	string	'ips-tabs'	Prefix for generated tab/panel aria ids
renderTabLabel	(ctx: IpsTabRenderContext) => ReactNode	—	Full override of a tab's label
sx	SxProps	—	Style override
Types: IpsTabItem = { value; label; icon?; iconPosition?: 'top'|'bottom'|'start'|'end'; disabled?; error?; badge?; content?; key? }
✅ Required Behaviors:
Wrap MUI Tabs + Tab (+ a thin internal panel element when renderPanels is true)
Stateless + fully controlled — value required; NO internal active-tab state; no uncontrolled mode
Selection is by tab.value, NEVER by index
Map MUI onChange(event, value) → onTabChange(value, tab); onTabChange reports intent only and never changes the selection
disabled tabs are not selectable and skipped by keyboard nav; error renders an error style and is exposed non-visually (aria-invalid), not by color alone — IpsTabs runs no validation
badge renders next to the label; icon + iconPosition map to MUI Tab
Label precedence: renderTabLabel → composed label (label + badge)
Always emit per-tab id=`${idPrefix}-tab-${value}` and aria-controls=`${idPrefix}-panel-${value}`; panels (internal or external) mirror the ids with role="tabpanel" + aria-labelledby
renderPanels: render tab.content in role="tabpanel" (active only by default; keepMounted mounts all and hides inactive via the hidden attribute). When false, render the bar only
Extend MUI TabsProps; support ref forwarding; apply ipsTheme (indicator/selected = primary.main, error = error.main)
className="ips-tabs" on root, "ips-tab" per tab, "ips-tab-panel" per panel
Export IpsTabsProps, IpsTabItem, IpsTabRenderContext
📖 Storybook Stories Required:
Horizontal (default)
Vertical
Scrollable (many tabs)
Full width
Centered
With icons (each iconPosition)
With badges / counts
Disabled tab
Error tab
With built-in panels (renderPanels)
Built-in panels with keepMounted
Custom label via renderTabLabel
⚠️ AI Implementation Notes:
value is REQUIRED and selection is by value not index — no uncontrolled mode
onTabChange must NEVER change the selection itself; the consumer owns navigation
error/disabled are consumer-controlled and purely visual


IpsDialog  ←  MUI Dialog
Generic, fully-controlled popup/modal. A visual shell that renders ANY consumer component as children; all logic stays with the consumer. Stateless — open is controlled. (Rename to IpsPopup if preferred — API unchanged.)

Prop	Type	Default	Description
open	boolean	—	Controlled visibility (required)
onClose	(reason: IpsDialogCloseReason) => void	—	Fired on a close intent; consumer decides whether to close
title	React.ReactNode	—	Header title (ignored if renderHeader is set)
icon	React.ReactNode	—	Optional icon beside the title
children	React.ReactNode	—	Body content — the rendered inner component (required)
actions	React.ReactNode	—	Footer content / buttons (ignored if renderFooter is set)
maxWidth	'xs'|'sm'|'md'|'lg'|'xl'|number|false	'sm'	Max surface width (number = px)
fullWidth	boolean	true	Stretch to maxWidth
fullScreen	boolean	false	Render full-screen
fullScreenBreakpoint	'xs'|'sm'|'md'|'lg'|'xl'	—	Auto full-screen at/below this breakpoint
scroll	'paper' | 'body'	'paper'	Scroll behavior
dividers	boolean	false	Dividers between header / content / footer
showCloseButton	boolean	true	Show header close (X) button
disableBackdropClose	boolean	false	Do not emit onClose on backdrop click
disableEscapeKeyDown	boolean	false	Do not emit onClose on Esc
transition	'fade' | 'grow' | 'slide' | 'zoom'	'fade'	Enter/exit animation
loading	boolean	false	Busy overlay on the surface (visual only)
keepMounted	boolean	false	Keep content mounted while closed
rtl	boolean	false	Force RTL layout on the surface
idPrefix	string	'ips-dialog'	Prefix for generated aria ids
renderHeader	(ctx: IpsDialogRenderContext) => ReactNode	—	Full override of the header
renderFooter	(ctx: IpsDialogRenderContext) => ReactNode	—	Full override of the footer
sx	SxProps	—	Style override on the paper
Types: IpsDialogCloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeButton'
✅ Required Behaviors:
Wrap MUI Dialog + DialogTitle + DialogContent + DialogActions
Stateless + fully controlled — open required; NO internal open state; no uncontrolled mode (no defaultOpen)
onClose reports intent only and NEVER closes the dialog itself (consumer flips open): backdrop → onClose('backdropClick') unless disableBackdropClose; Esc → onClose('escapeKeyDown') unless disableEscapeKeyDown; close button → onClose('closeButton')
Render children verbatim in DialogContent (component-agnostic body); render actions verbatim in DialogActions (no built-in button behavior)
Header precedence: renderHeader → composed header (icon + title + optional close). Footer precedence: renderFooter → actions. Omit header/footer when nothing applies
maxWidth (incl. px), fullWidth, scroll, dividers map to MUI; fullScreen forces full-screen; fullScreenBreakpoint via useMediaQuery (explicit fullScreen wins)
transition enum → MUI Fade/Grow/Slide(up)/Zoom; loading → centered spinner overlay + aria-busy (no async itself); rtl → dir="rtl" on the paper
aria-labelledby → `${idPrefix}-title`, aria-describedby → `${idPrefix}-content`; inherit MUI focus trap + focus restore
Support ref forwarding; apply ipsTheme
className="ips-dialog" on the paper, "ips-dialog-title" / "ips-dialog-content" / "ips-dialog-actions" on sections
Export IpsDialogProps, IpsDialogCloseReason, IpsDialogRenderContext
📖 Storybook Stories Required:
Default (title + content + actions)
Content only (no header/footer)
Sizes (each maxWidth)
Full width
Full screen
Responsive full screen (fullScreenBreakpoint)
Scroll paper vs body (long content)
With dividers
Without close button
disableBackdropClose + disableEscapeKeyDown
Each transition (fade/grow/slide/zoom)
With header icon
Loading overlay
Custom header via renderHeader
Custom footer via renderFooter
RTL layout
⚠️ AI Implementation Notes:
open is REQUIRED — no defaultOpen, no uncontrolled mode
onClose must NEVER close the dialog itself; it only reports the reason
children are rendered as-is — make no assumption about the inner component


IpsDrawer  ←  MUI Drawer
Generic, fully-controlled sliding panel (drawer). A visual shell that renders ANY consumer component as children; all logic stays with the consumer. Stateless — open is controlled.

Prop	Type	Default	Description
open	boolean	—	Controlled visibility (required)
onClose	(reason: IpsDrawerCloseReason) => void	—	Fired on a close intent; consumer decides whether to close
anchor	'left' | 'right' | 'top' | 'bottom'	'right'	Edge the drawer slides from
variant	'temporary' | 'persistent' | 'permanent'	'temporary'	MUI drawer variant (temporary = modal + backdrop)
size	number | string	400	Width (left/right) or height (top/bottom); number = px
title	React.ReactNode	—	Header title (ignored if renderHeader is set)
icon	React.ReactNode	—	Optional icon beside the title
children	React.ReactNode	—	Body content — the rendered inner component (required)
actions	React.ReactNode	—	Footer content / buttons (ignored if renderFooter is set)
dividers	boolean	false	Dividers between header / content / footer
showCloseButton	boolean	true	Show header close (X) button
disableBackdropClose	boolean	false	Do not emit onClose on backdrop click (temporary)
disableEscapeKeyDown	boolean	false	Do not emit onClose on Esc
hideBackdrop	boolean	false	Hide the backdrop (temporary)
elevation	number	theme default	Surface elevation
loading	boolean	false	Busy overlay on the surface (visual only)
keepMounted	boolean	false	Keep content mounted while closed
rtl	boolean	false	Force RTL layout on the surface
idPrefix	string	'ips-drawer'	Prefix for generated aria ids
renderHeader	(ctx: IpsDrawerRenderContext) => ReactNode	—	Full override of the header
renderFooter	(ctx: IpsDrawerRenderContext) => ReactNode	—	Full override of the footer
sx	SxProps	—	Style override on the paper
Types: IpsDrawerCloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeButton'
✅ Required Behaviors:
Wrap MUI Drawer; compose a pinned header (title + close), an independently scrolling content region, and a pinned footer inside the paper
Stateless + fully controlled — open required; NO internal open state; no uncontrolled mode
onClose reports intent only and NEVER closes the drawer itself: backdrop → 'backdropClick' unless disableBackdropClose (not emitted for persistent/permanent); Esc → 'escapeKeyDown' unless disableEscapeKeyDown; close button → 'closeButton'
Render children verbatim as the body (component-agnostic); render actions verbatim in the footer (no built-in button behavior)
size maps to paper width for left/right and height for top/bottom (numbers = px)
Header precedence: renderHeader → composed header (icon + title + optional close). Footer precedence: renderFooter → actions. Omit when nothing applies
variant, hideBackdrop, elevation map to MUI; loading → spinner overlay + aria-busy; rtl → dir="rtl" (anchor stays physical)
aria-labelledby → `${idPrefix}-title`, aria-describedby → `${idPrefix}-content`; temporary inherits MUI focus trap + restore; persistent/permanent are non-modal (no focus trap)
Extend MUI DrawerProps; support ref forwarding; apply ipsTheme
className="ips-drawer" on the paper, "ips-drawer-title" / "ips-drawer-content" / "ips-drawer-actions" on sections
Export IpsDrawerProps, IpsDrawerCloseReason, IpsDrawerRenderContext
📖 Storybook Stories Required:
Each anchor (left/right/top/bottom)
Each variant (temporary/persistent/permanent)
Sizes (px and %)
Default (title + content + actions)
Content only (no header/footer)
With dividers
Without close button
disableBackdropClose + disableEscapeKeyDown
Hidden backdrop
Loading overlay
Long scrolling content (pinned header/footer)
Custom header via renderHeader
Custom footer via renderFooter
RTL layout
⚠️ AI Implementation Notes:
open is REQUIRED — no uncontrolled mode
onClose must NEVER close the drawer itself; it only reports the reason
children are rendered as-is — make no assumption about the inner component


IpsCarousel  ←  composed (MUI Box / Fade / Slide / IconButton / MobileStepper)
Content-agnostic carousel. Takes a list of components and renders each as a slide, auto-advancing on a timer, with indicator dots at the bottom and optional left/right arrows for manual navigation. Owns only presentation/timing — no business logic.

Prop	Type	Default	Description
items	React.ReactNode[]	[]	Ordered slides — each is any component, rendered verbatim (required)
activeIndex	number	—	Controlled current index (when set, component is controlled)
defaultIndex	number	0	Initial index (uncontrolled mode)
onIndexChange	(index: number) => void	—	Fired whenever the active slide changes (auto or manual)
autoPlay	boolean	true	Auto-advance slides on a timer
interval	number	5000	Auto-advance interval in ms
loop	boolean	true	Wrap around past the first/last slide
pauseOnHover	boolean	true	Pause auto-play while hovered or focused
swipeable	boolean	true	Allow touch/drag to change slides
showArrows	boolean	false	Show left/right arrows for manual navigation
showDots	boolean	true	Show the bottom indicator dots
dotsClickable	boolean	true	Clicking a dot jumps to that slide
showPlayPause	boolean	false	Show a play/pause control (recommended with autoPlay)
transition	'slide' | 'fade'	'slide'	Animation between slides
height	number | string	—	Fixed viewport height (px or CSS)
aspectRatio	number | string	—	Viewport aspect ratio (e.g. 16/9)
rtl	boolean	false	Mirror arrow direction and slide motion
idPrefix	string	'ips-carousel'	Prefix for generated aria ids
renderDot	(ctx: IpsCarouselDotContext) => ReactNode	—	Override dot rendering
renderArrow	(ctx: IpsCarouselArrowContext) => ReactNode	—	Override arrow rendering
sx	SxProps	—	Style override on the root
Types: IpsCarouselDotContext = { index; active; onClick }
IpsCarouselArrowContext = { direction: 'prev' | 'next'; disabled; onClick }
✅ Required Behaviors:
DOCUMENTED EXCEPTION to the stateless rule: because auto-play is intrinsic, IpsCarousel supports BOTH controlled (activeIndex + onIndexChange) and uncontrolled (defaultIndex + internal index/timer) modes. Slide CONTENT is always external and rendered verbatim
Controlled: never mutate index internally — auto-play/arrows/dots call onIndexChange(next) only. Uncontrolled: keep internal index seeded by defaultIndex; on every change update it AND call onIndexChange
Auto-play (autoPlay && items.length > 1): advance every interval ms via setInterval; CLEAR the timer on unmount and on prop change; pause on hover/focus when pauseOnHover; respect prefers-reduced-motion (disable auto-advance + reduce animation)
loop: wrap past first/last; when false, stop auto-play at the last slide and disable the matching arrow at each end
Dots (showDots): one dot per slide, active highlighted; dotsClickable navigates; renderDot overrides
Arrows (showArrows): prev/next IconButtons for manual navigation, disabled at ends when !loop; renderArrow overrides
showPlayPause toggles auto-play; swipeable advances via touch/drag; transition = MUI Slide (directional, respects rtl) or Fade
height/aspectRatio size the viewport; rtl mirrors arrow icons/positions and slide direction (prev/next stay logical)
Gracefully handle 0 items (render nothing) and 1 item (no dots/arrows/auto-play)
WAI-ARIA carousel semantics: root role="region" + aria-roledescription="carousel"; each slide role="group" aria-roledescription="slide" aria-label="{n} of {total}"; dots are buttons with aria-current; arrows have aria-labels
Support ref forwarding; apply ipsTheme (active dot = primary.main)
className="ips-carousel" on root, "ips-carousel-viewport" / "ips-carousel-slide" / "ips-carousel-dots" / "ips-carousel-arrow" on the parts
Export IpsCarouselProps, IpsCarouselDotContext, IpsCarouselArrowContext
📖 Storybook Stories Required:
Auto-play (default) with dots
Manual navigation with arrows (showArrows)
Clickable dots
Fade transition
No loop (arrows disable at ends, auto-play stops)
Single item
Pause on hover/focus
Play/Pause control
Fixed height and aspectRatio
Custom dots via renderDot
Custom arrows via renderArrow
RTL
Controlled mode (external index)
Swipeable (touch/drag)
prefers-reduced-motion (auto-play disabled)
⚠️ AI Implementation Notes:
Do NOT add a third-party carousel dependency — compose from MUI primitives
Always clear the auto-play timer on unmount; use fake timers in auto-play tests
In controlled mode the index must never change internally — only onIndexChange fires

7. Public API — src/index.ts
The following must all be exported from src/index.ts. Nothing else should be exported from deep paths.
// Components
export { IpsAccordion } from './components/IpsAccordion';
export { IpsAutocomplete } from './components/IpsAutocomplete';
export { IpsButton } from './components/IpsButton';
export { IpsCheckBox } from './components/IpsCheckBox';
export { IpsChipSelect } from './components/IpsChipSelect';
export { IpsDatePicker } from './components/IpsDatePicker';
export { IpsDateTimePicker } from './components/IpsDateTimePicker';
export { IpsFileUpload } from './components/IpsFileUpload';
export { IpsIconButton } from './components/IpsIconButton';
export { IpsPillSelect } from './components/IpsPillSelect';
export { IpsRichTextEditor } from './components/IpsRichTextEditor';
export { IpsSelect } from './components/IpsSelect';
export { IpsSwitch } from './components/IpsSwitch';
export { IpsTable } from './components/IpsTable';
export { IpsTableLight } from './components/IpsTableLight';
export { IpsTextArea } from './components/IpsTextArea';
export { IpsTextField } from './components/IpsTextField';
export { IpsTimePicker } from './components/IpsTimePicker';
export { IpsToastProvider, useToast, TOAST_TYPES } from './components/IpsToast';
export { IpsToolTips } from './components/IpsToolTips';
export { IpsStepper } from './components/IpsStepper';
export { IpsTabs } from './components/IpsTabs';
export { IpsDialog } from './components/IpsDialog';
export { IpsDrawer } from './components/IpsDrawer';
export { IpsCarousel } from './components/IpsCarousel';

// Types
export type { IpsAccordionProps } from './components/IpsAccordion';
// ... (all Ips*Props types)
export type { IpsStepperProps, IpsStepItem, IpsStepStatus, IpsStepRenderContext } from './components/IpsStepper';
export type { IpsTabsProps, IpsTabItem, IpsTabRenderContext } from './components/IpsTabs';
export type { IpsDialogProps, IpsDialogCloseReason, IpsDialogRenderContext } from './components/IpsDialog';
export type { IpsDrawerProps, IpsDrawerCloseReason, IpsDrawerRenderContext } from './components/IpsDrawer';
export type { IpsCarouselProps, IpsCarouselDotContext, IpsCarouselArrowContext } from './components/IpsCarousel';

// Theme
export { ipsTheme } from './theme/ipsTheme';
export type { IpsTheme } from './theme/ipsTheme';


8. Storybook Configuration
8.1 .storybook/preview.tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ipsTheme } from '../src/theme/ipsTheme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={ipsTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];

8.2 Required Addons
Addon	Purpose
@storybook/addon-controls	Interactive prop controls
@storybook/addon-a11y	Accessibility audit
@storybook/addon-viewport	Responsive testing
@storybook/addon-docs	Auto-generated docs from JSDoc


9. package.json Configuration
{
  "name": "@company/ui",
  "version": "1.0.0",
  "main": "dist/index.cjs.js",
  "module": "dist/index.es.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "dev": "storybook dev -p 6006",
    "build": "vite build",
    "build-storybook": "storybook build",
    "test": "jest",
    "lint": "eslint src --ext ts,tsx"
  },
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18",
    "@mui/material": ">=5",
    "@emotion/react": ">=11",
    "@emotion/styled": ">=11"
  }
}


10. Quality & CI/CD Requirements
10.1 Per-Component Checklist
Requirement	Mandatory
TypeScript types file (.types.ts)	✅ Yes
forwardRef implementation	✅ Yes
Extend MUI base props	✅ Yes
sx prop support	✅ Yes
className with ips- prefix on root	✅ Yes
Storybook stories (.stories.tsx)	✅ Yes
Unit tests (.test.tsx)	✅ Yes
displayName set on component	✅ Yes
Export from component index.ts	✅ Yes
Export from src/index.ts	✅ Yes

10.2 CI/CD Pipeline
Step 1: npm install
Step 2: npm run lint
Step 3: npm test
Step 4: npm run build
Step 5: npm publish → internal Artifacts registry
Step 6: npm run build-storybook → deploy to internal hosting

10.3 Versioning
MAJOR — breaking API changes (deprecation → warning → removal)
MINOR — new components or props added backwards-compatibly
PATCH — bug fixes, styling tweaks


11. Accessibility
All components inherit MUI accessibility capabilities. Additionally:
All interactive components must have proper aria-label or aria-labelledby support
Keyboard navigation must work (Tab, Enter, Space, Arrow keys) — inherited from MUI
Components must not break screen reader flow
RTL-aware components (IpsDatePicker) must flip layout correctly
Run @storybook/addon-a11y on every story and fix any violations
IpsDialog / IpsDrawer (temporary): inherit MUI modal semantics — focus trap, aria-modal, focus restore on close; wire aria-labelledby (title) + aria-describedby (content) from idPrefix
IpsDrawer persistent/permanent: non-modal — do not trap focus; keep reachable in tab order
IpsTabs / IpsStepper: aria-current on the active item; tab/panel ids wired via idPrefix; error states exposed non-visually (not color alone)
IpsCarousel: full WAI-ARIA carousel pattern — region + slide roles, dot/arrow buttons with labels, pause auto-play on hover/focus, honor prefers-reduced-motion
RTL-aware components now also include IpsDialog, IpsDrawer and IpsCarousel (rtl prop)


12. Final AI Instruction Summary
1. Generate ALL 25 components. Do not skip any.
2. Every component: .tsx + .types.ts + .stories.tsx + .test.tsx + index.ts
3. All exports go through src/index.ts only.
4. All components wrap MUI — except IpsRichTextEditor (Tiptap), IpsToast (custom portal),
   IpsFileUpload (custom + native browser APIs), and IpsCarousel (composed from MUI primitives).
5. All components use forwardRef (where applicable).
6. Storybook stories always wrap with IpsThemeProvider.
7. IpsTable → MUI DataGrid. IpsTableLight → MUI Table (no DataGrid).
8. IpsToast → export IpsToastProvider, useToast, TOAST_TYPES. Architecture: Context + Portal.
       Keep same pattern as existing code. Replace PNG icons with MUI icons.
9. IpsButton buttonType → auto-sets icon and color per type.
10. IpsDatePicker, IpsDateTimePicker → use AdapterDateFns internally.
11. IpsTimePicker → use AdapterMoment + adapterLocale="he" (keep existing API).
       Migrate renderInput → slotProps.textField for MUI v7 compatibility.
12. IpsSelect readOnly=true → cannot clear or change selection.
13. IpsPillSelect → ButtonBase, NOT MUI Select.
14. IpsRichTextEditor → Tiptap with Gmail-style toolbar (see Section 6 for full spec).
15. IpsFileUpload → custom component with sub-components:
       IpsDropZone.tsx, IpsFileItem.tsx, useFileUpload.ts hook.
       NO react-dropzone — use native drag & drop events.
       Upload to SharePoint via fetch POST with FormData.
       Props: sviva, system, uploadParams, camera, onBeforeSave, onSaveSuccess, onSaveError.
16. MUI VERSION IS v7 — use slotProps.input instead of InputProps everywhere.
       Do NOT use deprecated InputProps, inputProps (use slotProps.htmlInput).
17. Apply ipsTheme to ALL components.
18. Run: npm install, npm run lint, npm test, npm run build — all must pass.
19. IpsStepper → wrap MUI Stepper/Step/StepLabel/StepButton/StepConnector/StepContent.
       Stateless & fully controlled (activeStep required; no internal flow state).
       Per-step status is consumer-controlled and overrides the activeStep-derived default.
       renderStepIcon/renderStepLabel/renderConnector escape hatches. onStepClick reports intent only.
20. IpsTabs → wrap MUI Tabs/Tab. Stateless & fully controlled (value required; selection by value, not index).
       onTabChange reports intent only. Always emit tab/panel aria ids from idPrefix; renderPanels (keepMounted) optional.
       Per-tab icon/badge/disabled/error are consumer-controlled and visual only.
21. IpsDialog → wrap MUI Dialog/DialogTitle/DialogContent/DialogActions. Generic popup/modal.
       Stateless & fully controlled (open required). onClose reports intent only
       (reason: backdropClick | escapeKeyDown | closeButton) and NEVER closes itself.
       Render children verbatim (component-agnostic) and actions in the footer (no built-in button behavior).
22. IpsDrawer → wrap MUI Drawer. Generic sliding panel; same controlled/onClose contract as IpsDialog.
       anchor left/right/top/bottom; size maps to width (left/right) or height (top/bottom); variant
       temporary/persistent/permanent. Pinned header/footer with independently scrolling content.
23. IpsCarousel → composed from MUI primitives (NO third-party carousel dep). items: ReactNode[] rendered verbatim.
       DOCUMENTED EXCEPTION to the stateless rule: supports BOTH uncontrolled (internal index + timer, the auto-run
       behavior) and controlled (activeIndex + onIndexChange). Auto-play on interval, pause on hover/focus, clear
       timer on unmount, honor prefers-reduced-motion. Bottom dots, manual arrows (showArrows), WAI-ARIA carousel.

END OF SPEC — @company/ui v2.0