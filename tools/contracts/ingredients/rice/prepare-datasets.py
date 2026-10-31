"""Decide every WHO GEMS/Food and FDA TDS dataset row in the Rice universe.

Reproducible: reads the preserved primary exports (backup library copy of raw/), hashes
them, and writes per-row decisions plus HMI-calculated subgroup summaries into the Rice
audit directory. Non-detects stay zero-to-limit intervals; nothing is imputed.
Adapted from the Honey dataset extractor; rice-specific food scope rules below.
"""
import csv, hashlib, json, pathlib, statistics, collections, os, re, sys

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/rice'
raw = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
universe_path = pathlib.Path(sys.argv[1])  # JSON from recomputeUniverse(..., 'rice')
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=1, ensure_ascii=False) + '\n')

universe = json.loads(universe_path.read_text())
rows_by_file = collections.defaultdict(dict)
for it in universe['items']:
    if it['kind'] == 'dataset_row' and re.fullmatch(r'row \d+', it['row_locator']):
        rows_by_file[it['path']][int(it['row_locator'].split()[-1])] = it

GEMS = 'who-gemsfood-heavy-metal-contaminants'
FDA = 'fda2022-tds-elements-fy2018-fy2020'

# ---------------------------------------------------------------- rice grain scope
GRAIN_FOODS = {'Rice', 'Rice, Husked', 'Rice, Polished'}
# Product or other-material terms in the local name. Each is a distinct material/product page.
PRODUCT = re.compile(r"flour|\bbran\b|husk(?!ed)|hull|straw|syrup|\bmilk\b|drink|beverage|cereal|infant|baby|babies|child|"
    r"cracker|\bcake|puff|popped|\bpop\b|flake|noodle|vermicelli|paper|pasta|starch|protein|wine|sake|vinegar|miso|beer|"
    r"snack|porridge|congee|pudding|dessert|crisp|krispie|mochi|dumpling|bread|biscuit|cookie|sushi|pilaf|pilau|risotto|"
    r"fried|curry|dish|meal|soup|salad|paella|\bmix|with |\band\b|semolina|ground|grits|malt|koji|amazake|wild rice|zizania|"
    r"rice bean|ricebean|based|product|bar\b|confection|sweet|candy|ball|roll|onigiri|kheer|idli|dosa|batter|dough|fermented|"
    r"cream|oil|feed|sprout|germ|leaf|plant|seedling|bean|lentil|dal\b|kanji|kiribath|tteok|makgeolli|crunch|chips|wafer", re.I)
UNKNOWN_CODE = re.compile(r'^(?:[A-Z]{1,3}[ .]?\d[\w.]*|\d+)$')  # local food codes such as A.01.000030, CM1205

def rice_form(food, local, state):
    t = f'{food} {local}'.lower()
    if food == 'Rice, Husked' or re.search(r'husked|brown|cargo|unpolished|whole ?grain|wholegrain|unmilled|paddy|rough|naturreis|vollkorn|integral|complet', t):
        form = 'Husked (brown) rice'
    elif re.search(r'parboil', t):
        form = 'Parboiled rice'
    elif food == 'Rice, Polished' or re.search(r'polish|white|milled|blanc|weiss|bianco|blanco|basmati|jasmine|long.grain|medium.grain|short.grain|langkorn|rundkorn|glutinous|sticky', t):
        form = 'Polished (white) rice'
    else:
        form = 'Rice, form not stated'
    if re.search(r'cooked|boiled|steam|pre-?cooked|kakoubeihan|instant|gekocht|cocido', t) or state == 'Cooked':
        form = form.replace('rice', 'rice, cooked') if form != 'Rice, form not stated' else 'Cooked rice, form not stated'
    return form

def in_scope(food, local, category):
    if food in GRAIN_FOODS:
        return not PRODUCT.search(local)
    if food == 'CEREAL GRAINS' and re.search(r'\brice\b', local, re.I):
        return not PRODUCT.search(local)
    if food.startswith('Other foods') and local.strip().lower() in ('rice',):
        return True
    return False

SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Mercury': 'tHg', 'Aluminium': 'Al', 'Aluminum': 'Al',
           'Tin': 'Sn', 'Nickel': 'Ni', 'Chromium': 'Cr', 'Methyl mercury': 'MeHg',
           'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs', 'Arsenic (Dimethylarsinic acid)': 'DMA'}
UNTRACKED = {'Mercury (inorganic)': 'Inorganic mercury is not a tracked HMI species and is never substituted for total mercury.',
             'Arsenic (Monomethylarsonic Acid)': 'Monomethylarsonic acid is not a tracked HMI rice species.',
             'Arsenic (organic)': 'Organic arsenic (unspecified) is not a tracked HMI species and is not substituted for total or inorganic arsenic.'}
IMPLAUSIBLE = {'Cd': 5000, 'Pb': 10000, 'tAs': 5000, 'iAs': 3000, 'DMA': 2000, 'tHg': 500, 'MeHg': 200}

def basis_class(basis_label, form):
    if basis_label == 'Dry weight': return 'dry'
    if 'cooked' in form.lower(): return 'cooked'
    return 'native'

rowdisp, records, held, manifest = {}, [], [], []
seen, june_items = {}, {}
dropped = collections.Counter()
gems_files = sorted([p for p in rows_by_file if p.startswith('raw/reports/gemsfood-contaminants/')],
                    key=lambda p: (0 if '2026-06-20-export' in p else 1, p))
for rel in gems_files:
    p = raw / rel.removeprefix('raw/')
    wanted = rows_by_file[rel]
    phase = 'june' if '2026-06-20-export' in rel else 'may'
    manifest.append({'path': str(p), 'sha256': sha(p), 'bytes': p.stat().st_size, 'export': phase})
    for i, r in enumerate(csv.DictReader(p.open(encoding='utf-8', errors='replace')), start=2):
        if i not in wanted: continue
        iid = wanted[i]['id']
        food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '').strip(); cont = r.get('ContaminantName', '').strip()
        loc = f'{p.name} data row {i}'
        if not in_scope(food, local, r.get('FoodCategory', '')):
            rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Food is "{food}" ({local}): a rice product, rice-containing food or different material, not rice grain; covered by its own page where one exists.', 'location': loc}; continue
        if cont in UNTRACKED:
            rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': UNTRACKED[cont], 'location': loc}; continue
        analyte = SPECIES.get(cont)
        if not analyte:
            rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Contaminant "{cont}" is outside the HMI analyte list.', 'location': loc}; continue
        serial = r['SerialNumber']
        if phase == 'may' and (serial, analyte) in june_items:
            rowdisp[iid] = {'disposition': 'duplicate_of:' + june_items[(serial, analyte)], 'rationale': 'The same GEMS/Food submission (serial number and analyte) is in the June 2026 export, which is the extracted copy.', 'location': loc}; continue
        key = (analyte, serial, r['LabNumber'], r['Year'], r['ResultText'], r['LOD'], r['LOQ'], local, r['UnitName'])
        if key in seen:
            seen[key]['region_labels'].append(r['RegionName']); dropped['duplicate_region_export'] += 1
            rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[key]['item_id'], 'rationale': 'The same submission exported under a second WHO region label or a second export file.', 'location': loc}; continue
        f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] in ('ug/kg', 'µg/kg') else None
        if f is None:
            rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed in µg/kg of rice.', 'location': loc}; dropped['unit'] += 1; continue
        txt = r['ResultText'].strip()
        try: lod = float(r['LOD']) * f if r['LOD'] else None
        except ValueError: lod = None
        try: loq = float(r['LOQ']) * f if r['LOQ'] else None
        except ValueError: loq = None
        try: numeric = float(txt)
        except ValueError: numeric = None
        # WHO writes non-detects as ND, 0 or 0.000; any zero is a reporting-limit bound, never a measured zero.
        if txt in ('ND', '') or numeric == 0 or (numeric is None and txt.startswith('<')):
            bound = lod if lod else loq
            if numeric is None and txt.startswith('<'):
                try: bound = float(txt[1:]) * f
                except ValueError: pass
            if bound is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': 'Non-detect reported without any detection or quantification limit; no numerical bound exists.', 'location': loc}; dropped['nondetect_without_limit'] += 1; continue
            lower, upper, status = 0.0, bound, 'non_detect'
        elif numeric is None:
            rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Result text "{txt}" is not numeric.', 'location': loc}; continue
        else:
            v = numeric * f; lower = upper = v
            status = 'detected_below_loq' if loq and v < loq else 'detected'
        vkey = (analyte, serial, r['Year'], round(lower, 6), round(upper, 6))
        if vkey in seen:
            seen[vkey]['region_labels'].append(r['RegionName']); dropped['duplicate_unit_export'] += 1
            rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[vkey]['item_id'], 'rationale': 'The same submission repeated in a second unit or export.', 'location': loc}; continue
        form = rice_form(food, local, r['FoodStateName'])
        rec = {'analyte': analyte, 'region': r['RegionName'], 'region_labels': [r['RegionName']], 'year': int(r['Year']),
               'origin': r['FoodOriginName'] or 'Unreported', 'representativeness': r['RepresentativenessName'] or 'Unreported',
               'qa': r['AnalyticalQAName'], 'basis_label': r['ResultBasisName'] or 'Unknown', 'basis_class': basis_class(r['ResultBasisName'], form),
               'state': r['FoodStateName'] or 'Unreported', 'food': food, 'local_name': local, 'form': form, 'lab': r['LabNumber'], 'serial': serial,
               'record_type': r['RecordType'] or 'unlabelled', 'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq,
               'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
        rec['value_review'] = bool(analyte in IMPLAUSIBLE and ((lod or 0) > 1000 or (loq or 0) > 3000 or upper > IMPLAUSIBLE[analyte]))
        seen[key] = seen[vkey] = rec; records.append(rec)
        if phase == 'june': june_items[(serial, analyte)] = iid

held = [r for r in records if r['value_review']]
use = [r for r in records if not r['value_review']]
for r in held:
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': 'Record held for value review: its detection limit or value is implausible for rice grain (unit-scale mismatch), so it is kept but never used in a summary or reference.', 'location': r['locator']}

fields = list(records[0].keys())
with (audit / 'primary/gemsfood-rice-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=fields); w.writeheader()
    for r in records: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})

def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; fl = int(k); c = min(fl + 1, len(vals) - 1)
    return vals[fl] + (vals[c] - vals[fl]) * (k - fl)
BASIS_TEXT = {'dry': 'Dry-weight grain', 'native': 'Uncooked grain as analysed (GEMS/Food "As is" or unstated basis)', 'cooked': 'Cooked rice as consumed'}
findings = []
groups = collections.defaultdict(list)
for r in use: groups[(r['analyte'], r['region'], r['form'], r['basis_class'], r['representativeness'])].append(r)
for (analyte, region, form, bclass, rep), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    slug = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
    findings.append({'id': f"{GEMS}:{analyte}:{slug(region)}:{slug(form)}:{bclass}:{slug(rep.split()[0])}:median",
        'analyte': analyte, 'material': form, 'group': f'WHO region {region}; {rep.lower()}', 'group_kind': 'purchase_market',
        'basis_class': bclass, 'basis': BASIS_TEXT[bclass], 'n': len(rs), 'statistic': 'median',
        'reported': {'value': None, 'unit': 'µg/kg', 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}'},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]], 'origins': dict(collections.Counter(r['origin'] for r in rs)),
        'basis_labels': dict(collections.Counter(r['basis_label'] for r in rs)),
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND, 0 or "<x" with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'lod_ug_kg': None, 'locator': f'primary/gemsfood-rice-records.csv rows for {analyte}, {region}, {form}, {BASIS_TEXT[bclass]}, {rep}',
        'notes': 'HMI-calculated descriptive summary of individual GEMS/Food submissions. Country identity is not exported; WHO region is a reporting region, not production origin. EURO and European Union labels can hold overlapping national submissions the export does not let us match.',
        'item_ids': sorted(r['item_id'] for r in rs)})
for f_ in findings:
    for iid in f_['item_ids']:
        rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': 'Individual GEMS/Food rice-grain submission; contributes to the HMI-calculated WHO-region summary for its analyte, rice form, basis and sampling type.', 'location': next(r['locator'] for r in use if r['item_id'] == iid) if False else iid.split('#')[-1]}
(audit / 'primary/gemsfood-rice-reference-input.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'region', 'year', 'form', 'basis_class', 'representativeness', 'value_review', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records]) + '\n')
put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(raw / 'reports/gemsfood-contaminants'), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-rice-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual rice-grain results submitted to WHO GEMS/Food (June 2026 export for Pb, Cd, Hg, Al, Sn, Ni, Cr; May 2026 per-region exports for arsenic species and earlier regional files), grouped by HMI into WHO-region × rice form × basis × sampling-type medians.',
    'disposition_locator': 'GEMS/Food exports, FoodName = Rice / Rice, Husked / Rice, Polished (rice grain only)',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Rice grain (GEMS/Food codes for rice, husked rice, polished rice); products excluded',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only', 'collection_period': 'per record (Year field)',
              'n_total': len(use), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'ResultBasisName retained (As is, As consumed, Dry weight, Unknown)', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-rice-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'region', 'year', 'local_name', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'locator')} for r in held],
    'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so WHO region cannot be read as growing origin.']})

# ---------------------------------------------------------------- FDA TDS sample rows
FOODS = {'50': 'Rice, white, enriched, cooked', '402': 'Rice, brown, cooked'}
TRACKED = {'tAs', 'iAs', 'Cd', 'Pb', 'tHg', 'Ni', 'Cr', 'U'}
fda_csv = 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv'
fda_rows = list(csv.DictReader((root / fda_csv).open()))
fda_disp = {}
for n, it in rows_by_file.get(fda_csv, {}).items():
    r = fda_rows[n - 2]
    if r['tds_food_number'] in FOODS and r['metal_species'] in TRACKED:
        fda_disp[it['id']] = {'disposition': 'occurrence_extracted', 'result_key': f"{r['tds_food_number']}:{r['metal_species']}", 'rationale': f"FDA TDS {FOODS[r['tds_food_number']]} composite ({r['analyte']}, FY{r['fiscal_year']} {r['season']}, {r['region']}); contributes to the FDA cooked-rice result for {r['metal_species']}.", 'location': f"{fda_csv} row {n}; original FDA TSV row {r['source_row_number']}"}
    elif r['tds_food_number'] in FOODS:
        fda_disp[it['id']] = {'disposition': 'out_of_scope', 'rationale': f"Element \"{r['analyte'].strip()}\" is a nutrient or untracked element, outside the HMI analyte list.", 'location': f'{fda_csv} row {n}'}
    else:
        fda_disp[it['id']] = {'disposition': 'out_of_scope', 'rationale': f"FDA TDS food \"{r['tds_food_description']}\" is a rice product or mixed food, not rice grain; it is covered by its own page.", 'location': f'{fda_csv} row {n}'}
(audit / 'fda-row-dispositions.json').write_text(json.dumps(fda_disp, indent=0) + '\n')
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp, indent=0) + '\n')
print('GEMS records', len(records), dict(collections.Counter(r['analyte'] for r in use)), '| held', len(held), '| dropped', dict(dropped),
      '| findings', len(findings), '| row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())),
      '| FDA', dict(collections.Counter(v['disposition'] for v in fda_disp.values())))
