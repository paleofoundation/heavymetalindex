#!/usr/bin/env node
// cat3-completeness-oracle.mjs — independent deterministic completeness check for the Cat-3 standard.
//
// For each (subcategory, analyte) it scans EVERY register row whose scope plausibly touches the
// subcategory's products with a DELIBERATELY OVER-PERMISSIVE matcher, applies only the hard,
// method-mandated exclusions (draft, feed, pesticide, quarantine, canned-for-noncanned, non-food,
// off-group, legume, multilingual-infant, and "cereals-except-rice" clause parsing), finds the
// strictest value, and compares it to what tools/standards/cat3-config.json actually bound
// (data/workbench/standards/cat3-compiled/*.json). A cell where the permissive strictest is STRICTER
// than the bound value = a scope-regex gap the config may have missed. This does NOT trust the
// config's scope regexes — it is an independent oracle. Run from repo root.
//
// Expected residual flags (correct, not misses): the four rice-PRODUCT iAs cells where EU
// non-parboiled-milled-rice 150 is stricter than the bound 250/300 — EU 2023/915 splits rice iAs by
// product form and Method v2.0 adopts the law's own split, so a rice cake maps to the rice-products
// ML (300), not a different form's milled-rice ML (150). Everything else should be clean.

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const parse = (t) => { const L=t.replace(/\r\n/g,"\n").trim().split("\n"); const H=split(L[0]); return L.slice(1).map(l=>Object.fromEntries(split(l).map((v,i)=>[H[i],v]))) }
function split(line){const o=[];let c="",q=false;for(const ch of line){if(ch==='"')q=!q;else if(ch===","&&!q){o.push(c);c=""}else c+=ch}o.push(c);return o.map(s=>s.replace(/^"|"$/g,""))}
const num=(v)=>{const n=Number(v);return Number.isFinite(n)?n:null}
const reg = parse(fs.readFileSync(path.join(REPO,"data/evidence/regulatory_limits.csv"),"utf8"))

const SPECIES = { Pb:["Pb"], iAs:["iAs"], tHg:["tHg"], Cd:["Cd"], Ni:["Ni"] }
const isDraft = (r)=>/draft|not for implementation|proposed/i.test(r.status)
const isQuar  = (r)=>/quarantin/i.test(r.status)
const isPest  = (r)=>/pesticide|residue level/i.test(r.status)
const isFeed  = (r)=>/\bfeed\b/i.test(r.basis||"")
const isCanned= (r)=>/canned|tinplate|tin-plate|tinned|tin plate|en conserve|en bo[iî]te|en conserva|enlatad[oa]|em lata|in scatola|conserve[ns]?\b|conserva[ds]?\b/i.test(r.product_scope)
const isInfant= (r)=>/infant|baby|young child|toddler|follow-?on|follow-?up|weaning|for children under|destined for|production of food for|nourrisson|enfant|b[ée]b[ée]|ni[ñn]o|lactante|s[äa]ugling|kleinkind|beikost|destin[ée] à la production|herstellung von lebensmitteln/i.test(r.product_scope)
const isOffGroup=(r)=>/\btoy|paint|surface coat|sticker|\bfilm\b|substrate|jewel|ceramic|crayon|pencil|money box|watercolou?r|vegetable oil|oils of|olive oil|\bcocoa|chocolate|cacao|\bmeat|fish|bovine|poultry|crustacean|mollusc|shrimp|\bnut\b|peanut|sunflower|\bspice|épice|graines|\bwine\b|brandy|\bgin\b|whisky|liquor|alcohol|\bbeer\b|\bwater\b|tattoo|milk chocolate/i.test(r.product_scope)
const isLegume= (r)=>/legume|\bpulse|lentil|\bsoy|dry bean|chickpea|\bpea\b/i.test(r.product_scope)
// A row whose scope excludes rice ("cereals EXCEPT ... rice ...") does not apply to a rice product.
// Distinguish that from "durum wheat and rice EXCEPT husked rice", where rice is in the INCLUDED head.
const excludesRice = (scope)=>{
  const m = scope.split(/\bexcept\b|\bexcluding\b|à l'exclusion|except listed/i)
  if (m.length < 2) return false
  const head = m[0], tail = m.slice(1).join(" ")
  const riceRe = /\brice\b|\briz\b|reis|arroz/i
  return riceRe.test(tail) && !riceRe.test(head)
}

const RICE = /\brice\b|milled rice|husked rice|polished rice|parboiled|brown rice|white rice|rice flour|rice waffle|rice wafer|rice cracker|rice cake|rice flake|popped|rice product|rice noodle|rice, quinoa|rice and deriv|galettes de riz|crackers de riz|in which rice|riz\b/i
const RICEDRINK=/rice-based drink|rice drink|rice beverage|rice milk|non-alcoholic rice/i
const CEREALGEN=/\bcereal|grain\b|cereal grains|cereal-based|processed cereals/i
const subMatch = {
  "flour-non-rice": (r)=>/\bcereal|\bwheat\b|durum|semolina|spelt|emmer|\bflour\b|\bcorn\b|maize|\bbran\b|\bgerm\b|gluten/i.test(r.product_scope) && !RICE.test(r.product_scope),
  "bread-and-baked-goods": (r)=>(CEREALGEN.test(r.product_scope)||/\bbread\b|bakery|\bbaked\b/i.test(r.product_scope)) && !RICE.test(r.product_scope),
  "pasta-wheat-based": (r)=>/\bpasta\b|macaroni|durum|semolina|\bwheat\b|\bcereal/i.test(r.product_scope) && !RICE.test(r.product_scope),
  "breakfast-cereal-non-rice": (r)=>/breakfast cereal|\bcereal|\bcorn\b|maize|\bwheat\b|\boat|\bbran\b|\bgerm\b/i.test(r.product_scope) && !RICE.test(r.product_scope),
  "other-grain-products": (r)=>/\boat|millet|quinoa|barley|\brye\b|sorghum|buckwheat|pseudo ?cereal|canihua|\bcereal/i.test(r.product_scope) && !RICE.test(r.product_scope),
  "grain-based-snacks": (r)=>(CEREALGEN.test(r.product_scope)||/biscuit|cookie|\bcracker|pretzel|popcorn|\bsnack/i.test(r.product_scope)) && !RICE.test(r.product_scope),
  "rice-bulk-grain": (r)=>RICE.test(r.product_scope) && !RICEDRINK.test(r.product_scope),
  "pasta-rice-based": (r)=>RICE.test(r.product_scope) && !RICEDRINK.test(r.product_scope),
  "rice-noodles": (r)=>RICE.test(r.product_scope) && !RICEDRINK.test(r.product_scope),
  "breakfast-cereal-rice-based": (r)=>RICE.test(r.product_scope) && !RICEDRINK.test(r.product_scope),
  "rice-snacks-crackers": (r)=>RICE.test(r.product_scope) && !RICEDRINK.test(r.product_scope),
  "rice-beverages-rice-milk": (r)=>RICEDRINK.test(r.product_scope),
}

const bound = {}
for (const slug of Object.keys(subMatch)) {
  bound[slug] = JSON.parse(fs.readFileSync(path.join(REPO,`data/workbench/standards/cat3-compiled/${slug}.json`),"utf8")).variants.both
}

let flags = 0
for (const slug of Object.keys(subMatch)) {
  const isRiceSub = slug.startsWith("rice-") || slug.endsWith("-rice-based")
  for (const analyte of Object.keys(SPECIES)) {
    const cell = bound[slug][analyte]
    const boundVal = cell?.value ?? null
    const rows = reg.filter(r =>
      SPECIES[analyte].includes(r.metal_species) &&
      !isDraft(r)&&!isQuar(r)&&!isPest(r)&&!isFeed(r)&&!isInfant(r)&&!isOffGroup(r)&&!isLegume(r) &&
      !isCanned(r) &&
      !(isRiceSub && excludesRice(r.product_scope)) &&
      subMatch[slug](r)
    )
    if (!rows.length) continue
    const strictest = rows.reduce((m,r)=> Math.min(m, num(r.value_ug_kg) ?? Infinity), Infinity)
    if (!Number.isFinite(strictest)) continue
    const strictRow = rows.find(r => num(r.value_ug_kg) === strictest)
    const gap = boundVal == null ? true : strictest < boundVal - 1e-9
    if (gap) {
      flags++
      console.log(`\n⚑ ${slug} / ${analyte}: bound=${boundVal ?? cell?.type} but oracle strictest=${strictest} [${strictRow.jurisdiction} ${strictRow.regulatory_limit_id}]`)
      console.log(`   scope: ${strictRow.product_scope.slice(0,90)}`)
    }
  }
}
const expected = "the four rice-product iAs form-split cells (see header)"
console.log(`\n${flags===0 ? "✅ NO completeness gaps." : `⚑ ${flags} cell(s) flagged — expected residual set is ${expected}; any OTHER flag is a real gap to inspect.`}`)
