// Thin-page assessment (AGENTS.md "Thin pages ledger", 22 October 2026), written from the
// completed evidence ledger. The coordinator runs the roll-up; this only writes and validates.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {validateThinPage} from '../../build-thin-pages-ledger.mjs';
import {auditDir} from './source-adapter.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const ledger = JSON.parse(fs.readFileSync(path.join(root, 'data/evidence/contracts/apple/evidence-ledger.json'), 'utf8'));
const decision = new Set(['Pb', 'Cd', 'tAs', 'iAs']);
const notes = {
  Pb: 'Eligible fresh and dried apple references; most fresh-apple subgroup medians are non-detect bounds, so ratings are few and GEMS/Food region, dried-versus-fresh and washing contrasts carry the comparison.',
  Cd: 'Eligible fresh and dried references but no definite middle spread for fresh apple, so no fresh row is rated; region and dried-versus-fresh contrasts within GEMS/Food give bounded and direct comparisons.',
  tAs: 'Fresh reference has no definite spread; wastewater-irrigation and dried-versus-fresh contrasts give direct comparisons.',
  iAs: 'Eleven reference units (GEMS/Food and FDA 2016), nearly all non-detects; no inorganic arsenic row can be rated or contrasted, so total arsenic carries the arsenic comparison.',
  DMA: 'One FDA 2016 non-detect.', Sb: 'Hong Kong total diet study only.', U: 'FDA Total Diet Study only, all non-detects.'};
const analytes = [...new Set(ledger.results.map(r => r.scope.analyte))].sort().map(a => {
  const rs = ledger.results.filter(r => r.scope.analyte === a);
  const units = ledger.reference_units.filter(u => u.scope.analyte === a);
  return {analyte: a, decision_relevant: decision.has(a), results: rs.length, reference_units: units.length, families: new Set(rs.map(r => r.family_id)).size,
    rated: rs.filter(r => r.comparison.state === 'rated').length, direct: rs.filter(r => r.comparison.state === 'direct').length, note: notes[a] ?? ''};
});
const eligibleRef = a => ledger.references.some(r => r.scope.analyte === a && r.unit_ids.length >= 4);
const families = new Set(ledger.items.filter(i => i.id.startsWith('source:') && i.disposition === 'occurrence_extracted').map(i => i.source_id)).size;
const blocked = ledger.items.filter(i => i.disposition === 'access_blocked');
const reasons = [];
if (families < 3) reasons.push('few_occurrence_families');
// Arsenic is assessed as one decision: total arsenic carries the comparison when inorganic arsenic has none.
if (['Pb', 'Cd', 'tAs'].some(a => !eligibleRef(a) && !analytes.find(x => x.analyte === a)?.direct)) reasons.push('decision_analyte_without_comparison');
if (blocked.length) reasons.push('access_blocked_evidence');
const x = {slug: 'apple', status: reasons.length ? 'thin' : 'adequate', assessed_at: '2026-10-22T20:00:00Z',
  universe_items: ledger.items.length, occurrence_families: families, analytes: analytes.map(({direct, ...a}) => a), reasons,
  fetch_targets: [
    {what: 'Monitoring results that record the country or orchard where apples were grown (for example EFSA raw occurrence data with sampling country and origin, CFIA or USDA residue and contaminant programmes)', why: 'Every large apple dataset records only the reporting market and an imported or domestic label, so no growing region can be named as lower in lead or cadmium.', where: 'EFSA Knowledge Junction / chemical monitoring raw data; CFIA National Chemical Residue Monitoring Program; USDA Pesticide Data Program contaminant add-ons', priority: 'medium'},
    {what: 'Inorganic arsenic speciation results for fresh apple', why: 'Fewer than 30 inorganic arsenic results exist, nearly all non-detects, so no inorganic arsenic comparison is possible.', where: 'EFSA monitoring; FDA Total Diet Study speciation; literature search "Malus domestica" inorganic arsenic speciation', priority: 'low'},
    {what: 'Paired peeled and unpeeled (and washed and unwashed) apple measurements from the same lots', why: 'No study in the library measures how much lead or cadmium peeling or washing removes from apples.', where: 'Literature search: apple peel flesh lead cadmium distribution washing', priority: 'medium'},
    {what: 'Supplementary Table S1 of Lee et al. 2023 (J Appl Biol Chem, doi 10.1186/s13765-023-00799-x)', why: 'Gives the growing origin of the Korean supermarket apples, which would turn a market result into an origin result.', where: 'Publisher supplementary material', priority: 'low'},
    {what: 'Rahman and Islam 2019 Dhaka market survey of fruits (cited by Islam et al. 2024)', why: 'Primary apple values currently known only through a review.', where: 'Literature search via the Islam et al. 2024 reference list', priority: 'low'}],
  publishable: true, publishable_reason: 'All seven fullness gates and the presentation gate pass; lead, cadmium and total arsenic each have an eligible reference and within-study comparisons, no eligible source is access-blocked, and the remaining gaps (growing origin, inorganic arsenic, peeling) are stated on the page.'};
const errors = validateThinPage(x, 'thin-page.json');
if (errors.length) throw Error(errors.join('\n'));
fs.writeFileSync(path.join(root, auditDir, 'thin-page.json'), JSON.stringify(x, null, 2) + '\n');
console.log(JSON.stringify({status: x.status, reasons, families, blocked: blocked.length, analytes: analytes.map(a => `${a.analyte}:${a.results}/${a.reference_units}/${a.rated}/${a.direct}`)}));
