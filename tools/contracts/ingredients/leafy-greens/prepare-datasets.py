"""Extract leafy-green rows from the two sample-level datasets (FDA TDS FY2018-FY2020,
WHO GEMS/Food June 2026 export for Pb/Cd/Hg/Al/Sn/Ni/Cr and May 2026 per-region exports
for arsenic species).

Each named leaf stays its own material (spinach, leaf lettuce, head lettuce, kale, head
cabbage, Chinese cabbage, pak choi, lamb's lettuce, mustard greens, watercress, and the
GEMS group code "Leafy vegetables" for other or unspecified leaves). Raw/unspecified,
cooked, frozen, canned, fermented and dried forms stay separate materials; as-sold and
dry-weight bases stay separate. Non-detects stay as zero-to-limit intervals.
Every dataset row discovered for leafy greens receives one recorded decision.
"""
import csv, hashlib, json, pathlib, shutil, statistics, collections, os, re

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/leafy-greens'
raw = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)
def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=1, ensure_ascii=False) + '\n')
def slug(s): return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)
rowdisp = {}

# ---------------------------------------------------------------- FDA TDS
FDA = 'fda2022-tds-elements-fy2018-fy2020'
fda_src = raw / 'reports/fda-tds-fy2018-2020-recovery-2026-09-10/analytical-results.txt'
fda_copy = audit / 'primary/fda-elements.txt'
if not fda_copy.exists(): shutil.copy2(fda_src, fda_copy)
native = list(csv.DictReader(fda_copy.open(encoding='cp1252'), delimiter='\t'))
FDA_FOODS = {'108': ('Collard greens (cooked)', 'Collards, fresh/frozen, boiled'), '109': ('Head lettuce', 'Lettuce, iceberg, raw'),
             '357': ('Leaf lettuce', 'Lettuce, leaf, raw'), '406': ('Head cabbage', 'Cabbage, raw'), '408': ('Spinach', 'Spinach, raw'),
             '411': ('Kale (cooked)', 'Kale, fresh, pan-cooked')}
FDA_LEAF = {'108': 'Collard greens', '109': 'Head lettuce', '357': 'Leaf lettuce', '406': 'Head cabbage', '408': 'Spinach', '411': 'Kale'}
fpath = 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv'
allfda = list(csv.DictReader((root / fpath).open()))
norm = []
for i, r in enumerate(allfda, start=2):
    iid = f'dataset:{fpath}#row {i}'
    if r['tds_food_number'] in FDA_FOODS:
        s = native[int(r['source_row_number']) - 2]
        for nk, k in [('TDSFoodNumber', 'tds_food_number'), ('Concentration', 'concentration_original'), ('ReportingLimit', 'reporting_limit_original')]:
            assert s[nk].strip() == r[k], (nk, r['source_row_number'])
        if r['metal_species']: norm.append((iid, r))
        else: rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Element "{r["analyte"].strip()}" is a nutrient or untracked element, outside the HMI analyte list.', 'location': f'FDA TSV row {r["source_row_number"]}'}
    elif r['tds_food_number'] in ('746', '747', '748', '751'):
        rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'"{r["tds_food_description"]}" is a mixed baby-food pouch or jar that contains spinach among other ingredients; it is not a leafy green.', 'location': f'FDA TSV row {r["source_row_number"]}'}
fda_findings, fda_samples = [], []
for num, (material, desc) in FDA_FOODS.items():
    for a in sorted({r['metal_species'] for _, r in norm if r['tds_food_number'] == num}):
        rs = [(iid, r) for iid, r in norm if r['tds_food_number'] == num and r['metal_species'] == a]
        det = [r for _, r in rs if r['result_status'] == 'detected']
        lo = [float(r['concentration_lower_bound_ppb']) for _, r in rs]; hi = [float(r['concentration_upper_bound_ppb']) for _, r in rs]
        rl = sorted({float(r['reporting_limit_ppb_equivalent']) for _, r in rs})
        fid = f'{FDA}:{a}:{slug(material)}:us-national:median'
        fda_findings.append({'id': fid, 'analyte': a, 'material': material, 'leaf': FDA_LEAF[num], 'form': 'cooked' if num in ('108', '411') else 'raw', 'basis': 'Fresh weight (as sold or consumed)',
            'group': f'United States national collections FY2018–FY2020 (TDS food {num}, {desc})', 'group_kind': 'purchase_market', 'n': len(rs),
            'statistic': 'median', 'reported': {'value': None, 'unit': 'ppb', 'text': f'{len(det)} of {len(rs)} composites detected; reporting limits {rl[0]}–{rl[-1]} ppb'},
            'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
            'min_ug_kg': min(float(r['concentration_ppb_equivalent']) for r in det) if det else None,
            'max_ug_kg': max(float(r['concentration_ppb_equivalent']) for r in det) if det else None, 'detected_n': len(det), 'lod_ug_kg': rl[0],
            'conversion': 'ppb equals µg/kg by mass; no conversion',
            'censoring': 'FDA zero code = non-detect; bounds 0 to reporting limit; HMI-calculated median carries lower/upper bounds',
            'locator': f'Original FDA TSV rows for TDS food {num}, {a} ({len(rs)} composites)', 'years': [2018, 2020],
            'notes': 'HMI-calculated median of national market-basket composites; not brands, lots or production origin.',
            'item_ids': [iid for iid, _ in rs]})
        for iid, r in rs:
            rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': fid, 'rationale': f'FDA TDS composite of {desc} ({r["analyte"]}, FY{r["fiscal_year"]} {r["season"]}); contributes to the HMI-calculated national median.', 'location': f'FDA TSV row {r["source_row_number"]}'}
            fda_samples.append({'sample': r['sample_id'], 'group': material, 'analyte': a, 'lower_ug_kg': float(r['concentration_lower_bound_ppb']), 'upper_ug_kg': float(r['concentration_upper_bound_ppb']),
                'censored': r['result_status'] == 'non_detect', 'bound_ug_kg': float(r['reporting_limit_ppb_equivalent']), 'locator': f'Original FDA TSV row {r["source_row_number"]}', 'year': r['calendar_year'], 'finding': fid})
put(f'extraction/{FDA}.json', {'source_id': FDA, 'primary_artifact': str(fda_src), 'primary_sha256': sha(fda_copy), 'text_copy': str(fda_copy.relative_to(root)),
    'disposition': 'occurrence_extracted', 'disposition_reason': 'FDA Total Diet Study national composites of six leafy-green foods (spinach, iceberg and leaf lettuce, cabbage, boiled collards, pan-cooked kale) with toxic-element results.',
    'disposition_locator': 'FDA TDS FY2018–FY2020 analytical results, foods 108, 109, 357, 406, 408, 411',
    'study': {'design': 'total diet study', 'material_scope': 'Leafy greens as purchased and prepared', 'growing_origin_vs_market': 'US purchase market; production origin unreported',
              'collection_period': 'FY2018–FY2020', 'n_total': 27, 'sampling_unit': 'FDA national composites', 'method': 'FDA Elemental Analysis Manual ICP-MS', 'lod_loq': 'per-composite reporting limits (ppb)', 'basis': 'fresh weight as prepared', 'qa': 'FDA laboratory QA'},
    'findings': fda_findings, 'sample_values': fda_samples, 'controls': [], 'contradictions_with_stored_summary': [], 'unresolved': []})

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
MATERIAL = {'Lettuce, leaf': 'Leaf lettuce', 'Lettuce, head': 'Head lettuce', 'Cabbage, head': 'Head cabbage', 'Spinach (bunch)': 'Spinach', 'Kale': 'Kale', 'Kale, curly': 'Kale',
            'Chinese cabbage, type pe-tsai': 'Chinese cabbage', 'Chinese cabbage, type pak-choi': 'Pak choi', 'Corn salad': "Lamb's lettuce",
            'Mustard greens': 'Mustard greens', 'Watercress': 'Watercress', 'LEAFY VEGETABLES': 'Leafy vegetables, other or unspecified'}
NOT_LEAFY = {'TEAS AND HERBAL TEAS (SOLID)': 'Dried leaves submitted under the tea and herbal-tea code; a dried infusion product, not a leafy vegetable food.',
             'Vegetable juice': 'Vegetable juice; a juice, not the leaf.', 'Food for infant or children NES': 'Prepared infant or children\'s food containing a leafy vegetable among other ingredients.',
             'Algae': 'Seaweed (sea lettuce is a green alga, not a leafy vegetable).', 'HERBS': 'Submitted under the culinary herb code; herb use and form are not comparable with leafy vegetables.'}
def form_of(local, state):
    t = (local or '').lower()
    if re.search(r'sauerkraut|ferment|kapustový šalát', t): return 'fermented'
    if re.search(r'rahm|creamed', t): return 'creamed'
    # Boiled or stewed leaves are cooked even when bought frozen ("Spinach, fresh/frozen, boiled").
    if state == 'Cooked' or re.search(r'boiled|cooked|zubereitet|stewing', t): return 'cooked'
    if re.search(r'froz|tiefgefr|freezing', t): return 'frozen'
    if re.search(r'canned|konserve|preserved(?!, deep)', t): return 'canned'
    if re.search(r'drying|dehydrat|dried', t): return 'dried'
    return 'raw'
records, seen, june_items, dropped = [], {}, {}, collections.Counter()
manifest = []
def item_id(p, i): return f"dataset:raw/{p.relative_to(raw)}#row {i}"
for phase, files_ in (('june', june), ('may', may)):
    for p in files_:
        manifest.append({'path': str(p), 'sha256': sha(p), 'export': phase})
        for i, r in enumerate(csv.DictReader(p.open(encoding='utf-8', errors='replace')), start=2):
            food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '').strip()
            iid = item_id(p, i); loc = f'{p.name} data row {i}'
            mat = MATERIAL.get(food)
            # A local name that identifies another crop overrides the GEMS code (for example
            # water spinach or Chinese spinach submitted under the spinach code).
            ln = local.lower()
            if mat and re.search(r'kangkong|water spinach', ln): mat = 'Water spinach'
            elif mat and re.search(r'bayam|chinese spinach', ln): mat = 'Amaranth leaves'
            elif mat and food == 'Spinach (bunch)' and re.search(r'head cabbage', ln): mat = 'Head cabbage'
            elif mat and re.search(r'sarson ka saag', ln):
                rowdisp[item_id(p, i)] = {'disposition': 'out_of_scope', 'rationale': f'Submitted under the GEMS/Food code "{food}", but its local name "{local}" is a cooked mustard-greens dish with other ingredients, not the leaf.', 'location': f'{p.name} data row {i}'}; continue
            if food == 'BRASSICA' and re.search(r'cabbage|kohl(?!rabi)|savoy', local, re.I) and not re.search(r'flowerhead|brussels|broccoli|cauli|see cabbages', local, re.I): mat = 'Head cabbage'
            if mat is None:
                # Only rows the shared discovery found need a decision; others are skipped silently.
                hay = (food + ' ' + local).lower()
                if not re.search(r'lettuce|spinach|kale|cabbage|chard|leafy|leaf veg|collard|mustard|watercress|water spinach|pak choi|bok choy|amaranth', hay): continue
                why = NOT_LEAFY.get(food) or (f'Brassica group code with local name "{local}" that does not identify a head cabbage (the code also covers flowerhead brassicas).' if food == 'BRASSICA' else f'Food is "{food}" ({local}): it only names or contains a leafy vegetable term and is not a leafy green itself.')
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': why, 'location': loc}; continue
            cont = r.get('ContaminantName', '').strip()
            if cont in UNTRACKED: rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': UNTRACKED[cont], 'location': loc}; continue
            analyte = SPECIES.get(cont)
            if not analyte: rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Contaminant "{cont}" is outside the HMI analyte list.', 'location': loc}; continue
            form = form_of(local, r.get('FoodStateName', ''))
            if form == 'creamed': rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'"{local}" is a creamed spinach preparation (a composite dish with dairy), not the leaf.', 'location': loc}; continue
            if phase == 'may' and (r['SerialNumber'], cont) in june_items:
                rowdisp[iid] = {'disposition': 'duplicate_of:' + june_items[(r['SerialNumber'], cont)], 'rationale': 'The same GEMS/Food submission (serial number and contaminant) is in the June 2026 export, which is the extracted copy.', 'location': loc}; continue
            key = (analyte, r['SerialNumber'], r['LabNumber'], r['Year'], r['ResultText'], r['LOD'], r['LOQ'], local, r['UnitName'], food)
            if key in seen:
                seen[key]['region_labels'].append(r['RegionName']); dropped['duplicate_region_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[key]['item_id'], 'rationale': 'The same submission exported under a second WHO region label.', 'location': loc}; continue
            f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] == 'ug/kg' else None
            if f is None: rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed as a mass fraction of the leaf.', 'location': loc}; dropped['unit'] += 1; continue
            txt = r['ResultText'].strip()
            lod = float(r['LOD']) * f if r['LOD'] else None
            loq = float(r['LOQ']) * f if r['LOQ'] else None
            try: numeric = float(txt)
            except ValueError: numeric = None
            if txt in ('ND', '') or numeric == 0:
                bound = lod if lod else loq
                if bound is None: rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': 'Non-detect reported without any detection or quantification limit; no numerical bound exists.', 'location': loc}; dropped['nondetect_without_limit'] += 1; continue
                lower, upper, status = 0.0, bound, 'non_detect'
            elif numeric is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Result text "{txt}" is not numeric and not a coded non-detect.', 'location': loc}; continue
            else:
                v = numeric * f; lower = upper = v; status = 'detected_below_loq' if loq and v < loq else 'detected'
            vkey = (analyte, r['SerialNumber'], r['Year'], round(lower, 6), round(upper, 6), food)
            if vkey in seen:
                seen[vkey]['region_labels'].append(r['RegionName']); dropped['duplicate_unit_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[vkey]['item_id'], 'rationale': 'The same submission repeated in a second unit.', 'location': loc}; continue
            basis = 'Dry weight' if r['ResultBasisName'] == 'Dry weight' else 'Fresh weight (as sold or consumed)'
            material = mat if form == 'raw' else f'{mat} ({form})'
            rec = {'analyte': analyte, 'material': material, 'leaf': mat, 'form': form, 'basis': basis, 'region': r['RegionName'], 'region_labels': [r['RegionName']], 'year': int(r['Year']),
                   'origin': r['FoodOriginName'] or 'Unreported', 'representativeness': r['RepresentativenessName'] or 'Unreported', 'qa': r['AnalyticalQAName'], 'basis_label': r['ResultBasisName'],
                   'state': r['FoodStateName'] or 'Unreported', 'local_name': local, 'lab': r['LabNumber'], 'serial': r['SerialNumber'], 'record_type': r['RecordType'] or 'unlabelled',
                   'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq, 'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
            # Unit-scale screening: limits above 1 mg/kg, or values far above every leafy survey
            # (fresh weight), signal a unit label error; held records are shown in the audit only.
            implausible = {'Cd': 5000, 'tHg': 1000, 'Pb': 20000, 'tAs': 10000, 'iAs': 10000, 'Sn': 1000000, 'Al': 2000000, 'Ni': 50000, 'Cr': 50000}
            rec['value_review'] = bool(((lod or 0) > 1000 and analyte in ('Cd', 'tHg', 'Pb', 'tAs', 'iAs')) or upper > implausible.get(analyte, 1e12))
            seen[key] = seen[vkey] = rec; records.append(rec)
            if phase == 'june': june_items[(r['SerialNumber'], cont)] = iid
held = [r for r in records if r['value_review']]
records_all = records; records = [r for r in records if not r['value_review']]
for r in held:
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': 'Record held for value review: its detection limit or value is implausible for leafy vegetables (unit-scale mismatch), so it is kept but never used in a summary or reference.', 'location': r['locator']}
with (audit / 'primary/gemsfood-leafy-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=list(records_all[0].keys())); w.writeheader()
    for r in records_all: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})
(audit / 'primary/gemsfood-leafy-reference-input.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'material', 'basis', 'region', 'year', 'representativeness', 'value_review', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records_all]) + '\n')
groups = collections.defaultdict(list)
for r in records: groups[(r['analyte'], r['material'], r['basis'], r['region'], r['representativeness'])].append(r)
findings = []
for (analyte, material, basis, region, rep), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    fid = f"{GEMS}:{analyte}:{slug(material)}:{'dw' if basis == 'Dry weight' else 'fw'}:{slug(region)}:{slug(rep)}:median"
    findings.append({'id': fid, 'analyte': analyte, 'material': material, 'leaf': rs[0]['leaf'], 'form': rs[0]['form'], 'basis': basis,
        'group': f'WHO region {region}; {rep.lower()}', 'group_kind': 'purchase_market', 'n': len(rs), 'statistic': 'median',
        'reported': {'value': None, 'unit': 'µg/kg', 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}'},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]], 'origins': dict(collections.Counter(r['origin'] for r in rs)),
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND or 0 with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'lod_ug_kg': None, 'locator': f"primary/gemsfood-leafy-records.csv rows for {analyte}, {material}, {basis}, {region}, {rep}",
        'notes': 'HMI-calculated descriptive summary of individual GEMS/Food submissions; country identity is not exported; WHO region is a reporting region, not production origin. EURO and European Union labels can hold overlapping submissions.',
        'item_ids': sorted(r['item_id'] for r in rs)})
for f_ in findings:
    for iid in f_['item_ids']: rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': f"Individual GEMS/Food {f_['material'].lower()} submission; contributes to the HMI-calculated WHO-region summary for its analyte, form, basis and sampling type.", 'location': next(r['locator'] for r in records if r['item_id'] == iid)}
(audit / 'dataset-row-dispositions.json').write_text(json.dumps(rowdisp) + '\n')
put(f'extraction/{GEMS}.json', {'source_id': GEMS, 'primary_artifact': str(groot), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-leafy-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual leafy-vegetable results submitted to WHO GEMS/Food: lead, cadmium, total mercury, aluminium, tin, nickel and chromium (June 2026 export) and arsenic species (May 2026 per-region exports), each leaf type kept separate.',
    'disposition_locator': 'GEMS/Food 2026-06-20 export and 2026-05-04 per-region exports; FoodName lettuce, cabbage, spinach, kale, Chinese cabbage, corn salad, mustard greens, watercress, leafy vegetables',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Leafy vegetables by GEMS/Food code',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only', 'collection_period': 'per record (Year field)',
              'n_total': len(records), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory', 'lod_loq': 'per record', 'basis': 'As is / As consumed (fresh weight) or Dry weight as labelled', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-leafy-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'material', 'region', 'year', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'locator')} for r in held],
    'controls': [], 'contradictions_with_stored_summary': [], 'unresolved': ['Country identity is not in the export, so WHO region cannot be read as growing origin.']})
print('FDA results', len(fda_findings), '| GEMS records', len(records), dict(collections.Counter(r['analyte'] for r in records)), '| GEMS results', len(findings), '| held', len(held), '| dropped', dict(dropped),
      '| row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())))
print(collections.Counter(f['material'] for f in findings).most_common())
