import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { gateReport, releaseStatus, ALWAYS_STAGED } from './release-gates.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../../..');

test('--gates-only with a foreign control row fails the release (Greptile P1 a)', () => {
  // A built page that carries another food's control row.
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'hmi-gates-'));
  fs.mkdirSync(path.join(dir, 'ingredients'));
  fs.writeFileSync(path.join(dir, 'ingredients/cantaloupe.html'), '<tr data-control-id="apple-apple-control-1"></tr><p>Wash (evidence from apple): ok.</p>');
  const lint = spawnSync(process.execPath, [path.join(root, 'tools/engine/gates/cross-ingredient.mjs'), dir], { encoding: 'utf8' });
  fs.rmSync(dir, { recursive: true, force: true });
  assert.notEqual(lint.status, 0);
  // The gates-only report counts that lint, so the release status and exit code fail.
  const steps = [{ name: 'postbuild: node tools/engine/gates/cross-ingredient.mjs public', status: lint.status }];
  const status = re => steps.filter(s => re.test(s.name)).every(s => s.status === 0) ? 'pass' : 'fail';
  const gates = gateReport({ pages: [{ fullness: 'pass' }], status, gatesOnly: true });
  assert.equal(gates.cross_ingredient, 'fail');
  assert.equal(releaseStatus(gates), 'fail');
});

test('a legacy-only release still stages the cross-ingredient lint (Greptile P1 b)', () => {
  assert.ok(ALWAYS_STAGED.includes('tools/engine/gates/cross-ingredient.mjs'));
  const stage = fs.readFileSync(path.join(here, 'stage.mjs'), 'utf8').split('\n');
  const line = stage.find(l => l.includes('for (const f of ALWAYS_STAGED)'));
  assert.ok(line, 'stage.mjs stages ALWAYS_STAGED');
  // Not behind the engine-pages condition, so legacy-only releases get it too.
  assert.ok(!/kind === 'engine'/.test(line));
});
