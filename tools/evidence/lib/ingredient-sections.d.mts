export const MANDATORY_SECTIONS: ReadonlyArray<{ key: string; patterns: RegExp[] }>
export function sectionPresent(content: string, key: string): boolean
export function sectionBody(content: string, key: string): string | null
