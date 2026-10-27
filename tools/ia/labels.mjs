// Canonical public labels for the HMI information architecture (IA spec table e).
// Filters render these labels only; slugs, element codes and [[wiki links]] never reach the page.
export const METAL_LABELS = {
  aluminum: 'Aluminum', antimony: 'Antimony', arsenic: 'Arsenic', barium: 'Barium', cadmium: 'Cadmium',
  chromium: 'Chromium (total)', 'chromium-hexavalent': 'Chromium VI', 'chromium-trivalent': 'Chromium III',
  cobalt: 'Cobalt', copper: 'Copper', iron: 'Iron', lead: 'Lead', manganese: 'Manganese', mercury: 'Mercury',
  nickel: 'Nickel', selenium: 'Selenium', silver: 'Silver', strontium: 'Strontium', thallium: 'Thallium',
  tin: 'Tin', zinc: 'Zinc', uranium: 'Uranium', vanadium: 'Vanadium', titanium: 'Titanium', tungsten: 'Tungsten',
  gold: 'Gold', beryllium: 'Beryllium', bismuth: 'Bismuth', cesium: 'Cesium', gallium: 'Gallium',
  germanium: 'Germanium', iridium: 'Iridium', lithium: 'Lithium', molybdenum: 'Molybdenum', niobium: 'Niobium',
  osmium: 'Osmium', palladium: 'Palladium', platinum: 'Platinum', rubidium: 'Rubidium', rhodium: 'Rhodium',
  ruthenium: 'Ruthenium', 'arsenic-dma': 'Arsenic (DMA)', 'arsenic-mma': 'Arsenic (MMA)',
  'arsenic-organic': 'Arsenic (organic)', 'multiple-metals': 'Multiple metals',
}
// Non-metals and nutrients: shown under "Other elements", never in the Metal filter.
export const OTHER_ELEMENT_LABELS = {
  boron: 'Boron', calcium: 'Calcium', fluoride: 'Fluoride', iodine: 'Iodine', potassium: 'Potassium',
  magnesium: 'Magnesium', sodium: 'Sodium', phosphorus: 'Phosphorus', sulfur: 'Sulfur', silicon: 'Silicon',
}
const ALIASES = {
  pb: 'lead', cd: 'cadmium', as: 'arsenic', tas: 'arsenic', ias: 'arsenic', hg: 'mercury', thg: 'mercury',
  ihg: 'mercury', mehg: 'mercury', hg_unspecified: 'mercury', 'hg-unspecified': 'mercury', al: 'aluminum',
  aluminium: 'aluminum', ni: 'nickel', cr: 'chromium', 'cr-total': 'chromium', 'cr-vi': 'chromium-hexavalent',
  'cr-iii': 'chromium-trivalent', sn: 'tin', cu: 'copper', se: 'selenium', co: 'cobalt', mn: 'manganese',
  zn: 'zinc', ba: 'barium', sr: 'strontium', ag: 'silver', tl: 'thallium', sb: 'antimony', fe: 'iron',
  u: 'uranium', v: 'vanadium', ti: 'titanium', w: 'tungsten',
  au: 'gold', be: 'beryllium', bi: 'bismuth', cs: 'cesium', ga: 'gallium', ge: 'germanium', ir: 'iridium',
  li: 'lithium', mo: 'molybdenum', nb: 'niobium', os: 'osmium', pd: 'palladium', pt: 'platinum',
  rb: 'rubidium', rh: 'rhodium', ru: 'ruthenium', dma: 'arsenic-dma', mma: 'arsenic-mma', oas: 'arsenic-organic',
  'heavy-metals-multiple': 'multiple-metals', b: 'boron', ca: 'calcium', f: 'fluoride', i: 'iodine',
  k: 'potassium', mg: 'magnesium', na: 'sodium', p: 'phosphorus', s: 'sulfur', si: 'silicon',
}
/** Normalise any raw metal value ("[[metals/lead]]", "Pb", "hg_unspecified", "lead") to a canonical key. */
export function metalKey(raw) {
  let s = String(raw ?? '').trim()
  const link = s.match(/^\[\[(?:wiki\/)?(?:metals\/)?([^\]|#]+)(?:[|#][^\]]*)?\]\]$/)
  if (link) s = link[1]
  s = s.replace(/^metals\//, '').trim().toLowerCase().replace(/\s+/g, '-')
  if (ALIASES[s]) return ALIASES[s]
  if (METAL_LABELS[s] || OTHER_ELEMENT_LABELS[s]) return s
  return s || null
}
export function metalLabel(raw) {
  const k = metalKey(raw)
  if (!k) return null
  return METAL_LABELS[k] || OTHER_ELEMENT_LABELS[k] || k.replace(/-/g, ' ').replace(/^./, c => c.toUpperCase())
}
export const isOtherElement = raw => Boolean(OTHER_ELEMENT_LABELS[metalKey(raw)])

// Source types collapse to 12 public labels.
export const SOURCE_TYPES = [
  'Peer-reviewed study', 'Review', 'Grey literature', 'Thesis', 'Book chapter', 'Regulation or standard',
  'Government or agency report', 'Government guidance', 'Dataset', 'NGO or nonprofit report',
  'Industry or trade', 'Other',
]
export function sourceTypeLabel(raw) {
  const s = String(raw ?? '').toLowerCase().trim().replace(/[_]+/g, '-').replace(/\s+/g, ' ')
  if (!s || s === '\u2014' || s === 'not recorded') return 'Other'
  if (/gr[ae]y[- ]lit/.test(s)) return 'Grey literature'
  if (/thesis|dissertation/.test(s)) return 'Thesis'
  if (/chapter|textbook|book/.test(s)) return 'Book chapter'
  if (/review/.test(s.replace(/peer[- ]reviewed/g, ''))) return 'Review'
  if (/dataset|database|data$|-data/.test(s)) return 'Dataset'
  if (/guidance/.test(s)) return 'Government guidance'
  if (/report|opinion|factsheet|consultation|manual|comparison|agency|gov/.test(s) && !/ngo|nonprofit|association|advocacy/.test(s)) return 'Government or agency report'
  if (/regulat|standard|guideline|law|directive/.test(s)) return 'Regulation or standard'
  if (/ngo|nonprofit|non-profit|association|advocacy|consumer/.test(s)) return 'NGO or nonprofit report'
  if (/industry|trade|application note|manufacturer/.test(s)) return 'Industry or trade'
  if (/peer|journal|study|article|research|original/.test(s)) return 'Peer-reviewed study'
  return 'Other'
}
