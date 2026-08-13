#!/usr/bin/env node
// compile-cat15.mjs — Category-15 (Feminine Care) HMTc standard compiler.
// HMTc Method v2.0 (government-limit default). Self-contained (forks the proven food-limit
// engine, tools/standards/lib/food-limit-compiler.mjs, so it can carry the two Cat-15-specific
// semantics that engine does not model). derive -> audit -> verify; every number comes ONLY from
// data/evidence/regulatory_limits.csv; no occurrence percentile is ever computed.
//
// WHY THIS CATEGORY IS DIFFERENT (read before editing):
//
//   Exposure route. Feminine-care products contact the vulvovaginal MUCOSA (and, for internal
//   devices, do so for prolonged internal periods). Vaginal mucosa is markedly more permeable and
//   bioavailable than intact skin. The standard is written on a mucosal basis and never on a dermal
//   or dietary basis. The two basis families below are NEVER conflated (the Cat-9 contact-product
//   rule): a device content limit and a cosmetic content limit are different instruments in the
//   same native basis (total content of the finished article as placed on market), and neither is a
//   leachate/migration number.
//
//   Two basis families.
//     DEVICE forms  (tampons, pads, cups, discs, period underwear, and the case-by-case "other"):
//       regulated as medical devices for biocompatibility (21 CFR Part 884; EU MDR 2017/745;
//       ISO 10993 leachables), but NO government sets a numeric heavy-metal CONTENT limit for the
//       finished device in any jurisdiction. Every panel cell therefore resolves to a mandatory
//       analytical `control` (test-every-lot + published method + escalation, no invented number)
//       or a substantiated `not-material` determination. There is no `regulatory-alignment` cell on
//       a device row because there is no sovereign device content ML to align to.
//     COSMETIC forms (feminine wipes, feminine deodorants, douches/irrigation solutions, intimate
//       washes): these ARE cosmetics, so sovereign cosmetic contaminant limits apply. Because the
//       route is mucosal (more permeable than skin), the standard adopts the sovereign MUCOSAL-CONTACT
//       cosmetic tier where a government draws one: German BVL 2017 sets a stricter lead limit for
//       toothpaste (an oral-mucosa cosmetic, 500 ug/kg) than for general skin cosmetics (2000). Vaginal
//       mucosa is more permeable than oral, so lead reads across the mucosal-contact tier (500). For
//       cadmium/total-arsenic/total-mercury the strictest general-cosmetic value IS the mucosal-contact
//       value (BVL 100/500/100), so no further adjustment applies. Nickel binds the only sovereign
//       cosmetic nickel content limit (Korea MFDS 2025, 10000).
//
//   Materiality. Occurrence never sets the HMTc number (Method v2.0). It sets MATERIALITY: the
//   2024 tampon-metals survey (Shearston et al., Environment International) and the routed corpus
//   (ica2024, ellison2026, carlin2020, nic-corcrain2025, marcelis2024) measured Pb/Cd/tAs/tHg/Ni/Cr
//   in tampons, and marcelis2024 additionally measured Al and Sn across tampons/pads/cups. A
//   not-material determination for any metal a routed source reports present is a CONTRADICTION that
//   fails the not-material integrity gate (tools/evidence/audit-not-material-integrity.mjs). That is
//   why every occurrence-established metal here resolves to `control`, not `not-material`. The sole
//   device not-material cell is methylmercury: no biological methylation pathway exists in a
//   cellulose/polymer intimate article, the surveys measured TOTAL mercury (not MeHg), and the gate
//   is speciation-aware (tHg does not contradict a MeHg not-material cell).
//
// Provenance vocabulary (closed): {regulatory-alignment, read-across, not-material, control, ratchet}.
// `ratchet` is never emitted at initial compilation. A cell with no government ML and no configured
// disposition is a `gap` — a hard failure; the compiler exits non-zero so an unresolved cell cannot ship.
//
// Firewall: outputs are STAFF / HMTc content (CLAUDE.md Part 19). Nothing is written to wiki/.
//
// Usage: node tools/standards/compile-cat15.mjs [--only=slug1,slug2] [--outdir=path] [--quiet]

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const REGISTER_PATH = path.join(REPO, "data/evidence/regulatory_limits.csv")

// --- register gating patterns (systemic correctness guards, verbatim from the food engine) ------
const DRAFT = /draft|not for implementation|proposed/i
const QUARANTINE = /quarantin/i
const PESTICIDE = /pesticide|residue level/i
const FEED = /\bfeed\b/i
const CANNED = /canned|tinplate|tin-plate|tinned|tin plate|en conserve|en bo[iî]te|en conserva|enlatad[oa]|em lata|in scatola|conserve[ns]?\b|conserva[ds]?\b/i

const JUR_PRIORITY = ["EU", "UK", "CODEX", "international", "US", "CA", "AU-NZ", "CH", "CN", "IN", "BR", "GSO", "KR", "MERCOSUR", "SG", "IL", "TH", "PY", "MX", "VN", "FJ", "CO", "CL", "MA", "TR", "EC", "ASEAN", "ID", "MY"]
const jurRank = (j) => { const i = JUR_PRIORITY.indexOf(j); return i === -1 ? 99 : i }

const ALLOWED_TAGS = new Set(["regulatory-alignment", "read-across", "not-material", "control", "ratchet"])

// The HMTc certification panel resolved per (subcategory, analyte): 8 totals + 2 reflex species +
// methylmercury (always not-material here). Antimony (Sb) is a monitored supplementary leachable for
// PET/polymer components but is OUTSIDE the 10-analyte certification panel (see supplementary_leachables).
const PANEL = ["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Ni", "Cr", "Cr-VI", "Sn", "Al"]

// --- CSV --------------------------------------------------------------------------------
function parseCsv(text) {
  const lines = text.replace(/\r\n/g, "\n").trim().split("\n")
  const head = splitCsvLine(lines[0])
  return lines.slice(1).map((l) => Object.fromEntries(splitCsvLine(l).map((v, i) => [head[i], v])))
}
function splitCsvLine(line) {
  const out = []; let cur = "", q = false
  for (const ch of line) {
    if (ch === '"') q = !q
    else if (ch === "," && !q) { out.push(cur); cur = "" }
    else cur += ch
  }
  out.push(cur); return out.map((s) => s.replace(/^"|"$/g, ""))
}
const num = (v) => { const n = Number(v); return Number.isFinite(n) ? n : null }

function analyteOf(metal) {
  const m = (metal || "").trim()
  if (m === "Pb") return "Pb"
  if (m === "iAs") return "iAs"
  if (m === "tAs") return "tAs"
  if (m === "tHg") return "tHg"
  if (m === "MeHg") return "MeHg"
  if (m === "Cd") return "Cd"
  if (m === "Cr" || m === "Cr-total") return "Cr"
  if (m === "Cr-VI") return "Cr-VI"
  if (m === "Ni") return "Ni"
  if (m === "Sn") return "Sn"
  if (m === "Al") return "Al"
  return null
}

function scopeMatch(scope, inc, exc) {
  const s = (scope || "").toLowerCase()
  const incOk = (inc || []).some((rx) => new RegExp(rx, "i").test(s))
  const excOk = (exc || []).some((rx) => new RegExp(rx, "i").test(s))
  return incOk && !excOk
}

function roundDisplay(x) {
  if (x == null) return null
  if (x >= 100000) return Math.round(x / 1000) * 1000
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  return Math.round(x * 100) / 100
}

// --- government scope selection ---------------------------------------------------------
function selectGov(register, sub, analyte) {
  const inc = sub.scope_include || []
  const exc = sub.scope_exclude || []
  const rows = register.filter((r) => {
    if (analyteOf(r.metal_species) !== analyte) return false
    if (DRAFT.test(r.status)) return false
    if (QUARANTINE.test(r.status)) return false
    if (PESTICIDE.test(r.status)) return false
    if (FEED.test(r.basis || "")) return false
    if (!sub.canned && CANNED.test(r.product_scope)) return false
    if (!scopeMatch(r.product_scope, inc, exc)) return false
    return true
  })
  const perJur = new Map()
  for (const r of rows) {
    const v = num(r.value_ug_kg)
    if (v == null) continue
    const cand = { value: v, jur: r.jurisdiction, id: r.regulatory_limit_id, scope: r.product_scope, page: r.regulation_page || "", basis: r.basis || r.basis_class || "" }
    const prev = perJur.get(r.jurisdiction)
    if (!prev || cand.value < prev.value) perJur.set(r.jurisdiction, cand)
  }
  const candidates = [...perJur.values()].sort((a, b) => (a.value - b.value) || (jurRank(a.jur) - jurRank(b.jur)))
  return { candidates, direct: candidates[0] || null }
}

// --- audit safety-net -------------------------------------------------------------------
function auditScan(register, sub, analyte, bindingValue, bindingPage) {
  if (!sub.audit_scope) return { same_form: [], other_form: [] }
  const rx = new RegExp(sub.audit_scope, "i")
  const exclS = sub.audit_exclude_scope ? new RegExp(sub.audit_exclude_scope, "i") : null
  const same = [], other = []
  for (const r of register) {
    if (analyteOf(r.metal_species) !== analyte) continue
    if (DRAFT.test(r.status) || QUARANTINE.test(r.status) || PESTICIDE.test(r.status)) continue
    if (FEED.test(r.basis || "")) continue
    if (!sub.canned && CANNED.test(r.product_scope)) continue
    if (!rx.test(r.product_scope || "")) continue
    if (bindingPage && r.regulation_page === bindingPage) continue // the selected instrument
    const v = num(r.value_ug_kg)
    if (v == null) continue
    const isConcern = bindingValue == null ? true : v < bindingValue * 0.9999
    if (!isConcern) continue
    const hit = { id: r.regulatory_limit_id, value: roundDisplay(v), jurisdiction: r.jurisdiction, scope: r.product_scope }
    if (exclS && exclS.test(r.product_scope || "")) other.push(hit)
    else same.push(hit)
  }
  return { same_form: same, other_form: other }
}

// --- per-cell resolution ----------------------------------------------------------------
// Extends the food engine's resolveCell: a control / not-material cell here also carries
// basis_class / bounded_by / regulatory_basis / jurisdictions_checked (so the substantiation
// registry sync, tools/standards/sync-not-material.mjs, produces a fully-substantiated row) and a
// materiality_basis (the routed occurrence sources that make the cell material). A read-across cell
// carries the mucosal rationale.
function resolveCell(register, byId, sub, analyte) {
  const spec = (sub.dispositions || {})[analyte] || {}
  const { candidates, direct } = selectGov(register, sub, analyte)
  const perCountry = Object.fromEntries(candidates.map((c) => [c.jur, { value: roundDisplay(c.value), id: c.id }]))

  let raResult = null
  if (spec.source_id) {
    const src = byId.get(spec.source_id)
    if (!src) return { type: "gap", value: null, provenance_tag: null, error: `read_across source_id ${spec.source_id} not in register` }
    const v = num(src.value_ug_kg)
    if (v != null) raResult = { value: v, source_id: spec.source_id, jur: src.jurisdiction, page: src.regulation_page || "", label: spec.label, scope: src.product_scope, note: spec.mucosal_note || null }
  }

  // Government direct limit wins when it exists and is at least as strict as any read-across.
  if (direct && (!raResult || direct.value <= raResult.value)) {
    const audit = auditScan(register, sub, analyte, direct.value, direct.page)
    return {
      type: "gov", provenance_tag: "regulatory-alignment",
      value: roundDisplay(direct.value), value_exact: direct.value,
      binding_jurisdiction: direct.jur, binding_id: direct.id, binding_scope: direct.scope,
      binding_instrument: direct.page, basis_note: spec.basis_note || null, per_country: perCountry, audit,
    }
  }
  if (raResult) {
    const audit = auditScan(register, sub, analyte, raResult.value, raResult.page)
    return {
      type: "read_across", provenance_tag: "read-across",
      value: roundDisplay(raResult.value), value_exact: raResult.value,
      source_id: raResult.source_id, source_jurisdiction: raResult.jur, source_scope: raResult.scope,
      binding_instrument: raResult.page, label: raResult.label || `read-across from ${raResult.jur}`,
      mucosal_note: raResult.note, per_country: perCountry, audit,
    }
  }
  const common = {
    rationale: spec.rationale || null, reference_method: spec.reference_method || null,
    materiality_basis: spec.materiality_basis || null,
    basis_class: spec.basis_class || "", bounded_by: spec.bounded_by || "",
    regulatory_basis: spec.regulatory_basis || "", jurisdictions_checked: spec.jurisdictions_checked || "",
  }
  if (spec.control) {
    const audit = auditScan(register, sub, analyte, null, null)
    return { type: "control", provenance_tag: "control", value: null, ...common, audit }
  }
  if (spec.not_material) {
    const audit = auditScan(register, sub, analyte, null, null)
    return { type: "not_material", provenance_tag: "not-material", value: null, ...common, audit }
  }
  return { type: "gap", value: null, provenance_tag: null, error: "no government ML and no configured disposition (read_across / control / not_material)" }
}

// --- speciation reconciliation ----------------------------------------------------------
function reconcileSpeciation(cells, speciesKey, totalKey, speciesName, totalName) {
  const t = cells[totalKey], s = cells[speciesKey]
  if (!t || !s) return
  const tv = t.value_exact ?? (typeof t.value === "number" ? t.value : null)
  const sv = s.value_exact ?? (typeof s.value === "number" ? s.value : null)
  if (tv == null || sv == null) return
  if (sv >= tv) {
    cells[speciesKey] = {
      type: "subsumed",
      provenance_tag: t.provenance_tag === "read-across" ? "read-across" : "regulatory-alignment",
      value: null, subsumed_by: totalKey, binding_total: t.value,
      binding_total_source: t.binding_jurisdiction || t.source_jurisdiction || null,
      label: `${speciesName} is a component of ${totalName} (${speciesKey} <= ${totalKey}). The ${speciesKey} value (${roundDisplay(sv)} ug/kg) is not below the binding ${totalName} ceiling (${t.value} ug/kg), so ${speciesName.toLowerCase()} is governed by and bounded by the ${totalName} ceiling; no separate ${speciesKey} ceiling is published. Enforced by reflex speciation whenever ${totalKey} is elevated.`,
      candidate: { type: s.type, value: s.value, source_jurisdiction: s.source_jurisdiction || s.binding_jurisdiction || null, source_id: s.source_id || s.binding_id || null },
    }
  }
}

// --- VERIFY -----------------------------------------------------------------------------
function verifyRecord(record, panel) {
  const defects = [], warnings = []
  for (const [variant, cells] of Object.entries(record.variants)) {
    for (const a of panel) {
      const c = cells[a]
      const at = `${record.slug}[${variant}].${a}`
      if (!c) { defects.push(`${at}: missing cell`); continue }
      if (c.type === "gap") { defects.push(`${at}: ${c.error || "unresolved gap"}`); continue }
      if (!ALLOWED_TAGS.has(c.provenance_tag)) { defects.push(`${at}: provenance_tag "${c.provenance_tag}" not in the allowed vocabulary`); continue }
      if (c.type === "gov") {
        if (!(c.value_exact > 0)) defects.push(`${at}: gov cell has no positive value`)
        if (!c.binding_id) defects.push(`${at}: gov cell names no binding instrument`)
      }
      if (c.type === "read_across") {
        if (!(c.value_exact > 0)) defects.push(`${at}: read_across cell has no positive value`)
        if (!c.source_id) defects.push(`${at}: read_across cell names no source`)
      }
      if (c.type === "not_material" || c.type === "control") {
        if (!c.rationale) defects.push(`${at}: ${c.type} cell has no rationale`)
        const same = (c.audit && c.audit.same_form) || []
        if (same.length) defects.push(`${at}: marked ${c.type} but ${same.length} government ML(s) match the same product form (${same.map((h) => `${h.jurisdiction} ${h.value}`).join(", ")}) — reclassify to regulatory-alignment/read-across`)
      }
      if (c.type === "gov" || c.type === "read_across") {
        const same = (c.audit && c.audit.same_form) || []
        if (same.length) defects.push(`${at}: ${c.value} selected but stricter same-form government ML(s) exist (${same.map((h) => `${h.jurisdiction} ${h.value}`).join(", ")}) — selection missed the strictest`)
        const other = (c.audit && c.audit.other_form) || []
        if (other.length) warnings.push(`${at}: informational — stricter rows exist for a different product form (${other.map((h) => `${h.jurisdiction} ${h.value} [${h.scope.slice(0, 40)}]`).join("; ")})`)
      }
    }
  }
  return { defects, warnings }
}

// ============================================================================================
// CONFIG — the Cat-15 subcategory dispositions. Built in JS (not a static JSON) so the two device
// and cosmetic templates stay DRY and auditable in one place. Numbers are never here; only which
// register instrument a cell reads across to, or which analytical control / not-material rationale
// governs it. The effective config is also written to cat15-config.json on each run for the audit trail.
// ============================================================================================

// Reflex-speciation controls shared by every subcategory (no jurisdiction sets an iAs or Cr(VI)
// content limit for any feminine-care product form; both are enforced by reflex speciation).
const REFLEX_iAs = (bounded) => ({
  control: true,
  rationale: `Inorganic arsenic is the toxic fraction of total arsenic; no jurisdiction sets an inorganic-arsenic content limit for any feminine-care product. It is governed by reflex speciation: whenever total arsenic is elevated, inorganic arsenic is speciated by HPLC-ICP-MS, and the inorganic fraction is held under ALARA${bounded ? ` and bounded by the total-arsenic ceiling (${bounded})` : ""}.`,
  reference_method: "Reflex HPLC-ICP-MS inorganic-arsenic speciation triggered by an elevated total-arsenic screen.",
})
const REFLEX_CrVI = {
  control: true,
  rationale: "Hexavalent chromium is never a panel number; it is the toxic species obtained by reflex speciation. No jurisdiction sets a Cr(VI) content limit for any feminine-care product. Any lot whose total-chromium screen is elevated is speciated for Cr(VI); any quantifiable Cr(VI) fails.",
  reference_method: "Reflex IC-ICP-MS Cr(VI) speciation (EPA 3060A alkaline extraction + EPA 6800 / EN 15192) on an elevated total-chromium screen.",
}
// Methylmercury not-material — identical logic on every row (device and cosmetic): no methylation
// pathway, surveys measure total mercury, bounded by the total-mercury control/ceiling.
const MeHg_NM = (context) => ({
  not_material: true, basis_class: "speciation-bounded", bounded_by: "tHg",
  rationale: `Methylmercury forms by microbial methylation in aquatic food webs and bioaccumulates in fish muscle; ${context} has no methylation pathway and no dietary mercury source. Intimate-product metal surveys measure TOTAL mercury, not methylmercury, so no routed source reports methylmercury (the not-material integrity gate is speciation-aware). Any mercury present is governed by and bounded by the total-mercury control/ceiling. No jurisdiction sets a methylmercury limit for a menstrual or intimate-care product.`,
  reference_method: null,
  regulatory_basis: "No MeHg ML for any menstrual/intimate-care product in any jurisdiction; methylmercury MLs are scoped to fish and seafood only.",
  jurisdictions_checked: "21 CFR 884 & EU MDR 2017/745 (device biocompatibility, no content ML); Germany BVL 2017, Health Canada, China NMPA 2015, ASEAN 2019, Korea MFDS 2024/2025, FDA 21 CFR 700 (cosmetic contaminant limits — none set MeHg)",
})

// A DEVICE subcategory: no sovereign content ML, so every total resolves to a mandatory control
// (Pb/Cd/tAs/tHg/Ni/Cr/Sn/Al) except methylmercury (not-material). materiality names the routed
// occurrence sources; `material` describes the article for the component-sampling method; `polymer`
// adds the antimony supplementary-leachable note and the organotin tin pathway.
function deviceSub({ name, slug, material, components, occ, polymer, occ_note }) {
  const method = (metal) => `Mandatory per-lot total-content analysis by microwave-assisted acid digestion and ICP-MS, with component-level sampling of the finished article (${components}). No sovereign sets a heavy-metal content limit for this device form, so no fixed numeric ceiling is published; any lot result is dispositioned under the HMTc control-and-escalation rule (ALARA tightening against the tightest available context + supplier corrective action). ${metal} is material for this device (${occ_note}).`
  const controlCell = (metal, occSources) => ({
    control: true,
    materiality_basis: occSources,
    rationale: `${metal} is present in this device class per routed occurrence evidence (${occSources}); no jurisdiction sets a ${metal} content limit for a menstrual or intimate-care device (medical-device law governs ISO 10993 biocompatibility, not content). The cell is held under mandatory analytical control, not declared not-material — a not-material determination would be contradicted by the occurrence evidence and would fail the substantiation gate.`,
    reference_method: method(metal),
  })
  const disp = {
    Pb: controlCell("Lead", occ.Pb),
    Cd: controlCell("Cadmium", occ.Cd),
    tAs: controlCell("Total arsenic", occ.tAs),
    iAs: REFLEX_iAs(null),
    tHg: controlCell("Total mercury", occ.tHg),
    MeHg: MeHg_NM("a cellulose/polymer intimate device"),
    Ni: controlCell("Nickel", occ.Ni),
    Cr: controlCell("Total chromium", occ.Cr),
    "Cr-VI": REFLEX_CrVI,
    Sn: controlCell("Tin", occ.Sn),
    Al: controlCell("Aluminium", occ.Al),
  }
  const sub = {
    name, slug, family: "device",
    native_basis: "mucosal material-content — total heavy-metal content of the finished article per unit mass, as placed on market (device basis; vulvovaginal mucosal and, for internal devices, prolonged internal contact). Not a dermal basis and not a leachate/migration number.",
    // scope_include is a sentinel that matches no register row: no jurisdiction sets a device
    // content ML, so every cell must fall through to its disposition.
    scope_include: ["__cat15_device_no_sovereign_content_limit__"],
    scope_exclude: [],
    // audit_scope matches device-specific terms only (none present in the register today): a
    // zero-match audit that becomes a live safety-net the day any government adds a device content ML.
    audit_scope: "tampon|menstrual (pad|cup|disc|product)|sanitary protection|sanitary napkin|panty liner|feminine hygiene (pad|device)|period underwear|intravaginal device",
    material, components, dispositions: disp,
  }
  if (polymer) {
    sub.supplementary_leachables = "Antimony (Sb) is monitored as a supplementary leachable on PET and polymer components (PET polycondensation uses an antimony-trioxide catalyst that leaches under prolonged contact; marcelis2024 measured antimony in intimate products). Sb is OUTSIDE the 10-analyte HMTc certification panel; its inclusion for polymer intimate devices is logged as a Step-0 panel-governance question."
  }
  return sub
}

// A COSMETIC subcategory: sovereign cosmetic contaminant limits apply, adopting the mucosal-contact
// tier for lead. Cd/tAs/tHg bind the strictest general-cosmetic value (direct regulatory-alignment);
// Ni binds the only sovereign cosmetic nickel limit; iAs/Cr/Cr-VI/Al are controls; Sn/MeHg not-material.
function cosmeticSub({ name, slug, form }) {
  const basis_note = "Cadmium, total arsenic and total mercury bind the strictest general-cosmetic sovereign value (German BVL 2017 = the strictest cosmetic tier for these three); no stricter mucosal-contact tier exists for them, so no further mucosal adjustment applies. Lead binds the stricter sovereign mucosal-contact tier (500 vs the general-cosmetic 2000 ug/kg), because vaginal mucosa is more permeable than the oral mucosa the toothpaste tier was written for."
  return {
    name, slug, family: "cosmetic",
    native_basis: `mucosal-contact cosmetic — finished product as sold, total content basis (${form}; vulvovaginal mucosal application). Read across the strictest sovereign mucosal-contact cosmetic contaminant tier, not the general dermal-cosmetic tier. Not a leachate/migration number.`,
    // Matches only general-cosmetic register rows (every one contains "cosmetic"); the special-form
    // rows — toothpaste, make-up, theater/carnival, clay-powder, eye/color makeup — do not contain
    // "cosmetic" in scope and are therefore never candidates. Belt-and-suspenders excludes anchor the
    // rare wrong-form row that does.
    scope_include: ["cosmetic"],
    scope_exclude: ["toothpaste", "^make-?up", "^eye makeup", "^colou?r makeup", "eye shadow", "clay as a raw material", "lip products"],
    audit_scope: "cosmetic",
    audit_exclude_scope: "toothpaste|make-?up|eye shadow|clay|lip products|eye-area",
    dispositions: {
      // Lead: mucosal-contact tier read-across (stricter than the general-cosmetic 2000).
      Pb: {
        source_id: "de_bvl2017_pb_toothpaste_500",
        label: "German BVL 2017 sovereign mucosal-contact cosmetic tier (toothpaste, 500 ug/kg)",
        mucosal_note: "Adopted over the general-cosmetic lead tier (2000 ug/kg) because vaginal mucosa is more permeable and bioavailable than the oral mucosa the toothpaste limit was written for; 500 ug/kg is the strictest sovereign cosmetic lead value for a mucosal-contact product.",
      },
      // Cd/tAs/tHg: direct regulatory-alignment to the strictest general-cosmetic value (BVL 2017).
      Cd: { basis_note },
      tAs: { basis_note },
      tHg: { basis_note },
      iAs: REFLEX_iAs("bounded by the total-arsenic cosmetic ceiling"),
      MeHg: MeHg_NM("an aqueous or leave-on intimate cosmetic"),
      // Ni: the only sovereign cosmetic nickel content limit (Korea MFDS 2025, non-makeup, 10000).
      Ni: { basis_note: "Nickel binds the only sovereign cosmetic nickel content limit (Korea MFDS 2025, cosmetic products other than eye/color makeup, 10000 ug/kg). Under the mucosal route the program additionally holds nickel to ALARA post-publication (a known contact sensitizer)." },
      Cr: {
        control: true,
        rationale: "No jurisdiction sets a total-chromium content limit for cosmetics; chromium can enter an intimate cosmetic as a trace contaminant of colorants and mineral raw materials. Held under a reflex screen (test every lot; ALARA), not declared not-material.",
        reference_method: "Total chromium by ICP-MS on each lot; reflex Cr(VI) speciation on any elevated total-chromium result.",
      },
      "Cr-VI": REFLEX_CrVI,
      Sn: {
        not_material: true, basis_class: "no-migration-pathway",
        rationale: "No jurisdiction sets a tin content limit for any cosmetic, and an aqueous surfactant or leave-on intimate cosmetic has no tin source: tin migrates into a product only from tinplate/can contact, which is absent for a bottled, tubed, or sachet cosmetic. No routed source reports tin in a feminine-cosmetic product. Rebuttable and audited against the register and routed corpus each build.",
        reference_method: null,
        regulatory_basis: "No cosmetic tin ML in any jurisdiction; no tinplate-contact pathway for a bottled/sachet intimate cosmetic.",
        jurisdictions_checked: "Germany BVL 2017; Health Canada; China NMPA 2015; ASEAN 2019; Korea MFDS 2024/2025; FDA 21 CFR 700",
      },
      Al: {
        control: true,
        rationale: "No jurisdiction sets an aluminium content limit for cosmetics; aluminium is a ubiquitous trace constituent of cosmetic raw materials and may be present at higher levels in feminine deodorants. This control governs CONTAMINANT aluminium under a reflex screen (ALARA on the mucosal route); a product formulated with an intentional aluminium active is out of scope for the aluminium contaminant cell and evaluated separately.",
        reference_method: "Total aluminium by ICP-MS on each lot; held under ALARA against the tightest available context.",
      },
    },
  }
}

// --- occurrence materiality strings (routed sources per device subcategory) --------------
// Panel metals established present, by routed source, per subcategory. Every device control cell
// cites the sources that make it material; discs and period underwear (fewer routed sources) carry
// an explicit device-class analogy where direct occurrence is thin.
const S = {
  shearston: "shearston2024 (Pb 60/60, Cd 60/60, tAs 57/60, Ni, Cr, tHg by ICP-MS across 30 tampons)",
  ica: "ica2024 (systematic review confirming Pb/Cd/tAs/tHg/Ni/Cr in tampons)",
  ellison: "ellison2026 (lead mass-balance across menstrual-fluid fractions)",
  carlin: "carlin2020 (Pb/Cd/tHg/Cr/tAs/Ni tampon chemistry)",
  nic: "nic-corcrain2025 (Pb, tAs leached across tampons, pads, cups and period underwear into simulated vaginal fluid)",
  marcelis: "marcelis2024 (full-panel screen incl. Al and Sn across tampons, pads, cups and other intimate products)",
}
const occTampon = { Pb: `${S.shearston}; ${S.ica}; ${S.ellison}; ${S.carlin}; ${S.nic}; ${S.marcelis}`, Cd: `${S.shearston}; ${S.ica}; ${S.carlin}; ${S.marcelis}`, tAs: `${S.shearston}; ${S.ica}; ${S.carlin}; ${S.nic}; ${S.marcelis}`, tHg: `${S.shearston}; ${S.ica}; ${S.carlin}; ${S.marcelis}`, Ni: `${S.shearston}; ${S.ica}; ${S.carlin}; ${S.marcelis}`, Cr: `${S.shearston}; ${S.ica}; ${S.carlin}; ${S.marcelis}`, Sn: `${S.marcelis}`, Al: `${S.marcelis}` }
const occPad = { Pb: `${S.nic}; ${S.marcelis}`, Cd: `${S.marcelis}`, tAs: `${S.nic}; ${S.marcelis}`, tHg: `${S.marcelis}`, Ni: `${S.marcelis}`, Cr: `${S.marcelis}`, Sn: `${S.marcelis}`, Al: `${S.marcelis}` }
const occCup = { Pb: `${S.nic}; ${S.marcelis}`, Cd: `${S.marcelis}`, tAs: `${S.nic}; ${S.marcelis}`, tHg: `${S.marcelis}`, Ni: `${S.marcelis}`, Cr: `${S.marcelis}`, Sn: `${S.marcelis}`, Al: `${S.marcelis}` }
const ANALOGY_CUP = "device-class analogy to menstrual cups (functionally identical intravaginal polymer device with prolonged mucosal contact; nic-corcrain2025 + marcelis2024 measured this metal in cups)"
const occDisc = { Pb: `${S.nic} (menstrual products incl. cups); ${ANALOGY_CUP}`, Cd: ANALOGY_CUP, tAs: `${S.nic}; ${ANALOGY_CUP}`, tHg: ANALOGY_CUP, Ni: ANALOGY_CUP, Cr: ANALOGY_CUP, Sn: `${S.marcelis}; ${ANALOGY_CUP}`, Al: `${S.marcelis}; ${ANALOGY_CUP}` }
const ANALOGY_TEXTILE = "textile-dyeing pathway (cadmium pigments, chromium mordants, nickel) and device-class analogy to internal menstrual products"
const occUnder = { Pb: `${S.nic}`, tAs: `${S.nic}`, Cd: ANALOGY_TEXTILE, tHg: ANALOGY_TEXTILE, Ni: ANALOGY_TEXTILE, Cr: ANALOGY_TEXTILE, Sn: "polyurethane-laminate organotin catalyst pathway", Al: "aluminosilicate pigments/mineral finishes and device-class analogy" }
const occOther = { Pb: `${S.marcelis}`, Cd: `${S.marcelis}`, tAs: `${S.marcelis}`, tHg: `${S.marcelis}`, Ni: `${S.marcelis}`, Cr: `${S.marcelis}`, Sn: `${S.marcelis}`, Al: `${S.marcelis}` }

const CONFIG = {
  panel: PANEL,
  subcategories: {
    "menstrual-tampons": deviceSub({
      name: "Menstrual tampons (scented/unscented; applicator tested as a distinct component)",
      slug: "menstrual-tampons",
      material: "cotton/rayon absorbent core, withdrawal string, and plastic or cardboard applicator",
      components: "absorbent core, withdrawal string, overwrap, and applicator — each sampled and tested as a distinct component; a plastic applicator is additionally screened for tin/antimony/colorant metals",
      occ: occTampon, polymer: true,
      occ_note: "measured in tampons by ICP-MS in the routed corpus",
    }),
    "menstrual-pads": deviceSub({
      name: "Menstrual pads (disposable, panty liners, intralabial pads, reusable menstrual pads)",
      slug: "menstrual-pads",
      material: "cellulose/superabsorbent-polymer core, polyolefin topsheet/backsheet, adhesive, and (for reusable pads) knit fabric layers",
      components: "absorbent core, topsheet, backsheet, adhesive, and any printed/dyed layer — each sampled and tested as a distinct component",
      occ: occPad, polymer: true,
      occ_note: "measured in pads by ICP-MS in the routed corpus",
    }),
    "menstrual-cups": deviceSub({
      name: "Menstrual cups (silicone/latex/other polymers)",
      slug: "menstrual-cups",
      material: "medical-grade silicone, TPE, or latex",
      components: "cup body, stem, and any pigment/colorant masterbatch — silicone cups additionally screened for residual organotin condensation-cure catalyst (tin)",
      occ: occCup, polymer: true,
      occ_note: "an intravaginal polymer device with prolonged mucosal contact; measured in cups in the routed corpus",
    }),
    "menstrual-discs": deviceSub({
      name: "Menstrual discs",
      slug: "menstrual-discs",
      material: "medical-grade silicone or TPE rim and polymer membrane",
      components: "rim, membrane, and any pigment/colorant masterbatch — silicone components additionally screened for residual organotin catalyst (tin) and PET components for antimony",
      occ: occDisc, polymer: true,
      occ_note: "an intravaginal polymer device with prolonged mucosal contact; material by device-class analogy to cups",
    }),
    "period-underwear-reusable-garments": deviceSub({
      name: "Period underwear and reusable menstrual garments",
      slug: "period-underwear-reusable-garments",
      material: "synthetic/cotton knit fabric, dyed absorbent gusset, and polyurethane or PTFE-free laminate barrier",
      components: "face fabric, absorbent gusset, laminate barrier, and dye/print layers — each sampled and tested as a distinct component",
      occ: occUnder, polymer: true,
      occ_note: "a dyed textile with a laminate barrier in prolonged vulvar contact; Pb/tAs measured by leaching in the routed corpus",
    }),
    "feminine-wipes": cosmeticSub({
      name: "Feminine wipes/towelettes",
      slug: "feminine-wipes",
      form: "impregnated wipe releasing a cosmetic lotion onto vulvar mucosa",
    }),
    "feminine-deodorants": cosmeticSub({
      name: "Feminine deodorants (leave-on and rinse-off)",
      slug: "feminine-deodorants",
      form: "leave-on or rinse-off cosmetic applied to vulvar mucosa",
    }),
    "douches-vaginal-irrigation": cosmeticSub({
      name: "Douches and vaginal irrigation solutions/apparatus components",
      slug: "douches-vaginal-irrigation",
      form: "rinse solution applied to the vaginal canal (FDA cosmetic scope for the solution)",
    }),
    "intimate-washes-cleansers": cosmeticSub({
      name: "Intimate washes/cleansers",
      slug: "intimate-washes-cleansers",
      form: "rinse-off surfactant cleanser applied to vulvar mucosa",
    }),
    "menstrual-intimate-products-other": deviceSub({
      name: "Other menstrual/intimate products (case-by-case)",
      slug: "menstrual-intimate-products-other",
      material: "mixed / case-by-case (routed to the device or cosmetic method by dominant material family on classification; pending that, the stricter device control applies)",
      components: "each material component sampled and tested distinctly; the catch-all defaults to the stricter applicable method until classified",
      occ: occOther, polymer: true,
      occ_note: "full-panel screen measured across intimate products in the routed corpus (marcelis2024)",
    }),
  },
}

// ============================================================================================
// DRIVER
// ============================================================================================
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const only = (args.get("only") || "").split(",").map((s) => s.trim()).filter(Boolean)
const quiet = args.has("quiet")
const outdir = args.get("outdir") || path.join(REPO, "data/workbench/standards/cat15-compiled")
const VERSION = "v1.0 (2026-08-13, initial compilation)"
const LINEAGE = "Initial Cat-15 Feminine Care government-limit standard (HMTc Method v2.0). Flagship mucosal-exposure category. Device subcategories (tampons, pads, cups, discs, period underwear, other) carry no sovereign heavy-metal content limit (medical-device law governs ISO 10993 biocompatibility, not content) and resolve to mandatory control on every occurrence- or pathway-established metal (Pb, Cd, tAs, tHg, Ni, Cr, Sn, Al; iAs and Cr-VI reflex-speciation controls); methylmercury is the sole not-material cell (no biological methylation pathway; bounded by the total-mercury control). Cosmetic subcategories (feminine wipes, deodorants, douches, intimate washes) read across the German BVL 2017 sovereign cosmetic contaminant limits, adopting the mucosal-contact (toothpaste) tier for lead (500 vs the general-cosmetic 2000 ug/kg) because vaginal mucosa is more permeable than the oral mucosa those limits were written for; Cd/tAs/tHg bind the strictest general-cosmetic value (100/500/100), nickel the only sovereign cosmetic Ni limit (Korea MFDS 2025 = 10000). Materiality anchored to shearston2024, ica2024, ellison2026, carlin2020, nic-corcrain2025, marcelis2024. Direction: toward the literature (CLAUDE.md Part 2/19)."
const METHOD = "HMTc Method v2.0 (government-limit default). Device forms carry no sovereign heavy-metal content limit, so every panel cell resolves to a mandatory analytical control or a substantiated not-material determination; no occurrence percentile is computed and no number is invented. Cosmetic forms read across the strictest sovereign mucosal-contact cosmetic contaminant limit. Two basis families (device content, cosmetic content) are never conflated, and neither is a leachate/migration number. Provenance vocabulary: {regulatory-alignment, read-across, not-material, control, ratchet}."

function main() {
  const register = parseCsv(fs.readFileSync(REGISTER_PATH, "utf8"))
  const byId = new Map(register.map((r) => [r.regulatory_limit_id, r]))
  fs.mkdirSync(outdir, { recursive: true })
  // Persist the effective config for the audit trail (numbers-free; disposition map only).
  fs.writeFileSync(path.join(REPO, "tools/standards/cat15-config.json"), JSON.stringify(CONFIG, null, 2))

  const slugs = only.length ? only : Object.keys(CONFIG.subcategories)
  let allDefects = 0, allWarnings = 0

  for (const slug of slugs) {
    const sub = CONFIG.subcategories[slug]
    if (!sub) { console.error(`!! no config for ${slug}`); allDefects++; continue }
    const cells = {}
    for (const a of PANEL) cells[a] = resolveCell(register, byId, sub, a)
    reconcileSpeciation(cells, "MeHg", "tHg", "Methylmercury", "total mercury")
    reconcileSpeciation(cells, "iAs", "tAs", "Inorganic arsenic", "total arsenic")

    const record = {
      slug, name: sub.name, category: 15, category_name: "Feminine Care",
      basis_family: sub.family, native_basis: sub.native_basis,
      exposure_pathway: "Vulvovaginal mucosal (more permeable and bioavailable than intact skin) and, for internal devices, prolonged internal contact",
      material: sub.material || null, components: sub.components || null,
      supplementary_leachables: sub.supplementary_leachables || null,
      variants: { default: cells },
      method: METHOD, provenance_vocabulary: [...ALLOWED_TAGS],
      version: VERSION, lineage_note: LINEAGE,
      generated_from: "data/evidence/regulatory_limits.csv",
      compiler: "tools/standards/compile-cat15.mjs",
    }

    const { defects, warnings } = verifyRecord(record, PANEL)
    record.verify = { defects, warnings, status: defects.length ? "FAIL" : "PASS" }
    allDefects += defects.length; allWarnings += warnings.length
    fs.writeFileSync(path.join(outdir, `${slug}.json`), JSON.stringify(record, null, 2))

    if (!quiet) {
      console.log(`\n### ${slug} — ${sub.name}\n    [${sub.family}] ${record.native_basis.slice(0, 90)}...`)
      for (const a of PANEL) {
        const c = cells[a]
        const v = c.value == null
          ? (c.type === "not_material" ? "n/m" : c.type === "control" ? "control" : c.type === "subsumed" ? `<=${c.subsumed_by}` : "GAP")
          : String(c.value)
        const src = c.type === "gov" ? c.binding_jurisdiction
          : c.type === "read_across" ? `RA ${c.source_jurisdiction}`
          : c.type === "subsumed" ? `bounded by ${c.subsumed_by} ${c.binding_total}`
          : c.type
        console.log(`    ${a.padEnd(6)} ${v.padStart(9)}   [${(c.provenance_tag || "—").padEnd(19)}] ${src}`)
        if (c.error) console.log(`      !! ${c.error}`)
      }
      for (const d of defects) console.log(`    !! DEFECT ${d}`)
      for (const w of warnings) console.log(`    ~~ warn  ${w}`)
    }
  }

  if (!quiet) {
    console.log(`\nwrote ${slugs.length} record(s) to ${path.relative(REPO, outdir)}/`)
    console.log(`verify: ${allDefects} defect(s), ${allWarnings} warning(s)`)
  }
  process.exit(allDefects ? 1 : 0)
}

main()
