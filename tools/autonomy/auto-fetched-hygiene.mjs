#!/usr/bin/env node
// auto-fetched-hygiene.mjs
//
// Move every PDF in raw/manual-fetch/seasonal-geographic-variance/auto-fetched/
// that has already been dispositioned (per data/evidence/wishlist-fetch-audit.csv
// or by virtue of an existing wiki/sources/*.md page) out of auto-fetched/.
// After this script runs, auto-fetched/ should contain ONLY PDFs that no agent
// has yet dispositioned. That's the true work queue.
//
// Destinations:
//   - skip:* and fail:* dispositions → raw/manual-fetch/seasonal-geographic-variance/skipped/<reason>/
//   - ingested + rolled-up dispositions → raw/manual-fetch/seasonal-geographic-variance/ingested/
//   - PDFs whose stem is referenced by an existing wiki/sources/*.md page (in raw_path frontmatter) → ingested/
//
// Run modes:
//   --dry-run (default off): print actions without moving files
//   --report: write a structured report to data/evidence/autonomy/auto-fetched-hygiene-<date>.md

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, 'raw/manual-fetch/seasonal-geographic-variance/auto-fetched');
const SKIPPED_BASE = path.join(ROOT, 'raw/manual-fetch/seasonal-geographic-variance/skipped');
const INGESTED_DIR = path.join(ROOT, 'raw/manual-fetch/seasonal-geographic-variance/ingested');
const WISHLIST_CSV = path.join(ROOT, 'data/evidence/wishlist-fetch-audit.csv');
const WIKI_SOURCES = path.join(ROOT, 'wiki/sources');
const REPORTS_DIR = path.join(ROOT, 'data/evidence/autonomy');

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has('--dry-run');
const WRITE_REPORT = args.has('--report');

if (!fs.existsSync(SOURCE_DIR)) {
  console.error(`Source directory not found: ${SOURCE_DIR}`);
  process.exit(1);
}

// 1. Index all dispositioned filenames from wishlist-fetch-audit.csv
const csv = fs.readFileSync(WISHLIST_CSV, 'utf8');
const lines = csv.split('\n').filter(l => l.trim().length > 0);
const header = lines[0].split(',');
const idxDecision = header.indexOf('decision');
const idxPath = header.indexOf('downloaded_path');

const dispositions = new Map(); // filename → {decision, reason}
for (const line of lines.slice(1)) {
  // Naive CSV: most rows don't quote, but some do; fall back to indexOf if comma-in-quote breaks split
  const cols = line.split(',');
  if (cols.length < Math.max(idxDecision, idxPath) + 1) continue;
  const decision = cols[idxDecision];
  const downloadedPath = cols[idxPath];
  if (!downloadedPath || !downloadedPath.includes('auto-fetched/')) continue;
  const filename = path.basename(downloadedPath);
  // Last write wins (most recent decision)
  dispositions.set(filename, { decision, downloadedPath });
}

// 2. Index all PDF stems referenced by existing wiki/sources/*.md raw_path frontmatter
const sourcePages = fs.readdirSync(WIKI_SOURCES).filter(f => f.endsWith('.md'));
const ingestedFilenames = new Set();
for (const page of sourcePages) {
  const content = fs.readFileSync(path.join(WIKI_SOURCES, page), 'utf8');
  // Match raw_path values that point at auto-fetched
  const matches = content.matchAll(/raw_path:\s*"?([^"\n]+)"?/g);
  for (const m of matches) {
    const rawPath = m[1].trim();
    if (rawPath.includes('auto-fetched/')) {
      ingestedFilenames.add(path.basename(rawPath));
    }
  }
}

// 3. Walk auto-fetched/ and decide each PDF
const pdfs = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.pdf'));
const actions = []; // {filename, dest, kind, reason}

for (const filename of pdfs) {
  if (ingestedFilenames.has(filename)) {
    actions.push({ filename, dest: INGESTED_DIR, kind: 'ingested', reason: 'has wiki/sources page' });
    continue;
  }
  const d = dispositions.get(filename);
  if (!d) {
    // Truly un-dispositioned — leave in place
    continue;
  }
  if (d.decision === 'ingested') {
    actions.push({ filename, dest: INGESTED_DIR, kind: 'ingested', reason: 'wishlist-fetch-audit decision=ingested' });
  } else if (d.decision.startsWith('skip:') || d.decision.startsWith('fail:')) {
    // Bucket by reason; normalize the colon for filesystem-safety
    const bucket = d.decision.replace(/[:\/\s]/g, '_');
    actions.push({ filename, dest: path.join(SKIPPED_BASE, bucket), kind: 'skipped', reason: d.decision });
  } else if (d.decision.startsWith('review:')) {
    // Leave review:* in place — these need a human or Codex decision
    continue;
  }
}

// 4. Execute (or dry-run report)
const summary = { moved_ingested: 0, moved_skipped: 0, left_alone: 0, total_pdfs: pdfs.length };
for (const a of actions) {
  const src = path.join(SOURCE_DIR, a.filename);
  const dst = path.join(a.dest, a.filename);
  if (!DRY_RUN) {
    fs.mkdirSync(a.dest, { recursive: true });
    fs.renameSync(src, dst);
  }
  if (a.kind === 'ingested') summary.moved_ingested++;
  if (a.kind === 'skipped') summary.moved_skipped++;
}
summary.left_alone = summary.total_pdfs - summary.moved_ingested - summary.moved_skipped;
summary.dry_run = DRY_RUN;

console.log(JSON.stringify(summary, null, 2));

// 5. Optional structured report
if (WRITE_REPORT) {
  const today = new Date().toISOString().slice(0, 10);
  const reportPath = path.join(REPORTS_DIR, `auto-fetched-hygiene-${today}.md`);
  const buckets = {};
  for (const a of actions.filter(x => x.kind === 'skipped')) {
    const key = a.reason;
    buckets[key] = (buckets[key] || 0) + 1;
  }
  const bucketLines = Object.entries(buckets)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `- \`${k}\`: ${v}`)
    .join('\n');
  const md = `# auto-fetched/ hygiene sweep — ${today}\n\n` +
    `Total PDFs in folder at sweep: ${summary.total_pdfs}\n` +
    `Moved to ingested/: ${summary.moved_ingested}\n` +
    `Moved to skipped/<reason>/: ${summary.moved_skipped}\n` +
    `Left in auto-fetched/ (truly un-dispositioned, real work queue): ${summary.left_alone}\n` +
    `Dry run: ${DRY_RUN}\n\n` +
    `## Skip buckets\n\n${bucketLines || '(none)'}\n`;
  fs.writeFileSync(reportPath, md);
  console.log(`Wrote report: ${reportPath}`);
}
