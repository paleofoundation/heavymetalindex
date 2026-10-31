"""Pin every shared source record the seaweed synthesis, controls and table cite, by hash.

Re-run only after reviewing changes to those shared records; the builder refuses
to compile when a pinned record drifts.
"""
import hashlib, json, pathlib

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/seaweed'
synthesis = json.loads((root / 'data/evidence/syntheses/ingredient-seaweed-v1.json').read_text())
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
p = audit / 'claude-source-pins.json'
before = {c['source_id']: c['sha256'] for c in json.loads(p.read_text())['checks']} if p.exists() else {}
checks = [{'source_id': k, 'path': f'wiki/sources/{k}.md', 'sha256': hashlib.sha256((root / f'wiki/sources/{k}.md').read_bytes()).hexdigest()} for k in sorted(keys)]
p.write_text(json.dumps({'date': '2026-10-22', 'scope': 'Every seaweed source record cited or contributing table rows; primary texts read by extraction (extraction/*.json primary_sha256)',
  'checks': checks, 'changed_since_last_pin': sorted(c['source_id'] for c in checks if before.get(c['source_id']) not in (None, c['sha256']))}, indent=1) + '\n')
print(len(checks), 'pinned')
