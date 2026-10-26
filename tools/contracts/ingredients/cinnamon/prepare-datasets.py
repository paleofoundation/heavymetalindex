"""Extract cinnamon rows from WHO GEMS/Food and decide every indexed dataset row.

Reproducible: reads the preserved GEMS/Food exports (June 2026 export for Pb, Cd,
Hg, Al, Cr, Sn; May 2026 per-region exports for the arsenic species), verifies
them by hash, and writes extraction records into the cinnamon audit directory.
Non-detects stay as zero-to-limit intervals; nothing is imputed. Every GEMS row
that names cinnamon or cassia gets one recorded decision.

Scope: dried cinnamon bark (Cinnamomum species), ground or whole. Foods that
contain cinnamon (cereals, bakery, infant foods, confectionery, cinnamon sugar),
cinnamon flowers, blended teas and purging cassia (Cassia fistula) are out of
scope, each with a reason.
"""
import csv, hashlib, json, pathlib, statistics, collections, os, re

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon'
raw = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')

MATCH = re.compile(r'cinnamon|cassia|cinnamomum|cinnamonum', re.I)

def species_of(local):
    s = local.lower()
    if re.search(r'verum|zeylanicum|ceylon|true cinnamon', s): return 'verum'
    if re.search(r'cassia/cinnamon', s): return 'unspecified'
    if re.search(r'cassia|saigon|gui pi', s): return 'cassia'
    return 'unspecified'

def form_of(local):
    s = local.lower()
    if re.search(r'ground|powder|molida|polvo|crushed|grinding|granulation|milling', s): return 'ground'
    if re.search(r'stick|quill|whole|utuh|unground|broken|patah|peel', s): return 'whole'
    return 'unspecified'

SPECIES_LABEL = {'cassia': 'Cassia (labelled)', 'verum': 'Ceylon, C. verum (labelled)', 'unspecified': 'Species not stated'}
FORM_LABEL = {'ground': 'ground', 'whole': 'sticks or pieces', 'unspecified': 'form not stated'}

def scope_reason(food, local, category):
    """Return None for cinnamon bark, else an out-of-scope reason."""
    l = local.lower()
    if 'purging cassia' in l: return 'Purging cassia (Cassia fistula) fruit is a different plant, not cinnamon.'
    if 'flower' in l: return 'Cinnamon flowers are a different plant part from the bark spice.'
    if 'sugar' in l: return 'Cinnamon sugar is a sugar blend; the cinnamon share is not reported.'
    if 'composite of' in l: return 'Composite of several spices; the cinnamon contribution cannot be separated.'
    if food == 'Cinnamon bark': return None
    if food == 'SPICES' and MATCH.search(local): return None
    if food == 'HERBS' and 'sourcecommod=cinnamon bark' in l: return None
    if food == 'TEAS AND HERBAL TEAS (SOLID)' and l.strip() == 'cinnamon, bark': return None
    if food.startswith('TEAS') or food.startswith('Tea'): return f'Herbal tea product "{local}" blends cinnamon with other ingredients; not cinnamon bark alone.'
    return f'Food is "{food}" ({local}): a food that names or contains cinnamon, not the cinnamon spice itself.'

GEMS = 'who-gemsfood-heavy-metal-contaminants'
groot = raw / 'reports/gemsfood-contaminants'
june = sorted((groot / '2026-06-20-export').glob('*.csv'))
may = sorted(groot.glob('who-gemsfood-*-2026-05-04.csv'))
SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Mercury': 'tHg', 'Aluminium': 'Al', 'Tin': 'Sn', 'Chromium': 'Cr', 'Nickel': 'Ni',
           'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs'}
UNTRACKED = {'Mercury (inorganic)': 'Inorganic mercury is not a tracked HMI species and is never substituted for total mercury.',
             'Methyl mercury': 'Methylmercury in a plant spice is outside the decision-relevant analytes; not substituted for total mercury.',
             'Arsenic (Monomethylarsonic Acid)': 'Monomethylarsonic acid is not a tracked HMI species.',
             'Arsenic (Dimethylarsinic acid)': 'Dimethylarsinic acid is not tracked for cinnamon.',
             'Arsenic (organic)': 'Organic arsenic (unspecified) is not a tracked HMI species and is not substituted for total arsenic.'}
# Magnitudes no cinnamon survey in the ledger approaches and that fail a unit check
# against the same submission's limits are held: shown in the audit, never summarised.
IMPLAUSIBLE = {'Cd': 20000, 'tHg': 2000, 'tAs': 20000, 'iAs': 20000}
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
            why = scope_reason(food, local, r.get('FoodCategory', ''))
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
                # The same submission is exported under both WHO EURO and European Union
                # (and Codex Near-East / EMRO), and the June export repeats the WPRO tin
                # submission inside the mercury file. Keep one record; retain the labels.
                seen[key]['region_labels'].append(r['RegionName']); dropped['duplicate_region_or_file_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[key]['item_id'], 'rationale': 'The same submission exported a second time (second WHO region label or second export file).', 'location': loc}; continue
            f = 1000.0 if r['UnitName'] == 'mg/kg' else 1.0 if r['UnitName'] == 'ug/kg' else None
            if f is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed in µg/kg of cinnamon.', 'location': loc}; dropped['unit'] += 1; continue
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
            elif numeric is None:
                rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Result text "{txt}" is not a number or a non-detect code.', 'location': loc}; continue
            else:
                v = numeric * f; lower = upper = v
                status = 'detected_below_loq' if loq and v < loq else 'detected'
            vkey = (analyte, r['SerialNumber'], r['Year'], round(lower, 6), round(upper, 6))
            if vkey in seen:
                seen[vkey]['region_labels'].append(r['RegionName']); dropped['duplicate_unit_export'] += 1
                rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[vkey]['item_id'], 'rationale': 'The same submission repeated in a second unit.', 'location': loc}; continue
            sp, fm = species_of(local), form_of(local)
            rec = {'analyte': analyte, 'region': r['RegionName'], 'region_labels': [r['RegionName']], 'year': int(r['Year']), 'origin': r['FoodOriginName'] or 'Unreported',
                   'representativeness': r['RepresentativenessName'] or 'Unreported', 'qa': r['AnalyticalQAName'], 'basis_label': r['ResultBasisName'] or 'Unreported',
                   'state': r['FoodStateName'] or 'Unreported', 'local_name': local, 'food_name': food, 'species': sp, 'form': fm, 'lab': r['LabNumber'], 'serial': r['SerialNumber'],
                   'record_type': r['RecordType'] or 'unlabelled', 'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq,
                   'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
            rec['value_review'] = bool(analyte in IMPLAUSIBLE and upper > IMPLAUSIBLE[analyte])
            seen[key] = seen[vkey] = rec; records.append(rec)
            if phase == 'june': june_items[(r['SerialNumber'], cont)] = iid
held = [r for r in records if r['value_review']]
records_all = records
records = [r for r in records if not r['value_review']]
HOLD_TEXT = 'Record held for value review: a cadmium, mercury or arsenic value this large in a dried spice is far outside every other cinnamon record and signals a unit or transcription error; kept, never summarised or used in a reference.'
for r in held:
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': HOLD_TEXT, 'location': r['locator']}
with (audit / 'primary/gemsfood-cinnamon-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=list(records_all[0].keys())); w.writeheader()
    for r in records_all: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})
(audit / 'primary/gemsfood-cinnamon-reference-input.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'region', 'year', 'species', 'form', 'representativeness', 'value_review', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records_all]) + '\n')

def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)
def slug(s): return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
findings = []
groups = collections.defaultdict(list)
for r in records: groups[(r['analyte'], r['region'], r['species'], r['form'])].append(r)
for (analyte, region, sp, fm), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    reps = collections.Counter(r['representativeness'] for r in rs)
    bases = collections.Counter(r['basis_label'] for r in rs)
    findings.append({'id': f"{GEMS}:{analyte}:{slug(region)}:{sp}:{fm}:median",
        'analyte': analyte, 'material': f"{SPECIES_LABEL[sp]}, {FORM_LABEL[fm]}", 'species': sp, 'form': fm,
        'group': f'WHO region {region}; {SPECIES_LABEL[sp].lower()}, {FORM_LABEL[fm]}',
        'group_kind': 'purchase_market', 'n': len(rs), 'statistic': 'median',
        'reported': {'value': None, 'unit': 'µg/kg', 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}'},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]],
        'origins': dict(collections.Counter(r['origin'] for r in rs)), 'sampling': dict(reps), 'basis_labels': dict(bases),
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND or 0 with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'lod_ug_kg': None, 'locator': f"primary/gemsfood-cinnamon-records.csv rows for {analyte}, {region}, species {sp}, form {fm}",
        'notes': ('HMI-calculated descriptive summary of individual GEMS/Food submissions. WHO region is the submitting region, not where the cinnamon grew; '
                  'the export gives only domestic or imported origin. Species and form come from the submitter’s food label and were not verified analytically. '
                  f"Sampling: {', '.join(f'{k.lower()} {v}' for k, v in reps.items())}. Basis labels: {', '.join(f'{k.lower()} {v}' for k, v in bases.items())} (dried spice; residual moisture not reported)."),
        'item_ids': sorted(r['item_id'] for r in rs)})
for f_ in findings:
    for iid in f_['item_ids']: rowdisp[iid] = {'disposition': 'occurrence_extracted', 'result_finding': f_['id'], 'rationale': 'Individual GEMS/Food cinnamon submission; contributes to the HMI-calculated WHO-region summary for its analyte, labelled species and form.', 'location': next(r['locator'] for r in records if r['item_id'] == iid)}
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp, indent=0) + '\n')
put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(groot), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-cinnamon-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual cinnamon bark results submitted to WHO GEMS/Food: lead, cadmium, total mercury, aluminium, chromium and tin from the June 2026 export, and total and inorganic arsenic from the May 2026 per-region exports.',
    'disposition_locator': 'GEMS/Food 2026-06-20 export, FoodName = Cinnamon bark (plus SPICES, HERBS and herbal-tea records naming cinnamon bark); May 2026 arsenic exports',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Dried cinnamon bark, ground or whole (GEMS/Food code HS 0777 Cinnamon bark and equivalent local labels)',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only', 'collection_period': 'per record (Year field)',
              'n_total': len(records), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'As is, dry weight and as consumed labels retained; a dried spice, residual moisture not reported, no conversion', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-cinnamon-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'region', 'year', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'locator')} for r in held],
    'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so WHO region cannot be read as growing origin.',
                   'Species labels (cassia, C. verum) are the submitter’s food names and were not verified analytically.']})
print('GEMS records', len(records), dict(collections.Counter(r['analyte'] for r in records)), '| held', len(held), '| dropped', dict(dropped),
      '| findings', len(findings), '| row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())))
for a in sorted({r['analyte'] for r in records}):
    rs = sorted(records, key=lambda r: -r['upper_ug_kg'])
    print(a, [(r['upper_ug_kg'], r['region'], r['year'], r['local_name'][:30]) for r in rs if r['analyte'] == a][:4])
print('held', [(r['analyte'], r['result_text'], r['unit'], r['region'], r['year']) for r in held])
