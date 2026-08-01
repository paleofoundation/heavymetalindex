import { QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug } from "../util/path"

// The bidirectional concept graph for a page, extracted from RelatedPages so
// the right rail's "Connections" block and the in-body "See also" block are
// computed from ONE traversal rather than two that can drift apart.
//
// Both directions are surfaced (pages this one links to, AND pages that link to
// it) because the corpus links upward richly and laterally almost not at all:
// only 10% of metal pages linked to any ingredient, though dozens of ingredient
// pages point at each metal. Sources are excluded — they are the evidence,
// reached through inline citations, not lateral navigation.

export const GROUPS: { key: string; label: string }[] = [
  { key: "metals", label: "Metals" },
  { key: "ingredients", label: "Ingredients" },
  { key: "products", label: "Products" },
  { key: "regulations", label: "Regulations" },
  { key: "synthesis", label: "Synthesis" },
  { key: "mitigation", label: "Mitigation" },
]
export const GROUP_KEYS = new Set(GROUPS.map((g) => g.key))

export type RelLink = { href: string; label: string; cat: string }

function categoryOf(slug: string): string {
  return (slug ?? "").split("/")[0]
}

// Inbound-link index, built once per build from allFiles (the same array
// reference is shared across every page render), so this is O(N) overall
// rather than O(N^2). Re-keyed if allFiles changes (dev watch).
let cachedFiles: unknown = null
let cachedIndex: Map<string, Set<string>> | null = null
function inboundIndex(allFiles: QuartzComponentProps["allFiles"]): Map<string, Set<string>> {
  if (cachedIndex && cachedFiles === allFiles) return cachedIndex
  const map = new Map<string, Set<string>>()
  for (const f of allFiles) {
    const from = f.slug
    if (!from) continue
    for (const l of f.links ?? []) {
      const target = simplifySlug(l as never)
      if (!map.has(target)) map.set(target, new Set())
      map.get(target)!.add(from)
    }
  }
  cachedFiles = allFiles
  cachedIndex = map
  return map
}

// Bucketed related links, keyed by concept category, each list sorted by label.
export function relatedByCategory({
  fileData,
  allFiles,
}: Pick<QuartzComponentProps, "fileData" | "allFiles">): Map<string, RelLink[]> {
  const buckets = new Map<string, RelLink[]>()
  const mySlug = fileData.slug
  if (!mySlug) return buckets
  const simple = simplifySlug(mySlug)

  const titleBySlug = new Map<string, string>()
  const slugBySimple = new Map<string, string>()
  for (const f of allFiles) {
    if (!f.slug) continue
    slugBySimple.set(simplifySlug(f.slug), f.slug)
    const t = f.frontmatter?.title
    if (t) titleBySlug.set(f.slug, String(t))
  }

  const candidates = new Set<string>()
  for (const l of fileData.links ?? []) candidates.add(simplifySlug(l as never))
  for (const from of inboundIndex(allFiles).get(simple) ?? [])
    candidates.add(simplifySlug(from as never))
  // Curated frontmatter cross-references (rich on synthesis pages, where the
  // related ingredients/products are declared but may not be reciprocated in
  // the rendered link graph). Metal symbols like "Pb" carry no [[...]].
  for (const key of GROUP_KEYS) {
    const v = fileData.frontmatter?.[key]
    const arr = Array.isArray(v) ? v : v != null ? [v] : []
    for (const item of arr) {
      const m = String(item).match(/\[\[([^\]\|#]+)/)
      if (m) candidates.add(simplifySlug(m[1].trim().replace(/^\/+/, "") as never))
    }
  }

  for (const cand of candidates) {
    if (cand === simple) continue
    const cat = categoryOf(cand)
    if (!GROUP_KEYS.has(cat)) continue // drops sources/, tags/, self-index, etc.
    const realSlug = slugBySimple.get(cand) ?? (cand as string)
    const label = (titleBySlug.get(realSlug) ?? cand.split("/").pop() ?? cand).toString()
    if (!buckets.has(cat)) buckets.set(cat, [])
    buckets.get(cat)!.push({ href: resolveRelative(mySlug, realSlug as never), label, cat })
  }

  for (const list of buckets.values())
    list.sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: "base" }))

  return buckets
}
