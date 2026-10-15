import images from "../../data/design/metal-hero-images.json" with { type: "json" }

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
