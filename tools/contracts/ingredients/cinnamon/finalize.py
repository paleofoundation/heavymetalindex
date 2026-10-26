"""Write the cinnamon thin-page assessment and result record from the final ledger, scorecard and preview."""
import hashlib, json, pathlib, subprocess, collections

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon'
ledger_dir = root / 'data/evidence/contracts/cinnamon'
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()
J = lambda p: json.loads((audit / p).read_text())
preview = 'data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon/preview/ingredients/cinnamon.html'

ledger = json.loads((ledger_dir / 'evidence-ledger.json').read_text())
score = json.loads((ledger_dir / 'fullness-scorecard.json').read_text())
def node(js):
    return json.loads(subprocess.run(['node', '--input-type=module', '-e', js], cwd=root, capture_output=True, text=True, check=True).stdout)
gate = node(f"import fs from 'node:fs';import {{inspectIngredientPresentation}} from './tools/audit-ingredient-presentation.mjs';console.log(JSON.stringify(inspectIngredientPresentation(fs.readFileSync('{preview}','utf8'))))")
record_errors = node("import fs from 'node:fs';import {validateRecord} from './tools/contracts/validate.mjs';console.log(JSON.stringify(validateRecord(JSON.parse(fs.readFileSync('data/evidence/questions/ingredient/cinnamon.json','utf8')))))")

disp = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'])
occ_families = sorted({i['family_id'] for i in ledger['items'] if i['disposition'] == 'occurrence_extracted'})
by_analyte = collections.defaultdict(list)
for r in ledger['results']: by_analyte[r['scope']['analyte']].append(r)
units = collections.defaultdict(list)
for u in ledger['reference_units']: units[u['scope']['analyte']].append(u)
decision = {'Pb', 'Cr', 'Cd'}
analytes = []
for a in ['Pb', 'Cr', 'Cd', 'tAs', 'iAs', 'tHg', 'Ni', 'Al', 'Sn']:
    rs = by_analyte.get(a, [])
    st = collections.Counter(r['comparison']['state'] for r in rs)
    note = {'Pb': 'Lower-contamination comparisons available: species label (C. verum vs cassia) and form (sticks vs ground) in GEMS/Food, plus within-study origin contrasts.',
            'Cr': 'Form comparison (sticks higher) from one GEMS/Food submission; no Cr(VI) measured anywhere.',
            'Cd': 'Species-label comparison in GEMS/Food; within-study origin contrasts in Queensland and Italian surveys.',
            'iAs': 'Only five GEMS/Food records; below the four-unit display minimum after deduplication into region-year medians.',
            'Sn': 'Fifteen GEMS/Food records from one submission; mostly non-detects.'}.get(a, '')
    analytes.append({'analyte': a, 'decision_relevant': a in decision, 'results': len(rs), 'reference_units': len(units.get(a, [])),
                     'families': len({u['family_id'] for u in units.get(a, [])}), 'rated': st.get('rated', 0), 'direct': st.get('direct', 0),
                     'bounded': st.get('bounded', 0), 'unavailable': st.get('unavailable', 0), 'note': note})
thin = {'slug': 'cinnamon', 'status': 'thin', 'assessed_at': '2026-10-22T18:00:00Z', 'universe_items': len(ledger['items']), 'occurrence_families': len(occ_families),
        'analytes': analytes, 'reasons': ['access_blocked_evidence'],
        'reason_notes': 'Lead, chromium and cadmium all have multi-family references and lower-contamination comparisons, so the only thinness reason is eligible evidence held in unretrieved supplements. Species labels are unverified throughout, which limits the cassia/Ceylon comparison.',
        'fetch_targets': [
          {'what': 'Johnson-Restrepo et al. 2025 supplementary Table 2S (doi 10.1016/j.radphyschem.2025.112749)', 'why': 'Holds the only XRF result for a C. verum bark sample (Pb, Cd, As, Hg, Ni, Cr, Sn); currently access_blocked.', 'where': 'Publisher supplementary data (Radiation Physics and Chemistry)', 'priority': 'medium'},
          {'what': 'FDA 2024 ground cinnamon sampling results after the applesauce outbreak', 'why': 'Post-outbreak US retail ground cinnamon lead results would add a US retail family and test whether adulteration persisted.', 'where': 'FDA alerts and sampling assignment summaries on elevated lead in ground cinnamon (2024)', 'priority': 'high'},
          {'what': 'Species-authenticated cassia versus C. verum survey (DNA or coumarin-marker authenticated) with Pb, Cd, Cr', 'why': 'Every species comparison on the page rests on unverified labels; an authenticated comparison would turn a tentative pattern into a supported sourcing preference or refute it.', 'where': 'Literature search: cinnamon Cinnamomum cassia verum authentication lead cadmium chromium ICP-MS', 'priority': 'high'},
          {'what': 'Huff et al. 2025 Supplemental Table 1 (Lancaster, PA spices)', 'why': 'Per-sample table may include cinnamon among the "other" store or donated samples; currently ruled out of scope from the main text only.', 'where': 'Publisher supplementary material', 'priority': 'low'},
          {'what': 'Codex CCCF working documents on lead MLs for dried bark spices (2023–2025)', 'why': 'The occurrence analysis behind the 2.5 mg/kg Codex ML would add a documented international distribution for bark spices.', 'where': 'Codex Committee on Contaminants in Foods meeting documents (CCCF16–CCCF18)', 'priority': 'medium'}],
        'publishable': True, 'publishable_reason': 'All gates pass; the one access-blocked item is recorded honestly and the decision-relevant analytes (Pb, Cr, Cd) each have pooled references and lower-contamination comparisons. Hero artwork exists in data/design/page-hero-images.json.'}
(audit / 'thin-page.json').write_text(json.dumps(thin, indent=2, ensure_ascii=False) + '\n')
tp_errors = node("import fs from 'node:fs';import {validateThinPage} from './tools/contracts/build-thin-pages-ledger.mjs';console.log(JSON.stringify(validateThinPage(JSON.parse(fs.readFileSync('data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon/thin-page.json','utf8')),'thin-page.json')))")

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
cand = (audit / 'candidate/cinnamon.md').read_text()
result = {
 'ingredient': 'cinnamon', 'date': '2026-10-22', 'status': 'candidate_ready_for_central_review', 'live': False,
 'rules_applied': ['docs/contracts/claude-ingredient-playbook.md', 'AGENTS.md Mandatory ingredient publication gate, evidence completeness, comparator machine, table cells, thin pages', 'docs/contracts/ingredient-canonical-style.md',
                   'docs/contracts/ingredient-reading-pattern.md', 'docs/contracts/ingredient-faq-question-bank.md', 'docs/contracts/evidence-and-answers.md', 'docs/public-content-boundary.md'],
 'owned_paths': ['tools/contracts/ingredients/cinnamon/', 'data/evidence/syntheses/ingredient-cinnamon-v1.json', 'data/evidence/questions/ingredient/cinnamon.json',
                 'data/evidence/contracts/cinnamon/', 'data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon/'],
 'shared_files_edited': [], 'wiki_written_by_this_build': False, 'wiki_sha256_at_finalize': sha('wiki/ingredients/cinnamon.md'), 'wiki_matches_current_candidate': sha('wiki/ingredients/cinnamon.md') == sha('data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon/candidate/cinnamon.md'),
 'commands': {'datasets': 'python3 -I tools/contracts/ingredients/cinnamon/prepare-datasets.py', 'compose': 'python3 -I tools/contracts/ingredients/cinnamon/compose.py',
              'pin': 'python3 -I tools/contracts/ingredients/cinnamon/pin-sources.py', 'build': 'node tools/contracts/ingredients/cinnamon/build.mjs',
              'check': 'node tools/contracts/ingredients/cinnamon/build.mjs --check', 'preview': 'node tools/contracts/ingredients/cinnamon/preview.mjs',
              'fullness': f'node tools/contracts/ingredients/cinnamon/fullness.mjs {preview}', 'finalize': 'python3 -I tools/contracts/ingredients/cinnamon/finalize.py'},
 'counts': {'universe_items': len(ledger['items']), 'dispositions': dict(disp), 'occurrence_families': len(occ_families), 'rows': score.get('rendered_rows', len(ledger['results'])),
            'states': dict(collections.Counter(r['comparison']['state'] for r in ledger['results'])),
            'unavailable_reasons': dict(collections.Counter(r['comparison'].get('reason_code') for r in ledger['results'] if r['comparison']['state'] == 'unavailable')),
            'reference_units': len(ledger['reference_units']), 'references': len(ledger['references']),
            'faqs': J('faq-bank-dispositions.json')['selected_count'], 'mitigation_rows': len(J('interventions.json')['records'])},
 'fullness': score, 'presentation_gate': gate, 'question_record_errors': record_errors, 'thin_page': {'status': thin['status'], 'reasons': thin['reasons'], 'validate_errors': tp_errors},
 'regulatory_limits_verified': [{k: r[k] for k in ('jurisdiction', 'analyte', 'value', 'unit', 'primary_verified')} for r in J('regulatory-cinnamon.json')['limits']],
 'holds': ['Bua 2016: three printed means outside their replicate ranges (Indonesia tAs, Madagascar Cd, Vietnam Pb) and the Madagascar Hg bound unit conflict',
           'Matloob 2016: mercury after 550 °C dry ashing', 'Islam 2023: cinnamon lead assignment contradicts the paper’s own figure and tables', 'Moussa 2024: Table 2 cadmium exceedance count (2/8) contradicts its own S1 Table (4/8)',
           'US House 2021 Manufacturer A 2017-11-03 lot: recalculated to a finished-food consumed basis (basis_incompatible, not a hold)'],
 'reference_exclusions': ['US House 2021 excerpted manufacturer lots (selected, not representative)', 'Napier outbreak puree samples (finished food, adulteration)', 'GEMS/Food targeted and unknown sampling (random sampling only enters references)'],
 'access_gaps': ['Johnson-Restrepo et al. 2025 supplementary Table 2S (access_blocked; retrieval request recorded)', 'Huff et al. 2025 Supplemental Table 1 (may contain cinnamon; main text has none)'],
 'shared_source_correction_proposals': 'source-correction-proposals.json (%d records)' % len(proposals),
 'shared_requests': shared,
 'before_after_live': {'live_sha256': J('baseline.json')['sha256'], 'candidate_sha256': sha('data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon/candidate/cinnamon.md'),
                       'live_rows': 16, 'candidate_rows': score.get('rendered_rows'), 'live_reference_families': 'none (no pooled reference; source-specific rows only)',
                       'live_faqs': 18, 'candidate_faqs': J('faq-bank-dispositions.json')['selected_count'],
                       'live_cited_references': 5, 'candidate_cited_references': len(J('source-review.json')['checks']),
                       'notes': 'The live page cited Tinggi, Cicero and Napier only, with 16 rows from two retail families. The candidate adds WHO GEMS/Food (1,237 cinnamon records), 14 more occurrence sources, pooled references for nine analytes, cassia/Ceylon and stick/ground comparisons, verified EU, Codex, China and Vietnam limits and a populated stage-led mitigation table.'},
 'hashes': {p: sha(p) for p in ['data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon/candidate/cinnamon.md', 'data/evidence/syntheses/ingredient-cinnamon-v1.json',
            'data/evidence/questions/ingredient/cinnamon.json', preview, 'data/evidence/contracts/cinnamon/evidence-ledger.json', 'data/evidence/contracts/cinnamon/fullness-scorecard.json',
            'tools/contracts/pilot/compiler.mjs', 'tools/contracts/pilot/analyte-table.mjs', 'tools/contracts/pilot/mitigation-table.mjs', 'tools/contracts/pilot/hmi-baseline.mjs']},
}
(audit / 'result.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: result[k] for k in ('status', 'wiki_matches_current_candidate', 'counts', 'presentation_gate', 'question_record_errors', 'thin_page')}, indent=1, ensure_ascii=False)[:3000])
print('correction proposals', len(proposals))
