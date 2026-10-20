export const SITEMAP_EXCLUSIONS: string[]
export function publicPathForContentSlug(slug: string): string
export function locForPublicPath(publicPath: string, origin?: string): string
export function isExcludedSitemapPath(publicPath: string, exclusions?: string[]): boolean
export function extraIndexablePublicPaths(
  pages: Array<{
    slug?: string
    frontmatter?: { type?: string; tags?: unknown; noindex?: unknown }
  }>,
  options?: { blockedPaths?: Set<string>; repoRoot?: string; exclusions?: string[] },
): string[]
