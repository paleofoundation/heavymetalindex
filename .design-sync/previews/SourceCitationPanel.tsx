// Illustrative source-provenance panels — realistic shape, placeholder identifiers
// (10.0000/… is a non-resolving demo DOI, not a real citation).
import { SourceCitationPanel } from "hmi-design-system"

// A peer-reviewed journal article — the common case, DOI first.
export const JournalArticle = () => (
  <SourceCitationPanel
    facts={[
      { label: "DOI", value: "10.0000/hmi.demo.2021.0148", href: "#doi" },
      { label: "Publication", value: "Food Chemistry" },
      { label: "Year", value: "2021" },
      { label: "Authors", value: "A. Researcher; B. Analyst; C. Reviewer" },
      { label: "Source type", value: "peer reviewed article" },
      { label: "Evidence tier", value: "B" },
      { label: "License", value: "CC BY 4.0" },
    ]}
  />
)

// An agency report — no DOI, cited by access URL.
export const AgencyReport = () => (
  <SourceCitationPanel
    facts={[
      { label: "Source URL", value: "fda.gov/total-diet-study", href: "#url" },
      { label: "Publication", value: "US FDA Total Diet Study" },
      { label: "Year", value: "2022" },
      { label: "Source type", value: "government report" },
      { label: "Evidence tier", value: "A" },
    ]}
  />
)
