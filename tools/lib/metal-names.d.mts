export const METAL_NAMES: Readonly<Record<string, string>>
export function metalLabel(symbol: string): string
export function metalSymbol(label: unknown): string | undefined
export function expandMetalSymbols(
  value: unknown,
  seen?: Set<string>,
  preceding?: string,
): string
export function expandCitationShorthand(value: unknown): string
export function plainMetalText(
  value: unknown,
  seen?: Set<string>,
  preceding?: string,
): string
