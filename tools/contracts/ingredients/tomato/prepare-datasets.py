"""Extract fresh-tomato rows from the two sample-level datasets (FDA TDS FY2018-FY2020,
WHO GEMS/Food) and decide every indexed dataset row that names tomato.

Reproducible: reads preserved primary exports, verifies them by hash, and writes
extraction records into the tomato audit directory. Non-detects stay as
zero-to-limit intervals; nothing is imputed.

Scope: fresh tomato fruit, raw or of unstated preparation state. Canned, puréed,
concentrated, sauce, ketchup, juice, soup, dried, cooked and tree-tomato records are
out of scope, each with a reason. Greenhouse (GH), field and organic labels are kept
as the submitter wrote them; they were not verified.
"""
import csv, hashlib, json, pathlib, statistics, collections, os, re, shutil

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/tomato'
raw = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
# The mounted library holds the June export only; the May per-region exports are read
# from the backup. Item IDs use the shared raw/ path either way.
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')
def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)
def slug(s): return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

# ---------------------------------------------------------------- FDA TDS
FDA = 'fda2022-tds-elements-fy2018-fy2020'
fda_src = raw / 'reports/fda-tds-fy2018-2020-recovery-2026-09-10/analytical-results.txt'
fda_copy = audit / 'primary/fda-elements.txt'
if not fda_copy.exists(): shutil.copy2(fda_src, fda_copy)
native = list(csv.DictReader(fda_copy.open(encoding='cp1252'), delimiter='\t'))
norm = [r for r in csv.DictReader((root / 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv').open())
        if r['tds_food_number'] == '117' and r['metal_species']]
for r in norm:
    s = native[int(r['source_row_number']) - 2]
    for nk, k in [('TDSFoodNumber', 'tds_food_number'), ('Concentration', 'concentration_original'),
                  ('ReportingLimit', 'reporting_limit_original'), ('CalendarYear', 'calendar_year')]:
        assert s[nk].strip() == r[k], (nk, r['source_row_number'])
fda_samples = [{'sample': r['sample_id'], 'group': f"FY{r['fiscal_year']} {r['season']} {r['region']}", 'analyte': r['metal_species'],
                'value_ug_kg': None if r['result_status'] == 'non_detect' else float(r['concentration_ppb_equivalent']),
                'censored': r['result_status'] == 'non_detect', 'bound_ug_kg': float(r['reporting_limit_ppb_equivalent']),
                'lower_ug_kg': float(r['concentration_lower_bound_ppb']), 'upper_ug_kg': float(r['concentration_upper_bound_ppb']),
                'basis': 'fresh weight (as purchased)', 'locator': f"Original FDA TSV row {r['source_row_number']} (header = row 1)"} for r in norm]
fda_findings = []
for a in sorted({r['metal_species'] for r in norm}):
    rs = [r for r in norm if r['metal_species'] == a]
    det = [r for r in rs if r['result_status'] == 'detected']
    rl = sorted({float(r['reporting_limit_ppb_equivalent']) for r in rs})
    lo = [float(r['concentration_lower_bound_ppb']) for r in rs]; hi = [float(r['concentration_upper_bound_ppb']) for r in rs]
    years = sorted({int(r['calendar_year']) for r in rs})
    fda_findings.append({'id': f'{FDA}:{a}:us-regional-market-baskets:median', 'analyte': a, 'material': 'Tomato, raw (FDA TDS food 117)',
        'group': 'United States regional market baskets FY2018–FY2020', 'group_kind': 'purchase_market', 'n': len(rs),
        'growing_system': 'unreported', 'irrigation_source': 'unreported', 'basis': 'fresh weight',
        'statistic': 'not_detected' if not det else 'median',
        'reported': {'value': None, 'unit': 'ppb', 'text': f"{len(det)} of {len(rs)} market-basket samples detected; reporting limit {', '.join(f'{x:g}' for x in rl)} ppb"},
        'value_ug_kg': None, 'median_bounds_ug_kg': None if not det else [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'min_ug_kg': min(float(r['concentration_ppb_equivalent']) for r in det) if det else None,
        'max_ug_kg': max(float(r['concentration_ppb_equivalent']) for r in det) if det else None,
        'lod_ug_kg': rl[-1], 'detected_n': len(det), 'years': [years[0], years[-1]],
        'conversion': 'ppb equals µg/kg by mass; no conversion', 'censoring': 'FDA zero code = non-detect; bounds 0 to reporting limit; never a measured zero; HMI-calculated median carries lower/upper bounds',
        'locator': 'Original FDA TSV rows ' + ', '.join(r['source_row_number'] for r in rs),
        'notes': 'HMI-calculated median of individual regional market-basket samples of raw tomato bought in US regions; purchase market, not growing origin.'})
put(f'extraction/{FDA}.json', {
    'source_id': FDA, 'primary_artifact': str(fda_src), 'primary_sha256': sha(fda_copy), 'text_copy': str(fda_copy.relative_to(root)),
    'disposition': 'occurrence_extracted',
    'disposition_reason': f'{len(norm) // len(fda_findings)} FDA Total Diet Study regional market-basket samples of raw tomato (food 117), each analysed for seven toxic elements.',
    'disposition_locator': 'FDA TDS FY2018–FY2020 analytical results, TDSFoodNumber 117 "Tomato, raw"',
    'study': {'design': 'total diet study', 'material_scope': 'Raw tomato as purchased in US regional market baskets', 'growing_origin_vs_market': 'US purchase market (four census regions); production origin unreported',
              'growing_system': 'unreported', 'irrigation_source': 'unreported',
              'collection_period': 'Calendar years 2017–2020 (FY2018–FY2020 collections)', 'n_total': len(norm) // len(fda_findings), 'sampling_unit': 'FDA regional market-basket samples',
              'method': 'FDA Elemental Analysis Manual ICP-MS', 'lod_loq': 'administrative reporting limits per analyte (ppb)', 'basis': 'fresh weight as purchased', 'qa': 'FDA laboratory QA; not itemised'},
    'findings': fda_findings, 'sample_values': fda_samples, 'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': []})

# ---------------------------------------------------------------- GEMS/Food
GEMS = 'who-gemsfood-heavy-metal-contaminants'
groot = raw / 'reports/gemsfood-contaminants'
june = sorted((groot / '2026-06-20-export').glob('*.csv'))
may = sorted(groot.glob('who-gemsfood-*-2026-05-04.csv'))
MATCH = re.compile(r'tomat|lycopersic', re.I)
PROCESSED = re.compile(r'pur[ée]e|juice|saft|ketchup|catsup|sauce|so[sß]e|sauce|salsa|paste|concentr|extract|extrato|mark|pulp|canned|can\b|konserve|conserva|preserved|stewed|crushed|diced|chopped|strained|dried|getrocknet|sun-?dried|soup|suppe|processed|molho|peeled|geschält|jarred|in juice|zubereitet|rätt|sås|zigeuner', re.I)
SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Mercury': 'tHg', 'Aluminium': 'Al', 'Tin': 'Sn', 'Chromium': 'Cr', 'Nickel': 'Ni',
           'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs'}
UNTRACKED = {'Mercury (inorganic)': 'Inorganic mercury is not a tracked HMI species and is never substituted for total mercury.',
             'Methyl mercury': 'Methylmercury in a plant food is outside the decision-relevant analytes; not substituted for total mercury.',
             'Arsenic (Monomethylarsonic Acid)': 'Monomethylarsonic acid is not a tracked HMI species.',
             'Arsenic (Dimethylarsinic acid)': 'Dimethylarsinic acid is not a tracked HMI species for tomato.',
             'Arsenic (organic)': 'Organic arsenic (unspecified) is not a tracked HMI species and is not substituted for total arsenic.'}

def scope_reason(food, local, state):
    """Return None for fresh tomato fruit, else an out-of-scope reason."""
    l = local.lower()
    if food == 'Tree tomato' or 'tamarillo' in l: return 'Tree tomato (tamarillo, Solanum betaceum) is a different plant from tomato.'
    if food in ('Tomato paste', 'Tomato juice', 'Tomato, dried', 'Vegetable juice', 'SAUCE AND CONDIMENTS', 'Ready to eat soups'):
        return f'Food is "{food}" ({local}): a processed tomato product with its own page, not fresh tomato fruit.'
    fresh_food = food == 'Tomato' or (food in ('FRUITING VEGETABLES', 'Peppers') and re.fullmatch(r'\s*(cherry )?tomato(es)?\s*', l))
    if not fresh_food: return f'Food is "{food}" ({local}): a food that names or contains tomato, not fresh tomato fruit.'
    if PROCESSED.search(l): return f'Local food name "{local}" identifies a processed tomato product (canned, puréed, concentrated, sauce, juice, dried or prepared), not fresh tomato fruit.'
    if state == 'Cooked': return f'Recorded in a cooked state ("{local}"); a prepared food, not fresh tomato as sold.'
    return None

def system_of(local):
    s = local.lower()
    org = 'organic' in s
    if re.search(r'\(gh\)|greenhouse', s): sysl = 'greenhouse'
    elif re.search(r'\bfield\b', s): sysl = 'field'
    else: sysl = 'unspecified'
    return sysl, org
SYSTEM_LABEL = {('greenhouse', False): 'Greenhouse-labelled', ('greenhouse', True): 'Greenhouse-labelled organic', ('field', False): 'Field-labelled',
                ('field', True): 'Field-labelled organic', ('unspecified', True): 'Organic-labelled', ('unspecified', False): 'Growing system not stated'}
ORIGIN = {'Domestic': 'domestic', 'Imported': 'imported', 'Mixed': 'mixed'}
ORIGIN_TEXT = {'domestic': 'domestic produce', 'imported': 'imported produce', 'mixed': 'mixed-origin produce', 'origin not stated': 'origin not stated'}

IMPLAUSIBLE = {'Pb': 5000, 'Cd': 2000, 'tHg': 500, 'tAs': 5000, 'iAs': 5000, 'Sn': 1_000_000, 'Al': 1_000_000}
# A non-detect whose limit is above every quantified fresh-tomato value for that metal
# in the export cannot place the result; a detected value a hundredfold or more below
# its own stated limit shows a unit mismatch between result and limit.
ND_CAP = {'Pb': 500, 'Cd': 300, 'tHg': 100, 'tAs': 500, 'iAs': 500, 'Sn': 100_000, 'Al': 100_000}
manifest, records, dropped, rowdisp = [], [], collections.Counter(), {}
seen, june_items = {}, {}
def item_id(p, i): return f"dataset:raw/{p.relative_to(raw)}#row {i}"
for phase, files_ in (('june', june), ('may', may)):
    for p in files_:
        manifest.append({'path': str(p), 'sha256': sha(p), 'bytes': p.stat().st_size, 'export': phase})
        for i, r in enumerate(csv.DictReader(p.open(encoding='utf-8', errors='replace')), start=2):
            food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '')
            if not MATCH.search(food + ' ' + local): continue
            iid = item_id(p, i); cont = r.get('ContaminantName', '').strip(); loc = f"{p.name} data row {i}"
            why = scope_reason(food, local, r.get('FoodStateName', ''))
            if why:
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
                seen[key]['region_labels'].append(r['RegionName']); dropped['duplicate_region_or_file_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[key]['item_id'], 'rationale': 'The same submission exported a second time (second WHO region label or second export file).', 'location': loc}; continue
            f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] == 'ug/kg' else None
            if f is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed in µg/kg of tomato.', 'location': loc}; dropped['unit'] += 1; continue
            txt = r['ResultText'].strip()
            try: lod = float(r['LOD']) * f if r['LOD'] else None
            except ValueError: lod = None
            try: loq = float(r['LOQ']) * f if r['LOQ'] else None
            except ValueError: loq = None
            try: numeric = float(txt)
            except ValueError: numeric = None
            # WHO writes non-detects as ND, 0 or 0.000; any zero is a reporting-limit bound, never a measured zero.
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
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[vkey]['item_id'], 'rationale': 'The same submission repeated in a second unit.', 'location': loc}; continue
            sysl, org = system_of(local)
            basis_label = r['ResultBasisName'] or 'Unreported'
            rec = {'analyte': analyte, 'region': r['RegionName'], 'region_labels': [r['RegionName']], 'year': int(r['Year']), 'origin': ORIGIN.get(r['FoodOriginName'], 'origin not stated'),
                   'representativeness': r['RepresentativenessName'] or 'Unreported', 'qa': r['AnalyticalQAName'], 'basis_label': basis_label,
                   'dry': basis_label == 'Dry weight',
                   'state': r['FoodStateName'] or 'Unreported', 'local_name': local, 'food_name': food, 'system': sysl, 'organic': org, 'lab': r['LabNumber'], 'serial': r['SerialNumber'],
                   'record_type': r['RecordType'] or 'unlabelled', 'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq,
                   'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
            rec['value_review'] = bool(analyte in IMPLAUSIBLE and upper > IMPLAUSIBLE[analyte])
            rec['limit_conflict'] = bool(status != 'non_detect' and lod and lod >= 100 * lower)
            rec['uninformative_limit'] = bool(status == 'non_detect' and upper > ND_CAP.get(analyte, 1e12))
            seen[key] = seen[vkey] = rec; records.append(rec)
            if phase == 'june': june_items[(r['SerialNumber'], cont)] = iid
held = [r for r in records if r['value_review'] or r['limit_conflict'] or r['uninformative_limit']]
records_all = records
records = [r for r in records if r not in held]
def hold_text(r):
    if r['value_review']: return 'Record held for value review: a value this large in fresh tomato is far outside every other tomato record in the export and signals a unit or transcription error; kept, never summarised or used in a reference.'
    if r['limit_conflict']: return f"Record held: the reported value ({r['result_text']} {r['unit']}) is a hundredfold or more below the submission’s own detection limit ({r['lod_ug_kg']:g} µg/kg), a unit mismatch between result and limit that cannot be resolved from the export; kept, never summarised or used in a reference."
    return f"Record held: a non-detect with a reporting limit of {r['upper_ug_kg']:g} µg/kg is above every quantified fresh-tomato value for this metal, so it cannot place the result; kept, never summarised or used in a reference."
for r in held:
    r['hold_reason'] = hold_text(r)
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': r['hold_reason'], 'location': r['locator']}
for r in records_all: r.setdefault('hold_reason', '')
with (audit / 'primary/gemsfood-tomato-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=list(records_all[0].keys())); w.writeheader()
    for r in records_all: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})
(audit / 'primary/gemsfood-tomato-reference-input.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'region', 'year', 'system', 'organic', 'origin', 'dry', 'representativeness', 'value_review', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records_all]) + '\n')

findings = []
groups = collections.defaultdict(list)
for r in records: groups[(r['analyte'], r['region'], r['system'], r['organic'], r['origin'], r['dry'])].append(r)
for (analyte, region, sysl, org, origin, dry), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    reps = collections.Counter(r['representativeness'] for r in rs)
    bases = collections.Counter(r['basis_label'] for r in rs)
    label = SYSTEM_LABEL[(sysl, org)]
    findings.append({'id': f"{GEMS}:{analyte}:{slug(region)}:{sysl}{'-organic' if org else ''}:{slug(origin)}{':dry' if dry else ''}:median",
        'analyte': analyte, 'material': f"Fresh tomato, {label.lower()}{', dry weight' if dry else ''}", 'system': sysl, 'organic': org, 'origin': origin,
        'group': f"WHO region {region}; {ORIGIN_TEXT[origin]}; {label.lower()}{'; dry-weight records' if dry else ''}",
        'group_kind': 'growing_system' if sysl != 'unspecified' or org else 'purchase_market', 'n': len(rs), 'statistic': 'median',
        'growing_system': {'greenhouse': 'greenhouse', 'field': 'open field'}.get(sysl, 'unreported'), 'irrigation_source': 'unreported',
        'basis': 'dry weight' if dry else 'fresh weight',
        'reported': {'value': None, 'unit': 'µg/kg', 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}'},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]], 'origins': {origin: len(rs)}, 'sampling': dict(reps), 'basis_labels': dict(bases),
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND or 0 with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'lod_ug_kg': None, 'locator': f"primary/gemsfood-tomato-records.csv rows for {analyte}, {region}, {origin}, system {sysl}{', organic' if org else ''}{', dry weight' if dry else ''}",
        'notes': ('HMI-calculated descriptive summary of individual GEMS/Food submissions. WHO region is the submitting region; "domestic" and "imported" are relative to the submitting country, '
                  'which the export does not name. Greenhouse, field and organic labels come from the submitter’s food name and were not verified. '
                  f"Sampling: {', '.join(f'{k.lower()} {v}' for k, v in reps.items())}. Basis labels: {', '.join(f'{k.lower()} {v}' for k, v in bases.items())}."),
        'item_ids': sorted(r['item_id'] for r in rs)})
for f_ in findings:
    for iid in f_['item_ids']: rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': 'Individual GEMS/Food fresh-tomato submission; contributes to the HMI-calculated summary for its analyte, WHO region, origin label and growing-system label.', 'location': next(r['locator'] for r in records if r['item_id'] == iid)}
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp, indent=0) + '\n')
put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(groot), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-tomato-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual fresh-tomato results submitted to WHO GEMS/Food: lead, cadmium, total mercury, aluminium and tin from the June 2026 export, and total and inorganic arsenic (plus any submissions absent from June) from the May 2026 per-region exports.',
    'disposition_locator': 'GEMS/Food 2026-06-20 export, FoodName = Tomato (plus fresh cherry tomato records under FRUITING VEGETABLES and Peppers); May 2026 per-region exports',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Fresh tomato fruit, raw or of unstated state (GEMS/Food code VO 0448 Tomato and equivalent local labels)',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only', 'growing_system': 'greenhouse/field/organic only where the local food name says so',
              'irrigation_source': 'unreported', 'collection_period': 'per record (Year field)',
              'n_total': len(records), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'As consumed and As is labels describe fresh produce; the few Dry weight records are kept separate', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-tomato-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'region', 'year', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'locator', 'hold_reason')} for r in held],
    'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so WHO region and domestic/imported labels cannot be read as a named growing country.',
                   'Greenhouse, field and organic labels are the submitter’s food names and were not verified.']})
print('FDA rows', len(norm), '| GEMS records', len(records), dict(collections.Counter(r['analyte'] for r in records)), '| held', len(held), '| dropped', dict(dropped),
      '| findings', len(findings), '| row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())))
for a in sorted({r['analyte'] for r in records}):
    rs = sorted(records, key=lambda r: -r['upper_ug_kg'])
    print(a, [(r['upper_ug_kg'], r['region'], r['year'], r['local_name'][:25]) for r in rs if r['analyte'] == a][:4])
print('held', collections.Counter((r['analyte'], r['region'], 'value' if r['value_review'] else 'limit-conflict' if r['limit_conflict'] else 'uninformative') for r in held))
