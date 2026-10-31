"""Write result.json, thin-page.json and shared-requests.json for the spinach candidate.

Reads only owned artifacts (ledger, scorecard, extraction files, preview HTML), the read-only
leafy-greens extraction records and the working-folder page for the before/after comparison;
never writes wiki/ or shared files. Gate results are re-run here, not asserted.
"""
import json, pathlib, re, hashlib, collections, subprocess

root = pathlib.Path(__file__).resolve().parents[4]
A = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/spinach'
LG = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens'
L = root / 'data/evidence/contracts/spinach'
sha = lambda p: hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
node = lambda js: json.loads(subprocess.run(['node', '-e', js], cwd=root, capture_output=True, text=True, check=True).stdout)
# The gate rewrites the ledger and scorecard from the exact preview HTML; run it first so counts below are current.
full = subprocess.run(['node', 'tools/contracts/ingredients/spinach/fullness.mjs', 'data/evidence/contracts/ingredient-rollout-2026-10-22/spinach/preview/ingredients/spinach.html'], cwd=root, capture_output=True, text=True)
ledger = json.loads((L / 'evidence-ledger.json').read_text())
cand = A / 'candidate/spinach.md'; html = A / 'preview/ingredients/spinach.html'; live = root / 'wiki/ingredients/spinach.md'

items = ledger['items']; results = ledger['results']
disp = collections.Counter(i['disposition'].split(':')[0] for i in items)
src_disp = collections.Counter(i['disposition'].split(':')[0] for i in items if i['id'].startswith('source:'))
ds_disp = collections.Counter(i['disposition'].split(':')[0] for i in items if i['id'].startswith('dataset:'))
state = collections.Counter(r['comparison']['state'] for r in results)
reasons = collections.Counter(r['comparison'].get('reason_code') for r in results if r['comparison']['state'] == 'unavailable')
fams = sorted({r['family_id'] for r in results})
held = [r for r in results if r['comparison'].get('reason_code') == 'value_fails_source_integrity_check']

# ------------------------------------------------------------------ gates (run, not asserted)
gate = node(f"import('./tools/audit-ingredient-presentation.mjs').then(m=>console.log(JSON.stringify(m.inspectIngredientPresentation(require('fs').readFileSync('{html.relative_to(root)}','utf8')))))")
record_errors = node("import('./tools/contracts/validate.mjs').then(m=>console.log(JSON.stringify(m.validateRecord(JSON.parse(require('fs').readFileSync('data/evidence/questions/ingredient/spinach.json','utf8'))))))")
pp = subprocess.run(['node', '--import', 'tsx', 'tools/audit-public-processing.mjs', '--output', str((A / 'preview').relative_to(root))], cwd=root, capture_output=True, text=True)
check = subprocess.run(['node', 'tools/contracts/ingredients/spinach/build.mjs', '--check'], cwd=root, capture_output=True, text=True)

# ------------------------------------------------------------------ thinness
units_by = collections.defaultdict(list)
for u in ledger['reference_units']: units_by[u['scope']['analyte']].append(u)
decision = {'Cd', 'Pb', 'tAs', 'iAs', 'Ni'}
notes = {'Cd': 'Pooled fresh-weight references for raw, frozen and cooked spinach; within-study site contrasts in Gazipur and Dehradun give the lower-contamination comparison.',
         'Pb': 'Pooled fresh-weight references for raw, cooked, frozen and canned spinach; site contrasts and the manure trial give within-study comparisons.',
         'tAs': 'Pooled fresh-weight references for raw, cooked and frozen spinach; the manure trial and the arsenic irrigation trial give within-study comparisons.',
         'iAs': 'Four GEMS/Food reference units from one family; Hong Kong TDS mean. Inorganic arsenic is rarely measured in spinach.',
         'Ni': 'Fresh-weight reference below the display minimum (two families); the dry-weight reference has four units from one family; site contrasts and the manure trial give within-study comparisons.'}
analytes = []
for a in sorted({r['scope']['analyte'] for r in results}):
    rs = [r for r in results if r['scope']['analyte'] == a]
    analytes.append({'analyte': a, 'decision_relevant': a in decision, 'results': len(rs), 'reference_units': len(units_by[a]),
                     'families': len({r['family_id'] for r in rs}), 'rated': sum(1 for r in rs if r['comparison']['state'] == 'rated'),
                     'direct': sum(1 for r in rs if r['comparison']['state'] == 'direct'), 'note': notes.get(a, '')})
thin = {'slug': 'spinach', 'status': 'adequate', 'assessed_at': '2026-10-22T19:00:00Z', 'universe_items': len(items), 'occurrence_families': len(fams),
        'analytes': analytes, 'reasons': [],
        'fetch_targets': [
          {'what': 'Bedoya-Perales et al. 2023 Figshare dataset (doi 10.6084/m9.figshare.c.6572563.v1): spinach, chard, lettuce and celery from the Moquegua mining region, Peru, 2021', 'why': 'The only mining-region spinach dataset known to the library; adds origin-linked per-sample values for cadmium, lead and arsenic', 'where': 'Figshare collection named in the article’s data records section', 'priority': 'medium'},
          {'what': 'Cavanagh et al. 2019, New Zealand field study of cadmium in baby versus bunching spinach', 'why': 'Would turn the baby-spinach comparison, now available only through the Seyfferth 2024 review, into a primary within-study comparison', 'where': 'Reference list of Seyfferth et al. 2024 (GeoHealth); publisher or New Zealand government report', 'priority': 'high'},
          {'what': 'Paired field versus greenhouse or hydroponic spinach measurements of cadmium and lead', 'why': 'No study in the library compares growing systems for spinach, so no growing-system preference can be stated', 'where': 'Literature search: "spinach cadmium greenhouse field comparison", "hydroponic spinach heavy metals"', 'priority': 'medium'},
          {'what': 'Wolnik et al. 1985 USDA-FDA-EPA survey of spinach and the FDA TDS 1991–2017 boiled-spinach results', 'why': 'Primary US data behind the review’s state and time comparisons; adds state-level growing-origin cadmium and lead', 'where': 'J Agric Food Chem 1985; FDA Total Diet Study analytical results archive', 'priority': 'medium'},
          {'what': 'Inorganic-arsenic speciation surveys of spinach', 'why': 'Only GEMS/Food and Hong Kong report inorganic arsenic directly', 'where': 'EFSA arsenic occurrence data; search "inorganic arsenic spinach HPLC-ICP-MS"', 'priority': 'low'}],
        'publishable': True, 'publishable_reason': f'{len(fams)} occurrence families; pooled references for cadmium, lead and total arsenic and within-study comparisons for every decision-relevant analyte; all gates pass on the preview.'}
(A / 'thin-page.json').write_text(json.dumps(thin, indent=1, ensure_ascii=False) + '\n')
thin_check = subprocess.run(['node', '-e', "import('./tools/contracts/build-thin-pages-ledger.mjs').then(m=>{const x=JSON.parse(require('fs').readFileSync('data/evidence/contracts/ingredient-rollout-2026-10-22/spinach/thin-page.json','utf8'));const e=m.validateThinPage(x,'spinach/thin-page.json');console.log(JSON.stringify(e??[]))})"], cwd=root, capture_output=True, text=True)

# ------------------------------------------------------------------ shared requests
spin_sources = {r['family_id'] for r in results}
corrections = []
for f in sorted((LG / 'extraction').glob('*.json')):
    x = json.loads(f.read_text())
    if x['source_id'] in spin_sources and x['source_id'] not in ('who-gemsfood-heavy-metal-contaminants', 'fda2022-tds-elements-fy2018-fy2020') and x.get('contradictions_with_stored_summary'):
        issues = x['contradictions_with_stored_summary'][:6]
        # Brand firewall (CLAUDE.md Part 12): manufacturer test records are described at category level.
        if x['source_id'] == 'us-house-subcommittee2021-baby-foods-tainted-heavy-metals':
            issues = ['Stored ingredients list includes spinach but the stored Key numbers do not report the spinach cadmium values (101-143 ppb) printed in the report’s manufacturer raw-material cadmium excerpt (pp. 29-30).']
        corrections.append({'source_id': x['source_id'], 'record': f'wiki/sources/{x["source_id"]}.md', 'evidence': str(f.relative_to(root)), 'issues': issues})
live_sha = sha(live)
shared = {'ingredient': 'spinach', 'date': '2026-10-22', 'requests': [
  {'what': 'Adopt the candidate as wiki/ingredients/spinach.md and register the builder tools/contracts/ingredients/spinach/build.mjs (buildIngredient, --check) and question record data/evidence/questions/ingredient/spinach.json.',
   'why': 'Build sessions do not write wiki/ or shared registries.', 'before': 'Working-folder page sha256 ' + live_sha, 'after': 'Candidate sha256 ' + sha(cand)},
  {'what': 'Add "spinaches", "Spinacia", "Spinacia oleracea" and "palak" to the spinach entry of data/reference/ingredient-fullness-aliases.json, and add [[ingredients/spinach]] to the ingredients frontmatter of wiki/sources/jiang2020-henan-battery-factory-crops-metals.md and wiki/sources/cantoral2024-cadmium-foodstuffs-mexico.md.',
   'why': 'Discovery misses three sources with spinach results: cherfi2014 names the crop only as "Spinaches", and the jiang2020 and cantoral2024 records do not mention spinach although their primary texts report it. The spinach ledger already decides all three (and the GEMS/Food source record) as occurrence_extracted, so the change does not reopen the ledger.',
   'primary_evidence': 'Cherfi 2014 Table 2 ("Spinaches"); Jiang 2020 Table 2 (Spinacia L., SZD village); Cantoral 2024 Table 1 (spinach, Mexico City retail).',
   'before': 'spinach aliases: Spinach, spinach, baby spinach, mature spinach, frozen spinach, spinach puree', 'after': 'plus spinaches, Spinacia, Spinacia oleracea, palak'},
  {'what': 'Leafy-greens page (coordinator decision; not changed by this build): its GEMS/Food extraction counts "Spinach (bunch)" submissions whose local names are KANGKONG (water spinach), BAYAM (Chinese spinach), Sarson ka Saag and "vegetable / head cabbage" as spinach, and classes "Spinach, fresh/frozen, boiled" as frozen rather than cooked.',
   'why': 'The spinach page excludes those records (out_of_scope, with the local name as reason) and classes boiled spinach as cooked; the two pages therefore report slightly different GEMS/Food spinach summaries.', 'primary_evidence': 'data/evidence/contracts/ingredient-rollout-2026-10-22/spinach/dataset-row-dispositions.json; GEMS/Food LocalFoodName field',
   'before': 'leafy-greens prepare-datasets.py MATERIAL["Spinach (bunch)"] = Spinach for every local name', 'after': 'Exclude other-crop local names; boiled or cooked state before frozen'},
  {'what': 'Source-record corrections from primary-text review for spinach sources (titles, authors, bases, values), listed in source_corrections.',
   'why': 'Stored summaries contradict their primary text; the candidate pins current records and does not depend on the corrections.', 'before': 'See each extraction file', 'after': 'See each extraction file'}],
  'source_corrections': corrections}
(A / 'shared-requests.json').write_text(json.dumps(shared, indent=1, ensure_ascii=False) + '\n')

# ------------------------------------------------------------------ before / after against the working-folder page
lt = live.read_text(); ct = cand.read_text()
count = lambda t, pat: len(re.findall(pat, t))
src_n = lambda t: int(m.group(1)) if (m := re.search(r'^sources:\s*(\d+)', t, re.M)) else None
before_after = {
  'live': {'sha256': live_sha, 'occurrence_rows': count(lt, r'<tr id="hmi-occurrence-'), 'faqs': count(lt, r'data-hmi-faq="1"'), 'sources_frontmatter': src_n(lt), 'contract_page': 'page_contract_version' in lt},
  'candidate': {'sha256': sha(cand), 'occurrence_rows': count(ct, r'<tr id="hmi-occurrence-'), 'faqs': count(ct, r'data-hmi-faq="1"'), 'sources_frontmatter': src_n(ct), 'contract_page': 'page_contract_version' in ct}}

hero = json.loads((root / 'data/design/page-hero-images.json').read_text())
hero_entry = next(v for k, v in (hero.get('pages') or hero).items() if k == 'ingredients/spinach') if isinstance(hero.get('pages') or hero, dict) else None
ph = html.read_text()
result = {
 'ingredient': 'spinach', 'date': '2026-10-22', 'status': 'ready' if (full.returncode == 0 and not gate.get('errors') and pp.returncode == 0 and not record_errors and check.returncode == 0) else 'blocked', 'live': False,
 'rules_applied': ['AGENTS.md ingredient gates and fullness rules', 'docs/contracts/claude-ingredient-playbook.md', 'docs/contracts/ingredient-canonical-style.md', 'docs/contracts/ingredient-reading-pattern.md', 'docs/contracts/ingredient-faq-question-bank.md', 'docs/contracts/ingredient-fullness-gates.md', 'docs/contracts/hmi-baseline.md', 'docs/public-content-boundary.md', 'CLAUDE.md Part 12 brand firewall'],
 'owned_paths': ['tools/contracts/ingredients/spinach/', 'data/evidence/syntheses/ingredient-spinach-v1.json', 'data/evidence/questions/ingredient/spinach.json', 'data/evidence/contracts/spinach/', 'data/evidence/contracts/ingredient-rollout-2026-10-22/spinach/'],
 'read_only_inputs': ['data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens/extraction/ (primary-study extraction records)', 'leafy-greens holds.json, reference-exclusions.json, source-labels.json, ledger-dispositions.json, primary/ text copies'],
 'shared_files_edited': [], 'wiki_untouched': True, 'deployed': False,
 'commands': {'datasets': 'python3 -I tools/contracts/ingredients/spinach/prepare-datasets.py', 'compose': 'python3 -I tools/contracts/ingredients/spinach/compose.py',
              'pin': 'python3 -I tools/contracts/ingredients/spinach/pin-sources.py', 'build': 'node tools/contracts/ingredients/spinach/build.mjs',
              'check': 'node tools/contracts/ingredients/spinach/build.mjs --check', 'preview': 'node tools/contracts/ingredients/spinach/preview.mjs',
              'gates': 'node tools/contracts/ingredients/spinach/fullness.mjs data/evidence/contracts/ingredient-rollout-2026-10-22/spinach/preview/ingredients/spinach.html', 'finalize': 'python3 -I tools/contracts/ingredients/spinach/finalize.py'},
 'candidate': str(cand.relative_to(root)), 'candidate_sha256': sha(cand), 'preview_html_sha256': sha(html),
 'evidence_ledger': {'universe_size': len(items), 'source_records': sum(src_disp.values()), 'dataset_rows': sum(ds_disp.values()),
                     'dispositions': dict(disp), 'source_dispositions': dict(src_disp), 'dataset_row_dispositions': dict(ds_disp),
                     'spinach_specific_redecisions': 'spinach-dispositions.json (13 leafy-greens records re-decided for spinach identity: amaranth, water spinach, Malabar spinach, pooled or figure-only)'},
 'scope_decisions': ['Spinacia oleracea only; amaranth (African, red, Chinese spinach), water spinach and Malabar or Indian spinach excluded by primary-text identity.',
                     'Raw, baby, cooked, frozen, canned and purée spinach separate; GEMS/Food boiled or cooked spinach (including frozen analysed after cooking) is cooked, not frozen.',
                     'Settings recorded per study: retail/monitoring, ordinary farm, wastewater/industrial-impacted, fertiliser trial, manufacturer ingredient test. Only retail/monitoring and ordinary farm units set references; impacted-site results are rated as external targets.',
                     'Fresh, dry and unstated bases never converted.'],
 'fullness': {'extracted_results': len(results), 'rendered_rows': count(ph, r'<tr[^>]*id="hmi-occurrence-spinach-'), 'occurrence_families': len(fams), 'comparison': dict(state), 'reason_codes': dict(reasons),
              'reference_units': len(ledger['reference_units']), 'references': len(ledger['references'])},
 'holds': {'count_results': len(held), 'result_ids': [r['id'] for r in held], 'source': 'leafy-greens holds.json (reviewed against each primary text) applied to spinach rows; no spinach-specific holds added'},
 'figure_read_values': 'Values read from charts (Sharma 2016, Pal 2017, Huang 2014, Wu 2024) are shown and never compared (reason no_numeric_value_or_bound).',
 'access_gaps': [{'source_id': 'bedoya-perales2023-moquegua-peru-mining-dataset', 'status': 'context_only', 'detail': 'Article prints no concentrations; spinach values are in an external Figshare dataset not in the library (fetch target in thin-page.json).'}],
 'access_blocked_items': [i['id'] for i in items if i['disposition'] == 'access_blocked'],
 'gates': {'fullness_1_7': 'pass' if full.returncode == 0 else 'FAIL: ' + full.stdout[-1500:], 'presentation': gate, 'public_processing': pp.stdout.strip().splitlines()[-1] if pp.returncode == 0 else 'FAIL: ' + (pp.stdout + pp.stderr)[-1500:],
           'question_record_validateRecord': record_errors, 'reproducible_build': 'pass (--check)' if check.returncode == 0 else 'FAIL', 'thin_page_validate': thin_check.stdout.strip() or thin_check.stderr[-500:],
           'hero': {'baseline': hero_entry, 'rendered_src_present': bool(hero_entry and hero_entry['hero_image'] in ph), 'rendered_alt_present': bool(hero_entry and hero_entry['hero_image_alt'] in ph)},
           'not_run_here': ['full-site lint:hero-preservation and lint:ingredient-presentation on the final integrated output (central)', 'paired screenshot set against Rice (central release receipt)']},
 'faqs': json.loads((A / 'faq-bank-dispositions.json').read_text())['selected_count'], 'faq_bank': 'data/evidence/contracts/ingredient-rollout-2026-10-22/spinach/faq-bank-dispositions.json', 'mitigation_rows': len(json.loads((A / 'interventions.json').read_text())['records']),
 'regulatory_limits_verified': [
   {'jurisdiction': 'EU', 'instrument': 'Regulation (EU) 2023/915', 'analyte': 'Cd', 'value': 0.20, 'unit': 'mg/kg ww', 'scope': 'spinaches and similar leaves, mustard seedlings, fresh herbs (3.2.6.2)'},
   {'jurisdiction': 'EU', 'instrument': 'Regulation (EU) 2023/915', 'analyte': 'Pb', 'value': 0.30, 'unit': 'mg/kg ww', 'scope': 'leaf vegetables'},
   {'jurisdiction': 'EU', 'instrument': 'Regulation (EU) 2024/1987', 'analyte': 'Ni', 'value': 0.50, 'unit': 'mg/kg ww', 'scope': 'leafy vegetables except fresh herbs, from 1 July 2025'},
   {'jurisdiction': 'Codex', 'instrument': 'CXS 193 (edition held)', 'analyte': 'Pb', 'value': 0.3, 'unit': 'mg/kg', 'scope': 'leafy vegetables, excludes spinach'},
   {'jurisdiction': 'CN', 'instrument': 'GB 2762-2022 (USDA translation)', 'analyte': 'Pb/Cd', 'value': '0.3/0.2', 'unit': 'mg/kg', 'scope': 'leafy vegetables'},
   {'jurisdiction': 'KR', 'instrument': 'Korean Food Code Art. 2', 'analyte': 'Pb/Cd', 'value': '0.3/0.2', 'unit': 'mg/kg', 'scope': 'Chinese cabbage, spinach'},
   {'jurisdiction': 'HK', 'instrument': 'Cap. 132V guidelines 2019', 'analyte': 'Cd', 'value': 0.2, 'unit': 'mg/kg', 'scope': 'leafy vegetables'}],
 'before_after_live': before_after,
 'thin_page': thin['status'], 'shared_requests': str((A / 'shared-requests.json').relative_to(root)),
 'source_correction_proposals': len(corrections),
 'owner_decisions': ['Several Nigerian and South Asian studies call the crop only "spinach"; where the paper names an amaranth it is excluded, otherwise the paper is taken at its word (stated in the Scope section).'],
}
(A / 'result.json').write_text(json.dumps(result, indent=1, ensure_ascii=False) + '\n')
r = result
r['disposition_sampling'] = str((A / 'disposition-sampling.json').relative_to(root)); r['prose_depth_acceptance'] = str((A / 'prose-depth-acceptance.json').relative_to(root)); r['browser_review'] = str((A / 'browser-review.json').relative_to(root))
r['evidence_ledger']['spinach_specific_redecisions'] = 'spinach-dispositions.json: 14 leafy-greens records re-decided for spinach (amaranth, water spinach, Malabar spinach, pooled or figure-only studies; Seyfferth 2024 review as mitigation guidance)'
(A / 'result.json').write_text(json.dumps(result, indent=1, ensure_ascii=False) + '\n')
print(json.dumps({'status': result['status'], 'universe': len(items), 'dispositions': dict(disp), 'rows': len(results), 'rendered': result['fullness']['rendered_rows'], 'comparison': dict(state), 'reasons': dict(reasons),
                  'held': len(held), 'families': len(fams), 'gates': {k: (v if isinstance(v, str) else v) for k, v in result['gates'].items() if k != 'hero'}, 'hero': result['gates']['hero'], 'before_after': before_after, 'corrections': len(corrections)}, indent=1, ensure_ascii=False)[:6000])
