export const HMI_BASE = "https://heavymetalindex.com"
export const HMI_ORGANIZATION_ID = `${HMI_BASE}/#organization`
export const HMI_WEBSITE_ID = `${HMI_BASE}/#website`
export const HMI_DATA_CATALOG_ID = `${HMI_BASE}/data#catalog`

export const ICS_BASE = "https://contaminantstandards.com"
export const ICS_ORGANIZATION_ID = `${ICS_BASE}/#organization`

export const KAREN_PROFILE_URL = `${ICS_BASE}/people/karen-pendergrass`
export const KAREN_PERSON_ID = `${KAREN_PROFILE_URL}#person`
export const KAREN_ORCID_URL = "https://orcid.org/0000-0002-2348-7259"

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
    name: "Karen Pendergrass",
    url: KAREN_PROFILE_URL,
    sameAs: [KAREN_ORCID_URL],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ORCID",
      value: "0000-0002-2348-7259",
      url: KAREN_ORCID_URL,
    },
    worksFor: {
      "@type": "Organization",
      "@id": ICS_ORGANIZATION_ID,
      name: "Institute of Contaminant Standards",
      ...(ror ? { identifier: ror } : {}),
    },
  }
}
