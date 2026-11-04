import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "./types";

export default (() => {
  const BrandPreScreenTool: QuartzComponent = ({
    fileData,
  }: QuartzComponentProps) => {
    if (fileData.frontmatter?.type !== "brand-pre-screen-tool") return null;
    return (
      <p>
        <a href="/pro">Compare your lab result in Index Pro</a>
      </p>
    );
  };
  return BrandPreScreenTool;
}) satisfies QuartzComponentConstructor;
