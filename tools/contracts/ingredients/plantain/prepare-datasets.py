"""Extract plantain rows from WHO GEMS/Food (June 2026 export for Pb, Cd, Hg, Al, Sn;
May 2026 per-region exports for every arsenic species).

Reproducible: reads the preserved primary exports, hashes them, and writes one
recorded decision for every row whose FoodName or LocalFoodName names plantain.
Plantain here is the cooking banana (Musa AAB/ABB). Ribwort plantain (Plantago
lanceolata) herb rows are a different plant and are out of scope. Each kept
record is its own result: plantain records are too few for regional medians to
say more than the records themselves. Non-detects stay as zero-to-limit intervals.
"""
import csv, hashlib, json, pathlib, collections, os

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/plantain'
raw = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')

GEMS = 'who-gemsfood-heavy-metal-contaminants'
groot = raw / 'reports/gemsfood-contaminants'
june = sorted((groot / '2026-06-20-export').glob('*.csv'))
may = sorted(groot.glob('who-gemsfood-*-2026-05-04.csv'))
SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Mercury': 'tHg', 'Aluminium': 'Al', 'Tin': 'Sn',
           'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs', 'Arsenic (Dimethylarsinic acid)': 'DMA'}
UNTRACKED = {'Mercury (inorganic)': 'Inorganic mercury is not a tracked HMI species and is never substituted for total mercury.',
             'Arsenic (Monomethylarsonic Acid)': 'Monomethylarsonic acid is not a tracked HMI species.',
             'Arsenic (organic)': 'Organic arsenic (unspecified) is not a tracked HMI species and is not substituted for total arsenic.'}
HERB = ('Ribwort plantain (Plantago lanceolata) leaf herb in the GEMS/Food category "Teas and herbal teas (solid)": '
        'a different plant (Plantaginaceae) from the cooking banana (Musa, Musaceae) that this page covers.')

def form_of(r):
    food, local, state = r['FoodName'], r['LocalFoodName'], r['FoodStateName']
    if 'CHIPS' in local.upper(): return 'Plantain chips (snack, as consumed)'
    if state.startswith('Cooked'): return 'Plantain, cooked (as consumed)'
    return 'Plantain, fresh (as sold)'

manifest, records, rowdisp, dropped = [], [], {}, collections.Counter()
seen, june_items = {}, {}
def item_id(p, i): return f"dataset:raw/{p.relative_to(raw)}#row {i}"
for phase, files_ in (('june', june), ('may', may)):
    for p in files_:
        manifest.append({'path': str(p), 'sha256': sha(p), 'bytes': p.stat().st_size, 'export': phase})
        for i, r in enumerate(csv.DictReader(p.open(encoding='utf-8', errors='replace')), start=2):
            food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '')
            if 'plantain' not in (food + ' ' + local).lower(): continue
            iid = item_id(p, i); cont = r.get('ContaminantName', '').strip(); loc = f"{p.name} data row {i}"
            if 'ribwort' in local.lower() or 'HERBAL' in r.get('FoodCategory', '').upper():
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': HERB, 'location': loc}; continue
            if cont in UNTRACKED:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': UNTRACKED[cont], 'location': loc}; continue
            analyte = SPECIES.get(cont)
            if not analyte:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Contaminant "{cont}" is outside the HMI analyte list.', 'location': loc}; continue
            if phase == 'may' and (r['SerialNumber'], cont) in june_items:
                rowdisp[iid] = {'disposition': 'duplicate_of:' + june_items[(r['SerialNumber'], cont)], 'rationale': 'The same GEMS/Food submission (serial number and contaminant) is in the June 2026 export, which is the extracted copy.', 'location': loc}; continue
            f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] == 'ug/kg' else None
            if f is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed in µg/kg of plantain.', 'location': loc}; dropped['unit'] += 1; continue
            txt = r['ResultText'].strip()
            lod = float(r['LOD']) * f if r['LOD'] else None
            loq = float(r['LOQ']) * f if r['LOQ'] else None
            # WHO writes non-detects as ND, 0 or 0.000; a zero is a reporting-limit bound, never a measured zero.
            try: numeric = float(txt)
            except ValueError: numeric = None
            if txt in ('ND', '') or numeric == 0:
                bound = lod if lod else loq
                if bound is None:
                    rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': 'Non-detect reported without any detection or quantification limit; no numerical bound exists.', 'location': loc}; continue
                lower, upper, status = 0.0, bound, 'non_detect'
            else:
                v = numeric * f; lower = upper = v
                status = 'detected_below_loq' if loq and v < loq else 'detected'
            key = (analyte, r['SerialNumber'], r['Year'], round(lower, 6), round(upper, 6))
            if key in seen:
                seen[key]['region_labels'].append(r['RegionName']); dropped['duplicate_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[key]['item_id'], 'rationale': 'The same submission exported a second time.', 'location': loc}; continue
            rec = {'analyte': analyte, 'region': r['RegionName'], 'region_labels': [r['RegionName']], 'year': int(r['Year']), 'origin': r['FoodOriginName'] or 'Unreported',
                   'representativeness': r['RepresentativenessName'] or 'Unreported', 'qa': r['AnalyticalQAName'] or 'Unreported', 'basis_label': r['ResultBasisName'],
                   'state': r['FoodStateName'] or 'Unreported', 'portion': r.get('PortionTypeName', '') or 'Unreported', 'food_name': food, 'local_name': local,
                   'form': form_of(r), 'lab': r['LabNumber'], 'serial': r['SerialNumber'], 'serial_base': r['SerialNumber'].split(' /')[0].strip(),
                   'record_type': r['RecordType'] or 'unlabelled', 'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq,
                   'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
            seen[key] = rec; records.append(rec)
            if phase == 'june': june_items[(r['SerialNumber'], cont)] = iid

with (audit / 'primary/gemsfood-plantain-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=list(records[0].keys())); w.writeheader()
    for r in records: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})

(audit / 'primary/gemsfood-plantain-records.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'region', 'year', 'form', 'serial_base', 'representativeness', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records]) + '\n')

def slug(s): return ''.join(c if c.isalnum() else '-' for c in s.lower()).strip('-').replace('--', '-')
# The two "/1" and "/2" entries under one PAHO serial carry identical values; they may be one
# sample entered twice. Both stay visible; reference units count each serial base once.
pair = collections.Counter((r['analyte'], r['serial_base']) for r in records)
findings = []
order = {'Pb': 0, 'Cd': 1, 'tAs': 2, 'iAs': 3, 'tHg': 4}
for r in sorted(records, key=lambda r: (order.get(r['analyte'], 9), r['region'], r['year'], r['serial'])):
    nd = r['status'] == 'non_detect'
    note = [f"Local food name: {r['local_name'].strip()}; food state: {r['state']}; result basis: {r['basis_label']}.", 'GEMS/Food submission; country identity is not exported, and the WHO region is a reporting region, not where the plantain was grown.',
            f"Food origin field: {r['origin']}; portion type: {r['portion']}; sampling: {r['representativeness'].lower()}; QA: {r['qa']}."]
    if pair[(r['analyte'], r['serial_base'])] > 1:
        note.append(f"Serial {r['serial_base']} appears with suffixes /1 and /2 and identical results; they may be one sample entered twice, so the reference counts it once.")
    if r['portion'].startswith('Total food'):
        note.append('Reported for the total food including inedible parts, not the edible pulp alone.')
    findings.append({'id': f"{GEMS}:{r['analyte']}:{slug(r['region'])}-{r['year']}-{slug(r['serial'])}:{'not_detected' if nd else 'sample_value'}",
        'analyte': r['analyte'], 'material': r['form'], 'group': f"WHO region {r['region']}",
        'group_kind': 'purchase_market', 'n': 1, 'statistic': 'not_detected' if nd else 'sample_value',
        'reported': {'value': None if nd else r['result_text'], 'unit': r['unit'], 'text': f"{r['result_text']} {r['unit']} (LOD {r['lod_ug_kg']:g} µg/kg, LOQ {r['loq_ug_kg']:g} µg/kg)" if r['lod_ug_kg'] is not None else f"{r['result_text']} {r['unit']}"},
        'value_ug_kg': None if nd else r['lower_ug_kg'], 'min_ug_kg': None, 'max_ug_kg': None, 'lod_ug_kg': r['lod_ug_kg'] if nd else r['lod_ug_kg'],
        'years': [r['year'], r['year']], 'state': r['state'], 'basis_label': r['basis_label'], 'serial_base': r['serial_base'],
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND or 0 with a limit = interval 0 to LOD; never a measured zero' if nd else ('Detected below the LOQ; shown as reported' if r['status'] == 'detected_below_loq' else 'Quantified'),
        'locator': r['locator'], 'notes': ' '.join(note), 'item_ids': [r['item_id']]})
for f_ in findings:
    for iid in f_['item_ids']:
        rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': 'Individual GEMS/Food plantain submission; shown as its own result.', 'location': f_['locator']}
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp, indent=0) + '\n')
put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(groot), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-plantain-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual plantain results submitted to WHO GEMS/Food: lead, cadmium and total mercury from the June 2026 export, total and inorganic arsenic from the May 2026 per-region exports. No nickel, chromium, aluminium or tin plantain records exist.',
    'disposition_locator': 'GEMS/Food 2026-06-20 and 2026-05-04 exports, FoodName or LocalFoodName naming plantain',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Plantain fresh as sold, plantain cooked as consumed, plantain chips',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives imported/mixed only', 'collection_period': 'per record (Year field)',
              'n_total': len(records), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'As is (fresh) or as consumed (cooked) per the record; no moisture conversion', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-plantain-records.csv', 'dropped': dict(dropped),
    'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so a WHO region cannot be read as growing origin.',
                   'Whether PAHO serial F15CR-03835 /1 and /2 (both 0.1742 mg/kg lead) are two samples or one entered twice cannot be resolved from the export.']})
print('GEMS plantain records', len(records), dict(collections.Counter(r['analyte'] for r in records)),
      '| row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())), '| dropped', dict(dropped))
