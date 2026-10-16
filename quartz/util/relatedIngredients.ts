import { QuartzPluginData } from "../plugins/vfile"
import { isLowValuePage, isNoindex } from "../../tools/lib/low-value-page.mjs"
import { isPublicWikiRecord } from "../../tools/lib/source-publication.mjs"
import registry from "../../data/redirects/aliases-301.json"
import gone from "../../data/redirects/gone-410.json"

// Match the child's existing category exactly. Hub rollups can contain several
// categories; they must not broaden the related-ingredient relationship.
export function relatedIngredients(page: QuartzPluginData, allFiles: QuartzPluginData[]) {
  const category = String(page.frontmatter?.category ?? "")
    .trim()
    .toLowerCase()
  if (!category) return []
  const targets = registry.linkTargets as Record<string, string | null>
  return allFiles
    .filter((candidate) => {
      const fm: Record<string, unknown> = candidate.frontmatter ?? {}
      const slug = String(candidate.slug ?? "")
      return (
        slug !== page.slug &&
        /^ingredients\/[^/]+$/.test(slug) &&
        fm.type === "ingredient" &&
        String(fm.category ?? "")
          .trim()
          .toLowerCase() === category &&
        isPublicWikiRecord(fm, slug) &&
        !isNoindex(fm.noindex) &&
        !isLowValuePage(fm, slug, candidate) &&
        !gone.paths.includes(`/${slug}`) &&
        !Object.hasOwn(targets, `/${slug}`)
      )
    })
    .sort((a, b) => String(a.slug).localeCompare(String(b.slug)))
    .slice(0, 8)
}
