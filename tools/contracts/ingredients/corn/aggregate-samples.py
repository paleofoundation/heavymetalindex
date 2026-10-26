"""Summarize per-sample literature datasets into district medians.

Bedoya-Perales 2023 deposits one composite per farm (14 maize grain composites), with no
summary statistics. Each sample stays in sample_values (the reference input); the table rows
are HMI-calculated district medians with censoring bounds, like the GEMS/Food summaries.
The agent's per-sample findings are preserved unchanged in triage/ as the extraction record.
"""
import json, pathlib, statistics, collections, re

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/corn'
sid = 'bedoya-perales2023-moquegua-peru-mining-dataset'
f = audit / f'extraction/{sid}.json'
keep = audit / f'triage/{sid}.per-sample-findings.json'
x = json.loads(f.read_text())
if not keep.exists(): keep.write_text(json.dumps(x['findings'], indent=1, ensure_ascii=False) + '\n')
per = json.loads(keep.read_text())
groups = collections.defaultdict(list)
for fd in per:
    district = fd['group'].split(' district')[0]
    groups[(fd['analyte'], district)].append(fd)
out = []
for (a, d), fs in sorted(groups.items()):
    lo = [0.0 if fd['value_ug_kg'] is None else fd['value_ug_kg'] for fd in fs]
    hi = [fd['lod_ug_kg'] if fd['value_ug_kg'] is None else fd['value_ug_kg'] for fd in fs]
    det = [fd for fd in fs if fd['value_ug_kg'] is not None]
    flags = sorted({fd['integrity_flag'] for fd in fs if fd.get('integrity_flag')})
    out.append({'id': f'{sid}:{a}:{re.sub(r"[^a-z0-9]+", "-", d.lower())}:median', 'analyte': a, 'material': 'maize_grain', 'material_text': fs[0]['material_text'],
        'group': f'{d} district, Moquegua (farm composites)', 'group_kind': 'growing_origin', 'site_context': 'mining_impacted', 'n': len(fs), 'statistic': 'median',
        'reported': {'value': None, 'unit': 'mg/kg', 'text': f'{len(det)} of {len(fs)} composites above the limit of quantification; samples ' + ', '.join(fd['group'].split('(')[1].split(',')[0] for fd in fs)},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'min_ug_kg': min(fd['value_ug_kg'] for fd in det) if det else None, 'max_ug_kg': max(fd['value_ug_kg'] for fd in det) if det else None, 'sd_ug_kg': None,
        'basis': fs[0]['basis'], 'conversion': 'mg/kg x 1000', 'censoring': 'Values below the limit of quantification are intervals from zero to the limit; HMI-calculated medians carry lower and upper bounds',
        'lod_ug_kg': None, 'years': [2021, 2021], 'locator': 'Figshare "Dataset" sheet rows ' + ', '.join(fd['locator'].split('row ')[1].split(',')[0] for fd in fs),
        'integrity_flag': None, 'notes': ('HMI-calculated median of farm composites. ' + ' '.join(flags)).strip(), 'sample_ids': [fd['id'] for fd in fs]})
x['findings'] = out
x['findings_note'] = 'Table rows are HMI-calculated district medians; per-sample results are in sample_values and triage/' + keep.name
f.write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')
print(len(out), 'district medians from', len(per), 'sample results')
