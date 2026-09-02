/*
 * MFE-side diagnostic. Copy to the MFE root and run:  node diag-mfe.cjs
 *
 * Everything here resolves through the MFE's own node_modules — its React, its
 * MUI, its installed copy of this library — so it answers "is the package we
 * shipped sane in this tree?" without webpack in the way.
 */
const fs = require('fs'), path = require('path');
const nm = path.join(process.cwd(), 'node_modules');

// locate the installed library by its build artefact, whatever scope it carries
const cand = [];
const scan = (dir, depth) => {
  if (depth > 1 || !fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory() && !e.isSymbolicLink()) continue;
    if (e.name.startsWith('@')) { scan(path.join(dir, e.name), depth + 1); continue; }
    const p = path.join(dir, e.name);
    if (fs.existsSync(path.join(p, 'dist', 'ui-library.cjs.js'))) cand.push(p);
  }
};
scan(nm, 0);
if (!cand.length) { console.log('!! library not found under node_modules'); process.exit(1); }

const lib = cand[0];
const pkg = JSON.parse(fs.readFileSync(path.join(lib, 'package.json'), 'utf8'));
console.log('package      :', pkg.name, '@', pkg.version);
try { console.log('resolves to  :', require.resolve(pkg.name)); } catch (e) { console.log('resolves to  : FAILED', e.message.split('\n')[0]); }
console.log('exports      :', JSON.stringify(pkg.exports && pkg.exports['.']));
// "type": "module" flips webpack to strict-ESM interop and breaks every
// default import of a CJS dep (all of MUI). It must not be set here.
console.log('type         :', pkg.type ?? '(unset - correct)', pkg.type === 'module' ? '  <-- THIS BREAKS ALL MUI DEFAULT IMPORTS' : '');

const cjsSrc = fs.readFileSync(path.join(lib, 'dist', 'ui-library.cjs.js'), 'utf8');
console.log('cjs interop  :', /__esModule\?[a-zA-Z0-9_$]+:\{default:/.test(cjsSrc)
  ? 'FIXED (new build)' : 'BROKEN (old build still installed - npm cache / not republished)');

// Whether strict ESM (type:module) survives depends on MUI shipping an ESM
// branch in its exports map. MUI 6+ does; MUI 5 and older do not.
try {
  const mp = JSON.parse(fs.readFileSync(path.join(nm, '@mui/material', 'package.json'), 'utf8'));
  const star = mp.exports && mp.exports['./*'];
  const hasEsm = !!(star && star.default);
  console.log('\n@mui/material :', mp.version, '| type:', mp.type, '| ESM branch in exports:',
    hasEsm ? 'yes' : 'NO  <-- strict ESM cannot resolve a component here');
} catch (e) { console.log('\n@mui/material : manifest unreadable:', e.message.split('\n')[0]); }
console.log('\nMUI bindings as the MFE resolves them:');
for (const n of ['Box', 'TextField', 'InputAdornment', 'IconButton', 'FormLabel']) {
  try {
    const C = require(path.join(nm, '@mui/material', n)).default;
    console.log('  ' + n.padEnd(15), typeof C, String(C && C.$$typeof), JSON.stringify(Object.keys(C || {})));
  } catch (e) { console.log('  ' + n.padEnd(15), 'RESOLVE FAILED:', e.message.split('\n')[0]); }
}

// A second copy of MUI/emotion/React in the tree is the classic host+MFE break.
console.log('\nCopies in the tree:');
const WATCH = ['@mui/material', '@emotion/react', '@emotion/cache', 'react', 'react-dom'];
const found = {};
const dupScan = (dir, depth) => {
  if (depth > 5 || !fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory() && !e.isSymbolicLink()) continue;
    const p = path.join(dir, e.name);
    if (e.name.startsWith('@')) { dupScan(p, depth); continue; }
    const pjp = path.join(p, 'package.json');
    if (fs.existsSync(pjp)) {
      try {
        const j = JSON.parse(fs.readFileSync(pjp, 'utf8'));
        if (WATCH.includes(j.name)) (found[j.name] = found[j.name] || []).push(j.version + '   ' + path.relative(process.cwd(), p));
      } catch { /* unreadable manifest, skip */ }
    }
    const nested = path.join(p, 'node_modules');
    if (fs.existsSync(nested)) dupScan(nested, depth + 1);
  }
};
dupScan(nm, 0);
for (const name of WATCH) {
  const hits = found[name] || [];
  console.log('  ' + name.padEnd(16) + hits.length + ' copy(ies)' + (hits.length > 1 ? '   <-- DUPLICATE' : ''));
  hits.forEach((h) => console.log('      ' + h));
}

console.log('\nRendering IpsTextField through the installed copy:');
try {
  const React = require(path.join(nm, 'react'));
  const { renderToString } = require(path.join(nm, 'react-dom', 'server'));
  const L = require(lib);
  console.log('  IpsTextField is:', typeof L.IpsTextField, String(L.IpsTextField && L.IpsTextField.$$typeof));
  const ce = console.error; console.error = () => {};
  try { renderToString(React.createElement(L.IpsTextField, { label: 'x' })); console.error = ce; console.log('  RENDER OK'); }
  catch (e) { console.error = ce; console.log('  RENDER FAILED:', e.message.split('\n')[0]); }
} catch (e) { console.log('  could not load:', e.message.split('\n')[0]); }
