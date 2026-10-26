"""Extract cocoa and chocolate rows from the sample-level datasets (FDA TDS FY2018-FY2020, WHO GEMS/Food).

Reproducible: reads preserved primary exports, verifies them by hash, and writes
extraction records into the cocoa audit directory. Every dataset row that names
cocoa, cacao or chocolate gets one recorded decision. Non-detects stay as
zero-to-limit intervals; nothing is imputed.
"""
import csv, hashlib, json, pathlib, shutil, statistics, collections, os, re

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa'
raw = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')

FORM_LABEL = {'beans': 'Cocoa beans', 'nibs': 'Cocoa nibs', 'liquor': 'Cocoa liquor (mass)', 'butter': 'Cocoa butter', 'powder': 'Cocoa powder',
              'sweetened_powder': 'Sweetened cocoa or drinking-chocolate powder', 'dark_chocolate': 'Dark chocolate', 'milk_chocolate': 'Milk chocolate',
              'white_chocolate': 'White chocolate', 'chocolate_unspecified': 'Chocolate, type not specified', 'mixed_products': 'Cocoa and chocolate products, unspecified'}

# ---------------------------------------------------------------- form classifier
# The local food name decides; the GEMS food code is only a fallback, because
# submitters file milk chocolate under "Cocoa mass", spreads under "Cocoa mass",
# and drinking powders under "Cocoa powder".
OUT = [
    (r'non-?chocolate|sin chocolate', 'Confectionery explicitly without chocolate.'),
    (r'\bfeed\b|futter|bean meal|husk|hull|shells?\b|cascarilla|schalen', 'Cocoa husks, shells or bean meal: a by-product sold as feed or infusion, not an edible cocoa product form.'),
    (r'shake|smoothie|frapp', 'Milk shake or blended drink containing chocolate: a composite beverage.'),
    (r'spread|tartiner|aufstrich|untable|nutella|creme|crema de cacao|cream\b', 'Chocolate or cocoa spread or cream: a composite food whose cocoa share is not reported.'),
    (r'syrup|sirup|sauce|salsa|topping', 'Chocolate syrup, sauce or topping: a composite food.'),
    (r'cake|biscuit|cookie|keks|galleta|gâteau|gateau|brownie|wafer|waffel|muffin|croissant|bread|pan\b|pastry|pastel|torta', 'Bakery product containing chocolate or cocoa.'),
    (r'\bice\b|\beis\b|helado|glace|dessert|pudding|postre|flan|mousse|yog|joghurt|yaourt|quark|cheese', 'Dessert, ice cream or dairy product containing chocolate or cocoa.'),
    (r'cereal|müsli|muesli|granola|corn ?flakes|porridge|rice|arroz|oat|avena|wheat|bar\b.*(nougat|nut|caramel)|nougat|riegel', 'Cereal product or candy bar with nougat, nuts or caramel: a composite food.'),
    (r'filled|filling|gefüllt|fourré|relleno|bomb[oó]n|praline|praliné|truffle|trüffel|coated|überzogen|cubierto|enrob', 'Filled or chocolate-coated confectionery: the filling or centre is not cocoa.'),
    (r'\btea\b|\btee\b|infusion|herbal|té\b', 'Tea or infusion.'),
    (r'liqueur|likör|licor de crema|spirit|wine|beer', 'Alcoholic beverage.'),
    (r'formula|infant|baby|säugling|nourrisson|toddler|children', 'Infant or children’s food with cocoa as one ingredient.'),
    (r'coffee|kaffee|café', 'Coffee product.'),
]
def classify(fn, ln, code):
    t = f' {ln} '.lower()
    pdr = re.search(r'powder|polvo|pulver|poudre|instant|löslich|preparation|base,', t)
    drink = re.search(r'drink|beverage|bebida|getränk|boisson|hot chocolate|chocolate caliente|kakaogetränk|trinkschokolade', t)
    milkdrink = re.search(r'chocolate milk|milk, chocolate|leche chocolatada|kakaomilch|schokomilch|lait (au )?chocolat|milk drink', t)
    if milkdrink: return None, 'Chocolate-flavoured milk or milk drink: a composite beverage.'
    if drink and not pdr: return None, 'Cocoa or chocolate beverage as consumed: a prepared drink whose cocoa share is not reported.'
    for pat, why in OUT:
        if re.search(pat, t):
            # "milk chocolate coating mass" and "cooking chocolate" are chocolate itself.
            if 'überzugsmasse' in t or 'couverture' in t: break
            return None, why
    if re.search(r'butter|manteca|beurre|kakaobutter', t): return 'butter', None
    if re.search(r'\bnibs?\b|grué|kakaogrus|nibs de cacao|cacao nib', t): return 'nibs', None
    if re.search(r'cocoa ingredients', t): return 'mixed_products', None
    if re.search(r'bean|seeds?\b|grano|bohne|fève|feve|almendra|semilla', t): return 'beans', None
    if re.search(r'mass[ea]?\b|liquor|licor|pasta de cacao|kakaomasse|pâte de cacao|cocoa paste', t) and not re.search(r'überzugsmasse', t): return 'liquor', None
    nosugar = re.search(r'without added|unsweetened|sin az[uú]car|ohne zucker|sans sucre|no sugar', t)
    # Drink-preparation powders are sold sweetened; 'cocoa powder for drinking' alone does not say sugar was added.
    if pdr and not nosugar and re.search(r'preparation|getränkepulver|instant|beverage base|drink powder|drinking chocolate|trinkschokolade', t): return 'sweetened_powder', None
    if pdr and not nosugar and re.search(r'sugar|zucker|azúcar|azucar|sucre|sweetened|with milk|milch|con leche|getränke', t): return 'sweetened_powder', None
    if pdr: return 'powder', None
    if re.search(r'white|weiß|weiss|weisse|blanc|blanco', t): return 'white_chocolate', None
    if re.search(r'milk ?choc|chocolate,? milk|milchschoko|vollmilch|chocolat au lait|de leche|con leche|au lait', t): return 'milk_chocolate', None
    if re.search(r'dark|bitter|noir|semi.?sweet|bittersweet|zartbitter|halbbitter|negro|amargo|unsweetened chocolate|edelbitter|semi amargo|70 ?%|85 ?%|90 ?%', t): return 'dark_chocolate', None
    if re.search(r'chocolate \(cocoa\) products|cocoa, chocolate|chocolate and cocoa|productos de chocolate|productos (de |100% )?cacao|chocolate confectionery|schokoladen-? ?(und|/) ?kakao|kakaoerzeugnis|schokoladenerzeugnis|chocolate products|cocoa products|^ ?a03|^ ?a0', t): return 'mixed_products', None
    if re.search(r'chocolate|chocolat|schokolade|cioccolato|czekolad', t): return 'chocolate_unspecified', None
    if re.search(r'cocoa|cacao|kakao|cacau', t):
        return {'SB 0715': 'beans', 'DM 0715': 'powder', 'DM 1216': 'liquor', 'DM 1215': 'butter'}.get(code, 'powder' if 'Cocoa' in fn else None), (None if 'Cocoa' in fn else 'Local name names cocoa within a food category that is not cocoa; composition unknown.')
    # Coded or blank local names: fall back to the food code itself.
    fb = {'SB 0715': 'beans', 'DM 0715': 'powder', 'DM 1216': 'liquor', 'DM 1215': 'butter', '05.1.4': 'chocolate_unspecified'}.get(code)
    if fb: return fb, None
    return None, f'Food "{fn}" ({ln}) is not cocoa or chocolate; the match is incidental or a composite food.'

# ---------------------------------------------------------------- FDA TDS
FDA = 'fda2022-tds-elements-fy2018-fy2020'
FDA_FOODS = {'910': ('powder', 'Cocoa powder (FDA TDS food 910)'), '187': ('milk_chocolate', 'Milk chocolate candy bar, plain (FDA TDS food 187)')}
fda_src = raw / 'reports/fda-tds-fy2018-2020-recovery-2026-09-10/analytical-results.txt'
fda_copy = audit / 'primary/fda-elements.txt'
if not fda_copy.exists(): shutil.copy2(fda_src, fda_copy)
native = list(csv.DictReader(fda_copy.open(encoding='cp1252'), delimiter='\t'))
allfda = list(csv.DictReader((root / 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv').open()))
norm = [r for r in allfda if r['tds_food_number'] in FDA_FOODS and r['metal_species']]
for r in norm:
    s = native[int(r['source_row_number']) - 2]
    for nk, k in [('TDSFoodNumber', 'tds_food_number'), ('Concentration', 'concentration_original'),
                  ('ReportingLimit', 'reporting_limit_original'), ('CalendarYear', 'calendar_year')]:
        assert s[nk].strip() == r[k], (nk, r['source_row_number'])
fda_samples = [{'sample': r['sample_id'], 'group': f"FY{r['fiscal_year']} {r['season']}", 'form': FDA_FOODS[r['tds_food_number']][0], 'food': r['tds_food_number'], 'analyte': r['metal_species'],
                'value_ug_kg': None if r['result_status'] == 'non_detect' else float(r['concentration_ppb_equivalent']),
                'censored': r['result_status'] == 'non_detect', 'bound_ug_kg': float(r['reporting_limit_ppb_equivalent']),
                'lower_ug_kg': float(r['concentration_lower_bound_ppb']), 'upper_ug_kg': float(r['concentration_upper_bound_ppb']),
                'year': int(r['calendar_year']), 'locator': f"Original FDA TSV row {r['source_row_number']} (header = row 1)"} for r in norm]
fda_findings = []
for food, (form, label) in FDA_FOODS.items():
    for a in sorted({r['metal_species'] for r in norm if r['tds_food_number'] == food}):
        rs = [r for r in norm if r['metal_species'] == a and r['tds_food_number'] == food]
        det = [r for r in rs if r['result_status'] == 'detected']
        rl = sorted({float(r['reporting_limit_ppb_equivalent']) for r in rs})
        yrs = sorted({int(r['calendar_year']) for r in rs})
        lo = [float(r['concentration_lower_bound_ppb']) for r in rs]; hi = [float(r['concentration_upper_bound_ppb']) for r in rs]
        med = [round(statistics.median(lo), 3), round(statistics.median(hi), 3)]
        fda_findings.append({'id': f'{FDA}:{a}:{form}:us-national:median', 'analyte': a, 'material': label, 'form': form,
            'group': 'United States national collections FY2018–FY2020', 'group_kind': 'purchase_market', 'n': len(rs),
            'statistic': 'median' if det else 'not_detected',
            'reported': {'value': None, 'unit': 'ppb', 'text': f"{len(det)} of {len(rs)} composites detected; reporting limit {', '.join(str(x) for x in rl)} ppb" + (f"; detected values {', '.join(str(float(r['concentration_ppb_equivalent'])) for r in det)} ppb" if det else '')},
            'value_ug_kg': None, 'median_bounds_ug_kg': med if det else None,
            'min_ug_kg': min(float(r['concentration_ppb_equivalent']) for r in det) if det else None, 'max_ug_kg': max(float(r['concentration_ppb_equivalent']) for r in det) if det else None,
            'lod_ug_kg': rl[0], 'years': [yrs[0], yrs[-1]], 'basis': 'as purchased (TDS food as consumed)',
            'conversion': 'ppb equals µg/kg by mass; no conversion', 'censoring': 'FDA zero code = non-detect; bounds 0 to reporting limit; HMI-calculated median carries lower/upper bounds; never a measured zero',
            'locator': 'Original FDA TSV rows ' + ', '.join(r['source_row_number'] for r in rs), 'notes': 'HMI-calculated median of national composites; not brands, lots or growing origin.'})
fda_out = {}
for i, r in enumerate(allfda, start=2):
    iid = f'dataset:data/evidence/fda_tds_fy2018_2020_element_results_samples.csv#row {i}'
    if r['tds_food_number'] in FDA_FOODS and r['metal_species']:
        f = next(x for x in fda_findings if x['analyte'] == r['metal_species'] and x['form'] == FDA_FOODS[r['tds_food_number']][0])
        fda_out[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f['id'], 'rationale': f"FDA TDS {FDA_FOODS[r['tds_food_number']][1]} composite, {r['metal_species']} FY{r['fiscal_year']} {r['season']}."}
    elif r['tds_food_number'] in FDA_FOODS:
        fda_out[iid] = {'disposition': 'out_of_scope', 'rationale': f"Element \"{r['analyte'].strip()}\" is outside the HMI analyte list (nutrient or untracked element)."}
    elif re.search(r'cocoa|chocolate|cacao', r['tds_food_description'], re.I):
        fda_out[iid] = {'disposition': 'out_of_scope', 'rationale': f"FDA TDS food {r['tds_food_number']} \"{r['tds_food_description']}\" is a composite food containing chocolate or cocoa, not cocoa or chocolate itself."}
put(f'extraction/{FDA}.json', {
    'source_id': FDA, 'primary_artifact': str(fda_src), 'primary_sha256': sha(fda_copy), 'text_copy': str(fda_copy.relative_to(root)),
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'FDA Total Diet Study composites of cocoa powder (food 910, 3 collections) and plain milk chocolate candy bars (food 187, 9 collections) with toxic-element results; other chocolate-containing TDS foods are composites.',
    'disposition_locator': 'FDA TDS FY2018–FY2020 analytical results, foods 910 and 187',
    'study': {'design': 'total diet study', 'material_scope': 'Cocoa powder and plain milk chocolate as purchased', 'growing_origin_vs_market': 'US purchase market; growing origin unreported',
              'collection_period': 'FY2018–FY2020 collections', 'n_total': len({r['sample_id'] for r in norm}), 'sampling_unit': 'FDA national or regional composites',
              'method': 'FDA Elemental Analysis Manual ICP-MS', 'lod_loq': 'administrative reporting limits per analyte (ppb)', 'basis': 'as purchased', 'qa': 'FDA laboratory QA; not itemised'},
    'findings': fda_findings, 'sample_values': fda_samples, 'controls': [], 'contradictions_with_stored_summary': [], 'unresolved': []})
(audit / 'fda-row-dispositions.json').write_text(json.dumps(fda_out, indent=0) + '\n')

# ---------------------------------------------------------------- GEMS/Food
GEMS = 'who-gemsfood-heavy-metal-contaminants'
groot = raw / 'reports/gemsfood-contaminants'
june = sorted((groot / '2026-06-20-export').glob('*.csv'))
may = sorted(groot.glob('who-gemsfood-*-2026-05-04.csv'))
SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Mercury': 'tHg', 'Aluminium': 'Al', 'Tin': 'Sn', 'Nickel': 'Ni', 'Chromium': 'Cr',
           'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs', 'Arsenic (Dimethylarsinic acid)': 'DMA'}
UNTRACKED = {'Mercury (inorganic)': 'Inorganic mercury is not a tracked HMI species and is never substituted for total mercury.',
             'Arsenic (Monomethylarsonic Acid)': 'Monomethylarsonic acid is not a tracked HMI species.',
             'Arsenic (organic)': 'Organic arsenic (unspecified) is not a tracked HMI species and is not substituted for total arsenic.'}
MATCH = re.compile(r'cocoa|cacao|chocolat|theobroma|kakao|schoko|cacau', re.I)
# Values far outside every cocoa survey in the ledger signal a unit or entry error.
IMPLAUSIBLE = {'Cd': 30000, 'Pb': 20000, 'tHg': 2000, 'tAs': 10000, 'iAs': 5000}
manifest, records, dropped, rowdisp = [], [], collections.Counter(), {}
seen, june_items = {}, {}
def item_id(p, i): return f"dataset:raw/{p.relative_to(raw)}#row {i}"
for phase, files_ in (('june', june), ('may', may)):
    for p in files_:
        manifest.append({'path': str(p), 'sha256': sha(p), 'bytes': p.stat().st_size, 'export': phase})
        for i, r in enumerate(csv.DictReader(p.open(encoding='utf-8', errors='replace')), start=2):
            food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '').strip(); code = r.get('FoodCode', '').strip()
            if not MATCH.search(food + ' ' + local): continue
            iid = item_id(p, i); cont = r.get('ContaminantName', '').strip(); loc = f"{p.name} data row {i}"
            form, why = classify(food, local, code)
            if form is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'{why} (FoodName "{food}", LocalFoodName "{local}").', 'location': loc}; continue
            if cont in UNTRACKED:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': UNTRACKED[cont], 'location': loc}; continue
            analyte = SPECIES.get(cont)
            if not analyte:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Contaminant "{cont}" is outside the HMI analyte list.', 'location': loc}; continue
            if phase == 'may' and (r['SerialNumber'], cont) in june_items:
                rowdisp[iid] = {'disposition': 'duplicate_of:' + june_items[(r['SerialNumber'], cont)], 'rationale': 'The same GEMS/Food submission (serial number and contaminant) is in the June 2026 export, which is the extracted copy.', 'location': loc}; continue
            key = (analyte, r['SerialNumber'], r['LabNumber'], r['Year'], r['ResultText'], r['LOD'], r['LOQ'], local, r['UnitName'])
            if key in seen:
                seen[key]['region_labels'].append(r['RegionName']); dropped['duplicate_region_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[key]['item_id'], 'rationale': 'The same submission exported under a second WHO region label.', 'location': loc}; continue
            if r['RecordType'] == 'Aggregated':
                # A submitter aggregate summarises an unexported number of results; it cannot be
                # weighted or pooled with individual results, so it stays visible as context.
                rowdisp[iid] = {'disposition': 'context_only', 'rationale': 'GEMS/Food aggregated record: a submitter summary of an unexported number of results, so it cannot be combined with individual results or weighted.', 'location': loc}; dropped['aggregated_record'] += 1; continue
            f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] == 'ug/kg' else None
            if f is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed in µg/kg.', 'location': loc}; dropped['unit'] += 1; continue
            txt = r['ResultText'].strip()
            try:
                lod = float(r['LOD']) * f if r['LOD'] else None
                loq = float(r['LOQ']) * f if r['LOQ'] else None
            except ValueError:
                lod = loq = None
            try: numeric = float(txt)
            except ValueError: numeric = None
            # WHO writes non-detects as ND, 0 or 0.000; any zero is a reporting-limit bound, never a measured zero.
            if txt in ('ND', '') or numeric == 0 or (numeric is None and txt.startswith('<')):
                bound = lod if lod else loq
                if txt.startswith('<'):
                    try: bound = float(txt[1:]) * f
                    except ValueError: pass
                if bound is None:
                    rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': 'Non-detect reported without any detection or quantification limit; no numerical bound exists.', 'location': loc}; dropped['nondetect_without_limit'] += 1; continue
                lower, upper, status = 0.0, bound, 'non_detect'
            elif numeric is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Result text "{txt}" is not a number or a non-detect code.', 'location': loc}; dropped['unparseable'] += 1; continue
            else:
                v = numeric * f; lower = upper = v
                status = 'detected_below_loq' if loq and v < loq else 'detected'
            vkey = (analyte, r['SerialNumber'], r['Year'], local, round(lower, 6), round(upper, 6))
            if vkey in seen:
                seen[vkey]['region_labels'].append(r['RegionName']); dropped['duplicate_unit_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[vkey]['item_id'], 'rationale': 'The same submission repeated in a second unit or region label.', 'location': loc}; continue
            rec = {'analyte': analyte, 'form': form, 'region': r['RegionName'], 'region_labels': [r['RegionName']], 'year': int(r['Year']), 'origin': r['FoodOriginName'] or 'Unreported',
                   'representativeness': r['RepresentativenessName'] or 'Unreported', 'qa': r['AnalyticalQAName'], 'basis_label': r['ResultBasisName'] or 'Unreported',
                   'state': r['FoodStateName'] or 'Unreported', 'food_name': food, 'local_name': local, 'lab': r['LabNumber'], 'serial': r['SerialNumber'],
                   'record_type': r['RecordType'] or 'unlabelled', 'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq,
                   'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
            rec['value_review'] = bool(analyte in IMPLAUSIBLE and (upper > IMPLAUSIBLE[analyte] or (lod or 0) > 5000))
            seen[key] = seen[vkey] = rec; records.append(rec)
            if phase == 'june': june_items[(r['SerialNumber'], cont)] = iid
held = [r for r in records if r['value_review']]
records_all = records
records = [r for r in records if not r['value_review']]
for r in held:
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': 'Record held for value review: its value or detection limit is implausible for cocoa products (above every survey in the ledger, or a limit above 5 mg/kg), so it is kept but never used in a summary or reference.', 'location': r['locator']}
with (audit / 'primary/gemsfood-cocoa-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=list(records_all[0].keys())); w.writeheader()
    for r in records_all: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})
(audit / 'primary/gemsfood-cocoa-reference-input.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'form', 'region', 'year', 'representativeness', 'record_type', 'basis_label', 'value_review', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records_all]) + '\n')

def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)
slug = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
findings = []
groups = collections.defaultdict(list)
for r in records: groups[(r['analyte'], r['form'], r['region'], r['representativeness'])].append(r)
for (analyte, form, region, rep), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    bases = collections.Counter(r['basis_label'] for r in rs)
    findings.append({'id': f"{GEMS}:{analyte}:{form}:{slug(region)}:{slug(rep.split()[0])}:median",
        'analyte': analyte, 'material': FORM_LABEL[form], 'form': form, 'group': f'WHO region {region}; {rep.lower()}',
        'group_kind': 'purchase_market', 'n': len(rs), 'statistic': 'median',
        'reported': {'value': None, 'unit': 'µg/kg', 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}'},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]], 'basis': ', '.join(f'{k} ({v})' for k, v in bases.most_common()),
        'origins': dict(collections.Counter(r['origin'] for r in rs)), 'local_names': dict(collections.Counter(r['local_name'] for r in rs).most_common(8)),
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND, <LOD or 0 with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'lod_ug_kg': None, 'locator': f"primary/gemsfood-cocoa-records.csv rows for {analyte}, {FORM_LABEL[form]}, {region}, {rep}",
        'notes': 'HMI-calculated descriptive summary of GEMS/Food submissions; country identity is not exported; WHO region is a reporting region, not growing origin. Records include individual results and some submitter aggregates. The EURO and European Union labels can hold overlapping national submissions that the export does not let us match.',
        'item_ids': sorted(r['item_id'] for r in rs)})
for f_ in findings:
    for iid in f_['item_ids']:
        rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': f'GEMS/Food {f_["material"].lower()} submission; contributes to the HMI-calculated WHO-region summary for its analyte, form and sampling type.', 'location': next(r['locator'] for r in records if r['item_id'] == iid)}
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp, indent=0) + '\n')
put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(groot), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-cocoa-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Cocoa and chocolate results submitted to WHO GEMS/Food: lead, cadmium, total mercury, aluminium and tin from the June 2026 export, and arsenic species plus earlier regional submissions from the May 2026 per-region exports. Each record is classified to a cocoa form from its local food name; composite foods are excluded.',
    'disposition_locator': 'GEMS/Food 2026-06-20 export and 2026-05-04 per-region exports, FoodName/LocalFoodName naming cocoa, cacao or chocolate',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Cocoa beans, liquor, butter, powder and chocolate by local food name',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only', 'collection_period': 'per record (Year field)',
              'n_total': len(records), 'sampling_unit': 'GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'As is / As consumed / Dry weight labels retained per record', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-cocoa-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'form', 'region', 'year', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'local_name', 'locator')} for r in held],
    'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so WHO region cannot be read as growing origin.', 'Forms are assigned from free-text local food names; unspecified "chocolate and cocoa products" stay a separate form.']})
print('FDA rows', len(norm), '| GEMS records', len(records), dict(collections.Counter(r['analyte'] for r in records)), dict(collections.Counter(r['form'] for r in records)),
      '| held', len(held), '| dropped', dict(dropped), '| findings', len(findings), '| row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())))
