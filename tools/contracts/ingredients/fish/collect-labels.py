"""Collect the distinct species and material/preparation labels in the fish extractions,
so they can be mapped once to commodity species groups (species-map.json)."""
import json, pathlib, collections
root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish'
sp, mp = collections.Counter(), collections.Counter()
for f in sorted((audit / 'extraction').glob('*.json')):
    x = json.loads(f.read_text())
    if x.get('disposition') != 'occurrence_extracted': continue
    for y in x.get('findings', []):
        sp[(y.get('species') or '').strip()] += 1
        mp[((y.get('material') or '').strip(), (y.get('preparation') or '').strip())] += 1
(audit / 'label-inventory.json').write_text(json.dumps({'species': [{'label': k, 'n': v} for k, v in sorted(sp.items())],
    'material_preparation': [{'material': a, 'preparation': b, 'n': v} for (a, b), v in sorted(mp.items())]}, indent=1, ensure_ascii=False) + '\n')
print(len(sp), 'species labels;', len(mp), 'material/preparation pairs')
