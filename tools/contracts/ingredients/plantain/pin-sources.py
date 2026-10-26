"""Pin every source record the plantain synthesis, controls and table cite, by hash.

Shared wiki/sources records and the proposed records in the audit directory are both
pinned; the builder refuses to compile when a pinned record drifts. Re-run only after
reviewing changes to those records.
"""
import hashlib, json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/plantain'
synthesis = json.loads((root / 'data/evidence/syntheses/ingredient-plantain-v1.json').read_text())
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
def path(k):
    p = root / f'wiki/sources/{k}.md'
    return p if p.exists() else audit / f'proposed-sources/{k}.md'
checks = [{'source_id': k, 'path': str(path(k).relative_to(root)), 'proposed': not (root / f'wiki/sources/{k}.md').exists(), 'sha256': hashlib.sha256(path(k).read_bytes()).hexdigest()} for k in sorted(keys)]
(audit / 'source-review.json').write_text(json.dumps({'date': '2026-10-22', 'scope': 'Every source record cited by the plantain candidate; primary texts read by extraction (see extraction/*.json primary_sha256)', 'checks': checks}, indent=2) + '\n')
print(len(checks), 'pinned;', sum(c['proposed'] for c in checks), 'proposed')
