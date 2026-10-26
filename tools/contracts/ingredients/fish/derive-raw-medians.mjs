import fs from 'node:fs';
import { buildDescriptiveReference } from '../../../evidence/build-hmtc-aggregate-distributions.mjs';

const base = 'data/evidence/contracts/fish/fulltext-correction/extractions';
const file = `${base}/kim2019.json`;
const input = JSON.parse(fs.readFileSync(file, 'utf8'));
input.reference_unit_candidates = input.raw_median_groups.map(group => {
  const scope = { ingredient: 'fish', analyte: group.analyte, basis: group.basis,
    statistic: 'sample concentration', market: 'Jeju fish markets', period: 'October–December 2017' };
  const units = group.observations.map(o => ({ ...scope, ...o, family: group.family_id, group: group.species }));
  const d = buildDescriptiveReference(units, scope);
  return { id: group.id, source_id: input.source_id, family_id: group.family_id,
    analyte: group.analyte, material: group.material, basis: group.basis, species: group.species,
    n: group.n, statistic: 'observed_sample_median', unit: group.unit,
    value: d.median.exact ? d.median.lower : null, lower_bound: d.median.lower, upper_bound: d.median.upper,
    result_ids: group.observations.map(o => o.id), locator: group.observations[0].locator,
    method: 'Maintained buildDescriptiveReference median of the actual S5 sample endpoint intervals; no imputation or reconstructed observations.',
    overlap: group.overlap, admitted: false, reason: group.reason };
});
fs.writeFileSync(file, JSON.stringify(input, null, 2) + '\n');
console.log({ source: input.source_id, median_candidates: input.reference_unit_candidates.length,
  bounded_candidates: input.reference_unit_candidates.filter(u => u.value === null).length,
  admitted: 0 });
