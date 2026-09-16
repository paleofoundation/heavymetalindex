export const HMI_BASE: string
export const HMI_ORGANIZATION_ID: string
export const HMI_WEBSITE_ID: string
export const HMI_DATA_CATALOG_ID: string
export const ICS_BASE: string
export const ICS_ORGANIZATION_ID: string
export const KAREN_PROFILE_URL: string
export const KAREN_PERSON_ID: string
export const KAREN_ORCID_URL: string
export function organizationEntity(ror?: string): Record<string, unknown>
export function karenEntity(ror?: string): Record<string, unknown>
export function paleoFoundationEntity(): Record<string, unknown>
