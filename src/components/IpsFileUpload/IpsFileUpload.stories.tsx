import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { IpsFileUpload } from './IpsFileUpload'

const theme = createTheme({
  direction: 'rtl',
  palette: { primary: { main: '#1565C0', light: '#42A5F5', dark: '#0D47A1' } },
})

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <Box dir="rtl" sx={{ p: 3, maxWidth: 640 }}>
      <Story />
    </Box>
  </ThemeProvider>
)

const meta: Meta<typeof IpsFileUpload> = {
  title: 'Components/IpsFileUpload',
  component: IpsFileUpload,
  decorators: [withTheme],
  parameters: {
    docs: {
      description: {
        component: `
## IpsFileUpload

רכיב העלאת קבצים הכולל: גרירה ושחרור, עיון, מצלמה, צילום מסך חלקי וסריקה.

---

## 📷 מצלמה

לא דורש התקנה נוספת — משתמש ב-\`getUserMedia\`.

\`\`\`tsx
<IpsFileUpload sviva="prod" system="my-site" camera />
\`\`\`

> דורש הרשאת \`camera\` ו-**HTTPS** בסביבת production.

---

## 🖨️ סריקה — Dynamsoft Web TWAIN

### התקנה
\`\`\`bash
npm install dwt
\`\`\`

### הגדרה ב-main.tsx לפני ReactDOM.render
\`\`\`ts
import Dynamsoft from 'dwt'
Dynamsoft.DWT.ProductKey    = 'YOUR_PRODUCT_KEY'
Dynamsoft.DWT.ResourcesPath = '/node_modules/dwt/dist'
\`\`\`

### שימוש
\`\`\`tsx
<IpsFileUpload sviva="prod" system="my-site" scan containerId="dwt-container" />
\`\`\`

**דרישות:** Windows בלבד · Chrome/Edge · HTTPS · Product Key מ-[Dynamsoft](https://www.dynamsoft.com/web-twain/overview/)

---

## ✂️ צילום מסך חלקי

לא דורש התקנה — משתמש ב-\`getDisplayMedia\`.

זרימה: בחר חלון ← overlay מוצג ← גרור אזור (כמו Win+Shift+S) ← קובץ PNG נוסף.

> דורש **HTTPS** בסביבת production.
        `,
      },
    },
  },
  argTypes: {
    sviva:         { control: 'text',    description: 'סביבה (dev/staging/prod)' },
    system:        { control: 'text',    description: 'שם אתר SharePoint' },
    camera:        { control: 'boolean', description: 'הצג כפתור מצלמה' },
    scan:          { control: 'boolean', description: 'הצג כפתור סריקה (דורש Dynamsoft DWT)' },
    multiple:      { control: 'boolean', description: 'אפשר בחירת מספר קבצים' },
    maxFileSizeMB: { control: 'number',  description: 'גודל קובץ מקסימלי ב-MB' },
    disabled:      { control: 'boolean', description: 'מנטרל את כל האינטראקציות' },
  },
}

export default meta
type Story = StoryObj<typeof IpsFileUpload>

export const Default: Story = {
  name: 'Default — גרירה ועיון',
  args: { sviva: 'dev', system: 'demo-site', maxFileSizeMB: 10 },
}

export const WithCamera: Story = {
  name: 'עם מצלמה',
  args: { sviva: 'dev', system: 'demo-site', camera: true, maxFileSizeMB: 10 },
  parameters: {
    docs: {
      description: { story: 'לחץ על "מצלמה" לפתיחת dialog עם live preview. דורש הרשאת מצלמה בדפדפן.' },
    },
  },
}

export const WithScan: Story = {
  name: 'עם סריקה (Dynamsoft DWT)',
  args: { sviva: 'dev', system: 'demo-site', scan: true, containerId: 'dwt-demo' },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box dir="rtl" sx={{ p: 3, maxWidth: 640 }}>
          <Alert severity="info" sx={{ mb: 2 }}>
            <AlertTitle>הערה למפתח</AlertTitle>
            דורש Dynamsoft Web TWAIN. ראה תיעוד בראש העמוד להוראות התקנה.
            ללא הספרייה תוצג הודעה ידידותית למשתמש.
          </Alert>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
}

export const WithScreenshot: Story = {
  name: 'צילום מסך חלקי',
  args: { sviva: 'dev', system: 'demo-site' },
  parameters: {
    docs: {
      description: {
        story: 'לחץ "צילום מסך" ← בחר חלון ← גרור לבחירת אזור ← לחץ "אישור".',
      },
    },
  },
}

export const AllFeatures: Story = {
  name: "כל הפיצ'רים",
  args: { sviva: 'dev', system: 'demo-site', camera: true, scan: true, multiple: true, maxFileSizeMB: 10 },
}

export const SingleFile: Story = {
  name: 'קובץ יחיד',
  args: { sviva: 'dev', system: 'demo-site', multiple: false, maxFileSizeMB: 5 },
  parameters: {
    docs: { description: { story: 'עם `multiple=false` ניתן לבחור קובץ אחד בלבד.' } },
  },
}

export const FileSizeLimit: Story = {
  name: 'הגבלת גודל (1MB)',
  args: { sviva: 'dev', system: 'demo-site', maxFileSizeMB: 1 },
  parameters: {
    docs: { description: { story: 'קבצים מעל 1MB יוצגו עם שגיאה ולא יועלו.' } },
  },
}

export const Disabled: Story = {
  name: 'מנוטרל',
  args: { sviva: 'dev', system: 'demo-site', disabled: true },
}

export const WithCallbacks: Story = {
  name: 'עם Callbacks',
  args: {
    sviva: 'dev',
    system: 'demo-site',
    maxFileSizeMB: 10,
    onSaveSuccess: (results) => alert(`הועלו: ${results.map(r => r.name).join(', ')}`),
    onSaveError:   (err)     => alert(`שגיאה: ${String(err)}`),
    onBeforeSave:  async ()  => { console.log('onBeforeSave'); return true },
  },
  parameters: {
    docs: {
      description: {
        story: `
- \`onSaveSuccess(results)\` — מערך \`{ name, path }[]\` לאחר העלאה מוצלחת
- \`onSaveError(error)\` — נקרא כשההעלאה נכשלת
- \`onBeforeSave()\` — ולידציה אסינכרונית, החזר \`false\` לעצירה
        `,
      },
    },
  },
}
