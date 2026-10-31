"""Draft source records for new papers (HMI-GAP-INGEST-1 batches) that have no wiki/sources record yet.

Reads each new paper's extraction record (bibliographic block, study, findings) and writes a
proposed record to the cassava audit's proposed-sources/ directory. Central or the batch PR
places these at wiki/sources/<id>.md; this script never writes wiki/.
"""
import json, pathlib, collections

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/cassava'
out = audit / 'proposed-sources'; out.mkdir(exist_ok=True)
NAMES = {'Pb': 'lead', 'Cd': 'cadmium', 'tAs': 'total arsenic', 'iAs': 'inorganic arsenic', 'tHg': 'total mercury', 'MeHg': 'methylmercury', 'Ni': 'nickel', 'Cr': 'chromium', 'Al': 'aluminium', 'Sn': 'tin'}
q = lambda v: json.dumps(v, ensure_ascii=False)

for f in sorted((audit / 'extraction').glob('*.json')):
    x = json.loads(f.read_text())
    b = x.get('bibliographic')
    sid = x['source_id']
    sibling = root / f'data/evidence/contracts/ingredient-rollout-2026-10-22/plantain/proposed-sources/{sid}.md'
    if not b or (root / f'wiki/sources/{sid}.md').exists() or sibling.exists(): continue  # plantain-build owns shared records it drafted
    st = x['study']
    metals = sorted({fd['analyte'] for fd in x['findings']}, key=list(NAMES).index) if x['findings'] else []
    by = collections.defaultdict(list)
    for fd in x['findings']: by[fd['material']].append(fd)
    doi = b.get('doi')
    url = f'https://www.ncbi.nlm.nih.gov/pmc/articles/{b["pmcid"]}/' if b.get('pmcid') else f'https://doi.org/{doi}'
    first = (b['authors'][0].split()[-1] if b.get('authors') else sid).strip(',')
    lines = ['---', 'type: source', f'cite_key: {sid}', f'title: {q(b["title"])}', f'authors: {q(b.get("authors", []))}', f'year: {b.get("year")}',
             f'publication: {q(b.get("journal"))}', f'doi: {doi}', f'access_url: {q(url)}'] + ([f'pmcid: {b["pmcid"]}'] if b.get('pmcid') else []) + [
             'source_type: peer-reviewed', 'evidence_tier: A', 'license: "CC BY (open access)"', f'raw_path: {q("papers-for-claude/hmi-gap-1/" + pathlib.Path(x["primary_artifact"]).name)}',
             f'primary_sha256: {x["primary_sha256"]}', f'metals: {q(metals)}', 'ingredients: ["[[ingredients/cassava]]"]', 'products: []',
             f'matrices: {q(sorted({"cassava"} | ({"garri"} if "garri" in sid or "garri" in json.dumps(x).lower() else set())))}',
             'jurisdictions: [GH]' if 'ghana' in sid else 'jurisdictions: [NG]', 'near_duplicates: []', f'sample_population: {q(st.get("material_scope"))}',
             'wiki_doi: null', 'updated: 2026-10-22', '---', '',
             f'# {first} et al. {b.get("year")} — {b["title"]}', '', '## Overview', '',
             f'{st.get("design", "Study").capitalize()} of {st.get("material_scope")}. Growing area or market: {st.get("growing_origin_vs_market")}. Collection period: {st.get("collection_period") or "not reported"}. Method: {st.get("method")}. Basis: {st.get("basis")}.', '',
             '## Key numbers', '']
    for mat, fds in by.items():
        vals = []
        for fd in fds:
            v = fd.get('value_ug_kg'); t = fd['reported'].get('text') if fd.get('reported') else None
            vals.append(f'{NAMES.get(fd["analyte"], fd["analyte"])} {fd["statistic"].replace("_", " ")} {t or v} ({fd["group"]}; {fd["locator"]})')
        lines.append(f'{mat}: ' + '; '.join(vals) + '.')
        lines.append('')
    if x.get('unresolved'): lines += ['## Limitations', '', ' '.join(x['unresolved']), '']
    lines += ['## Related evidence', '- [[ingredients/cassava]]'] + [f'- [[metals/{m}]]' for m in dict.fromkeys({"Pb":"lead","Cd":"cadmium","tAs":"arsenic","iAs":"arsenic","tHg":"mercury","MeHg":"mercury","Ni":"nickel","Cr":"chromium"}.get(a, a) for a in metals)] + ['']
    (out / f'{sid}.md').write_text('\n'.join(lines))
    print('drafted', sid)
