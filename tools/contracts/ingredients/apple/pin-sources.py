"""Pin every shared source record the apple synthesis, controls and extractions use, by hash.

Re-run only after reviewing changes to those shared records; the builder refuses
to compile when a pinned record drifts.
"""
import hashlib, json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/apple'
synthesis = json.loads((root / 'data/evidence/syntheses/ingredient-apple-v1.json').read_text())
keys = set()
def walk(v):
    if isinstance(v, dict):
        keys.update(v.get('source_keys', []))
        for x in v.values(): walk(x)
    elif isinstance(v, list):
        for x in v: walk(x)
walk(synthesis)
keys.update(r['source_id'] for r in json.loads((audit / 'interventions.json').read_text())['records'])
for f in (audit / 'extraction').glob('*.json'):
    x = json.loads(f.read_text())
    if x['disposition'] == 'occurrence_extracted': keys.add(x['source_id'])
p = audit / 'source-review.json'
review = json.loads(p.read_text()) if p.exists() else {'date': '2026-10-22'}
before = {c['source_id']: c['sha256'] for c in review.get('checks', [])}
rec = lambda k: f'wiki/sources/{k}.md'
review['checks'] = [{'source_id': k, 'path': rec(k), 'sha256': hashlib.sha256((root / rec(k)).read_bytes()).hexdigest()} for k in sorted(keys)]
review['repinned'] = {'date': '2026-10-22', 'changed': sorted(c['source_id'] for c in review['checks'] if before.get(c['source_id']) not in (None, c['sha256']))}
p.write_text(json.dumps(review, indent=2) + '\n')
print(len(review['checks']), 'pinned;', len(review['repinned']['changed']), 'changed since last pin')
