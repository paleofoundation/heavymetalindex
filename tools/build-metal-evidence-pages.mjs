import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import matter from "gray-matter"
import { METAL_EVIDENCE_GENERATOR, metalEvidencePages } from "./lib/metal-evidence.mjs"
import { withGeneratedHero } from "./lib/generated-hero-fields.mjs"
import { isPublicWikiRecord } from "./lib/source-publication.mjs"

export function buildMetalEvidencePages(repoRoot) {
  const wiki = path.join(repoRoot, "wiki")
  const metals = path.join(wiki, "metals")
  const desired = new Map()
  let parents = 0
  let rows = 0
  for (const filename of fs.readdirSync(metals).sort()) {
    if (!filename.endsWith(".md")) continue
    const raw = fs.readFileSync(path.join(metals, filename), "utf8")
    const { data, content } = matter(raw)
    const slug = `metals/${filename.slice(0, -3)}`
    if (data.type !== "metal" || !isPublicWikiRecord(data, slug)) continue
    const pages = metalEvidencePages({ slug, title: String(data.title ?? filename.slice(0, -3)), body: content })
    if (pages.length) parents++
    for (const page of pages) {
      desired.set(path.join(wiki, page.slug + ".md"), withGeneratedHero(page.markdown, "wiki/" + page.slug + ".md"))
      rows += page.rows.length
    }
  }
  let written = 0
  for (const [file, markdown] of desired) {
    if (fs.existsSync(file)) {
      const current = fs.readFileSync(file, "utf8")
      if (matter(current).data.generated_by !== METAL_EVIDENCE_GENERATOR) throw new Error(`Refusing to overwrite authored evidence page: ${file}`)
      if (current === markdown) continue
    }
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, markdown)
    written++
  }
  // Remove only outputs owned by this generator when a table loses rows or a
  // parent disappears. Authored files are always left intact.
  let removed = 0
  function clean(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name)
      if (entry.isDirectory()) clean(file)
      else if (entry.isFile() && entry.name.endsWith(".md") && !desired.has(file)) {
        if (matter(fs.readFileSync(file, "utf8")).data.generated_by === METAL_EVIDENCE_GENERATOR) { fs.unlinkSync(file); removed++ }
      }
    }
  }
  clean(metals)
  return { parents, pages: desired.size, rows, written, removed }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log("metal evidence pages:", buildMetalEvidencePages(process.cwd()))
}
