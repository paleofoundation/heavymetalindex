export type { SourceAdapter, Gap, FetchedDoc, AdapterLicense } from "./types"
export type {
  DiscoveryCandidate,
  DiscoveryCandidateDraft,
  DiscoveryCandidateStatus,
  MethodologyGrade,
} from "./schema"
export {
  DiscoveryCandidateSchema,
  DiscoveryCandidateDraftSchema,
  DiscoveryCandidateStatusSchema,
  MethodologyGradeSchema,
  DISCOVERY_CANDIDATE_STATUSES,
  candidateDedupKey,
  rawArtifactBlobKey,
  rawMetadataBlobKey,
  sanitizeBlobSegment,
  discoveryCandidateJsonSchema,
  discoveryCandidateDraftJsonSchema,
} from "./schema"
export {
  CANDIDATES_JSONL_PATH,
  openCandidateWriter,
  uploadFetchedDocToBlob,
} from "./writer"
export type { BlobUploader, BlobUploadResult, CandidateWriter } from "./writer"
export { createExampleAdapter } from "./example"
export { createPubMedAdapter } from "./pubmed"
export type { PubMedAdapterOptions } from "./pubmed"
export { createOpenAlexAdapter } from "./openalex"
export type { OpenAlexAdapterOptions } from "./openalex"
