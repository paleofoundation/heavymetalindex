#!/usr/bin/env python3
"""
Populate contamination_profile values on ingredient pages.
Path A: FDA TDS data (data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv)
Path B: WHO GEMS/Food data + source-page Key Numbers synthesis

Usage: python3 tools/populate_contamination_profiles.py [--dry-run]
"""

import csv, re, os, sys, glob
from copy import deepcopy

TODAY = "2026-05-13"
WIKI_METALS = {'Pb', 'Cd', 'iAs', 'tAs', 'tHg', 'Ni', 'Al', 'Cr', 'Sn', 'U'}
DRY_RUN = '--dry-run' in sys.argv

# ── 1. Load FDA TDS data ────────────────────────────────────────────────────

tds = {}  # (slug, metal) -> dict
with open('data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv') as f:
    for r in csv.DictReader(f):
        if r['metal_species'] not in WIKI_METALS:
            continue
        key = (r['ingredient_slug'], r['metal_species'])
        tds[key] = {
            'n': int(r['n']),
            'reported_zero_n': int(r['reported_zero_n']),
            'p10': float(r['p10_ppb_equivalent']),
            'p90': float(r['p90_ppb_equivalent']),
            'p95': float(r['p95_ppb_equivalent']),
            'max': float(r['max_ppb_equivalent']),
        }

# ── 2. Load WHO GEMS/Food data ───────────────────────────────────────────────
# Aggregate EURO region; if multiple rows, take highest-n row.

who_raw = {}  # (food_name_lower, metal) -> best row
with open('data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv') as f:
    for r in csv.DictReader(f):
        if r['metal_species'] not in WIKI_METALS:
            continue
        if r['region_name'] not in ('EURO', 'European Union'):
            continue
        n = int(r['n_rows'])
        key = (r['food_name'].strip().lower(), r['metal_species'])
        if key not in who_raw or n > who_raw[key]['n']:
            try:
                p10 = float(r['p10_lower_bound_ug_kg']) if r['p10_lower_bound_ug_kg'] else 0.0
                p90 = float(r['p90_lower_bound_ug_kg']) if r['p90_lower_bound_ug_kg'] else 0.0
                p95 = float(r['p95_lower_bound_ug_kg']) if r['p95_lower_bound_ug_kg'] else 0.0
                mx  = float(r['max_lower_bound_ug_kg'])  if r['max_lower_bound_ug_kg']  else 0.0
            except ValueError:
                continue
            who_raw[key] = {
                    'n': n,
                    'p10': p10,
                    'p90': p90,
                    'p95': p95,
                    'max': mx,
                    'food_name': r['food_name'].strip(),
                    'source': 'WHO GEMS/Food (EURO lower-bound)',
                }

def who_lookup(food_name_lower, metal):
    return who_raw.get((food_name_lower, metal))

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

def who_for_slug(slug, metal):
    """Look up WHO GEMS data for a slug/metal. Returns dict or None."""
    candidates = WHO_MAP.get(slug, [])
    for name in candidates:
        row = who_lookup(name.lower(), metal)
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
                elif stripped.startswith('confidence:'):
                    result[current_metal]['confidence_val'] = stripped.split(':')[1].strip()
    return result

def update_metal_block_in_content(content, metal, updates):
    """
    In-place update of a specific metal sub-block within contamination_profile.
    updates: dict with keys: status, typical_low, typical_high, p95, confidence, n_studies
    Returns new content string.
    """
    lines = content.split('\n')
    result = []
    fm_count = 0
    in_fm = False
    in_cp = False
    current_metal_in_file = None

    for i, line in enumerate(lines):
        if line == '---':
            fm_count += 1
            if fm_count == 2:
                in_fm = False
                in_cp = False
                current_metal_in_file = None
            else:
                in_fm = True
            result.append(line)
            continue

        if in_fm:
            if line == 'contamination_profile:':
                in_cp = True
                result.append(line)
                continue

            if in_cp:
                m = re.match(r'^  ([A-Za-z]+):$', line)
                if m:
                    current_metal_in_file = m.group(1)
                    result.append(line)
                    continue
                if line and not line.startswith(' '):
                    in_cp = False
                    current_metal_in_file = None

                if current_metal_in_file == metal:
                    stripped = line.strip()
                    if stripped.startswith('status:') and 'status' in updates:
                        line = '    status: ' + updates['status']
                    elif stripped.startswith('typical_ppb:') and 'typical_low' in updates:
                        lo = fmt(updates['typical_low'])
                        hi = fmt(updates['typical_high'])
                        line = f'    typical_ppb: [{lo}, {hi}]'
                    elif stripped.startswith('p95_ppb:') and 'p95' in updates:
                        line = '    p95_ppb: ' + fmt(updates['p95'])
                    elif stripped.startswith('confidence:') and 'confidence' in updates:
                        line = '    confidence: ' + updates['confidence']
                    elif stripped.startswith('n_studies:') and 'n_studies' in updates:
                        line = '    n_studies: ' + str(updates['n_studies'])
                    elif stripped.startswith('last_reviewed:'):
                        line = '    last_reviewed: ' + TODAY

        result.append(line)

    return '\n'.join(result)

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
    tds_row = tds.get((slug, metal))
    if tds_row:
        n = tds_row['n']
        p10 = tds_row['p10']
        p90 = tds_row['p90']
        p95 = tds_row['p95']
        conf = confidence(n)
        # TDS is 1 study. If current page already has n_studies > 0 from prior source, add TDS on top.
        new_n = current_n + 1 if current_n > 0 else 1
        return {
            'status': 'populated',
            'typical_low': p10,
            'typical_high': p90,
            'p95': p95,
            'confidence': conf,
            'n_studies': new_n,
            'source_label': f'FDA TDS FY2018-2020 (n={n})',
        }

    # Path B: only if n_studies > 0
    if current_n == 0:
        return None  # genuine data gap, leave as-is

    # Path B: WHO GEMS/Food
    who_row = who_for_slug(slug, metal)
    if who_row:
        n = who_row['n']
        p10 = who_row['p10']
        p90 = who_row['p90']
        p95 = who_row['p95']
        conf = confidence(n)
        # Preserve existing n_studies (source page contribution already counted)
        return {
            'status': 'populated',
            'typical_low': p10,
            'typical_high': p90,
            'p95': p95,
            'confidence': conf,
            'n_studies': current_n,
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
