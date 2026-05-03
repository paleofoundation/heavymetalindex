import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import test from "node:test"

const root = process.cwd()
const wikiDir = path.join(root, "wiki")

function read(file: string): string {
  return fs.readFileSync(file, "utf8")
}

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return []
  }

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const fullPath = path.join(dir, entry.name)
      return entry.isDirectory() ? walk(fullPath) : [fullPath]
    })
    .sort()
}

function wikiTarget(linkTarget: string): string {
  return linkTarget.split("|")[0]!.split("#")[0]!.trim()
}

function pagePath(linkTarget: string): string {
  return path.join(wikiDir, `${wikiTarget(linkTarget)}.md`)
}

function wikilinks(markdown: string): string[] {
  return [...markdown.matchAll(/\[\[([^\]]+)\]\]/g)].map((match) => wikiTarget(match[1]!))
}

function updatedPagesSection(markdown: string): string {
  const heading = /^## Wiki pages updated on ingest\s*$/m
  const start = markdown.search(heading)
  if (start === -1) {
    return ""
  }

  const rest = markdown.slice(start)
  const nextHeading = rest.slice(1).search(/^## /m)
  return nextHeading === -1 ? rest : rest.slice(0, nextHeading + 1)
}

function sourcePages(): Array<{ slug: string; file: string; text: string }> {
  return fs
    .readdirSync(path.join(wikiDir, "sources"))
    .filter((name) => name.endsWith(".md") && name !== "index.md")
    .sort()
    .map((name) => {
      const file = path.join(wikiDir, "sources", name)
      return { slug: name.replace(/\.md$/, ""), file, text: read(file) }
    })
}

test("promoted source pages reciprocate their ingest targets", () => {
  for (const source of sourcePages()) {
    const section = updatedPagesSection(source.text)
    assert.notEqual(section, "", `${source.file} must include "Wiki pages updated on ingest"`)

    const targets = wikilinks(section).filter((target) => !target.startsWith("sources/"))
    assert.ok(targets.length > 0, `${source.file} must list at least one non-source page updated on ingest`)

    for (const target of targets) {
      const targetPath = pagePath(target)
      assert.ok(fs.existsSync(targetPath), `${source.file} points to missing page ${target}`)

      const targetText = read(targetPath)
      assert.match(
        targetText,
        new RegExp(String.raw`\[\[sources/${source.slug}(?:[|\]#])`),
        `${targetPath} must cite [[sources/${source.slug}]] back`,
      )
    }
  }
})

test("product-page source citations are mirrored on source pages", () => {
  const sourcesBySlug = new Map(sourcePages().map((source) => [source.slug, source.text]))

  for (const file of fs.readdirSync(path.join(wikiDir, "products")).filter((name) => name.endsWith(".md"))) {
    const productSlug = file.replace(/\.md$/, "")
    const productText = read(path.join(wikiDir, "products", file))
    const citedSources = new Set(
      wikilinks(productText)
        .filter((target) => target.startsWith("sources/"))
        .map((target) => target.replace(/^sources\//, "")),
    )

    for (const sourceSlug of citedSources) {
      const sourceText = sourcesBySlug.get(sourceSlug)
      assert.ok(sourceText, `${file} cites missing source page ${sourceSlug}`)
      assert.ok(
        wikilinks(updatedPagesSection(sourceText)).includes(`products/${productSlug}`),
        `${sourceSlug} must list products/${productSlug} under "Wiki pages updated on ingest"`,
      )
    }
  }
})

test("ingredient-page source citations are mirrored on source pages", () => {
  const sourcesBySlug = new Map(sourcePages().map((source) => [source.slug, source.text]))

  for (const file of fs.readdirSync(path.join(wikiDir, "ingredients")).filter((name) => name.endsWith(".md"))) {
    const ingredientSlug = file.replace(/\.md$/, "")
    const ingredientText = read(path.join(wikiDir, "ingredients", file))
    const citedSources = new Set(
      wikilinks(ingredientText)
        .filter((target) => target.startsWith("sources/"))
        .map((target) => target.replace(/^sources\//, "")),
    )

    for (const sourceSlug of citedSources) {
      const sourceText = sourcesBySlug.get(sourceSlug)
      assert.ok(sourceText, `${file} cites missing source page ${sourceSlug}`)
      assert.ok(
        wikilinks(updatedPagesSection(sourceText)).includes(`ingredients/${ingredientSlug}`),
        `${sourceSlug} must list ingredients/${ingredientSlug} under "Wiki pages updated on ingest"`,
      )
    }
  }
})

test("raw report-like files are promoted or queued", () => {
  const trackedRawDirs = ["reports", "lab-data", "industry", "news"]
  const sourceText = sourcePages()
    .map((source) => source.text)
    .join("\n")
  const lintText = walk(path.join(wikiDir, "lint"))
    .filter((file) => file.endsWith(".md"))
    .map((file) => read(file))
    .join("\n")

  for (const dir of trackedRawDirs) {
    for (const file of walk(path.join(root, "raw", dir))) {
      const basename = path.basename(file)
      if (basename === ".gitkeep" || basename === ".DS_Store") {
        continue
      }

      const rawPath = path.relative(root, file)
      assert.ok(
        sourceText.includes(rawPath) || lintText.includes(rawPath) || lintText.includes(basename),
        `${rawPath} must be promoted to wiki/sources or listed in wiki/lint as queued/deferred`,
      )
    }
  }
})
