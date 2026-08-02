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

export type RelLink = {
  href: string
  label: string
  cat: string
  outbound: boolean
  // Position in this page's own link order. Document order is a real relevance
  // signal — the first metal Lead links to is cadmium, the metal it actually
  // discusses — whereas sorting alphabetically put "Aluminum" at the top of
  // almost every page on the site simply by winning the alphabet.
  order: number
  // False for directory/index pages. Those carry no `type:` frontmatter, which
  // is what separates a topical page from a navigation aid: "Regulations by
  // jurisdiction" is a list, not a connection.
  topical: boolean
}

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
  const typeBySlug = new Map<string, string>()
  for (const f of allFiles) {
    if (!f.slug) continue
    slugBySimple.set(simplifySlug(f.slug), f.slug)
    const t = f.frontmatter?.title
    if (t) titleBySlug.set(f.slug, String(t))
    const ty = (f.frontmatter as any)?.type
    if (ty) typeBySlug.set(f.slug, String(ty))
  }

  // Direction is tracked, not just membership. A page this one LINKS TO is a
  // connection its own author asserted; a page that merely links here is
  // somebody else's assertion, and on a hub page like a metal there are
  // hundreds of those. Collapsing both into one undifferentiated set is what
  // put "Beet" and "All-purpose cleaners" in Lead's rail.
  const outbound = new Set<string>()
  const orderOf = new Map<string, number>()
  for (const l of fileData.links ?? []) {
    const sl = simplifySlug(l as never)
    outbound.add(sl)
    if (!orderOf.has(sl)) orderOf.set(sl, orderOf.size)
  }
  const candidates = new Set<string>(outbound)
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
      if (m) {
        const slug = simplifySlug(m[1].trim().replace(/^\/+/, "") as never)
        candidates.add(slug)
        // Declared in this page's own frontmatter, so it is this page's
        // assertion too.
        outbound.add(slug)
      }
    }
  }

  for (const cand of candidates) {
    if (cand === simple) continue
    const cat = categoryOf(cand)
    if (!GROUP_KEYS.has(cat)) continue // drops sources/, tags/, self-index, etc.
    const realSlug = slugBySimple.get(cand) ?? (cand as string)
    const label = (titleBySlug.get(realSlug) ?? cand.split("/").pop() ?? cand).toString()
    if (!buckets.has(cat)) buckets.set(cat, [])
    buckets
      .get(cat)!
      .push({
        href: resolveRelative(mySlug, realSlug as never),
        label,
        cat,
        outbound: outbound.has(cand),
        order: orderOf.get(cand) ?? Number.MAX_SAFE_INTEGER,
        topical: typeBySlug.has(realSlug),
      })
  }

  // Alphabetical, deliberately. This is the order the in-body "See also" block
  // renders in, and it is a browse aid where alphabetical is the useful order.
  // Relevance ranking belongs to the CONSUMER, not to this shared traversal:
  // the rail sorts its own picks by `order` and filters on `topical`. An
  // earlier version sorted outbound-first here and silently reordered See also
  // on every page as a side effect of a rail change.
  for (const list of buckets.values())
    list.sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: "base" }))

  return buckets
}
