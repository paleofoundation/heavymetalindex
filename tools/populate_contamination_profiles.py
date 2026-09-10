#!/usr/bin/env python3
"""
Populate contamination_profile values on ingredient pages.
Path A: FDA TDS data (data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv)
Path B: WHO GEMS/Food data + source-page Key Numbers synthesis

Usage: python3 tools/populate_contamination_profiles.py [--dry-run]
"""

import csv, re, os, sys, glob, json, uuid
from datetime import datetime, timezone
from datetime import date
from copy import deepcopy

TODAY = date.today().isoformat()
WIKI_METALS = {'Pb', 'Cd', 'iAs', 'tAs', 'tHg', 'Ni', 'Al', 'Cr', 'Sn', 'U'}
DRY_RUN = '--dry-run' in sys.argv

# ── 1. Load FDA TDS data ────────────────────────────────────────────────────

tds = {}  # (slug, metal) -> dict
with open('data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv') as f:
    for r in csv.DictReader(f):
        if r['metal_species'] not in WIKI_METALS:
            continue
        key = (r['ingredient_slug'], r['metal_species'])
        tds.setdefault(key, []).append({
            'n': int(r['n']),
            'reported_zero_n': int(r['reported_zero_n']),
            'p10': float(r['p10_ppb_equivalent']),
            'p90': float(r['p90_ppb_equivalent']),
            'p95': float(r['p95_ppb_equivalent']),
            'max': float(r['max_ppb_equivalent']),
            'rl': float(r['reporting_limit_max_ppb_equivalent']) if r.get('reporting_limit_max_ppb_equivalent') else 0.0,
            'row': r,
        })

# ── 2. Load WHO GEMS/Food data ───────────────────────────────────────────────
# Aggregate EURO region; if multiple rows, take highest-n row.

# Preserve every basis/state/period stratum. N never chooses a different basis.
who_raw = {}
with open('data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv') as f:
    for r in csv.DictReader(f):
        if r['metal_species'] not in WIKI_METALS:
            continue
        key = (r['food_name'].strip().lower(), r['metal_species'])
        who_raw.setdefault(key, []).append(r)

def who_lookup(food_name_lower, metal, scope):
    required = ('basis', 'geography', 'food_state', 'year_min', 'year_max')
    if not all(key in scope for key in required):
        return None  # a profile without an admitted stratum cannot choose by N
    matches = [r for r in who_raw.get((food_name_lower, metal), [])
               if all(str(r[field]) == str(scope[key]) for key, field in
                      [('basis', 'basis'), ('geography', 'region_name'),
                       ('food_state', 'food_state'), ('year_min', 'year_min'), ('year_max', 'year_max')])]
    if len(matches) != 1:
        return None
    r = matches[0]
    if any(int(r.get(k) or 0) > 0 for k in ['n_unit_review', 'n_value_review', 'n_year_review']):
        return None
    return {'n': int(r['n_rows']), 'p10': float(r['p10_lower_bound_ug_kg']),
            'p90': float(r['p90_lower_bound_ug_kg']), 'p95': float(r['p95_lower_bound_ug_kg']),
            'max': float(r['max_lower_bound_ug_kg']), 'food_name': r['food_name'], 'row': r}

# ── 3. WHO GEMS slug → food_name mapping ────────────────────────────────────

# Maps ingredient_slug -> list of WHO GEMS food_name strings to try (in priority order)
WHO_MAP = {
    'almond':                      ['almonds'],
    'apple':                       ['apple'],
    'apple-juice':                 ['apple juice', 'fruit juice', 'concentrated fruit juice'],
    'applesauce':                  ['apple', 'fruit and fruit products nes'],
    'asparagus':                   ['asparagus'],
    'avocado':                     ['avocado'],
    'baked-beans':                 ['beans-based meals', 'beans (dry)'],
    'banana':                      ['banana'],
    'blueberries':                 ['blueberries'],
    'broccoli':                    ['broccoli'],
    'butternut-squash':            ['squash, summer (= courgette)', 'pumpkin'],
    'canned-spaghetti':            ['cereal-based dishes'],
    'canned-tomatoes':             ['tomato'],
    'carrot':                      ['carrot'],
    'cauliflower':                 ['cauliflower (head)'],
    'celery':                      ['celery (whole)'],
    'chapattis':                   ['bread & other cooked cereal products', 'flat bread'],
    'cheddar-cheese':              ['cheddar', 'cheese'],
    'chicken':                     ['chicken meat'],
    'chocolate':                   ['chocolate'],
    'clementines-tangerines':      ['orange, sweet, sour + orange-like hybrid', 'citrus fruits'],
    'cocoa':                       ['cocoa beans'],
    'cucumber':                    ['cucumber'],
    'custard':                     ['fermented milk products'],
    'eggs':                        ['chicken eggs'],
    'fish-fingers':                ['marine fishes', 'fishes'],
    'flavored-carbonated-bottled-waters': ['bottled water', 'drinking water nes'],
    'fromage-frais':               ['fermented milk products'],
    'frozen-peas':                 ['pea (immature seeds)', 'peas'],
    'fruit-juice-ready-drinks':    ['fruit juice', 'concentrated fruit juice'],
    'grapes':                      ['grape', 'grapes'],
    'lentils':                     ['lentil (dry)', 'lentils'],
    'meat':                        ['cattle meat'],
    'melon':                       ['melons, except watermelon'],
    'non-apple-fruit':             ['fruit and fruit products nes'],
    'non-root-vegetables':         ['fruiting vegetables'],
    'noodles':                     ['cereal-based dishes', 'pasta and noodles'],
    'onions':                      ['onion'],
    'orange-juice':                ['fruit juice', 'concentrated fruit juice'],
    'oranges':                     ['orange, sweet, sour + orange-like hybrid'],
    'parsnips':                    ['parsnip'],
    'pasta':                       ['cereal-based dishes', 'pasta and noodles'],
    'peaches':                     ['peach', 'stone fruits'],
    'pears':                       ['pear'],
    'pork-sausages':               ['pig, offal of'],
    'rice-cakes':                  ['rice-based meals', 'rice, polished'],
    'root-vegetables':             ['carrot', 'root vegetables'],
    'semi-skimmed-milk':           ['cattle milk', 'milks'],
    'strawberries':                ['strawberry'],
    'sweet-potato':                ['sweet potato'],
    'tinned-fish':                 ['sardines and sardine-type fishes', 'marine fishes', 'fishes'],
    'water':                       ['tap water', 'bottled water', 'drinking water nes'],
    'wheat-cereal-biscuits':       ['bread & other cooked cereal products'],
    'white-bread':                 ['bread & other cooked cereal products'],
    'white-fish':                  ['marine fishes', 'fishes'],
    'wholemeal-bread':             ['wholemeal bread', 'bread & other cooked cereal products'],
    'yam':                         ['yams'],
    'yogurt':                      ['fermented milk products'],
}

def who_for_slug(slug, metal, scope):
    """Look up WHO GEMS data for a slug/metal. Returns dict or None."""
    candidates = WHO_MAP.get(slug, [])
    for name in candidates:
        row = who_lookup(name.lower(), metal, scope)
        if row and row['n'] >= 2:
            return row
    return None

# ── 4. Helper functions ──────────────────────────────────────────────────────

def confidence(n):
    if n >= 27: return 'high'
    if n >= 10: return 'medium'
    return 'low'

def fmt(v):
    """Format ppb value: int if whole, one decimal otherwise."""
    if v == int(v):
        return str(int(v))
    return str(round(v, 1))

def parse_frontmatter_cp(content):
    """
    Parse contamination_profile blocks.
    Returns {metal: {status, typical_ppb_null, p95_null, n_studies, confidence_val}}
    """
    result = {}
    fm_count = 0
    in_fm = False
    in_cp = False
    current_metal = None

    for line in content.split('\n'):
        if line == '---':
            fm_count += 1
            if fm_count == 2:
                break
            in_fm = True
            continue
        if not in_fm:
            continue
        if line == 'contamination_profile:':
            in_cp = True
            continue
        if in_cp:
            m = re.match(r'^  ([A-Za-z]+):$', line)
            if m:
                current_metal = m.group(1)
                result[current_metal] = {}
                continue
            if line and not line.startswith(' '):
                in_cp = False
                current_metal = None
            if current_metal:
                stripped = line.strip()
                if stripped.startswith('status:'):
                    result[current_metal]['status'] = stripped.split('status:')[1].strip()
                elif stripped.startswith('typical_ppb:'):
                    result[current_metal]['typical_ppb_null'] = 'null, null' in stripped
                    result[current_metal]['typical_ppb_has_values'] = not ('null' in stripped)
                elif stripped.startswith('p95_ppb:'):
                    result[current_metal]['p95_null'] = stripped.endswith('null')
                elif stripped.startswith('n_studies:'):
                    try:
                        result[current_metal]['n_studies'] = int(stripped.split(':')[1].strip())
                    except Exception:
                        result[current_metal]['n_studies'] = 0
                elif re.match(r'^(basis|geography|food_state|year_min|year_max|tds_food_number):', stripped):
                    k, v = stripped.split(':', 1)
                    result[current_metal][k] = v.strip().strip(chr(34))
                elif stripped.startswith('confidence:'):
                    result[current_metal]['confidence_val'] = stripped.split(':')[1].strip()
    return result

def update_metal_block_in_content(content, metal, updates):
    """Update one cell, including the evidence that owns its values and citation."""
    fm_end = content.find('\n---', 4)
    head, body = content[:fm_end], content[fm_end:]
    pattern = re.compile(r'(^  ' + re.escape(metal) + r':\n)(.*?)(?=^  [A-Za-z][A-Za-z0-9-]*:|^\S|\Z)', re.M | re.S)
    def replace(match):
        block = match.group(2)
        values = {'status': updates['status'], 'typical_ppb': [updates['typical_low'], updates['typical_high']],
                  'p95_ppb': updates['p95'], 'confidence': updates['confidence'], 'n_studies': updates['n_studies'],
                  'last_reviewed': TODAY, 'value_kind': 'source_summary', 'evidence': updates['evidence']}
        for key, value in values.items():
            line = '    ' + key + ': ' + json.dumps(value, ensure_ascii=False)
            rx = re.compile(r'^    ' + re.escape(key) + r':[^\n]*', re.M)
            if rx.search(block): block = rx.sub(lambda _: line, block)
            else: block = block.rstrip('\n') + '\n' + line + '\n'
        return match.group(1) + block
    return pattern.sub(replace, head, count=1) + body

def bump_updated(content):
    """Update the page-level 'updated:' field in frontmatter to TODAY."""
    lines = content.split('\n')
    fm_count = 0
    result = []
    for line in lines:
        if line == '---':
            fm_count += 1
        if fm_count == 1 and re.match(r'^updated:', line):
            line = f'updated: {TODAY}'
        result.append(line)
    return '\n'.join(result)

# ── 5. Decide values for a metal/slug combination ───────────────────────────

def decide_values(slug, metal, cp_info):
    """
    Returns dict with keys: status, typical_low, typical_high, p95, confidence, n_studies, source_label
    or None if we cannot determine values.
    """
    current_n = cp_info.get('n_studies', 0)

    # Path A: TDS
    candidates = tds.get((slug, metal), [])
    if cp_info.get('tds_food_number'):
        candidates = [r for r in candidates if r['row']['tds_food_number'] == str(cp_info['tds_food_number'])]
    tds_row = candidates[0] if len(candidates) == 1 else None
    if tds_row:
        n = tds_row['n']
        p10 = tds_row['p10']
        p90 = tds_row['p90']
        p95 = tds_row['p95']
        # Censored-value guard: FDA TDS reports non-detects as literal 0. When
        # every (or nearly every) composite fell below the reporting limit, the
        # distribution is left-censored, not a measured zero. Publishing
        # typical/p95 = 0 at high confidence understates contamination (the
        # 2026-06-11 rice Pb/tHg/Cr artifact, Part 2 drift audit finding A1). Do
        # not populate a measured zero from a fully-censored TDS cell; leave it
        # for source-grounded synthesis against the broader literature.
        if p90 == 0 and p95 == 0:
            print(f'  [censored-skip] {slug} x {metal}: all {n} TDS composites '
                  f'with ND-dominated zero upper summaries (RL {tds_row["rl"]} ppb); not '
                  f'populated as a measured zero')
            return None
        conf = 'low'  # one source-scope record, not a multi-study synthesis
        # Degenerate-distribution guard: a single composite, or an all-equal
        # percentile vector, is a point, not a distribution. Never publish it at
        # high confidence with p95 == typical (the rice iAs n=1 41.6 artifact).
        if n <= 1 or (p10 == p90 == p95):
            conf = 'low'
        # TDS is 1 study. If current page already has n_studies > 0 from prior source, add TDS on top.
        # This is one dataset, never current_n+1 on every rerun.
        new_n = 1
        r = tds_row['row']
        evidence = {'source_id': r['source_id'], 'role': 'value', 'evidence_path': 'data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv',
                    'row_key': r['source_id'] + '::' + r['tds_food_number'] + '::' + r['analyte_slug'],
                    'food_id': r['tds_food_number'], 'food_name': r['tds_food_description'], 'metal_species': metal,
                    'basis': r['basis'], 'geography': 'US', 'year_min': 2017, 'year_max': 2020, 'period_scope': 'dataset_collection_window', 'n': n,
                    'statistic_type': 'source_lower_bound_summary', 'censoring': 'Non-detect zero codes retained in source lower-bound percentiles'}
        return {
            'status': 'populated',
            'typical_low': p10,
            'typical_high': p90,
            'p95': p95,
            'confidence': conf,
            'n_studies': new_n,
            'source_label': f'FDA TDS FY2018-2020 (n={n})',
            'evidence': [evidence],
        }

    # Path B: only if n_studies > 0
    if current_n == 0:
        return None  # genuine data gap, leave as-is

    # Path B: WHO GEMS/Food
    who_row = who_for_slug(slug, metal, cp_info)
    if who_row:
        n = who_row['n']
        p10 = who_row['p10']
        p90 = who_row['p90']
        p95 = who_row['p95']
        # Same censored-/degenerate-value guards as the TDS path: WHO GEMS
        # lower-bound percentiles code non-detects as 0, so an all-zero upper
        # tail is left-censored, not a measured zero.
        if p90 == 0 and p95 == 0:
            print(f'  [censored-skip] {slug} x {metal}: WHO GEMS lower-bound '
                  f'p90/p95 = 0 (non-detect-dominated); not populated as a measured zero')
            return None
        conf = 'low'  # one source-scope record, not a multi-study synthesis
        if p10 == p90 == p95:
            conf = 'low'
        r = who_row['row']
        evidence = {'source_id': r['source_id'], 'role': 'value', 'evidence_path': 'data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv',
                    'row_key': json.dumps([r['source_id'], r['food_code'], r['food_name'], metal, r['region_name'], r['food_state'], r['basis'], r['year_min'], r['year_max']], separators=(',', ':')),
                    'food_id': r['food_code'], 'food_name': r['food_name'], 'metal_species': metal,
                    'basis': r['basis'], 'food_state': r['food_state'], 'geography': r['region_name'], 'year_min': int(r['year_min']), 'year_max': int(r['year_max']), 'n': n,
                    'statistic_type': 'source_lower_bound_summary', 'censoring': 'WHO source lower-bound summary; non-detects substituted by zero'}
        return {
            'status': 'populated',
            'typical_low': p10,
            'typical_high': p90,
            'p95': p95,
            'confidence': conf,
            'n_studies': 1,
            'evidence': [evidence],
            'source_label': f'WHO GEMS/Food EURO "{who_row["food_name"]}" (n={n}, lower-bound)',
        }

    return None  # no data available for this Path B metal

# ── 6. Main loop ─────────────────────────────────────────────────────────────

pages_updated = []
skipped_no_data = []

all_pages = sorted(p for p in glob.glob('wiki/ingredients/*.md')
                   if not p.endswith('/index.md'))

# Priority: rice first, then pages with >= 3 contributing sources, then alphabetical
def sort_key(fpath):
    slug = os.path.basename(fpath).replace('.md', '')
    if slug == 'rice':
        return (0, slug)
    # Count non-pending metal blocks as proxy for contributing sources
    with open(fpath) as f:
        content = f.read()
    cp = parse_frontmatter_cp(content)
    n_active = sum(1 for m, info in cp.items()
                   if m in WIKI_METALS and info.get('status', 'pending') != 'pending'
                   and info.get('n_studies', 0) >= 3)
    return (1 if n_active >= 3 else 2, slug)

only_arg = next((a[7:] for a in sys.argv if a.startswith('--only=')), None)
if only_arg:
    only = set(only_arg.split(','))
    all_pages = [p for p in all_pages if os.path.basename(p)[:-3] in only]
all_pages.sort(key=sort_key)

for fpath in all_pages:
    slug = os.path.basename(fpath).replace('.md', '')
    with open(fpath) as f:
        content = f.read()

    cp = parse_frontmatter_cp(content)
    page_changes = {}  # metal -> values_dict

    for metal in WIKI_METALS:
        info = cp.get(metal, {})
        status = info.get('status', 'pending')
        if status == 'pending':
            continue
        if not info.get('typical_ppb_null', False):
            continue  # already has values, don't overwrite

        vals = decide_values(slug, metal, info)
        if vals:
            page_changes[metal] = vals

    if not page_changes:
        continue

    new_content = content
    for metal, vals in page_changes.items():
        new_content = update_metal_block_in_content(new_content, metal, vals)
    new_content = bump_updated(new_content)

    if not DRY_RUN:
        audit = {'edit_id': str(uuid.uuid4()), 'page': fpath, 'span_id': 'contamination-profile-source-summary',
                 'source_document': [e for v in page_changes.values() for e in v['evidence']],
                 'retrieval_date': TODAY, 'models_used': ['deterministic/ingredient-source-summary'],
                 'model_agreement_state': 'not_applicable', 'applied_at': datetime.now(timezone.utc).isoformat(), 'commit_sha': 'pending'}
        with open('data/evidence/wiki_edit_audit.jsonl', 'a') as audit_file:
            audit_file.write(json.dumps(audit) + '\n')
        with open(fpath, 'w') as f:
            f.write(new_content)

    pages_updated.append(slug)
    sources_used = sorted(set(v['source_label'].split(' (')[0] for v in page_changes.values()))
    metals_done = sorted(page_changes.keys())
    print(f'  {slug}: {metals_done} via {sources_used}')

print()
print(f'Total pages updated: {len(pages_updated)}')
if DRY_RUN:
    print('DRY RUN — no files written')
