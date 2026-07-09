# IPS UI Library

ספריית קומפוננטים מבוססת React + MUI לשימוש פנימי.

---

## תוכן עניינים

- [התקנה](#התקנה)
- [הגדרת הסביבה](#הגדרת-הסביבה)
- [תמיכה ב-RTL](#תמיכה-ב-rtl)
- [Theming](#theming)
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
  - [IpsDataTable](#ipsdatatable)
  - [IpsFileUpload](#ipsfileupload)
  - [IpsRichTextEditor](#ipsrichtexteditor)
  - [IpsStepper](#ipsstepper)
  - [IpsTabs](#ipstabs)
  - [IpsDialog](#ipsdialog)
  - [IpsDrawer](#ipsdrawer)
  - [IpsCarousel](#ipscarousel)
  - [IpsThemeProvider](#ipsthemeprovider)
  - [IpsRtlProvider](#ipsrtlprovider)
- [Hooks](#hooks)
  - [useToast](#usetoast)
- [TypeScript](#typescript)
- [סקריפטים לפיתוח](#סקריפטים-לפיתוח)

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

`IpsTimePicker` משתמש ב-Moment.js (מבונדל בספריה) — אם משתמשים בו, ערכים מועברים/מתקבלים מסוג `Moment`.

---

## הגדרת הסביבה

עטפו את האפליקציה ב-`IpsThemeProvider` — זה נותן לכם בבת אחת את ה-theme של IPS וגם RTL מלא (cache של Emotion + `direction` + `dir`), בלי שתצטרכו להרכיב את זה ידנית:

```tsx
import { IpsThemeProvider, IpsToastProvider } from '@ips/ui-library'

function App() {
  return (
    <IpsThemeProvider>
      <IpsToastProvider>
        {/* שאר האפליקציה */}
      </IpsToastProvider>
    </IpsThemeProvider>
  )
}
```

ברירת המחדל היא `direction="rtl"` (מתאים לרוב הצרכנים של הספריה). לאפליקציה LTR:

```tsx
<IpsThemeProvider direction="ltr">
  <App />
</IpsThemeProvider>
```

`IpsThemeProvider` הוא ה-API המומלץ — הוא מרכיב מתחת למכסה: `CacheProvider` (RTL/LTR), `ThemeProvider` עם ה-theme של IPS, `CssBaseline`, ו-`dir` על אלמנט שורש. לתפריט שליטה עדינה יותר (cache בלבד, theme מותאם משלכם, כיוון דינמי לפי שפה וכו') ראו [תמיכה ב-RTL](#תמיכה-ב-rtl).

---

## תמיכה ב-RTL

הספריה כוללת תמיכה מובנית ב-RTL באמצעות [`stylis-plugin-rtl`](https://www.npmjs.com/package/stylis-plugin-rtl), שמהפך אוטומטית את כל המאפיינים הפיזיים ב-CSS (`margin-left` ↔ `margin-right`, `left` ↔ `right`, פינות `border-radius` וכו').

### עטיפת האפליקציה (מומלץ — `IpsThemeProvider`)

```tsx
import { IpsThemeProvider } from '@ips/ui-library'

function App() {
  return (
    <IpsThemeProvider> {/* direction="rtl" כברירת מחדל */}
      {/* שאר האפליקציה */}
    </IpsThemeProvider>
  )
}
```

`IpsThemeProvider` הוא ה-wrapper היחיד שצריך בשורש האפליקציה — הוא מספק **גם** את ה-theme של IPS **וגם** RTL מלא (Emotion cache, `direction`, `CssBaseline`, ו-`dir` על אלמנט שורש), כך שה-theme וה-RTL מגיעים שניהם "מאצלנו" ולא נשארים תלויים בהרכבה ידנית של הצרכן.

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `direction` | `'rtl' \| 'ltr'` | `'rtl'` | כיוון טקסט/layout — קובע גם איזה Emotion cache נוצר |
| `mode` | `'light' \| 'dark'` | `'light'` | פלטת הצבעים של IPS, כשלא מועבר `theme` מותאם |
| `theme` | `Theme` | — | עקיפה מלאה של ה-theme הבסיסי (למשל theme מותאם שבניתם עם `createIpsTheme`) |

### עטיפה ידנית (advanced — `IpsRtlProvider`)

לשליטה עדינה יותר (לדוגמה: לעטוף רק חלק מהעץ ב-cache שונה, או להרכיב theme בעצמכם) אפשר להשתמש בקומפוננטה הבסיסית `IpsRtlProvider`, שמספקת *רק* את ה-Emotion cache (בלי theme, בלי `dir`):

```tsx
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { IpsRtlProvider, ipsTheme } from '@ips/ui-library'

const rtlTheme = createTheme(ipsTheme, { direction: 'rtl' })

function App() {
  return (
    <IpsRtlProvider>
      <ThemeProvider theme={rtlTheme}>
        <CssBaseline />
        <div dir="rtl">
          {/* שאר האפליקציה */}
        </div>
      </ThemeProvider>
    </IpsRtlProvider>
  )
}
```

- `IpsRtlProvider` חייב לעטוף את `ThemeProvider` (ולא להפך) — ה-cache של Emotion צריך להיות קיים כשנוצרים styled components.
- יש למקם את `IpsRtlProvider` פעם אחת בשורש האפליקציה (לא בכל קומפוננטה), אחרת נוצר Emotion cache חדש בכל רינדור.

### פונקציות עזר (`rtlUtils`)

| Export | תיאור |
|---|---|
| `IpsRtlProvider` | קומפוננטת עטיפה — `CacheProvider` של Emotion עם `stylis-plugin-rtl` מוגדר מראש (cache בלבד, ללא theme). |
| `createRtlCache()` | יוצרת Emotion cache עם הפלאגין של RTL — לשימוש כש-`IpsRtlProvider`/`IpsThemeProvider` לא מספיקים (שליטה ידנית ב-cache). |
| `createLtrCache()` | Emotion cache רגיל (ללא היפוך) — שימושי כשצריך לתמוך בו-זמנית גם ב-LTR. |
| `isRtl(locale?: string)` | מחזירה `true` עבור קידומות שפה `ar`, `he`, `fa`, `ur`. |
| `directionFor(locale?: string)` | מחזירה `'rtl'` או `'ltr'` לפי locale — נוח להזרמה ל-`<IpsThemeProvider direction={...}>` או ל-`createTheme({ direction })`. |

### תמיכה דינמית בשתי הכיוונים (החלפת שפה זמן ריצה)

הדרך הקלה ביותר היא להזרים את הכיוון הנגזר מה-locale ישירות ל-`IpsThemeProvider`:

```tsx
import { IpsThemeProvider, directionFor } from '@ips/ui-library'

<IpsThemeProvider direction={directionFor(locale)}>
  {children}
</IpsThemeProvider>
```

ואם צריך שליטה ידנית מלאה (cache/theme בעצמכם):

```tsx
import { CacheProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { createRtlCache, createLtrCache, directionFor, ipsTheme } from '@ips/ui-library'

const direction = directionFor(locale) // 'rtl' | 'ltr'
const cache = direction === 'rtl' ? createRtlCache() : createLtrCache()
const theme = createTheme(ipsTheme, { direction })

<CacheProvider value={cache}>
  <ThemeProvider theme={theme}>
    <div dir={direction}>{children}</div>
  </ThemeProvider>
</CacheProvider>
```

### `rtl` prop על קומפוננטות בודדות

חלק מהקומפוננטות (בעיקר overlays שמרונדרים ב-portal ולכן לא תמיד יורשים כיוון מה-DOM) מקבלות גם prop `rtl` ישיר, לכפיית כיוון בלי תלות ב-theme האמביינטי:

`IpsDatePicker` · `IpsDateTimePicker` · `IpsDialog` · `IpsDrawer` · `IpsCarousel`

---

## Theming

```tsx
import { createIpsTheme, ipsTheme } from '@ips/ui-library'

const lightTheme = ipsTheme               // = createIpsTheme('light'), מוכן מראש
const darkTheme  = createIpsTheme('dark')
```

`createIpsTheme(mode)` בונה `Theme` של MUI מתוך design tokens (פלטה, spacing, radius, טיפוגרפיה, צבעי גרפים) שמיוצרים מ-Figma, ומחיל style overrides ייעודיים לקומפוננטות IPS (inputs, buttons, switches, chips, menus וכו'). אפשר לשרשר עליו עוד הגדרות (כמו `direction: 'rtl'`) באמצעות `createTheme(ipsTheme, { ... })`.

פלטות גרפים זמינות תחת `theme.custom.charts.mono` / `theme.custom.charts.categorical`; טוקני spacing/radius זמינים תחת `theme.custom.spacing` / `theme.custom.radius`.

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
| `required` | `boolean` | — | שדה חובה — מציג כוכבית אדומה בכותרת |
| `type="search"` | `string` | — | מציג אייקון חיפוש אוטומטי |
| `readOnly` | `boolean` | `false` | שדה לקריאה בלבד |
| `startAdornment` | `ReactNode` | — | אייקון בתחילת השדה |
| `endAdornment` | `ReactNode` | — | אייקון בסוף השדה |
| `error` | `boolean` | — | מצב שגיאה |
| `helperText` | `string` | — | טקסט עזר / שגיאה |

---

### IpsTextArea

שדה טקסט מרובה שורות.

```tsx
import { IpsTextArea } from '@ips/ui-library'

<IpsTextArea
  label="הערות"
  rows={4}
  wide
  value={text}
  onChange={(e) => setText(e.target.value)}
  error={hasError}
  helperText="שגיאה בשדה זה"
/>
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `rows` | `number` | — | מספר שורות |
| `wide` | `boolean` | `false` | רוחב כפול (576px במקום 288px) |
| `required` | `boolean` | — | שדה חובה — כוכבית אדומה בכותרת |
| `error` | `boolean` | — | מציג שגיאה עם אייקון בהלפר טקסט |

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
| `value` | `string \| number \| (string \| number)[]` | — | ערך נבחר |
| `onChange` | `(value) => void` | — | callback בשינוי |
| `multiple` | `boolean` | `false` | בחירה מרובה |
| `readOnly` | `boolean` | `false` | לקריאה בלבד |
| `disabled` | `boolean` | `false` | מנטרל |
| `error` | `boolean` | — | מצב שגיאה |

---

### IpsAutocomplete

שדה חיפוש עם השלמה אוטומטית. גנרי — תומך בכל סוג נתון.

```tsx
import { IpsAutocomplete } from '@ips/ui-library'

const options = [{ label: 'תל אביב', value: 'tlv' }, { label: 'ירושלים', value: 'jlm' }]

<IpsAutocomplete
  options={options}
  label="עיר"
  placeholder="חפש עיר..."
  multiple={false}
  showCheckboxes={false}
  loading={isLoading}
  value={city}
  onChange={(_, val) => setCity(val)}
  getOptionLabel={(o) => o.label}
/>
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `options` | `T[]` | חובה | רשימת הערכים (generic) |
| `multiple` | `boolean` | `false` | בחירה מרובה |
| `showCheckboxes` | `boolean` | — | הצג checkboxes בבחירה מרובה |
| `loading` | `boolean` | `false` | מצב טעינה |
| `disabled` | `boolean` | `false` | מנטרל |

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
  disabled={false}
  placeholder="בחר אחד או יותר..."
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
  disabled={false}
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
  indeterminate={false}
  color="primary"
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
  color="primary"
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
| `'link'` | כפתור בסגנון טקסט/קישור |

| Prop | סוג | תיאור |
|------|-----|-------|
| `buttonType` | `IpsButtonType` | סוג הכפתור |
| `variant` | `'contained' \| 'outlined'` | סגנון הכפתור |
| `startIcon` | `ReactNode` | אייקון לפני הטקסט |
| `loading` | `boolean` | מציג spinner ומנטרל לחיצה |
| `disabled` | `boolean` | מנטרל את הכפתור |

---

### IpsIconButton

כפתור אייקון עם tooltip.

```tsx
import { IpsIconButton } from '@ips/ui-library'
import DeleteIcon from '@mui/icons-material/Delete'

<IpsIconButton
  icon={<DeleteIcon />}
  tooltip="מחק"
  size="medium"
  color="error"
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
| `minDate` / `maxDate` | `Date` | — | טווח תאריכים מותר |
| `readOnly` | `boolean` | `false` | לקריאה בלבד |
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
  rtl={true}
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
  ampm={false}
  minTime={moment('09:00', 'HH:mm')}
  maxTime={moment('17:00', 'HH:mm')}
  error={hasError}
  helperText="שדה חובה"
/>
```

> הערה: `IpsTimePicker` משתמש ב-Moment.js. `value` ו-`onChange` הם מסוג `Moment`.

---

### IpsAccordion

אלמנט מתקפל.

```tsx
import { IpsAccordion } from '@ips/ui-library'

<IpsAccordion summary="פרטים נוספים" defaultExpanded={false} disabled={false}
  onChange={(_, expanded) => console.log(expanded)}>
  <p>תוכן מורחב...</p>
</IpsAccordion>
```

| Prop | סוג | תיאור |
|------|-----|-------|
| `summary` | `ReactNode` | כותרת (תמיד גלויה, חובה) |
| `children` | `ReactNode` | תוכן מורחב (חובה) |
| `defaultExpanded` | `boolean` | פתוח כברירת מחדל |
| `disabled` | `boolean` | מנטרל פתיחה/סגירה |
| `onChange` | `(e, expanded) => void` | callback על שינוי |

---

### IpsToolTips

Tooltip. מרחיב את `Tooltip` של MUI.

```tsx
import { IpsToolTips } from '@ips/ui-library'

<IpsToolTips title="הסבר נוסף" placement="top" arrow>
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
import { useToast, TOAST_TYPES } from '@ips/ui-library'

function MyComponent() {
  const addToast = useToast() // אליאס זמין גם: useIpsToast

  return (
    <button onClick={() => addToast(TOAST_TYPES.SUCCESS, 'הפעולה הצליחה!')}>
      שמור
    </button>
  )
}
```

| `TOAST_TYPES` | תיאור |
|---|---|
| `SUCCESS` (`'success'`) | הצלחה (ירוק) |
| `INFO` (`'info'`) | מידע (כחול) |
| `WARNING` (`'warning'`) | אזהרה (כתום) |
| `DANGER` (`'danger'`) | שגיאה (אדום) |

| Prop של Provider | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `position` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left'` | `'bottom-right'` | מיקום |
| `deleteTime` | `number` | `3000` | זמן היעלמות (ms) |
| `maxToasts` | `number` | `5` | מקסימום הודעות בו-זמנית |

---

### IpsTable

טבלה קלה ופשוטה לתצוגת נתונים (ללא ספריית data-grid חיצונית).

```tsx
import { IpsTable } from '@ips/ui-library'

const columns = [
  { key: 'name', label: 'שם', width: 200 },
  { key: 'status', label: 'סטטוס', width: 120 },
]

const rows = [
  { name: 'ישראל ישראלי', status: 'פעיל' },
  { name: 'חנה כהן', status: 'חופשה' },
]

<IpsTable
  columns={columns}
  rows={rows}
  striped
  dense={false}
  stickyHeader
  maxHeight={300}
  emptyText="אין נתונים להצגה"
  onRowClick={(e, row) => console.log(row)}
/>
```

עמודה בודדת תומכת גם ברנדר מובנה (`type`) או ברנדר מלא (`render`):

```tsx
{
  key: 'avatar', label: 'תמונה', width: 70,
  type: 'image', imageSrc: (row) => row.avatar, imageProps: { width: 36, rounded: true },
},
{
  key: 'name', label: 'שם', type: 'link', href: (row) => row.profile, linkTarget: '_blank',
},
{
  key: 'status', label: 'סטטוס',
  render: (value) => <Chip label={value} color={value === 'פעיל' ? 'success' : 'default'} />,
}
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `columns` | `IpsTableColumn<Row>[]` | חובה | הגדרות עמודות (`key`, `label`, `width`, `wrap`, `type`, `render`) |
| `rows` | `Row[]` | חובה | מערך שורות |
| `maxHeight` | `number \| string` | — | גובה מקסימלי + overflow:auto |
| `stickyHeader` | `boolean` | `false` | כותרת קבועה בגלילה (דורש `maxHeight`) |
| `wrap` | `'ellipsis' \| 'wrap' \| 'nowrap'` | `'ellipsis'` | ברירת מחדל לגלישת טקסט לכל העמודות |
| `onRowClick` / `onRowDoubleClick` | `(e, row, idx) => void` | — | לחיצה / לחיצה כפולה על שורה |
| `hover` | `boolean` | auto | hover highlight |
| `getRowId` | `(row, i) => string \| number` | `row.id ?? i` | מפתח React יציב לכל שורה |
| `striped` | `boolean` | `true` | שורות זוגיות בצבע אפור |
| `dense` | `boolean` | `false` | ריווח מצומצם |
| `emptyText` | `string` | `'No data'` | טקסט כשאין שורות |

---

### IpsDataTable

טבלת נתונים מתקדמת מבוססת TanStack Table (מבונדל). תומכת בעריכה, מחיקה, פגינציה, סינון, מיון, שורות מורחבות ופעולות מותאמות.

```tsx
import { IpsDataTable } from '@ips/ui-library'
import type { ColumnDef } from '@ips/ui-library'

type Employee = { id: number; name: string; department: string }

const columns: ColumnDef<Employee>[] = [
  { accessorKey: 'name', header: 'שם', meta: { editable: { type: 'text', mode: 'click' }, width: 200 } },
  {
    accessorKey: 'department', header: 'מחלקה',
    meta: { editable: { type: 'select', options: [
      { label: 'פיתוח', value: 'dev' },
      { label: 'תמיכה', value: 'support' },
    ]}},
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
  size="md"
/>
```

**שורה מורחבת (expandedContent):**

```tsx
<IpsDataTable
  data={data}
  columns={columns}
  expandedContent={(row) => (
    <ExpandedRow title={`פרויקטים של ${row.name}`} subData={row.projects} subColumns={projectColumns} />
  )}
/>
```

| Prop | סוג | תיאור |
|------|-----|-------|
| `data` | `T[]` | מערך הנתונים (חובה) |
| `columns` | `ColumnDef<T>[]` | הגדרת עמודות (TanStack) (חובה) |
| `onSave` | `(original, updated) => Promise<void>` | שמירה מוטבעת — לחיצה על 🖊 לעריכה |
| `onDelete` | `(row: T) => void` | מחיקה עם אישור dialog |
| `customActions` | `ActionDef<T>[]` | פעולות מותאמות לכל שורה |
| `expandedContent` | `(row: T) => ReactNode` | תוכן שורה מורחבת |
| `pagination` | `PaginationConfig \| false` | הגדרות פגינציה |
| `filtering` | `boolean \| FilterConfig` | סינון גלובלי / לפי עמודה |
| `sorting` | `boolean \| SortingState` | מיון |
| `variant` | `'default' \| 'bordered' \| 'striped'` | סגנון טבלה |
| `size` | `'sm' \| 'md' \| 'lg'` | גודל שורה |
| `isLoading` | `boolean` | מצב טעינה — Skeleton |

הספריה מייצאת גם את אבני הבניין הפנימיים לבניית layout מותאם: `flexRender`, `TableHeader`, `TableBody`, `TableFooter`, `DataCell`, `EditableCell`, `ActionCell`, `ExpandCell`, `ExpandedRow`, `SkeletonRows`, `DeleteConfirmDialog`.

---

### IpsFileUpload

קומפוננט העלאת קבצים עם drag & drop, מצלמה, צילום מסך וסריקת מסמכים.

```tsx
import { IpsFileUpload } from '@ips/ui-library'

<IpsFileUpload
  sviva="dev"
  system="my-sharepoint-site"
  uploadParams={{ entityId: '123', entityType: 'contract' }}
  camera
  screenshot
  scan
  multiple
  maxFileSizeMB={10}
  accept={['image/*', '.pdf', '.docx']}
  onSaveSuccess={(results) => console.log('הועלה:', results)} // { name, path }[]
  onSaveError={(err) => console.error(err)}
  onBeforeSave={async () => true} // ולידציה אסינכרונית לפני שמירה
/>
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `sviva` | `string` | חובה | סביבה (dev/staging/prod) — לבניית ה-URL |
| `system` | `string` | חובה | שם אתר SharePoint — יעד ההעלאה |
| `uploadParams` | `Record<string, string>` | — | מטה-דאטה לשמירה עם כל קובץ |
| `containerId` | `string` | — | מזהה ייחודי ל-Dynamsoft DWT (תכונת הסריקה) |
| `camera` | `boolean` | `false` | כפתור "מצלמה" |
| `screenshot` | `boolean` | `false` | כפתור "צילום מסך" |
| `scan` | `boolean` | `false` | כפתור "סריקה" (Dynamsoft DWT / fallback למצלמה) |
| `maxFileSizeMB` | `number` | `10` | גודל קובץ מקסימלי |
| `accept` | `string[]` | — | סוגי קבצים מותרים, למשל `['image/*', '.pdf']` |
| `multiple` | `boolean` | `true` | אפשר בחירת מספר קבצים |
| `disabled` | `boolean` | `false` | מנטרל את כל האינטראקציות |
| `onBeforeSave` | `() => Promise<boolean>` | — | ולידציה אסינכרונית; `false` חוסם את השמירה |
| `onSaveSuccess` | `(results: UploadResult[]) => void` | — | callback לאחר העלאה מוצלחת |
| `onSaveError` | `(error: unknown) => void` | — | callback כשהעלאה נכשלת |

---

### IpsRichTextEditor

עורך טקסט עשיר (Rich Text) מבוסס TipTap (מבונדל).

```tsx
import { IpsRichTextEditor, DEFAULT_TOOLBAR } from '@ips/ui-library'

// Controlled
<IpsRichTextEditor
  label="תיאור"
  value={html}
  onChange={(htmlString) => setHtml(htmlString)}
  placeholder="הכנס תיאור..."
  dir="auto"
  minHeight={200}
  toolbar={DEFAULT_TOOLBAR}
  error={hasError}
  helperText="שדה חובה"
/>

// Read-only
<IpsRichTextEditor defaultValue={html} readOnly minHeight={80} />
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `value` | `string` | — | HTML מבוקר — מסונכרן עם state חיצוני |
| `onChange` | `(html: string) => void` | — | נקרא בכל שינוי — מחזיר HTML מלא |
| `defaultValue` | `string` | — | ערך התחלתי (לא מבוקר) |
| `readOnly` | `boolean` | `false` | מסתיר toolbar, מנטרל עריכה |
| `disabled` | `boolean` | `false` | opacity 0.5, pointerEvents none |
| `error` / `helperText` | `boolean` / `string` | — | מסגרת אדומה + טקסט שגיאה |
| `dir` | `'rtl' \| 'ltr' \| 'auto'` | `'auto'` | כיוון אזור התוכן |
| `minHeight` | `string \| number` | — | גובה מינימלי של אזור הכתיבה |
| `toolbar` | `IpsRteToolbarConfig` | `DEFAULT_TOOLBAR` | עקיפת קבוצות ה-toolbar |

---

### IpsStepper

קומפוננטת שלבים (wizard) — שלבים אופקיים/אנכיים, עם תוכן, אייקונים וסטטוסים מותאמים.

```tsx
import { IpsStepper } from '@ips/ui-library'
import type { IpsStepItem } from '@ips/ui-library'

const steps: IpsStepItem[] = [
  { label: 'הגדרות', description: 'הגדרת הקמפיין' },
  { label: 'יצירת קבוצת מודעות', optional: true },
  { label: 'סקירה והפעלה' },
]

<IpsStepper
  steps={steps}
  activeStep={activeStep}
  orientation="horizontal"
  nonLinear
  onStepClick={(i) => setActiveStep(i)}
/>
```

| Prop | סוג | תיאור |
|------|-----|-------|
| `steps` | `IpsStepItem[]` | מערך הגדרות שלבים (`label`, `description`, `optional`, `status: 'error'\|'warning'`, `disabled`, `icon`, `content`) |
| `activeStep` | `number` | השלב הפעיל הנוכחי (0-based) |
| `orientation` | `'horizontal' \| 'vertical'` | כיוון הפריסה |
| `nonLinear` | `boolean` | מאפשר לחיצה על כל שלב |
| `onStepClick` | `(i, step) => void` | נקרא בלחיצה על שלב (כש-`nonLinear`) |
| `alternativeLabel` | `boolean` | תוויות מתחת לאייקונים |
| `renderStepIcon` / `renderStepLabel` / `renderConnector` | `(ctx) => ReactNode` | render-props לעיצוב מותאם |

---

### IpsTabs

בר טאבים עם panels מובנים אופציונליים.

```tsx
import { IpsTabs } from '@ips/ui-library'
import type { IpsTabItem } from '@ips/ui-library'

const tabs: IpsTabItem[] = [
  { value: 'details', label: 'פרטים', content: <DetailsPanel /> },
  { value: 'payment', label: 'תשלום', error: hasPaymentError, badge: hasPaymentError ? '!' : undefined, content: <PaymentPanel /> },
]

<IpsTabs
  tabs={tabs}
  value={activeTab}
  onTabChange={(v) => setActiveTab(v)}
  orientation="horizontal"
  variant="standard"
  renderPanels
/>
```

| Prop | סוג | תיאור |
|------|-----|-------|
| `tabs` | `IpsTabItem[]` | תיאורי טאבים (`value`, `label`, `icon`, `badge`, `disabled`, `error`, `content`) |
| `value` | `string \| number` | הטאב הפעיל — controlled, באחריות הצרכן (חובה) |
| `onTabChange` | `(value, tab) => void` | מדווח על כוונת שינוי — הצרכן מחליט אם לעדכן `value` |
| `orientation` | `'horizontal' \| 'vertical'` | כיוון הבר |
| `variant` | `'standard' \| 'scrollable' \| 'fullWidth'` | וריאנט של MUI Tabs |
| `centered` | `boolean` | מרכז את הטאבים (standard + horizontal בלבד) |
| `renderPanels` | `boolean` | רינדור אלמנטי `role="tabpanel"` מובנים מתוך `tab.content` |
| `keepMounted` | `boolean` | משאיר את כל ה-panels מורכבים, מסתיר את הלא-פעילים |

---

### IpsDialog

מודאל מבוקר — הצרכן הוא הבעלים של `open`/`onClose`.

```tsx
import { IpsDialog } from '@ips/ui-library'
import type { IpsDialogCloseReason } from '@ips/ui-library'

<IpsDialog
  open={open}
  title="ערוך משתמש"
  onClose={(reason: IpsDialogCloseReason) => setOpen(false)}
  maxWidth="sm"
  fullWidth
  rtl
  actions={
    <>
      <IpsButton buttonType="clean" onClick={() => setOpen(false)}>ביטול</IpsButton>
      <IpsButton buttonType="save" onClick={handleSave}>שמור</IpsButton>
    </>
  }
>
  <IpsTextField label="שם פרטי" />
</IpsDialog>
```

| Prop | סוג | תיאור |
|------|-----|-------|
| `open` | `boolean` | חובה — controlled |
| `onClose` | `(reason) => void` | מדווח כוונה בלבד; `reason`: `backdropClick` \| `escapeKeyDown` \| `closeButton` |
| `title` / `icon` | `ReactNode` | כותרת הדיאלוג ואייקון אופציונלי לידה |
| `children` | `ReactNode` | תוכן הגוף |
| `actions` | `ReactNode` | תוכן הפוטר — הצרכן מעביר כפתורים ומחבר `onClick` |
| `maxWidth` | `'xs'\|'sm'\|'md'\|'lg'\|'xl'\|number\|false` | רוחב מקסימלי |
| `fullWidth` / `fullScreen` / `fullScreenBreakpoint` | `boolean` / `boolean` / breakpoint | פריסה מלאה |
| `scroll` | `'paper' \| 'body'` | התנהגות גלילה לתוכן גבוה |
| `dividers` / `showCloseButton` | `boolean` | קווי הפרדה / כפתור X בכותרת |
| `disableBackdropClose` / `disableEscapeKeyDown` | `boolean` | חוסם סגירה ב-backdrop / Esc |
| `transition` | `'fade'\|'grow'\|'slide'\|'zoom'` | אנימציית כניסה/יציאה |
| `loading` | `boolean` | שכבת spinner (באחריות הצרכן) |
| `rtl` | `boolean` | כפיית כיוון RTL על המשטח |
| `renderHeader` / `renderFooter` | `(ctx) => ReactNode` | עקיפה מלאה של אזור הכותרת/פוטר |

---

### IpsDrawer

פאנל צד מבוקר — אותו חוזה `open`/`onClose` כמו `IpsDialog`.

```tsx
import { IpsDrawer } from '@ips/ui-library'
import type { IpsDrawerCloseReason } from '@ips/ui-library'

<IpsDrawer
  open={open}
  anchor="right"
  variant="temporary"
  size={400}
  title="סינון ועריכה"
  onClose={(reason: IpsDrawerCloseReason) => setOpen(false)}
  actions={<IpsButton buttonType="save" onClick={handleApply}>החל</IpsButton>}
>
  <IpsTextField label="שם פרטי" />
</IpsDrawer>
```

| Prop | סוג | תיאור |
|------|-----|-------|
| `open` | `boolean` | חובה — controlled |
| `onClose` | `(reason) => void` | מדווח כוונה בלבד; `reason`: `backdropClick` \| `escapeKeyDown` \| `closeButton` |
| `anchor` | `'left'\|'right'\|'top'\|'bottom'` | הצד שממנו נכנס המגירה (ברירת מחדל: `right`) |
| `variant` | `'temporary'\|'persistent'\|'permanent'` | וריאנט של MUI Drawer |
| `size` | `number \| string` | רוחב (left/right) או גובה (top/bottom); מספר = px |
| `title` / `icon` | `ReactNode` | כותרת הדרור ואייקון אופציונלי |
| `actions` | `ReactNode` | תוכן הפוטר |
| `dividers` / `showCloseButton` / `hideBackdrop` | `boolean` | אפשרויות תצוגה |
| `disableBackdropClose` / `disableEscapeKeyDown` | `boolean` | חוסם סגירה (temporary בלבד / Esc) |
| `loading` | `boolean` | שכבת spinner ממורכזת |
| `rtl` | `boolean` | כפיית כיוון RTL על המשטח |
| `renderHeader` / `renderFooter` | `(ctx) => ReactNode` | עקיפה מלאה של הכותרת/פוטר |

---

### IpsCarousel

קרוסלת תכנים (slides).

```tsx
import { IpsCarousel } from '@ips/ui-library'

<IpsCarousel
  items={slides} // ReactNode[]
  autoPlay
  interval={3000}
  loop
  pauseOnHover
  swipeable
  showArrows
  showDots
  dotsClickable
  transition="slide"
  rtl
  onIndexChange={(index) => setCurrentIndex(index)}
/>
```

| Prop | סוג | תיאור |
|------|-----|-------|
| `items` | `ReactNode[]` | רשימת slides — כל אחד מרונדר כמות שהוא |
| `activeIndex` / `defaultIndex` | `number` | controlled / uncontrolled index |
| `onIndexChange` | `(index: number) => void` | נקרא בכל שינוי slide |
| `autoPlay` / `interval` | `boolean` / `number` | מעבר אוטומטי ומרווח הזמן (ms) |
| `loop` | `boolean` | חזרה לתחילה אחרי ה-slide האחרון |
| `pauseOnHover` | `boolean` | עצירה ב-hover/focus |
| `swipeable` | `boolean` | החלקה עם עכבר/מגע |
| `showArrows` / `showDots` / `dotsClickable` / `showPlayPause` | `boolean` | פקדי ניווט |
| `transition` | `'slide' \| 'fade'` | סוג אנימציה |
| `height` / `aspectRatio` | `number \| string` | גובה / יחס גובה-רוחב |
| `rtl` | `boolean` | כיוון RTL — הופך חיצים וכיוון החלקה |

---

### IpsThemeProvider

ה-wrapper המומלץ לשורש האפליקציה — מספק בבת אחת את ה-theme של IPS וגם RTL מלא. ראו פירוט מלא ב-[תמיכה ב-RTL](#תמיכה-ב-rtl).

```tsx
import { IpsThemeProvider } from '@ips/ui-library'

<IpsThemeProvider> {/* direction="rtl", mode="light" כברירת מחדל */}
  <App />
</IpsThemeProvider>
```

| Prop | סוג | ברירת מחדל | תיאור |
|------|-----|-----------|-------|
| `direction` | `'rtl' \| 'ltr'` | `'rtl'` | כיוון טקסט/layout — קובע גם איזה Emotion cache נוצר |
| `mode` | `'light' \| 'dark'` | `'light'` | פלטת הצבעים, כשלא מועבר `theme` |
| `theme` | `Theme` | — | עקיפה מלאה של ה-theme הבסיסי |

---

### IpsRtlProvider

קומפוננטת בסיס (advanced) — מספקת *רק* את ה-Emotion cache עם `stylis-plugin-rtl`, בלי theme ובלי `dir`. לרוב המקרים מומלץ להשתמש ב-[IpsThemeProvider](#ipsthemeprovider) במקום. ראו פירוט מלא ב-[תמיכה ב-RTL](#תמיכה-ב-rtl).

```tsx
import { IpsRtlProvider, ipsTheme } from '@ips/ui-library'
import { ThemeProvider, createTheme } from '@mui/material'

<IpsRtlProvider>
  <ThemeProvider theme={createTheme(ipsTheme, { direction: 'rtl' })}>
    <div dir="rtl">
      <App />
    </div>
  </ThemeProvider>
</IpsRtlProvider>
```

> `IpsRtlProvider` עצמו לא מגדיר `dir="rtl"` או `direction: 'rtl'` בתמה — הוא רק מספק את ה-Emotion cache עם `stylis-plugin-rtl`. את `dir` ואת `direction` יש להגדיר בנפרד (כמו בדוגמה).

---

## Hooks

### useToast

גישה למערכת ה-toast מכל קומפוננט. דורש `IpsToastProvider` בשורש. זמין גם תחת האליאס `useIpsToast`.

```tsx
import { useToast, TOAST_TYPES } from '@ips/ui-library'

function SaveButton() {
  const addToast = useToast()

  const handleSave = async () => {
    try {
      await save()
      addToast(TOAST_TYPES.SUCCESS, 'הנתונים נשמרו בהצלחה')
    } catch {
      addToast(TOAST_TYPES.DANGER, 'שגיאה בשמירה')
    }
  }

  return <IpsButton buttonType="save" onClick={handleSave}>שמור</IpsButton>
}
```

---

## TypeScript

הספריה כוללת טיפוסים מובנים. אין צורך בהתקנה נפרדת.

```tsx
import type {
  IpsButtonProps, IpsDataTableProps, IpsSelectOption,
  IpsStepItem, IpsTabItem, IpsDialogCloseReason, IpsDrawerCloseReason,
  IpsThemeProviderProps, IpsThemeDirection,
} from '@ips/ui-library'
```

---

## סקריפטים לפיתוח

```bash
npm run dev          # שרת פיתוח עם demo
npm run storybook    # Storybook עם prop controls אינטראקטיביים
npm run build        # בנייה לספריה (dist/)
npm run build:demo   # בנייה לדמו
npm test             # הרצת בדיקות
npm run lint         # בדיקת ESLint
```

ראו גם [docs/ENVIRONMENT.md](docs/ENVIRONMENT.md) להגדרות סביבת פיתוח מומלצות (tsconfig, jest, eslint) לתורמים חדשים.
