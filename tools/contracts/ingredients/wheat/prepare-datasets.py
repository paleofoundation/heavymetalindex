"""Extract wheat rows from WHO GEMS/Food (June 2026 export for Pb, Cd, Hg, Al, Sn, Ni, Cr;
May 2026 per-region exports for every arsenic species and the repeated Pb/Cd/Hg/Sn rows).

Reproducible: reads the preserved primary exports, hashes them, and writes a decision for every
row the shared discovery scanner can match to wheat (word-boundary match on the wheat aliases in
FoodName or LocalFoodName), plus rows that name durum, spelt, einkorn or emmer grain without the
word wheat. Wheat grain, durum grain, hulled wheats (spelt, einkorn, emmer), bran, germ and
hulled, cracked, rolled or parboiled grain stay separate materials. Flour, semolina, bread, pasta,
noodles, cereals, dishes and feed belong to other pages and are out of scope here.
Non-detects stay zero-to-limit intervals; nothing is imputed.
"""
import csv, hashlib, json, pathlib, statistics, collections, os, re, unicodedata

root = pathlib.Path(__file__).resolve().parents[4]
audit = root / 'data/evidence/contracts/ingredient-rollout-2026-10-22/wheat'
raw = pathlib.Path(os.path.expanduser('~/HMI-Library-backup/heavy-metal-index-raw'))
(audit / 'extraction').mkdir(parents=True, exist_ok=True)
(audit / 'primary').mkdir(parents=True, exist_ok=True)

def sha(p): return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def put(name, x): (audit / name).write_text(json.dumps(x, indent=2, ensure_ascii=False) + '\n')

GEMS = 'who-gemsfood-heavy-metal-contaminants'
groot = raw / 'reports/gemsfood-contaminants'
june = sorted((groot / '2026-06-20-export').glob('*.csv'))
may = sorted(groot.glob('who-gemsfood-*-2026-05-04.csv'))

# Mirror of the shared discovery matcher (tools/ingredient-source-universe.mjs normalize + matches).
ALIASES = ['wheat', 'wheat grain', 'wheat flour', 'whole wheat flour', 'wheat bran', 'wheat germ', 'semolina', 'durum wheat',
           'hard red wheat', 'soft white wheat', 'wheat protein', 'vital wheat gluten']
def normalize(x): return re.sub(r'\s+', ' ', re.sub(r'[_–—-]+', ' ', unicodedata.normalize('NFKC', str(x or '')).lower())).strip()
ALIAS_RE = [re.compile(r'(?:^|[^\w])' + re.escape(a) + r'(?:$|[^\w])') for a in ALIASES]
def universe_match(food, local): s = normalize(f'{food} | {local}'); return any(r.search(s) for r in ALIAS_RE)
# Grain of wheat species that GEMS files without the word "wheat".
EXTRA = re.compile(r'(?<![a-z])(durum|spelt|einkorn|emmer|farro|weizen|komugi|triticum)(?![a-z])')

SPECIES = {'Lead': 'Pb', 'Cadmium': 'Cd', 'Total mercury': 'tHg', 'Mercury': 'tHg', 'Aluminium': 'Al', 'Aluminum': 'Al', 'Tin': 'Sn', 'Nickel': 'Ni', 'Chromium': 'Cr',
           'Arsenic (total)': 'tAs', 'Arsenic (inorganic)': 'iAs', 'Arsenic (Dimethylarsinic acid)': 'DMA'}
UNTRACKED = {'Mercury (inorganic)': 'Inorganic mercury is not a tracked HMI species and is never substituted for total mercury.',
             'Arsenic (Monomethylarsonic Acid)': 'Monomethylarsonic acid is not a tracked HMI species.',
             'Arsenic (organic)': 'Organic arsenic (unspecified) is not a tracked HMI species and is not substituted for total arsenic.'}
MATERIAL_LABEL = {'grain': 'Wheat grain (common wheat or type not stated)', 'durum_grain': 'Durum wheat grain', 'hulled_grain': 'Spelt, einkorn and emmer grain',
                  'bran': 'Wheat bran', 'germ': 'Wheat germ', 'processed_grain': 'Hulled, cracked, rolled or parboiled grain (groats, flakes, bulgur)'}
PRODUCT = [  # (pattern on local name, reason) — finished foods and milled products that have their own pages
    (r'flour|mehl|farine|harina|maida|atta|gofio|meunerie|milling products|mahlerzeugnis', 'is a flour or milling product, which belongs on the wheat flour page, not wheat grain'),
    (r'semol|gries|grieß|grits|semoule|sémola|couscous|kuskus|kus kus', 'is semolina, grits or couscous (a milled product), which belongs on the wheat flour or pasta page'),
    (r'pasta|teigwar|nudel|noodle|pâtes|spaghett|macaroni|lasagn|penne|linguine|fusilli|rotini|vermicelli', 'is pasta or noodles, which belong on the pasta page'),
    (r'bread|brot|toast|roll|baguette|bun\b|pain|bagel|pita|tortilla|chapat|cracker|biscuit|cookie|cake|rusk|zwieback', 'is bread or a bakery product, which belongs on the bread or bakery pages'),
    (r'breakfast cereal|cereal bar|müsli|muesli|granola|porridge|cream of wheat|cocoa|kakao', 'is a breakfast cereal or sweetened product, which belongs on the cereals pages'),
    (r'tabboul|taboul|dish|meal|soup|pizza|dumpling|ready|cooked|cooking|cuite|précuit|precuit', 'is a prepared dish or cooked food, not wheat grain'),
    (r'popped|puffed|knabber|extrud|snack|chips', 'is a snack product made from wheat'),
    (r'beer|malt|bier|whisky', 'is a malted or fermented beverage ingredient, not wheat grain'),
    (r'sprout|keimling|grass|straw|stroh', 'is a sprout, grass or straw, not grain'),
    (r'gluten|starch|stärke|protein', 'is a wheat protein or starch isolate, not grain'),
    (r'infant|baby|säugling|teething', 'is an infant food'),
    (r'buckwheat|buchweizen|sarrasin|rice|maize|corn|oat|barley|rye|roggen|quinoa|millet|sorghum|mixed|blend|mehrkorn', 'is another cereal or a mixed-cereal product'),
]

def material(food, code, local, state):
    """Return (material, None) for wheat grain or an in-scope fraction, or (None, reason)."""
    l = normalize(local); f = normalize(food)
    name = f'"{food} / {local}"'
    if f == 'feed' or code == 'A.99' or re.search(r'\bfeed\b|futter', l): return None, f'{name} is animal feed, not food for people.'
    if l in ('cf1211',): return None, f'{name}: the local code names wheat flour (Codex CF 1211) while the food code names wheat grain (GC 0654); the material cannot be resolved, so it is not used.'
    # Finished foods, flours and supplements are excluded before bran and germ are recognised.
    HARD = [(r'flour|mehl|farine|harina|gofio|meunerie|milling products', 'is a flour or milling product, which belongs on the wheat flour page, not wheat grain'),
            (r'cracker|biscuit|cookie|noodle|pasta|alimentary paste|teigwar|bread|brot|toast', 'is a finished bakery, pasta or noodle product, which belongs on the bread, bakery or pasta pages'),
            (r'supplement|tablet|capsule', 'is a food supplement, not wheat grain'),
            (r'breakfast|bran buds|bran flake|crispy|processed wheat.based flakes|with chocolate|with fruit|sugar|honey', 'is a breakfast cereal or sweetened product, which belongs on the cereals pages')]
    for pat, why in HARD:
        if re.search(pat, l): return None, f'{name} {why}.'
    if re.search(r'\bbran\b|kleie', l) and not re.search(r'oat|rice|mixed|muffin|irish|cereal,', l):
        return 'bran', None
    if re.search(r'\bgerms?\b|keime', l) and not re.search(r'oil|öl', l): return 'germ', None
    for pat, why in PRODUCT:
        if re.search(pat, l) or (pat.startswith('bread') and f in ('white bread', 'wholemeal bread', 'bread & other cooked cereal products')):
            return None, f'{name} {why}.'
    if f in ('white bread', 'wholemeal bread', 'bread & other cooked cereal products', 'wheat flour', 'wheat wholemeal', 'cereal based dishes', 'snack food',
             'cereal based food for infants and young children', 'ready to eat meal for infants and young children', 'beer and beer like beverage'):
        return None, f'{name} is a {food.lower()} entry, which belongs on another HMI page, not wheat grain.'
    if re.search(r'groat|grütze|grutze|flake|flocken|bulgur|burghul|cracked|schrot|grünkern|grunkern|kibbled|freekeh|parboil', l): return 'processed_grain', None
    if re.search(r'spelt|dinkel|einkorn|emmer|farro|épeautre', l) or code == 'GC 4673': return 'hulled_grain', None
    if re.search(r'durum|hartweizen|blé dur|ble dur|grano duro', l): return 'durum_grain', None
    if code in ('GC 0654',) or re.search(r'wheat|weizen|komugi|tarwe|froment|\bblé\b|trigo|pszenica|triticum', l):
        if re.search(r'grain|kern|körner|korner|\bwheat\b|weizen|komugi|husked|tarwe|froment|trigo|crop|white wheat|a\.01\.0|gc ?0654|^cereals', l) or code == 'GC 0654':
            return 'grain', None
    return None, f'{name} does not identify wheat grain, bran or germ as the food analysed.'

manifest, records, dropped, rowdisp = [], [], collections.Counter(), {}
seen, june_items = {}, {}
def item_id(p, i): return f"dataset:raw/{p.relative_to(raw)}#row {i}"
row_hash = {}
for phase, files_ in (('june', june), ('may', may)):
    for p in files_:
        manifest.append({'path': str(p), 'sha256': sha(p), 'bytes': p.stat().st_size, 'export': phase})
        with p.open(encoding='utf-8-sig', newline='') as fh:
            for i, r in enumerate(csv.DictReader(fh), start=2):
                food = r.get('FoodName', '').strip(); local = r.get('LocalFoodName', '').strip()
                in_u = universe_match(food, local)
                if not in_u and not (EXTRA.search(normalize(local)) and r.get('FoodCode', '').startswith(('GC', 'CM', 'CF'))): continue
                iid = item_id(p, i); cont = r.get('ContaminantName', '').strip(); loc = f"{p.name} data row {i}"
                row_hash[iid] = hashlib.sha256(json.dumps(r, sort_keys=True, ensure_ascii=False, separators=(',', ':')).encode()).hexdigest()
                mat, why = material(food, r.get('FoodCode', '').strip(), local, r.get('FoodStateName', ''))
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
                    rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Unit "{r["UnitName"]}" cannot be expressed in µg/kg of wheat.', 'location': loc}; dropped['unit'] += 1; continue
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
                    if bound is None:
                        rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': 'Non-detect reported without any detection or quantification limit; no numerical bound exists.', 'location': loc}; dropped['nondetect_without_limit'] += 1; continue
                    lower, upper, status = 0.0, bound, 'non_detect'
                elif numeric is None:
                    rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Result text "{txt}" is not a number or a non-detect code.', 'location': loc}; continue
                elif numeric < 0:
                    rowdisp[iid] = {'disposition': 'out_of_scope', 'rationale': f'Negative result "{txt}" is not a concentration.', 'location': loc}; continue
                else:
                    v = numeric * f; lower = upper = v
                    status = 'detected_below_loq' if loq and v < loq else 'detected'
                vkey = (analyte, r['SerialNumber'], r['Year'], round(lower, 6), round(upper, 6))
                if vkey in seen and r['SerialNumber']:
                    seen[vkey]['region_labels'].append(r['RegionName']); dropped['duplicate_unit_export'] += 1
                    rowdisp[iid] = {'disposition': 'duplicate_of:' + seen[vkey]['item_id'], 'rationale': 'The same submission repeated in a second unit or region label.', 'location': loc}; continue
                rec = {'analyte': analyte, 'material': mat, 'region': r['RegionName'], 'region_labels': [r['RegionName']], 'year': int(r['Year']), 'origin': r['FoodOriginName'] or 'Unreported',
                       'representativeness': r['RepresentativenessName'] or 'Unreported', 'qa': r['AnalyticalQAName'], 'basis_label': r['ResultBasisName'] or 'Unreported',
                       'state': r['FoodStateName'] or 'Unreported', 'food_code': r['FoodCode'], 'local_name': local, 'lab': r['LabNumber'], 'serial': r['SerialNumber'],
                       'record_type': r['RecordType'] or 'unlabelled', 'result_text': txt, 'unit': r['UnitName'], 'lod_ug_kg': lod, 'loq_ug_kg': loq,
                       'lower_ug_kg': lower, 'upper_ug_kg': upper, 'status': status, 'locator': loc, 'item_id': iid, 'export': phase}
                # Limits or values far outside plausible wheat levels signal a unit-label error.
                implausible = {'Cd': 5000, 'tHg': 1000, 'Pb': 10000, 'tAs': 10000, 'iAs': 5000, 'DMA': 5000}
                rec['value_review'] = bool(analyte in implausible and ((lod or 0) > 1000 or (loq or 0) > 3000 or upper > implausible[analyte]))
                seen[key] = rec
                if r['SerialNumber']: seen[vkey] = rec
                records.append(rec)
                if phase == 'june' and r['SerialNumber']: june_items[(r['SerialNumber'], cont)] = iid
held = [r for r in records if r['value_review']]
records_all = records
records = [r for r in records if not r['value_review']]
for r in held:
    rowdisp[r['item_id']] = {'disposition': 'context_only', 'rationale': 'Record held for value review: its detection limit or value is implausible for wheat (unit-scale mismatch), so it is kept but never used in a summary or reference.', 'location': r['locator']}
with (audit / 'primary/gemsfood-wheat-records.csv').open('w', newline='') as fh:
    w = csv.DictWriter(fh, fieldnames=list(records_all[0].keys())); w.writeheader()
    for r in records_all: w.writerow({**r, 'region_labels': '|'.join(r['region_labels'])})
(audit / 'primary/gemsfood-wheat-reference-input.json').write_text(json.dumps(
    [{k: r[k] for k in ('analyte', 'material', 'region', 'year', 'representativeness', 'basis_label', 'value_review', 'lower_ug_kg', 'upper_ug_kg', 'locator', 'item_id')} for r in records_all]) + '\n')

def q(vals, p):
    vals = sorted(vals); k = (len(vals) - 1) * p; f = int(k); c = min(f + 1, len(vals) - 1)
    return vals[f] + (vals[c] - vals[f]) * (k - f)
slug = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
findings = []
groups = collections.defaultdict(list)
BASIS = lambda r: 'dry' if r['basis_label'] == 'Dry weight' else 'native'
for r in records: groups[(r['analyte'], r['material'], r['region'], r['representativeness'], BASIS(r))].append(r)
for (analyte, mat, region, rep, bclass), rs in sorted(groups.items()):
    det = [r for r in rs if r['status'] != 'non_detect']
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    yrs = sorted({r['year'] for r in rs})
    bases = collections.Counter(r['basis_label'] for r in rs)
    findings.append({'id': f"{GEMS}:{analyte}:{mat}:{slug(region)}:{slug(rep.split()[0])}{'-dw' if bclass == 'dry' else ''}:median", 'basis_class': bclass,
        'analyte': analyte, 'material': MATERIAL_LABEL[mat], 'material_key': mat, 'group': f'WHO region {region}; {rep.lower()}',
        'group_kind': 'purchase_market', 'n': len(rs), 'statistic': 'median',
        'basis': ('dry weight' if bclass == 'dry' else 'as sold') + ' (GEMS/Food result basis ' + ', '.join(f'"{b}" {n}' for b, n in bases.most_common()) + ')',
        'reported': {'value': None, 'unit': 'µg/kg', 'text': f'{len(det)} of {len(rs)} quantified or detected; years {yrs[0]}–{yrs[-1]}; local names: ' + '; '.join(sorted({r["local_name"][:50] for r in rs}))[:300]},
        'value_ug_kg': None, 'median_bounds_ug_kg': [round(statistics.median(lo), 3), round(statistics.median(hi), 3)],
        'quartile_bounds_ug_kg': {'q1': [round(q(lo, .25), 3), round(q(hi, .25), 3)], 'q3': [round(q(lo, .75), 3), round(q(hi, .75), 3)]},
        'p90_bounds_ug_kg': [round(q(lo, .9), 3), round(q(hi, .9), 3)],
        'min_ug_kg': min(r['lower_ug_kg'] for r in det) if det else None, 'max_ug_kg': max(r['upper_ug_kg'] for r in det) if det else None,
        'detected_n': len(det), 'years': [yrs[0], yrs[-1]],
        'origins': dict(collections.Counter(r['origin'] for r in rs)),
        'conversion': 'mg/kg × 1000 = µg/kg; ug/kg unchanged', 'censoring': 'ND or 0 with a limit = interval 0 to LOD (LOQ where LOD absent); HMI-calculated medians carry lower/upper bounds',
        'lod_ug_kg': None, 'locator': f"primary/gemsfood-wheat-records.csv rows for {analyte}, {MATERIAL_LABEL[mat]}, {region}, {rep}",
        'notes': 'HMI-calculated descriptive summary of individual GEMS/Food submissions; country identity is not exported; WHO region is a reporting region, not where the wheat was grown. FoodOriginName gives only domestic or imported.',
        'item_ids': sorted(r['item_id'] for r in rs)})
finding_of = {iid: f_['id'] for f_ in findings for iid in f_['item_ids']}
for r in records:
    rowdisp[r['item_id']] = {'disposition': 'occurrence_extracted', 'result_finding': finding_of[r['item_id']], 'rationale': 'Individual GEMS/Food wheat submission; contributes to the HMI-calculated WHO-region summary for its analyte, material and sampling type.', 'location': r['locator']}
for iid, d in rowdisp.items():
    d['content_sha256'] = row_hash[iid]
    d['discovered_by'] = 'shared alias match' if True else ''
(audit / 'gemsfood-row-dispositions.json').write_text(json.dumps(rowdisp, indent=0, ensure_ascii=False) + '\n')

# Descriptive contrasts used in prose (computed from the same records; no imputation).
def summary(rs):
    lo = [r['lower_ug_kg'] for r in rs]; hi = [r['upper_ug_kg'] for r in rs]
    det = [r for r in rs if r['status'] != 'non_detect']
    return {'n': len(rs), 'detected': len(det), 'median': [round(statistics.median(lo), 2), round(statistics.median(hi), 2)],
            'q3': [round(q(lo, .75), 2), round(q(hi, .75), 2)], 'p90': [round(q(lo, .9), 2), round(q(hi, .9), 2)],
            'share_above_100': round(sum(1 for r in rs if r['lower_ug_kg'] > 100) / len(rs), 4), 'share_above_200': round(sum(1 for r in rs if r['lower_ug_kg'] > 200) / len(rs), 4),
            'years': [min(r['year'] for r in rs), max(r['year'] for r in rs)]}
contrasts = {}
for a in ('Pb', 'Cd', 'tAs', 'iAs', 'tHg', 'Ni', 'Al', 'Cr', 'Sn'):
    ra = [r for r in records if r['analyte'] == a]
    if not ra: continue
    contrasts[a] = {'by_material': {m: summary([r for r in ra if r['material'] == m]) for m in MATERIAL_LABEL if any(r['material'] == m for r in ra)},
                    'grain_by_region': {g: summary([r for r in ra if r['material'] == 'grain' and r['region'] == g]) for g in sorted({r['region'] for r in ra if r['material'] == 'grain'})},
                    'grain_by_origin': {g: summary([r for r in ra if r['material'] == 'grain' and r['origin'] == g]) for g in sorted({r['origin'] for r in ra if r['material'] == 'grain'})},
                    'grain_random_by_region': {g: summary([r for r in ra if r['material'] == 'grain' and r['region'] == g and r['representativeness'] == 'Random sampling']) for g in sorted({r['region'] for r in ra if r['material'] == 'grain' and r['representativeness'] == 'Random sampling'})},
                    'grain_soft_vs_durum_local': {k: summary(v) for k, v in {'Wheat grain, soft': [r for r in ra if r['local_name'] == 'Wheat grain, soft'], 'Wheat grain, Durum': [r for r in ra if r['local_name'] == 'Wheat grain, Durum']}.items() if v}}
put('primary/gemsfood-wheat-contrasts.json', contrasts)

put(f'extraction/{GEMS}.json', {
    'source_id': GEMS, 'primary_artifact': str(groot), 'primary_sha256': manifest, 'text_copy': 'primary/gemsfood-wheat-records.csv',
    'disposition': 'occurrence_extracted',
    'disposition_reason': 'Individual wheat results submitted to WHO GEMS/Food: lead, cadmium, total mercury, nickel, aluminium and tin from the June 2026 export, and total and inorganic arsenic from the May 2026 per-region exports, kept separate for common wheat grain, durum grain, spelt/einkorn/emmer grain, bran, germ and hulled, cracked, rolled or parboiled grain.',
    'disposition_locator': 'GEMS/Food 2026-06-20 export and 2026-05-04 per-region exports, FoodName/FoodCode/LocalFoodName naming wheat grain, durum, spelt, bran or germ',
    'study': {'design': 'international monitoring database (national submissions)', 'material_scope': 'Wheat grain, durum grain, hulled wheats, bran, germ, processed whole grain',
              'growing_origin_vs_market': 'Submitting WHO region; FoodOriginName gives domestic/imported only', 'collection_period': 'per record (Year field)',
              'n_total': len(records), 'sampling_unit': 'individual GEMS/Food records', 'method': 'per submitting laboratory; AnalyticalQAName retained',
              'lod_loq': 'per record', 'basis': 'ResultBasisName labels retained (mostly "As is"); no moisture conversion', 'qa': 'AnalyticalQAName per record'},
    'findings': findings, 'sample_values_ref': 'primary/gemsfood-wheat-records.csv', 'dropped': dict(dropped),
    'held_for_value_review': [{k: r[k] for k in ('analyte', 'material', 'region', 'year', 'result_text', 'unit', 'lod_ug_kg', 'loq_ug_kg', 'locator')} for r in held],
    'controls': [], 'contradictions_with_stored_summary': [],
    'unresolved': ['Country identity is not in the export, so WHO region cannot be read as growing origin.',
                   'Rows whose local name is the wheat-flour code CF1211 under the wheat-grain food code GC 0654 are not used because the material cannot be resolved.']})
print('GEMS records', len(records), dict(collections.Counter((r['analyte'], r['material']) for r in records)), '| held', len(held), '| dropped', dict(dropped),
      '| findings', len(findings), '| row decisions', dict(collections.Counter(v['disposition'].split(':')[0] for v in rowdisp.values())))
print(collections.Counter(r['representativeness'] for r in records))
