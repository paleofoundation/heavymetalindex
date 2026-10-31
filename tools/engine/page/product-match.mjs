// Product pages (HMI-PRODUCT-PILOT-2): how closely each finding matches the finished product.
// Only exact and subcategory findings become table rows; related-product and ingredient
// findings are shown as labeled context with value and source, never banded. Pages not
// listed in PRODUCT_MATCH keep the shared product build unchanged.
export const MATCH_LABEL = { exact: 'Exact product', subcategory: 'Subcategory', related: 'Related product', ingredient: 'Ingredient', migration: 'Migration test' };

// Rules run in order on the printed label (plus the recorded form); the first hit decides.
export const PRODUCT_MATCH = {
  'infant-formula-powder-non-soy': {
    label: 'non-soy powdered infant formula',
    rules: [
      ['related', /\bsoy|toddler|growing[- ]up|young child|ready[- ]to[- ]feed|\brtf\b|liquid concentrate|form=(reconstituted|liquid)/i],
      ['subcategory', /follow[- ]?on|follow[- ]?up|phase 2|6-12 months/i],
      ['exact', /infant formula/i],
    ],
  },
  'baby-wipes': {
    label: 'baby wipes',
    rules: [
      ['related', /packag|diaper|nappy|cosmetic|textile/i],
      // A wipe's sheet or liquid measured on its own is a component of the product.
      ['subcategory', /wipes?, (fiber|fibre|liquid|lotion|solution|sheet)/i],
      ['exact', /baby (wet )?wipe|infant wipe|children'?s wipe/i],
      ['subcategory', /\bwet wipe|wet tissue|nonwoven.*wipe|wipe.*nonwoven/i],
    ],
  },
  'menstrual-tampons': {
    label: 'menstrual tampons',
    rules: [
      // Leachate or extract in a simulant is a migration test (µg/L of liquid), not metal content.
      ['migration', /leach|extract|sweat|simulant|vaginal fluid|form=leachate/i],
      ['exact', /\btampon/i],
      ['related', /sanitary pad|napkin|panty ?liner|menstrual cup|sponge/i],
    ],
  },
};

export function productMatchConfig(page) {
  return page.family === 'product' ? PRODUCT_MATCH[page.slug] ?? null : null;
}

export function matchLevel(config, finding) {
  if (/^ingredients\//.test(finding.routed_page ?? '')) return 'ingredient';
  const text = `${finding.material_label ?? finding.material_text ?? ''} form=${finding.form ?? ''}`;
  for (const [level, re] of config.rules) if (re.test(text)) return level;
  return 'related';
}

// The four metals every product page reports a status for, outside the row list.
export const STATUS_METALS = [['Cd', ['Cd']], ['Pb', ['Pb']], ['As', ['tAs', 'iAs', 'As']], ['Hg', ['tHg', 'MeHg', 'Hg']]];
export function metalStatus(rows, proxies) {
  return STATUS_METALS.map(([metal, analytes]) => {
    const direct = rows.filter(r => analytes.includes(r.analyte));
    const proxy = proxies.filter(r => analytes.includes(r.analyte));
    return { metal, state: direct.length ? 'measured' : proxy.length ? 'proxy' : 'none', direct: direct.length, proxy: proxy.length,
      sources: new Set(direct.map(r => r.source)).size, exact: direct.filter(r => r.match_level === 'exact').length,
      detected: direct.filter(r => r.censoring === 'No censoring reported').length };
  });
}
