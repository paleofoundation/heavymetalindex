// Geography, time, and farming-practice fields for measured concentration rows.
//
// Optional on value and claim records. Filled only from text the repo already
// states: source-page sampling_locations, sampling_year_range, and
// sample_population, or a per-study CSV column that names a place, year, or
// practice. Author affiliation is not a sampling location. The jurisdictions
// frontmatter array is the regulatory jurisdiction, not the sampling country,
// and is not copied.

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import matter from "gray-matter"

export const PRACTICE_VALUES = [
  "flooded",
  "awd",
  "upland",
  "organic",
  "conventional",
  "wastewater_irrigated",
  "sludge_amended",
  "mining_proximate",
  "smelter_proximate",
  "volcanic_soil",
  "geogenic_as_groundwater",
  "post_harvest_processing",
  "unknown",
]

export const GEO_PRECISION_VALUES = [
  "point",
  "admin2",
  "admin1",
  "country",
  "multi_country",
  "unknown",
]

export const GEO_FIELD_NAMES = [
  "sampling_country",
  "sampling_region",
  "lat",
  "lon",
  "sampling_year_start",
  "sampling_year_end",
  "harvest_year",
  "practice",
  "geo_precision",
  "geo_source",
  "geo_provenance",
]

export const REQUIRED_FOOD_GROUPS = [
  "Rice",
  "Baby food inputs",
  "Cocoa and chocolate",
  "Chickpeas and pulses",
  "Spices",
  "Protein powders",
  "Fruit juice",
  "Tea",
  "Seafood",
]

const HEAVY_METALS = new Set([
  "Pb", "Cd", "iAs", "tAs", "MeHg", "tHg", "Hg", "Ni", "Al", "Cr", "Cr-VI", "Cr-total", "Sn", "Sb", "U",
])

const ISO_ALPHA2 = new Set(
  `AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW`.split(/\s+/),
)

const COUNTRY_NAMES = [
  ["Democratic Republic of the Congo", "CD"],
  ["Republic of the Congo", "CG"],
  ["United States of America", "US"],
  ["United States", "US"],
  ["Papua New Guinea", "PG"],
  ["Equatorial Guinea", "GQ"],
  ["Guinea-Bissau", "GW"],
  ["Dominican Republic", "DO"],
  ["Central African Republic", "CF"],
  ["Bosnia and Herzegovina", "BA"],
  ["Trinidad and Tobago", "TT"],
  ["Antigua and Barbuda", "AG"],
  ["Saint Kitts and Nevis", "KN"],
  ["Saint Vincent and the Grenadines", "VC"],
  ["Sao Tome and Principe", "ST"],
  ["Northern Ireland", "GB"],
  ["United Kingdom", "GB"],
  ["Great Britain", "GB"],
  ["Republic of Korea", "KR"],
  ["South Korea", "KR"],
  ["North Korea", "KP"],
  ["South Sudan", "SS"],
  ["New Zealand", "NZ"],
  ["South Africa", "ZA"],
  ["Saudi Arabia", "SA"],
  ["Costa Rica", "CR"],
  ["El Salvador", "SV"],
  ["Sri Lanka", "LK"],
  ["North Macedonia", "MK"],
  ["Czech Republic", "CZ"],
  ["Côte d'Ivoire", "CI"],
  ["Cote d'Ivoire", "CI"],
  ["Ivory Coast", "CI"],
  ["Burkina Faso", "BF"],
  ["Sierra Leone", "SL"],
  ["Cabo Verde", "CV"],
  ["Cape Verde", "CV"],
  ["Timor-Leste", "TL"],
  ["East Timor", "TL"],
  ["People's Republic of China", "CN"],
  ["Hong Kong", "HK"],
  ["Czechia", "CZ"],
  ["Türkiye", "TR"],
  ["Turkey", "TR"],
  ["Brasil", "BR"],
  ["England", "GB"],
  ["Scotland", "GB"],
  ["Wales", "GB"],
  ["Britain", "GB"],
  ["Vietnam", "VN"],
  ["Viet Nam", "VN"],
  ["Russia", "RU"],
  ["Iran", "IR"],
  ["Syria", "SY"],
  ["Tanzania", "TZ"],
  ["Bolivia", "BO"],
  ["Venezuela", "VE"],
  ["Laos", "LA"],
  ["Brunei", "BN"],
  ["Moldova", "MD"],
  ["Republic of Georgia", "GE"],
  ["Palestine", "PS"],
  ["Eswatini", "SZ"],
  ["Swaziland", "SZ"],
  ["Myanmar", "MM"],
  ["Burma", "MM"],
  ["Taiwan", "TW"],
  ["Korea", "KR"],
  ["Holland", "NL"],
  ["Netherlands", "NL"],
  ["The Netherlands", "NL"],
  ["Guinea", "GN"],
  ["Nigeria", "NG"],
  ["Niger", "NE"],
  ["Sudan", "SD"],
  ["Ireland", "IE"],
  ["Iceland", "IS"],
  ["India", "IN"],
  ["Indonesia", "ID"],
  ["China", "CN"],
  ["Canada", "CA"],
  ["Australia", "AU"],
  ["Brazil", "BR"],
  ["Mexico", "MX"],
  ["Japan", "JP"],
  ["Germany", "DE"],
  ["France", "FR"],
  ["Spain", "ES"],
  ["Italy", "IT"],
  ["Poland", "PL"],
  ["Portugal", "PT"],
  ["Greece", "GR"],
  ["Sweden", "SE"],
  ["Norway", "NO"],
  ["Finland", "FI"],
  ["Denmark", "DK"],
  ["Belgium", "BE"],
  ["Austria", "AT"],
  ["Switzerland", "CH"],
  ["Argentina", "AR"],
  ["Chile", "CL"],
  ["Peru", "PE"],
  ["Colombia", "CO"],
  ["Ecuador", "EC"],
  ["Uruguay", "UY"],
  ["Paraguay", "PY"],
  ["Bangladesh", "BD"],
  ["Pakistan", "PK"],
  ["Thailand", "TH"],
  ["Malaysia", "MY"],
  ["Philippines", "PH"],
  ["Singapore", "SG"],
  ["Cambodia", "KH"],
  ["Nepal", "NP"],
  ["Bhutan", "BT"],
  ["Mongolia", "MN"],
  ["Egypt", "EG"],
  ["Morocco", "MA"],
  ["Algeria", "DZ"],
  ["Tunisia", "TN"],
  ["Libya", "LY"],
  ["Ethiopia", "ET"],
  ["Kenya", "KE"],
  ["Ghana", "GH"],
  ["Uganda", "UG"],
  ["Togo", "TG"],
  ["Benin", "BJ"],
  ["Senegal", "SN"],
  ["Cameroon", "CM"],
  ["Angola", "AO"],
  ["Mozambique", "MZ"],
  ["Zambia", "ZM"],
  ["Zimbabwe", "ZW"],
  ["Namibia", "NA"],
  ["Botswana", "BW"],
  ["Madagascar", "MG"],
  ["Israel", "IL"],
  ["Jordan", "JO"],
  ["Lebanon", "LB"],
  ["Iraq", "IQ"],
  ["Kuwait", "KW"],
  ["Qatar", "QA"],
  ["Bahrain", "BH"],
  ["Oman", "OM"],
  ["Yemen", "YE"],
  ["Afghanistan", "AF"],
  ["Kazakhstan", "KZ"],
  ["Uzbekistan", "UZ"],
  ["Ukraine", "UA"],
  ["Romania", "RO"],
  ["Bulgaria", "BG"],
  ["Hungary", "HU"],
  ["Serbia", "RS"],
  ["Croatia", "HR"],
  ["Slovenia", "SI"],
  ["Slovakia", "SK"],
  ["Lithuania", "LT"],
  ["Latvia", "LV"],
  ["Estonia", "EE"],
  ["Belarus", "BY"],
  ["Armenia", "AM"],
  ["Azerbaijan", "AZ"],
  ["Cuba", "CU"],
  ["Jamaica", "JM"],
  ["Haiti", "HT"],
  ["Panama", "PA"],
  ["Guatemala", "GT"],
  ["Honduras", "HN"],
  ["Nicaragua", "NI"],
  ["Belize", "BZ"],
  ["Fiji", "FJ"],
  ["Samoa", "WS"],
  ["Albania", "AL"],
  ["Malta", "MT"],
  ["Cyprus", "CY"],
  ["Luxembourg", "LU"],
  ["Monaco", "MC"],
  ["Andorra", "AD"],
  ["Liechtenstein", "LI"],
  ["Mali", "ML"],
  ["Malawi", "MW"],
  ["Rwanda", "RW"],
  ["Burundi", "BI"],
  ["Somalia", "SO"],
  ["Chad", "TD"],
  ["Gabon", "GA"],
]

COUNTRY_NAMES.sort((a, b) => b[0].length - a[0].length)

const DEMONYMS = [
  ["Brazilian", "BR"],
  ["Chinese", "CN"],
  ["American", "US"],
  ["Indian", "IN"],
  ["Nigerian", "NG"],
  ["Iranian", "IR"],
  ["Turkish", "TR"],
  ["Polish", "PL"],
  ["Spanish", "ES"],
  ["French", "FR"],
  ["German", "DE"],
  ["Italian", "IT"],
  ["Japanese", "JP"],
  ["Korean", "KR"],
  ["Australian", "AU"],
  ["Canadian", "CA"],
  ["Mexican", "MX"],
  ["Bangladeshi", "BD"],
  ["Pakistani", "PK"],
  ["Egyptian", "EG"],
  ["Thai", "TH"],
  ["Vietnamese", "VN"],
  ["Indonesian", "ID"],
  ["Malaysian", "MY"],
  ["Ghanaian", "GH"],
  ["Kenyan", "KE"],
  ["Ethiopian", "ET"],
  ["Argentine", "AR"],
  ["Argentinian", "AR"],
  ["Chilean", "CL"],
  ["Peruvian", "PE"],
  ["Colombian", "CO"],
  ["Ecuadorian", "EC"],
  ["British", "GB"],
]

const US_STATES = [
  ["District of Columbia", "DC"],
  ["North Carolina", "NC"],
  ["South Carolina", "SC"],
  ["North Dakota", "ND"],
  ["South Dakota", "SD"],
  ["West Virginia", "WV"],
  ["New Hampshire", "NH"],
  ["New Jersey", "NJ"],
  ["New Mexico", "NM"],
  ["New York", "NY"],
  ["Rhode Island", "RI"],
  ["Massachusetts", "MA"],
  ["Pennsylvania", "PA"],
  ["Connecticut", "CT"],
  ["Mississippi", "MS"],
  ["California", "CA"],
  ["Washington", "WA"],
  ["Wisconsin", "WI"],
  ["Tennessee", "TN"],
  ["Louisiana", "LA"],
  ["Minnesota", "MN"],
  ["Michigan", "MI"],
  ["Maryland", "MD"],
  ["Kentucky", "KY"],
  ["Colorado", "CO"],
  ["Arkansas", "AR"],
  ["Delaware", "DE"],
  ["Illinois", "IL"],
  ["Indiana", "IN"],
  ["Missouri", "MO"],
  ["Montana", "MT"],
  ["Nebraska", "NE"],
  ["Oklahoma", "OK"],
  ["Virginia", "VA"],
  ["Alabama", "AL"],
  ["Arizona", "AZ"],
  ["Florida", "FL"],
  ["Georgia", "GA"],
  ["Hawaii", "HI"],
  ["Kansas", "KS"],
  ["Nevada", "NV"],
  ["Oregon", "OR"],
  ["Alaska", "AK"],
  ["Idaho", "ID"],
  ["Iowa", "IA"],
  ["Maine", "ME"],
  ["Texas", "TX"],
  ["Utah", "UT"],
  ["Ohio", "OH"],
  ["Wyoming", "WY"],
]
const AMBIGUOUS_STATE = new Set(["Georgia", "Washington"])

const CA_PROVINCES = [
  "Newfoundland and Labrador",
  "Prince Edward Island",
  "British Columbia",
  "New Brunswick",
  "Nova Scotia",
  "Northwest Territories",
  "Saskatchewan",
  "Alberta",
  "Manitoba",
  "Ontario",
  "Quebec",
  "Québec",
  "Yukon",
  "Nunavut",
]

const AU_STATES = [
  "Australian Capital Territory",
  "Northern Territory",
  "New South Wales",
  "South Australia",
  "Western Australia",
  "Queensland",
  "Tasmania",
  "Victoria",
]

const USPS = Object.fromEntries(US_STATES.map(([name, abbr]) => [abbr, name]))

const PRACTICE_PATTERNS = [
  ["awd", /\balternate wetting and drying\b|\bAWD\b/],
  ["wastewater_irrigated", /wastewater[- ]irrigat/i],
  ["sludge_amended", /sludge[- ]amend|sewage sludge amen/i],
  ["flooded", /continuously flooded|\bflooded (?:rice|paddy|conditions|cultivation)\b/i],
  ["upland", /\bupland (?:rice|cultivation|conditions)\b/i],
  ["organic", /\b(?:certified organic|organically (?:grown|cultivated|produced)|organic (?:farming|agriculture|cultivation))\b/i],
  ["conventional", /\b(?:conventionally (?:grown|cultivated|produced)|conventional (?:farming|agriculture|cultivation))\b/i],
  ["mining_proximate", /\b(?:near(?:by)? (?:a |the )?(?:gold )?mine|mining[- ]impacted|adjacent to (?:a |the )?mine)\b/i],
  ["smelter_proximate", /\b(?:near(?:by)? (?:a |the )?smelter|smelter[- ](?:adjacent|proximate|vicinity))\b/i],
  ["volcanic_soil", /\bvolcanic soils?\b/i],
  ["geogenic_as_groundwater", /\bgeogenic arsenic\b|\barsenic[- ]contaminated groundwater\b/i],
  ["post_harvest_processing", /\bpost[- ]harvest processing\b/i],
]

const UNKNOWN_PLACE = /^(unknown|not specified|not stated|n\/a|na|none|unspecified|ns|-|null)$/i

const SAMPLE_FILES = [
  { path: "data/evidence/fda_tds_fy2018_2020_element_results_samples.csv", heavyMetalOnly: true },
  { path: "data/evidence/category1_fda_baby_food_compliance_samples.csv" },
  { path: "data/evidence/category1_formula_special_survey_samples.csv" },
  { path: "data/evidence/category5_fda2018_juice_pb_non_apple_samples.csv" },
  { path: "data/evidence/category5_fda2018_juice_pb_apple_containing_samples.csv" },
  { path: "data/evidence/category1_fda2016_infant_cereal_ias_samples.csv" },
  { path: "data/evidence/category5_grape_juice_inorganic_arsenic_samples.csv" },
  { path: "data/evidence/category5_apple_juice_arsenic_speciation_samples.csv" },
  { path: "data/evidence/category1_toledo2024_infant_cereal_brazil_samples.csv" },
  { path: "data/evidence/choi2016-wet-wipes-solution-ug-per-l.csv", sourceColumn: "cite_key" },
  { path: "data/evidence/gocer2025-baby-wipes-ppb.csv", sourceColumn: "cite_key" },
  { path: "data/evidence/cpqs2026-online-baby-wipes-annex-reads.csv", sourceColumn: "cite_key" },
]

const SUMMARY_FILES = [
  "data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv",
  "data/evidence/category6_primary_extraction_summary.csv",
  "data/evidence/category7_primary_extraction_summary.csv",
  "data/evidence/category1_autonomy_extracted_summary.csv",
  "data/evidence/category1_autonomy_matrix_routed_summary.csv",
  "data/evidence/category1_recovered_occurrence_summary.csv",
  "data/evidence/category1_local_baby_food_occurrence_summary.csv",
  "data/evidence/category1_formula_concentration_summary.csv",
  "data/evidence/category1_fda_baby_food_compliance_summary.csv",
  "data/evidence/category1_fda2016_infant_cereal_ias_summary.csv",
  "data/evidence/category5_apple_juice_arsenic_speciation_summary.csv",
  "data/evidence/category5_grape_juice_inorganic_arsenic_summary.csv",
  "data/evidence/category5_tds_finished_food_occurrence_summary.csv",
  "data/evidence/category5_plant_milk_occurrence_summary.csv",
  "data/evidence/category6_occurrence_summary.csv",
  "data/evidence/category7_occurrence_summary.csv",
  "data/evidence/category11_occurrence_summary.csv",
  "data/evidence/category24_occurrence_summary.csv",
  "data/evidence/category6_seaweed_ias_extraction_summary.csv",
  "data/evidence/category6_seaweed_hijiki_ias_summary.csv",
  "data/evidence/category6_seaweed_cd_summary.csv",
  "data/evidence/category6_fish_nonpredatory_ias_summary.csv",
  "data/evidence/category6_shellfish_ias_summary.csv",
]

const GROUP_RULES = [
  ["Baby food inputs", /\b(infant formulas?|infant foods?|baby foods?|baby cereals?|infant cereals?|toddler foods?|follow on formulas?|young child(?:ren)?|for infants|fruit purees?|purees?)\b/],
  ["Protein powders", /\bprotein powder\b|\bwhey protein\b|\bcollagen powder\b/],
  ["Cocoa and chocolate", /\b(cocoa|cacao|chocolate)\b/],
  ["Fruit juice", /\b(juice|nectar)\b/],
  ["Tea", /\bteas?\b|\bcamellia sinensis\b/],
  ["Spices", /\b(spices?|cinnamon|turmeric|cumin|paprika|oregano|black pepper|chilli|chili|saffron|cardamom|cloves?|nutmeg|curry)\b/],
  ["Coffee", /\bcoffee\b/],
  ["Vegetables", /\b(green beans?|string beans?|snap beans?)\b/],
  ["Chickpeas and pulses", /\b(chickpeas?|garbanzo|lentils?|pulses?|legumes?|black beans?|kidney beans?|pinto beans?|mung|cowpeas?|split peas?|soybeans?|soy beans?|beans?)\b/],
  ["Rice", /\brice\b|\boryza\b/],
  ["Seafood", /\b(seafood|fish|tuna|salmon|shrimp|prawns?|crabs?|shellfish|mussels?|oysters?|sardines?|cod|tilapia|mackerel|anchov(?:y|ies)|lobsters?|scallops?|clams?|squid|molluscs?|mollusks?)\b/],
  ["Seaweed and algae", /\b(seaweed|kelp|nori|wakame|hijiki|macroalgae|algae)\b/],
  ["Plant-based beverages", /\b(soy|almond|oat|coconut|plant)\b.{0,24}\b(milk|beverage|drink)\b|\b(milk|beverage|drink)\b.{0,24}\b(soy|almond|oat|coconut|plant)\b/],
  ["Dairy and milk", /\b(milk|cheese|yogurt|yoghurt|dairy|butter)\b/],
  ["Meat and poultry", /\b(beef|pork|chicken|poultry|turkey|lamb|meat|bacon)\b/],
  ["Vegetables", /\b(vegetables?|lettuce|spinach|carrots?|potatoes?|tomatoes?|cabbage|broccoli|onions?|cucumbers?)\b/],
  ["Fruit", /\b(fruits?|apples?|bananas?|grapes?|berries|oranges?|mangoes?|peaches?|pears?|melons?|strawberr(?:y|ies)|applesauce)\b/],
  ["Grains other than rice", /\b(wheat|corn|maize|oats?|barley|cereals?|bread|pasta|flour|grains?)\b/],
  ["Nuts and seeds", /\b(almonds?|cashews?|peanuts?|walnuts?|pistachios?|nuts?|sesame|seeds?)\b/],
  ["Oils and fats", /\boils?\b|\bfats?\b/],
  ["Drinking water", /\b(drinking water|bottled water|tap water)\b/],
  ["Soil and sediment", /\b(soils?|sediments?|sludge)\b/],
  ["Environmental water", /\b(groundwater|river|wastewater|irrigation|surface water|lakes?|seawater)\b/],
  ["Animal feed and pet food", /\b(pet food|animal feed|feed|kibble)\b/],
  ["Cosmetics and personal care", /\b(cosmetics?|wet wipes?|baby wipes?|lotions?|shampoos?|lipsticks?|personal care)\b/],
  ["Herbs and botanicals", /\b(herbs?|botanicals?)\b/],
  ["Supplements", /\bsupplements?\b/],
  ["In vitro and experimental", /\b(in vitro|synthetic|hydrogel|adsorption|experimental)\b/],
  ["Human biomonitoring", /\b(urine|blood|serum|breast milk|human milk)\b/],
]

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

export function isIsoAlpha2(value) {
  return typeof value === "string" && ISO_ALPHA2.has(value)
}

function normalizePlaceText(value) {
  return String(value)
    .replace(/\bU\.S\.A\.?\b/gi, "USA")
    .replace(/\bU\.S\.\b/g, "US")
    .replace(/\bU\.K\.\b/g, "UK")
}

function isAffiliationOnly(text) {
  return /\b(university|department of|faculty of|college of)\b/i.test(text)
    && !/\b(province|state|prefecture|governorate|sampled|collected|purchased|market|retail)\b/i.test(text)
}

function extractCountries(text) {
  const found = []
  let working = ` ${normalizePlaceText(text)} `
  for (const [name, code] of COUNTRY_NAMES) {
    const re = new RegExp(`\\b${escapeRegExp(name)}\\b`, "gi")
    if (re.test(working)) {
      found.push(code)
      working = working.replace(new RegExp(`\\b${escapeRegExp(name)}\\b`, "gi"), " ")
    }
  }
  const tokenRe = /\b([A-Z]{2,3})\b/g
  let match
  while ((match = tokenRe.exec(working))) {
    const token = match[1]
    if (token === "USA") found.push("US")
    else if (token === "UK") found.push("GB")
    else if (ISO_ALPHA2.has(token)) found.push(token)
  }
  return [...new Set(found)]
}

function consumeUsPrefixed(text) {
  const countries = []
  const regions = []
  let cleaned = text.replace(/\bUS-([A-Z]{2})\b/g, (all, abbr) => {
    if (!USPS[abbr]) return all
    countries.push("US")
    regions.push(USPS[abbr])
    return " "
  })
  cleaned = cleaned.replace(/,\s*([A-Z]{2})\b/g, (all, abbr) => {
    if (!USPS[abbr]) return all
    countries.push("US")
    regions.push(USPS[abbr])
    return " "
  })
  return { cleaned, countries, regions }
}

function labeledAdmin1(text) {
  const found = []
  const re = /([A-Z][\p{L}'’.-]+(?:[\s-][A-Z][\p{L}'’.-]+){0,3})\s+(Province|State|Prefecture|Governorate|Oblast|Voivodeship)\b/gu
  let match
  while ((match = re.exec(text))) {
    found.push(`${match[1]} ${match[2]}`)
  }
  return found
}

function namedRegions(text, countries) {
  const regions = []
  const implied = []
  const allow = (code) => countries.length === 0 || countries.includes(code)
  const take = (names, code) => {
    if (!allow(code)) return
    let working = text
    const sorted = [...names].sort((a, b) => b.length - a.length)
    for (const name of sorted) {
      if (AMBIGUOUS_STATE.has(name) && countries.length === 0) continue
      const re = new RegExp(`\\b${escapeRegExp(name)}\\b`, "i")
      if (re.test(working)) {
        regions.push(name)
        implied.push(code)
        working = working.replace(new RegExp(`\\b${escapeRegExp(name)}\\b`, "gi"), " ")
      }
    }
  }
  take(US_STATES.map(([name]) => name), "US")
  take(CA_PROVINCES, "CA")
  take(AU_STATES, "AU")
  return { regions, implied }
}

function extractCoord(text) {
  const hemi = text.match(/(-?\d{1,3}(?:\.\d+)?)\s*°?\s*([NSns])\b[\s,;/]+(-?\d{1,3}(?:\.\d+)?)\s*°?\s*([EWew])\b/)
  if (hemi) {
    let lat = Number.parseFloat(hemi[1])
    let lon = Number.parseFloat(hemi[3])
    if (/s/i.test(hemi[2])) lat = -Math.abs(lat)
    if (/w/i.test(hemi[4])) lon = -Math.abs(lon)
    if (lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180) return { lat, lon }
  }
  const named = text.match(/lat(?:itude)?\s*[:=]?\s*(-?\d{1,3}(?:\.\d+)?)\b[\s\S]{0,40}?lon(?:gitude)?\s*[:=]?\s*(-?\d{1,3}(?:\.\d+)?)/i)
  if (named) {
    const lat = Number.parseFloat(named[1])
    const lon = Number.parseFloat(named[2])
    if (lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180) return { lat, lon }
  }
  return null
}

export function parseLocationStrings(list) {
  const countries = new Set()
  const regions = new Set()
  let coord = null
  let coordCount = 0
  const items = Array.isArray(list) ? list : list == null || list === "" ? [] : [list]
  for (const item of items) {
    if (item == null) continue
    const text = String(item).trim()
    if (!text || isAffiliationOnly(text)) continue
    const prefixed = consumeUsPrefixed(text)
    for (const code of prefixed.countries) countries.add(code)
    for (const region of prefixed.regions) regions.add(region)
    const named = extractCountries(prefixed.cleaned)
    for (const code of named) countries.add(code)
    for (const region of labeledAdmin1(text)) regions.add(region)
    const admin = namedRegions(text, [...countries])
    for (const region of admin.regions) regions.add(region)
    for (const code of admin.implied) countries.add(code)
    const found = extractCoord(text)
    if (found) {
      coordCount += 1
      coord = found
    }
  }
  return {
    countries: [...countries],
    regions: [...regions],
    lat: coordCount === 1 ? coord.lat : null,
    lon: coordCount === 1 ? coord.lon : null,
  }
}

export function parseYearRange(value) {
  if (value == null) return null
  if (Array.isArray(value)) {
    const nums = value.map((item) => Number(item)).filter((item) => Number.isInteger(item) && item >= 1900 && item <= 2100)
    if (!nums.length) return null
    return { start: Math.min(...nums), end: Math.max(...nums) }
  }
  if (typeof value === "number" && Number.isInteger(value) && value >= 1900 && value <= 2100) {
    return { start: value, end: value }
  }
  const text = String(value).trim()
  if (!text || /^null$/i.test(text) || /^approximately\b/i.test(text)) return null
  let match = text.match(/^\[?\s*((?:19|20)\d{2})\s*,\s*((?:19|20)\d{2})\s*\]?$/)
  if (match) return orderedYears(Number(match[1]), Number(match[2]))
  match = text.match(/^((?:19|20)\d{2})\s*[-–—]\s*((?:19|20)\d{2})\b/)
  if (match) return orderedYears(Number(match[1]), Number(match[2]))
  match = text.match(/^((?:19|20)\d{2})$/)
  if (match) return { start: Number(match[1]), end: Number(match[1]) }
  return null
}

function orderedYears(start, end) {
  return start <= end ? { start, end } : { start: end, end: start }
}

export function yearsFromSamplePopulation(text) {
  if (!text) return null
  const fiscal = text.match(/\bFY\s*((?:19|20)\d{2})\s*[-–—]+\s*FY\s*((?:19|20)\d{2})\b/i)
  if (fiscal) return orderedYears(Number(fiscal[1]), Number(fiscal[2]))
  const acquired = text.match(/\b(?:acquired|collected|sampled|purchased|bought|harvested|obtained)\s+in\s+(?:FY\s*)?((?:19|20)\d{2})(?:\s*[-–—]\s*(?:FY\s*)?((?:19|20)\d{2}))?/i)
  if (acquired) return orderedYears(Number(acquired[1]), Number(acquired[2] || acquired[1]))
  return null
}

function countriesFromSamplePopulation(text) {
  const found = []
  const acquired = text.match(/\b(?:sampled|collected|purchased|bought|harvested|obtained|marketed|sold)\s+(?:in|from)\s+([A-Za-z][^.;]{1,60})/i)
  if (acquired) found.push(...extractCountries(acquired[1]))
  for (const [demonym, code] of DEMONYMS) {
    const re = new RegExp(`\\b${demonym}\\b(?=[- ](?:infant|sample|retail|market|domestic|brand|cereal|formula|rice|fish|spice|tea|cocoa|juice))`, "i")
    if (re.test(text)) found.push(code)
  }
  return [...new Set(found)]
}

export function matchPractice(text) {
  if (!text) return []
  const found = []
  for (const [name, pattern] of PRACTICE_PATTERNS) {
    if (pattern.test(text)) found.push(name)
  }
  return found
}

function looseOrganic(text) {
  if (!text) return false
  if (!/\borganic\b/i.test(text)) return false
  if (/\borganic (?:matter|carbon|arsenic|acid|compound|solvent|extract|pollutant|form)\b/i.test(text)) return false
  return true
}

function harvestYearFromText(text) {
  const match = String(text || "").match(/\bharvest(?:ed)?(?:\s+in|\s+year)?\s+((?:19|20)\d{2})\b/i)
  return match ? Number(match[1]) : null
}

function blankPart() {
  return { fields: {}, provenance: {}, multiCountry: false, countryExplicitlyUnknown: false }
}

export function fieldsFromFrontmatter(data, sourcePage = "source page") {
  const part = blankPart()
  if (!data || typeof data !== "object") return part
  const locations = Array.isArray(data.sampling_locations)
    ? data.sampling_locations
    : data.sampling_locations ? [data.sampling_locations] : []
  const parsed = parseLocationStrings(locations)
  const locRef = `${sourcePage} frontmatter sampling_locations`
  if (parsed.countries.length > 1) {
    part.multiCountry = true
    part.provenance.geo_precision = locRef
  } else if (parsed.countries.length === 1) {
    part.fields.sampling_country = parsed.countries[0]
    part.provenance.sampling_country = locRef
  }
  if (parsed.regions.length === 1 && parsed.countries.length <= 1) {
    part.fields.sampling_region = parsed.regions[0]
    part.provenance.sampling_region = locRef
  }
  if (parsed.lat != null && parsed.lon != null) {
    part.fields.lat = parsed.lat
    part.fields.lon = parsed.lon
    part.provenance.lat = locRef
    part.provenance.lon = locRef
  }
  const yearRef = `${sourcePage} frontmatter sampling_year_range`
  const years = parseYearRange(data.sampling_year_range)
  if (years) {
    part.fields.sampling_year_start = years.start
    part.fields.sampling_year_end = years.end
    part.provenance.sampling_year_start = yearRef
    part.provenance.sampling_year_end = yearRef
  }
  const population = typeof data.sample_population === "string" ? data.sample_population : ""
  const popRef = `${sourcePage} frontmatter sample_population`
  if (!years && population) {
    const popYears = yearsFromSamplePopulation(population)
    if (popYears) {
      part.fields.sampling_year_start = popYears.start
      part.fields.sampling_year_end = popYears.end
      part.provenance.sampling_year_start = popRef
      part.provenance.sampling_year_end = popRef
    }
  }
  if (!part.fields.sampling_country && !part.multiCountry && population) {
    const popCountries = countriesFromSamplePopulation(population)
    if (popCountries.length > 1) {
      part.multiCountry = true
      part.provenance.geo_precision = popRef
    } else if (popCountries.length === 1) {
      part.fields.sampling_country = popCountries[0]
      part.provenance.sampling_country = popRef
    }
  }
  const practiceText = `${locations.map((item) => String(item)).join(" ")} ${population}`
  const practices = matchPractice(practiceText)
  if (practices.length === 1) {
    part.fields.practice = practices[0]
    part.provenance.practice = locations.length && matchPractice(locations.join(" ")).length
      ? locRef
      : popRef
  }
  const harvest = harvestYearFromText(`${data.sampling_year_range || ""} ${population} ${locations.join(" ")}`)
  if (harvest) {
    part.fields.harvest_year = harvest
    part.provenance.harvest_year = population && /\bharvest/i.test(population) ? popRef : yearRef
  }
  return part
}

function parseLooseYears(value) {
  const text = String(value || "").trim()
  if (!text || UNKNOWN_PLACE.test(text) || /not specified/i.test(text)) return null
  const years = [...text.matchAll(/\b((?:19|20)\d{2})\b/g)].map((match) => Number(match[1]))
  if (!years.length) return null
  return { start: Math.min(...years), end: Math.max(...years) }
}

function countryFromCell(value) {
  const text = String(value || "").trim()
  if (!text) return { kind: "empty" }
  if (UNKNOWN_PLACE.test(text)) return { kind: "unknown" }
  const pieces = text.split(/\s*(?:\+|;|\/|\band\b)\s*/i).map((piece) => piece.trim()).filter(Boolean)
  const codes = []
  for (const piece of pieces) {
    codes.push(...parseLocationStrings([piece]).countries)
  }
  const unique = [...new Set(codes)]
  if (unique.length > 1) return { kind: "multi", codes: unique }
  if (unique.length === 1) return { kind: "one", code: unique[0] }
  return { kind: "empty" }
}

export function geoFromCsvColumns(row, filePath) {
  const part = blankPart()
  const ref = (column) => `${filePath} column ${column}`
  const countryColumns = ["country_of_origin", "sampling_country", "market", "market_region"]
  for (const column of countryColumns) {
    if (!(column in row)) continue
    const parsed = countryFromCell(row[column])
    if (parsed.kind === "empty") continue
    if (parsed.kind === "unknown") {
      part.countryExplicitlyUnknown = true
      break
    }
    if (parsed.kind === "multi") {
      part.multiCountry = true
      part.provenance.geo_precision = ref(column)
      break
    }
    part.fields.sampling_country = parsed.code
    part.provenance.sampling_country = ref(column)
    const places = parseLocationStrings([row[column]])
    if (places.regions.length === 1) {
      part.fields.sampling_region = places.regions[0]
      part.provenance.sampling_region = ref(column)
    }
    break
  }
  if (!part.fields.sampling_region && row.sampling_region) {
    const places = parseLocationStrings([row.sampling_region])
    if (places.regions.length === 1) {
      part.fields.sampling_region = places.regions[0]
      part.provenance.sampling_region = ref("sampling_region")
    }
  } else if (!part.fields.sampling_region && row.region) {
    const places = parseLocationStrings([row.region])
    if (places.regions.length === 1 && places.countries.length <= 1) {
      part.fields.sampling_region = places.regions[0]
      part.provenance.sampling_region = ref("region")
      if (!part.fields.sampling_country && places.countries.length === 1 && !part.countryExplicitlyUnknown && !part.multiCountry) {
        part.fields.sampling_country = places.countries[0]
        part.provenance.sampling_country = ref("region")
      }
    }
  }
  const calendar = integerYear(row.calendar_year)
  const fiscal = integerYear(row.fiscal_year)
  const fiscalMin = integerYear(row.fiscal_year_min)
  const fiscalMax = integerYear(row.fiscal_year_max)
  if (calendar) {
    part.fields.sampling_year_start = calendar
    part.fields.sampling_year_end = calendar
    part.provenance.sampling_year_start = ref("calendar_year")
    part.provenance.sampling_year_end = ref("calendar_year")
  } else if (fiscal) {
    part.fields.sampling_year_start = fiscal
    part.fields.sampling_year_end = fiscal
    part.provenance.sampling_year_start = ref("fiscal_year")
    part.provenance.sampling_year_end = ref("fiscal_year")
  } else if (fiscalMin || fiscalMax) {
    const start = fiscalMin || fiscalMax
    const end = fiscalMax || fiscalMin
    part.fields.sampling_year_start = Math.min(start, end)
    part.fields.sampling_year_end = Math.max(start, end)
    part.provenance.sampling_year_start = ref("fiscal_year_min")
    part.provenance.sampling_year_end = ref("fiscal_year_max")
  } else if (row.sampling_period) {
    const years = parseLooseYears(row.sampling_period)
    if (years) {
      part.fields.sampling_year_start = years.start
      part.fields.sampling_year_end = years.end
      part.provenance.sampling_year_start = ref("sampling_period")
      part.provenance.sampling_year_end = ref("sampling_period")
    }
  } else if (row.year_min || row.year_max) {
    const years = parseLooseYears(`${row.year_min || ""} ${row.year_max || ""}`)
    if (years) {
      part.fields.sampling_year_start = years.start
      part.fields.sampling_year_end = years.end
      part.provenance.sampling_year_start = ref("year_min")
      part.provenance.sampling_year_end = ref("year_max")
    }
  }
  const harvest = integerYear(row.harvest_year)
  if (harvest) {
    part.fields.harvest_year = harvest
    part.provenance.harvest_year = ref("harvest_year")
  }
  const lat = numberOrNull(row.lat ?? row.latitude)
  const lon = numberOrNull(row.lon ?? row.longitude)
  if (lat != null && lon != null && lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180) {
    part.fields.lat = lat
    part.fields.lon = lon
    part.provenance.lat = ref(row.lat != null && row.lat !== "" ? "lat" : "latitude")
    part.provenance.lon = ref(row.lon != null && row.lon !== "" ? "lon" : "longitude")
  }
  const practiceCell = String(row.practice || row.farming_practice || "").trim()
  if (PRACTICE_VALUES.includes(practiceCell) && practiceCell !== "unknown") {
    part.fields.practice = practiceCell
    part.provenance.practice = ref(row.practice ? "practice" : "farming_practice")
  } else {
    const described = [row.sample_description, row.simplified_product_label, row.product_label, row.source_product_label]
      .filter(Boolean)
      .join(" ")
    const practices = matchPractice(described)
    if (practices.length === 1) {
      part.fields.practice = practices[0]
      part.provenance.practice = ref("sample_description")
    } else if (practices.length === 0 && looseOrganic(described)) {
      part.fields.practice = "organic"
      part.provenance.practice = ref("sample_description")
    }
  }
  return part
}

function integerYear(value) {
  if (value == null || String(value).trim() === "") return null
  const year = Number(value)
  if (!Number.isInteger(year) || year < 1900 || year > 2100) return null
  return year
}

function numberOrNull(value) {
  if (value == null || String(value).trim() === "") return null
  const number = Number(value)
  return Number.isFinite(number) ? number : null
}

function derivePrecision(fields, multiCountry) {
  if (fields.lat != null && fields.lon != null) return "point"
  if (multiCountry && !fields.sampling_country) return "multi_country"
  if (fields.sampling_region && fields.sampling_country) return "admin1"
  if (fields.sampling_region) return "admin1"
  if (fields.sampling_country) return "country"
  return null
}

export function mergeGeo(parts) {
  const fields = {}
  const provenance = {}
  let multiCountry = false
  let explicitUnknown = false
  for (const part of parts) {
    if (!part) continue
    if (part.multiCountry) multiCountry = true
    if (part.countryExplicitlyUnknown) explicitUnknown = true
    for (const [key, value] of Object.entries(part.fields || {})) {
      if (value == null || value === "") continue
      fields[key] = value
      if (part.provenance?.[key]) provenance[key] = part.provenance[key]
    }
    if (part.provenance?.geo_precision && !provenance.geo_precision) {
      provenance.geo_precision = part.provenance.geo_precision
    }
  }
  if (explicitUnknown) {
    delete fields.sampling_country
    delete provenance.sampling_country
    multiCountry = false
  }
  if (fields.sampling_country) multiCountry = false
  if (multiCountry) {
    delete fields.sampling_country
    delete fields.sampling_region
    delete provenance.sampling_country
    delete provenance.sampling_region
  }
  const precision = derivePrecision(fields, multiCountry)
  if (precision) {
    fields.geo_precision = precision
    if (!provenance.geo_precision) {
      provenance.geo_precision = provenance.sampling_country
        || provenance.sampling_region
        || provenance.lat
        || provenance.geo_precision
    }
  }
  if (Object.keys(fields).length) {
    const sources = [...new Set(Object.values(provenance).filter(Boolean))]
    fields.geo_source = sources.join("; ")
    fields.geo_provenance = provenance
  }
  return fields
}

export function validateGeoHistFields(record) {
  const errors = []
  if (!record || typeof record !== "object") return ["record must be an object"]
  const country = record.sampling_country
  if (country != null && !ISO_ALPHA2.has(country)) errors.push(`sampling_country ${JSON.stringify(country)} is not ISO 3166-1 alpha-2`)
  const region = record.sampling_region
  if (region != null && (typeof region !== "string" || !region.trim())) errors.push("sampling_region must be a non-empty string")
  const lat = record.lat
  const lon = record.lon
  if (lat != null || lon != null) {
    if (typeof lat !== "number" || lat < -90 || lat > 90) errors.push("lat must be a number from -90 to 90")
    if (typeof lon !== "number" || lon < -180 || lon > 180) errors.push("lon must be a number from -180 to 180")
    if (lat == null || lon == null) errors.push("lat and lon must be set together")
  }
  for (const key of ["sampling_year_start", "sampling_year_end", "harvest_year"]) {
    const year = record[key]
    if (year == null) continue
    if (!Number.isInteger(year) || year < 1900 || year > 2100) errors.push(`${key} must be an integer year from 1900 to 2100`)
  }
  if (record.sampling_year_start != null && record.sampling_year_end != null && record.sampling_year_start > record.sampling_year_end) {
    errors.push("sampling_year_start is after sampling_year_end")
  }
  if (record.practice != null && !PRACTICE_VALUES.includes(record.practice)) errors.push(`practice ${JSON.stringify(record.practice)} is outside the vocabulary`)
  if (record.geo_precision != null && !GEO_PRECISION_VALUES.includes(record.geo_precision)) {
    errors.push(`geo_precision ${JSON.stringify(record.geo_precision)} is outside the vocabulary`)
  }
  if (record.geo_precision === "point" && (lat == null || lon == null)) errors.push("geo_precision point requires lat and lon")
  if (record.geo_precision === "admin1" && (typeof region !== "string" || !region.trim())) errors.push("geo_precision admin1 requires sampling_region")
  if (record.geo_precision === "country" && !ISO_ALPHA2.has(country)) errors.push("geo_precision country requires sampling_country")
  if (record.geo_precision === "multi_country" && country != null) errors.push("geo_precision multi_country cannot carry a single sampling_country")
  if (record.geo_source != null && (typeof record.geo_source !== "string" || !record.geo_source.trim())) errors.push("geo_source must be a non-empty string")
  const filled = ["sampling_country", "sampling_region", "lat", "lon", "sampling_year_start", "sampling_year_end", "harvest_year", "practice", "geo_precision"]
    .some((key) => record[key] != null && record[key] !== "")
  if (filled) {
    if (typeof record.geo_source !== "string" || !record.geo_source.trim()) errors.push("geo_source is required when a geography, time, or practice field is set")
    if (!record.geo_provenance || typeof record.geo_provenance !== "object" || Array.isArray(record.geo_provenance)) {
      errors.push("geo_provenance is required when a geography, time, or practice field is set")
    } else {
      for (const [key, value] of Object.entries(record.geo_provenance)) {
        if (!GEO_FIELD_NAMES.includes(key) && key !== "geo_precision") errors.push(`geo_provenance key ${key} is not a geo-hist field`)
        if (typeof value !== "string" || !value.trim()) errors.push(`geo_provenance.${key} must be a non-empty string`)
      }
    }
  }
  return errors
}

export function classifyFood(text) {
  const haystack = String(text || "")
    .toLowerCase()
    .replace(/[_/]+/g, " ")
    .replace(/-+/g, " ")
    .replace(/\bexcluding\b[^.;]*/g, " ")
    .replace(/\s+/g, " ")
  for (const [group, pattern] of GROUP_RULES) {
    if (pattern.test(haystack)) return group
  }
  return "Other"
}

function groupTextFromCsv(row) {
  return [
    row.ingredient_slug,
    row.ingredient_label,
    row.tds_food_description,
    row.row_slug,
    row.product_slug,
    row.product_label,
    row.source_product_label,
    row.simplified_product_label,
    row.sample_description,
    row.baby_food_name,
    row.fda_category,
    row.food_name,
    row.food_category,
    row.matrix,
    row.juice_type,
    row.product_class,
    row.use_label,
  ].filter(Boolean).join(" ")
}

function matrixKeys(row) {
  return [row.row_slug, row.product_slug, row.ingredient_slug, row.matrix, row.product_label]
    .map((value) => String(value || "").trim())
    .filter(Boolean)
}

export function parseCsv(text) {
  const rows = []
  let row = []
  let cell = ""
  let quoted = false
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (quoted) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          cell += '"'
          i += 1
        } else quoted = false
      } else cell += char
    } else if (char === '"') quoted = true
    else if (char === ",") {
      row.push(cell)
      cell = ""
    } else if (char === "\n") {
      row.push(cell)
      rows.push(row)
      row = []
      cell = ""
    } else if (char !== "\r") cell += char
  }
  if (cell.length || row.length) {
    row.push(cell)
    rows.push(row)
  }
  if (!rows.length) return []
  const header = rows[0]
  return rows.slice(1).filter((cells) => cells.some((value) => value !== "")).map((cells, index) => {
    const record = {}
    header.forEach((key, column) => {
      record[key] = cells[column] ?? ""
    })
    record.__line = index + 2
    return record
  })
}

function readCsv(repoRoot, relativePath) {
  const full = path.join(repoRoot, relativePath)
  if (!fs.existsSync(full)) return []
  return parseCsv(fs.readFileSync(full, "utf8"))
}

function sourceIdOf(row, spec) {
  const column = spec?.sourceColumn || "source_id"
  return String(row[column] || row.source_id || row.cite_key || "").trim()
}

function loadFrontmatter(repoRoot, sourceId, cache) {
  if (cache.has(sourceId)) return cache.get(sourceId)
  const page = path.join(repoRoot, "wiki/sources", `${sourceId}.md`)
  if (!fs.existsSync(page)) {
    cache.set(sourceId, null)
    return null
  }
  try {
    const data = matter(fs.readFileSync(page, "utf8")).data
    cache.set(sourceId, data)
    return data
  } catch {
    cache.set(sourceId, null)
    return null
  }
}

function frontmatterPart(repoRoot, sourceId, cache) {
  const data = loadFrontmatter(repoRoot, sourceId, cache)
  if (!data) return blankPart()
  const page = `wiki/sources/${sourceId}.md`
  return fieldsFromFrontmatter(data, page)
}

export function rowHasSummaryValue(row) {
  const numeric = [
    "mean_ppb", "median_ppb", "p50_ppb", "p90_ppb", "p95_ppb", "p100_ppb", "max_ppb", "min_ppb",
    "mean_lb_ppb", "mean_ub_ppb", "p10_ppb", "reported_value_ppb", "numeric_lower_bound_ppb",
    "pb_lower_bound_ppb", "inorganic_as_ppb", "value_ppb", "mean_value", "preferred_read",
    "concentration_ppb_equivalent", "mean", "p50", "p90", "p100", "min",
    "p10_lower_bound_ug_kg", "p50_lower_bound_ug_kg", "p90_lower_bound_ug_kg",
    "p95_lower_bound_ug_kg", "max_lower_bound_ug_kg",
  ]
  if (numeric.some((key) => row[key] != null && String(row[key]).trim() !== "")) return true
  if (String(row.field_value_summary || "").trim()) return true
  return false
}

function csvMeasurement(repoRoot, relativePath, row, cache) {
  const sourceId = sourceIdOf(row)
  const csvPart = geoFromCsvColumns(row, relativePath)
  const fmPart = frontmatterPart(repoRoot, sourceId, cache)
  const geo = mergeGeo([fmPart, csvPart])
  const page = fs.existsSync(path.join(repoRoot, "wiki/sources", `${sourceId}.md`))
    ? `wiki/sources/${sourceId}.md`
    : ""
  return {
    row_id: `csv:${relativePath}:${row.__line}`,
    ledger: "csv",
    source_id: sourceId,
    source_page: page,
    matrix: matrixKeys(row)[0] || "",
    food_group: classifyFood(groupTextFromCsv(row)),
    geo,
    csvPart,
  }
}

export function collectMeasurementRows(repoRoot) {
  const cache = new Map()
  const valueRows = []
  const valueSourceIds = new Set()
  const valuesPath = path.join(repoRoot, "data/evidence/values.jsonl")
  const valueLines = fs.readFileSync(valuesPath, "utf8").split("\n")
  valueLines.forEach((line, index) => {
    if (!line.trim()) return
    const record = JSON.parse(line)
    if (record.claim_class !== "literature_finding") return
    const numeric = typeof record.normalized_value === "number" || typeof record.original_value === "number"
    if (!numeric) return
    valueSourceIds.add(record.source_id)
    valueRows.push({ index, line, record })
  })

  const sampleRows = []
  const sampleSourceIds = new Set()
  for (const spec of SAMPLE_FILES) {
    for (const row of readCsv(repoRoot, spec.path)) {
      if (spec.heavyMetalOnly && !HEAVY_METALS.has(String(row.metal_species || "").trim())) continue
      const built = csvMeasurement(repoRoot, spec.path, row, cache)
      sampleRows.push(built)
      if (built.source_id) sampleSourceIds.add(built.source_id)
    }
  }

  const summaryRows = []
  const summaryByKey = new Map()
  for (const relativePath of SUMMARY_FILES) {
    for (const row of readCsv(repoRoot, relativePath)) {
      if (!rowHasSummaryValue(row)) continue
      const sourceId = sourceIdOf(row)
      const csvPart = geoFromCsvColumns(row, relativePath)
      for (const key of matrixKeys(row)) {
        const id = `${sourceId}::${key}`
        if (!summaryByKey.has(id)) summaryByKey.set(id, [])
        summaryByKey.get(id).push(csvPart)
      }
      if (!summaryByKey.has(`${sourceId}::*`)) summaryByKey.set(`${sourceId}::*`, [])
      summaryByKey.get(`${sourceId}::*`).push(csvPart)
      if (sampleSourceIds.has(sourceId) || valueSourceIds.has(sourceId)) continue
      summaryRows.push(csvMeasurement(repoRoot, relativePath, row, cache))
    }
  }

  const measurements = []
  for (const value of valueRows) {
    if (sampleSourceIds.has(value.record.source_id)) continue
    const fmPart = frontmatterPart(repoRoot, value.record.source_id, cache)
    const matrix = String(value.record.product_matrix || "")
    const specific = summaryByKey.get(`${value.record.source_id}::${matrix}`) || []
    const general = summaryByKey.get(`${value.record.source_id}::*`) || []
    const overlay = consensusPart(specific.length ? specific : general)
    const geo = mergeGeo([fmPart, overlay])
    const page = fs.existsSync(path.join(repoRoot, "wiki/sources", `${value.record.source_id}.md`))
      ? `wiki/sources/${value.record.source_id}.md`
      : ""
    measurements.push({
      row_id: `value:${value.record.value_id}`,
      ledger: "values.jsonl",
      line_index: value.index,
      source_id: value.record.source_id,
      source_page: page,
      matrix,
      food_group: classifyFood(matrix),
      geo,
    })
  }
  measurements.push(...sampleRows, ...summaryRows)
  return { measurements, valueLines }
}

function consensusPart(parts) {
  if (!parts.length) return blankPart()
  const countries = new Set(parts.map((part) => part.fields.sampling_country).filter(Boolean))
  const unknown = parts.some((part) => part.countryExplicitlyUnknown)
  const multi = parts.some((part) => part.multiCountry)
  const out = blankPart()
  if (!unknown && !multi && countries.size === 1 && parts.every((part) => part.fields.sampling_country === [...countries][0])) {
    const sample = parts.find((part) => part.fields.sampling_country)
    out.fields.sampling_country = [...countries][0]
    out.provenance.sampling_country = sample.provenance.sampling_country
    const regions = new Set(parts.map((part) => part.fields.sampling_region).filter(Boolean))
    if (regions.size === 1) {
      const regionSample = parts.find((part) => part.fields.sampling_region)
      out.fields.sampling_region = [...regions][0]
      out.provenance.sampling_region = regionSample.provenance.sampling_region
    }
  } else if (multi || countries.size > 1) {
    out.multiCountry = true
    out.provenance.geo_precision = parts.find((part) => part.provenance.geo_precision)?.provenance.geo_precision
      || parts.find((part) => part.provenance.sampling_country)?.provenance.sampling_country
  }
  const yearKeys = parts
    .filter((part) => part.fields.sampling_year_start)
    .map((part) => `${part.fields.sampling_year_start}-${part.fields.sampling_year_end}`)
  if (new Set(yearKeys).size === 1 && yearKeys.length === parts.length) {
    const sample = parts.find((part) => part.fields.sampling_year_start)
    out.fields.sampling_year_start = sample.fields.sampling_year_start
    out.fields.sampling_year_end = sample.fields.sampling_year_end
    out.provenance.sampling_year_start = sample.provenance.sampling_year_start
    out.provenance.sampling_year_end = sample.provenance.sampling_year_end
  }
  const practices = new Set(parts.map((part) => part.fields.practice).filter(Boolean))
  if (practices.size === 1 && parts.every((part) => part.fields.practice)) {
    const sample = parts.find((part) => part.fields.practice)
    out.fields.practice = [...practices][0]
    out.provenance.practice = sample.provenance.practice
  }
  return out
}

export function applyGeoFields(record, geo) {
  const next = { ...record }
  for (const key of GEO_FIELD_NAMES) delete next[key]
  for (const key of GEO_FIELD_NAMES) {
    if (geo[key] != null && geo[key] !== "") next[key] = geo[key]
  }
  return next
}

export function summarizeMeasurements(rows) {
  const groups = new Map()
  const ensure = (name) => {
    if (!groups.has(name)) {
      groups.set(name, {
        food_group: name,
        measurement_rows: 0,
        rows_with_country: 0,
        rows_with_admin1: 0,
        rows_with_sampling_year: 0,
        rows_with_practice: 0,
        countries: new Set(),
        year_min: null,
        year_max: null,
      })
    }
    return groups.get(name)
  }
  for (const name of REQUIRED_FOOD_GROUPS) ensure(name)
  const sources = new Map()
  const totals = {
    measurement_rows: 0,
    rows_with_country: 0,
    rows_with_admin1: 0,
    rows_with_sampling_year: 0,
    rows_with_practice: 0,
    rows_with_point: 0,
    annotated_rows: 0,
    provenance: {},
  }
  for (const row of rows) {
    const geo = row.geo || {}
    const bucket = ensure(row.food_group || "Other")
    bucket.measurement_rows += 1
    totals.measurement_rows += 1
    const hasCountry = Boolean(geo.sampling_country)
    const hasRegion = Boolean(geo.sampling_region)
    const hasYear = geo.sampling_year_start != null
    const hasPractice = Boolean(geo.practice)
    if (hasCountry) {
      bucket.rows_with_country += 1
      totals.rows_with_country += 1
      bucket.countries.add(geo.sampling_country)
    }
    if (hasRegion) {
      bucket.rows_with_admin1 += 1
      totals.rows_with_admin1 += 1
    }
    if (hasYear) {
      bucket.rows_with_sampling_year += 1
      totals.rows_with_sampling_year += 1
      bucket.year_min = bucket.year_min == null ? geo.sampling_year_start : Math.min(bucket.year_min, geo.sampling_year_start)
      const end = geo.sampling_year_end ?? geo.sampling_year_start
      bucket.year_max = bucket.year_max == null ? end : Math.max(bucket.year_max, end)
    }
    if (hasPractice) {
      bucket.rows_with_practice += 1
      totals.rows_with_practice += 1
    }
    if (geo.lat != null && geo.lon != null) totals.rows_with_point += 1
    if (hasCountry || hasRegion || hasYear || hasPractice || geo.geo_precision) totals.annotated_rows += 1
    for (const value of Object.values(geo.geo_provenance || {})) {
      totals.provenance[value] = (totals.provenance[value] || 0) + 1
    }
    const sourceKey = row.source_id || "(no source id)"
    if (!sources.has(sourceKey)) {
      sources.set(sourceKey, {
        source_id: row.source_id || "",
        source_page: row.source_page || "",
        measurement_rows: 0,
        rows_missing_region_or_year: 0,
        rows_missing_country: 0,
        rows_missing_admin1: 0,
        rows_missing_year: 0,
      })
    }
    const source = sources.get(sourceKey)
    if (!source.source_page && row.source_page) source.source_page = row.source_page
    source.measurement_rows += 1
    if (!hasRegion || !hasYear) source.rows_missing_region_or_year += 1
    if (!hasCountry) source.rows_missing_country += 1
    if (!hasRegion) source.rows_missing_admin1 += 1
    if (!hasYear) source.rows_missing_year += 1
  }
  const ordered = [...groups.values()].sort((a, b) => {
    const ai = REQUIRED_FOOD_GROUPS.indexOf(a.food_group)
    const bi = REQUIRED_FOOD_GROUPS.indexOf(b.food_group)
    if (ai !== -1 || bi !== -1) {
      if (ai === -1) return 1
      if (bi === -1) return -1
      return ai - bi
    }
    return b.measurement_rows - a.measurement_rows || a.food_group.localeCompare(b.food_group)
  })
  const topSources = [...sources.values()]
    .filter((source) => source.rows_missing_region_or_year > 0)
    .sort((a, b) => b.rows_missing_region_or_year - a.rows_missing_region_or_year || b.measurement_rows - a.measurement_rows)
    .slice(0, 50)
    .map((source, index) => ({ rank: index + 1, ...source }))
  return { groups: ordered, topSources, totals }
}

function pct(count, total) {
  if (!total) return "0.0"
  return (100 * count / total).toFixed(1)
}

function span(group) {
  if (group.year_min == null && group.year_max == null) return ""
  return `${group.year_min ?? ""} to ${group.year_max ?? ""}`
}

export function coverageCsv(groups) {
  const header = [
    "food_group",
    "measurement_rows",
    "rows_with_country",
    "pct_country",
    "rows_with_admin1",
    "pct_admin1",
    "rows_with_sampling_year",
    "pct_sampling_year",
    "rows_with_practice",
    "pct_practice",
    "distinct_countries",
    "year_min",
    "year_max",
  ]
  const lines = [header.join(",")]
  for (const group of groups) {
    lines.push([
      csvCell(group.food_group),
      group.measurement_rows,
      group.rows_with_country,
      pct(group.rows_with_country, group.measurement_rows),
      group.rows_with_admin1,
      pct(group.rows_with_admin1, group.measurement_rows),
      group.rows_with_sampling_year,
      pct(group.rows_with_sampling_year, group.measurement_rows),
      group.rows_with_practice,
      pct(group.rows_with_practice, group.measurement_rows),
      group.countries.size,
      group.year_min ?? "",
      group.year_max ?? "",
    ].join(","))
  }
  return `${lines.join("\n")}\n`
}

function csvCell(value) {
  const text = String(value ?? "")
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`
  return text
}

export function coverageMarkdown({ groups, topSources, totals, generatedOn }) {
  const groupTable = [
    "| Food or matrix group | Rows | With country | Country % | With admin-1 | Admin-1 % | With sampling year | Year % | With practice | Practice % | Countries | Year span |",
    "| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |",
    ...groups.map((group) => `| ${group.food_group} | ${group.measurement_rows} | ${group.rows_with_country} | ${pct(group.rows_with_country, group.measurement_rows)} | ${group.rows_with_admin1} | ${pct(group.rows_with_admin1, group.measurement_rows)} | ${group.rows_with_sampling_year} | ${pct(group.rows_with_sampling_year, group.measurement_rows)} | ${group.rows_with_practice} | ${pct(group.rows_with_practice, group.measurement_rows)} | ${group.countries.size} | ${span(group)} |`),
  ]
  const topTable = [
    "| Rank | Source | Page | Rows | Missing region or year | Missing country | Missing admin-1 | Missing year |",
    "| ---: | --- | --- | ---: | ---: | ---: | ---: | ---: |",
    ...topSources.map((source) => `| ${source.rank} | ${source.source_id} | ${source.source_page || ""} | ${source.measurement_rows} | ${source.rows_missing_region_or_year} | ${source.rows_missing_country} | ${source.rows_missing_admin1} | ${source.rows_missing_year} |`),
  ]
  return `# GEO-HIST coverage

Generated ${generatedOn} by \`tools/evidence/geo-hist.mjs\`. This file is a ledger coverage brief. It is not a public wiki page.

## What was counted

A measurement row is one numeric literature-finding record in \`data/evidence/values.jsonl\`, or one row in a per-study concentration CSV. Where a sample-level CSV exists for a source, those sample rows are the measurements and the matching summary rows in \`values.jsonl\` are not counted again. Summary CSVs are counted only for sources that have neither a sample file nor a \`values.jsonl\` literature row, and only when the row carries a concentration statistic. WHO GEMS/Food grouped summaries count when a lower-bound µg/kg percentile is filled. Rows in that file with an empty percentile and \`n_numeric_or_censored\` of 0 are omitted. A category phrase that begins with "excluding" is ignored when the food group is chosen, so "excluding cocoa products" does not place tea in the cocoa group. FDA Total Diet Study rows are limited to the heavy-metal species on the row (\`metal_species\` in Pb, Cd, iAs, tAs, MeHg, tHg, Hg, Ni, Al, Cr, Cr-VI, Cr-total, Sn, Sb, U). Nutrient rows in that file are not concentration rows for this brief.

## What was copied

Filled fields come from source-page \`sampling_locations\`, \`sampling_year_range\`, and explicit collection wording in \`sample_population\`, or from CSV columns that already name a place, year, or practice (\`country_of_origin\`, \`market\`, \`market_region\`, \`calendar_year\`, \`fiscal_year\`, \`fiscal_year_min\`, \`fiscal_year_max\`, \`sampling_period\`, \`year_min\`, \`year_max\`). \`geo_provenance\` records the file and field. \`jurisdictions\` is not copied. Author affiliation is not copied. A printed FDA or WHO program name is not treated as a country. WHO GEMS/Food \`region_name\` values (EURO, WPRO, PAHO, SEARO, AFRO, EMRO, European Union, Codex Committee Near-East) and \`food_origins\` values (Domestic, Imported, Unknown, Mixed) are not sampling countries and are not copied. A CSV cell that says Unknown or Not Specified blocks country inheritance for that row. FDA Total Diet Study region names (National, Southeast, Northeast, West, Mid-Atlantic, Southwest, North Central) are not admin-1 names, so \`sampling_region\` stays empty. \`practice: unknown\` is not written as a placeholder.

## Ledger totals

| Measure | Count |
| --- | ---: |
| Measurement rows | ${totals.measurement_rows} |
| Rows with any geography, year, or practice field | ${totals.annotated_rows} |
| Rows with sampling country | ${totals.rows_with_country} |
| Rows with admin-1 region | ${totals.rows_with_admin1} |
| Rows with sampling year | ${totals.rows_with_sampling_year} |
| Rows with practice | ${totals.rows_with_practice} |
| Rows with a printed lat/lon pair | ${totals.rows_with_point} |

## Coverage by food or matrix group

${groupTable.join("\n")}

Year span is the minimum \`sampling_year_start\` and the maximum \`sampling_year_end\` among rows that have a sampling year. An empty span means no row in that group had a stated sampling year.

## Top 50 source pages for a human read

Ranked by measurement rows that still lack an admin-1 region or a sampling year. One PDF read of a high-ranked page fills the most empty rows. Affiliation and \`jurisdictions\` were left empty on purpose, so a page can rank here even when a country code sits in \`jurisdictions\`.

${topTable.join("\n")}
`
}

function writeOutputs(repoRoot) {
  const { measurements, valueLines } = collectMeasurementRows(repoRoot)
  const errors = []
  const annotated = []
  measurements.forEach((row) => {
    const problems = validateGeoHistFields(row.geo || {})
    if (problems.length) errors.push(`${row.row_id}: ${problems.join("; ")}`)
    if (row.geo && Object.keys(row.geo).length) {
      annotated.push({
        row_id: row.row_id,
        ledger: row.ledger,
        source_id: row.source_id,
        source_page: row.source_page,
        food_group: row.food_group,
        matrix: row.matrix,
        ...row.geo,
      })
    }
  })
  if (errors.length) {
    console.error(errors.slice(0, 20).join("\n"))
    throw new Error(`geo-hist validation failed on ${errors.length} rows`)
  }
  annotated.sort((a, b) => a.row_id.localeCompare(b.row_id))
  const geoHistPath = path.join(repoRoot, "data/evidence/geo_hist.jsonl")
  fs.writeFileSync(geoHistPath, annotated.map((row) => JSON.stringify(row)).join("\n") + (annotated.length ? "\n" : ""))

  const byLine = new Map(measurements.filter((row) => row.ledger === "values.jsonl").map((row) => [row.line_index, row]))
  const nextLines = valueLines.map((line, index) => {
    if (!line.trim()) return line
    const update = byLine.get(index)
    if (!update) {
      const record = JSON.parse(line)
      if (!GEO_FIELD_NAMES.some((key) => record[key] !== undefined)) return line
      return JSON.stringify(applyGeoFields(record, {}))
    }
    if (!update.geo || !Object.keys(update.geo).length) return line
    return JSON.stringify(applyGeoFields(JSON.parse(line), update.geo))
  })
  const valuesBody = nextLines.join("\n").replace(/\n*$/, "")
  fs.writeFileSync(path.join(repoRoot, "data/evidence/values.jsonl"), `${valuesBody}\n`)

  const summary = summarizeMeasurements(measurements)
  const generatedOn = new Date().toISOString().slice(0, 10)
  const briefDir = path.join(repoRoot, "docs/briefs")
  fs.mkdirSync(briefDir, { recursive: true })
  fs.writeFileSync(path.join(briefDir, "geo-hist-coverage.csv"), coverageCsv(summary.groups))
  fs.writeFileSync(path.join(briefDir, "geo-hist-coverage.md"), coverageMarkdown({ ...summary, generatedOn }))
  console.log(JSON.stringify({
    measurement_rows: summary.totals.measurement_rows,
    annotated_rows: summary.totals.annotated_rows,
    rows_with_country: summary.totals.rows_with_country,
    rows_with_admin1: summary.totals.rows_with_admin1,
    rows_with_sampling_year: summary.totals.rows_with_sampling_year,
    rows_with_practice: summary.totals.rows_with_practice,
    rows_with_point: summary.totals.rows_with_point,
    geo_hist_rows: annotated.length,
    groups: summary.groups.length,
  }, null, 2))
}

const invokedDirectly = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href
if (invokedDirectly) {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
  writeOutputs(repoRoot)
}
