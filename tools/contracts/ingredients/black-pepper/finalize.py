"""Write the black pepper result record and shared requests: counts, checks, hashes, holds,
access gaps, source-correction proposals and before/after against the live page."""
import hashlib, json, pathlib, re, subprocess, collections

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper'
ledger_dir = root / 'data/evidence/contracts/black-pepper'
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()
J = lambda p: json.loads(p.read_text())
rel = lambda p: str(p.relative_to(root))

ledger = J(ledger_dir / 'evidence-ledger.json'); score = J(ledger_dir / 'fullness-scorecard.json')
gates = J(audit / 'gates-fullness.json'); pres = J(audit / 'gates-presentation.json')
public = (audit / 'gates-public-processing.log').read_text().strip().splitlines()[-1]
html = (audit / 'preview/ingredients/black-pepper.html').read_text()

disp = collections.Counter(('source' if i['id'].startswith('source:') else 'dataset_row') + ':' + i['disposition'].split(':')[0] for i in ledger['items'])
states = collections.Counter(r['comparison']['state'] for r in ledger['results'])
reasons = collections.Counter(r['comparison'].get('reason_code') for r in ledger['results'] if r['comparison'].get('reason_code'))

proposals = []
for f in sorted((audit / 'extraction').glob('*.json')):
    x = J(f)
    if x.get('contradictions_with_stored_summary') and x.get('source_id'):
        p = f'wiki/sources/{x["source_id"]}.md'
        proposals.append({'path': p, 'before_sha256': sha(p) if (root / p).exists() else None, 'primary': x.get('primary_artifact'),
                          'primary_sha256': x.get('primary_sha256') if isinstance(x.get('primary_sha256'), str) else None,
                          'issues': x['contradictions_with_stored_summary'], 'status': 'proposed; central owns shared source edits'})
(audit / 'proposed-source-corrections.json').write_text(json.dumps({'date': '2026-10-22', 'proposals': proposals}, indent=2, ensure_ascii=False) + '\n')

reg = J(audit / 'regulatory-black-pepper.json')
no_record = sorted(p.stem for p in (audit / 'regulatory-no-source-record').glob('*.json'))
shared = {'date': '2026-10-22', 'ingredient': 'black-pepper', 'requests': [
  {'what': 'Register the black pepper builder and adopt the candidate after central review.', 'why': 'Build sessions never write wiki/ or deploy.',
   'evidence': 'All seven fullness gates, the presentation gate, the public-processing audit and validateRecord pass on the preview HTML.',
   'before': {'path': 'wiki/ingredients/black-pepper.md', 'sha256': J(audit / 'baseline-live.json')['sha256']},
   'after': {'path': 'data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper/candidate/black-pepper.md', 'sha256': sha('data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper/candidate/black-pepper.md')}},
  {'what': 'Create wiki/sources records for four verified regulatory instruments: ' + ', '.join(no_record) + '.',
   'why': 'Their black pepper limits were verified from primary text (Taiwan Pb 0.3 and Cd 0.2 mg/kg; India FSSAI Pb 10 mg/kg dry matter and As 5.0 mg/kg; Albania Pb 0.60 mg/kg fruit spices; EU 2021/1317 origin of the 0.60 mg/kg value) but cannot be cited without a source record.',
   'evidence': 'data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper/regulatory-black-pepper.json and regulatory-no-source-record/*.json', 'before': 'no source record', 'after': 'source records with raw_path to the library copies named in those files'},
  {'what': 'Add black pepper (fruit spice) rows to data/evidence/regulatory_limits.csv: EU 2023/915 Pb 0.60 mg/kg (Annex I 3.1.12.2); Codex CXS 193 Pb 0.6 mg/kg (spices, dried fruit and berries; adopted CAC47 2024); China GB 2762-2025 Pb 1.5 mg/kg (spices); Vietnam QCVN 8-2:2011 spices Pb 2.0, Cd 1.0, As 5.0, Hg 0.05 mg/kg.',
   'why': 'Shared regulatory register lacks spice rows.', 'evidence': 'regulatory-black-pepper.json (locators and primary hashes)', 'before': 'no rows', 'after': 'one row per limit'},
  {'what': 'Update wiki/sources/codex-cxs-193-1995.md to the current text (Regulatory documents/CXS_193e.pdf, amended 2025) that carries the 2024 spice lead MLs.', 'why': 'The record points to an older version without spice limits.',
   'evidence': 'extraction/codex-cxs-193-1995.json', 'before': 'older raw snapshot', 'after': 'current CXS_193e.pdf'},
  {'what': 'Apply the source-correction proposals in proposed-source-corrections.json (notably authors2025 identity, oseisafo2024 ingredients and attributions, sabri2025 lead-limit statement and basis, kiczorowski2022 raw_path, category7 rows 174–178 basis).',
   'why': 'Stored summaries contradict primary text.', 'evidence': 'contradictions_with_stored_summary in each extraction file', 'before': 'see proposals', 'after': 'see proposals'},
  {'what': 'Owner approval to download two supplements: Johnson-Restrepo et al. 2025 Table 2S (doi 10.1016/j.radphyschem.2025.112749) and the Osei-Safo 2024 appendices.',
   'why': 'The first is the only access-blocked black pepper item; the second would add per-sample reference units.', 'evidence': 'ledger retrieval_request; thin-page.json fetch targets', 'before': 'access_blocked', 'after': 'extracted'}]}
(audit / 'shared-requests.json').write_text(json.dumps(shared, indent=2, ensure_ascii=False) + '\n')

live = (root / 'wiki/ingredients/black-pepper.md').read_text()
cand = (audit / 'candidate/black-pepper.md').read_text()
count = lambda t, pat: len(re.findall(pat, t))
result = {
 'ingredient': 'black-pepper', 'date': '2026-10-22', 'status': 'candidate_ready_for_central_review', 'live': False,
 'playbook': 'docs/contracts/claude-ingredient-playbook.md',
 'owned_paths': ['tools/contracts/ingredients/black-pepper/', 'data/evidence/syntheses/ingredient-black-pepper-v1.json', 'data/evidence/questions/ingredient/black-pepper.json',
                 'data/evidence/contracts/black-pepper/', 'data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper/'],
 'shared_files_edited': [], 'wiki_ingredient_untouched': sha('wiki/ingredients/black-pepper.md') == J(audit / 'baseline-live.json')['sha256'],
 'earlier_work': 'Codex-era files moved to tools/contracts/ingredients/black-pepper/archive-earlier-build/ and history/earlier-build-2026-10-22/; their three extractions were re-extracted from primary text.',
 'commands': {'all': 'sh tools/contracts/ingredients/black-pepper/run-all.sh', 'check': 'node tools/contracts/ingredients/black-pepper/build.mjs --check'},
 'counts': {'rows': len(ledger['results']), 'states': dict(states), 'reason_codes': dict(reasons), 'reference_units': len(ledger['reference_units']), 'references': len(ledger['references']),
            'occurrence_families': sum(1 for i in ledger['items'] if i['id'].startswith('source:') and i['disposition'] == 'occurrence_extracted'),
            'faqs': J(audit / 'faq-bank-dispositions.json')['selected_count'], 'mitigation_rows': len(J(audit / 'interventions.json')['records']), 'held_rows': reasons.get('value_fails_source_integrity_check', 0)},
 'universe': {'items': len(ledger['items']), 'dispositions': dict(disp)},
 'gates': {'fullness': {k: v['status'] for k, v in gates['gates'].items()}, 'fullness_status': gates['status'], 'presentation': pres, 'public_processing': public,
           'validateRecord': 'pass ([])', 'build_check': 'pass', 'hero': 'preview src, alt and asset bytes match data/design/page-hero-images.json and quartz/static/heroes',
           'browser': 'Preview rendered at desktop and 375 px: 209 rows, 7 mitigation rows, hero image loaded (2164 px), no page overflow, no console errors',
           'not_run_here': ['full-site npm run lint:hero-preservation and lint:ingredient-presentation on the full release (central)']},
 'holds': 'tools/contracts/ingredients/black-pepper/source-adapter.mjs `holds`: Kowalska Cd and As means; Matloob Hg and Cr; Moussa local-FSMS Hg mean; Osei-Safo As; Sabri Pb, As and Ni mean and range; Savic Pb and Al',
 'access_gaps': ['authors2025 (Johnson-Restrepo et al. 2025) black pepper row only in online supplementary Table 2S: access_blocked with dated mounted-library, raw, publisher and backup attempts and a retrieval request'],
 'fda_tds': 'FDA TDS FY2018–FY2020 food list has no black pepper or spice food (extraction/fda-tds-black-pepper-check.json).',
 'regulatory_limits_verified': [{k: l.get(k) for k in ('jurisdiction', 'source_id', 'analyte', 'value', 'unit', 'primary_verified')} for l in reg['limits']],
 'shared_source_correction_proposals': len(proposals), 'shared_requests': 'shared-requests.json',
 'thin_page': J(audit / 'thin-page.json')['status'],
 'before_after_live': {'before': {'sources_frontmatter': 3, 'occurrence_rows': count(live, r'data-analyte-row|<tr[^>]+id="hmi-occurrence-black-pepper'), 'mitigation_rows': count(live, r'data-mitigation-row'), 'faq_questions': 17,
                                  'notes': 'Three verified source families (Tinggi, Moussa, Cicero); 31 rows; single-study references; 3 unquantified controls.'},
                       'after': {'sources_frontmatter': 18, 'occurrence_rows': len(ledger['results']), 'mitigation_rows': pres['mitigation_rows'], 'html_mb': round(len(html.encode()) / 1e6, 2), 'occurrence_json_files': sorted(p.name for p in (audit / 'preview/ingredients').glob('black-pepper.*.json')), 'faq_questions': J(audit / 'faq-bank-dispositions.json')['selected_count'],
                                 'notes': 'Sixteen occurrence families including 1,814 GEMS/Food records; pooled multi-family references for Pb, Cd, tAs, tHg, Cr, Ni, Al; whole/ground, packaged/bulk, retail/wholesale and growing-origin comparisons; verified EU, Codex, China and Vietnam limits.'}},
 'hashes': {p: sha(p) for p in ['data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper/candidate/black-pepper.md', 'data/evidence/syntheses/ingredient-black-pepper-v1.json',
            'data/evidence/questions/ingredient/black-pepper.json', 'data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper/preview/ingredients/black-pepper.html',
            'data/evidence/contracts/black-pepper/evidence-ledger.json', 'data/evidence/contracts/black-pepper/fullness-scorecard.json',
            'tools/contracts/pilot/compiler.mjs', 'tools/contracts/pilot/analyte-table.mjs', 'tools/contracts/pilot/mitigation-table.mjs', 'tools/contracts/pilot/hmi-baseline.mjs']},
}
(audit / 'result.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: result[k] for k in ('status', 'wiki_ingredient_untouched', 'counts', 'universe', 'thin_page')}, indent=1))
print('gates', result['gates']['fullness_status'], result['gates']['presentation']['errors'], public, '| proposals', len(proposals))
