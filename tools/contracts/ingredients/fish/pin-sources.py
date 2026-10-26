"""Pin every shared source record the fish synthesis, controls and occurrence rows cite, by hash.

Re-run only after reviewing changes to those shared records; the builder refuses to
compile when a pinned record drifts.
"""
import hashlib, json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish'
synthesis = json.loads((root / 'data/evidence/syntheses/ingredient-fish-v1.json').read_text())
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
path = audit / 'source-review.json'
before = {c['source_id']: c['sha256'] for c in json.loads(path.read_text())['checks']} if path.exists() else {}
checks = [{'source_id': k, 'path': f'wiki/sources/{k}.md', 'sha256': hashlib.sha256((root / f'wiki/sources/{k}.md').read_bytes()).hexdigest()} for k in sorted(keys)]
path.write_text(json.dumps({'date': '2026-10-22', 'checks': checks, 'changed_since_last_pin': sorted(c['source_id'] for c in checks if before.get(c['source_id']) not in (None, c['sha256']))}, indent=1) + '\n')
print(len(checks), 'pinned')
