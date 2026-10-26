"""Extract seaweed rows from WHO GEMS/Food (June 2026 export and May 2026 per-region exports).

Reproducible: iterates exactly the GEMS/Food rows that the shared discovery tool puts in
the seaweed universe, so every discovered row gets one recorded decision. Seaweed type,
product form and basis are kept separate; total and inorganic arsenic are separate analytes;
non-detects stay as zero-to-limit intervals and nothing is imputed.
"""
import csv, hashlib, json, pathlib, statistics, collections, os, re

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/seaweed'
raw = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=1, ensure_ascii=False) + '\n')

GEMS = 'who-gemsfood-heavy-metal-contaminants'
universe = json.loads((audit / 'universe-snapshot.json').read_text())
wanted = {}
for i in universe['items']:
    if i['kind'] == 'dataset_row' and i['path'].startswith('raw/reports/gemsfood-contaminants/'):
        wanted.setdefault(i['path'], set()).add(int(i['row_locator'].split()[-1]))

SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Mercury': 'tHg', 'Methyl mercury': 'MeHg', 'Aluminium': 'Al', 'Tin': 'Sn',
           'Nickel': 'Ni', 'Chromium': 'Cr', 'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs', 'Arsenic (Dimethylarsinic acid)': 'DMA'}
UNTRACKED = {'Mercury (inorganic)': 'Inorganic mercury is not a tracked HMI species and is never substituted for total mercury.',
             'Arsenic (Monomethylarsonic Acid)': 'Monomethylarsonic acid is not reported as a separate HMI row for seaweed.',
             'Arsenic (organic)': 'Organic arsenic (unspecified) is not a tracked HMI species and is not substituted for total or inorganic arsenic.'}

# ---------------------------------------------------------------- food classification
OUT = [
 (r'spirulina|chlorella|algae formula|algae based formulation', 'Microalgae or cyanobacteria supplement (spirulina/chlorella), not seaweed.'),
 (r'^feed\b', 'Animal feed, not food seaweed.'),
 (r'salicornia', 'Salicornia (glasswort) is a land plant, not seaweed.'),
 (r'sushi|dashi|stock|soup|rice|noodle|cracker|biscuit|dessert|meal|dish|furikake|seasoning\b|kelp salt|bamboo salt|rice cake|cheese|tuna|sardine|fish and|crayfish|salmon|teas|herbal|powdered extract|infant|young children|potato|cocoa|mushroom|fats and oils|snack or dessert|nutrients from kelp|mixed veg|vegetables and seaweed|with seaweed|seaweed topping|seaweed flavour',
  'Composite food or product that contains or is flavoured with seaweed; the seaweed itself was not measured.'),
 (r'algae and prokaryotes|^algae \| algae$|other algae|\| alga$|algae \| algae\b|\(including fungi\) \| algae|dried algae|^algae \| seaweed products',
  'Generic algae category that spans macroalgae and cyanobacteria (spirulina) or unspecified algae products; the result cannot be attributed to seaweed.'),
]
TYPES = [
 ('Hijiki', r'hijiki|hiziki|fusiforme'),
 ('Arame', r'arame|eisenia'),
 ('Green seaweeds (Ulva etc.)', r'green laver|green nori|green seaweed|green algae|sea lettuce|ulva|enteromorpha|monostroma|sea grape|umi budo|caulerpa|green sea fingers|codium'),
 ('Wakame', r'wakame|undaria|dabberlocks|alaria'),
 ('Kombu/kelp', r'kombu|konbu|kelp|laminaria|saccharina|sea ?belt|tangle|sea oak|kjellman'),
 ('Nori/laver', r'nori|laver|porphyra|pyropia'),
 ('Dulse', r'dulse|palmaria'),
 ('Carrageen (Irish moss)', r'carrageen|irish moss|chondrus'),
 ('Wracks (Fucus/Ascophyllum)', r'wrack|rockweed|fucus|ascophyllum'),
 ('Other brown', r'cochayuyo|durvillaea|sea spaghetti|himanthalia|brown algae|brown seaweed|dead man.s rope|sargassum|wireweed'),
 ('Other red', r'red algae|red seaweed|eucheuma|gracilaria|funori|ogonori|coral|siphon weed|otomegusa|ocean bamboo'),
 ('Mixed or unspecified', r'seaweed|algae'),
]
def form_of(t):
    if re.search(r'powder|flake', t): return 'powder or flakes'
    if re.search(r'roast|toast|grill|yaki|crisp|fried|tempura|snack|chips', t): return 'roasted or seasoned snack'
    if re.search(r'season|salt|marinat|salad|sauce|cooked|prepared|preserv|paste|immersed|kimchi|spicy|flavou?r|olive|perilla|sesame|brine|stir', t): return 'salted, seasoned or prepared'
    if re.search(r'frozen|freez', t): return 'frozen'
    if re.search(r'fresh|raw|unprocessed|no heat|as organism', t) and not re.search(r'dried|dry|dehydrat', t): return 'fresh'
    if re.search(r'dried|dry|dehydrat|kombu|sushi nori|nori|laver|kelp|hijiki|arame|wakame|dulse', t): return 'dried'
    return 'form not stated'
def classify(food, local, state):
    t = f'{food} | {local}'.lower().strip()
    for pat, why in OUT:
        if re.search(pat, t): return None, None, why
    typ = next((name for name, pat in TYPES if re.search(pat, t)), None)
    if not typ: return None, None, f'Food "{food} | {local}" is not identifiable as seaweed.'
    form = form_of(t)
    if state == 'Cooked' and form in ('dried', 'form not stated'): form = 'salted, seasoned or prepared'
    return typ, form, None
def basis_of(label, form):
    if label == 'Dry weight': return 'dry weight'
    if form in ('dried', 'roasted or seasoned snack', 'powder or flakes'): return 'dried product as sold'
    if form in ('fresh', 'frozen', 'salted, seasoned or prepared'): return 'wet product as sold or prepared'
    return 'as sold, moisture not stated'

# ---------------------------------------------------------------- rows
june = sorted((raw / 'reports/gemsfood-contaminants/2026-06-20-export').glob('*.csv'))
may = sorted((raw / 'reports/gemsfood-contaminants').glob('who-gemsfood-*-2026-05-04.csv'))
manifest, records, dropped, rowdisp = [], [], collections.Counter(), {}
seen, june_items = {}, {}
for phase, files_ in (('june', june), ('may', may)):
    for p in files_:
        rel = 'raw/' + str(p.relative_to(raw))
        rows_wanted = wanted.get(rel, set())
        manifest.append({'path': str(p), 'sha256': sha(p), 'bytes': p.stat().st_size, 'export': phase, 'universe_rows': len(rows_wanted)})
        if not rows_wanted: continue
        for i, r in enumerate(csv.DictReader(p.open(encoding='utf-8', errors='replace')), start=2):
            if i not in rows_wanted: continue
            iid = f'dataset:{rel}#row {i}'; loc = f'{p.name} data row {i}'
            food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '').strip(); cont = r.get('ContaminantName', '').strip()
            typ, form, why = classify(food, local, r.get('FoodStateName', ''))
            if why: rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': why, 'location': loc}; continue
            if cont in UNTRACKED: rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': UNTRACKED[cont], 'location': loc}; continue
            analyte = SPECIES.get(cont)
            if not analyte: rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Contaminant "{cont}" is outside the HMI analyte list.', 'location': loc}; continue
            if phase == 'may' and (r['SerialNumber'], cont) in june_items:
                rowdisp[iid] = {'disposition': 'duplicate_of:' + june_items[(r['SerialNumber'], cont)], 'rationale': 'The same GEMS/Food submission (serial number and contaminant) is in the June 2026 export, which is the extracted copy.', 'location': loc}; continue
            key = (analyte, r['SerialNumber'], r['LabNumber'], r['Year'], r['ResultText'], r['LOD'], r['LOQ'], local, r['UnitName'], r['ResultBasisName'])
            if key in seen:
                seen[key]['region_labels'].append(r['RegionName']); dropped['duplicate_region_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[key]['item_id'], 'rationale': 'The same submission exported under a second WHO region label.', 'location': loc}; continue
            f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] == 'ug/kg' else None
            if f is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed in µg/kg.', 'location': loc}; dropped['unit'] += 1; continue
            txt = r['ResultText'].strip()
            lod = float(r['LOD']) * f if r['LOD'] else None
            loq = float(r['LOQ']) * f if r['LOQ'] else None
            try: numeric = float(txt)
            except ValueError: numeric = None
            # WHO writes non-detects as ND, 0 or 0.000; any zero is a reporting-limit bound, never a measured zero.
            if txt in ('ND', '') or numeric == 0:
                bound = lod if lod else loq
                if bound is None:
                    rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': 'Non-detect reported without any detection or quantification limit; no numerical bound exists.', 'location': loc}; dropped['nondetect_without_limit'] += 1; continue
                lower, upper, status = 0.0, bound, 'non_detect'
            elif numeric is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Result text "{txt}" is not numeric.', 'location': loc}; dropped['non_numeric'] += 1; continue
            else:
                v = numeric * f; lower = upper = v
                status = 'detected_below_loq' if loq and v < loq else 'detected'
            basis = basis_of(r['ResultBasisName'], form)
            vkey = (analyte, r['SerialNumber'], r['Year'], round(lower, 6), round(upper, 6), basis)
            if vkey in seen:
                seen[vkey]['region_labels'].append(r['RegionName']); dropped['duplicate_unit_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[vkey]['item_id'], 'rationale': 'The same submission repeated in a second unit or region label.', 'location': loc}; continue
            rec = {'analyte': analyte, 'type': typ, 'form': form, 'basis': basis, 'basis_label': r['ResultBasisName'], 'region': r['RegionName'], 'region_labels': [r['RegionName']],
                   'year': int(r['Year']), 'origin': r['FoodOriginName'] or 'Unreported', 'representativeness': r['RepresentativenessName'] or 'Unreported',
                   'qa': r['AnalyticalQAName'], 'state': r['FoodStateName'] or 'Unreported', 'food_name': food, 'lab': r['LabNumber'], 'serial': r['SerialNumber'],
                   'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq, 'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status,
                   'locator': loc, 'item_id': iid, 'export': phase}
            # Implausible magnitudes for seaweed (unit-label errors) are held, never summarised.
            implausible = {'Cd': 50000, 'Pb': 100000, 'tHg': 10000, 'iAs': 300000, 'tAs': 500000, 'MeHg': 5000}
            rec['value_review'] = bool(analyte in implausible and ((lod or 0) > 20000 or upper > implausible[analyte]))
            seen[key] = seen[vkey] = rec; records.append(rec)
            if phase == 'june': june_items[(r['SerialNumber'], cont)] = iid
held = [r for r in records if r['value_review']]
records_all = records
records = [r for r in records if not r['value_review']]
for r in held:
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': f'Record held for value review: its value or limit ({r["result_text"]} {r["unit"]}, LOD {r["lod_ug_kg"]} µg/kg) is implausible for {r["type"].lower()} (unit-scale mismatch), so it is kept but never used in a summary or reference.', 'location': r['locator']}
with (audit / 'primary/gemsfood-seaweed-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=list(records_all[0].keys())); w.writeheader()
    for r in records_all: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})
(audit / 'primary/gemsfood-seaweed-reference-input.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'type', 'form', 'basis', 'region', 'year', 'representativeness', 'value_review', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records_all]) + '\n')

def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)
slug = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
findings = []
groups = collections.defaultdict(list)
for r in records: groups[(r['analyte'], r['type'], r['form'], r['basis'], r['region'], r['representativeness'])].append(r)
for (analyte, typ, form, basis, region, rep), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    findings.append({'id': f"{GEMS}:{analyte}:{slug(typ)}:{slug(form)}:{slug(basis)}:{slug(region)}:{slug(rep.split()[0])}:median",
        'analyte': analyte, 'seaweed_type': typ, 'form': form, 'basis': basis, 'material': f'{typ}, {form}',
        'group': f'WHO region {region}; {rep.lower()}', 'region': region, 'representativeness': rep,
        'group_kind': 'purchase_market', 'n': len(rs), 'statistic': 'median',
        'reported': {'value': None, 'unit': 'µg/kg', 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}'},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]], 'origins': dict(collections.Counter(r['origin'] for r in rs)),
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND or 0 with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'lod_ug_kg': None, 'locator': f"primary/gemsfood-seaweed-records.csv rows for {analyte}, {typ}, {form}, {basis}, {region}, {rep}",
        'notes': 'HMI-calculated descriptive summary of individual GEMS/Food submissions. Seaweed type and product form are inferred from the submitted food names; country identity is not exported and a WHO region is a reporting region, not where the seaweed grew.',
        'item_ids': sorted(r['item_id'] for r in rs)})
for f_ in findings:
    for iid in f_['item_ids']:
        rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': 'Individual GEMS/Food seaweed submission; contributes to the HMI-calculated summary for its analyte, seaweed type, product form, basis, WHO region and sampling type.', 'location': next(r['locator'] for r in records if r['item_id'] == iid)}
missing = [f'dataset:{p}#row {i}' for p, rows in wanted.items() for i in rows if f'dataset:{p}#row {i}' not in rowdisp]
assert not missing, (len(missing), missing[:5])
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp, indent=0) + '\n')
put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(raw / 'reports/gemsfood-contaminants'), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-seaweed-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual seaweed results submitted to WHO GEMS/Food: lead, cadmium, total mercury, methylmercury, aluminium and tin from the June 2026 export, and total arsenic, inorganic arsenic and DMA from the May 2026 per-region exports.',
    'disposition_locator': 'GEMS/Food 2026-06-20 export and 2026-05-04 per-region exports, seaweed food names',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Seaweed foods by submitted food name: kombu/kelp, nori/laver, wakame, hijiki, dulse, other types; dried, roasted, prepared and fresh forms',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only', 'collection_period': 'per record (Year field)',
              'n_total': len(records), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'Dry weight where labelled; otherwise the product as sold (dried products) or as sold/prepared (wet products)', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-seaweed-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'type', 'region', 'year', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'locator')} for r in held],
    'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so a WHO region cannot be read as growing origin.',
                   'GEMS/Food labels many dried products "As consumed"; these are treated as the dried product as sold because the food names describe dried products, not rehydrated ones.']})
print('records', len(records), dict(collections.Counter(r['analyte'] for r in records)), '| held', len(held), '| findings', len(findings), '| dropped', dict(dropped),
      '| decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())))
print(collections.Counter((r['type']) for r in records).most_common())
print(collections.Counter((r['basis']) for r in records).most_common())
