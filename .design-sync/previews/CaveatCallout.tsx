// The reviewed-caveat callout (burgundy left bar) for Limitations / Open questions.
import { CaveatCallout } from "hmi-design-system"

export const Limitations = () => (
  <CaveatCallout
    heading="Limitations"
    id="limitations"
    body="Occurrence data for this ingredient is dominated by two large surveys, so the distribution tails are thinly sampled. Speciation (inorganic vs total arsenic) is reported in only a minority of sources, and pre-2015 measurements use higher detection limits that censor the low end."
  />
)

export const OpenQuestions = () => (
  <CaveatCallout
    heading="Open questions"
    id="open-questions"
    body="Whether cadmium uptake varies enough by cultivar to warrant a separate clean/dirty split for this category remains unresolved pending more genotype-controlled data."
  />
)
