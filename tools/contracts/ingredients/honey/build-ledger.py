"""Honey evidence ledger (owner fullness rules, 22 Oct 2026, gates 1-3).

The universe is recomputed here from shared records, never taken from the
extraction files: every wiki/sources record tagged to the ingredient or naming
honey, plus every multi-food dataset that carries honey rows. Every item must end
with exactly one terminal, content-based disposition and a locator.
"""
import json, pathlib, re, sys

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/honey'
TERMINAL = {'occurrence_extracted', 'mitigation_extracted', 'exposure_or_regulatory_used', 'context_only', 'out_of_scope', 'access_blocked'}

universe = {}
for p in sorted((root / 'wiki/sources').glob('*.md')):
    text = p.read_text(errors='replace')
    tagged = bool(re.search(r'ingredients/honey(\]|\||")', text))
    # "honey bee" and "honey mushroom" still enter the universe; their disposition decides scope.
    if tagged or re.search(r'\bhoney', text, re.I):
        universe[p.stem] = {'tagged': tagged, 'path': str(p.relative_to(root))}
# Multi-food datasets with honey rows (sample-level or summary exports).
# BfR MEAL honey results sit in the Fechner 2022 results paper's per-food tables.
for dataset in ['fda2022-tds-elements-fy2018-fy2020', 'who-gemsfood-heavy-metal-contaminants', 'fechner2022-bfr-meal-hg-cd-pb-ni-germany']:
    universe.setdefault(dataset, {'tagged': False, 'path': f'wiki/sources/{dataset}.md'})['dataset_rows'] = True

decided = {}
for f in sorted((audit / 'extraction').glob('*.json')):
    x = json.loads(f.read_text())
    decided[x['source_id']] = {'disposition': x['disposition'], 'reason': x.get('disposition_reason'), 'locator': x.get('disposition_locator'),
                               'record': str(f.relative_to(root)), 'findings': len(x.get('findings', [])),
                               'sample_values': len(x.get('sample_values', [])), 'controls': len(x.get('controls', []))}
for name in ['context-dispositions.json', 'ledger-dispositions.json']:
    p = audit / name
    if p.exists():
        for x in json.loads(p.read_text()):
            decided.setdefault(x['source_id'], {'disposition': x['disposition'], 'reason': x.get('reason') or x.get('disposition_reason'),
                                                'locator': x.get('locator') or x.get('disposition_locator'), 'record': name})

errors, ledger = [], []
for sid, u in sorted(universe.items()):
    d = decided.get(sid)
    if not d: errors.append(f'{sid}: no disposition'); ledger.append({'source_id': sid, **u, 'disposition': None}); continue
    disp = d['disposition'] or ''
    if not (disp in TERMINAL or disp.startswith('duplicate_of:')): errors.append(f'{sid}: non-terminal disposition {disp!r}')
    if not d.get('locator'): errors.append(f'{sid}: disposition without locator')
    if not d.get('reason'): errors.append(f'{sid}: disposition without reason')
    if disp == 'access_blocked' and 'search' not in json.dumps(d).lower() and 'searched' not in json.dumps(d).lower():
        errors.append(f'{sid}: access_blocked without retrieval-attempt record')
    ledger.append({'source_id': sid, **u, **d})
extra = sorted(set(decided) - set(universe))
out = {'date': '2026-10-22', 'rule': 'Owner fullness rules (Desktop/hmi-ingredient-fullness-rules.md) Part 2, gates 1–3',
       'universe_size': len(universe), 'tagged': sum(u['tagged'] for u in universe.values()),
       'counts': {k: sum(1 for x in ledger if x.get('disposition') == k) for k in sorted({x.get('disposition') or 'MISSING' for x in ledger})},
       'decided_outside_universe': extra, 'errors': errors, 'ledger': ledger}
(audit / 'evidence-ledger.json').write_text(json.dumps(out, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: out[k] for k in ('universe_size', 'tagged', 'counts', 'decided_outside_universe')}, indent=1))
print(f'{len(errors)} ledger errors'); [print('  ', e) for e in errors[:60]]
sys.exit(1 if errors and '--strict' in sys.argv else 0)
