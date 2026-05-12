#!/usr/bin/env node
// Sweep ingredient pages to enforce the Part 6 coverage rule and body-table requirement.
//
// Phase 1 — frontmatter cleanup (mixed-state pages):
//   For pages with at least one non-`pending` sub-block AND at least one `pending`
//   sub-block, advance the pending ones to:
//     status: populated
//     typical_ppb: [null, null]
//     p95_ppb: null
//     confidence: null
//     n_studies: 0
//     last_reviewed: <today>
//   This converts implicit silent skips into explicit declared data gaps.
//
// Phase 2 — body-table insertion (non-stub pages missing the table):
//   For pages with any non-`pending` sub-block that lack the body-level
//   "## Heavy metal contamination profile" heading, insert the table immediately
//   before the first body-level `## ` heading (or at end-of-file as fallback).
//   Cells derive from frontmatter. "Key sources" left as "—" pending Phase 3 enrichment.
//
// Bumps the page `updated:` frontmatter field on every modified page.
// Idempotent: re-running on a clean state is a no-op.
//
// Usage:
//   node tools/sweep-ingredient-coverage.mjs            # dry-run, prints summary
//   node tools/sweep-ingredient-coverage.mjs --apply    # writes changes

import fs from 'node:fs';
import path from 'node:path';

const INGREDIENTS_DIR = 'wiki/ingredients';
const METALS = ['Pb', 'Cd', 'iAs', 'tAs', 'tHg', 'Ni', 'Al', 'Cr', 'Sn', 'U'];
const TABLE_HEADING = 'Heavy metal contamination profile';
const TODAY = new Date().toISOString().slice(0, 10);
const APPLY = process.argv.includes('--apply');

function splitFrontmatter(content) {
  const m = content.match(/^(---\n[\s\S]*?\n---\n)([\s\S]*)$/);
  if (!m) return null;
  return { frontmatter: m[1], body: m[2] };
}

function getSubBlockRange(frontmatter, metal) {
  // Match the metal sub-block: `  <Metal>:\n` + indented lines until next sibling key.
  const re = new RegExp(
    `(^  ${metal}:\\s*\\n(?:    [^\\n]*\\n)+)`,
    'm'
  );
  const m = frontmatter.match(re);
  if (!m) return null;
  return { fullMatch: m[0], index: m.index };
}

function getSubBlockStatus(subBlockText) {
  const m = subBlockText.match(/^\s+status:\s*(\S+)/m);
  return m ? m[1] : null;
}

function parseSubBlock(subBlockText) {
  const get = (key) => {
    const m = subBlockText.match(new RegExp(`^\\s+${key}:\\s*(.+)$`, 'm'));
    return m ? m[1].trim() : null;
  };
  return {
    status: get('status'),
    typical_ppb: get('typical_ppb'),
    p95_ppb: get('p95_ppb'),
    confidence: get('confidence'),
    n_studies: get('n_studies'),
    last_reviewed: get('last_reviewed'),
  };
}

function makeDataGapSubBlock(metal) {
  return (
    `  ${metal}:\n` +
    `    status: populated\n` +
    `    typical_ppb: [null, null]\n` +
    `    p95_ppb: null\n` +
    `    confidence: null\n` +
    `    n_studies: 0\n` +
    `    last_reviewed: ${TODAY}\n`
  );
}

function bumpUpdated(frontmatter) {
  // Replace the top-level `updated:` line with today's date, or insert one if missing.
  if (/^updated:\s*\S+/m.test(frontmatter)) {
    return frontmatter.replace(/^updated:\s*\S+.*$/m, `updated: ${TODAY}`);
  }
  // Insert before the closing `---`
  return frontmatter.replace(/\n---\n$/, `\nupdated: ${TODAY}\n---\n`);
}

function renderCoverageCell(parsed) {
  const status = parsed.status;
  const n = parsed.n_studies;
  if (status === 'pending') return 'pending';
  if (status === 'in_progress') return `n=${n} (in progress)`;
  if (status === 'populated') {
    if (n === '0') return 'data gap';
    return `n=${n}`;
  }
  return '—';
}

function renderTypicalCell(parsed) {
  const raw = parsed.typical_ppb;
  if (!raw || /^\[null,\s*null\]$/.test(raw)) return '—';
  // [X, Y] or [null, Y] or [X, null]
  const m = raw.match(/^\[\s*([^,]+),\s*([^\]]+)\]$/);
  if (!m) return raw;
  const a = m[1].trim();
  const b = m[2].trim();
  if (a === 'null' && b === 'null') return '—';
  if (a === 'null') return `up to ${b}`;
  if (b === 'null') return a;
  if (a === b) return a;
  return `${a}–${b}`;
}

function renderScalarCell(value) {
  if (value === null || value === 'null') return '—';
  return value;
}

function buildTable(frontmatter) {
  const rows = [];
  for (const metal of METALS) {
    const sb = getSubBlockRange(frontmatter, metal);
    if (!sb) {
      rows.push(`| ${metal} | — | — | — | — | — |`);
      continue;
    }
    const parsed = parseSubBlock(sb.fullMatch);
    const coverage = renderCoverageCell(parsed);
    const typical = renderTypicalCell(parsed);
    const p95 = renderScalarCell(parsed.p95_ppb);
    const confidence = renderScalarCell(parsed.confidence);
    rows.push(`| ${metal} | ${coverage} | ${typical} | ${p95} | ${confidence} | — |`);
  }
  return [
    `## ${TABLE_HEADING}`,
    '',
    'Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column is populated by the per-metal body sections below where they exist; an automated Phase 3 enrichment will lift attributions into this table.',
    '',
    '| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |',
    '|---------|----------|---------------|-----------|------------|-------------|',
    ...rows,
    '',
  ].join('\n');
}

function insertTable(body, tableText) {
  // Insert before the first `^## ` heading. Fallback: end of file.
  const m = body.match(/^## /m);
  if (m) {
    const idx = m.index;
    return body.slice(0, idx) + tableText + '\n' + body.slice(idx);
  }
  return body + (body.endsWith('\n') ? '' : '\n') + '\n' + tableText;
}

function hasBodyTable(body) {
  const re = new RegExp(`^#{1,6}\\s+${TABLE_HEADING}\\b`, 'im');
  return re.test(body);
}

const files = fs.readdirSync(INGREDIENTS_DIR)
  .filter(f => f.endsWith('.md'))
  .sort();

const stats = {
  total: files.length,
  schema_skip: 0,
  stub_skip: 0,
  unchanged: 0,
  phase1_pages: 0,
  phase1_sub_blocks_advanced: 0,
  phase2_pages: 0,
};

const changedFiles = [];

for (const file of files) {
  const filePath = path.join(INGREDIENTS_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const split = splitFrontmatter(content);
  if (!split) {
    stats.schema_skip++;
    continue;
  }
  let { frontmatter, body } = split;
  if (!/^contamination_profile:/m.test(frontmatter)) {
    stats.schema_skip++;
    continue;
  }

  // Classify the page
  const statuses = {};
  let missingSubBlock = false;
  for (const metal of METALS) {
    const sb = getSubBlockRange(frontmatter, metal);
    if (!sb) {
      missingSubBlock = true;
      statuses[metal] = null;
      continue;
    }
    statuses[metal] = getSubBlockStatus(sb.fullMatch);
  }
  if (missingSubBlock) {
    stats.schema_skip++;
    continue;
  }

  const pendingMetals = METALS.filter(m => statuses[m] === 'pending');
  const advancedMetals = METALS.filter(m => statuses[m] === 'in_progress' || statuses[m] === 'populated');

  if (pendingMetals.length === METALS.length) {
    // Untouched stub — leave alone
    stats.stub_skip++;
    continue;
  }

  let changed = false;

  // Phase 1: advance pending sub-blocks to data-gap state
  if (pendingMetals.length > 0 && advancedMetals.length > 0) {
    for (const metal of pendingMetals) {
      const sb = getSubBlockRange(frontmatter, metal);
      if (!sb) continue;
      frontmatter = frontmatter.slice(0, sb.index) + makeDataGapSubBlock(metal) + frontmatter.slice(sb.index + sb.fullMatch.length);
      stats.phase1_sub_blocks_advanced++;
    }
    stats.phase1_pages++;
    changed = true;
  }

  // Phase 2: insert body table if missing
  if (!hasBodyTable(body)) {
    const table = buildTable(frontmatter);
    body = insertTable(body, table);
    stats.phase2_pages++;
    changed = true;
  }

  if (changed) {
    frontmatter = bumpUpdated(frontmatter);
    const updated = frontmatter + body;
    changedFiles.push({ file, filePath, content: updated });
  } else {
    stats.unchanged++;
  }
}

console.log(JSON.stringify(stats, null, 2));

if (APPLY) {
  for (const { filePath, content } of changedFiles) {
    fs.writeFileSync(filePath, content);
  }
  console.error(`Wrote ${changedFiles.length} files.`);
} else {
  console.error(`Dry run. ${changedFiles.length} files would be modified. Re-run with --apply to write.`);
  if (changedFiles.length > 0) {
    console.error('First 5 candidates:');
    for (const c of changedFiles.slice(0, 5)) console.error(`  ${c.file}`);
  }
}
