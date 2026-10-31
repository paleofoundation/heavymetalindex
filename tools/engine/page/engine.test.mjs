import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { classifyBasis, classifyForm, siteContext, EXTERNAL_SITES } from './classify.mjs';
import { P } from './prose.mjs';
import { renderSentenceCitations } from '../../contracts/pilot/sentence-citations.mjs';
import { terminalReasons, modes } from '../../contracts/ingredient-evidence-ledger.mjs';
import { root, GEMS } from './common.mjs';
import { loadPageEvidence } from './inputs.mjs';
import { buildOccurrence, rowTarget } from './model.mjs';
import { discoverableFiles, inspectPresentation } from '../gates/index.mjs';

test('one generic rule classifies basis, form and setting', () => {
  assert.equal(classifyBasis('fresh weight'), 'fw');
  assert.equal(classifyBasis('As sold, as eaten or fresh weight'), 'fw');
  assert.equal(classifyBasis('dry weight (oven-dried)'), 'dw');
  assert.equal(classifyBasis('unstated'), 'unstated');
  assert.equal(classifyBasis(''), 'unstated');
  assert.equal(classifyForm('Apple juice, bottled').key, 'juice');
  assert.equal(classifyForm('Sweet corn, boiled').key, 'cooked');
  assert.equal(classifyForm('Whole fresh apple with peel').key, 'raw');
  for (const s of ['mining', 'industrial', 'wastewater', 'experimental', 'fertiliser', 'manufacturer']) assert.ok(EXTERNAL_SITES.has(s));
  assert.equal(siteContext('wastewater_irrigated'), 'wastewater');
  assert.equal(siteContext('ordinary_agricultural', 'pot experiment'), 'experimental');
  assert.equal(siteContext('market_retail'), 'market');
});

test('templated passages carry sentence-level citations that the shared renderer accepts', () => {
  const p = P(['Lead was below 4 µg/kg in every composite.', ['fda2022-tds-elements-fy2018-fy2020']], ['Heat does not destroy metals.', []], ['Means ranged from 0.5 to 2.1 µg/kg.', ['fda2022-tds-elements-fy2018-fy2020', GEMS]]);
  assert.deepEqual(p.citation_spans.map(s => s.after), ['Lead was below 4 µg/kg in every composite.', 'Means ranged from 0.5 to 2.1 µg/kg.']);
  assert.doesNotThrow(() => renderSentenceCitations(p));
  assert.deepEqual(P(['No source supports this yet.', []]), { text: 'No source supports this yet.', source_keys: [] });
  assert.equal(P(['Unknown source.', ['not-a-real-source-record']]).source_keys.length, 0);
});

test('every legacy finding becomes exactly one row with ordered attempts and a terminal reason when unrated', () => {
  const evidence = loadPageEvidence({ family: 'ingredient', slug: 'honey' });
  const occ = buildOccurrence(evidence);
  assert.deepEqual(new Set(occ.rows.map(r => r.finding_id)), new Set(evidence.legacy_finding_ids));
  assert.equal(new Set(occ.rows.map(r => r.result_id)).size, occ.rows.length);
  for (const r of occ.rows) {
    assert.match(r.result_id, /^hmi-occurrence-honey-[A-Za-z_-]+-\d+$/);
    assert.deepEqual(r.comparison_attempts.map(a => a.mode), modes);
    if (r.comparison_state === 'unavailable') assert.ok(terminalReasons.includes(r.reason_code), r.result_id);
    if (r.hold) assert.equal(rowTarget(r), null);
    if (['range', 'max', 'min'].includes(r.statistic)) assert.equal(rowTarget(r), null);
  }
  // Mining, industrial, wastewater, experimental, fertiliser and manufacturer rows never set a reference.
  const owners = new Set(occ.unit_list.map(u => u.result_id));
  for (const r of occ.rows.filter(r => EXTERNAL_SITES.has(r.site_context))) assert.ok(!owners.has(r.result_id) || r.source === GEMS);
});

test('discovery guard finds derived files that would read as source × food indexes', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'engine-guard-'));
  fs.writeFileSync(path.join(dir, 'leak.json'), JSON.stringify({ rows: [{ source_id: 'x2020-study', material: 'honey' }] }));
  fs.writeFileSync(path.join(dir, 'safe.json'), JSON.stringify({ items: [{ source_id: 'x2020-study', disposition: 'out_of_scope' }] }));
  const found = discoverableFiles(path.relative(root, dir)).map(f => path.basename(f));
  assert.deepEqual(found, ['leak.json']);
  fs.rmSync(dir, { recursive: true, force: true });
});

test('product mode applies the shared presentation checks to a product page', () => {
  const html = '<html><body data-slug="products/x"><main><p>No canonical marker</p></main></body></html>';
  const r = inspectPresentation({ family: 'product', slug: 'x' }, html);
  assert.equal(r.applicable, true);
  assert.ok(r.errors.includes('Quick Read panel missing'));
  assert.ok(r.errors.includes('Original hero image missing'));
});
