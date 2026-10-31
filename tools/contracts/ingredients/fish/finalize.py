"""Write the fish result record: counts, checks, hashes, holds, access gaps, correction proposals,
shared requests and a before/after comparison with the live page.

Run after build.mjs, preview.mjs and fullness.mjs <preview html> have passed.
"""
import collections, hashlib, json, pathlib, re, subprocess

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish'
ledger_dir = root / 'data/evidence/contracts/fish'
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()
J = lambda p: json.loads((audit / p).read_text())
html = 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish/preview/ingredients/fish.html'

score = json.loads((ledger_dir / 'fullness-scorecard.json').read_text())
ledger = json.loads((ledger_dir / 'evidence-ledger.json').read_text())
items = ledger['items']
by_kind = collections.Counter(i['disposition'].split(':')[0] for i in items)
src_items = [i for i in items if i['id'].startswith('source:')]
by_src = collections.Counter(i['disposition'].split(':')[0] for i in src_items)
tot = {k: 0 for k in ('rows', 'rated', 'direct', 'bounded', 'unavailable')}; reasons = collections.Counter()
for a, v in score['by_analyte'].items():
    for k in tot: tot[k] += v.get(k, 0)
    reasons.update(v['unavailable_reasons'])
gate = json.loads(subprocess.run(['node', '--max-old-space-size=16000', '-e', f"import('./tools/audit-ingredient-presentation.mjs').then(m=>console.log(JSON.stringify(m.inspectIngredientPresentation(require('fs').readFileSync('{html}','utf8')))))"], cwd=root, capture_output=True, text=True, check=True).stdout)

proposals = []
for f in sorted((audit / 'extraction').glob('*.json')):
    x = json.loads(f.read_text())
    if x.get('contradictions_with_stored_summary'):
        p = f'wiki/sources/{x["source_id"]}.md'
        proposals.append({'path': p, 'before_sha256': sha(p) if (root / p).exists() else None, 'primary': x.get('primary_artifact') if isinstance(x.get('primary_artifact'), str) else None,
                          'issues': x['contradictions_with_stored_summary'], 'status': 'proposed; central owns shared source edits'})
(audit / 'source-correction-proposals.json').write_text(json.dumps({'date': '2026-10-22', 'count': len(proposals), 'proposals': proposals}, indent=1, ensure_ascii=False) + '\n')

holds = json.loads((audit / 'holds.json').read_text())['holds']
access = [{'source_id': i['source_id'], 'rationale': i['rationale'][:300], 'request': i.get('retrieval_request', {}).get('request')} for i in src_items if i['disposition'] == 'access_blocked']
live = (root / 'wiki/ingredients/fish.md').read_text()
cand = (audit / 'candidate/fish.md').read_text()
fm_sources = lambda t: int(re.search(r'^sources:\s*(\d+)', t, re.M).group(1))
shared = json.loads((audit / 'shared-requests.json').read_text())

result = {
 'ingredient': 'fish', 'date': '2026-10-22', 'status': 'candidate_ready_for_central_review', 'live': False,
 'rules_applied': ['docs/contracts/claude-ingredient-playbook.md', 'AGENTS.md Mandatory ingredient publication gate', 'docs/contracts/ingredient-canonical-style.md', 'docs/contracts/ingredient-reading-pattern.md',
                   'docs/contracts/ingredient-faq-question-bank.md', 'docs/contracts/ingredient-fullness-gates.md', 'docs/contracts/evidence-and-answers.md', 'docs/contracts/hmi-baseline.md', 'docs/public-content-boundary.md'],
 'owned_paths': ['tools/contracts/ingredients/fish/', 'data/evidence/syntheses/ingredient-fish-v1.json', 'data/evidence/questions/ingredient/fish.json',
                 'data/evidence/contracts/fish/', 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish/'],
 'shared_files_edited': [], 'wiki_untouched': sha('wiki/ingredients/fish.md') == J('claude-baseline.json')['sha256'],
 'commands': {'inventory': 'node tools/contracts/ingredients/fish/inventory.mjs <universe.json>', 'datasets': 'python3 -I tools/contracts/ingredients/fish/prepare-datasets.py',
              'extraction_check': 'python3 -I tools/contracts/ingredients/fish/check-extractions.py', 'labels': 'python3 -I tools/contracts/ingredients/fish/collect-labels.py',
              'holds': 'python3 -I tools/contracts/ingredients/fish/merge-holds.py', 'compose': 'python3 -I tools/contracts/ingredients/fish/compose.py',
              'pin': 'python3 -I tools/contracts/ingredients/fish/pin-sources.py', 'build': 'node tools/contracts/ingredients/fish/build.mjs', 'check': 'node tools/contracts/ingredients/fish/build.mjs --check',
              'preview': 'node tools/contracts/ingredients/fish/preview.mjs', 'fullness': f'node tools/contracts/ingredients/fish/fullness.mjs {html}', 'finalize': 'python3 -I tools/contracts/ingredients/fish/finalize.py'},
 'evidence_ledger': {'universe_size': score['universe_size'], 'source_records': score['source_records'], 'dataset_rows': score['dataset_rows'],
                     'dispositions_all_items': dict(by_kind), 'dispositions_source_records': dict(by_src), 'occurrence_families': len({r['family_id'] for r in ledger['results']})},
 'rows': tot, 'unavailable_reasons': dict(reasons), 'references': {'scopes': len(ledger['references']), 'units': len(ledger['reference_units']),
   'rated_scopes': len({r['comparison'].get('reference_id') for r in ledger['results'] if r['comparison']['state'] == 'rated'})},
 'fullness_gates': 'pass (gates 1–7 on the preview HTML; see fullness-scorecard.json)', 'presentation_gate': gate,
 'faqs': J('faq-bank-dispositions.json')['selected_count'], 'mitigation_rows': len(J('interventions.json')['records']),
 'holds': {'count': len(holds), 'sources': len({h.split(':')[0] for h in holds}), 'record': 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish/holds.json'},
 'access_gaps': access,
 'shared_source_correction_proposals': {'count': len(proposals), 'record': 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish/source-correction-proposals.json'},
 'shared_requests': shared['requests'],
 'before_after_live': {'live_sha256': sha('wiki/ingredients/fish.md'), 'live_sources_frontmatter': fm_sources(live), 'candidate_sources_frontmatter': fm_sources(cand),
                       'live_bytes': len(live.encode()), 'candidate_bytes': len(cand.encode()), 'candidate_rows': tot['rows'],
                       'change': 'Live page was a selected-source contract page (frontmatter sources: 5); the candidate is rebuilt from the full fish ledger with same-species references, holds, limits and stage-led controls. Hero, title and slug unchanged.'},
 'checks': {'reproducible_build': 'pass (build.mjs --check)', 'question_record_schema': 'pass (validateRecord: [])', 'public_processing_audit': 'pass (audit-public-processing --output preview)',
            'hero': 'preview hero bytes match data/design/page-hero-images.json (sha256 7b9f4318…)', 'browser': 'Rendered at 1440 and 390 px: 8,477 occurrence rows, 12 mitigation rows, hero loaded, no page-width overflow, no console errors; relayout of the full table takes tens of seconds',
            'not_run_here': ['full-site lint:hero-preservation (central)', 'paired screenshot set against Rice (pane hidden; DOM checks used)']},
 'hashes': {p: sha(p) for p in ['data/evidence/contracts/most-studied-rollout-2026-10-22/fish/candidate/fish.md', 'data/evidence/syntheses/ingredient-fish-v1.json', 'data/evidence/questions/ingredient/fish.json', html,
            'tools/contracts/pilot/compiler.mjs', 'tools/contracts/pilot/analyte-table.mjs', 'tools/contracts/pilot/mitigation-table.mjs', 'tools/contracts/pilot/hmi-baseline.mjs']},
}
(audit / 'result.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: result[k] for k in ('status', 'wiki_untouched', 'rows', 'holds')}, indent=1))
print('correction proposals', len(proposals), 'access gaps', len(access))
