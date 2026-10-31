import { QuartzFilterPlugin } from "../types"
import { isPublicWikiRecord, isRetiredRecord } from "../../../tools/lib/source-publication.mjs"

export const RemoveDrafts: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveDrafts",
  shouldPublish(_ctx, [_tree, vfile]) {
    const frontmatter = (vfile.data?.frontmatter ?? {}) as { draft?: unknown }
    const slug = vfile.data?.slug ?? ""
    // Retired stubs stay on disk. Category listings use isPublicWikiRecord and
    // skip them. Filtering them out of the build 404s every link to a stub
    // that does not yet have an edge redirect.
    if (isRetiredRecord(frontmatter)) {
      return frontmatter.draft !== true && frontmatter.draft !== "true"
    }
    return isPublicWikiRecord(frontmatter, slug)
  },
})
