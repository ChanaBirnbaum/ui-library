export const typography = {
  fonts: {
    body: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    heading: 'Inter, system-ui, -apple-system, "Segoe UI"'
  },
  sizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px'
  },
  weights: {
    regular: 400,
    medium: 500,
    bold: 700
  }
} as const

export type Typography = typeof typography
