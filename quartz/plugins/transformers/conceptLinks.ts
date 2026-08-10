import { QuartzTransformerPlugin } from "../types"
import { FullSlug, SimpleSlug, simplifySlug } from "../../util/path"
import {
  buildMetalIndex,
  resolveConceptEdges,
  MetalIndex,
  MetalPageMeta,
} from "../../util/conceptEdges"
import fs from "fs"
import path from "path"

// ConceptLinks folds each page's STRUCTURED frontmatter relationships (metal
// symbols, panel_metals, contamination_profile analytes, matrix tokens,
// ingredient/product/regulation/synthesis references) into `file.data.links`,
// the same array CrawlLinks populates from body wikilinks. Downstream, that
// array feeds the content index (interactive Graph), the Backlinks component,
// and the rail's Connections — so every relationship surface reflects the REAL
// concept graph, not just sparse prose links.
//
// MUST run AFTER CrawlLinks: CrawlLinks SETS `file.data.links` from the resolved
// body <a> tags; this plugin UNIONS the concept edges on top. Registered
// immediately after CrawlLinks in quartz.config.ts so its htmlPlugin runs later
// in the shared pipeline.
//
// Resolution lives entirely in util/conceptEdges.ts (the single source of that
// logic). This file only supplies the two things a per-file transformer cannot
// derive on its own: the metal symbol->slug index (read once from the metal
// pages) and the set of real slugs (from ctx.allSlugs).

// Light frontmatter reader for the ~37 metal pages. Deliberately dependency-free
// (a full YAML parse is unnecessary for three scalar fields, and avoids coupling
// the build to gray-matter/js-yaml resolution). Only `symbol`, `name`, `title`
// are needed; buildMetalIndex ignores everything else.
function readMetalIndex(contentDir: string): MetalIndex {
  const pages: MetalPageMeta[] = []
  const dir = path.join(contentDir, "metals")
  let files: string[] = []
  try {
    files = fs.readdirSync(dir)
  } catch {
    return buildMetalIndex(pages) // no metals dir -> empty index, edges just won't include metals
  }
  for (const file of files) {
    if (!file.endsWith(".md")) continue
    const slug = `metals/${file.replace(/\.md$/, "")}`
    let raw = ""
    try {
      raw = fs.readFileSync(path.join(dir, file), "utf8")
    } catch {
      continue
    }
    const fmEnd = raw.indexOf("\n---", 3)
    const block = raw.startsWith("---") && fmEnd > 0 ? raw.slice(3, fmEnd) : ""
    const scalar = (key: string): string | null => {
      const m = block.match(new RegExp(`^${key}:[ \\t]*(.+)$`, "m"))
      if (!m) return null
      return m[1].trim().replace(/^["']|["']$/g, "")
    }
    pages.push({ slug, symbol: scalar("symbol"), name: scalar("name"), title: scalar("title") })
  }
  return buildMetalIndex(pages)
}

export const ConceptLinks: QuartzTransformerPlugin = () => {
  return {
    name: "ConceptLinks",
    htmlPlugins(ctx) {
      const metalIndex = readMetalIndex(ctx.argv.directory)
      const allSimple = new Set<SimpleSlug>(
        (ctx.allSlugs ?? []).map((s) => simplifySlug(s as FullSlug)),
      )
      const slugExists = (s: SimpleSlug) => allSimple.has(s)

      return [
        () => (_tree: unknown, file: any) => {
          const fm = file.data?.frontmatter as Record<string, unknown> | undefined
          if (!fm) return
          // Retired redirect stubs are not concept-edge origins.
          if (fm.retired === true || fm.retired === "true") return
          const slug = file.data.slug as FullSlug | undefined
          if (!slug) return
          const mySlug = simplifySlug(slug)
          // Sources are evidence, not lateral-navigation origins (mirrors the
          // rail). Their body citations still exist in file.data.links; we just
          // don't fan their frontmatter metals/matrices out as concept edges.
          if (mySlug.startsWith("sources/")) return

          const edges = resolveConceptEdges(fm, mySlug, { metalIndex, slugExists })
          if (edges.size === 0) return

          const merged = new Set<SimpleSlug>((file.data.links ?? []) as SimpleSlug[])
          for (const e of edges) merged.add(e)
          file.data.links = [...merged]
        },
      ]
    },
  }
}
