export type PublicationAuthor = { name: string; isKaren: boolean; orcid?: string }
export function publicationAuthors(frontmatter: Record<string, unknown>, options?: { defaultToKaren?: boolean; enrichResearcher?: boolean }): PublicationAuthor[]
export function citationDate(value: unknown): string | undefined
