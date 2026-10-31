"""Write the cassava result and thin-page records: counts, checks, hashes, holds, correction proposals and requests."""
import hashlib, json, pathlib, subprocess, collections

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/cassava'
ledger_dir = root / 'data/evidence/contracts/cassava'
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()
J = lambda p: json.loads((audit / p).read_text())

ledger = json.loads((ledger_dir / 'evidence-ledger.json').read_text()); score = json.loads((ledger_dir / 'fullness-scorecard.json').read_text())
html = audit / 'preview/ingredients/cassava.html'
gate = json.loads(subprocess.run(['node', '-e', f"import('./tools/audit-ingredient-presentation.mjs').then(m=>console.log(JSON.stringify(m.inspectIngredientPresentation(require('fs').readFileSync('{html.relative_to(root)}','utf8')))))"], cwd=root, capture_output=True, text=True, check=True).stdout)
record_errors = json.loads(subprocess.run(['node', '-e', "import('./tools/contracts/validate.mjs').then(m=>console.log(JSON.stringify(m.validateRecord(JSON.parse(require('fs').readFileSync('data/evidence/questions/ingredient/cassava.json','utf8'))))))"], cwd=root, capture_output=True, text=True, check=True).stdout)

disp = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'])
states = collections.Counter(r['comparison']['state'] for r in ledger['results'])
per = collections.defaultdict(lambda: collections.Counter())
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
analytes = []
for a in ['Pb', 'Cd', 'tAs', 'iAs', 'tHg', 'Ni', 'Cr', 'Sn']:
    rs = [r for r in ledger['results'] if r['scope']['analyte'] == a]
    if not rs: continue
    analytes.append({'analyte': a, 'decision_relevant': a in ('Pb', 'Cd'), 'results': len(rs), 'reference_units': len(units_by[a]),
                     'families': len({r['family_id'] for r in rs}), 'rated': sum(r['comparison']['state'] == 'rated' for r in rs),
                     'note': {'Pb': 'Eligible references for root, flour, starch and tapioca; within-study cooked dried versus fresh contrast.',
                              'Cd': 'Eligible references for root, flour and tapioca; most monitoring medians are non-detect bounds that span categories.',
                              'tAs': 'References exist but nearly every result is a non-detect with a wide limit; Nigerian flour arsenic is held.'}.get(a, '')})
thin = {'slug': 'cassava', 'status': 'thin', 'assessed_at': '2026-10-22T16:00:00Z', 'universe_items': len(ledger['items']), 'occurrence_families': len(occ_families),
 'analytes': analytes, 'reasons': ['access_blocked_evidence'],
 'fetch_targets': [
  {'what': 'Caicedo-Rivas, Salas-Moreno & Marrugo-Negrete 2023, IJERPH 20:435, Supplementary Table S3 (Manihot esculenta Hg, Cd, As, Pb concentrations in four Atrato municipalities)', 'why': 'Only cassava concentrations from Colombia in the library; the main text gives only exposure quotients that cannot be reproduced. Would add a fresh-root family for Cd and Pb.', 'where': 'MDPI open-access supplementary materials, doi 10.3390/ijerph20010435', 'priority': 'high'},
  {'what': 'Sub-Saharan Africa Total Diet Study (FAO/WHO/ANSES, Benin, Cameroon, Mali, Nigeria; 2017–2021) results for cassava, gari, attiéké, fufu and cassava flour', 'why': 'The largest as-eaten dataset for cassava foods where cassava is a staple; would add lead and cadmium families for gari, fufu and flour, which now rest on single vendor samples.', 'where': 'FAO/WHO/ANSES SSA-TDS reports and associated journal articles; search "Sub-Saharan Africa Total Diet Study cassava lead cadmium"', 'priority': 'high'},
  {'what': 'Nigerian cassava field and market surveys cited in reviews: Emurotu & Onianwa 2017 (Environ Syst Res 6:21, Kogi State crops); Osakwe & Okolie (J Appl Sci Environ Manage, Delta State soils and cassava); Anukwuorji, Nwankwo & Eze 2020 (Environ Monit Assess, cassava chips, doi 10.1007/s10661-020-8142-4, verify first)', 'why': 'Independent root and chip families with growing locations; would add field origin comparisons and test whether the high review-quoted values are real.', 'where': 'Publisher records; verify identity before retrieval (review citations are unreliable)', 'priority': 'medium'},
  {'what': 'Brazilian and Latin American monitoring of farinha de mandioca, tapioca and polvilho (ANVISA / MAPA PNCRC)', 'why': 'Cassava flour is a staple in Brazil; would add an as-sold flour family outside Nigeria and GEMS/Food.', 'where': 'ANVISA and MAPA residue/contaminant monitoring reports; search "farinha de mandioca chumbo cádmio"', 'priority': 'medium'},
  {'what': 'Paywalled cassava mining-area papers from HMI-GAP-INGEST-1 batch-01: Bull Environ Contam Toxicol 10.1007/s00128-014-1315-5 (Tanzania Hg, As) and 10.1007/s00128-002-0051-4 (Dunkwa-on-Offin Hg); Environ Sci Pollut Res 10.1007/s11356-020-08285-3 (Hg and gold in cassava); J Food Compos Anal 10.1016/j.jfca.2015.09.015 (lead in gari, Ondo State)', 'why': 'Would add independent mining-area root families and the only gari lead survey with many samples.', 'where': 'Publisher access or institutional copies (manifest status PAYWALLED)', 'priority': 'high'},
  {'what': 'Fetch-failed open papers from batch-01: J Appl Sci Environ Manage 10.4314/jasem.v19i2.7 (cassava and plantain, Khana, Rivers State); Asian Food Sci J 10.9734/afsj/2019/v11i230057 (cassava flour, Port Harcourt markets); Res J Environ Sci 10.3923/rjes.2010.33.41 (cassava tubers near petroleum activity)', 'why': 'Open-access Nigerian root and flour data that would add market and growing-area families.', 'where': 'AJOL, Journal AFSJ and SciAlert landing pages (automated fetch failed)', 'priority': 'medium'},
  {'what': 'Studies measuring metals in cassava peel versus flesh, or before and after peeling, fermentation or gari roasting', 'why': 'No source in the library measures peeling or traditional processing, so the peeling and fermentation questions remain unanswered.', 'where': 'Literature search: "cassava peel flesh cadmium lead", "gari processing heavy metals", "fufu fermentation lead"', 'priority': 'medium'}],
 'publishable': True, 'publishable_reason': 'Every gate passes; the page states its limits: monitoring data dominate, literature families are small and one exposure study lacks its concentrations.'}
(audit / 'thin-page.json').write_text(json.dumps(thin, indent=2, ensure_ascii=False) + '\n')
thin_errors = json.loads(subprocess.run(['node', '-e', f"import('./tools/contracts/build-thin-pages-ledger.mjs').then(m=>console.log(JSON.stringify(m.validateThinPage(JSON.parse(require('fs').readFileSync('{(audit / 'thin-page.json').relative_to(root)}','utf8')),'thin-page.json'))))"], cwd=root, capture_output=True, text=True, check=True).stdout.strip().splitlines()[-1])

result = {
 'ingredient': 'cassava', 'date': '2026-10-22', 'status': 'candidate_ready_for_central_review', 'live': False, 'new_page': True,
 'owned_paths': ['tools/contracts/ingredients/cassava/', 'data/evidence/syntheses/ingredient-cassava-v1.json', 'data/evidence/questions/ingredient/cassava.json',
                 'data/evidence/contracts/cassava/', 'data/evidence/contracts/ingredient-rollout-2026-10-22/cassava/'],
 'shared_files_edited': [], 'wiki_ingredient_absent': not (root / 'wiki/ingredients/cassava.md').exists(),
 'commands': {'datasets': 'python3 -I tools/contracts/ingredients/cassava/prepare-datasets.py', 'compose': 'python3 -I tools/contracts/ingredients/cassava/compose.py',
              'pin': 'python3 -I tools/contracts/ingredients/cassava/pin-sources.py', 'build': 'node tools/contracts/ingredients/cassava/build.mjs',
              'check': 'node tools/contracts/ingredients/cassava/build.mjs --check', 'preview': 'node tools/contracts/ingredients/cassava/preview.mjs',
              'gates': 'node tools/contracts/ingredients/cassava/fullness.mjs data/evidence/contracts/ingredient-rollout-2026-10-22/cassava/preview/ingredients/cassava.html',
              'finalize': 'python3 -I tools/contracts/ingredients/cassava/finalize.py'},
 'counts': {'ledger_items': len(ledger['items']), 'dispositions': dict(disp), 'results': len(ledger['results']), 'comparison_states': dict(states),
            'per_analyte': {a: dict(c) for a, c in per.items()}, 'reference_units': len(ledger['reference_units']), 'references': len(ledger['references']),
            'occurrence_families': occ_families},
 'fullness_gates': 'pass (1–7) on preview/ingredients/cassava.html',
 'presentation_gate': gate, 'question_record_errors': record_errors, 'thin_page': {'status': thin['status'], 'validate_errors': thin_errors},
 'faqs': J('faq-bank-dispositions.json')['selected_count'], 'mitigation_rows': len(J('interventions.json')['records']),
 'regulatory_limits_verified': [
   {'jurisdiction': 'EU', 'analyte': 'Pb', 'value': '0.10 mg/kg wet weight', 'scope': 'root and tuber vegetables (3.1.2.1)', 'primary': 'EU_2023R0915_consolidated.pdf Annex I 3.1.2.1'},
   {'jurisdiction': 'EU', 'analyte': 'Cd', 'value': '0.050 mg/kg wet weight', 'scope': 'tropical roots and tubers (3.2.2.7)', 'primary': 'EU_2023R0915_consolidated.pdf Annex I 3.2.2.7'},
   {'jurisdiction': 'EU', 'analyte': 'Ni', 'value': '0.90 mg/kg wet weight', 'scope': 'root and tuber vegetables and bulb vegetables (3.6.2)', 'primary': 'EU_2023R0915_consolidated.pdf Annex I 3.6.2'},
   {'jurisdiction': 'Codex', 'analyte': 'Pb', 'value': '0.1 mg/kg', 'scope': 'root and tuber vegetables', 'primary': 'CXS_193e.pdf p. 63'},
   {'jurisdiction': 'Codex', 'analyte': 'Cd', 'value': '0.1 mg/kg', 'scope': 'root and tuber vegetables', 'primary': 'CXS_193e.pdf p. 60'}],
 'holds': ['Fobi 2025 arsenic (AAS, no LOD): 8 rows', 'Enyoh 2023 garri Cr and Ni (implausible XRF values): 9 rows', 'Adjei-Mensah 2021 cadmium (LOD printed 0.0000 ppb): 8 rows; Obuasi roasted lead (contradicts own tables): 1 row', 'Albishi 2026 arsenic (AAS without hydride, no LOD/CRM): 13 rows', 'Jacob 2023 (bhunia2023 record) arsenic (flame AAS, no LOD/CRM): 7 rows', 'Iyabo 2015 garri cadmium (self-contradictory cell): 1 row',
           'GEMS/Food: 5 tapioca mercury records with LOQ 3,330 µg/kg (unit-scale mismatch) kept as context, not summarized'],
 'access_gaps': ['Caicedo-Rivas 2023 Supplementary Table S3 (concentrations); main text used for exposure only', 'Batch-01 paywalled and fetch-failed cassava papers (see thin-page.json)'],
 'batch_01': {'order': 'HMI-GAP-INGEST-1 batch-01 (cassava part)', 'verified': 'sha256 and page-1 title/DOI match manifest for all 3 cassava PDFs and the four-crop Toxicology Reports PDF', 'excluded': ['10.1016/j.envres.2024.119287 (retracted; not used)'],
   'doi_note': '10.5620/eaht.2023005 printed DOI and title match the PDF; Crossref misresolves it, so the record also cites PMC10195672',
   'proposed_source_records': 'data/evidence/contracts/ingredient-rollout-2026-10-22/cassava/proposed-sources/'},
 'before_after': {'before': 'No cassava page exists (live or working folder).', 'after': f"{len(ledger['results'])} occurrence rows ({dict(states)}), {len(J('interventions.json')['records'])} mitigation rows, {J('faq-bank-dispositions.json')['selected_count']} FAQs, 12 sections."},
 'checks': {'reproducible_build': 'pass (--check)', 'public_processing_audit': 'pass (scoped preview)', 'hero': 'preview hero bytes sha256 1a89def3… equal data/design/page-hero-images.json; src and alt as assigned; image loads at 1024 and 375 px',
            'browser': 'Preview served locally: no horizontal overflow at 375 px; occurrence and mitigation tables render; evidence drawer opens and closes',
            'not_run_here': ['full-site lint:hero-preservation (needs full output; central)', 'paired screenshot set against Rice (central release acceptance)']},
 'shared_source_correction_proposals': proposals,
 'shared_requests': 'data/evidence/contracts/ingredient-rollout-2026-10-22/cassava/shared-requests.json',
 'hashes': {p: sha(p) for p in ['data/evidence/contracts/ingredient-rollout-2026-10-22/cassava/candidate/cassava.md', 'data/evidence/syntheses/ingredient-cassava-v1.json',
            'data/evidence/questions/ingredient/cassava.json', 'data/evidence/contracts/ingredient-rollout-2026-10-22/cassava/preview/ingredients/cassava.html',
            'data/evidence/contracts/cassava/evidence-ledger.json', 'data/evidence/contracts/cassava/fullness-scorecard.json',
            'tools/contracts/pilot/compiler.mjs', 'tools/contracts/pilot/analyte-table.mjs', 'tools/contracts/pilot/mitigation-table.mjs', 'tools/contracts/pilot/hmi-baseline.mjs']},
}
(audit / 'result.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: result[k] for k in ('status', 'wiki_ingredient_absent', 'presentation_gate', 'question_record_errors', 'thin_page', 'faqs', 'mitigation_rows')}, indent=1))
print(json.dumps(result['counts'], indent=0)[:2500]); print('proposals', len(proposals))
