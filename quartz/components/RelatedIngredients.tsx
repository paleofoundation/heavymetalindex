import { QuartzComponent, QuartzComponentConstructor } from "./types"
import { FullSlug, resolveRelative } from "../util/path"
import { relatedIngredients } from "../util/relatedIngredients"

const RelatedIngredients: QuartzComponent = ({ fileData, allFiles }) => {
  if (fileData.frontmatter?.type !== "ingredient" || !fileData.slug) return null
  const related = relatedIngredients(fileData, allFiles)
  return (
    <section class="related-ingredients" aria-labelledby="related-ingredients-title">
      <h2 id="related-ingredients-title">Related ingredients</h2>
      {related.length ? (
        <ul>
          {related.map((page) => (
            <li key={page.slug}>
              <a class="internal" href={resolveRelative(fileData.slug!, page.slug as FullSlug)}>
                {page.frontmatter?.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No related ingredient links are listed for this page.</p>
      )}
    </section>
  )
}
export default (() => RelatedIngredients) satisfies QuartzComponentConstructor
