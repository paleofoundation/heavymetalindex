export const HTML_TITLE_MAX: number
export const META_DESCRIPTION_MIN: number
export const META_DESCRIPTION_MAX: number

export function normalizeTitle(title: string): string
export function capHtmlTitle(title: string, max?: number): string
export function extractOverview(markdown: string): string
export function isMetalArticle(slug?: string, type?: unknown): boolean
export function isRegulationArticle(slug?: string, type?: unknown): boolean
export function metalMetaDescription(overview: string, plainName?: string, label?: string): string
export function metalSearchFields(input?: {
  title?: unknown
  symbol?: unknown
  name?: unknown
  overview?: unknown
}): { title: string; description: string } | null
export function citationDoi(frontmatter?: Record<string, unknown> | null): string | undefined

export function sourceSearchTitle(frontmatter?: Record<string, unknown>, pages?: ReadonlyArray<{ frontmatter?: Record<string, unknown> }>): string | undefined
export function auditSearchTitle(slug?: unknown, title?: string): string | undefined
