#!/usr/bin/env npx tsx
/**
 * scripts/generate-tokens.ts
 *
 * Reads the W3C Design Tokens JSON files exported from Figma and regenerates
 * src/theme/tokens/generated/index.ts.
 *
 * Usage:
 *   npx tsx scripts/generate-tokens.ts
 *
 * Token source (must exist before running):
 *   src/theme/tokens/figma/theme/{Light,Dark}.tokens.json
 *   src/theme/tokens/figma/spacing/Mode.tokens.json
 *   src/theme/tokens/figma/radius/Mode.tokens.json
 *   src/theme/tokens/figma/typography/Mode.tokens.json
 *   src/theme/tokens/figma/charts/{Light,Dark}.tokens.json
 *
 * NOTE: The JSON files are currently located at dist/theme/tokens/figma/ in this
 * repository. Copy them into src/theme/tokens/figma/ before running this script so
 * they are committed alongside the source code and become the durable source of truth.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = dirname(__filename)

const FIGMA_ROOT = join(__dirname, '..', 'src', 'theme', 'tokens', 'figma')
const OUT_FILE   = join(__dirname, '..', 'src', 'theme', 'tokens', 'generated', 'index.ts')

// ─── Helpers ──────────────────────────────────────────────────────────────────

function readJson(path: string): Record<string, unknown> {
  return JSON.parse(readFileSync(path, 'utf8')) as Record<string, unknown>
}

interface ColorValue { hex: string; alpha: number; components: number[] }
interface Token      { $value: unknown; $type?: string }
interface ColorToken { $value: ColorValue }
interface NumberToken{ $value: number }

function getColor(obj: Record<string, unknown>, ...path: string[]): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cur: any = obj
  for (const k of path) cur = cur[k]
  const v = (cur as ColorToken).$value
  if (v.alpha < 1) {
    const [r, g, b] = v.components.map((c: number) => Math.round(c * 255))
    return `rgba(${r}, ${g}, ${b}, ${v.alpha.toFixed(2)})`
  }
  return v.hex
}

function getNumber(obj: Record<string, unknown>, ...path: string[]): number {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cur: any = obj
  for (const k of path) cur = cur[k]
  const raw = (cur as NumberToken).$value
  if (typeof raw === 'number') return raw
  // Alias references like "{font-size.4xl}" — resolve against the same file
  throw new Error(`Unresolved alias reference: ${JSON.stringify(raw)}`)
}

/** Resolve an alias reference like "{font-size.4xl}" against a root token map. */
function resolveAlias(ref: unknown, root: Record<string, unknown>): number {
  if (typeof ref === 'number') return ref
  const match = (ref as string).match(/^\{(.+)\}$/)
  if (!match) throw new Error(`Cannot resolve: ${ref}`)
  const path = match[1].split('.')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cur: any = root
  for (const k of path) cur = cur[k]
  return (cur as NumberToken).$value as number
}

function pxToRem(px: number): string {
  return `${(px / 16).toFixed(px % 16 === 0 ? 0 : 3).replace(/\.?0+$/, '')}rem`
}

// ─── Parse files ──────────────────────────────────────────────────────────────

const lightTheme = readJson(join(FIGMA_ROOT, 'theme', 'Light.tokens.json'))
const darkTheme  = readJson(join(FIGMA_ROOT, 'theme', 'Dark.tokens.json'))
const spacing    = readJson(join(FIGMA_ROOT, 'spacing', 'Mode.tokens.json'))
const radius     = readJson(join(FIGMA_ROOT, 'radius',  'Mode.tokens.json'))
const typo       = readJson(join(FIGMA_ROOT, 'typography', 'Mode.tokens.json'))
const lightCharts= readJson(join(FIGMA_ROOT, 'charts', 'Light.tokens.json'))
const darkCharts = readJson(join(FIGMA_ROOT, 'charts', 'Dark.tokens.json'))

// ─── Build palette block ──────────────────────────────────────────────────────

function buildPalette(t: Record<string, unknown>, actionBase: string) {
  const c = (path: string[]) => getColor(t, ...path)
  const greyKeys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const
  const grey = greyKeys.map(k => `    ${k}: '${c(['grey', String(k)])}'`).join(',\n')

  return `{
  primary:   { main: '${c(['primary','main'])}', light: '${c(['primary','light'])}', dark: '${c(['primary','dark'])}', contrastText: '${c(['primary','contrastText'])}' },
  secondary: { main: '${c(['secondary','main'])}', light: '${c(['secondary','light'])}', dark: '${c(['secondary','dark'])}', contrastText: '${c(['secondary','contrastText'])}' },
  error:     { main: '${c(['error','main'])}' },
  warning:   { main: '${c(['warning','main'])}' },
  success:   { main: '${c(['success','main'])}' },
  info:      { main: '${c(['info','main'])}' },
  text:      { primary: '${c(['text','primary'])}', secondary: '${c(['text','secondary'])}', disabled: '${c(['text','disabled'])}' },
  background:{ default: '${c(['background','default'])}', paper: '${c(['background','paper'])}' },
  divider:   '${c(['divider'])}',
  grey: {
${grey},
  },
  actionBase: '${actionBase}',
}`
}

// Action base is the hex from action.hover (which carries the solid base colour)
const lightActionBase = getColor(lightTheme, 'action', 'hover').replace(/rgba\((\d+),\s*(\d+),\s*(\d+),.+\)/, (_, r, g, b) => {
  return '#' + [r, g, b].map(Number).map(x => x.toString(16).padStart(2, '0')).join('')
})
const darkActionBase = getColor(darkTheme, 'action', 'hover').replace(/rgba\((\d+),\s*(\d+),\s*(\d+),.+\)/, (_, r, g, b) => {
  return '#' + [r, g, b].map(Number).map(x => x.toString(16).padStart(2, '0')).join('')
})

// Resolve actual hex from action base (hex field in JSON)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lightAB = (lightTheme as any).action.hover.$value.hex as string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const darkAB  = (darkTheme  as any).action.hover.$value.hex as string

// ─── Spacing ──────────────────────────────────────────────────────────────────

const spacingBase  = getNumber(spacing, 'spacing-base')
const spacingScale = [0, 1, 2, 3, 4, 6, 8].map(k => {
  const val = getNumber(spacing, `spacing-${k}`)
  return `    ${k}: ${val}`
}).join(',\n')

// ─── Radius ───────────────────────────────────────────────────────────────────

const rBase   = getNumber(radius, 'radius-base')
const rButton = getNumber(radius, 'radius-button')
const rInput  = getNumber(radius, 'radius-input')
const rCard   = getNumber(radius, 'radius-card')
const rChip   = getNumber(radius, 'radius-chip')
const rSm     = getNumber(radius, 'radius-sm')
const rLg     = getNumber(radius, 'radius-lg')

// ─── Typography ───────────────────────────────────────────────────────────────

function resolveStyle(name: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const s = (typo as any).styles[name]
  const size  = resolveAlias(s.size.$value,           typo)
  const lh    = resolveAlias(s['line-height'].$value,  typo)
  const fw    = resolveAlias(s.weight.$value,           typo)
  const ls    = resolveAlias(s['letter-spacing'].$value,typo)
  return { fontSize: pxToRem(size), lineHeight: lh, fontWeight: fw, letterSpacing: `${ls}px` }
}

const styles = ['display','h1','h2','h3','h4','subtitle1','subtitle2','body-lg','body','label','button','caption','overline']
const resolvedStyles = Object.fromEntries(
  styles.map(name => [name, resolveStyle(name)])
)

// Map Figma style names to MUI variant names
const muiMap: Record<string, string> = {
  'body-lg': 'body1',
  'body':    'body2',
}
const typoLines = styles
  .filter(n => n !== 'label') // label has no direct MUI slot; omitted from typography block
  .map(n => {
    const muiName = muiMap[n] ?? n
    const s = resolvedStyles[n]
    const ls = s.letterSpacing === '0px' ? "'0px'" : `'${s.letterSpacing}'`
    return `  // ${n}${muiMap[n] ? ` → body${n === 'body-lg' ? 1 : 2}` : ''}: ${s.fontSize} / lh ${s.lineHeight} / fw ${s.fontWeight} / ls ${s.letterSpacing}
  ${muiName}: { fontSize: '${s.fontSize}', lineHeight: ${s.lineHeight}, fontWeight: ${s.fontWeight}, letterSpacing: ${ls} },`
  }).join('\n')

// ─── Charts ───────────────────────────────────────────────────────────────────

function chartArray(obj: Record<string, unknown>, group: string): string[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g = (obj as any)[group]
  return Object.keys(g).sort().map((k: string) => g[k].$value.hex as string)
}

const lcMono = chartArray(lightCharts, 'mono')
const lcCat  = chartArray(lightCharts, 'categorical')
const dcMono = chartArray(darkCharts,  'mono')
const dcCat  = chartArray(darkCharts,  'categorical')

// ─── Emit ─────────────────────────────────────────────────────────────────────

const out = `// Generated by scripts/generate-tokens.ts — do not edit by hand.
// Re-run: npx tsx scripts/generate-tokens.ts
//
// Source files: src/theme/tokens/figma/{theme,spacing,radius,typography,charts}/

// ─── Light palette ────────────────────────────────────────────────────────────
export const lightPalette = ${buildPalette(lightTheme, lightAB)} as const

// ─── Dark palette ─────────────────────────────────────────────────────────────
export const darkPalette = ${buildPalette(darkTheme, darkAB)} as const

// ─── Spacing (mode-independent) ───────────────────────────────────────────────
export const spacingTokens = {
  /** MUI spacing factor: theme.spacing(1) === ${spacingBase}px */
  base:  ${spacingBase},
  /** Full Figma spacing scale in px */
  scale: {
${spacingScale},
  },
} as const

// ─── Radius (mode-independent) ────────────────────────────────────────────────
export const radiusTokens = {
  base:   ${rBase},
  button: ${rButton},
  input:  ${rInput},
  card:   ${rCard},
  chip:   ${rChip},
  sm:     ${rSm},
  lg:     ${rLg},
} as const

// ─── Typography resolved styles ───────────────────────────────────────────────
// Aliases fully resolved; px → rem (÷ 16); letter-spacing as "Npx".
// label has no direct MUI slot — stored in THEME_NOTES.md.
export const typographyStyles = {
${typoLines}
} as const

// ─── Chart palettes ───────────────────────────────────────────────────────────
export const lightCharts = {
  mono:        [${lcMono.map(h => `'${h}'`).join(', ')}] as string[],
  categorical: [${lcCat.map(h => `'${h}'`).join(', ')}] as string[],
}

export const darkCharts = {
  mono:        [${dcMono.map(h => `'${h}'`).join(', ')}] as string[],
  categorical: [${dcCat.map(h => `'${h}'`).join(', ')}] as string[],
}
`

mkdirSync(dirname(OUT_FILE), { recursive: true })
writeFileSync(OUT_FILE, out, 'utf8')
console.log(`✓  Generated: ${OUT_FILE}`)
