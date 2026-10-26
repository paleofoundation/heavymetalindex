// Thin-page assessment (AGENTS.md "Thin pages ledger", 22 October 2026), written from the
// completed evidence ledger. The coordinator runs the roll-up; this only writes and validates.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {validateThinPage} from '../../build-thin-pages-ledger.mjs';
import {auditDir} from './source-adapter.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const ledger = JSON.parse(fs.readFileSync(path.join(root, 'data/evidence/contracts/black-pepper/evidence-ledger.json'), 'utf8'));
const decision = new Set(['Pb', 'Cd', 'tAs']);
const notes = {iAs: 'Only nine black pepper results, all from GEMS/Food; below the four-unit display minimum, so total arsenic carries the comparison.', Cr: 'Chromium species not measured; total chromium only.', Sn: 'Only two reference units.', DMA: 'One non-detect.'};
const analytes = [...new Set(ledger.results.map(r => r.scope.analyte))].sort().map(a => {
  const rs = ledger.results.filter(r => r.scope.analyte === a && r.scope.material === 'black pepper');
  const units = ledger.reference_units.filter(u => u.scope.analyte === a);
  return {analyte: a, decision_relevant: decision.has(a), results: rs.length, reference_units: units.length, families: new Set(rs.map(r => r.family_id)).size,
    rated: rs.filter(r => r.comparison.state === 'rated').length, note: notes[a] ?? ''};
});
const families = new Set(ledger.items.filter(i => i.id.startsWith('source:') && i.disposition === 'occurrence_extracted').map(i => i.source_id)).size;
const blocked = ledger.items.filter(i => i.disposition === 'access_blocked');
const reasons = [];
if (families < 3) reasons.push('few_occurrence_families');
if (analytes.some(a => a.decision_relevant && !a.rated)) reasons.push('decision_analyte_without_comparison');
if (blocked.length) reasons.push('access_blocked_evidence');
const x = {slug: 'black-pepper', status: reasons.length ? 'thin' : 'adequate', assessed_at: '2026-10-22T18:00:00Z',
  universe_items: ledger.items.length, occurrence_families: families, analytes, reasons,
  fetch_targets: [
    {what: 'Supplementary Table 2S of Johnson-Restrepo et al. 2025, Radiation Physics and Chemistry 234:112749', why: 'Holds the black pepper row (Pb, Cd, As, Ni, Sn by monochromatic XRF) for the one access-blocked source in the ledger.', where: 'Publisher supplementary data, doi 10.1016/j.radphyschem.2025.112749', priority: 'low'},
    {what: 'Annex I to Regulation (EC) No 396/2005 (food classification, spices)', why: 'Formally confirms that black pepper is a fruit spice, the class carrying the EU 0.60 mg/kg lead maximum; the page currently states the assignment rests on pepper being a dried fruit.', where: 'EUR-Lex consolidated Regulation (EC) No 396/2005, Annex I part B spices', priority: 'medium'},
    {what: 'Monitoring data that record growing origin and form for black pepper (for example national spice surveillance or import sampling programmes)', why: 'Only three studies report where pepper was grown; origin comparisons rest on one to four samples per country.', where: 'Literature search: "black pepper" OR "Piper nigrum" lead cadmium origin import surveillance; EFSA, CFIA and FDA spice sampling reports', priority: 'medium'},
    {what: 'Osei-Safo et al. 2024 online appendices (per-sample and per-market values)', why: 'Would add per-sample reference units for Malaysian-grown pepper sold in Accra and resolve whether n is nine samples or three replicates.', where: 'Publisher supplementary material for oseisafo2024-ghana-spices-metals', priority: 'low'},
    {what: 'Inorganic arsenic results for black pepper', why: 'Only nine black pepper inorganic arsenic results exist, too few for a reference.', where: 'EFSA chemical monitoring reports; literature search "Piper nigrum" inorganic arsenic speciation', priority: 'low'}],
  publishable: true, publishable_reason: 'All seven fullness gates and the presentation gate pass; the remaining gaps are stated on the page and do not change any decision-relevant comparison.'};
const errors = validateThinPage(x, 'thin-page.json');
if (errors.length) throw Error(errors.join('\n'));
fs.writeFileSync(path.join(root, auditDir, 'thin-page.json'), JSON.stringify(x, null, 2) + '\n');
console.log(JSON.stringify({status: x.status, reasons, families, analytes: analytes.map(a => `${a.analyte}:${a.results}/${a.reference_units}/${a.rated}`)}));
