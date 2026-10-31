// Read-only overlay of the repository in which the cassava audit's proposed source records
// (new papers not yet in wiki/sources) appear under wiki/sources. Every other path is a
// symlink to the real repository, so nothing shared is written. Central adoption replaces
// the overlay by writing the proposed records into wiki/sources.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export const proposedDir = 'data/evidence/contracts/ingredient-rollout-2026-10-22/cassava/proposed-sources';

// Records owned by a sibling ingredient session (read only; that session owns their text).
export const siblingDirs = ['data/evidence/contracts/ingredient-rollout-2026-10-22/plantain/proposed-sources'];
const siblingIDs = { 'adjeimensah2021-ghana-mining-home-processing-crops': siblingDirs[0] };
const dirFor = (root, id) => fs.existsSync(path.join(root, proposedDir, `${id}.md`)) ? proposedDir : siblingIDs[id] ?? proposedDir;
export function proposedSourceIDs(root) {
  const dir = path.join(root, proposedDir);
  const own = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3)) : [];
  return [...new Set([...own, ...Object.keys(siblingIDs).filter(id => fs.existsSync(path.join(root, siblingIDs[id], `${id}.md`)))])].sort();
}
// The record path for a source: the shared record when it exists, otherwise the proposed draft.
export function sourceRecordPath(root, id) {
  const shared = `wiki/sources/${id}.md`;
  return fs.existsSync(path.join(root, shared)) ? shared : `${dirFor(root, id)}/${id}.md`;
}

export function makeOverlay(root) {
  const ids = proposedSourceIDs(root).filter(id => !fs.existsSync(path.join(root, `wiki/sources/${id}.md`)));
  if (!ids.length) return { base: root, cleanup() {} };
  const base = fs.mkdtempSync(path.join(os.tmpdir(), 'hmi-cassava-overlay-'));
  const link = (from, to) => fs.symlinkSync(from, to);
  for (const e of fs.readdirSync(root)) if (e !== 'wiki') link(path.join(root, e), path.join(base, e));
  fs.mkdirSync(path.join(base, 'wiki'));
  for (const e of fs.readdirSync(path.join(root, 'wiki'))) if (e !== 'sources') link(path.join(root, 'wiki', e), path.join(base, 'wiki', e));
  fs.mkdirSync(path.join(base, 'wiki/sources'));
  for (const e of fs.readdirSync(path.join(root, 'wiki/sources'))) link(path.join(root, 'wiki/sources', e), path.join(base, 'wiki/sources', e));
  for (const id of ids) link(path.join(root, dirFor(root, id), `${id}.md`), path.join(base, 'wiki/sources', `${id}.md`));
  return { base, cleanup() { fs.rmSync(base, { recursive: true, force: true }); } };
}
