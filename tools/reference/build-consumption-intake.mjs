#!/usr/bin/env node
// Build data/reference/consumption-intake.csv — per-capita daily consumption (g/day)
// for each ingredient slug in wiki/ingredients/, every non-blank figure cited to a real
// public dataset (USDA ERS LAFA, NHANES/WWEIA). See consumption-intake.README.md.
//
// Deterministic given the upstream ERS CSVs. Run: `node tools/reference/build-consumption-intake.mjs`
// Requires network access to ers.usda.gov (downloads the LAFA category CSVs live).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..', '..');
const OUT_DIR = path.join(REPO, 'data', 'reference');
const ING_DIR = path.join(REPO, 'wiki', 'ingredients');

// --- LAFA category CSV endpoints (USDA ERS Food Availability Per Capita Data System) ---
const ERS_BASE = 'https://www.ers.usda.gov';
const LAFA_FILES = {
  dairy: '/media/5383/dairy-fluid-milk-cream-and-other-products.csv?v=54729',
  grains: '/media/5391/grains.csv?v=78232',
  meat: '/media/5393/meat-poultry-fish-eggs-and-nuts.csv?v=38180',
  fruit: '/media/5389/fruit.csv?v=70464',
  veg: '/media/5397/vegetables.csv',
  sugar: '/media/5395/sugar-and-sweeteners-added.csv?v=16901',
};
const ERS_CITE =
  'USDA ERS Loss-Adjusted Food Availability (LAFA), Per capita availability adjusted for loss (G/day); ' +
  'https://www.ers.usda.gov/data-products/food-availability-per-capita-data-system';
const ATTR = 'Per capita availability adjusted for loss-G/day';
const FRESHNESS_FLOOR = 2010; // drop series whose most recent valid year predates this

async function loadLafa() {
  const DB = {};
  for (const [key, suffix] of Object.entries(LAFA_FILES)) {
    DB[key] = {};
    const res = await fetch(ERS_BASE + suffix);
    if (!res.ok) throw new Error(`fetch ${key} failed: ${res.status}`);
    const text = await res.text();
    for (const line of text.split(/\r?\n/)) {
      const p = line.split(',');
      if (p.length < 4 || p[2] !== ATTR) continue;
      const raw = (p[3] || '').trim();
      if (!/^-?\d+(\.\d+)?$/.test(raw)) continue; // skip '', 'NA', '*' (note: +'' === 0)
      const c = p[0]
        .replace(/: Per capita availability adjusted for loss/, '')
        .replace(/: Per capita consumption adjusted for loss/, '')
        .trim();
      const y = +p[1];
      if (!DB[key][c] || y > DB[key][c].year) DB[key][c] = { year: y, gday: +raw };
    }
  }
  return DB;
}

// --- Manually cited figures (non-LAFA), each traceable in source_ref ---
const COFFEE = {
  g: 324, pop: 'US-adult', ds: 'NHANES 2011-2016 (WWEIA)',
  ref: 'Mitchell et al. (2020), NHANES 2011-2016, whole-sample adults; PMC7469044 (324 g/day = 10.9 fl oz)',
  note: 'as-consumed-beverage-basis',
};
const WATER = {
  g: 923, pop: 'US-all', ds: 'WWEIA NHANES 2005-2008',
  ref: 'USDA ARS FSRG Dietary Data Brief No.7 (Drinking Water Intake in the U.S.), plain water tap+bottled, age 2+, 3.9 cups/day x 236.6 mL; https://www.ars.usda.gov/ARSUserFiles/80400530/pdf/DBrief/7_water_intakes_0508.pdf',
  note: 'as-consumed-beverage-basis',
};
const BUTTER = {
  g: 4.3, pop: 'US-all', ds: 'USDA ERS LAFA (fats-and-oils), Butter, 2017',
  ref: ERS_CITE + ' | commodity="Butter" (fats-and-oils-added), year=2017',
  note: 'loss-adjusted-product-weight',
};

// --- Slug -> mapping. ['file','Commodity'] = LAFA lookup; {obj} = manual; null = no figure ---
const M = {
  // DAIRY
  'whole-milk': ['dairy', 'Plain whole milk'],
  'reduced-fat-milk': ['dairy', 'Plain 2-percent milk'],
  'semi-skimmed-milk': ['dairy', 'Plain 2-percent milk'],
  'skim-milk': ['dairy', 'Skim milk'],
  'chocolate-reduced-fat-milk': ['dairy', 'Flavored lower fat milk'],
  'milk-and-dairy': ['dairy', 'All dairy products'],
  'cheddar-cheese': ['dairy', 'Cheddar cheese'],
  'processed-american-cheese': ['dairy', 'All American cheese'],
  'yogurt': ['dairy', 'Yogurt'],
  'fromage-frais': null, 'butter': BUTTER, 'half-and-half': ['dairy', 'Dairy share of half and half'],
  'casein': null, 'soy-protein-isolate': null, 'soy-milk': null, 'rice-milk': null, 'plant-milk': null,
  'non-dairy-creamer': null, 'custard': null, 'breastmilk': null,
  // GRAINS
  'wheat': ['grains', 'Wheat flour'], 'flour-tortilla': null,
  'bread': ['grains', 'White and whole wheat flour'],
  'white-bread': ['grains', 'White and whole wheat flour'],
  'whole-wheat-bread': ['grains', 'White and whole wheat flour'],
  'wholemeal-bread': ['grains', 'White and whole wheat flour'],
  'chapattis': null, 'rice': ['grains', 'Rice'], 'rice-flour': null,
  'corn': ['grains', 'Corn'], 'corn-grits': ['grains', 'Corn hominy and grits'], 'cornbread': null,
  'oat': ['grains', 'Oat products'], 'oatmeal': ['grains', 'Oat products'], 'cream-of-wheat': null,
  'pasta': ['grains', 'Durum flour'], 'noodles': ['grains', 'Durum flour'], 'egg-noodles': ['grains', 'Durum flour'],
  'quinoa': null, 'cereals': ['grains', 'Grains'], 'cereal': ['grains', 'Grains'], 'non-rice-grains': ['grains', 'Grains'],
  // MEAT / FISH / NUTS / EGGS
  'beef': ['meat', 'Beef'], 'ground-beef': ['meat', 'Beef'],
  'pork-chop': ['meat', 'Pork'], 'pork-bacon': null, 'ham': null, 'pork-sausages': null, 'pork-and-beans-canned': null,
  'lamb-chop': ['meat', 'Lamb'],
  'chicken': ['meat', 'Chicken'], 'poultry': ['meat', 'Poultry'], 'turkey': ['meat', 'Turkey'],
  'meat': ['meat', 'Red meat'], 'meat-and-poultry': ['meat', 'Red meat'], 'eggs': ['meat', 'Eggs'],
  'fish': ['meat', 'Total fish and shellfish'], 'seafood': ['meat', 'Total fish and shellfish'],
  'tinned-fish': ['meat', 'Total canned fish and shellfish'], 'canned-tuna': ['meat', 'Canned tuna'],
  'white-fish': ['meat', 'Fresh and frozen fish'], 'freshwater-fish': ['meat', 'Fresh and frozen fish'],
  'shellfish': ['meat', 'Fresh and frozen shellfish'], 'fish-fingers': null,
  'peanuts': ['meat', 'Peanuts'], 'peanut-butter': ['meat', 'Peanuts'],
  'almond': ['meat', 'Almonds'], 'walnuts': ['meat', 'Walnuts'], 'cashews': ['meat', 'Other tree nuts'],
  'hazelnuts': ['meat', 'Hazelnuts (filberts)'], 'sunflower-seeds': null, 'coconut': ['meat', 'Coconut'],
  'marlin': null, 'shark': null, 'swordfish': null, 'molluscs': null, 'bivalve-molluscs': null,
  'organ-meats': null, 'frankfurter': null, 'bologna-luncheon-meat': null,
  // FRUIT
  'apple': ['fruit', 'Fresh apples'], 'apple-juice': ['fruit', 'Apple juice'],
  'applesauce': ['fruit', 'Canned apples and applesauce'], 'apple-cider-vinegar': null,
  'banana': ['fruit', 'Fresh bananas'],
  'grapes': ['fruit', 'Fresh grapes'], 'grape-juice': ['fruit', 'Grape juice'], 'raisins': ['fruit', 'Raisins'],
  'oranges': ['fruit', 'Fresh oranges and temples'], 'orange-juice': ['fruit', 'Citrus juice'],
  'grapefruit': ['fruit', 'Fresh grapefruit'], 'grapefruit-juice': ['fruit', 'Grapefruit juice'],
  'clementines-tangerines': ['fruit', 'Fresh tangerines and tangelos'],
  'strawberries': ['fruit', 'Fresh strawberries'], 'blueberries': ['fruit', 'Fresh blueberries'],
  'raspberries': ['fruit', 'Fresh raspberries'], 'watermelon': ['fruit', 'Fresh watermelon'],
  'cantaloupe': ['fruit', 'Fresh cantaloupe'], 'melon': ['fruit', 'Fresh cantaloupe'],
  'peach': ['fruit', 'Fresh peaches and nectarines'], 'nectarine': ['fruit', 'Fresh peaches and nectarines'],
  'pear': ['fruit', 'Fresh pears'], 'pear-juice': null, 'pineapple': ['fruit', 'Fresh pineapple'],
  'plums': ['fruit', 'Fresh plums and prunes'], 'mango': ['fruit', 'Fresh mangoes'], 'mango-juice': null,
  'avocado': ['fruit', 'Fresh avocados'], 'olives': ['fruit', 'Canned olives'],
  'fruit': ['fruit', 'Fruit'], 'fruit-juice': ['fruit', 'Fruit juice'], 'fruit-juice-ready-drinks': ['fruit', 'Fruit juice'],
  'fruit-mixed': ['fruit', 'Fruit'], 'non-apple-fruit': ['fruit', 'Fresh noncitrus fruit'],
  'canned-fruit-cocktail': ['fruit', 'Canned fruit'], 'guava': null, 'jujube-fruit': null, 'kumquat': null,
  // VEGETABLES
  'potatoes': ['veg', 'Fresh potatoes'], 'baked-potato-with-peel': ['veg', 'Fresh potatoes'],
  'potato-chips': ['veg', 'Potato chips and shoestring potatoes'],
  'tomato': ['veg', 'Fresh tomatoes'], 'canned-tomatoes': ['veg', 'Canned tomatoes'], 'tomato-paste': null, 'ketchup': null,
  'onions': ['veg', 'Fresh onions'], 'carrot': ['veg', 'Fresh carrots'],
  'lettuce': ['veg', 'Fresh romaine and leaf lettuce'], 'iceberg-lettuce': ['veg', 'Fresh head lettuce'],
  'leafy-greens': ['veg', 'Fresh romaine and leaf lettuce'], 'leafy-vegetables': ['veg', 'Fresh romaine and leaf lettuce'],
  'broccoli': ['veg', 'Fresh broccoli'], 'cabbage': ['veg', 'Fresh cabbage'], 'celery': ['veg', 'Fresh celery'],
  'cucumber': ['veg', 'Fresh cucumbers'], 'dill-pickles': ['veg', 'Canned cucumbers (pickles)'],
  'green-bell-pepper': ['veg', 'Fresh bell peppers'], 'spinach': ['veg', 'Fresh spinach'],
  'cauliflower': ['veg', 'Fresh cauliflower'], 'asparagus': ['veg', 'Fresh asparagus'],
  'collard-greens': ['veg', 'Fresh collard greens'], 'parsley': null,
  'sweet-potato': ['veg', 'Fresh sweet potatoes'], 'yam': ['veg', 'Fresh sweet potatoes'],
  'squash': ['veg', 'Fresh squash'], 'butternut-squash': ['veg', 'Fresh squash'], 'winter-squash': ['veg', 'Fresh squash'],
  'parsnips': null, 'beet': null,
  'green-beans': ['veg', 'Fresh snap beans'], 'canned-green-beans': ['veg', 'Canned snap beans'],
  'lima-beans': ['veg', 'Dry lima beans'], 'frozen-peas': ['veg', 'Frozen green peas'],
  'mushrooms': ['veg', 'Fresh mushrooms'], 'canned-mushrooms': ['veg', 'Canned mushrooms'], 'wild-mushrooms': null,
  'corn-flakes': null, 'canned-corn': ['veg', 'Canned sweet corn'],
  'beans': ['veg', 'Dry edible beans'], 'baked-beans': ['veg', 'Dry edible beans'],
  'lentils': ['veg', 'Dry peas and lentils'], 'legumes': ['veg', 'Pulses'],
  'soy': null, 'soybean-oil': null,
  'vegetables': ['veg', 'Fresh vegetables'], 'vegetables-mixed': ['veg', 'Fresh vegetables'],
  'non-root-vegetables': ['veg', 'Fresh vegetables'], 'root-vegetables': ['veg', 'Fresh potatoes'],
  // SUGAR / SWEETENERS
  'white-sugar': ['sugar', 'Refined cane and beet sugar'], 'honey': ['sugar', 'Honey'], 'pancake-syrup': ['sugar', 'Edible syrups'],
  // BEVERAGES
  'coffee': COFFEE, 'water': WATER, 'tea': null, 'camellia-sinensis': null, 'matcha-powder': null,
  // FATS / OILS (LAFA fats-and-oils CSV exports only Butter; per-oil disappearance is in the Oil Crops Yearbook, not parsed here)
  'vegetable-oils': null, 'olive-oil': null, 'corn-oil': null, 'palm-oil': null, 'peanut-oil': null,
  'rapeseed-oil': null, 'rice-bran-oil': null, 'sesame-oil': null, 'sunflower-oil': null, 'niger-seed-oil': null, 'margarine': null,
  // everything else -> null (composite/processed/infant/spice/condiment)
};

function csvEscape(s) {
  s = String(s ?? '');
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

async function main() {
  const DB = await loadLafa();
  const slugs = fs.readdirSync(ING_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
    .filter((s) => s !== 'index')
    .sort();

  let cited = 0;
  let out = 'ingredient_slug,g_per_day,population,source_dataset,source_ref,note\n';
  for (const slug of slugs) {
    const m = Object.prototype.hasOwnProperty.call(M, slug) ? M[slug] : null;
    let g = '', pop = '', ds = '', ref = '', note = 'no-figure-found';
    if (Array.isArray(m)) {
      const e = DB[m[0]]?.[m[1]];
      if (!e) console.error('WARN missing LAFA commodity:', m[0], '|', m[1]);
      else if (e.year >= FRESHNESS_FLOOR) {
        g = e.gday.toFixed(2); pop = 'US-all'; ds = `USDA ERS LAFA (${m[0]})`;
        ref = `${ERS_CITE} | commodity="${m[1]}", year=${e.year}`;
        note = 'loss-adjusted-product-weight'; cited++;
      }
    } else if (m && typeof m === 'object') {
      g = String(m.g); pop = m.pop; ds = m.ds; ref = m.ref; note = m.note || ''; cited++;
    }
    out += [slug, g, pop, ds, ref, note].map(csvEscape).join(',') + '\n';
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'consumption-intake.csv'), out);
  console.log(`Wrote consumption-intake.csv: ${slugs.length} ingredients, ${cited} cited, ${slugs.length - cited} no-figure-found.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
