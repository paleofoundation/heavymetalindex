"""Structural check of fish extraction records (not a scientific review).

python3 -I tools/contracts/ingredients/fish/check-extractions.py [source_id ...]
Prints one line per problem and a disposition summary.
"""
import json, pathlib, sys, collections, re

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish'
ANALYTES = {'Pb', 'Cd', 'tAs', 'iAs', 'DMA', 'MMA', 'oAs', 'As_unspecified', 'tHg', 'MeHg', 'iHg', 'Hg_unspecified', 'Ni', 'Cr', 'Cr-VI', 'Al', 'Sn', 'U', 'Sb'}
STATS = {'mean', 'median', 'geometric_mean', 'range', 'min', 'max', 'sample_value', 'below_LOD', 'not_detected'}
DISP = re.compile(r'^(occurrence_extracted|mitigation_extracted|exposure_or_regulatory_used|context_only|out_of_scope|access_blocked|duplicate_of:source:.+)$')
inv = {x['source_id']: x for x in json.loads((audit / 'source-inventory.json').read_text())}
want = set(sys.argv[1:])
problems, counts = [], collections.Counter()
for f in sorted((audit / 'extraction').glob('*.json')):
    try: x = json.loads(f.read_text())
    except Exception as e: problems.append(f'{f.name}: invalid JSON {e}'); continue
    sid = x.get('source_id')
    if want and sid not in want: continue
    if sid != f.stem: problems.append(f'{f.name}: source_id {sid} differs from filename')
    if sid not in inv: problems.append(f'{sid}: not in source inventory')
    d = x.get('disposition') or ''
    counts[d.split(':')[0]] += 1
    if not DISP.match(d): problems.append(f'{sid}: bad disposition {d!r}')
    for k in ('disposition_reason', 'disposition_locator'):
        if not (x.get(k) or '').strip(): problems.append(f'{sid}: missing {k}')
    fs = x.get('findings') or []
    if d == 'occurrence_extracted' and not fs: problems.append(f'{sid}: occurrence without findings')
    ids = [y.get('id') for y in fs]
    for i, c in collections.Counter(ids).items():
        if c > 1: problems.append(f'{sid}: duplicate finding id {i}')
    for y in fs:
        if y.get('analyte') not in ANALYTES: problems.append(f'{sid}: {y.get("id")} analyte {y.get("analyte")!r}')
        if y.get('statistic') not in STATS: problems.append(f'{sid}: {y.get("id")} statistic {y.get("statistic")!r}')
        if not y.get('locator'): problems.append(f'{sid}: {y.get("id")} no locator')
        v = [y.get(k) for k in ('value_ug_kg', 'min_ug_kg', 'max_ug_kg', 'lod_ug_kg')]
        if all(z is None for z in v) and not y.get('median_bounds_ug_kg') and y.get('statistic') not in ('not_detected', 'below_LOD') and not re.search(r'mg/l|µg/l|ug/l|bq', str(y.get('reported', {}).get('unit', '')), re.I):
            problems.append(f'{sid}: {y.get("id")} no numeric value')
        for k in ('value_ug_kg', 'min_ug_kg', 'max_ug_kg', 'lod_ug_kg', 'sd_ug_kg'):
            if y.get(k) is not None and not isinstance(y.get(k), (int, float)): problems.append(f'{sid}: {y.get("id")} {k} not numeric')
missing = [s for s in (want or inv) if not (audit / 'extraction' / f'{s}.json').exists()]
for p in problems: print(p)
print(json.dumps({'records': sum(counts.values()), 'dispositions': counts, 'problems': len(problems), 'missing': len(missing)}))
