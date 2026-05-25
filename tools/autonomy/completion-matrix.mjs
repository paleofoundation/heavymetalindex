#!/usr/bin/env node
// completion-matrix.mjs
//
// Builds the master completion matrix: one row per (ingredient page,
// analyte) cell, with current confidence + n_studies + gap-to-high.
// This is the unit of completion for the "95% confidence on HMTc values"
// objective. Each cell is either:
//   - confidence: high (achievable target)
//   - explicitly declared data gap (legitimate alternative when literature
//     genuinely doesn't support high confidence)
//
// Output: data/evidence/completion-matrix.csv with columns:
//   slug,analyte,status,confidence,n_studies,last_reviewed,target_n,delta,
//   contributing_routes
//
// Plus a summary report to stdout showing how many cells need work.
//
// "Target N" defaults to 10 (the high-confidence floor per CLAUDE.md Part 6
// schema). Cells already at confidence=high are treated as target-met.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const INGREDIENTS_DIR = path.join(ROOT, 'wiki/ingredients');
const ROUTING_CSV = path.join(ROOT, 'data/evidence/product_source_routing_audit.csv');
const OUT_CSV = path.join(ROOT, 'data/evidence/completion-matrix.csv');

const ANALYTES = ['Pb', 'Cd', 'iAs', 'tAs', 'tHg', 'Ni', 'Al', 'Cr', 'Sn', 'U'];
const TARGET_N_HIGH = 10;

// --- routing audit count of contributing sources per (ingredient, ?) ---
const routingCounts = new Map(); // ingredients/<slug> → count
if (fs.existsSync(ROUTING_CSV)) {
  const lines = fs.readFileSync(ROUTING_CSV, 'utf8').split('\n');
  const header = lines[0].split(',');
  const idxTarget = header.indexOf('target_page');
  if (idxTarget >= 0) {
    for (const line of lines.slice(1)) {
      const cols = line.split(',');
      const target = cols[idxTarget];
      if (target && target.startsWith('ingredients/')) {
        routingCounts.set(target, (routingCounts.get(target) || 0) + 1);
      }
    }
  }
}

// --- parse each ingredient page's contamination_profile ---
const rows = [];
const ingredientFiles = fs.readdirSync(INGREDIENTS_DIR).filter(f => f.endsWith('.md') && f !== 'index.md');

let totalCells = 0;
let cellsHigh = 0;
let cellsMedium = 0;
let cellsLow = 0;
let cellsPending = 0;
let cellsPopulatedNoData = 0;
let cellsUnknown = 0;

for (const file of ingredientFiles) {
  const slug = file.replace(/\.md$/, '');
  const content = fs.readFileSync(path.join(INGREDIENTS_DIR, file), 'utf8');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) continue;
  const fm = fmMatch[1];
  // Crude per-analyte parse: find each analyte's sub-block, extract status / confidence / n_studies / last_reviewed
  const cpMatch = fm.match(/contamination_profile:\n([\s\S]*?)(?=\n[a-z][a-z_]*:|$)/);
  const cpBlock = cpMatch ? cpMatch[1] : '';
  const cpLines = cpBlock.split('\n');
  const cellMap = {};
  let currentAnalyte = null;
  for (const ln of cpLines) {
    const aMatch = ln.match(/^  ([A-Za-z][A-Za-z0-9]*):\s*$/);
    if (aMatch) {
      currentAnalyte = aMatch[1];
      cellMap[currentAnalyte] = {};
      continue;
    }
    if (!currentAnalyte) continue;
    const kvMatch = ln.match(/^    ([a-z_]+):\s*(.+?)\s*$/);
    if (kvMatch) {
      cellMap[currentAnalyte][kvMatch[1]] = kvMatch[2];
    }
  }
  const routedSources = routingCounts.get(`ingredients/${slug}`) || 0;
  for (const analyte of ANALYTES) {
    totalCells += 1;
    const cell = cellMap[analyte] || {};
    const status = cell.status || 'missing';
    const confidence = (cell.confidence || 'null').replace(/['"]/g, '');
    const nStudies = parseInt(cell.n_studies || '0', 10) || 0;
    const lastReviewed = (cell.last_reviewed || '').replace(/['"]/g, '');
    const targetN = TARGET_N_HIGH;
    const delta = Math.max(0, targetN - nStudies);
    // Tally
    if (confidence === 'high') cellsHigh += 1;
    else if (confidence === 'medium') cellsMedium += 1;
    else if (confidence === 'low') cellsLow += 1;
    else if (status === 'populated' && nStudies === 0) cellsPopulatedNoData += 1;
    else if (status === 'pending' || status === 'missing') cellsPending += 1;
    else cellsUnknown += 1;
    rows.push({
      slug, analyte, status, confidence, n_studies: nStudies,
      last_reviewed: lastReviewed, target_n: targetN, delta,
      routed_sources: routedSources,
    });
  }
}

// --- write CSV ---
const csvHeader = 'slug,analyte,status,confidence,n_studies,last_reviewed,target_n,delta,routed_sources';
const csvBody = rows.map(r =>
  [r.slug, r.analyte, r.status, r.confidence, r.n_studies, r.last_reviewed, r.target_n, r.delta, r.routed_sources].join(',')
).join('\n');
fs.writeFileSync(OUT_CSV, csvHeader + '\n' + csvBody + '\n');

// --- summary ---
const completeCells = cellsHigh + cellsPopulatedNoData;  // high OR declared data gap = "done"
const remainingCells = totalCells - completeCells;

console.log('=== Completion Matrix ===');
console.log(`Total ingredient pages: ${ingredientFiles.length}`);
console.log(`Total cells (ingredient × analyte): ${totalCells}`);
console.log('');
console.log('By state:');
console.log(`  confidence: high              ${cellsHigh}  (DONE)`);
console.log(`  populated n=0 (declared gap)  ${cellsPopulatedNoData}  (DONE)`);
console.log(`  confidence: medium            ${cellsMedium}  (needs more sources)`);
console.log(`  confidence: low               ${cellsLow}  (needs more sources)`);
console.log(`  pending/missing               ${cellsPending}  (needs research)`);
console.log(`  unknown                       ${cellsUnknown}`);
console.log('');
console.log(`COMPLETE: ${completeCells} / ${totalCells} = ${(100 * completeCells / totalCells).toFixed(1)}%`);
console.log(`REMAINING: ${remainingCells} cells need work`);
console.log('');

// Distribution of delta (sources-needed) for non-complete cells
const deltaBuckets = { '0': 0, '1-3': 0, '4-6': 0, '7-9': 0, '10+': 0 };
for (const r of rows) {
  if (r.confidence === 'high' || (r.status === 'populated' && r.n_studies === 0)) continue;
  if (r.delta === 0) deltaBuckets['0'] += 1;
  else if (r.delta <= 3) deltaBuckets['1-3'] += 1;
  else if (r.delta <= 6) deltaBuckets['4-6'] += 1;
  else if (r.delta <= 9) deltaBuckets['7-9'] += 1;
  else deltaBuckets['10+'] += 1;
}
console.log('Delta-to-target (sources needed per non-complete cell):');
for (const [k, v] of Object.entries(deltaBuckets)) {
  console.log(`  ${k}: ${v} cells`);
}

// Top 10 most-needy ingredients (most cells away from done)
const ingredientNeed = new Map();
for (const r of rows) {
  if (r.confidence === 'high' || (r.status === 'populated' && r.n_studies === 0)) continue;
  ingredientNeed.set(r.slug, (ingredientNeed.get(r.slug) || 0) + r.delta);
}
const ranked = [...ingredientNeed.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15);
console.log('');
console.log('Top 15 ingredients by total source-delta:');
for (const [slug, total] of ranked) console.log(`  ${slug.padEnd(40)} ${total}`);

console.log('');
console.log(`Wrote: ${OUT_CSV}`);
