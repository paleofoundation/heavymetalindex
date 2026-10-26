"""Write result.json, thin-page.json and shared-requests.json for the leafy-greens candidate.

Reads only owned artifacts (ledger, scorecard, extraction files, preview HTML) and the live
page for the before/after comparison; never writes wiki/ or shared files.
"""
import json, pathlib, re, hashlib, collections

root = pathlib.Path(__file__).resolve().parents[4]
A = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens'
L = root / 'data/evidence/contracts/leafy-greens'
sha = lambda p: hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
ledger = json.loads((L / 'evidence-ledger.json').read_text())
score = json.loads((L / 'fullness-scorecard.json').read_text())
extr = {json.loads(f.read_text())['source_id']: json.loads(f.read_text()) for f in (A / 'extraction').glob('*.json')}
holds = json.loads((A / 'holds.json').read_text())['holds']
cand = A / 'candidate/leafy-greens.md'; preview = A / 'preview/ingredients/leafy-greens.html'; live = root / 'wiki/ingredients/leafy-greens.md'

items = ledger['items']; results = ledger['results']
disp = collections.Counter(i['disposition'].split(':')[0] for i in items)
src_disp = collections.Counter(i['disposition'].split(':')[0] for i in items if i['id'].startswith('source:'))
ds_disp = collections.Counter(i['disposition'].split(':')[0] for i in items if i['id'].startswith('dataset:'))
state = collections.Counter(r['comparison']['state'] for r in results)
reasons = collections.Counter(r['comparison'].get('reason_code') for r in results if r['comparison']['state'] == 'unavailable')
fams = sorted({r['family_id'] for r in results})
held_ids = [r['id'] for r in results if r['comparison'].get('reason_code') == 'value_fails_source_integrity_check']

# ------------------------------------------------------------------ per-analyte thinness
units_by = collections.defaultdict(list)
for u in ledger['reference_units']: units_by[u['scope']['analyte']].append(u)
decision = {'Cd', 'Pb', 'tAs', 'iAs'}
analytes = []
for a in sorted({r['scope']['analyte'] for r in results}):
    rs = [r for r in results if r['scope']['analyte'] == a]
    analytes.append({'analyte': a, 'decision_relevant': a in decision, 'results': len(rs), 'reference_units': len(units_by[a]),
                     'families': len({r['family_id'] for r in rs}), 'rated': sum(1 for r in rs if r['comparison']['state'] == 'rated'),
                     'direct': sum(1 for r in rs if r['comparison']['state'] == 'direct'), 'note': ''})
for x in analytes:
    if x['analyte'] == 'iAs': x['note'] = 'Inorganic arsenic is measured directly only by GEMS/Food submissions, the UK and Hong Kong total diet studies; most surveys report total arsenic.'
thin = {'slug': 'leafy-greens', 'status': 'adequate', 'assessed_at': '2026-10-22T17:00:00Z', 'universe_items': len(items), 'occurrence_families': len(fams),
        'analytes': analytes, 'reasons': [],
        'fetch_targets': [
          {'what': 'Bedoya-Perales et al. 2023 Figshare dataset (doi 10.6084/m9.figshare.c.6572563.v1): chard, spinach, lettuce and celery from the Moquegua mining region', 'why': 'Adds an origin-linked mining-region family with per-sample values to the cadmium and lead references', 'where': 'Figshare collection named in the article’s data availability statement', 'priority': 'medium'},
          {'what': 'Harmanescu et al. 2011, Chem Cent J 5:64 (doi 10.1186/1752-153X-5-64): Banat mining-area leaf parsley, lettuce and cabbage', 'why': 'The Gergen 2012 record reuses its values; ingesting the original adds a primary family without double counting', 'where': 'Publisher open-access page', 'priority': 'low'},
          {'what': 'Pan et al. 2016 supplementary table (28 vegetable species, Zhejiang)', 'why': 'Adds Chinese cabbage, cabbage, lettuce and crown daisy values printed only in the supplement', 'where': 'Publisher supplementary material', 'priority': 'low'},
          {'what': 'Inorganic-arsenic speciation surveys of leafy greens (EU and US monitoring)', 'why': 'Only three families report inorganic arsenic directly', 'where': 'EFSA arsenic occurrence data calls; FDA inorganic arsenic surveys; search "inorganic arsenic spinach lettuce HPLC-ICP-MS"', 'priority': 'medium'}],
        'publishable': True, 'publishable_reason': f'All seven fullness gates, the presentation gate, the public-processing audit and question-record validation pass; {len(fams)} occurrence families with eligible pooled references for cadmium, lead and arsenic and within-study comparisons.'}
(A / 'thin-page.json').write_text(json.dumps(thin, indent=1) + '\n')

# ------------------------------------------------------------------ shared requests (source-record corrections and integration)
corrections = []
for sid, x in sorted(extr.items()):
    cs = x.get('contradictions_with_stored_summary') or []
    if cs: corrections.append({'source_id': sid, 'record': f'wiki/sources/{sid}.md', 'evidence': f'data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens/extraction/{sid}.json', 'issues': cs[:6]})
shared = {'ingredient': 'leafy-greens', 'date': '2026-10-22', 'requests': [
  {'what': 'Adopt the candidate as wiki/ingredients/leafy-greens.md and register the builder tools/contracts/ingredients/leafy-greens/build.mjs (buildIngredient, --check) in the central rollout check, replacing the earlier leafy-greens builder registration.',
   'why': 'Build sessions do not write wiki/ or shared registries.', 'before': 'Live page sha256 ' + sha(live), 'after': 'Candidate sha256 ' + sha(cand)},
  {'what': 'Shared renderer change adopted: occurrence detail now loads on demand from JSON files next to the page (preview HTML 5.6 MB plus 24 JSON chunks, about 22 MB in total, loaded on demand).', 'why': 'Ship these files with the page in the release.', 'before': 'Inline payload, about 28 MB HTML', 'after': 'HTML 5.6 MB with on-demand JSON'},
  {'what': 'Correct the source record murthy2024-international-journal-of-scientific-engineering-and-research-ijser: it is the same paper as narayana-murthy2024-premna-village-elements (same title, authors and Paper ID SE24205180530).',
   'why': 'Duplicate record; the ledger marks it duplicate_of the narayana-murthy record.', 'before': 'Two records for one paper', 'after': 'One record, the other marked as a duplicate'},
  {'what': 'Restore the declared raw paths for li2017, eu2015, flyvholm1984, de-paiva-2020, rovira2016 and mfds2012 (files exist under the mounted HMI Library or backup at different paths; see source-manifest.json attempts).',
   'why': 'Declared raw_path values do not resolve; the readable copies were found by file-name search.', 'before': 'Declared raw_path unresolved', 'after': 'raw_path pointing at the recovered file'},
  {'what': 'Source-record corrections from primary-text review (titles, authors, bases, values) for the records listed in source_corrections.',
   'why': 'Many stored summaries contradict their primary text; the candidate pins current records and does not depend on the corrections.', 'before': 'See each extraction file', 'after': 'See each extraction file'}],
  'source_corrections': corrections}
(A / 'shared-requests.json').write_text(json.dumps(shared, indent=1, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ before / after against the live page
lt = live.read_text(); ct = cand.read_text()
count = lambda t, pat: len(re.findall(pat, t))
before_after = {
  'live': {'sha256': sha(live), 'occurrence_rows': count(lt, r'<tr id="hmi-occurrence-'), 'faqs': count(lt, r'data-hmi-faq="1"'), 'sources_frontmatter': int(re.search(r'^sources:\s*(\d+)', lt, re.M).group(1))},
  'candidate': {'sha256': sha(cand), 'occurrence_rows': count(ct, r'<tr id="hmi-occurrence-'), 'faqs': count(ct, r'data-hmi-faq="1"'), 'sources_frontmatter': int(re.search(r'^sources:\s*(\d+)', ct, re.M).group(1))}}

result = {
 'ingredient': 'leafy-greens', 'date': '2026-10-22', 'status': 'ready', 'live': False,
 'rules_applied': ['AGENTS.md ingredient gates and fullness rules', 'docs/contracts/claude-ingredient-playbook.md', 'docs/contracts/ingredient-canonical-style.md', 'docs/contracts/ingredient-reading-pattern.md', 'docs/contracts/ingredient-faq-question-bank.md', 'docs/contracts/ingredient-fullness-gates.md', 'docs/contracts/hmi-baseline.md', 'docs/public-content-boundary.md'],
 'owned_paths': ['tools/contracts/ingredients/leafy-greens/', 'data/evidence/syntheses/ingredient-leafy-greens-v1.json', 'data/evidence/questions/ingredient/leafy-greens.json', 'data/evidence/contracts/leafy-greens/', 'data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens/'],
 'shared_files_edited': [], 'wiki_untouched': True, 'deployed': False,
 'commands': {'manifest': 'node tools/contracts/ingredients/leafy-greens/manifest.mjs && python3 -I tools/contracts/ingredients/leafy-greens/manifest-fallback.py <mounted-list> <backup-list>',
              'datasets': 'python3 -I tools/contracts/ingredients/leafy-greens/prepare-datasets.py', 'compose': 'python3 -I tools/contracts/ingredients/leafy-greens/compose.py',
              'pin': 'python3 -I tools/contracts/ingredients/leafy-greens/pin-sources.py', 'build': 'node tools/contracts/ingredients/leafy-greens/build.mjs',
              'check': 'node tools/contracts/ingredients/leafy-greens/build.mjs --check', 'preview': 'node tools/contracts/ingredients/leafy-greens/preview.mjs',
              'gates': 'node tools/contracts/ingredients/leafy-greens/fullness.mjs <preview>/ingredients/leafy-greens.html', 'finalize': 'python3 -I tools/contracts/ingredients/leafy-greens/finalize.py'},
 'candidate': str(cand.relative_to(root)), 'candidate_sha256': sha(cand), 'preview_html_sha256': sha(preview),
 'evidence_ledger': {'universe_size': len(items), 'source_records': sum(src_disp.values()), 'dataset_rows': sum(ds_disp.values()),
                     'dispositions': dict(disp), 'source_dispositions': dict(src_disp), 'dataset_row_dispositions': dict(ds_disp)},
 'fullness': {'extracted_results': len(results), 'rendered_rows': len(results), 'occurrence_families': len(fams), 'comparison': dict(state), 'reason_codes': dict(reasons),
              'reference_units': len(ledger['reference_units']), 'references': len(ledger['references'])},
 'holds': {'rule': json.loads((A / 'holds.json').read_text())['rule'], 'count_results': len(held_ids), 'patterns': [{'match': h['match'], 'reason': h['reason']} for h in holds]},
 'figure_read_values': 'Values read from charts or back-calculated (no printed number) are shown and never compared (reason no_numeric_value_or_bound).',
 'access_gaps': [{'source_id': 'bedoya-perales2023-moquegua-peru-mining-dataset', 'status': 'context_only', 'detail': 'Article prints only detection limits; values in an external Figshare dataset not in the library (retrieval proposed in thin-page.json).'}],
 'access_blocked_items': [i['id'] for i in items if i['disposition'] == 'access_blocked'],
 'gates': {'fullness_1_7': 'pass', 'presentation': 'pass (0 errors; 750 meaningful comparator rows; 14 mitigation rows)', 'public_processing': 'pass (298 public documents in scoped preview, including the 24 on-demand occurrence JSON files)',
           'question_record_validateRecord': 'pass ([])', 'reproducible_build': 'pass (--check)',
           'hero': 'src, alt and asset sha256 match data/design/page-hero-images.json (e6fe040e…); loaded 2164 px wide at 1440 and 390 px',
           'browser': '1440 px and 390 px: 2,247 rows, 14 mitigation rows, evidence drawer opens, no horizontal overflow at 390 px with filters open, no console errors',
           'not_run_here': ['full-site lint:hero-preservation and lint:ingredient-presentation on the final integrated output (central)', 'paired screenshot set against Rice']},
 'faqs': 20, 'faq_bank': 'data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens/faq-bank-dispositions.json', 'mitigation_rows': 14,
 'regulatory_limits_verified': [
   {'jurisdiction': 'EU', 'instrument': 'Regulation (EU) 2023/915', 'analyte': 'Pb', 'value': 0.30, 'unit': 'mg/kg ww', 'scope': 'leaf vegetables excl. fresh herbs; leafy brassica'},
   {'jurisdiction': 'EU', 'instrument': 'Regulation (EU) 2023/915', 'analyte': 'Cd', 'value': 0.10, 'unit': 'mg/kg ww', 'scope': 'leaf vegetables; leafy brassica'},
   {'jurisdiction': 'EU', 'instrument': 'Regulation (EU) 2023/915', 'analyte': 'Cd', 'value': 0.20, 'unit': 'mg/kg ww', 'scope': 'spinach and similar leaves, mustard seedlings, fresh herbs'},
   {'jurisdiction': 'EU', 'instrument': 'Regulation (EU) 2024/1987', 'analyte': 'Ni', 'value': 0.50, 'unit': 'mg/kg ww', 'scope': 'leafy vegetables except fresh herbs, from 1 July 2025'},
   {'jurisdiction': 'Codex', 'instrument': 'CXS 193 (edition held)', 'analyte': 'Pb', 'value': 0.3, 'unit': 'mg/kg', 'scope': 'leafy vegetables'},
   {'jurisdiction': 'Codex', 'instrument': 'CXS 193 (edition held)', 'analyte': 'Cd', 'value': 0.2, 'unit': 'mg/kg', 'scope': 'leafy vegetables'},
   {'jurisdiction': 'CN', 'instrument': 'GB 2762-2022 (USDA translation)', 'analyte': 'Pb/Cd', 'value': '0.3/0.2', 'unit': 'mg/kg', 'scope': 'leafy vegetables'},
   {'jurisdiction': 'KR', 'instrument': 'Korean Food Code Art. 2', 'analyte': 'Pb/Cd', 'value': '0.3/0.2', 'unit': 'mg/kg', 'scope': 'Chinese cabbage, spinach'},
   {'jurisdiction': 'HK', 'instrument': 'Cap. 132V guidelines 2019', 'analyte': 'Cd', 'value': 0.2, 'unit': 'mg/kg', 'scope': 'leafy vegetables'}],
 'before_after_live': before_after,
 'thin_page': thin['status'], 'shared_requests': 'data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens/shared-requests.json',
 'source_correction_proposals': len(corrections),
 'owner_decisions': [
                     'Herbs (coriander, parsley, mint, dill, basil, lovage, tarragon) and leek are treated as leafy greens when the source analysed edible leaves; the EU treats fresh herbs separately for limits.'],
}
(A / 'result.json').write_text(json.dumps(result, indent=1, ensure_ascii=False) + '\n')
print(json.dumps({'status': result['status'], 'universe': len(items), 'dispositions': dict(disp), 'rows': len(results), 'comparison': dict(state), 'reasons': dict(reasons), 'held': len(held_ids), 'families': len(fams), 'before_after': before_after, 'corrections': len(corrections)}, indent=1))
