# IPS UI Library

ספריית קומפוננטים מבוססת React + MUI לשימוש פנימי.

---

## תוכן עניינים

- [התקנה](#התקנה)
- [הגדרת הסביבה](#הגדרת-הסביבה)
- [קומפוננטים](#קומפוננטים)
  - [IpsTextField](#ipstextfield)
  - [IpsTextArea](#ipstextarea)
  - [IpsSelect](#ipsselect)
  - [IpsAutocomplete](#ipsautocomplete)
  - [IpsChipSelect](#ipschipselect)
  - [IpsPillSelect](#ipspillselect)
  - [IpsCheckBox](#ipscheckbox)
  - [IpsSwitch](#ipsswitch)
  - [IpsButton](#ipsbutton)
  - [IpsIconButton](#ipsiconbutton)
  - [IpsDatePicker](#ipsdatepicker)
  - [IpsDateTimePicker](#ipsdatetimepicker)
  - [IpsTimePicker](#ipstimepicker)
  - [IpsAccordion](#ipsaccordion)
  - [IpsToolTips](#ipstooltips)
  - [IpsToast](#ipstoast)
  - [IpsTable](#ipstable)
  - [IpsTableLight](#ipstablelight)
  - [IpsDataTable](#ipsdatatable)
  - [IpsFileUpload](#ipsfileupload)
  - [IpsRichTextEditor](#ipsrichtexteditor)
  - [IpsRtlProvider](#ipsrtlprovider)
- [Hooks](#hooks)
  - [useToast](#usetoast)
- [RTL Support](#rtl-support)
- [TypeScript](#typescript)

---

## התקנה

```bash
npm install @ips/ui-library
```

### Peer Dependencies

יש להתקין את החבילות הבאות בפרויקט הצורך:

```bash
npm install react react-dom \
  @mui/material @emotion/react @emotion/styled \
  @mui/x-date-pickers @mui/x-data-grid \
  date-fns
```

---

## הגדרת הסביבה

עטפו את האפליקציה ב-`ThemeProvider` של MUI ובספקי הספריה:

```tsx
import { ThemeProvider, CssBaseline } from '@mui/material'
import { IpsToastProvider } from '@ips/ui-library'
import { ipsTheme } from '@ips/ui-library'

function App() {
  return (
    <ThemeProvider theme={ipsTheme}>
      <CssBaseline />
      <IpsToastProvider>
        {/* שאר האפליקציה */}
      </IpsToastProvider>
    </ThemeProvider>
  )
}
```

לתמיכה ב-RTL ראו [IpsRtlProvider](#ipsrtlprovider).

---

## קומפוננטים

### IpsTextField

שדה טקסט רגיל. מרחיב את `TextField` של MUI.

```tsx
import { IpsTextField } from '@ips/ui-library'

<IpsTextField
  label="שם מלא"
  placeholder="הכנס שם..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
  error={hasError}
  helperText="שדה חובה"
  readOnly={false}
  startAdornment={<SearchIcon />}
  endAdornment={<ClearIcon />}
/>
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `label` | `ReactNode` | — | תווית השדה |
| `placeholder` | `string` | — | placeholder |
| `readOnly` | `boolean` | `false` | שדה לקריאה בלבד |
| `startAdornment` | `ReactNode` | — | אייקון בתחילת השדה |
| `endAdornment` | `ReactNode` | — | אייקון בסוף השדה |
| `error` | `boolean` | — | מצב שגיאה |
| `helperText` | `string` | — | טקסט עזר / שגיאה |

---

### IpsTextArea

שדה טקסט מרובה שורות עם מונה תווים אופציונלי.

```tsx
import { IpsTextArea } from '@ips/ui-library'

<IpsTextArea
  label="הערות"
  rows={4}
  maxLength={200}
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `rows` | `number` | — | מספר שורות מינימלי |
| `maxLength` | `number` | — | מקסימום תווים (מציג מונה) |

---

### IpsSelect

רשימה נפתחת. תומכת בבחירה בודדת ומרובה.

```tsx
import { IpsSelect } from '@ips/ui-library'

const options = [
  { label: 'אפשרות א', value: 'a' },
  { label: 'אפשרות ב', value: 'b' },
]

<IpsSelect
  label="בחר"
  options={options}
  value={selected}
  onChange={(val) => setSelected(val)}
  multiple={false}
  placeholder="בחר ערך..."
  error={hasError}
  helperText="שדה חובה"
/>
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `options` | `{ label: string, value: string \| number }[]` | חובה | רשימת הערכים |
| `value` | `string \| number \| string[] \| number[]` | — | ערך נבחר |
| `onChange` | `(value) => void` | — | callback בשינוי |
| `multiple` | `boolean` | `false` | בחירה מרובה |
| `readOnly` | `boolean` | `false` | לקריאה בלבד |
| `placeholder` | `string` | — | placeholder |

---

### IpsAutocomplete

שדה חיפוש עם השלמה אוטומטית. גנרי — תומך בכל סוג נתון.

```tsx
import { IpsAutocomplete } from '@ips/ui-library'

const options = ['תל אביב', 'ירושלים', 'חיפה']

<IpsAutocomplete
  options={options}
  label="עיר"
  placeholder="חפש עיר..."
  showCheckboxes={false}
  value={city}
  onChange={(_, val) => setCity(val)}
/>
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `options` | `T[]` | חובה | רשימת הערכים |
| `label` | `ReactNode` | — | תווית |
| `placeholder` | `string` | — | placeholder |
| `showCheckboxes` | `boolean` | — | הצג checkboxes (לבחירה מרובה) |

---

### IpsChipSelect

בחירה מרובה עם תצוגת chips.

```tsx
import { IpsChipSelect } from '@ips/ui-library'

<IpsChipSelect
  label="תגיות"
  options={[
    { label: 'React', value: 'react' },
    { label: 'TypeScript', value: 'ts' },
  ]}
  value={selected}
  onChange={(vals) => setSelected(vals)}
/>
```

---

### IpsPillSelect

בחירה עם כפתורי pill (מתאים לפילטרים).

```tsx
import { IpsPillSelect } from '@ips/ui-library'

<IpsPillSelect
  options={[
    { label: 'כל', value: 'all' },
    { label: 'פעיל', value: 'active' },
    { label: 'לא פעיל', value: 'inactive' },
  ]}
  value={filter}
  onChange={(val) => setFilter(val)}
  multiple={false}
  size="medium"
/>
```

---

### IpsCheckBox

תיבת סימון עם תווית.

```tsx
import { IpsCheckBox } from '@ips/ui-library'

<IpsCheckBox
  label="אני מסכים לתנאים"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
  labelPlacement="end"
/>
```

---

### IpsSwitch

מתג הפעלה/כיבוי.

```tsx
import { IpsSwitch } from '@ips/ui-library'

<IpsSwitch
  label="מצב פעיל"
  checked={active}
  onChange={(e) => setActive(e.target.checked)}
  labelPlacement="end"
/>
```

---

### IpsButton

כפתור עם סוגים מוגדרים מראש.

```tsx
import { IpsButton } from '@ips/ui-library'

<IpsButton buttonType="save" loading={isSaving} onClick={handleSave}>
  שמור
</IpsButton>

<IpsButton buttonType="add" onClick={handleAdd}>
  הוסף
</IpsButton>
```

| `buttonType` | תיאור |
|---|---|
| `'add'` | כפתור הוספה |
| `'save'` | כפתור שמירה |
| `'clean'` | כפתור ניקוי |
| `'primary'` | כפתור ראשי |
| `'secondary'` | כפתור משני |

| Prop | סוג | תיאור |
|------|-----|-------|
| `buttonType` | `IpsButtonType` | סוג הכפתור |
| `loading` | `boolean` | מציג spinner ומנטרל |

---

### IpsIconButton

כפתור אייקון עם tooltip.

```tsx
import { IpsIconButton } from '@ips/ui-library'
import DeleteIcon from '@mui/icons-material/Delete'

<IpsIconButton
  icon={<DeleteIcon />}
  tooltip="מחק"
  onClick={handleDelete}
/>
```

---

### IpsDatePicker

בחירת תאריך.

```tsx
import { IpsDatePicker } from '@ips/ui-library'

<IpsDatePicker
  label="תאריך לידה"
  value={date}
  onChange={(val) => setDate(val)}
  format="dd/MM/yyyy"
  minDate={new Date('2000-01-01')}
  maxDate={new Date()}
  error={hasError}
  helperText="תאריך לא תקין"
  rtl={true}
/>
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `value` | `Date \| null` | — | תאריך נבחר |
| `onChange` | `(Date \| null) => void` | — | callback |
| `format` | `string` | `'dd/MM/yyyy'` | פורמט תצוגה |
| `minDate` | `Date` | — | תאריך מינימלי |
| `maxDate` | `Date` | — | תאריך מקסימלי |
| `rtl` | `boolean` | `false` | כיוון RTL |

---

### IpsDateTimePicker

בחירת תאריך ושעה.

```tsx
import { IpsDateTimePicker } from '@ips/ui-library'

<IpsDateTimePicker
  label="מועד פגישה"
  value={dateTime}
  onChange={(val) => setDateTime(val)}
  format="dd/MM/yyyy HH:mm"
/>
```

---

### IpsTimePicker

בחירת שעה בלבד.

```tsx
import { IpsTimePicker } from '@ips/ui-library'
import type { Moment } from 'moment'

<IpsTimePicker
  label="שעת התחלה"
  value={time}
  onChange={(val: Moment | null) => setTime(val)}
  error={hasError}
  helperText="שדה חובה"
/>
```

> הערה: `IpsTimePicker` משתמש ב-Moment.js (מבונדל בספריה). `value` ו-`onChange` הם מסוג `Moment`.

---

### IpsAccordion

אלמנט מתקפל.

```tsx
import { IpsAccordion } from '@ips/ui-library'

<IpsAccordion summary="פרטים נוספים">
  <p>תוכן מורחב...</p>
</IpsAccordion>
```

| Prop | סוג | תיאור |
|------|-----|-------|
| `summary` | `ReactNode` | כותרת (תמיד גלויה) |
| `children` | `ReactNode` | תוכן מורחב |

---

### IpsToolTips

Tooltip. מרחיב את `Tooltip` של MUI.

```tsx
import { IpsToolTips } from '@ips/ui-library'

<IpsToolTips title="הסבר נוסף">
  <span>רחף עלי</span>
</IpsToolTips>
```

---

### IpsToast

מערכת הודעות. דורשת `IpsToastProvider` בשורש האפליקציה.

**הגדרה (פעם אחת בשורש):**

```tsx
import { IpsToastProvider } from '@ips/ui-library'

<IpsToastProvider
  position="bottom-right"
  deleteTime={3000}
  maxToasts={5}
>
  <App />
</IpsToastProvider>
```

**שימוש בכל מקום:**

```tsx
import { useIpsToast } from '@ips/ui-library'

function MyComponent() {
  const toast = useIpsToast()

  return (
    <button onClick={() => toast('success', 'הפעולה הצליחה!')}>
      שמור
    </button>
  )
}
```

| סוג Toast | תיאור |
|---|---|
| `'success'` | הצלחה (ירוק) |
| `'info'` | מידע (כחול) |
| `'warning'` | אזהרה (כתום) |
| `'danger'` | שגיאה (אדום) |

| Prop של Provider | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `position` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left'` | `'bottom-right'` | מיקום |
| `deleteTime` | `number` | `3000` | זמן היעלמות (ms) |
| `maxToasts` | `number` | `5` | מקסימום הודעות בו-זמנית |

---

### IpsTable

טבלת נתונים מלאה מבוססת MUI DataGrid.

```tsx
import { IpsTable } from '@ips/ui-library'
import type { GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'מזהה', width: 80 },
  { field: 'name', headerName: 'שם', width: 200 },
]

const rows = [
  { id: 1, name: 'ישראל ישראלי' },
  { id: 2, name: 'חנה כהן' },
]

<IpsTable
  rows={rows}
  columns={columns}
  loading={isLoading}
  pageSize={25}
  checkboxSelection
  onRowClick={(params) => console.log(params.row)}
/>
```

> הערה: כל שורה חייבת להכיל שדה `id` ייחודי.

---

### IpsTableLight

טבלה קלה ופשוטה ללא DataGrid.

```tsx
import { IpsTableLight } from '@ips/ui-library'

const columns = [
  { key: 'name', label: 'שם', width: 200 },
  { key: 'status', label: 'סטטוס' },
]

const rows = [
  { name: 'פרויקט א', status: 'פעיל' },
  { name: 'פרויקט ב', status: 'הושלם' },
]

<IpsTableLight
  columns={columns}
  rows={rows}
  striped
  dense
  stickyHeader
  emptyText="אין נתונים להצגה"
/>
```

---

### IpsDataTable

טבלת נתונים מתקדמת מבוססת TanStack Table (מבונדל). תומכת בעריכה, מחיקה, פגינציה, סינון, מיון ושורות מורחבות.

```tsx
import { IpsDataTable } from '@ips/ui-library'
import type { ColumnDef } from '@tanstack/react-table'

type Employee = { id: number; name: string; department: string }

const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'name',
    header: 'שם',
    meta: { editable: true, width: 200 },
  },
  {
    accessorKey: 'department',
    header: 'מחלקה',
    meta: {
      editable: { type: 'select', options: [
        { label: 'פיתוח', value: 'dev' },
        { label: 'תמיכה', value: 'support' },
      ]},
    },
  },
]

<IpsDataTable
  data={employees}
  columns={columns}
  onSave={async (original, updated) => await saveEmployee(updated)}
  onDelete={(row) => deleteEmployee(row.id)}
  pagination={{ pageSize: 20, showTotal: true }}
  filtering={{ global: true }}
  sorting
  variant="striped"
/>
```

**שורה מורחבת (expandedContent):**

```tsx
<IpsDataTable
  data={data}
  columns={columns}
  expandedContent={(row) => (
    <IpsDataTable
      data={row.children}
      columns={childColumns}
    />
  )}
/>
```

| Prop | סוג | תיאור |
|------|-----|-------|
| `data` | `T[]` | מערך הנתונים |
| `columns` | `ColumnDef<T>[]` | הגדרת עמודות (TanStack) |
| `onEdit` | `(row: T) => void` | callback עריכה חיצונית |
| `onDelete` | `(row: T) => void` | callback מחיקה |
| `onSave` | `(original, updated) => Promise<void>` | שמירה בתוך-טבלה |
| `expandedContent` | `(row: T) => ReactNode` | תוכן שורה מורחבת |
| `pagination` | `PaginationConfig \| false` | הגדרות פגינציה |
| `filtering` | `boolean \| FilterConfig` | סינון גלובלי / לפי עמודה |
| `sorting` | `boolean` | מיון |
| `variant` | `'default' \| 'bordered' \| 'striped'` | סגנון טבלה |
| `size` | `'sm' \| 'md' \| 'lg'` | גודל תאים |
| `isLoading` | `boolean` | מצב טעינה |

---

### IpsFileUpload

קומפוננט העלאת קבצים עם תמיכה ב-drag & drop, מצלמה וסריקה.

```tsx
import { IpsFileUpload } from '@ips/ui-library'

<IpsFileUpload
  sviva="dev"
  system="my-sharepoint-site"
  uploadParams={{ entityId: '123', entityType: 'contract' }}
  camera={true}
  screenshot={false}
  scan={false}
  multiple={true}
  maxFileSizeMB={10}
  accept={['image/*', '.pdf', '.docx']}
  onSaveSuccess={(results) => console.log('הועלה:', results)}
  onSaveError={(err) => console.error(err)}
/>
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `sviva` | `string` | חובה | סביבה (dev/staging/prod) |
| `system` | `string` | חובה | שם האתר ב-SharePoint |
| `uploadParams` | `Record<string, string>` | — | מטה-דאטה לשמירה |
| `camera` | `boolean` | `false` | כפתור מצלמה |
| `screenshot` | `boolean` | `false` | כפתור צילום מסך |
| `scan` | `boolean` | `false` | כפתור סריקה (Dynamsoft) |
| `maxFileSizeMB` | `number` | `10` | גודל קובץ מקסימלי |
| `accept` | `string[]` | — | סוגי קבצים מותרים |
| `multiple` | `boolean` | `true` | מספר קבצים |

---

### IpsRichTextEditor

עורך טקסט עשיר (Rich Text) מבוסס TipTap (מבונדל).

```tsx
import { IpsRichTextEditor } from '@ips/ui-library'

// Controlled
<IpsRichTextEditor
  label="תיאור"
  value={html}
  onChange={(htmlString) => setHtml(htmlString)}
  placeholder="הכנס תיאור..."
  dir="rtl"
  minHeight={200}
  maxHeight={400}
  error={hasError}
  helperText="שדה חובה"
/>

// Read-only
<IpsRichTextEditor
  value={html}
  readOnly
/>
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `value` | `string` | — | HTML מבוקר |
| `onChange` | `(html: string) => void` | — | callback בשינוי |
| `defaultValue` | `string` | — | ערך התחלתי (לא מבוקר) |
| `readOnly` | `boolean` | `false` | לקריאה בלבד (מסתיר toolbar) |
| `dir` | `'rtl' \| 'ltr' \| 'auto'` | `'auto'` | כיוון טקסט |
| `minHeight` | `string \| number` | `200` | גובה מינימלי |
| `maxHeight` | `string \| number` | — | גובה מקסימלי (גלילה) |
| `toolbar` | `IpsRteToolbarConfig` | כל הכלים | הגדרת סרגל כלים |

---

### IpsRtlProvider

עוטף את האפליקציה (או חלק ממנה) לתמיכה ב-RTL עם Emotion.

```tsx
import { IpsRtlProvider } from '@ips/ui-library'
import { ThemeProvider } from '@mui/material'
import { ipsTheme } from '@ips/ui-library'

<IpsRtlProvider>
  <ThemeProvider theme={ipsTheme}>
    <App />
  </ThemeProvider>
</IpsRtlProvider>
```

> `IpsRtlProvider` מגדיר `dir="rtl"` ומשתמש ב-`stylis-plugin-rtl` להיפוך אוטומטי של CSS.

---

## Hooks

### useToast

גישה למערכת ה-toast מכל קומפוננט. דורש `IpsToastProvider` בשורש.

```tsx
import { useIpsToast } from '@ips/ui-library'

function SaveButton() {
  const showToast = useIpsToast()

  const handleSave = async () => {
    try {
      await save()
      showToast('success', 'הנתונים נשמרו בהצלחה')
    } catch {
      showToast('danger', 'שגיאה בשמירה')
    }
  }

  return <IpsButton buttonType="save" onClick={handleSave}>שמור</IpsButton>
}
```

---

## RTL Support

לתמיכה מלאה ב-RTL:

1. עטפו את האפליקציה ב-`IpsRtlProvider`
2. השתמשו ב-`dir="rtl"` ב-`<html>` או ב-container הראשי
3. קומפוננטים כמו `IpsDatePicker` מקבלים prop `rtl={true}` לכיוון אייקונים

---

## TypeScript

הספריה כוללת טיפוסים מובנים. אין צורך בהתקנה נפרדת.

```tsx
import type { IpsButtonProps, IpsDataTableProps, IpsSelectOption } from '@ips/ui-library'
```

---

## סקריפטים לפיתוח

```bash
npm run dev          # שרת פיתוח עם demo
npm run build        # בנייה לספריה (dist/)
npm run build:demo   # בנייה לדמו
npm test             # הרצת בדיקות
npm run lint         # בדיקת ESLint
```
