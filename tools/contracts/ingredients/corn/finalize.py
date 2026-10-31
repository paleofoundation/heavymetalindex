"""Write the corn result and thin-page records: counts, checks, hashes, holds, correction proposals and requests."""
import hashlib, json, pathlib, subprocess, collections

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/corn'
ledger_dir = root / 'data/evidence/contracts/corn'
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()
J = lambda p: json.loads((audit / p).read_text())
node = lambda js: json.loads(subprocess.run(['node', '-e', js], cwd=root, capture_output=True, text=True, check=True).stdout.strip().splitlines()[-1])

ledger = json.loads((ledger_dir / 'evidence-ledger.json').read_text()); score = json.loads((ledger_dir / 'fullness-scorecard.json').read_text())
html = 'data/evidence/contracts/ingredient-rollout-2026-10-22/corn/preview/ingredients/corn.html'
gate = node(f"import('./tools/audit-ingredient-presentation.mjs').then(m=>console.log(JSON.stringify(m.inspectIngredientPresentation(require('fs').readFileSync('{html}','utf8')))))")
record_errors = node("import('./tools/contracts/validate.mjs').then(m=>console.log(JSON.stringify(m.validateRecord(JSON.parse(require('fs').readFileSync('data/evidence/questions/ingredient/corn.json','utf8'))))))")

disp = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'])
src_disp = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'] if i['id'].startswith('source:'))
states = collections.Counter(r['comparison']['state'] for r in ledger['results'])
per = collections.defaultdict(collections.Counter)
for r in ledger['results']:
    per[r['scope']['analyte']][r['comparison']['state']] += 1
    if r['comparison'].get('reason_code'): per[r['scope']['analyte']]['reason:' + r['comparison']['reason_code']] += 1

proposals = []
for f in sorted((audit / 'extraction').glob('*.json')):
    x = json.loads(f.read_text())
    if x.get('contradictions_with_stored_summary'):
        p = f'wiki/sources/{x["source_id"]}.md'
        proposals.append({'path': p, 'before_sha256': sha(p) if (root / p).exists() else None, 'primary': x.get('primary_artifact'),
                          'primary_sha256': x.get('primary_sha256') if isinstance(x.get('primary_sha256'), str) else None,
                          'issues': x['contradictions_with_stored_summary'], 'status': 'proposed; central owns shared source edits'})

occ_families = sorted({r['family_id'] for r in ledger['results']})
units_by = collections.defaultdict(list)
for u in ledger['reference_units']: units_by[u['scope']['analyte']].append(u)
notes = {'Pb': 'Multi-unit GEMS/Food references for maize grain, sweet corn and cooked sweet corn (with FDA composites); within-study site contrasts (cement plant, wastewater, Moquegua districts); most monitoring medians are non-detect bounds that span categories.',
         'Cd': 'Grain reference pools GEMS/Food and Sri Lankan farm medians; cooked sweet corn pools GEMS/Food and FDA; Chinese and Burkina field surveys add dry-weight or unstated-basis contrasts.',
         'tAs': 'GEMS/Food references for grain and sweet corn; only 12 inorganic arsenic results for maize; field arsenic depends on local soil and water.',
         'tHg': 'GEMS/Food grain and sweet corn references; distance gradient from coal-fired power plants gives within-study contrasts.'}
analytes = []
for a in ['Pb', 'Cd', 'tAs', 'iAs', 'tHg', 'Ni', 'Cr', 'Al', 'Sn', 'U']:
    rs = [r for r in ledger['results'] if r['scope']['analyte'] == a]
    if not rs: continue
    analytes.append({'analyte': a, 'decision_relevant': a in ('Pb', 'Cd', 'tAs', 'tHg'), 'results': len(rs), 'reference_units': len(units_by[a]),
                     'families': len({r['family_id'] for r in rs}), 'rated': sum(r['comparison']['state'] == 'rated' for r in rs),
                     'direct': sum(r['comparison']['state'] == 'direct' for r in rs), 'note': notes.get(a, '')})
thin = {'slug': 'corn', 'status': 'adequate', 'assessed_at': '2026-10-22T19:00:00Z', 'universe_items': len(ledger['items']), 'occurrence_families': len(occ_families),
 'analytes': analytes, 'reasons': [],
 'assessment': 'Thirty-two occurrence families (WHO GEMS/Food, FDA TDS and 30 literature sources). Every decision-relevant analyte (Pb, Cd, total As, total Hg) has an eligible HMI reference of at least four units for maize grain and for sweet corn, and within-study contrasts; lower-contamination comparisons by form, reporting region, origin label and period are possible. The two access-blocked records are Health Canada diaper-rash monographs, not eligible corn evidence, so access_blocked_evidence does not apply.',
 'fetch_targets': [
  {'what': 'Inorganic arsenic in maize grain (speciated surveys, e.g. EFSA or national monitoring with As(III)+As(V))', 'why': 'Only 12 speciated maize results exist (2 detected); would let the page answer the inorganic arsenic question for a staple grain.', 'where': 'EFSA chronic dietary exposure to inorganic arsenic (2021) data annex; national monitoring; literature search "inorganic arsenic maize grain speciation"', 'priority': 'medium'},
  {'what': 'Origin-linked maize grain monitoring from the Americas and Africa (e.g. USDA/FDA grain surveys, Codex CCCF lead-in-cereals data calls, Sub-Saharan Africa Total Diet Study)', 'why': 'GEMS/Food maize grain results are mostly European and Western Pacific; producing-country comparisons are not possible from reporting regions.', 'where': 'Codex CCCF working documents on lead and cadmium in cereals; FAO/WHO SSA-TDS; USDA GIPSA/AMS reports', 'priority': 'medium'},
  {'what': 'Primary maize-grain surveys cited in reviews (Hussain 2019 Table 3: Greece, Ethiopia, Nigeria; Ali 2022 meta-analysis primaries Asgari & Cornelis 2015, Farahat 2017; maize studies listed by Hao 2024)', 'why': 'Would add independent grain families from ordinary and wastewater-irrigated fields that the library holds only as re-quoted values.', 'where': 'Reference lists of hussain2019-plant-food-heavy-metal-review, ali2022-lead-wastewater-crops-meta and hao2024-amf-arsenic-plants-meta-analysis', 'priority': 'low'},
  {'what': 'Health Canada Diaper Rash Products Monograph (two source records)', 'why': 'Closes the two access-blocked ledger items with a content-based exclusion; not expected to contain corn data.', 'where': 'https://webprod.hc-sc.gc.ca/nhpid-bdipsn/dbImages/mono_diaper-rash-products_english.pdf', 'priority': 'low'}],
 'publishable': True, 'publishable_reason': 'Every gate passes; hero artwork is preserved; the page states its limits (most monitoring results below reporting limits; field surveys differ in basis; several held values).'}
(audit / 'thin-page.json').write_text(json.dumps(thin, indent=2, ensure_ascii=False) + '\n')
thin_errors = node("import('./tools/contracts/build-thin-pages-ledger.mjs').then(m=>console.log(JSON.stringify(m.validateThinPage(JSON.parse(require('fs').readFileSync('data/evidence/contracts/ingredient-rollout-2026-10-22/corn/thin-page.json','utf8')),'thin-page.json'))))")

holds = collections.Counter()
occ = [r for r in ledger['results'] if r['comparison'].get('reason_code') == 'value_fails_source_integrity_check']
for r in occ: holds[r['family_id']] += 1
gx = J('extraction/who-gemsfood-heavy-metal-contaminants.json')
baseline = J('baseline.json')
result = {
 'ingredient': 'corn', 'date': '2026-10-22', 'status': 'candidate_ready_for_central_review', 'live': True, 'new_page': False,
 'owned_paths': ['tools/contracts/ingredients/corn/', 'data/evidence/syntheses/ingredient-corn-v1.json', 'data/evidence/questions/ingredient/corn.json',
                 'data/evidence/contracts/corn/', 'data/evidence/contracts/ingredient-rollout-2026-10-22/corn/'],
 'shared_files_edited': [], 'wiki_ingredient_unchanged': sha('wiki/ingredients/corn.md') == baseline['sha256'],
 'commands': {'all': 'sh tools/contracts/ingredients/corn/run-all.sh', 'universe': 'node tools/contracts/ingredients/corn/dump-universe.mjs',
              'datasets': 'python3 -I tools/contracts/ingredients/corn/prepare-datasets.py', 'aggregate': 'python3 -I tools/contracts/ingredients/corn/aggregate-samples.py',
              'compose': 'python3 -I tools/contracts/ingredients/corn/compose.py', 'pin': 'python3 -I tools/contracts/ingredients/corn/pin-sources.py',
              'build': 'node tools/contracts/ingredients/corn/build.mjs', 'check': 'node tools/contracts/ingredients/corn/build.mjs --check',
              'preview': 'node tools/contracts/ingredients/corn/preview.mjs', 'gates': f'node tools/contracts/ingredients/corn/fullness.mjs {html}',
              'public_processing': 'node --import tsx tools/audit-public-processing.mjs --output data/evidence/contracts/ingredient-rollout-2026-10-22/corn/preview',
              'finalize': 'python3 -I tools/contracts/ingredients/corn/finalize.py'},
 'counts': {'ledger_items': len(ledger['items']), 'dispositions': dict(disp), 'source_record_dispositions': dict(src_disp), 'results': len(ledger['results']), 'comparison_states': dict(states),
            'per_analyte': {a: dict(c) for a, c in per.items()}, 'reference_units': len(ledger['reference_units']), 'references': len(ledger['references']),
            'occurrence_families': occ_families, 'gems_records_summarized': gx['study']['n_total'], 'gems_held_for_value_review': len(gx['held_for_value_review'])},
 'fullness_gates': 'pass (1–7) on preview/ingredients/corn.html',
 'presentation_gate': gate, 'question_record_errors': record_errors, 'thin_page': {'status': thin['status'], 'validate_errors': thin_errors},
 'faqs': J('faq-bank-dispositions.json')['selected_count'], 'mitigation_rows': len(J('interventions.json')['records']),
 'regulatory_limits_verified': 'regulatory-corn.json (46 entries read from primary text; EU 2023/915 sweetcorn and cereal rows re-checked against the consolidated PDF)',
 'holds': dict(holds),
 'access_gaps': ['healthcanada2024-diaper-rash-products-monograph and healthcanada2024-nnhpd-diaper-rash-products-monograph: no file on the mounted library, raw/ or backup (unrelated to corn)',
                 'china2022-gb-2762-contaminants-original: declared raw path absent; read from the copy recovered into data/evidence/contracts/fish/fulltext-correction/recovered-primary/'],
 'before_after': {'before': f"Live legacy page (wiki/ingredients/corn.md, sha256 {baseline['sha256'][:12]}…): stub overview, contamination_profile typical/high-percentile cells, FDA TDS food 54 and five literature citations per analyte.",
                  'after': f"{len(ledger['results'])} occurrence rows ({dict(states)}), {len(J('interventions.json')['records'])} mitigation rows, {J('faq-bank-dispositions.json')['selected_count']} FAQs, 12 sections, maize grain and sweet corn kept separate."},
 'checks': {'reproducible_build': 'pass (--check)', 'public_processing_audit': 'pass (scoped preview)',
            'hero': 'preview hero /static/heroes/corn-flakes-grits-tortilla-cornbread.webp sha256 09154fb3… equals data/design/page-hero-images.json; src and alt as assigned; image loads (naturalWidth 2164) at desktop and 375 px',
            'browser': 'Preview served locally: no horizontal overflow at 375 px (scrollWidth 375); 525 occurrence rows render; comparison drawer opens and closes',
            'not_run_here': ['full-site lint:hero-preservation (needs full output; central)', 'paired screenshot set against Rice (central release acceptance)']},
 'shared_source_correction_proposals': proposals,
 'shared_requests': 'data/evidence/contracts/ingredient-rollout-2026-10-22/corn/shared-requests.json',
 'hashes': {p: sha(p) for p in ['data/evidence/contracts/ingredient-rollout-2026-10-22/corn/candidate/corn.md', 'data/evidence/syntheses/ingredient-corn-v1.json',
            'data/evidence/questions/ingredient/corn.json', html, 'data/evidence/contracts/corn/evidence-ledger.json', 'data/evidence/contracts/corn/fullness-scorecard.json',
            'tools/contracts/pilot/compiler.mjs', 'tools/contracts/pilot/analyte-table.mjs', 'tools/contracts/pilot/mitigation-table.mjs', 'tools/contracts/pilot/hmi-baseline.mjs']},
}
(audit / 'result.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: result[k] for k in ('status', 'wiki_ingredient_unchanged', 'presentation_gate', 'question_record_errors', 'thin_page', 'faqs', 'mitigation_rows', 'holds')}, indent=1))
print(json.dumps(result['counts'], indent=0)[:3000]); print('proposals', len(proposals))
