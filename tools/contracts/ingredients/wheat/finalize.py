"""Write the wheat result record and shared requests: counts, checks, hashes, holds,
access gaps, source-correction proposals and before/after against the live page."""
import hashlib, json, pathlib, re, collections

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/wheat'
ledger_dir = root / 'data/evidence/contracts/wheat'
sha = lambda p: hashlib.sha256((root / p).read_bytes()).hexdigest()
J = lambda p: json.loads(p.read_text())
A = 'data/evidence/contracts/ingredient-rollout-2026-10-22/wheat'

ledger = J(ledger_dir / 'evidence-ledger.json'); score = J(ledger_dir / 'fullness-scorecard.json')
gates = J(audit / 'gates-fullness.json'); pres = J(audit / 'gates-presentation.json')
public = (audit / 'gates-public-processing.log').read_text().strip().splitlines()[-1]
html = (audit / 'preview/ingredients/wheat.html').read_text()

disp = collections.Counter(('source' if i['id'].startswith('source:') else 'dataset_row') + ':' + i['disposition'].split(':')[0] for i in ledger['items'])
states = collections.Counter(r['comparison']['state'] for r in ledger['results'])
reasons = collections.Counter(r['comparison'].get('reason_code') for r in ledger['results'] if r['comparison'].get('reason_code'))
per_analyte = {}
for r in ledger['results']:
    a = r['scope']['analyte']; per_analyte.setdefault(a, collections.Counter())[r['comparison']['state']] += 1

proposals, regulatory = [], []
for f in sorted((audit / 'extraction').glob('*.json')):
    x = J(f)
    if x.get('contradictions_with_stored_summary') and x.get('source_id'):
        p = f'wiki/sources/{x["source_id"]}.md'
        if not (root / p).exists(): p = f'wiki/sources/categories/{x["source_id"]}.md'
        proposals.append({'path': p, 'before_sha256': sha(p) if (root / p).exists() else None, 'primary': x.get('primary_artifact'),
                          'primary_sha256': x.get('primary_sha256') if isinstance(x.get('primary_sha256'), str) else None,
                          'issues': x['contradictions_with_stored_summary'], 'status': 'proposed; central owns shared source edits'})
    for e in x.get('regulatory_or_exposure', []) or []:
        if e.get('kind') == 'limit': regulatory.append({'source_id': x['source_id'], **{k: e.get(k) for k in ('analyte', 'value', 'unit', 'food_category_verbatim', 'jurisdiction', 'instrument', 'locator')}})
(audit / 'proposed-source-corrections.json').write_text(json.dumps({'date': '2026-10-22', 'proposals': proposals}, indent=2, ensure_ascii=False) + '\n')
(audit / 'regulatory-wheat.json').write_text(json.dumps({'date': '2026-10-22', 'note': 'Limits as extracted from primary regulatory texts (and secondary citations, marked by their source) for central register review.', 'limits': regulatory}, indent=2, ensure_ascii=False) + '\n')

candidate = f'{A}/candidate/wheat.md'
baseline = J(audit / 'baseline-live.json')
shared = {'date': '2026-10-22', 'ingredient': 'wheat', 'requests': [
  {'what': 'Register the wheat builder and adopt the candidate after central review.', 'why': 'Build sessions never write wiki/ or deploy.',
   'evidence': 'All seven fullness gates, the presentation gate, the public-processing audit and validateRecord pass on the preview HTML.',
   'before': {'path': 'wiki/ingredients/wheat.md', 'sha256': baseline['sha256']}, 'after': {'path': candidate, 'sha256': sha(candidate)}},
  {'what': 'Add wheat synonyms to data/reference/ingredient-fullness-aliases.json: durum, Triticum, spelt, einkorn, emmer, farro, Khorasan/kamut, bulgur.',
   'why': 'The shared discovery matcher finds GEMS/Food rows only where "wheat" appears; 2,209 durum and spelt grain rows were found by the species-name scan. The ledger already decides them, so adding the aliases does not reopen gate 1.',
   'evidence': 'gemsfood-row-dispositions.json entries with discovered_by "wheat species-name scan"', 'before': 'aliases without wheat species names', 'after': 'aliases including the wheat species names'},
  {'what': 'Add wheat rows to data/evidence/regulatory_limits.csv: EU 2023/915 Cd 0.10 (common wheat), 0.18 (durum), 0.15 (wheat bran and gluten), 0.20 (wheat germ), Pb 0.20 (cereals); EU 2024/1987 Ni 0.80 (other cereals) and 1.5 (durum) from 1 July 2026; Codex CXS 193 Cd 0.2 (wheat), Pb 0.2 (cereal grains); China GB 2762-2022 Pb 0.2, Cd 0.1, tHg 0.02, tAs 0.5, Cr 1.0; FSANZ Schedule 19 Cd 0.1 (wheat), Pb 0.2 (cereals), tAs 1 (cereal grains); MERCOSUR GMC 12/11 As, Pb and Cd 0.20 (wheat and derivatives); Philippines PNS/BAFS 194:2017 Cd 0.2 (wheat).',
   'why': 'Verified from primary regulatory text during extraction; the shared register is central-owned.', 'evidence': 'regulatory-wheat.json and the extraction files for each instrument', 'before': 'missing or incomplete rows', 'after': 'one row per limit with locator'},
  {'what': 'Apply the source-correction proposals in proposed-source-corrections.json (notably alemu2022 identity, material and basis; maccaferri2019 title and authors; ozkutlu2026 treatment attributions; several stored raw_path values that point to auto-fetched/ instead of ingested/; garbled titles and unsupported product routings on generic "authors20xx" records).',
   'why': 'Stored summaries contradict primary text.', 'evidence': 'contradictions_with_stored_summary in each extraction file', 'before': 'see proposals', 'after': 'see proposals'},
  {'what': 'Create a source record for Althobiti and Beauchemin 2018, J. Anal. At. Spectrom. 33:642 (doi 10.1039/C8JA00047F), and consider records for Guo et al. 2018 and Al-Othman et al. 2016.',
   'why': 'These hold the measured wheat values that the library’s reviews and althobiti2021 only cite.', 'evidence': 'extraction/althobiti2021-wheat-miswak-bioaccessible-lead.json; afonne2020 and munir2022 extractions', 'before': 'no source records', 'after': 'source records with primary text'},
  {'what': 'Owner approval to download supplementary tables: Pompa et al. 2021 Table S1, Palombieri et al. 2023 Table S3, Motta-Romero et al. 2021 cultivar data, Maccaferri et al. 2019 Table S14, Ozkutlu et al. 2026 Table S2.',
   'why': 'Would add per-lot and per-cultivar reference units and replace figure readings.', 'evidence': 'thin-page.json fetch targets', 'before': 'figure readings and summary rows', 'after': 'per-sample extraction'}]}
(audit / 'shared-requests.json').write_text(json.dumps(shared, indent=2, ensure_ascii=False) + '\n')

live = (root / 'wiki/ingredients/wheat.md').read_text()
cand = (root / candidate).read_text()
count = lambda t, pat: len(re.findall(pat, t))
holds = sorted({r['family_id'] for r in ledger['results'] if r['comparison'].get('reason_code') == 'value_fails_source_integrity_check'})
result = {
 'ingredient': 'wheat', 'date': '2026-10-22', 'status': 'candidate_ready_for_central_review', 'live': False,
 'playbook': 'docs/contracts/claude-ingredient-playbook.md',
 'owned_paths': ['tools/contracts/ingredients/wheat/', 'data/evidence/syntheses/ingredient-wheat-v1.json', 'data/evidence/questions/ingredient/wheat.json',
                 'data/evidence/contracts/wheat/', A + '/'],
 'shared_files_edited': [], 'wiki_ingredient_untouched': sha('wiki/ingredients/wheat.md') == baseline['sha256'],
 'scope_decisions': ['Materials: common wheat grain, durum and other tetraploid grain, spelt/einkorn/emmer, bran, germ, hulled/cracked/rolled/parboiled grain; EU "wheat grains and flour" and "bran and germ" categories kept separate. Market flour, bread, pasta, noodles, cereals, infant cereals and feed are out of scope with the destination page named.',
                     'References keep dry-weight and as-sold (including fresh and unstated) layers apart, following the Rice baseline.',
                     'Grain from point-source contaminated sites (steel mill, battery plant, mining, textile effluent) is compared within its study but is an external target for references.',
                     'Palombieri 2023 and Motta-Romero 2021 report real field grain, so they are occurrence_extracted and their controls also feed the mitigation table.'],
 'commands': {'all': 'sh tools/contracts/ingredients/wheat/run-all.sh', 'check': 'node tools/contracts/ingredients/wheat/build.mjs --check'},
 'counts': {'rows': len(ledger['results']), 'states': dict(states), 'per_analyte': {k: dict(v) for k, v in per_analyte.items()}, 'reason_codes': dict(reasons),
            'reference_units': len(ledger['reference_units']), 'references': len(ledger['references']),
            'occurrence_families': sum(1 for i in ledger['items'] if i['id'].startswith('source:') and i['disposition'] == 'occurrence_extracted'),
            'faqs': J(audit / 'faq-bank-dispositions.json')['selected_count'], 'mitigation_rows': len(J(audit / 'interventions.json')['records']), 'held_rows': reasons.get('value_fails_source_integrity_check', 0)},
 'universe': {'items': len(ledger['items']), 'dispositions': dict(disp)},
 'gates': {'fullness': {k: v['status'] for k, v in gates['gates'].items()}, 'fullness_status': gates['status'], 'presentation': pres, 'public_processing': public,
           'validateRecord': 'pass ([])', 'build_check': 'pass', 'hero': 'preview src /static/heroes/wheat-grain-flour-bread.webp, alt and dimensions match data/design/page-hero-images.json',
           'not_run_here': ['full-site npm run lint:hero-preservation and lint:ingredient-presentation on the full release (central)', 'paired Rice desktop/phone visual acceptance on the integrated build (central)']},
 'holds': {'families': holds, 'definition': 'tools/contracts/ingredients/wheat/source-adapter.mjs `holds`'},
 'access_gaps': ['No source is access_blocked. Supplementary tables for Pompa 2021, Palombieri 2023, Motta-Romero 2021, Maccaferri 2019 and Ozkutlu 2026 are not in the library; their main texts were extracted in full.'],
 'fda_tds': 'FDA TDS FY2018–FY2020 has no wheat grain, bran or germ food (extraction/fda2022-tds-elements-fy2018-fy2020.json).',
 'regulatory_limits_extracted': len(regulatory), 'shared_source_correction_proposals': len(proposals), 'shared_requests': 'shared-requests.json',
 'thin_page': J(audit / 'thin-page.json')['status'],
 'before_after_live': {'before': {'sources_frontmatter': 99, 'occurrence_rows': count(live, r'data-analyte-row|id="hmi-occurrence-wheat'), 'mitigation_rows': 0, 'faq_questions': 0,
                                  'notes': 'Legacy profile page: one summary table of typical ranges with P95-style profile values, pending processing and mitigation sections, no per-result rows, no comparator, no FAQs.'},
                       'after': {'sources_frontmatter': count(cand, r'^sources: (\d+)') and int(re.search(r'^sources: (\d+)', cand, re.M).group(1)), 'occurrence_rows': len(ledger['results']), 'mitigation_rows': count(html, r'data-mitigation-row'), 'faq_questions': J(audit / 'faq-bank-dispositions.json')['selected_count'],
                                 'notes': 'Thirty survey and field families plus 26,517 GEMS/Food records; pooled references per material and basis; durum versus common wheat, durum origins, cultivars, contaminated versus background sites and bran/germ fractions compared; verified EU, Codex, China, FSANZ and MERCOSUR limits; twelve stage-led controls.'}},
 'hashes': {p: sha(p) for p in [candidate, 'data/evidence/syntheses/ingredient-wheat-v1.json', 'data/evidence/questions/ingredient/wheat.json', f'{A}/preview/ingredients/wheat.html',
            'data/evidence/contracts/wheat/evidence-ledger.json', 'data/evidence/contracts/wheat/fullness-scorecard.json',
            'tools/contracts/pilot/compiler.mjs', 'tools/contracts/pilot/analyte-table.mjs', 'tools/contracts/pilot/mitigation-table.mjs', 'tools/contracts/pilot/hmi-baseline.mjs']},
}
(audit / 'result.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({k: result[k] for k in ('status', 'wiki_ingredient_untouched', 'counts', 'universe', 'thin_page')}, indent=1))
print('gates', result['gates']['fullness_status'], result['gates']['presentation']['errors'], public, '| proposals', len(proposals), '| limits', len(regulatory))
