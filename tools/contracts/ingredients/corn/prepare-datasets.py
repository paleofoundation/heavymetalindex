"""Extract corn rows from the two sample-level datasets (FDA TDS FY2018-FY2020, WHO GEMS/Food).

Reproducible: reads the preserved primary exports, hashes them, and writes one decision for
every dataset row in the freshly recomputed corn universe (triage/universe-items.json, written
by dump-universe.mjs). Maize grain, fresh or frozen sweet corn, cooked fresh corn, sweet corn of
unstated form, baby corn and cooked corn of unstated form stay separate materials. Canned corn,
flour, meal, grits, semolina, starch, flakes, popcorn, oil, syrup, snacks, infant foods, feed and
corn salad (lamb's lettuce) are other foods with their own pages and are never summarized here.
Non-detects stay zero-to-limit intervals; nothing is imputed.
"""
import csv, hashlib, json, pathlib, statistics, collections, os, re, shutil

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/corn'
MOUNT = pathlib.Path('/Volumes/HMI-Library/heavy-metal-index-raw')
BACKUP = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
raw = MOUNT if MOUNT.exists() else BACKUP
def phys(rel):
    """Mounted library first; some exports exist only in the backup copy of the library."""
    m = MOUNT / rel
    return m if m.exists() else BACKUP / rel
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')
def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)
slug = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
universe = json.loads((audit / 'triage/universe-items.json').read_text())['items']

MATERIAL_LABEL = {'grain': 'Maize grain', 'sweet': 'Sweet corn, fresh or frozen', 'sweet_cooked': 'Sweet corn, cooked as eaten',
                  'sweet_unstated': 'Sweet corn, pack not stated', 'baby': 'Baby corn, fresh', 'cooked_unstated': 'Corn, cooked, form not stated'}

# ---------------------------------------------------------------- FDA TDS (food 54, corn frozen boiled)
FDA = 'fda2022-tds-elements-fy2018-fy2020'
fda_src = phys('reports/fda-tds-fy2018-2020-recovery-2026-09-10/analytical-results.txt')
fda_copy = audit / 'primary/fda-elements.txt'
if not fda_copy.exists(): shutil.copy2(fda_src, fda_copy)
native = list(csv.DictReader(fda_copy.open(encoding='cp1252'), delimiter='\t'))
norm = [r for r in csv.DictReader((root / 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv').open())
        if r['tds_food_number'] == '54' and r['metal_species']]
for r in norm:
    s = native[int(r['source_row_number']) - 2]
    for nk, k in [('TDSFoodNumber', 'tds_food_number'), ('Concentration', 'concentration_original'),
                  ('ReportingLimit', 'reporting_limit_original'), ('CalendarYear', 'calendar_year')]:
        assert s[nk].strip() == r[k], (nk, r['source_row_number'])
fda_samples = [{'sample': r['sample_id'], 'group': f"FY{r['fiscal_year']} {r['season']}, {r['region']}", 'analyte': r['metal_species'], 'material': 'sweet_cooked',
                'value_ug_kg': None if r['result_status'] == 'non_detect' else float(r['concentration_ppb_equivalent']),
                'censored': r['result_status'] == 'non_detect', 'bound_ug_kg': float(r['reporting_limit_ppb_equivalent']),
                'lower_ug_kg': float(r['concentration_lower_bound_ppb']), 'upper_ug_kg': float(r['concentration_upper_bound_ppb']),
                'calendar_year': int(r['calendar_year']), 'basis': 'as eaten (boiled)',
                'locator': f"Original FDA TSV row {r['source_row_number']} (header = row 1)"} for r in norm]
fda_findings = []
for a in sorted({r['metal_species'] for r in norm}):
    rs = [s for s in fda_samples if s['analyte'] == a]
    det = [s for s in rs if not s['censored']]
    rl = sorted({s['bound_ug_kg'] for s in rs})
    lo = [s['lower_ug_kg'] for s in rs]; hi = [s['upper_ug_kg'] for s in rs]
    yrs = sorted({s['calendar_year'] for s in rs})
    fda_findings.append({'id': f'{FDA}:{a}:us-national:median', 'analyte': a, 'material': 'sweet_cooked', 'material_text': 'Corn, frozen, boiled (FDA TDS food 54)',
        'group': 'United States, four regions, FY2018–FY2020', 'group_kind': 'purchase_market', 'site_context': 'market_retail', 'n': len(rs), 'statistic': 'median',
        'reported': {'value': None, 'unit': 'ppb', 'text': f"{len(det)} of {len(rs)} composites detected; reporting limit {', '.join(f'{x:g}' for x in rl)} ppb" + (f"; detected values {', '.join(f'{s['value_ug_kg']:g}' for s in det)} ppb" if det and len(det) <= 8 else '')},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(s['value_ug_kg'] for s in det) if det else None, 'max_ug_kg': max(s['value_ug_kg'] for s in det) if det else None,
        'detected_n': len(det), 'lod_ug_kg': rl[0], 'years': [yrs[0], yrs[-1]], 'basis': 'as eaten (boiled)',
        'conversion': 'ppb equals µg/kg by mass; no conversion', 'censoring': 'FDA zero code = non-detect; bounds 0 to reporting limit; never a measured zero; HMI-calculated median carries lower/upper bounds',
        'locator': 'primary/fda-elements.txt rows ' + ', '.join(s['locator'].split()[3] for s in rs), 'notes': 'National retail composites of frozen corn boiled in water; not lots, brands or growing origin.'})
put(f'extraction/{FDA}.json', {
    'source_id': FDA, 'primary_artifact': str(fda_src), 'primary_sha256': sha(fda_copy), 'text_copy': str(fda_copy.relative_to(root)),
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'FDA Total Diet Study FY2018–FY2020 food 54 (corn, frozen, boiled): 27 national retail composites with seven toxic-element results each. Other corn foods in the study (canned corn, grits, flakes, tortilla, popcorn, chips) belong to their own pages.',
    'disposition_locator': 'FDA TDS FY2018–FY2020 analytical results, TDSFoodNumber 54',
    'study': {'design': 'total diet study', 'material_scope': 'Frozen corn kernels boiled as eaten (prepared-food composite)', 'growing_origin_vs_market': 'US retail purchase market, four regions; growing origin unreported',
              'site_context': 'market_retail', 'collection_period': 'FY2018–FY2020 (calendar 2017–2020), winter and summer collections', 'n_total': 27, 'sampling_unit': 'FDA regional composites',
              'method': 'FDA Elemental Analysis Manual ICP-MS', 'lod_loq': 'administrative reporting limits per analyte (ppb)', 'basis': 'as eaten', 'qa': 'FDA laboratory QA; not itemised'},
    'findings': fda_findings, 'sample_values': fda_samples, 'controls': [], 'contradictions_with_stored_summary': [
        'wiki/ingredients/corn.md (legacy page) describes FDA nickel as "episodic elevation, maximum 160 ppb"; the primary rows show 5 of 27 composites detected at 48–160 ppb with a 40 ppb reporting limit.'],
    'unresolved': []})

# ---------------------------------------------------------------- GEMS/Food
GEMS = 'who-gemsfood-heavy-metal-contaminants'
SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Mercury': 'tHg', 'Aluminium': 'Al', 'Aluminum': 'Al', 'Tin': 'Sn', 'Nickel': 'Ni', 'Chromium': 'Cr',
           'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs', 'Arsenic (Dimethylarsinic acid)': 'DMA'}
UNTRACKED = {'Mercury (inorganic)': 'Inorganic mercury is not a tracked HMI species and is never substituted for total mercury.',
             'Arsenic (Monomethylarsonic Acid)': 'Monomethylarsonic acid is not a tracked HMI species.',
             'Arsenic (organic)': 'Organic arsenic (unspecified) is not a tracked HMI species and is not substituted for total arsenic.',
             'Arsenic (Dimethylarsinic acid)': 'Dimethylarsinic acid is reported for too few corn records to support any statement and is not an HMI page analyte.'}
OTHER = [  # (pattern on local name, reason) for corn foods that belong to other pages
    (r'\bfeed\b|silage|gluten feed|germ expeller|germ meal|middlings|targetconsum=(cattle|poultry|animal|fattening|fish|sheep|feed)', 'animal feed, not food for people'),
    (r'\boil\b|oils\b', 'corn oil, which has its own page'),
    (r'syrup', 'corn syrup, which has its own page'),
    (r'can+ed|canning|jarred|in brine|brine|cream[ -]?style|cream corn|creamed|niblets|packaged|ayam|hosen|first choice|happy family|solbio|farmland|whole kernel corn$|^whole kernel corn|sweet corn canned|vacuum-packing', 'canned, jarred or packaged sweet corn whose pack is not fresh or frozen; canned corn has its own page'),
    (r'flour|meal\b|cornmeal|masa|semolina|gries|grieß|grits|polenta|milled|milling|starch|stärke|maisgrieß|maizemiddling|kocka', 'milled maize products (flour, meal, semolina, grits, polenta, starch), which have their own pages'),
    (r'flake|cornflakes|corn pops|cereal|puff|crisps?\b|chips|curls|snack|nuts|bran|gofio|elbows|pasta|spaghetti|fusilli|penne|taco|tortilla|bread|crisp', 'a breakfast cereal, snack, pasta, tortilla or other finished corn food with its own page'),
    (r'pop[ -]?corn|popped|poppade', 'popcorn, which has its own page'),
    (r'soup|pudding|flavour|bean curd', 'a composite food that contains or is flavoured with corn'),
    (r'gluten', 'maize gluten, a milling by-product'),
]
def material(food, local, state, category):
    """Return (material, None) for corn in scope, or (None, reason)."""
    l = local.lower().strip()
    if food in ('Corn salad',) and 'baby' not in l: return None, f'"{local}" is corn salad (lamb\'s lettuce, Valerianella locusta), a leafy vegetable, not corn.'
    if food == 'LEAFY VEGETABLES': return None, 'Lamb\'s lettuce (corn salad), a leafy vegetable, not corn.'
    if food == 'Feed': return None, f'"{local}" is animal feed, not food for people.'
    if food in ('Maize oil, Edible', 'Fats and oils NES'): return None, 'Corn oil, which has its own page.'
    if food in ('Maize flour',): return None, f'"{local}" is a milled maize product (flour, meal or starch), which has its own page.'
    if food in ('Popcorn',): return None, 'Popcorn, which has its own page.'
    if food in ('Snack food', 'Composite food NES', 'Bread & other cooked cereal products', 'Ready-to-eat meal for infants and young children', 'Cereal-based food for infants and young children',
                'Food for infant or children NES', 'Infant formulae, powder', 'Products for special nutritional use NES', 'Sugar and confectionary NES', 'Ices and desserts', 'Ready to eat soups',
                'Cereal-based dishes', 'Chicken meat', 'SAUCE AND CONDIMENTS', 'Herb, spice or condiment NES', 'Rice', 'Legumes and pulses NES', 'Nuts and oilseeds NES',
                'Tea, green, black (black, fermented and dried)', 'TEAS AND HERBAL TEAS (SOLID)', 'Other foods (foods which cannot be included in any other group)',
                'Bran, unprocessed of cereal grain (except buckwheat, canihua, quinoa)'):
        return None, f'"{food} / {local[:80]}" is a finished, composite or other food that contains or is named after corn, not maize grain or fresh corn.'
    for rx, why in OTHER:
        if re.search(rx, l): return None, f'"{local[:80]}" is {why}.'
    if re.search(r'^cf\d', l): return None, f'"{local}" is a Codex flour or meal commodity code (CF), a milled product with its own page.'
    if 'baby' in l or 'young corn' in l: return 'baby', None
    if food in ('Sweet corn (corn-on-the-cob)', 'Sweet corn (kernels)') or re.search(r'sweet ?corn|on[ -]the[ -]cob|bicolou?r|bi-colou?r|peaches and cream|codex stan\. 132', l):
        if state == 'Cooked' or 'boiled' in l: return 'sweet_cooked', None
        if re.search(r'fresh|frozen|freezing|raw|bicolou?r|bi-colou?r|peaches|on[ -]the[ -]cob|cob\b|codex stan\. 132|zea mays var|^a\.01', l) or state == 'Raw': return 'sweet', None
        return 'sweet_unstated', None
    if food == 'Vegetables and vegetable products NES' and l in ('corn',): return 'sweet_unstated', None
    if food in ('Maize', 'CEREAL GRAINS') or l.startswith('corn, see maize'):
        if food == 'CEREAL GRAINS' and not l.startswith('corn, see maize'): return None, f'"{local[:80]}" is a cereal product, not maize grain.'
        if re.search(r'14 a - miscell', l): return None, f'"{local}" is a miscellaneous-foods entry whose form cannot be identified as grain or fresh corn.'
        if state == 'Cooked' or 'cooking in water' in l: return 'cooked_unstated', None
        return 'grain', None
    return None, f'"{food} / {local[:80]}" does not identify maize grain or fresh corn as the food analysed.'

wanted = collections.defaultdict(dict)
for it in universe:
    if it['kind'] == 'dataset_row' and it['source_id'] == GEMS and it['path'].startswith('raw/'):
        wanted[it['path']][int(it['row_locator'].split()[1])] = it
manifest, records, dropped, rowdisp = [], [], collections.Counter(), {}
seen, june_items = {}, {}
order = sorted(wanted, key=lambda p: (0 if '2026-06-20-export' in p else 1, p))
for logical in order:
    p = phys(logical[4:])
    phase = 'june' if '2026-06-20-export' in logical else 'may'
    manifest.append({'path': logical, 'physical': str(p), 'sha256': sha(p), 'bytes': p.stat().st_size, 'export': phase})
    with p.open(encoding='utf-8-sig', newline='') as fh:
        for i, r in enumerate(csv.DictReader(fh), start=2):
            if i not in wanted[logical]: continue
            u = wanted[logical][i]; iid = u['id']
            h = hashlib.sha256(json.dumps(r, sort_keys=True, ensure_ascii=False, separators=(',', ':')).encode()).hexdigest()
            assert h == u['sha256'], ('universe hash mismatch', iid)
            food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '').strip(); cont = r.get('ContaminantName', '').strip(); loc = f"{p.name} data row {i}"
            mat, why = material(food, local, r.get('FoodStateName', ''), r.get('FoodCategory', ''))
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
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[key]['item_id'], 'rationale': 'The same submission exported under a second WHO region label (WHO EURO and European Union).', 'location': loc}; continue
            f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] in ('ug/kg', 'µg/kg') else None
            if f is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed in µg/kg of corn.', 'location': loc}; dropped['unit'] += 1; continue
            txt = r['ResultText'].strip()
            try: lod = float(r['LOD']) * f if r['LOD'] else None
            except ValueError: lod = None
            try: loq = float(r['LOQ']) * f if r['LOQ'] else None
            except ValueError: loq = None
            try: numeric = float(txt)
            except ValueError: numeric = None
            # WHO writes non-detects as ND, 0 or 0.000; a zero is a reporting-limit bound, never a measured zero.
            if txt in ('ND', '') or numeric == 0:
                bound = lod if lod else loq
                if not bound:
                    rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': 'Non-detect reported without any detection or quantification limit; no numerical bound exists.', 'location': loc}; dropped['nondetect_without_limit'] += 1; continue
                lower, upper, status = 0.0, bound, 'non_detect'
            elif numeric is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Result text "{txt}" is not a number or a non-detect code.', 'location': loc}; continue
            elif numeric < 0:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Negative result "{txt}" is a blank-corrected reading, not a concentration.', 'location': loc}; continue
            else:
                v = numeric * f; lower = upper = v
                status = 'detected_below_loq' if loq and v < loq else 'detected'
            vkey = (analyte, r['SerialNumber'], r['Year'], round(lower, 6), round(upper, 6))
            if vkey in seen:
                seen[vkey]['region_labels'].append(r['RegionName']); dropped['duplicate_unit_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[vkey]['item_id'], 'rationale': 'The same submission repeated in a second unit or region label.', 'location': loc}; continue
            rec = {'analyte': analyte, 'material': mat, 'region': r['RegionName'], 'region_labels': [r['RegionName']], 'year': int(r['Year']), 'origin': r['FoodOriginName'] or 'Unreported',
                   'representativeness': r['RepresentativenessName'] or 'Unreported', 'qa': r['AnalyticalQAName'], 'basis_label': r['ResultBasisName'] or 'Unreported',
                   'state': r['FoodStateName'] or 'Unreported', 'food_name': food, 'local_name': local, 'lab': r['LabNumber'], 'serial': r['SerialNumber'],
                   'record_type': r['RecordType'] or 'unlabelled', 'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq,
                   'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
            # A limit or value far outside plausible corn trace-element levels signals a unit-label error.
            implausible = {'Cd': 1000, 'tHg': 300, 'Pb': 3000, 'tAs': 3000, 'iAs': 2000}
            rec['value_review'] = bool(analyte in implausible and ((lod or 0) > 1000 or (loq or 0) > 3000 or upper > implausible[analyte]))
            # Dry-matter results are a different basis from the as-sold and as-eaten layer.
            rec['basis_key'] = 'dw' if re.search(r'dry', rec['basis_label'], re.I) else 'fw'
            seen[key] = seen[vkey] = rec; records.append(rec)
            if phase == 'june': june_items[(r['SerialNumber'], cont)] = iid
kept = {r['item_id'] for r in records}
missing = [it['id'] for p in wanted for it in wanted[p].values() if it['id'] not in rowdisp and it['id'] not in kept]
assert not missing, missing[:5]

# FDA TDS calendar-2017 composites may also appear in GEMS/Food as US submissions of the same
# food ("Corn, fresh/frozen, boiled"); identical values in the same year are the same composite.
fda_vals = collections.Counter((s['analyte'], s['calendar_year'], round(s['lower_ug_kg'], 3), round(s['upper_ug_kg'], 3)) for s in fda_samples)
for r in records:
    if r['material'] == 'sweet_cooked' and r['region'] == 'PAHO' and r['year'] >= 2017 and fda_vals[(r['analyte'], r['year'], round(r['lower_ug_kg'], 3), round(r['upper_ug_kg'], 3))]:
        r['fda_duplicate'] = True
fdadup = [r for r in records if r.get('fda_duplicate')]
held = [r for r in records if r['value_review']]
records_all = records
records = [r for r in records if not r['value_review'] and not r.get('fda_duplicate')]
for r in held:
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': f"Record held for value review: its reporting limit or value ({r['result_text']} {r['unit']}, LOD {r['lod_ug_kg']}, LOQ {r['loq_ug_kg']} µg/kg) is implausible for corn (unit-scale mismatch), so it is kept but never used in a summary or reference.", 'location': r['locator']}
for r in fdadup:
    rowdisp[r['item_id']] = {'disposition': f'duplicate_of:source:{FDA}', 'rationale': 'US submission of FDA Total Diet Study corn (frozen, boiled) for a calendar year and value matching an FDA FY2018–FY2020 composite; the FDA primary result is the extracted copy.', 'location': r['locator']}

cols = list(records_all[0].keys()) + ['fda_duplicate']
with (audit / 'primary/gemsfood-corn-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=cols); w.writeheader()
    for r in records_all: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})
(audit / 'primary/gemsfood-corn-reference-input.json').write_text(json.dumps(
    [{k: r.get(k) for k in ('analyte', 'material', 'basis_key', 'region', 'year', 'origin', 'representativeness', 'value_review', 'fda_duplicate', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records_all]) + '\n')

REP = lambda rep: 'random' if rep.startswith('Random') else 'targeted' if rep.startswith('Targeted') or rep.startswith('Selective') else 'unstated'
findings = []
groups = collections.defaultdict(list)
for r in records: groups[(r['analyte'], r['material'], r['basis_key'], r['region'], REP(r['representativeness']))].append(r)
for (analyte, mat, bk, region, rep), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    reps = sorted({r['representativeness'] for r in rs})
    findings.append({'id': f"{GEMS}:{analyte}:{mat}:{bk}:{slug(region)}:{rep}:median",
        'analyte': analyte, 'material': mat, 'material_text': MATERIAL_LABEL[mat], 'group': f'WHO region {region}; {rep} sampling' + ('' if rep != 'unstated' else ' (not described)'),
        'region': region, 'sampling': rep, 'group_kind': 'purchase_market', 'site_context': 'market_retail', 'n': len(rs), 'statistic': 'median',
        'basis': 'dry matter (GEMS/Food result basis "Dry weight")' if bk == 'dw' else 'as sold or as eaten (GEMS/Food result basis "As is" / "As consumed" / unreported)',
        'reported': {'value': None, 'unit': 'µg/kg', 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}; sampling: {"; ".join(reps)}'},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]],
        'origins': dict(collections.Counter(r['origin'] for r in rs)),
        'conversion': 'mg/kg × 1000 = µg/kg; µg/kg unchanged', 'censoring': 'ND or 0 with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'lod_ug_kg': None, 'locator': f"primary/gemsfood-corn-records.csv rows for {analyte}, {MATERIAL_LABEL[mat]}, {region}, {rep} sampling, basis {bk}",
        'notes': 'HMI-calculated descriptive summary of individual GEMS/Food submissions; country identity is not exported; WHO region is a reporting region, not where the corn was grown. FoodOriginName gives only domestic or imported.',
        'item_ids': sorted(r['item_id'] for r in rs)})
for f_ in findings:
    for iid in f_['item_ids']: rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': 'Individual GEMS/Food corn submission; contributes to the HMI-calculated WHO-region summary for its analyte, form, basis and sampling type.', 'location': next(r['locator'] for r in records if r['item_id'] == iid)}
byid = {it['id']: it for p in wanted for it in wanted[p].values()}
assert set(byid) == set(rowdisp), 'every discovered GEMS row needs exactly one decision'
for iid, d in rowdisp.items(): d['content_sha256'] = byid[iid]['sha256']
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp, indent=0) + '\n')

# Within-region contrasts the prose relies on (descriptive): domestic vs imported, by year band.
def med(rs): return [round(statistics.median([r['lower_ug_kg'] for r in rs]), 3), round(statistics.median([r['upper_ug_kg'] for r in rs]), 3)] if rs else None
contrasts = {}
for (analyte, mat, bk, region, rep), rs in groups.items():
    if len(rs) < 10: continue
    k = f'{analyte}|{mat}|{bk}|{region}|{rep}'
    by_origin = {o: med([r for r in rs if r['origin'] == o]) + [len([r for r in rs if r['origin'] == o])] for o in sorted({r['origin'] for r in rs})}
    contrasts[k] = {'n': len(rs), 'median': med(rs), 'by_origin': by_origin, 'years': [min(r['year'] for r in rs), max(r['year'] for r in rs)],
                    'above_100': sum(r['lower_ug_kg'] > 100 for r in rs), 'above_200': sum(r['lower_ug_kg'] > 200 for r in rs), 'max': max(r['upper_ug_kg'] for r in rs),
                    'detected': sum(r['status'] != 'non_detect' for r in rs)}
put('primary/gemsfood-corn-contrasts.json', contrasts)

put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(raw / 'reports/gemsfood-contaminants'), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-corn-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual maize grain and fresh, frozen and cooked sweet corn results submitted to WHO GEMS/Food (June 2026 export; May 2026 per-region exports for arsenic species), kept separate by form and result basis. Flour, meal, starch, flakes, popcorn, canned corn, oil, feed and corn salad rows are other foods.',
    'disposition_locator': 'GEMS/Food 2026-06-20 export and 2026-05-04 per-region exports, FoodName/LocalFoodName naming maize, corn or sweet corn',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Maize grain; sweet corn fresh, frozen or cooked; baby corn',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only', 'site_context': 'market_retail', 'collection_period': 'per record (Year field)',
              'n_total': len(records), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'As is / As consumed / Dry weight labels retained; no moisture conversion', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-corn-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'material', 'region', 'year', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'locator')} for r in held],
    'fda_duplicates': len(fdadup), 'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so WHO region cannot be read as growing origin.']})
print('FDA samples', len(fda_samples), '| GEMS records', len(records), dict(collections.Counter((r['analyte'], r['material']) for r in records)), '| held', len(held), '| fda dup', len(fdadup), '| dropped', dict(dropped),
      '| findings', len(findings), '| row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())))
print(collections.Counter((r['material'], r['basis_key'], r['region']) for r in records))
