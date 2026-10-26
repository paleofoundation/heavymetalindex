"""Merge the per-part integrity-hold reviews into holds.json (value_fails_source_integrity_check)."""
import json, pathlib
root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish'
holds, reviewed, not_held = {}, [], {}
for f in sorted((audit / 'holds').glob('part-*.json')):
    x = json.loads(f.read_text())
    holds.update(x['holds']); reviewed += x['reviewed_sources']; not_held.update(x.get('not_held', {}))
(audit / 'holds.json').write_text(json.dumps({'rule': 'Owner amendment 22 Oct 2026: value_fails_source_integrity_check', 'reviewed_sources': sorted(reviewed), 'holds': dict(sorted(holds.items())), 'not_held': not_held}, indent=1, ensure_ascii=False) + '\n')
print(len(holds), 'held findings across', len({h.split(':')[0] for h in holds}), 'sources;', len(reviewed), 'sources reviewed')
