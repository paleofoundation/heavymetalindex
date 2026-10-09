export const HTML_TITLE_MAX: number
export const META_DESCRIPTION_MIN: number
export const META_DESCRIPTION_MAX: number

export function capHtmlTitle(title: string, max?: number): string
export function extractOverview(markdown: string): string
export function isMetalArticle(slug?: string, type?: unknown): boolean
export function isRegulationArticle(slug?: string, type?: unknown): boolean
export function metalMetaDescription(overview: string): string
export function metalSearchFields(input?: {
  title?: unknown
  symbol?: unknown
  name?: unknown
  overview?: unknown
}): { title: string; description: string } | null
export function citationDoi(frontmatter?: Record<string, unknown> | null): string | undefined
