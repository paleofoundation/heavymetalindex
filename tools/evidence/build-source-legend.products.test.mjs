import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { execFileSync } from "node:child_process"
import { fileURLToPath } from "node:url"

function sourcePage({ citeKey, products, year = 2022 }) {
  const productList = products.map((item) => JSON.stringify(item)).join(", ")
  return `---
title: Metals survey ${citeKey}
authors: ["Lee A"]
year: ${year}
cite_key: ${citeKey}
source_type: peer-reviewed
evidence_tier: A
products: [${productList}]
---
Test source.
`
}

function productPage(title) {
  return `---
title: ${title}
---

# ${title}
`
}

function rowCount(page, citeKey) {
  return page.split(`sources/${citeKey}`).length - 1
}

test("product legends union routing-audit rows with frontmatter products", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-product-legend-"))
  try {
    fs.mkdirSync(path.join(root, "wiki/sources"), { recursive: true })
    fs.mkdirSync(path.join(root, "wiki/products"), { recursive: true })
    fs.mkdirSync(path.join(root, "data/evidence"), { recursive: true })

    fs.writeFileSync(
      path.join(root, "wiki/sources/fm-wikilink.md"),
      sourcePage({ citeKey: "fm-wikilink", products: ["[[products/fm-wikilink-product]]"], year: 2021 }),
    )
    fs.writeFileSync(
      path.join(root, "wiki/sources/fm-plain.md"),
      sourcePage({ citeKey: "fm-plain", products: ["fm-plain-product"], year: 2020 }),
    )
    fs.writeFileSync(
      path.join(root, "wiki/sources/csv-only.md"),
      sourcePage({ citeKey: "csv-only", products: [], year: 2019 }),
    )
    fs.writeFileSync(
      path.join(root, "wiki/sources/shared-source.md"),
      sourcePage({ citeKey: "shared-source", products: ["shared-product"], year: 2023 }),
    )
    fs.writeFileSync(
      path.join(root, "wiki/sources/shared-frontmatter.md"),
      sourcePage({ citeKey: "shared-frontmatter", products: ["[[products/shared-product]]"], year: 2024 }),
    )
    fs.writeFileSync(
      path.join(root, "wiki/sources/not-a-baby-wipes-measurement.md"),
      sourcePage({
        citeKey: "not-a-baby-wipes-measurement",
        products: ["[[products/baby-wipes]]"],
        year: 2018,
      }),
    )

    fs.writeFileSync(
      path.join(root, "data/evidence/product_source_routing_audit.csv"),
      [
        "product_slug,source_id",
        "csv-only-product,csv-only",
        "csv-only-product,csv-only",
        "shared-product,shared-source",
        "",
      ].join("\n"),
    )

    for (const slug of [
      "fm-wikilink-product",
      "fm-plain-product",
      "csv-only-product",
      "shared-product",
      "baby-wipes",
    ]) {
      fs.writeFileSync(path.join(root, `wiki/products/${slug}.md`), productPage(slug))
    }

    const script = fileURLToPath(new URL("./build-source-legend.mjs", import.meta.url))
    execFileSync(process.execPath, [script, "--only", "products"], { cwd: root, stdio: "pipe" })

    const fmWiki = fs.readFileSync(path.join(root, "wiki/products/fm-wikilink-product.md"), "utf8")
    const fmPlain = fs.readFileSync(path.join(root, "wiki/products/fm-plain-product.md"), "utf8")
    const csvOnly = fs.readFileSync(path.join(root, "wiki/products/csv-only-product.md"), "utf8")
    const shared = fs.readFileSync(path.join(root, "wiki/products/shared-product.md"), "utf8")
    const wipes = fs.readFileSync(path.join(root, "wiki/products/baby-wipes.md"), "utf8")

    assert.equal(rowCount(fmWiki, "fm-wikilink"), 1)
    assert.equal(rowCount(fmPlain, "fm-plain"), 1)
    assert.equal(rowCount(csvOnly, "csv-only"), 1)
    assert.equal(rowCount(shared, "shared-source"), 1)
    assert.equal(rowCount(shared, "shared-frontmatter"), 1)
    assert.equal(rowCount(wipes, "not-a-baby-wipes-measurement"), 0)

    const sharedRows = shared.split("\n").filter((line) => /^\| \d+ \|/.test(line))
    assert.equal(sharedRows.length, 2)
    const csvRows = csvOnly.split("\n").filter((line) => /^\| \d+ \|/.test(line))
    assert.equal(csvRows.length, 1)
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
})

test("sync appends frontmatter-only rows and leaves the existing legend text in place", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-product-legend-sync-"))
  try {
    fs.mkdirSync(path.join(root, "wiki/sources"), { recursive: true })
    fs.mkdirSync(path.join(root, "wiki/products"), { recursive: true })
    fs.mkdirSync(path.join(root, "data/evidence"), { recursive: true })
    fs.writeFileSync(
      path.join(root, "wiki/sources/csv-only.md"),
      sourcePage({ citeKey: "csv-only", products: [], year: 2019 }),
    )
    fs.writeFileSync(
      path.join(root, "wiki/sources/fm-plain.md"),
      sourcePage({ citeKey: "fm-plain", products: ["kept-product"], year: 2024 }),
    )
    fs.writeFileSync(
      path.join(root, "wiki/sources/shared-source.md"),
      sourcePage({ citeKey: "shared-source", products: ["kept-product"], year: 2023 }),
    )
    fs.writeFileSync(
      path.join(root, "data/evidence/product_source_routing_audit.csv"),
      [
        "product_slug,source_id",
        "kept-product,csv-only",
        "kept-product,shared-source",
        "",
      ].join("\n"),
    )
    const original = `---
title: Kept
---

# Kept

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Keep this note.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/csv-only\\|Lee 2019]]. *Metals survey csv-only* | 2019 | Peer-reviewed | Existing contribution stays. |
| 2 | [[sources/shared-source\\|Lee 2023]]. *Metals survey shared-source* | 2023 | Peer-reviewed | Already listed from both inputs. |
<!-- END: hmi-source-legend -->
`
    const pagePath = path.join(root, "wiki/products/kept-product.md")
    fs.writeFileSync(pagePath, original)
    const script = fileURLToPath(new URL("./build-source-legend.mjs", import.meta.url))
    execFileSync(process.execPath, [script, "--only", "products", "--sync-new-product-rows"], { cwd: root, stdio: "pipe" })
    const page = fs.readFileSync(pagePath, "utf8")
    assert.ok(page.includes("Keep this note."))
    assert.ok(page.includes("Existing contribution stays."))
    assert.ok(page.includes("Already listed from both inputs."))
    assert.equal(rowCount(page, "csv-only"), 1)
    assert.equal(rowCount(page, "shared-source"), 1)
    assert.equal(rowCount(page, "fm-plain"), 1)
    const rows = page.split("\n").filter((line) => /^\| \d+ \|/.test(line))
    assert.equal(rows.length, 3)
    assert.ok(rows[2].includes("sources/fm-plain"))
    execFileSync(process.execPath, [script, "--only", "products", "--sync-new-product-rows"], { cwd: root, stdio: "pipe" })
    assert.equal(fs.readFileSync(pagePath, "utf8"), page)
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
})
