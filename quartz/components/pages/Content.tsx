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
import { KAREN, authorProfileJsonLd } from "../authorIdentity";

const Content: QuartzComponent = ({
  fileData,
  tree,
  cfg,
}: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren;
  const classes: string[] = fileData.frontmatter?.cssclasses ?? [];
  const classString = ["popover-hint", ...classes].join(" ");
  const authorProfile = String(fileData.slug) === KAREN.slug;
  return (
    <article class={classString}>
      {authorProfile && cfg.baseUrl && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(authorProfileJsonLd(cfg.baseUrl)).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      )}
      {content}
      {/^ingredients\/[a-z0-9-]+$/.test(String(fileData.slug)) && (
        <p class="index-pro-cta">
          <a href={`/pro/compare/${String(fileData.slug).split("/")[1]}`}>
            Compare your lab result in Index Pro
          </a>
        </p>
      )}
    </article>
  );
};

Content.afterDOMLoaded = [authorCardScript, analyteExplorerScript].join("\n");
Content.css = analyteExplorerStyle;

export default (() => Content) satisfies QuartzComponentConstructor;
