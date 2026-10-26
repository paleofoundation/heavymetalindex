"""Write the cocoa result record, thin-page record, source-correction proposals and shared requests."""
import hashlib, json, pathlib, subprocess, collections, re

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa'
ledger_dir = root / 'data/evidence/contracts/cocoa'
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()
J = lambda p: json.loads((audit / p).read_text())
node = lambda code: json.loads(subprocess.run(['node', '--input-type=module', '-e', code], cwd=root, capture_output=True, text=True, check=True).stdout)

preview_html = audit / 'preview/ingredients/cocoa.html'
score = json.loads((ledger_dir / 'fullness-scorecard.json').read_text())
gates = node(f"import {{scoreAndGate}} from './tools/contracts/ingredients/cocoa/fullness.mjs'; const r=scoreAndGate(process.cwd(), '{preview_html.relative_to(root)}'); console.log(JSON.stringify({{status:r.status,gates:Object.fromEntries(Object.entries(r.gates).map(([k,v])=>[k,{{status:v.status,errors:v.errors.slice(0,5)}}]))}}))")
presentation = node(f"import fs from 'node:fs'; import {{inspectIngredientPresentation}} from './tools/audit-ingredient-presentation.mjs'; console.log(JSON.stringify(inspectIngredientPresentation(fs.readFileSync('{preview_html.relative_to(root)}','utf8'))))")
record_errors = node("import fs from 'node:fs'; import {validateRecord} from './tools/contracts/validate.mjs'; console.log(JSON.stringify(validateRecord(JSON.parse(fs.readFileSync('data/evidence/questions/ingredient/cocoa.json','utf8')))))")
occ = node("import {cocoaOccurrence} from './tools/contracts/ingredients/cocoa/source-adapter.mjs'; const o=cocoaOccurrence(process.cwd()); console.log(JSON.stringify({rows:o.rows.map(r=>({a:r.analyte,s:r.comparison_state,c:r.reason_code,src:r.source,hold:!!r.hold})),units:o.unit_list}))")

ledger = json.loads((ledger_dir / 'evidence-ledger.json').read_text())
disp = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'])
src_disp = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'] if i['id'].startswith('source:'))
states = collections.Counter(r['s'] for r in occ['rows'])
reasons = collections.Counter(r['c'] for r in occ['rows'] if r['c'])
families = sorted({r['src'] for r in occ['rows']})

# ------------------------------------------------------------------ source-correction proposals
proposals = []
for f in sorted((audit / 'extraction').glob('*.json')):
    x = json.loads(f.read_text())
    if x.get('contradictions_with_stored_summary'):
        p = f'wiki/sources/{x["source_id"]}.md'
        proposals.append({'path': p, 'before_sha256': sha(p) if (root / p).exists() else None, 'primary': x.get('primary_artifact') if isinstance(x.get('primary_artifact'), str) else None,
                          'primary_sha256': x.get('primary_sha256') if isinstance(x.get('primary_sha256'), str) else None,
                          'issues': x['contradictions_with_stored_summary'], 'status': 'proposed; central owns shared source edits'})
(audit / 'source-correction-proposals.json').write_text(json.dumps({'date': '2026-10-22', 'proposals': proposals}, indent=2, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ thin-page record
decision = {'Cd': True, 'Pb': True, 'Ni': True}
analytes = []
for a in ['Cd', 'Pb', 'Ni', 'tAs', 'iAs', 'DMA', 'tHg', 'Cr', 'Al', 'Sn', 'U']:
    rs = [r for r in occ['rows'] if r['a'] == a]
    if not rs: continue
    us = [u for u in occ['units'] if u['analyte'] == a]
    note = ''
    if a == 'Ni': note = 'EU nickel limits for chocolate and cocoa powder apply from July 2025. Form comparisons (milk chocolate < dark chocolate < cocoa powder) are supported across several sources; origin comparisons rest on one Peruvian survey read from a figure.'
    if a == 'Cd': note = 'Origin and cocoa-content comparisons supported by industry origin testing, the international assessment and several retail surveys.'
    if a == 'Pb': note = 'Lead depends on post-harvest handling; cleaning, shelling and form comparisons are supported; origin does not predict lead.'
    analytes.append({'analyte': a, 'decision_relevant': decision.get(a, False), 'results': len(rs), 'reference_units': len(us), 'families': len({r['src'] for r in rs}),
                     'rated': sum(r['s'] == 'rated' for r in rs), 'direct': sum(r['s'] == 'direct' for r in rs), 'note': note})
thin_reasons = []
for x in analytes:
    if x['decision_relevant'] and x['rated'] == 0 and x['direct'] == 0: thin_reasons.append('decision_analyte_without_comparison')
if len(families) < 3: thin_reasons.append('few_occurrence_families')
thin_reasons = sorted(set(thin_reasons))
fetch = [
 {'what': 'EFSA 2020 nickel opinion, Annex C occurrence tables', 'why': 'Holds the European nickel statistics for cocoa beans, cocoa powder and chocolate by category; needed for a stronger nickel reference now that EU nickel limits apply.', 'where': 'EFSA Journal 2020;18(11):6268 supporting information (efsa.onlinelibrary.wiley.com)', 'priority': 'high' if 'decision_analyte_without_comparison' in thin_reasons else 'medium'},
 {'what': 'Bertoldi et al. 2016, Food Control 65:46–53 (cocoa beans and chocolate trace elements)', 'why': 'Primary cocoa bean and chocolate aluminium and nickel data cited by two library sources but not itself in the library.', 'where': 'doi 10.1016/j.foodcont.2015.12.034 (publisher)', 'priority': 'medium'},
 {'what': 'Hands et al. 2024 per-product data; Gutiérrez et al. 2022 bean results; Thomas et al. 2023 supplement', 'why': 'Per-product and per-farm values would allow product-level and farm-level reference units and test the compost control on beans.', 'where': 'Author requests (Frontiers in Nutrition 2024; Frontiers in Environmental Science 2022; Science of the Total Environment 2023 supplementary material)', 'priority': 'low'},
]
thin = {'slug': 'cocoa', 'status': 'thin' if thin_reasons else 'adequate', 'assessed_at': '2026-10-22T16:30:00Z', 'universe_items': len(ledger['items']), 'occurrence_families': len(families),
        'analytes': analytes, 'reasons': thin_reasons, 'fetch_targets': fetch if thin_reasons else fetch[:1],
        'publishable': gates['status'] == 'pass' and not presentation.get('errors'),
        'publishable_reason': 'All seven fullness gates and the presentation gate pass on the preview; remaining gaps are stated on the page.' if gates['status'] == 'pass' and not presentation.get('errors') else 'A required gate does not pass on the preview.'}
(audit / 'thin-page.json').write_text(json.dumps(thin, indent=2, ensure_ascii=False) + '\n')
thin_errors = node("import fs from 'node:fs'; import {validateThinPage} from './tools/contracts/build-thin-pages-ledger.mjs'; console.log(JSON.stringify(validateThinPage(JSON.parse(fs.readFileSync('data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa/thin-page.json','utf8')),'thin-page.json')))")

# ------------------------------------------------------------------ before / after against the live page
live = (audit / 'live-baseline.md').read_text(); cand = (audit / 'candidate/cocoa.md').read_text()
def page_stats(t):
    return {'bytes': len(t.encode()), 'occurrence_rows': len(re.findall(r'data-occurrence-row', t)), 'rated_rows': len(re.findall(r'data-comparison-state="rated"', t)),
            'direct_rows': len(re.findall(r'data-comparison-state="direct"', t)), 'mitigation_rows': len(re.findall(r'data-mitigation-row', t)),
            'faqs': len(re.findall(r'data-hmi-faq-answer', t)), 'cited_sources': len(set(re.findall(r'\[\[sources/([^|\]\\]+)', t)))}

shared = json.loads((audit / 'shared-requests.json').read_text())
reg = J('regulatory-cocoa.json')
result = {
 'ingredient': 'cocoa', 'date': '2026-10-22', 'status': 'candidate_ready_for_central_review' if thin['publishable'] else 'blocked', 'live': False,
 'rules_applied': ['docs/contracts/claude-ingredient-playbook.md', 'AGENTS.md Mandatory ingredient publication gate', 'docs/contracts/ingredient-canonical-style.md', 'docs/contracts/ingredient-reading-pattern.md',
                   'docs/contracts/ingredient-faq-question-bank.md', 'docs/contracts/ingredient-fullness-gates.md', 'docs/contracts/evidence-and-answers.md', 'docs/contracts/hmi-baseline.md', 'docs/public-content-boundary.md'],
 'owned_paths': ['tools/contracts/ingredients/cocoa/', 'data/evidence/syntheses/ingredient-cocoa-v1.json', 'data/evidence/questions/ingredient/cocoa.json',
                 'data/evidence/contracts/cocoa/', 'data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa/'],
 'shared_files_edited': [], 'wiki_ingredient_untouched': sha('wiki/ingredients/cocoa.md') == J('baseline.json')['sha256'],
 'commands': {'datasets': 'python3 -I tools/contracts/ingredients/cocoa/prepare-datasets.py', 'compose': 'python3 -I tools/contracts/ingredients/cocoa/compose.py',
              'pin': 'python3 -I tools/contracts/ingredients/cocoa/pin-sources.py', 'build': 'node tools/contracts/ingredients/cocoa/build.mjs', 'check': 'node tools/contracts/ingredients/cocoa/build.mjs --check',
              'preview': 'node tools/contracts/ingredients/cocoa/preview.mjs', 'gates': 'node tools/contracts/ingredients/cocoa/fullness.mjs data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa/preview/ingredients/cocoa.html',
              'finalize': 'python3 -I tools/contracts/ingredients/cocoa/finalize.py'},
 'counts': {'universe_items': len(ledger['items']), 'item_dispositions': dict(disp), 'source_records': sum(src_disp.values()), 'source_record_dispositions': dict(src_disp),
            'occurrence_families': len(families), 'rows': len(occ['rows']), 'states': dict(states), 'unavailable_reasons': dict(reasons),
            'reference_units': len(ledger['reference_units']), 'references': len(ledger['references']), 'faqs': J('faq-bank-dispositions.json')['selected_count'],
            'mitigation_rows': len(J('interventions.json')['records'])},
 'gates': gates, 'presentation_gate': presentation, 'question_record_errors': record_errors, 'thin_page': {'status': thin['status'], 'reasons': thin['reasons'], 'validation_errors': thin_errors},
 'holds': {'whole_source': ['amjad2021-lahore-chocolates-metals (inconsistent digest conversions; mostly compound confectionery)', 'enogbe2025-bwari-chocolate-metals (spreads irreconcilable with values; chromium contradicts own conclusion; no LOD)'],
           'value_level': f"{sum(r['hold'] for r in occ['rows'])} rows carry value_fails_source_integrity_check with the specific conflict stated (extraction integrity_issue fields)"},
 'access_gaps': ['No source is access-blocked; every primary text was read (mounted HMI Library first).', 'Unpublished data: Gutiérrez 2022 bean results, Thomas 2023 farm data, Hands 2024 per-product values, Cantoral 2024 Table S2, Barraza 2019 supplement.', 'EFSA 2020 nickel Annex C not in the library.'],
 'regulatory_limits_verified': [{k: r.get(k) for k in ('jurisdiction', 'analyte', 'value', 'unit', 'product', 'primary_verified')} for r in reg['limits'] if r.get('current', True)],
 'shared_source_correction_proposals': {'file': str((audit / 'source-correction-proposals.json').relative_to(root)), 'count': len(proposals)},
 'shared_requests': shared,
 'before_after_live': {'live': page_stats(live), 'candidate': page_stats(cand)},
 'hashes': {p: sha(p) for p in [str((audit / 'candidate/cocoa.md').relative_to(root)), 'data/evidence/syntheses/ingredient-cocoa-v1.json', 'data/evidence/questions/ingredient/cocoa.json',
            str(preview_html.relative_to(root)), 'data/evidence/contracts/cocoa/evidence-ledger.json', 'data/evidence/contracts/cocoa/fullness-scorecard.json']},
}
(audit / 'result.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: result[k] for k in ('status', 'wiki_ingredient_untouched', 'counts', 'gates', 'presentation_gate', 'question_record_errors', 'thin_page')}, indent=1, ensure_ascii=False)[:5000])
print('before/after', json.dumps(result['before_after_live']))
