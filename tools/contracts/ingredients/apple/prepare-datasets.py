"""Extract apple rows from the two sample-level datasets (FDA TDS FY2018-FY2020, WHO GEMS/Food).

Reproducible: reads the preserved primary exports, hashes them, and writes a decision for every
dataset row whose food name or local food name contains "apple" (the shared discovery rule).
Fresh apple and dried apple stay separate materials. Apple juice, applesauce and compote,
apple baby foods, canned apple, cider and every composite food that only contains apple are out
of scope, each with its reason; so are pineapple, custard apple, star apple, rose apple,
pomegranate ("granate apple") and crab apple. Non-detects stay zero-to-limit intervals; nothing
is imputed.
"""
import csv, hashlib, json, pathlib, statistics, collections, os, re, shutil

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/apple'
raw = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')
def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)
slug = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

# ---------------------------------------------------------------- FDA TDS
# Food 78 "Apple, red, with peel, raw" is the only fresh apple food. Every other TDS food naming
# apple (juice, pie, baby foods) is out of scope; nutrient elements are outside the HMI list.
FDA = 'fda2022-tds-elements-fy2018-fy2020'
fda_src = raw / 'reports/fda-tds-fy2018-2020-recovery-2026-09-10/analytical-results.txt'
fda_copy = audit / 'primary/fda-elements.txt'
if not fda_copy.exists(): shutil.copy2(fda_src, fda_copy)
assert sha(fda_copy) == sha(fda_src)
native = list(csv.DictReader(fda_copy.open(encoding='cp1252'), delimiter='\t'))
norm_path = 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv'
all_norm = list(csv.DictReader((root / norm_path).open()))
fda_rowdisp = {}
FDA_OUT = {'apple-juice': 'Apple juice (bottled or baby-food juice) is a different material with its own page.',
           'apple-pie': 'Apple pie is a composite bakery food that only contains apple.',
           'fruit-purees': 'Baby-food fruit puree containing apple; apple baby foods and purees belong to the applesauce and infant-food pages.',
           'mixed-meals': 'Baby-food mixed meal containing apple among other ingredients; a composite food.'}
norm = []
for i, r in enumerate(all_norm, start=2):
    if 'apple' not in (r['tds_food_description'] + ' ' + r['ingredient_slug']).lower(): continue
    iid = f'dataset:{norm_path}#row {i}'
    if r['tds_food_number'] != '78':
        fda_rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'TDS food {r["tds_food_number"]} "{r["tds_food_description"]}": ' + FDA_OUT.get(r['ingredient_slug'], 'not fresh apple.'), 'location': f'{norm_path} row {i}; original FDA TSV row {r["source_row_number"]}'}
    elif not r['metal_species']:
        fda_rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Element "{r["analyte"].strip()}" in raw apple is a nutrient or untracked element outside the HMI analyte list.', 'location': f'{norm_path} row {i}; original FDA TSV row {r["source_row_number"]}'}
    else:
        s = native[int(r['source_row_number']) - 2]
        for nk, k in [('TDSFoodNumber', 'tds_food_number'), ('Concentration', 'concentration_original'), ('ReportingLimit', 'reporting_limit_original'), ('CalendarYear', 'calendar_year')]:
            assert s[nk].strip() == r[k], (nk, r['source_row_number'])
        r['_iid'] = iid; norm.append(r)
FDA_LABEL = {'Pb': 'lead', 'Cd': 'cadmium', 'tAs': 'total arsenic', 'tHg': 'total mercury', 'Ni': 'nickel', 'Cr': 'chromium', 'U': 'uranium'}
fda_samples = [{'sample': r['sample_id'], 'group': f"FY{r['fiscal_year']} {r['season']}", 'region': r['region'], 'analyte': r['metal_species'],
                'value_ug_kg': None if r['result_status'] == 'non_detect' else float(r['concentration_ppb_equivalent']),
                'censored': r['result_status'] == 'non_detect', 'bound_ug_kg': float(r['reporting_limit_ppb_equivalent']),
                'lower_ug_kg': float(r['concentration_lower_bound_ppb']), 'upper_ug_kg': float(r['concentration_upper_bound_ppb']),
                'locator': f"Original FDA TSV row {r['source_row_number']} (header = row 1)", 'item_id': r['_iid']} for r in norm]
fda_findings = []
for a in ['Pb', 'Cd', 'tAs', 'tHg', 'Ni', 'Cr', 'U']:
    rs = [r for r in fda_samples if r['analyte'] == a]
    if not rs: continue
    det = [r for r in rs if not r['censored']]
    rl = sorted({r['bound_ug_kg'] for r in rs})
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    fda_findings.append({'id': f'{FDA}:{a}:fresh:us-national:median', 'analyte': a, 'material': 'Apple, red, with peel, raw (FDA TDS food 78)', 'material_key': 'fresh',
        'group': 'United States, national Total Diet Study collections FY2018–FY2020', 'group_kind': 'purchase_market', 'n': len(rs), 'statistic': 'median',
        'reported': {'value': None, 'unit': 'ppb', 'text': f"{len(det)} of {len(rs)} composites detected" + (f" ({', '.join(str(r['value_ug_kg']) for r in det)} ppb)" if det else '') + f"; reporting limit {', '.join(f'{x:g}' for x in rl)} ppb"},
        'value_ug_kg': None, 'median_bounds_ug_kg': [statistics.median(lo), statistics.median(hi)],
        'quartile_bounds_ug_kg': {'q1': [q(lo, .25), q(hi, .25)], 'q3': [q(lo, .75), q(hi, .75)]},
        'min_ug_kg': min(r['value_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['value_ug_kg'] for r in det) if det else None, 'lod_ug_kg': rl[0],
        'detected_n': len(det), 'years': [2017, 2020], 'basis': 'as purchased (raw apple with peel, edible portion)',
        'conversion': 'ppb equals µg/kg by mass; no conversion', 'censoring': 'FDA zero code = non-detect; bounds 0 to reporting limit; never a measured zero',
        'locator': 'Original FDA TSV rows ' + ', '.join(r['locator'].split(' row ')[1].split(' ')[0] for r in rs),
        'notes': 'HMI-calculated median of 27 national composites (each a composite of apples bought in one US region and collection); not brands, lots or growing origin. Collections FY2018 winter and summer, FY2019 winter and summer, FY2020 winter.',
        'item_ids': sorted(r['item_id'] for r in rs)})
for f_ in fda_findings:
    for iid in f_['item_ids']: fda_rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': f'FDA TDS raw red apple composite; contributes to the FDA apple {FDA_LABEL[f_["analyte"]]} result.', 'location': f'{norm_path} {iid.split("#")[1]}'}
# Summary-by-food rows restate the same composites.
sum_path = 'data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv'
for i, r in enumerate(csv.DictReader((root / sum_path).open()), start=2):
    if 'apple' not in json.dumps(r).lower(): continue
    iid = f'dataset:{sum_path}#row {i}'
    fda_rowdisp[iid] = {'disposition': 'duplicate_of:source:' + FDA, 'rationale': 'HMI summary row restating FDA TDS composites decided individually in this ledger.', 'location': f'{sum_path} row {i}'}
(audit / 'fda-row-dispositions.json').write_text(json.dumps(fda_rowdisp, indent=0) + '\n')
put(f'extraction/{FDA}.json', {
    'source_id': FDA, 'primary_artifact': str(fda_src), 'primary_sha256': sha(fda_copy), 'text_copy': str(fda_copy.relative_to(root)),
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Twenty-seven national FDA Total Diet Study composites of raw red apple with peel (food 78), each with lead, cadmium, total arsenic, total mercury, nickel, chromium and uranium results.',
    'disposition_locator': 'FDA TDS FY2018–FY2020 analytical results, TDSFoodNumber 78 "Apple, red, with peel, raw"',
    'study': {'design': 'total diet study', 'material_scope': 'Raw red apple with peel as purchased (prepared-food composite)', 'growing_origin_vs_market': 'US purchase market (four regions); growing origin unreported',
              'collection_period': 'FY2018 winter and summer, FY2019 winter and summer, FY2020 winter', 'n_total': 27, 'sampling_unit': 'FDA regional composites',
              'method': 'FDA Elemental Analysis Manual ICP-MS', 'lod_loq': 'administrative reporting limits per analyte (ppb): Pb 4, Cd 1, tAs 3, tHg 1, Ni 40, Cr 50, U 1', 'basis': 'as purchased', 'qa': 'FDA laboratory QA; not itemised'},
    'findings': fda_findings, 'sample_values': fda_samples, 'controls': [], 'contradictions_with_stored_summary': [], 'unresolved': []})

# ---------------------------------------------------------------- GEMS/Food
GEMS = 'who-gemsfood-heavy-metal-contaminants'
groot = raw / 'reports/gemsfood-contaminants'
june = sorted((groot / '2026-06-20-export').glob('*.csv'))
may = sorted(groot.glob('who-gemsfood-*-2026-05-04.csv'))
SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Mercury': 'tHg', 'Aluminium': 'Al', 'Aluminum': 'Al', 'Tin': 'Sn', 'Nickel': 'Ni', 'Chromium': 'Cr',
           'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs', 'Arsenic (Dimethylarsinic acid)': 'DMA', 'Methyl mercury': 'MeHg', 'Methylmercury': 'MeHg'}
UNTRACKED = {'Mercury (inorganic)': 'Inorganic mercury is not a tracked HMI species and is never substituted for total mercury.',
             'Arsenic (Monomethylarsonic Acid)': 'Monomethylarsonic acid is not a tracked HMI species.',
             'Arsenic (organic)': 'Organic arsenic (unspecified) is not a tracked HMI species and is not substituted for total arsenic.'}
MATERIAL_LABEL = {'fresh': 'Fresh apple', 'dried': 'Dried apple'}
OTHER_FRUIT = re.compile(r'pine ?apple|custard|star apple|rose apple|sugar apple|granat|cashew|wood apple|crab ?apple|applewood|ananas', re.I)
INFANT = re.compile(r'infant|baby|\bbf\b|toddler|children|v[ýy][žz]iv|kojenec|dojcen|nano |jablk', re.I)
JUICE = re.compile(r'juice|jus\b|saft|nectar|drink|concentrate|cider|cidre|apfelwein|wine|perry|water|beverage|syrup|sirup', re.I)
SAUCE = re.compile(r'sauce|compote|\bmus\b|apfelmus|pur[eé]e|butter', re.I)
CANNED = re.compile(r'canned|konserve|jarred|tinned', re.I)
COMPOSITE = re.compile(r'pie|strudel|tart|turnover|crumble|cobbler|filling|cookie|cereal|oat|muesli|granola|bar\b|bars\b|candy|chew|jam|jelly|spread|snack|chips|crisp|pancake|biscuit|cracker|puff|flavou?r|cabbage|yogh?urt|cranberry mix|nugget|fruit salad|frozen|vinegar|essig|dessert|\bgel\b|tea\b|infusion|herbal', re.I)

def material(food, local, state):
    """Return (material, None) for fresh or dried apple, or (None, reason) for out-of-scope foods."""
    t = f'{food} {local}'
    if food == 'Feed': return None, f'"{local}" is animal feed (apple pomace or a pet food), not apple for people.'
    if OTHER_FRUIT.search(t) and not re.search(r'apple \(malus|^apple$', local, re.I): return None, f'"{food} / {local}" is a different fruit (pineapple, custard, star, rose or crab apple, or pomegranate), not apple (Malus domestica).'
    if INFANT.search(t): return None, f'"{local}" is an apple baby food or infant product; apple baby foods belong to the applesauce and infant-food pages.'
    if JUICE.search(t): return None, f'"{local}" is apple juice, cider or another apple drink; apple juice has its own page.'
    if SAUCE.search(t): return None, f'"{local}" is applesauce, apple compote or puree; applesauce has its own page.'
    if CANNED.search(t): return None, f'"{local}" is canned or jarred apple in a packing medium, a processed product distinct from fresh apple.'
    if COMPOSITE.search(t): return None, f'"{food} / {local}" is a composite or processed food that only contains apple.'
    if re.search(r'dried|\bdry\b|dehydr', t, re.I): return 'dried', None
    if food == 'Apple' or food == 'POME FRUITS' and re.search(r'^apples?$', local, re.I):
        if state == 'Cooked': return None, f'"{local}" was analysed cooked; no cooked plain apple is in scope.'
        return 'fresh', None
    return None, f'"{food} / {local}" does not identify apple fruit as the food analysed.'

def variant(local, portion):
    l = local.lower()
    if 'unwashed' in l: return 'unwashed'
    if 'washed' in l: return 'washed'
    if portion.startswith('Total food'): return 'whole'
    return ''
VARIANT_LABEL = {'': '', 'washed': 'washed', 'unwashed': 'unwashed', 'whole': 'whole fruit incl. core'}
CULTIVARS = ['Red Delicious', 'Golden Delicious', 'McIntosh', 'Gala', 'Granny Smith', 'Spartan', 'Ambrosia', 'Empire', 'Honeycrisp', 'Fuji', 'Cortland', 'Paula Red', 'Pink Lady', 'Jonagold', 'Braeburn', 'Ginger Gold', 'Sweet Tango', 'Jazz', 'Sunrise']
def cultivar(local):
    l = re.sub(r'[^a-z]', '', local.lower()).replace('macintosh', 'mcintosh').replace('mac', 'mcintosh') if 'mac' in local.lower() and 'mcintosh' not in local.lower() else re.sub(r'[^a-z]', '', local.lower())
    for c in CULTIVARS:
        k = re.sub(r'[^a-z]', '', c.lower())
        if k in l or (c == 'Honeycrisp' and 'honeycrisp' in l) or (c == 'Sweet Tango' and 'sweetango' in l): return c
    return None

manifest, records, dropped, rowdisp = [], [], collections.Counter(), {}
seen, june_items = {}, {}
def item_id(p, i): return f"dataset:raw/{p.relative_to(raw)}#row {i}"
for phase, files_ in (('june', june), ('may', may)):
    for p in files_:
        manifest.append({'path': str(p), 'sha256': sha(p), 'bytes': p.stat().st_size, 'export': phase})
        for i, r in enumerate(csv.DictReader(p.open(encoding='utf-8', errors='replace')), start=2):
            food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '').strip()
            if 'apple' not in (food + ' ' + local).lower(): continue
            iid = item_id(p, i); cont = r.get('ContaminantName', '').strip(); loc = f"{p.name} data row {i}"
            mat, why = material(food, local, r.get('FoodStateName', ''))
            if not mat:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': why, 'location': loc}; continue
            if cont in UNTRACKED:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': UNTRACKED[cont], 'location': loc}; continue
            analyte = SPECIES.get(cont)
            if not analyte:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Contaminant "{cont}" is outside the HMI analyte list.', 'location': loc}; continue
            if phase == 'may' and (r['SerialNumber'], cont) in june_items:
                rowdisp[iid] = {'disposition': 'duplicate_of:' + june_items[(r['SerialNumber'], cont)], 'rationale': 'The same GEMS/Food submission (serial number and contaminant) is in the June 2026 export, which is the extracted copy.', 'location': loc}; continue
            key = (analyte, r['SerialNumber'], r['LabNumber'], r['Year'], r['ResultText'], r['LOD'], r['LOQ'], r['LocalFoodName'], r['UnitName'])
            if key in seen:
                seen[key]['region_labels'].append(r['RegionName']); dropped['duplicate_region_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[key]['item_id'], 'rationale': 'The same submission exported under a second WHO region label (WHO EURO and European Union, or EMRO and Codex Near-East).', 'location': loc}; continue
            f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] == 'ug/kg' else None
            if f is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed in µg/kg of apple.', 'location': loc}; dropped['unit'] += 1; continue
            txt = r['ResultText'].strip()
            lod = float(r['LOD']) * f if r['LOD'] else None
            loq = float(r['LOQ']) * f if r['LOQ'] else None
            try: numeric = float(txt)
            except ValueError: numeric = None
            # WHO writes non-detects as ND, 0 or 0.000; a zero is a reporting-limit bound, never a measured zero.
            if txt in ('ND', '') or numeric == 0:
                bound = lod if lod else loq
                if bound is None:
                    rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': 'Non-detect reported without any detection or quantification limit; no numerical bound exists.', 'location': loc}; dropped['nondetect_without_limit'] += 1; continue
                lower, upper, status = 0.0, bound, 'non_detect'
            elif numeric is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Result text "{txt}" is not a number or a non-detect code.', 'location': loc}; continue
            else:
                v = numeric * f; lower = upper = v
                status = 'detected_below_loq' if loq and v < loq else 'detected'
            vkey = (analyte, r['SerialNumber'], r['Year'], round(lower, 6), round(upper, 6))
            if vkey in seen:
                seen[vkey]['region_labels'].append(r['RegionName']); dropped['duplicate_unit_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[vkey]['item_id'], 'rationale': 'The same submission repeated in a second unit or region label.', 'location': loc}; continue
            region = {'European Union': 'EURO', 'Codex Committee Near-East': 'EMRO'}.get(r['RegionName'], r['RegionName'])
            organic = bool(re.search(r'organic|prodMeth=Organic', local, re.I))
            rec = {'analyte': analyte, 'material': mat, 'variant': variant(local, r['PortionTypeName']), 'region': region, 'region_labels': [r['RegionName']], 'year': int(r['Year']),
                   'origin': r['FoodOriginName'] or 'Unreported', 'representativeness': r['RepresentativenessName'] or 'Unreported', 'qa': r['AnalyticalQAName'], 'basis_label': r['ResultBasisName'],
                   'portion': r['PortionTypeName'], 'state': r['FoodStateName'] or 'Unreported', 'local_name': local, 'organic': organic, 'cultivar': cultivar(local) if mat == 'fresh' else None,
                   'lab': r['LabNumber'], 'serial': r['SerialNumber'], 'record_type': r['RecordType'] or 'unlabelled', 'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq,
                   'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
            # Limits or values far outside plausible apple trace-element levels signal a unit-label error.
            implausible = {'Cd': 1000, 'tHg': 500, 'Pb': 5000, 'tAs': 5000, 'iAs': 5000}
            rec['value_review'] = bool(analyte in implausible and ((lod or 0) > 1000 or (loq or 0) > 3000 or upper > implausible[analyte]))
            seen[key] = seen[vkey] = rec; records.append(rec)
            if phase == 'june': june_items[(r['SerialNumber'], cont)] = iid
held = [r for r in records if r['value_review']]
records_all = records
records = [r for r in records if not r['value_review']]
for r in held:
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': 'Record held for value review: its detection limit or value is implausible for apple (unit-scale mismatch), so it is kept but never used in a summary or reference.', 'location': r['locator']}
with (audit / 'primary/gemsfood-apple-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=list(records_all[0].keys())); w.writeheader()
    for r in records_all: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})
(audit / 'primary/gemsfood-apple-reference-input.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'material', 'variant', 'region', 'year', 'representativeness', 'value_review', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records_all]) + '\n')

findings = []
groups = collections.defaultdict(list)
for r in records: groups[(r['analyte'], r['material'], r['variant'], r['region'], r['representativeness'])].append(r)
for (analyte, mat, var, region, rep), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    vlabel = f'; {VARIANT_LABEL[var]}' if var else ''
    findings.append({'id': f"{GEMS}:{analyte}:{mat}{'-' + var if var else ''}:{slug(region)}:{slug(rep.split()[0])}:median",
        'analyte': analyte, 'material': MATERIAL_LABEL[mat] + (f' ({VARIANT_LABEL[var]})' if var else ''), 'material_key': mat, 'variant': var,
        'group': f'WHO region {region}; {rep.lower()}{vlabel}', 'group_kind': 'purchase_market', 'n': len(rs), 'statistic': 'median',
        'basis': 'as sold or as consumed (GEMS/Food result basis "As is" / "As consumed")',
        'reported': {'value': None, 'unit': 'µg/kg', 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}'},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]], 'organic_n': sum(r['organic'] for r in rs),
        'origins': dict(collections.Counter(r['origin'] for r in rs)),
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND or 0 with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'lod_ug_kg': None, 'locator': f"primary/gemsfood-apple-records.csv rows for {analyte}, {MATERIAL_LABEL[mat]}{vlabel}, {region}, {rep}",
        'notes': 'HMI-calculated descriptive summary of individual GEMS/Food submissions; country identity is not exported; WHO region is a reporting region, not where the apples were grown. FoodOriginName gives only domestic or imported.',
        'item_ids': sorted(r['item_id'] for r in rs)})
for f_ in findings:
    for iid in f_['item_ids']: rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': 'Individual GEMS/Food apple submission; contributes to the HMI-calculated WHO-region summary for its analyte, material and sampling type.', 'location': next(r['locator'] for r in records if r['item_id'] == iid)}
# Content hash of each decided row, computed exactly as the shared discovery scanner hashes a row.
for p in june + may:
    prefix = item_id(p, 2).rsplit('#', 1)[0] + '#'
    wanted = {k for k in rowdisp if k.startswith(prefix)}
    if not wanted: continue
    with p.open(encoding='utf-8-sig', newline='') as fh:
        for i, r in enumerate(csv.DictReader(fh), start=2):
            iid = item_id(p, i)
            if iid in wanted: rowdisp[iid]['content_sha256'] = hashlib.sha256(json.dumps(r, sort_keys=True, ensure_ascii=False, separators=(',', ':')).encode()).hexdigest()
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp, indent=0) + '\n')

# Descriptive sub-analyses used in prose (not table rows): cultivar, organic label, origin label, washed/unwashed, period.
def med(rs):
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    return [round(statistics.median(lo), 2), round(statistics.median(hi), 2)]
def summ(rs): return {'n': len(rs), 'detected': sum(r['status'] != 'non_detect' for r in rs), 'median_bounds': med(rs) if rs else None,
                      'max_detected': max([r['upper_ug_kg'] for r in rs if r['status'] != 'non_detect'], default=None),
                      'over_100': sum(r['lower_ug_kg'] > 100 for r in rs), 'over_50': sum(r['lower_ug_kg'] > 50 for r in rs), 'years': [min(r['year'] for r in rs), max(r['year'] for r in rs)] if rs else None}
fresh = [r for r in records if r['material'] == 'fresh']
analysis = {'by_region': {}, 'by_cultivar_paho': {}, 'organic_paho': {}, 'origin_label': {}, 'washed': {}, 'period_euro': {}, 'dried': {}}
for a in ['Pb', 'Cd', 'tAs', 'iAs', 'tHg', 'Ni', 'Cr', 'Al', 'Sn']:
    fa = [r for r in fresh if r['analyte'] == a]
    if not fa: continue
    analysis['by_region'][a] = {reg: summ([r for r in fa if r['region'] == reg]) for reg in sorted({r['region'] for r in fa})}
    paho = [r for r in fa if r['region'] == 'PAHO']
    analysis['by_cultivar_paho'][a] = {c: summ([r for r in paho if r['cultivar'] == c]) for c in sorted({r['cultivar'] for r in paho if r['cultivar']})}
    analysis['organic_paho'][a] = {'organic': summ([r for r in paho if r['organic']]), 'not_labelled_organic': summ([r for r in paho if not r['organic']])}
    analysis['origin_label'][a] = {f'{reg}|{o}': summ([r for r in fa if r['region'] == reg and r['origin'] == o]) for reg in sorted({r['region'] for r in fa}) for o in sorted({r['origin'] for r in fa if r['region'] == reg})}
    analysis['washed'][a] = {v: summ([r for r in fa if r['variant'] == v]) for v in ('washed', 'unwashed')}
    eu = [r for r in fa if r['region'] == 'EURO']
    analysis['period_euro'][a] = {p_: summ([r for r in eu if lo_ <= r['year'] <= hi_]) for p_, lo_, hi_ in [('1995-2004', 1995, 2004), ('2005-2009', 2005, 2009), ('2010-2014', 2010, 2014), ('2015-2019', 2015, 2019), ('2020-2024', 2020, 2024)] if any(lo_ <= r['year'] <= hi_ for r in eu)}
    da = [r for r in records if r['material'] == 'dried' and r['analyte'] == a]
    if da: analysis['dried'][a] = {reg: summ([r for r in da if r['region'] == reg]) for reg in sorted({r['region'] for r in da})}
put('gemsfood-apple-analysis.json', analysis)

put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(groot), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-apple-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual fresh and dried apple results submitted to WHO GEMS/Food: lead, cadmium, total mercury, aluminium, tin, nickel and chromium from the June 2026 export, and total and inorganic arsenic from the May 2026 per-region exports, kept separate by material and by washed, unwashed and whole-fruit portions where labelled.',
    'disposition_locator': 'GEMS/Food 2026-06-20 export and 2026-05-04 per-region exports, FoodName "Apple" and "DRIED FRUITS" / LocalFoodName naming apple',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Fresh apple (edible portion or whole fruit) and dried apple',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only', 'collection_period': 'per record (Year field)',
              'n_total': len(records), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'As is / As consumed labels retained; no moisture conversion', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-apple-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'material', 'region', 'year', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'locator')} for r in held],
    'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so WHO region cannot be read as growing origin.']})
print('FDA apple samples', len(fda_samples), '| FDA row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in fda_rowdisp.values())))
print('GEMS records', len(records), dict(collections.Counter((r['analyte'], r['material']) for r in records)), '| held', len(held), '| dropped', dict(dropped),
      '| findings', len(findings), '| row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())))
print(collections.Counter(r['representativeness'] for r in records), collections.Counter(r['variant'] for r in records))
