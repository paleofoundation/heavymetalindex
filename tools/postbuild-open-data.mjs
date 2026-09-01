#!/usr/bin/env node
/**
 * postbuild-open-data.mjs — inject schema.org DataCatalog / Dataset / DataDownload
 * markup into the rendered /data page.
 *
 * This is what lets ChatGPT / Perplexity / Google's Dataset Search discover the
 * Heavy Metal Index open-data files and cite them as a dataset. The markup is
 * built from wiki/static/data/catalog.json (produced by build-open-data.mjs), so
 * the record counts, versions, byte sizes, and download URLs it advertises are
 * exactly the files on disk — it cannot drift from them.
 *
 * Runs after `quartz build` (public/ exists). Marker-bounded + idempotent.
 */

import fs from "node:fs"
import path from "node:path"
import {
  HMI_BASE,
  HMI_DATA_CATALOG_ID,
  HMI_WEBSITE_ID,
  karenEntity,
  organizationEntity,
} from "./lib/entity-graph.mjs"

const repoRoot = process.cwd()
const publicDir = path.join(repoRoot, "public")
const CATALOG = path.join(repoRoot, "wiki/static/data/catalog.json")
const SITE = HMI_BASE
const ORG_ROR = process.env.HMI_ORG_ROR || ""
const PUBLISHER = organizationEntity(ORG_ROR)
const CREATOR = karenEntity(ORG_ROR)

if (!fs.existsSync(publicDir)) {
  console.log("postbuild-open-data: public/ not present yet (skipping; ran before quartz build)")
  process.exit(0)
}
if (!fs.existsSync(CATALOG)) {
  console.log("postbuild-open-data: wiki/static/data/catalog.json not found (skipping; run build-open-data.mjs)")
  process.exit(0)
}

const htmlPath = [path.join(publicDir, "data", "index.html"), path.join(publicDir, "data.html")].find((p) => fs.existsSync(p))
if (!htmlPath) {
  console.log("postbuild-open-data: rendered /data page not found (skipping)")
  process.exit(0)
}

const catalog = JSON.parse(fs.readFileSync(CATALOG, "utf8"))
const license = "https://creativecommons.org/licenses/by/4.0/"

const datasets = (catalog.datasets || []).map((d) => ({
  "@type": "Dataset",
  "@id": `${SITE}/data#${d.id}`,
  name: d.name,
  description: d.description,
  url: d.landing_page || `${SITE}/data`,
  identifier: `${SITE}/data#${d.id}`,
  version: d.version,
  dateModified: d.date_modified,
  isAccessibleForFree: true,
  license,
  creator: CREATOR,
  publisher: PUBLISHER,
  isPartOf: { "@type": "WebSite", "@id": HMI_WEBSITE_ID, name: "Heavy Metal Index", url: `${SITE}/` },
  ...(d.unit ? { unitText: d.unit } : {}),
  ...(Array.isArray(d.analyte_panel) ? { variableMeasured: d.analyte_panel } : {}),
  distribution: (d.distributions || []).map((dist) => ({
    "@type": "DataDownload",
    encodingFormat: dist.format,
    contentUrl: dist.content_url,
    ...(dist.content_size ? { contentSize: `${dist.content_size}` } : {}),
  })),
}))

const graph = {
  "@context": "https://schema.org",
  "@type": "DataCatalog",
  "@id": HMI_DATA_CATALOG_ID,
  name: catalog.name || "Heavy Metal Index — open data catalog",
  description: catalog.description,
  url: `${SITE}/data`,
  license,
  publisher: PUBLISHER,
  creator: CREATOR,
  dateModified: (catalog.generated_at || "").slice(0, 10) || undefined,
  dataset: datasets,
}

let html = fs.readFileSync(htmlPath, "utf8")
if (html.includes("HMI-OPENDATA-JSONLD-START")) {
  console.log("postbuild-open-data: DataCatalog JSON-LD already present; skipping.")
  process.exit(0)
}
const block =
  `<!-- HMI-OPENDATA-JSONLD-START -->` +
  `<script type="application/ld+json">${JSON.stringify(graph)}</script>` +
  `<!-- HMI-OPENDATA-JSONLD-END -->`
html = html.replace("</head>", `${block}</head>`)
fs.writeFileSync(htmlPath, html, "utf8")
console.log(`postbuild-open-data: injected DataCatalog JSON-LD (${datasets.length} datasets) into ${path.relative(publicDir, htmlPath)}`)
