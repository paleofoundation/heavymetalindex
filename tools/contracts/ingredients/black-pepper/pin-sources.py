"""Pin every shared source record the black pepper synthesis and controls cite, by hash.

Re-run only after reviewing changes to those shared records; the builder refuses
to compile when a pinned record drifts.
"""
import hashlib, json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper'
synthesis = json.loads((root / 'data/evidence/syntheses/ingredient-black-pepper-v1.json').read_text())
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
    if x.get('disposition') == 'occurrence_extracted': keys.add(x['source_id'])
rp = audit / 'source-review.json'
review = json.loads(rp.read_text()) if rp.exists() else {'checks': []}
before = {c['source_id']: c['sha256'] for c in review['checks']}
review['checks'] = [{'source_id': k, 'path': f'wiki/sources/{k}.md', 'sha256': hashlib.sha256((root / f'wiki/sources/{k}.md').read_bytes()).hexdigest()} for k in sorted(keys)]
review['repinned'] = {'date': '2026-10-22', 'reason': 'Initial pin of every shared source record the black pepper synthesis, controls and occurrence table cite.',
                      'changed': sorted(c['source_id'] for c in review['checks'] if before.get(c['source_id']) not in (None, c['sha256']))}
(audit / 'source-review.json').write_text(json.dumps(review, indent=2) + '\n')
print(len(review['checks']), 'pinned;', len(review['repinned']['changed']), 'changed since last pin')
