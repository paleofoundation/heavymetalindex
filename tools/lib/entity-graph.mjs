import researcherIdentity from "../../data/researcher-identity.json" with { type: "json" }

export { researcherIdentity }

export const HMI_BASE = "https://heavymetalindex.com"
export const HMI_ORGANIZATION_ID = `${HMI_BASE}/#organization`
export const HMI_WEBSITE_ID = `${HMI_BASE}/#website`
export const HMI_DATA_CATALOG_ID = `${HMI_BASE}/data#catalog`

export const ICS_BASE = "https://contaminantstandards.com"
export const ICS_ORGANIZATION_ID = `${ICS_BASE}/#organization`

export const KAREN_PROFILE_URL = researcherIdentity.profileUrl
export const KAREN_PERSON_ID = researcherIdentity.personId
export const KAREN_ORCID_URL = researcherIdentity.profiles.orcid

export function organizationEntity(ror = "") {
  return {
    "@type": "Organization",
    "@id": ICS_ORGANIZATION_ID,
    name: "Institute of Contaminant Standards",
    alternateName: "ICS",
    url: ICS_BASE,
    ...(ror ? { identifier: ror, sameAs: [ror] } : {}),
  }
}

export function karenEntity(ror = "") {
  return {
    "@type": "Person",
    "@id": KAREN_PERSON_ID,
    name: researcherIdentity.name,
    givenName: researcherIdentity.givenName,
    familyName: researcherIdentity.familyName,
    url: KAREN_PROFILE_URL,
    jobTitle: researcherIdentity.jobTitle,
    description: researcherIdentity.description,
    knowsAbout: researcherIdentity.researchTopics,
    // Evidence links remain one-way: do not link the Index to the certification site.
    sameAs: Object.entries(researcherIdentity.profiles)
      .filter(([key]) => key !== "heavyMetalCertified")
      .map(([, url]) => url),
    affiliation: researcherIdentity.affiliations.map((a) => ({
      "@type": "Organization", "@id": a.id, name: a.name, url: a.url,
    })),
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ORCID",
      value: researcherIdentity.orcid,
      url: KAREN_ORCID_URL,
    },
    worksFor: {
      "@type": "Organization",
      "@id": ICS_ORGANIZATION_ID,
      name: "Institute of Contaminant Standards",
      url: ICS_BASE,
      ...(ror ? { identifier: ror } : {}),
    },
  }
}

// Founder is an Organization → Person relationship; it is not an educational affiliation.
export function paleoFoundationEntity() {
  const paleo = researcherIdentity.affiliations.find((a) => a.id === "https://paleofoundation.com/#organization")
  return {
    "@type": "Organization",
    "@id": paleo.id,
    name: paleo.name,
    url: paleo.url,
    founder: { "@id": KAREN_PERSON_ID },
  }
}
