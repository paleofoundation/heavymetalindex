import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { loadStore } from '../engine/page/inputs.mjs';
import { buildOccurrence } from '../engine/page/model.mjs';
import { sourceMeta } from '../engine/page/common.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const hash = value => createHash('sha256').update(value).digest('hex');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const forbidden = /\b(?:axiom|oryzatein|rpn|grn\s*[-#]?\s*\d+)\b/i;
// Explicit admission list. New sources need a reviewed change, not an automatic seed.
const admittedSources = new Set([
  'fda2013-ias-rice-products-sampling',
  'cfia2020-toxic-metals-selected-foods-2018-19',
  'lopezcalabozo2025-vegetable-protein-concentrates',
  'ring2021-ireland-protein-powders-metals',
]);

export function buildReference(ingredient) {
  if (!['rice-protein','pea-protein'].includes(ingredient)) throw new Error('Ingredient is not admitted');
  const input = `data/evidence/findings/by-page/ingredients/${ingredient}.json`;
  const evidence = loadStore({ family: 'ingredient', slug: ingredient });
  const occurrence = buildOccurrence(evidence);
  const sourceIds = [...new Set(occurrence.record.references.flatMap(ref => ref.distribution.families))];
  for (const id of sourceIds) {
    if (!admittedSources.has(id)) throw new Error(`Unreviewed reference source: ${id}`);
  }
  const sourceFiles = sourceIds.flatMap(id => [
    `data/evidence/findings/sources/${id}.json`, `wiki/sources/${id}.md`,
  ]);
  const files = [input, ...sourceFiles, 'tools/engine/page/model.mjs', 'tools/engine/page/inputs.mjs',
    'tools/engine/page/classify.mjs', 'tools/contracts/pilot/hmi-baseline.mjs',
    'tools/evidence/build-hmtc-aggregate-distributions.mjs', 'tools/pro/build-reference.mjs'];
  const provenance = files.map(file => ({ path: file, sha256: hash(read(file)) }));
  const references = occurrence.record.references.map(ref => {
    const d = ref.distribution;
    const definition = occurrence.definitions.find(x => x.key === ref.id.split(':')[1]);
    const sources = d.families.map(id => {
      const meta = sourceMeta(id), study = evidence.sources.get(id).study;
      return { source_id: id, title: meta.title, url: new URL(meta.url, 'https://heavymetalindex.com/ingredients/').href,
        page_url: `https://heavymetalindex.com/sources/${id}`,
        sampling_unit: study.sampling_unit || null, market: study.market || null, period: study.period || null };
    });
    const members = d.units.map(u => {
      const member = occurrence.unit_list.find(x => x.id === u.id);
      const row = occurrence.rows.find(x => x.result_id === member?.result_id);
      if (!row?.finding_id) throw new Error(`Reference unit lacks a finding: ${u.id}`);
      return { id: u.id, finding_id: row.finding_id, source_id: u.family, locator: u.locator,
        lower: u.lower, upper: u.upper, weight: u.weight };
    });
    return {
      reference_id: ref.id, ingredient_slug: ingredient, analyte: d.scope.analyte,
      form: definition.owner.food, basis: definition.owner.basis_key === 'dw' ? 'dry' : 'native',
      basis_description: d.scope.basis, unit: 'ug/kg',
      eligible: d.eligible, unavailable_reason: d.eligible ? null : 'insufficient_reference_units',
      n: d.n, family_count: d.family_count, sampling_unit: [...new Set(sources.map(s => s.sampling_unit))],
      markets: sources.map(s => ({ source_id: s.source_id, market: s.market })),
      period: sources.map(s => ({ source_id: s.source_id, period: s.period })),
      median: d.median, quartiles: { q1: d.q1, q3: d.q3 },
      quantile_method: d.quantile_method, weighting: d.weighting,
      limitations: ref.limitations.replaceAll('—', ', ').replaceAll('–', ' to '),
      sources, members,
    };
  });
  const payload = { schema_version: 1, ingredient_slug: ingredient,
    method: occurrence.record.method, provenance, references };
  const serialized = JSON.stringify(payload);
  if (forbidden.test(serialized)) throw new Error('Excluded supplier data in Pro reference');
  return { ...payload, sha256: hash(serialized) };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const check = process.argv.includes('--check');
  for (const ingredient of ['rice-protein','pea-protein']) {
    const file = `data/pro/reference/${ingredient}.json`;
    const content = `${JSON.stringify(buildReference(ingredient), null, 2)}\n`;
    if (check) {
      if (read(file) !== content) throw new Error(`Stale committed reference: ${file}`);
    } else {
      fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
      fs.writeFileSync(path.join(root, file), content);
    }
    console.log(`${check ? 'Verified' : 'Built'} ${file}`);
  }
}
