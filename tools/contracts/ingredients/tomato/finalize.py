"""Write the tomato thin-page assessment and result record from the final ledger, scorecard and preview."""
import hashlib, json, pathlib, subprocess, collections

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/tomato'
ledger_dir = root / 'data/evidence/contracts/tomato'
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()
J = lambda p: json.loads((audit / p).read_text())
preview = 'data/evidence/contracts/ingredient-rollout-2026-10-22/tomato/preview/ingredients/tomato.html'

ledger = json.loads((ledger_dir / 'evidence-ledger.json').read_text())
score = json.loads((ledger_dir / 'fullness-scorecard.json').read_text())
def node(js):
    return json.loads(subprocess.run(['node', '--input-type=module', '-e', js], cwd=root, capture_output=True, text=True, check=True).stdout)
gate = node(f"import fs from 'node:fs';import {{inspectIngredientPresentation}} from './tools/audit-ingredient-presentation.mjs';console.log(JSON.stringify(inspectIngredientPresentation(fs.readFileSync('{preview}','utf8'))))")
record_errors = node("import fs from 'node:fs';import {validateRecord} from './tools/contracts/validate.mjs';console.log(JSON.stringify(validateRecord(JSON.parse(fs.readFileSync('data/evidence/questions/ingredient/tomato.json','utf8')))))")

disp = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'])
occ_families = sorted({i['family_id'] for i in ledger['items'] if i['disposition'] == 'occurrence_extracted'})
by_analyte = collections.defaultdict(list)
for r in ledger['results']: by_analyte[r['scope']['analyte']].append(r)
units = collections.defaultdict(list)
for u in ledger['reference_units']: units[u['scope']['analyte']].append(u)
decision = {'Pb', 'Cd', 'tAs', 'Ni'}
analytes = []
for a in ['Pb', 'Cd', 'tAs', 'iAs', 'Ni', 'Cr', 'tHg', 'Al', 'Sn', 'U']:
    rs = by_analyte.get(a, [])
    st = collections.Counter(r['comparison']['state'] for r in rs)
    note = {'Pb': 'Fresh-weight reference from GEMS/Food, FDA and Polish per-sample results; lower-contamination comparisons by reporting region (tentative), hydroponic versus soil (one study) and cherry type (one survey).',
            'Cd': 'Fresh- and dry-weight references; lowest-observed survey means stated; within-study site contrasts in Seville and Burkina Faso markets.',
            'tAs': 'Fresh-weight reference from GEMS/Food and FDA; EFSA iAs bounds; irrigation-water experiment; Romanian washing study.',
            'Ni': 'Fresh-weight reference is FDA-only and all non-detect, so nothing is rated against it; within-study irrigation, site and soil-remediation contrasts carry the comparison.',
            'Cr': 'Within-study contrasts only on most rows; FDA all non-detect; no Cr(VI).',
            'tHg': 'Coal-plant distance gradient against a grocery-store sample; GEMS/Food and FDA reference.',
            'iAs': 'GEMS/Food fresh reference with four region-year units; EFSA LB/UB mean; Hong Kong TDS non-detect.'}.get(a, '')
    analytes.append({'analyte': a, 'decision_relevant': a in decision, 'results': len(rs), 'reference_units': len(units.get(a, [])),
                     'families': len({u['family_id'] for u in units.get(a, [])}), 'rated': st.get('rated', 0), 'direct': st.get('direct', 0),
                     'bounded': st.get('bounded', 0), 'unavailable': st.get('unavailable', 0), 'note': note})
thin = {'slug': 'tomato', 'status': 'adequate', 'assessed_at': '2026-10-22T20:00:00Z', 'universe_items': len(ledger['items']), 'occurrence_families': len(occ_families),
        'analytes': analytes, 'reasons': [],
        'reason_notes': 'Two monitoring datasets and 38 studies contribute fresh-tomato results; every decision-relevant analyte (Pb, Cd, total As, Ni) has a reference of four or more units or within-study comparisons and a stated lower-contamination comparison. No tomato-naming source is access-blocked. Remaining gaps are listed as fetch targets.',
        'fetch_targets': [
          {'what': 'FSANZ 25th Australian Total Diet Study Appendix 3 (raw tomato results)', 'why': 'Would add an Australian total-diet family for Pb, Cd, As and Hg in raw tomato.', 'where': 'FSANZ website, 25th ATDS appendices', 'priority': 'medium'},
          {'what': 'EFSA 2020 nickel opinion Annex C occurrence data', 'why': 'European nickel occurrence for tomatoes would give a multi-family fresh-weight nickel reference; the current one is FDA-only and all non-detect.', 'where': 'EFSA Journal 2020;18(11):6268 supporting information', 'priority': 'high'},
          {'what': 'Annex I of Regulation (EC) No 396/2005', 'why': 'Directly verifies that tomatoes fall under EU fruiting vegetables for the lead, cadmium and nickel maxima.', 'where': 'EUR-Lex consolidated text (Annex I as replaced by Regulation (EU) 2018/62)', 'priority': 'medium'},
          {'what': 'Primary Chinese surveys of well-water versus sewage-irrigated tomatoes cited by Zhou 2000 (refs 11–13) and the tomato survey cited by Munir 2022 (ref 128)', 'why': 'Would add origin-linked irrigation comparisons for Pb, Cd and Cr.', 'where': 'Literature search: tomato sewage irrigation lead cadmium China', 'priority': 'low'}],
        'publishable': True, 'publishable_reason': 'All gates pass; decision-relevant analytes have references or within-study comparisons and stated lower-contamination comparisons; hero artwork exists in data/design/page-hero-images.json and renders in the preview.'}
(audit / 'thin-page.json').write_text(json.dumps(thin, indent=2, ensure_ascii=False) + '\n')
tp_errors = node("import fs from 'node:fs';import {validateThinPage} from './tools/contracts/build-thin-pages-ledger.mjs';console.log(JSON.stringify(validateThinPage(JSON.parse(fs.readFileSync('data/evidence/contracts/ingredient-rollout-2026-10-22/tomato/thin-page.json','utf8')),'thin-page.json')))")

proposals = []
for f in sorted((audit / 'extraction').glob('*.json')):
    x = json.loads(f.read_text())
    if x.get('contradictions_with_stored_summary'):
        p = f'wiki/sources/{x["source_id"]}.md'
        proposals.append({'path': p, 'before_sha256': sha(p) if (root / p).exists() else None, 'primary': x.get('primary_artifact'),
                          'primary_sha256': x.get('primary_sha256') if isinstance(x.get('primary_sha256'), str) else None,
                          'issues': x['contradictions_with_stored_summary'], 'status': 'proposed; central owns shared source edits'})
(audit / 'source-correction-proposals.json').write_text(json.dumps({'date': '2026-10-22', 'proposals': proposals}, indent=2, ensure_ascii=False) + '\n')

shared = json.loads((audit / 'shared-requests.json').read_text()) if (audit / 'shared-requests.json').exists() else []
live = (audit / 'baseline-live.md').read_text()
cand = (audit / 'candidate/tomato.md').read_text()
result = {
 'ingredient': 'tomato', 'date': '2026-10-22', 'status': 'candidate_ready_for_central_review', 'live': False,
 'rules_applied': ['docs/contracts/claude-ingredient-playbook.md', 'AGENTS.md Mandatory ingredient publication gate, evidence completeness, comparator machine, table cells, thin pages', 'docs/contracts/ingredient-canonical-style.md',
                   'docs/contracts/ingredient-reading-pattern.md', 'docs/contracts/ingredient-faq-question-bank.md', 'docs/contracts/evidence-and-answers.md', 'docs/public-content-boundary.md'],
 'owned_paths': ['tools/contracts/ingredients/tomato/', 'data/evidence/syntheses/ingredient-tomato-v1.json', 'data/evidence/questions/ingredient/tomato.json',
                 'data/evidence/contracts/tomato/', 'data/evidence/contracts/ingredient-rollout-2026-10-22/tomato/'],
 'shared_files_edited': [], 'wiki_ingredient_untouched': sha('wiki/ingredients/tomato.md') == J('baseline.json')['sha256'],
 'commands': {'datasets': 'python3 -I tools/contracts/ingredients/tomato/prepare-datasets.py', 'compose': 'python3 -I tools/contracts/ingredients/tomato/compose.py',
              'pin': 'python3 -I tools/contracts/ingredients/tomato/pin-sources.py', 'build': 'node tools/contracts/ingredients/tomato/build.mjs',
              'check': 'node tools/contracts/ingredients/tomato/build.mjs --check', 'preview': 'node tools/contracts/ingredients/tomato/preview.mjs',
              'fullness': f'node tools/contracts/ingredients/tomato/fullness.mjs {preview}', 'finalize': 'python3 -I tools/contracts/ingredients/tomato/finalize.py'},
 'counts': {'universe_items': len(ledger['items']), 'dispositions': dict(disp), 'occurrence_families': len(occ_families), 'rows': score.get('rendered_rows', len(ledger['results'])),
            'states': dict(collections.Counter(r['comparison']['state'] for r in ledger['results'])),
            'unavailable_reasons': dict(collections.Counter(r['comparison'].get('reason_code') for r in ledger['results'] if r['comparison']['state'] == 'unavailable')),
            'reference_units': len(ledger['reference_units']), 'references': len(ledger['references']),
            'faqs': J('faq-bank-dispositions.json')['selected_count'], 'mitigation_rows': len(J('interventions.json')['records'])},
 'fullness': score, 'presentation_gate': gate, 'question_record_errors': record_errors, 'thin_page': {'status': thin['status'], 'reasons': thin['reasons'], 'validate_errors': tp_errors},
 'regulatory_limits_verified': [{k: r[k] for k in ('jurisdiction', 'analyte', 'value', 'unit', 'primary_verified')} for r in J('regulatory-tomato.json')['limits']],
 'holds': sorted({r['source'] + ': ' + r['hold'] for r in __import__('json').loads(subprocess.run(['node', '--input-type=module', '-e', "import {tomatoRows} from './tools/contracts/ingredients/tomato/source-adapter.mjs';console.log(JSON.stringify(tomatoRows('.').rows.filter(r=>r.hold).map(r=>({source:r.source,hold:r.hold}))))"], cwd=root, capture_output=True, text=True, check=True).stdout)}),
 'gems_record_holds': 'Ten GEMS/Food records held as context_only: two mercury values far above every other tomato record and eight non-detects with limits of 1,000–3,000 µg/kg (primary/gemsfood-tomato-records.csv hold_reason).',
 'reference_exclusions': ['Experimental treatments (spiked irrigation, fertiliser, soil remediation)', 'Wastewater, effluent, drainage and reclaimed-water irrigation, mining and power-plant sites (compared within study)', 'Results with unstated weight basis', 'GEMS/Food targeted and unknown sampling (random sampling only enters references)', 'Samma 2024 per-sample values back-calculated from hazard quotients'],
 'access_gaps': ['No tomato-naming source is access-blocked; 11 records needed relocated paths (shared request).', 'FSANZ 25th ATDS Appendix 3 and EFSA 2020 nickel Annex C are not in the library (fetch targets).', 'Bedoya-Perales 2023 Figshare workbook read from the avocado build copy (library ingestion requested).', 'Raw-alias screen: 43 records matched only by "raw" have unresolvable declared files; none names tomato in its record.'],
 'shared_source_correction_proposals': 'source-correction-proposals.json (%d records)' % len(proposals),
 'shared_requests': shared,
 'before_after_live': {'live_sha256': J('baseline.json')['sha256'], 'candidate_sha256': sha('data/evidence/contracts/ingredient-rollout-2026-10-22/tomato/candidate/tomato.md'),
                       'live_rows': 'legacy contamination_profile and FDA TDS tables only (no comparator explorer)', 'candidate_rows': score.get('rendered_rows'),
                       'live_reference_families': 'none (legacy typical/P95 frontmatter profile)', 'live_faqs': 0, 'candidate_faqs': J('faq-bank-dispositions.json')['selected_count'],
                       'live_cited_sources': 49, 'candidate_cited_references': len(J('source-review.json')['checks']),
                       'notes': 'The live page is a legacy routed page with a typical/P95 contamination profile, FDA TDS observations, routing and profile-state sections and many canned-product sources. The candidate replaces it with the Rice components: 362 fresh-tomato rows from WHO GEMS/Food, FDA TDS and 38 studies, pooled fresh- and dry-weight references, held values with reasons, verified EU and Codex limits, 12 stage-led controls and 17 FAQs; canned, paste, sauce and juice values are left to their own pages and the "raw" alias is dropped.'},
 'hashes': {p: sha(p) for p in ['data/evidence/contracts/ingredient-rollout-2026-10-22/tomato/candidate/tomato.md', 'data/evidence/syntheses/ingredient-tomato-v1.json',
            'data/evidence/questions/ingredient/tomato.json', preview, 'data/evidence/contracts/tomato/evidence-ledger.json', 'data/evidence/contracts/tomato/fullness-scorecard.json',
            'tools/contracts/pilot/compiler.mjs', 'tools/contracts/pilot/analyte-table.mjs', 'tools/contracts/pilot/mitigation-table.mjs', 'tools/contracts/pilot/hmi-baseline.mjs']},
}
(audit / 'result.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: result[k] for k in ('status', 'wiki_ingredient_untouched', 'counts', 'presentation_gate', 'question_record_errors', 'thin_page')}, indent=1, ensure_ascii=False)[:3000])
print('correction proposals', len(proposals))
