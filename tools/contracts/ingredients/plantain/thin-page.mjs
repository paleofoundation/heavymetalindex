// Thin-pages assessment for plantain (AGENTS.md "Thin pages ledger"), computed from the
// completed evidence ledger. Hero artwork was supplied by the owner on 22 October 2026.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {validateThinPage} from '../../build-thin-pages-ledger.mjs';
import {auditDir} from './source-adapter.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const ledger = JSON.parse(fs.readFileSync(path.join(root, 'data/evidence/contracts/plantain/evidence-ledger.json'), 'utf8'));
const score = JSON.parse(fs.readFileSync(path.join(root, 'data/evidence/contracts/plantain/fullness-scorecard.json'), 'utf8'));
const decision = new Set(['Pb', 'Cd', 'tAs', 'tHg']);
const notes = {
  Pb: 'Direct comparisons only within one Ghanaian processing study; raw fresh GEMS/Food plantain has 3 region-year units (display minimum 4).',
  Cd: 'Almost all results are non-detects; no direct comparison is possible, so no lower-contamination comparison exists.',
  tAs: 'Total arsenic only, except one inorganic-arsenic plantain-chip record; direct comparisons from the cooking study (at its 0.01 mg/kg reporting step) and the carbide-ripening study, whose absolute arsenic levels are far above other plantain data.',
  tHg: 'Elevated only in mining-river plantain; direct comparisons within one study.',
  Ni: 'High wherever measured (two families on different bases); no fruit nickel limit verified.',
};
const analytes = [...new Set(ledger.results.map(r => r.scope.analyte))].sort().map(a => {
  const rs = ledger.results.filter(r => r.scope.analyte === a);
  return {analyte: a, decision_relevant: decision.has(a), results: rs.length,
    reference_units: ledger.reference_units.filter(u => u.scope.analyte === a).length, families: new Set(rs.map(r => r.family_id)).size,
    rated: rs.filter(r => r.comparison.state === 'rated').length, direct: rs.filter(r => r.comparison.state === 'direct').length, note: notes[a] ?? ''};
});
const families = new Set(ledger.results.map(r => r.family_id));
const x = {slug: 'plantain', status: 'thin', assessed_at: '2026-10-22T20:00:00Z', universe_items: score.universe_size, occurrence_families: families.size,
  analytes,
  reasons: ['decision_analyte_without_comparison', 'no_lower_contamination_comparison', 'access_blocked_evidence'],
  family_note: 'Five occurrence families. Adjei-Mensah 2021 has been adopted into wiki/sources; Mode 2026 (verified against its HMI-GAP batch-01 PDF), Bortey-Sam 2015 and Orisakwe 2012 have records proposed in proposed-sources/ awaiting adoption, which the page cites.',
  fetch_targets: [
    {what: 'Adopt the three remaining proposed plantain source records (Bortey-Sam 2015, Orisakwe 2012, Mode 2026)', why: 'They supply three of five occurrence families and the carbide-ripening comparisons; the candidate cites them.', where: `${auditDir}/proposed-sources/ (copy verbatim to wiki/sources/)`, priority: 'high'},
    {what: 'Sub-Saharan Africa Total Diet Study (FAO/WHO; Benin, Cameroon, Mali, Nigeria; 2016–2018) final report and food-level results', why: 'The three 2018 cooked-plantain GEMS/Food records appear to come from this study; its report would add plantain composites by city, sampling design and LOQs, and could lift cooked plantain past the four-unit reference minimum.', where: 'FAO publications (SSA-TDS 2023 report and annexes); WHO GEMS/Food; search "Sub-Saharan Africa Total Diet Study plantain"', priority: 'high'},
    {what: 'Original PDF of Bortey-Sam et al. 2015 (Int J Environ Res Public Health)', why: 'The library copy is a text conversion with scrambled table cells; three Tarkwa cells are held and the wet/dry basis conflict and DOI need checking against the typeset tables. (Adjei-Mensah 2021 was verified against its PDF in HMI-GAP batch-01.)', where: 'MDPI IJERPH 2015 vol. 12 (open access)', priority: 'high'},
    {what: 'Remaining HMI-GAP-INGEST-1 batch-01 plantain papers that failed to fetch: 10.4314/nifoj.v25i2.50855 (plantain and banana cultivars), 10.9734/afsj/2019/v11i230057 (plantain flour, Port Harcourt), 10.4314/jasem.v19i2.7 (Khana, Rivers State), 10.22161/ijeab/2.4.23 (Uyo dumpsites), 10.3923/rjes.2010.33.41 (petroleum-impacted soils)', why: 'Each adds a plantain occurrence family; the cultivar paper would give the first cultivar comparison and the flour paper the first plantain-flour data.', where: 'Open-access links in ~/papers-for-claude/hmi-gap-1/batch-01/manifest.csv (AJOL, IJEAB, ScienceAlert); later batches', priority: 'high'},
    {what: 'Nanganoa LT et al. 2020, "Health-risk assessment of heavy metals in cassava and plantain near mining areas in Cameroon", Environmental Challenges 1:100005', why: 'A fifth independent plantain occurrence family with a mining versus non-mining contrast, which would give lower-contamination comparisons.', where: 'Elsevier Environmental Challenges (open access); cited in the library by FM_12770628', priority: 'high'},
    {what: 'Supplementary Table S3 of the Atrato basin study (doi 10.3390/ijerph20010435)', why: 'Holds per-species concentrations for "Musa × paradisiaca" by site; currently access-blocked, and identity (plantain or banana) must be confirmed.', where: 'https://www.mdpi.com/article/10.3390/ijerph20010435/s1', priority: 'medium'},
    {what: 'Amonoo-Neizer EH, Amekor EMK, "Determination of total arsenic in environmental samples from Kumasi and Obuasi, Ghana" (bibliography to verify; probably Environ Health Perspect 1993)', why: 'The only plantain peel versus pulp and mining-town versus city arsenic comparison in the library (markdown FM_1519647); not used because its journal, year and DOI cannot be verified from the library copy.', where: 'Environmental Health Perspectives archive (open access); library markdown FM_1519647', priority: 'medium'},
    {what: '"Heavy Metals and Microbial Loads in Freshly Made Plantain Snacks Dodo-Ikire from Production Sites in Nigeria" (doi 10.69650/ahstr.2026.3769)', why: 'Processed-plantain (fried snack) occurrence; the inventory lists it as downloaded but the file is missing from the library.', where: 'Publisher record via the DOI; library-drain inventory 2026-09-11 row', priority: 'medium'},
    {what: 'Cameroon total diet study trace-element results (Yaoundé TDS) and national monitoring from Ghana (Ghana Standards Authority), Nigeria (NAFDAC), Uganda (matooke) and Colombia/Ecuador (INVIMA, Agrocalidad) for plantain', why: 'Total diet and monitoring data from plantain-eating countries are the missing evidence base: no total diet study plantain composite is in the library.', where: 'Agency report portals; literature search terms: plantain AND (lead OR cadmium OR arsenic OR mercury); "Musa AAB" heavy metals; "plátano" metales pesados; matooke heavy metals; "plantain chips" arsenic', priority: 'medium'},
    {what: 'Annex I of Regulation (EC) No 396/2005 as amended (product codes for bananas)', why: 'Needed to confirm whether the EU 0.020 mg/kg cadmium limit for bananas applies to plantain.', where: 'EUR-Lex, Regulation (EU) 2018/62 Annex I', priority: 'low'},
    {what: 'Item-level ash plantain result from Jayalal et al. 2019 (BMC Nephrology 20:208)', why: 'One Sri Lankan ash plantain sample was analysed but published only pooled with other vegetables.', where: 'Author request (corresponding author, BMC Nephrology)', priority: 'low'}],
  publishable: true,
  publishable_reason: 'All seven fullness gates, the presentation gate (0 errors, original hero rendered), the public-processing audit, question-record validation and the reproducible build pass on the preview; the page states its thin evidence honestly. Release requires central adoption of the three proposed source records the page cites (copy verbatim from proposed-sources/).'};
const errors = validateThinPage(x, `${auditDir}/thin-page.json`);
if (errors.length) throw Error(errors.join('\n'));
fs.writeFileSync(path.join(root, auditDir, 'thin-page.json'), JSON.stringify(x, null, 2) + '\n');
console.log(JSON.stringify({status: x.status, families: x.occurrence_families, analytes: analytes.map(a => `${a.analyte}:${a.results}/${a.direct}d/${a.reference_units}u`)}));
