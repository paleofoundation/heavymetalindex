// Source records for order HMI-PROTEIN-REBUILD-1 (evidence pack hmi-protein-2026-11-03).
// Writes findings-store source records and wiki source pages for Lopez-Calabozo 2025 (rice and
// pea protein concentrates) and the FDA GRAS notices 788, 804 and 851 (pea protein manufacturer
// batch data). Brand firewall: no manufacturer, supplier, trade or product name and no batch code
// is written; grades and batches are numbered in notice order. Values are copied from the cited
// tables; "<x" cells are non-detects at the printed limit.
// Usage: node tools/contracts/ingredients/protein-pages/sources-2026-11-03.mjs
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { root } from './author.mjs';

const PACK = path.join(os.homedir(), 'hmi-protein-evidence-20261103');
const slug = x => String(x).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50);
const ROUTE = 'override:HMI-PROTEIN-REBUILD-1';

function finding(sid, { label, page, form, analyte, group, group_kind = 'brand_category', n = 1, reported, unit, locator, notes = '', basis }) {
  const m = String(reported).trim().match(/^(<|nd$|not detected)?\s*([\d.]+)?(?:\s*±\s*([\d.]+))?/i);
  const censored = /^(<|nd$|not detected)/i.test(reported);
  const scale = unit === 'mg/kg' ? 1000 : 1;
  const value = m?.[2] && !censored ? +(Number(m[2]) * scale).toFixed(6) : null;
  const lod = censored && m?.[2] ? +(Number(m[2]) * scale).toFixed(6) : null;
  const sd = m?.[3] ? +(Number(m[3]) * scale).toFixed(6) : null;
  const statistic = censored ? 'not_detected' : sd !== null ? 'mean' : 'sample_value';
  return {
    id: `${sid}:${analyte}:${slug(label).slice(0, 40)}--${slug(group).slice(0, 40)}:${statistic}`,
    material: { label_as_printed: label, page, form, state: 'as_sold', route_rule: ROUTE },
    analyte, group, group_kind, n, statistic, reported: unit && !/[a-z]$/i.test(reported) ? `${reported} ${unit}` : reported,
    value_ugkg: value, min_ugkg: null, max_ugkg: null, sd_ugkg: sd, unit_original: unit, basis,
    censoring: censored ? (lod === null ? 'nd' : 'lt_lod') : 'none', lod_ugkg: lod, locator, integrity_flag: null, notes, statistic_raw: statistic,
  };
}

const sources = [];

// Lopez-Calabozo et al. 2025, Foods 14(3): 509, Table 2 (ppb block for Ni, Cr, Cd, Pb). Read from the
// Europe PMC full text (PMC11816949, CC BY 4.0) because the publisher PDF returns a challenge page.
{
  const sid = 'lopezcalabozo2025-spain-vegetable-protein-concentrates-minerals';
  const T2 = 'Table 2';
  const ndNote = analyte => `nd as printed; Table 2 footnote gives the detection limit as "< ${analyte === 'Cd' ? '0.015' : '0.026'}" without restating the unit, so no limit is recorded.`;
  const rows = [
    ['ingredients/rice-protein', 'Rice protein concentrate, Brand 1', { Ni: '240.22 ± 19.88', Cr: '208.98 ± 4.31', Cd: 'nd', Pb: 'nd' }],
    ['ingredients/rice-protein', 'Rice protein concentrate, Brand 2', { Ni: '604.54 ± 65.39', Cr: '627.11 ± 2.34', Cd: 'nd', Pb: '175.40 ± 3.15' }],
    ['ingredients/pea-protein', 'Pea protein concentrate, Brand 1', { Ni: '585.49 ± 47.94', Cr: '78.97 ± 11.24', Cd: 'nd', Pb: 'nd' }],
    ['ingredients/pea-protein', 'Pea protein concentrate, Brand 2', { Ni: '268.27 ± 35.21', Cr: '114.11 ± 31.83', Cd: 'nd', Pb: 'nd' }],
  ];
  const findings = rows.flatMap(([page, label, cells]) => Object.entries(cells).map(([analyte, reported]) => finding(sid, {
    label, page, form: 'powder', analyte, reported, unit: 'ppb', locator: T2, basis: 'unknown',
    group: `${label.split(',')[1].trim()} (unnamed commercial brand), bought online twice, 6 months apart; Spain`,
    notes: reported === 'nd' ? ndNote(analyte) : 'Mean ± SD of the duplicate analysis as printed; the paper does not state a dry or as-sold basis for minerals.',
  })));
  sources.push({
    sid, artifact: `${PACK}/lopezcalabozo2025/PMC11816949.xml`,
    record: {
      disposition: 'occurrence_extracted',
      disposition_reason: 'Per-brand ICP-MS means for Ni, Cr, Cd and Pb (ppb) in two rice, two pea and two soybean protein concentrates bought online; Cd not detected in any sample, Pb detected only in rice Brand 2.',
      disposition_locator: 'Table 2; Section 2.1 and 2.3',
      study: {
        design: 'laboratory characterization of commercial vegetable protein concentrates (composition and techno-functional properties)',
        origin: 'not stated', market: 'purchased through online shops; university laboratory in Zamora, Spain',
        period: { from: null, to: null, as_reported: 'each brand bought twice, 6 months apart; dates not given' },
        method: 'ICP-MS (Agilent 7800) after microwave pre-digestion of 0.2 g sample with HNO3; certified standard solutions (1 g/L) for quantification',
        lod: ['Table 2 footnotes: Cd detection limit "< 0.015", Pb detection limit "< 0.026" (unit not restated; the rows sit in the ppb block)'],
        basis: 'unknown', qa: 'Duplicate analysis; no reference material or recovery reported', site_context: 'market',
      },
      findings,
      unresolved: ['Soybean concentrate rows are outside the two protein pages and were not routed.', 'Macro and trace nutrient rows (Na, Mg, P, K, Ca, Mn, Fe, Cu, Zn, Se) were not recorded.', 'Unit of the Cd and Pb detection limits is not printed.'],
    },
    page: {
      title: 'The Influence of the Nutritional and Mineral Composition of Vegetable Protein Concentrates on Their Functional Properties',
      authors: '[López-Calabozo R, Martínez-Martín I, Rodríguez-Fernández M, Absi Y, Vivar-Quintana AM, Revilla I]', year: 2025,
      publication: '"Foods 14(3): 509"', doi: '10.3390/foods14030509', access_url: 'https://europepmc.org/article/PMC/PMC11816949',
      source_type: 'peer-reviewed', evidence_tier: 'A', license: '"CC BY 4.0"', metals: '[Cd, Pb, Ni, Cr]',
      ingredients: '["[[ingredients/rice-protein]]", "[[ingredients/pea-protein]]"]', matrices: '[rice protein concentrate, pea protein concentrate, soybean protein concentrate]',
      jurisdictions: '[ES]', sample_n: 12,
      sample_population: '"12 samples: six commercial protein concentrate brands (two rice, two pea, two soybean), each bought twice through online shops 6 months apart; brands not identified by the authors"',
      sampling_year_range: 'null', heading: 'López-Calabozo et al. 2025: Minerals and toxic elements in rice, pea and soybean protein concentrates',
      overview: 'López-Calabozo and colleagues measured 14 minerals by ICP-MS in two commercial brands each of rice, pea and soybean protein concentrate, buying each brand twice six months apart. The authors did not name the brands. Cadmium was not detected in any sample, and lead was detected only in one rice protein brand.',
      key: [
        'Lead: 175.40 ± 3.15 ppb in rice protein Brand 2; not detected in rice Brand 1 and both pea brands (Table 2).',
        'Cadmium: not detected in any rice, pea or soybean concentrate (Table 2; Results).',
        'Nickel: 240.22 and 604.54 ppb (rice); 585.49 and 268.27 ppb (pea) (Table 2).',
        'Chromium: 208.98 and 627.11 ppb (rice); 78.97 and 114.11 ppb (pea) (Table 2).',
      ],
      methods: 'A 0.2 g portion of each sample was digested with nitric acid in a microwave system and read on an Agilent 7800 ICP-MS against certified standard solutions. Results are means of a duplicate analysis.',
      fitness: 'Two brands per protein source is a very small set, and the brands are anonymous by design. Arsenic and mercury were not measured. The detection-limit footnotes for cadmium and lead do not restate a unit, and the paper does not say whether mineral results are on a dry or as-sold basis.',
      related: ['ingredients/rice-protein', 'ingredients/pea-protein', 'sources/ring2021-ireland-protein-powders-metals', 'metals/lead', 'metals/cadmium', 'metals/nickel', 'metals/chromium'],
    },
  });
}

// FDA GRAS notices: manufacturer batch data, published by FDA. Notifier and product names withheld.
const GRN_URL = { 788: 'https://www.fda.gov/media/132887/download', 804: 'https://www.fda.gov/media/133594/download', 851: 'https://www.fda.gov/media/134207/download' };
const grn = (no, year, title, pdf, record, page) => sources.push({ sid: `fda-grn${no}-pea-protein-manufacturer-batches`, artifact: `${PACK}/hmi-protein-2026-11-03/pdfs/${pdf}`, record, page: {
  title, authors: '[FDA GRAS notifier (manufacturer; name withheld)]', year, publication: `"FDA GRAS Notice Inventory, GRN ${no}"`, doi: 'null',
  no_doi_assigned: true, access_url: GRN_URL[no], source_type: 'industry', evidence_tier: 'C', license: '"US government publication of a submitted notice"',
  metals: '[As, Cd, Hg, Pb]', ingredients: '["[[ingredients/pea-protein]]"]', jurisdictions: '[US]', sampling_year_range: 'null', ...page,
  fitness: `These are manufacturer test results submitted to FDA with a GRAS notice, not independent measurements. FDA published the notice but did not verify the values. ${page.fitness} Inorganic arsenic was not measured.`,
  related: ['ingredients/pea-protein', 'sources/ring2021-ireland-protein-powders-metals', 'sources/lopezcalabozo2025-spain-vegetable-protein-concentrates-minerals', 'metals/lead', 'metals/cadmium', 'metals/arsenic-total', 'metals/mercury'],
} });
const mfr = (sid, page, label, group, cells, unit, locator, notes = '') => Object.entries(cells).map(([analyte, reported]) =>
  finding(sid, { label, page, form: 'powder', analyte, reported, unit, locator, group, group_kind: 'manufacturer_batch', basis: 'as_sold', notes }));
const study = (o) => ({ site_context: 'manufacturer', basis: 'as_sold', origin: 'not stated', ...o });

{
  const sid = 'fda-grn804-pea-protein-manufacturer-batches', P = 'ingredients/pea-protein';
  const iso = 'Pea protein isolate (grade 1, minimum 85% protein), manufacturer test', con = 'Pea protein concentrate (grade 2, minimum 65% protein), manufacturer test';
  const findings = [
    ...mfr(sid, P, iso, 'Batch 1, manufacturer test (GRN 804)', { Pb: '0.02', tAs: '<0.05', Cd: '0.0096', tHg: '<0.002' }, 'mg/kg', 'Table 10, notice p. 011 of 270', 'Pb, As, Cd by ICP-MS EPA 3050B/6020; Hg by cold vapor EPA 7471B.'),
    ...mfr(sid, P, iso, 'Batch 2, manufacturer test (GRN 804)', { Pb: '<0.01', tAs: '<0.05', Cd: '0.0081', tHg: '<0.002' }, 'mg/kg', 'Table 10, notice p. 011 of 270', 'Pb, As, Cd by ICP-MS EPA 3050B/6020; Hg by cold vapor EPA 7471B.'),
    ...mfr(sid, P, iso, 'Blend of batches, manufacturer test (GRN 804)', { Pb: '0.02', tAs: '<0.01', Cd: '0.001', tHg: '<0.005' }, 'mg/kg', 'Table 10, notice p. 011 of 270', 'ICP-MS EPA 3050/6020, USP730.'),
    ...mfr(sid, P, con, 'Batch 1, manufacturer test (GRN 804)', { Pb: '0.04', tAs: '<0.01', Cd: '0.041', tHg: '<0.005' }, 'mg/kg', 'Table 11, notice p. 011 to 012 of 270', 'ICP-MS EPA 3050/6020, USP730.'),
    ...mfr(sid, P, con, 'Blend of batches, manufacturer test (GRN 804)', { Pb: '0.02', tAs: '<0.05', Cd: '0.015', tHg: '<0.002' }, 'mg/kg', 'Table 11, notice p. 011 to 012 of 270', 'Pb, As, Cd by ICP-MS EPA 3050B/6020; Hg by cold vapor EPA 7471B.'),
  ];
  grn(804, 2018, 'GRAS Notice 804: pea protein (manufacturer batch data)', 'pea-protein__GRN804.pdf', {
    disposition: 'occurrence_extracted', disposition_reason: 'Manufacturer heavy-metal results (Pb, As, Cd, Hg) for batches and blends of a pea protein isolate and a pea protein concentrate, submitted to FDA with a GRAS notice.',
    disposition_locator: 'Tables 10 and 11, notice pp. 011 to 012 of 270',
    study: study({ design: 'manufacturer batch analyses submitted to FDA with a GRAS notice', market: 'manufacturer production batches; not sampled from retail', period: { from: 2018, to: 2018, as_reported: 'notice dated June 15, 2018; analysis dates not given' },
      method: 'ICP-MS EPA 3050B/6020 or EPA 3050/6020 with USP730 (Pb, As, Cd); cold vapor EPA 7471B (Hg)', lod: ['No limits printed; "<x" cells are reported below x ppm w/w'], qa: 'Not reported' }),
    findings, unresolved: ['Arsenic is total arsenic; inorganic arsenic was not measured.', 'Batch codes and trade names are withheld under the brand firewall.'],
  }, { matrices: '[pea protein isolate, pea protein concentrate]', sample_n: 5, sample_population: '"Two pea protein grades from one manufacturer: two batches and one blend of an isolate (minimum 85% protein) and one batch and one blend of a concentrate (minimum 65% protein)"',
    heading: 'FDA GRAS Notice 804: Manufacturer heavy-metal results for pea protein isolate and concentrate',
    overview: 'This GRAS notice, submitted to FDA in 2018, includes the manufacturer\'s own lead, arsenic, cadmium and mercury results for two pea protein grades. The Index withholds the manufacturer and product names.',
    key: ['Lead: 0.02 and below 0.01 ppm in isolate batches, 0.02 ppm in the isolate blend; 0.04 ppm (batch) and 0.02 ppm (blend) in the concentrate (Tables 10 and 11).', 'Cadmium: 0.0096, 0.0081 and 0.001 ppm (isolate); 0.041 and 0.015 ppm (concentrate) (Tables 10 and 11).', 'Total arsenic and mercury: below the printed values in every row (Tables 10 and 11).'],
    methods: 'Lead, arsenic and cadmium were measured by ICP-MS (EPA 3050B/6020, or EPA 3050/6020 with USP 730) and mercury by cold vapor (EPA 7471B), as stated in the table footnotes.',
    fitness: 'Five results from one manufacturer, two of them blends of batches, is a narrow base.' });
}
{
  const sid = 'fda-grn851-pea-protein-manufacturer-batches', P = 'ingredients/pea-protein';
  const lots = (grade, t, pg, pb, as, cd, hg) => [0, 1, 2].flatMap(i => mfr(sid, P, `Pea protein isolate (grade ${grade}), manufacturer test`, `Lot ${i + 1} of 3 non-consecutive lots, manufacturer test (GRN 851)`,
    { Pb: pb[i], tAs: as[i], Cd: cd[i], tHg: hg[i] }, 'mg/kg', `Table ${t}, PDF p. ${pg}`, 'Method "Ext" (external laboratory) as printed; specification < 0.2 mg/kg for each metal.'));
  const findings = [
    ...lots(1, 4, 16, ['< 0.01', '0.02', '< 0.01'], ['< 0.10', '< 0.10', '< 0.10'], ['0.04', '0.06', '0.04'], ['< 0.01', '< 0.01', '< 0.01']),
    ...lots(2, 5, 17, ['0.01', '0.02', '0.02'], ['< 0.10', '< 0.10', '< 0.10'], ['0.04', '0.04', '0.07'], ['< 0.01', '< 0.01', '< 0.01']),
    ...lots(3, 6, 18, ['0.02', '0.02', '0.03'], ['< 0.10', '< 0.10', '< 0.10'], ['0.08', '0.06', '0.06'], ['< 0.01', '< 0.01', '< 0.01']),
  ];
  grn(851, 2019, 'GRAS Notice 851: pea protein isolate (manufacturer batch data)', 'pea-protein__GRN851.pdf', {
    disposition: 'occurrence_extracted', disposition_reason: 'Manufacturer heavy-metal results (Pb, As, Cd, Hg) for three non-consecutive lots each of three pea protein isolate grades, submitted to FDA with a GRAS notice.',
    disposition_locator: 'Tables 4, 5 and 6, PDF pp. 16 to 18',
    study: study({ design: 'manufacturer lot analyses submitted to FDA with a GRAS notice', market: 'manufacturer production lots; not sampled from retail', period: { from: 2019, to: 2019, as_reported: 'notice dated January 28, 2019; analysis dates not given' },
      method: 'External laboratory ("Ext"); method not named', lod: ['No limits printed; "< x" cells are reported below x mg/kg'], qa: 'Not reported' }),
    findings, unresolved: ['Arsenic is total arsenic; inorganic arsenic was not measured.', 'Lot numbers are redacted in the notice; grade names are withheld under the brand firewall.'],
  }, { matrices: '[pea protein isolate]', sample_n: 9, sample_population: '"Three pea protein isolate grades from one manufacturer, three non-consecutive production lots each"',
    heading: 'FDA GRAS Notice 851: Manufacturer heavy-metal results for three pea protein isolate grades',
    overview: 'This GRAS notice, dated January 2019, lists the manufacturer\'s lead, arsenic, cadmium and mercury results for three lots each of three pea protein isolate grades. The Index withholds the manufacturer and grade names.',
    key: ['Lead: below 0.01 to 0.03 mg/kg across nine lots (Tables 4 to 6).', 'Cadmium: 0.04 to 0.08 mg/kg across nine lots (Tables 4 to 6).', 'Total arsenic below 0.10 and mercury below 0.01 mg/kg in every lot (Tables 4 to 6).'],
    methods: 'The tables give the method only as "Ext", an external laboratory, with a specification of below 0.2 mg/kg for each metal.',
    fitness: 'Nine lots from one manufacturer, analyzed by an unnamed external laboratory and method.' });
}
{
  const sid = 'fda-grn788-pea-protein-manufacturer-batches', P = 'ingredients/pea-protein';
  const findings = mfr(sid, P, 'Pea protein concentrate (80% protein grade), manufacturer test', 'Batch 1, third-party laboratory report submitted by the manufacturer (GRN 788)',
    { Pb: '<0.05', tAs: '<0.01', tHg: '<0.01', Cd: '0.042' }, 'mg/kg', 'Appendix II test report, PDF p. 49',
    'Third-party test report dated Oct 24 2017; GB 5009.12-2017 (Pb), GB 5009.11-2014 (As), GB 5009.17-2014 (Hg), GB 5009.15-2014 (Cd); "Not detected" at the printed method detection limit. Cd method detection limit 0.005 mg/kg.');
  grn(788, 2018, 'GRAS Notice 788: pea protein (manufacturer batch data)', 'pea-protein__GRN788.pdf', {
    disposition: 'occurrence_extracted', disposition_reason: 'One third-party laboratory report for a pea protein batch (Pb, As, Hg, Cd), submitted by the manufacturer to FDA with a GRAS notice.',
    disposition_locator: 'Appendix II, PDF pp. 48 to 49',
    study: study({ design: 'manufacturer-commissioned laboratory report submitted to FDA with a GRAS notice', market: 'manufacturer production batch; not sampled from retail', period: { from: 2017, to: 2017, as_reported: 'tested Oct 18 to Oct 24 2017' },
      method: 'GB 5009.12-2017 (Pb), GB 5009.11-2014 (As), GB 5009.17-2014 (Hg), GB 5009.15-2014 (Cd)', lod: ['Method detection limits: Pb 0.05, As 0.01, Hg 0.01, Cd 0.005 mg/kg'], qa: 'Accredited laboratory report; no QA data printed' }),
    findings, unresolved: ['Appendix I certificates of analysis (five batches, notice pp. 40 to 45) are scanned images and were not transcribed.', 'A second laboratory report (PDF pp. 50 to 51) covers aflatoxins only.', 'Arsenic is total arsenic; inorganic arsenic was not measured.'],
  }, { matrices: '[pea protein concentrate]', sample_n: 1, sample_population: '"One production batch of an 80% protein pea product, tested by a third-party laboratory for the manufacturer in October 2017"',
    heading: 'FDA GRAS Notice 788: Manufacturer laboratory report for a pea protein batch',
    overview: 'This GRAS notice, submitted in 2018, includes a third-party laboratory report on one pea protein batch commissioned by the manufacturer. The Index withholds the manufacturer and product names.',
    key: ['Cadmium: 0.042 mg/kg (method detection limit 0.005) (Appendix II).', 'Lead not detected (limit 0.05 mg/kg); total arsenic and mercury not detected (limit 0.01 mg/kg) (Appendix II).'],
    methods: 'The laboratory used Chinese national standard methods GB 5009.12 (lead), 5009.11 (arsenic), 5009.17 (mercury) and 5009.15 (cadmium).',
    fitness: 'A single batch. The notice also contains five scanned certificates of analysis that are not legible enough to transcribe.' });
}

const today = '2026-11-03';
for (const s of sources) {
  const sha = (await import('node:crypto')).createHash('sha256').update(fs.readFileSync(s.artifact)).digest('hex');
  const rec = { source_id: s.sid, primary_artifact: s.artifact, primary_sha256: sha, extracted_at: today, extractor: 'engine-v1', ...s.record,
    sample_values: [], controls: [], extraction_scope: 'complete', extraction_owners: ['engine-v1'], regulatory_or_exposure: [], source_record_corrections: [],
    source_record: `wiki/sources/${s.sid}.md`, non_numeric_findings: [] };
  fs.writeFileSync(path.join(root, 'data/evidence/findings/sources', `${s.sid}.json`), JSON.stringify(rec, null, 1) + '\n');
  const p = s.page;
  const md = `---\ntype: source\ncite_key: ${s.sid}\ntitle: "${p.title}"\nauthors: ${p.authors}\nyear: ${p.year}\npublication: ${p.publication}\ndoi: ${p.doi}\n${p.no_doi_assigned ? 'no_doi_assigned: true\n' : ''}access_url: ${p.access_url}\nsource_type: ${p.source_type}\nevidence_tier: ${p.evidence_tier}\nlicense: ${p.license}\nraw_path: ${s.artifact}\nmetals: ${p.metals}\ningredients: ${p.ingredients}\nproducts: []\nmatrices: ${p.matrices}\njurisdictions: ${p.jurisdictions}\nnear_duplicates: []\nsample_n: ${p.sample_n}\nsample_population: ${p.sample_population}\nwiki_doi: null\nsampling_locations: []\nsampling_year_range: ${p.sampling_year_range}\nupdated: ${today}\ningest: HMI-PROTEIN-REBUILD-1\n---\n\n# ${p.heading}\n\n## Overview\n\n${p.overview}\n\n## Key numbers\n\n${p.key.map(k => `- ${k}`).join('\n')}\n\n## Methods (brief)\n\n${p.methods}\n\n## Evidence Fitness\n\n${p.fitness}\n\n## Related evidence\n${p.related.map(r => `- [[${r}]]`).join('\n')}\n`;
  if (/[–—]/.test(md)) throw Error(`Dash in ${s.sid}`);
  fs.writeFileSync(path.join(root, 'wiki/sources', `${s.sid}.md`), md);
  console.log(s.sid, rec.findings.length, sha.slice(0, 12));
}
