"""Write the apple result record: counts, checks, hashes, holds, correction proposals, requests and before/after."""
import hashlib, json, pathlib, subprocess, collections, re

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/apple'
ledger_dir = root / 'data/evidence/contracts/apple'
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()
J = lambda p: json.loads((audit / p).read_text())

ledger = json.loads((ledger_dir / 'evidence-ledger.json').read_text())
html = audit / 'preview/ingredients/apple.html'
node = lambda code: subprocess.run(['node', '-e', code], cwd=root, capture_output=True, text=True, check=True).stdout.strip().splitlines()[-1]
gate = json.loads(node(f"import('./tools/audit-ingredient-presentation.mjs').then(m=>console.log(JSON.stringify(m.inspectIngredientPresentation(require('fs').readFileSync('{html.relative_to(root)}','utf8')))))"))
record_errors = json.loads(node("import('./tools/contracts/validate.mjs').then(m=>console.log(JSON.stringify(m.validateRecord(JSON.parse(require('fs').readFileSync('data/evidence/questions/ingredient/apple.json','utf8'))))))"))
thin = J('thin-page.json')
thin_errors = json.loads(node(f"import('./tools/contracts/build-thin-pages-ledger.mjs').then(m=>console.log(JSON.stringify(m.validateThinPage(JSON.parse(require('fs').readFileSync('{(audit / 'thin-page.json').relative_to(root)}','utf8')),'thin-page.json'))))"))
fullness = json.loads((audit / 'gates-fullness.json').read_text()) if (audit / 'gates-fullness.json').exists() else None

disp = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'])
src_disp = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'] if i['id'].startswith('source:'))
row_disp = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'] if i['id'].startswith('dataset:'))
states = collections.Counter(r['comparison']['state'] for r in ledger['results'])
per = collections.defaultdict(collections.Counter)
for r in ledger['results']:
    per[r['scope']['analyte']][r['comparison']['state']] += 1
    if r['comparison'].get('reason_code'): per[r['scope']['analyte']]['reason:' + r['comparison']['reason_code']] += 1
reasons = collections.Counter(r['comparison'].get('reason_code') for r in ledger['results'] if r['comparison'].get('reason_code'))

proposals = []
for f in sorted((audit / 'extraction').glob('*.json')):
    x = json.loads(f.read_text())
    if x.get('contradictions_with_stored_summary'):
        p = f'wiki/sources/{x["source_id"]}.md'
        proposals.append({'path': p, 'before_sha256': sha(p) if (root / p).exists() else None, 'primary': x.get('primary_artifact'),
                          'primary_sha256': x.get('primary_sha256') if isinstance(x.get('primary_sha256'), str) else None,
                          'issues': x['contradictions_with_stored_summary'], 'status': 'proposed; central owns shared source edits'})

baseline = (audit / 'baseline.md').read_text()
cand = (audit / 'candidate/apple.md').read_text()
cites = lambda t: len(set(re.findall(r'\[\[sources/([^|\]\\]+)', t)))
reg = J('regulatory-apple.json')
result = {
 'ingredient': 'apple', 'date': '2026-10-22', 'status': 'candidate_ready_for_central_review', 'live': False, 'new_page': False,
 'owned_paths': ['tools/contracts/ingredients/apple/', 'data/evidence/syntheses/ingredient-apple-v1.json', 'data/evidence/questions/ingredient/apple.json',
                 'data/evidence/contracts/apple/', 'data/evidence/contracts/ingredient-rollout-2026-10-22/apple/'],
 'shared_files_edited': [], 'wiki_ingredient_untouched': sha('wiki/ingredients/apple.md') == J('baseline.json')['sha256'],
 'earlier_work': 'Codex-era tools archived in tools/contracts/ingredients/apple/archive-earlier-build/; earlier audit artifacts in history/earlier-build-2026-10-22/. Reused only after re-reading the primary text.',
 'commands': {'all': 'sh tools/contracts/ingredients/apple/run-all.sh'},
 'counts': {'ledger_items': len(ledger['items']), 'universe_items': thin['universe_items'], 'dispositions': dict(disp), 'source_dispositions': dict(src_disp), 'dataset_row_dispositions': dict(row_disp),
            'results': len(ledger['results']), 'comparison_states': dict(states), 'unavailable_reasons': dict(reasons),
            'per_analyte': {a: dict(c) for a, c in per.items()}, 'reference_units': len(ledger['reference_units']), 'references': len(ledger['references']),
            'occurrence_families': thin['occurrence_families']},
 'fullness_gates': fullness, 'presentation_gate': gate, 'question_record_errors': record_errors,
 'public_processing': (audit / 'gates-public-processing.log').read_text().strip().splitlines()[-1] if (audit / 'gates-public-processing.log').exists() else None,
 'thin_page': {'status': thin['status'], 'reasons': thin['reasons'], 'publishable': thin['publishable'], 'validate_errors': thin_errors},
 'faqs': J('faq-bank-dispositions.json')['selected_count'], 'mitigation_rows': len(J('interventions.json')['records']),
 'regulatory_limits_verified': [{k: l.get(k) for k in ('jurisdiction', 'analyte', 'ml_mg_kg', 'food', 'clause', 'source_id')} for l in reg['limits']],
 'holds': ['Rahim 2020: all four means below the method detection limit implied by the paper (4 rows)', 'Sembratowicz 2010: all values below implied limits; fresh and dry tables contradict (20 rows)',
           'Liang 2019 Pb and Cd means below stated MLOD (2 rows)', 'Salhotra 2017 Pb and Cd: implausible row with Fe 0.06 mg/kg (2 rows)', 'Altunay 2023 Cd 470 µg/kg; CRM value misstated ×1000 (1 row)',
           'Nawab 2017 Ni and Cr near-uniform across all foods (4 rows)', 'Rezaei 2020 Cr: basis and magnitude conflict (7 rows)', 'Wang 2020 As and Cd: substituted half-LOD values (6 rows)',
           'Unaegbu 2016 Ni below calibration range (1 row)', 'FDA 2016 iAs 3.0 ppb placeholder average (1 row)', 'Houlihan 2019 iAs computed as 0.8 × tAs (1 row)',
           'GEMS/Food: 23 records with implausible detection limits (unit-scale mismatch) kept as context, not summarized'],
 'access_gaps': [], 'access_notes': ['No eligible source is access-blocked. Twelve source records declare stale raw paths; all were read from the mounted HMI-Library (files moved from auto-fetched/ to ingested/). fda2011-apple-juice-arsenic-speciation and fda2022-draft-lead-juice have no local file; both are apple-juice documents decided from their records (context only).',
                                     'Supplementary Table S1 of Lee 2023 (growing origin) and the primary survey behind Islam 2024’s apple values are not in the library (fetch targets in thin-page.json).'],
 'before_after': {'before': f"Live page (baseline sha256 {J('baseline.json')['sha256'][:12]}…): legacy template with typical/P95 contamination_profile frontmatter, {cites(baseline)} distinct cited source records, no occurrence explorer or reference comparisons.",
                  'after': f"{len(ledger['results'])} occurrence rows ({dict(states)}) from {thin['occurrence_families']} occurrence families, {len(ledger['references'])} reference scopes, {len(J('interventions.json')['records'])} stage-led mitigation rows, {J('faq-bank-dispositions.json')['selected_count']} FAQs, 12 sections, {cites(cand)} distinct cited source records; legacy P95 profile removed."},
 'checks': {'reproducible_build': 'pass (--check)', 'hero': 'preview hero /static/heroes/orchard-fruit-apples-pears-stone-fruit.webp bytes sha256 8b3d27fc… equal data/design/page-hero-images.json; src and alt as assigned',
            'browser': 'not run in this session (no local server configuration); DOM-level checks via the presentation gate',
            'not_run_here': ['full-site lint:hero-preservation and lint:ingredient-presentation on the full release (central)', 'paired desktop/phone screenshots against Rice (central release acceptance)', 'disposition sampling against primary text for the release receipt (central)']},
 'shared_source_correction_proposals': proposals,
 'shared_requests': 'data/evidence/contracts/ingredient-rollout-2026-10-22/apple/shared-requests.json',
 'prose_depth_acceptance': 'data/evidence/contracts/ingredient-rollout-2026-10-22/apple/prose-depth-acceptance.json',
 'hashes': {p: sha(p) for p in ['data/evidence/contracts/ingredient-rollout-2026-10-22/apple/candidate/apple.md', 'data/evidence/syntheses/ingredient-apple-v1.json',
            'data/evidence/questions/ingredient/apple.json', 'data/evidence/contracts/ingredient-rollout-2026-10-22/apple/preview/ingredients/apple.html',
            'data/evidence/contracts/apple/evidence-ledger.json', 'data/evidence/contracts/apple/fullness-scorecard.json',
            'tools/contracts/pilot/compiler.mjs', 'tools/contracts/pilot/analyte-table.mjs', 'tools/contracts/pilot/mitigation-table.mjs', 'tools/contracts/pilot/hmi-baseline.mjs']},
}
(audit / 'result.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: result[k] for k in ('status', 'wiki_ingredient_untouched', 'question_record_errors', 'thin_page', 'faqs', 'mitigation_rows', 'public_processing')}, indent=1))
print(json.dumps({k: result['counts'][k] for k in ('ledger_items', 'source_dispositions', 'dataset_row_dispositions', 'results', 'comparison_states', 'unavailable_reasons')}, indent=0))
print('presentation errors', len(gate['errors']), '| proposals', len(proposals))
