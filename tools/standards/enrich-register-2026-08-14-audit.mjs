#!/usr/bin/env node
// STEP 2 register enrichment — appends the adversarial-audit-CONFIRMED sovereign rows that were
// genuinely absent from data/evidence/regulatory_limits.csv. Every value is transcribed from the
// 2026-08-14 audit's PRIMARY-CONFIRMED findings (not re-derived). Idempotent: skips ids already present.
import fs from "node:fs"

const REG = "data/evidence/regulatory_limits.csv"
const HDR = "regulatory_limit_id,jurisdiction,authority,status,metal_species,value_ug_kg,basis,product_scope,regulation_page,url,notes,basis_class,soy_class"

const GAIN = "https://gain.fas.usda.gov/#/search"
const CN_AUTH = "National Health Commission and SAMR"
const CN_PAGE = "regulations/china-gb-2762-2022-contaminants"
const CN_2025 = "GB 2762-2025 (effective 2026-09-02) retains this value unchanged (heavy-metal limits not revised; confirmed via NIFC + USDA FAS CH2023-0040)."
const GAIN_CITE = "PRIMARY source: USDA FAS GAIN CH2023-0040, authoritative English translation of GB 2762-2022. Confirmed by the 2026-08-14 adversarial standards audit (workflow waaw41b7s)."

const ANSES_URL = "https://www.anses.fr/en/system/files/ERCA2017SA0070EN.pdf"
const CSHPF_AUTH = "Conseil Superieur d'Hygiene Publique de France (CSHPF), enforced by DGCCRF"
const CSHPF_PAGE = "regulations/france-cshpf-edible-seaweed-limits"
const CSHPF_CITE = "CSHPF edible-seaweed maxima (recommendations of 14 June 1988 and 9 January 1990), tabulated verbatim in ANSES opinion 2017-SA-0070 Table 3. Enforced by DGCCRF for official controls; instrument class = enforced government recommendation (same class as FDA final-guidance action levels tagged gov in this register). Dry-matter (DM) basis. PRIMARY-CONFIRMED by the 2026-08-14 audit."

const BR_AUTH = "ANVISA"
const BR_PAGE = "regulations/brazil-in160-2022-contaminants"
const BR_URL = "https://nutrisafety.com.br/wp-content/uploads/2022/07/Instru%C3%A7%C3%A3o-Normativa-%E2%80%93-IN-n%C2%BA-160-de-01-de-julho-de-2022-LMT-Contaminantes-em-Alimentos.pdf"

// Each row: [id, juris, authority, status, species, value_ug_kg, basis, scope, page, url, notes, basis_class, soy_class]
const rows = [
  // ---- China GB 2762-2022 — Lead (Table 1) ----
  ["china_gb2762_pb_nuts_and_seeds_200","CN",CN_AUTH,"maximum level","Pb",200,"product as placed on market","Nuts and seeds (excluding raw and roasted coffee beans) (GB 2762-2022 Table 1, Lead); as-sold",CN_PAGE,GAIN,`GAIN CH2023-0040 Table 1 'Nuts and seeds (excluding raw and roasted coffee beans) 0.2 mg/kg'; Appendix A covers tree nuts + oil seeds. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  ["china_gb2762_pb_coffee_beans_500","CN",CN_AUTH,"maximum level","Pb",500,"product as placed on market","Raw and roasted coffee beans (GB 2762-2022 Table 1, Lead)",CN_PAGE,GAIN,`GAIN CH2023-0040 Table 1 coffee-bean lead 0.5 mg/kg. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  ["china_gb2762_pb_beans_legumes_200","CN",CN_AUTH,"maximum level","Pb",200,"product as placed on market","Beans and legumes (dou lei) (GB 2762-2022 Table 1, Lead)",CN_PAGE,GAIN,`GAIN CH2023-0040 Table 1 'Beans 0.2 mg/kg'. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  ["china_gb2762_pb_soy_milk_50","CN",CN_AUTH,"maximum level","Pb",50,"product as placed on market","Soy milk (liquid, ready-to-drink) (GB 2762-2022 Table 1, Lead)",CN_PAGE,GAIN,`GAIN CH2023-0040 Table 1 soy milk lead 0.05 mg/kg (liquid beverage basis). ${CN_2025} ${GAIN_CITE}`,"as_consumed",""],
  ["china_gb2762_pb_bean_products_300","CN",CN_AUTH,"maximum level","Pb",300,"product as placed on market","Bean products (tofu/tempeh and other processed bean products) (GB 2762-2022 Table 1, Lead)",CN_PAGE,GAIN,`GAIN CH2023-0040 Table 1 bean-products lead 0.3 mg/kg. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  ["china_gb2762_pb_condiments_excl_spices_1000","CN",CN_AUTH,"maximum level","Pb",1000,"product as placed on market","Condiments excluding spices (tiao wei pin, xiang xin liao lei chu wai); includes soy sauce, compound/blended condiments, and edible salt (GB 2762-2022 Table 1, Lead; Appendix A.1)",CN_PAGE,GAIN,`GAIN CH2023-0040 Table 1 'Condiments (excluding spices) 1.0 mg/kg'. Appendix A.1 places soy sauce, compound condiments (fu he tiao wei liao) and edible salt (shi yong yan) under condiments; GB 2762-2022 dropped the former separate salt-lead 2.0 line into this general condiment line (no refined/unrefined split). ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  ["china_gb2762_pb_spices_1500","CN",CN_AUTH,"maximum level","Pb",1500,"product as placed on market","Spices (xiang xin liao), except cinnamon, Sichuan pepper, and spice mixtures (GB 2762-2022 Table 1, Lead)",CN_PAGE,GAIN,`GAIN CH2023-0040 Table 1 spices lead 1.5 mg/kg. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  ["china_gb2762_pb_spices_cinnamon_szpepper_mixtures_3000","CN",CN_AUTH,"maximum level","Pb",3000,"product as placed on market","Spices: cinnamon, Sichuan pepper, and spice mixtures (GB 2762-2022 Table 1, Lead)",CN_PAGE,GAIN,`GAIN CH2023-0040 Table 1 cinnamon/Sichuan-pepper/spice-mixtures lead 3.0 mg/kg. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  // ---- China GB 2762-2022 — Cadmium (Table 2) ----
  ["china_gb2762_cd_beans_legumes_200","CN",CN_AUTH,"maximum level","Cd",200,"product as placed on market","Beans and legumes (dou lei) (GB 2762-2022 Table 2, Cadmium)",CN_PAGE,GAIN,`GAIN CH2023-0040 Cadmium table 'Beans 0.2 mg/kg'. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  ["china_gb2762_cd_peanuts_500","CN",CN_AUTH,"maximum level","Cd",500,"product as placed on market","Peanuts (hua sheng) (GB 2762-2022 Table 2, Cadmium)",CN_PAGE,GAIN,`GAIN CH2023-0040 Cadmium table 'Peanut 0.5 mg/kg' (the only nut/seed Cd row; tree nuts and oil seeds are NOT bound for Cd by China). ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  ["china_gb2762_cd_salt_500","CN",CN_AUTH,"maximum level","Cd",500,"product as placed on market","Edible salt (shi yong yan) (GB 2762-2022 Table 2, Cadmium)",CN_PAGE,GAIN,`GAIN CH2023-0040 Cadmium table edible-salt 0.5 mg/kg. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  // ---- China GB 2762-2022 — Arsenic ----
  ["china_gb2762_tas_condiments_500","CN",CN_AUTH,"maximum level","tAs",500,"product as placed on market","Condiments, general (total arsenic) (GB 2762-2022 arsenic table)",CN_PAGE,GAIN,`GAIN CH2023-0040 arsenic table general-condiment total-arsenic 0.5 mg/kg. Species = total As. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  ["china_gb2762_ias_compound_condiment_100","CN",CN_AUTH,"maximum level","iAs",100,"product as placed on market","Compound condiment (fu he tiao wei liao); Appendix A.1 includes solid bouillon (gu ti tang liao) and chicken essence/powder (ji jing / ji fen) (GB 2762-2022 arsenic table, inorganic arsenic)",CN_PAGE,GAIN,`GAIN CH2023-0040 arsenic table compound-condiment inorganic-arsenic 0.1 mg/kg (GB2762-2022 line 646). Species = inorganic As; covers bouillon cubes / seasoning blends. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  // ---- China GB 2762-2022 — Mercury (Table 3) ----
  ["china_gb2762_thg_salt_100","CN",CN_AUTH,"maximum level","tHg",100,"product as placed on market","Edible salt (shi yong yan) total mercury (GB 2762-2022 Table 3, Mercury)",CN_PAGE,GAIN,`GAIN CH2023-0040 Mercury table edible-salt total-mercury 0.1 mg/kg. Species = total Hg. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  // ---- China GB 2762-2022 — Chromium total (Table 7) ----
  ["china_gb2762_crtotal_beans_legumes_1000","CN",CN_AUTH,"maximum level","Cr-total",1000,"product as placed on market","Beans and legumes (dou lei) total chromium (GB 2762-2022 Table 7, Chromium); total Cr, not Cr-VI",CN_PAGE,GAIN,`GAIN CH2023-0040 Table 7 'Beans 1.0 mg/kg' (total chromium). Corroborates HK Cap 132V Pulses Cr-total 1000. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  ["china_gb2762_crtotal_grains_1000","CN",CN_AUTH,"maximum level","Cr-total",1000,"product as placed on market","Grains and milled grain products (gu wu ji qi zhi pin) total chromium (GB 2762-2022 Table 7, Chromium); total Cr, not Cr-VI",CN_PAGE,GAIN,`GAIN CH2023-0040 Table 7 grains + milled-grain-products 1.0 mg/kg (total chromium; rice counted as brown rice). Corroborates HK Cap 132V Cereals Cr-total 1000. ${CN_2025} ${GAIN_CITE}`,"as_sold",""],
  // ---- France CSHPF edible seaweed (ANSES 2017-SA-0070 Table 3), dry matter ----
  ["fr_cshpf_seaweed_cd_500","FR",CSHPF_AUTH,"maximum level","Cd",500,"edible seaweed, dry matter (mg/kg DM)","Edible seaweed used as a vegetable or condiment (nori, wakame, kombu, dulse); cadmium 0.5 mg/kg dry matter",CSHPF_PAGE,ANSES_URL,`${CSHPF_CITE} ANSES states the EU sets no seaweed-food Cd ML (only supplements 3.0), so the French national maximum stands; ANSES's proposed tightening to 0.35 is an unadopted advisory (not selectable).`,"as_sold",""],
  ["fr_cshpf_seaweed_thg_100","FR",CSHPF_AUTH,"maximum level","tHg",100,"edible seaweed, dry matter (mg/kg DM)","Edible seaweed used as a vegetable or condiment (nori, wakame, kombu, dulse); total mercury 0.1 mg/kg dry matter",CSHPF_PAGE,ANSES_URL,`${CSHPF_CITE} The French 'Mercury' value is TOTAL mercury (matches the tHg cell, not MeHg). No EU seaweed-food Hg ML exists.`,"as_sold",""],
  ["fr_cshpf_seaweed_ias_3000","FR",CSHPF_AUTH,"maximum level","iAs",3000,"edible seaweed, dry matter (mg/kg DM)","Edible seaweed used as a vegetable or condiment (nori, wakame, kombu, dulse); inorganic arsenic 3 mg/kg dry matter",CSHPF_PAGE,ANSES_URL,`${CSHPF_CITE} Species = inorganic arsenic.`,"as_sold",""],
  ["fr_cshpf_seaweed_pb_5000","FR",CSHPF_AUTH,"maximum level","Pb",5000,"edible seaweed, dry matter (mg/kg DM)","Edible seaweed used as a vegetable or condiment (nori, wakame, kombu, dulse); lead 5 mg/kg dry matter",CSHPF_PAGE,ANSES_URL,`${CSHPF_CITE}`,"as_sold",""],
  ["fr_cshpf_seaweed_sn_5000","FR",CSHPF_AUTH,"maximum level","Sn",5000,"edible seaweed, dry matter (mg/kg DM)","Edible seaweed used as a vegetable or condiment (nori, wakame, kombu, dulse); tin 5 mg/kg dry matter",CSHPF_PAGE,ANSES_URL,`${CSHPF_CITE}`,"as_sold",""],
  // ---- Brazil IN 160/2022 tree nuts (castanhas) ----
  ["br_in160_2022_tas_tree_nuts_800","BR",BR_AUTH,"maximum level","tAs",800,"product as placed on market","Tree nuts (castanhas, incluindo nozes, pistaches, avelas, macadamia e amendoas) total arsenic (IN 160/2022 secao 1.1, Arsenio total)",BR_PAGE,BR_URL,"IN 160/2022 (RDC 722/2022) section 1.1 'Arsenio total', row 'Castanhas, incluindo nozes, pistaches, avelas, macadamia e amendoas' = 0.80 mg/kg. VERIFIED as TOTAL arsenic (section header 'Arsenio total'; no inorganic-As override on this row). Species matches tAs. PRIMARY-CONFIRMED by the 2026-08-14 audit.","as_sold",""],
  ["br_in160_2022_pb_tree_nuts_800","BR",BR_AUTH,"maximum level","Pb",800,"product as placed on market","Tree nuts (castanhas, incluindo nozes, pistaches, avelas, macadamia e amendoas) lead (IN 160/2022 secao 1.3)",BR_PAGE,BR_URL,"IN 160/2022 section 1.3 tree-nut lead 0.80 mg/kg. Real but looser than China GB 2762 nuts-and-seeds Pb 0.2 mg/kg (200), which controls; ingested for corroboration/completeness. PRIMARY-CONFIRMED by the 2026-08-14 audit.","as_sold",""],
]

function csvCell(v) {
  const s = String(v)
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s
}

let text = fs.readFileSync(REG, "utf8")
const existingIds = new Set(text.split("\n").map((l) => l.split(",")[0]))
if (!text.endsWith("\n")) text += "\n"

let added = 0, skipped = 0
const lines = []
for (const r of rows) {
  if (existingIds.has(r[0])) { skipped++; continue }
  lines.push(r.map(csvCell).join(","))
  added++
}
if (lines.length) fs.appendFileSync(REG, lines.join("\n") + "\n")

console.log(`Register enrichment: added ${added} rows, skipped ${skipped} (already present).`)
console.log(`New total row count: ${fs.readFileSync(REG, "utf8").trim().split("\n").length}`)
// column-count integrity check on the new rows
const colErrors = []
for (const r of rows) {
  if (r.length !== 13) colErrors.push(`${r[0]}: ${r.length} cols`)
}
if (colErrors.length) { console.error("COLUMN COUNT ERRORS:", colErrors); process.exit(1) }
console.log("All new rows have 13 columns. OK.")
