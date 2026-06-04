import { readFileSync, writeFileSync } from 'fs';
const lock = JSON.parse(readFileSync('package-lock.json', 'utf8'));
const pkgs = {};
Object.keys(lock.packages).filter(k => k !== '').forEach(k => {
  const p = lock.packages[k];
  const parts = k.split('/node_modules/');
  const name = parts[parts.length - 1];
  if (!pkgs[name]) pkgs[name] = p.version;
});
const entries = Object.entries(pkgs).sort(([a], [b]) => a.localeCompare(b));
const txt = entries.map(([n, v]) => `${n}@${v}`).join('\n');
writeFileSync('all-packages-unique.txt', txt);
console.log(`Written ${entries.length} packages to all-packages-unique.txt`);
