export type HeroImageRecord = {
  name: string
  caption: string
  description: string
  keywords: string[]
  width: number
  height: number
  creditText: string
  original: string
}
export function heroImageRecord(asset: unknown): HeroImageRecord | undefined
export function heroImageObject(asset: unknown): Record<string, unknown> | undefined
