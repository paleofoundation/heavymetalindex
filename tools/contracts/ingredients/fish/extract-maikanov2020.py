from pathlib import Path
import json
import re

B = Path('data/evidence/contracts/fish/fulltext-correction')
ID = 'maikanov2020-fish-products-shuchinsk-burabay-metals'
doc = next(r for r in json.loads((B / 'publisher-document-inventory.json').read_text()) if r['source_id'] == ID)
assert doc['identity_verified'] and doc['doi'] == '10.21521/mw.6462'
pages = Path(doc['text_path']).read_text().split('\f')
assert len([p for p in pages if p.strip()]) == 4
rows = []
metals = {
    'Carp': (8, [('tAs', .0167, .0083), ('Cd', 0, None), ('tHg', .0201, .0100), ('Pb', .0257, .0110)]),
    'Rudd': (12, [('tAs', .0590, .0147), ('Cd', 0, None), ('tHg', .0250, .0043), ('Pb', .0350, .0043)]),
    'Perch': (17, [('tAs', .0305, .0056), ('Cd', .0050, .0014), ('tHg', .0385, .0062), ('Pb', .0250, .0014)]),
    'Crucian': (4, [('tAs', .0600, .0040), ('Cd', 0, None), ('tHg', .0070, .0090), ('Pb', .0100, .0004)]),
}
limitations = [
    'Table 4 species counts total 41; the methods report 44 samples and Table 5 includes three additional cisco/peled samples. No missing metal measurements are invented for those species.',
    'The paper does not define the ± dispersion as SD, SE or uncertainty. It is retained as unspecified dispersion.',
    'The methods’ stated assay ranges start above several reported concentrations (As0.06, Cd0.03, Hg0.04 mg/kg). No validated LOD/LOQ is supplied for those low results.',
    'Abstract/Results say maximum As0.0590, while Table4 reports crucian0.0600. The primary table value is retained with this discrepancy.',
    'No wet/dry label, collection year, per-lake metal breakdown or Latin species identities are supplied. No moisture conversion or source-wide assignment of an amino-acid table’s lake groups is inferred.',
    'Historical regulatory exceedance/safety conclusions are not adopted as current legal or health classifications.',
]

def add(species, n, analyte, value, dispersion, table, page, unit):
    zero_unknown = analyte == 'Cd' and value == 0
    loc = {'artifact': doc['artifact'], 'sha256': doc['sha256'], 'kind': 'cell',
           'location': f'Printed p.{page}, Table {table}, {species}, {analyte}; Methods p.586; Discussion p.588 muscle-only scope'}
    rows.append({
        'id': f'fish-maikanov2020-{species.lower()}-{analyte}', 'source_id': ID,
        'family_id': 'Maikanov-Shuchinsk-Burabay-fish', 'material': species + ' muscle tissue', 'species': species + ' (common name only)',
        'form': 'Fish muscle; uncooked analytical sample, preparation moisture basis unreported',
        'basis': 'Muscle as analysed; wet/dry basis not stated' if unit == 'mg/kg' else 'Muscle activity per reported sample mass, Bq/kg; not an elemental mass concentration',
        'analyte': analyte, 'statistic': 'reported_zero_unresolved_reporting_limit' if zero_unknown else 'reported_species_mean',
        'reported': {'value': value, 'dispersion_unspecified': dispersion, 'unit': unit,
                     'text': str(value) + (f' ± {dispersion}' if dispersion is not None else '') + ' ' + unit},
        'value': None if zero_unknown else value, 'lower_bound': 0 if zero_unknown else value,
        'upper_bound': None if zero_unknown else value, 'n': n,
        'n_note': 'Species fish samples, not analytical replicates; overall 44 is not the denominator of every metal result.',
        'sample_unit': 'Species summary of fish muscle samples', 'origin_or_market': 'Shuchinsk-Burabay lakes, Kazakhstan; lake not mapped for these metal/activity rows',
        'year': 'Collection year not reported; published 2020',
        'censoring': 'Printed Cd zero lacks a numerical reporting bound and is not treated as measured absence. No assay-range endpoint is relabelled as LOD.',
        'locator': loc, 'limitations': limitations, 'extraction_status': 'primary_tables_and_methods_verified',
    })

for species, (n, entries) in metals.items():
    line = next(l for l in pages[2].splitlines() if re.search(r'\b' + species + r'\s*\(', l))
    actual = [float(z) for z in re.findall(r'\d+(?:\.\d+)?', line)]
    expected = [n] + [v for _, value, dispersion in entries for v in ([value, dispersion] if dispersion is not None else [value])]
    assert actual == expected, (species, actual, expected)
    for analyte, value, dispersion in entries:
        add(species, n, analyte, value, dispersion, 4, 587, 'mg/kg')
for species, n, value, dispersion in [('Cisco', 2, 32.30, .0577), ('Carp', 8, 33.65, .1588),
                                     ('Rudd', 12, 32.70, .4330), ('Perch', 17, 32.85, .0722),
                                     ('Peled', 1, 46.25, .4230), ('Crucian', 4, 32.50, .2598)]:
    line = next(l for l in pages[3].splitlines() if re.search(r'\b' + species + r'\s*\(', l))
    assert [float(z) for z in re.findall(r'\d+(?:\.\d+)?', line)][:3] == [n, value, dispersion]
    add(species, n, 'Cs137', value, dispersion, 5, 588, 'Bq/kg')
assert len(rows) == 22
result = {'source_id': ID, 'identity_verified': True, 'completeness_verified': True,
          'proof': {'doi': doc['doi'], 'artifact': doc['artifact'], 'sha256': doc['sha256'],
                    'pages': 4, 'coverage': 'Full four-page paper reviewed: Methods, Results/Discussion, all five tables and references. All16 metal and6 Cs137 activity results retained; nutritional amino-acid Tables1–3 are outside contaminant occurrence.'},
          'coverage': {'occurrence_rows': 22, 'metal_rows': 16, 'radionuclide_activity_rows': 6,
                       'reference_units': 'No reported medians or deposited individual results; means/dispersion are not expanded into medians.'},
          'rows': rows, 'reference_unit_candidates': []}
(B / 'extractions/maikanov2020.json').write_text(json.dumps(result, indent=2) + '\n')
print({'source_id': ID, 'rows': len(rows), 'unresolved_zero_rows': 3})
