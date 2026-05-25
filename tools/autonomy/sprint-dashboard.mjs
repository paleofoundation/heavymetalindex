#!/usr/bin/env node
// sprint-dashboard.mjs
//
// Regenerates wiki/sprint-status.md — the single live dashboard Karen
// opens in Obsidian to know how the 3-day 95%-confidence sprint is going.
//
// Inputs (all read fresh each run):
//   - data/evidence/completion-matrix.csv      (cell-state progress)
//   - data/evidence/audit-queue.csv            (audit lane depth)
//   - data/evidence/wishlist-fetch-audit.csv   (fetcher decisions)
//   - data/evidence/autonomy/heartbeat.txt     (daemon health)
//   - git log (commit rate, last commit, sync state)
//   - raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ (queue depth)
//
// Output: wiki/sprint-status.md (overwritten every tick)

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'wiki/sprint-status.md');
const COMPLETION_CSV = path.join(ROOT, 'data/evidence/completion-matrix.csv');
const AUDIT_CSV = path.join(ROOT, 'data/evidence/audit-queue.csv');
const WISHLIST_CSV = path.join(ROOT, 'data/evidence/wishlist-fetch-audit.csv');
const HEARTBEAT = path.join(ROOT, 'data/evidence/autonomy/heartbeat.txt');
const AUTO_FETCHED = path.join(ROOT, 'raw/manual-fetch/seasonal-geographic-variance/auto-fetched');
const HISTORY = path.join(ROOT, 'data/evidence/sprint-history.jsonl');

function safeRead(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return ''; }
}

function sh(cmd) {
  try { return execSync(cmd, { encoding: 'utf8' }).trim(); } catch { return ''; }
}

// --- completion matrix tally ---
const cmRaw = safeRead(COMPLETION_CSV);
const cmLines = cmRaw.split('\n').filter(Boolean).slice(1);
const cmCells = { high: 0, medium: 0, low: 0, populated_n0: 0, pending: 0, other: 0, total: 0 };
const ingredientDelta = new Map(); // slug → cumulative delta
for (const line of cmLines) {
  const cols = line.split(',');
  if (cols.length < 7) continue;
  const [slug, , status, confidence, nStudies] = cols;
  const n = parseInt(nStudies, 10) || 0;
  const delta = parseInt(cols[7] || '0', 10) || 0;
  cmCells.total += 1;
  if (confidence === 'high') cmCells.high += 1;
  else if (status === 'populated' && n === 0) cmCells.populated_n0 += 1;
  else if (confidence === 'medium') cmCells.medium += 1;
  else if (confidence === 'low') cmCells.low += 1;
  else if (status === 'pending' || status === 'missing') cmCells.pending += 1;
  else cmCells.other += 1;
  if (!(confidence === 'high' || (status === 'populated' && n === 0))) {
    ingredientDelta.set(slug, (ingredientDelta.get(slug) || 0) + delta);
  }
}
const cmDone = cmCells.high + cmCells.populated_n0;
const cmTotal = cmCells.total || 1;
const cmPct = (100 * cmDone / cmTotal).toFixed(1);

// --- audit queue ---
const aqRaw = safeRead(AUDIT_CSV);
const aqLines = aqRaw.split('\n').slice(1);
const aqState = {};
for (const line of aqLines) {
  const cols = line.split(',');
  const status = (cols[5] || '').trim();
  if (!status) continue;
  aqState[status] = (aqState[status] || 0) + 1;
}

// --- wishlist fetcher ---
const wlRaw = safeRead(WISHLIST_CSV);
const wlLines = wlRaw.split('\n').slice(1);
const wlState = {};
let wlIngested = 0, wlDownloaded = 0;
for (const line of wlLines) {
  const cols = line.split(',');
  const d = (cols[2] || '').trim();
  if (!d) continue;
  if (d === 'ingested') wlIngested++;
  if (d === 'downloaded') wlDownloaded++;
  wlState[d] = (wlState[d] || 0) + 1;
}

// --- auto-fetched queue ---
let autoFetchedCount = 0;
try {
  autoFetchedCount = fs.readdirSync(AUTO_FETCHED).filter(f => f.endsWith('.pdf')).length;
} catch {}

// --- daemon heartbeat ---
const hbRaw = safeRead(HEARTBEAT).trim();
let hbAgeMin = null;
if (hbRaw) {
  // Heartbeat format: 2026-05-25T15-25-42Z (dashes in time too, not parseable by Date directly)
  const m = hbRaw.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2})-(\d{2})-(\d{2})Z$/);
  if (m) {
    const hbDate = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]));
    hbAgeMin = Math.round((Date.now() - hbDate.getTime()) / 60000);
  }
}

// --- git state ---
const lastCommit = sh('git log -1 --pretty=format:"%h %ar — %s"');
const commitsLast1h = parseInt(sh("git log --since='1 hour ago' --oneline | wc -l"), 10) || 0;
const commitsLast24h = parseInt(sh("git log --since='24 hours ago' --oneline | wc -l"), 10) || 0;
const unpushed = parseInt(sh('git log "@{u}.." --oneline 2>/dev/null | wc -l'), 10) || 0;
const branch = sh('git branch --show-current') || 'main';

// --- top 10 most-needy ingredients ---
const ranked = [...ingredientDelta.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);

// --- velocity from history ---
let velocity = null;
try {
  if (fs.existsSync(HISTORY)) {
    const lines = fs.readFileSync(HISTORY, 'utf8').split('\n').filter(Boolean);
    // Find the snapshot from ~1 hour ago
    const now = Date.now();
    let candidate = null;
    for (let i = lines.length - 1; i >= 0; i--) {
      const entry = JSON.parse(lines[i]);
      const age = (now - new Date(entry.ts).getTime()) / 60000;
      if (age >= 50 && age <= 70) { candidate = entry; break; }
      if (age > 90) break;
    }
    if (candidate) {
      velocity = {
        ageMin: Math.round((now - new Date(candidate.ts).getTime()) / 60000),
        doneDelta: cmDone - candidate.done,
      };
    }
  }
} catch {}

// --- append to history (truncated to last 500 rows) ---
const histEntry = { ts: new Date().toISOString(), done: cmDone, total: cmTotal,
  high: cmCells.high, medium: cmCells.medium, low: cmCells.low,
  pending: cmCells.pending, autoFetched: autoFetchedCount };
try {
  let lines = [];
  if (fs.existsSync(HISTORY)) {
    lines = fs.readFileSync(HISTORY, 'utf8').split('\n').filter(Boolean);
  }
  lines.push(JSON.stringify(histEntry));
  if (lines.length > 500) lines = lines.slice(-500);
  fs.writeFileSync(HISTORY, lines.join('\n') + '\n');
} catch {}

// --- compose dashboard ---
const lines = [
  '---',
  'type: dashboard',
  'updated: ' + new Date().toISOString(),
  '---',
  '',
  '# Sprint Status — 95% Confidence Push',
  '',
  '_Auto-regenerated every daemon tick. Open in Obsidian for the live view._',
  '',
  '## Headline',
  '',
  `**${cmDone} / ${cmTotal} cells done (${cmPct}%)** — ${cmTotal - cmDone} remaining`,
  '',
  velocity ? `Velocity: **+${velocity.doneDelta} cells in the last ${velocity.ageMin} min**` : 'Velocity: (insufficient history; need 1+ hour of dashboard runs)',
  '',
  '## Cell state distribution',
  '',
  '| State | Count | Counts as |',
  '|---|---|---|',
  `| confidence: high | ${cmCells.high} | ✅ done |`,
  `| populated n=0 (declared gap) | ${cmCells.populated_n0} | ✅ done |`,
  `| confidence: medium | ${cmCells.medium} | ⏳ needs more sources |`,
  `| confidence: low | ${cmCells.low} | ⏳ needs more sources |`,
  `| pending / missing | ${cmCells.pending} | 🔴 needs first research |`,
  `| other / unknown | ${cmCells.other} | 🟡 audit |`,
  '',
  '## Pipeline health',
  '',
  '| Component | State |',
  '|---|---|',
  `| Daemon heartbeat | ${hbAgeMin === null ? '⚠️ unknown' : hbAgeMin < 35 ? `✅ ${hbAgeMin} min ago` : `⚠️ ${hbAgeMin} min ago (stale)`} |`,
  `| auto-fetched/ PDFs in queue | ${autoFetchedCount} (fresh work for Codex/daemon ingest) |`,
  `| Audit queue: pending | ${aqState['pending'] || 0} ${(aqState['pending'] || 0) <= 5 ? '✅' : '⚠️'} |`,
  `| Audit queue: pending-audit-spawn-failed | ${aqState['pending-audit-spawn-failed'] || 0} (async lane) |`,
  `| Wishlist: total downloaded historically | ${wlDownloaded} |`,
  `| Wishlist: total ingested historically | ${wlIngested} |`,
  `| Repo sync | ${unpushed === 0 ? '✅ synced' : `⚠️ ${unpushed} commit(s) ahead of origin/${branch}`} |`,
  `| Commits last 1 hour | ${commitsLast1h} |`,
  `| Commits last 24 hours | ${commitsLast24h} |`,
  '',
  '## Most-needy ingredients (top 10 by total source-delta)',
  '',
  '| Slug | Source-delta needed |',
  '|---|---|',
  ...ranked.map(([slug, d]) => `| ${slug} | ${d} |`),
  '',
  '## Last commit',
  '',
  '```',
  lastCommit,
  '```',
  '',
  '## How to read this',
  '',
  'The headline number is the only one that matters: **cells done / total**. Everything else is process metric.',
  '',
  'A well-oiled engine looks like:',
  '- **Heartbeat fresh** (<35 min old, daemon ticking)',
  '- **auto-fetched/ depth fluctuating** (refill then drain then refill — not stuck at zero or piling up indefinitely)',
  '- **Audit queue pending ≤5** (Codex draining it)',
  '- **Commits/hour ≥ 5** during active sprint',
  '- **Velocity positive** (cells done going UP between dashboards)',
  '- **Unpushed = 0** (daemon pushes every tick)',
  '',
  'When velocity stalls for >2 hours, something upstream broke. Check `data/evidence/autonomy/daemon-runs/` for the most recent tick log and look for "FAIL:" lines.',
  '',
];

fs.writeFileSync(OUT, lines.join('\n'));
console.log(`Sprint dashboard updated: ${OUT}`);
console.log(`  ${cmDone}/${cmTotal} cells done (${cmPct}%)`);
console.log(`  auto-fetched/=${autoFetchedCount}  unpushed=${unpushed}  commits/1h=${commitsLast1h}`);
