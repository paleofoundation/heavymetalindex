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
import { KAREN, authorProfileGraph } from "../authorIdentity";

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
      {authorProfile && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(authorProfileGraph(cfg.baseUrl ?? "heavymetalindex.com")).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {content}
    </article>
  );
};

Content.afterDOMLoaded = authorCardScript;

export default (() => Content) satisfies QuartzComponentConstructor;
