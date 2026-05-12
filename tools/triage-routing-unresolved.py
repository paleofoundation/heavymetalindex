#!/usr/bin/env python3
"""
triage-routing-unresolved.py

Reads data/evidence/routing_unresolved.csv, identifies source pages with
unresolved ingredient/product slug references, and applies the canonical
remap/remove/expand transformations to fix the frontmatter.

Handles both frontmatter formats:
  - Wikilink:  ["[[ingredients/rice]]", "[[ingredients/wheat]]"]
  - Bare slug: [rice, wheat]

Run from the repo root or pass --repo-root=<path>.
"""

import csv
import re
import sys
import os
from pathlib import Path
from collections import defaultdict

# ---------------------------------------------------------------------------
# Transformation tables
# ---------------------------------------------------------------------------

INGREDIENT_REMAP = {
    # Convention drift — clear slug fixes
    'apples': 'apple',
    'oats': 'oat',
    'sweet-potatoes': 'sweet-potato',
    'vegetables-leafy': 'leafy-greens',
    'vegetables-root': 'root-vegetables',
    'peanut': 'peanuts',
    'potato': 'potatoes',
    'soybean': 'soy',
    'rice-crackers': 'rice-cakes',
    'tea': 'camellia-sinensis',
    'beetroot': 'beet',
    'fruits': 'fruit',
    # 5+ papers but convention drift to existing page
    'leafy-vegetables': 'leafy-greens',
    'milk': 'milk-and-dairy',
    # Below-threshold, remap to parent
    'brown-rice': 'rice',
    'white-rice': 'rice',
    'rice-syrup': 'rice',
    'brown-rice-syrup': 'rice',
    'organic-brown-rice-syrup': 'rice',
    'cocoa-beans': 'cocoa',
    'cocoa-powder': 'cocoa',
    'dairy': 'milk-and-dairy',
    'goat-milk': 'milk-and-dairy',
    'powdered-milk': 'milk-and-dairy',
    'skim-milk-powder': 'milk-and-dairy',
    'acid-casein': 'milk-and-dairy',
    'formula-powder': 'infant-formula-powder',
    'formula-milk': 'infant-formula-ingredients',
    'infant-formula': 'infant-formula-ingredients',
    'infant-rice-cereal': 'rice-cereal',
    'marine-bivalve-molluscs': 'bivalve-molluscs',
    'mussels': 'bivalve-molluscs',
    'oysters': 'bivalve-molluscs',
    'molluscs': 'bivalve-molluscs',
    'cephalopods': 'seafood',
    'marine-fish': 'fish',
    'shark': 'fish',
    'salmon': 'fish',
    'swordfish': 'fish',
    'king-mackerel': 'fish',
    'tilefish': 'fish',
    'tuna': 'fish',
    'starchy-roots': 'root-vegetables',
    'tuber-vegetables': 'root-vegetables',
    'celeriac': 'root-vegetables',
    'bulb-vegetables': 'onions',
    'stalk-stem-vegetables': 'celery',
    'legume-vegetables': 'lentils',
    'legumes': 'lentils',
    'pulses': 'lentils',
    'beans': 'lentils',
    'fruiting-vegetables': 'vegetables',
    'brassica': 'broccoli',
    'brassica-vegetables': 'broccoli',
    'cereal': 'non-rice-grains',
    'mixed-cereals': 'non-rice-grains',
    'quinoa': 'non-rice-grains',
    'amaranth': 'non-rice-grains',
    'oilseeds': 'sunflower-seeds',
    'hazelnut': 'peanuts',
    'walnut': 'peanuts',
    'nuts': 'peanuts',
    'seaweed': 'seafood',
    'edible-offal': 'organ-meats',
    'offal': 'organ-meats',
    'offal-kidney': 'organ-meats',
    'offal-liver': 'organ-meats',
    'kidney': 'organ-meats',
    'liver': 'organ-meats',
    'single-ingredient-meats': 'meat',
    'horse-meat': 'meat',
    'mushrooms': 'wild-mushrooms',
    'licorice-root': 'herbal-botanicals',
    'cinnamon': 'herbal-botanicals',
    'paprika': 'herbal-botanicals',
    'chilli': 'herbal-botanicals',
    'nutmeg': 'herbal-botanicals',
    'panax-notoginseng': 'herbal-botanicals',
    'rhodiola-rosea': 'herbal-botanicals',
    'lycium-berries': 'herbal-botanicals',
    'spices': 'herbal-botanicals',
    'maltodextrin': 'infant-formula-ingredients',
    'drinking-water': 'water',
    # Normalize slug to future-approved page slug
    'breast-milk': 'breastmilk',
}

INGREDIENT_REMOVE = {
    'dental-amalgam', 'dust', 'clay-geophagy', 'tobacco',
    'processed-foods', 'baby-food', 'baby-foods', 'toddler-meals',
    'infant-foods', 'salt',
}

PRODUCT_REMAP = {
    'infant-rice-cereal': 'baby-cereals-dry-rice-based',
    'infant-formula-powder-soy': 'infant-formula-powder-soy-based',
    'infant-formula-soy': 'infant-formula-powder-soy-based',
    'infant-formula-hypoallergenic': 'infant-formula-powder-non-soy',
    'babyfood-fruits': 'fruit-purees',
    'babyfood-single-ingredient-meats': 'meat-and-poultry-purees',
    'meat-poultry-purees': 'meat-and-poultry-purees',
    'vegetable-purees-non-root': 'non-root-vegetable-purees',
    'single-ingredient-root-vegetable-babyfood': 'root-vegetable-purees',
    'ready-to-feed-formula': 'infant-formula-rtf-liquid-non-soy',
}

PRODUCT_EXPAND = {
    'dry-infant-cereal': ['baby-cereals-dry-rice-based', 'baby-cereals-dry-non-rice'],
    'babyfood-vegetables': ['root-vegetable-purees', 'non-root-vegetable-purees'],
}

PRODUCT_REMOVE = {
    'alloys', 'batteries', 'catalysts', 'ceramics', 'fluorescent-lamps',
    'nickel-alloys', 'nickel-cadmium-batteries', 'paint-pigments', 'pesticides',
    'pigments', 'plastics', 'stainless-steel', 'stainless-steel-plates',
    'stainless-steel-wires', 'finished-piercing-post-assemblies', 'dental-amalgam',
    'tobacco', 'antacids', 'dairy', 'canned-tuna', 'honey', 'food-additives',
    'canned-food', 'cereal-bars', 'cocoa-beverages', 'cocoa-powder',
    'liquid-milk', 'mixed-purees-with-fruit', 'powdered-milk', 'processed-baby-food',
    'processed-babyfood-mixtures', 'processed-cheese', 'rice-based-foods',
    'rice-crackers', 'solid-baby-foods-and-beverages', 'babyfood-yogurts-custards',
    'grains-baking', 'infant-formula-toddler', 'chocolate', 'dietary-supplements',
    'breast-milk', 'pet-food',
}

# Above-threshold new-page proposals — leave unchanged
INGREDIENT_LEAVE_ALONE = {'cereals', 'shellfish', 'freshwater-fish', 'breastmilk'}
PRODUCT_LEAVE_ALONE = {'seafood'}


# ---------------------------------------------------------------------------
# Helpers: parse and reconstruct frontmatter field arrays
# ---------------------------------------------------------------------------

def extract_slug_from_entry(entry: str) -> str:
    """
    Given a frontmatter array entry (possibly with quotes and wikilinks),
    return just the slug portion.

    Examples:
      '"[[ingredients/rice]]"'  -> 'rice'
      '[[ingredients/rice]]'    -> 'rice'
      'rice'                    -> 'rice'
      '"[[products/foo-bar]]"'  -> 'foo-bar'
    """
    # Strip surrounding whitespace and quotes
    s = entry.strip().strip('"').strip("'")
    # Wikilink pattern: [[folder/slug]]
    m = re.match(r'\[\[(?:ingredients|products)/([^\]]+)\]\]', s)
    if m:
        return m.group(1)
    # Bare slug
    return s.strip()


def is_wikilink_entry(entry: str) -> bool:
    """Return True if the entry uses wikilink format (with or without quotes)."""
    s = entry.strip().strip('"').strip("'")
    return bool(re.match(r'\[\[(?:ingredients|products)/[^\]]+\]\]', s))


def make_entry(slug: str, folder: str, use_wikilink: bool) -> str:
    """Construct a frontmatter array entry for a given slug."""
    if use_wikilink:
        return f'"[[{folder}/{slug}]]"'
    else:
        return slug


def parse_field_array(field_value: str):
    """
    Parse a YAML inline array string (everything after 'field: ') into a list
    of raw entry strings (preserving wikilink vs bare format per entry).

    Returns a list of raw entry strings.
    """
    # Strip enclosing brackets
    inner = field_value.strip()
    if inner.startswith('[') and inner.endswith(']'):
        inner = inner[1:-1]
    else:
        # Shouldn't happen for well-formed inline arrays, but handle gracefully
        return []

    if not inner.strip():
        return []

    # Tokenize: handle quoted strings with embedded commas
    entries = []
    current = ''
    in_quote = False
    quote_char = None
    depth = 0  # track nested brackets (wikilinks use [[ ]])

    for ch in inner:
        if ch in ('"', "'") and not in_quote:
            in_quote = True
            quote_char = ch
            current += ch
        elif ch == quote_char and in_quote:
            in_quote = False
            quote_char = None
            current += ch
        elif ch == '[' and not in_quote:
            depth += 1
            current += ch
        elif ch == ']' and not in_quote:
            depth -= 1
            current += ch
        elif ch == ',' and not in_quote and depth == 0:
            if current.strip():
                entries.append(current.strip())
            current = ''
        else:
            current += ch

    if current.strip():
        entries.append(current.strip())

    return entries


def apply_transformations(entries, folder, remap, remove, expand, leave_alone):
    """
    Apply remap/remove/expand/leave-alone rules to a list of raw entry strings.
    Returns (new_entries, stats) where stats is a dict with counts.
    """
    stats = {'remapped': 0, 'removed': 0, 'expanded': 0}
    new_entries = []
    seen_slugs = set()

    # Determine if the array uses wikilink format (look at first non-empty entry)
    use_wikilink = False
    for e in entries:
        s = e.strip().strip('"').strip("'")
        if s:
            use_wikilink = is_wikilink_entry(e)
            break

    for entry in entries:
        slug = extract_slug_from_entry(entry)
        if not slug:
            continue

        # Leave-alone check first
        if slug in leave_alone:
            if slug not in seen_slugs:
                seen_slugs.add(slug)
                new_entries.append(entry)
            continue

        # Remove
        if slug in remove:
            stats['removed'] += 1
            continue

        # Expand
        if slug in expand:
            stats['expanded'] += 1
            for new_slug in expand[slug]:
                if new_slug not in seen_slugs:
                    seen_slugs.add(new_slug)
                    new_entries.append(make_entry(new_slug, folder, use_wikilink))
            continue

        # Remap
        if slug in remap:
            new_slug = remap[slug]
            stats['remapped'] += 1
            if new_slug not in seen_slugs:
                seen_slugs.add(new_slug)
                new_entries.append(make_entry(new_slug, folder, use_wikilink))
            # If already seen (dedup), still count the remap
            continue

        # Keep as-is (already-valid slug or leave-alone not in mapping)
        if slug not in seen_slugs:
            seen_slugs.add(slug)
            new_entries.append(entry)

    return new_entries, stats


def reconstruct_field_line(field_name: str, entries) -> str:
    """
    Given a field name and a list of entry strings, reconstruct the YAML line.
    """
    if not entries:
        return f'{field_name}: []'
    inner = ', '.join(entries)
    return f'{field_name}: [{inner}]'


# ---------------------------------------------------------------------------
# Main processing logic
# ---------------------------------------------------------------------------

def process_source_file(filepath: Path, unresolved_slugs: dict):
    """
    Read a source wiki file, apply transformations to frontmatter fields
    that have unresolved slugs, write back if changed.

    unresolved_slugs: {target_kind: set_of_slugs}
      e.g. {'ingredient': {'dairy', 'leafy-vegetables'}, 'product': {'dairy'}}

    Returns (changed, stats_for_file) or raises on error.
    """
    try:
        content = filepath.read_text(encoding='utf-8')
    except Exception as e:
        return False, {'error': str(e)}

    # Split frontmatter
    parts = content.split('---', 2)
    if len(parts) < 3:
        return False, {'error': 'Could not parse frontmatter (no --- delimiters)'}

    pre, frontmatter, body = parts[0], parts[1], parts[2]
    original_frontmatter = frontmatter

    total_stats = {'remapped': 0, 'removed': 0, 'expanded': 0, 'error': None}
    changed = False

    # Process ingredients field
    ingr_match = re.search(r'^(ingredients:\s*)(\[.*\])\s*$', frontmatter, re.MULTILINE)
    if ingr_match:
        field_prefix = ingr_match.group(1)
        array_str = ingr_match.group(2)
        entries = parse_field_array(array_str)
        new_entries, stats = apply_transformations(
            entries, 'ingredients', INGREDIENT_REMAP, INGREDIENT_REMOVE, {}, INGREDIENT_LEAVE_ALONE
        )
        total_stats['remapped'] += stats['remapped']
        total_stats['removed'] += stats['removed']
        new_line = reconstruct_field_line('ingredients', new_entries)
        new_field_block = field_prefix + new_line[len('ingredients: '):]
        new_frontmatter_part = frontmatter[:ingr_match.start()] + 'ingredients: ' + new_line[len('ingredients: '):] + frontmatter[ingr_match.end():]
        if new_frontmatter_part != frontmatter:
            frontmatter = new_frontmatter_part
            changed = True

    # Process products field
    prod_match = re.search(r'^(products:\s*)(\[.*\])\s*$', frontmatter, re.MULTILINE)
    if prod_match:
        field_prefix = prod_match.group(1)
        array_str = prod_match.group(2)
        entries = parse_field_array(array_str)
        new_entries, stats = apply_transformations(
            entries, 'products', PRODUCT_REMAP, PRODUCT_REMOVE, PRODUCT_EXPAND, PRODUCT_LEAVE_ALONE
        )
        total_stats['remapped'] += stats['remapped']
        total_stats['removed'] += stats['removed']
        total_stats['expanded'] += stats['expanded']
        new_line = reconstruct_field_line('products', new_entries)
        new_frontmatter_part = frontmatter[:prod_match.start()] + 'products: ' + new_line[len('products: '):] + frontmatter[prod_match.end():]
        if new_frontmatter_part != frontmatter:
            frontmatter = new_frontmatter_part
            changed = True

    if changed:
        new_content = f'---{frontmatter}---{body}'
        filepath.write_text(new_content, encoding='utf-8')

    return changed, total_stats


def main():
    # Resolve repo root
    if len(sys.argv) > 1 and sys.argv[1].startswith('--repo-root='):
        repo_root = Path(sys.argv[1].split('=', 1)[1])
    else:
        # Default: script lives in tools/, repo root is parent
        script_dir = Path(__file__).parent
        repo_root = script_dir.parent

    unresolved_csv = repo_root / 'data' / 'evidence' / 'routing_unresolved.csv'
    sources_dir = repo_root / 'wiki' / 'sources'

    if not unresolved_csv.exists():
        print(f"ERROR: {unresolved_csv} not found", file=sys.stderr)
        sys.exit(1)

    # Read the CSV and group unresolved slugs by source_id
    # {source_id: {target_kind: set_of_slugs}}
    unresolved_by_source = defaultdict(lambda: defaultdict(set))
    total_csv_rows = 0

    with open(unresolved_csv, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            total_csv_rows += 1
            source_id = row['source_id'].strip()
            target_kind = row['target_kind'].strip()  # 'ingredient' or 'product'
            declared_target = row['declared_target'].strip()
            unresolved_by_source[source_id][target_kind].add(declared_target)

    print(f"Loaded {total_csv_rows} unresolved rows across {len(unresolved_by_source)} unique source files.")
    print()

    # Process each source file
    files_changed = 0
    files_skipped = 0
    files_not_found = 0
    files_errored = 0

    grand_remapped = 0
    grand_removed = 0
    grand_expanded = 0

    ingredient_remapped = 0
    ingredient_removed = 0
    product_remapped = 0
    product_removed = 0
    product_expanded = 0

    errors = []

    for source_id, kinds in sorted(unresolved_by_source.items()):
        filepath = sources_dir / f'{source_id}.md'

        if not filepath.exists():
            print(f"  NOT FOUND: {source_id}.md")
            files_not_found += 1
            continue

        changed, stats = process_source_file(filepath, kinds)

        if stats.get('error'):
            print(f"  ERROR: {source_id} — {stats['error']}")
            errors.append((source_id, stats['error']))
            files_errored += 1
            continue

        if changed:
            files_changed += 1
            r = stats.get('remapped', 0)
            d = stats.get('removed', 0)
            e = stats.get('expanded', 0)
            grand_remapped += r
            grand_removed += d
            grand_expanded += e
            parts = []
            if r: parts.append(f'{r} remapped')
            if d: parts.append(f'{d} removed')
            if e: parts.append(f'{e} expanded')
            print(f"  CHANGED: {source_id} — {', '.join(parts)}")
        else:
            files_skipped += 1

    print()
    print("=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"  CSV rows processed:      {total_csv_rows}")
    print(f"  Unique source files:     {len(unresolved_by_source)}")
    print(f"  Files modified:          {files_changed}")
    print(f"  Files unchanged:         {files_skipped}")
    print(f"  Files not found:         {files_not_found}")
    print(f"  Files errored:           {files_errored}")
    print()
    print(f"  Total remaps applied:    {grand_remapped}")
    print(f"  Total removals applied:  {grand_removed}")
    print(f"  Total expansions applied:{grand_expanded}")
    print()
    if errors:
        print("ERRORS:")
        for source_id, msg in errors:
            print(f"  {source_id}: {msg}")


if __name__ == '__main__':
    main()
