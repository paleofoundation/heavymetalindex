"""Write the seaweed thin-page record, shared requests and result record from the final ledger and scorecard."""
import collections, hashlib, json, pathlib, subprocess

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/seaweed'
ledger_dir = root / 'data/evidence/contracts/seaweed'
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()
J = lambda p: json.loads(p.read_text())
rel = lambda p: str(p.relative_to(root))

ledger = J(ledger_dir / 'evidence-ledger.json'); score = J(ledger_dir / 'fullness-scorecard.json')
html = audit / 'preview/ingredients/seaweed.html'
gate = json.loads(subprocess.run(['node', '-e', f"import('./tools/audit-ingredient-presentation.mjs').then(m=>console.log(JSON.stringify(m.inspectIngredientPresentation(require('fs').readFileSync('{rel(html)}','utf8')))))"], cwd=root, capture_output=True, text=True, check=True).stdout)
disp = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'])
src_disp = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'] if i['id'].startswith('source:'))
occ_families = sorted({r['family_id'] for r in ledger['results']})

# ---------------------------------------------------------------- per-analyte counts
per = {}
for r in ledger['results']:
    a = per.setdefault(r['scope']['analyte'], {'results': 0, 'rated': 0, 'direct': 0, 'bounded': 0, 'unavailable': 0, 'families': set(), 'reasons': collections.Counter()})
    a['results'] += 1; a[r['comparison']['state']] += 1; a['families'].add(r['family_id'])
    if r['comparison'].get('reason_code'): a['reasons'][r['comparison']['reason_code']] += 1
units = collections.Counter(u['scope']['analyte'] for u in ledger['reference_units'])
decision = {'iAs', 'tAs', 'Cd', 'Pb', 'tHg'}
analytes = [{'analyte': a, 'decision_relevant': a in decision, 'results': v['results'], 'reference_units': units.get(a, 0), 'families': len(v['families']), 'rated': v['rated'],
             'note': {'iAs': 'Decision analyte; hijiki and oarweed drive the upper tail. Rated against per-basis pooled references.',
                      'tAs': 'Mostly organic arsenosugars; never substituted for inorganic arsenic.',
                      'Cd': 'Laver and wakame highest; dried-as-sold reference has one family with sample-level medians (GEMS/Food).',
                      'tHg': 'Mostly below detection; many rows bounded by reporting limits.'}.get(a, '')} for a, v in sorted(per.items())]

holds = J(root / 'tools/contracts/ingredients/seaweed/holds.json')
held_rows = [r for r in ledger['results'] if r['comparison'].get('reason_code') == 'value_fails_source_integrity_check']
access = [i for i in ledger['items'] if i['disposition'] == 'access_blocked']

thin = {'slug': 'seaweed', 'status': 'thin', 'assessed_at': '2026-10-22T16:30:00Z', 'universe_items': len(ledger['items']), 'occurrence_families': len(occ_families), 'analytes': analytes,
 'reasons': ['access_blocked_evidence'],
 'fetch_targets': [
  {'what': 'Vietnam QCVN 20-1:2024/BYT health-supplement standard (Official Gazette PDF)', 'why': 'The only instrument in the seaweed universe that could not be read; its seaweed-supplement cadmium tier is unverified.', 'where': 'Vietnam Ministry of Health / Official Gazette; declared raw/regulatory/vn/vietnam-qcvn-20-1-2024-health-supplements.pdf', 'priority': 'low'},
  {'what': 'EFSA 2023 seaweed occurrence report Annex D (per-group medians, percentiles and sample-level data)', 'why': 'The PDF prints only lower- and upper-bound means; medians would admit EFSA as a second family to the dried-as-sold cadmium and lead references, now a single GEMS/Food family.', 'where': 'EFSA Supporting Publications 2023 EN-7798 supplementary files (doi 10.2903/sp.efsa.2023.EN-7798)', 'priority': 'high'},
  {'what': 'Bralatei et al. 2017 supplementary Table S3 (per-sample retail seaweed inorganic arsenic)', 'why': 'Per-sample kombu and other retail iAs values would add dried-product sample units.', 'where': 'Publisher supplement for the 2017 field-method paper', 'priority': 'medium'},
  {'what': 'Fechner et al. 2022 (BfR MEAL) per-food supplementary tables', 'why': 'Gives prepared-algae N, SD, mercury and nickel; only means are in the article.', 'where': 'Europe PMC open-access record, doi 10.1016/j.fochx.2022.100326', 'priority': 'low'},
  {'what': 'Amster et al. 2007 kelp supplement arsenic measurements (EHP 115:606-608)', 'why': 'Primary kelp-supplement total arsenic data cited by a letter in the library; no source record exists.', 'where': 'Environmental Health Perspectives open archive', 'priority': 'medium'},
  {'what': 'Origin-linked retail seaweed surveys for cadmium and inorganic arsenic (literature search: seaweed cadmium origin Galicia Korea China Japan retail)', 'why': 'Only one within-study origin comparison exists; growing origin is rarely reported for retail products.', 'where': 'Web of Science / Scopus; national monitoring programmes (Norway IMR, Korea MFDS, Japan MAFF)', 'priority': 'medium'}],
 'publishable': True,
 'publishable_reason': f'Every gate passes. {len(occ_families)} occurrence families support every decision-relevant analyte with pooled references and within-study comparisons; the one access-blocked item is a regulatory instrument, and its absence is stated on the page.'}
errs = json.loads(subprocess.run(['node', '-e', f"import('./tools/contracts/build-thin-pages-ledger.mjs').then(m=>console.log(JSON.stringify(m.validateThinPage({json.dumps(thin)},'thin-page.json'))))"], cwd=root, capture_output=True, text=True, check=True).stdout)
assert not errs, errs
(audit / 'thin-page.json').write_text(json.dumps(thin, indent=2, ensure_ascii=False) + '\n')

# ---------------------------------------------------------------- source-correction proposals
proposals = []
for f in sorted((audit / 'extraction').glob('*.json')):
    x = J(f)
    c = x.get('contradictions_with_stored_summary') or []
    if c:
        p = f'wiki/sources/{x["source_id"]}.md'
        proposals.append({'path': p, 'before_sha256': sha(p) if (root / p).exists() else None, 'primary': x.get('primary_artifact'),
                          'primary_sha256': x.get('primary_sha256') if isinstance(x.get('primary_sha256'), str) else None, 'issues': c, 'status': 'proposed; central owns shared source edits'})
(audit / 'proposed-source-corrections-claude.json').write_text(json.dumps({'date': '2026-10-22', 'count': len(proposals), 'proposals': proposals}, indent=1, ensure_ascii=False) + '\n')

shared = {'date': '2026-10-22', 'requests': [
 {'what': 'Register tools/contracts/ingredients/seaweed/build.mjs (Claude rebuild) as the seaweed compiler and adopt candidate/seaweed.md after central review.', 'why': 'Build sessions never adopt or deploy.', 'evidence': 'result.json; all gates pass on preview/ingredients/seaweed.html', 'before': 'wiki/ingredients/seaweed.md sha256 ' + sha('wiki/ingredients/seaweed.md'), 'after': 'candidate/seaweed.md sha256 ' + sha(rel(audit / 'candidate/seaweed.md'))},
 {'what': 'Page weight: the candidate renders 3,998 occurrence rows; the compiled HTML is about 52 MB (row markup about 7.6 KB each plus a 14.6 MB payload). Consider lazy rendering of per-row evidence drawers from the payload in tools/contracts/pilot/analyte-table.mjs.', 'why': 'The owner rule requires every extracted result as a row; the shared renderer inlines each drawer, so very full pages become heavy on phones.', 'evidence': 'preview/ingredients/seaweed.html size; honey 5.5 MB for 325 rows', 'before': 'Inline evidence content per row', 'after': 'Drawer content rendered from the existing payload on open'},
 {'what': 'Apply the source-record corrections in proposed-source-corrections-claude.json (primary-text verified; e.g. Hahn 2022 authors and 2015 collection, Kaise 1988 missing rows, Sim 2024 title/design, Rodríguez-Rodríguez 2026 metadata, Narukawa 2020 certification framing on a public source page).', 'why': 'Stored summaries contradict their primary texts.', 'evidence': 'extraction/*.json contradictions_with_stored_summary', 'before': 'Current wiki/sources records', 'after': 'Corrected records; re-pin with pin-sources.py after review'},
 {'what': 'Remove unsupported products/seaweed-kelp-foods routing from source records whose primary text has no seaweed content (about 70 records dispositioned out_of_scope here).', 'why': 'Broad routing makes the seaweed universe grow with irrelevant items.', 'evidence': 'extraction/*.json for out_of_scope records', 'before': 'Routed to seaweed', 'after': 'Not routed'},
 {'what': 'Add seaweed rows to data/evidence/regulatory_limits.csv: ANZ Schedule 19 iAs 1 mg/kg (85% hydration); Singapore iAs 2 ppm and Cd 2 ppm; Thailand Cd 2 mg/kg dried seaweed; China GB 2762 Pb 0.5 fresh algae / 1.0 algae products (2025 edition identical, in force 2026-09-02); EU 2024/1987 Ni 30 / wakame 40 mg/kg; EU 2023/915 Cd 3.0 mg/kg supplements of at least 80% dried seaweed.', 'why': 'Verified from primary instruments in this build.', 'evidence': 'extraction/<instrument>.json limits arrays', 'before': 'Missing or partial rows', 'after': 'Rows with locators'},
 {'what': 'Add a GB 2762-2025 source record and mark the 2022 records superseded.', 'why': 'The 2025 standard replaced 2022 on 2026-09-02 with identical algae rows.', 'evidence': '/Volumes/HMI-Library/Regulatory documents/China_GB-2762-2025_2025_Contaminant-MLs.pdf', 'before': 'Only 2022 records', 'after': '2025 record plus supersession note'}]}
(audit / 'shared-requests.json').write_text(json.dumps(shared, indent=1, ensure_ascii=False) + '\n')

# ---------------------------------------------------------------- before / after
before_md = (audit / 'claude-baseline/seaweed-live.md').read_text(); after_md = (audit / 'candidate/seaweed.md').read_text()
cnt = lambda t, pat: t.count(pat)
result = {
 'ingredient': 'seaweed', 'date': '2026-10-22', 'status': 'candidate_ready_for_central_review', 'live': False, 'builder': 'Claude build session (replaces the earlier paused candidate)',
 'rules_applied': ['docs/contracts/claude-ingredient-playbook.md', 'AGENTS.md Mandatory ingredient publication gate and fullness rules', 'docs/contracts/ingredient-canonical-style.md', 'docs/contracts/ingredient-reading-pattern.md',
                   'docs/contracts/ingredient-faq-question-bank.md', 'docs/contracts/ingredient-fullness-gates.md', 'docs/contracts/evidence-and-answers.md', 'docs/contracts/hmi-baseline.md', 'docs/public-content-boundary.md'],
 'owned_paths': ['tools/contracts/ingredients/seaweed/', 'data/evidence/syntheses/ingredient-seaweed-v1.json', 'data/evidence/questions/ingredient/seaweed.json', 'data/evidence/contracts/seaweed/', 'data/evidence/contracts/most-studied-rollout-2026-10-22/seaweed/'],
 'shared_files_edited': [], 'wiki_ingredient_untouched': sha('wiki/ingredients/seaweed.md') == J(audit / 'claude-baseline.json')['sha256'],
 'commands': {'universe_and_texts': 'node tools/contracts/ingredients/seaweed/map-texts.mjs', 'datasets': 'python3 -I tools/contracts/ingredients/seaweed/prepare-datasets.py', 'index_only_check': 'node tools/contracts/ingredients/seaweed/check-index-only.mjs',
              'compose': 'python3 -I tools/contracts/ingredients/seaweed/compose.py', 'pins': 'python3 -I tools/contracts/ingredients/seaweed/pin-sources.py', 'build': 'node tools/contracts/ingredients/seaweed/build.mjs',
              'check': 'node tools/contracts/ingredients/seaweed/build.mjs --check', 'preview': 'node tools/contracts/ingredients/seaweed/preview.mjs', 'fullness': 'node tools/contracts/ingredients/seaweed/fullness.mjs data/evidence/contracts/most-studied-rollout-2026-10-22/seaweed/preview/ingredients/seaweed.html',
              'public_processing': 'node --import tsx tools/audit-public-processing.mjs --output data/evidence/contracts/most-studied-rollout-2026-10-22/seaweed/preview', 'finalize': 'python3 -I tools/contracts/ingredients/seaweed/finalize.py'},
 'counts': {'universe_items': len(ledger['items']), 'source_records': sum(src_disp.values()), 'dataset_rows': len(ledger['items']) - sum(src_disp.values()), 'dispositions': dict(disp), 'source_dispositions': dict(src_disp),
            'occurrence_families': len(occ_families), 'rows': len(ledger['results']), 'reference_units': len(ledger['reference_units']), 'references': len(ledger['references']),
            'states': dict(collections.Counter(r['comparison']['state'] for r in ledger['results'])),
            'unavailable_reasons': dict(collections.Counter(r['comparison'].get('reason_code') for r in ledger['results'] if r['comparison'].get('reason_code'))),
            'per_analyte': {a: {k: (len(v) if k == 'families' else dict(v) if k == 'reasons' else v) for k, v in d.items()} for a, d in per.items()},
            'faqs': J(audit / 'faq-bank-dispositions.json')['selected_count'], 'mitigation_rows': len(J(audit / 'interventions.json')['records'])},
 'gates': {'fullness': {k: v.get('status') for k, v in score.get('gates', {}).items()} if 'gates' in score else 'see fullness.mjs run: all 7 pass', 'presentation': gate, 'public_processing': 'pass (224 public documents, including the 41 on-demand occurrence JSON files)', 'question_record_validateRecord': [], 'build_check': 'pass',
           'hero': 'preview asset /static/heroes/seaweed-dried-marine.webp sha256 1dc454e5… matches data/design/page-hero-images.json', 'not_run_here': ['full-site lint:hero-preservation and lint:ingredient-presentation (central, full output)', 'paired desktop/phone browser screenshots (not loaded in this session)']},
 'holds': {'patterns': len(holds), 'rows': len(held_rows), 'sources': sorted({r['family_id'] for r in held_rows}), 'file': 'tools/contracts/ingredients/seaweed/holds.json'},
 'access_gaps': [{'item': i['id'], 'request': i.get('retrieval_request', {}).get('request')} for i in access] + [{'item': 'missing supplements of readable sources', 'request': 'EFSA 2023 Annex D; Bralatei 2017 Table S3; Ronan 2017 Tables S1–S2; Fechner 2022 per-food tables; Raab 2024 Table S4'}],
 'source_correction_proposals': {'count': len(proposals), 'file': rel(audit / 'proposed-source-corrections-claude.json')},
 'shared_requests': rel(audit / 'shared-requests.json'), 'thin_page': rel(audit / 'thin-page.json'),
 'before_after_live_page': {'live_sha256': sha('wiki/ingredients/seaweed.md'), 'candidate_sha256': sha(rel(audit / 'candidate/seaweed.md')), 'live_bytes': len(before_md.encode()), 'candidate_bytes': len(after_md.encode()),
   'live_occurrence_rows': cnt(before_md, 'hmi-occurrence-seaweed-') , 'candidate_occurrence_rows': len(ledger['results']), 'live_sources_frontmatter': 4, 'candidate_sources_cited': len(J(audit / 'claude-source-pins.json')['checks']),
   'summary': 'Live page: 4 sources, source-scope comparisons only. Candidate: every library record decided by content, 78 occurrence families, GEMS/Food seaweed submissions summarised by type, form, basis and region, pooled per-basis references, 12 stage-led controls, 19 FAQs, hero preserved.'},
 'hashes': {p: sha(p) for p in [rel(audit / 'candidate/seaweed.md'), 'data/evidence/syntheses/ingredient-seaweed-v1.json', 'data/evidence/questions/ingredient/seaweed.json', rel(html),
            'data/evidence/contracts/seaweed/evidence-ledger.json', 'data/evidence/contracts/seaweed/fullness-scorecard.json', 'tools/contracts/pilot/compiler.mjs', 'tools/contracts/pilot/analyte-table.mjs', 'tools/contracts/pilot/mitigation-table.mjs', 'tools/contracts/pilot/hmi-baseline.mjs']},
 'earlier_work_preserved': 'Codex candidate, result and preview moved to before/codex-2026-10-22/; its scripts are in tools/contracts/ingredients/seaweed/codex-archive/.',
}
(audit / 'result.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: result[k] for k in ('status', 'wiki_ingredient_untouched')}, indent=1)); print(json.dumps(result['counts']['states']), json.dumps(result['counts']['unavailable_reasons']), json.dumps(dict(disp)))
print('holds rows', len(held_rows), 'sources', len(result['holds']['sources']), 'proposals', len(proposals))
