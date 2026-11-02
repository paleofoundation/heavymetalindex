import pageHeroes from "../../data/design/page-hero-images.json" with { type: "json" }
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

// Presentation is independent of article compilation. Explicit page metadata wins.
export function pageHeroImage(slug, frontmatter = {}) {
  const preserved = pageHeroes.pages[String(slug).replace(/^\//, "").replace(/\.html$/, "")]
  // A registered hero can be withheld (wrong subject): the page keeps its registration
  // but renders a text-only hero until the right artwork is supplied.
  if (preserved?.withheld && typeof frontmatter.hero_image !== "string") return { image: undefined, alt: "", withheld: preserved.withheld }
  const asset = typeof frontmatter.hero_image === "string" ? frontmatter.hero_image : preserved?.hero_image
  if (!asset) return undefined
  if (!Object.hasOwn(pageHeroes.assets, asset)) throw Error(`Unregistered hero image: ${asset}`)
  return { image: asset, alt: frontmatter.hero_image_alt ?? preserved?.hero_image_alt ?? heroImageRecord(asset)?.caption ?? "" }
}
