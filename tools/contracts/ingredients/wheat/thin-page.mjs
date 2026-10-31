// Thin-page assessment (AGENTS.md "Thin pages ledger", 22 October 2026), written from the
// completed evidence ledger. The coordinator runs the roll-up; this only writes and validates.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {validateThinPage} from '../../build-thin-pages-ledger.mjs';
import {auditDir} from './source-adapter.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const ledger = JSON.parse(fs.readFileSync(path.join(root, 'data/evidence/contracts/wheat/evidence-ledger.json'), 'utf8'));
const decision = new Set(['Cd', 'Pb', 'tAs', 'iAs']);
const notes = {
  Cd: 'Rated against pooled references for common wheat grain (as sold and dry weight), durum, spelt, bran, germ and processed grain; within-study durum origin, species, cultivar, site and fraction contrasts.',
  Pb: 'Most monitoring results are non-detects, so references are bounded; lower-contamination comparisons rest on site contrasts (background versus steel mill) and durum origins.',
  tAs: 'Most results are non-detects; the pooled reference has no definitely positive spread, so no row is rated; regional contrast rests on groundwater-arsenic household data.',
  iAs: 'A few hundred monitoring results; the European estimates are mostly converted from total arsenic.',
  tHg: 'Nearly all results below reporting limits.', Ni: 'Dry-weight reference from two families.', Cr: 'Chromium species not measured in grain; total chromium only.',
  Al: 'Only one survey family (Stahl 2017) and one monitoring record.', Sn: 'Only a handful of monitoring results.', DMA: 'A few monitoring results only.'};
const analytes = [...new Set(ledger.results.map(r => r.scope.analyte))].sort().map(a => {
  const rs = ledger.results.filter(r => r.scope.analyte === a);
  const units = ledger.reference_units.filter(u => u.scope.analyte === a);
  return {analyte: a, decision_relevant: decision.has(a), results: rs.length, reference_units: units.length, families: new Set(rs.map(r => r.family_id)).size,
    rated: rs.filter(r => r.comparison.state === 'rated').length, note: notes[a] ?? ''};
});
const families = new Set(ledger.items.filter(i => i.id.startsWith('source:') && i.disposition === 'occurrence_extracted').map(i => i.source_id)).size;
const blocked = ledger.items.filter(i => i.disposition === 'access_blocked');
const direct = a => ledger.results.some(r => r.scope.analyte === a && ['direct', 'rated'].includes(r.comparison.state));
const reasons = [];
if (families < 3) reasons.push('few_occurrence_families');
if (analytes.some(a => a.decision_relevant && !a.rated && !direct(a.analyte))) reasons.push('decision_analyte_without_comparison');
if (blocked.length) reasons.push('access_blocked_evidence');
const x = {slug: 'wheat', status: reasons.length ? 'thin' : 'adequate', assessed_at: '2026-10-22T20:00:00Z',
  universe_items: ledger.items.length, occurrence_families: families, analytes, reasons,
  fetch_targets: [
    {what: 'Supplementary per-lot and per-cultivar tables: Pompa et al. 2021 Table S1 (346 durum lots), Palombieri et al. 2023 Table S3, Motta-Romero et al. 2021 cultivar spreadsheet, Maccaferri et al. 2019 Table S14, Ozkutlu et al. 2026 Table S2', why: 'Would add per-sample reference units for durum and cultivar-level cadmium comparisons that are now read from figures or ranges.', where: 'Publisher supplementary data for each article (DOIs in the source records)', priority: 'high'},
    {what: 'Monitoring data that record the growing country for common wheat grain (for example EFSA chemical monitoring raw data, national grain surveys in Canada, Australia, the USA and China)', why: 'GEMS/Food gives only reporting regions, so no country comparison for common wheat cadmium is possible.', where: 'EFSA Knowledge Junction / chemical monitoring reports; CFIA, USDA FGIS, GRDC and national grain quality surveys; literature search "wheat grain cadmium survey country"', priority: 'high'},
    {what: 'Measured inorganic arsenic in wheat grain from groundwater-arsenic regions (Bangladesh, West Bengal, Bihar, Pakistan)', why: 'European inorganic arsenic values are mostly estimated from total arsenic, and the library has no measured speciation for high-arsenic regions.', where: 'Literature search "wheat grain inorganic arsenic speciation Bangladesh Pakistan"', priority: 'medium'},
    {what: 'Primary studies cited by reviews: Guo et al. 2018 (16 wheat cultivars, contaminated soils), Al-Othman et al. 2016 (wheat by irrigation water source), Cubadda et al. (durum milling fractions)', why: 'Would add cultivar, irrigation and milling-fraction comparisons with measured values.', where: 'Publisher records; citations in afonne2020, munir2022 and authors2018 source records', priority: 'medium'},
    {what: 'Commercial-field liming, zinc and cultivar trials on unspiked soils reporting wheat grain cadmium', why: 'Current control evidence comes from spiked pots, one fungicide field trial and genetics.', where: 'Literature search "wheat grain cadmium liming field trial", "zinc fertilization wheat cadmium field"', priority: 'low'}],
  publishable: true, publishable_reason: 'All seven fullness gates and the presentation gate pass; the remaining gaps are stated on the page and do not change the decision-relevant cadmium comparisons.'};
const errors = validateThinPage(x, 'thin-page.json');
if (errors.length) throw Error(errors.join('\n'));
fs.writeFileSync(path.join(root, auditDir, 'thin-page.json'), JSON.stringify(x, null, 2) + '\n');
console.log(JSON.stringify({status: x.status, reasons, families, analytes: analytes.map(a => `${a.analyte}:${a.results}/${a.reference_units}/${a.rated}`)}));
