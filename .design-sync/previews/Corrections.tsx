// The reader-facing correction form at rest (no props renders the live
// errata/contact form verbatim). Source of truth: quartz/components/Corrections.tsx
// (headless) + the form markup in wiki/errata.md, styled by corrections.scss.
import { Corrections } from "hmi-design-system"

export const Default = () => <Corrections />
