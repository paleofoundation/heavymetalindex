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

type Rename = { from: RegExp; to: string }

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
    // v3 heads this "Metals profiled in <ingredient>"; the build heads it with
    // the metal's own name ("Nickel in rice"). Same job, different vocabulary.
    { from: /^(lead|cadmium|arsenic|mercury|nickel|chromium|alumini?um|tin|antimony) in /i, to: "Metals profiled in" },
  ],
  "product-category": [
    { from: /^(ingredient drivers|drivers)$/i, to: "Ingredient drivers" },
    // Measured on infant-formula-powder-non-soy, the typical product page.
    { from: /^(applicable limits|regulatory limits|limits that apply|federal ?\/ ?regulatory limits)/i, to: "Limits applicable to this category" },
    { from: /^(testing|testing posture)$/i, to: "Testing and verification posture" },
  ],
  regulation: [
    { from: /^overview$/i, to: "What the instrument does" },
    { from: /^(minimal risk levels|the values|limits|values)$/i, to: "The values, exactly as set" },
    { from: /^relationship to /i, to: "How to read it against other instruments" },
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

        visit(tree, "element", (node: any) => {
          if (node.tagName !== "h2") return
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
              child.value = hit.to
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
