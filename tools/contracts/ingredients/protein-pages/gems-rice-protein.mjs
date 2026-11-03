// WHO GEMS/Food rows for rice protein powder (HMI-PROTEIN-PEA-RICE-1).
// The full GEMS shards live outside the repository, so this writes the scoped subset the
// rice-protein page needs, in the findings-store shard format (data/evidence/findings/README.md):
// the 22 PAHO lead results in the June 2026 export become routed rows; the 22 per-year PAHO
// rows that restate them and the 5 EURO animal-feed rows become decisions. Rows are read with
// the discovery scanner's own CSV parser, so ids match the gate's universe items exactly.
// Usage: node tools/contracts/ingredients/protein-pages/gems-rice-protein.mjs
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import { parseCSV } from '../../../ingredient-source-universe.mjs';
import { resolveLibrarySource } from '../../../lib/library-root.mjs';
import { root } from './author.mjs';

const GEMS = 'who-gemsfood-heavy-metal-contaminants';
const DIR = 'raw/reports/gemsfood-contaminants';
const EXPORT = `${DIR}/2026-06-20-export/Lead.csv`;
const PER_YEAR = [`${DIR}/who-gemsfood-lead-paho-2014-2014-2026-05-04.csv`, `${DIR}/who-gemsfood-lead-paho-2017-2017-2026-05-04.csv`];
const FEED = [`${DIR}/2026-06-20-export/Mercury.csv`, `${DIR}/who-gemsfood-arsenic-total-euro-2017-2017-2026-05-04.csv`, `${DIR}/who-gemsfood-arsenic-total-euro-2021-2021-2026-05-04.csv`, `${DIR}/who-gemsfood-total-mercury-euro-2017-2017-2026-05-04.csv`];
const isRiceProtein = r => /rice protein/i.test(r.LocalFoodName ?? '');

function read(declared) {
  const file = resolveLibrarySource(declared, { repoRoot: root }).resolved_path;
  if (!file) throw Error(`Library file not available: ${declared}`);
  const raw = fs.readFileSync(file, 'utf8');
  return { rows: parseCSV(raw), sha256: crypto.createHash('sha256').update(raw).digest('hex') };
}
const id = (declared, r) => `dataset:${declared}#row ${r.__row}`;
const ugkg = r => r.UnitName === 'mg/kg' ? Number(r.ResultText) * 1000 : r.UnitName === 'ug/kg' ? Number(r.ResultText) : NaN;
const limit = (v, r) => (v === '' ? undefined : r.UnitName === 'mg/kg' ? Number(v) * 1000 : Number(v));

const exp = read(EXPORT);
const lead = exp.rows.filter(r => r.ContaminantName === 'Lead' && r.RegionName === 'PAHO' && isRiceProtein(r));
const shard = lead.map(r => {
  const v = ugkg(r);
  if (!Number.isFinite(v) || !(v > 0)) throw Error(`Unexpected value in ${id(EXPORT, r)}: ${r.ResultText} ${r.UnitName}`);
  // Brand firewall: GEMS local labels can carry trade names, so the label is withheld and only
  // the generic food name is kept.
  const brown = /brown/i.test(r.LocalFoodName);
  const row = {
    id: id(EXPORT, r), dataset_id: GEMS,
    // food_name is the page label the engine groups by; the GEMS category stays in food_category.
    material: { label_as_printed: brown ? 'Brown rice protein powder' : 'Rice protein powder', label_withheld: 'brand firewall', food_name: brown ? 'Brown rice protein powder' : 'Rice protein powder', page: 'ingredients/rice-protein', form: 'powder', route_rule: 'override:HMI-PROTEIN-PEA-RICE-1', route_by: 'local' },
    analyte: 'Pb', group: `${r.RegionName}; ${r.RepresentativenessName}`, group_kind: 'reporting_region', n: 1, statistic: 'sample_value',
    reported: `${r.ResultText} ${r.UnitName}`, value_ugkg: v, lower_ugkg: v, upper_ugkg: v, unit_original: r.UnitName, basis: 'dry', censoring: 'none',
    lod_ugkg: limit(r.LOD, r), loq_ugkg: limit(r.LOQ, r), locator: `Lead.csv data row ${r.__row}`, region: r.RegionName, region_labels: [r.RegionName], year: Number(r.Year),
    origin_label: r.FoodOriginName || undefined, representativeness: r.RepresentativenessName, record_type: r.RecordType, result_basis: r.ResultBasisName,
    portion: r.PortionTypeName || undefined, qa: r.AnalyticalQAName, food_category: r.FoodCategory, food_code: r.FoodCode, serial: r.SerialNumber, export: 'june',
  };
  return JSON.parse(JSON.stringify(row));
});
const bySerial = new Map(lead.map(r => [r.SerialNumber, id(EXPORT, r)]));

const decisions = [];
for (const f of PER_YEAR) for (const r of read(f).rows.filter(r => r.ContaminantName === 'Lead' && isRiceProtein(r))) {
  const of = bySerial.get(r.SerialNumber);
  if (!of) throw Error(`No June-export row for serial ${r.SerialNumber} (${id(f, r)})`);
  decisions.push({ item_id: id(f, r), decision: 'duplicate_of', duplicate_of: of, reason: `The same PAHO submission (serial ${r.SerialNumber}) as the June 2026 export row it restates.` });
}
for (const f of FEED) for (const r of read(f).rows.filter(r => (r.FoodCategory === 'Feed' || r.FoodName === 'Feed') && /rice protein/i.test(`${r.LocalFoodName} ${r.FoodName}`)))
  decisions.push({ item_id: id(f, r), decision: 'excluded', reason: 'Animal feed (GEMS/Food category Feed): rice protein for feed, not food for people.' });

const out = 'data/evidence/findings/datasets';
fs.mkdirSync(path.join(root, out), { recursive: true });
const gz = (name, rows) => { fs.writeFileSync(path.join(root, out, name), zlib.gzipSync(rows.map(x => JSON.stringify(x)).join('\n') + '\n', { level: 9, mtime: 0 })); return `${out}/${name}`; };
const shardFile = gz(`${GEMS}--Pb.jsonl.gz`, shard), decisionsFile = gz(`${GEMS}--decisions.jsonl.gz`, decisions);
fs.writeFileSync(path.join(root, out, `${GEMS}.manifest.json`), JSON.stringify({
  dataset_id: GEMS, scope: 'Scoped subset for ingredients/rice-protein only (HMI-PROTEIN-PEA-RICE-1). The full GEMS/Food shards are kept outside the repository; this file set is replaced when they are synced.',
  inputs: [EXPORT, ...PER_YEAR, ...FEED].map(p => ({ path: p, sha256: read(p).sha256 })), counts: { rows: shard.length, decisions: decisions.length },
  shards: [shardFile], decisions: decisionsFile, generator: 'tools/contracts/ingredients/protein-pages/gems-rice-protein.mjs',
}, null, 2) + '\n');
console.log(JSON.stringify({ rows: shard.length, brown: shard.filter(r => /brown/i.test(r.material.food_name)).length, decisions: decisions.length, duplicates: decisions.filter(d => d.decision === 'duplicate_of').length }));
