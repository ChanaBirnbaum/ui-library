export const palette = {
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F7FAFC',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray900: '#111827',
  primary: '#006AFF',
  primaryMain: '#00033D',
  primaryLight: '#E6F4FF',
  primaryDark: '#1D4ED8',
  textMain: '#00033D',
  textSecondary: '#00033D',
  success: '#16A34A',
  danger: '#DC2626'
} as const

export type Palette = typeof palette
