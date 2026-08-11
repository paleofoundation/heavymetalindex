#!/usr/bin/env node
// build-cert-standard-pages.mjs — emit the government-tightest HMTc standard for
// infant formula as CUSTOM cert-site pages (content/standards/<slug>.md,
// custom_page: true) in the heavymetalcertified repo.
//
// WHY A SEPARATE GENERATOR (not the catalog template):
//   The catalog template (build-standards-pages.mjs) renders the pooled-occurrence
//   methodology — a "Pooled" column, P97/P45 framing. The infant-formula standard is
//   Method v3.0: the certification limit is THE STRICTEST GOVERNMENT MAXIMUM LEVEL IN
//   THE WORLD, adopt-lowest, no occurrence math. That derivation is a lookup against
//   sovereign law, so its page needs a "Strictest government" column and the
//   per-country derivation, not a pooled figure. The catalog generator already
//   reserves `custom_page: true` for exactly this case and lists these pages in the
//   Standards index without overwriting them.
//
// FIREWALL (CLAUDE.md Part 2): this writes to the CERT repo only. The values are
// sovereign government limits (public record) + the program's tiering; no wiki import.
// One-way citation OUT to the heavymetalindex.com literature baseline.
//
// Reads the same regulatory register the monograph uses, via the authoritative
// basis_class + soy_class tags, so the cert page and the Program Manual carry
// identical numbers by construction.

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const CERT = path.join(process.env.HOME, "Desktop/heavymetalcertified")
const OUT = path.join(CERT, "content/standards")
const RECON = 7
const rows = parse(fs.readFileSync(path.join(REPO, "data/evidence/regulatory_limits.csv"), "utf8"))

function parse(t) { const L = t.replace(/\r/g, "").trim().split("\n"); const H = sp(L[0]); return L.slice(1).map((l) => Object.fromEntries(sp(l).map((v, i) => [H[i], v]))) }
function sp(line) { const o = []; let c = "", q = false; for (const ch of line) { if (ch === '"') q = !q; else if (ch === "," && !q) { o.push(c); c = "" } else c += ch } o.push(c); return o.map((s) => s.replace(/^"|"$/g, "")) }
const n = (v) => { const x = Number(v); return Number.isFinite(x) ? x : null }
const draft = (x) => /draft|not for implementation/i.test((x.status || "") + " " + (x.notes || ""))
const FORM = rows.filter((x) => /formula|infant milk substitute/i.test(x.product_scope) &&
  !/cereal|complementary|weaning|transition|meal|juice/i.test(x.product_scope) && !draft(x) && x.basis_class)
const canned = (x) => /canned/i.test(x.product_scope)
const broadDairy = (x) => /milk powder and modified milk|general dairy|modified milk powder/i.test(x.product_scope)
const GOV = { EU: "EU", UK: "UK", CODEX: "Codex", CA: "Canada", CN: "China", IN: "India", BR: "Brazil", KR: "South Korea", GSO: "Gulf (GSO)", "AU-NZ": "Australia/NZ", US: "US-FDA" }
const COLS = Object.keys(GOV)
const TIER1 = new Set(["Pb", "Cd", "iAs", "Hg"])
const ANALYTES = [
  { sym: "Pb", disp: "Lead (Pb)", tok: ["Pb"] },
  { sym: "iAs", disp: "Inorganic arsenic (iAs)", tok: ["iAs"] },
  { sym: "Cd", disp: "Cadmium (Cd)", tok: ["Cd"] },
  { sym: "Hg", disp: "Mercury (tHg)", tok: ["tHg", "MeHg", "Hg"] },
  { sym: "Ni", disp: "Nickel (Ni)", tok: ["Ni"] },
  { sym: "Al", disp: "Aluminium (Al)", tok: ["Al"], keepSplit: true },
  { sym: "Sn", disp: "Tin (Sn)", tok: ["Sn"] },
  { sym: "Cr", disp: "Total chromium (Cr)", tok: ["Cr-total", "Cr"] },
]
const SUBCATS = {
  "powder-cow": { basis: "as_sold", soy: "non-soy" }, "powder-soy": { basis: "as_sold", soy: "soy" },
  "rtf-cow": { basis: "as_consumed", soy: "non-soy" }, "rtf-soy": { basis: "as_consumed", soy: "soy" },
}
const FORMS = [
  { key: "powder", slug: "infant-formula-powder", label: "Infant formula — powder", basis: "as_sold", subs: ["powder-cow", "powder-soy"] },
  { key: "rtf", slug: "infant-formula-ready-to-feed", label: "Infant formula — ready-to-feed", basis: "as_consumed", subs: ["rtf-cow", "rtf-soy"] },
]

function cell(country, toks, subKey) {
  const sub = SUBCATS[subKey]
  let cand = FORM.filter((x) => x.jurisdiction === country && toks.includes(x.metal_species) && (x.soy_class === "both" || x.soy_class === sub.soy))
  cand = cand.filter((x) => !canned(x)).filter((x) => !(broadDairy(x) && sub.basis === "as_consumed"))
  if (!cand.length) return null
  const fb = cand.every(broadDairy)
  const pick = (list) => { const s = list.filter((x) => x.soy_class === sub.soy); return s.length ? s : list }
  const direct = pick(cand.filter((x) => x.basis_class === sub.basis))
  if (direct.length) { const w = direct.reduce((m, x) => (n(x.value_ug_kg) < n(m.value_ug_kg) ? x : m)); return { v: n(w.value_ug_kg), conv: false, raw: n(w.value_ug_kg), rawbasis: sub.basis, fallback: fb } }
  const other = pick(cand); const w = other.reduce((m, x) => (n(x.value_ug_kg) < n(m.value_ug_kg) ? x : m)); const rawv = n(w.value_ug_kg)
  return { v: Math.round(sub.basis === "as_sold" ? rawv * RECON : rawv / RECON), conv: true, raw: rawv, rawbasis: w.basis_class, fallback: fb }
}
function pickSub(subKey, a) {
  const c = COLS.map((k) => ({ k, r: cell(k, a.tok, subKey) })).filter((x) => x.r)
  if (!c.length) return null
  const m = c.reduce((x, y) => (y.r.v < x.r.v ? y : x))
  return { v: m.r.v, gov: GOV[m.k], raw: m.r.raw, rawbasis: m.r.rawbasis, conv: m.r.conv, fallback: m.r.fallback }
}
function merged(form, a) {
  const picks = form.subs.map((s) => pickSub(s, a)).filter(Boolean)
  if (!picks.length) return null
  return picks.reduce((x, y) => (y.v < x.v ? y : x))
}

// ---- cert-site design tokens (copied from build-standards-pages.mjs for visual parity) ----
const H2S = 'style="font-family:Lora,serif;font-weight:400;font-size:30px;line-height:1.2;color:#2b1f1f;border-bottom:1px solid #e8e1db;padding-bottom:10px;margin:0 0 20px"'
const TH = "style=\"text-align:left;padding:11px 15px;font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:500;letter-spacing:.1em;text-transform:uppercase\""
const TD = "padding:13px 15px;vertical-align:top;border-bottom:1px solid #f2ece7"
const basisShort = { as_sold: "as-sold", as_consumed: "as-consumed" }
const govCol = (p) => p == null ? "&mdash;" : `${p.gov} &middot; ${p.raw}${p.conv ? ` ${basisShort[p.rawbasis]} &times;7` : ""}${p.fallback ? " (dairy)" : ""}`

function limitCell(form, a) {
  if (a.keepSplit) {
    const cow = pickSub(`${form.key}-cow`, a), soy = pickSub(`${form.key}-soy`, a)
    return { html: `${cow.v} cow / ${soy.v} soy`, gov: `${cow.gov} &middot; law's cow/soy split`, status: "published", rationale: "regulatory-alignment", split: true }
  }
  const p = merged(form, a)
  if (p == null) return { html: "&mdash;", gov: "&mdash;", status: "monitored", rationale: "no government limit &mdash; monitored, reflex speciation screen" }
  return { html: String(p.v), gov: govCol(p), status: "published", rationale: p.fallback ? "regulatory-alignment (broad-dairy fallback)" : "regulatory-alignment", p }
}

const today = new Date().toISOString().slice(0, 10)
const STD_VERSION = "3.0 (2026-08-04)"
const METHODOLOGY = "Strictest government maximum level worldwide, adopt-lowest (Method v3.0)"

for (const form of FORMS) {
  const cells = ANALYTES.map((a) => ({ a, c: limitCell(form, a) }))
  const firm = cells.filter((x) => x.c.status === "published").length

  // Master Limit Table
  const tdMono = `style="${TD};white-space:nowrap;color:#2b1f1f;font-family:'IBM Plex Mono',monospace"`
  const tdTxt = `style="${TD};color:#3f3a3a;line-height:1.5"`
  const tdMut = `style="${TD};color:#736b6b;line-height:1.5"`
  const tdPub = `style="${TD};font-family:'IBM Plex Mono',monospace;font-size:12px;color:#9f2727"`
  const tdDev = `style="${TD};font-family:'IBM Plex Mono',monospace;font-size:12px;color:#a9a1a1"`
  const limitRows = cells.map(({ a, c }, i) => {
    const z = i % 2 === 0 ? ' style="background:#fdfaf8"' : ""
    const tier = TIER1.has(a.sym) ? "Tier 1" : "Tier 2"
    const val = c.status === "published"
      ? `<span data-firm-ppb style="font-family:'IBM Plex Mono',monospace;font-weight:500;color:#2b1f1f">${c.html}</span>`
      : "&mdash;"
    const statusTd = c.status === "published" ? `<td ${tdPub}>published</td>` : `<td ${tdDev}>monitored</td>`
    return `      <tr${z}><td ${tdMono}>${a.sym}</td><td ${tdMut}>${tier}</td><td ${tdTxt}>${val}</td><td ${tdMut}>${c.gov}</td><td ${tdMut}>${c.rationale}</td>${statusTd}</tr>`
  }).join("\n")

  // Per-country derivation matrix (the "show your work"): one compact table per subcategory
  const matrixSection = form.subs.map((subKey) => {
    const soyLabel = subKey.endsWith("soy") ? "soy" : "cow-milk"
    const active = COLS.filter((k) => ANALYTES.some((a) => cell(k, a.tok, subKey)))
    const head = `<th ${TH}>Analyte</th>` + active.map((k) => `<th ${TH}>${GOV[k].replace("Australia/NZ", "AU-NZ").replace("Gulf (GSO)", "Gulf").replace("South Korea", "S.Korea")}</th>`).join("") + `<th ${TH}>Lowest</th>`
    const body = ANALYTES.map((a, i) => {
      const z = i % 2 === 0 ? ' style="background:#fdfaf8"' : ""
      const rowCells = active.map((k) => { const r = cell(k, a.tok, subKey); return `<td style="${TD};font-family:'IBM Plex Mono',monospace;font-size:12px;color:#3f3a3a">${r ? r.v + (r.conv ? "&times;7" : "") + (r.fallback ? "ᵈ" : "") : ""}</td>` }).join("")
      const p = pickSub(subKey, a)
      return `      <tr${z}><td style="${TD};color:#2b1f1f;font-family:'IBM Plex Mono',monospace;font-size:12px">${a.sym}</td>${rowCells}<td style="${TD};font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:600;color:#9f2727">${p ? p.v : "&mdash;"}</td></tr>`
    }).join("\n")
    return `  <h3 style="font-family:Lora,serif;font-weight:400;font-size:19px;color:#2b1f1f;margin:22px 0 10px">${form.label.split("—")[1].trim()}, ${soyLabel}</h3>
  <div style="overflow-x:auto"><table style="width:100%;font-size:13px;border:1px solid #e8e1db;min-width:44rem;border-collapse:collapse">
    <thead><tr style="background:#9f2727;color:#fff">${head}</tr></thead>
    <tbody>\n${body}\n    </tbody></table></div>`
  }).join("\n")

  const fm = [
    "---",
    `title: "${form.label} — HMTc Standard"`,
    "type: standard",
    "custom_page: true",
    `firm_analytes: ${firm}`,
    `description: "The HMTc certification standard for ${form.label.toLowerCase()}: each limit is the strictest heavy-metal maximum level set by any government in the world, in the product's native basis. Derived by lookup against sovereign law — no occurrence percentiles."`,
    "category: 1",
    'category_name: "Infant and Child Foods"',
    `product_slug: ${form.slug}`,
    `subcategory: "${form.label}"`,
    `native_basis: ${form.basis}`,
    `standard_version: "${STD_VERSION}"`,
    `methodology_version: "${METHODOLOGY}"`,
    "variant_type: independent",
    "hmi_literature_link: https://heavymetalindex.com/products/infant-formula-powder",
    `effective_date: ${today}`,
    "scholar_eligible: true",
    "audience: [regulator, brand-legal, retailer-compliance, certifier]",
    "snapshot:",
    `  - { k: "Analytes published", v: "${firm} / ${ANALYTES.length}" }`,
    '  - { k: "Basis of the limit", v: "Strictest government worldwide" }',
    `  - { k: "Native basis", v: "${basisShort[form.basis]}" }`,
    `  - { k: "Standard version", v: "${STD_VERSION}" }`,
    "connections:",
    '  - { label: "How limits are derived", href: "/program/structure" }',
    '  - { label: "Program Manuals", href: "/manuals" }',
    '  - { label: "Verify a certificate", href: "/verify" }',
    '  - { label: "Heavy Metal Index — literature baseline", href: "https://heavymetalindex.com/products/infant-formula-powder" }',
    "---",
    "",
  ].join("\n")

  const body = `<section id="audiences" style="margin-bottom:52px">
  <h2 ${H2S}>Who this standard is for</h2>
  <p style="font-size:13.5px;line-height:1.7;color:#736b6b;margin:0 0 20px;max-width:84ch">Four audiences read this page differently. Each has a route through it.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(17rem,1fr));gap:1px;background:#e8e1db;border:1px solid #e8e1db">
    <div style="background:#fffdfb;padding:18px 19px"><div style="font-family:Lora,serif;font-size:18px;color:#2b1f1f;margin-bottom:8px">Brand regulatory affairs and QA</div><p style="font-size:14px;line-height:1.7;color:#3f3a3a;margin:0">Read the Master Limit Table and the per-country derivation. Every value is a sovereign government maximum level; the derivation shows which government sets it and that it is the lowest in force anywhere.</p></div>
    <div style="background:#fffdfb;padding:18px 19px"><div style="font-family:Lora,serif;font-size:18px;color:#2b1f1f;margin-bottom:8px">Retailer quality and compliance</div><p style="font-size:14px;line-height:1.7;color:#3f3a3a;margin:0">Read the Master Limit Table. The mark means the brand tested at or below every value in it, in the product&rsquo;s native basis &mdash; each value at or below the strictest law on earth.</p></div>
    <div style="background:#fffdfb;padding:18px 19px"><div style="font-family:Lora,serif;font-size:18px;color:#2b1f1f;margin-bottom:8px">Regulators &mdash; FDA, EFSA, state AGs</div><p style="font-size:14px;line-height:1.7;color:#3f3a3a;margin:0">Each limit is the strictest maximum level any government sets worldwide for this product, converted to the native basis and adopted as the single category number. There is no novel methodology to contest: the standard is a lookup against sovereign law.</p></div>
    <div style="background:#fffdfb;padding:18px 19px"><div style="font-family:Lora,serif;font-size:18px;color:#2b1f1f;margin-bottom:8px">Adversarial readers &mdash; plaintiff&rsquo;s experts, competing bodies</div><p style="font-size:14px;line-height:1.7;color:#3f3a3a;margin:0">The per-country table below lists every government&rsquo;s limit; the published value is the lowest, and nothing is asserted that a sovereign government has not already put in force. Cadmium and nickel adopt the lower of the law&rsquo;s cow/soy split; aluminium keeps the split because soy formula is inherently aluminium-rich.</p></div>
  </div>
</section>

<section id="limits" style="margin-bottom:52px">
  <h2 ${H2S}>Master Limit Table</h2>
  <p style="font-size:11.5px;line-height:1.55;color:#a9a1a1;max-width:84ch;margin:0 0 14px">All values in ppb (&micro;g/kg), ${basisShort[form.basis]}. Each HMTc limit is the strictest government maximum level in the world for this product, in the native basis. The &ldquo;Strictest government&rdquo; column names the binding jurisdiction and its stated value; where its limit is set in the other basis it is converted across the 1:7 reconstitution ratio (&times;7). &ldquo;Monitored&rdquo; means no government sets a limit for that analyte in formula &mdash; the program screens it (reflex speciation) but publishes no number where none exists in law. A brand meeting every published value on a like-for-like basis qualifies for the mark.</p>
  <div style="overflow-x:auto">
  <table style="width:100%;font-size:13.5px;border:1px solid #e8e1db;min-width:48rem;border-collapse:collapse">
    <thead><tr style="background:#9f2727;color:#fff"><th ${TH}>Analyte</th><th ${TH}>Tier</th><th ${TH}>HMTc limit</th><th ${TH}>Strictest government</th><th ${TH}>Rationale</th><th ${TH}>Status</th></tr></thead>
    <tbody>
${limitRows}
    </tbody>
  </table>
  </div>
</section>

<section id="derivation" style="margin-bottom:52px">
  <h2 ${H2S}>Per-country derivation</h2>
  <p style="font-size:13.5px;line-height:1.7;color:#736b6b;margin:0 0 6px;max-width:84ch">Every government&rsquo;s infant-formula limit, normalised to this product&rsquo;s basis so the columns compare directly. &times;7 marks a value converted across the reconstitution boundary; ᵈ marks a broad-dairy fallback where no formula-specific limit exists. The published HMTc limit is the lowest value in each row. The cow-milk and soy formulations are an internal calculation step; the published standard adopts the lower value (aluminium excepted).</p>
${matrixSection}
</section>

<section id="cite">
  <h2 ${H2S}>Cite this standard</h2>
  <div style="border:1px solid #e8e1db;background:#fffdfb">
    <div style="padding:11px 15px;border-bottom:1px solid #e8e1db;background:#fdf4f3;font-family:'IBM Plex Mono',monospace;font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:#9f2727">Reuse this page</div>
    <div style="padding:14px 15px">
      <p style="font-family:'IBM Plex Mono',monospace;font-size:11px;line-height:1.75;color:#5a4141;margin:0 0 14px">Pendergrass, K. &ldquo;${form.label}.&rdquo; In Heavy Metal Tested &amp; Certified (HMTc) Infant and Child Foods standard, version ${STD_VERSION}. Institute of Contaminant Standards (ICS), 2026.</p>
      <p style="font-size:11.5px;line-height:1.55;color:#a9a1a1;margin:0">The evidence each limit is applied to lives on the independent <a href="https://heavymetalindex.com/products/infant-formula-powder" style="color:#1c43ad">Heavy Metal Index</a>; HMTc cites it one way and never the reverse. HMTc standards are living, versioned documents; this page reflects ${STD_VERSION}. The threshold-setting methodology is described in <a href="/program/structure" style="color:#1c43ad">Program structure</a>.</p>
    </div>
  </div>
</section>
`
  fs.mkdirSync(OUT, { recursive: true })
  fs.writeFileSync(path.join(OUT, `${form.slug}.md`), fm + body, "utf8")
  console.log(`wrote ${path.relative(CERT, path.join(OUT, form.slug + ".md"))} — ${firm}/${ANALYTES.length} firm`)
}
