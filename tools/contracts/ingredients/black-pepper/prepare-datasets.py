"""Extract black pepper rows from WHO GEMS/Food and record the FDA TDS check.

Reproducible: reads preserved primary exports, verifies them by hash and writes
extraction records into the black pepper audit directory. Every GEMS/Food row whose
FoodName or LocalFoodName names black pepper (the shared discovery matcher) gets one
recorded decision. Non-detects stay as zero-to-limit intervals; nothing is imputed.

FDA TDS FY2018-FY2020 has no black pepper or spice food (food list checked below), so
it contributes no rows; the check is written to the extraction directory.
"""
import csv, hashlib, json, pathlib, statistics, collections, os, re, unicodedata

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper'
raw = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')
def norm(s): return re.sub(r'\s+', ' ', re.sub(r'[_–—-]+', ' ', unicodedata.normalize('NFKC', str(s or '')).lower())).strip()
MATCH = re.compile(r'(?<!\w)(?:black pepper|piper nigrum|black peppercorns)(?!\w)')

# ---------------------------------------------------------------- FDA TDS check
fda_csv = root / 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv'
foods = sorted({(r['tds_food_number'], r['tds_food_description']) for r in csv.DictReader(fda_csv.open())})
pepperish = [f for f in foods if re.search(r'pepper|spice|season', f[1], re.I)]
put('extraction/fda-tds-black-pepper-check.json', {
    'check': 'FDA Total Diet Study FY2018-FY2020 food list searched for black pepper or spices',
    'artifact': str(fda_csv.relative_to(root)), 'sha256': sha(fda_csv), 'foods_in_list': len(foods),
    'matches': [{'tds_food_number': n, 'description': d} for n, d in pepperish],
    'conclusion': 'No TDS food is black pepper or a spice; the only "pepper" foods are bell peppers and peppers in mixed dishes. FDA TDS contributes no black pepper rows.'})

# ---------------------------------------------------------------- GEMS/Food
GEMS = 'who-gemsfood-heavy-metal-contaminants'
groot = raw / 'reports/gemsfood-contaminants'
june = sorted((groot / '2026-06-20-export').glob('*.csv'))
may = sorted(groot.glob('who-gemsfood-*-2026-05-04.csv'))
SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Mercury': 'tHg', 'Aluminium': 'Al', 'Tin': 'Sn', 'Chromium': 'Cr', 'Nickel': 'Ni',
           'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs', 'Arsenic (Dimethylarsinic acid)': 'DMA'}
UNTRACKED = {'Mercury (inorganic)': 'Inorganic mercury is not a tracked HMI species and is never substituted for total mercury.',
             'Arsenic (Monomethylarsonic Acid)': 'Monomethylarsonic acid is not a tracked HMI species.',
             'Arsenic (organic)': 'Organic arsenic (unspecified) is not a tracked HMI species and is not substituted for total arsenic.'}
NOT_PEPPER = [(r'\bcod\b', 'Cod seasoned with black pepper: a fish product, not black pepper.'),
              (r'peanut', 'Peanuts seasoned with cracked black pepper: a nut snack, not black pepper.'),
              (r'sauce', 'Black pepper sauce: a condiment containing black pepper, not black pepper.'),
              (r'composite of black pepper, oregano', 'Composite of four spices: black pepper is one component and its share is not reported.')]

def material_of(food, local):
    t = local.lower()
    if 'black and white' in t: return 'mixed'
    return 'black'
def form_of(local):
    t = local.lower()
    if re.search(r'whole|peppercorn|seeds|unprocessed', t): return 'whole'
    if re.search(r'ground|powder|grinding|milling|crushing|crack|cours|coarse|fine', t): return 'ground'
    return 'unspecified'
def retail_of(local):
    t = local.lower()
    if 'not packed' in t: return 'bulk_or_loose'
    if 'packmat=' in t or 'packformat=' in t: return 'packaged'
    return 'unspecified'
def packmat_of(local):
    m = re.search(r'packMat=([^,]+)', local)
    return m.group(1) if m else None
def prod_of(local):
    t = local.lower()
    if 'organic production' in t or t.startswith('organic') or ' organic ' in f' {t} ': return 'organic'
    if 'conventional' in t: return 'conventional'
    return 'unspecified'
FORM_LABEL = {'whole': 'whole', 'ground': 'ground or cracked', 'unspecified': 'form not stated'}
RETAIL_LABEL = {'packaged': 'packaged', 'bulk_or_loose': 'not packed', 'unspecified': 'packaging not stated'}

manifest, records, dropped, rowdisp = [], [], collections.Counter(), {}
seen, june_items = {}, {}
def item_id(p, i): return f"dataset:raw/{p.relative_to(raw)}#row {i}"
for phase, files_ in (('june', june), ('may', may)):
    for p in files_:
        manifest.append({'path': str(p), 'sha256': sha(p), 'bytes': p.stat().st_size, 'export': phase})
        for i, r in enumerate(csv.DictReader(p.open(encoding='utf-8-sig', newline='')), start=2):
            food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '').strip()
            if not MATCH.search(norm(food + ' | ' + local)): continue
            iid = item_id(p, i); cont = r.get('ContaminantName', '').strip(); loc = f"{p.name} data row {i}"
            bad = next((why for pat, why in NOT_PEPPER if re.search(pat, local, re.I)), None)
            if bad:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': bad, 'location': loc}; continue
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
            f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] == 'ug/kg' else None
            if f is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed in µg/kg of pepper.', 'location': loc}; dropped['unit'] += 1; continue
            txt = r['ResultText'].strip()
            lod = float(r['LOD']) * f if r['LOD'] else None
            loq = float(r['LOQ']) * f if r['LOQ'] else None
            # WHO writes non-detects as ND, 0 or 0.000; any zero is a reporting-limit bound, never a measured zero.
            try: numeric = float(txt)
            except ValueError: numeric = None
            if txt in ('ND', '') or numeric == 0 or numeric is None:
                bound = lod if lod else loq
                if bound is None:
                    rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': 'Non-detect reported without any detection or quantification limit; no numerical bound exists.', 'location': loc}; dropped['nondetect_without_limit'] += 1; continue
                lower, upper, status = 0.0, bound, 'non_detect'
            else:
                v = numeric * f; lower = upper = v
                status = 'detected_below_loq' if loq and v < loq else 'detected'
            vkey = (analyte, r['SerialNumber'], r['Year'], round(lower, 6), round(upper, 6))
            if vkey in seen:
                seen[vkey]['region_labels'].append(r['RegionName']); dropped['duplicate_unit_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[vkey]['item_id'], 'rationale': 'The same submission repeated in a second unit or region export.', 'location': loc}; continue
            rec = {'analyte': analyte, 'region': r['RegionName'], 'region_labels': [r['RegionName']], 'year': int(r['Year']), 'origin': r['FoodOriginName'] or 'Unreported',
                   'representativeness': r['RepresentativenessName'] or 'Unreported', 'qa': r['AnalyticalQAName'], 'basis_label': r['ResultBasisName'] or 'Unreported',
                   'state': r['FoodStateName'] or 'Unreported', 'food_name': food, 'local_name': local, 'material': material_of(food, local), 'form': form_of(local),
                   'retail_format': retail_of(local), 'pack_material': packmat_of(local) or '', 'production': prod_of(local),
                   'lab': r['LabNumber'], 'serial': r['SerialNumber'], 'record_type': r['RecordType'] or 'unlabelled', 'result_text': txt, 'unit': r['UnitName'],
                   'lod_ug_kg': lod, 'loq_ug_kg': loq, 'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
            # A reporting limit above 5 mg/kg for a toxic element signals a unit-label error;
            # such records are kept for audit, never summarised or used in a reference.
            rec['value_review'] = bool(analyte in ('Pb', 'Cd', 'tHg', 'tAs', 'iAs') and ((lod or 0) > 5000 or (loq or 0) > 5000))
            seen[key] = seen[vkey] = rec; records.append(rec)
            if phase == 'june': june_items[(r['SerialNumber'], cont)] = iid
held = [r for r in records if r['value_review']]
records_all = records
records = [r for r in records if not r['value_review']]
for r in held:
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': f"Record held for value review: its reporting limit ({r['lod_ug_kg'] or r['loq_ug_kg']} µg/kg) is implausible for a toxic element in pepper (unit-scale mismatch), so it is kept but never summarised or used in a reference.", 'location': r['locator']}
with (audit / 'primary/gemsfood-black-pepper-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=list(records_all[0].keys())); w.writeheader()
    for r in records_all: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})
(audit / 'primary/gemsfood-black-pepper-reference-input.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'region', 'year', 'representativeness', 'material', 'form', 'basis_label', 'value_review', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records_all]) + '\n')

def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)
def mb(rs): return [round(statistics.median([r['lower_ug_kg'] for r in rs]), 3), round(statistics.median([r['upper_ug_kg'] for r in rs]), 3)]
def slug(s): return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
MAT = {'black': 'Black pepper', 'mixed': 'Pepper, black and white (not separated)'}
findings = []
groups = collections.defaultdict(list)
for r in records: groups[(r['analyte'], r['material'], r['region'], r['representativeness'], r['form'], r['retail_format'])].append(r)
for (analyte, mat, region, rep, form, retail), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    bases = sorted({r['basis_label'] for r in rs})
    findings.append({'id': f"{GEMS}:{analyte}:{mat}:{slug(region)}:{slug(rep.split()[0])}:{form}:{retail}:median",
        'analyte': analyte, 'material': f"{MAT[mat]}, {FORM_LABEL[form]}", 'form': form, 'retail_format': retail, 'material_scope': mat,
        'group': f"WHO region {region}; {rep.lower()}; {RETAIL_LABEL[retail]}", 'group_kind': 'purchase_market', 'growing_origin': None, 'purchase_market': f'WHO reporting region {region}',
        'n': len(rs), 'statistic': 'median',
        'reported': {'value': None, 'unit': 'µg/kg', 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}; basis label {", ".join(bases)}'},
        'value_ug_kg': None, 'median_bounds_ug_kg': mb(rs),
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]], 'basis_labels': bases,
        'origins': dict(collections.Counter(r['origin'] for r in rs)),
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND, blank or 0 with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'lod_ug_kg': None, 'locator': f"primary/gemsfood-black-pepper-records.csv rows for {analyte}, {MAT[mat]}, {region}, {rep}, form {form}, {retail}",
        'notes': 'HMI-calculated descriptive summary of individual GEMS/Food submissions; country identity is not exported; WHO region is a reporting region, not where the pepper was grown. EURO and European Union labels can hold overlapping national submissions that the export does not let us match.'
                 + (' The EU food category "Pepper, black and white (Piper nigrum)" does not separate black from white pepper.' if mat == 'mixed' else ''),
        'item_ids': sorted(r['item_id'] for r in rs)})
for f_ in findings:
    for iid in f_['item_ids']: rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': 'Individual GEMS/Food black pepper submission; contributes to the HMI-calculated summary for its analyte, WHO region, sampling type, form and packaging.', 'location': next(r['locator'] for r in records if r['item_id'] == iid)}
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp, indent=0) + '\n')

# Descriptive contrasts used in prose (HMI-calculated medians of individual submissions, black pepper only, random sampling).
def contrast(analyte, key, label):
    rs = [r for r in records if r['analyte'] == analyte and r['material'] == 'black']
    gg = collections.defaultdict(list)
    for r in rs: gg[key(r)].append(r)
    return {'analyte': analyte, 'contrast': label, 'groups': {str(k): {'n': len(v), 'detected': sum(1 for r in v if r['status'] != 'non_detect'), 'median_bounds_ug_kg': mb(v)} for k, v in sorted(gg.items(), key=lambda x: str(x[0]))}}
contrasts = []
for a in ('Pb', 'Cd', 'tAs', 'tHg', 'Cr', 'Al'):
    contrasts += [contrast(a, lambda r: r['form'], 'form'), contrast(a, lambda r: r['production'], 'production method'),
                  contrast(a, lambda r: r['pack_material'] or '(not stated)', 'packaging material'), contrast(a, lambda r: r['region'], 'WHO region'),
                  contrast(a, lambda r: r['origin'], 'domestic or imported')]
# Shares above the EU fruit-spice maxima (Pb 600, Cd 100 µg/kg): definitely above = lower bound above the limit.
for a, lim in (('Pb', 600), ('Cd', 100)):
    for mat in ('black', 'mixed'):
        rs = [r for r in records if r['analyte'] == a and r['material'] == mat]
        contrasts.append({'analyte': a, 'contrast': f'share definitely above {lim} µg/kg', 'material': mat, 'n': len(rs), 'above': sum(1 for r in rs if r['lower_ug_kg'] > lim),
                          'possibly_above': sum(1 for r in rs if r['upper_ug_kg'] > lim)})
put('primary/gemsfood-black-pepper-contrasts.json', contrasts)

put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(groot), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-black-pepper-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual black pepper results submitted to WHO GEMS/Food: lead, cadmium, total mercury, chromium, aluminium and tin from the June 2026 export, and total arsenic, inorganic arsenic and DMA from the May 2026 per-region exports.',
    'disposition_locator': 'GEMS/Food 2026-06-20 and 2026-05-04 exports, FoodName or LocalFoodName naming black pepper or Piper nigrum',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Black pepper (FoodCode HS 0790 and related local labels); EU category "Pepper, black and white (Piper nigrum)" kept separate',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only; growing country not exported', 'collection_period': 'per record (Year field)',
              'n_total': len(records), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'As is / As consumed / Dry weight labels retained; dried spice, no moisture conversion', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-black-pepper-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'region', 'year', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'locator')} for r in held],
    'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so WHO region cannot be read as growing origin.']})
print('GEMS records', len(records), dict(collections.Counter(r['analyte'] for r in records)), '| findings', len(findings), '| held', len(held), '| dropped', dict(dropped),
      '| row decisions', len(rowdisp), dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())), '| FDA pepper-like foods', pepperish)
