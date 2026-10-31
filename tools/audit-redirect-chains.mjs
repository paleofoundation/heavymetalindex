// Fails when a vercel.json redirect points at a URL that itself redirects (a chain), or loops.
// HMI-HELD-TRIAGE-1 and HMI-ORG-AUDIT-1 require single-hop redirects everywhere.
//   node tools/audit-redirect-chains.mjs [vercel.json]
import fs from 'node:fs';
const file = process.argv[2] ?? 'vercel.json';
const redirects = JSON.parse(fs.readFileSync(file, 'utf8')).redirects ?? [];
const norm = u => String(u).split('#')[0].split('?')[0].replace(/\/+$/, '') || '/';
const bySource = new Map(redirects.map(r => [norm(r.source), norm(r.destination)]));
const chains = [...bySource].filter(([s, d]) => bySource.has(d)).map(([s, d]) => `${s} -> ${d} -> ${bySource.get(d)}`);
for (const c of chains) console.error(`FAIL redirect chain: ${c}`);
console.log(chains.length ? `redirect chains: ${chains.length}` : `redirect chains: 0 (${redirects.length} redirects)`);
if (chains.length) process.exitCode = 1;
