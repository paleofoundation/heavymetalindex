export const METAL_LEGEND_BEGIN: string
export const METAL_LEGEND_END: string
export const METAL_PREVIEW_ROWS: number
export const METAL_EVIDENCE_ROWS_PER_PAGE: number
export const METAL_EVIDENCE_GENERATOR: string
export function metalPageOwnsFolder(type: unknown, slug: unknown, folder: string): boolean
export function metalLegend(body: string): { preamble: string; header: string; separator: string; rows: string[] } | null
export function metalEvidencePages(input: { slug: string; title: string; body: string }): { slug: string; markdown: string; rows: string[] }[]
