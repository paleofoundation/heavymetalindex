"""Extract fish rows from the sample-level datasets (FDA TDS FY2018-FY2020, WHO GEMS/Food).

Reproducible: reads the primary exports on the mounted HMI Library (backup only as a
read fallback), hashes them, and writes extraction records into the fish audit dir.
Every matching dataset row gets one recorded decision. Fish species/product groups,
analyte species (total Hg vs MeHg vs unspecified Hg; total vs inorganic As) and basis
(fresh vs dry) stay separate; nothing is pooled across them. Non-detects stay as
zero-to-limit intervals; nothing is imputed.
"""
import csv, hashlib, json, pathlib, statistics, collections, os, re, unicodedata

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/fish'
mounted = pathlib.Path('/Volumes/HMI-Library/heavy-metal-index-raw')
raw = mounted if mounted.exists() else pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=1, ensure_ascii=False) + '\n')
def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)

# ---------------------------------------------------------------- FDA TDS
FDA = 'fda2022-tds-elements-fy2018-fy2020'
FDA_FOODS = {'salmon': 'Salmon, steaks/fillets, baked', 'cod': 'Cod, baked', 'tilapia': 'Tilapia, baked',
             'canned-tuna': 'Tuna, canned in water, drained solids', 'fish-fingers': 'Fish sticks or patty, frozen, oven-cooked'}
csv_path = 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv'
all_fda = list(csv.DictReader((root / csv_path).open()))
fda_native_src = raw / 'reports/fda-tds-fy2018-2020-recovery-2026-09-10/analytical-results.txt'
native = list(csv.DictReader(fda_native_src.open(encoding='cp1252'), delimiter='\t'))
fda_rows = [(i + 2, r) for i, r in enumerate(all_fda) if r['ingredient_slug'] in FDA_FOODS]
fda_samples, fda_findings, fda_rowdisp = [], [], {}
for line, r in fda_rows:
    iid = f'dataset:{csv_path}#row {line}'
    if not r['metal_species']:
        fda_rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Element "{r["analyte"].strip()}" is outside the HMI analyte list (nutrient or untracked element).'}; continue
    s = native[int(r['source_row_number']) - 2]
    for nk, k in [('TDSFoodNumber', 'tds_food_number'), ('Concentration', 'concentration_original'), ('ReportingLimit', 'reporting_limit_original')]:
        assert s[nk].strip() == r[k], (nk, r['source_row_number'])
    fda_samples.append({'sample': r['sample_id'], 'food': r['ingredient_slug'], 'group': f"FY{r['fiscal_year']} {r['season']}", 'analyte': r['metal_species'],
                        'value_ug_kg': None if r['result_status'] == 'non_detect' else float(r['concentration_ppb_equivalent']),
                        'censored': r['result_status'] == 'non_detect', 'bound_ug_kg': float(r['reporting_limit_ppb_equivalent']),
                        'lower_ug_kg': float(r['concentration_lower_bound_ppb']), 'upper_ug_kg': float(r['concentration_upper_bound_ppb']),
                        'locator': f"Original FDA TSV row {r['source_row_number']} (header = row 1)", 'item_id': iid})
for food, label in FDA_FOODS.items():
    for a in sorted({x['analyte'] for x in fda_samples if x['food'] == food}):
        rs = [x for x in fda_samples if x['food'] == food and x['analyte'] == a]
        det = [x for x in rs if not x['censored']]
        lo = [x['lower_ug_kg'] for x in rs]; hi = [x['upper_ug_kg'] for x in rs]
        rl = sorted({x['bound_ug_kg'] for x in rs})
        fid = f'{FDA}:{a}:{food}:us-national:median'
        fda_findings.append({'id': fid, 'analyte': a, 'species': label.split(',')[0], 'material': label, 'preparation': 'cooked:baked' if 'baked' in label else 'canned' if 'canned' in label else 'cooked:oven',
            'production': 'not stated', 'water': 'not stated', 'group': 'United States national TDS collections FY2018–FY2020', 'group_kind': 'purchase_market', 'origin': None, 'market': 'United States',
            'n': len(rs), 'statistic': 'median', 'basis': 'wet weight',
            'reported': {'value': None, 'unit': 'ppb', 'basis': 'as eaten', 'text': f"{len(det)} of {len(rs)} composites detected; reporting limit {', '.join(str(x) for x in rl)} ppb"},
            'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
            'min_ug_kg': min(x['lower_ug_kg'] for x in det) if det else None, 'max_ug_kg': max(x['upper_ug_kg'] for x in det) if det else None, 'lod_ug_kg': rl[0],
            'detected_n': len(det), 'conversion': 'ppb equals µg/kg by mass; no conversion', 'censoring': 'FDA zero code = non-detect; bounds 0 to reporting limit; never a measured zero',
            'locator': 'Original FDA TSV rows ' + ', '.join(x['locator'].split('row ')[1].split(' ')[0] for x in rs), 'notes': 'HMI-calculated median of national TDS composites (prepared as eaten); not brands, lots or production origin.',
            'item_ids': [x['item_id'] for x in rs]})
        for x in rs: fda_rowdisp[x['item_id']] = {'disposition': 'occurrence_extracted', 'result_finding': fid, 'rationale': f'FDA TDS {label} composite ({a}); contributes to the HMI-calculated US median for this food and analyte.'}
put(f'extraction/{FDA}.json', {
    'source_id': FDA, 'primary_artifact': str(fda_native_src), 'primary_sha256': sha(fda_native_src), 'text_copy': csv_path,
    'disposition': 'occurrence_extracted', 'disposition_reason': 'FDA Total Diet Study composites of baked salmon, cod and tilapia, canned tuna and oven-cooked fish sticks, FY2018–FY2020, with toxic-element results per composite.',
    'disposition_locator': 'FDA TDS FY2018–FY2020 analytical results, foods salmon, cod, tilapia, canned tuna and fish sticks',
    'study': {'design': 'total diet study', 'material_scope': 'Fish as purchased and prepared (baked, canned drained, oven-cooked)', 'growing_origin_vs_market': 'US purchase market; production origin unreported',
              'collection_period': 'FY2018–FY2020', 'n_total': len({x['sample'] for x in fda_samples}), 'sampling_unit': 'FDA national composites', 'method': 'FDA Elemental Analysis Manual ICP-MS; total mercury',
              'lod_loq': 'administrative reporting limits per analyte (ppb)', 'basis': 'as eaten (wet weight)', 'qa': 'FDA laboratory QA; not itemised'},
    'findings': fda_findings, 'sample_values': fda_samples, 'controls': [], 'contradictions_with_stored_summary': [], 'unresolved': []})
put('fda-row-dispositions.json', fda_rowdisp)

# ---------------------------------------------------------------- GEMS/Food
GEMS = 'who-gemsfood-heavy-metal-contaminants'
groot = raw / 'reports/gemsfood-contaminants'
june = sorted((groot / '2026-06-20-export').glob('*.csv'))
# The May 2026 per-region exports exist only in the backup copy of the library (not on the volume).
backup = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
may = sorted(groot.glob('who-gemsfood-*-2026-05-04.csv')) or sorted((backup / 'reports/gemsfood-contaminants').glob('who-gemsfood-*-2026-05-04.csv'))
ALIASES = ['fish', 'seafood', 'finfish', 'tuna', 'salmon', 'swordfish', 'mackerel', 'cod', 'tilapia', 'trout', 'sardines', 'herring', 'anchovies', 'fish oil', 'anchovy', 'cod liver oil', 'shark liver oil', 'fishes']
def norm(s): return re.sub(r'\s+', ' ', re.sub(r'[_–—-]+', ' ', unicodedata.normalize('NFKC', str(s or '')).lower())).strip()
PATS = [re.compile(r'(?:^|[^\w])' + re.escape(a) + r'(?:$|[^\w])') for a in ALIASES]
def matches(s): s = norm(s); return any(p.search(s) for p in PATS)
SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Methyl mercury': 'MeHg', 'Mercury': 'Hg_unspecified', 'Mercury (inorganic)': 'iHg',
           'Aluminium': 'Al', 'Tin': 'Sn', 'Nickel': 'Ni', 'Chromium': 'Cr', 'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs',
           'Arsenic (Dimethylarsinic acid)': 'DMA', 'Arsenic (Monomethylarsonic Acid)': 'MMA', 'Arsenic (organic)': 'oAs'}
# GEMS food groups that are finfish flesh, by species group, exactly as WHO names them.
FISH_GROUPS = {'FISHES': 'Fish (unspecified species)', 'MARINE FISHES': 'Marine fish (unspecified species)', 'FRESH WATER FISHES': 'Freshwater fish (unspecified species)',
               'DIADROMOUS FISHES': 'Diadromous fish (unspecified species)', 'Cod': 'Cod', 'Tuna': 'Tuna', 'Trout': 'Trout', 'Mackerel': 'Mackerel', 'Herring': 'Herring',
               'Sardines and sardine-type fishes': 'Sardines and sardine-type fish', 'Salmon, Pacific': 'Pacific salmon', 'Haddock': 'Haddock', 'Carps': 'Carp', 'Dried fish': 'Dried fish',
               'Pollack': 'Pollack', 'Sole': 'Sole', 'Sharks': 'Shark', 'Eels': 'Eel', 'Bream': 'Bream', 'Perch': 'Perch', 'Flounders': 'Flounder', 'Plaice': 'Plaice'}
NOT_FISH = re.compile(r'snail|clam|whelk|winkle|limpet|shellfish|shell fish|shell-fish|mussel|oyster|scallop|squid|octopus|cuttle|shrimp|prawn|crab|lobster|crayfish|sea urchin|sea cucumber|kombu|seaweed|hijiki|insect|crocodile|frog|amphibian|reptile|gasterópodos|crustacean|mollusc|seafood mix|mix of seafood|seafood cocktail|seafood sticks|seafood and seafood products|excluding fish', re.I)
NES_FISH = [(re.compile(r'sword ?fish|xiphias', re.I), 'Swordfish (GEMS "fish, seafood NES" entries)'),
            (re.compile(r'cod liver oil', re.I), 'Cod liver oil'), (re.compile(r'fish oil', re.I), 'Fish oil'),
            (re.compile(r'canned|visconserven|fish can\b|\bcan\b', re.I), 'Canned fish (species not stated)'),
            (re.compile(r'smoked|ahumad', re.I), 'Smoked fish (species not stated)'), (re.compile(r'salted', re.I), 'Salted fish (species not stated)'),
            (re.compile(r'roe|fish eggs|fish \neggs', re.I), 'Fish roe'),
            (re.compile(r'whiting|bacaladilla|poutassou|wijting|grouper|\bray\b|ray wing|\brey\b|tuna|palometa|fresh fish|verse visserij|fish fillets', re.I), 'Other finfish (GEMS "NES" entries)')]
PRODUCTS = re.compile(r'^(fish products|fish fingers|fish paste|fish pâté|fish cakes?|fishcakes|fish balls|fish, battered|frozen fish|fish cakes made from minced fish fillets|beer battered fish fillets|breaded whiting fillet)$', re.I)

def classify(food, local, contaminant_unit_row=None):
    """Return (material or None, reason if out of scope)."""
    lf = local.strip()
    if food in FISH_GROUPS: return FISH_GROUPS[food], None
    if food == 'Feed': return None, f'Animal feed ("{lf}"), not food for people.'
    if food in ('Ready-to-eat meal for infants and young children', 'Cereal-based food for infants and young children'):
        return None, f'Infant or young-child food ("{lf}"); fish-containing infant foods are a separate product page and the fish share is not reported.'
    if food in ('CRUSTACEANS', 'Molluscs, including cephalopods', 'Crabs', 'Mussels', 'Shrimps and prawns', 'Lobsters', 'Squids', 'Scallops', 'Octopuses', 'Clams', 'Oysters (including cupped oysters)'):
        return None, f'Shellfish, crustacean or mollusc group "{food}" ("{lf}"); not finfish (separate ingredient pages).'
    if food == 'BUTTER AND OTHER ANIMAL FAT EMULSION':
        if re.search(r'cod liver oil', lf, re.I): return 'Cod liver oil', None
        if re.search(r'fish oil', lf, re.I): return 'Fish oil', None
        return None, f'Dairy or animal fat product "{lf}", not fish.'
    if food == 'Fish and seafood based meals':
        if PRODUCTS.match(lf.strip()): return 'Fish products (fish fingers, cakes, pastes)', None
        return None, f'Mixed fish-and-seafood or composite meal "{lf}"; the finfish share cannot be separated.'
    if food == 'Fish, sea food, amphibian reptile snail or insect NES':
        if re.search(r'offal', lf, re.I): return None, f'Fish offal ("{lf}"), not the edible flesh this page covers.'
        if NOT_FISH.search(lf) or re.search(r'including amphibians|fish and other seafood', lf, re.I): return None, f'"{lf}" in the mixed fish/seafood/other-animal group is not identifiable as finfish.'
        for pat, mat in NES_FISH:
            if pat.search(lf): return mat, None
        return None, f'"{lf}" in the mixed fish/seafood/other-animal group cannot be identified as finfish from its local name.'
    if food == 'SAUCE AND CONDIMENTS' and re.search(r'fish sauce', lf, re.I): return 'Fish sauce', None
    if food == 'Safflower seed': return None, f'FoodName "Safflower seed" conflicts with local name "{lf}"; the record cannot be assigned to a food reliably.'
    if food in ('Other foods (foods which cannot be included in any other group)',) and re.search(r'canned fish', lf, re.I): return 'Canned fish (species not stated)', None
    return None, f'Food "{food}" ("{lf}") is a composite dish, condiment, snack or other food that names or contains fish; the fish itself is not measured.'

manifest, records, dropped, rowdisp = [], [], collections.Counter(), {}
seen, june_items = {}, {}
def item_id(p, i): return f"dataset:raw/{p.relative_to(raw if p.is_relative_to(raw) else backup)}#row {i}"
for phase, files_ in (('june', june), ('may', may)):
    for p in files_:
        manifest.append({'path': str(p), 'sha256': sha(p), 'bytes': p.stat().st_size, 'export': phase})
        for i, r in enumerate(csv.DictReader(p.open(encoding='utf-8', errors='replace')), start=2):
            food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '')
            if not (matches(food) or matches(local)): continue
            iid = item_id(p, i); cont = r.get('ContaminantName', '').strip(); loc = f"{p.name} data row {i}"
            material, why = classify(food, local)
            if not material: rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': why, 'location': loc}; continue
            analyte = SPECIES.get(cont)
            if not analyte: rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Contaminant "{cont}" is outside the HMI analyte list.', 'location': loc}; continue
            if phase == 'may' and (r['SerialNumber'], cont) in june_items:
                rowdisp[iid] = {'disposition': 'duplicate_of:' + june_items[(r['SerialNumber'], cont)], 'rationale': 'The same GEMS/Food submission (serial number and contaminant) is in the June 2026 export, which is the extracted copy.', 'location': loc}; continue
            key = (analyte, r['SerialNumber'], r['LabNumber'], r['Year'], r['ResultText'], r['LOD'], r['LOQ'], r['LocalFoodName'], r['UnitName'], food)
            if key in seen:
                seen[key]['region_labels'].append(r['RegionName']); dropped['duplicate_region_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[key]['item_id'], 'rationale': 'The same submission exported under a second WHO region label.', 'location': loc}; continue
            f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] == 'ug/kg' else None
            if f is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"] or "none"}" cannot be expressed in µg/kg of fish.', 'location': loc}; dropped['unit'] += 1; continue
            txt = r['ResultText'].strip()
            lod = float(r['LOD']) * f if r['LOD'] else None
            loq = float(r['LOQ']) * f if r['LOQ'] else None
            try: numeric = float(txt)
            except ValueError: numeric = None
            if txt in ('ND', '') or numeric == 0 or (numeric is None and txt.startswith('<')):
                bound = lod if lod else loq
                if bound is None and txt.startswith('<'):
                    try: bound = float(txt[1:]) * f
                    except ValueError: bound = None
                if bound is None:
                    rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': 'Non-detect reported without any detection or quantification limit; no numerical bound exists.', 'location': loc}; dropped['nondetect_without_limit'] += 1; continue
                lower, upper, status = 0.0, bound, 'non_detect'
            elif numeric is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Result text "{txt}" is not numeric.', 'location': loc}; dropped['non_numeric'] += 1; continue
            else:
                v = numeric * f; lower = upper = v
                status = 'detected_below_loq' if loq and v < loq else 'detected'
            vkey = (analyte, r['SerialNumber'], r['Year'], round(lower, 6), round(upper, 6), food, r['LocalFoodName'], r['FoodStateName'])
            if vkey in seen:
                seen[vkey]['region_labels'].append(r['RegionName']); dropped['duplicate_unit_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[vkey]['item_id'], 'rationale': 'The same submission repeated in a second unit.', 'location': loc}; continue
            basis = {'Dry weight': 'dry weight', 'As consumed': 'wet weight', 'As is': 'wet weight'}.get(r['ResultBasisName'], 'basis not stated')
            # Cooked records stay a separate preparation scope from raw/unstated ones.
            state = (r['FoodStateName'] or '').strip()
            prep = 'cooked' if state.lower().startswith('cook') else 'as sold (raw or not stated)'
            rec = {'analyte': analyte, 'material': material, 'food_name': food, 'region': r['RegionName'], 'region_labels': [r['RegionName']], 'year': int(r['Year']),
                   'origin': r['FoodOriginName'] or 'Unreported', 'representativeness': r['RepresentativenessName'] or 'Unreported', 'qa': r['AnalyticalQAName'],
                   'basis_label': r['ResultBasisName'], 'basis': basis, 'state': r['FoodStateName'] or 'Unreported', 'prep': prep, 'local_name': r['LocalFoodName'], 'lab': r['LabNumber'],
                   'serial': r['SerialNumber'], 'record_type': r['RecordType'] or 'unlabelled', 'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq,
                   'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
            # Limits or values implausible for fish flesh signal unit-label errors; held, never summarised.
            implausible = {'Cd': 20000, 'Pb': 30000, 'tHg': 15000, 'MeHg': 15000, 'Hg_unspecified': 15000, 'iHg': 15000, 'tAs': 300000, 'iAs': 20000}
            rec['value_review'] = bool(analyte in implausible and ((lod or 0) > 5000 or (loq or 0) > 10000 or upper > implausible[analyte]))
            seen[key] = seen[vkey] = rec; records.append(rec)
            if phase == 'june': june_items[(r['SerialNumber'], cont)] = iid
held = [r for r in records if r['value_review']]
for r in held:
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': f'Record held for value review: its limit or value ({r["result_text"]} {r["unit"]}, LOD {r["lod_ug_kg"]}, LOQ {r["loq_ug_kg"]} µg/kg) is implausible for fish flesh (unit-scale mismatch), so it is kept but never summarised or used in a reference.', 'location': r['locator']}
kept = [r for r in records if not r['value_review']]
with (audit / 'primary/gemsfood-fish-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=list(records[0].keys())); w.writeheader()
    for r in records: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})
(audit / 'primary/gemsfood-fish-reference-input.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'material', 'prep', 'basis', 'region', 'year', 'representativeness', 'value_review', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records]) + '\n')

findings = []
groups = collections.defaultdict(list)
for r in kept: groups[(r['analyte'], r['material'], r['prep'], r['basis'], r['region'])].append(r)
def slug(s): return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
for (analyte, material, prep, basis, region), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    fid = f"{GEMS}:{analyte}:{slug(material)}:{slug(prep)}:{slug(region)}:{slug(basis)}:median"
    findings.append({'id': fid, 'analyte': analyte, 'species': material, 'material': material, 'preparation': prep,
        'production': 'not stated', 'water': 'not stated', 'group': f'WHO region {region}', 'group_kind': 'purchase_market', 'origin': None, 'market': f'WHO region {region}',
        'n': len(rs), 'statistic': 'median', 'basis': basis,
        'reported': {'value': None, 'unit': 'µg/kg', 'basis': basis, 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}'},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None, 'lod_ug_kg': None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]], 'origins': dict(collections.Counter(r['origin'] for r in rs)),
        'representativeness': dict(collections.Counter(r['representativeness'] for r in rs)),
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND, 0 or "<x" with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'locator': f"primary/gemsfood-fish-records.csv rows for {analyte}, {material}, {prep}, {basis}, {region}",
        'notes': 'HMI-calculated descriptive summary of individual GEMS/Food submissions; country identity is not exported; WHO region is a reporting region, not catch or farm origin. The EURO and European Union labels can hold overlapping national submissions that the export does not let us match.',
        'item_ids': sorted(r['item_id'] for r in rs)})
    for r in rs: rowdisp[r['item_id']] = {'disposition': 'occurrence_extracted', 'result_finding': fid, 'rationale': f'Individual GEMS/Food submission ({r["local_name"][:60]}); contributes to the HMI-calculated WHO-region median for {material}, {analyte}, {basis}.', 'location': r['locator']}
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp) + '\n')
put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(groot), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-fish-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual fish results submitted to WHO GEMS/Food: lead, cadmium, total, methyl and unspecified mercury, aluminium, tin, nickel and chromium from the June 2026 export, and arsenic species from the May 2026 per-region exports, grouped by WHO fish group.',
    'disposition_locator': 'GEMS/Food 2026-06-20 export and 2026-05-04 per-region exports, fish FoodName groups',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Fish groups as named by GEMS/Food (species groups, dried fish, canned/smoked/salted fish identified from local names, fish oils, fish products)',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only', 'collection_period': 'per record (Year field)',
              'n_total': len(kept), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'As consumed / As is = wet weight; Dry weight kept separate; Unknown = basis not stated', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-fish-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'material', 'region', 'year', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'locator')} for r in held],
    'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so WHO region cannot be read as catch or farm origin.', 'Most records are in broad WHO fish groups ("FISHES") without species; those stay a separate unspecified-species scope.']})
print('FDA rows', len(fda_rows), 'findings', len(fda_findings), '| GEMS records', len(kept), dict(collections.Counter(r['analyte'] for r in kept)), '| held', len(held), '| dropped', dict(dropped),
      '| GEMS findings', len(findings), '| row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())))
