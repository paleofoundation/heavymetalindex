export type IndexingFileData = {
  indexingBody?: string
  body?: string
  text?: string
}
export function isNoindex(value: unknown): boolean
export function isLowValuePage(
  frontmatter?: Record<string, unknown>,
  slug?: string,
  fileData?: IndexingFileData,
): boolean
