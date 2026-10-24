// One generic classification of a finding's material, basis, site and statistic.
// The reference scope is form × state × basis; nothing here names a food.

export const BASIS_LABELS = { fw: 'As sold, as eaten or fresh weight', dw: 'Dry weight', unstated: 'Basis not stated by the source', per_litre: 'Per litre' };
export const BASIS_SHORT = { fw: 'As sold / fresh', dw: 'Dry weight', unstated: 'Basis not stated', per_litre: 'Per litre' };
export function classifyBasis(text) {
  const b = String(text ?? '').toLowerCase();
  if (!b.trim() || /^unstated|not stated|unreported|unknown/.test(b)) return 'unstated';
  if (/per (?:litre|liter)|µg\/l\b|ug\/l\b|mg\/l\b/.test(b)) return 'per_litre';
  if (/^(?:wet|fresh|as sold|as eaten|as consumed|as is|as purchased|as prepared|edible portion)/.test(b) || /as sold|as eaten|as consumed|fresh weight|wet weight|as purchased|as prepared/.test(b)) return 'fw';
  if (/dry|air-dried|oven-dried|dried at|freeze-dried/.test(b)) return 'dw';
  return 'unstated';
}

// Forms in reader order. A state qualifier (cooked, washed, peeled …) stays part of the form.
const FORMS = [
  ['juice', /\bjuice|nectar|cider\b/i, 'juice'],
  ['oil', /\boil\b/i, 'oil'],
  // "Meal" is a milled material only after a grain, seed, nut or animal word; "ready-to-eat meal" is a dish.
  ['flour', /\bflour|\b(?:corn|maize|oat|rice|wheat|barley|rye|bean|soy|soya|almond|nut|seed|linseed|flax|fish|bone|blood|meat|feather|kelp)[ -]?meal\b|cornmeal|semolina|starch|grits/i, 'flour or meal'],
  ['powder', /\bpowder|ground\b/i, 'powder or ground'],
  ['canned', /\bcanned|tinned|preserved/i, 'canned'],
  ['dried', /\bdried|dehydrated|raisin|\bdry fruit/i, 'dried'],
  ['cooked', /\bcooked|boiled|fried|roasted|baked|steamed|grilled|as eaten\b/i, 'cooked'],
  ['peeled', /\bpeeled|flesh|pulp|without peel/i, 'peeled or flesh'],
  ['peel', /\bpeel only|\bpeels\b|(?<!with |incl\. |including )\bpeel\b(?! on)|\brind|skin only|\bhusk|\bbran\b/i, 'peel or outer layer'],
  ['frozen', /\bfrozen\b/i, 'frozen'],
  ['processed', /\bpuree|sauce|paste|jam|syrup|extract|product\b/i, 'processed product'],
];
export function classifyForm(text) {
  const t = String(text ?? '');
  for (const [key, re, label] of FORMS) if (re.test(t)) return { key, label };
  return { key: 'raw', label: 'raw or as sold' };
}

// Mining, industrial, wastewater, experimental, fertiliser and manufacturer settings are
// compared but never set an ordinary-occurrence reference.
export const EXTERNAL_SITES = new Set(['mining', 'industrial', 'wastewater', 'experimental', 'fertiliser', 'manufacturer']);
export const SITE_LABELS = { ordinary: 'Ordinary farms', market: 'Market or retail', monitoring: 'Monitoring programme', mining: 'Mining-affected area', industrial: 'Industrial-affected area',
  wastewater: 'Wastewater-irrigated fields', experimental: 'Experiment', fertiliser: 'Fertiliser treatment', manufacturer: 'Manufacturer test', mixed: 'Mixed settings' };
export function siteContext(value, design, group) {
  const v = String(value ?? '').toLowerCase(), d = String(design ?? '').toLowerCase(), g = String(group ?? '').toLowerCase();
  if (/mining|mine|smelt|tailing/.test(v)) return 'mining';
  if (/industr|factory|plant|power|battery|cement/.test(v)) return 'industrial';
  if (/wastewater|sewage|effluent/.test(v)) return 'wastewater';
  if (/fertili[sz]/.test(v) || /fertili[sz]/.test(g) && /treatment|plot/.test(g)) return 'fertiliser';
  if (/manufacturer|brand test|company test/.test(v)) return 'manufacturer';
  if (/experiment|pot|greenhouse|spik/.test(v) || /\bpot experiment|greenhouse|spiked|hydroponic/.test(d)) return 'experimental';
  if (/monitor|total diet/.test(v)) return 'monitoring';
  if (/market|retail|shop|supermarket/.test(v)) return 'market';
  if (/mixed/.test(v)) return 'mixed';
  return 'ordinary';
}

export function normalizeStatistic(s) {
  const x = String(s ?? '').toLowerCase().trim();
  const pct = x.match(/^p(\d+)$|^(\d+)(?:st|nd|rd|th)? percentile$/);
  if (pct) return `${pct[1] ?? pct[2]}th percentile`;
  if (/percentile/.test(x)) return 'percentile';
  return { below_lod: 'below_LOD', 'below lod': 'below_LOD', nd: 'not_detected', max: 'max', maximum: 'max', min: 'min', minimum: 'min' }[x] ?? (s || 'other');
}
export const statisticLabel = s => String(s).replace(/_/g, ' ');
