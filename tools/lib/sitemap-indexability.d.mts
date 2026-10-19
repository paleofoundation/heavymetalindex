export function publicPathForContentSlug(slug: string): string
export function locForPublicPath(publicPath: string, origin?: string): string
export function extraIndexablePublicPaths(
  pages: Array<{
    slug?: string
    frontmatter?: { type?: string; tags?: unknown; noindex?: unknown }
  }>,
  options?: { blockedPaths?: Set<string>; repoRoot?: string },
): string[]
