import { palette } from './tokens/palette'
import { typography } from './tokens/typography'
import { spacing } from './tokens/spacing'

export const ipsTheme = {
  colors: palette,
  typography,
  spacing,
  borderRadius: '6px'
} as const

export type IpsTheme = typeof ipsTheme

export default ipsTheme
