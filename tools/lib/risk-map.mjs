// Shared combination logic for the supply-chain risk map: "given a formula's
// ingredient list, which ingredients drive each metal's risk, and what does the
// cited literature say." Pure (no I/O) so it is reused by:
//   - api/risk-map.mjs              (runtime, arbitrary ingredient lists)
//   - tools/build-category-risk-maps.mjs (precompute per locked category)
//   - tools/lib/risk-map.test.mjs   (unit tests)
//
// Defensive-sourcing tool, not a pass/fail: it ranks where a brand's heavy-metal
// exposure comes from in its own bill of materials and cites the ingredient
// evidence behind each rank. It sets no threshold.

// Metal display order (HMTc-relevant first). contamination.json carries Cr as
// total chromium (not Cr-VI) and has no MeHg; those simply do not appear when
// the data is absent, which is the honest outcome.
export const METAL_ORDER = ["Pb", "Cd", "iAs", "tAs", "tHg", "MeHg", "Ni", "Al", "Cr", "Cr-VI", "Sn", "U"]
export const METAL_LABEL = {
  Pb: "Lead", Cd: "Cadmium", iAs: "Arsenic (inorganic)", tAs: "Arsenic (total)",
  tHg: "Mercury (total)", MeHg: "Mercury (methyl)", Ni: "Nickel", Al: "Aluminum",
  Cr: "Chromium (total)", "Cr-VI": "Chromium (hexavalent)", Sn: "Tin", U: "Uranium",
}

const FORM_STOPLIST = new Set([
  "powder", "powdered", "liquid", "based", "ready", "rtf", "dried", "dry", "fresh", "frozen",
  "whole", "ground", "raw", "puree", "purees", "pureed", "juice", "milk", "drink", "beverage",
  "formula", "cereal", "cereals", "snack", "snacks", "teething", "food", "foods", "meal", "meals",
  "mixed", "mix", "vitamin", "mineral", "premix", "protein", "source", "concentrate", "concentrated",
  "infant", "baby", "child", "children", "toddler", "non", "free", "added", "single", "ingredient",
  "plant", "product", "products", "finished", "low", "reduced", "fat", "skim", "semi",
])

function norm(s) {
  return String(s || "").trim().toLowerCase().replace(/\s+/g, "-")
}
function distinctiveTokens(slug) {
  const out = new Set()
  for (const t of String(slug || "").toLowerCase().split(/[^a-z0-9]+/)) {
    if (t.length < 3 || FORM_STOPLIST.has(t)) continue
    out.add(t)
  }
  return out
}

// Build a resolver over the contamination dataset records.
export function buildContaminationIndex(records) {
  const bySlug = new Map()
  const byAlias = new Map()
  for (const ing of records) {
    bySlug.set(ing.ingredient, ing)
    byAlias.set(norm(ing.ingredient), ing)
    byAlias.set(norm(ing.title), ing)
    for (const a of ing.aliases || []) byAlias.set(norm(a), ing)
  }
  return {
    bySlug,
    records,
    resolve(query) {
      const q = norm(query)
      if (bySlug.has(query)) return { ingredient: bySlug.get(query), match: "slug" }
      if (byAlias.has(q)) return { ingredient: byAlias.get(q), match: "alias" }
      // distinctive-token containment: an ingredient's commodity tokens are all
      // present in the query, i.e. the free-text query NAMES that commodity
      // (e.g. "organic brown rice" -> rice). Prefer the most specific (longest)
      // matching ingredient so "rice flour" beats "rice" when both qualify.
      const qTok = distinctiveTokens(q)
      if (qTok.size) {
        let best = null
        for (const ing of records) {
          const it = distinctiveTokens(ing.ingredient)
          if (!it.size) continue
          let all = true
          for (const t of it) if (!qTok.has(t)) { all = false; break }
          if (all) {
            if (!best || ing.ingredient.length > best.ingredient.length) best = ing
          }
        }
        if (best) return { ingredient: best, match: "token" }
      }
      return null
    },
  }
}

function riskValue(sub) {
  // The defensible "how high can this go" figure: p95 when present, else the
  // upper end of the typical range.
  if (sub == null) return null
  if (typeof sub.p95_ppb === "number" && sub.p95_ppb > 0) return sub.p95_ppb
  const t = sub.typical_ppb
  if (Array.isArray(t) && t.length) {
    const hi = Number(t[t.length - 1])
    if (Number.isFinite(hi) && hi > 0) return hi
  }
  if (typeof t === "number" && t > 0) return t
  return null
}

function isPopulated(sub) {
  return sub && sub.status && sub.status !== "pending"
}

// Build the risk map for a list of ingredient queries.
//   queries: string[] (slugs / names / aliases)
//   index:   from buildContaminationIndex
//   opts.canonicalBase: prefix for page_url fallback
export function buildRiskMap(queries, index, opts = {}) {
  const inputs = []
  const resolved = []
  const unresolved = []
  for (const q of queries) {
    const hit = index.resolve(q)
    if (hit) {
      inputs.push({ query: q, resolved_slug: hit.ingredient.ingredient, title: hit.ingredient.title, match: hit.match })
      resolved.push(hit.ingredient)
    } else {
      inputs.push({ query: q, resolved_slug: null, match: "unresolved" })
      unresolved.push(q)
    }
  }

  // Collect the metals that any resolved ingredient has populated.
  const metalsPresent = new Set()
  for (const ing of resolved) {
    for (const [m, sub] of Object.entries(ing.metals || {})) {
      if (isPopulated(sub) && riskValue(sub) != null) metalsPresent.add(m)
    }
  }
  const orderedMetals = [
    ...METAL_ORDER.filter((m) => metalsPresent.has(m)),
    ...[...metalsPresent].filter((m) => !METAL_ORDER.includes(m)).sort(),
  ]

  const metals = {}
  for (const metal of orderedMetals) {
    const drivers = []
    for (const ing of resolved) {
      const sub = (ing.metals || {})[metal]
      const rv = isPopulated(sub) ? riskValue(sub) : null
      if (rv == null) continue
      drivers.push({
        ingredient: ing.ingredient,
        title: ing.title,
        page_url: ing.page_url || `${opts.canonicalBase || ""}/ingredients/${ing.ingredient}`,
        risk_ppb: rv,
        typical_ppb: sub.typical_ppb ?? null,
        p95_ppb: sub.p95_ppb ?? null,
        confidence: sub.confidence ?? null,
        n_studies: sub.n_studies ?? null,
      })
    }
    if (!drivers.length) continue
    drivers.sort((a, b) => b.risk_ppb - a.risk_ppb || a.ingredient.localeCompare(b.ingredient))
    const total = drivers.reduce((s, d) => s + d.risk_ppb, 0)
    for (const d of drivers) d.share = total > 0 ? Math.round((d.risk_ppb / total) * 1000) / 1000 : null
    metals[metal] = {
      label: METAL_LABEL[metal] || metal,
      top_driver: drivers[0].ingredient,
      top_driver_share: drivers[0].share,
      driver_count: drivers.length,
      drivers,
    }
  }

  return {
    input_count: queries.length,
    resolved_count: resolved.length,
    inputs,
    unresolved,
    metals_ranked: Object.keys(metals),
    metals,
  }
}
