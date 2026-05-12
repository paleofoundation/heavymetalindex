#!/usr/bin/env node
// Audit ingredient pages against the Part 6 coverage rule:
//   - Untouched stubs (all 10 sub-blocks `pending`) are legitimate.
//   - Fully-addressed pages (zero `pending` sub-blocks) are legitimate.
//   - Mixed-state pages (some `pending`, some `in_progress`/`populated`) are lint failures.
// Also flags pages missing the body-level "Heavy metal contamination profile" table
// when the YAML has any non-`pending` sub-block.
//
// Usage: node tools/audit-ingredient-metal-coverage.mjs [--write <path>]

import fs from 'node:fs';
import path from 'node:path';

const INGREDIENTS_DIR = 'wiki/ingredients';
const METALS = ['Pb', 'Cd', 'iAs', 'tAs', 'tHg', 'Ni', 'Al', 'Cr', 'Sn', 'U'];
const TABLE_HEADING = 'Heavy metal contamination profile';

function readFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : null;
}

function getSubBlockStatus(frontmatter, metal) {
  // Match "  <metal>:" followed by indented lines until the next top-level key
  // or another metal sub-block. We capture the inner block.
  const re = new RegExp(
    `^  ${metal}:\\s*\\n((?:    [^\\n]*\\n)+)`,
    'm'
  );
  const m = frontmatter.match(re);
  if (!m) return null; // schema-missing
  const statusMatch = m[1].match(/^\s+status:\s*(\S+)/m);
  return statusMatch ? statusMatch[1] : null;
}

function hasContaminationProfile(frontmatter) {
  return /^contamination_profile:/m.test(frontmatter);
}

function hasBodyTable(content) {
  // Heading match: "## Heavy metal contamination profile" (any heading level allowed)
  const re = new RegExp(`^#{1,6}\\s+${TABLE_HEADING}\\b`, 'im');
  return re.test(content);
}

const files = fs.readdirSync(INGREDIENTS_DIR)
  .filter(f => f.endsWith('.md'))
  .sort();

const stubs = [];           // all 10 sub-blocks pending → legitimate untouched
const complete = [];        // zero pending sub-blocks → legitimate fully-addressed
const mixed = [];           // some pending + some not → lint failure
const schemaIssues = [];    // missing contamination_profile or malformed sub-blocks
const missingTable = [];    // non-stub but lacks body table

for (const file of files) {
  const filePath = path.join(INGREDIENTS_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const fm = readFrontmatter(content);
  if (!fm) {
    schemaIssues.push({ file, reason: 'no frontmatter' });
    continue;
  }
  if (!hasContaminationProfile(fm)) {
    schemaIssues.push({ file, reason: 'no contamination_profile block' });
    continue;
  }

  const statuses = {};
  const missingSubBlocks = [];
  for (const metal of METALS) {
    const status = getSubBlockStatus(fm, metal);
    if (status === null) missingSubBlocks.push(metal);
    else statuses[metal] = status;
  }

  if (missingSubBlocks.length > 0) {
    schemaIssues.push({
      file,
      reason: `missing sub-blocks: ${missingSubBlocks.join(', ')}`,
      partialStatuses: statuses,
    });
    continue;
  }

  const pending = METALS.filter(m => statuses[m] === 'pending');
  const inProgress = METALS.filter(m => statuses[m] === 'in_progress');
  const populated = METALS.filter(m => statuses[m] === 'populated');
  const advanced = [...inProgress, ...populated];

  if (pending.length === METALS.length) {
    stubs.push({ file });
  } else if (pending.length === 0) {
    complete.push({ file, inProgress: inProgress.length, populated: populated.length });
    if (!hasBodyTable(content)) missingTable.push({ file, advanced: advanced.length });
  } else {
    mixed.push({
      file,
      pending,
      in_progress: inProgress,
      populated,
    });
    if (!hasBodyTable(content)) missingTable.push({ file, advanced: advanced.length });
  }
}

// Sort mixed by number-of-pending descending (worst offenders first)
mixed.sort((a, b) => b.pending.length - a.pending.length);

const summary = {
  total: files.length,
  stubs_untouched: stubs.length,
  fully_addressed: complete.length,
  mixed_state_lint_failures: mixed.length,
  schema_issues: schemaIssues.length,
  missing_body_table: missingTable.length,
};

// Markdown report
const lines = [];
lines.push('---');
lines.push('type: lint');
lines.push('lint_check: ingredient-coverage-asymmetry');
lines.push(`run_date: ${new Date().toISOString().slice(0, 10)}`);
lines.push(`total_pages: ${summary.total}`);
lines.push(`stubs_untouched: ${summary.stubs_untouched}`);
lines.push(`fully_addressed: ${summary.fully_addressed}`);
lines.push(`mixed_state_lint_failures: ${summary.mixed_state_lint_failures}`);
lines.push(`schema_issues: ${summary.schema_issues}`);
lines.push(`missing_body_table: ${summary.missing_body_table}`);
lines.push('---');
lines.push('');
lines.push('# Ingredient metal-coverage audit');
lines.push('');
lines.push('Audits every page under `wiki/ingredients/` against the Part 6 coverage rule: any ingest that touches an ingredient page must advance all ten `contamination_profile` sub-blocks out of `pending`. Sub-blocks for analytes the source does not address advance to `populated, n_studies: 0` as declared data gaps. Mixed-state pages (some `pending`, some `in_progress`/`populated`) are lint failures.');
lines.push('');
lines.push('## Summary');
lines.push('');
lines.push('| Bucket | Count |');
lines.push('|--------|-------|');
lines.push(`| Total ingredient pages | ${summary.total} |`);
lines.push(`| Untouched stubs (all 10 \`pending\`) — legitimate | ${summary.stubs_untouched} |`);
lines.push(`| Fully addressed (zero \`pending\`) — legitimate | ${summary.fully_addressed} |`);
lines.push(`| Mixed state — **lint failures** | ${summary.mixed_state_lint_failures} |`);
lines.push(`| Schema issues (missing block / sub-blocks) | ${summary.schema_issues} |`);
lines.push(`| Non-stub pages missing the body-level "${TABLE_HEADING}" table | ${summary.missing_body_table} |`);
lines.push('');

lines.push('## Mixed-state pages (punch list, worst first)');
lines.push('');
if (mixed.length === 0) {
  lines.push('_None._');
} else {
  lines.push('| Page | # pending | # in_progress | # populated | Pending analytes |');
  lines.push('|------|-----------|---------------|-------------|------------------|');
  for (const row of mixed) {
    const link = `[[ingredients/${row.file.replace(/\.md$/, '')}]]`;
    lines.push(`| ${link} | ${row.pending.length} | ${row.in_progress.length} | ${row.populated.length} | ${row.pending.join(', ')} |`);
  }
}
lines.push('');

lines.push('## Non-stub pages missing the body-level table');
lines.push('');
if (missingTable.length === 0) {
  lines.push('_None._');
} else {
  lines.push('| Page | # sub-blocks advanced |');
  lines.push('|------|----------------------|');
  for (const row of missingTable) {
    const link = `[[ingredients/${row.file.replace(/\.md$/, '')}]]`;
    lines.push(`| ${link} | ${row.advanced} |`);
  }
}
lines.push('');

lines.push('## Schema issues');
lines.push('');
if (schemaIssues.length === 0) {
  lines.push('_None._');
} else {
  for (const row of schemaIssues) {
    lines.push(`- \`${row.file}\` — ${row.reason}`);
  }
}
lines.push('');

lines.push('## Fully addressed pages (no action needed)');
lines.push('');
if (complete.length === 0) {
  lines.push('_None._');
} else {
  for (const row of complete) {
    lines.push(`- [[ingredients/${row.file.replace(/\.md$/, '')}]]`);
  }
}
lines.push('');

const report = lines.join('\n');

// CLI output
console.log(JSON.stringify(summary, null, 2));

// Optional --write
const writeIdx = process.argv.indexOf('--write');
if (writeIdx !== -1 && process.argv[writeIdx + 1]) {
  const outPath = process.argv[writeIdx + 1];
  fs.writeFileSync(outPath, report);
  console.error(`Wrote report to ${outPath}`);
}
