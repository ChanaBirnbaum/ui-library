import { createIpsTheme } from './createIpsTheme'

export { createIpsTheme } from './createIpsTheme'

/** Default light-mode IPS theme. For dark mode use createIpsTheme('dark'). */
export const ipsTheme = createIpsTheme('light')

export type IpsTheme = typeof ipsTheme

export default ipsTheme
