export const palette = {
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F7FAFC',
  gray500: '#6B7280',
  gray900: '#111827',
  primary: '#2563EB',
  primaryDark: '#1D4ED8',
  success: '#16A34A',
  danger: '#DC2626'
} as const

export type Palette = typeof palette
