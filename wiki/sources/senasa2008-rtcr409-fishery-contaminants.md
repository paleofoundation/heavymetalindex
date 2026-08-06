---
type: source
cite_key: senasa2008-rtcr409-fishery-contaminants
title: "Decreto Ejecutivo No. 34687-MAG: RTCR 409:2008 fishery and aquaculture product limits"
authors: ["Servicio Nacional de Salud Animal (SENASA)", "Ministerio de Agricultura y Ganaderia"]
year: 2008
publication: "La Gaceta No. 160"
doi: null
no_doi_assigned: true
source_type: government-regulation
evidence_tier: A
license: public-law
raw_path: raw/regulatory/cr/costa-rica-rtcr409-2008-fishery-contaminants.pdf
raw_sha256: "5f23364a914e04dca45d3ba0b355a315a14df4e78e8244589e7c7633b2761506"
access_url: "https://www.imprentanacional.go.cr/pub/2008/08/"
metals: [tHg, Cd, Pb, Sn]
ingredients: []
products: []
matrices: [fishery-products, fish, crustaceans, bivalve-molluscs, cephalopods, canned-fishery-products]
jurisdictions: [CR]
near_duplicates: []
updated: 2026-08-06
---

This Costa Rican official-gazette source publishes Decreto Ejecutivo No. 34687-MAG, RTCR 409:2008, which sets maximum microbiological, veterinary-drug-residue, and contaminant limits for fishery and aquaculture products and subproducts intended for human consumption.

The routeable heavy-metal rows are in section 3, "Contaminantes quimicos." Section 3.1 lists mercury limits for fishery products, section 3.2 lists cadmium limits, section 3.3 lists lead limits, and section 3.4 lists a tin limit for canned fishery products. The source heading says mercury without a methylmercury qualifier, so HMI records those rows as `tHg` rather than `MeHg`.

Values are recorded in `data/evidence/regulatory_limits.csv` in `ug/kg`, converted from the source's `mg/kg` limits by multiplying by 1000. The source table does not state a wet-weight or dry-weight qualifier, so the structured rows preserve the legal basis as product placed on the market and note the missing wet/dry qualifier.
