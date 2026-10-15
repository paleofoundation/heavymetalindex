export interface AliasRegistry { linkTargets: Record<string, string | null> }
export function normalizeLinkPath(pathname: string): string
export function canonicalLink(href: string, pagePath: string, registry: AliasRegistry, gonePaths: ReadonlySet<string>): { source: string; kind: "gone" | "alias"; href: string | null } | null
