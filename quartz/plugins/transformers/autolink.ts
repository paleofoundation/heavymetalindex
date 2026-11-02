import { QuartzTransformerPlugin } from "../types"
import { Root, Text, ElementContent } from "hast"
import { GENERATED_TERMS } from "./autolink-terms.generated"
import { FullSlug, stripSlashes, transformLink, resolveRelative, simplifySlug } from "../../util/path"

// Auto-link the first prose mention in each section of a concept (metal, ingredient, product,
// regulation, regulator) to its page, so the corpus gains the high-weight
// *in-content contextual* links that a "See also" nav block can't provide (audit
// finding: pages linked "up" to sources but not "laterally/down" to concepts).
// Runs after authored links and public presentation are resolved. This also
// recovers clear concept mentions from obsolete links rendered as plain text.
// Inserted links are resolved and added to the same outgoing graph directly.
//
// PRECISION FIRST — this is a defensibility-critical reference, so a wrong link
// is worse than a missing one:
//   - Curated, UNAMBIGUOUS vocabulary only. Bare ambiguous words (lead, tin,
//     iron, mercury, nickel, copper, gold, silver, zinc, cobalt, titanium) are
//     deliberately excluded — "lead to", "tin can", "iron-rich" must not link.
//     They are already the most explicitly-linked terms and lose nothing.
//     "methylmercury" and "inorganic arsenic" recover the high-value Hg/As
//     links unambiguously.
//   - The topical-page/regulation/regulator vocabulary is generated from
//     page frontmatter (title + aliases) by tools/build-autolink-terms.mjs, which
//     admits reviewed food names only when they have their own eligible page.
//     Ambiguous reagent words (water, salt) require specific phrases (drinking
//     water, table salt); competing destinations are withheld.
//   - First mention per target per section, in reading order.
//     A later authored table/citation link must not hide an earlier prose link.
//   - Skips headings, existing links, and code; respects explicit links.
//   - Targets validated against the real corpus (never links a missing page).

// Curated metal vocabulary. Kept by hand (not generated) because the sub-species
// mappings (inorganic arsenic -> arsenic-inorganic, methylmercury -> mercury-methyl)
// aren't derivable from a title, and the bare-word exclusions above are load-bearing.
const METALS: Record<string, string> = {
  "inorganic arsenic": "metals/arsenic-inorganic",
  "total arsenic": "metals/arsenic-total",
  "total mercury": "metals/mercury-total",
  "hexavalent chromium": "metals/chromium-hexavalent",
  "chromium(vi)": "metals/chromium-hexavalent",
  "chromium (vi)": "metals/chromium-hexavalent",
  "inorganic tin": "metals/tin-inorganic",
  methylmercury: "metals/mercury-methyl",
  molybdenum: "metals/molybdenum",
  manganese: "metals/manganese",
  aluminium: "metals/aluminum",
  aluminum: "metals/aluminum",
  tellurium: "metals/tellurium",
  palladium: "metals/palladium",
  beryllium: "metals/beryllium",
  vanadium: "metals/vanadium",
  chromium: "metals/chromium",
  antimony: "metals/antimony",
  thallium: "metals/thallium",
  cadmium: "metals/cadmium",
  arsenic: "metals/arsenic",
  uranium: "metals/uranium",
  barium: "metals/barium",
  cesium: "metals/cesium",
}

// Generated vocabulary merged under the curated metals map (metals win on any
// key collision). Keys are lowercased; the runtime match is case-insensitive.
const TERMS: Record<string, string> = { ...GENERATED_TERMS, ...METALS }

const SKIP_TAGS = new Set([
  "a",
  "code",
  "pre",
  "kbd",
  "script",
  "style",
  "svg",
  "math",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  // Interactive / form controls: an <a> nested in a <button> is invalid HTML
  // and hijacks the control's own click (e.g. the /ask example-question buttons,
  // whose text mentions turmeric, cadmium, cocoa …). Never autolink into these.
  "button",
  "textarea",
  "label",
  "select",
  "option",
  "summary",
])

const REFERENCE_SECTIONS = new Set(["references", "works cited", "sources", "update history"])

function nodeText(node: any): string {
  return node.type === "text" ? node.value : (node.children ?? []).map(nodeText).join("")
}

function normalize(slug: string): string {
  return slug
    .replace(/^\/+/, "")
    .replace(/[?#].*$/, "")
    .replace(/\/$/, "")
    .replace(/\/index$/, "")
}

function collectLinkedSlugs(
  node: any,
  into: Set<string>,
  curSlug: FullSlug,
  allSlugs: FullSlug[],
): void {
  if (node?.type === "element") {
    if (node.tagName === "a" && typeof node.properties?.href === "string") {
      const href = node.properties.href as string
      if (!/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) {
        // Use the same resolution as CrawlLinks, including short wikilinks,
        // .md extensions and ../ paths. Plain string stripping misses these.
        const dest = transformLink(curSlug, href, { strategy: "shortest", allSlugs })
        const url = new URL(dest, `https://hmi.invalid/${stripSlashes(curSlug, true)}`)
        into.add(normalize(decodeURIComponent(url.pathname)))
      }
    }
  }
  // HAST starts with a Root, not an Element. Traversal must start there too.
  for (const c of node.children ?? []) collectLinkedSlugs(c, into, curSlug, allSlugs)
}

function walk(
  node: any,
  blocked: boolean,
  repl: (t: Text) => ElementContent[] | null,
  recordLink: (node: any) => void,
  startSection: () => void,
): void {
  if (!node.children) return
  const out: ElementContent[] = []
  let referenceSection = false
  for (const child of node.children) {
    if (child.type === "element" && child.tagName === "h2") {
      referenceSection = REFERENCE_SECTIONS.has(nodeText(child).trim().toLowerCase())
    }
    if (!blocked && !referenceSection && child.type === "element" &&
      (child.tagName === "h2" || child.tagName === "h3")) startSection()
    if (child.type === "text" && !blocked && !referenceSection) {
      const replaced = repl(child)
      out.push(...(replaced ?? [child]))
    } else {
      if (child.type === "element") {
        if (child.tagName === "a") recordLink(child)
        // Every Quick Read stays visually quiet; authored source citations survive.
        const classes = child.properties?.className
        const quickRead = child.properties?.dataHmiQuickRead !== undefined ||
          (Array.isArray(classes) ? classes.includes('hmi-quick-read') : String(classes ?? '').split(/\s+/).includes('hmi-quick-read')) ||
          /(?:^|-)quick-read$/.test(String(child.properties?.id ?? ''))
        walk(child, blocked || referenceSection || quickRead || SKIP_TAGS.has(child.tagName), repl, recordLink, startSection)
      }
      out.push(child)
    }
  }
  node.children = out
}

export const AutoLink: QuartzTransformerPlugin = () => {
  return {
    name: "AutoLink",
    htmlPlugins(ctx) {
      const allSlugs = new Set((ctx.allSlugs ?? []) as string[])
      const terms = Object.keys(TERMS)
      // Longest term first so "inorganic arsenic" wins over "arsenic".
      terms.sort((a, b) => b.length - a.length)
      const pattern =
        terms.length > 0
          ? new RegExp(
              `(?<![\\p{L}\\p{N}_])(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "\\s+")).join("|")})(?![\\p{L}\\p{N}_])`,
              "giu",
            )
          : null

      return [
        () => (tree: Root, file: any) => {
          if (!pattern) return
          const curSlug = (file.data.slug ?? "") as string
          if (curSlug === "index" || curSlug.startsWith("tags/")) return
          // Explicit opt-out for a page whose authored link structure must be
          // preserved. Narrative reviews otherwise use the same wiki defaults.
          if ((file.data.frontmatter as any)?.autolink === false) return

          const linkedSlugs = new Set<string>([normalize(curSlug)]) // never self-link
          const outgoing = new Set(file.data.links ?? [])

          walk(tree, false, (textNode: Text): ElementContent[] | null => {
            const value = textNode.value
            pattern.lastIndex = 0
            const parts: ElementContent[] = []
            let last = 0
            let any = false
            let m: RegExpExecArray | null
            while ((m = pattern.exec(value)) !== null) {
              const slug = TERMS[m[1].toLowerCase().replace(/\s+/g, " ")]
              // Match the complete vocabulary, then validate the destination.
              // If a species page is absent, consume the whole phrase without
              // falling back to its shorter parent (inorganic arsenic → arsenic).
              if (!slug || !allSlugs.has(slug)) continue
              const norm = normalize(slug)
              if (linkedSlugs.has(norm)) continue // self or already linked
              if (m.index > last) parts.push({ type: "text", value: value.slice(last, m.index) })
              parts.push({
                type: "element",
                tagName: "a",
                properties: {
                  href: resolveRelative(curSlug as FullSlug, slug as FullSlug),
                  className: ["hmi-autolink", "internal", "alias"],
                  "data-slug": slug,
                },
                children: [{ type: "text", value: m[0] }],
              })
              linkedSlugs.add(norm)
              outgoing.add(simplifySlug(slug as FullSlug))
              last = m.index + m[0].length
              any = true
            }
            if (!any) return null
            if (last < value.length) parts.push({ type: "text", value: value.slice(last) })
            return parts
          }, (node) => collectLinkedSlugs(node, linkedSlugs, curSlug as FullSlug, ctx.allSlugs), () => {
            linkedSlugs.clear()
            linkedSlugs.add(normalize(curSlug))
          })
          file.data.links = [...outgoing]
        },
      ]
    },
  }
}
