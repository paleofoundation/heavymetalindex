"""Write the plantain result record: counts, gates, hashes, holds, access gaps, proposals and requests."""
import collections, hashlib, json, pathlib, subprocess

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/plantain'
rel = str(audit.relative_to(root))
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()
J = lambda p: json.loads((audit / p).read_text())

BROWSER = json.loads((audit / 'browser-check.json').read_text())['summary'] if (audit / 'browser-check.json').exists() else 'not run'
ledger = json.loads((root / 'data/evidence/contracts/plantain/evidence-ledger.json').read_text())
score = json.loads((root / 'data/evidence/contracts/plantain/fullness-scorecard.json').read_text())
html = f'{rel}/preview/ingredients/plantain.html'
gate = json.loads(subprocess.run(['node', '-e', f"import('./tools/audit-ingredient-presentation.mjs').then(m=>console.log(JSON.stringify(m.inspectIngredientPresentation(require('fs').readFileSync('{html}','utf8')))))"], cwd=root, capture_output=True, text=True, check=True).stdout)
valid = subprocess.run(['node', '-e', "import('./tools/contracts/validate.mjs').then(m=>console.log(JSON.stringify(m.validateRecord(JSON.parse(require('fs').readFileSync('data/evidence/questions/ingredient/plantain.json','utf8'))))))"], cwd=root, capture_output=True, text=True, check=True).stdout.strip()
full = J('fullness-gate.json')

states = collections.Counter(r['comparison']['state'] for r in ledger['results'])
reasons = collections.Counter(r['comparison'].get('reason_code') for r in ledger['results'] if r['comparison'].get('reason_code'))
items = collections.Counter(i['disposition'].split(':')[0] for i in ledger['items'])
src_items = {i['source_id']: i['disposition'] for i in ledger['items'] if i['id'].startswith('source:')}

proposals = []
for f in sorted((audit / 'extraction').glob('*.json')):
    x = json.loads(f.read_text())
    p = f'wiki/sources/{x["source_id"]}.md'
    if x.get('contradictions_with_stored_summary') and (root / p).exists():
        proposals.append({'path': p, 'before_sha256': sha(p), 'primary': x.get('primary_artifact'), 'primary_sha256': x.get('primary_sha256') if isinstance(x.get('primary_sha256'), str) else None,
                          'issues': x['contradictions_with_stored_summary'], 'status': 'proposed; central owns shared source edits'})

result = {
 'ingredient': 'plantain', 'date': '2026-10-22', 'status': 'candidate_ready_for_central_review', 'thin_status': 'thin', 'publishable': True, 'release_dependency': 'Central adoption of the three remaining proposed source records (proposed-sources/); Adjei-Mensah 2021 already adopted.', 'live': False,
 'rules_applied': ['docs/contracts/claude-ingredient-playbook.md (including Thin pages)', 'AGENTS.md Mandatory ingredient publication gate; Thin pages ledger', 'docs/contracts/ingredient-canonical-style.md',
                   'docs/contracts/ingredient-reading-pattern.md', 'docs/contracts/ingredient-faq-question-bank.md', 'docs/contracts/ingredient-fullness-gates.md', 'docs/contracts/evidence-and-answers.md', 'docs/public-content-boundary.md'],
 'owned_paths': ['tools/contracts/ingredients/plantain/', 'data/evidence/syntheses/ingredient-plantain-v1.json', 'data/evidence/questions/ingredient/plantain.json', 'data/evidence/contracts/plantain/', rel + '/'],
 'shared_files_edited': [], 'wiki_written': False, 'deployed': False,
 'before_after_live': {'before': 'No wiki/ingredients/plantain.md existed (baseline.json page_existed false; recorded new-page baseline frontmatter only).', 'after': f'{rel}/candidate/plantain.md (new page candidate, {score["rendered_rows"]} occurrence rows, {J("faq-bank-dispositions.json")["selected_count"]} FAQs, {gate["mitigation_rows"]} mitigation outcome rows from {len(J("interventions.json")["records"])} controls).'},
 'commands': {'datasets': 'python3 -I tools/contracts/ingredients/plantain/prepare-datasets.py', 'proposed_sources': 'python3 -I tools/contracts/ingredients/plantain/propose-sources.py',
              'compose': 'python3 -I tools/contracts/ingredients/plantain/compose.py', 'pin': 'python3 -I tools/contracts/ingredients/plantain/pin-sources.py',
              'build': 'node tools/contracts/ingredients/plantain/build.mjs', 'check': 'node tools/contracts/ingredients/plantain/build.mjs --check',
              'preview': 'node tools/contracts/ingredients/plantain/preview.mjs', 'fullness': f'node tools/contracts/ingredients/plantain/fullness.mjs {html}',
              'thin_page': 'node tools/contracts/ingredients/plantain/thin-page.mjs', 'finalize': 'python3 -I tools/contracts/ingredients/plantain/finalize.py'},
 'counts': {'rows': score['rendered_rows'], 'extracted_results': score['extracted_results'], 'rated': states.get('rated', 0), 'direct': states.get('direct', 0), 'bounded': states.get('bounded', 0), 'unavailable': states.get('unavailable', 0),
            'unavailable_reasons': dict(reasons), 'reference_units': len(ledger['reference_units']), 'references': len(ledger['references'])},
 'universe': {'items': score['universe_size'], 'source_records': score['source_records'], 'dataset_rows': score['dataset_rows'], 'ledger_items': len(ledger['items']), 'dispositions': dict(items), 'source_dispositions': src_items,
              'note': 'Universe = 2 source records + 265 GEMS/Food rows (224 ribwort-plantain herb rows out of scope; 16 May-export duplicates; 2 summary-index duplicates; 23 extracted). Ledger adds the extracted/decided sources outside the universe: 4 proposed records (2 from HMI-GAP batch-01), the access-blocked Atrato study, 3 cited regulations and one alias-reachable background mention.'},
 'library_text_search': {'scope': 'Full-text search of ~/HMI-Library-backup/heavy-metal-index-raw/markdown (23,260 papers) for plantain, Musa paradisiaca and cooking banana: 156 hits triaged.',
   'occurrence_found_without_record': ['adjeimensah2021 (FM_8591352; now verified against HMI-GAP batch-01 PDF)', 'borteysam2015 (FM_4555249)', 'orisakwe2012 (FM_3567425)', 'Amonoo-Neizer & Amekor (FM_1519647; bibliography unverifiable, not used)'],
   'not_used': {'ohiagu2020 (FM_7374184)': 'plantain leaves only', 'jayalal2019 (FM_6554924)': 'one ash plantain sample pooled into a vegetable category', 'honfo2022 (FM_9548346)': 'plantain flour proximates only; no metals', 'Plantago herb papers (e.g. FM_9132828)': 'different plant'},
   'pending_extractions': f'{rel}/extraction-pending/'},
 'hmi_gap_ingest_1_batch_01': {
   'order': 'HMI-GAP-INGEST-1 batch-01 (plantain part), relayed by the coordinating session; cassava-build owns the single PR.',
   'papers': [
     {'doi': '10.1016/j.toxrep.2021.11.001', 'source_id': 'adjeimensah2021-ghana-mining-home-processing-crops', 'pdf_sha256_matches_manifest': True, 'title_doi_match': True, 'used': True,
      'plantain_results': sum(1 for r in ledger['results'] if r['family_id'] == 'adjeimensah2021-ghana-mining-home-processing-crops'), 'controls': 4,
      'note': 'Table 4 (p. 1834) and Table 6 (p. 1835) re-checked against the PDF: all 32 plantain values agree. Cassava rows are extracted by cassava-build against the same shared record (one corpus record).'},
     {'doi': '10.1155/ijfo/7226409', 'source_id': 'mode2026-calcium-carbide-ripening-climacteric-fruits', 'pdf_sha256_matches_manifest': True, 'title_doi_match': True, 'used': True,
      'plantain_measured': 'Yes: Musa paradisiaca (voucher UDUH/ANS/0121) is a separate arm from banana and mango; only plantain rows are used.',
      'plantain_results': sum(1 for r in ledger['results'] if r['family_id'] == 'mode2026-calcium-carbide-ripening-climacteric-fruits'), 'controls': 1,
      'held': ['Plantain control lead 0.052 ± 0.021 mg/kg, printed identically to the mango control'],
      'note': 'Control total arsenic 1.64 mg/kg is far above all other plantain data; shown with that caveat and compared only within study.'}],
   'excluded': ['10.1016/j.envres.2024.119287 (retracted; cassava, not used anywhere)', '10.5620/eaht.2023005 handled by cassava-build (title/DOI verified by coordinator)'],
   'not_fetched_plantain': ['10.4314/nifoj.v25i2.50855', '10.9734/afsj/2019/v11i230057', '10.4314/jasem.v19i2.7', '10.22161/ijeab/2.4.23', '10.3923/rjes.2010.33.41', '10.69650/ahstr.2026.3769 (listed as already in corpus, but the file is missing from the library)']},
 'fullness': {'status': full['status'], 'gates': {k: v['status'] for k, v in full['gates'].items()}, 'scorecard': 'data/evidence/contracts/plantain/fullness-scorecard.json'},
 'presentation_gate': gate, 'presentation_gate_note': 'Rendered with the shared renderer; original hero (owner-supplied, registered 22 Oct 2026) present. The full-site lint:hero-preservation audit requires the complete site output (>= 2000 pages) and is a central check.',
 'public_processing_audit': (audit / 'public-boundary.log').read_text().strip(), 'question_record_validateRecord': valid,
 'reproducible_build': 'pass (build.mjs --check)',
 'browser': BROWSER,
 'faqs': J('faq-bank-dispositions.json')['selected_count'], 'faq_bank': 'faq-bank-dispositions.json',
 'mitigation_controls': len(J('interventions.json')['records']),
 'prose_acceptance': {
   'summary': 'Monitoring versus mining-area findings, with values and the Tarkwa counter-example; buyer priority stated.',
   'identity': 'Cooking banana scope; dessert banana, Plantago herb, mixed dishes and the unconfirmed Atrato taxon excluded with reasons.',
   'occurrence': 'Families, basis separation, why no HMI rating, holds and censoring.',
   'pathways': 'Mining rivers, soil transfer (Ni above 1), airborne arsenic hypothesis, peeled samples.',
   'variation': 'Analyte-specific lowest and highest observations with scope; descriptive minima distinguished from sourcing preferences; the two mining districts explained as unresolved.',
   'processing': 'Measured boiling/frying/roasting contrasts with values; concentration change, not removal; chips iAs.',
   'controls_tradeoffs': 'Stage-led table: cultivation (2 observational), home preparation (3 measured), lot release and procurement (2 regulatory).',
   'testing_procurement': 'Basis, LOQ, edible part and growing area; verified Codex/EU/Colombia fruit limits; EU banana category unconfirmed for plantain.',
   'product': 'Staple consumption context; no checkable exposure share; mining-river result versus limit.',
   'assessment': 'Search scope, proposed records, access gap and thinness stated.'},
 'regulatory_limits_verified': J('regulatory-plantain.json')['limits'],
 'holds': [{'id': h, 'reason': 'Digits scrambled in the only library copy; value cannot be verified against the paper.'} for h in ['borteysam2015 tAs max', 'borteysam2015 Cr median', 'borteysam2015 Cr max']],
 'access_gaps': ['Atrato basin study (doi 10.3390/ijerph20010435) Supplementary Table S3: access_blocked with dated mounted/raw/publisher/backup attempts and a retrieval request',
                 'Original PDFs of Adjei-Mensah 2021 and Bortey-Sam 2015 not in the library (text conversions only)',
                 'Dodo-Ikire plantain snack paper (doi 10.69650/ahstr.2026.3769) listed as downloaded but missing from the library'],
 'source_correction_proposals': proposals,
 'shared_requests': f'{rel}/shared-requests.json',
 'thin_page': f'{rel}/thin-page.json',
 'hashes': {p: sha(p) for p in [f'{rel}/candidate/plantain.md', 'data/evidence/syntheses/ingredient-plantain-v1.json', 'data/evidence/questions/ingredient/plantain.json', html,
            'data/evidence/contracts/plantain/evidence-ledger.json', 'data/evidence/contracts/plantain/fullness-scorecard.json', f'{rel}/thin-page.json', f'{rel}/shared-requests.json',
            'tools/contracts/pilot/compiler.mjs', 'tools/contracts/pilot/mitigation-table.mjs', 'tools/contracts/pilot/hmi-baseline.mjs']},
}
(audit / 'result.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: result[k] for k in ('status', 'counts', 'fullness', 'presentation_gate', 'question_record_validateRecord')}, indent=1))
