/**
 * Pre-publish gate. Verifies that what we are about to ship actually works
 * through every entry point package.json advertises — the CJS entry shipped
 * broken for months because nothing ever exercised it.
 *
 * Run: npm run verify
 */
import { createRequire } from 'node:module'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, statSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(join(root, 'package.json'))
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))

let failed = 0
const ok = (m) => console.log(`  \x1b[32mPASS\x1b[0m  ${m}`)
const bad = (m) => { failed++; console.log(`  \x1b[31mFAIL\x1b[0m  ${m}`) }
const warn = (m) => console.log(`  \x1b[33mWARN\x1b[0m  ${m}`)
const head = (m) => console.log(`\n${m}`)

// 1 — every advertised entry point exists on disk
head('1. Entry points resolve')
for (const [field, p] of [
  ['main', pkg.main], ['module', pkg.module], ['types', pkg.types],
  ['exports.import', pkg.exports?.['.']?.import],
  ['exports.require', pkg.exports?.['.']?.require],
  ['exports.types', pkg.exports?.['.']?.types],
]) {
  if (!p) bad(`${field} is not declared`)
  else if (!existsSync(join(root, p))) bad(`${field} -> ${p} does not exist`)
  else ok(`${field} -> ${p}`)
}

// 2 — "types" must be the first condition or TS may skip it
head('2. exports condition order')
const conds = Object.keys(pkg.exports?.['.'] ?? {})
if (conds[0] === 'types') ok(`order is ${conds.join(', ')}`)
else bad(`"types" must come first, got: ${conds.join(', ')}`)

// 3 — dist is not stale relative to src
head('3. dist is up to date with src')
const newest = (dir) => readdirSync(dir, { withFileTypes: true }).reduce((max, e) => {
  const p = join(dir, e.name)
  return Math.max(max, e.isDirectory() ? newest(p) : statSync(p).mtimeMs)
}, 0)
const srcTime = newest(join(root, 'src'))
const distTime = statSync(join(root, pkg.module)).mtimeMs
if (distTime >= srcTime) ok('dist is newer than src')
else bad(`src changed after the last build — run "npm run build" (src is ${Math.round((srcTime - distTime) / 60000)} min newer)`)

// 4 — the CJS entry actually renders (this is the bug that shipped)
head('4. CJS entry renders without invalid element types')
const React = require('react')
const { renderToString } = require('react-dom/server')
const cjs = require(join(root, pkg.main))
const origError = console.error
console.error = () => {}
let broken = []
for (const [name, C] of Object.entries(cjs)) {
  if (name === 'default' || !(typeof C === 'function' || typeof C === 'object')) continue
  if (!C?.$$typeof && typeof C !== 'function') continue
  try { renderToString(React.createElement(C, { children: 'x' })) }
  catch (e) { if (/Element type is invalid/.test(e.message)) broken.push(name) }
}
console.error = origError
if (broken.length) bad(`invalid element type in: ${broken.join(', ')} — check rollup "interop" in vite.config.ts`)
else ok('all exported components render')

// 5 — ESM and CJS expose the same surface
head('5. ESM / CJS export parity')
const esmNames = [...readFileSync(join(root, pkg.module), 'utf8').matchAll(/^\s+\w+ as (\w+)/gm)].map((m) => m[1])
const cjsNames = Object.keys(cjs).filter((k) => k !== 'default')
const missing = (a, b) => a.filter((x) => !b.includes(x))
const onlyEsm = missing(esmNames, cjsNames)
const onlyCjs = missing(cjsNames, esmNames)
if (!onlyEsm.length && !onlyCjs.length) ok(`${cjsNames.length} exports, identical in both`)
else bad(`only in ESM: [${onlyEsm}] / only in CJS: [${onlyCjs}]`)

// 6 — the vendored mirror must survive npm pack
head('6. npm pack includes the vendored dist/node_modules mirror')
const files = JSON.parse(execFileSync('npm', ['pack', '--dry-run', '--json'], { cwd: root, encoding: 'utf8', shell: true }))[0].files.map((f) => f.path)
const vendored = files.filter((f) => f.includes('node_modules'))
if (!files.includes(pkg.main) || !files.includes(pkg.module)) bad('an entry point is missing from the tarball')
else if (vendored.length === 0) bad('dist/node_modules was stripped — the ESM entry will not resolve')
else ok(`${files.length} files, ${vendored.length} vendored`)

// 7 — externals must not leak a second copy of a peer dep
head('7. No duplicated peer dependency bundled into dist')
const rawExternal = readFileSync(join(root, 'vite.config.ts'), 'utf8')
 const dupes = new Set()
const scan = (dir) => readdirSync(dir, { withFileTypes: true }).forEach((e) => {
  const p = join(dir, e.name)
  if (e.isDirectory()) return scan(p)
  if (!p.endsWith('.js')) return
  for (const m of readFileSync(p, 'utf8').matchAll(/node_modules\/((?:@[^/"']+\/)?[^/"']+)/g)) {
    const ext = String(rawExternal).includes(m[1])
    if (Object.keys(pkg.peerDependencies ?? {}).includes(m[1])) dupes.add(m[1] + ' (PEER — two runtime copies)')
    else if (ext) dupes.add(m[1] + ' (declared external but a subpath leaked through)')
    else if (Object.keys(pkg.dependencies ?? {}).includes(m[1])) dupes.add(m[1] + ' (also in dependencies — shipped twice)')
  }
})
scan(join(root, 'dist'))
if (dupes.size) warn(`bundled a private copy of: ${[...dupes].join(', ')} — see notes below`)
else ok('no peer/dependency duplicated into dist')

console.log(failed ? `\n\x1b[31m${failed} check(s) failed\x1b[0m\n` : '\n\x1b[32mAll checks passed — safe to publish\x1b[0m\n')
process.exit(failed ? 1 : 0)
