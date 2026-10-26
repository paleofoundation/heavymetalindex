"""Read the complete Kim 2019 S5 sample table without half-DL imputation.

The source's rounded/imputed summary means remain reported summaries. They
are not used to manufacture individual observations or reference medians.
"""
from pathlib import Path
from collections import Counter
import hashlib
import json
import re
import xml.etree.ElementTree as ET
import zipfile

B = Path('data/evidence/contracts/fish/fulltext-correction')
SOURCE = 'kim2019-jeju-shark-metals'
FAMILY = 'Kim-2017-Jeju-market-sharks'
doc = B / 'recovered-primary/kim2019-jeju-shark-metals-s005.docx'
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
root = ET.fromstring(zipfile.ZipFile(doc).read('word/document.xml'))
tables = root.findall('.//w:tbl', ns)
assert len(tables) == 1
cells = [[[''.join(n.text or '' for n in c.findall('.//w:t', ns)).strip()
           for c in r.findall('w:tc', ns)] for r in t.findall('w:tr', ns)]
         for t in tables][0]
assert cells[1][3:15] == ['Cr', 'Fe', 'Cu', 'Zn', 'As', 'Se', 'Cd', 'Sn', 'Sb', 'Pb', 'THg', 'MeHg']
samples = cells[2:]
assert len(samples) == 25 and len({r[0] for r in samples}) == 25
assert all(len(r) == 22 for r in samples)
analytes = ['Cr', 'Fe', 'Cu', 'Zn', 'tAs', 'Se', 'Cd', 'Sn', 'Sb', 'Pb', 'tHg', 'MeHg']
sha = hashlib.sha256(doc.read_bytes()).hexdigest()
primary = json.loads((B / 'extractions' / (SOURCE + '-xml-structure.json')).read_text())
summary = next(t for t in primary['tables'] if t['id'] == 'pone.0212410.t002')
counts = Counter(r[1] for r in samples)
assert sorted(counts.values()) == [1, 2, 2, 2, 3, 15]
assert Counter(r[2] for r in samples) == {'Moseulpo': 19, 'Hallim': 6}

def locator(artifact, digest, location):
    return {'artifact': str(artifact), 'sha256': digest, 'kind': 'cell', 'location': location}

limits = [
    'One October–December 2017 Jeju market sampling family; subgroup identities do not create independent studies.',
    'Total As and total Cr were measured; inorganic arsenic and chromium valence were not speciated.',
    'The authors converted mercury dry-weight measurements using their measured mean moisture of 74.6%; no new moisture assumption is applied.',
    'Table 2 uses half-DL substitutions and two-decimal rounding. Its 0.00 values are not evidence of absence.',
    'The authors’ regulatory and predicted shark-size conclusions are not adopted as current legal or safe-serving advice.',
]
rows = []
raw = []

def add(key, material, analyte, statistic, value, lo, hi, n, loc, text, *, sd=None, members=None, note=''):
    row = {
        'id': 'fish-kim2019-' + key, 'source_id': SOURCE, 'family_id': FAMILY,
        'material': material, 'form': 'Uncooked epaxial shark muscle, frozen at −20°C before analysis',
        'species': material if material in counts else 'Mixed shark species as specified by the source',
        'analyte': analyte, 'reported': {'value': value, 'sd': sd, 'unit': 'mg/kg', 'text': text},
        'statistic': statistic, 'basis': 'Wet weight; author-reported mercury conversion uses measured 74.6% mean moisture',
        'n': n, 'n_note': 'N counts sampled sharks, not analytical repetitions. ' + note,
        'sample_unit': 'Individual shark' if n == 1 else 'Source-defined shark subgroup',
        'origin_or_market': 'Jeju, Korea; Moseulpo/Hallim markets and specified local by-catch areas',
        'year': 'October–December 2017', 'value': value, 'lower_bound': lo, 'upper_bound': hi,
        'censoring': 'S5 <DL entries retain 0–0.0001 mg/kg identification bounds for ICP-MS analytes, with an open upper endpoint; no measured zero or half-DL substitution. Mercury values in S5 are all quantified.',
        'locator': loc, 'limitations': limits, 'extraction_status': 'primary_and_supplement_verified',
    }
    if members is not None:
        row['member_sample_ids'] = members
    rows.append(row)
    return row

for r in samples:
    sample_id, species, market = r[:3]
    for j, analyte in enumerate(analytes):
        text = r[j + 3]
        nd = text.replace(' ', '') == '<DL'
        assert not nd or analyte not in ['tHg', 'MeHg'], (sample_id, analyte)
        value = None if nd else float(text)
        loc = locator(doc, sha, f'Supplement S5, sample {sample_id}, {cells[1][j+3]}; header mg/kg ww')
        result = add(sample_id + '-' + analyte, species, analyte,
                     'individual_left_censored' if nd else 'individual_concentration',
                     value, 0 if nd else value, .0001 if nd else value, 1, loc, text,
                     members=[sample_id])
        result['sampling_market'] = market
        result['biological_data_as_reported'] = dict(zip(
            ['age', 'total_body_length_cm', 'body_weight_kg', 'girth_cm', 'sex', 'habitat'], r[16:22]))
        result['reporting_interval_upper_open'] = nd
        raw.append(result)

reconciliation = []
for ordinal, table_row in enumerate(summary['rows'][2:], 1):
    group = table_row[0]['text']
    n = int(table_row[1]['text'])
    members = samples if group == 'Total' else [r for r in samples if r[1] == group]
    assert len(members) == n
    for j, analyte in enumerate(analytes):
        text = table_row[j + 2]['text']
        numbers = [float(s) for s in re.findall(r'\d+(?:\.\d+)?', text)]
        assert len(numbers) in [1, 2]
        mean = numbers[0]
        selected = [r for r in raw if r['analyte'] == analyte and r['member_sample_ids'][0] in {m[0] for m in members}]
        nd_count = sum(r['value'] is None for r in selected)
        lo = sum(r['lower_bound'] for r in selected) / n
        hi = sum(r['upper_bound'] for r in selected) / n
        # This check is solely a reconciliation to the source’s printed mean;
        # reference units below retain endpoint bounds, never the midpoint.
        reported_reconstruction = (lo + hi) / 2
        agrees = abs(mean - reported_reconstruction) <= .00501
        reconciliation.append({'group': group, 'analyte': analyte, 'n': n,
                               'nd': nd_count, 'reported_mean': mean,
                               'primary_mean_interval': [lo, hi], 'rounding_agrees': agrees})
        result = add(f'table2-{ordinal}-{analyte}', group, analyte,
                     'reported_half_DL_substituted_mean' if nd_count else 'reported_arithmetic_mean',
                     None if nd_count else mean, lo if nd_count else mean, hi if nd_count else mean,
                     n, locator(primary['artifact'], primary['sha256'], f'Primary Table 2, {group}, {analyte}; footnote half-DL and two-decimal rounding'),
                     text, sd=numbers[1] if len(numbers) == 2 else None,
                     members=[m[0] for m in members], note='This summary overlaps S5 individual results and other aggregate rows.')
        result['reported']['mean'] = mean
        result['censored_members'] = nd_count
        result['reported']['zero_is_not_absence'] = mean == 0
        result['rounding_reconciliation_agrees'] = agrees
        result['reporting_interval_upper_open'] = nd_count == n

for habitat, analyte, mean in [('benthic', 'tHg', .14), ('pelagic', 'tHg', .25), ('benthic', 'MeHg', .08), ('pelagic', 'MeHg', .17)]:
    members = [r[0] for r in samples if r[21] == habitat]
    add('results-' + habitat + '-' + analyte, habitat + ' sharks', analyte, 'reported_habitat_arithmetic_mean',
        mean, mean, mean, len(members), locator(primary['artifact'], primary['sha256'], 'Results: habitat concentration paragraph following Fig 2'),
        str(mean) + ' mg/kg', members=members, note='Habitat groups overlap the species and individual results.')

members = [r[0] for r in samples if r[1] == 'Carcharhinus brachyurus' and r[0] != 'SNU-MO-0012']
add('results-other14-Cu', 'Carcharhinus brachyurus, excluding newborn SNU-MO-0012', 'Cu',
    'reported_subgroup_concentration_statistic_unspecified', .92, .92, .92, 14,
    locator(primary['artifact'], primary['sha256'], 'Results: newborn SNU-MO-0012 Cu comparison with other 14 sharks (0.92 mg/kg)'),
    '0.92 mg/kg', members=members, note='Do not assume the word concentration means an observed median.')

# Pass individual endpoint observations to the maintained median engine later.
# Neither the printed table means nor all-shark aggregates enter as medians.
median_groups = []
for species in counts:
    for analyte in analytes:
        observations = [r for r in raw if r['material'] == species and r['analyte'] == analyte]
        median_groups.append({
            'id': 'fish-kim2019-median-' + re.sub('[^a-z]+', '-', species.lower()).strip('-') + '-' + analyte,
            'source_id': SOURCE, 'family_id': FAMILY, 'species': species, 'analyte': analyte,
            'n': len(observations), 'unit': 'mg/kg', 'basis': 'Wet-weight uncooked edible finfish muscle',
            'material': 'Uncooked edible finfish muscle', 'statistic': 'observed_sample_median_pending_maintained_engine',
            'observations': [{'id': r['id'], 'lower': r['lower_bound'], 'upper': r['upper_bound'], 'locator': r['locator']} for r in observations],
            'overlap': 'Six disjoint species subgroups; no all-shark, habitat, sex or phylogenetic-family aggregate is additionally admitted.',
            'admitted': False, 'reason': 'Complete all compatible source families and scientific scope review before freezing reference membership.',
        })

assert len(raw) == 300 and len(rows) == 389 and len(median_groups) == 72
assert all(r['value'] is None for r in raw if r['analyte'] == 'Cd')
result = {
    'source_id': SOURCE, 'identity_verified': True, 'completeness_verified': True,
    'proof': {'doi': '10.1371/journal.pone.0212410', 'artifact': primary['artifact'], 'sha256': primary['sha256'],
              'supplement': str(doc), 'supplement_sha256': sha,
              'coverage': 'Full methods, Results, Discussion, Conclusions and all five main tables reviewed; S5 complete 25×12 measurements. Figures 2/3 visually inspected; unlabelled graphical bars map to S5 and are not digitized as invented exact values.'},
    'coverage': {'individual_rows': 300, 'table2_summary_rows': 84, 'additional_habitat_rows': 4,
                 'additional_Cu_group_rows': 1, 'occurrence_rows': 389,
                 'graphical_only_groups': ['Fig2A three phylogenetic families ×11 elements', 'Fig2B habitats ×11 elements', 'Fig3F male/female C. brachyurus ×12 analytes'],
                 'graphical_group_route': 'All underlying values retained in S5. Figures have no numeric bar labels; source half-DL means are not promoted to exact measured medians. Derived descriptive summaries can be calculated explicitly from sample bounds.',
                 'duplicate_routes': ['Table5 concentrations repeat Table2; Cr/Cu/Zn/Se entries are modeled mg/day intake, not occurrence', 'Results newborn Cu8.91 is a rounded repeat of S5 SNU-MO-0012 8.9158', 'Fig3A–E repeat S5 tHg/MeHg individual values, fitted predictions are not new fish'],
                 'not_occurrence': 'Main Tables3/4 p-values, regulatory Table5 limits, modeled doses, ratio percentages and predicted size thresholds are not new concentration measurements.'},
    'summary_reconciliation': reconciliation, 'rows': rows, 'raw_median_groups': median_groups,
}
(B / 'extractions/kim2019.json').write_text(json.dumps(result, indent=2) + '\n')
print({'source_id': SOURCE, 'rows': len(rows), 'individual_rows': len(raw), 'median_groups': len(median_groups),
       'summary_discrepancies': [r for r in reconciliation if not r['rounding_agrees']]})
