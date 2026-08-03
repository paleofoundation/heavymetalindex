import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

// v3 SECTION LABELS — rename body headings to v3's, without touching content.
//
// THE FINDING THIS IS BUILT ON. The acceptance gate reported v3's metal
// sections MISSING on /metals/lead — "How it enters food", "Where it is found",
// "Microbiome effects", "Questions this page answers". They are not missing.
// The page carries every one of them, under a different name:
//
//   Typical exposure routes      -> How it enters food
//   Food sources                 -> Where it is found
//   Microbiome context           -> Microbiome effects
//   Open questions               -> Open questions and limits of this page
//   Frequently asked questions   -> Questions this page answers
//
// So the gap was vocabulary, not substance, and the fix is a rename rather than
// an emitter. CONTENT-RULES.md §2 is exactly this: map by FUNCTION, not by name.
// A reader asking "how does lead get into my food" is served identically by
// either heading; only one of them matches the design.
//
// WHY A TRANSFORMER AND NOT A wiki/** EDIT. Renaming in the markdown would be
// ~20 edits across 37 metal + 257 ingredient + 415 product + 62 regulation
// pages, it would touch protected content, and the generator-owned sections
// would revert on the next build (METHOD.md §3). One transformer relabels every
// page of a type at render time and cannot drift.
//
// IDS ARE PRESERVED. Only the visible text changes; the heading keeps the slug
// derived from its ORIGINAL text, so every existing anchor, rail link, inline
// cross-reference and external deep link keeps working. Renaming the id would
// silently break `#typical-exposure-routes` links across the corpus — the same
// class of breakage as deleting a rule that looked like a predecessor.

// `to` may be a function of the page title. v3 heads the ingredient section
// "Metals profiled in rice"; a fixed string produced "Metals profiled in" — a
// heading ending in a dangling preposition, shipped on every ingredient page.
type Rename = { from: RegExp; to: string | ((title: string) => string) }

// Keyed by frontmatter `type`. Each entry is v3's label for a section the build
// already has under another name. Sections v3 adds that the build genuinely
// does NOT have are absent here on purpose: this file renames, it never invents
// a heading for content that is not on the page.
const RENAMES: Record<string, Rename[]> = {
  metal: [
    { from: /^typical exposure routes$/i, to: "How it enters food" },
    { from: /^food sources$/i, to: "Where it is found" },
    { from: /^microbiome context$/i, to: "Microbiome effects" },
    { from: /^open questions$/i, to: "Open questions and limits of this page" },
    { from: /^frequently asked questions$/i, to: "Questions this page answers" },
    // Measured: the page carries this as a question-form heading. v3 states it.
    { from: /^what do these reference values mean in practice\??$/i, to: "What the reference values mean in practice" },
  ],
  // MEASURED from the live pages, not guessed. A first pass at this file
  // inferred the heading names and four of five type maps silently did nothing,
  // because the real headings were "Why this commodity accumulates heavy
  // metals", "Methods (brief)", "Minimal Risk Levels" - none of which the
  // guessed patterns matched. Every pattern below was read off an actual page.
  ingredient: [
    { from: /^why this commodity accumulates/i, to: "Why this ingredient accumulates" },
    { from: /^ingredient-derivative risk$/i, to: "Product categories that inherit this ingredient" },
    { from: /^(evidence gaps|open questions|where this page is thin)$/i, to: "Where this page is thin" },
    // Measured on rice: "FDA TDS FY2018-FY2020 Occurrence Values". v3 states it
    // in words, and the fiscal-year span is already in the table beneath.
    { from: /^fda tds\b.*occurrence/i, to: "FDA Total Diet Study occurrence" },
    // v3 heads this "Metals profiled in <ingredient>"; the build heads it with
    // the metal's own name ("Nickel in rice"). Same job, different vocabulary.
    { from: /^(lead|cadmium|arsenic|mercury|nickel|chromium|alumini?um|tin|antimony) in /i, to: (t) => `Metals profiled in ${t.toLowerCase()}` },
  ],
  "product-category": [
    { from: /^(ingredient drivers|drivers)$/i, to: "Ingredient drivers" },
    // Measured on infant-formula-powder-non-soy, the typical product page.
    { from: /^(applicable limits|regulatory limits|limits that apply|federal ?\/ ?regulatory limits)/i, to: "Limits applicable to this category" },
    { from: /^(testing|testing posture|evidence governance)$/i, to: "Testing and verification posture" },
  ],
  regulation: [
    { from: /^overview$/i, to: "What the instrument does" },
    { from: /^(minimal risk levels|the values|limits|values)$/i, to: "The values, exactly as set" },
    // Measured on atsdr-cadmium-mrls: the page heads its cross-instrument
    // section "Comparison to other reference values" as often as "Relationship
    // to <X>". Both do v3's job — telling the reader how this instrument sits
    // against the others.
    { from: /^(relationship to |comparison to )/i, to: "How to read it against other instruments" },
  ],
  // `regulation-program` is one page (fda-closer-to-zero) but it is the FDA
  // programme every category page cites, so it is not one to leave off the
  // model. Its own headings map cleanly onto v3's three.
  "regulation-program": [
    { from: /^overview$/i, to: "What the instrument does" },
    { from: /^reference values underlying the program$/i, to: "The values, exactly as set" },
    { from: /^comparison to /i, to: "How to read it against other instruments" },
  ],
  // v3's synthesis directory is "How findings are graded" then "All findings".
  // The build carries both under different names — mapped by FUNCTION, not by
  // name, which is the whole point of CONTENT-RULES §2: a reader looking for
  // the grading rules is served identically by either heading.
  "synthesis-index": [
    { from: /^synthesis findings pages$/i, to: "All findings" },
    { from: /^when to promote a synthesis findings page$/i, to: "How findings are graded" },
  ],
  source: [
    { from: /^(key numbers|extracted values)$/i, to: "Extracted values" },
    // "Methods (brief)" - the original /^methods$/ anchored too tightly.
    { from: /^methods\b/i, to: "Methods, as reported" },
    { from: /^(cited by|citing pages|wiki pages this source may touch)$/i, to: "Cited by" },
  ],
}

function textOf(node: any): string {
  let out = ""
  visit(node, "text", (t: any) => {
    out += t.value
  })
  return out.trim()
}

export const V3SectionLabels: QuartzTransformerPlugin = () => ({
  name: "V3SectionLabels",
  htmlPlugins() {
    return [
      () => (tree: any, file: any) => {
        const type = file.data?.frontmatter?.type as string | undefined
        const renames = type ? RENAMES[type] : undefined
        if (!renames?.length) return
        const pageTitle = String(file.data?.frontmatter?.title ?? "").trim()

        // THE RAIL READS THE TOC, NOT THE DOM. Quartz builds file.data.toc in
        // Plugin.TableOfContents(), which runs BEFORE this transformer, so
        // renaming only the headings left the left rail showing the ORIGINAL
        // labels while the body showed v3's. Every source page rendered a rail
        // reading "Key numbers / Methods (brief) / Wiki pages this source may
        // touch" above a body reading "Extracted values / Methods, as reported
        // / Cited by" — the same page disagreeing with itself in two columns,
        // on 2,219 pages. The toc entries carry the same text, so they take the
        // same renames; slugs are untouched here exactly as they are below.
        const toc = file.data?.toc
        if (Array.isArray(toc)) {
          for (const entry of toc) {
            const t = (entry?.text ?? "").trim()
            if (!t) continue
            const hit = renames.find((r) => r.from.test(t))
            if (hit) entry.text = typeof hit.to === "function" ? hit.to(pageTitle) : hit.to
          }
        }

        visit(tree, "element", (node: any) => {
          if (node.tagName !== "h2" && node.tagName !== "h3") return
          // The anchor <a> Quartz appends is a child; read only the label text.
          const label = textOf({
            type: "root",
            children: (node.children ?? []).filter(
              (c: any) => !(c.type === "element" && c.tagName === "a"),
            ),
          })
          if (!label) return
          const hit = renames.find((r) => r.from.test(label))
          if (!hit) return

          // Replace the FIRST text node's value and drop any other text nodes,
          // leaving the anchor child intact. The id is untouched by design.
          let replaced = false
          for (const child of node.children ?? []) {
            if (child.type !== "text") continue
            if (!replaced) {
              child.value = typeof hit.to === "function" ? hit.to(pageTitle) : hit.to
              replaced = true
            } else {
              child.value = ""
            }
          }
        })
      },
    ]
  },
})
