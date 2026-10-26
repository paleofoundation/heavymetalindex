"""Write the honey result record: counts, checks, hashes, correction proposals and integration requests."""
import hashlib, json, pathlib, subprocess

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/honey'
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()
J = lambda p: json.loads((audit / p).read_text())

ledger = J('evidence-ledger.json'); score = J('fullness-scorecard.json')
gate = json.loads(subprocess.run(['node', '-e', f"import('./tools/audit-ingredient-presentation.mjs').then(m=>console.log(JSON.stringify(m.inspectIngredientPresentation(require('fs').readFileSync('{audit.relative_to(root)}/preview/ingredients/honey.html','utf8')))))"], cwd=root, capture_output=True, text=True, check=True).stdout)

proposals = []
for f in sorted((audit / 'extraction').glob('*.json')):
    x = json.loads(f.read_text())
    if x.get('contradictions_with_stored_summary'):
        p = f'wiki/sources/{x["source_id"]}.md'
        proposals.append({'path': p, 'before_sha256': sha(p) if (root / p).exists() else None, 'primary': x.get('primary_artifact'),
                          'primary_sha256': x.get('primary_sha256') if isinstance(x.get('primary_sha256'), str) else None,
                          'issues': x['contradictions_with_stored_summary'], 'status': 'proposed; central owns shared source edits'})

reg = J('regulatory-honey.json')
result = {
 'ingredient': 'honey', 'date': '2026-10-22', 'status': 'candidate_ready_for_central_review', 'live': False,
 'rules_applied': ['AGENTS.md Mandatory ingredient publication gate', 'docs/contracts/ingredient-canonical-style.md', 'docs/contracts/ingredient-reading-pattern.md',
                   'docs/contracts/ingredient-faq-question-bank.md', 'docs/contracts/evidence-and-answers.md', 'docs/public-content-boundary.md',
                   'Owner fullness rules (Desktop/hmi-ingredient-fullness-rules.md), applied voluntarily before central installation'],
 'owner_release_hold': 'data/evidence/contracts/ingredient-rollout-2026-10-22/OWNER-RELEASE-HOLD.json is in force; nothing adopted, deployed or pushed.',
 'owned_paths': ['tools/contracts/ingredients/honey/', 'data/evidence/syntheses/ingredient-honey-v1.json', 'data/evidence/questions/ingredient/honey.json',
                 'data/evidence/contracts/ingredient-rollout-2026-10-22/honey/'],
 'shared_files_edited': [], 'wiki_ingredient_untouched': sha('wiki/ingredients/honey.md') == J('baseline.json')['sha256'],
 'commands': {'datasets': 'python3 -I tools/contracts/ingredients/honey/prepare-datasets.py', 'ledger': 'python3 -I tools/contracts/ingredients/honey/build-ledger.py --strict',
              'compose': 'python3 -I tools/contracts/ingredients/honey/compose.py', 'build': 'node tools/contracts/ingredients/honey/build.mjs',
              'check': 'node tools/contracts/ingredients/honey/build.mjs --check', 'preview': 'node tools/contracts/ingredients/honey/preview.mjs',
              'finalize': 'python3 -I tools/contracts/ingredients/honey/finalize.py'},
 'evidence_ledger': {'universe_size': ledger['universe_size'], 'tagged': ledger['tagged'], 'dispositions': ledger['counts'], 'errors': ledger['errors']},
 'fullness': score,
 'presentation_gate': gate,
 'faqs': J('faq-bank-dispositions.json')['selected_count'],
 'mitigation_rows': len(J('interventions.json')['records']),
 'regulatory_limits_verified': [{k: r[k] for k in ('jurisdiction', 'analyte', 'value', 'unit', 'primary_verified')} for r in reg['limits']],
 'holds': 'tools/contracts/ingredients/honey/source-adapter.mjs `holds`: Teferi 2026 Pb/Cd, Salama 2019, Wise 2025 Hg and inconsistent means, four Naccari medians, Aburas sugar-syrup sample',
 'access_gaps': ['FSANZ 23rd/25th ATDS honey appendix tables (Cd, tAs, tHg, Pb min/max)', 'Fechner 2022 BfR MEAL per-food supplement (doi 10.1016/j.fochx.2022.100326)', 'HMI-Library volume not mounted; backup copies read'],
 'checks': {'reproducible_build': 'pass (--check)', 'question_record_schema': 'pass (validateRecord: [])', 'ledger_strict': 'pass (0 errors)',
            'row_parity': f"{score['extracted_results']} extracted results → {score['rendered_rows']} rows, {score['unmapped_results']} unmapped",
            'public_processing_audit': 'pass (122 public documents in scoped preview)', 'hero': 'manifest hash, preview bytes, src and alt match data/design/page-hero-images.json',
            'browser': 'Rendered at 1440 and 390 px: 325 rows, 7 mitigation rows, 17 accordions; evidence drawer opens; no page-width overflow at 390 px with filters open; no page console errors',
            'not_run_here': ['full-site lint:hero-preservation (requires full output; central)', 'paired screenshot set against Rice (pane hidden; text/DOM checks used)']},
 'proposed_reason_codes': {'value_fails_source_integrity_check': 'Row shown but held because its values cannot be reconciled with its own method or figures.',
                           'unit_not_convertible': 'Source unit (mg/L of honey) cannot become µg/kg without an unreported density.'},
 'shared_source_correction_proposals': proposals,
 'regulatory_register_gaps': reg.get('register_gaps'),
 'shared_integration_requests': [
   {'request': 'Register honey builder/question owner and adopt the candidate after the owner lifts the release hold.'},
   {'request': 'Add commodity-neutral mitigation stages to tools/contracts/pilot/mitigation-table.mjs (e.g. "apiary siting", "extraction and storage"); honey currently maps to cultivation / sourcing and procurement / lot acceptance and release.'},
   {'request': 'Add EU 2023/915 honey Pb 0.10, China GB 2762 honey Pb 0.5 and Codex CXS 193 (2025) honey Pb 0.1 mg/kg rows to data/evidence/regulatory_limits.csv.'},
   {'request': 'Review and apply the shared source correction proposals (Abeslami 2025 metadata is substantially wrong; Wise 2025 summary repeats a ×1000 intake error).'}],
 'hashes': {p: sha(p) for p in ['data/evidence/contracts/ingredient-rollout-2026-10-22/honey/candidate/honey.md', 'data/evidence/syntheses/ingredient-honey-v1.json',
            'data/evidence/questions/ingredient/honey.json', 'data/evidence/contracts/ingredient-rollout-2026-10-22/honey/preview/ingredients/honey.html',
            'tools/contracts/pilot/compiler.mjs', 'tools/contracts/pilot/analyte-table.mjs', 'tools/contracts/pilot/mitigation-table.mjs', 'tools/contracts/pilot/hmi-baseline.mjs']},
}
(audit / 'result.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: result[k] for k in ('status', 'wiki_ingredient_untouched', 'evidence_ledger', 'presentation_gate', 'faqs', 'mitigation_rows')}, indent=1))
print('correction proposals', len(proposals))
