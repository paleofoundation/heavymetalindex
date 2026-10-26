"""Extract cassava rows from WHO GEMS/Food (June 2026 export for Pb, Cd, Hg, Al, Sn, Ni, Cr;
May 2026 per-region exports for every arsenic species and the repeated Pb/Cd/Hg/Sn rows).

Reproducible: reads the preserved primary exports, hashes them, and writes a decision for every
row whose food name or local food name names cassava, manioc, tapioca or Manihot. Raw root,
cooked root, cooked dried cassava, flour and starch/tapioca stay separate materials.
Non-detects stay zero-to-limit intervals; nothing is imputed. No FDA TDS food is cassava.
"""
import csv, hashlib, json, pathlib, statistics, collections, os, re

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/cassava'
raw = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')

GEMS = 'who-gemsfood-heavy-metal-contaminants'
groot = raw / 'reports/gemsfood-contaminants'
june = sorted((groot / '2026-06-20-export').glob('*.csv'))
may = sorted(groot.glob('who-gemsfood-*-2026-05-04.csv'))
NAME = re.compile(r'(?<![a-z0-9])(cassava|manioc|tapioca|manihot|yuca|gari|garri|fufu|farinha|attieke)(?![a-z0-9])')
SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Mercury': 'tHg', 'Aluminium': 'Al', 'Aluminum': 'Al', 'Tin': 'Sn', 'Nickel': 'Ni', 'Chromium': 'Cr',
           'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs', 'Arsenic (Dimethylarsinic acid)': 'DMA'}
UNTRACKED = {'Mercury (inorganic)': 'Inorganic mercury is not a tracked HMI species and is never substituted for total mercury.',
             'Arsenic (Monomethylarsonic Acid)': 'Monomethylarsonic acid is not a tracked HMI species.',
             'Arsenic (organic)': 'Organic arsenic (unspecified) is not a tracked HMI species and is not substituted for total arsenic.'}
MATERIAL_LABEL = {'root': 'Cassava root, raw or state unreported', 'cooked_root': 'Fresh cassava, cooked as eaten',
                  'cooked_dry': 'Dried cassava, cooked as eaten', 'flour': 'Cassava flour and ground dried cassava',
                  'starch': 'Cassava (tapioca) starch and tapioca flour', 'tapioca': 'Tapioca, form not stated'}

def material(food, local, state):
    """Return (material, None) for cassava itself, or (None, reason) for out-of-scope foods."""
    l = local.lower()
    if food == 'Feed': return None, f'"{local}" is animal feed, not food for people.'
    if 'leaves' in l: return None, 'Cassava leaves are a leafy vegetable, not the root or root-derived foods this page covers.'
    if 'farinha de feij' in l: return None, 'Bean flour (farinha de feijão); not cassava.'
    if food in ('Snack food', 'Mushrooms') or re.search(r'crisp|chips|slice|cracker|pancake|bread|cereal-based food', l):
        return None, f'"{local}" is a finished food that contains tapioca or cassava, not cassava itself.'
    if 'sourcecommod=cassava roots' in l: return 'flour', None
    if 'starch' in l or 'tapioca flour' in l or 'pearl' in l: return 'starch', None
    if 'flour' in l: return 'flour', None
    if l in ('cassava dry',): return 'cooked_dry', None
    if l in ('cassava fresh',): return 'cooked_root', None
    if 'tapioca' in l: return 'tapioca', None
    if food == 'Cassava' or 'cassava root' in l or l.startswith('a.01.000482'):
        return ('cooked_root' if state == 'Cooked' else 'root'), None
    return None, f'"{food} / {local}" does not identify cassava as the food analysed.'

manifest, records, dropped, rowdisp = [], [], collections.Counter(), {}
seen, june_items = {}, {}
def item_id(p, i): return f"dataset:raw/{p.relative_to(raw)}#row {i}"
for phase, files_ in (('june', june), ('may', may)):
    for p in files_:
        manifest.append({'path': str(p), 'sha256': sha(p), 'bytes': p.stat().st_size, 'export': phase})
        for i, r in enumerate(csv.DictReader(p.open(encoding='utf-8', errors='replace')), start=2):
            food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '').strip()
            if not NAME.search((food + ' ' + local).lower()): continue
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
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[key]['item_id'], 'rationale': 'The same submission exported under a second WHO region label (WHO EURO and European Union).', 'location': loc}; continue
            f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] == 'ug/kg' else None
            if f is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed in µg/kg of cassava.', 'location': loc}; dropped['unit'] += 1; continue
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
            rec = {'analyte': analyte, 'material': mat, 'region': r['RegionName'], 'region_labels': [r['RegionName']], 'year': int(r['Year']), 'origin': r['FoodOriginName'] or 'Unreported',
                   'representativeness': r['RepresentativenessName'] or 'Unreported', 'qa': r['AnalyticalQAName'], 'basis_label': r['ResultBasisName'],
                   'state': r['FoodStateName'] or 'Unreported', 'local_name': local, 'lab': r['LabNumber'], 'serial': r['SerialNumber'],
                   'record_type': r['RecordType'] or 'unlabelled', 'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq,
                   'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
            # Limits or values far outside plausible cassava trace-element levels signal a unit-label error.
            implausible = {'Cd': 1000, 'tHg': 500, 'Pb': 5000, 'tAs': 5000, 'iAs': 5000}
            rec['value_review'] = bool(analyte in implausible and ((lod or 0) > 1000 or (loq or 0) > 3000 or upper > implausible[analyte]))
            seen[key] = seen[vkey] = rec; records.append(rec)
            if phase == 'june': june_items[(r['SerialNumber'], cont)] = iid
held = [r for r in records if r['value_review']]
records_all = records
records = [r for r in records if not r['value_review']]
for r in held:
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': 'Record held for value review: its detection limit or value is implausible for cassava (unit-scale mismatch), so it is kept but never used in a summary or reference.', 'location': r['locator']}
with (audit / 'primary/gemsfood-cassava-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=list(records_all[0].keys())); w.writeheader()
    for r in records_all: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})
(audit / 'primary/gemsfood-cassava-reference-input.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'material', 'region', 'year', 'representativeness', 'value_review', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records_all]) + '\n')

def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)
findings = []
groups = collections.defaultdict(list)
for r in records: groups[(r['analyte'], r['material'], r['region'], r['representativeness'])].append(r)
for (analyte, mat, region, rep), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    slug = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
    findings.append({'id': f"{GEMS}:{analyte}:{mat}:{slug(region)}:{slug(rep.split()[0])}:median",
        'analyte': analyte, 'material': MATERIAL_LABEL[mat], 'material_key': mat, 'group': f'WHO region {region}; {rep.lower()}',
        'group_kind': 'purchase_market', 'n': len(rs), 'statistic': 'median', 'basis': 'as sold or as consumed (GEMS/Food result basis "As is" / "As consumed")',
        'reported': {'value': None, 'unit': 'µg/kg', 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}; local names: ' + '; '.join(sorted({r["local_name"][:60] for r in rs}))[:300]},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]],
        'origins': dict(collections.Counter(r['origin'] for r in rs)),
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND or 0 with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'lod_ug_kg': None, 'locator': f"primary/gemsfood-cassava-records.csv rows for {analyte}, {MATERIAL_LABEL[mat]}, {region}, {rep}",
        'notes': 'HMI-calculated descriptive summary of individual GEMS/Food submissions; country identity is not exported; WHO region is a reporting region, not where the cassava was grown. FoodOriginName gives only domestic or imported.',
        'item_ids': sorted(r['item_id'] for r in rs)})
for f_ in findings:
    for iid in f_['item_ids']: rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': 'Individual GEMS/Food cassava submission; contributes to the HMI-calculated WHO-region summary for its analyte, material and sampling type.', 'location': next(r['locator'] for r in records if r['item_id'] == iid)}
# Content hash of each decided row, computed exactly as the shared discovery scanner hashes a row,
# so rows outside the current alias universe (tapioca, manioc) can still be bound by identity and hash.
for p in june + may:
    wanted = {k for k in rowdisp if k.startswith(item_id(p, 2).rsplit('#', 1)[0] + '#')}
    if not wanted: continue
    with p.open(encoding='utf-8-sig', newline='') as fh:
        for i, r in enumerate(csv.DictReader(fh), start=2):
            iid = item_id(p, i)
            if iid in wanted: rowdisp[iid]['content_sha256'] = hashlib.sha256(json.dumps(r, sort_keys=True, ensure_ascii=False, separators=(',', ':')).encode()).hexdigest()
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp, indent=0) + '\n')
put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(groot), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-cassava-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual cassava results submitted to WHO GEMS/Food: lead, cadmium and total mercury from the June 2026 export, total and inorganic arsenic and tin from the May 2026 per-region exports, kept separate for raw root, cooked root, cooked dried cassava, flour, starch and tapioca of unstated form.',
    'disposition_locator': 'GEMS/Food 2026-06-20 export and 2026-05-04 per-region exports, FoodName/LocalFoodName naming cassava, manioc or tapioca',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Cassava root, cooked cassava, flour, starch/tapioca',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only', 'collection_period': 'per record (Year field)',
              'n_total': len(records), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'As is / As consumed labels retained; no moisture conversion', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-cassava-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'material', 'region', 'year', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'locator')} for r in held],
    'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so WHO region cannot be read as growing origin.']})
print('GEMS records', len(records), dict(collections.Counter((r['analyte'], r['material']) for r in records)), '| held', len(held), '| dropped', dict(dropped),
      '| findings', len(findings), '| row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())))
print(collections.Counter(r['representativeness'] for r in records))
