export const HIDDEN_HEADINGS: RegExp[]

export function universalParents(): Array<{
  id: string
  label: string
  defaultOpen?: boolean
  direct?: boolean
  children: Array<{ id: string; patterns: RegExp[] }>
}>
