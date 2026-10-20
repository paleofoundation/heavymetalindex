import { ComponentChildren } from "preact";
import { htmlToJsx } from "../../util/jsx";
import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "../types";
// HeroBand is rendered outside the layout. Register its interaction resource
// through Content so Quartz includes it in the shared browser bundle.
// @ts-ignore — resolved by Quartz's inline-script loader
import authorCardScript from "../scripts/authorCard.inline";
// @ts-ignore — inline resource bundled by Quartz
import analyteExplorerScript from "../scripts/analyteExplorer.inline";
import analyteExplorerStyle from "../styles/analyteExplorer.scss";
import { KAREN } from "../authorIdentity";

const Content: QuartzComponent = ({
  fileData,
  tree,
  cfg,
}: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren;
  const classes: string[] = fileData.frontmatter?.cssclasses ?? [];
  const classString = ["popover-hint", ...classes].join(" ");
  const authorProfile = String(fileData.slug) === KAREN.slug;
  const canonical = `https://${cfg.baseUrl}/${KAREN.slug}`;
  return (
    <article class={classString}>
      {authorProfile && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              url: canonical,
              mainEntity: {
                "@type": "Person",
                "@id": `${canonical}#person`,
                name: KAREN.name,
                description: KAREN.summary,
                image: `https://${cfg.baseUrl}${KAREN.portrait}`,
                sameAs: [
                  `https://orcid.org/${KAREN.orcid}`,
                  `https://www.wikibiome.com/researchers/${KAREN.orcid}`,
                ],
                affiliation: KAREN.affiliations.map((a) => ({
                  "@type": "Organization",
                  name: a.name,
                  url: a.url,
                })),
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {content}
    </article>
  );
};

Content.afterDOMLoaded = [authorCardScript, analyteExplorerScript].join("\n");
Content.css = analyteExplorerStyle;

export default (() => Content) satisfies QuartzComponentConstructor;
