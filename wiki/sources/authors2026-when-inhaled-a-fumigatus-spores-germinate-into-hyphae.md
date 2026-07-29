---
type: source
raw_handle: RPMEHG_10-1186-s12918-015-0163-1
cite_key: authors2026-when-inhaled-a-fumigatus-spores-germinate-into-hyphae
title: "when inhaled A. fumigatus spores germinate into hyphae response or iron acquisition leads to attenuated virulence"
authors: ["Unknown authors"]
year: 2026
publication: "Peer-reviewed article"
doi: 10.1186/s12918-015-0163-1
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: "https://doi.org/10.1186/s12918-015-0163-1"
raw_path: "/Volumes/HMI-Library/heavy-metal-index-raw/manual-fetch/health-effects-batch-2026-05-13/metal_chelation_T2/T2_4418068_Iron_acquisition_and_oxidative_stress_response_in_aspergillu.pdf"
raw_sha256: "f85e70659c9100f95b35e44d69377926a84384e1385c60baa5179e330edc77bd"
metals: [Al, Cr]
ingredients: []
products: ["[[products/fish-marine-non-predatory]]"]
matrices: [fish-marine-non-predatory]
jurisdictions: [US]
sample_n: null
sample_population: "Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors."
updated: 2026-07-29
---

# authors et al. 2026 - when inhaled A. fumigatus spores germinate into hyphae response or iron acquisit

This source page is a mechanical bulk-ingest record for a PDF in the methylmercury infant-formula research pull. It preserves source-level identity, routeable product/analyte scope, and exact extracted numeric lines for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

## Key numbers

The worker extracted the full PDF text with layout preservation twice and compared extraction hashes before commit. The following lines are copied from numeric/table-bearing regions of the PDF and retain the source units and wording where legible:

- Brandon et al. BMC Systems Biology (2015) 9:19
- Brandon et al. BMC Systems Biology (2015) 9:19
- Aspergillus fumigatus is a ubiquitous airborne fungus inflammation of the cornea (7).
- asthma and sinusitis (1). The most severe form of A. fumi- arguments. First, several studies show that deletion of
- and invade lung tissue. IA is a major cause of mortality in vivo (5,8-10). Impairment of the corresponding host
- in immunocompromised human hosts (2-6). In immuno- defense mechanisms, e.g. defective ROS production or
- 1 Center for Cell Analysis and Modeling, University of Connecticut Health
- Center, 400 Farmington Ave, 06030 Farmington, USA concept that targeting either A. fumigatus oxidative stress
- 2 Center for Quantitative Medicine, University of Connecticut Health Center, response or iron acquisition systems may be an effective
- © 2015 Brandon et al.; licensee BioMed Central. This is an Open Access article distributed under the terms of the Creative
- Commons Attribution License (http://creativecommons.org/licenses/by/4.0), which permits unrestricted use, distribution, and
- waiver (http://creativecommons.org/publicdomain/zero/1.0/) applies to the data made available in this article, unless otherwise
- Brandon et al. BMC Systems Biology (2015) 9:19 Page 2 of 17
- uptake and oxidative stress response networks are known families that are unique to fungi (30). This might make it
- in both A. fumigatus and S. cerevisiae (13-15). These it was found in A. fumigatus that deletion of a key iron
- Several lines of evidence point to the A. fumigatus ROS- to superoxide (13). Also in A. fumigatus deletion of an
- drug targets. Firstly, on the host side, the activation of conidial, but not hyphal, catalase (33). Similarly, in A.
- sequent production of cytotoxic ROS by host phagocytic mulation of an intracellular siderophore (14). Finally, a
- gal pathogens such as A. fumigatus (16-18). Noteably, scription of high-affinity iron transport genes also showed
- mice that do not express a functional NOX complex hypersensitivity to hydrogen peroxide (15).
- for inhibiting A. fumigatus growth (10). From a fun- The role of mathematical modeling
- sure to human neutrophils from healthy individuals (19). pathogenicity, the iron acquisition and oxidative stress
- heightened sensitivity to ROS in vitro (9,10,20). lar interactions defining these networks. Mathematical
- (21). Iron deprivation of invading pathogens by the host Recently, the first computational model of A. fumiga-
- is a crucial host defense mechanism (22-24). To combat tus iron regulation was proposed (34). Taking a top-down
- teins. (25). A significant body of evidence suggests that dict new interactions between transcription factors and
- of whether infection will persist or be cleared (25-28). ential equations to model changes in gene expression as a
- (29). scription factor and a gene, from high-throughput tran-
- Leal et al. show that the use of topical drugs to tar- scriptomic experiments such as microarrays (13,29,35). In
- tus infection in mice cornea (10,12). The fungal iron tion and oxidative stress response, and we apply a discrete
- Brandon et al. BMC Systems Biology (2015) 9:19 Page 3 of 17
- dynamic modeling framework. Discrete models make use fungi (51). A. fumigatus has three known mechanisms of
- over an arbitrary unit of time in response to broad changes (RIA) (8). RIA involves the reduction of ferric iron to fer-
- tigating the ability of known or proposed information to of the ferroxidase FetC and the iron permease FtrA (52).
- such as gene regulatory networks, signaling pathways, from host proteins such as transferrin (53). A protein fam-
- and metabolic pathways (36-41). Discrete models have ily called siderophore-iron transporters (SIT) recognizes
- several pathogenic bacteria (42-44). To our knowledge, Fe3+ , the ferri-TAFC complex is taken back up by the
- discrete models have not yet been used to study A. fumi- TAFC-specific SIT MirB (54). After import into the cell
- been explored via discrete models (45-47). This includes esterase called EstB (55). Subsequently, breakdown prod-
- The model contains an oxidative stress response mod- ferritin-mediated iron storage (51). Instead, A. fumigatus
- iron uptake, iron storage, iron usage, and iron regulation. iron storage unit, the iron vacuole (49,56). Import of iron
- Figure 1 is a graphical representation of all model species into the vacuole is in part mediated by the protein CccA

## Methods (brief)

- active A. fumigatus siderophores (50). The first step in are modeled as a single species named ICP.
- ICP Iron consuming Low active high active
- 10 ICP(t+1) = (NOT HapX) AND (VAC OR FC+Fe ) HapX represses consumption of intracellular iron (29).
- four possible external conditions. States transition from top to bottom. Under both low iron conditions ICP is in state 0 (low) the majority of the
- reaches a stable configuration before counting begins). Vertical dashed lines mark stable distribution means (SDM). (D) The SDM of ICP and ROS for
- a wild type fungal cell under each of the four conditions overlayed with a depiction of the phenotype reference. If the SDM of ICP is 0, then we
- interpret the model observation as minimal or no growth. An ICP SDM in (0, 0.33) is interpreted as low growth. Otherwise, an ICP in (0.33, 1) signifies
- variables ROS and ICP to establish a phenotype refer- (Schrettl et al., 2008 (13)) or by qRT-PCR (this study, see
- SDM of ICP is 0, then we interpret the model observa- To mimic the switch from low iron to high iron con-
- tion as minimal or no growth. An ICP SDM in (0, 0.33) is ditions, all simulations were initialized from a state of
- interpreted as low growth. Otherwise, an ICP in (0.33, 1) iron starvation (Figure 4G). Iron and superoxide were
- both HapX and SreA ultimately activate and respectively to minimal or no growth (SDM of ICP = 0). However, no
- ICP ROS Other interesting behavior Growth Death
- A Sample O2- Trajectories
- x10 = ICP x11 = LIP x12 = CccA ticity at the functional level by introducing two update
- Mycelia were harvested from triplicate samples at 0 used as the fluorescent reporter molecule in all reactions.
- subsequently ground to a fine powder using a mortar and were collected from biological triplicates, and qRT-PCR
- with optional on-column DNase digestion step. Extracted

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

- [[products/fish-marine-non-predatory]]
- [[metals/aluminum]]
- [[metals/chromium]]

## Verification notes

- Identity check: DOI, raw handle, candidate cite-key, and SHA-256 were compared against existing `wiki/sources/` pages before creation.
- Full-PDF read: `pdftotext -layout` was run on the full PDF twice; extracted text hashes matched before the page was written.
- Numeric verification: numeric/table-bearing lines were selected mechanically from the verified extraction and preserved without unit conversion or rounding.
- Brand firewall: the worker skips PDFs when extracted numeric lines appear brand/manufacturer-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no threshold, percentile, pass/fail, clean/dirty, or certification math is stated.
