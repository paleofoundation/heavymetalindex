"""Extract honey rows from the two sample-level datasets (FDA TDS FY2018-FY2020, WHO GEMS/Food).

Reproducible: reads preserved primary exports, verifies them by hash, and writes
extraction records into the honey audit directory. Non-detects stay as
zero-to-limit intervals; nothing is imputed.
"""
import csv, hashlib, json, pathlib, shutil, statistics, collections, os

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/honey'
raw = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')

# ---------------------------------------------------------------- FDA TDS
FDA = 'fda2022-tds-elements-fy2018-fy2020'
fda_src = raw / 'reports/fda-tds-fy2018-2020-recovery-2026-09-10/analytical-results.txt'
fda_copy = audit / 'primary/fda-elements.txt'
if not fda_copy.exists(): shutil.copy2(fda_src, fda_copy)
native = list(csv.DictReader(fda_copy.open(encoding='cp1252'), delimiter='\t'))
norm = [r for r in csv.DictReader((root / 'data/evidence/fda_tds_fy2018_2020_element_results_samples.csv').open())
        if r['tds_food_number'] == '172' and r['metal_species']]
for r in norm:
    s = native[int(r['source_row_number']) - 2]
    for nk, k in [('TDSFoodNumber', 'tds_food_number'), ('Concentration', 'concentration_original'),
                  ('ReportingLimit', 'reporting_limit_original'), ('CalendarYear', 'calendar_year')]:
        assert s[nk].strip() == r[k], (nk, r['source_row_number'])
fda_samples = [{'sample': r['sample_id'], 'group': f"FY{r['fiscal_year']} {r['season']}", 'analyte': r['metal_species'],
                'value_ug_kg': None if r['result_status'] == 'non_detect' else float(r['concentration_ppb_equivalent']),
                'censored': r['result_status'] == 'non_detect', 'bound_ug_kg': float(r['reporting_limit_ppb_equivalent']),
                'lower_ug_kg': float(r['concentration_lower_bound_ppb']), 'upper_ug_kg': float(r['concentration_upper_bound_ppb']),
                'locator': f"Original FDA TSV row {r['source_row_number']} (header = row 1)"} for r in norm]
fda_findings = []
for a in sorted({r['metal_species'] for r in norm}):
    rs = [r for r in norm if r['metal_species'] == a]
    det = [r for r in rs if r['result_status'] == 'detected']
    rl = sorted({float(r['reporting_limit_ppb_equivalent']) for r in rs})
    fda_findings.append({'id': f'{FDA}:{a}:us-national:composites', 'analyte': a, 'material': 'Honey (FDA TDS food 172)',
        'group': 'United States national collections FY2018–FY2020', 'group_kind': 'purchase_market', 'n': len(rs),
        'statistic': 'not_detected' if not det else 'sample_value',
        'reported': {'value': None, 'unit': 'ppb', 'text': f"{len(det)} of {len(rs)} composites detected; reporting limit {', '.join(str(x) for x in rl)} ppb"},
        'value_ug_kg': None, 'min_ug_kg': None, 'max_ug_kg': None, 'lod_ug_kg': rl[0],
        'conversion': 'ppb equals µg/kg by mass; no conversion', 'censoring': 'FDA zero code = non-detect; bounds 0 to reporting limit; never a measured zero',
        'locator': 'Original FDA TSV rows ' + ', '.join(r['source_row_number'] for r in rs), 'notes': 'National composites; not brands, lots or production origin.'})
put(f'extraction/{FDA}.json', {
    'source_id': FDA, 'primary_artifact': str(fda_src), 'primary_sha256': sha(fda_copy), 'text_copy': str(fda_copy.relative_to(root)),
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Three national FDA Total Diet Study honey composites (food 172) with seven toxic-element results each.',
    'disposition_locator': 'FDA TDS FY2018–FY2020 analytical results, food 172',
    'study': {'design': 'total diet study', 'material_scope': 'Honey as purchased, prepared-food composite', 'growing_origin_vs_market': 'US purchase market; production origin unreported',
              'collection_period': 'FY2018 summer, FY2019 winter, FY2020 winter', 'n_total': 3, 'sampling_unit': 'FDA national composites',
              'method': 'FDA Elemental Analysis Manual ICP-MS', 'lod_loq': 'administrative reporting limits per analyte (ppb)', 'basis': 'as purchased', 'qa': 'FDA laboratory QA; not itemised'},
    'findings': fda_findings, 'sample_values': fda_samples, 'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': []})

# ---------------------------------------------------------------- GEMS/Food
# The June 2026 export holds Pb, Cd, Hg, Al and Sn; arsenic species exist only in the
# May 2026 per-region exports. Every row naming honey gets one recorded decision.
GEMS = 'who-gemsfood-heavy-metal-contaminants'
groot = raw / 'reports/gemsfood-contaminants'
june = sorted((groot / '2026-06-20-export').glob('*.csv'))
may = sorted(groot.glob('who-gemsfood-*-2026-05-04.csv'))
SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Mercury': 'tHg', 'Aluminium': 'Al', 'Tin': 'Sn',
           'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs', 'Arsenic (Dimethylarsinic acid)': 'DMA'}
UNTRACKED = {'Mercury (inorganic)': 'Inorganic mercury is not a tracked HMI species and is never substituted for total mercury.',
             'Arsenic (Monomethylarsonic Acid)': 'Monomethylarsonic acid is not a tracked HMI species.',
             'Arsenic (organic)': 'Organic arsenic (unspecified) is not a tracked HMI species and is not substituted for total arsenic.'}
manifest, records, dropped, rowdisp = [], [], collections.Counter(), {}
seen, june_items = {}, {}
def item_id(p, i): return f"dataset:raw/{p.relative_to(raw)}#row {i}"
for phase, files_ in (('june', june), ('may', may)):
    for p in files_:
        manifest.append({'path': str(p), 'sha256': sha(p), 'bytes': p.stat().st_size, 'export': phase})
        for i, r in enumerate(csv.DictReader(p.open(encoding='utf-8', errors='replace')), start=2):
            food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '')
            if 'honey' not in (food + ' ' + local).lower(): continue
            iid = item_id(p, i); cont = r.get('ContaminantName', '').strip(); loc = f"{p.name} data row {i}"
            if food != 'Honey':
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Food is "{food}" ({local}): a different food that names or contains honey, not honey itself.', 'location': loc}; continue
            if cont in UNTRACKED:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': UNTRACKED[cont], 'location': loc}; continue
            analyte = SPECIES.get(cont)
            if not analyte:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Contaminant "{cont}" is outside the HMI analyte list.', 'location': loc}; continue
            if phase == 'may' and (r['SerialNumber'], cont) in june_items:
                rowdisp[iid] = {'disposition': 'duplicate_of:' + june_items[(r['SerialNumber'], cont)], 'rationale': 'The same GEMS/Food submission (serial number and contaminant) is in the June 2026 export, which is the extracted copy.', 'location': loc}; continue
            key = (analyte, r['SerialNumber'], r['LabNumber'], r['Year'], r['ResultText'], r['LOD'], r['LOQ'], r['LocalFoodName'], r['UnitName'])
            if key in seen:
                # The same submission is exported under both WHO EURO and European Union
                # (and Codex Near-East / EMRO). Keep one record; retain both labels.
                seen[key]['region_labels'].append(r['RegionName']); dropped['duplicate_region_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[key]['item_id'], 'rationale': 'The same submission exported under a second WHO region label.', 'location': loc}; continue
            f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] == 'ug/kg' else None
            if f is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed in µg/kg of honey.', 'location': loc}; dropped['unit'] += 1; continue
            txt = r['ResultText'].strip()
            lod = float(r['LOD']) * f if r['LOD'] else None
            loq = float(r['LOQ']) * f if r['LOQ'] else None
            # WHO writes non-detects as ND, 0 or 0.000; any zero is a reporting-limit bound, never a measured zero.
            try: numeric = float(txt)
            except ValueError: numeric = None
            if txt in ('ND', '') or numeric == 0:
                bound = lod if lod else loq
                if bound is None:
                    rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': 'Non-detect reported without any detection or quantification limit; no numerical bound exists.', 'location': loc}; dropped['nondetect_without_limit'] += 1; continue
                lower, upper, status = 0.0, bound, 'non_detect'
            else:
                v = numeric * f; lower = upper = v
                status = 'detected_below_loq' if loq and v < loq else 'detected'
            # The same submission can also appear in a second unit (e.g. 15 mg/kg and
            # 15000 ug/kg); collapse on the converted value as well.
            vkey = (analyte, r['SerialNumber'], r['Year'], round(lower, 6), round(upper, 6))
            if vkey in seen:
                seen[vkey]['region_labels'].append(r['RegionName']); dropped['duplicate_unit_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[vkey]['item_id'], 'rationale': 'The same submission repeated in a second unit.', 'location': loc}; continue
            rec = {'analyte': analyte, 'region': r['RegionName'], 'region_labels': [r['RegionName']], 'year': int(r['Year']), 'origin': r['FoodOriginName'] or 'Unreported',
                   'representativeness': r['RepresentativenessName'] or 'Unreported', 'qa': r['AnalyticalQAName'], 'basis_label': r['ResultBasisName'],
                   'state': r['FoodStateName'] or 'Unreported', 'local_name': r['LocalFoodName'], 'lab': r['LabNumber'], 'serial': r['SerialNumber'],
                   'record_type': r['RecordType'] or 'unlabelled', 'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq,
                   'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
            # A detection limit above 1 mg/kg is implausible for honey trace elements and
            # signals a unit label error; magnitudes far outside every honey survey in the
            # ledger (Cd 15 and 36 mg/kg) are held as well. Held records are shown in the
            # audit, never used in a summary or reference.
            implausible = {'Cd': 1000, 'tHg': 500, 'Pb': 5000, 'tAs': 5000}
            rec['value_review'] = bool(analyte in implausible and ((lod or 0) > 1000 or (loq or 0) > 3000 or upper > implausible[analyte]))
            seen[key] = seen[vkey] = rec; records.append(rec)
            if phase == 'june': june_items[(r['SerialNumber'], cont)] = iid
held = [r for r in records if r['value_review']]
records_all = records
records = [r for r in records if not r['value_review']]
for r in held:
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': 'Record held for value review: its detection limit or value is implausible for honey (unit-scale mismatch), so it is kept but never used in a summary or reference.', 'location': r['locator']}
with (audit / 'primary/gemsfood-honey-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=list(records_all[0].keys())); w.writeheader()
    for r in records_all: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})

(audit / 'primary/gemsfood-honey-reference-input.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'region', 'year', 'representativeness', 'value_review', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records_all]) + '\n')

def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)
findings = []
for (analyte, region), rs in sorted(collections.defaultdict(list, {}).items()):
    pass
groups = collections.defaultdict(list)
for r in records: groups[(r['analyte'], r['region'], r['representativeness'])].append(r)
for (analyte, region, rep), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    findings.append({'id': f"{GEMS}:{analyte}:{region.lower().replace(' ', '-')}:{rep.split()[0].lower()}:median",
        'analyte': analyte, 'material': 'Honey (GEMS/Food code 11.5)', 'group': f'WHO region {region}; {rep.lower()}',
        'group_kind': 'purchase_market', 'n': len(rs), 'statistic': 'median',
        'reported': {'value': None, 'unit': 'µg/kg', 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}'},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]],
        'origins': dict(collections.Counter(r['origin'] for r in rs)),
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND or 0 with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'lod_ug_kg': None, 'locator': f"primary/gemsfood-honey-records.csv rows for {analyte}, {region}, {rep}",
        'notes': 'HMI-calculated descriptive summary of individual GEMS/Food submissions; country identity is not exported; WHO region is a reporting region, not production origin. The EURO and European Union labels can hold overlapping national submissions that the export does not let us match.',
        'item_ids': sorted(r['item_id'] for r in rs)})
for f_ in findings:
    for iid in f_['item_ids']: rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': 'Individual GEMS/Food honey submission; contributes to the HMI-calculated WHO-region summary for its analyte and sampling type.', 'location': next(r['locator'] for r in records if r['item_id'] == iid)}
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp, indent=0) + '\n')
put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(groot), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-honey-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual honey results submitted to WHO GEMS/Food: lead, cadmium, total mercury, aluminium and tin from the June 2026 export, and total arsenic, inorganic arsenic and DMA from the May 2026 per-region exports; no nickel or chromium honey records exist in either.',
    'disposition_locator': 'GEMS/Food 2026-06-20 export, FoodName = Honey',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Honey (FoodCode 11.5)',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only', 'collection_period': 'per record (Year field)',
              'n_total': len(records), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'As is / As consumed labels retained; honey is consumed as sold, no moisture conversion', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-honey-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'region', 'year', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'locator')} for r in held],
    'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so WHO region cannot be read as growing origin.']})
print('FDA rows', len(norm), '| GEMS records', len(records), dict(collections.Counter(r['analyte'] for r in records)), '| held', len(held), '| dropped', dict(dropped), '| row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())))
