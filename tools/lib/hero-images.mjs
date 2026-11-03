import fs from "node:fs"
import images from "../../data/design/metal-hero-images.json" with { type: "json" }

// Registered ingredient and product heroes. Read on demand so metal-only
// callers do not parse the full page registry.
let pageHeroes = null
export function pageHeroImage(page) {
  if (!pageHeroes) {
    pageHeroes = JSON.parse(fs.readFileSync(new URL("../../data/design/page-hero-images.json", import.meta.url), "utf8")).pages ?? {}
  }
  const rec = pageHeroes[page]
  return rec?.hero_image ? rec : null
}

// Only registered local assets can contribute image metadata. One stable image
// identity is shared by the element/species pages that reuse the same asset.
export function heroImageRecord(asset) {
  return typeof asset === "string" && Object.hasOwn(images, asset) ? images[asset] : undefined
}

export function heroImageObject(asset) {
  const record = heroImageRecord(asset)
  if (!record) return undefined
  const url = `https://heavymetalindex.com${asset}`
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${url}#image`,
    url,
    contentUrl: url,
    name: record.name,
    caption: record.caption,
    description: record.description,
    keywords: record.keywords,
    width: record.width,
    height: record.height,
    encodingFormat: "image/webp",
    creditText: record.creditText,
    creator: { "@type": "Organization", name: "Heavy Metal Index", url: "https://heavymetalindex.com" },
  }
}
