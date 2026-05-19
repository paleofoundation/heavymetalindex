#!/usr/bin/env node
// reprocess-weak-matches.mjs
//
// One-shot recovery: read data/evidence/wishlist-fetch-audit.csv, find every
// row with decision="review:weak-match" AND a non-empty oa_url, try to fetch
// the PDF. If it lands as a real PDF, move it into auto-fetched/ for the
// daemon's ingest step (and Codex's fires) to pick up, and update the row's
// decision to "downloaded". If it fails (404/403/HTML/timeout), update the
// row to fail:<reason> or skip:<reason> with the specific reason.
//
// Background: the prior find-candidates.mjs DOWNLOAD_THRESHOLD was 3, which
// rejected most low-positive-score papers as review:weak-match without
// fetching. The threshold is now 1 — but the existing 102 review:weak-match
// rows were never re-attempted. This script does that one-shot recovery.
//
// Run modes:
//   --dry-run     don't actually fetch or modify; print what would happen
//   --max=N       limit attempts to N rows (default: all)
//   --min-score=S only attempt rows with positive_score >= S (default: 0)

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CSV = path.join(ROOT, 'data/evidence/wishlist-fetch-audit.csv');
const AUTO_FETCHED = path.join(ROOT, 'raw/manual-fetch/seasonal-geographic-variance/auto-fetched');
const USER_AGENT = 'HeavyMetalIndex/1.0 (mailto:karen@paleofoundation.com)';

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has('--dry-run');
const MAX_ARG = [...args].find(a => a.startsWith('--max='));
const MAX = MAX_ARG ? parseInt(MAX_ARG.split('=')[1], 10) : Infinity;
const MIN_ARG = [...args].find(a => a.startsWith('--min-score='));
const MIN_SCORE = MIN_ARG ? parseInt(MIN_ARG.split('=')[1], 10) : 0;

// Parse CSV — simple split since fields don't contain commas (URLs/DOIs don't have unescaped commas)
const raw = fs.readFileSync(CSV, 'utf8');
const lines = raw.split('\n');
const header = lines[0].split(',');
const idxDecision = header.indexOf('decision');
const idxDownloadedPath = header.indexOf('downloaded_path');
const idxPositiveScore = header.indexOf('positive_score');
const idxOaUrl = header.indexOf('oa_url');
const idxDoi = header.indexOf('doi');
const idxYear = header.indexOf('year');
const idxWishlistId = header.indexOf('wishlist_id');

function candidateFilename(cols) {
  const year = cols[idxYear] || '0000';
  const doi = (cols[idxDoi] || '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').slice(0, 60);
  const wishlist = (cols[idxWishlistId] || 'WL-XXXX').toLowerCase();
  return doi ? `${wishlist}_${year}_${doi}.pdf` : `${wishlist}_${year}_untitled.pdf`;
}

const candidates = [];
for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  if (!line.trim()) continue;
  const cols = line.split(',');
  if (cols.length < header.length) continue;
  if (cols[idxDecision] !== 'review:weak-match') continue;
  if (!cols[idxOaUrl] || !cols[idxOaUrl].startsWith('http')) continue;
  const score = parseInt(cols[idxPositiveScore], 10) || 0;
  if (score < MIN_SCORE) continue;
  candidates.push({ rowIdx: i, cols, score, url: cols[idxOaUrl] });
}

candidates.sort((a, b) => b.score - a.score);
const toAttempt = candidates.slice(0, MAX);

console.log(`Found ${candidates.length} review:weak-match rows with OA URL; attempting ${toAttempt.length}.`);

if (!DRY_RUN) fs.mkdirSync(AUTO_FETCHED, { recursive: true });

const summary = { attempted: 0, downloaded: 0, skipped_html: 0, failed: 0, fetch_errors: 0 };

for (const c of toAttempt) {
  summary.attempted++;
  const filename = candidateFilename(c.cols);
  const target = path.join(AUTO_FETCHED, filename);
  let newDecision;
  let newPath = '';

  if (fs.existsSync(target)) {
    newDecision = 'skip:already-in-staging';
    newPath = path.relative(ROOT, target);
    console.log(`  [${c.score}] already in staging: ${filename}`);
  } else if (DRY_RUN) {
    console.log(`  [${c.score}] would fetch: ${c.url.slice(0, 80)}`);
    continue;
  } else {
    process.stdout.write(`  [${c.score}] fetching ${c.url.slice(0, 70)}... `);
    try {
      const response = await fetch(c.url, {
        headers: { 'User-Agent': USER_AGENT },
        redirect: 'follow',
        signal: AbortSignal.timeout(30000),
      });
      if (!response.ok) {
        console.log(`HTTP ${response.status}`);
        newDecision = `fail:http-${response.status}`;
        summary.failed++;
      } else {
        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('pdf') && !contentType.includes('octet-stream')) {
          console.log(`not PDF (${contentType.slice(0, 30)})`);
          newDecision = `skip:not-pdf:${contentType.slice(0, 40)}`;
          summary.skipped_html++;
        } else {
          const buffer = Buffer.from(await response.arrayBuffer());
          fs.writeFileSync(target, buffer);
          const sizeKB = (buffer.length / 1024).toFixed(0);
          console.log(`${sizeKB} KB`);
          newDecision = 'downloaded';
          newPath = path.relative(ROOT, target);
          summary.downloaded++;
        }
      }
    } catch (err) {
      console.log(`error: ${err.message.slice(0, 50)}`);
      newDecision = `fail:${err.message.slice(0, 40)}`;
      summary.fetch_errors++;
    }
    await new Promise(r => setTimeout(r, 500));
  }

  // Update row in-place
  c.cols[idxDecision] = newDecision;
  c.cols[idxDownloadedPath] = newPath;
  lines[c.rowIdx] = c.cols.join(',');
}

if (!DRY_RUN && summary.attempted > 0) {
  fs.writeFileSync(CSV, lines.join('\n'));
}

console.log('');
console.log(JSON.stringify(summary, null, 2));
