---
type: synthesis
title: "Heavy metal exposure, microbial metal ecology, and disease pathogenesis: a first-principles framework for microbiome medicine"
slug: metals-microbiome-disease-pathogenesis
description: "A first-principles framework in which heavy metal exposure and disrupted metal allocation act upstream of the microbial functions that contribute to disease pathogenesis."
audience: [regulator, educator, researcher]
toc_labels:
  "1. Introduction: the microbiome has a chemical context": "Introduction"
  "Review approach and evidentiary boundaries": "Review approach"
  "2. Metal exposure is not the same as metal availability": "Exposure and availability"
  "3. Nutritional immunity reveals why metal allocation matters": "Nutritional immunity"
  "4. Redox defense, metal handling, and the transition from buffering to injury": "Redox defense and metal handling"
  "4.1 Glutathione is part of metal physiology, not merely an antioxidant label": "Glutathione and metal physiology"
  "4.2 Iron storage, glutathione-dependent protection, and ferroptosis": "Iron storage and ferroptosis"
  "4.3 Mismetallation can disrupt function without a large change in total metal": "Mismetallation"
  "4.4 Bile and melatonin connect host handling with the intestinal environment": "Bile and melatonin"
  "5. What the evidence already demonstrates": "Current evidence"
  "6. Nickel, microbial enzymes, and substrate-dependent risk": "Nickel and microbial enzymes"
  "Urea illustrates why exposure must be interpreted with the niche": "Urea and the microbial niche"
  "Lactoferrin and the need to identify the operative metal": "Lactoferrin"
  "7. Endometriosis: a metal-rich niche and the possibility of microbial amplification": "Endometriosis"
  "8. Drug metabolism: why the NSAID question is important but drug-specific": "Drug metabolism and NSAIDs"
  "9. Multiple sclerosis and zinc formulation: the concept of host-favoring nutrient delivery": "Multiple sclerosis and zinc"
  "10. Infant feeding: nutrients, metal-binding proteins, and microbial ecology": "Infant feeding"
  "11. From connected mechanisms to a falsifiable disease model": "Testing the disease model"
  "11.1 A causal sequence with feedback, not a single universal line": "Causal sequence and feedback"
  "11.2 The proposed metal-conditioned disease endotype": "Proposed disease endotype"
  "11.3 Measurement should follow the causal question": "Measurement"
  "11.4 Predictions that can be disproved": "Testable predictions"
  "12. Implications for intervention design and public knowledge": "Intervention design"
  "A foundational role for Wikibiome": "Role of WikiBiome"
  "13. Limitations": "Limitations"
  "14. Conclusion": "Conclusion"
  "Table 1. Evidence requirements for a proposed metal-conditioned disease endotype": "Evidence requirements"
  "How this page was published": "Publication history"
metals: [Ni, Zn, Fe, iAs, Cd, Cu, Mn]
ingredients: ["[[ingredients/infant-formula]]"]
products: ["[[products/infant-formula]]"]
anchor_sources: ["[[sources/coryell2019-gut-microbiome-arsenic-toxicity]]", "[[sources/hoen2018-infant-arsenic-gut-microbiome]]", "[[sources/soto-ocana2024-metal-availability-early-life-microbiome]]", "[[sources/coe2023-gut-microbiome-methylmercury-demethylation]]"]
wikibiome_crosswalk: metals-microbiome-disease-pathogenesis
established: 2026-09-08
wiki_doi: "10.83376/hmi.metals-microbiome-disease-pathogenesis"
updated: 2026-09-09
---

# Heavy metal exposure, microbial metal ecology, and disease pathogenesis: a first-principles framework for microbiome medicine

## Abstract

Microbial communities are frequently described by the organisms they contain, yet the chemical conditions that determine their behavior are equally important to pathogenesis. Metals occupy a distinctive position in this environment: they are nutrients, catalytic cofactors, regulatory signals, toxicants, and objects of competition between host and microorganisms. This review develops a framework in which heavy metal exposure and compartment-specific metal dyshomeostasis can precede microbial functional changes, weaken colonization resistance, and contribute to disease. Nutritional immunity, glutathione-dependent metal handling, metallothionein redox chemistry, and mismetallation provide mechanistic foundations.

Experimental [[metals/zinc|zinc]] exposure, human [[metals/iron|iron]]-fortification studies, [[metals/arsenic|arsenic]] toxicology, and [[metals/nickel|nickel]]-dependent microbial metabolism demonstrate different portions of the proposed causal sequence. Endometriosis, nonsteroidal anti-inflammatory drug enteropathy, multiple sclerosis, chronic kidney disease, and neonatal infection illustrate both translational opportunities and important evidentiary gaps. Particular attention is given to distinguishing environmental exposure from endogenous metal redistribution, total concentration from microbial accessibility, biochemical plausibility from clinical efficacy, and microbial association from mediation. Evidence supports metal-conditioned microbial pathogenesis in defined systems, but does not establish toxic-metal exposure as a universal origin of dysbiosis or chronic disease.

A proposed metal-conditioned disease endotype integrates exposure history, local metal availability, expressed microbial functions, host injury, and intervention responsiveness. This framework supports a shift from treating microbial composition in isolation toward identifying and modifying the conditions that make particular microbial activities pathogenic. Its clinical objective is not indiscriminate metal depletion, but restoration of appropriate metal allocation while reducing avoidable toxicant exposure.

_Keywords:_ metallomics; microbial ecology; heavy metal exposure; nutritional immunity; mismetallation; nickel; glutathione; microbiome-targeted interventions

## 1. Introduction: the microbiome has a chemical context

A disease-associated microorganism is not a complete explanation of disease. Its presence raises additional questions: why did this organism expand, which functions became advantageous, what changed in the host environment, and what permitted colonization to become injury? Microbiome medicine becomes more mechanistic when these questions are investigated alongside taxonomic associations. Metals deserve particular attention because experiments already show that changing their availability can alter community structure, antimicrobial defense, and susceptibility to infection. Dietary zinc perturbed the intestinal microbiota and increased susceptibility to Clostridioides difficile in mice, while iron-containing fortification changed enteric microbial and inflammatory outcomes in Kenyan infants. These are not interchangeable exposure models, but both show that a mineral intervention can also be an ecological intervention. [1, 2]

The central proposition of this review is that heavy metal exposure and disrupted metal allocation can be upstream determinants of microbial functions that contribute to disease pathogenesis. “Upstream” is used causally and locally: a metal disturbance may precede a microbial change without being the earliest cause of the entire disease. The proposition includes nonessential toxicants and metalloids, such as [[metals/cadmium|cadmium]] and arsenic, as well as inappropriate availability of physiologically essential metals. It does not imply that all metals are harmful, all microbial changes are pathological, or all chronic diseases begin with metal exposure. Experimental arsenic and cadmium studies demonstrate exposure-associated microbial and metabolic perturbation; human arsenic studies provide evidence of association, with causal mediation of disease less firmly established. [3, 4, 5]

This distinction matters because an exclusive focus on microbial abundance can mistake an ecological consequence for an autonomous cause. Removing an organism may not permanently change the environment that favored it. Conversely, introducing a beneficial organism may not restore its function in a chemically unfavorable niche. These are predictions of an ecological model, not explanations that should be imposed retrospectively on every treatment failure. They direct attention toward the measurable conditions under which an intervention can succeed.

Metal biology offers a particularly strong entry point into this reasoning. The host invests in proteins that withhold metals, transporters that redistribute them, and cellular machinery that limits inappropriate metal access. Calprotectin-mediated nutrient restriction, hepcidin control of iron export, and [[metals/copper|copper]] delivery during macrophage defense demonstrate that metal allocation is integral to immunity. In evolutionary terms, the body does not “understand” metals; it embodies adaptations to their indispensable but potentially destructive chemistry. [6, 7, 8]

Substantial literatures already address nutritional immunity, environmental toxicology, and metalloenzymes. Their convergence creates an opportunity to connect discoveries that are often interpreted at different biological scales. The task is to integrate these mechanisms with disease-specific microbiome interpretation. The proposed advance is a disease-oriented synthesis: exposure science identifies the input, metallomics characterizes its biological disposition, microbial functional analysis identifies the ecological response, and clinical research tests the consequences. The significance of this integration does not depend on claiming that any one contributing discipline has overlooked metals entirely.

### Review approach and evidentiary boundaries

This is a targeted critical narrative review, not a systematic review or meta-analysis. Primary biochemical, cellular, animal, observational, and interventional studies were sought through PubMed/PMC and publisher-indexed searches, with searches completed on 8 September 2026. Searches combined metal names and metallomics with nutritional immunity, glutathione, mismetallation, microbial enzymes, endometriosis, drug enteropathy, multiple sclerosis, infant feeding, and neonatal infection. Studies were selected to test the proposed connections, including findings that constrain or contradict them. No exhaustive screening count, pooled effect estimate, formal risk-of-bias score, or comprehensive coverage of every metal is claimed.

Evidence is distinguished by what it establishes: molecular capability, causal effects in experimental systems, associations in humans, or effects of a clinical intervention. These categories are descriptive rather than a formal grading instrument. Mechanisms demonstrated in different organisms, tissues, or populations are not treated as a completed causal chain simply because they can be arranged into one.

## 2. Metal exposure is not the same as metal availability

“Heavy metals” is a useful public-facing phrase but an imprecise biological category. The relevant distinctions concern elemental identity, chemical species, concentration, ligand environment, location, and biological role. Arsenic is a metalloid. Iron and zinc are essential nutrients whose excess or misallocation can be harmful. Nickel can support specific microbial enzymes, whereas the usefulness of a metal to a microorganism does not establish an equivalent nutritional requirement in its host. The framework therefore uses metal exposure for the external input and metal dyshomeostasis for disturbed distribution, buffering, or use. [2, 3, 9, 10]

The distinction between total content and availability is fundamental. A laboratory may measure substantial iron that remains tightly associated with proteins, or modest total zinc accompanied by a biologically consequential exchangeable fraction. A bacterium encounters a local chemical environment, not the average concentration of an organ or the reference range of a blood test. Calprotectin experiments establish that ligand-mediated sequestration can change bacterial access to metals. Conversely, bacterial scavenging systems can make particular organisms more competitive under metal restriction. [6, 11, 12]

Three separations follow. External exposure must be distinguished from internal redistribution: bleeding, inflammation, and altered transport can create metal-rich niches without a new environmental exposure. Systemic status must be distinguished from local status: low circulating availability can coexist with sequestration elsewhere. Finally, intracellular labile metal must be distinguished from extracellular metal accessible to microorganisms. Evidence of one does not automatically establish the others. Hepcidin-mediated iron redistribution, peritoneal iron accumulation in endometriosis, and redox-dependent zinc release from metallothionein illustrate different processes that require different measurements. [7, 13, 14]

A mechanistic analysis should therefore ask not simply whether a patient has “high nickel” or “low zinc,” but which chemical pool is altered, where the relevant microbes reside, and whether that pool can reach their metal-dependent machinery. This is particularly important when evaluating supplements: a compound's elemental content, host absorption, intestinal persistence, and microbial accessibility are related but distinct properties. Human zinc-absorption experiments confirm formulation-dependent differences, but do not establish that a better-absorbed formulation is invisible to microbes. [15]

The practical consequence is that a metallomic signature should not be interpreted as a list of universally elevated elements. For the present framework, it is a spatially and temporally specified pattern of metal abundance, speciation, binding, and biological availability. A disease-associated signature may be informative without being causal; causal interpretation requires evidence about how and when it developed.

## 3. Nutritional immunity reveals why metal allocation matters

Nutritional immunity provides direct evidence that access to metals can determine host–microbe outcomes. Corbin and colleagues demonstrated metal sequestration associated with calprotectin in tissue abscesses and linked this process to restriction of bacterial growth. This is not merely an association between a mineral measurement and disease: it connects a host metal-binding mechanism with microbial fitness in an infected compartment. [6]

The host achieves metal restriction through several distinct mechanisms. Lactoferrin binds iron and can alter microbial behavior; lipocalin-2 binds particular iron-bearing siderophores; hepcidin changes iron availability by inducing internalization of the exporter ferroportin. These molecules should not be grouped as interchangeable chelators. Their substrates, locations, and mechanisms differ. A measurement of increased hepcidin, for example, does not mean that the hormone directly binds nickel or zinc. [7, 16, 17]

Host defense also uses excess metal, rather than deprivation alone. Experimental work implicates the copper transporter ATP7A in macrophage bactericidal activity. The relevant principle is controlled allocation: metals may be withheld from one compartment and delivered to another. The biological objective is not a metal-free organism but a host that can maintain its own essential chemistry while constraining microbial access or imposing local toxicity. [8]

This also explains why scarcity does not always favor the host at the community level. In an inflamed intestinal model, calprotectin-mediated zinc sequestration enhanced the competitive position of Salmonella relative to organisms less capable of obtaining zinc under restriction. The result does not mean calprotectin is intrinsically harmful. It demonstrates that a defense effective against some organisms can reshape competition in favor of others. [11]

Nutritional immunity therefore supports a more precise thesis than “more metal feeds pathogens.” Both surplus and scarcity can reorganize an ecosystem, depending on the organisms and their acquisition, buffering, and detoxification capabilities. Nor is metal tolerance synonymous with pathogenicity. A microorganism may tolerate a toxicant while providing useful functions; another may become harmful only in a susceptible host or tissue. The proposed disease mechanism is the conjunction of a chemical opportunity, a microbial capability, and a vulnerable host, rather than a taxonomic label alone. This explains why the same organism can have different consequences in different patients: the organism is only one component of the pathogenic interaction. [11, 18]

The evolutionary rationale is correspondingly broad. The same elements that enable catalysis can facilitate microbial persistence or damage host proteins when misallocated. Nutritional immunity and intracellular metal protection address different aspects of this shared chemical constraint. Their existence establishes the importance of metal control, but does not by itself show that contemporary toxicant exposures explain any particular chronic disease. [6, 19, 20]

## 4. Redox defense, metal handling, and the transition from buffering to injury

### 4.1 Glutathione is part of metal physiology, not merely an antioxidant label

Glutathione connects redox balance with metal binding and transport. Experimental studies of biliary excretion showed that depletion of glutathione reduced hepatobiliary elimination of methylmercury, cadmium, and zinc. Work on zinc in rat bile identified low-molecular-weight fractions consistent with zinc–glutathione complexes. These findings provide a concrete basis for connecting metal handling with the availability and movement of thiol-containing molecules. They do not imply that glutathione supplementation invariably removes metal burdens or improves disease in humans. [21, 22]

The glutathione redox couple also affects zinc transfer from metallothionein. Metallothionein is not simply a passive container: its cysteine-rich metal-binding chemistry responds to oxidation and ligand exchange. Primary experiments demonstrated oxidative zinc release and modulation of zinc transfer by the glutathione redox couple. Consequently, oxidative stress and metal dyshomeostasis can interact bidirectionally. A change in redox state can alter metal buffering, while a metal disturbance can increase demand on protective chemistry. [14, 23]

This supports a mechanistic hypothesis of interacting stresses. Environmental exposure, inflammation, and reactive drug metabolites may converge on overlapping protective systems. However, a shared dependence on glutathione does not establish a single exhaustible “detoxification reserve” whose depletion can be inferred from symptoms. Relevant quantities include synthesis, recycling, compartmental distribution, conjugation, and export. The clinical question is whether a specified combination of exposures measurably changes those processes and produces a defined outcome. [21, 23, 24]

### 4.2 Iron storage, glutathione-dependent protection, and ferroptosis

Iron illustrates why metal homeostasis involves regulated storage and release as well as exclusion. Ferritin-associated iron can be mobilized through selective turnover of ferritin, a process termed ferritinophagy. The identification of NCOA4 as its cargo receptor established a molecular route connecting intracellular protein turnover with iron availability. A change in the available iron pool can therefore reflect regulated host handling rather than an increase in external intake. [25]

The connection to antioxidant biology is especially direct in ferroptosis, an iron-dependent form of regulated cell death. Experimental work identified glutathione peroxidase 4 (GPX4) as a central regulator of protection against this form of lipid-associated injury and linked glutathione depletion to loss of protective peroxidase activity. These findings place iron availability and glutathione-supported defense within the same injury mechanism. They also show why the generic term “oxidative stress” can obscure biologically important differences between metals and protective pathways. [26, 27]

For the present framework, these mechanisms have two implications. First, endogenous metal mobilization may help determine how an exposed or inflamed tissue responds. Second, metal-related injury can arise directly in host cells, without requiring microbial mediation. An integrated disease model should therefore separate direct host injury from microbial amplification and investigate their interaction, rather than assigning every metal-associated outcome to a change in community composition.

### 4.3 Mismetallation can disrupt function without a large change in total metal

Mismetallation concerns inappropriate occupation or disruption of metal-dependent biological sites. Its consequences depend on binding affinity, access, kinetic constraints, and cellular metal management. In a defined bacterial system, zinc interfered with manganese acquisition, compromising manganese homeostasis. Copper toxicity has also been traced to damage to iron–sulfur clusters in dehydratase enzymes. These studies demonstrate that a metal can be harmful because it interferes with another metal's function, not only because it produces a generic oxidative burden. [19, 20]

The proposed sequence from toxicant exposure to zinc displacement and microbial selection is therefore chemically plausible, but must be decomposed. One must establish that the exposure changes a particular binding site or buffer, that zinc becomes labile, that it reaches the extracellular compartment of interest, and that a relevant microorganism can access it. Intracellular zinc release from metallothionein does not, by itself, demonstrate an extracellular nutrient pool. Likewise, total extracellular zinc does not establish increased microbial uptake. [6, 14, 23]

This distinction strengthens rather than weakens the research program. It identifies the missing measurements that would transform an attractive explanatory diagram into a causal account. It also permits falsification: a proposed zinc-mediated pathway should be revised if the extracellular accessible pool does not increase, or if microbial function changes independently of it.

### 4.4 Bile and melatonin connect host handling with the intestinal environment

Bile connects host metabolism with the intestinal environment, but bile secretion, bile salts, and metal-binding ligands should not be conflated. Glutathione-associated biliary zinc transport supports a role for hepatobiliary handling of metals. Separately, an experimental study of an extraintestinal pathogenic Escherichia coli strain linked bile-salt exposure to zinc uptake and capsule biology. Together, these findings motivate investigation of bile–metal–microbe interactions; they do not establish that bile acids function primarily as a physiological zinc-chelation system. [22, 28]

Melatonin likewise provides an example of a molecule intersecting with metal-associated oxidative injury. In mice, melatonin attenuated aspects of cadmium-induced oxidative damage, including effects involving glutathione. This supports study of redox protection in metal toxicology, but not the conclusion that melatonin's principal biological purpose is heavy metal removal or that clinical benefit requires chelation. Mechanistic integration should preserve the difference between limiting oxidative injury, changing metal distribution, and actually lowering retained metal burden. [29]

The broader insight is that “antioxidant,” “immune,” and “detoxification” mechanisms are not separate boxes. Their chemistry intersects. Nevertheless, an intervention's ability to affect one box cannot substitute for evidence that it interrupts the disease pathway under investigation.

## 5. What the evidence already demonstrates

The strongest evidence should anchor the framework before it is extended to complex diseases. In the zinc–C. difficile model, dietary zinc altered the microbiota and reduced resistance to infection, including increased susceptibility under less extensive antibiotic disruption. This establishes a causal role for altered zinc exposure in that experimental setting. It does not establish that ordinary zinc intake causes human C. difficile infection, or that nonessential metal contamination produces the same effect. [1]

Human iron-fortification research supplies a different form of evidence. Jaeggi and colleagues reported increased enteropathogen abundance and intestinal inflammation following iron-containing fortification in Kenyan infants. The significance is not that iron should be withheld from children who need it. It is that the nutritional value of an intervention to the host and its ecological effects in the intestine must be evaluated together. Population, baseline deficiency, infection burden, formulation, and accompanying nutrition constrain extrapolation. [2]

Environmental-toxicant studies provide complementary evidence. Lu and colleagues found that arsenic exposure changed both microbial composition and metabolic profiles in mice. Zhang and colleagues linked cadmium exposure to gut microbial perturbation and altered hepatic energy metabolism. These experiments establish exposure-related effects, but simultaneous host and microbiome changes do not, alone, determine what proportion of host injury was mediated by microbes rather than direct toxicity. [3, 4]

Human evidence includes associations between infant arsenic exposure and gut community composition, with sex-specific patterns in a United States cohort. Such findings justify longitudinal investigation but do not demonstrate a universal arsenic-associated microbiome or a completed exposure-to-disease pathway. Variation between people and settings is not a reason to abandon the hypothesis; it is a reason to specify the conditions under which it predicts an effect. [5]

Importantly, microbes can protect against metals as well as transmit their effects. Coryell and colleagues showed that the microbiome protected mice against acute arsenic toxicity: antibiotic-treated and germ-free animals excreted less arsenic in stool and accumulated more in organs. This result rules out a one-directional account in which the microbiome is only a victim or amplifier of exposure. Some community changes may be compensatory, and indiscriminate microbial depletion may remove protective functions. [18]

Metal selection may also intersect with antimicrobial resistance. A genomic analysis found co-occurrence of resistance determinants for antibiotics, biocides, and metals, supporting the potential for co-selection. Genomic linkage is not proof that a particular patient's metal exposure caused antibiotic resistance. It nonetheless supplies another reason to examine environmental metal selection alongside conventional antimicrobial pressure. [30]

Taken together, these studies support the existence of metal-conditioned microbial disease mechanisms. They do not quantify the fraction of chronic disease attributable to them. That unresolved attribution is a research question, not a justification for treating metals as peripheral by default.

## 6. Nickel, microbial enzymes, and substrate-dependent risk

Nickel makes the importance of microbial function especially clear. Certain [[microbiome/nickel-microbial-pathogenesis|microbial enzymes require nickel-containing active sites]], including urease and [NiFe]-hydrogenases. Nickel-responsive regulation of urease expression has been demonstrated in Helicobacter pylori. Metal availability can therefore influence both catalytic competence and regulation, rather than merely supplying biomass. These effects remain organism- and context-specific; increasing nickel is not expected to increase virulence indefinitely, because excess metal can also be inhibitory. [9, 31]

The word “glyoxalase” requires similar precision. Structural studies establish nickel activation of E. coli glyoxalase I, but glyoxalases are not a single uniform nickel-dependent class. An annotation for glyoxalase, hydrogenase, or urease should not be converted automatically into a pathogenicity score. Species, enzyme family, actual cofactor requirement, expression, activity, and local substrate availability all matter. A function that protects microbial metabolism is not intrinsically evidence of tissue invasion or disease. [10]

Host nickel restriction has been demonstrated directly. Human calprotectin can sequester nickel and inhibit nickel-dependent microbial activities in experimental systems, including urease activity. This provides a mechanistic connection between nutritional immunity and nickel biology. Nickel-selective chelation has also shown antimicrobial and protective effects in preclinical work involving enteric pathogens. These findings support a therapeutic target class, not the clinical use of a laboratory chelator without human efficacy and safety evidence. [12, 31]

Clinical investigation of dietary nickel provides an additional bridge. A 52-participant pilot study reported higher H. pylori eradication with a nickel-restricted diet added to antibiotic therapy. A 2025 randomized study also reported higher eradication in its per-protocol analysis, but the intention-to-treat difference was not statistically significant. These signals justify better trials using contemporary treatment comparators and verified exposure reduction. They do not establish diet as a substitute for eradication therapy or demonstrate that the observed benefit was specifically mediated through reduced nickel incorporation into urease. [32, 33]

### Urea illustrates why exposure must be interpreted with the niche

Urease links available urea to ammonia-generating metabolism. In chronic kidney disease, elevated urea and altered intestinal conditions provide a plausible context for harmful ureolysis. Experimental work connected urea and urease-related chemistry with epithelial barrier disruption, and a human end-stage renal disease study reported expansion of microbial groups inferred to possess urease-related capabilities. The latter relied on taxonomic functional inference and should not be read as direct measurement of all relevant enzymes. [34, 35]

The combined hypothesis is that accessible nickel, available urea, active urease, and host vulnerability may jointly determine risk. “Urea plus nickel” alone is not sufficient: nickel may not be limiting, the enzyme may not be expressed, the organism may be absent, or the reaction products may not reach damaging concentrations in the relevant compartment. The interaction needs direct testing rather than assumption. The value of integrating metallomics is to identify when these conditions coincide and which component is limiting. [9, 34, 35]

### Lactoferrin and the need to identify the operative metal

Lactoferrin's iron-binding biology supplies a strong mechanistic foundation. In experimental Pseudomonas aeruginosa systems, lactoferrin-mediated iron restriction altered behavior and prevented biofilm development. This demonstrates how a host protein can change pathogenic organization without being interpreted solely as a conventional bactericidal agent. [16]

However, the literature considered here does not establish that lactoferrin improves endometriosis, multiple sclerosis, or neonatal infection through physiologically significant nickel sequestration. Binding capacity under a chemical assay would not itself prove that mechanism in vivo. Calprotectin currently provides the more direct example of demonstrated host nickel sequestration in the cited studies. A lactoferrin hypothesis should specify the relevant metal, protein preparation, saturation state, compartment, and measured target engagement, rather than treating all antimicrobial effects as proof of nickel chelation. [12, 16, 36]

## 7. Endometriosis: a metal-rich niche and the possibility of microbial amplification

Endometriosis illustrates why metals and microbes should be investigated together, while also showing why their independent associations must not be joined prematurely. Human studies demonstrate increased iron in the peritoneal environment of affected patients. Local bleeding and iron handling provide mechanisms for such accumulation that do not require increased environmental iron exposure. A murine study found that iron overload enhanced epithelial proliferation in endometriotic lesions, without demonstrating increased initial lesion establishment. Thus, iron can participate in progression even when it is not the initiating cause. [13, 37]

An iron-rich inflammatory niche could plausibly favor organisms able to acquire iron and withstand associated stress. That ecological proposition is compatible with nutritional-immunity research, but it is not yet a demonstrated general explanation of endometriosis-associated microbes. Iron measured in peritoneal fluid cannot be substituted for microbial exposure in the bowel, vagina, or endometrium. These compartments must be connected by evidence, not by their inclusion in a single patient-level diagram. [6, 11, 13]

Microbial studies provide a separate line of investigation. Muraoka and colleagues reported an association of Fusobacterium with endometriosis and experimental evidence connecting infection with fibroblast changes and lesion development. A subsequent study did not reproduce a significant enrichment of F. nucleatum in eutopic endometrium. The disagreement reinforces the need to examine sampling location, patient population, laboratory contamination, and analytical methods. Neither study establishes an antecedent metal exposure that selected the organism. [38, 39]

Environmental metal associations are also heterogeneous. A United States study reported an association between urinary cadmium and endometriosis prevalence, while the ENDO Study did not provide a consistent positive association across the metals and matrices it evaluated. Differences in exposure biomarkers, renal handling, selection of comparison groups, and disease timing complicate interpretation. These findings favor investigation of distinct metal-associated endotypes rather than assignment of a single multi-metal pattern to the entire disease. [40, 41]

A productive hypothesis is narrower: a subset of endometriosis may involve metal-dependent microbial amplification superimposed on bleeding, inflammation, and hormone-responsive tissue biology. The proposed pathway is local metal disturbance, selection or activation of a relevant microbial function, and consequent host injury or lesion persistence. Each transition requires evidence within a biologically connected compartment and time sequence.

This model also has room for microbial independence. Iron-related tissue effects may occur without microbial mediation; microbial effects may occur without a metal disturbance. Demonstrating both routes would improve rather than defeat the framework, because it would identify which patients and mechanisms are appropriate targets. Clinical translation should preserve treatment of documented deficiencies and require evidence of benefit before disease-specific metal restriction or chelation is adopted. [37, 38, 41]

## 8. Drug metabolism: why the NSAID question is important but drug-specific

Glutathione-dependent handling of reactive drug metabolites creates a plausible point of interaction between medication exposure and metal physiology. NSAIDs nevertheless require drug-specific analysis rather than classification as a uniformly glutathione-cleared group. Diclofenac can generate reactive metabolites captured as glutathione conjugates in experimental systems, whereas oxidation and glucuronidation also participate in its disposition. Identification of a glutathione conjugate does not demonstrate clinically consequential depletion at every therapeutic exposure. [24]

An especially strong host–microbe mechanism is available without assuming metal causation. Bacterial β-glucuronidases can reactivate glucuronidated drug products reaching the intestine. Pharmacological inhibition of bacterial β-glucuronidase reduced NSAID-associated enteropathy in mice. This connects host conjugation, intestinal microbial enzyme activity, and tissue injury, and shows why the same drug can be interpreted through both pharmacology and microbial ecology. [42]

The metallomic extension is a testable interaction: prior metal-associated redox disturbance might alter susceptibility to a drug whose reactive intermediates require protective thiol chemistry, while the local microbial community determines deconjugation and re-exposure. The existing studies establish component mechanisms, not the completed sequence from metal exposure to glutathione depletion to microbial change to NSAID injury. Demonstrating that interaction would require concurrent measures of exposure, drug metabolites, redox state, microbial function, and clinical injury. [21, 24, 42]

This formulation avoids two errors. It does not reduce NSAID toxicity to glutathione depletion, and it does not assume that every relevant bacterial β-glucuronidase is a metal-dependent enzyme. It also preserves an actionable research question: whether a patient's chemical and microbial context helps explain heterogeneous drug tolerance beyond dose and conventional risk factors.

## 9. Multiple sclerosis and zinc formulation: the concept of host-favoring nutrient delivery

Zinc aspartate offers an instructive example of the difference between a promising mechanism and a comparative clinical conclusion. Oral zinc aspartate improved outcomes in experimental autoimmune encephalomyelitis, with effects involving immune-cell function. This is relevant preclinical evidence, but experimental autoimmune encephalomyelitis is not a human multiple sclerosis trial. The study did not establish that zinc aspartate outperforms zinc oxide in people with MS by depriving potentially pathogenic microbes of zinc. [43]

Human absorption research confirms that formulation can matter: zinc citrate and gluconate were better absorbed than zinc oxide under the conditions of a small crossover study in healthy adults. That comparison did not test zinc aspartate or MS, and it did not measure microbial exclusion. Better host absorption could, in principle, reduce residual intestinal exposure at an equivalent administered amount. Whether it does so in practice depends on digestion, ligand exchange, intestinal secretion, and the organisms present. [15]

The appropriate translational concept is host-favoring nutrient delivery: preserve correction of a genuine nutritional deficit while minimizing unwanted ecological consequences. This is a proposed design objective, not a property that can be assumed from the word “chelated.” It calls for direct comparative pharmacokinetic and microbial-function measurements before disease-specific superiority claims are made.

A metal-centered MS model must also accommodate strong evidence for other etiologic factors. Longitudinal research links Epstein–Barr virus infection to subsequent MS risk. Metals may modify susceptibility, immune function, or microbial context without displacing that evidence. The framework is most useful when it helps explain interactions and heterogeneity, rather than competing to make one exposure the sole cause of a multifactorial disease. [44]

## 10. Infant feeding: nutrients, metal-binding proteins, and microbial ecology

Human milk provides a compelling setting for considering nutrition and microbial defense together. Lactoferrin's presence in milk and its iron-binding antimicrobial biology support a model in which feeding influences not only host nutrient supply but also the accessibility of those nutrients to microbes. Nevertheless, the function of a component in human milk cannot be equated automatically with the effect of adding an isolated preparation to formula or another feeding regimen. [16, 36, 45]

Clinical trial evidence is essential here. An early randomized trial in very-low-birth-weight infants found reduced late-onset sepsis with bovine lactoferrin supplementation. In contrast, the substantially larger ELFIN trial in 2,203 very preterm infants did not demonstrate a significant reduction in late-onset infection: the adjusted risk ratio was 0.95, with a 95% confidence interval of 0.86–1.04. A further randomized trial published in 2025 also did not establish prevention of late-onset sepsis in its study population. These findings require discussion of preparation, population, background feeding, and clinical endpoints; they do not permit a general claim that omission of added lactoferrin causes neonatal sepsis. [36, 45, 46]

Metal exposure in formula merits equally careful scrutiny. Analytical studies have measured nickel and other elements in infant formulas, with some older comparisons reporting higher nickel in soy-based than milk-based products. These data establish the relevance of product composition and manufacturing inputs, not the current contamination status of every product in a category. A 2025 German dietary-exposure assessment included formula-related nickel exposure, but concerned children aged approximately six months to three years, not premature neonates. [47, 48]

The proposed nickel–microbe pathway is biologically intelligible: a feed could influence available nickel, which could affect nickel-dependent functions in an organism already present, potentially modifying colonization or injury. However, it has not been established that nickel in soy-based formula causes Klebsiella infection through urease, hydrogenase, or glyoxalase activity in premature infants. The identity of the enzyme and its cofactor cannot be inferred reliably from a broad pathogen category, and formula exposure must be measured rather than assumed. [10, 12, 47]

There is a clinically meaningful microbial pathway to investigate. Strain-resolved research has shown that gut colonization can precede bloodstream infection in neonatal intensive care. That observation supports studying the conditions that permit colonization and translocation. It does not identify nickel as their cause. Antibiotic exposure, barrier immaturity, hospital acquisition, feeding, and other features of neonatal care remain competing or interacting explanations that a metal-focused study would need to measure. [49]

The appropriate conclusion is a research and manufacturing priority: evaluate contaminant inputs, necessary nutrient delivery, metal-binding context, and microbial outcomes together. Changes to neonatal nutrition or metal-directed treatment require clinical evidence and specialist oversight; compositional hypotheses alone do not justify altering prescribed feeds or fortification. A protective intervention must demonstrate that it improves infant outcomes while preserving the nutritional functions on which development depends.

## 11. From connected mechanisms to a falsifiable disease model

### 11.1 A causal sequence with feedback, not a single universal line

The proposed analytical sequence is: exposure or endogenous redistribution → compartment-specific metal availability → microbial selection or functional activation → host injury → disease expression. This is a hypothesis-organizing structure. Each arrow is a separate causal proposition, and some pathways may bypass the microbiome entirely. Its value is to make a complex system experimentally interpretable without assuming that disease biology is strictly linear. Table 1 specifies the evidence needed at successive stages.

Feedback is particularly important. Injury and inflammation can change nutrient access and the intestinal environment, enabling organisms already present to expand. Experimental work showing that host-derived nitrate promotes E. coli growth in the inflamed gut demonstrates that nonmetal changes in the niche can be causal. A metal disturbance could initiate or amplify such a loop, but evidence of an inflammatory bloom does not establish a metal origin. [50]

Timing must therefore be resolved explicitly. A metal abnormality found after disease onset may be a cause, a consequence, an adaptive response, or a combination. An upstream trigger can also become dispensable after a self-sustaining inflammatory process develops. As a prediction of this framework, exposure reduction might prevent initiation more effectively than reverse established disease; persistence after exposure reduction would not automatically exclude an earlier causal contribution.

### 11.2 The proposed metal-conditioned disease endotype

A metal-conditioned disease endotype is proposed here as a subgroup in which a specified metal disturbance makes a demonstrable contribution to disease through microbial function. This is not an established diagnostic category. Its evidentiary requirements are a credible exposure or redistribution process, an altered accessible metal pool in a relevant compartment, an expressed microbial capability responsive to that pool, a connected host injury pathway, and evidence that changing the proposed driver changes downstream biology.

A case-control association between blood metal concentration and stool taxa would be a starting observation, not sufficient confirmation. Nor would improvement after a broad intervention establish the mechanism if the intervention simultaneously changed diet, medications, inflammation, and microbial composition. The model should be strengthened or rejected on the basis of mediation and target engagement, not protected from contradiction by adding unmeasured links.

### 11.3 Measurement should follow the causal question

Studies should pair conventional elemental measurements with information about chemical species, ligands, labile pools, and spatial location where feasible. Exposure assessment should distinguish intake from absorbed dose and account for excretion, renal function, and disease-associated redistribution. A tissue average should not be treated as a map of the microenvironment encountered by an organism. Sampling should therefore match the proposed site of action and, ideally, precede disease progression.

Microbial characterization should move beyond relative abundance alone. Absolute burden, strain identity, expressed functions, relevant enzyme activity, and metabolite production answer different questions. A taxon may rise proportionally because its competitors decline; a virulence-related gene may be present without being expressed. Low-biomass tissues require stringent collection and analytical controls because contamination can create misleading disease associations. These are proposed design requirements, not a claim that every cited study measured all of these features.

Host measurements should be selected to test the link under investigation: barrier function, inflammatory response, tissue remodeling, redox handling, or another defined mechanism. A fall in total metal, a shift in stool composition, or a reduction in a nonspecific inflammatory marker should not independently stand in for clinical benefit. Repeated measurements are needed to establish sequence rather than contemporaneous correlation.

### 11.4 Predictions that can be disproved

The framework makes several linked predictions. Within a valid endotype, the relevant microbial function should track the local accessible metal pool more closely than an unrelated systemic concentration. Correcting the proposed driver should change microbial function before, or alongside, improvement in the connected injury pathway. Patients lacking the implicated function should respond differently from those expressing it. Finally, direct host toxicity and microbial mediation should be distinguishable rather than presumed to be the same process.

These predictions invite prospective human studies, carefully controlled mechanistic research, and trials that incorporate exposure reduction or selective allocation strategies. Mediation analyses should consider confounding, reverse causation, and time-varying feedback. Studies using transferred biological material also need to distinguish effects of microbes from carried-over metals, metabolites, and inflammatory components. The conceptual requirement is causal separation, not simply replication of a disease phenotype.

The model should be revised when its specified intermediate is absent or when modifying it does not affect the predicted downstream biology. Negative results are particularly valuable when they identify the boundary between direct metal toxicity, microbial response, and microbial contribution to disease.

## 12. Implications for intervention design and public knowledge

The intervention target is appropriate metal allocation, not indiscriminate depletion. In a validated pathway, the best point of intervention might be an avoidable external exposure, impaired host buffering, a local metal pool, a microbial acquisition process, or a downstream injury mechanism. Which target is preferable depends on causal evidence and on the risk of harming essential host physiology. Nutritional-immunity research and the divergent consequences of intestinal zinc restriction make clear why “less metal” is not a universal therapeutic objective. [6, 8, 11]

The same reasoning applies to probiotics, dietary changes, and other microbiome-targeted interventions. The framework predicts that correcting a persistent selective pressure may sometimes be necessary for durable ecological change. This should be evaluated, not assumed. It also predicts that indiscriminate antimicrobial treatment could be counterproductive when the affected community contributes to toxicant handling, as demonstrated in experimental arsenic studies. [18]

Exposure prevention and mechanism-based treatment operate at different levels. Reducing avoidable toxicant contamination in food or water can be justified by established toxicology without proving a microbiome mechanism for every benefit. Microbiome research may identify additional vulnerable subgroups, relevant exposure windows, and unintended consequences of nutrient delivery. Conversely, appropriate mineral replacement should not be withheld because another form, dose, or context produced microbial harm. [2, 3, 4, 15]

### A foundational role for Wikibiome

For Wikibiome, the practical implication is an evidence architecture that links microbes to the environments that select and activate them. A disease entry should distinguish measured findings from inferred mechanisms and retain the location, population, exposure, and study design associated with each claim. A microbial entry should identify supported metal-dependent functions without implying that every strain expresses them or that each function is pathogenic.

Every proposed intervention should connect to an explicit causal target and show whether its evidence is biochemical, preclinical, observational, or interventional. Contradictory findings should appear beside supportive ones. An observed association should not be presented with the same status as a demonstrated causal link, and a “stop” advisory should require a clinical justification rather than merely a plausible ecological concern.

This structure gives metallomics prominence for a scientific reason: it can explain why a microbial capability becomes consequential in a particular setting. It supports discrimination between diseases, between patients within a disease, and between microbial functions within a taxon. The aim is explanatory discrimination: identify which metal, which pool, which function, which host pathway, and which intervention actually matter.

First-principles understanding should guide new microbiome-targeted interventions, but need not delay effective care whose benefit is already demonstrated. Mechanistic investigation and clinical outcome evidence are complementary. Better medicine requires both a plausible account of what an intervention changes and reliable evidence that the change helps patients.

## 13. Limitations

This review is hypothesis-driven and selectively integrates heterogeneous literatures. Different exposure levels, routes, species, feeding contexts, tissue compartments, and endpoints limit comparability. Several central molecular studies are not human disease studies. The human evidence is stronger for some nutritional interventions than for environmental-toxicant mediation of chronic disease. Publication bias and the difficulty of measuring local metal availability may further distort the apparent strength of the model.

The review does not establish an attributable fraction of disease due to metals, a validated universal metallomic signature, or the efficacy of an integrated treatment program. It does not support using commercial metal panels or microbiome profiles as standalone diagnostic tests for the proposed endotype. Clinical translation requires independent replication, appropriately powered trials, meaningful endpoints, and preservation of essential nutrition. These limitations define the questions the framework is intended to resolve.

## 14. Conclusion

The microbiome cannot be understood fully apart from the chemical environment that constrains it. Metals are distinctive components of that environment because they combine nutritional necessity, catalytic specificity, regulatory influence, and toxic potential. Nutritional immunity demonstrates that controlling their accessibility is integral to host defense. Glutathione and metallothionein connect redox physiology with metal handling, while experimental and clinical studies show that altered metal exposure can change microbial ecology and, in defined settings, disease susceptibility. [1, 2, 6, 23]

A disease-associated microbial pattern may be the biological expression of an upstream chemical disturbance. When that disturbance is causal, an intervention directed only at the microbial endpoint can leave the conditions sustaining disease unexamined. Metal exposure and metal allocation therefore deserve deliberate investigation as potential upstream determinants, not merely inclusion as secondary correlates after a microbial signature has been described. Establishing the pathway requires more than parallel lists of metals and microbes: it requires temporality, accessible-pool measurements, microbial function, host mechanism, and intervention evidence.

This is the rationale for placing metallomics near the foundation of microbiome medicine. The objective is to move from knowing which organisms accompany disease to understanding why their activities become pathogenic, and from modifying a microbial endpoint to correcting the conditions that sustain it. That transition provides a testable basis for more precise prevention and intervention, while preserving the essential distinction between a compelling hypothesis and a clinically established mechanism.

## Table 1. Evidence requirements for a proposed metal-conditioned disease endotype

_This table specifies a proposed research framework, not validated diagnostic criteria. Each stage must be linked to the adjacent stages in the same biologically relevant setting._

| Stage | Causal question | Evidence needed to support the proposed link |
| --- | --- | --- |
| External exposure or endogenous redistribution | What initiates the metal disturbance? | A credible source or redistribution process; exposure timing; separation of intake, absorption, excretion, and disease-related release. |
| Host handling and compartmental availability | Which metal pool reaches the relevant niche? | Elemental identity, relevant chemical species and ligands, spatial location, and a measure of accessible rather than only total metal. |
| Microbial selection or functional change | What changes in the organism or community? | Absolute burden where relevant, strain-level identity, expressed metal-responsive function, and a distinction between competitive expansion and altered activity. |
| Connected host injury | How does the microbial change affect the host? | A defined barrier, inflammatory, metabolic, or tissue-remodeling mechanism; temporal connection; separation from direct metal toxicity. |
| Intervention and mediation | Does changing the proposed driver change the pathway? | Evidence of target engagement, change in the specified intermediate, and downstream benefit that is not explained by co-interventions alone. |
| Clinical expression and feedback | For whom does the pathway matter, and when? | Clinically meaningful outcomes, identification of responsive subgroups, durability, preservation of essential nutrition, and analysis of reverse causation and feedback. |

## Works cited

This is the review’s own bibliography, reproduced as authored. Where a cited work also has a Heavy Metal Index source record, it is cross-linked under Anchor sources below.

1. Zackular JP, Moore JL, Jordan AT, et al. Dietary zinc alters the microbiota and decreases resistance to Clostridium difficile infection. Nature Medicine. 2016;22:1330–1334. [doi.org/10.1038/nm.4174](https://doi.org/10.1038/nm.4174)
2. Jaeggi T, et al. Iron fortification adversely affects the gut microbiome, increases pathogen abundance and induces intestinal inflammation in Kenyan infants. Gut. 2015;64:731–742. [doi.org/10.1136/gutjnl-2014-307720](https://doi.org/10.1136/gutjnl-2014-307720)
3. Lu K, Abo RP, Schlieper KA, et al. Arsenic exposure perturbs the gut microbiome and its metabolic profile in mice: an integrated metagenomics and metabolomics analysis. Environmental Health Perspectives. 2014;122:284–291. [doi.org/10.1289/ehp.1307429](https://doi.org/10.1289/ehp.1307429)
4. Zhang S, Jin Y, Zeng Z, Liu Z, Fu Z. Subchronic exposure of mice to cadmium perturbs their hepatic energy metabolism and gut microbiome. Chemical Research in Toxicology. 2015;28:2000–2009. [doi.org/10.1021/acs.chemrestox.5b00237](https://doi.org/10.1021/acs.chemrestox.5b00237)
5. Hoen AG, et al. Sex-specific associations of infants’ gut microbiome with arsenic exposure in a US population. Scientific Reports. 2018. [doi.org/10.1038/s41598-018-30581-9](https://doi.org/10.1038/s41598-018-30581-9)
6. Corbin BD, et al. Metal chelation and inhibition of bacterial growth in tissue abscesses. Science. 2008;319:962–965. [doi.org/10.1126/science.1152449](https://doi.org/10.1126/science.1152449)
7. Nemeth E, Tuttle MS, Powelson J, et al. Hepcidin regulates cellular iron efflux by binding to ferroportin and inducing its internalization. Science. 2004;306:2090–2093. [doi.org/10.1126/science.1104742](https://doi.org/10.1126/science.1104742)
8. White C, Lee J, Kambe T, Fritsche K, Petris MJ. A role for the ATP7A copper-transporting ATPase in macrophage bactericidal activity. Journal of Biological Chemistry. 2009;284:33949–33956. [doi.org/10.1074/jbc.M109.070201](https://doi.org/10.1074/jbc.M109.070201)
9. van Vliet AHM, et al. Nickel-responsive induction of urease expression in Helicobacter pylori is mediated at the transcriptional level. Infection and Immunity. 2001;69:4891–4897. [doi.org/10.1128/IAI.69.8.4891-4897.2001](https://doi.org/10.1128/IAI.69.8.4891-4897.2001)
10. He MM, Clugston SL, Honek JF, Matthews BW. Determination of the structure of Escherichia coli glyoxalase I suggests a structural basis for differential metal activation. Biochemistry. 2000;39:8719–8727. [doi.org/10.1021/bi000856g](https://doi.org/10.1021/bi000856g)
11. Liu JZ, et al. Zinc sequestration by the neutrophil protein calprotectin enhances Salmonella growth in the inflamed gut. Cell Host & Microbe. 2012;11:227–239. [doi.org/10.1016/j.chom.2012.01.017](https://doi.org/10.1016/j.chom.2012.01.017)
12. Nakashige TG, Zygiel EM, Drennan CL, Nolan EM. Nickel sequestration by the host-defense protein human calprotectin. Journal of the American Chemical Society. 2017;139:8828–8836. [doi.org/10.1021/jacs.7b01212](https://doi.org/10.1021/jacs.7b01212)
13. Van Langendonckt A, Casanas-Roux F, Donnez J. Iron overload in the peritoneal cavity of women with pelvic endometriosis. Fertility and Sterility. 2002;78:712–718. [doi.org/10.1016/S0015-0282(02)03346-0](https://doi.org/10.1016/S0015-0282(02)03346-0)
14. Maret W. Oxidative metal release from metallothionein via zinc-thiol/disulfide interchange. Proceedings of the National Academy of Sciences USA. 1994;91:237–241. [doi.org/10.1073/pnas.91.1.237](https://doi.org/10.1073/pnas.91.1.237)
15. Wegmüller R, Tay F, Zeder C, Brnić M, Hurrell RF. Zinc absorption by young adults from supplemental zinc citrate is comparable with that from zinc gluconate and higher than from zinc oxide. Journal of Nutrition. 2014;144:132–136. [doi.org/10.3945/jn.113.181487](https://doi.org/10.3945/jn.113.181487)
16. Singh PK, Parsek MR, Greenberg EP, Welsh MJ. A component of innate immunity prevents bacterial biofilm development. Nature. 2002;417:552–555. [doi.org/10.1038/417552a](https://doi.org/10.1038/417552a)
17. Flo TH, et al. Lipocalin 2 mediates an innate immune response to bacterial infection by sequestrating iron. Nature. 2004;432:917–921. [doi.org/10.1038/nature03104](https://doi.org/10.1038/nature03104)
18. Coryell M, McAlpine M, Pinkham NV, McDermott TR, Walk ST. The gut microbiome is required for full protection against acute arsenic toxicity in mouse models. Nature Communications. 2018;9:5424. [doi.org/10.1038/s41467-018-07803-9](https://doi.org/10.1038/s41467-018-07803-9)
19. McDevitt CA, et al. A molecular mechanism for bacterial susceptibility to zinc. PLoS Pathogens. 2011;7:e1002357. [doi.org/10.1371/journal.ppat.1002357](https://doi.org/10.1371/journal.ppat.1002357)
20. Macomber L, Imlay JA. The iron-sulfur clusters of dehydratases are primary intracellular targets of copper toxicity. Proceedings of the National Academy of Sciences USA. 2009;106:8344–8349. [doi.org/10.1073/pnas.0812808106](https://doi.org/10.1073/pnas.0812808106)
21. Gregus Z, Varga F. Role of glutathione and hepatic glutathione S-transferase in the biliary excretion of methyl mercury, cadmium and zinc: a study with enzyme inducers and glutathione depletors. Acta Pharmacologica et Toxicologica. 1985;56:398–403. [doi.org/10.1111/j.1600-0773.1985.tb01309.x](https://doi.org/10.1111/j.1600-0773.1985.tb01309.x)
22. Alexander J, Aaseth J, Refsvik T. Excretion of zinc in rat bile: a role of glutathione. Acta Pharmacologica et Toxicologica. 1981;49:190–194. [doi.org/10.1111/j.1600-0773.1981.tb00891.x](https://doi.org/10.1111/j.1600-0773.1981.tb00891.x)
23. Jiang LJ, Maret W, Vallee BL. The glutathione redox couple modulates zinc transfer from metallothionein to zinc-depleted sorbitol dehydrogenase. Proceedings of the National Academy of Sciences USA. 1998;95:3483–3488. [doi.org/10.1073/pnas.95.7.3483](https://doi.org/10.1073/pnas.95.7.3483)
24. Tang W, Stearns RA, Bandiera SM, et al. Studies on cytochrome P-450-mediated bioactivation of diclofenac in rats and in human hepatocytes: identification of glutathione conjugated metabolites. Drug Metabolism and Disposition. 1999;27:365–372. PMID:10064567.
25. Mancias JD, Wang X, Gygi SP, Harper JW, Kimmelman AC. Quantitative proteomics identifies NCOA4 as the cargo receptor mediating ferritinophagy. Nature. 2014;509:105–109. [doi.org/10.1038/nature13148](https://doi.org/10.1038/nature13148)
26. Dixon SJ, Lemberg KM, Lamprecht MR, et al. Ferroptosis: an iron-dependent form of nonapoptotic cell death. Cell. 2012;149:1060–1072. [doi.org/10.1016/j.cell.2012.03.042](https://doi.org/10.1016/j.cell.2012.03.042)
27. Yang WS, SriRamaratnam R, Welsch ME, et al. Regulation of ferroptotic cancer cell death by GPX4. Cell. 2014;156:317–331. [doi.org/10.1016/j.cell.2013.12.010](https://doi.org/10.1016/j.cell.2013.12.010)
28. Olson MA, Grimsrud A, Richards AC, Mulvey MA, Wilson E, Erickson DL. Bile salts regulate zinc uptake and capsule synthesis in a mastitis-associated extraintestinal pathogenic Escherichia coli strain. Infection and Immunity. 2021;89:e00357-21. [doi.org/10.1128/IAI.00357-21](https://doi.org/10.1128/IAI.00357-21)
29. Eybl V, Kotyzova D, Koutensky J. Comparative study of natural antioxidants—curcumin, resveratrol and melatonin—in cadmium-induced oxidative damage in mice. Toxicology. 2006;225:150–156. [doi.org/10.1016/j.tox.2006.05.011](https://doi.org/10.1016/j.tox.2006.05.011)
30. Pal C, Bengtsson-Palme J, Kristiansson E, Larsson DGJ. Co-occurrence of resistance genes to antibiotics, biocides and metals reveals novel insights into their co-selection potential. BMC Genomics. 2015;16:964. [doi.org/10.1186/s12864-015-2153-5](https://doi.org/10.1186/s12864-015-2153-5)
31. Benoit SL, Schmalstig AA, Glushka J, Maier SE, Edison AS, Maier RJ. Nickel chelation therapy as an approach to combat multi-drug resistant enteric pathogens. Scientific Reports. 2019;9:13851. [doi.org/10.1038/s41598-019-50027-0](https://doi.org/10.1038/s41598-019-50027-0)
32. Campanale M, Nucera E, Ojetti V, et al. [[sources/campanale2014-nickel-free-diet-h-pylori-eradication|Nickel free-diet enhances the Helicobacter pylori eradication rate: a pilot study.]] Digestive Diseases and Sciences. 2014;59:1851–1855. [doi.org/10.1007/s10620-014-3060-3](https://doi.org/10.1007/s10620-014-3060-3)
33. Brito BS, Souza FFR, Baptista DM, et al. Low-nickel diet as a strategy in the treatment of Helicobacter pylori infection. Arquivos de Gastroenterologia. 2025;62:e24108. [doi.org/10.1590/S0004-2803.24612024-108](https://doi.org/10.1590/S0004-2803.24612024-108)
34. Vaziri ND, Yuan J, Norris K. Role of urea in intestinal barrier dysfunction and disruption of epithelial tight junction in chronic kidney disease. American Journal of Nephrology. 2013;37:1–6. [doi.org/10.1159/000345969](https://doi.org/10.1159/000345969)
35. Wong J, Piceno YM, DeSantis TZ, Pahl M, Andersen GL, Vaziri ND. Expansion of urease- and uricase-containing, indole- and p-cresol-forming and contraction of short-chain fatty acid-producing intestinal microbiota in ESRD. American Journal of Nephrology. 2014;39:230–237. [doi.org/10.1159/000360010](https://doi.org/10.1159/000360010)
36. ELFIN Trial Investigators Group. Enteral lactoferrin supplementation for very preterm infants: a randomised placebo-controlled trial. Lancet. 2019;393:423–433. [doi.org/10.1016/S0140-6736(18)32221-9](https://doi.org/10.1016/S0140-6736(18)32221-9)
37. Defrère S, Van Langendonckt A, Vaesen S, et al. Iron overload enhances epithelial cell proliferation in endometriotic lesions induced in a murine model. Human Reproduction. 2006;21:2810–2816. [doi.org/10.1093/humrep/del261](https://doi.org/10.1093/humrep/del261)
38. Muraoka A, et al. Fusobacterium infection facilitates the development of endometriosis through the phenotypic transition of endometrial fibroblasts. Science Translational Medicine. 2023;15:eadd1531. [doi.org/10.1126/scitranslmed.add1531](https://doi.org/10.1126/scitranslmed.add1531)
39. Graciano-España MC, Barnhart K, Gonzalez-Monfort M, et al. Fusobacterium nucleatum is not significantly present in eutopic endometrium from patients with minimal-mild and moderate-severe endometriosis. Fertility and Sterility. 2025;124:1071–1081. [doi.org/10.1016/j.fertnstert.2025.06.035](https://doi.org/10.1016/j.fertnstert.2025.06.035)
40. Hall MS, Talge NM, Upson K. Urinary cadmium and endometriosis prevalence in a US nationally representative sample: results from NHANES 1999–2006. Human Reproduction. 2023;38:1835–1842. [doi.org/10.1093/humrep/dead117](https://doi.org/10.1093/humrep/dead117)
41. Pollack AZ, Buck Louis GM, Chen Z, et al. Trace elements and endometriosis: the ENDO Study. Reproductive Toxicology. 2013;42:41–48. [doi.org/10.1016/j.reprotox.2013.05.009](https://doi.org/10.1016/j.reprotox.2013.05.009)
42. LoGuidice A, Wallace BD, Bendel L, Redinbo MR, Boelsterli UA. Pharmacologic targeting of bacterial β-glucuronidase alleviates nonsteroidal anti-inflammatory drug-induced enteropathy in mice. Journal of Pharmacology and Experimental Therapeutics. 2012;341:447–454. [doi.org/10.1124/jpet.111.191122](https://doi.org/10.1124/jpet.111.191122)
43. Schubert C, et al. Oral zinc aspartate treats experimental autoimmune encephalomyelitis. Biometals. 2014;27:1249–1262. [doi.org/10.1007/s10534-014-9786-8](https://doi.org/10.1007/s10534-014-9786-8)
44. Bjornevik K, et al. Longitudinal analysis reveals high prevalence of Epstein-Barr virus associated with multiple sclerosis. Science. 2022;375:296–301. [doi.org/10.1126/science.abj8222](https://doi.org/10.1126/science.abj8222)
45. Manzoni P, et al. Bovine lactoferrin supplementation for prevention of late-onset sepsis in very low-birth-weight neonates: a randomized trial. JAMA. 2009;302:1421–1428. [doi.org/10.1001/jama.2009.1403](https://doi.org/10.1001/jama.2009.1403)
46. Ariff S, Soofi SB, Jiwani U, et al. Evaluation of bovine lactoferrin for prevention of late-onset sepsis in low-birth-weight infants: a double-blind randomized controlled trial. Nutrients. 2025;17:1774. [doi.org/10.3390/nu17111774](https://doi.org/10.3390/nu17111774)
47. Ikem A, Nwankwoala A, Odueyungbo S, Nyavor K, Egiebor N. Levels of 26 elements in infant formula from USA, UK, and Nigeria by microwave digestion and ICP-OES. Food Chemistry. 2002;77:439–447. [doi.org/10.1016/S0308-8146(01)00378-8](https://doi.org/10.1016/S0308-8146(01)00378-8)
48. Höpfner T, Wollenberg M, Jäger A, et al. [[sources/hopfner2025-infant-formula-dietary-exposure-germany|The contribution of infant formula to the food survey-based dietary exposure of nine selected elements.]] Journal of Environmental Exposure Assessment. 2025;4:9. [doi.org/10.20517/jeea.2024.45](https://doi.org/10.20517/jeea.2024.45)
49. Schwartz DJ, Shalon N, Wardenburg K, et al. Gut pathogen colonization precedes bloodstream infection in the neonatal intensive care unit. Science Translational Medicine. 2023;15:eadg5562. [doi.org/10.1126/scitranslmed.adg5562](https://doi.org/10.1126/scitranslmed.adg5562)
50. Winter SE, Winter MG, Xavier MN, et al. Host-derived nitrate boosts growth of E. coli in the inflamed gut. Science. 2013;339:708–711. [doi.org/10.1126/science.1232467](https://doi.org/10.1126/science.1232467)

## Anchor sources

These are the Heavy Metal Index corpus records that carry the evidence this framework rests on for the metal-microbiome intersection. They are a subset of the full bibliography above: the works that also exist as source pages in this wiki, each with its ingest receipt and the file hash of the document it was built from.

- [[sources/coryell2019-gut-microbiome-arsenic-toxicity]] — Review of the gut microbiome's influence on arsenic toxicity and biotransformation; supports the framework's claim that the microbiome can protect against, not only transmit, metal effects (sections 5 and 12).
- [[sources/hoen2018-infant-arsenic-gut-microbiome]] — Sex-specific associations between infant arsenic exposure and gut community composition in a United States cohort; the human-association evidence discussed in section 5.
- [[sources/soto-ocana2024-metal-availability-early-life-microbiome]] — Metal availability shapes early-life microbial ecology and community succession; a developmental model of the exposure-to-microbial-selection step central to sections 10 and 11.
- [[sources/coe2023-gut-microbiome-methylmercury-demethylation]] — Gut-microbiome methylmercury demethylation and elimination in humans and gnotobiotic mice; direct evidence that microbial function alters the disposition of a toxic metal (sections 5 and 12).

## WikiBiome crosswalk

This page is the foundational framework prepared for [WikiBiome](https://wikibiome.com) and is structured for federation there with minimal edits under the crosswalk anchor `metals-microbiome-disease-pathogenesis`. It lives on the Heavy Metal Index because its subject is the heavy-metals-and-microbiome intersection, which this wiki hosts directly; WikiBiome remains the canonical home for microbiome content, and the citable record of this work is the DOI minted here. The reciprocal metals-side context (dietary exposure, tolerable-intake reference points, and certification relevance for the individual metals named above) stays on the corresponding [[metals/nickel]], [[metals/zinc]], [[metals/iron]], [[metals/arsenic-inorganic]], and [[metals/cadmium]] pages and on [[microbiome/nickel-microbial-pathogenesis]].

## How this page was published

This is an authored critical narrative review, distinct in kind from the corpus-emergent synthesis findings pages that promote from a cluster of anchor sources. It was prepared as the foundational framework for WikiBiome and is published here, at the metals-microbiome intersection, as the canonical citable record, with a DOI minted on the Heavy Metal Index prefix. The version published is the author-review version dated 8 September 2026; under the Heavy Metal Index model it is a preprint until external review is recorded below. Its bibliography is the review's own fifty references; the works not yet held as Heavy Metal Index source records are queued for corpus ingestion separately and are not a precondition for citation.

<!-- BEGIN: hmi-peer-review -->
## Peer review state

This synthesis claim has not yet been evaluated by external reviewers. Verdicts will be added here as named domain experts (listed at [[curators]]) complete their review. The verdict log is `data/peer-review/<reviewer-slug>.jsonl` and is part of the public corpus.

| Reviewer | Verdict | Review date | Notes |
| --- | --- | --- | --- |
| _no reviews yet_ | | | |

The Heavy Metal Index publishes synthesis claims as preprints — before external review completes — with the review state visibly tracked. Until at least one external verdict is recorded below, a synthesis page is a preprint, not a peer-reviewed work. External review accumulates over time, and the credibility of the claim is partly the cumulative result of that visible review.
<!-- END: hmi-peer-review -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Anchor sources](#anchor-sources) for this page's source inventory. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/campanale2014-nickel-free-diet-h-pylori-eradication|Nickel Free-Diet Enhances the Helicobacter pylori Eradication Rate: A Pilot Study]]<span class="hmi-ref-meta">M. Campanale, E. Nucera, V. Ojetti, V. Cesario, T. A. Di Rienzo, G. D'Angelo, et al. · Digestive Diseases and Sciences 59(8):1851-1855 · 2014 · [doi.org/10.1007/s10620-014-3060-3](https://doi.org/10.1007/s10620-014-3060-3)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/hopfner2025-infant-formula-dietary-exposure-germany|The contribution of infant formula to the food survey-based dietary exposure of nine selected elements]]<span class="hmi-ref-meta">Tobias Höpfner, Melanie Wollenberg, Anna Jäger, Mandy Stadion, Christian Jung, Anna-Lena Klook, et al. · Journal of Environmental Exposure Assessment · 2025 · [doi.org/10.20517/jeea.2024.45](https://doi.org/10.20517/jeea.2024.45)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/coryell2019-gut-microbiome-arsenic-toxicity|The Human Gut Microbiome's Influence on Arsenic Toxicity]]<span class="hmi-ref-meta">Michael Coryell, Barbara A. Roggenbeck, and Seth T. Walk · Current Pharmacology Reports, Vol. 5, No. 6, pp. 491-504 · 2019 · [doi.org/10.1007/s40495-019-00206-4](https://doi.org/10.1007/s40495-019-00206-4)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/hoen2018-infant-arsenic-gut-microbiome|Sex-specific associations of infants' gut microbiome with arsenic exposure]]<span class="hmi-ref-meta">Anne G. Hoen, Juliette C. Madan, Zhigang Li, Modupe Coker, Sara N. Lundgren, Hilary G. Morrison, et al. · Scientific Reports · 2018 · [doi.org/10.1038/s41598-018-30581-9](https://doi.org/10.1038/s41598-018-30581-9)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/soto-ocana2024-metal-availability-early-life-microbiome|Metal availability shapes early life microbial ecology and community succession]]<span class="hmi-ref-meta">Joshua Soto Ocaña, Elliot S. Friedman, Orlaith Keenan, Nile U. Bayard, Eileen Ford, Ceylan Tanes, et al. · mBio 15(7):e00854-24 · 2024 · [doi.org/10.1128/mbio.01534-24](https://doi.org/10.1128/mbio.01534-24)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/coe2023-gut-microbiome-methylmercury-demethylation|Assessing the Role of the Gut Microbiome in Methylmercury Demethylation and Elimination in Humans and Gnotobiotic Mice]]<span class="hmi-ref-meta">Genevieve L. Coe, Ian N. Krout, Mason Munro-Ehrlich, Catherine R. Beamish, Daria Vorojeikina, Daniel R. Colman, et al. · Archives of Toxicology, Vol. 97, pp. 2399-2418 · 2023 · [doi.org/10.1007/s00204-023-03548-7](https://doi.org/10.1007/s00204-023-03548-7)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b9181536f](https://github.com/paleofoundation/heavymetalindex/commit/b9181536f) | 2026-09-09 | minor | Narrative text revised |
| [66cd061b9](https://github.com/paleofoundation/heavymetalindex/commit/66cd061b9) | 2026-09-08 | major | 4 sources added; 34 sections added; narrative text revised |
<!-- END: hmi-page-history -->
