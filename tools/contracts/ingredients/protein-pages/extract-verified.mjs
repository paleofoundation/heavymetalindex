// Verified occurrence rows for rice protein and pea protein.
// Numbers were read from the deposit PDFs and from the Europe PMC JATS
// full text of Lopez-Calabozo 2025 (PMC11816949) before this file was written.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const write = (rel, value) => {
  const abs = path.join(root, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, JSON.stringify(value, null, 2) + '\n');
};

const row = (o) => ({
  id: o.id,
  source_id: o.source_id,
  analyte: o.analyte,
  group: o.group,
  group_kind: o.group_kind || 'product',
  n: o.n,
  statistic: o.statistic,
  reported: o.reported,
  value_ugkg: o.value ?? null,
  min_ugkg: null,
  max_ugkg: null,
  sd_ugkg: o.sd ?? null,
  unit_original: 'µg/kg',
  basis: o.basis,
  censoring: o.censoring || 'none',
  lod_ugkg: o.lod ?? null,
  locator: o.locator,
  integrity_flag: o.hold || null,
  notes: o.notes || '',
  site_context: o.site,
  material: {
    label_as_printed: o.label,
    page: o.page,
    form: 'powder',
    state: 'as_sold',
  },
});

const fda = [];
const powders = [
  ['333863609', 'Plant-based energizer', null, 4, true, '0.1 µg/serving', '18 g'],
  ['333511892', 'Protein energizer', 86, 37, false, '0.8 µg/serving', '22.7 g'],
  ['333511937', 'Protein energizer', 94, 43, false, '0.9 µg/serving', '20.3 g'],
  ['334620956', 'Raw vegan chocolate', 90, 44, false, '0.9 µg/serving', '21 g'],
  ['334094485', 'Plant-based drink mix', 70, 39, false, '1.0 µg/serving', '27 g', true],
  ['333511880', 'Raw protein', 108, 50, false, '1.1 µg/serving', '22 g'],
  ['333687971', 'High protein energy meal', 60, 42, false, '1.4 µg/serving', '34 g', true],
  ['333687931', 'High protein energy meal', 110, 71, false, '1.6 µg/serving', '23 g'],
  ['334093871', 'Blend of protein, fruits and vegetables', 130, 71, false, '1.6 µg/serving', '22 g'],
  ['334094067', 'Chocolate plant protein shake', 100, 72, false, '3.7 µg/serving', '51 g'],
  ['334093956', 'Blend of protein, fruits and vegetables', 230, 152, false, '4.4 µg/serving', '29 g'],
  ['333688312', 'Organic meal replacement', 120, 67, false, '5.7 µg/serving', '85 g'],
];
const drinks = [
  ['334095916', 'Brown rice protein', null, 2, true, '0.03 µg per prepared serving', '240 mL prepared'],
  ['333512301', 'Rice protein chocolate', 73, 25, false, '0.4 µg per prepared serving', '240 mL prepared', true],
  ['333512299', 'Rice protein plain', 94, 30, false, '0.5 µg per prepared serving', '240 mL prepared'],
  ['333512027', 'Brown rice protein chocolate flavor', 82, 37, false, '0.6 µg per prepared serving', '240 mL prepared'],
  ['333688277', 'Rice protein vanilla', 110, 47, false, '0.7 µg per prepared serving', '240 mL prepared'],
  ['334095704', 'Brown rice protein', 130, 53, false, '0.9 µg per prepared serving', '240 mL prepared'],
  ['333512053', 'Brown rice protein powder', 260, 99, false, '2.8 µg per prepared serving', '240 mL prepared'],
];
function fdaRows(list, kind) {
  for (const [id, name, tas, ias, unspeciated, serving, size, traceTas] of list) {
    const label = `Rice protein, FDA sample ${id}, ${name}`;
    const group = `${kind}, sample ${id}`;
    const servingNote = `Inorganic arsenic per serving printed as ${serving}; serving basis ${size}. Concentration below is µg/kg in the product as analyzed, not per serving.`;
    if (tas == null) {
      fda.push(row({
        id: `fda2013-ias-rice-products-sampling:tAs:${id}:lt_lod`,
        source_id: 'fda2013-ias-rice-products-sampling', analyte: 'tAs', label, page: 'ingredients/rice-protein',
        group, n: 1, statistic: 'not_detected', reported: '<10 µg/kg', value: null, basis: 'as_sold',
        censoring: 'nd', lod: 10, locator: 'Full analytical results, rice products', site: 'monitoring',
        notes: `Total arsenic below the 10 µg/kg detection limit for this product group. ${servingNote}`,
      }));
    } else if (traceTas) {
      fda.push(row({
        id: `fda2013-ias-rice-products-sampling:tAs:${id}:trace`,
        source_id: 'fda2013-ias-rice-products-sampling', analyte: 'tAs', label, page: 'ingredients/rice-protein',
        group, n: 1, statistic: 'sample_value', reported: `trace (${tas} µg/kg)`, value: tas, basis: 'as_sold',
        censoring: 'none', locator: 'Full analytical results, rice products', site: 'monitoring',
        hold: 'Trace result between the detection limit and the quantification limit. The parenthetical figure is not a fully quantified result.',
        notes: servingNote,
      }));
    } else {
      fda.push(row({
        id: `fda2013-ias-rice-products-sampling:tAs:${id}:sample_value`,
        source_id: 'fda2013-ias-rice-products-sampling', analyte: 'tAs', label, page: 'ingredients/rice-protein',
        group, n: 1, statistic: 'sample_value', reported: `${tas} µg/kg`, value: tas, basis: 'as_sold',
        censoring: 'none', locator: 'Full analytical results, rice products', site: 'monitoring',
        notes: servingNote,
      }));
    }
    const iasHold = unspeciated
      ? 'Inorganic arsenic cell is not an independent speciation result. Dimethylarsinic acid and monomethylarsonic acid are marked not speciated.'
      : null;
    fda.push(row({
      id: `fda2013-ias-rice-products-sampling:iAs:${id}:${unspeciated ? 'assumed' : 'sample_value'}`,
      source_id: 'fda2013-ias-rice-products-sampling', analyte: 'iAs', label, page: 'ingredients/rice-protein',
      group, n: 1, statistic: unspeciated ? 'not_detected' : 'sample_value',
      reported: unspeciated ? `${ias} µg/kg printed, not speciated` : `${ias} µg/kg`,
      value: unspeciated ? null : ias, basis: 'as_sold',
      censoring: unspeciated ? 'nd' : 'none', lod: unspeciated ? ias : null,
      locator: 'Full analytical results, rice products', site: 'monitoring',
      hold: iasHold, notes: servingNote,
    }));
  }
}
fdaRows(powders, 'Dietary supplement, rice protein powders');
fdaRows(drinks, 'Protein beverage product labeled rice or brown rice protein');

const lopez = [];
const lopezExplicit = [
  { food: 'rice', page: 'ingredients/rice-protein', label: 'Rice protein concentrate, anonymized product 1', ni: [240.22, 19.88], cr: [208.98, 4.31], cd: null, pb: null },
  { food: 'rice', page: 'ingredients/rice-protein', label: 'Rice protein concentrate, anonymized product 2', ni: [604.54, 65.39], cr: [627.11, 2.34], cd: null, pb: [175.40, 3.15] },
  { food: 'pea', page: 'ingredients/pea-protein', label: 'Pea protein concentrate, anonymized product 1', ni: [585.49, 47.94], cr: [78.97, 11.24], cd: null, pb: null },
  { food: 'pea', page: 'ingredients/pea-protein', label: 'Pea protein concentrate, anonymized product 2', ni: [268.27, 35.21], cr: [114.11, 31.83], cd: null, pb: null },
];
for (const p of lopezExplicit) {
  const slug = p.label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const group = p.label;
  const addMean = (analyte, pair) => lopez.push(row({
    id: `lopezcalabozo2025-vegetable-protein-concentrates:${analyte}:${slug}:mean`,
    source_id: 'lopezcalabozo2025-vegetable-protein-concentrates', analyte, label: p.label, page: p.page,
    group, n: 2, statistic: 'mean', reported: `${pair[0]} +/- ${pair[1]} µg/kg`, value: pair[0], sd: pair[1],
    basis: 'unknown', censoring: 'none', locator: 'Mineral composition table, ppb block', site: 'market',
    notes: 'Mean and standard deviation of the duplicate analysis. The table does not state a dry-weight or as-sold basis.',
  }));
  const addNd = (analyte, lod) => lopez.push(row({
    id: `lopezcalabozo2025-vegetable-protein-concentrates:${analyte}:${slug}:not_detected`,
    source_id: 'lopezcalabozo2025-vegetable-protein-concentrates', analyte, label: p.label, page: p.page,
    group, n: 2, statistic: 'not_detected', reported: `not detected (detection limit < ${lod} µg/kg)`, value: null,
    basis: 'unknown', censoring: 'nd', lod, locator: 'Mineral composition table, ppb block', site: 'market',
    notes: 'Footnote detection limit does not restate the unit. The row sits under the ppb heading, so the limit is read as µg/kg.',
  }));
  addMean('Ni', p.ni);
  addMean('Cr', p.cr);
  if (p.cd) addMean('Cd', p.cd); else addNd('Cd', 0.015);
  if (p.pb) addMean('Pb', p.pb); else addNd('Pb', 0.026);
}

const ringSrc = JSON.parse(fs.readFileSync(path.join(root, 'data/evidence/findings/sources/ring2021-ireland-protein-powders-metals.json'), 'utf8'));
const keep = new Set(['Pb', 'Cd', 'tHg', 'Cr', 'Sn']);
const ring = ringSrc.findings.filter(f => keep.has(f.analyte) && /pea \(retail sample P(?:2|12)\)/.test(f.material?.label_as_printed ?? '')).map(f => {
  const sample = /P12/.test(f.material.label_as_printed) ? 'sample 12' : 'sample 2';
  const text = (s) => String(s ?? '').replace(/P12/g, 'sample 12').replace(/P2/g, 'sample 2');
  return {
    ...f,
    group: `retail pea protein, ${sample}, bought online and in Cork, Ireland`,
    material: { ...f.material, label_as_printed: `Pea protein powder, ${sample}`, page: 'ingredients/pea-protein', form: 'powder', state: 'as_sold' },
    reported: text(f.reported),
    notes: text(f.notes),
    censoring: f.censoring === 'lt_loq' ? 'nd' : f.censoring,
  };
});

const cfia = [row({
  id: 'cfia2020-toxic-metals-selected-foods-2018-19:tHg:brown-rice-protein-powder:sample_value',
  source_id: 'cfia2020-toxic-metals-selected-foods-2018-19', analyte: 'tHg',
  label: 'Brown rice protein powder, one retail sample', page: 'ingredients/rice-protein',
  group: 'Single brown rice protein powder in the 2018 to 2019 survey', n: 1, statistic: 'sample_value',
  reported: '0.022 ppm (22 µg/kg)', value: 22, basis: 'as_sold', censoring: 'none',
  locator: 'Mercury section, p. 8', site: 'monitoring',
  notes: 'The survey maximum for mercury. Lead, cadmium and arsenic were not reported for this sample. Means for all protein powders are a mixed category and are not rice protein results.',
})];

const riceFindings = [...fda, ...lopez.filter(f => f.material.page === 'ingredients/rice-protein'), ...cfia];
const peaFindings = [...ring, ...lopez.filter(f => f.material.page === 'ingredients/pea-protein')];

write('data/evidence/findings/sources/fda2013-ias-rice-products-sampling.json', {
  source_id: 'fda2013-ias-rice-products-sampling',
  primary_artifact: 'raw/manual-fetch/rice-varieties-20261019/fda2013-rice.pdf',
  primary_sha256: 'a505b8708ba5177d8fd21b0703120c829f9f4a60758c378ff1114f30c8c9cafd',
  extracted_at: '2026-11-03', extractor: 'verified-deposit-pdf',
  disposition: 'occurrence_extracted', extraction_scope: 'rice-protein-rows-only',
  disposition_reason: 'Rice protein powder and rice-labeled protein beverage rows were read from the full analytical results. Other foods in the report were not extracted for this page.',
  disposition_locator: 'Full analytical results, rice products',
  study: {
    design: 'US retail sampling of rice and rice products',
    origin: 'not stated for these products',
    market: 'United States retail',
    period: { from: 2012, to: 2013, as_reported: 'September 2012 sampling included in the September 2013 release' },
    method: 'Total arsenic and arsenic species. Inorganic arsenic is the sum of arsenite and arsenate.',
    basis: 'as_sold', site_context: 'monitoring', sampling_unit: 'samples',
  },
});
write('data/evidence/findings/sources/cfia2020-toxic-metals-selected-foods-2018-19.json', {
  source_id: 'cfia2020-toxic-metals-selected-foods-2018-19',
  primary_artifact: null,
  primary_sha256: '1d3c79066c0735d647434725fd1ece7ac6220e5b90914ef013ef30f96f145ef8',
  extracted_at: '2026-11-03', extractor: 'verified-deposit-pdf',
  disposition: 'occurrence_extracted', extraction_scope: 'rice-protein-mercury-only',
  disposition_reason: 'One brown rice protein powder is the only rice-protein result in the report. Category means mix protein sources.',
  disposition_locator: 'Mercury section, p. 8',
  study: {
    design: 'Targeted retail survey',
    origin: 'not stated for the brown rice protein powder',
    market: 'Retail in Halifax, Montreal, Toronto, Ottawa, Vancouver and Calgary',
    period: { from: 2018, to: 2019, as_reported: '1 April 2018 to 21 March 2019 in the sampling section; the report title says 31 March 2019' },
    method: 'Metals of concern, including total mercury',
    basis: 'as_sold', site_context: 'monitoring', sampling_unit: 'samples',
  },
});
write('data/evidence/findings/sources/lopezcalabozo2025-vegetable-protein-concentrates.json', {
  source_id: 'lopezcalabozo2025-vegetable-protein-concentrates',
  primary_artifact: null,
  primary_sha256: null,
  extracted_at: '2026-11-03', extractor: 'verified-europepmc-jats',
  disposition: 'occurrence_extracted', extraction_scope: 'rice-and-pea-rows',
  disposition_reason: 'Mineral table read from Europe PMC PMC11816949. Soybean columns are not rice or pea protein.',
  disposition_locator: 'Mineral composition table',
  study: {
    design: 'Duplicate purchases of commercial protein concentrates',
    origin: 'not stated',
    market: 'Online shops; laboratory in Zamora, Spain. Growing origin not stated.',
    period: { as_reported: 'Each product bought twice, six months apart. Calendar years not stated.' },
    method: 'ICP-MS after microwave nitric acid digestion',
    basis: 'unknown', site_context: 'market', sampling_unit: 'duplicate purchases',
  },
});

write('data/evidence/findings/by-page/ingredients/rice-protein.json', { findings: riceFindings });
write('data/evidence/findings/by-page/ingredients/pea-protein.json', { findings: peaFindings });

const limit = (analyte, value, applies_to, basis) => ({
  source_id: 'eu-2023-915-contaminants-maximum-levels', jurisdiction: 'EU', analyte, value, unit: 'µg/kg', applies_to, basis,
});
write('data/evidence/engine/ingredient/rice-protein/regulatory.json', { entries: [
  limit('Cd', 1000, 'food supplements', 'as placed on the market; this is the supplement row, not a rice-protein row'),
  limit('iAs', 150, 'non-parboiled milled rice (a grain row, not rice protein)', 'rice as defined in the regulation'),
  limit('Cd', 150, 'rice, quinoa, wheat bran and wheat gluten (a commodity row, not rice protein)', 'commodity row'),
] });
write('data/evidence/engine/ingredient/pea-protein/regulatory.json', { entries: [
  limit('Cd', 100, 'proteins from pulses', 'as set for that ingredient row'),
  limit('Cd', 1000, 'food supplements', 'as placed on the market, when the product is sold as a food supplement'),
] });

console.log(JSON.stringify({ rice: riceFindings.length, pea: peaFindings.length, ring: ring.length, lopez: lopez.length }, null, 2));
